// ================================================================
// Fauna — Pufflings update loop
// ================================================================

import { WORLD_R } from '../../constants.js';
import { getGroundY } from '../../world/terrain.js';
import { getLocalGlow, isRestored } from '../../systems/dimming.js';
import { getAttunement, getAttunementTarget, getPlayerFrequency } from '../../systems/attunement.js';
import { isLocked, getLockType } from '../../systems/spiritHum.js';
import { emit, Events } from '../../kernel/eventBus.js';
import { separation, cohesion, avoidObstacles } from '../../systems/ai/steering.js';
import { player, playerIdleTime } from '../../core/player.js';
import { keys, touchSprint } from '../../core/input.js';
import { bioGlow, phase as dayPhase } from '../../systems/dayNightCycle.js';
import { isStorming } from '../../systems/weather.js';
import { orbBoost, humResonanceType, humResonanceStr, echoTimer, attuneFlashTimer, attuneFlashType } from '../../state/gameState.js';
import { puffs, deers, orbs } from '../../state/entityStore.js';
import { queryNearTrees } from '../../utils/spatialHash.js';
import { playCreatureSound, playPufflingSinging, playPufflingVocal } from '../../systems/audio.js';
import { triggerPufflingChat } from '../../systems/pufflingChat.js';

export function updatePuffs(dt, t) {
  const sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;

  const puffSpeedMult = dayPhase === 'DAWN' ? 0.6 : (dayPhase === 'NIGHT' ? 1.3 : 1.0);
  const puffIdleMult = dayPhase === 'DAWN' ? 2.0 : (dayPhase === 'NIGHT' ? 0.6 : 1.0);
  let nearestDist2 = Infinity;
  let nearestPos = { x: 0, z: 0 };
  const curAttune = getAttunement();

  for (let i = 0; i < puffs.length; i++) {
    const p = puffs[i], g = p.group;
    const px = g.position.x, pz = g.position.z;
    const ddx = px - player.pos.x, ddz = pz - player.pos.z;
    const pDist2 = ddx * ddx + ddz * ddz;

    if (pDist2 > 1600) { g.visible = false; continue; }
    g.visible = true;

    if (pDist2 < nearestDist2) {
      nearestDist2 = pDist2;
      nearestPos.x = px;
      nearestPos.y = g.position.y;
      nearestPos.z = pz;
    }

    // Startle check
    if (p.state !== 'startled' && p.state !== 'following' && p.state !== 'huddle' && p.state !== 'syncing') {
      const startleR = sprinting ? 3.5 : 2.0;
      let startled = pDist2 < startleR * startleR;
      if (!startled) {
        for (let di = 0; di < deers.length; di++) {
          if (deers[di].state !== 'flee') continue;
          const deerDx = deers[di].group.position.x - px, deerDz = deers[di].group.position.z - pz;
          if (deerDx * deerDx + deerDz * deerDz < 25) { startled = true; break; }
        }
      }
      if (startled) {
        p.state = 'startled'; p._scaredT = 0.6 + Math.random() * 0.5;
        p.wanderAng = Math.atan2(ddx, ddz); p.hopTimer = 0;
        playCreatureSound('puff', { x: px, z: pz }, player.pos);
        emit(Events.CREATURE_SOUND, { type: 'puff', position: { x: px, z: pz }, playerPos: player.pos });
      }
    }

    // Huddle in storms
    if (isStorming && p.state !== 'startled' && p.state !== 'huddle') {
      let closest = Infinity, closestIdx = -1;
      for (let j = 0; j < puffs.length; j++) {
        if (j === i) continue;
        const odx = puffs[j].group.position.x - px, odz = puffs[j].group.position.z - pz;
        const od2 = odx * odx + odz * odz;
        if (od2 < closest) { closest = od2; closestIdx = j; }
      }
      if (closestIdx >= 0 && closest > 1) {
        p.state = 'huddle'; p._huddleTarget = closestIdx;
      }
    }

    // Following
    if (playerIdleTime > 3 && pDist2 < 225 && p.state === 'idle' && Math.random() < 0.004) {
      p.state = 'following'; p._followT = 10 + Math.random() * 10;
    }

    // Syncing
    const _puffLocked = isLocked() && getLockType() === 'puff';
    if (_puffLocked && pDist2 < 900 &&
        (p.state === 'idle' || p.state === 'hop' || p.state === 'following')) {
      p.state = 'syncing';
      p._syncTimer = 0.15 * 1.8; // start at hop phase for immediate visual feedback
      if (p.bodyMat) p.bodyMat.emissiveIntensity = 3.0;
      if (p.crownMat) p.crownMat.emissiveIntensity = 2.0;
    }
    if (p.state === 'syncing' && (!_puffLocked || pDist2 > 1225)) {
      p.state = 'idle'; p.idleTimer = 1.5 + Math.random() * 2;
      g.position.y = p._baseY; p.shell.scale.set(1, 1, 1);
      if (p.bodyMat) p.bodyMat.emissiveIntensity = 0.5;
    }

    // Terrain-relative base Y
    const pdx2 = px - p._lastTX, pdz2 = pz - p._lastTZ;
    if (pdx2 * pdx2 + pdz2 * pdz2 > 0.02) {
      p._targetY = getGroundY(px, pz);
      p._lastTX = px; p._lastTZ = pz;
    }
    if (p._targetY === undefined) p._targetY = p._baseY;
    p._baseY += (p._targetY - p._baseY) * Math.min(dt * 14, 1);

    // Flocking
    const puffPos = { x: px, z: pz };
    const puffNeighbors = [];
    for (let j = 0; j < puffs.length; j++) {
      if (j === i) continue;
      const ox = puffs[j].group.position.x, oz = puffs[j].group.position.z;
      const d2 = (ox - px) * (ox - px) + (oz - pz) * (oz - pz);
      if (d2 < 100) puffNeighbors.push({ x: ox, z: oz });
    }
    const sep = separation(puffPos, puffNeighbors, 1.5);
    const coh = puffNeighbors.length > 0 ? cohesion(puffPos, puffNeighbors) : { x: 0, z: 0 };
    const flockX = sep.x * 2.0 + coh.x * 0.3;
    const flockZ = sep.z * 2.0 + coh.z * 0.3;
    const flockMag = Math.sqrt(flockX * flockX + flockZ * flockZ);

    switch (p.state) {
      case 'idle': {
        p.idleTimer -= dt;
        g.position.y = p._baseY + Math.sin(t * 2 + p.phase) * 0.02;
        g.rotation.y += Math.sin(t * 0.5 + p.phase) * dt * 0.3;
        if (puffNeighbors.length > 0) {
          g.position.x += (sep.x * 0.8 + coh.x * 0.05) * dt;
          g.position.z += (sep.z * 0.8 + coh.z * 0.05) * dt;
        }
        const _puffJumpBoost = (!player.onGround && pDist2 < 100) ? 8 : 1;
        if (Math.random() < 0.0004 * _puffJumpBoost) {
          const restored = isRestored(px, pz);
          playPufflingSinging({ x: px, z: pz }, player.pos, restored, curAttune);
        }
        if (pDist2 < 64 && Math.random() < 0.0006) {
          const restored = isRestored(px, pz);
          let nearOrb = false;
          for (let oi = 0; oi < orbs.length; oi++) {
            if (orbs[oi].found) continue;
            const odx = px - orbs[oi].x, odz = pz - orbs[oi].z;
            if (odx * odx + odz * odz < 400) { nearOrb = true; break; }
          }
          const hasFreq = getPlayerFrequency() !== null;
          const msg = triggerPufflingChat(g, restored, nearOrb, curAttune, hasFreq);
          if (msg) playPufflingVocal(msg, { x: px, z: pz }, player.pos);
        }
        if (p.idleTimer <= 0) {
          const flockAng = flockMag > 0.2 ? Math.atan2(flockX, flockZ) : 0;
          p.state = 'hop'; p.wanderAng += (Math.random() - 0.5) * 1.5 + flockAng * 0.3; p.hopTimer = 0;
          const _puffNear = queryNearTrees(px, pz, 4);
          const avF = avoidObstacles({ x: px, z: pz }, p.wanderAng, _puffNear.items, 2, 0.8, _puffNear.length);
          if (avF.x * avF.x + avF.z * avF.z > 0.01) {
            p.wanderAng += Math.atan2(avF.z, avF.x) * 0.5;
          }
        }
        break;
      }
      case 'hop': {
        p.hopTimer += dt;
        const hopDur = 1.2;
        const frac = p.hopTimer / hopDur;
        if (frac >= 1.0) {
          p.state = 'idle'; p.idleTimer = (1.5 + Math.random() * 3) * puffIdleMult; g.position.y = p._baseY;
          p.shell.scale.set(1, 1, 1);
        } else {
          g.position.y = p._baseY + Math.sin(frac * Math.PI) * 0.3;
          g.position.x += Math.sin(p.wanderAng) * p.speed * puffSpeedMult * dt;
          g.position.z += Math.cos(p.wanderAng) * p.speed * puffSpeedMult * dt;
          const sq = 1.0 - Math.sin(frac * Math.PI) * 0.15;
          const st = 1.0 + Math.sin(frac * Math.PI) * 0.2;
          p.shell.scale.set(sq, st, sq);
          g.rotation.y = p.wanderAng;
        }
        break;
      }
      case 'startled': {
        p._scaredT -= dt;
        p.hopTimer += dt * 1.5;
        const frac = Math.min(p.hopTimer / 0.8, 1);
        g.position.y = p._baseY + Math.sin(frac * Math.PI) * 0.5;
        g.position.x += Math.sin(p.wanderAng) * p.speed * 2 * dt + sep.x * 0.5 * dt;
        g.position.z += Math.cos(p.wanderAng) * p.speed * 2 * dt + sep.z * 0.5 * dt;
        p.shell.scale.set(0.85, 1.3, 0.85);
        if (p._scaredT <= 0) {
          p.state = 'idle'; p.idleTimer = 3 + Math.random() * 3;
          g.position.y = p._baseY; p.shell.scale.set(1, 1, 1);
        }
        break;
      }
      case 'following': {
        p._followT -= dt;
        if (pDist2 > 225 || playerIdleTime < 3 || p._followT <= 0) {
          p.state = 'idle'; p.idleTimer = 2; break;
        }
        p.wanderAng = Math.atan2(player.pos.x - px, player.pos.z - pz);
        if (pDist2 > 9) {
          p.hopTimer += dt;
          const frac = (p.hopTimer % 1.5) / 1.5;
          g.position.y = p._baseY + Math.sin(frac * Math.PI) * 0.2;
          g.position.x += Math.sin(p.wanderAng) * p.speed * 0.4 * dt;
          g.position.z += Math.cos(p.wanderAng) * p.speed * 0.4 * dt;
        } else {
          g.position.y = p._baseY + Math.sin(t * 3 + p.phase) * 0.03;
        }
        const _followJumpBoost = (!player.onGround && pDist2 < 100) ? 5 : 1;
        if (Math.random() < 0.001 * _followJumpBoost) {
          playPufflingSinging({ x: px, z: pz }, player.pos, true, curAttune);
        }
        if (pDist2 < 36 && Math.random() < 0.001) {
          const restored = isRestored(px, pz);
          let nearOrb = false;
          for (let oi = 0; oi < orbs.length; oi++) {
            if (orbs[oi].found) continue;
            const odx = px - orbs[oi].x, odz = pz - orbs[oi].z;
            if (odx * odx + odz * odz < 400) { nearOrb = true; break; }
          }
          const hasFreq = getPlayerFrequency() !== null;
          const msg = triggerPufflingChat(g, restored, nearOrb, curAttune, hasFreq);
          if (msg) playPufflingVocal(msg, { x: px, z: pz }, player.pos);
        }
        if (p.ears) {
          const toPlayerAng = Math.atan2(player.pos.x - px, player.pos.z - pz);
          const relAng = toPlayerAng - g.rotation.y;
          for (let ei = 0; ei < p.ears.length; ei++) {
            const ear = p.ears[ei];
            ear.mesh.rotation.z = ear.baseRotZ + relAng * 0.15 * ear.side;
          }
        }
        g.rotation.y = p.wanderAng;
        break;
      }
      case 'huddle': {
        if (!isStorming) { p.state = 'idle'; p.idleTimer = 2; break; }
        const tgt = puffs[p._huddleTarget];
        if (tgt) {
          const hdx = tgt.group.position.x - px, hdz = tgt.group.position.z - pz;
          const hd = Math.sqrt(hdx * hdx + hdz * hdz);
          if (hd > 0.5) {
            g.position.x += (hdx / hd) * p.speed * 0.5 * dt;
            g.position.z += (hdz / hd) * p.speed * 0.5 * dt;
          }
        }
        g.rotation.z = Math.sin(t * 8) * 0.05;
        g.position.y = p._baseY;
        break;
      }
      case 'syncing': {
        const SYNC_PERIOD = 1.8;
        p._syncTimer += dt;
        const syncPhase = (p._syncTimer % SYNC_PERIOD) / SYNC_PERIOD;
        g.rotation.y = Math.atan2(player.pos.x - px, player.pos.z - pz);
        if (syncPhase > 0.15 && syncPhase < 0.75) {
          const hopFrac = (syncPhase - 0.15) / 0.6;
          const hopH = 0.35 + curAttune * 0.25;
          g.position.y = p._baseY + Math.sin(hopFrac * Math.PI) * hopH;
          const sq = 1.0 - Math.sin(hopFrac * Math.PI) * 0.18;
          const st = 1.0 + Math.sin(hopFrac * Math.PI) * 0.25;
          p.shell.scale.set(sq, st, sq);
        } else {
          g.position.y = p._baseY;
          const crouchFrac = syncPhase < 0.15 ? syncPhase / 0.15 : (syncPhase - 0.75) / 0.25;
          p.shell.scale.set(1.0 + crouchFrac * 0.08, 1.0 - crouchFrac * 0.1, 1.0 + crouchFrac * 0.08);
        }
        if (p.bodyMat) {
          const glowTarget = 0.5 + curAttune * 2.5;
          p.bodyMat.emissiveIntensity += (glowTarget - p.bodyMat.emissiveIntensity) * Math.min(dt * 4, 1);
        }
        if (p.crownMat) {
          p.crownMat.emissiveIntensity = (0.4 + curAttune * 2.0) * getLocalGlow(px, pz, bioGlow * orbBoost);
        }
        break;
      }
    }

    // Tree collision
    if (p.state !== 'idle') {
      const _ppx = g.position.x, _ppz = g.position.z;
      const _puffTreeQ = queryNearTrees(_ppx, _ppz, 3);
      for (let ti = 0; ti < _puffTreeQ.length; ti++) {
        const tr = _puffTreeQ.items[ti];
        const tdx = _ppx - tr.x, tdz = _ppz - tr.z;
        const td2 = tdx * tdx + tdz * tdz;
        if (td2 > 9) continue;
        const treeR = (tr.scale || 1) * 0.8 + 0.3;
        if (td2 < treeR * treeR && td2 > 0.001) {
          const td = Math.sqrt(td2);
          const push = (treeR - td) / td;
          g.position.x += tdx * push;
          g.position.z += tdz * push;
        }
      }
    }

    // Puffling-puffling collision
    for (let j = i + 1; j < puffs.length; j++) {
      const og = puffs[j].group;
      const odx = g.position.x - og.position.x, odz = g.position.z - og.position.z;
      const od2 = odx * odx + odz * odz;
      const minR = 0.6;
      if (od2 < minR * minR && od2 > 0.001) {
        const od = Math.sqrt(od2);
        const push = (minR - od) * 0.5 / od;
        g.position.x += odx * push;
        g.position.z += odz * push;
        og.position.x -= odx * push;
        og.position.z -= odz * push;
      }
    }

    // Eye blink
    p._blinkTimer -= dt;
    if (p._blinkTimer <= 0) {
      if (p._blinkState === 0) {
        for (let ei = 0; ei < p.eyes.length; ei++) p.eyes[ei].scale.y = 0.1;
        p._blinkState = 1; p._blinkTimer = 0.08 + Math.random() * 0.06;
      } else {
        for (let ei = 0; ei < p.eyes.length; ei++) p.eyes[ei].scale.y = 1.0;
        p._blinkState = 0; p._blinkTimer = 2 + Math.random() * 5;
      }
    }
    // Ear wiggle
    for (let ei = 0; ei < p.ears.length; ei++) {
      const ear = p.ears[ei];
      ear.mesh.rotation.z = ear.baseRotZ + Math.sin(t * 3.5 + ear.side * 1.2 + p.phase) * 0.08;
    }
    // Tail pom bounce
    p.tail.position.y = 0.38 + Math.sin(t * 4 + p.phase) * 0.015;

    // Sparkle motes
    const attuneGlowMult = pDist2 < 64 ? (1.0 + curAttune * 0.8) : 1.0;
    const puffResMult = (humResonanceType === 'puff' && pDist2 < 400) ? (1.0 + humResonanceStr * 1.5) : 1.0;
    const attuneSpeedMult = pDist2 < 64 ? (1.0 + curAttune * 2.0) : 1.0;
    if (p.sparkles) {
      for (let si = 0; si < p.sparkles.length; si++) {
        const sp = p.sparkles[si];
        const sa = t * (2 + si * 0.7) * attuneSpeedMult + sp.phase;
        sp.mesh.position.set(
          Math.cos(sa) * sp.orbitR,
          0.5 + Math.sin(sa * 1.3) * 0.1,
          Math.sin(sa) * sp.orbitR
        );
        sp.mat.opacity = (0.4 + Math.sin(t * 4 + sp.phase) * 0.3) * Math.max(getLocalGlow(g.position.x, g.position.z, bioGlow * orbBoost), 0.3) * attuneGlowMult;
      }
    }
    // Crown glow
    if (p.crownMat && p.state !== 'syncing') {
      p.crownMat.emissiveIntensity = (0.4 + Math.sin(t * 1.5 + p.phase) * 0.3) * getLocalGlow(g.position.x, g.position.z, bioGlow * orbBoost) * attuneGlowMult * puffResMult;
    }
    // Body emissive
    if (p.state !== 'syncing') {
      if (pDist2 < 64 && curAttune > 0.1 && p.bodyMat) {
        p.bodyMat.emissiveIntensity = 0.5 + curAttune * 0.4 + (attuneFlashTimer > 0 ? attuneFlashTimer * 3.0 : 0);
      } else if (p.bodyMat) {
        p.bodyMat.emissiveIntensity = 0.5;
      }
      if (echoTimer > 0 && attuneFlashType !== 'puff' && pDist2 < 900 && p.bodyMat) p.bodyMat.emissiveIntensity += echoTimer * 0.35;
    }
    // Ground glow disc
    if (p.glowMat) {
      const glowBase = 0.15 + Math.sin(t * 2 + p.phase) * 0.06;
      const glowAttune = pDist2 < 64 ? curAttune * 0.2 : 0;
      const syncGlow = p.state === 'syncing' ? curAttune * 0.5 : 0;
      const localG = getLocalGlow(px, pz, bioGlow * orbBoost);
      p.glowMat.opacity = Math.min(1.0, (glowBase + glowAttune + syncGlow) * Math.max(localG, 0.3));
    }

    // World bounds
    const wd2 = g.position.x * g.position.x + g.position.z * g.position.z;
    if (wd2 > (WORLD_R * 0.85) * (WORLD_R * 0.85)) p.wanderAng += Math.PI;
  }

  return { nearestDist2, nearestPos };
}

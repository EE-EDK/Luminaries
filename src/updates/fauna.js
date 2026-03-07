// ================================================================
// Fauna update loops — jellies, pufflings, deer, moths
// ================================================================
// Extracted from main.js. Each function takes (dt, t, ctx) where ctx
// is a mutable context object containing shared state from main.js.

import { WORLD_R, DEER_FLEE_R, DEER_FLEE_SPEED_MULT, C } from '../constants.js';
import { getGroundY } from '../world/terrain.js';
import { getLocalGlow, isRestored } from '../systems/dimming.js';
import { getAttunement, getAttunementTarget, getPlayerFrequency } from '../systems/attunement.js';
import { isLocked, getLockType } from '../systems/spiritHum.js';
import { canSee, canHear } from '../systems/ai/senses.js';
import { separation, cohesion, worldBounds, avoidObstacles } from '../systems/ai/steering.js';

// ================================================================
// Jellies
// ================================================================
export function updateJellies(jellies, dt, t, ctx) {
  const {
    player, dayPhase, isStorming, bioGlow, _orbBoost,
    _humResonanceType, _humResonanceStr, _echoTimer, _attuneFlashType,
    playerIdleTime, playCreatureSound
  } = ctx;

  // Batch 2 Item 1: Nearby jellies sync glow phase over time
  for (let i = 0; i < jellies.length; i++) {
    const j = jellies[i], g = j.group;
    const jx = g.position.x, jz = g.position.z;
    if (j._syncPhase === undefined) j._syncPhase = j.phase;

    let syncSum = 0, syncCount = 0;
    for (let k = 0; k < jellies.length; k++) {
      if (k === i) continue;
      const o = jellies[k];
      const odx = o.group.position.x - jx, odz = o.group.position.z - jz;
      if (odx * odx + odz * odz < 225) {
        syncSum += o._syncPhase || o.phase;
        syncCount++;
      }
    }
    if (syncCount > 0) {
      const avgPhase = syncSum / syncCount;
      j._syncPhase += (avgPhase - j._syncPhase) * dt * 0.4;
    }
  }

  // Batch 2 Item 4: Jelly day/night
  const jellyAltMod = dayPhase === 'DEEP_NIGHT' ? 2.0 : (dayPhase === 'DAWN' ? -1.5 : 0);

  let nearestDist2 = Infinity;
  let nearestPos = { x: 0, z: 0 };

  for (let i = 0; i < jellies.length; i++) {
    const _jg = jellies[i].group;
    const _jdx = _jg.position.x - player.pos.x, _jdz = _jg.position.z - player.pos.z;
    const _jdy = _jg.position.y - player.pos.y;
    if (_jdx * _jdx + _jdy * _jdy + _jdz * _jdz > 3025) { _jg.visible = false; continue; }
    _jg.visible = true;
    const j = jellies[i], g = j.group;
    const jx = g.position.x, jz = g.position.z;
    const jFloatY = j.floatY + jellyAltMod;

    const _jhd2 = _jdx * _jdx + _jdz * _jdz;
    if (_jhd2 < nearestDist2) {
      nearestDist2 = _jhd2;
      nearestPos.x = jx;
      nearestPos.z = jz;
    }

    // State transitions
    j._stT -= dt;
    if (j._stT <= 0) {
      if (isStorming) {
        j._state = 'display'; j._stT = 10 + Math.random() * 15;
      } else {
        const r = Math.random();
        if (r < 0.5) { j._state = 'drift'; j._stT = 20 + Math.random() * 30; }
        else if (r < 0.75) { j._state = 'pulse'; j._stT = 8 + Math.random() * 12; }
        else {
          j._state = 'migrate'; j._migrateAng = Math.random() * 6.28;
          j._stT = 15 + Math.random() * 20;
        }
      }
    }
    if (isStorming && j._state !== 'display') {
      j._state = 'display'; j._stT = 10;
      playCreatureSound('jelly', { x: jx, z: jz }, player.pos);
    }

    switch (j._state) {
      case 'drift': {
        j.driftAng += dt * 0.15;
        const radius = 8 + Math.sin(t * 0.1 + j.phase) * 4;
        const tx = j.homeX + Math.cos(j.driftAng) * radius;
        const tz = j.homeZ + Math.sin(j.driftAng) * radius;
        g.position.x += (tx - jx) * dt * 0.3;
        g.position.z += (tz - jz) * dt * 0.3;
        g.position.y = jFloatY + Math.sin(t * j.wobble + j.phase) * 1.5;
        break;
      }
      case 'pulse': {
        j.driftAng += dt * 0.08;
        g.position.x += Math.cos(j.driftAng) * dt * 0.3;
        g.position.z += Math.sin(j.driftAng) * dt * 0.3;
        g.position.y = jFloatY + Math.sin(t * j.wobble + j.phase) * 1.0;
        j._pulseSync = Math.sin(t * 2.0 + j._syncPhase) * 0.5 + 0.5;
        break;
      }
      case 'migrate': {
        g.position.x += Math.cos(j._migrateAng) * dt * 1.0;
        g.position.z += Math.sin(j._migrateAng) * dt * 1.0;
        g.position.y = jFloatY + Math.sin(t * j.wobble + j.phase) * 0.8;
        const md2 = g.position.x * g.position.x + g.position.z * g.position.z;
        if (md2 > (WORLD_R * 0.8) * (WORLD_R * 0.8)) j._migrateAng += Math.PI;
        break;
      }
      case 'display': {
        j.driftAng += dt * 0.4;
        g.position.x += Math.cos(j.driftAng) * dt * 0.8;
        g.position.z += Math.sin(j.driftAng) * dt * 0.8;
        g.position.y = jFloatY + Math.sin(t * 2.0 + j.phase) * 2.0;
        j._syncPhase += (0 - j._syncPhase) * dt * 2.0;
        break;
      }
    }

    // Curiosity: jelly drifts toward idle player
    if (playerIdleTime > 5 && _jhd2 < 100 && j._state !== 'display') {
      const driftFrac = Math.min((playerIdleTime - 5) / 5, 0.4);
      g.position.x += (player.pos.x - g.position.x) * driftFrac * dt * 0.3;
      g.position.z += (player.pos.z - g.position.z) * driftFrac * dt * 0.3;
    }

    // Terrain floor
    const jellyGroundY = getGroundY(g.position.x, g.position.z);
    const jellyMinY = jellyGroundY + 3;
    if (g.position.y < jellyMinY) {
      g.position.y += (jellyMinY - g.position.y) * Math.min(1, dt * 4);
    }

    // Periodic hum sound
    if (j._state === 'pulse' && Math.random() < 0.003) {
      playCreatureSound('jelly', { x: jx, z: jz }, player.pos);
    }

    // Visual updates
    const syncP = j._syncPhase || j.phase;
    const basePulse = Math.sin(t * 1.2 + syncP) * 0.5 + 0.5;
    let emissiveMult = 1.0, opacityBoost = 0;
    if (j._state === 'pulse') {
      emissiveMult = 1.0 + j._pulseSync * 1.5;
      opacityBoost = j._pulseSync * 0.15;
    } else if (j._state === 'display') {
      const stormPulse = Math.sin(t * 4) * 0.5 + 0.5;
      emissiveMult = 1.5 + stormPulse * 1.2;
      opacityBoost = 0.15 + stormPulse * 0.1;
    } else if (j._state === 'drift') {
      emissiveMult = 1.0 + basePulse * 0.3;
    }

    const jellyAttuneTarget = getAttunementTarget();
    const jellyAttuneMult = (jellyAttuneTarget === 'jelly' && _jhd2 < 36) ? (1.0 + getAttunement() * 1.2) : 1.0;
    const jellyResMult = (_humResonanceType === 'jelly' && _jhd2 < 400) ? (1.0 + _humResonanceStr * 1.5) : 1.0;
    j.bellMat.emissiveIntensity = (0.4 + basePulse * 0.8) * getLocalGlow(g.position.x, g.position.z, bioGlow * _orbBoost) * emissiveMult * jellyAttuneMult * jellyResMult;
    if (_echoTimer > 0 && _attuneFlashType !== 'jelly' && _jhd2 < 900) j.bellMat.emissiveIntensity += _echoTimer * 0.35;
    j.bellMat.opacity = 0.35 + basePulse * 0.25 + opacityBoost;

    if (j.tipMat) {
      const twinkle = Math.sin(t * 5.3 + j.phase * 7.1) * Math.sin(t * 3.7 + j.phase * 4.3);
      j.tipMat.opacity = 0.3 + 0.7 * (twinkle * 0.5 + 0.5);
    }
    g.rotation.y += dt * 0.2;
    const bellPulse = Math.sin(t * 2.5 + j.phase) * 0.08;
    j.bell.scale.set(1.0 + bellPulse * 0.5, 1.0 - bellPulse, 1.0 + bellPulse * 0.5);
    for (let ti = 0; ti < j.tentGroup.children.length; ti++) {
      j.tentGroup.children[ti].rotation.x = Math.sin(t * 2 + ti + syncP) * 0.15;
      j.tentGroup.children[ti].rotation.z = Math.sin(t * 1.5 + ti * 0.7 + syncP) * 0.1;
    }
  }

  return { nearestDist2, nearestPos };
}

// ================================================================
// Pufflings
// ================================================================
export function updatePuffs(puffs, dt, t, ctx) {
  const {
    player, dayPhase, isStorming, bioGlow, _orbBoost,
    _humResonanceType, _humResonanceStr, _echoTimer, _attuneFlashTimer, _attuneFlashType,
    playerIdleTime, sprinting, trees_data, orbs, deers,
    playCreatureSound, playPufflingSinging, playPufflingVocal, triggerPufflingChat
  } = ctx;

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
      p._syncTimer = 0;
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
          const avF = avoidObstacles({ x: px, z: pz }, p.wanderAng, trees_data, 2, 0.8);
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
          p.crownMat.emissiveIntensity = (0.4 + curAttune * 2.0) * getLocalGlow(px, pz, bioGlow * _orbBoost);
        }
        break;
      }
    }

    // Tree collision
    if (p.state !== 'idle') {
      const _ppx = g.position.x, _ppz = g.position.z;
      for (let ti = 0; ti < trees_data.length; ti++) {
        const tr = trees_data[ti];
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
    const puffResMult = (_humResonanceType === 'puff' && pDist2 < 400) ? (1.0 + _humResonanceStr * 1.5) : 1.0;
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
        sp.mat.opacity = (0.4 + Math.sin(t * 4 + sp.phase) * 0.3) * Math.max(getLocalGlow(g.position.x, g.position.z, bioGlow * _orbBoost), 0.3) * attuneGlowMult;
      }
    }
    // Crown glow
    if (p.crownMat && p.state !== 'syncing') {
      p.crownMat.emissiveIntensity = (0.4 + Math.sin(t * 1.5 + p.phase) * 0.3) * getLocalGlow(g.position.x, g.position.z, bioGlow * _orbBoost) * attuneGlowMult * puffResMult;
    }
    // Body emissive
    if (p.state !== 'syncing') {
      if (pDist2 < 64 && curAttune > 0.1 && p.bodyMat) {
        p.bodyMat.emissiveIntensity = 0.5 + curAttune * 0.4 + (_attuneFlashTimer > 0 ? _attuneFlashTimer * 3.0 : 0);
      } else if (p.bodyMat) {
        p.bodyMat.emissiveIntensity = 0.5;
      }
      if (_echoTimer > 0 && _attuneFlashType !== 'puff' && pDist2 < 900 && p.bodyMat) p.bodyMat.emissiveIntensity += _echoTimer * 0.35;
    }
    // Ground glow disc
    if (p.glowMat) {
      const glowBase = 0.15 + Math.sin(t * 2 + p.phase) * 0.06;
      const glowAttune = pDist2 < 64 ? curAttune * 0.2 : 0;
      const syncGlow = p.state === 'syncing' ? curAttune * 0.5 : 0;
      const localG = getLocalGlow(px, pz, bioGlow * _orbBoost);
      p.glowMat.opacity = Math.min(1.0, (glowBase + glowAttune + syncGlow) * Math.max(localG, 0.3));
    }

    // World bounds
    const wd2 = g.position.x * g.position.x + g.position.z * g.position.z;
    if (wd2 > (WORLD_R * 0.85) * (WORLD_R * 0.85)) p.wanderAng += Math.PI;
  }

  return { nearestDist2, nearestPos };
}

// ================================================================
// Deer
// ================================================================
export function updateDeers(deers, dt, t, ctx) {
  const {
    player, dayPhase, bioGlow, _orbBoost,
    _humResonanceType, _humResonanceStr, _echoTimer, _attuneFlashType,
    playerIdleTime, sprinting, trees_data, ponds,
    playCreatureSound
  } = ctx;

  let nearestDist2 = Infinity;
  let nearestPos = { x: 0, z: 0 };
  let nearestWanderAng = 0;

  for (let i = 0; i < deers.length; i++) {
    const d = deers[i], g = d.group;
    const gx = g.position.x, gz = g.position.z;
    const ddx = gx - player.pos.x, ddz = gz - player.pos.z;
    const pDist2 = ddx * ddx + ddz * ddz;

    if (pDist2 > 3600) { g.visible = false; continue; }
    g.visible = true;

    if (d.state !== 'flee' && pDist2 < nearestDist2) {
      nearestDist2 = pDist2;
      nearestPos.x = gx;
      nearestPos.z = gz;
      nearestWanderAng = d.wanderAng;
    }

    const pAng = Math.atan2(ddx, ddz);
    const curiousFrac = Math.min(Math.max(playerIdleTime - 5, 0) / 3, 1);
    const alertR = sprinting ? 18 : (12 - curiousFrac * 4);
    const alertR2 = alertR * alertR;
    const fleeR = sprinting ? 10 : (DEER_FLEE_R - curiousFrac * 4);
    const fleeR2 = fleeR * fleeR;

    // Terrain height
    const dtx = gx - d._lastTX, dtz = gz - d._lastTZ;
    if (dtx * dtx + dtz * dtz > 0.04) {
      d._targetY = getGroundY(gx, gz);
      d._lastTX = gx; d._lastTZ = gz;
    }
    if (d._targetY === undefined) d._targetY = d._baseY;
    d._baseY += (d._targetY - d._baseY) * Math.min(dt * 14, 1);
    const deerBaseY = d._baseY;

    // Threat detection
    if (d.state !== 'flee' && d.state !== 'alert' && d.state !== 'watching') {
      const deerPos = { x: gx, z: gz };
      const playerTarget = { x: player.pos.x, z: player.pos.z };
      if (pDist2 < fleeR2 || canHear(deerPos, playerTarget, fleeR, sprinting)) {
        d.state = 'flee'; d.wanderAng = pAng;
        d.fleeTimer = 2.5 + Math.random() * 2; d._zigTimer = 0;
        playCreatureSound('deer', deerPos, player.pos);
      } else if (pDist2 < alertR2 || canSee(deerPos, d.wanderAng, playerTarget, alertR, Math.PI * 0.5)) {
        d.state = 'alert'; d._stT = 1.0 + Math.random() * 1.5;
        playCreatureSound('deer', deerPos, player.pos);
      }
    }

    // Cascade flee
    if (d.state !== 'flee') {
      for (let di = 0; di < deers.length; di++) {
        if (di === i || deers[di].state !== 'flee') continue;
        const odx = deers[di].group.position.x - gx, odz = deers[di].group.position.z - gz;
        if (odx * odx + odz * odz < 400) {
          d.state = 'flee'; d.wanderAng = deers[di].wanderAng + (Math.random() - 0.5) * 0.4;
          d.fleeTimer = 2 + Math.random() * 1.5; d._zigTimer = 0;
          break;
        }
      }
    }

    // Herd neighbor data
    const deerNeighbors = [];
    for (let di = 0; di < deers.length; di++) {
      if (di === i) continue;
      const ox = deers[di].group.position.x, oz = deers[di].group.position.z;
      const d2 = (ox - gx) * (ox - gx) + (oz - gz) * (oz - gz);
      if (d2 < 400) deerNeighbors.push({ x: ox, z: oz });
    }
    const deerSep = separation({ x: gx, z: gz }, deerNeighbors, 3);
    const deerCoh = deerNeighbors.length > 0 ? cohesion({ x: gx, z: gz }, deerNeighbors) : { x: 0, z: 0 };
    if (d.state === 'alert' || d.state === 'watching') {
      d.headLook += (pAng - d.wanderAng) * 0.3 * dt;
    }

    let moveSpeed = d.speed, isMoving = false;

    switch (d.state) {
      case 'walk': {
        isMoving = true;
        d.walkTimer -= dt;
        if (d.walkTimer <= 0) {
          const r = Math.random();
          const grazeThresh = dayPhase === 'DUSK' ? 0.55 : 0.4;
          const restThresh = dayPhase === 'DEEP_NIGHT' ? 0.25 : 0.1;
          if (r < 0.25) { d.state = 'pause'; d.pauseTimer = 2 + Math.random() * 3; }
          else if (r < grazeThresh) { d.state = 'graze'; d._stT = dayPhase === 'DUSK' ? (5 + Math.random() * 6) : (3 + Math.random() * 4); }
          else if (r < grazeThresh + 0.1 && ponds.length > 0) {
            d.state = 'drink'; d._stT = 8;
            let bestD2 = Infinity;
            for (let pi = 0; pi < ponds.length; pi++) {
              const pdx = ponds[pi].x - gx, pdz = ponds[pi].z - gz;
              const pd2 = pdx * pdx + pdz * pdz;
              if (pd2 < bestD2) { bestD2 = pd2; d._drinkTgt = ponds[pi]; }
            }
          }
          else if (r < grazeThresh + 0.1 + restThresh) { d.state = 'rest'; d._stT = dayPhase === 'DEEP_NIGHT' ? (8 + Math.random() * 8) : (5 + Math.random() * 5); }
          else { d.wanderAng += (Math.random() - 0.5) * 1.2; d.walkTimer = 3 + Math.random() * 5; }
        }
        const homeD2 = (gx - d.homeX) * (gx - d.homeX) + (gz - d.homeZ) * (gz - d.homeZ);
        if (homeD2 > 400) {
          const homeAng = Math.atan2(d.homeX - gx, d.homeZ - gz);
          d.wanderAng += (homeAng - d.wanderAng) * dt * 0.5;
        }
        if (deerNeighbors.length > 0) {
          const herdAng = Math.atan2(deerCoh.x * 0.15 + deerSep.x * 0.8, deerCoh.z * 0.15 + deerSep.z * 0.8);
          d.wanderAng += (herdAng - d.wanderAng) * dt * 0.3;
        }
        const walkAvoid = avoidObstacles({ x: gx, z: gz }, d.wanderAng, trees_data, 2.5, 1.2);
        if (walkAvoid.x * walkAvoid.x + walkAvoid.z * walkAvoid.z > 0.01) {
          d.wanderAng += Math.atan2(walkAvoid.z, walkAvoid.x) * 0.4;
        }
        break;
      }
      case 'pause': {
        d.pauseTimer -= dt;
        d.headLook = Math.sin(t * 0.6) * 0.4;
        if (d.pauseTimer <= 0) { d.state = 'walk'; d.walkTimer = 3 + Math.random() * 5; }
        break;
      }
      case 'graze': {
        d._stT -= dt;
        d.headBob = -0.5;
        if (d._stT <= 0) { d.state = 'walk'; d.walkTimer = 2 + Math.random() * 4; d.headBob = 0; }
        break;
      }
      case 'drink': {
        d._stT -= dt;
        if (d._drinkTgt) {
          const tdx = d._drinkTgt.x - gx, tdz = d._drinkTgt.z - gz;
          const td = Math.sqrt(tdx * tdx + tdz * tdz);
          if (td > 2) {
            d.wanderAng = Math.atan2(tdx, tdz); isMoving = true; moveSpeed = d.speed * 0.7;
          } else { d.headBob = -0.6; }
        }
        if (d._stT <= 0) {
          d.state = 'walk'; d.walkTimer = 3 + Math.random() * 4;
          d.headBob = 0; d._drinkTgt = null;
        }
        break;
      }
      case 'rest': {
        d._stT -= dt;
        g.position.y = Math.max(deerBaseY - 0.3, g.position.y - dt * 0.5);
        if (d._stT <= 0) { d.state = 'walk'; d.walkTimer = 2 + Math.random() * 3; }
        break;
      }
      case 'alert': {
        d._stT -= dt;
        if (pDist2 < fleeR2) {
          d.state = 'flee'; d.wanderAng = pAng; d.fleeTimer = 2.5 + Math.random() * 2;
        } else if (d._stT <= 0) {
          if (pDist2 < (alertR * 1.2) * (alertR * 1.2)) { d.state = 'watching'; d._stT = 3 + Math.random() * 3; }
          else { d.state = 'walk'; d.walkTimer = 2 + Math.random() * 3; }
        }
        break;
      }
      case 'watching': {
        d._stT -= dt;
        isMoving = true; moveSpeed = d.speed * 0.3;
        d.wanderAng = pAng;
        if (pDist2 < fleeR2) {
          d.state = 'flee'; d.wanderAng = pAng; d.fleeTimer = 2.5 + Math.random() * 2;
        } else if (pDist2 > (alertR * 1.5) * (alertR * 1.5) || d._stT <= 0) {
          d.state = 'walk'; d.walkTimer = 2 + Math.random() * 4;
        }
        break;
      }
      case 'flee': {
        isMoving = true; moveSpeed = d.speed * DEER_FLEE_SPEED_MULT;
        d.fleeTimer -= dt;
        d._zigTimer -= dt;
        if (d._zigTimer <= 0) { d._zigDir *= -1; d._zigTimer = 0.4 + Math.random() * 0.4; }
        d.wanderAng = pAng + d._zigDir * 0.3;
        const avoidF = avoidObstacles({ x: gx, z: gz }, d.wanderAng, trees_data, 3, 1.5);
        if (avoidF.x * avoidF.x + avoidF.z * avoidF.z > 0.01) {
          d.wanderAng += Math.atan2(avoidF.z, avoidF.x) * 0.3;
        }
        const bnd = worldBounds({ x: gx, z: gz }, 8);
        if (bnd.x !== 0 || bnd.z !== 0) {
          d.wanderAng = Math.atan2(bnd.z, bnd.x);
        }
        if (d.fleeTimer <= 0 || pDist2 > (alertR * 2) * (alertR * 2)) {
          d.state = 'walk'; d.walkTimer = 3 + Math.random() * 5;
        }
        break;
      }
    }

    // Movement
    if (isMoving) {
      g.position.x += Math.sin(d.wanderAng) * moveSpeed * dt;
      g.position.z += Math.cos(d.wanderAng) * moveSpeed * dt;
      d.legCycle += dt * moveSpeed * 3;
      const _dgx = g.position.x, _dgz = g.position.z;
      for (let ti = 0; ti < trees_data.length; ti++) {
        const tr = trees_data[ti];
        const tdx = _dgx - tr.x, tdz = _dgz - tr.z;
        const td2 = tdx * tdx + tdz * tdz;
        if (td2 > 16) continue;
        const treeR = (tr.scale || 1) * 1.0 + 0.5;
        if (td2 < treeR * treeR && td2 > 0.001) {
          const td = Math.sqrt(td2);
          const push = (treeR - td) / td;
          g.position.x += tdx * push;
          g.position.z += tdz * push;
        }
      }
    }
    // World bounds
    const wd2 = g.position.x * g.position.x + g.position.z * g.position.z;
    if (wd2 > (WORLD_R * 0.9) * (WORLD_R * 0.9)) {
      d.wanderAng = Math.atan2(-g.position.x, -g.position.z);
    }
    if (d.state !== 'rest') {
      const yDiff = deerBaseY - g.position.y;
      g.position.y += yDiff * Math.min(1, dt * 12);
    }
    if (isMoving) {
      g.position.y += Math.sin(d.legCycle * 2) * 0.015;
    }

    // Heading
    let _deerAngDiff = d.wanderAng - g.rotation.y;
    while (_deerAngDiff > Math.PI) _deerAngDiff -= 6.2832;
    while (_deerAngDiff < -Math.PI) _deerAngDiff += 6.2832;
    g.rotation.y += _deerAngDiff * Math.min(1, dt * 5);

    // Body roll/sway
    if (isMoving) {
      g.rotation.z = Math.sin(d.legCycle) * 0.015 * (moveSpeed / d.speed);
    } else {
      g.rotation.z *= 0.92;
    }

    // Head tracking
    if (d.state === 'alert' || d.state === 'watching') {
      const targetYaw = pAng - d.wanderAng;
      d.headLook += (targetYaw * 0.5 - d.headLook) * dt * 3;
    }

    // Neck pivot
    const targetBob = d.headBob || 0;
    d.neckPivot.rotation.x += (targetBob - d.neckPivot.rotation.x) * dt * 3;
    d.neckPivot.rotation.y += (d.headLook - d.neckPivot.rotation.y) * dt * 4;
    if (isMoving && d.state !== 'graze' && d.state !== 'drink') {
      const speedFrac = moveSpeed / d.speed;
      d.neckPivot.rotation.x += Math.sin(d.legCycle * 2) * 0.03 * speedFrac;
      d.neckPivot.rotation.z = Math.sin(d.legCycle) * 0.018 * speedFrac;
    } else {
      d.neckPivot.rotation.z *= 0.95;
    }

    // Ear twitch
    d.earTwitchTimer -= dt;
    if (d.earTwitchTimer <= 0) {
      d.earTwitchVal = (Math.random() - 0.5) * 0.2;
      d.earTwitchTimer = 2 + Math.random() * 4;
    }
    if (d.ears) {
      for (let ei = 0; ei < d.ears.length; ei++) {
        const earTarget = d.earTwitchVal * (ei === 0 ? 1 : -1);
        d.ears[ei].rotation.x += (earTarget - d.ears[ei].rotation.x) * dt * 6;
      }
    }

    // Leg animation
    for (let li = 0; li < d.legPivots.length; li++) {
      const lp = d.legPivots[li];
      if (isMoving) {
        const offset = lp.isFront ? 0 : Math.PI;
        const sideOff = lp.side > 0 ? Math.PI : 0;
        const rawSwing = Math.sin(d.legCycle + offset + sideOff);
        const swing = rawSwing * Math.abs(rawSwing) * 0.4 * (moveSpeed / d.speed);
        lp.upper.rotation.x = swing;
        lp.lower.rotation.x = swing < 0 ? -swing * 0.5 : swing * 0.15;
      } else if (d.state === 'rest' && g.position.y < -0.1) {
        lp.upper.rotation.x += (0.8 - lp.upper.rotation.x) * dt * 2;
        lp.lower.rotation.x += (1.0 - lp.lower.rotation.x) * dt * 2;
      } else {
        lp.upper.rotation.x *= 0.9;
        lp.lower.rotation.x *= 0.9;
      }
    }

    // Tail
    if (isMoving && d.state !== 'flee') {
      d.tailPivot.rotation.x = Math.sin(t * 1.5 + d.phase) * 0.12;
      d.tailPivot.rotation.z = Math.sin(d.legCycle * 0.5) * 0.08;
    } else if (d.state === 'flee') {
      d.tailPivot.rotation.x += (0.5 - d.tailPivot.rotation.x) * dt * 8;
      d.tailPivot.rotation.z = Math.sin(t * 8) * 0.15;
    } else if (d.state === 'alert') {
      d.tailPivot.rotation.x *= 0.95;
      d.tailPivot.rotation.z = Math.sin(t * 6) * 0.1;
    } else {
      d.tailPivot.rotation.x = Math.sin(t * 0.8 + d.phase) * 0.06;
      d.tailPivot.rotation.z *= 0.92;
    }

    // Emissive
    const deerGlow = getLocalGlow(gx, gz, bioGlow * _orbBoost);
    const deerAttuneMult = (getAttunementTarget() === 'deer' && pDist2 < 144) ? (1.0 + getAttunement() * 0.8) : 1.0;
    const deerResMult = (_humResonanceType === 'deer' && pDist2 < 400) ? (1.0 + _humResonanceStr * 1.5) : 1.0;
    d.mat.emissiveIntensity = (0.6 + Math.sin(t * 0.8 + d.phase) * 0.3) * deerGlow * deerAttuneMult * deerResMult;
    if (_echoTimer > 0 && _attuneFlashType !== 'deer' && pDist2 < 900) d.mat.emissiveIntensity += _echoTimer * 0.35;
    d.headLook *= 0.98;

    // Mane flutter
    if (d.manePlanes) {
      for (let mi = 0; mi < d.manePlanes.length; mi++) {
        d.manePlanes[mi].rotation.z = Math.sin(t * 3 + mi * 1.2 + d.phase) * 0.15;
      }
    }
    // Branch orb glow
    if (d.branchOrbs) {
      for (let bi = 0; bi < d.branchOrbs.length; bi++) {
        d.branchOrbs[bi].material.opacity = (0.3 + Math.sin(t * 2.5 + d.phase + bi * 1.5) * 0.3) * deerGlow;
      }
    }
    // Ghost trail
    if (d.trailSpheres) {
      const isMoving = d.state === 'walk' || d.state === 'flee';
      for (let ti = 0; ti < d.trailSpheres.length; ti++) {
        const trail = d.trailSpheres[ti];
        const lerpSpeed = 0.03 + ti * 0.02;
        trail.prevX += (gx - trail.prevX) * lerpSpeed;
        trail.prevY += (g.position.y + 0.8 - trail.prevY) * lerpSpeed;
        trail.prevZ += (gz - trail.prevZ) * lerpSpeed;
        trail.mesh.position.set(trail.prevX, trail.prevY + Math.sin(t * 2 + ti * 1.5) * 0.04, trail.prevZ);
        trail.mat.opacity = isMoving ? (0.12 - ti * 0.03) * deerGlow : 0.02 * deerGlow;
      }
    }
  }

  return { nearestDist2, nearestPos, nearestWanderAng };
}

// ================================================================
// Moths
// ================================================================
export function updateMoths(moths, dt, t, ctx) {
  const {
    player, dayPhase, bioGlow, _orbBoost,
    _humResonanceType, _humResonanceStr, _echoTimer, _attuneFlashType,
    playerIdleTime, crys_data, fairyRings, trees_data,
    playCreatureSound
  } = ctx;

  let nearestDist2 = Infinity;
  let nearestPos = { x: 0, z: 0 };

  for (let i = 0; i < moths.length; i++) {
    const m = moths[i], g = m.group;
    const mx = g.position.x, mz = g.position.z;

    const _mdx = mx - player.pos.x, _mdz = mz - player.pos.z;
    const _mhd2 = _mdx * _mdx + _mdz * _mdz;
    if (_mhd2 > 2025) { g.visible = false; continue; }
    g.visible = true;

    if (_mhd2 < nearestDist2) {
      nearestDist2 = _mhd2;
      nearestPos.x = mx;
      nearestPos.z = mz;
    }

    // State transitions from patrol
    if (m._state === 'patrol') {
      if (Math.random() < 0.002) {
        let bestD2 = Infinity, bestTarget = null;
        for (let ci = 0; ci < crys_data.length; ci++) {
          const cdx = crys_data[ci].x - mx, cdz = crys_data[ci].z - mz;
          const cd2 = cdx * cdx + cdz * cdz;
          if (cd2 < 900 && cd2 < bestD2) { bestD2 = cd2; bestTarget = crys_data[ci]; }
        }
        for (let fi = 0; fi < fairyRings.length; fi++) {
          if (fairyRings[fi].glowIntensity < 0.3) continue;
          const fdx = fairyRings[fi].x - mx, fdz = fairyRings[fi].z - mz;
          const fd2 = fdx * fdx + fdz * fdz;
          if (fd2 < 900 && fd2 < bestD2) { bestD2 = fd2; bestTarget = fairyRings[fi]; }
        }
        if (bestTarget) {
          m._state = 'attracted'; m._attractTarget = bestTarget;
          m._stT = 6 + Math.random() * 8;
          m._transitionT = 0.6; m._prevPx = mx; m._prevPz = mz;
          playCreatureSound('moth', { x: mx, z: mz }, player.pos);
        }
      }
      const restChance = dayPhase === 'DAWN' ? 0.005 : (dayPhase === 'DEEP_NIGHT' ? 0.0003 : 0.001);
      if (Math.random() < restChance) {
        let bestD2 = Infinity, bestTree = null;
        for (let ti = 0; ti < trees_data.length; ti++) {
          const tdx = trees_data[ti].x - mx, tdz = trees_data[ti].z - mz;
          const td2 = tdx * tdx + tdz * tdz;
          if (td2 < 400 && td2 < bestD2) { bestD2 = td2; bestTree = trees_data[ti]; }
        }
        if (bestTree) {
          m._state = 'rest'; m._restTree = bestTree;
          m._stT = dayPhase === 'DAWN' ? (8 + Math.random() * 10) : (4 + Math.random() * 6);
          m._transitionT = 0.6; m._prevPx = mx; m._prevPz = mz;
        }
      }
    }

    const mothSpeed = dayPhase === 'DEEP_NIGHT' ? 1.6 : (dayPhase === 'DAWN' ? 0.5 : 1.0);
    const mothRange = dayPhase === 'DEEP_NIGHT' ? 1.4 : 1.0;

    m._prevMx = mx; m._prevMz = mz; m._prevY = g.position.y;

    switch (m._state) {
      case 'patrol': {
        m.orbitAng += dt * 0.4 * mothSpeed;
        const tx = m.centerX + Math.cos(m.orbitAng) * m.orbitR * mothRange
          + Math.sin(t * 1.3 + m.phase * 2.1) * 0.5
          + Math.sin(t * 2.7 + m.phase) * 0.2;
        const tz = m.centerZ + Math.sin(m.orbitAng) * m.orbitR * mothRange
          + Math.sin(t * 1.7 + m.phase * 1.3) * 0.4
          + Math.sin(t * 3.1 + m.phase * 2) * 0.15;
        g.position.x += (tx - mx) * dt * 1.5;
        g.position.z += (tz - mz) * dt * 1.5;
        g.position.y = m.floatY
          + Math.sin(t * 0.7 + m.phase) * 0.5
          + Math.sin(t * 1.3 + m.phase * 1.7) * 0.2
          + Math.sin(t * 2.1 + m.phase * 0.6) * 0.08;
        break;
      }
      case 'attracted': {
        m._stT -= dt;
        if (!m._attractTarget || m._stT <= 0) {
          m._state = 'patrol'; m._attractTarget = null;
          m._transitionT = 0.6; m._prevPx = mx; m._prevPz = mz;
          break;
        }
        m.orbitAng += dt * 0.8;
        const tgt = m._attractTarget;
        const spiral = Math.max(0.5, m._stT * 0.4);
        const tx = tgt.x + Math.cos(m.orbitAng) * spiral
          + Math.sin(t * 2.0 + m.phase) * 0.15;
        const tz = tgt.z + Math.sin(m.orbitAng) * spiral
          + Math.sin(t * 2.5 + m.phase * 1.5) * 0.1;
        g.position.x += (tx - mx) * dt * 2.0;
        g.position.z += (tz - mz) * dt * 2.0;
        g.position.y += (2.0 - g.position.y) * dt * 0.5;
        break;
      }
      case 'rest': {
        m._stT -= dt;
        if (!m._restTree || m._stT <= 0) {
          m._state = 'patrol'; m._restTree = null;
          m.centerX = g.position.x; m.centerZ = g.position.z;
          m._transitionT = 0.6; m._prevPx = mx; m._prevPz = mz;
          break;
        }
        const tree = m._restTree;
        const tdx = tree.x + 0.5 - mx, tdz = tree.z + 0.5 - mz;
        const td2 = tdx * tdx + tdz * tdz;
        if (td2 > 0.09) {
          const tdInv = 1.0 / (Math.sqrt(td2) + 0.001);
          g.position.x += tdx * tdInv * dt * 2;
          g.position.z += tdz * tdInv * dt * 2;
        }
        g.position.y += (2.5 - g.position.y) * dt * 1.5;
        break;
      }
    }

    // Transition blending
    if (m._transitionT > 0) {
      m._transitionT -= dt;
      const blend = Math.max(0, m._transitionT / 0.6);
      g.position.x = g.position.x * (1 - blend) + m._prevPx * blend;
      g.position.z = g.position.z * (1 - blend) + m._prevPz * blend;
    }

    // Smooth heading
    const _mothDx = g.position.x - m._prevMx, _mothDz = g.position.z - m._prevMz;
    if (Math.abs(_mothDx) + Math.abs(_mothDz) > 0.0005) {
      const targetYaw = Math.atan2(_mothDx, _mothDz);
      let _mothYawDiff = targetYaw - g.rotation.y;
      while (_mothYawDiff > Math.PI) _mothYawDiff -= 6.2832;
      while (_mothYawDiff < -Math.PI) _mothYawDiff += 6.2832;
      g.rotation.y += _mothYawDiff * Math.min(1, dt * 3);
    }

    // Body banking
    const lateralDelta = g.position.x - m._prevMx;
    m._bank += (lateralDelta * -3.0 - m._bank) * Math.min(1, dt * 4);
    m._bank = Math.max(-0.5, Math.min(0.5, m._bank));
    g.rotation.z = m._bank;

    // Body pitch
    const yVel = g.position.y - m._prevY;
    g.rotation.x = yVel * -2.0;

    // Curiosity
    if (playerIdleTime > 5 && _mhd2 < 100 && m._state === 'patrol') {
      const driftFrac = Math.min((playerIdleTime - 5) / 5, 0.3);
      m.centerX += (player.pos.x - m.centerX) * driftFrac * dt * 0.4;
      m.centerZ += (player.pos.z - m.centerZ) * driftFrac * dt * 0.4;
    }

    // Terrain floor
    const mothGroundY = getGroundY(g.position.x, g.position.z);
    const mothMinY = mothGroundY + 1.5;
    if (g.position.y < mothMinY) {
      g.position.y += (mothMinY - g.position.y) * Math.min(1, dt * 4);
    }

    // Tree avoidance
    for (let ti = 0; ti < trees_data.length; ti++) {
      const tr = trees_data[ti];
      const tdx = g.position.x - tr.x, tdz = g.position.z - tr.z;
      const td2 = tdx * tdx + tdz * tdz;
      if (td2 > 16) continue;
      const treeR = (tr.scale || 1) * 1.2 + 0.5;
      if (td2 < treeR * treeR && td2 > 0.001) {
        const td = Math.sqrt(td2);
        m.centerX += (tdx / td) * dt * 2;
        m.centerZ += (tdz / td) * dt * 2;
      }
    }

    // Wing flap
    const flapIntensity = m._state === 'rest' ? 0.05 : 0.4;
    const flapMod = 1.0 + Math.sin(t * 0.3 + m.phase * 3) * 0.15;
    const flap = Math.sin(t * m.flapSpeed * flapMod + m.phase) * flapIntensity;
    for (let w = 0; w < g._wingPivots.length; w++) {
      const wp = g._wingPivots[w];
      wp.pivot.rotation.z = flap * wp.side;
    }

    // Tail streamers
    if (m.tails) {
      for (let ti = 0; ti < m.tails.length; ti++) {
        const tail = m.tails[ti];
        tail.rotation.x = 0.1 + (ti + 1) * 0.05 + Math.sin(t * 2.5 + m.phase + ti * 1.2) * 0.12;
        tail.rotation.z = Math.sin(t * 1.8 + m.phase + ti * 0.9) * 0.08;
      }
    }

    // Antennae sway
    if (m.antennae) {
      for (let ai = 0; ai < m.antennae.length; ai++) {
        m.antennae[ai].rotation.x = Math.sin(t * 1.8 + m.phase + ai * 2.0) * 0.1;
        m.antennae[ai].rotation.z = Math.sin(t * 1.2 + m.phase + ai * 1.5) * 0.06;
      }
    }

    // Dust motes
    if (m.dustMotes) {
      for (let di = 0; di < m.dustMotes.length; di++) {
        const dm = m.dustMotes[di];
        dm.mesh.position.z = dm.baseZ + Math.sin(t * 2.5 + m.phase + di * 1.8) * 0.02;
        dm.mesh.position.x = Math.sin(t * 1.8 + m.phase + di * 2.5) * 0.015;
        dm.mesh.position.y = Math.sin(t * 1.3 + m.phase + di * 1.2) * 0.01;
      }
    }

    // Emissive
    const pulse = Math.sin(t * 1.5 + m.phase) * 0.5 + 0.5;
    const attractBoost = m._state === 'attracted' ? 0.4 : 0;
    const mothAttuneMult = (getAttunementTarget() === 'moth' && _mhd2 < 64) ? (1.0 + getAttunement() * 1.0) : 1.0;
    const mothResMult = (_humResonanceType === 'moth' && _mhd2 < 400) ? (1.0 + _humResonanceStr * 1.5) : 1.0;
    m.wingMat.emissiveIntensity = (0.5 + pulse * 0.6 + attractBoost) * getLocalGlow(g.position.x, g.position.z, bioGlow * _orbBoost) * mothAttuneMult * mothResMult;
    if (_echoTimer > 0 && _attuneFlashType !== 'moth' && _mhd2 < 900) m.wingMat.emissiveIntensity += _echoTimer * 0.35;
    m.wingMat.opacity = 0.45 + pulse * 0.25;
  }

  return { nearestDist2, nearestPos };
}

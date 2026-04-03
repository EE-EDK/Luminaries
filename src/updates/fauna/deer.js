// ================================================================
// Fauna — Deer update loop
// ================================================================

import { WORLD_R, DEER_FLEE_R, DEER_FLEE_SPEED_MULT } from '../../constants.js';
import { getGroundY } from '../../world/terrain.js';
import { getLocalGlow } from '../../systems/dimming.js';
import { getAttunement, getAttunementTarget } from '../../systems/attunement.js';
import { canSee, canHear } from '../../systems/ai/senses.js';
import { emit, Events } from '../../kernel/eventBus.js';
import { separation, cohesion, worldBounds, avoidObstacles } from '../../systems/ai/steering.js';
import { player, playerIdleTime } from '../../core/player.js';
import { keys, touchSprint } from '../../core/input.js';
import { bioGlow, phase as dayPhase } from '../../systems/dayNightCycle.js';
import { orbBoost, humResonanceType, humResonanceStr, echoTimer, attuneFlashType } from '../../state/gameState.js';
import { deers, trees_data, ponds } from '../../state/entityStore.js';
import { playCreatureSound } from '../../systems/audio.js';

export function updateDeers(dt, t) {
  const sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;

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
      nearestPos.y = g.position.y;
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
        emit(Events.CREATURE_SOUND, { type: 'deer', position: deerPos, playerPos: player.pos });
      } else if (pDist2 < alertR2 || canSee(deerPos, d.wanderAng, playerTarget, alertR, Math.PI * 0.5)) {
        d.state = 'alert'; d._stT = 1.0 + Math.random() * 1.5;
        playCreatureSound('deer', deerPos, player.pos);
        emit(Events.CREATURE_SOUND, { type: 'deer', position: deerPos, playerPos: player.pos });
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

    // Neck pivots (Refined motion)
    const targetBob = d.headBob || 0;
    const walkBob = isMoving ? Math.sin(d.legCycle * 2) * 0.03 * (moveSpeed / d.speed) : 0;

    // Neck base/mid bobs
    d.neckBasePivot.rotation.x += (targetBob - 0.2 + walkBob - d.neckBasePivot.rotation.x) * dt * 3;
    d.neckMidPivot.rotation.x += (targetBob * 0.5 - 0.1 + walkBob * 0.5 - d.neckMidPivot.rotation.x) * dt * 3;

    // Head look/tilt (curiosity)
    d.headPivot.rotation.y += (d.headLook - d.headPivot.rotation.y) * dt * 4;
    d.headPivot.rotation.z = Math.sin(t * 0.4 + d.phase) * 0.15; // idle tilt

    if (isMoving && d.state !== 'graze' && d.state !== 'drink') {
      const speedFrac = moveSpeed / d.speed;
      d.neckBasePivot.rotation.z = Math.sin(d.legCycle) * 0.018 * speedFrac;
    } else {
      d.neckBasePivot.rotation.z *= 0.95;
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
    const deerGlow = getLocalGlow(gx, gz, bioGlow * orbBoost);
    const deerAttuneMult = (getAttunementTarget() === 'deer' && pDist2 < 144) ? (1.0 + getAttunement() * 0.8) : 1.0;
    const deerResMult = (humResonanceType === 'deer' && pDist2 < 400) ? (1.0 + humResonanceStr * 1.5) : 1.0;
    d.mat.emissiveIntensity = (0.6 + Math.sin(t * 0.8 + d.phase) * 0.3) * deerGlow * deerAttuneMult * deerResMult;
    if (echoTimer > 0 && attuneFlashType !== 'deer' && pDist2 < 900) d.mat.emissiveIntensity += echoTimer * 0.35;
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

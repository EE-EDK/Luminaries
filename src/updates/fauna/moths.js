// ================================================================
// Fauna — Moths update loop
// ================================================================

import { getGroundY } from '../../world/terrain.js';
import { getLocalGlow } from '../../systems/dimming.js';
import { getAttunement, getAttunementTarget } from '../../systems/attunement.js';
import { emit, Events } from '../../kernel/eventBus.js';
import { player, playerIdleTime } from '../../core/player.js';
import { bioGlow, phase as dayPhase } from '../../systems/dayNightCycle.js';
import { orbBoost, humResonanceType, humResonanceStr, echoTimer, attuneFlashType } from '../../state/gameState.js';
import { moths, trees_data, crys_data, fairyRings } from '../../state/entityStore.js';
import { playCreatureSound } from '../../systems/audio.js';

export function updateMoths(dt, t) {

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
      nearestPos.y = g.position.y;
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
          emit(Events.CREATURE_SOUND, { type: 'moth', position: { x: mx, z: mz }, playerPos: player.pos });
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
    const mothResMult = (humResonanceType === 'moth' && _mhd2 < 400) ? (1.0 + humResonanceStr * 1.5) : 1.0;
    m.wingMat.emissiveIntensity = (0.5 + pulse * 0.6 + attractBoost) * getLocalGlow(g.position.x, g.position.z, bioGlow * orbBoost) * mothAttuneMult * mothResMult;
    if (echoTimer > 0 && attuneFlashType !== 'moth' && _mhd2 < 900) m.wingMat.emissiveIntensity += echoTimer * 0.35;
    m.wingMat.opacity = 0.45 + pulse * 0.25;
  }

  return { nearestDist2, nearestPos };
}

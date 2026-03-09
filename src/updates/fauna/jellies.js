// ================================================================
// Fauna — Jellies update loop
// ================================================================

import { WORLD_R } from '../../constants.js';
import { getGroundY } from '../../world/terrain.js';
import { getLocalGlow } from '../../systems/dimming.js';
import { getAttunement, getAttunementTarget } from '../../systems/attunement.js';
import { emit, Events } from '../../kernel/eventBus.js';
import { player, playerIdleTime } from '../../core/player.js';
import { bioGlow, phase as dayPhase } from '../../systems/dayNightCycle.js';
import { isStorming } from '../../systems/weather.js';
import { orbBoost, humResonanceType, humResonanceStr, echoTimer, attuneFlashType } from '../../state/gameState.js';
import { jellies } from '../../state/entityStore.js';
import { playCreatureSound } from '../../systems/audio.js';

export function updateJellies(dt, t) {

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
      emit(Events.CREATURE_SOUND, { type: 'jelly', position: { x: jx, z: jz }, playerPos: player.pos });
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
      emit(Events.CREATURE_SOUND, { type: 'jelly', position: { x: jx, z: jz }, playerPos: player.pos });
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
    const jellyResMult = (humResonanceType === 'jelly' && _jhd2 < 400) ? (1.0 + humResonanceStr * 1.5) : 1.0;
    j.bellMat.emissiveIntensity = (0.4 + basePulse * 0.8) * getLocalGlow(g.position.x, g.position.z, bioGlow * orbBoost) * emissiveMult * jellyAttuneMult * jellyResMult;
    if (echoTimer > 0 && attuneFlashType !== 'jelly' && _jhd2 < 900) j.bellMat.emissiveIntensity += echoTimer * 0.35;
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

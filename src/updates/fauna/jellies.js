// ================================================================
// Fauna — Jellies update loop
// ================================================================

import { WORLD_R } from '../../constants.js';
import { getGroundY } from '../../world/terrain.js';
import { getLocalGlow } from '../../systems/dimming.js';
import { getAttunement, getAttunementTarget, getPlayerFrequency, getJellySyncFlash } from '../../systems/attunement.js';
import { emit, Events, on } from '../../kernel/eventBus.js';
import { player, playerIdleTime } from '../../core/player.js';
import { bioGlow, phase as dayPhase } from '../../systems/dayNightCycle.js';
import { isStorming } from '../../systems/weather.js';
import { orbBoost, humResonanceType, humResonanceStr, echoTimer, attuneFlashType } from '../../state/gameState.js';
import {
  isLocked,
  getLockType,
  getResonance,
  getResonanceType
} from '../../systems/spiritHum.js';
import { jellies } from '../../state/entityStore.js';
import { playCreatureSound } from '../../systems/audio.js';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { AdditiveBlending, Color, Mesh, MeshBasicMaterial, SphereGeometry } from 'three';
import { queryNearTrees } from '../../utils/spatialHash.js';
import { nearest } from '../../systems/registration.js';

const _result = { nearestDist2: Infinity, nearestPos: { x: 0, y: 0, z: 0 } };
const _jellyNearColor = new Color(0xff4fd2);
const _jellyAttuneRed = new Color(0xff2a28);
const _jellyFarColor = new Color(C.jellyBell);
/** Emissive lerp targets — jellyGlow reads cyan on lit emissive even when color is red */
const _jelEmitBlue = new Color(C.jellyGlow);
const _jelEmitRed = new Color(0xff0a14);
const _jelInnerBlue = new Color(C.jellyGlow);
const _jelInnerRed = new Color(0xff3528);
const _jelTipBlue = new Color(C.jellyTip);
const _jelTipRed = new Color(0xff6058);
const _jelSpotBlue = new Color(C.jellySpot);
const _jelSpotRed = new Color(0xff7078);
const _jelOrganBlue = new Color(C.jellyOrgan);
const _jelOrganRed = new Color(0xff6a72);
const _jelMucusBlue = new Color(C.jellyMucus);
const _jelMucusRed = new Color(0xff8588);
const _jelNerveBlue = new Color(C.jellyGlow);
const _jelNerveRed = new Color(0xff4548);
const _jellyTentBase = new Color(C.jellyTent);

function wrapPi(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

/**
 * Mushroom cap ≈ base * (0.7..1.7) * glow; base ≤ ~1.3 → peak factor 1.3*1.7.
 * Target jelly red glow ≈ 80% of that peak (same getLocalGlow chain).
 */
const _MUSHROOM_REF_PEAK = 1.3 * 1.7;
const _JELLY_EMISSIVE_MAX = 0.4 + 0.8;
/** Match mushroom cap peak radiance on red path (was 0.8× — too dim vs pink mush). */
const _JELLY_RED_LUMA_MUL = (1.05 * _MUSHROOM_REF_PEAK) / _JELLY_EMISSIVE_MAX;

const jellyRitual = {
  active: false,
  centerX: 0,
  centerZ: 0,
  progress: 0,
  lastAttune: 0,
  flash: 0,
  orbMesh: null
};

/** Map-wide crimson harmony after jelly attunement completes — burst → wave → orbit. */
const jellyCrimson = {
  active: false,
  t: 0,
  waveR: 0,
  burst: 0
};
const CRIMSON_WAVE_SPEED = 38;
const CRIMSON_BURST_DECAY = 1.05;
const CRIMSON_MAX_AGE = 52;
let _crimsonListenerOn = false;

/** Linked / ritual formation — one horizontal ring 25 m Ø, ≥10 m above player, evenly spaced, rotating. */
const FORMATION_RING_R = 12.5;
const FORMATION_Y_ABOVE_PLAYER = 10;
/** Carousel rad/s — whole ring drifts so slots orbit together until everyone is linked. */
const FORMATION_SPIN = 0.38;
const FORMATION_LERP = 2.35;
const FORMATION_BOB = 0.32;

function ensureJellyCrimsonListener() {
  if (_crimsonListenerOn) return;
  _crimsonListenerOn = true;
  on(Events.CREATURE_ATTUNED, (d) => {
    if (d.type !== 'jelly') return;
    jellyCrimson.active = true;
    jellyCrimson.t = 0;
    jellyCrimson.waveR = 0;
    jellyCrimson.burst = 1.2;
    for (let ji = 0; ji < jellies.length; ji++) {
      jellies[ji]._crimsonJoined = false;
    }
  });
}

function ensureJellyRitualOrb() {
  if (jellyRitual.orbMesh) return;
  const mat = new MeshBasicMaterial({
    color: 0xff4fd2,
    transparent: true,
    opacity: 0.65,
    blending: AdditiveBlending,
    depthWrite: false
  });
  jellyRitual.orbMesh = new Mesh(new SphereGeometry(0.5, 12, 10), mat);
  jellyRitual.orbMesh.visible = false;
  scene.add(jellyRitual.orbMesh);
}

export function updateJellies(dt, t) {
  ensureJellyRitualOrb();
  ensureJellyCrimsonListener();
  const pitchLockedJellyPre = isLocked() && getLockType() === 'jelly';
  const nearJellyRitual = nearest.jellyDist2 < 100;
  const wantsJellyRitual = getAttunementTarget() === 'jelly' || (pitchLockedJellyPre && nearJellyRitual);
  const attune = getAttunement();
  if (wantsJellyRitual && !jellyRitual.active && (attune > 0.01 || pitchLockedJellyPre)) {
    jellyRitual.active = true;
    jellyRitual.centerX = player.pos.x;
    jellyRitual.centerZ = player.pos.z;
    jellyRitual.progress = 0;
    jellyRitual.flash = 0.18;
  } else if (!wantsJellyRitual) {
    jellyRitual.active = false;
    jellyRitual.progress = 0;
    jellyRitual.flash = 0;
    if (jellyRitual.orbMesh) jellyRitual.orbMesh.visible = false;
  }
  if (attune > jellyRitual.lastAttune + 0.03) jellyRitual.flash = 0.28;
  jellyRitual.lastAttune = attune;
  jellyRitual.flash = Math.max(0, jellyRitual.flash - dt);

  if (jellyCrimson.active) {
    jellyCrimson.t += dt;
    jellyCrimson.waveR = Math.min(WORLD_R * 1.08, jellyCrimson.t * CRIMSON_WAVE_SPEED);
    jellyCrimson.burst = Math.max(0, jellyCrimson.burst - dt * CRIMSON_BURST_DECAY);
    if (jellyCrimson.t > CRIMSON_MAX_AGE) {
      jellyCrimson.active = false;
      jellyCrimson.burst = 0;
    }
  }

  // Batch 2 Item 1: Nearby jellies sync glow phase (~5Hz), O(n) via 15m grid (was O(n²)).
  if (!updateJellies._syncFrame) updateJellies._syncFrame = 0;
  updateJellies._syncFrame++;
  if (updateJellies._syncFrame % 12 === 0) {
    const cell = 15;
    const buckets = new Map();
    for (let i = 0; i < jellies.length; i++) {
      const g = jellies[i].group;
      const bx = Math.floor(g.position.x / cell);
      const bz = Math.floor(g.position.z / cell);
      const key = bx + ',' + bz;
      let arr = buckets.get(key);
      if (!arr) {
        arr = [];
        buckets.set(key, arr);
      }
      arr.push(jellies[i]);
    }
    const R2 = 225;
    for (let i = 0; i < jellies.length; i++) {
      const j = jellies[i];
      const g = j.group;
      const jx = g.position.x;
      const jz = g.position.z;
      if (j._syncPhase === undefined) j._syncPhase = j.phase;

      let syncSum = 0;
      let syncCount = 0;
      const bx = Math.floor(jx / cell);
      const bz = Math.floor(jz / cell);
      for (let ox = -1; ox <= 1; ox++) {
        for (let oz = -1; oz <= 1; oz++) {
          const arr = buckets.get(`${bx + ox},${bz + oz}`);
          if (!arr) continue;
          for (let b = 0; b < arr.length; b++) {
            const o = arr[b];
            if (o === j) continue;
            const og = o.group;
            const odx = og.position.x - jx;
            const odz = og.position.z - jz;
            if (odx * odx + odz * odz < R2) {
              syncSum += o._syncPhase ?? o.phase;
              syncCount++;
            }
          }
        }
      }
      if (syncCount > 0) {
        const avgPhase = syncSum / syncCount;
        j._syncPhase += (avgPhase - j._syncPhase) * 0.2 * 4.8;
      }
    }
  }

  // Batch 2 Item 4: Jelly day/night
  const jellyAltMod = dayPhase === 'DEEP_NIGHT' ? 2.0 : (dayPhase === 'DAWN' ? -1.5 : 0);

  let nearestDist2 = Infinity;
  const nearestPos = _result.nearestPos;
  nearestPos.x = 0; nearestPos.y = 0; nearestPos.z = 0;

  let jellyJoinedCount = 0;
  if (jellyCrimson.active) {
    for (let jj = 0; jj < jellies.length; jj++) {
      if (jellies[jj]._crimsonJoined) jellyJoinedCount++;
    }
  }

  const jellyAttuneTarget = getAttunementTarget();
  const jellyFreq = getPlayerFrequency();
  const pitchLockedJelly = pitchLockedJellyPre;
  const hummingJelly = humResonanceType === 'jelly' && humResonanceStr > 0.08;
  /** Same-frame jelly band read (gameState is written at end of spirit hum — can lag one mental step behind). */
  const humBandJelly =
    getResonanceType() === 'jelly' && getResonance() > 0.07;
  const jellyRedActive =
    jellyAttuneTarget === 'jelly' ||
    jellyFreq === 'jelly' ||
    pitchLockedJelly ||
    hummingJelly ||
    humBandJelly ||
    jellyCrimson.active;

  for (let i = 0; i < jellies.length; i++) {
    const _jg = jellies[i].group;
    const _jdx = _jg.position.x - player.pos.x, _jdz = _jg.position.z - player.pos.z;
    const _jdy = _jg.position.y - player.pos.y;
    const _dist3Sq = _jdx * _jdx + _jdy * _jdy + _jdz * _jdz;
    // During crimson harmony, draw distant jellies so the wave + red read on the whole flock.
    if (_dist3Sq > 3025 && !jellyCrimson.active) {
      _jg.visible = false;
      continue;
    }
    _jg.visible = true;
    const j = jellies[i], g = j.group;
    const jx = g.position.x, jz = g.position.z;
    const jFloatY = j.floatY + jellyAltMod;

    const _jhd2 = _jdx * _jdx + _jdz * _jdz;
    if (_jhd2 < nearestDist2) {
      nearestDist2 = _jhd2;
      nearestPos.x = jx;
      nearestPos.y = g.position.y;
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

    const horizSq = _jhd2;
    const waveRs = jellyCrimson.waveR * jellyCrimson.waveR;
    if (jellyCrimson.active && !j._crimsonJoined && horizSq <= waveRs) {
      j._crimsonJoined = true;
    }

    let crimsonOrbit = false;
    /** Shared ring — start as soon as each jelly is swept by crimson wave; rank/M updates as more link. */
    if (jellyCrimson.active && j._crimsonJoined) {
      crimsonOrbit = true;
      const M = Math.max(1, jellyJoinedCount);
      let rank = 0;
      for (let ji = 0; ji < i; ji++) {
        if (jellies[ji]._crimsonJoined) rank++;
      }
      const base = t * FORMATION_SPIN;
      const ang = base + (rank / M) * Math.PI * 2;
      const tx = player.pos.x + Math.cos(ang) * FORMATION_RING_R;
      const tz = player.pos.z + Math.sin(ang) * FORMATION_RING_R;
      const tgtY =
        player.pos.y +
        FORMATION_Y_ABOVE_PLAYER +
        Math.sin(t * 1.05 + rank * 0.41) * FORMATION_BOB;
      g.position.x += (tx - g.position.x) * Math.min(1, dt * FORMATION_LERP);
      g.position.z += (tz - g.position.z) * Math.min(1, dt * FORMATION_LERP);
      g.position.y += (tgtY - g.position.y) * Math.min(1, dt * FORMATION_LERP * 0.95);
      j.driftAng += dt * 0.06;
      g.rotation.y += dt * 0.85;
    }

    if (!crimsonOrbit) switch (j._state) {
      case 'drift': {
        j.driftAng += dt * 0.15;
        const radius = 8 + Math.sin(t * 0.1 + j.phase) * 4;
        const tx = j.homeX + Math.cos(j.driftAng) * radius;
        const tz = j.homeZ + Math.sin(j.driftAng) * radius;
        g.position.x += (tx - g.position.x) * dt * 0.3;
        g.position.z += (tz - g.position.z) * dt * 0.3;
        g.position.y = jFloatY + Math.sin(t * j.wobble + j.phase) * 0.52;
        break;
      }
      case 'pulse': {
        j.driftAng += dt * 0.08;
        g.position.x += Math.cos(j.driftAng) * dt * 0.3;
        g.position.z += Math.sin(j.driftAng) * dt * 0.3;
        g.position.y = jFloatY + Math.sin(t * j.wobble + j.phase) * 0.38;
        j._pulseSync = Math.sin(t * 2.0 + j._syncPhase) * 0.5 + 0.5;
        break;
      }
      case 'migrate': {
        const lim = WORLD_R * 0.8;
        const limSq = lim * lim;
        const px = g.position.x;
        const pz = g.position.z;
        const md2 = px * px + pz * pz;
        // Smooth steer back toward the origin instead of a one-frame π flip (was visible jerk).
        if (md2 > limSq) {
          const inward = Math.atan2(-px, -pz);
          j._migrateAng += wrapPi(inward - j._migrateAng) * Math.min(1, dt * 2.8);
        }
        g.position.x += Math.cos(j._migrateAng) * dt * 1.0;
        g.position.z += Math.sin(j._migrateAng) * dt * 1.0;
        g.position.y = jFloatY + Math.sin(t * j.wobble + j.phase) * 0.34;
        break;
      }
      case 'display': {
        j.driftAng += dt * 0.4;
        g.position.x += Math.cos(j.driftAng) * dt * 0.8;
        g.position.z += Math.sin(j.driftAng) * dt * 0.8;
        g.position.y = jFloatY + Math.sin(t * 2.0 + j.phase) * 0.75;
        j._syncPhase += (0 - j._syncPhase) * dt * 2.0;
        break;
      }
    }

    if (jellyRitual.active && !jellyCrimson.active && !crimsonOrbit) {
      jellyRitual.centerX += (player.pos.x - jellyRitual.centerX) * Math.min(1, dt * 4.5);
      jellyRitual.centerZ += (player.pos.z - jellyRitual.centerZ) * Math.min(1, dt * 4.5);
      const cx = jellyRitual.centerX;
      const cz = jellyRitual.centerZ;
      const n = Math.max(1, jellies.length);
      const base = t * FORMATION_SPIN;
      const ang = base + (i / n) * Math.PI * 2;
      const tx = cx + Math.cos(ang) * FORMATION_RING_R;
      const tz = cz + Math.sin(ang) * FORMATION_RING_R;
      const ty =
        player.pos.y +
        FORMATION_Y_ABOVE_PLAYER +
        Math.sin(t * 2.05 + i * 0.55) * FORMATION_BOB;
      g.position.x += (tx - g.position.x) * Math.min(1, dt * FORMATION_LERP);
      g.position.z += (tz - g.position.z) * Math.min(1, dt * FORMATION_LERP);
      g.position.y += (ty - g.position.y) * Math.min(1, dt * FORMATION_LERP);
      const cdx = g.position.x - tx;
      const cdz = g.position.z - tz;
      if (cdx * cdx + cdz * cdz < 3.5) {
        jellyRitual.progress += dt * (1 / n);
      }
    }

    // Curiosity: jelly drifts toward idle player (ease strength so crossing the idle threshold isn’t a step change).
    if (!(jellyCrimson.active && j._crimsonJoined) && !jellyRitual.active) {
      const rawPull =
        playerIdleTime > 5 && _jhd2 < 100 && j._state !== 'display'
          ? Math.min((playerIdleTime - 5) / 5, 0.4)
          : 0;
      if (j._idleCuriosityBlend === undefined) j._idleCuriosityBlend = 0;
      j._idleCuriosityBlend += (rawPull - j._idleCuriosityBlend) * Math.min(1, dt * 2.5);
      const pull = j._idleCuriosityBlend;
      if (pull > 0.004) {
        g.position.x += (player.pos.x - g.position.x) * pull * dt * 0.3;
        g.position.z += (player.pos.z - g.position.z) * pull * dt * 0.3;
      }
    }

    // Terrain floor (cached — jellies move slowly)
    const _jtx = g.position.x - (j._lastTX || 0), _jtz = g.position.z - (j._lastTZ || 0);
    if (_jtx * _jtx + _jtz * _jtz > 0.04 || j._cachedGY === undefined) {
      j._cachedGY = getGroundY(g.position.x, g.position.z);
      j._lastTX = g.position.x; j._lastTZ = g.position.z;
    }
    const jellyGroundY = j._cachedGY;
    /** Skip terrain/tree pulls whenever linked to player ritual or crimson wave (orbit math owns height). */
    const inLinkedFormation =
      jellyRitual.active || (jellyCrimson.active && j._crimsonJoined);
    if (!inLinkedFormation) {
      const jellyMinY = jellyGroundY + 3;
      if (g.position.y < jellyMinY) {
        g.position.y += (jellyMinY - g.position.y) * Math.min(1, dt * 2.4);
      }
    }

    // Tree avoidance — keep jellies from clipping through trunks at any distance.
    const nearby = inLinkedFormation ? [] : queryNearTrees(g.position.x, g.position.z, 2.2);
    for (let ti = 0; ti < nearby.length; ti++) {
      const tr = nearby.items[ti];
      const tdx = g.position.x - tr.x;
      const tdz = g.position.z - tr.z;
      const td2 = tdx * tdx + tdz * tdz;
      const treeR = (tr.scale || 1) * 0.75 + 0.5;
      const jellyR = 0.62;
      const minR = treeR + jellyR;
      if (td2 < minR * minR && td2 > 0.0001) {
        const td = Math.sqrt(td2);
        const penetration = minR - td;
        // Resolve overlap over several frames — full correction in one step when td→0 caused large jumps.
        const nx = tdx / td;
        const nz = tdz / td;
        const step = penetration * Math.min(1, dt * 14);
        g.position.x += nx * step;
        g.position.z += nz * step;
      }
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

    const jellySyncFlash = getJellySyncFlash();
    const jellyAttuneMult = (jellyAttuneTarget === 'jelly' && _jhd2 < 100) ? (1.0 + getAttunement() * 1.2) : 1.0;
    let jellyResMult = (humResonanceType === 'jelly' && _jhd2 < 400) ? (1.0 + humResonanceStr * 1.5) : 1.0;
    if (humBandJelly && _jhd2 < 400) {
      jellyResMult = Math.max(jellyResMult, 1.0 + getResonance() * 1.45);
    }
    const nearRitual = _jhd2 < 100;
    const rhythmPulse = nearRitual ? (Math.sin(t * Math.PI + i * 0.7) * 0.5 + 0.5) : 0;
    const redSyncPulse = jellyRedActive
      ? (Math.sin(t * Math.PI + i * 0.65) * 0.5 + 0.5)
      : 0;
    const ritualBoost = jellyRitual.active ? (1.0 + Math.min(1.0, jellyRitual.progress) * 2.2) : 1.0;
    const flashBoost = jellyRitual.flash > 0 ? (1.0 + jellyRitual.flash * 4.5) : 1.0;
    const syncBoost = jellyRedActive
      ? (1.0 + redSyncPulse * 1.45 + jellySyncFlash * 2.65)
      : 1.0;
    let redBlendRaw = 0;
    let crimsonWaveTint = 0;
    if (jellyCrimson.active) {
      const h = Math.sqrt(horizSq);
      if (h <= jellyCrimson.waveR + 1.5) crimsonWaveTint = 1;
      else if (h < jellyCrimson.waveR + 42) {
        crimsonWaveTint = Math.max(0, 1 - (h - jellyCrimson.waveR - 1.5) / 40);
      }
    }
    if (jellyRedActive) {
      redBlendRaw = 0.66 + redSyncPulse * 0.52 + jellySyncFlash * 0.58;
      if (jellyCrimson.active) {
        redBlendRaw += jellyCrimson.burst * 0.55;
        if (j._crimsonJoined) redBlendRaw += 0.14;
        redBlendRaw += crimsonWaveTint * 0.38;
      }
    }
    let redBlend = Math.min(1, redBlendRaw);
    if (pitchLockedJelly) {
      redBlend = Math.max(redBlend, 0.92);
    }
    if (jellyFreq === 'jelly') {
      redBlend = Math.max(redBlend, 0.78);
    }
    if (humBandJelly || hummingJelly) {
      redBlend = Math.max(redBlend, 0.52);
    }

    let bellEm = (0.4 + basePulse * 0.8) * getLocalGlow(g.position.x, g.position.z, bioGlow * orbBoost) * emissiveMult * jellyAttuneMult * jellyResMult * ritualBoost * flashBoost * syncBoost;
    if (echoTimer > 0 && attuneFlashType !== 'jelly' && _jhd2 < 900) bellEm += echoTimer * 0.35;
    if (jellyCrimson.burst > 0.02) {
      bellEm *= 1 + jellyCrimson.burst * 5.5;
    }
    if (redBlend > 0) bellEm *= 1 + redBlend * (_JELLY_RED_LUMA_MUL - 1);
    if (redBlend > 0.12) bellEm *= 1.0 + redBlend * 0.48;
    if (pitchLockedJelly || humBandJelly) bellEm *= 1.22;

    j.bellMat.emissiveIntensity = bellEm;
    j.bellMat.opacity = 0.35 + basePulse * 0.25 + opacityBoost + rhythmPulse * 0.25 + jellySyncFlash * 0.2;
    let ritualBlend = nearRitual ? (0.45 + rhythmPulse * 0.55) : 0;
    if (jellyRedActive && redBlend > 0.12) {
      ritualBlend *= Math.max(0, 1 - redBlend * 0.92);
    }
    j.bellMat.color.copy(_jellyFarColor).lerp(_jellyNearColor, ritualBlend);
    if (redBlend > 0) j.bellMat.color.lerp(_jellyAttuneRed, redBlend);

    const emitMix = redBlend;
    j.bellMat.emissive.copy(_jelEmitBlue).lerp(_jelEmitRed, emitMix);
    if (j.rimMat) {
      j.rimMat.emissive.copy(_jelEmitBlue).lerp(_jelEmitRed, emitMix);
      j.rimMat.emissiveIntensity = bellEm * 1.25;
      j.rimMat.color.copy(j.bellMat.color);
    }
    if (j.lappetMat) {
      j.lappetMat.emissive.copy(_jelEmitBlue).lerp(_jelEmitRed, emitMix);
      j.lappetMat.emissiveIntensity = bellEm * 0.75;
      j.lappetMat.color.copy(j.bellMat.color);
    }
    if (j.tentMat) {
      j.tentMat.emissive.copy(_jelEmitBlue).lerp(_jelEmitRed, emitMix);
      j.tentMat.emissiveIntensity = bellEm * 0.5;
      j.tentMat.color.copy(_jellyTentBase).lerp(_jellyAttuneRed, emitMix * 0.85);
    }
    if (j.oralMat) {
      j.oralMat.emissive.copy(_jelEmitBlue).lerp(_jelEmitRed, emitMix);
      j.oralMat.emissiveIntensity = bellEm * 0.625;
      j.oralMat.color.copy(_jellyTentBase).lerp(_jellyAttuneRed, emitMix * 0.85);
    }
    if (j.innerMat) {
      j.innerMat.color.copy(_jelInnerBlue).lerp(_jelInnerRed, emitMix);
    }

    if (j.tipMat) {
      j.tipMat.color.copy(_jelTipBlue).lerp(_jelTipRed, emitMix);
      const twinkle = Math.sin(t * 5.3 + j.phase * 7.1) * Math.sin(t * 3.7 + j.phase * 4.3);
      j.tipMat.opacity = 0.3 + 0.7 * (twinkle * 0.5 + 0.5);
    }
    if (j.spotMat) {
      j.spotMat.color.copy(_jelSpotBlue).lerp(_jelSpotRed, emitMix);
      j.spotMat.opacity = 0.82 - emitMix * 0.28;
    }
    if (j.nerveMat) {
      j.nerveMat.color.copy(_jelNerveBlue).lerp(_jelNerveRed, emitMix);
      j.nerveMat.opacity = 0.18 + emitMix * 0.22;
    }
    if (j.organMat) {
      j.organMat.color.copy(_jelOrganBlue).lerp(_jelOrganRed, emitMix);
    }
    if (j.mucusMat) {
      j.mucusMat.color.copy(_jelMucusBlue).lerp(_jelMucusRed, emitMix);
    }
    g.rotation.y += dt * 0.2;
    const bellPulse = Math.sin(t * 2.5 + j.phase) * 0.05;
    j.bell.scale.set(
      1.0 + bellPulse * 0.28,
      1.0 - bellPulse * 0.35,
      1.0 + bellPulse * 0.28
    );
    for (let ti = 0; ti < j.tentGroup.children.length; ti++) {
      j.tentGroup.children[ti].rotation.x = Math.sin(t * 2 + ti + syncP) * 0.15;
      j.tentGroup.children[ti].rotation.z = Math.sin(t * 1.5 + ti * 0.7 + syncP) * 0.1;
    }
  }

  if (jellyRitual.orbMesh) {
    if (jellyRitual.active) {
      const ritualProg = Math.min(1, jellyRitual.progress);
      const glowScale = 0.35 + ritualProg * 1.5 + (jellyRitual.flash > 0 ? jellyRitual.flash * 1.8 : 0);
      jellyRitual.orbMesh.visible = true;
      jellyRitual.orbMesh.position.set(
        jellyRitual.centerX,
        player.pos.y + FORMATION_Y_ABOVE_PLAYER * 0.72,
        jellyRitual.centerZ
      );
      jellyRitual.orbMesh.scale.setScalar(glowScale);
      jellyRitual.orbMesh.material.opacity = 0.35 + ritualProg * 0.5 + jellyRitual.flash * 0.4;
    } else {
      jellyRitual.orbMesh.visible = false;
    }
  }

  _result.nearestDist2 = nearestDist2;
  return _result;
}

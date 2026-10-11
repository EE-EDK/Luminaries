// ================================================================
// Director — the frame's world simulation, in named slices
// ================================================================
// Everything the frame loop does to the *world* (as opposed to the camera and
// the player) lives here as small _director* functions, each registered with
// the kernel scheduler under a name and a phase. Split out of main.js without
// changing a line of how any of it behaves: same slices, same order, same
// zero-allocation per-frame discipline.
//
// The fauna wrappers are exported because the pre-game idle loop steps the
// creatures too, and has to publish their proximity the same way.

// Core systems
import { renderer, camera } from './renderer.js';
import { crystalLights } from './lighting.js';
import { keys, pitch, touchSprint } from './input.js';
// Constants
import { FAIRY_SKY_FEATHER_S, C } from '../constants.js';
// World
import { updateSky, checkShootingStarWish } from '../world/sky.js';
// Player
import { player, playerIdleTime } from './player.js';
// Entities — Flora
import { updateDandelions } from '../entities/flora/dandelions.js';
// Entities — World
import { updateProceduralRocks } from '../entities/world/rocks.js';
import { updateRainbowSparkles } from '../entities/world/rainbows.js';
// Particles
import { spawnFly, updateFlies } from '../particles/fireflies.js';
import { spawnSpore } from '../particles/spores.js';
import { updateStarMotes } from '../particles/starMotes.js';
import { updateDustMotes } from '../particles/dust.js';
import { spawnDandSeed, updateDandSeeds } from '../particles/seeds.js';
import { updateBubblePops } from '../particles/bubblePops.js';
import { spawnLeaf, updateLeaves } from '../particles/leaves.js';
import { spawnFootprint, updateFootprints } from '../particles/footprints.js';
import { updateOrbBurst } from '../particles/orbBurst.js';
import { updateResonanceRings } from '../particles/resonanceRings.js';
// Quest
import { updateQuestState, getOrbsFound } from '../quest/questState.js';
import { updateQuestVisuals } from '../quest/questVisuals.js';
// Narrative
import { showNarrativePair, updateDiscoveries, checkDiscoveries, checkIdleHints } from '../systems/discoveries.js';
// Systems
import { bioGlow, phase as dayPhase } from '../systems/dayNightCycle.js';
import { windX, windZ, windStrength, weatherState, lightningFlash, isStorming, getRainRate } from '../systems/weather.js';
// Audio
import { updateStepCooldown, updateAmbientSounds } from '../systems/audio.js';
// UI
import { updatePufflingHomes, nearestHouse } from '../entities/world/pufflingHomes.js';
import { updateFragments } from '../systems/fragments.js';
import { checkHouseMemory, checkGlyphEcho, humBandType } from '../systems/memories.js';
import { isHumming, getResonance, getResonanceType, isLocked, getLockType } from '../systems/spiritHum.js';
// Sprint 4: notebook, captions, photo moment, light shafts
import { markSeen as markNotebook } from '../state/notebookState.js';
import { trees_data, mush_data, crys_data, jellies, puffs, deers, moths, grassPatches, flowers, dandelions, fairyRings, ponds, glyphs_data, crystalSortBuf, crystalSortPX, crystalSortPZ, setCrystalSortPos } from '../state/entityStore.js';
import { orbBoost as _orbBoost, attuneFlashTimer as _attuneFlashTimer, decayAttuneFlash, decayEchoTimer, setFeatherFallTimer } from '../state/gameState.js';
// Kernel
import { update as updateContext } from '../kernel/context.js';
import { run as runScheduler } from '../kernel/scheduler.js';
// Registration
import { registerAllSystems, nearest } from '../systems/registration.js';
// Dimming
import { getLocalGlow } from '../systems/dimming.js';
// Echo Visions
import { updateEchoVisions } from '../systems/echoVisions.js';
// Puffling Chat
import { updatePufflingChat } from '../systems/pufflingChat.js';
// Performance Monitor
import { reportTimings, timeStart, timeEnd } from '../systems/perfMonitor.js';
// Visual subsystems (extracted from main.js)
import { updateSpiritHumVisuals } from '../updates/spiritHumVisuals.js';
import { updateAttunementVisuals } from '../updates/attunementVisuals.js';
import { updateCrystalVisuals } from '../updates/crystalVisuals.js';
import { updateVegetation, updateFloraReactions } from '../updates/vegetation.js';
import { updateBubbles, updatePonds, updateWisps, updateEchoBloom, updateFairyRings as _updateFairyRings } from '../updates/magicalEntities.js';
import { spawnFireflies, spawnSpores, spawnWindParticles } from '../updates/spawning.js';
import { updateJellies as _updateJellies, updatePuffs as _updatePuffs, updateDeers as _updateDeers, updateMoths as _updateMoths, updateLuminids as _updateLuminids } from '../updates/fauna.js';

// ================================================================
// Update functions (vegetation, creatures, entities)
// ================================================================

/**
 * @brief Step the jellies and publish the nearest one to the shared proximity record.
 * @param {number} dt seconds since the last frame
 * @param {number} t world time in seconds
 */
export function updateJellies(dt, t) {
  const result = _updateJellies(dt, t);
  nearest.jellyDist2 = result.nearestDist2;
  nearest.jellyPos.x = result.nearestPos.x;
  nearest.jellyPos.z = result.nearestPos.z;
}

/**
 * @brief Step the pufflings and publish the nearest one to the shared proximity record.
 * @param {number} dt seconds since the last frame
 * @param {number} t world time in seconds
 */
export function updatePuffs(dt, t) {
  const result = _updatePuffs(dt, t);
  nearest.puffDist2 = result.nearestDist2;
  nearest.puffPos.x = result.nearestPos.x;
  nearest.puffPos.z = result.nearestPos.z;
}

/**
 * @brief Step the deer and publish the nearest one (and its wander heading) to the shared proximity record.
 * @param {number} dt seconds since the last frame
 * @param {number} t world time in seconds
 */
export function updateDeers(dt, t) {
  const result = _updateDeers(dt, t);
  nearest.deerDist2 = result.nearestDist2;
  nearest.deerPos.x = result.nearestPos.x;
  nearest.deerPos.z = result.nearestPos.z;
  nearest.deerWanderAng = result.nearestWanderAng;
}

/**
 * @brief Step the moths and publish the nearest one, hover height included, to the shared proximity record.
 * @param {number} dt seconds since the last frame
 * @param {number} t world time in seconds
 */
export function updateMoths(dt, t) {
  const result = _updateMoths(dt, t);
  nearest.mothDist2 = result.nearestDist2;
  nearest.mothPos.x = result.nearestPos.x;
  nearest.mothPos.z = result.nearestPos.z;
  nearest.mothPos.y = result.nearestPos.y; // moth hover height — accurate 3D gaze check in attunement
}

function updateLuminids(dt, t) {
  const result = _updateLuminids(dt, t);
  nearest.luminidDist2 = result.nearestDist2;
  nearest.luminidPos.x = result.nearestPos.x;
  nearest.luminidPos.z = result.nearestPos.z;
}

function updateFairyRings(dt, t) {
  const result = _updateFairyRings(dt, t);
  if (result.featherFallTriggered) setFeatherFallTimer(FAIRY_SKY_FEATHER_S);
}

// ================================================================
// Sync Context — updates the kernel context with current frame values
// ================================================================
// Pre-allocated input snapshot — mutated in place every frame so syncContext()
// allocates nothing in the animation loop (matches context.js's own zero-alloc slices).
const _ctxIn = {
  dt: 0, frameDt: 0, t: 0,
  player: null, camera: null,
  sprinting: false, playerIdleTime: 0,
  bioGlow: 0, orbBoost: 1.15, orbsFound: 0,
  windX: 0, windZ: 0, windStrength: 0, weatherState: null,
  lightningFlash: 0, isStorming: false, rainRate: 0,
  dayPhase: 0
};

function syncContext(dt, t) {
  // attune (flashTimer/flashType/echoTimer/humResonance*) and questPhase are no
  // longer mirrored into the kernel ctx — consumers read them directly from the
  // state/* stores via live bindings (same-frame, no stale copy).
  _ctxIn.dt = dt; _ctxIn.frameDt = dt; _ctxIn.t = t;
  _ctxIn.player = player; _ctxIn.camera = camera;
  _ctxIn.sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
  _ctxIn.playerIdleTime = playerIdleTime;
  _ctxIn.bioGlow = bioGlow; _ctxIn.orbBoost = _orbBoost; _ctxIn.orbsFound = getOrbsFound();
  _ctxIn.windX = windX; _ctxIn.windZ = windZ; _ctxIn.windStrength = windStrength;
  _ctxIn.weatherState = weatherState; _ctxIn.lightningFlash = lightningFlash;
  _ctxIn.isStorming = isStorming; _ctxIn.rainRate = getRainRate();
  _ctxIn.dayPhase = dayPhase;
  updateContext(_ctxIn);
}

// ================================================================
// Director
// ================================================================
let dirState = 'EXPLORE';

// Enhancement 8: Slow-mo micro-pause — world holds its breath on attunement flash.
// First 0.4s at 0.3× speed, then ease back to 1.0× over next 0.6s (1.0s total dilation).
// Single source of truth so the player physics (in animate) and the world systems
// (in director) share the exact same time scale during the breath beat.
/**
 * @brief The time scale of the attunement breath beat: 0.3x for the first 0.4 s, easing back to 1x.
 *
 * The one place the dilation is defined, so the player's physics (in the frame
 * loop) and the world's systems (in director) stretch together.
 * @return {number} multiplier on dt, 1 outside the beat
 */
export function attuneTimeScale() {
  if (_attuneFlashTimer > 1.5) { // first 1.0s of the 2.5s window
    const dilationT = (_attuneFlashTimer - 1.5); // 1.0 → 0.0
    return dilationT > 0.6 ? 0.3 : (0.3 + (1.0 - dilationT / 0.6) * 0.7);
  }
  return 1.0;
}

/**
 * @brief One frame of world simulation: sync the kernel context, run every registered system, decay the attunement timers.
 * @param {number} dt real frame delta in seconds
 * @param {number} t world time in seconds
 */
export function director(dt, t) {
  // Sync frame values to kernel context slices (real dt → ctx.dt for decay-style timers).
  syncContext(dt, t);

  // World shares the player's dilated time scale during the attunement breath beat.
  const worldDt = dt * attuneTimeScale();

  // Run all registered systems in phase order
  runScheduler(worldDt, t);

  // Decay on the dilated worldDt — unchanged from the original (preserves the
  // self-stretching breath-beat window the slow-mo produced).
  decayAttuneFlash(worldDt);
  decayEchoTimer(worldDt);
}

// ================================================================
// Director subsystem functions (registered with kernel scheduler)
// ================================================================

function _directorCrystalProximity(dt, t, ctx) {
  timeStart('crystalProximity');
  let nearCrys = false;
  const pPos = ctx.player.pos;
  for (let i = 0; i < crys_data.length; i++) {
    const dx = crys_data[i].x - pPos.x, dz = crys_data[i].z - pPos.z;
    if (dx * dx + dz * dz < 64) { nearCrys = true; break; }
  }
  dirState = nearCrys ? 'NEAR_CRYSTAL' : 'EXPLORE';
  timeEnd('crystalProximity');
}

function _directorParticleSpawn(dt, t, ctx) {
  timeStart('fireflySpawn');
  const w = ctx.weather;
  const p = ctx.player;
  spawnFireflies(dt, t, { dirState, player: p.body, crys_data, flowers, curRain: w.rainRate, spawnFly, updateFlies });
  timeEnd('fireflySpawn');
  timeStart('spores');
  spawnSpores(dt, { player: p.body, mush_data, spawnSpore });
  timeEnd('spores');
}

function _directorFloraGlow(dt, t, ctx) {
  const e = ctx.env;
  // Read attune flash directly from the state store (live binding) so the
  // mushroom flash glow is same-frame, not the one-frame-stale kernel ctx copy.
  const _flash = _attuneFlashTimer;
  const pPos = ctx.player.pos;

  timeStart('mushrooms');
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const mdx = m.x - pPos.x, mdy = (m.group.position.y || 0) - pPos.y, mdz = m.z - pPos.z;
    const md2 = mdx * mdx + mdy * mdy + mdz * mdz;
    if (md2 > 2500) { if (m.group.visible) m.group.visible = false; continue; }
    if (!m.group.visible) m.group.visible = true;
    const p = Math.sin(t * m.speed + m.phase) * 0.5 + 0.5;
    m.capMat.emissiveIntensity = m.base * (0.7 + p * 1.0) * getLocalGlow(m.x, m.z, e.bioGlow * e.orbBoost);
    if (_flash > 0 && md2 < 625) {
      m.capMat.emissiveIntensity += _flash * 0.6;
    }
  }
  timeEnd('mushrooms');

  timeStart('crystals');
  // NOTE: crystal emissiveIntensity + group scale are owned solely by
  // crystalVisuals.js (updateCrystalVisuals). Do NOT write c.mat.emissiveIntensity
  // here — only the spin and the proximity light loop below remain.
  for (let i = 0; i < crys_data.length; i++) {
    const c = crys_data[i];
    c.group.children[0].rotation.y += dt * 0.15;
  }

  if (!crystalSortBuf.length) {
    for (let i = 0; i < crys_data.length; i++) crystalSortBuf.push({ idx: i, dist: 0 });
  }
  const csDX = pPos.x - crystalSortPX, csDZ = pPos.z - crystalSortPZ;
  if (csDX * csDX + csDZ * csDZ > 1) {
    setCrystalSortPos(pPos.x, pPos.z);
    for (let i = 0; i < crys_data.length; i++) {
      const c = crys_data[i];
      const dx = c.x - pPos.x, dz = c.z - pPos.z;
      crystalSortBuf[i].idx = i;
      crystalSortBuf[i].dist = dx * dx + dz * dz;
    }
    crystalSortBuf.sort((a, b) => a.dist - b.dist);
  }
  for (let i = 0; i < crystalLights.length; i++) {
    if (i < crystalSortBuf.length && crystalSortBuf[i].dist < 2500) {
      const c = crys_data[crystalSortBuf[i].idx];
      const p = Math.sin(t * 0.6 + c.phase) * 0.5 + 0.5;
      crystalLights[i].position.set(c.x, 1.5, c.z);
      crystalLights[i].intensity = (1.5 + p * 2.0) * getLocalGlow(c.x, c.z, e.bioGlow * e.orbBoost);
      crystalLights[i].distance = 16;
      crystalLights[i].color.setHex(C.crystal);
    } else {
      crystalLights[i].intensity = 0;
    }
  }
  timeEnd('crystals');

  timeStart('vegetation');
  const w = ctx.weather;
  spawnWindParticles(dt, t, { player: ctx.player.body, dandelions, trees_data, windStrength: w.windStrength, isStorming: w.isStorming, spawnDandSeed, spawnLeaf });
  timeEnd('vegetation');
}

function _directorFaunaUpdate(dt, t, ctx) {
  timeStart('fauna');
  try { updateJellies(dt, t); } catch (e) { console.warn('jelly update error:', e); }
  try { updatePuffs(dt, t); } catch (e) { console.warn('puff update error:', e); }
  try { updateDeers(dt, t); } catch (e) { console.warn('deer update error:', e); }
  try { updateMoths(dt, t); } catch (e) { console.warn('moth update error:', e); }
  try { updateLuminids(dt, t); } catch (e) { console.warn('luminid update error:', e); }
  timeEnd('fauna');
}

function _directorSpiritHum(dt, t, ctx) {
  updateSpiritHumVisuals(dt);
}

function _directorCrystalVisuals(dt, t, ctx) {
  updateCrystalVisuals(dt, t);
}

function _directorAttunement(dt, t, ctx) {
  updateAttunementVisuals(dt, t, ctx);
}

function _directorSkyWish(dt, t, ctx) {
  const _wish = checkShootingStarWish(pitch, ctx.env.orbsFound);
  if (_wish) { showNarrativePair(_wish, 5.0); markNotebook('sky.wish'); }
}

function _directorRocks(dt, t, ctx) {
  timeStart('rocks');
  const p = ctx.player;
  updateProceduralRocks(p.pos.x, p.pos.y, p.pos.z, p.camera);
  timeEnd('rocks');
}

function _directorMagical(dt, t, ctx) {
  timeStart('particles');
  const p = ctx.player;
  updateWisps(dt, t);
  updateDandelions(dandelions, dt, t, p.pos);
  updateFairyRings(dt, t);
  updateBubbles(dt, t);
  updatePonds(dt, t);
  updateEchoVisions(dt, t, p.sprinting);
  timeEnd('particles');
}

function _directorParticles(dt, t, ctx) {
  const pPos = ctx.player.pos;
  updateStarMotes(dt, t, pPos);
  updateDandSeeds(dt, t, ctx);
  updateLeaves(dt, t);
  updateDustMotes(dt);
  updateBubblePops(dt);
  updateOrbBurst(dt, t);
  updateEchoBloom(dt, t);
  updateResonanceRings(dt);
}

function _directorQuest(dt, t, ctx) {
  timeStart('quest');
  updateFloraReactions(dt, t);
  updateQuestState(dt);
  updateQuestVisuals(dt, t);
  updateRainbowSparkles(t, dt);
  timeEnd('quest');
}

function _directorFootprints(dt, t, ctx) {
  timeStart('footprints');
  const p = ctx.player;
  if (p.body && p.body.onGround) {
    const speed2 = p.body.vel.x * p.body.vel.x + p.body.vel.z * p.body.vel.z;
    if (speed2 > 0.5) {
      const moveAngle = Math.atan2(p.body.vel.x, p.body.vel.z);
      spawnFootprint(p.pos.x, p.pos.z, moveAngle, p.sprinting);
    }
  }
  updateFootprints(dt, ctx.weather.rainRate);
  timeEnd('footprints');
}

function _directorAudio(dt, t, ctx) {
  timeStart('audio');
  updateAmbientSounds(dt, ctx.player.pos, ponds, grassPatches, ctx.env.dayPhase, ctx.weather.rainRate);
  updateStepCooldown(dt);
  timeEnd('audio');
}

function _directorDiscoveries(dt, t, ctx) {
  // Full-rate slice: the puffling speech-bubble re-projects a MOVING entity to
  // screen space every frame, so it must stay at 60 Hz or the bubble visibly
  // lags the puffling. (The heavy discovery/idle/glyph checks are throttled in
  // _directorDiscoveryChecks below.)
  timeStart('discoveries');
  updatePufflingChat(dt, renderer.domElement);
  timeEnd('discoveries');
}

function _directorDiscoveryChecks(dt, t, ctx) {
  // Throttled system (registered everyN>1 in registration.js): dt is the
  // ACCUMULATED time since the last run, so the fade/idle/glyph timers below
  // stay wall-clock correct even though this runs at a reduced cadence. None of
  // this work affects motion (proximity-discovery text + idle hints + glyph
  // reveal), so a few-frame latency is imperceptible.
  timeStart('discoveryChecks');
  const p = ctx.player;
  checkDiscoveries(p.pos, deers, puffs, jellies, moths, fairyRings, ponds, 0);
  checkIdleHints(p.idleTime, dt);
  updateDiscoveries(dt, t);
  // Small noticings, on the same throttled beat as the discoveries they sit
  // beside: a village at dusk, a glyph that answers a hum, and whichever
  // fragment is next in line.
  checkHouseMemory(p.pos.x, p.pos.z, p.idleTime, dayPhase, nearestHouse);
  checkGlyphEcho(p.pos.x, p.pos.z,
    humBandType(isHumming(), getResonance(), getResonanceType(), isLocked(), getLockType()), glyphs_data);
  updateFragments(dt);
  timeEnd('discoveryChecks');
}

/**
 * @brief Hand the director's slices to the kernel scheduler.
 *
 * Each section of director() is a named system with an explicit phase. Systems
 * can be switched off with scheduler.setEnabled(name, false) or replaced by
 * removing and re-adding under the same phase. Called once from boot, after
 * everything the slices read has been initialised.
 */
export function registerDirectorSystems() {
  registerAllSystems({
    crystalProximity: (dt, t, ctx) => _directorCrystalProximity(dt, t, ctx),
    particleSpawn: (dt, t, ctx) => _directorParticleSpawn(dt, t, ctx),
    floraGlow: (dt, t, ctx) => _directorFloraGlow(dt, t, ctx),
    crystalVisualsUpdate: (dt, t, ctx) => _directorCrystalVisuals(dt, t, ctx),
    faunaUpdate: (dt, t, ctx) => _directorFaunaUpdate(dt, t, ctx),
    spiritHumUpdate: (dt, t, ctx) => _directorSpiritHum(dt, t, ctx),
    attunementUpdate: (dt, t, ctx) => _directorAttunement(dt, t, ctx),
    skyUpdate: (dt, t, ctx) => { updateSky(dt, t); _directorSkyWish(dt, t, ctx); },
    vegetationUpdate: (dt, t, ctx) => { updateVegetation(dt, t); updatePufflingHomes(); },
    rocksUpdate: (dt, t, ctx) => _directorRocks(dt, t, ctx),
    magicalUpdate: (dt, t, ctx) => _directorMagical(dt, t, ctx),
    particleUpdate: (dt, t, ctx) => _directorParticles(dt, t, ctx),
    questUpdate: (dt, t, ctx) => _directorQuest(dt, t, ctx),
    footprintUpdate: (dt, t, ctx) => _directorFootprints(dt, t, ctx),
    audioUpdate: (dt, t, ctx) => _directorAudio(dt, t, ctx),
    discoveriesUpdate: (dt, t, ctx) => _directorDiscoveries(dt, t, ctx),
    discoveryChecksUpdate: (dt, t, ctx) => _directorDiscoveryChecks(dt, t, ctx),
    perfReportUpdate: (dt, t, ctx) => reportTimings(renderer),
  });
}

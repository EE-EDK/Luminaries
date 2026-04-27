// ================================================================
// Dimming System — Sector-Based BioGlow Suppression
// ================================================================
// The world is divided into 5 equal angular sectors ("pizza slices")
// radiating from the obelisk at world center (0, 0). Each sector
// contains one orb. Collecting the orb restores the entire sector
// to full brightness. Unrestored sectors are heavily dimmed.
//
// ARCHIVE NOTE (Dr. R. Vasquez, field log 7.12):
//   The suppression wasn't always this severe. Early sensor readings
//   show the entire canopy once sustained a baseline luminance of
//   ~1.0 across all quadrants. Something dimmed it. The orbs appear
//   to act as restoration anchors — when one is activated, its entire
//   meridian resumes original emission patterns in a radial wave.
//   As if the forest remembers what it was, and the orb gives it
//   permission to be that again.
//   We still don't know what caused The Dimming in the first place.

import { DIMMING_FACTOR, DIMMING_WAVE_SPEED, ORB_N } from '../constants.js';
import { on, Events } from '../kernel/eventBus.js';
import { bubblePulseTimer, bubblePulsePos, crystalChainTimer, crystalChainPos } from '../state/gameState.js';

let orbs = null;
const restoredSectors = [];

// Sector geometry — 5 equal slices of 2π
const SECTOR_SIZE = (2 * Math.PI) / ORB_N;
// Angular width of the smooth blend at sector edges (radians, ~5°)
const EDGE_BLEND = 0.09;

const ONE_MINUS_DIM = 1.0 - DIMMING_FACTOR;

// Per-orb restoration wave state
const waves = [];

/** Per-frame cell cache for sector multiplier (~2.5m cells; cleared after updateDimming each frame). */
const _localGlowMultCache = new Map();

function _anyRestorationWaveActive() {
  for (let i = 0; i < waves.length; i++) {
    if (waves[i].active) return true;
  }
  return false;
}

/** Call once per frame after updateDimming() before heavy getLocalGlow traffic. */
export function prepareLocalGlowFrame() {
  _localGlowMultCache.clear();
}

/**
 * Sector / wave multiplier only (1.0, DIMMING_FACTOR, or edge blend). No globalBio.
 */
function _computeLocalGlowMultiplier(x, z) {
  let angle = Math.atan2(z, x);
  if (angle < 0) angle += 2 * Math.PI;
  const sectorIdx = Math.floor(angle / SECTOR_SIZE) % ORB_N;

  if (sectorIdx < restoredSectors.length && restoredSectors[sectorIdx]) {
    const w = waves[sectorIdx];
    if (w.active) {
      const d2 = x * x + z * z;
      const r2 = w.radius * w.radius;
      if (d2 > r2) return DIMMING_FACTOR;
    }
    return 1.0;
  }

  const posInSector = angle / SECTOR_SIZE - sectorIdx;
  const edgeDist = Math.min(posInSector, 1.0 - posInSector);
  const edgeAngle = edgeDist * SECTOR_SIZE;

  if (edgeAngle < EDGE_BLEND) {
    const adjIdx = posInSector < 0.5
      ? (sectorIdx - 1 + ORB_N) % ORB_N
      : (sectorIdx + 1) % ORB_N;

    if (adjIdx < restoredSectors.length && restoredSectors[adjIdx]) {
      const t = edgeAngle / EDGE_BLEND;
      const factor = DIMMING_FACTOR + ONE_MINUS_DIM * (0.5 + 0.5 * Math.cos(t * Math.PI));
      return factor;
    }
  }

  return DIMMING_FACTOR;
}

// ================================================================
// Init — call once after orbs are placed
// ================================================================
export function initDimming(orbsArray) {
  orbs = orbsArray;
  waves.length = 0;
  restoredSectors.length = 0;
  for (let i = 0; i < orbs.length; i++) {
    waves.push({ active: false, elapsed: 0, radius: 0 });
    restoredSectors.push(false);
  }
  // Subscribe to kernel events (decoupled alternative to callback)
  on(Events.ORB_COLLECTED, (d) => { notifyOrbCollected(d.orbIndex); });
}

// ================================================================
// Notify — call when an orb is collected
// ================================================================
export function notifyOrbCollected(orbIndex) {
  if (orbIndex >= 0 && orbIndex < waves.length) {
    restoredSectors[orbIndex] = true;
    waves[orbIndex].active = true;
    waves[orbIndex].elapsed = 0;
    waves[orbIndex].radius = 0;
  }
}

// ================================================================
// Update — advance wave timers, call once per frame
// ================================================================
export function updateDimming(dt) {
  for (let i = 0; i < waves.length; i++) {
    const w = waves[i];
    if (!w.active) continue;
    w.elapsed += dt;
    w.radius = w.elapsed * DIMMING_WAVE_SPEED;
    // Wave expands until it covers the full world radius (~90m)
    if (w.radius >= 100) {
      w.active = false;
      w.radius = 100;
    }
  }
}

// ================================================================
// Helper — get which sector index a world position belongs to
// ================================================================
function getSector(x, z) {
  let angle = Math.atan2(z, x); // -π to π
  if (angle < 0) angle += 2 * Math.PI; // 0 to 2π
  return Math.floor(angle / SECTOR_SIZE) % ORB_N;
}

// ================================================================
// getLocalGlow — returns adjusted bioGlow for a world position
// ================================================================
// Called per visible entity per frame. Must be fast.
export function getLocalGlow(x, z, globalBio) {
  if (!orbs) return globalBio;

  // Wave 2: Bubble pop micro-pulse (1.5x boost, 3m radius)
  if (bubblePulseTimer > 0) {
    const dx = x - bubblePulsePos.x, dz = z - bubblePulsePos.z;
    if (dx * dx + dz * dz < 9) { // 3m radius
      return globalBio * 1.5;
    }
  }

  // Wave 3: Crystal resonance chain corridor boost (1.3x boost, 6m radius)
  if (crystalChainTimer > 0) {
    const dx = x - crystalChainPos.x, dz = z - crystalChainPos.z;
    if (dx * dx + dz * dz < 36) { // 6m radius
      return globalBio * 1.3;
    }
  }

  // Sector math: cache ~2.5m cells when no active restoration wave (radius changes every frame).
  if (!_anyRestorationWaveActive()) {
    const cx = Math.floor(x * 0.4);
    const cz = Math.floor(z * 0.4);
    const ck = cx * 131071 + cz;
    let mult = _localGlowMultCache.get(ck);
    if (mult === undefined) {
      mult = _computeLocalGlowMultiplier(x, z);
      _localGlowMultCache.set(ck, mult);
    }
    return globalBio * mult;
  }

  return globalBio * _computeLocalGlowMultiplier(x, z);
}

// ================================================================
// isRestored — boolean check for future Phase 2 features
// ================================================================
export function isRestored(x, z) {
  if (!orbs) return false;
  const sectorIdx = getSector(x, z);
  return sectorIdx < restoredSectors.length && restoredSectors[sectorIdx];
}

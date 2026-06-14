// ================================================================
// Spirit Hum — Two-Phase Creature Unlock System
// ================================================================
// Phase 1 (Spirit Hum): Desktop — F toggles hum; Q / E or R nudges pitch (see spiritHumVisuals).
// Mobile — HUM slider. Continuous tone while active (80–700 Hz). When pitch
// enters a creature's resonance band and is sustained for 2s, it locks.
//
// Phase 2 (Resonance): With pitch locked, performing the creature's
// physical behavior (jump/rhythm/walk/orbit) builds attunement.
// Neither humming alone nor behavior alone unlocks — both required.
//
// FIELD LOG (Dr. Oduya, observation blind #4, addendum):
//   We told Subject 12 about the frequencies. She closed her eyes
//   and hummed — low at first, searching. When she found the deer's
//   register, the monitoring device nearly overloaded. The creatures
//   didn't just respond. They harmonized. The forest floor pulsed
//   with rings of light we'd never documented.
//   She walked beside them, humming their note. For 12 seconds,
//   three species existed as one frequency.
//
// B4: Magnetic snap resolves ties by nearest creature (not fixed array order).
// B2: Far-field hint (20–40 m) surfaces pitch match without granting lock.
// C2: primeHumForCreature() nudges pitch toward a band center before lock.
// New exports: primeHumForCreature, getFarFieldHint, getLockDecay.

import { emit, Events } from '../kernel/eventBus.js';
import {
  HUM_FREQ_MIN, HUM_FREQ_MAX, HUM_LOCK_TIME, HUM_LOCK_DECAY,
  HUM_BAND_DEER, HUM_BAND_MOTH, HUM_BAND_JELLY, HUM_BAND_PUFF
} from '../constants.js';

// ================================================================
// Resonance bands — ordered low to high
// ================================================================
const BANDS = [
  { center: HUM_BAND_DEER.center,  tol: HUM_BAND_DEER.tol,  type: 'deer' },
  { center: HUM_BAND_MOTH.center,  tol: HUM_BAND_MOTH.tol,  type: 'moth' },
  { center: HUM_BAND_JELLY.center, tol: HUM_BAND_JELLY.tol, type: 'jelly' },
  { center: HUM_BAND_PUFF.center,  tol: HUM_BAND_PUFF.tol,  type: 'puff' },
];

// Creature proximity threshold for close-range resonance / lock (squared, 20m)
const RESONANCE_RANGE2 = 400;
// Far-field: in-band but creature 20–40 m away — hint only, no lock granted
const FAR_FIELD_MIN2 = 400;   // > 20 m (exclusive — within this = close range)
const FAR_FIELD_MAX2 = 1600;  // < 40 m (inclusive)

// Pre-allocated scratch for getFarFieldHint (no per-call allocation)
const _farFieldResult = { type: null, dist: 0 };

// Last nearestCreatures snapshot — updated each frame by updateHum so
// getFarFieldHint can be called from outside the update (e.g., visuals frame).
let _lastNearestCreatures = { deerDist2: Infinity, jellyDist2: Infinity, mothDist2: Infinity, puffDist2: Infinity };

// ================================================================
// State
// ================================================================
let humActive = false;
let humPitch = 300;          // current smoothed Hz
let humTarget = 300;         // target Hz from input
let pitchLocked = false;     // Phase 1 complete
let lockType = null;         // 'puff' | 'jelly' | 'deer' | 'moth'
let lockTimer = 0;           // seconds spent in resonance band
let lockDecay = 0;           // countdown after releasing hum
let resonance = 0;           // 0–1 how close to center of nearest band
let resonanceType = null;    // which band we're resonating with (or null)
let _justLocked = false;     // one-frame flag when lock first happens

// ================================================================
// API
// ================================================================

export function startHum() {
  if (pitchLocked) return; // already locked, no need to hum
  humActive = true;
}

export function stopHum() {
  humActive = false;
}

// Called each frame from director
// inputY: 0 = top of screen (high pitch), 1 = bottom (low pitch)
// nearestCreatures: { deerDist2, jellyDist2, mothDist2, puffDist2 }
export function updateHum(dt, inputY, nearestCreatures) {
  _justLocked = false;
  // Keep snapshot current for getFarFieldHint (called by visuals outside update)
  _lastNearestCreatures = nearestCreatures;

  // Handle lock decay when not humming
  if (pitchLocked && !humActive) {
    lockDecay -= dt;
    if (lockDecay <= 0) {
      pitchLocked = false;
      lockType = null;
      lockDecay = 0;
      lockTimer = 0;
    }
  }

  if (!humActive) {
    // Fade resonance when not humming
    if (resonance > 0) resonance = Math.max(0, resonance - dt * 2);
    return;
  }

  // Map inputY (0=top=high, 1=bottom=low) to frequency
  // Invert: top of screen = high pitch
  humTarget = HUM_FREQ_MAX - inputY * (HUM_FREQ_MAX - HUM_FREQ_MIN);

  // Magnetic snapping — pull toward the in-range band whose creature is NEAREST
  // (B4: resolve overlap ties by proximity, not fixed array order)
  let _snapBest = null;
  let _snapBestDist2 = Infinity;
  for (let i = 0; i < BANDS.length; i++) {
    const band = BANDS[i];
    const delta = Math.abs(humTarget - band.center);
    if (delta >= band.tol * 1.5) continue;
    let dist2 = Infinity;
    switch (band.type) {
      case 'deer':  dist2 = nearestCreatures.deerDist2;  break;
      case 'moth':  dist2 = nearestCreatures.mothDist2;  break;
      case 'jelly': dist2 = nearestCreatures.jellyDist2; break;
      case 'puff':  dist2 = nearestCreatures.puffDist2;  break;
    }
    if (dist2 > RESONANCE_RANGE2) continue;
    if (dist2 < _snapBestDist2) {
      _snapBestDist2 = dist2;
      _snapBest = band;
    }
  }
  if (_snapBest !== null) {
    const delta = Math.abs(humTarget - _snapBest.center);
    const proximity = 1.0 - delta / (_snapBest.tol * 1.5);
    humTarget += (_snapBest.center - humTarget) * 0.25 * proximity;
  }

  // Smooth pitch glide (~80ms time constant)
  const glideRate = 12; // ~1/0.08
  humPitch += (humTarget - humPitch) * Math.min(glideRate * dt, 1);

  // Find nearest resonance band (only if creature of that type is nearby)
  resonance = 0;
  resonanceType = null;
  let bestResonance = 0;

  for (let i = 0; i < BANDS.length; i++) {
    const band = BANDS[i];
    const delta = Math.abs(humPitch - band.center);
    if (delta >= band.tol) continue;

    // Check if a creature of this type is within range
    let dist2 = Infinity;
    switch (band.type) {
      case 'deer':  dist2 = nearestCreatures.deerDist2;  break;
      case 'moth':  dist2 = nearestCreatures.mothDist2;  break;
      case 'jelly': dist2 = nearestCreatures.jellyDist2; break;
      case 'puff':  dist2 = nearestCreatures.puffDist2;  break;
    }
    if (dist2 > RESONANCE_RANGE2) continue;

    // Resonance strength: 1.0 at center, 0.0 at edge
    const r = 1.0 - delta / band.tol;
    if (r > bestResonance) {
      bestResonance = r;
      resonanceType = band.type;
    }
  }

  resonance = bestResonance;

  // Build lock timer if resonating (shared boundary 0.12 — no dead band)
  if (resonance > 0.12 && !pitchLocked) {
    // Stronger resonance builds faster
    lockTimer += dt * (0.5 + resonance * 0.5);
    if (lockTimer >= HUM_LOCK_TIME) {
      pitchLocked = true;
      lockType = resonanceType;
      lockDecay = HUM_LOCK_DECAY;
      _justLocked = true;
      emit(Events.PITCH_LOCKED, { type: resonanceType });
      // Snap pitch to exact center
      for (let i = 0; i < BANDS.length; i++) {
        if (BANDS[i].type === lockType) {
          humPitch = BANDS[i].center;
          humTarget = BANDS[i].center;
          break;
        }
      }
      // Stop humming automatically once locked
      humActive = false;
    }
  } else if (resonance <= 0.12) {
    // Decay lock timer when not in any band (shared boundary — no (0.10,0.15] freeze)
    lockTimer = Math.max(0, lockTimer - dt * 0.5);
  }
}

// ================================================================
// Getters
// ================================================================

export function isHumming() {
  return humActive;
}

export function isLocked() {
  return pitchLocked;
}

export function getLockType() {
  return lockType;
}

export function getHumPitch() {
  return humPitch;
}

export function getResonance() {
  return resonance;
}

export function getResonanceType() {
  return resonanceType;
}

export function getLockProgress() {
  return Math.min(lockTimer / HUM_LOCK_TIME, 1.0);
}

export function justLocked() {
  return _justLocked;
}

// ----------------------------------------------------------------
// getLockDecay — remaining lock-decay seconds (0 when not locked)
// Used by visuals to show how long the lock persists.
// ----------------------------------------------------------------
export function getLockDecay() {
  return pitchLocked ? Math.max(0, lockDecay) : 0;
}

// ----------------------------------------------------------------
// getFarFieldHint — B2: pitch is inside a creature band but nearest
// creature is in the far-field range (20–40 m). Returns
// {type, dist} so the visuals layer can show "get closer" cue,
// OR null when no such condition applies.
//
// Uses the pre-allocated _farFieldResult object (no per-frame alloc).
// Only meaningful while humming and not already locked.
// ----------------------------------------------------------------
export function getFarFieldHint() {
  if (!humActive || pitchLocked) return null;

  for (let i = 0; i < BANDS.length; i++) {
    const band = BANDS[i];
    const delta = Math.abs(humPitch - band.center);
    if (delta >= band.tol) continue; // not in this band

    let dist2 = Infinity;
    switch (band.type) {
      case 'deer':  dist2 = _lastNearestCreatures.deerDist2;  break;
      case 'moth':  dist2 = _lastNearestCreatures.mothDist2;  break;
      case 'jelly': dist2 = _lastNearestCreatures.jellyDist2; break;
      case 'puff':  dist2 = _lastNearestCreatures.puffDist2;  break;
    }

    if (dist2 > FAR_FIELD_MIN2 && dist2 <= FAR_FIELD_MAX2) {
      _farFieldResult.type = band.type;
      _farFieldResult.dist = Math.sqrt(dist2); // acceptable: called by UI, not per-frame hot path
      return _farFieldResult;
    }
  }
  return null;
}

// ----------------------------------------------------------------
// primeHumForCreature — C2: nudge humPitch and humTarget to ~80% of
// the way toward a creature's band center so the player starts near
// the right frequency after consuming an orb, without auto-locking.
// No-op for null / 'any' / unknown types.
// ----------------------------------------------------------------
export function primeHumForCreature(type) {
  if (!type || type === 'any') return;
  let band = null;
  for (let i = 0; i < BANDS.length; i++) {
    if (BANDS[i].type === type) { band = BANDS[i]; break; }
  }
  if (!band) return;

  // Place pitch 40% of tolerance ABOVE center (slightly off-center so
  // the player must make a small intentional adjustment to lock).
  const offset = band.tol * 0.40;
  const target = band.center + offset;
  humPitch = target;
  humTarget = target;
}

// Reset — called when frequency is consumed (orb collected)
export function resetLock() {
  pitchLocked = false;
  lockType = null;
  lockTimer = 0;
  lockDecay = 0;
  resonance = 0;
  resonanceType = null;
  humActive = false;
  _justLocked = false;
}

// Refresh lock decay timer — called by attunement when actively gaining
export function refreshLock() {
  if (pitchLocked) lockDecay = HUM_LOCK_DECAY;
}

/** DEV: force pitch-lock to a creature band (requires nearby creature for gameplay; use from debug console). */
export function debugForcePitchLock(type) {
  const band = BANDS.find((b) => b.type === type);
  if (!band) return false;
  pitchLocked = true;
  lockType = type;
  lockDecay = HUM_LOCK_DECAY;
  lockTimer = HUM_LOCK_TIME;
  humPitch = band.center;
  humTarget = band.center;
  humActive = false;
  resonance = 1;
  resonanceType = type;
  return true;
}

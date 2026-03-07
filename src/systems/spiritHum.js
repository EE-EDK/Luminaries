// ================================================================
// Spirit Hum — Two-Phase Creature Unlock System
// ================================================================
// Phase 1 (Spirit Hum): Player holds right-click/HUM button to emit
// a continuous tone. Mouse Y controls pitch (80–700 Hz). When pitch
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

// Creature proximity threshold for resonance (squared, 20m)
const RESONANCE_RANGE2 = 400;

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

  // Magnetic snapping — gently pull toward nearby creature band center
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
    const proximity = 1.0 - delta / (band.tol * 1.5);
    humTarget += (band.center - humTarget) * 0.25 * proximity;
    break;
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

  // Build lock timer if resonating (low threshold so edge-of-band still progresses)
  if (resonance > 0.15 && !pitchLocked) {
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
  } else if (resonance <= 0.1) {
    // Decay lock timer when not in any band
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

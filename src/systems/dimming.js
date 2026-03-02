// ================================================================
// Dimming System — Zone-Based BioGlow Suppression
// ================================================================
// Entities near collected orbs glow at full intensity.
// Entities far from any collected orb are dimmed.
// Collecting an orb triggers a restoration wave radiating outward.
//
// ARCHIVE NOTE (Dr. R. Vasquez, field log 7.12):
//   The suppression wasn't always this severe. Early sensor readings
//   show the entire canopy once sustained a baseline luminance of
//   ~1.0 across all quadrants. Something dimmed it. The orbs appear
//   to act as restoration anchors — when one is activated, local
//   flora resume their original emission patterns in a radial wave.
//   As if the forest remembers what it was, and the orb gives it
//   permission to be that again.
//   We still don't know what caused The Dimming in the first place.

import { ORB_RESTORE_R, DIMMING_FACTOR, DIMMING_TRANSITION, DIMMING_WAVE_SPEED } from '../constants.js';

let orbs = null;

// Pre-computed squared distances
const RESTORE_R_SQ = ORB_RESTORE_R * ORB_RESTORE_R;
const OUTER_R = ORB_RESTORE_R + DIMMING_TRANSITION;
const OUTER_R_SQ = OUTER_R * OUTER_R;

// Per-orb restoration wave state
const waves = [];

// Reusable — avoid allocations in hot path
const ONE_MINUS_DIM = 1.0 - DIMMING_FACTOR;

// ================================================================
// Init — call once after orbs are placed
// ================================================================
export function initDimming(orbsArray) {
  orbs = orbsArray;
  waves.length = 0;
  for (let i = 0; i < orbs.length; i++) {
    waves.push({ active: false, elapsed: 0, radius: 0 });
  }
}

// ================================================================
// Notify — call when an orb is collected
// ================================================================
export function notifyOrbCollected(orbIndex) {
  if (orbIndex >= 0 && orbIndex < waves.length) {
    waves[orbIndex].active = false;
    waves[orbIndex].radius = ORB_RESTORE_R;
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
    if (w.radius >= ORB_RESTORE_R) {
      w.active = false;
      w.radius = ORB_RESTORE_R;
    }
  }
}

// ================================================================
// getLocalGlow — returns adjusted bioGlow for a world position
// ================================================================
// Called per visible entity per frame. Must be fast.
// Loops over 5 orbs (constant), uses squared distances, no sqrt.
export function getLocalGlow(x, z, globalBio) {
  if (!orbs) return globalBio;

  let bestFactor = DIMMING_FACTOR;

  for (let i = 0; i < orbs.length; i++) {
    const o = orbs[i];
    if (!o.found) continue;

    const dx = x - o.x, dz = z - o.z;
    const d2 = dx * dx + dz * dz;

    // Determine effective restore radius (wave or full)
    const w = waves[i];
    const effectiveR = w.active ? w.radius : ORB_RESTORE_R;
    const effectiveR2 = effectiveR * effectiveR;
    const outerR = effectiveR + DIMMING_TRANSITION;
    const outerR2 = outerR * outerR;

    if (d2 <= effectiveR2) {
      // Fully inside restored zone
      return globalBio; // factor = 1.0, early exit (best possible)
    } else if (d2 < outerR2) {
      // In transition band — cosine blend
      const d = Math.sqrt(d2);
      const t = (d - effectiveR) / DIMMING_TRANSITION;
      const factor = DIMMING_FACTOR + ONE_MINUS_DIM * (0.5 + 0.5 * Math.cos(t * Math.PI));
      if (factor > bestFactor) bestFactor = factor;
    }
    // else: outside this orb's range, keep current bestFactor
  }

  return globalBio * bestFactor;
}

// ================================================================
// isRestored — boolean check for future Phase 2 features
// ================================================================
export function isRestored(x, z) {
  if (!orbs) return false;
  for (let i = 0; i < orbs.length; i++) {
    const o = orbs[i];
    if (!o.found) continue;
    const dx = x - o.x, dz = z - o.z;
    if (dx * dx + dz * dz <= RESTORE_R_SQ) return true;
  }
  return false;
}

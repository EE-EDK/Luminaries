// ================================================================
// Creature Attunement — Symbiotic Frequency Matching
// ================================================================
// The player synchronizes with creatures by matching their energy.
// Sprint near pufflings to build attunement. At full sync, the player
// "carries" the creature's frequency — needed to activate orbs.
//
// FIELD LOG (Dr. K. Oduya, observation blind #4):
//   Subject 12 discovered it by accident. She was running alongside the
//   pufflings — playing, we thought — and her monitoring device shifted
//   spectrum. The creatures' bioluminescent output synchronized with her
//   movement. For 6.7 seconds, her biosignature was indistinguishable
//   from theirs. The nearest orb began to resonate.
//   We've started calling it "attunement." The creatures call it nothing.
//   They just know.

import { ATTUNE_RATE, ATTUNE_DECAY, ATTUNE_SPRINT_R2 } from '../constants.js';

// ================================================================
// State
// ================================================================
let playerFrequency = null;  // 'puff' | 'jelly' | 'deer' | 'moth' | null
let attunement = 0.0;        // 0.0–1.0 progress toward creature type
let attunementTarget = null;  // which creature we're building toward
let flashPending = false;     // true for one frame when attunement hits 1.0

// ================================================================
// Update — called once per frame from director
// ================================================================
// Returns current attunement value (0.0–1.0) for visual/audio feedback.
// When attunement first reaches 1.0, flashPending is set true.
export function updateAttunement(dt, sprinting, nearestPuffDist2) {
  // Puffling matching: sprint within 8m of nearest puffling
  if (sprinting && nearestPuffDist2 < ATTUNE_SPRINT_R2 && nearestPuffDist2 < Infinity) {
    if (attunementTarget !== 'puff') {
      // Switching targets resets progress
      attunementTarget = 'puff';
      attunement = 0;
    }
    attunement += ATTUNE_RATE * dt;
    if (attunement >= 1.0 && playerFrequency !== 'puff') {
      attunement = 1.0;
      playerFrequency = 'puff';
      flashPending = true;
    }
  } else if (attunementTarget === 'puff' && attunement > 0 && playerFrequency !== 'puff') {
    // Decay when not matching (but don't decay once frequency is carried)
    attunement = Math.max(0, attunement - ATTUNE_DECAY * dt);
    if (attunement === 0) attunementTarget = null;
  }

  return attunement;
}

// ================================================================
// Getters
// ================================================================
export function getAttunement() {
  return attunement;
}

export function getAttunementTarget() {
  return attunementTarget;
}

export function getPlayerFrequency() {
  return playerFrequency;
}

// ================================================================
// Consume — called when orb is collected, resets frequency
// ================================================================
export function consumeFrequency() {
  playerFrequency = null;
  attunement = 0;
  attunementTarget = null;
  flashPending = false;
}

// ================================================================
// Flash check — returns true once when full attunement is first reached
// ================================================================
export function checkFlash() {
  if (flashPending) {
    flashPending = false;
    return true;
  }
  return false;
}

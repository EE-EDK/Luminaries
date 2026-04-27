// ================================================================
// Creature Attunement — Symbiotic Frequency Matching
// ================================================================
// The player synchronizes with creatures by matching their energy.
// Each creature type has a unique matching mechanic:
//   Puffling — Jump near syncing pufflings within 15m (they glow brighter each jump)
//   Jelly    — Stand still within 6m, tap LEFT-CLICK in rhythm (±0.3s)
//   Deer     — Walk (no sprint) within 12m, same direction (±45°)
//   Moth     — Move laterally within 8m, look toward moth
//
// FIELD LOG (Dr. K. Oduya, observation blind #4):
//   Subject 12 discovered it by accident. She was running alongside the
//   pufflings — playing, we thought — and her monitoring device shifted
//   spectrum. The creatures' bioluminescent output synchronized with her
//   movement. For 6.7 seconds, her biosignature was indistinguishable
//   from theirs. The nearest orb began to resonate.
//   We've started calling it "attunement." The creatures call it nothing.
//   They just know.

import { ATTUNE_RATE, ATTUNE_DECAY, ATTUNE_JUMP_R2, WEATHER_ATTUNE_MODS } from '../constants.js';
import { emit, Events } from '../kernel/eventBus.js';
import { isLocked, getLockType, resetLock, refreshLock } from './spiritHum.js';

// ================================================================
// Constants
// ================================================================
const JELLY_R2 = 100;       // 10m squared — must be within 10m
const DEER_R2_MIN = 64;     // 8m squared — must be 8-12m away
const DEER_R2_MAX = 144;    // 12m squared
const MOTH_R2 = 64;         // 8m squared — must be within 8m
const JELLY_RHYTHM = 2.0;   // expected pulse interval in seconds
const JELLY_TOLERANCE = 0.3; // ±0.3s tolerance for rhythm match
const DEER_ANGLE_TOL = 0.785; // ±45° (π/4 radians)

// ================================================================
// State
// ================================================================
let playerFrequency = null;  // 'puff' | 'jelly' | 'deer' | 'moth' | null
let attunement = 0.0;        // 0.0–1.0 progress toward creature type
let attunementTarget = null;  // which creature we're building toward
let flashPending = false;     // true for one frame when attunement hits 1.0
let flashCreaturePos = null;  // position of creature when flash triggers

// Jelly rhythm tracking
let _jellyTapTimes = [];        // timestamps of recent rhythm taps
let _jellyLastPulseInput = false;  // previous frame's tap state (edge detect)

// Puff jump edge detection
let _puffWasJumping = false;  // previous frame's jump state

// ================================================================
// Update — called once per frame from director
// ================================================================
// Returns current attunement value (0.0–1.0) for visual/audio feedback.
// When attunement first reaches 1.0, flashPending is set true.
//
// creatureData: {
//   sprinting: bool,
//   nearestPuffDist2: number, nearestPuffPos: {x,z},
//   nearestJellyDist2: number, nearestJellyPos: {x,z}, nearestJellyPulsePhase: number,
//   nearestDeerDist2: number, nearestDeerPos: {x,z}, nearestDeerWanderAng: number,
//   nearestMothDist2: number, nearestMothPos: {x,z},
//   playerYaw: number, playerSpeed: number, pulsePressed: bool,
//   playerX: number, playerZ: number, time: number
// }
export function updateAttunement(dt, jumping, nearestPuffDist2, creatureData, ctx) {
  // Backward-compatible: if no creatureData, use legacy puffling-only path
  if (!creatureData) {
    return _updatePuffOnly(dt, jumping, nearestPuffDist2);
  }

  const {
    nearestJellyDist2, nearestJellyPos,
    nearestDeerDist2, nearestDeerPos, nearestDeerWanderAng,
    nearestMothDist2, nearestMothPos,
    playerYaw, playerSpeed, pulsePressed, sprinting,
    playerX, playerZ, time
  } = creatureData;

  // Determine which creature (if any) is being matched this frame
  // Phase 2 gate: behavior only counts when spirit hum is pitch-locked to that type
  let matchType = null;
  const _locked = isLocked();
  const _lockTarget = getLockType();

  // --- Puffling: Jump near syncing pufflings (requires pitch-lock to puff) ---
  // Discrete: each takeoff gives a big attunement chunk (~6 jumps to fill)
  // Also small continuous gain while airborne so it feels responsive
  let _puffJumpChunk = 0;
  const _puffNear = _locked && _lockTarget === 'puff' && nearestPuffDist2 < ATTUNE_JUMP_R2 && nearestPuffDist2 < Infinity;
  if (_puffNear && jumping) {
    matchType = 'puff';
    // Rising edge: just left the ground → big chunk
    if (!_puffWasJumping) _puffJumpChunk = 0.18;
  }
  _puffWasJumping = jumping;

  // --- Jelly: Stand still within 6m + tap LEFT-CLICK in rhythm (requires pitch-lock to jelly) ---
  if (!matchType && _locked && _lockTarget === 'jelly' && nearestJellyDist2 < JELLY_R2 && nearestJellyDist2 < Infinity && playerSpeed < 0.5) {
    // Track rhythm taps (rising edge)
    if (pulsePressed && !_jellyLastPulseInput) {
      _jellyTapTimes.push(time);
      // Keep only last 5 taps
      if (_jellyTapTimes.length > 5) _jellyTapTimes.shift();
    }
    _jellyLastPulseInput = pulsePressed;

    // Check if recent taps match the rhythm (~2s interval, ±0.3s)
    if (_jellyTapTimes.length >= 2) {
      const lastInterval = _jellyTapTimes[_jellyTapTimes.length - 1] - _jellyTapTimes[_jellyTapTimes.length - 2];
      if (Math.abs(lastInterval - JELLY_RHYTHM) < JELLY_TOLERANCE) {
        matchType = 'jelly';
      }
    }
  } else {
    _jellyLastPulseInput = pulsePressed;
  }

  // --- Deer: Walk (no sprint) within 8-12m, same direction (±45°, requires pitch-lock to deer) ---
  if (!matchType && _locked && _lockTarget === 'deer' && !sprinting && nearestDeerDist2 >= DEER_R2_MIN && nearestDeerDist2 < DEER_R2_MAX
      && nearestDeerDist2 < Infinity && playerSpeed > 1.0) {
    // Compare player heading to deer heading
    // Player walks toward yaw direction; deer faces wanderAng
    // Normalize angle difference to [-π, π]
    let angleDiff = playerYaw - nearestDeerWanderAng;
    // Wrap to [-π, π]
    while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
    while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;
    if (Math.abs(angleDiff) < DEER_ANGLE_TOL) {
      matchType = 'deer';
    }
  }

  // --- Moth: Move laterally within 8m + look toward moth (requires pitch-lock to moth) ---
  if (!matchType && _locked && _lockTarget === 'moth' && nearestMothDist2 < MOTH_R2 && nearestMothDist2 < Infinity && playerSpeed > 0.5) {
    // Check if player is looking toward moth (angle between look direction and direction to moth < 60°)
    const toMothX = nearestMothPos.x - playerX;
    const toMothZ = nearestMothPos.z - playerZ;
    const toMothAng = Math.atan2(toMothX, toMothZ);
    let lookDiff = playerYaw - toMothAng;
    while (lookDiff > Math.PI) lookDiff -= 2 * Math.PI;
    while (lookDiff < -Math.PI) lookDiff += 2 * Math.PI;
    if (Math.abs(lookDiff) < 1.047) { // ~60° (π/3)
      matchType = 'moth';
    }
  }

  // --- Apply attunement gain/decay ---
  if (matchType) {
    if (attunementTarget !== matchType) {
      // Switching targets resets progress
      attunementTarget = matchType;
      attunement = 0;
    }
    // Wave 1: Weather and day/night modifiers (respected context snapshots)
    const _wState = ctx?.weather?.state || 'CLEAR';
    const _bio = ctx?.env?.bioGlow !== undefined ? ctx.env.bioGlow : 1.0;
    const weatherMod = WEATHER_ATTUNE_MODS[_wState]?.[matchType] || 1.0;
    const rate = ATTUNE_RATE * dt * _bio * weatherMod;
    attunement += rate + _puffJumpChunk;
    refreshLock(); // keep lock alive while actively building attunement
    if (attunement >= 1.0 && playerFrequency !== matchType) {
      attunement = 1.0;
      playerFrequency = matchType;
      flashPending = true;
      // Store creature position for flash effect
      switch (matchType) {
        case 'puff': flashCreaturePos = creatureData.nearestPuffPos; break;
        case 'jelly': flashCreaturePos = nearestJellyPos; break;
        case 'deer': flashCreaturePos = nearestDeerPos; break;
        case 'moth': flashCreaturePos = nearestMothPos; break;
      }
      emit(Events.CREATURE_ATTUNED, { type: matchType, pos: flashCreaturePos, playerPos: { x: creatureData.playerX, z: creatureData.playerZ } });
    }
  } else if (attunementTarget && attunement > 0 && !playerFrequency) {
    // Don't decay puff attunement while pitch-locked near pufflings (between jumps)
    if (attunementTarget === 'puff' && _puffNear) {
      // Hold — no decay while linked
    } else {
      attunement = Math.max(0, attunement - ATTUNE_DECAY * dt);
      if (attunement === 0) attunementTarget = null;
    }
  }

  return attunement;
}

// Legacy path: puffling-only (maintains backward compatibility during migration)
function _updatePuffOnly(dt, jumping, nearestPuffDist2) {
  if (jumping && nearestPuffDist2 < ATTUNE_JUMP_R2 && nearestPuffDist2 < Infinity) {
    if (attunementTarget !== 'puff') {
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

export function getFlashCreaturePos() {
  return flashCreaturePos;
}

// ================================================================
// Consume — called when orb is collected, resets frequency
// ================================================================
export function consumeFrequency() {
  playerFrequency = null;
  attunement = 0;
  attunementTarget = null;
  flashPending = false;
  flashCreaturePos = null;
  _jellyTapTimes = [];
  _puffWasJumping = false;
  // Reset spirit hum lock so player must re-discover next creature's pitch
  resetLock();
}

// ================================================================
// Flash check — returns true once when full attunement is first reached
// ================================================================
export function checkFlash() {
  if (flashPending) {
    emit(Events.ATTUNEMENT_FLASH, { type: playerFrequency, pos: flashCreaturePos });
    flashPending = false;
    return true;
  }
  return false;
}

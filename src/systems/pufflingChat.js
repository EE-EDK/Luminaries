// ================================================================
// Puffling Chat — Cryptic Speech Bubbles
// ================================================================
// Pufflings speak in a high, cryptic register — fragments of
// awareness about the forest's condition. Their language sounds
// like singing but resolves into something almost comprehensible.

import { camera } from '../core/renderer.js';
import { Vector3 } from 'three';
import { getPerspective } from '../state/narrativeState.js';
import { READ_DWELL_MULT } from './discoveries.js';
import { speak } from '../narrative/voice.js';
import {
  MESSAGES_DIMMED, MESSAGES_RESTORED, MESSAGES_NEAR_ORB, MESSAGES_ATTUNING,
  MESSAGES_CARRYING, MESSAGES_GENERAL, MESSAGES_MEMORY_EARLY, MESSAGES_MEMORY_LATE,
  MESSAGES_MEMORY_DONE, MESSAGES_MEMORY_DONE_POST, MESSAGES_ARCHITECT,
} from '../narrative/lines.js';
import { ORB_N } from '../constants.js';

// ================================================================
// Message pools — context-sensitive cryptic text
// ================================================================
// The pools themselves live in narrative/lines.js, with every other line the
// game says: the audit pairs a table's halves by position within one file, and
// the new pre/post-reveal pools had to sit beside the old ones to be checked
// against them. This file decides WHICH pool; lines.js decides what it says.

// ================================================================
// State
// ================================================================
let chatEl = null;
let chatTimer = 0;
let chatCooldown = 0;
let chatVisible = false;
let chatTargetPuff = null; // which puffling is "speaking"

// Pre-allocated vector for 3D → 2D projection
const _projVec = new Vector3();

// ================================================================
// Init — create DOM element for speech bubble
// ================================================================
export function initPufflingChat() {
  chatEl = document.createElement('div');
  chatEl.id = 'puffling-chat';
  chatEl.style.cssText =
    'position:fixed;pointer-events:none;opacity:0;z-index:101;' +
    'font-family:Georgia,serif;font-size:13px;color:#ffeedd;font-style:italic;' +
    'text-shadow:0 0 8px #ffaa66,0 0 16px #884422;' +
    'letter-spacing:1.5px;text-align:center;max-width:220px;' +
    'padding:4px 10px;transition:opacity 0.4s;' +
    'background:rgba(20,10,5,0.3);border-radius:8px;';
  document.body.appendChild(chatEl);
}

// ================================================================
// Select message based on context
// ================================================================
/** Chance a puffling remembers the player's progress instead of the usual line. */
const MEMORY_CHANCE = 0.2;
/** Chance, after the wizard, that a puffling speaks of the one who made the garden. */
const ARCHITECT_CHANCE = 0.3;

/**
 * @brief The pool a puffling's progress memory draws from, or null.
 *
 * Three tiers by how many anchors have been woken, and the last one has a
 * second version for after the wizard: the same moment, now that the
 * pufflings may say who it was for.
 * @param {number} orbsFound
 * @param {boolean} truthRevealed
 * @return {{child:string[], adult:string[]}|null}
 */
function memoryPool(orbsFound, truthRevealed) {
  if (orbsFound >= ORB_N) return truthRevealed ? MESSAGES_MEMORY_DONE_POST : MESSAGES_MEMORY_DONE;
  if (orbsFound >= 3) return MESSAGES_MEMORY_LATE;
  if (orbsFound >= 1) return MESSAGES_MEMORY_EARLY;
  return null;
}

/**
 * @brief Pick what a puffling says, from where the player is and how far on.
 *
 * Priority is unchanged for the moments that matter to play — carrying a
 * hum, attuning, a gold anchor close by — so a hint is never crowded out by
 * a reminiscence. Below those, a puffling may remember: the player's
 * progress, and once the veil is lifted, the one who made the garden. Only
 * then the ambient lines.
 *
 * @param {boolean} sectorRestored
 * @param {boolean} nearOrb an unfound anchor within 20 m
 * @param {number} attunement 0..1
 * @param {boolean} hasFrequency the player is carrying a creature's hum
 * @param {number} [orbsFound=0] anchors woken so far
 * @param {boolean} [truthRevealed=false] the wizard has lifted the veil
 * @param {() => number} [rand=Math.random] cosmetic variety only: which line a
 *   puffling happens to say never touches the world, so it is not seeded
 * @return {string} the line, resolved in the register being read
 */
export function pickMessage(sectorRestored, nearOrb, attunement, hasFrequency,
                            orbsFound = 0, truthRevealed = false, rand = Math.random) {
  const perspective = getPerspective();
  let poolSet;
  const memory = memoryPool(orbsFound, truthRevealed);
  if (hasFrequency) {
    poolSet = MESSAGES_CARRYING;
  } else if (attunement > 0.5) {
    poolSet = MESSAGES_ATTUNING;
  } else if (nearOrb) {
    poolSet = MESSAGES_NEAR_ORB;
  } else if (truthRevealed && rand() < ARCHITECT_CHANCE) {
    poolSet = MESSAGES_ARCHITECT;
  } else if (memory && rand() < MEMORY_CHANCE) {
    poolSet = memory;
  } else if (rand() < 0.25) {
    // 25% chance of a general idle line regardless of sector state
    poolSet = MESSAGES_GENERAL;
  } else if (sectorRestored) {
    poolSet = MESSAGES_RESTORED;
  } else {
    poolSet = MESSAGES_DIMMED;
  }
  const pool = poolSet[perspective] || poolSet.child;
  // Through speak() so a story term in a line comes out as the glossary spells
  // it in this register. A puffling bubble is one voice by nature — it is one
  // creature saying one thing — so there is no pair to render here.
  return speak(pool[Math.floor(rand() * pool.length)], perspective);
}

// ================================================================
// Trigger — called when a puffling wants to speak
// ================================================================
/**
 * @brief Make a puffling speak, unless one spoke recently.
 * @param {{position:{x:number,y:number,z:number}}} puffGroup the speaker, for the bubble
 * @param {boolean} sectorRestored
 * @param {boolean} nearOrb
 * @param {number} attunement
 * @param {boolean} hasFrequency
 * @param {number} [orbsFound=0] threaded from the caller so a puffling can remember progress
 * @param {boolean} [truthRevealed=false] threaded from the caller for the same reason
 * @return {string|null} the line, for the caller to voice, or null on cooldown
 */
export function triggerPufflingChat(puffGroup, sectorRestored, nearOrb, attunement, hasFrequency,
                                    orbsFound = 0, truthRevealed = false) {
  if (chatCooldown > 0 || !chatEl) return null;

  const message = pickMessage(sectorRestored, nearOrb, attunement, hasFrequency, orbsFound, truthRevealed);
  chatEl.textContent = message;
  chatEl.style.opacity = '1';
  chatTimer = 5.0 * READ_DWELL_MULT;
  chatCooldown = 8 + Math.random() * 6; // 8-14s between chats
  chatVisible = true;
  chatTargetPuff = puffGroup;

  return message; // returned so caller can pass to playPufflingVocal
}

// ================================================================
// Update — position bubble above speaking puffling, manage timers
// ================================================================
export function updatePufflingChat(dt, rendererDom) {
  if (chatCooldown > 0) chatCooldown -= dt;

  if (!chatVisible || !chatEl || !chatTargetPuff) return;

  chatTimer -= dt;
  if (chatTimer <= 0.8 && chatEl) {
    chatEl.style.opacity = '0';
  }
  if (chatTimer <= 0) {
    chatVisible = false;
    chatTargetPuff = null;
    return;
  }

  // Project puffling 3D position to screen coordinates
  _projVec.set(
    chatTargetPuff.position.x,
    chatTargetPuff.position.y + 1.2, // above head
    chatTargetPuff.position.z
  );
  _projVec.project(camera);

  // Convert from NDC (-1 to 1) to screen pixels
  const w = rendererDom.clientWidth || window.innerWidth;
  const h = rendererDom.clientHeight || window.innerHeight;
  const sx = ((_projVec.x + 1) / 2) * w;
  const sy = ((-_projVec.y + 1) / 2) * h;

  // Only show if in front of camera
  if (_projVec.z > 0 && _projVec.z < 1) {
    chatEl.style.left = sx + 'px';
    chatEl.style.top = sy + 'px';
    chatEl.style.transform = 'translate(-50%, -100%)';
  } else {
    chatEl.style.opacity = '0';
  }
}

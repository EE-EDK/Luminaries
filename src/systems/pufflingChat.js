// ================================================================
// Puffling Chat — Cryptic Speech Bubbles
// ================================================================
// Pufflings speak in a high, cryptic register — fragments of
// awareness about the forest's condition. Their language sounds
// like singing but resolves into something almost comprehensible.
//
// OBSERVATION LOG (Assistant Researcher M. Kato):
//   We recorded puffling vocalizations for 72 hours. When I played
//   them back at 0.4× speed, the spectrograms showed recurring
//   phonemic clusters. Not language — we're not claiming language —
//   but structured communication with consistent referents.
//   "Kelu" always appears near dimmed sectors. "Vari lumis" near
//   restored ones. And "nesh oravi" — we only hear that when the
//   orbs are close. The pufflings know where they are.
//   They've always known.

import { camera } from '../core/renderer.js';
import { Vector3 } from 'three';

// ================================================================
// Message pools — context-sensitive cryptic text
// ================================================================

// When in dimmed / unrestored sector
const MESSAGES_DIMMED = [
  'kelu... kelu vash',
  'the deep hums forgot',
  'mori selani dusk',
  'where did the glow sleep?',
  'nesh... so quiet beneath',
  'roots remember, canopy forgets',
  'tavi lum shade shade',
  'the dim eats softly',
  'kelu ori mori still',
  'something drank the light',
];

// When in restored sector
const MESSAGES_RESTORED = [
  'vari lumis! vari lumis!',
  'the roots are singing again',
  'oh the warmth came back',
  'selani bright bright!',
  'tavi ori bloom bloom',
  'can you hear the hum?',
  'lumis kel vari sava',
  'the canopy remembers now',
  'feel it? underneath?',
  'this glow is yours too',
];

// When near an unfound orb (within 20m)
const MESSAGES_NEAR_ORB = [
  'nesh oravi... close!',
  'the anchor hums here',
  'oravi kel nesh warm',
  'something waits in gold',
  'listen — the orb knows you',
  'nesh! nesh! this way!',
  'carry the voice to it',
  'oravi sel lumis near',
];

// When player has attunement > 0.5 (building connection)
const MESSAGES_ATTUNING = [
  'you feel like us now',
  'vari! vari! you hum!',
  'your light shifts warm',
  'jump jump jump! like us!',
  'sel tavi ori — together!',
  'the song is in your leap!',
  'we can hear your glow',
  'we love to jump! you too!',
];

// When player carries frequency
const MESSAGES_CARRYING = [
  'you carry our voice now',
  'lumis ori selani vari!',
  'the orbs will hear you',
  'go — sing to the gold!',
  'quick, before it fades',
  'ori nesh — find the anchor!',
  'your glow is our glow',
  'jumping is how we sing!',
  'every hop carries the hum',
];

// General / idle following
const MESSAGES_GENERAL = [
  'kel kel tavi',
  'the moss is whispering',
  'do you see the patterns?',
  'mori ori kel sava',
  'we were here before you',
  'the forest watches back',
  'sel vari nesh quiet',
  'every spore knows the way',
  'tavi kel ori lumis',
  'listen with your feet',
];

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
function pickMessage(sectorRestored, nearOrb, attunement, hasFrequency) {
  let pool;
  if (hasFrequency) {
    pool = MESSAGES_CARRYING;
  } else if (attunement > 0.5) {
    pool = MESSAGES_ATTUNING;
  } else if (nearOrb) {
    pool = MESSAGES_NEAR_ORB;
  } else if (sectorRestored) {
    pool = MESSAGES_RESTORED;
  } else if (!sectorRestored) {
    pool = MESSAGES_DIMMED;
  } else {
    pool = MESSAGES_GENERAL;
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

// ================================================================
// Trigger — called when a puffling wants to speak
// ================================================================
export function triggerPufflingChat(puffGroup, sectorRestored, nearOrb, attunement, hasFrequency) {
  if (chatCooldown > 0 || !chatEl) return null;

  const message = pickMessage(sectorRestored, nearOrb, attunement, hasFrequency);
  chatEl.textContent = message;
  chatEl.style.opacity = '1';
  chatTimer = 5.0; // 5s display
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

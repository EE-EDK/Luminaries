// ================================================================
// Sound captions — one small line naming the call you just heard
// ================================================================
// Off by default. When it is on, a creature call (CREATURE_SOUND, the event the
// fauna already fire beside the audio) puts a line at the foot of the screen
// saying what called and on which side — "a puffling chirps, on your left" —
// for the player who cannot hear the panner say so, and as a quiet lesson in
// what the sounds are for everyone else.
//
// It listens to the event rather than to the audio: a muted player is exactly
// who a caption is for, and playCreatureSound returns early when muted.

import { on, Events } from '../kernel/eventBus.js';
import { dualText } from '../narrative/voice.js';
import { getPerspective, isTruthRevealed } from '../state/narrativeState.js';
import { onSetting } from '../state/settingsState.js';
import { captionFor, captionGate } from '../narrative/captions.js';

const SHOW_MS = 3200;

let el = null;
let enabled = false;
let hideTimer = 0;
let getListener = null;
const _last = {};
let _shown = null;      // {pair, arrow, side} of the caption on screen, so Tab can redraw it

/** @brief The caption currently shown, '' if none (for the dev console). */
export function currentCaption() { return el ? el.textContent : ''; }

/** @brief Turn captions on or off. Off also clears whatever is showing. */
export function setCaptionsEnabled(on_) {
  enabled = !!on_;
  if (!enabled && el) { el.style.opacity = '0'; el.textContent = ''; _shown = null; clearTimeout(hideTimer); }
}

/** @brief Whether captions are on. */
export function captionsEnabled() { return enabled; }

function onCall(d) {
  if (!enabled || !el || !d || !d.position || !getListener) return;
  const L = getListener();
  const dx = d.position.x - L.x, dz = d.position.z - L.z;
  if (!captionGate(_last, d.type, performance.now() / 1000, dx * dx + dz * dz)) return;
  const c = captionFor(d.type, dx, dz, L.yaw);
  if (!c) return;
  _shown = c;
  draw();
  el.style.opacity = '1';
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => { if (el) el.style.opacity = '0'; }, SHOW_MS);
}

/** Render the caption on screen in the reader's current register. */
function draw() {
  if (!el || !_shown) return;
  el.textContent = `${_shown.arrow} ${dualText(_shown.pair, { voice: getPerspective(), truthRevealed: isTruthRevealed() })}`;
  el.dataset.side = _shown.side;
}

/**
 * @brief Build the caption line and subscribe it to creature calls and the setting.
 * @param {{getListener:() => {x:number, z:number, yaw:number}}} deps the listener
 *   is read on demand — a call is rare, a per-frame copy of the camera is not.
 * @return {HTMLElement|null}
 */
export function initSoundCaptions(deps) {
  if (typeof document === 'undefined' || el) return el;
  getListener = deps.getListener;
  el = document.createElement('div');
  el.id = 'sound-captions';
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');
  el.style.cssText =
    'position:fixed;left:50%;bottom:64px;transform:translateX(-50%);z-index:120;' +
    'max-width:min(560px,92vw);padding:5px 12px;border-radius:6px;pointer-events:none;' +
    'font-family:monospace;text-align:center;color:#cfeedd;opacity:0;transition:opacity .3s;' +
    'background:rgba(0,8,4,.78);border:1px solid rgba(100,255,180,.2);' +
    'font-size:calc(13px * var(--lumi-text-scale));text-shadow:0 0 4px rgba(100,255,180,.4);';
  document.body.appendChild(el);
  on(Events.CREATURE_SOUND, onCall);
  // A reader flipping register mid-caption sees it in the new one.
  on(Events.PERSPECTIVE_CHANGED, () => { if (el && el.style.opacity === '1') draw(); });
  onSetting('soundCaptions', setCaptionsEnabled);
  return el;
}

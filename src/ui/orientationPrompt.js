// ================================================================
// Orientation prompt — "turn me sideways", for touch devices held upright
// ================================================================
// The forest is drawn wide and the controls sit in the bottom corners; held
// tall, the stick and the buttons cover most of the picture. So a touch device
// in portrait gets a dim card over everything asking for landscape, in
// whichever voice the player is reading, and it goes the moment they rotate.
//
// Three rules it keeps:
//   * Never on a desktop. A narrow browser window is the player's choice; the
//     orientation media query would call it portrait and nag them forever.
//   * Never in the way of a player who cannot rotate. Rotation lock is common,
//     so a tap waves the card away until the next change of orientation.
//   * Never able to break the page. If matchMedia is missing or returns
//     something unusable the prompt simply does not exist; the game starts
//     exactly as it did before this module did. The decision is a pure
//     function and the DOM is injected, so the suite sees both halves of that
//     without a browser.

import { dualText } from '../narrative/voice.js';
import { LANDSCAPE_PROMPT } from '../narrative/lines.js';
import { getPerspective, isTruthRevealed } from '../state/narrativeState.js';
import { on, Events } from '../kernel/eventBus.js';
import { safeInset } from '../utils/dom.js';

const QUERY = '(orientation: portrait)';

let root = null;
let titleEl = null;
let subEl = null;
let dismissEl = null;
let mq = null;
let dismissed = false;
let showing = false;
let onChange = null;
let offPerspective = null;

/**
 * @brief Whether the prompt belongs on screen right now.
 * @param {boolean} touch a touch device
 * @param {boolean} portrait the viewport is taller than it is wide
 * @param {boolean} [waved=false] the player has tapped it away since the last rotation
 * @return {boolean}
 */
export function shouldPromptLandscape(touch, portrait, waved = false) {
  return !!touch && !!portrait && !waved;
}

/**
 * @brief The three lines of the card, in the voice being read.
 * @param {{voice?:'child'|'adult', truthRevealed?:boolean}} [opts]
 * @return {{title:string, sub:string, dismiss:string}} story terms resolved; both registers once the veil is lifted
 */
export function landscapeCopy(opts = {}) {
  const o = { voice: opts.voice, truthRevealed: opts.truthRevealed, touch: true };
  return {
    title: dualText(LANDSCAPE_PROMPT.title, o),
    sub: dualText(LANDSCAPE_PROMPT.sub, o),
    dismiss: dualText(LANDSCAPE_PROMPT.dismiss, o),
  };
}

function draw() {
  if (!root) return;
  const c = landscapeCopy({ voice: getPerspective(), truthRevealed: isTruthRevealed() });
  titleEl.textContent = c.title;
  subEl.textContent = c.sub;
  dismissEl.textContent = c.dismiss;
}

function apply(portrait) {
  if (!root) return;
  const want = shouldPromptLandscape(true, portrait, dismissed);
  if (want === showing) return;
  showing = want;
  if (want) draw();
  root.style.display = want ? 'flex' : 'none';
  root.setAttribute('aria-hidden', want ? 'false' : 'true');
}

/**
 * @brief Build the prompt and keep it in step with the device's orientation.
 *
 * Does nothing, and returns null, when there is no page, when the device is
 * not a touch device, or when the browser cannot say which way up it is. Safe
 * to call twice.
 *
 * @param {{isTouch?:boolean, win?:object, doc?:object}} [deps] win and doc
 *   default to the page's own; tests pass stand-ins.
 * @return {object|null} the card's element, or null when no card was built
 */
export function initOrientationPrompt(deps = {}) {
  if (root) return root;
  const win = deps.win || (typeof window !== 'undefined' ? window : null);
  const doc = deps.doc || (typeof document !== 'undefined' ? document : null);
  if (!win || !doc || !deps.isTouch) return null;
  if (typeof win.matchMedia !== 'function') return null;
  let query = null;
  try { query = win.matchMedia(QUERY); } catch (_) { query = null; }
  if (!query || typeof query.matches !== 'boolean') return null;
  mq = query;

  root = doc.createElement('div');
  root.id = 'orientation-prompt';
  root.setAttribute('role', 'status');
  root.setAttribute('aria-live', 'polite');
  root.setAttribute('aria-hidden', 'true');
  // Above the title card (300) and the panels (400): it is the first thing a
  // player on a phone should read, and it must cover the whole screen or the
  // stick underneath it looks usable.
  root.style.cssText =
    'display:none;position:fixed;top:0;left:0;right:0;bottom:0;z-index:500;' +
    'flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;' +
    'padding:' + safeInset('top', 24) + ' ' + safeInset('right', 24) + ' ' +
    safeInset('bottom', 24) + ' ' + safeInset('left', 24) + ';' +
    'background:rgba(2,8,6,.88);color:#cfeedd;font-family:\'Courier New\',monospace;' +
    'pointer-events:auto;touch-action:none;letter-spacing:1px;line-height:1.5;';
  titleEl = doc.createElement('div');
  titleEl.style.cssText = 'font-size:calc(24px * var(--lumi-text-scale, 1));color:#aaffdd;' +
    'text-shadow:0 0 14px rgba(100,255,200,.45);';
  subEl = doc.createElement('div');
  subEl.style.cssText = 'font-size:calc(14px * var(--lumi-text-scale, 1));max-width:28em;opacity:.85;';
  dismissEl = doc.createElement('div');
  dismissEl.style.cssText = 'font-size:calc(12px * var(--lumi-text-scale, 1));opacity:.55;margin-top:10px;';
  root.appendChild(titleEl);
  root.appendChild(subEl);
  root.appendChild(dismissEl);

  // A tap must never fall through to the canvas (it would start the intro
  // from under the card) and is the player's way of saying "I know".
  const wave = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    dismissed = true;
    apply(mq.matches);
  };
  root.addEventListener('click', wave);
  root.addEventListener('touchstart', (e) => { if (e && e.stopPropagation) e.stopPropagation(); });
  root.addEventListener('mousedown', (e) => { if (e && e.stopPropagation) e.stopPropagation(); });
  if (doc.body) doc.body.appendChild(root);

  // A real rotation lifts the wave: someone who dismissed it held upright has
  // not agreed to be left alone after turning the phone over and back.
  onChange = (ev) => {
    dismissed = false;
    apply(ev && typeof ev.matches === 'boolean' ? ev.matches : mq.matches);
  };
  if (typeof mq.addEventListener === 'function') mq.addEventListener('change', onChange);
  else if (typeof mq.addListener === 'function') mq.addListener(onChange); // Safari before 14

  // A reader flipping register while the card is up sees it change.
  offPerspective = on(Events.PERSPECTIVE_CHANGED, () => { if (showing) draw(); });

  apply(mq.matches);
  return root;
}

/** @brief Whether the card is on screen. For gates and tests. */
export function isLandscapePromptShown() { return showing; }

/** @brief Tear the card down. For tests; the game never calls it. */
export function resetOrientationPrompt() {
  if (mq && onChange) {
    if (typeof mq.removeEventListener === 'function') mq.removeEventListener('change', onChange);
    else if (typeof mq.removeListener === 'function') mq.removeListener(onChange);
  }
  if (typeof offPerspective === 'function') offPerspective();
  if (root && typeof root.remove === 'function') root.remove();
  root = titleEl = subEl = dismissEl = mq = onChange = offPerspective = null;
  dismissed = false;
  showing = false;
}

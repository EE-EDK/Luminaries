// ================================================================
// Session summary — what this visit to the forest amounted to
// ================================================================
// Shown when the world is restored (FREE_ROAM) and again when the player
// leaves the tab. Not a score screen: no rating, no percentage, no comparison
// to a previous run. It names what happened, in the voice the player chose,
// and gets out of the way.

import { getPerspective } from '../state/narrativeState.js';

let el = null;
let hideTimer = 0;

/** @brief Minutes and seconds, spoken rather than digital. */
export function formatDuration(seconds) {
  const s = Math.max(0, Math.round(Number.isFinite(seconds) ? seconds : 0));
  if (s < 60) return `${s} second${s === 1 ? '' : 's'}`;
  const m = Math.floor(s / 60);
  const rem = s % 60;
  if (m < 60) return rem ? `${m} minute${m === 1 ? '' : 's'}, ${rem}s` : `${m} minute${m === 1 ? '' : 's'}`;
  const h = Math.floor(m / 60);
  const mRem = m % 60;
  return mRem ? `${h}h ${mRem}m` : `${h} hour${h === 1 ? '' : 's'}`;
}

/**
 * @brief The summary text for a finished visit.
 * @param {{orbs:number, discoveries:number, seconds:number, restored?:boolean}} s
 * @param {'child'|'adult'} [voice]
 * @return {string[]} lines, first is the heading
 */
export function summaryLines(s, voice) {
  const orbs = Math.max(0, s.orbs | 0);
  const found = Math.max(0, s.discoveries | 0);
  const time = formatDuration(s.seconds);
  const adult = (voice || getPerspective()) === 'adult';

  if (adult) {
    return [
      s.restored ? 'Meridian restoration complete' : 'Session ended',
      `Carriers recovered: ${orbs} of 5`,
      `Species and sites logged: ${found}`,
      `Time in field: ${time}`,
    ];
  }
  return [
    s.restored ? 'The forest is awake again' : 'Until next time',
    orbs === 0 ? 'No coals woken yet' : `${orbs} of 5 coals woken`,
    found === 0 ? 'Nothing named yet' : `${found} thing${found === 1 ? '' : 's'} learned by name`,
    `You stayed ${time}`,
  ];
}

/** @brief Build the (hidden) summary element. Safe to call without a DOM. */
export function initSessionSummary() {
  if (typeof document === 'undefined' || el) return el;
  el = document.createElement('div');
  el.id = 'session-summary';
  el.style.cssText =
    'position:fixed;left:50%;top:38%;transform:translate(-50%,-50%);z-index:220;' +
    'font-family:\'Courier New\',monospace;text-align:center;pointer-events:none;' +
    'color:#cfe;background:rgba(6,18,14,.82);border:1px solid rgba(100,255,180,.25);' +
    'border-radius:8px;padding:18px 26px;opacity:0;transition:opacity 1.2s ease;' +
    'font-size:calc(13px * var(--lumi-text-scale));line-height:1.9;letter-spacing:1px;';
  document.body.appendChild(el);
  return el;
}

/**
 * @brief Show the summary.
 * @param {{orbs:number, discoveries:number, seconds:number, restored?:boolean}} stats
 * @param {number} [dwell=9] seconds on screen; 0 keeps it up
 */
export function showSessionSummary(stats, dwell = 9) {
  if (!el) initSessionSummary();
  if (!el) return null;
  const lines = summaryLines(stats);
  el.innerHTML = `<div style="font-size:1.25em;margin-bottom:10px;color:#eaffe8">${lines[0]}</div>`
    + lines.slice(1).map((l) => `<div style="opacity:.82">${l}</div>`).join('');
  el.style.opacity = '1';
  if (hideTimer) { clearTimeout(hideTimer); hideTimer = 0; }
  if (dwell > 0) {
    hideTimer = setTimeout(() => { if (el) el.style.opacity = '0'; }, dwell * 1000);
  }
  return lines;
}

/** @brief Hide it early. */
export function hideSessionSummary() {
  if (hideTimer) { clearTimeout(hideTimer); hideTimer = 0; }
  if (el) el.style.opacity = '0';
}

// ================================================================
// Dev Skip Panel — fast-forward through major game milestones
// ================================================================
// Collapsed behind a hamburger button in the top-right corner: the panel used
// to sit open over a quarter of the viewport, which made screenshots and
// playtesting awkward. Open/closed is remembered across reloads, the backtick
// key toggles it, and while it is closed the status poll stops and the orb HUD
// gets its corner back.
import { debugSkipIntro } from '../systems/intro/index.js';
import { debugGrantOrbs, debugForcePhase, debugPauseTimers, getQuestPhase, getOrbsFound } from '../quest/questState.js';
import { QuestPhases } from '../quest/config.js';
import { debugUnlockCreature } from './debugConsole.js';
import { freeGrabMode, setFreeGrabMode } from './debugFlags.js';

const ORB_CREATURES = ['puff', 'jelly', 'deer', 'moth', null];

const STORE_KEY = 'lumi.devSkipPanel.open';
const STATUS_MS = 1000;
const HAMBURGER = '☰';       // ☰
const CLOSE_MARK = '✕';      // ✕

let wrap = null;
let toggle = null;
let body = null;
let statusEl = null;
let open = false;
let statusTimer = 0;

/**
 * @brief Read the remembered open state. Storage is unavailable in private
 * windows and throws rather than returning null, so every access is guarded.
 * @return {boolean} true when the panel was left open last session
 */
function loadOpen() {
  try { return localStorage.getItem(STORE_KEY) === '1'; } catch (_) { return false; }
}

function saveOpen(val) {
  try { localStorage.setItem(STORE_KEY, val ? '1' : '0'); } catch (_) { /* no storage, no memory */ }
}

function updateStatus() {
  if (!statusEl) return;
  statusEl.textContent = `Phase: ${getQuestPhase()} | Orbs: ${getOrbsFound()}/5`;
}

/** @brief Poll the quest status only while the panel is on screen. */
function setStatusPolling(on) {
  if (on && !statusTimer) {
    updateStatus();
    statusTimer = setInterval(updateStatus, STATUS_MS);
  } else if (!on && statusTimer) {
    clearInterval(statusTimer);
    statusTimer = 0;
  }
}

/**
 * @brief Show or hide the panel body.
 * @param {boolean} next desired state
 * @param {boolean} [persist=true] write the choice to localStorage
 */
function setOpen(next, persist = true) {
  open = !!next;
  if (body) body.style.display = open ? 'block' : 'none';
  if (toggle) {
    toggle.textContent = open ? CLOSE_MARK : HAMBURGER;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.title = open ? 'Close dev menu (`)' : 'Open dev menu (`)';
    toggle.style.background = open ? 'rgba(40,100,70,.95)' : 'rgba(8,20,14,.92)';
  }
  setStatusPolling(open);
  if (persist) saveOpen(open);
}

function btn(label, onClick) {
  const b = document.createElement('button');
  b.textContent = label;
  b.style.cssText =
    'display:block;width:100%;padding:6px 8px;margin:0 0 4px;cursor:pointer;' +
    'font-family:monospace;font-size:11px;border:1px solid rgba(100,255,180,.4);' +
    'border-radius:4px;background:rgba(20,60,40,.85);color:#aaffcc;' +
    'text-align:left;transition:background .15s;';
  b.addEventListener('mouseenter', () => { b.style.background = 'rgba(40,100,70,.9)'; });
  b.addEventListener('mouseleave', () => { b.style.background = 'rgba(20,60,40,.85)'; });
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    onClick();
    updateStatus();
  });
  return b;
}

function toggleBtn(label, getState, onToggle) {
  const b = document.createElement('button');
  function render() {
    const on = getState();
    b.textContent = `${label}: ${on ? 'ON' : 'OFF'}`;
    b.style.background = on ? 'rgba(60,120,80,.9)' : 'rgba(20,60,40,.85)';
    b.style.borderColor = on ? 'rgba(100,255,180,.7)' : 'rgba(100,255,180,.4)';
  }
  b.style.cssText =
    'display:block;width:100%;padding:6px 8px;margin:0 0 4px;cursor:pointer;' +
    'font-family:monospace;font-size:11px;border:1px solid rgba(100,255,180,.4);' +
    'border-radius:4px;color:#aaffcc;text-align:left;transition:background .15s;';
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    onToggle();
    render();
  });
  render();
  return b;
}

function separator() {
  const s = document.createElement('div');
  s.style.cssText = 'border-top:1px solid rgba(100,255,180,.15);margin:6px 0;';
  return s;
}

function grantOrbWithCreature(targetCount) {
  const current = getOrbsFound();
  if (current >= targetCount) return;
  const creatureIdx = targetCount - 1;
  const creature = ORB_CREATURES[creatureIdx];
  if (creature) debugUnlockCreature(creature);
  debugGrantOrbs(targetCount);
}

/** @brief True while the user is typing into the debug terminal or any field. */
function typingInField() {
  const el = document.activeElement;
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
}

export function initDevSkipPanel() {
  if (typeof document === 'undefined') return;
  // TEMPORARY (owner request 2026-06-07): shown in PRODUCTION builds too, not just dev.
  // To restrict back to dev-only, re-add: if (!import.meta.env?.DEV) return;
  if (wrap) return;

  wrap = document.createElement('div');
  wrap.id = 'dev-skip-wrap';
  wrap.style.cssText =
    'position:fixed;top:10px;right:10px;z-index:400;display:flex;' +
    'flex-direction:column;align-items:flex-end;gap:6px;pointer-events:none;';

  // --- Hamburger ---
  toggle = document.createElement('button');
  toggle.id = 'dev-skip-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Developer menu');
  toggle.setAttribute('aria-controls', 'dev-skip-panel');
  toggle.style.cssText =
    'width:44px;height:44px;flex:0 0 auto;cursor:pointer;pointer-events:auto;' +
    'font-family:monospace;font-size:18px;line-height:1;color:#66ffaa;' +
    'border:1px solid rgba(100,255,180,.35);border-radius:8px;' +
    'background:rgba(8,20,14,.92);box-shadow:0 4px 20px rgba(0,0,0,.5);' +
    'transition:background .15s,border-color .15s;';
  toggle.addEventListener('mouseenter', () => { toggle.style.borderColor = 'rgba(100,255,180,.7)'; });
  toggle.addEventListener('mouseleave', () => { toggle.style.borderColor = 'rgba(100,255,180,.35)'; });
  toggle.addEventListener('click', (e) => { e.stopPropagation(); setOpen(!open); });
  wrap.appendChild(toggle);

  // --- Panel body ---
  body = document.createElement('div');
  body.id = 'dev-skip-panel';
  body.style.cssText =
    'pointer-events:auto;padding:10px 12px;' +
    'background:rgba(8,20,14,.92);border:1px solid rgba(100,255,180,.3);' +
    'border-radius:8px;font-family:monospace;min-width:180px;' +
    'max-height:calc(100vh - 80px);overflow-y:auto;' +
    'box-shadow:0 4px 20px rgba(0,0,0,.5);';

  const title = document.createElement('div');
  title.textContent = 'DEV SKIP';
  title.style.cssText =
    'color:#66ffaa;font-size:11px;font-weight:bold;letter-spacing:2px;' +
    'margin-bottom:8px;text-align:center;border-bottom:1px solid rgba(100,255,180,.2);' +
    'padding-bottom:6px;';
  body.appendChild(title);

  statusEl = document.createElement('div');
  statusEl.style.cssText =
    'color:#88ccaa;font-size:10px;margin-bottom:8px;text-align:center;';
  body.appendChild(statusEl);
  updateStatus();

  // --- Toggles section ---
  body.appendChild(toggleBtn('Free Grab', () => freeGrabMode, () => {
    setFreeGrabMode(!freeGrabMode);
  }));

  body.appendChild(separator());

  // --- Skip buttons ---
  body.appendChild(btn('Skip Intro', () => {
    debugSkipIntro();
  }));

  body.appendChild(separator());

  for (let i = 1; i <= 5; i++) {
    const creature = ORB_CREATURES[i - 1];
    const label = creature
      ? `Orb ${i} (${creature})`
      : `Orb ${i} (any)`;
    body.appendChild(btn(label, () => {
      grantOrbWithCreature(i);
    }));
  }

  body.appendChild(separator());

  body.appendChild(btn('Skip to Mage Scene', () => {
    debugSkipIntro();
    debugGrantOrbs(5);
    setTimeout(() => {
      debugForcePhase(QuestPhases.TRANSFORM);
      updateStatus();
    }, 500);
  }));

  body.appendChild(btn('Resume Timers', () => {
    debugPauseTimers(false);
  }));

  body.appendChild(btn('Pause Timers', () => {
    debugPauseTimers(true);
  }));

  wrap.appendChild(body);
  document.body.appendChild(wrap);

  // The orb counter shares this corner; step it left of the hamburger so the
  // two never stack. Scoped here so removing the panel restores the layout.
  const orbHud = document.getElementById('orb-hud');
  if (orbHud) orbHud.style.right = '64px';

  // Backtick toggles. Captured so input.js's window handler never sees it —
  // that handler starts the game on any keypress, and a dev toggle must not.
  window.addEventListener('keydown', (e) => {
    if (e.code !== 'Backquote' || e.repeat || typingInField()) return;
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  }, true);

  setOpen(loadOpen(), false);
}

/** @brief Test/debug hook: current panel state. */
export function isDevSkipPanelOpen() { return open; }

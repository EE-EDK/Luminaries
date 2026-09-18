// ================================================================
// Settings panel — the gear beside the orb count
// ================================================================
// Draws settingsState and nothing else. Every control here writes through
// setSetting; the consumers subscribe on their own side. Nothing in this file
// reaches into audio, input or the renderer directly, which is what keeps the
// panel from drifting out of step with what the game is actually doing.

import {
  SETTINGS_SCHEMA, getSetting, setSetting, resetSettings,
} from '../state/settingsState.js';
import { btn, toggleBtn, slider, separator, heading } from './panelKit.js';

const GEAR = '⚙';
const CLOSE_MARK = '✕';

let root = null;
let panel = null;
let handle = null;
let open = false;
const refreshers = [];

const pct = (v) => `${Math.round(v * 100)}%`;
const mult = (v) => `${v.toFixed(2)}×`;

const QUALITY_NAMES = ['always full', 'allow particle cut', 'allow bloom cut', 'allow bloom off', 'allow all'];

/**
 * @brief Build the settings panel and its gear handle.
 * @param {{onClearSave?:Function, hasSave?:() => boolean}} [deps]
 * @return {HTMLElement|null} the panel root
 */
export function initSettingsPanel(deps = {}) {
  if (typeof document === 'undefined' || root) return root;

  root = document.createElement('div');
  root.id = 'settings-panel-root';
  root.style.cssText = 'position:fixed;top:12px;right:64px;z-index:400;font-family:monospace;';

  handle = document.createElement('button');
  handle.type = 'button';
  handle.id = 'settings-handle';
  handle.textContent = GEAR;
  handle.title = 'Settings';
  handle.style.cssText =
    'display:block;width:34px;height:34px;cursor:pointer;font-size:16px;line-height:1;' +
    'border:1px solid rgba(100,255,180,.4);border-radius:4px;' +
    'background:rgba(20,60,40,.85);color:#aaffcc;transition:background .15s;';
  handle.addEventListener('click', (e) => { e.stopPropagation(); setOpen(!open); });
  root.appendChild(handle);

  panel = document.createElement('div');
  panel.id = 'settings-panel';
  panel.style.cssText =
    'display:none;margin-top:6px;width:210px;max-height:70vh;overflow-y:auto;' +
    'padding:10px;border:1px solid rgba(100,255,180,.35);border-radius:5px;' +
    'background:rgba(8,24,18,.93);backdrop-filter:blur(3px);';
  // Clicks inside the panel must never reach the canvas — a stray click there
  // grabs pointer lock and throws the player back into the forest mid-adjust.
  panel.addEventListener('click', (e) => e.stopPropagation());
  panel.addEventListener('mousedown', (e) => e.stopPropagation());

  const add = (el) => { if (el) { panel.appendChild(el); if (el.refresh) refreshers.push(el.refresh); } };
  const S = (k) => SETTINGS_SCHEMA[k];

  add(heading('Sound'));
  add(slider('Volume', {
    min: S('masterVolume').min, max: S('masterVolume').max, step: 0.01,
    get: () => getSetting('masterVolume'), set: (v) => setSetting('masterVolume', v), fmt: pct,
  }));
  add(toggleBtn('Mute', () => getSetting('muted'), () => setSetting('muted', !getSetting('muted'))));

  add(separator());
  add(heading('Looking around'));
  add(slider('Sensitivity', {
    min: S('lookSensitivity').min, max: S('lookSensitivity').max, step: 0.05,
    get: () => getSetting('lookSensitivity'), set: (v) => setSetting('lookSensitivity', v), fmt: mult,
  }));
  add(toggleBtn('Invert Y', () => getSetting('invertY'), () => setSetting('invertY', !getSetting('invertY'))));

  add(separator());
  add(heading('Comfort'));
  add(toggleBtn('Reduced motion', () => getSetting('reducedMotion'),
    () => setSetting('reducedMotion', !getSetting('reducedMotion'))));
  add(slider('Text size', {
    min: S('textSize').min, max: S('textSize').max, step: 0.05,
    get: () => getSetting('textSize'), set: (v) => setSetting('textSize', v), fmt: mult,
  }));

  add(separator());
  add(heading('Performance'));
  add(slider('Quality floor', {
    min: S('qualityFloor').min, max: S('qualityFloor').max, step: 1,
    get: () => getSetting('qualityFloor'), set: (v) => setSetting('qualityFloor', v),
    fmt: (v) => QUALITY_NAMES[v] || String(v),
  }));

  add(separator());
  add(heading('Progress'));
  add(toggleBtn('Remember progress', () => getSetting('rememberProgress'), () => {
    const next = !getSetting('rememberProgress');
    setSetting('rememberProgress', next);
    // Turning it off should mean it is off, not "off from now on" — the save
    // already on disk would otherwise still be offered on the next boot.
    if (!next && deps.onClearSave) deps.onClearSave();
  }));
  add(btn('Clear saved progress', () => { if (deps.onClearSave) deps.onClearSave(); }));

  add(separator());
  add(btn('Reset all settings', () => { resetSettings(); refresh(); }));

  root.appendChild(panel);
  document.body.appendChild(root);
  return root;
}

/** @brief Re-read every control from settingsState. */
export function refresh() {
  for (const fn of refreshers) fn();
}

/** @brief Open or close the panel. */
export function setOpen(next) {
  if (!panel) return;
  open = !!next;
  panel.style.display = open ? 'block' : 'none';
  handle.textContent = open ? CLOSE_MARK : GEAR;
  handle.style.background = open ? 'rgba(40,100,70,.9)' : 'rgba(20,60,40,.85)';
  if (open) refresh();
}

/** @brief Whether the panel is showing. */
export function isSettingsPanelOpen() { return open; }

// ================================================================
// Settings — the handful of choices the player gets to make
// ================================================================
// Pure state plus storage. No DOM, no Three.js, no audio: the panel in
// ui/settingsPanel.js draws these, and each consumer subscribes to
// SETTINGS_CHANGED for its own key. That split is deliberate — a setting
// nobody reads is a bug the panel cannot show you.
//
// Every value is clamped on the way IN, not on the way out. A settings file
// hand-edited to `lookSensitivity: 9000` should produce a playable game on
// the next boot, not a camera that spins the moment the mouse moves. The
// clamp is the schema; there is no second opinion downstream.

import { emit, on, Events } from '../kernel/eventBus.js';
import { guardedStorage } from './saveState.js';

export const SETTINGS_KEY = 'lumi.settings.v1';

const num = (min, max, def) => ({ kind: 'number', min, max, def });
const bool = (def) => ({ kind: 'boolean', def });
const int = (min, max, def) => ({ kind: 'int', min, max, def });

/**
 * The whole contract. Adding a setting means adding a line here and a
 * consumer; nothing else in this file changes.
 */
export const SETTINGS_SCHEMA = Object.freeze({
  masterVolume:    num(0, 1, 0.42),      // matches the gain the mixer shipped with
  muted:           bool(false),
  lookSensitivity: num(0.25, 3, 1),      // multiplier on MOUSE_SENS, mouse and touch alike
  invertY:         bool(false),
  // A cap on how far the adaptive scaler may degrade quality. Notch 0 is full
  // quality and 4 is the readability floor, so a LOWER cap means a prettier
  // (and possibly slower) game. 4 leaves the scaler its full range.
  qualityFloor:    int(0, 4, 4),
  reducedMotion:   bool(false),
  textSize:        num(0.85, 1.6, 1),
  rememberProgress: bool(true),
});

export const SETTINGS_KEYS = Object.freeze(Object.keys(SETTINGS_SCHEMA));

/**
 * @brief Coerce one value to its schema, or fall back to the default.
 * @param {string} key
 * @param {*} v
 * @return {*} a value that is always in range
 */
export function coerce(key, v) {
  const s = SETTINGS_SCHEMA[key];
  if (!s) return undefined;
  if (s.kind === 'boolean') return typeof v === 'boolean' ? v : s.def;
  // Only a number, or a string that is entirely a number. Number(null) and
  // Number([]) are both 0, which would quietly clamp a missing value to the
  // bottom of its range instead of falling back to the default.
  let n;
  if (typeof v === 'number') n = v;
  else if (typeof v === 'string' && v.trim() !== '') n = Number(v);
  else return s.def;
  if (!Number.isFinite(n)) return s.def;
  const c = n < s.min ? s.min : (n > s.max ? s.max : n);
  return s.kind === 'int' ? Math.round(c) : c;
}

/** @brief A fresh settings object at defaults. */
export function defaultSettings() {
  const o = {};
  for (const k of SETTINGS_KEYS) o[k] = SETTINGS_SCHEMA[k].def;
  return o;
}

let _store = guardedStorage(typeof localStorage !== 'undefined' ? localStorage : null);
let _settings = defaultSettings();

/**
 * @brief Load settings from storage, clamping and dropping unknown keys.
 *
 * A corrupt settings blob is not worth an error screen — the player loses
 * their preferences, not their progress — so this repairs rather than
 * rejects. That is the opposite of saveState's policy, on purpose.
 * @param {ReturnType<typeof guardedStorage>} [store]
 * @return {object} the live settings
 */
export function initSettings(store) {
  if (store) _store = store;
  _settings = defaultSettings();
  let raw = null;
  try { raw = _store.get(SETTINGS_KEY); } catch (_) { raw = null; }
  if (raw) {
    let parsed = null;
    try { parsed = JSON.parse(raw); } catch (_) { parsed = null; }
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      for (const k of SETTINGS_KEYS) {
        if (Object.prototype.hasOwnProperty.call(parsed, k)) _settings[k] = coerce(k, parsed[k]);
      }
    }
  }
  return _settings;
}

/** @brief Read one setting. Unknown keys return undefined rather than throwing. */
export function getSetting(key) { return _settings[key]; }

/** @brief Every setting, as a copy. */
export function getSettings() { return { ..._settings }; }

/**
 * @brief Set one setting, persist it, and tell the consumers.
 * @param {string} key one of SETTINGS_KEYS
 * @param {*} value clamped to the schema
 * @return {*} the value actually stored, or undefined for an unknown key
 */
export function setSetting(key, value) {
  if (!SETTINGS_SCHEMA[key]) return undefined;
  const v = coerce(key, value);
  if (_settings[key] === v) return v;          // no event for a non-change
  _settings[key] = v;
  persistSettings();
  emit(Events.SETTINGS_CHANGED, { key, value: v });
  return v;
}

/** @brief Write the current settings to storage. Best effort. */
export function persistSettings() {
  return _store.set(SETTINGS_KEY, JSON.stringify(_settings));
}

/** @brief Back to defaults, persisted, one event per key that actually moved. */
export function resetSettings() {
  const before = _settings;
  _settings = defaultSettings();
  persistSettings();
  for (const k of SETTINGS_KEYS) {
    if (before[k] !== _settings[k]) emit(Events.SETTINGS_CHANGED, { key: k, value: _settings[k] });
  }
  return getSettings();
}

/**
 * @brief Subscribe to one setting, and receive its current value immediately.
 *
 * Consumers want "apply this now and whenever it changes", and writing that
 * as a subscribe plus a manual first call is how a consumer ends up out of
 * step with the stored value on boot.
 * @param {string} key
 * @param {(value:*)=>void} fn
 * @return {Function} unsubscribe
 */
export function onSetting(key, fn) {
  fn(_settings[key]);
  return on(Events.SETTINGS_CHANGED, (e) => { if (e && e.key === key) fn(e.value); });
}

// ================================================================
// Save state — schema, validation, storage, autosave scheduling
// ================================================================
// Pure: no Three.js, no DOM, no game-system imports. worldSnapshot.js is the
// only module that knows how to build a snapshot from the live game and how
// to push one back; this file owns the envelope around it.
//
// Design rules:
//   - A save that fails validation is REJECTED LOUDLY (console.error with the
//     reason), parked under `lumi.save.rejected` for inspection, and removed
//     from the primary key. A half-loaded world is worse than a fresh one.
//   - Serialisation happens only on triggers (orb, phase, discovery, interval,
//     page hide) — never inside the animation loop.
//   - Storage access is wrapped: private windows, quota errors and blocked
//     storage throw, and every one of those must degrade to "no save".

import { ORB_N } from '../constants.js';
import { emit, Events } from '../kernel/eventBus.js';

export const SAVE_KEY = 'lumi.save.v1';
export const SAVE_REJECTED_KEY = 'lumi.save.rejected';
export const SAVE_VERSION = 1;

/** Quest phases a save may carry. Transient finale phases are quantised before saving. */
export const SAVEABLE_PHASES = Object.freeze(['SEEK', 'RISING', 'COMPLETE', 'FREE_ROAM']);
export const CREATURE_KEYS = Object.freeze(['puff', 'jelly', 'deer', 'moth', 'any']);
export const PERSPECTIVES = Object.freeze(['child', 'adult']);

export class SaveError extends Error {
  constructor(reason) { super(reason); this.name = 'SaveError'; }
}

// ----------------------------------------------------------------
// Storage wrapper
// ----------------------------------------------------------------

/**
 * @brief Wrap a Storage-like object so every access is guarded.
 * @param {Storage|null|undefined} [storage] defaults to globalThis.localStorage
 * @return {{get(k:string):string|null, set(k:string,v:string):boolean, remove(k:string):boolean, available:boolean}}
 */
export function guardedStorage(storage) {
  let s = storage;
  if (s === undefined) {
    try { s = typeof globalThis !== 'undefined' ? globalThis.localStorage : null; } catch (_) { s = null; }
  }
  const available = !!s;
  return {
    available,
    get(k) { try { return s ? s.getItem(k) : null; } catch (_) { return null; } },
    set(k, v) { try { if (!s) return false; s.setItem(k, v); return true; } catch (_) { return false; } },
    remove(k) { try { if (!s) return false; s.removeItem(k); return true; } catch (_) { return false; } },
  };
}

// ----------------------------------------------------------------
// Validation
// ----------------------------------------------------------------

const isInt = (v) => Number.isInteger(v);
const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const isBool = (v) => typeof v === 'boolean';
const isStrArr = (v) => Array.isArray(v) && v.every((x) => typeof x === 'string');

/**
 * @brief Validate a decoded save object against schema v1. Throws SaveError.
 * @param {object} obj decoded JSON
 * @param {object} [opts]
 * @param {string[]} [opts.weatherStates] allowed weather state names (whitelist)
 * @return {object} the same object, when valid
 */
export function validateSave(obj, opts = {}) {
  const fail = (why) => { throw new SaveError(why); };
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) fail('not an object');
  if (obj.v !== SAVE_VERSION) fail(`unsupported version ${JSON.stringify(obj.v)} (want ${SAVE_VERSION})`);
  if (!isInt(obj.seed) || obj.seed < 1) fail('seed must be a positive integer');
  if (!isNum(obj.savedAt)) fail('savedAt must be a number');

  const q = obj.quest;
  if (!q || typeof q !== 'object') fail('quest missing');
  if (!SAVEABLE_PHASES.includes(q.phase)) fail(`quest.phase ${JSON.stringify(q.phase)} not saveable`);
  if (!Array.isArray(q.collected)) fail('quest.collected must be an array');
  if (q.collected.length > ORB_N) fail(`quest.collected has ${q.collected.length} entries, max ${ORB_N}`);
  const seen = new Set();
  for (const c of q.collected) {
    if (!c || !isInt(c.orbIndex) || c.orbIndex < 0 || c.orbIndex >= ORB_N) fail('quest.collected orbIndex out of range');
    if (seen.has(c.orbIndex)) fail(`quest.collected repeats orb ${c.orbIndex}`);
    seen.add(c.orbIndex);
    if (!CREATURE_KEYS.includes(c.creature)) fail(`quest.collected creature ${JSON.stringify(c.creature)} unknown`);
  }
  if (!isNum(q.obeliskY) || q.obeliskY < -25 || q.obeliskY > 0) fail('quest.obeliskY out of range');
  if ((q.phase === 'COMPLETE' || q.phase === 'FREE_ROAM') && q.collected.length < ORB_N) fail(`quest.phase ${q.phase} with only ${q.collected.length} orbs`);

  const w = obj.world;
  if (!w || typeof w !== 'object') fail('world missing');
  if (!isNum(w.time) || w.time < 0 || w.time >= 1) fail('world.time must be in [0,1)');
  if (!w.weather || typeof w.weather !== 'object') fail('world.weather missing');
  const wl = opts.weatherStates;
  if (typeof w.weather.cur !== 'string') fail('world.weather.cur must be a string');
  if (wl && !wl.includes(w.weather.cur)) fail(`world.weather.cur ${JSON.stringify(w.weather.cur)} unknown`);
  if (w.weather.next !== null && typeof w.weather.next !== 'string') fail('world.weather.next must be a string or null');
  if (wl && w.weather.next !== null && !wl.includes(w.weather.next)) fail(`world.weather.next ${JSON.stringify(w.weather.next)} unknown`);
  for (const k of ['stateTimer', 'transTimer', 'transDuration']) {
    if (!isNum(w.weather[k]) || w.weather[k] < 0) fail(`world.weather.${k} must be a non-negative number`);
  }
  if (!isBool(w.weather.blending)) fail('world.weather.blending must be boolean');
  if (!Array.isArray(w.wishes) || w.wishes.length !== ORB_N || !w.wishes.every(isBool)) fail(`world.wishes must be ${ORB_N} booleans`);

  const n = obj.narrative;
  if (!n || typeof n !== 'object') fail('narrative missing');
  if (!PERSPECTIVES.includes(n.perspective)) fail('narrative.perspective invalid');
  if (!isBool(n.truthRevealed)) fail('narrative.truthRevealed must be boolean');
  if (!isBool(n.wizardDone)) fail('narrative.wizardDone must be boolean');
  if (!isStrArr(n.discovered)) fail('narrative.discovered must be string[]');
  if (!Array.isArray(n.glyphs) || !n.glyphs.every((g) => isInt(g) && g >= 0)) fail('narrative.glyphs must be non-negative integers');
  if (n.notebook !== undefined && !isStrArr(n.notebook)) fail('narrative.notebook must be string[]');

  const p = obj.player;
  if (!p || typeof p !== 'object') fail('player missing');
  for (const k of ['x', 'z', 'yaw', 'pitch']) if (!isNum(p[k])) fail(`player.${k} must be a number`);
  if (p.frequency !== null && !CREATURE_KEYS.includes(p.frequency)) fail('player.frequency invalid');
  if (!isNum(p.jellyTimer) || p.jellyTimer < 0) fail('player.jellyTimer must be a non-negative number');
  return obj;
}

// ----------------------------------------------------------------
// Migration
// ----------------------------------------------------------------

/** Version → function(obj) → obj at version+1. Empty for v1; a v2 adds MIGRATIONS[1]. */
export const MIGRATIONS = Object.freeze({});

/**
 * @brief Walk migrations up to SAVE_VERSION. Throws SaveError when no path exists.
 * @param {object} obj decoded save of any version
 * @return {object} save at SAVE_VERSION (not yet validated)
 */
export function migrateSave(obj) {
  if (!obj || typeof obj !== 'object') throw new SaveError('not an object');
  let cur = obj;
  let guard = 0;
  while (cur.v !== SAVE_VERSION) {
    const step = MIGRATIONS[cur.v];
    if (!step) throw new SaveError(`no migration from version ${JSON.stringify(cur.v)}`);
    cur = step(cur);
    if (++guard > 16) throw new SaveError('migration loop');
  }
  return cur;
}

// ----------------------------------------------------------------
// Read / write
// ----------------------------------------------------------------

/**
 * @brief Read, migrate and validate the save. Invalid saves are parked and removed.
 * @param {ReturnType<typeof guardedStorage>} store
 * @param {object} [opts] forwarded to validateSave
 * @return {object|null} a valid save, or null
 */
export function readSave(store, opts = {}) {
  const raw = store.get(SAVE_KEY);
  if (raw === null || raw === undefined) return null;
  try {
    const decoded = JSON.parse(raw);
    return validateSave(migrateSave(decoded), opts);
  } catch (err) {
    const why = err && err.message ? err.message : String(err);
    console.error(`[save] rejected: ${why}`);
    store.set(SAVE_REJECTED_KEY, raw);
    store.remove(SAVE_KEY);
    return null;
  }
}

/**
 * @brief Wrap a snapshot in the versioned envelope.
 * @param {object} snapshot from worldSnapshot.buildSnapshot()
 * @param {number} seed boot seed
 * @param {number} [now] epoch ms
 * @return {object}
 */
export function makeSaveEnvelope(snapshot, seed, now = Date.now()) {
  return { v: SAVE_VERSION, savedAt: now, seed, ...snapshot };
}

/**
 * @brief Validate and persist. Returns false when storage refused or the snapshot is invalid.
 * @param {ReturnType<typeof guardedStorage>} store
 * @param {object} envelope from makeSaveEnvelope
 * @param {object} [opts] forwarded to validateSave
 * @return {boolean}
 */
export function writeSave(store, envelope, opts = {}) {
  try {
    validateSave(envelope, opts);
  } catch (err) {
    console.error(`[save] refusing to write an invalid snapshot: ${err.message}`);
    return false;
  }
  return store.set(SAVE_KEY, JSON.stringify(envelope));
}

export function clearSave(store) { store.remove(SAVE_KEY); store.remove(SAVE_REJECTED_KEY); }
export function hasSave(store) { const r = store.get(SAVE_KEY); return r !== null && r !== undefined; }

// ----------------------------------------------------------------
// Autosave scheduler
// ----------------------------------------------------------------

/**
 * @brief Debounced, suspendable autosave.
 * @param {object} cfg
 * @param {() => object} cfg.collect builds a snapshot (worldSnapshot.buildSnapshot)
 * @param {() => boolean} cfg.isActive false while the intro runs or saving is disabled
 * @param {ReturnType<typeof guardedStorage>} cfg.store
 * @param {number} cfg.seed
 * @param {number} [cfg.debounceMs=250]
 * @param {number} [cfg.intervalMs=60000] 0 disables the periodic save
 * @param {object} [cfg.timers] {setTimeout, clearTimeout, setInterval, clearInterval, now} for tests
 * @param {object} [cfg.validateOpts]
 * @return {{request(reason?:string):void, flush(reason?:string):boolean, suspend():void, resume():void, dispose():void, lastWrite():number}}
 */
export function initAutosave(cfg) {
  const T = cfg.timers || {
    setTimeout: (f, ms) => setTimeout(f, ms), clearTimeout: (h) => clearTimeout(h),
    setInterval: (f, ms) => setInterval(f, ms), clearInterval: (h) => clearInterval(h),
    now: () => Date.now(),
  };
  const debounceMs = cfg.debounceMs === undefined ? 250 : cfg.debounceMs;
  const intervalMs = cfg.intervalMs === undefined ? 60000 : cfg.intervalMs;
  let pending = null;
  let pendingReason = 'unknown';
  let suspended = false;
  let lastWriteAt = 0;
  let interval = null;

  function write(reason) {
    if (suspended || !cfg.isActive()) return false;
    const snap = cfg.collect();
    if (!snap) return false;
    const ok = writeSave(cfg.store, makeSaveEnvelope(snap, cfg.seed, T.now()), cfg.validateOpts || {});
    if (ok) {
      lastWriteAt = T.now();
      emit(Events.SAVE_WRITTEN, { at: lastWriteAt, reason });
    }
    return ok;
  }

  function request(reason = 'event') {
    if (suspended) return;
    pendingReason = reason;
    if (pending !== null) return;
    pending = T.setTimeout(() => { pending = null; write(pendingReason); }, debounceMs);
  }

  function flush(reason = 'flush') {
    if (pending !== null) { T.clearTimeout(pending); pending = null; }
    return write(reason);
  }

  if (intervalMs > 0) interval = T.setInterval(() => request('interval'), intervalMs);

  return {
    request,
    flush,
    suspend() { suspended = true; if (pending !== null) { T.clearTimeout(pending); pending = null; } },
    resume() { suspended = false; },
    dispose() { if (interval !== null) T.clearInterval(interval); if (pending !== null) T.clearTimeout(pending); pending = null; },
    lastWrite() { return lastWriteAt; },
  };
}

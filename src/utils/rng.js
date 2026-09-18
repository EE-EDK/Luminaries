// Seeded RNG (LCG)
// The seed is 42. It has always been 42. The forest grows the same way
// every time, down to the last fern. If you change it, you get a
// different forest. But somehow it feels less... right. As if this
// particular arrangement of trees was the one that was supposed to exist.
//
// A different forest is still possible: "Regenerate world" in the dev menu
// writes a seed to localStorage and reloads. The seed is read HERE, at module
// evaluation, because weather.js draws from sr() while it loads — reading it
// any later would leave the first draws on the old seed.

export const DEFAULT_SEED = 42;
export const SEED_KEY = 'lumi.seed';
const SEED_MAX = 2147483646;

/**
 * @brief Read the boot seed from storage, or the default.
 * @param {Storage|null|undefined} storage anything with getItem; absent or throwing → default
 * @return {number} integer in [1, 2147483646]
 */
export function readBootSeed(storage) {
  try {
    const raw = storage ? storage.getItem(SEED_KEY) : null;
    if (raw === null || raw === undefined) return DEFAULT_SEED;
    // A bare integer only. parseInt would prefix-scan — "3.7e99" becomes 3,
    // and "99.9" becomes 99 — quietly handing back a valid seed for a world
    // nobody asked for. A seed names one exact forest; a near-miss is a miss.
    const s = String(raw).trim();
    if (!/^\d+$/.test(s)) return DEFAULT_SEED;
    const n = Number(s);
    if (!Number.isFinite(n) || n < 1 || n > SEED_MAX) return DEFAULT_SEED;
    return n;
  } catch (_) {
    return DEFAULT_SEED;
  }
}

const _bootSeed = readBootSeed(typeof globalThis !== 'undefined' ? globalThis.localStorage : null);
let _s = _bootSeed;

/** @brief The seed this session's world was generated from. */
export function getBootSeed() { return _bootSeed; }

export function sr() {
  _s = (_s * 16807) % 2147483647;
  if (_s === 0) _s = 42; // guard against absorbing state
  return (_s & 0x7fffffff) / 0x7fffffff;
}

export function resetSeed(seed) {
  _s = seed ?? 42;
  if (_s === 0) _s = 42;
}

export function saveSeed() { return _s; }
export function restoreSeed(s) { _s = s || 42; }

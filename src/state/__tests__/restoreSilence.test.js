/**
 * The quiet half of a load: boot seed, narrative, restored sectors.
 *
 * Each of these has one job on restore — arrive already finished, without
 * announcing itself. A restored save is not the moment the player learned the
 * truth, not the moment a sector was swept, and not a new world.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { readBootSeed, DEFAULT_SEED, SEED_KEY } from '../../utils/rng.js';
import {
  getPerspective, isTruthRevealed, getDiscoveredKeys, isDiscovered,
  restoreNarrative, setPerspective, markDiscovered,
} from '../narrativeState.js';
import { initDimming, setSectorRestored, getRestoredSectors } from '../../systems/dimming.js';
import { on, off, Events } from '../../kernel/eventBus.js';

describe('readBootSeed', () => {
  const store = (v) => ({ getItem: () => v });

  it('defaults to 42 with no storage at all', () => {
    expect(readBootSeed(null)).toBe(DEFAULT_SEED);
    expect(readBootSeed(undefined)).toBe(DEFAULT_SEED);
  });

  it('defaults to 42 when nothing is stored', () => {
    expect(readBootSeed(store(null))).toBe(DEFAULT_SEED);
  });

  it('reads a stored seed', () => {
    expect(readBootSeed(store('12345'))).toBe(12345);
  });

  it('falls back to 42 on anything that is not a usable seed', () => {
    // A bad seed must not produce a *different* forest than the one the save
    // was taken in — it must produce the canonical one, which the seed check
    // in applySnapshot can then reject against.
    for (const v of ['', 'banana', '0', '-1', '2147483647', 'NaN', '3.7e99', '{}']) {
      expect(readBootSeed(store(v)), `seed ${JSON.stringify(v)}`).toBe(DEFAULT_SEED);
    }
  });

  it('refuses a near-miss rather than parsing a prefix out of it', () => {
    // parseInt would hand back 99 and 3 here — a valid seed for a forest
    // nobody asked for, which the save's seed check would then reject as a
    // different world. Defaulting is the honest answer.
    expect(readBootSeed(store('99.9'))).toBe(DEFAULT_SEED);
    expect(readBootSeed(store('42abc'))).toBe(DEFAULT_SEED);
    expect(readBootSeed(store('0x2a'))).toBe(DEFAULT_SEED);
  });

  it('tolerates surrounding whitespace', () => {
    expect(readBootSeed(store('  777\n'))).toBe(777);
  });

  it('survives storage that throws', () => {
    expect(readBootSeed({ getItem() { throw new Error('blocked'); } })).toBe(DEFAULT_SEED);
  });

  it('names the key the dev menu writes', () => {
    expect(SEED_KEY).toBe('lumi.seed');
  });
});

describe('restoreNarrative', () => {
  let seen;
  beforeEach(() => {
    setPerspective('child');
    seen = [];
    on(Events.PERSPECTIVE_CHANGED, () => seen.push('perspective'));
  });
  afterEach(() => off(Events.PERSPECTIVE_CHANGED));

  it('restores the chosen voice without announcing a change', () => {
    expect(restoreNarrative({ perspective: 'adult', truthRevealed: false, discovered: [] })).toBe(true);
    expect(getPerspective()).toBe('adult');
    expect(seen).toEqual([]);
  });

  it('restores the truth silently', () => {
    restoreNarrative({ perspective: 'child', truthRevealed: true, discovered: [] });
    expect(isTruthRevealed()).toBe(true);
    expect(seen).toEqual([]);
  });

  it('restores discoveries and reports them back', () => {
    restoreNarrative({ perspective: 'child', discovered: ['deer', 'moth'] });
    expect(isDiscovered('deer')).toBe(true);
    expect(getDiscoveredKeys()).toEqual(expect.arrayContaining(['deer', 'moth']));
  });

  it('ignores a perspective it does not recognise', () => {
    setPerspective('adult');
    restoreNarrative({ perspective: 'omniscient' });
    expect(getPerspective()).toBe('adult');
  });

  it('refuses an empty snapshot', () => {
    expect(restoreNarrative(null)).toBe(false);
  });

  it('getDiscoveredKeys round-trips through restore', () => {
    markDiscovered('jelly');
    const keys = getDiscoveredKeys();
    expect(restoreNarrative({ discovered: keys })).toBe(true);
    expect(getDiscoveredKeys()).toEqual(expect.arrayContaining(keys));
  });
});

describe('setSectorRestored', () => {
  const ORBS = [
    { x: 0, z: 0 }, { x: 5, z: 0 }, { x: 10, z: 0 }, { x: 15, z: 0 }, { x: 20, z: 0 },
  ];
  beforeEach(() => initDimming(ORBS.map((o) => ({ ...o }))));

  it('starts with every sector dim', () => {
    expect(getRestoredSectors()).toEqual([false, false, false, false, false]);
  });

  it('marks a sector restored with no wave left running', () => {
    expect(setSectorRestored(2, { instant: true })).toBe(true);
    expect(getRestoredSectors()[2]).toBe(true);
    expect(getRestoredSectors().filter(Boolean)).toHaveLength(1);
  });

  it('refuses an index outside the sector ring', () => {
    expect(setSectorRestored(-1, { instant: true })).toBe(false);
    expect(setSectorRestored(99, { instant: true })).toBe(false);
    expect(getRestoredSectors().some(Boolean)).toBe(false);
  });

  it('hands back a copy, not the live array', () => {
    const a = getRestoredSectors();
    a[0] = true;
    expect(getRestoredSectors()[0]).toBe(false);
  });
});

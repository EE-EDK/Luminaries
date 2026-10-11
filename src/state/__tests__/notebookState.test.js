/**
 * The field notebook's ledger: what exists, what counts as seen, and how a
 * save puts it back.
 *
 * The rules these guard are the ones the rest of the restore path already
 * lives by. A load sets state and announces nothing — a restored sighting is
 * not a sighting. A save from before the notebook existed must still load, and
 * must not open an empty book on a player who has already met the deer. And
 * every thing the game can show the player has somewhere to be written down:
 * a discovery that fills no entry is a discovery the book silently loses.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  NOTEBOOK_PAGES, ALL_ENTRIES, CREATURE_ENTRIES, FLORA_ENTRIES, SKY_ENTRIES, PLACE_ENTRIES,
  WEATHER_ENTRIES, DISCOVERY_ENTRY, entryForDiscovery, entryForCreature, entryForOrbCount,
  entryForWeather, pageOf, isEntry, isSeen, markSeen, getSeenKeys, seenCount, pageProgress,
  entriesFromProgress, restoreNotebook, resetNotebook,
} from '../notebookState.js';
import { DISCOVERY_LABELS, CREATURE_NAMES } from '../../quest/config.js';
import { on, Events } from '../../kernel/eventBus.js';
import {
  SAVE_VERSION, validateSave, makeSaveEnvelope, writeSave, readSave, guardedStorage, SaveError,
} from '../saveState.js';

const WEATHER = ['CLEAR', 'MISTY', 'LIGHT_RAIN', 'HEAVY_RAIN', 'FOG_BANK', 'LUMINOUS_STORM'];

/** Count every bus event fired inside fn. */
function fired(fn) {
  const seen = [];
  const offs = Object.values(Events).map((ev) => on(ev, (d) => seen.push([ev, d])));
  try { fn(); } finally { for (const off of offs) off(); }
  return seen;
}

beforeEach(() => resetNotebook());

describe('the book has the pages the plan promises', () => {
  it('has five pages and the counts the plan names', () => {
    expect(NOTEBOOK_PAGES).toHaveLength(5);
    expect(CREATURE_ENTRIES).toHaveLength(5);
    expect(FLORA_ENTRIES).toHaveLength(16);
    expect(SKY_ENTRIES).toHaveLength(6);
    expect(PLACE_ENTRIES).toHaveLength(5);
    expect(WEATHER_ENTRIES).toHaveLength(6);
  });

  it('has no duplicate keys and files every entry on a real page', () => {
    expect(new Set(ALL_ENTRIES).size).toBe(ALL_ENTRIES.length);
    for (const k of ALL_ENTRIES) expect(NOTEBOOK_PAGES, k).toContain(pageOf(k));
  });

  it('covers every weather state the game can be in', () => {
    expect(WEATHER_ENTRIES.map((k) => k.slice('weather.'.length))).toEqual(WEATHER);
  });
});

describe('everything the game can show has an entry', () => {
  it('every DISCOVERY_LABELS key fills an entry', () => {
    const keys = Object.keys(DISCOVERY_LABELS);
    // A floor on what was read: an empty table would pass every check below.
    expect(keys.length).toBeGreaterThanOrEqual(8);
    for (const k of keys) {
      const e = entryForDiscovery(k);
      expect(e, `discovery "${k}" has no notebook entry`).not.toBeNull();
      expect(isEntry(e), `${k} -> ${e}`).toBe(true);
    }
  });

  it('every key narrativeState tracks fills an entry', () => {
    for (const k of ['deer', 'puffling', 'jelly', 'moth', 'fairyRing', 'crystalChain', 'pond']) {
      expect(entryForDiscovery(k), k).not.toBeNull();
    }
  });

  it('every creature the quest names has a page entry, and so does the luminid', () => {
    const types = Object.keys(CREATURE_NAMES.child).filter((k) => k !== 'any');
    expect(types.sort()).toEqual(['deer', 'jelly', 'moth', 'puff']);
    for (const t of types) expect(entryForCreature(t), t).not.toBeNull();
    expect(entryForCreature('luminid')).toBe('creature.luminid');
    expect(entryForCreature('any')).toBeNull();
  });

  it('every orb of the five fills a constellation', () => {
    for (let n = 1; n <= 5; n++) expect(isEntry(entryForOrbCount(n)), `orb ${n}`).toBe(true);
    expect(entryForOrbCount(0)).toBeNull();
    expect(entryForOrbCount(6)).toBeNull();
  });

  it('every weather state fills an entry, and a state the book does not know fills none', () => {
    for (const w of WEATHER) expect(isEntry(entryForWeather(w)), w).toBe(true);
    expect(entryForWeather('ASHFALL')).toBeNull();
  });

  it('maps "puffling" (the discovery word) onto "puff" (everyone else\'s)', () => {
    expect(DISCOVERY_ENTRY.puffling).toBe(entryForCreature('puff'));
  });

  it('refuses a discovery key it was not given, including inherited ones', () => {
    expect(entryForDiscovery('toString')).toBeNull();
    expect(entryForDiscovery('constructor')).toBeNull();
    expect(entryForDiscovery(undefined)).toBeNull();
  });
});

describe('markSeen', () => {
  it('records a first sighting once and says so', () => {
    expect(markSeen('flora.fern')).toBe(true);
    expect(isSeen('flora.fern')).toBe(true);
    expect(markSeen('flora.fern')).toBe(false);
    expect(seenCount()).toBe(1);
  });

  it('announces a first sighting, once', () => {
    const ev = fired(() => { markSeen('flora.fern'); markSeen('flora.fern'); });
    expect(ev).toEqual([[Events.NOTEBOOK_ENTRY, { key: 'flora.fern' }]]);
  });

  it('ignores a key that is not an entry', () => {
    expect(markSeen('flora.unobtainium')).toBe(false);
    expect(markSeen(null)).toBe(false);
    expect(markSeen('')).toBe(false);
    expect(seenCount()).toBe(0);
  });

  it('counts progress per page', () => {
    markSeen('flora.fern'); markSeen('flora.tree'); markSeen('creature.deer');
    expect(pageProgress('flora')).toEqual({ seen: 2, total: 16 });
    expect(pageProgress('creature')).toEqual({ seen: 1, total: 5 });
    expect(pageProgress('sky')).toEqual({ seen: 0, total: 6 });
  });

  it('lists seen keys in page order, so two saves of one book are one string', () => {
    markSeen('weather.CLEAR'); markSeen('creature.deer'); markSeen('flora.tree');
    expect(getSeenKeys()).toEqual(['creature.deer', 'flora.tree', 'weather.CLEAR']);
  });
});

describe('restoreNotebook', () => {
  it('puts the saved book back', () => {
    restoreNotebook(['flora.fern', 'creature.moth']);
    expect(isSeen('flora.fern')).toBe(true);
    expect(isSeen('creature.moth')).toBe(true);
    expect(seenCount()).toBe(2);
  });

  it('announces nothing — a restored sighting is not a sighting', () => {
    const ev = fired(() => restoreNotebook([...ALL_ENTRIES], { discovered: ['deer'], orbsCollected: 5, weather: 'CLEAR' }));
    expect(ev).toEqual([]);
    expect(seenCount()).toBe(ALL_ENTRIES.length);
  });

  it('replaces what the world opened with, rather than adding to it', () => {
    markSeen('weather.CLEAR');                       // the sky it booted under
    restoreNotebook(['flora.fern', 'weather.MISTY']);
    expect(isSeen('weather.CLEAR')).toBe(false);
    expect(isSeen('weather.MISTY')).toBe(true);
  });

  it('takes a save that has the field as it stands, and does not top it up from the rest of the save', () => {
    // narrative.discovered said 'deer' and two orbs were collected, but the book
    // that was saved had neither: that is what the player had seen.
    restoreNotebook(['flora.fern'], { discovered: ['deer', 'puffling'], orbsCollected: 2, weather: 'MISTY', wishes: [true] });
    expect(getSeenKeys()).toEqual(['flora.fern']);
  });

  it('drops keys it does not know instead of carrying them forever', () => {
    const n = restoreNotebook(['flora.fern', 'flora.renamedInV2', 'garbage', 7, null]);
    expect(getSeenKeys()).toEqual(['flora.fern']);
    // getSeenKeys walks the known list, so only the count and a re-save can see a stowaway.
    expect(n).toBe(1);
    expect(seenCount()).toBe(1);
  });

  it('survives a save from before the notebook: no field, no progress, empty book', () => {
    expect(() => restoreNotebook(undefined)).not.toThrow();
    expect(seenCount()).toBe(0);
    expect(() => restoreNotebook(null, undefined)).not.toThrow();
    expect(() => restoreNotebook('not an array')).not.toThrow();
    expect(seenCount()).toBe(0);
  });

  it('fills an old save\'s book from what that save already knows', () => {
    restoreNotebook(undefined, {
      discovered: ['deer', 'puffling', 'pond', 'glyph'],
      orbsCollected: 2,
      wishes: [false, true, false, false, false],
      weather: 'LIGHT_RAIN',
    });
    expect(getSeenKeys()).toEqual([
      'creature.puff', 'creature.deer',
      'sky.constellation0', 'sky.constellation1', 'sky.wish',
      'place.pond', 'place.glyph',
      'weather.LIGHT_RAIN',
    ].sort((a, b) => ALL_ENTRIES.indexOf(a) - ALL_ENTRIES.indexOf(b)));
  });
});

describe('entriesFromProgress', () => {
  it('is pure: it names entries and marks none', () => {
    const ev = fired(() => entriesFromProgress({ discovered: ['deer'], orbsCollected: 3 }));
    expect(ev).toEqual([]);
    expect(seenCount()).toBe(0);
  });

  it('gives one constellation per orb collected, never more than five', () => {
    expect(entriesFromProgress({ orbsCollected: 3 })).toEqual(
      ['sky.constellation0', 'sky.constellation1', 'sky.constellation2']);
    expect(entriesFromProgress({ orbsCollected: 99 })).toHaveLength(5);
  });

  it('ignores a spent-wish array with nothing spent', () => {
    expect(entriesFromProgress({ wishes: [false, false, false, false, false] })).toEqual([]);
  });

  it('copes with nothing at all', () => {
    expect(entriesFromProgress(undefined)).toEqual([]);
    expect(entriesFromProgress({})).toEqual([]);
  });
});

// ----------------------------------------------------------------
// Through the save envelope
// ----------------------------------------------------------------

function fakeStorage() {
  const map = new Map();
  return { getItem: (k) => (map.has(k) ? map.get(k) : null), setItem: (k, v) => map.set(k, String(v)), removeItem: (k) => map.delete(k) };
}

function goodSnapshot(notebook) {
  const narrative = { perspective: 'child', truthRevealed: false, wizardDone: false, discovered: ['deer'], glyphs: [] };
  if (notebook !== undefined) narrative.notebook = notebook;
  return {
    quest: { phase: 'RISING', collected: [{ orbIndex: 2, creature: 'jelly' }], obeliskY: -20 },
    world: {
      time: 0.25,
      weather: { cur: 'CLEAR', next: null, stateTimer: 12, transTimer: 0, transDuration: 0, blending: false },
      wishes: [true, false, false, false, false],
    },
    narrative,
    player: { x: 1, z: 2, yaw: 0, pitch: 0, frequency: null, jellyTimer: 0 },
  };
}

describe('the notebook through the save envelope', () => {
  const opts = { weatherStates: WEATHER };

  it('accepts a save that carries a notebook', () => {
    expect(() => validateSave(makeSaveEnvelope(goodSnapshot(['flora.fern']), 42, 1), opts)).not.toThrow();
  });

  it('accepts a save from before the field existed', () => {
    const env = makeSaveEnvelope(goodSnapshot(undefined), 42, 1);
    expect('notebook' in env.narrative).toBe(false);
    expect(env.v).toBe(SAVE_VERSION);
    expect(() => validateSave(env, opts)).not.toThrow();
  });

  it('keeps the schema at version 1', () => {
    expect(SAVE_VERSION).toBe(1);
  });

  for (const [why, bad] of [
    ['a string', 'flora.fern'],
    ['an object', { 'flora.fern': true }],
    ['numbers', [1, 2]],
    ['null', null],
    ['a mixed array', ['flora.fern', 3]],
  ]) {
    it(`rejects a notebook that is ${why}`, () => {
      expect(() => validateSave(makeSaveEnvelope(goodSnapshot(bad), 42, 1), opts)).toThrow(SaveError);
    });
  }

  it('writes and reads the book back byte for byte', () => {
    markSeen('creature.deer'); markSeen('flora.fern'); markSeen('weather.MISTY');
    const store = guardedStorage(fakeStorage());
    expect(writeSave(store, makeSaveEnvelope(goodSnapshot(getSeenKeys()), 42, 1), opts)).toBe(true);
    const back = readSave(store, opts);
    expect(back.narrative.notebook).toEqual(['creature.deer', 'flora.fern', 'weather.MISTY']);

    resetNotebook();
    restoreNotebook(back.narrative.notebook);
    expect(getSeenKeys()).toEqual(['creature.deer', 'flora.fern', 'weather.MISTY']);
  });

  it('loads an old save through readSave without parking it as rejected', () => {
    const raw = fakeStorage();
    const store = guardedStorage(raw);
    store.set('lumi.save.v1', JSON.stringify(makeSaveEnvelope(goodSnapshot(undefined), 42, 1)));
    expect(readSave(store, opts)).not.toBeNull();
    expect(raw.getItem('lumi.save.rejected')).toBeNull();
  });
});

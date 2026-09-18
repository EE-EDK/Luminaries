/**
 * Save schema, validation and autosave scheduling.
 *
 * The rule these guard: a save that cannot be trusted must fail LOUDLY and be
 * thrown away, never half-applied. A world restored from a corrupt payload —
 * three orbs of progress with two restored sectors, say — is worse than a
 * fresh forest, because the player cannot tell it is broken.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  SAVE_KEY, SAVE_REJECTED_KEY, SAVE_VERSION, SaveError,
  guardedStorage, validateSave, migrateSave, readSave, writeSave,
  clearSave, hasSave, makeSaveEnvelope, initAutosave,
} from '../saveState.js';

const WEATHER = ['CLEAR', 'MISTY', 'LIGHT_RAIN', 'HEAVY_RAIN', 'FOG_BANK', 'LUMINOUS_STORM'];
const opts = { weatherStates: WEATHER };

/** In-memory Storage stand-in. */
function fakeStorage(initial = {}) {
  const map = new Map(Object.entries(initial));
  return {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => { map.set(k, String(v)); },
    removeItem: (k) => { map.delete(k); },
    _map: map,
  };
}

/** A snapshot that passes validation; override any leaf to make it fail. */
function goodSnapshot(over = {}) {
  return {
    quest: { phase: 'RISING', collected: [{ orbIndex: 2, creature: 'jelly' }], obeliskY: -20 },
    world: {
      time: 0.25,
      weather: { cur: 'CLEAR', next: null, stateTimer: 12, transTimer: 0, transDuration: 0, blending: false },
      wishes: [true, false, false, false, false],
    },
    narrative: { perspective: 'child', truthRevealed: false, wizardDone: false, discovered: ['deer'], glyphs: [0, 3] },
    player: { x: 1.5, z: -2.5, yaw: 0.3, pitch: -0.1, frequency: null, jellyTimer: 0 },
    ...over,
  };
}

const envelope = (over) => makeSaveEnvelope(goodSnapshot(over), 42, 1000);

beforeEach(() => { vi.restoreAllMocks(); });

describe('validateSave', () => {
  it('accepts a well-formed save', () => {
    expect(() => validateSave(envelope(), opts)).not.toThrow();
  });

  const bad = [
    ['not an object', 'garbage'],
    ['wrong version', { ...envelope(), v: 0 }],
    ['string version', { ...envelope(), v: '1' }],
    ['no seed', { ...envelope(), seed: undefined }],
    ['orb index out of range', envelope({ quest: { phase: 'SEEK', collected: [{ orbIndex: 9, creature: 'deer' }], obeliskY: -25 } })],
    ['duplicate orb', envelope({ quest: { phase: 'SEEK', collected: [{ orbIndex: 1, creature: 'deer' }, { orbIndex: 1, creature: 'moth' }], obeliskY: -25 } })],
    ['unknown creature', envelope({ quest: { phase: 'SEEK', collected: [{ orbIndex: 1, creature: 'dragon' }], obeliskY: -25 } })],
    ['obeliskY out of range', envelope({ quest: { phase: 'SEEK', collected: [], obeliskY: 40 } })],
    ['finished phase without orbs', envelope({ quest: { phase: 'FREE_ROAM', collected: [], obeliskY: 0 } })],
    ['time out of range', envelope({ world: { ...goodSnapshot().world, time: 1.5 } })],
    ['NaN time', envelope({ world: { ...goodSnapshot().world, time: NaN } })],
    ['unknown weather', envelope({ world: { ...goodSnapshot().world, weather: { cur: 'ASHFALL', next: null, stateTimer: 0, transTimer: 0, transDuration: 0, blending: false } } })],
    ['wrong wish count', envelope({ world: { ...goodSnapshot().world, wishes: [true, false] } })],
    ['bad perspective', envelope({ narrative: { ...goodSnapshot().narrative, perspective: 'omniscient' } })],
    ['non-string discoveries', envelope({ narrative: { ...goodSnapshot().narrative, discovered: [7] } })],
    ['bad player coordinate', envelope({ player: { ...goodSnapshot().player, x: 'over there' } })],
  ];
  for (const [why, payload] of bad) {
    it(`rejects: ${why}`, () => {
      expect(() => validateSave(payload, opts)).toThrow(SaveError);
    });
  }
});

describe('migrateSave', () => {
  it('passes a current-version save straight through', () => {
    const e = envelope();
    expect(migrateSave(e)).toBe(e);
  });
  it('refuses a version it has no path from', () => {
    expect(() => migrateSave({ v: 0 })).toThrow(/no migration from version 0/);
  });
});

describe('readSave / writeSave', () => {
  it('round-trips a save', () => {
    const store = guardedStorage(fakeStorage());
    expect(writeSave(store, envelope(), opts)).toBe(true);
    const back = readSave(store, opts);
    expect(back).toEqual(envelope());
  });

  it('returns null when there is nothing saved', () => {
    expect(readSave(guardedStorage(fakeStorage()), opts)).toBe(null);
  });

  it('rejects a corrupt payload loudly, parks it, and clears the slot', () => {
    const err = vi.spyOn(console, 'error').mockImplementation(() => {});
    const raw = fakeStorage({ [SAVE_KEY]: '{"v":1,"seed":' });
    const store = guardedStorage(raw);
    expect(readSave(store, opts)).toBe(null);
    expect(err).toHaveBeenCalledTimes(1);
    expect(raw.getItem(SAVE_KEY)).toBe(null);
    expect(raw.getItem(SAVE_REJECTED_KEY)).toBe('{"v":1,"seed":');
  });

  it('rejects a valid-JSON but invalid save the same way', () => {
    const err = vi.spyOn(console, 'error').mockImplementation(() => {});
    const raw = fakeStorage({ [SAVE_KEY]: JSON.stringify({ v: 0, nope: true }) });
    const store = guardedStorage(raw);
    expect(readSave(store, opts)).toBe(null);
    expect(err).toHaveBeenCalledTimes(1);
    expect(raw.getItem(SAVE_KEY)).toBe(null);
  });

  it('refuses to write an invalid snapshot', () => {
    const err = vi.spyOn(console, 'error').mockImplementation(() => {});
    const store = guardedStorage(fakeStorage());
    expect(writeSave(store, { v: SAVE_VERSION, seed: 42 }, opts)).toBe(false);
    expect(err).toHaveBeenCalled();
    expect(hasSave(store)).toBe(false);
  });

  it('survives storage that throws (private window, quota)', () => {
    const hostile = {
      getItem() { throw new Error('blocked'); },
      setItem() { throw new Error('quota'); },
      removeItem() { throw new Error('blocked'); },
    };
    const store = guardedStorage(hostile);
    expect(() => readSave(store, opts)).not.toThrow();
    expect(readSave(store, opts)).toBe(null);
    expect(writeSave(store, envelope(), opts)).toBe(false);
  });

  it('clearSave removes both the save and the parked reject', () => {
    const raw = fakeStorage({ [SAVE_KEY]: 'x', [SAVE_REJECTED_KEY]: 'y' });
    const store = guardedStorage(raw);
    clearSave(store);
    expect(raw.getItem(SAVE_KEY)).toBe(null);
    expect(raw.getItem(SAVE_REJECTED_KEY)).toBe(null);
  });
});

describe('initAutosave', () => {
  let now;
  const makeTimers = () => {
    const timeouts = new Map();
    const intervals = new Map();
    let id = 1;
    return {
      handle: {
        setTimeout: (f, ms) => { const h = id++; timeouts.set(h, { f, at: now + ms }); return h; },
        clearTimeout: (h) => { timeouts.delete(h); },
        setInterval: (f, ms) => { const h = id++; intervals.set(h, { f, every: ms, next: now + ms }); return h; },
        clearInterval: (h) => { intervals.delete(h); },
        now: () => now,
      },
      advance(ms) {
        now += ms;
        for (const [h, t] of [...timeouts]) if (t.at <= now) { timeouts.delete(h); t.f(); }
        for (const t of intervals.values()) while (t.next <= now) { t.next += t.every; t.f(); }
      },
    };
  };

  let store, timers, collect, active, autosave;
  beforeEach(() => {
    now = 1000;
    store = guardedStorage(fakeStorage());
    timers = makeTimers();
    collect = vi.fn(() => goodSnapshot());
    active = true;
    autosave = initAutosave({
      collect, isActive: () => active, store, seed: 42,
      timers: timers.handle, validateOpts: opts,
    });
  });
  afterEach(() => autosave.dispose());

  it('coalesces a burst of requests into one write', () => {
    autosave.request('orb');
    autosave.request('phase');
    autosave.request('discovery');
    expect(collect).not.toHaveBeenCalled();     // nothing written yet
    timers.advance(250);
    expect(collect).toHaveBeenCalledTimes(1);
    expect(hasSave(store)).toBe(true);
  });

  it('writes nothing while inactive (intro, or saving turned off)', () => {
    active = false;
    autosave.request('orb');
    timers.advance(250);
    expect(collect).not.toHaveBeenCalled();
    expect(hasSave(store)).toBe(false);
  });

  it('flush writes immediately and cancels the pending debounce', () => {
    autosave.request('orb');
    expect(autosave.flush('pagehide')).toBe(true);
    expect(collect).toHaveBeenCalledTimes(1);
    timers.advance(1000);
    expect(collect).toHaveBeenCalledTimes(1);   // the debounce did not also fire
  });

  it('suspend disarms a debounce armed before it', () => {
    // The ordering that actually happens: a request lands, the player clicks
    // Continue, applySnapshot suspends and resumes synchronously. A timer left
    // armed across that would fire after resume and write a PRE-restore world
    // over the save the player just loaded.
    autosave.request('orb');
    timers.advance(100);                        // short of the 250 ms debounce
    autosave.suspend();
    autosave.resume();
    timers.advance(1000);
    expect(collect).not.toHaveBeenCalled();
  });

  it('suspend swallows requests and resume does not replay them', () => {
    autosave.suspend();
    autosave.request('orb');
    timers.advance(1000);
    expect(collect).not.toHaveBeenCalled();
    autosave.resume();
    timers.advance(1000);
    expect(collect).not.toHaveBeenCalled();
  });

  it('saves on the interval without any events', () => {
    timers.advance(60000);
    timers.advance(250);
    expect(collect).toHaveBeenCalledTimes(1);
  });

  it('records the time of the last write', () => {
    expect(autosave.lastWrite()).toBe(0);
    autosave.flush();
    expect(autosave.lastWrite()).toBe(now);
  });
});

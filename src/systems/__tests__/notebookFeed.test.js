/**
 * The notebook feed: the proximity scan that fills the book from the entity
 * arrays, the event handlers that fill it from what the game already says, and
 * the free-roam wisp's choice of where to lead.
 *
 * The scan has a cost promise (one array, one pass, per call, no sooner than
 * every half second per type) and a truth promise (it marks what is near and
 * only that). Both are tested against a small source table so the numbers are
 * readable; one test then checks the real table covers every flora entry.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  SCAN_SOURCES, SCAN_INTERVAL_S, GUIDE_IDLE_S, createScanner, scanStep, nearestUnseenEntry,
  refreshTargets, pickNotebookGuide, nearestRecord, initNotebookFeed,
} from '../notebookFeed.js';
import { FLORA_ENTRIES, CREATURE_ENTRIES, resetNotebook, markSeen, isSeen } from '../../state/notebookState.js';
import { emit, on, Events } from '../../kernel/eventBus.js';
import { ferns, flowers } from '../../state/entityStore.js';

const FERN = 'flora.fern';
const FLOWER = 'flora.flower';

/** Two sources so the scheduling is visible; r=6 and r=10. */
function twoSources(fernArr, flowerArr) {
  return [
    { key: FERN, arr: fernArr, pos: 'xz', r: 6 },
    { key: FLOWER, arr: flowerArr, pos: 'xz', r: 10 },
  ];
}

beforeEach(() => { resetNotebook(); pickNotebookGuide(0, 0, 0); });

describe('scanStep', () => {
  it('marks a type when a record is inside its radius, and not outside it', () => {
    const sc = createScanner(twoSources([{ x: 5, z: 0 }], [{ x: 50, z: 0 }]));
    const marked = new Set();
    for (let i = 0; i < 4; i++) scanStep(sc, SCAN_INTERVAL_S, 0, 0, (k) => marked.add(k));
    expect([...marked]).toEqual([FERN]);
  });

  it('uses the radius strictly: a record exactly at r is not yet seen', () => {
    const sc = createScanner(twoSources([{ x: 6, z: 0 }], []));
    const marked = [];
    for (let i = 0; i < 4; i++) scanStep(sc, SCAN_INTERVAL_S, 0, 0, (k) => marked.push(k));
    expect(marked).toEqual([]);
  });

  it('sweeps at most one type per call', () => {
    // Three types, all due and all in range: one call must still touch only one.
    const sc = createScanner([
      { key: FERN, arr: [{ x: 1, z: 0 }], pos: 'xz', r: 6 },
      { key: FLOWER, arr: [{ x: 1, z: 1 }], pos: 'xz', r: 10 },
      { key: 'flora.reed', arr: [{ x: 2, z: 1 }], pos: 'xz', r: 10 },
    ]);
    const marked = [];
    scanStep(sc, 1, 0, 0, (k) => marked.push(k));
    expect(marked).toHaveLength(1);
    scanStep(sc, 0, 0, 0, (k) => marked.push(k));
    expect(marked).toHaveLength(2);
    scanStep(sc, 0, 0, 0, (k) => marked.push(k));
    expect(marked).toHaveLength(3);
  });

  it('does not sweep a type again until SCAN_INTERVAL_S has passed', () => {
    let reads = 0;
    const counted = { get x() { reads++; return 99; }, z: 0 };
    const sc = createScanner([{ key: FERN, arr: [counted], pos: 'xz', r: 6 }]);
    scanStep(sc, SCAN_INTERVAL_S, 0, 0, () => {});
    const afterFirst = reads;
    expect(afterFirst).toBeGreaterThan(0);
    // Many calls inside the interval: no further reads.
    for (let i = 0; i < 20; i++) scanStep(sc, 0.01, 0, 0, () => {});
    expect(reads).toBe(afterFirst);
    // Past the interval it sweeps again.
    for (let i = 0; i < 40; i++) scanStep(sc, 0.01, 0, 0, () => {});
    expect(reads).toBeGreaterThan(afterFirst);
  });

  it('alternates between types rather than letting one starve the other', () => {
    const order = [];
    const mk = (key) => ({ key, arr: [{ get x() { order.push(key); return 99; }, z: 0 }], pos: 'xz', r: 6 });
    const sc = createScanner([mk(FERN), mk(FLOWER)]);
    for (let i = 0; i < 6; i++) scanStep(sc, SCAN_INTERVAL_S, 0, 0, () => {});
    expect(order.slice(0, 4)).toEqual([FERN, FLOWER, FERN, FLOWER]);
  });

  it('skips a type that is already seen', () => {
    let reads = 0;
    const counted = { get x() { reads++; return 0; }, z: 0 };
    const sc = createScanner([{ key: FERN, arr: [counted], pos: 'xz', r: 6 }]);
    markSeen(FERN);
    for (let i = 0; i < 10; i++) scanStep(sc, SCAN_INTERVAL_S, 0, 0);
    expect(reads).toBe(0);
  });

  it('skips guide-only sources (r = 0) and reports -1 when nothing is due', () => {
    const sc = createScanner([{ key: 'place.pond', arr: [{ x: 0, z: 0 }], pos: 'xz', r: 0 }]);
    expect(scanStep(sc, 5, 0, 0, () => { throw new Error('should not mark'); })).toBe(-1);
  });

  it('reads creature positions live from the group, and grass from cx/cz', () => {
    const sc = createScanner([
      { key: 'creature.deer', arr: [{ group: { position: { x: 3, z: 0 } } }], pos: 'group', r: 8 },
      { key: 'flora.grass', arr: [{ cx: 0, cz: 4 }], pos: 'cxz', r: 8 },
    ]);
    const marked = new Set();
    for (let i = 0; i < 4; i++) scanStep(sc, SCAN_INTERVAL_S, 0, 0, (k) => marked.add(k));
    expect([...marked].sort()).toEqual(['creature.deer', 'flora.grass']);
  });

  it('marks through the real ledger by default', () => {
    const sc = createScanner(twoSources([{ x: 1, z: 1 }], []));
    scanStep(sc, SCAN_INTERVAL_S, 0, 0);
    expect(isSeen(FERN)).toBe(true);
  });
});

describe('the real source table', () => {
  it('has a proximity source for every flora and creature entry', () => {
    const live = new Set(SCAN_SOURCES.filter((s) => s.r > 0).map((s) => s.key));
    for (const k of [...FLORA_ENTRIES, ...CREATURE_ENTRIES]) expect(live.has(k), k).toBe(true);
  });

  it('uses the plan\'s six metres for the small plants and the discovery range for the quest creatures', () => {
    const r = (k) => SCAN_SOURCES.find((s) => s.key === k).r;
    expect(r(FERN)).toBe(6);
    expect(r('creature.deer')).toBe(8);
  });

  it('has no duplicate scanning keys among the sources that scan', () => {
    const keys = SCAN_SOURCES.filter((s) => s.r > 0).map((s) => s.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe('nearestUnseenEntry', () => {
  const e = (key, x, z, o = {}) => ({ key, seen: false, has: true, x, z, ...o });

  it('picks the nearest unseen entry by squared distance', () => {
    const list = [e('a', 30, 0), e('b', 0, 10), e('c', -20, 0)];
    expect(nearestUnseenEntry(list, 0, 0).key).toBe('b');
  });

  it('ignores seen entries and entries with nowhere to go', () => {
    const list = [e('near-seen', 1, 0, { seen: true }), e('near-nowhere', 2, 0, { has: false }), e('far', 40, 0)];
    expect(nearestUnseenEntry(list, 0, 0).key).toBe('far');
  });

  it('measures from the player, not the origin', () => {
    const list = [e('a', 100, 0), e('b', -100, 0)];
    expect(nearestUnseenEntry(list, 90, 0).key).toBe('a');
    expect(nearestUnseenEntry(list, -90, 0).key).toBe('b');
  });

  it('returns null when everything is seen or nothing is placed', () => {
    expect(nearestUnseenEntry([], 0, 0)).toBeNull();
    expect(nearestUnseenEntry([e('a', 1, 1, { seen: true })], 0, 0)).toBeNull();
  });
});

describe('refreshTargets', () => {
  it('records the nearest record of each unseen type and leaves seen types without a target', () => {
    const sources = twoSources([{ x: 30, z: 0 }, { x: 8, z: 0 }], [{ x: 4, z: 4 }]);
    const targets = sources.map((s) => ({ key: s.key, seen: false, has: false, x: 0, z: 0 }));
    markSeen(FLOWER);
    refreshTargets(0, 0, sources, targets);
    expect(targets[0]).toMatchObject({ seen: false, has: true, x: 8, z: 0 });
    expect(targets[1]).toMatchObject({ seen: true, has: false });
  });

  it('says has=false for a type with no records at all', () => {
    const sources = twoSources([], []);
    const targets = sources.map((s) => ({ key: s.key, seen: false, has: true, x: 0, z: 0 }));
    refreshTargets(0, 0, sources, targets);
    expect(targets[0].has).toBe(false);
  });
});

describe('pickNotebookGuide', () => {
  // The module-level sources are the live entity arrays; give them known records.
  let saved;
  beforeEach(() => {
    saved = { ferns: ferns.splice(0), flowers: flowers.splice(0) };
    ferns.push({ x: 40, z: 0 });
    // Everything else the real table lists is empty or already seen, so the fern is the only candidate.
    for (const s of SCAN_SOURCES) if (s.key !== FERN) markSeen(s.key);
  });
  afterEach(() => { ferns.length = 0; ferns.push(...saved.ferns); flowers.length = 0; flowers.push(...saved.flowers); });

  it('gives nothing until the player has been still for GUIDE_IDLE_S', () => {
    expect(pickNotebookGuide(0, 0, 0)).toBeNull();
    expect(pickNotebookGuide(0, 0, GUIDE_IDLE_S - 0.01)).toBeNull();
  });

  it('after the idle time, leads to the nearest unseen record', () => {
    const g = pickNotebookGuide(0, 0, GUIDE_IDLE_S);
    expect(g).toMatchObject({ x: 40, z: 0, key: FERN });
  });

  it('goes quiet again the moment the player moves (idle resets)', () => {
    expect(pickNotebookGuide(0, 0, GUIDE_IDLE_S + 1)).not.toBeNull();
    expect(pickNotebookGuide(0, 0, 0.2)).toBeNull();
  });

  it('returns null when every entry that can be walked to has been seen', () => {
    markSeen(FERN);
    expect(pickNotebookGuide(0, 0, GUIDE_IDLE_S + 2)).toBeNull();
  });
});

describe('nearestRecord', () => {
  it('finds the nearest record and its distance, or null for an unknown key', () => {
    const saved = ferns.splice(0);
    ferns.push({ x: 3, z: 4 }, { x: 30, z: 40 });
    const r = nearestRecord(FERN, 0, 0);
    expect(r).toMatchObject({ x: 3, z: 4 });
    expect(r.d).toBeCloseTo(5, 6);
    expect(nearestRecord('flora.nothing', 0, 0)).toBeNull();
    ferns.length = 0; ferns.push(...saved);
  });
});

describe('initNotebookFeed', () => {
  it('fills entries from the events the game already fires', () => {
    const off = initNotebookFeed();
    emit(Events.DISCOVERY, { key: 'fairyRing' });
    emit(Events.DISCOVERY, { type: 'glyph' });           // glyph reveals carry `type`
    emit(Events.CREATURE_ATTUNED, { type: 'moth' });
    emit(Events.ORB_COLLECTED, { orbsFound: 2 });
    emit(Events.WEATHER_CHANGE, { to: 'MISTY' });
    emit(Events.CRYSTAL_CHAIN, {});
    off();
    for (const k of ['place.fairyRing', 'place.glyph', 'creature.moth', 'sky.constellation1', 'weather.MISTY', 'place.crystalChain']) {
      expect(isSeen(k), k).toBe(true);
    }
  });

  it('does not trust creature discoveries: they fire from the origin, not from the creature', () => {
    const off = initNotebookFeed();
    for (const key of ['deer', 'puffling', 'jelly', 'moth']) emit(Events.DISCOVERY, { key });
    off();
    for (const k of ['creature.deer', 'creature.puff', 'creature.jelly', 'creature.moth']) expect(isSeen(k), k).toBe(false);
  });

  it('ignores events the book does not track, and tolerates empty payloads', () => {
    const off = initNotebookFeed();
    emit(Events.DISCOVERY, { key: 'somethingNew' });
    emit(Events.WEATHER_CHANGE, { to: 'SNOW' });
    emit(Events.ORB_COLLECTED, { orbsFound: 9 });
    emit(Events.DISCOVERY, undefined);
    off();
    expect(isSeen('weather.SNOW')).toBe(false);
  });

  it('stops listening once unsubscribed', () => {
    const off = initNotebookFeed();
    off();
    emit(Events.DISCOVERY, { key: 'pond' });
    expect(isSeen('place.pond')).toBe(false);
  });

  it('announces each first sighting once through NOTEBOOK_ENTRY', () => {
    const got = [];
    const unsub = on(Events.NOTEBOOK_ENTRY, (d) => got.push(d.key));
    const off = initNotebookFeed();
    emit(Events.DISCOVERY, { key: 'pond' });
    emit(Events.DISCOVERY, { key: 'pond' });
    off(); unsub();
    expect(got).toEqual(['place.pond']);
  });
});

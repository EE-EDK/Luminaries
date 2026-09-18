/**
 * Restoring quest progress without replaying it.
 *
 * The rule: loading a save must SET state, never re-collect the orbs. The
 * obvious shortcut — debugGrantOrbs in a loop — emits ORB_COLLECTED per orb,
 * and that one event drives a restoration wave, a constellation fade, a rune
 * fade, an orb burst, a resonance drone, discovery text and a camera pan. A
 * player loading a save has already seen all of it. So: zero emits, and an
 * end state derived from the orb count rather than trusted from the payload.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  initQuestState, getQuestState, getQuestSnapshot, restoreQuestState,
  getOrbsFound, getQuestPhase, debugGrantOrbs,
} from '../questState.js';
import { on, off, Events } from '../../kernel/eventBus.js';

const ORBS = [
  { x: 0, z: 0 }, { x: 5, z: 0 }, { x: 10, z: 0 }, { x: 15, z: 0 }, { x: 20, z: 0 },
];
const fresh = () => initQuestState(ORBS.map((o) => ({ ...o })));

/** Every event a collection would fire, watched at once. */
const WATCHED = [
  Events.ORB_COLLECTED, Events.QUEST_PHASE, Events.ORB_LASER_START,
  Events.ORB_FLY_START, Events.WORLD_TRANSFORMED,
];

describe('getQuestSnapshot', () => {
  beforeEach(fresh);

  it('records collection order, index and carried creature', () => {
    restoreQuestState({
      phase: 'RISING', obeliskY: -15,
      collected: [{ orbIndex: 3, creature: 'deer' }, { orbIndex: 1, creature: 'moth' }],
    });
    const snap = getQuestSnapshot();
    expect(snap.collected).toHaveLength(2);
    expect(snap.collected.map((c) => c.orbIndex).sort()).toEqual([1, 3]);
    expect(snap.collected.find((c) => c.orbIndex === 3).creature).toBe('deer');
  });

  it('quantises FINALE to COMPLETE — a save never resumes mid-cutscene', () => {
    restoreQuestState({ phase: 'FINALE', obeliskY: 0, collected: [{ orbIndex: 0, creature: 'any' }] });
    expect(getQuestSnapshot().phase).toBe('COMPLETE');
  });

  it('quantises an unfinished TRANSFORM to COMPLETE and a finished one to FREE_ROAM', () => {
    restoreQuestState({ phase: 'TRANSFORM', obeliskY: 0, collected: [{ orbIndex: 0, creature: 'any' }] });
    expect(getQuestSnapshot().phase).toBe('COMPLETE');
    restoreQuestState({ phase: 'FREE_ROAM', obeliskY: 0, collected: [{ orbIndex: 0, creature: 'any' }] });
    expect(getQuestSnapshot().phase).toBe('FREE_ROAM');
  });
});

describe('restoreQuestState', () => {
  let seen, unsubs;
  beforeEach(() => {
    fresh();
    seen = [];
    // Keep the unsubscribes: off(event) without the exact listener removes
    // nothing, and a leftover listener pushes into the NEXT test's array.
    unsubs = WATCHED.map((e) => on(e, () => seen.push(e)));
  });
  afterEach(() => { for (const u of unsubs) u(); });

  it('emits nothing at all', () => {
    restoreQuestState({
      phase: 'RISING', obeliskY: -10,
      collected: [0, 1, 2].map((i) => ({ orbIndex: i, creature: 'any' })),
    });
    expect(seen).toEqual([]);
  });

  it('is a fixed point: snapshot, restore, snapshot again is unchanged', () => {
    const saved = {
      phase: 'RISING', obeliskY: -10,
      collected: [{ orbIndex: 0, creature: 'puff' }, { orbIndex: 1, creature: 'jelly' }, { orbIndex: 2, creature: 'deer' }],
    };
    restoreQuestState(saved);
    const once = getQuestSnapshot();
    fresh();
    restoreQuestState(once);
    expect(getQuestSnapshot()).toEqual(once);
    expect(getOrbsFound()).toBe(3);
  });

  it('puts the obelisk at the height the orb count earns, not the height the save claims', () => {
    // debugGrantOrbs is a cheat: it ends with _obeliskY = 0 at any orb count,
    // so a save taken after it claims a full obelisk on partial progress.
    // Restore derives the height from the rungs instead of trusting that.
    const RUNG = 25 / 5;
    debugGrantOrbs(2);
    const cheated = getQuestSnapshot();
    expect(cheated.obeliskY).toBe(0);                 // the cheat's claim
    fresh();
    restoreQuestState(cheated);
    expect(getQuestState().obeliskY).toBe(-25 + 2 * RUNG);
  });

  it('leaves collected orbs risen and lasing, not flying or flashing', () => {
    restoreQuestState({
      phase: 'RISING', obeliskY: -10,
      collected: [{ orbIndex: 2, creature: 'jelly' }],
    });
    const o = getQuestState().orbs[2];
    expect(o.found).toBe(true);
    expect(o.laserActive).toBe(true);
    expect(o.flyUp).toBe(false);
    expect(o.flashing).toBe(false);
    expect(getQuestState().orbs[0].found).toBe(false);
  });

  it('clears orbs a previous state had found', () => {
    debugGrantOrbs(4);
    restoreQuestState({ phase: 'SEEK', obeliskY: -25, collected: [] });
    expect(getOrbsFound()).toBe(0);
    expect(getQuestState().orbs.every((o) => !o.found)).toBe(true);
  });

  it('puts a finished world at the top of the obelisk regardless of the saved height', () => {
    restoreQuestState({
      phase: 'FREE_ROAM', obeliskY: -25,
      collected: [0, 1, 2, 3, 4].map((i) => ({ orbIndex: i, creature: 'any' })),
    });
    expect(getQuestState().obeliskY).toBe(0);
    expect(getQuestPhase()).toBe('FREE_ROAM');
  });

  it('refuses a snapshot with no collected list rather than half-applying it', () => {
    debugGrantOrbs(2);
    expect(restoreQuestState(null)).toBe(false);
    expect(restoreQuestState({ phase: 'SEEK' })).toBe(false);
    expect(getOrbsFound()).toBe(2);       // untouched
  });
});

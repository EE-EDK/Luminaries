/**
 * Characterization tests for the orb frequency gate.
 *
 * These document CURRENT behavior of attemptCollectOrb in src/quest/questState.js,
 * using freeGrabMode to bypass the attunement frequency check. They are a safety
 * net for later remediation work and must pass against the existing code.
 *
 * Integration tests for the REAL gated path (freeGrabMode=false) are appended
 * in the second describe block below. They mock getPlayerFrequency() from
 * attunement.js to exercise the actual gate logic without attunement state.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { on, reset, Events } from '../../kernel/eventBus.js';
import { ORB_CREATURE_SEQUENCE } from '../config.js';
import { ORB_TOUCH_R } from '../../constants.js';

// ----------------------------------------------------------------
// Mock spiritHum so primeHumForCreature (added by another worker)
// is always resolvable — even before that export lands.
// ----------------------------------------------------------------
vi.mock('../../systems/spiritHum.js', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    primeHumForCreature: vi.fn(),
  };
});

// ----------------------------------------------------------------
// Mock attunement so getPlayerFrequency is controllable per-test.
// consumeFrequency is a no-op in isolation.
// ----------------------------------------------------------------
let _mockFrequency = null;
vi.mock('../../systems/attunement.js', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    getPlayerFrequency: vi.fn(() => _mockFrequency),
    consumeFrequency: vi.fn(),
  };
});

// Imports after mocks are declared so Vitest hoisting applies
import { initQuestState, attemptCollectOrb, getQuestState } from '../questState.js';
import { setFreeGrabMode } from '../../debug/debugFlags.js';

// Helper: 5 orbs placed at the origin and at increasing X offsets
const ORBS = [
  { x: 0, z: 0 },
  { x: 5, z: 0 },
  { x: 10, z: 0 },
  { x: 15, z: 0 },
  { x: 20, z: 0 },
];

// ================================================================
// Existing characterization tests — freeGrabMode=true (no gate)
// ================================================================
describe('orb frequency gate', () => {
  beforeEach(() => {
    reset();
    initQuestState(ORBS.map(o => ({ ...o })));
    setFreeGrabMode(true);
  });

  it('collects orb 0 when standing on it in freeGrabMode', () => {
    const r = attemptCollectOrb(0, { x: 0, z: 0 });
    expect(r).toBe(true);
    expect(getQuestState().orbsFound).toBe(1);
  });

  it('returns null when too far from the orb', () => {
    const r = attemptCollectOrb(0, { x: 100, z: 100 });
    expect(r).toBe(null);
    expect(getQuestState().orbsFound).toBe(0);
  });

  it('orb 0 accepts any frequency (onboarding)', () => {
    expect(ORB_CREATURE_SEQUENCE[0]).toBe('any');
  });
});

// ================================================================
// Integration tests — real gated path (freeGrabMode=false)
// ================================================================
describe('orb gate — real gated path (freeGrabMode=false)', () => {
  beforeEach(() => {
    reset();
    _mockFrequency = null;
    initQuestState(ORBS.map(o => ({ ...o })));
    setFreeGrabMode(false);
  });

  // (a) Wrong creature carried → returns false + emits ORB_REJECTED {required, got}
  it('(a) wrong creature → false + ORB_REJECTED with required and got', () => {
    // Orb 1 requires 'jelly'; give player 'deer' (wrong)
    _mockFrequency = 'deer';
    // First collect orb 0 via freeGrabMode so _orbsFound=1 and orb 1 is next
    setFreeGrabMode(true);
    attemptCollectOrb(0, { x: 0, z: 0 }); // orb 0 = 'any', collects fine
    setFreeGrabMode(false);
    reset(); // clear listeners from above

    const events = [];
    on(Events.ORB_REJECTED, d => events.push(d));

    const r = attemptCollectOrb(1, { x: 5, z: 0 }); // orb 1 requires 'jelly'
    expect(r).toBe(false);
    expect(getQuestState().orbsFound).toBe(1);
    expect(events).toHaveLength(1);
    expect(events[0].required).toBe('jelly');
    expect(events[0].got).toBe('deer');
  });

  // (b) Correct creature → returns true, emits ORB_COLLECTED, increments orbsFound
  it('(b) correct creature → true + ORB_COLLECTED + orbsFound increments', () => {
    // Orb 0 = 'any'; give player 'jelly' (any match passes)
    _mockFrequency = 'jelly';

    const collected = [];
    on(Events.ORB_COLLECTED, d => collected.push(d));

    const r = attemptCollectOrb(0, { x: 0, z: 0 });
    expect(r).toBe(true);
    expect(getQuestState().orbsFound).toBe(1);
    expect(collected).toHaveLength(1);
    expect(collected[0].orbIndex).toBe(0);
    expect(collected[0].orbsFound).toBe(1);
  });

  // (c) null frequency → false + ORB_REJECTED with got:null
  it('(c) null frequency → false + ORB_REJECTED{got:null}', () => {
    _mockFrequency = null; // no creature carried

    const events = [];
    on(Events.ORB_REJECTED, d => events.push(d));

    const r = attemptCollectOrb(0, { x: 0, z: 0 });
    expect(r).toBe(false);
    expect(getQuestState().orbsFound).toBe(0);
    expect(events).toHaveLength(1);
    expect(events[0].got).toBeNull();
  });

  // (d) Orbs with required==='any' (index 0 and 4) accept any frequency or none
  it('(d) orb 0 (required=any) accepts any non-null frequency', () => {
    _mockFrequency = 'moth'; // non-matching but gate is 'any'
    const r = attemptCollectOrb(0, { x: 0, z: 0 });
    expect(r).toBe(true);
    expect(getQuestState().orbsFound).toBe(1);
  });

  it('(d) orb 4 (required=any) accepts any non-null frequency after collecting 0-3', () => {
    // Grant orbs 0-3 via freeGrabMode
    setFreeGrabMode(true);
    for (let i = 0; i < 4; i++) {
      attemptCollectOrb(i, { x: ORBS[i].x, z: ORBS[i].z });
    }
    setFreeGrabMode(false);
    expect(getQuestState().orbsFound).toBe(4);

    _mockFrequency = 'deer'; // mismatched type, but orb 4 = 'any'
    const r = attemptCollectOrb(4, { x: ORBS[4].x, z: ORBS[4].z });
    expect(r).toBe(true);
    expect(getQuestState().orbsFound).toBe(5);
  });

  // (e) Collection only fires when distance < ORB_TOUCH_R (2.5)
  it('(e) no collect when player is at exactly ORB_TOUCH_R (boundary — not inside)', () => {
    _mockFrequency = 'jelly';
    // Player standing exactly at ORB_TOUCH_R distance — distSq === touchR*touchR → not < so null
    const r = attemptCollectOrb(0, { x: ORB_TOUCH_R, z: 0 });
    expect(r).toBeNull();
    expect(getQuestState().orbsFound).toBe(0);
  });

  it('(e) collects when player is just inside ORB_TOUCH_R', () => {
    _mockFrequency = 'jelly';
    // Epsilon inside the radius
    const inside = ORB_TOUCH_R - 0.01;
    const r = attemptCollectOrb(0, { x: inside, z: 0 });
    expect(r).toBe(true);
    expect(getQuestState().orbsFound).toBe(1);
  });

  it('(e) no collect when player is beyond ORB_TOUCH_R', () => {
    _mockFrequency = 'jelly';
    const r = attemptCollectOrb(0, { x: ORB_TOUCH_R + 1, z: 0 });
    expect(r).toBeNull();
    expect(getQuestState().orbsFound).toBe(0);
  });
});

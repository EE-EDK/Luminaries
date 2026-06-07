/**
 * Characterization tests for the orb frequency gate.
 *
 * These document CURRENT behavior of attemptCollectOrb in src/quest/questState.js,
 * using freeGrabMode to bypass the attunement frequency check. They are a safety
 * net for later remediation work and must pass against the existing code.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { initQuestState, attemptCollectOrb, getQuestState } from '../questState.js';
import { setFreeGrabMode } from '../../debug/debugFlags.js';
import { ORB_CREATURE_SEQUENCE } from '../config.js';

const ORBS = [{ x: 0, z: 0 }, { x: 5, z: 0 }, { x: 10, z: 0 }, { x: 15, z: 0 }, { x: 20, z: 0 }];

describe('orb frequency gate', () => {
  beforeEach(() => { initQuestState(ORBS.map(o => ({ ...o }))); setFreeGrabMode(true); });

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

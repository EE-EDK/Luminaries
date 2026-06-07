/**
 * Characterization tests for the quest progression state machine.
 *
 * These document CURRENT behavior of src/quest/questState.js — they must pass
 * against the existing code. They are a safety net for later remediation work.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  initQuestState,
  getQuestState,
  debugGrantOrbs,
  updateQuestState,
} from '../questState.js';

const ORBS = [
  { x: 0, z: 0 }, { x: 5, z: 0 }, { x: 10, z: 0 }, { x: 15, z: 0 }, { x: 20, z: 0 },
];

describe('quest progression', () => {
  beforeEach(() => initQuestState(ORBS.map(o => ({ ...o }))));

  it('starts in SEEK with 0 orbs', () => {
    const s = getQuestState();
    expect(s.questPhase).toBe('SEEK');
    expect(s.orbsFound).toBe(0);
  });

  it('debugGrantOrbs reaches RISING and counts orbs', () => {
    debugGrantOrbs(3);
    const s = getQuestState();
    expect(s.orbsFound).toBe(3);
    expect(s.questPhase).toBe('RISING');
  });

  it('reaches FREE_ROAM after granting all orbs and pumping timers', () => {
    debugGrantOrbs(5);
    // RISING needs obeliskY>=-0.01; debugGrantOrbs sets obeliskY=0.
    // Phase timers: COMPLETE>12s, FINALE>30s, TRANSFORM>=20s (~62s total).
    for (let i = 0; i < 6000; i++) updateQuestState(0.05); // ~300s of dt
    expect(getQuestState().questPhase).toBe('FREE_ROAM');
  });
});

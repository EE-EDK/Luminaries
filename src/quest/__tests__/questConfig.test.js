/**
 * Quest configuration contract — data that drives phases and orb gates.
 */
import { describe, it, expect } from 'vitest';
import {
  QuestPhases,
  QUEST_CONFIG,
  ORB_CREATURE_SEQUENCE,
  ORB_STAGE_HINTS,
  DISCOVERY_LABELS,
} from '../config.js';

describe('quest/config', () => {
  it('contract: QuestPhases string values match keys (stable protocol)', () => {
    expect(QuestPhases.SEEK).toBe('SEEK');
    expect(QuestPhases.RISING).toBe('RISING');
    expect(QuestPhases.COMPLETE).toBe('COMPLETE');
    expect(QuestPhases.FINALE).toBe('FINALE');
    expect(QuestPhases.TRANSFORM).toBe('TRANSFORM');
  });

  it('QUEST_CONFIG.ORBS_REQUIRED matches sequence length', () => {
    expect(QUEST_CONFIG.ORBS_REQUIRED).toBe(ORB_CREATURE_SEQUENCE.length);
  });

  it('ORB_CREATURE_SEQUENCE last slot is any for finale orb', () => {
    expect(ORB_CREATURE_SEQUENCE[ORB_CREATURE_SEQUENCE.length - 1]).toBe('any');
  });

  it('ORB_STAGE_HINTS child arrays align with orb count', () => {
    expect(ORB_STAGE_HINTS.child.length).toBe(QUEST_CONFIG.ORBS_REQUIRED);
    expect(ORB_STAGE_HINTS.adult.length).toBe(QUEST_CONFIG.ORBS_REQUIRED);
  });

  it('OBSERVATION: OBELISK_RISE_SPEED is positive finite', () => {
    expect(QUEST_CONFIG.OBELISK_RISE_SPEED).toBeGreaterThan(0);
    expect(Number.isFinite(QUEST_CONFIG.OBELISK_RISE_SPEED)).toBe(true);
  });

  it('DISCOVERY_LABELS entries have child and adult strings', () => {
    for (const key of Object.keys(DISCOVERY_LABELS)) {
      const row = DISCOVERY_LABELS[key];
      expect(typeof row.child).toBe('string');
      expect(row.child.length).toBeGreaterThan(0);
      expect(typeof row.adult).toBe('string');
      expect(row.adult.length).toBeGreaterThan(0);
    }
  });

  it('ORB_STAGE_HINT strings are non-empty for each tier', () => {
    for (const row of ORB_STAGE_HINTS.child) {
      expect(row.length).toBeGreaterThan(10);
    }
    for (const row of ORB_STAGE_HINTS.adult) {
      expect(row.length).toBeGreaterThan(10);
    }
  });

  it('QuestPhases has exactly five canonical phases', () => {
    expect(Object.keys(QuestPhases)).toHaveLength(5);
  });

  it('ORB_CREATURE_SEQUENCE uses known creature ids or any', () => {
    const allowed = new Set(['puff', 'jelly', 'deer', 'moth', 'any']);
    for (const id of ORB_CREATURE_SEQUENCE) {
      expect(allowed.has(id)).toBe(true);
    }
  });

  it('QUEST_CONFIG durations are ordered sensibly for tuning', () => {
    expect(QUEST_CONFIG.FINALE_DURATION).toBeGreaterThan(0);
    expect(QUEST_CONFIG.TRANSFORM_DURATION).toBeGreaterThan(0);
  });
});

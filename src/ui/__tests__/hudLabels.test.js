import { describe, it, expect } from 'vitest';
import {
  PHASE_LABELS,
  WEATHER_LABELS,
  formatQuestHudTitle,
  formatDayPhaseLabel,
  formatWeatherLabel,
} from '../hudLabels.js';

describe('hudLabels', () => {
  it('contract: SEEK maps to onboarding quest title', () => {
    expect(formatQuestHudTitle('SEEK')).toBe('Seek the orbs...');
  });

  it('formatQuestHudTitle covers rising, complete, default', () => {
    expect(formatQuestHudTitle('RISING')).toBe('The obelisk stirs...');
    expect(formatQuestHudTitle('COMPLETE')).toBe('Convergence!');
    expect(formatQuestHudTitle('OTHER')).toBe('Luminaries');
  });

  it('PHASE_LABELS exposes night phases', () => {
    expect(PHASE_LABELS.NIGHT).toBe('Night');
    expect(PHASE_LABELS.DEEP_NIGHT).toBe('Deep Night');
  });

  it('formatDayPhaseLabel uses map or Night fallback', () => {
    expect(formatDayPhaseLabel('DUSK')).toBe('Dusk');
    expect(formatDayPhaseLabel('UNKNOWN')).toBe('Night');
  });

  it('custom label table override for tests or themes', () => {
    const custom = { X: 'Custom' };
    expect(formatDayPhaseLabel('X', custom)).toBe('Custom');
    expect(formatDayPhaseLabel('Y', custom)).toBe('Night');
  });

  it('WEATHER_LABELS covers storm and mist', () => {
    expect(WEATHER_LABELS.LUMINOUS_STORM).toBe('Storm');
    expect(WEATHER_LABELS.MISTY).toBe('Misty');
  });

  it('formatWeatherLabel maps known keys', () => {
    expect(formatWeatherLabel('CLEAR')).toBe('Clear');
    expect(formatWeatherLabel('FOG_BANK')).toBe('Fog');
  });

  it('formatWeatherLabel falls back to Clear', () => {
    expect(formatWeatherLabel(undefined)).toBe('Clear');
    expect(formatWeatherLabel('ALIENS')).toBe('Clear');
  });

  it('custom weather label table', () => {
    const w = { FOO: 'Bar' };
    expect(formatWeatherLabel('FOO', w)).toBe('Bar');
    expect(formatWeatherLabel('CLEAR', w)).toBe('Clear');
  });

  it('formatQuestHudTitle is case-sensitive on phase ids', () => {
    expect(formatQuestHudTitle('seek')).toBe('Luminaries');
  });
});

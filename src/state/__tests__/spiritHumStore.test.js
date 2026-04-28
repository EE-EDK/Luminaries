import { describe, it, expect, beforeEach } from 'vitest';
import * as sh from '../spiritHumStore.js';

beforeEach(() => {
  sh.reset();
});

describe('spiritHumStore', () => {
  it('contract: reset clears resonance type and strength', () => {
    sh.setHumResonance('deer', 0.8);
    sh.reset();
    expect(sh.humResonanceType).toBe(null);
    expect(sh.humResonanceStr).toBe(0);
  });

  it('setHumResonance assigns both fields', () => {
    sh.setHumResonance('jelly', 0.33);
    expect(sh.humResonanceType).toBe('jelly');
    expect(sh.humResonanceStr).toBe(0.33);
  });

  it('allows null type with non-zero strength (caller-defined)', () => {
    sh.setHumResonance(null, 0.1);
    expect(sh.humResonanceType).toBe(null);
    expect(sh.humResonanceStr).toBe(0.1);
  });

  it('strength boundary zero', () => {
    sh.setHumResonance('moth', 0);
    expect(sh.humResonanceStr).toBe(0);
  });

  it('strength can exceed 1 if caller bypasses norms', () => {
    sh.setHumResonance('puff', 2);
    expect(sh.humResonanceStr).toBe(2);
  });

  it('overwriting type updates without reset', () => {
    sh.setHumResonance('deer', 0.5);
    sh.setHumResonance('moth', 0.9);
    expect(sh.humResonanceType).toBe('moth');
    expect(sh.humResonanceStr).toBe(0.9);
  });

  it('reset is idempotent', () => {
    sh.reset();
    sh.reset();
    expect(sh.humResonanceType).toBe(null);
    expect(sh.humResonanceStr).toBe(0);
  });

  it('negative strength is stored as given', () => {
    sh.setHumResonance('jelly', -0.2);
    expect(sh.humResonanceStr).toBe(-0.2);
  });

  it('partial update pattern: reset then set', () => {
    sh.setHumResonance('deer', 1);
    sh.reset();
    sh.setHumResonance('deer', 0.25);
    expect(sh.humResonanceStr).toBe(0.25);
  });

  it('type string variants are distinct', () => {
    sh.setHumResonance('deer', 1);
    expect(sh.humResonanceType === 'deer').toBe(true);
    sh.setHumResonance('Deer', 1);
    expect(sh.humResonanceType).toBe('Deer');
  });
});

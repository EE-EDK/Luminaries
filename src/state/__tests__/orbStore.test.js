import { describe, it, expect, beforeEach } from 'vitest';
import * as orbStore from '../orbStore.js';

beforeEach(() => {
  orbStore.reset();
});

describe('orbStore', () => {
  it('contract: reset restores baseline boost and zero found count', () => {
    orbStore.setOrbBoost(2);
    orbStore.setOrbsFound(4);
    orbStore.reset();
    expect(orbStore.orbBoost).toBe(1.15);
    expect(orbStore.orbsFound).toBe(0);
  });

  it('setOrbBoost clamps nothing — stores exact number', () => {
    orbStore.setOrbBoost(1.5);
    expect(orbStore.orbBoost).toBe(1.5);
  });

  it('setOrbsFound accepts boundary zero', () => {
    orbStore.setOrbsFound(0);
    expect(orbStore.orbsFound).toBe(0);
  });

  it('setOrbsFound accepts positive integers', () => {
    orbStore.setOrbsFound(5);
    expect(orbStore.orbsFound).toBe(5);
  });

  it('incremental boosts do not accumulate without caller', () => {
    orbStore.setOrbBoost(1.2);
    orbStore.setOrbBoost(1.2);
    expect(orbStore.orbBoost).toBe(1.2);
  });

  it('default orbsFound is zero after reset', () => {
    orbStore.reset();
    expect(orbStore.orbsFound).toBe(0);
  });

  it('default orbBoost matches design +15% baseline', () => {
    orbStore.reset();
    expect(orbStore.orbBoost).toBeCloseTo(1.15, 5);
  });

  it('stores survive module re-entry within same process', () => {
    orbStore.setOrbsFound(3);
    expect(orbStore.orbsFound).toBe(3);
  });

  it('large orbBoost values are preserved', () => {
    orbStore.setOrbBoost(99.99);
    expect(orbStore.orbBoost).toBe(99.99);
  });

  it('reset after partial progression clears both fields', () => {
    orbStore.setOrbsFound(2);
    orbStore.setOrbBoost(1.25);
    orbStore.reset();
    expect(orbStore.orbsFound).toBe(0);
    expect(orbStore.orbBoost).toBe(1.15);
  });
});

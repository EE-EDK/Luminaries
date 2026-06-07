import { describe, it, expect, beforeEach } from 'vitest';
import * as orbStore from '../orbStore.js';

beforeEach(() => {
  orbStore.reset();
});

describe('orbStore', () => {
  it('contract: reset restores baseline boost', () => {
    orbStore.setOrbBoost(2);
    orbStore.reset();
    expect(orbStore.orbBoost).toBe(1.15);
  });

  it('setOrbBoost clamps nothing — stores exact number', () => {
    orbStore.setOrbBoost(1.5);
    expect(orbStore.orbBoost).toBe(1.5);
  });

  it('incremental boosts do not accumulate without caller', () => {
    orbStore.setOrbBoost(1.2);
    orbStore.setOrbBoost(1.2);
    expect(orbStore.orbBoost).toBe(1.2);
  });

  it('default orbBoost matches design +15% baseline', () => {
    orbStore.reset();
    expect(orbStore.orbBoost).toBeCloseTo(1.15, 5);
  });

  it('large orbBoost values are preserved', () => {
    orbStore.setOrbBoost(99.99);
    expect(orbStore.orbBoost).toBe(99.99);
  });
});

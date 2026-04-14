import { describe, it, expect, beforeEach } from 'vitest';
import { sr, resetSeed, saveSeed, restoreSeed } from '../rng.js';

beforeEach(() => resetSeed(42));

describe('rng', () => {
  it('sr() returns values between 0 and 1', () => {
    for (let i = 0; i < 200; i++) {
      const v = sr();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThanOrEqual(1);
    }
  });

  it('same seed produces the same sequence', () => {
    resetSeed(42);
    const seq1 = Array.from({ length: 20 }, () => sr());
    resetSeed(42);
    const seq2 = Array.from({ length: 20 }, () => sr());
    expect(seq1).toEqual(seq2);
  });

  it('resetSeed() produces a fresh sequence', () => {
    const first = sr();
    resetSeed(42);
    const again = sr();
    expect(again).toBe(first);
  });

  it('saveSeed/restoreSeed roundtrip', () => {
    sr(); sr(); sr(); // advance the state
    const saved = saveSeed();
    const next3 = [sr(), sr(), sr()];
    restoreSeed(saved);
    const replayed = [sr(), sr(), sr()];
    expect(replayed).toEqual(next3);
  });

  it('seed=0 guard — does not produce all zeros', () => {
    resetSeed(0);
    const vals = Array.from({ length: 10 }, () => sr());
    // seed=0 is guarded to 42, so the output should be nonzero and varied
    const allZero = vals.every((v) => v === 0);
    expect(allZero).toBe(false);
    // Additionally, they shouldn't all be the same value
    const unique = new Set(vals);
    expect(unique.size).toBeGreaterThan(1);
  });
});

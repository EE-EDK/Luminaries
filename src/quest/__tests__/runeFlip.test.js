/**
 * The rune flip's rules: who may turn the runes, and how far along the turn is.
 *
 * Pure numbers in, numbers out, so the whole truth table can be written down.
 * Yaw convention (from the player's look): forward is (-sin yaw, -cos yaw), so
 * yaw 0 faces -z. The obelisk is at the origin.
 */
import { describe, it, expect } from 'vitest';
import {
  runeFlipEligible, runeFlipProgress, runeFlipMix,
  RUNE_FLIP_SEC, RUNE_FLIP_RANGE, RUNE_FLIP_MIN_DOT,
} from '../runeFlip.js';

// A player 10 m south of the obelisk (z = +10) looks toward -z at yaw 0.
const NEAR = { x: 0, z: 10 };
const FAR = { x: 0, z: 40 };
const FACING = 0;                 // toward the obelisk from NEAR and FAR
const AWAY = Math.PI;             // directly away from it

describe('runeFlipEligible: the truth table', () => {
  // revealed × within range × looking, all eight rows.
  const rows = [
    // revealed, near, looking, expected
    [false, false, false, false],
    [false, false, true,  false],
    [false, true,  false, false],
    [false, true,  true,  false],   // not revealed: never, however well placed
    [true,  false, false, false],
    [true,  false, true,  false],   // too far, even looking right at it
    [true,  true,  false, false],   // close but looking away
    [true,  true,  true,  true],
  ];
  for (const [revealed, near, looking, expected] of rows) {
    it(`revealed=${revealed} near=${near} looking=${looking} -> ${expected}`, () => {
      const p = near ? NEAR : FAR;
      const yaw = looking ? FACING : AWAY;
      expect(runeFlipEligible(revealed, p.x, p.z, yaw)).toBe(expected);
    });
  }
});

describe('runeFlipEligible: the edges', () => {
  it('is 30 m: just inside works, just outside does not', () => {
    expect(RUNE_FLIP_RANGE).toBe(30);
    expect(runeFlipEligible(true, 0, 29.9, FACING)).toBe(true);
    expect(runeFlipEligible(true, 0, 30.1, FACING)).toBe(false);
  });

  it('measures range from the obelisk, whichever side the player is on', () => {
    expect(runeFlipEligible(true, 20, 0, Math.PI / 2)).toBe(true);   // east, facing west (forward is -sin yaw)
    expect(runeFlipEligible(true, 25, 25, FACING)).toBe(false);           // 35 m on the diagonal
  });

  it('accepts anywhere within 30 degrees of straight ahead and not past it', () => {
    expect(RUNE_FLIP_MIN_DOT).toBeCloseTo(Math.cos(Math.PI / 6), 10);
    expect(runeFlipEligible(true, NEAR.x, NEAR.z, FACING + 0.45)).toBe(true);    // ~26 deg off
    expect(runeFlipEligible(true, NEAR.x, NEAR.z, FACING - 0.45)).toBe(true);
    expect(runeFlipEligible(true, NEAR.x, NEAR.z, FACING + 0.60)).toBe(false);   // ~34 deg off
    expect(runeFlipEligible(true, NEAR.x, NEAR.z, FACING - 0.60)).toBe(false);
  });

  it('reads yaw the way the player moves: yaw 0 faces -z, not +z', () => {
    // A player at z = -10 (north of the stone) facing yaw 0 looks away from it.
    expect(runeFlipEligible(true, 0, -10, 0)).toBe(false);
    expect(runeFlipEligible(true, 0, -10, Math.PI)).toBe(true);
  });

  it('counts standing on the stone as looking at it', () => {
    expect(runeFlipEligible(true, 0, 0, 1.234)).toBe(true);
  });

  it('works for an obelisk that is not at the origin', () => {
    expect(runeFlipEligible(true, 100, 110, FACING, 100, 100)).toBe(true);
    expect(runeFlipEligible(true, 100, 110, AWAY, 100, 100)).toBe(false);
  });
});

describe('runeFlipProgress', () => {
  it('clamps below 0 and above the full time', () => {
    expect(runeFlipProgress(-5)).toBe(0);
    expect(runeFlipProgress(0)).toBe(0);
    expect(runeFlipProgress(RUNE_FLIP_SEC)).toBe(1);
    expect(runeFlipProgress(RUNE_FLIP_SEC * 10)).toBe(1);
  });

  it('takes 0.6 s and is linear in between', () => {
    expect(RUNE_FLIP_SEC).toBe(0.6);
    expect(runeFlipProgress(0.3)).toBeCloseTo(0.5, 10);
    expect(runeFlipProgress(0.15)).toBeCloseTo(0.25, 10);
  });

  it('treats a nonsense elapsed as the start', () => {
    expect(runeFlipProgress(NaN)).toBe(0);
    expect(runeFlipProgress(undefined)).toBe(0);
  });
});

describe('runeFlipMix', () => {
  it('starts where it was and ends where it is going', () => {
    expect(runeFlipMix(0, 1, 0)).toBe(0);
    expect(runeFlipMix(0, 1, RUNE_FLIP_SEC)).toBe(1);
    expect(runeFlipMix(1, 0, 0)).toBe(1);
    expect(runeFlipMix(1, 0, RUNE_FLIP_SEC)).toBe(0);
  });

  it('never leaves the 0..1 band, however long the turn is held', () => {
    for (const e of [-1, 0, 0.1, 0.3, 0.59, 0.6, 5]) {
      const m = runeFlipMix(0, 1, e);
      expect(m).toBeGreaterThanOrEqual(0);
      expect(m).toBeLessThanOrEqual(1);
    }
  });

  it('eases: slower at the ends than the middle, and half way at half time', () => {
    expect(runeFlipMix(0, 1, RUNE_FLIP_SEC / 2)).toBeCloseTo(0.5, 10);
    expect(runeFlipMix(0, 1, RUNE_FLIP_SEC * 0.1)).toBeLessThan(0.1);
    expect(runeFlipMix(0, 1, RUNE_FLIP_SEC * 0.9)).toBeGreaterThan(0.9);
  });

  it('is monotonic going up', () => {
    let last = -1;
    for (let e = 0; e <= 0.6; e += 0.05) {
      const m = runeFlipMix(0, 1, e);
      expect(m).toBeGreaterThanOrEqual(last);
      last = m;
    }
  });

  it('reverses from where it got to, not from the end', () => {
    // A second press half way through turns back from 0.5, not from 1.
    expect(runeFlipMix(0.5, 0, 0)).toBe(0.5);
    expect(runeFlipMix(0.5, 0, RUNE_FLIP_SEC)).toBe(0);
  });
});

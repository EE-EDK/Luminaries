/**
 * Look: the mouse and the touch drag turn the camera by the same amount for the
 * same movement, and both obey the sensitivity and invert settings.
 *
 * input.js cannot be imported without a page, so the arithmetic lives in
 * lookMath.js and this file proves two things: the arithmetic itself, and that
 * input.js sends BOTH of its look paths through it (the second is a read of the
 * source, because the thing being guarded is a call site, and a call site that
 * grows its own `* MOUSE_SENS` again is exactly how sensitivity once worked
 * on desktop only).
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { lookStepX, lookStepY, clampPitch } from '../lookMath.js';
import { MOUSE_SENS } from '../../constants.js';

describe('look arithmetic', () => {
  it('turns by pixels x base sensitivity x the player\'s multiplier', () => {
    expect(lookStepX(100, 1)).toBeCloseTo(100 * MOUSE_SENS, 12);
    expect(lookStepX(100, 2.5)).toBeCloseTo(100 * MOUSE_SENS * 2.5, 12);
    expect(lookStepX(100, 0.25)).toBeCloseTo(100 * MOUSE_SENS * 0.25, 12);
  });

  it('doubles when the multiplier doubles, on both axes', () => {
    expect(lookStepX(40, 2) / lookStepX(40, 1)).toBeCloseTo(2, 10);
    expect(lookStepY(40, 2, 1) / lookStepY(40, 1, 1)).toBeCloseTo(2, 10);
  });

  it('flips only the vertical axis when Y is inverted', () => {
    expect(lookStepY(30, 1, -1)).toBeCloseTo(-lookStepY(30, 1, 1), 12);
    expect(lookStepX(30, 1)).toBeGreaterThan(0);
  });

  it('does nothing for no movement', () => {
    expect(lookStepX(0, 3)).toBe(0);
    expect(lookStepY(0, 3, -1) === 0).toBe(true);
  });

  it('keeps pitch within the range the camera may look through', () => {
    expect(clampPitch(5)).toBe(1);
    expect(clampPitch(-5)).toBe(-1);
    expect(clampPitch(0.3)).toBe(0.3);
  });
});

describe('input.js routes both devices through it', () => {
  const src = readFileSync(resolve(import.meta.dirname, '../input.js'), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

  it('has a mouse path and a touch path, each stepping yaw and pitch through lookMath', () => {
    expect(src.match(/yaw -= lookStepX\(/g) || []).toHaveLength(2);
    expect(src.match(/pitch -= lookStepY\(/g) || []).toHaveLength(2);
    expect(src.match(/pitch = clampPitch\(/g) || []).toHaveLength(2);
  });

  it('feeds every one of them the live sensitivity and invert state', () => {
    expect(src.match(/lookStepX\([^)]*\b_lookSens\)/g) || []).toHaveLength(2);
    expect(src.match(/lookStepY\([^)]*\b_lookSens, _invertY\)/g) || []).toHaveLength(2);
  });

  it('keeps no private copy of the arithmetic', () => {
    expect(src).not.toMatch(/MOUSE_SENS/);
  });
});

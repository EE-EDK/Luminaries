/**
 * Locks physics/world constants used across steering, quest, dimming.
 */
import { describe, it, expect } from 'vitest';
import {
  WORLD_R,
  ORB_N,
  ORB_TOUCH_R,
  ORB_SENSE_R,
  OBELISK_H,
  GRAVITY,
  MOVE_SPEED,
  SPRINT_MULT,
  C,
} from '../constants.js';

describe('constants contract', () => {
  it('WORLD_R matches steering worldBounds assumption (meters)', () => {
    expect(WORLD_R).toBe(90);
  });

  it('ORB_N governs five-orbs quest layout', () => {
    expect(ORB_N).toBe(5);
  });

  it('touch radius is positive and smaller than sense radius', () => {
    expect(ORB_TOUCH_R).toBeGreaterThan(0);
    expect(ORB_TOUCH_R).toBeLessThan(ORB_SENSE_R);
  });

  it('OBELISK_H matches quest world scale (positive height)', () => {
    expect(OBELISK_H).toBe(30);
  });

  it('movement constants are finite and ordered for gameplay', () => {
    expect(GRAVITY).toBeGreaterThan(0);
    expect(MOVE_SPEED).toBeGreaterThan(0);
    expect(SPRINT_MULT).toBeGreaterThan(1);
    expect(Number.isFinite(GRAVITY + MOVE_SPEED + SPRINT_MULT)).toBe(true);
  });

  it('palette bundle C exposes white and orbGold as numbers', () => {
    expect(typeof C.white).toBe('number');
    expect(typeof C.orbGold).toBe('number');
  });

  it('C vegetation palette keys exist for materials', () => {
    expect(C.leaf).toBeDefined();
    expect(C.bark).toBeDefined();
  });

  it('WORLD_R usable in margin calculations (WORLD_R > 2 * default margin)', () => {
    expect(WORLD_R).toBeGreaterThan(20);
  });

  it('ORB_N consistent with sector slice math (2π/N)', () => {
    const slice = (2 * Math.PI) / ORB_N;
    expect(slice).toBeGreaterThan(0);
    expect(Number.isFinite(slice)).toBe(true);
  });

  it('SPRINT_MULT scales above base move speed multiplier', () => {
    expect(SPRINT_MULT).toBeCloseTo(1.8);
  });
});

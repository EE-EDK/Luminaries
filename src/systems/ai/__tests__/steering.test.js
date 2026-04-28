import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  seek,
  flee,
  arrive,
  separation,
  cohesion,
  alignment,
  worldBounds,
  avoidObstacles,
} from '../steering.js';
import { WORLD_R } from '../../../constants.js';

describe('steering', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('contract: seek points toward target with max speed cap', () => {
    const p = { x: 0, z: 0 };
    const t = { x: 3, z: 0 };
    const v = seek(p, t, 5);
    expect(v.x).toBe(5);
    expect(v.z).toBe(0);
  });

  it('seek returns zero when already at target (d < 0.01)', () => {
    const p = { x: 1, z: 1 };
    const t = { x: 1, z: 1 };
    const v = seek(p, t, 5);
    expect(v.x).toBe(0);
    expect(v.z).toBe(0);
  });

  it('flee points away from threat', () => {
    const p = { x: 0, z: 0 };
    const th = { x: 1, z: 0 };
    const v = flee(p, th, 4);
    expect(v.x).toBeLessThan(0);
    expect(v.z).toBe(0);
  });

  it('arrive slows inside slowRadius', () => {
    const p = { x: 0, z: 0 };
    const t = { x: 2, z: 0 };
    const v = arrive(p, t, 10, 10);
    expect(Math.abs(v.x)).toBeLessThan(10);
  });

  it('separation pushes away from close neighbors', () => {
    const pos = { x: 0, z: 0 };
    const neighbors = [{ x: 1, z: 0 }];
    const v = separation(pos, neighbors, 5);
    expect(v.x).toBeLessThan(0);
  });

  it('cohesion average handles empty neighborhood', () => {
    const pos = { x: 0, z: 0 };
    const v = cohesion(pos, []);
    expect(v.x).toBe(0);
    expect(v.z).toBe(0);
  });

  it('alignment averages velocity when present', () => {
    const v = alignment([
      { vx: 1, vz: 0 },
      { vx: -1, vz: 0 },
    ]);
    expect(v.x).toBe(0);
    expect(v.z).toBe(0);
  });

  it('worldBounds returns zero well inside radius', () => {
    const pos = { x: 1, z: 1 };
    const v = worldBounds(pos, 10);
    expect(v.x).toBe(0);
    expect(v.z).toBe(0);
  });

  it('worldBounds pushes inward when outside WORLD_R - margin', () => {
    const limit = WORLD_R - 5;
    const pos = { x: limit + 20, z: 0 };
    const v = worldBounds(pos, 5);
    expect(v.x).toBeLessThan(0);
    expect(Math.abs(v.z)).toBeLessThan(1e-6);
  });

  it('avoidObstacles steers away and optional count limits scan', () => {
    const pos = { x: 0, z: 0 };
    const obstacles = [{ x: 5, z: 0, colR: 2 }];
    const v = avoidObstacles(pos, 0, obstacles, 8, 1, undefined);
    expect(Number.isFinite(v.x)).toBe(true);
    const obstacles2 = [{ x: 4, z: 0 }, { x: 99, z: 0 }];
    const a = avoidObstacles(pos, 0, obstacles2, 10, 1, 1);
    const b = avoidObstacles(pos, 0, obstacles2, 10, 1);
    expect(a.x).toBe(b.x);
  });
});

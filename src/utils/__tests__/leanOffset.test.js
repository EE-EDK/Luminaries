/**
 * leanOffset — the shape of a nudge.
 *
 * Used by the player light's lean toward the next orb. The shape matters more
 * than the magnitude: it must start at nothing, end at nothing, and point only
 * at the target. A lean that snaps back reads as a glitch; one that persists,
 * or grows with distance, reads as a quest marker, which this game does not have.
 */
import { describe, it, expect } from 'vitest';
import { leanOffset } from '../math.js';

const out = () => ({ x: 0, z: 0 });
const REACH = 2.2;

describe('leanOffset', () => {
  it('is zero at both ends', () => {
    expect(leanOffset(0, 0, 10, 0, 0, REACH, out())).toEqual({ x: 0, z: 0 });
    expect(leanOffset(0, 0, 10, 0, 1, REACH, out())).toEqual({ x: 0, z: 0 });
  });

  it('points at the target and nowhere else', () => {
    const east = leanOffset(0, 0, 10, 0, 0.5, REACH, out());
    expect(east.x).toBeGreaterThan(0);
    expect(east.z).toBeCloseTo(0, 6);
    const north = leanOffset(0, 0, 0, -10, 0.5, REACH, out());
    expect(north.z).toBeLessThan(0);
    expect(north.x).toBeCloseTo(0, 6);
  });

  it('leans the same distance however far away the target is', () => {
    const near = leanOffset(0, 0, 3, 0, 0.5, REACH, out());
    const far = leanOffset(0, 0, 300, 0, 0.5, REACH, out());
    expect(near.x).toBeCloseTo(far.x, 6);
  });

  it('peaks in the middle and is symmetric about it', () => {
    const q = leanOffset(0, 0, 10, 0, 0.25, REACH, out()).x;
    const h = leanOffset(0, 0, 10, 0, 0.5, REACH, out()).x;
    const t = leanOffset(0, 0, 10, 0, 0.75, REACH, out()).x;
    expect(h).toBeGreaterThan(q);
    expect(h).toBeGreaterThan(t);
    expect(q).toBeCloseTo(t, 6);
    expect(h).toBeCloseTo(REACH, 6);
  });

  it('never exceeds the reach it was given', () => {
    for (let p = 0; p <= 1.0001; p += 0.05) {
      const o = leanOffset(0, 0, 10, 10, p, REACH, out());
      expect(Math.hypot(o.x, o.z), `progress ${p.toFixed(2)}`).toBeLessThanOrEqual(REACH + 1e-9);
    }
  });

  it('does nothing when source and target coincide', () => {
    expect(leanOffset(5, 5, 5, 5, 0.5, REACH, out())).toEqual({ x: 0, z: 0 });
  });

  it('does nothing outside the 0..1 window, NaN included', () => {
    for (const p of [-1, 5, NaN, undefined]) {
      expect(leanOffset(0, 0, 10, 0, p, REACH, out()), String(p)).toEqual({ x: 0, z: 0 });
    }
  });

  it('writes into the object it was handed', () => {
    const o = out();
    expect(leanOffset(0, 0, 10, 0, 0.5, REACH, o)).toBe(o);
    expect(o.x).toBeGreaterThan(0);
  });

  it('allocates one when it was not handed one', () => {
    expect(leanOffset(0, 0, 10, 0, 0.5, REACH)).toEqual(expect.objectContaining({ x: expect.any(Number) }));
  });
});

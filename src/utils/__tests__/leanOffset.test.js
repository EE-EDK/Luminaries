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

// ================================================================
// Camera character: strafe lean and idle breath.
// ================================================================
import { strafeRoll, breathOffset } from '../math.js';

describe('strafeRoll', () => {
  it('leans into the strafe, opposite in sign to the input', () => {
    expect(strafeRoll(0, 1, 0.02, 1, 5)).toBeLessThan(0);
    expect(strafeRoll(0, -1, 0.02, 1, 5)).toBeGreaterThan(0);
  });

  it('approaches the target without ever overshooting it', () => {
    let r = 0;
    for (let i = 0; i < 200; i++) r = strafeRoll(r, 1, 0.02, 0.016, 5);
    expect(r).toBeCloseTo(-0.02, 5);
    expect(Math.abs(r)).toBeLessThanOrEqual(0.02 + 1e-9);
  });

  it('returns to level when the strafe stops', () => {
    let r = -0.02;
    for (let i = 0; i < 200; i++) r = strafeRoll(r, 0, 0.02, 0.016, 5);
    expect(r).toBeCloseTo(0, 5);
  });

  it('never rolls further than the maximum, however large the input', () => {
    expect(strafeRoll(0, 99, 0.02, 1, 5)).toBeGreaterThanOrEqual(-0.02);
    expect(strafeRoll(0, -99, 0.02, 1, 5)).toBeLessThanOrEqual(0.02);
  });

  it('holds still on a zero-length frame', () => {
    expect(strafeRoll(0.01, 1, 0.02, 0, 5)).toBe(0.01);
  });

  it('treats a nonsense strafe as no strafe and levels out', () => {
    // Easing back to level is the right answer for garbage input — freezing
    // at whatever roll happened to be current would leave a tilted horizon.
    const next = strafeRoll(0.01, NaN, 0.02, 0.016, 5);
    expect(Math.abs(next)).toBeLessThan(0.01);
    expect(next).toBeGreaterThan(0);
  });

  it('recovers from a nonsense current roll rather than propagating NaN', () => {
    expect(Number.isFinite(strafeRoll(NaN, 1, 0.02, 0.016, 5))).toBe(true);
  });
});

describe('breathOffset', () => {
  it('stays silent while the player is moving or has just stopped', () => {
    expect(breathOffset(0, 10, 0.006)).toBe(0);
    expect(breathOffset(2.9, 10, 0.006)).toBe(0);
  });

  it('fades in rather than switching on', () => {
    const justAfter = Math.abs(breathOffset(3.1, 10, 0.006));
    const settled = Math.abs(breathOffset(8, 10, 0.006));
    expect(justAfter).toBeLessThan(settled);
  });

  it('stays within the amplitude it was given', () => {
    for (let t = 0; t < 40; t += 0.1) {
      expect(Math.abs(breathOffset(20, t, 0.006)), `t=${t.toFixed(1)}`).toBeLessThanOrEqual(0.006 + 1e-9);
    }
  });

  it('is not a metronome — it does not repeat on the short period', () => {
    // Two sines an octave apart: sampling one period of the faster one must
    // not give back the same value, or it reads as a mechanical bob.
    const a = breathOffset(20, 5, 0.006);
    const b = breathOffset(20, 5 + (2 * Math.PI) / 1.8, 0.006);
    expect(Math.abs(a - b)).toBeGreaterThan(1e-5);
  });

  it('crosses zero — a breath comes back', () => {
    let min = Infinity, max = -Infinity;
    for (let t = 0; t < 30; t += 0.05) {
      const v = breathOffset(20, t, 0.006);
      if (v < min) min = v;
      if (v > max) max = v;
    }
    expect(min).toBeLessThan(0);
    expect(max).toBeGreaterThan(0);
  });
});

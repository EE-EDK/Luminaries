import { describe, it, expect } from 'vitest';
import { dist2, dist2obj, clamp, lerp, smoothstep } from '../math.js';

describe('dist2', () => {
  it('returns squared distance for known values', () => {
    expect(dist2(0, 0, 3, 4)).toBe(25); // 3^2 + 4^2
  });

  it('returns 0 for same point', () => {
    expect(dist2(5, 7, 5, 7)).toBe(0);
  });

  it('is commutative', () => {
    expect(dist2(1, 2, 4, 6)).toBe(dist2(4, 6, 1, 2));
  });
});

describe('dist2obj', () => {
  it('returns squared distance for object positions', () => {
    const a = { x: 0, z: 0 };
    const b = { x: 3, z: 4 };
    expect(dist2obj(a, b)).toBe(25);
  });

  it('returns 0 for identical positions', () => {
    const p = { x: 10, z: -5 };
    expect(dist2obj(p, p)).toBe(0);
  });
});

describe('clamp', () => {
  it('clamps below minimum', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('clamps above maximum', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('returns value inside range unchanged', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('returns exact boundary values', () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });
});

describe('lerp', () => {
  it('returns a at t=0', () => {
    expect(lerp(10, 20, 0)).toBe(10);
  });

  it('returns b at t=1', () => {
    expect(lerp(10, 20, 1)).toBe(20);
  });

  it('returns midpoint at t=0.5', () => {
    expect(lerp(10, 20, 0.5)).toBe(15);
  });
});

describe('smoothstep', () => {
  it('returns 0 at t=0', () => {
    expect(smoothstep(0)).toBe(0);
  });

  it('returns 1 at t=1', () => {
    expect(smoothstep(1)).toBe(1);
  });

  it('returns 0.5 at t=0.5', () => {
    expect(smoothstep(0.5)).toBe(0.5);
  });

  it('is monotonically increasing between 0 and 1', () => {
    let prev = smoothstep(0);
    for (let i = 1; i <= 100; i++) {
      const t = i / 100;
      const cur = smoothstep(t);
      expect(cur).toBeGreaterThanOrEqual(prev);
      prev = cur;
    }
  });
});

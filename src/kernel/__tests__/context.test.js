import { describe, it, expect, beforeEach } from 'vitest';
import { update, ctx, reset } from '../context.js';

beforeEach(() => reset());

describe('context', () => {
  it('starts with default values', () => {
    expect(ctx.dt).toBe(0);
    expect(ctx.bioGlow).toBe(0);
    expect(ctx.orbBoost).toBe(1.15);
    expect(ctx.questPhase).toBe('SEEK');
  });

  it('update() writes known properties', () => {
    update({ dt: 0.016, t: 42.5, bioGlow: 0.8 });
    expect(ctx.dt).toBe(0.016);
    expect(ctx.t).toBe(42.5);
    expect(ctx.bioGlow).toBe(0.8);
  });

  it('update() ignores unknown properties', () => {
    update({ unknownProp: 'hello' });
    expect(ctx.unknownProp).toBeUndefined();
  });

  it('returns the same object reference (zero alloc)', () => {
    const ref1 = ctx;
    update({ dt: 0.016 });
    const ref2 = ctx;
    expect(ref1).toBe(ref2);
  });

  it('reset() restores defaults', () => {
    update({ dt: 0.5, bioGlow: 1.0, orbsFound: 5, attuneFlashType: 'deer' });
    reset();
    expect(ctx.dt).toBe(0);
    expect(ctx.bioGlow).toBe(0);
    expect(ctx.orbsFound).toBe(0);
    expect(ctx.attuneFlashType).toBe(null);
  });

  it('preserves properties not included in update()', () => {
    update({ bioGlow: 0.9, windX: 0.5 });
    update({ bioGlow: 0.7 });
    expect(ctx.windX).toBe(0.5);
    expect(ctx.bioGlow).toBe(0.7);
  });
});

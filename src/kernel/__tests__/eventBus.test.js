import { describe, it, expect, beforeEach } from 'vitest';
import { on, off, emit, reset, Events } from '../eventBus.js';

beforeEach(() => reset());

describe('eventBus', () => {
  it('delivers events to subscribers', () => {
    let received = null;
    on(Events.ORB_COLLECTED, (d) => { received = d; });
    emit(Events.ORB_COLLECTED, { orbIndex: 2 });
    expect(received).toEqual({ orbIndex: 2 });
  });

  it('supports multiple subscribers', () => {
    let a = 0, b = 0;
    on(Events.JUMP, () => { a++; });
    on(Events.JUMP, () => { b++; });
    emit(Events.JUMP);
    expect(a).toBe(1);
    expect(b).toBe(1);
  });

  it('unsubscribes via off()', () => {
    let count = 0;
    const fn = () => { count++; };
    on(Events.FOOTSTEP, fn);
    emit(Events.FOOTSTEP);
    expect(count).toBe(1);
    off(Events.FOOTSTEP, fn);
    emit(Events.FOOTSTEP);
    expect(count).toBe(1);
  });

  it('unsubscribes via returned function', () => {
    let count = 0;
    const unsub = on(Events.LAND, () => { count++; });
    emit(Events.LAND);
    expect(count).toBe(1);
    unsub();
    emit(Events.LAND);
    expect(count).toBe(1);
  });

  it('isolates different event types', () => {
    let jumpCount = 0, landCount = 0;
    on(Events.JUMP, () => { jumpCount++; });
    on(Events.LAND, () => { landCount++; });
    emit(Events.JUMP);
    expect(jumpCount).toBe(1);
    expect(landCount).toBe(0);
  });

  it('reset() clears all listeners', () => {
    let count = 0;
    on(Events.ORB_COLLECTED, () => { count++; });
    on(Events.JUMP, () => { count++; });
    reset();
    emit(Events.ORB_COLLECTED);
    emit(Events.JUMP);
    expect(count).toBe(0);
  });

  it('handles emit with no subscribers gracefully', () => {
    expect(() => emit(Events.WEATHER_CHANGE, { state: 'rain' })).not.toThrow();
  });

  it('passes data to all subscribers', () => {
    const results = [];
    on(Events.CREATURE_ATTUNED, (d) => results.push(d.type));
    on(Events.CREATURE_ATTUNED, (d) => results.push(d.type + '!'));
    emit(Events.CREATURE_ATTUNED, { type: 'deer' });
    // Reverse iteration order (splice-safe dispatch)
    expect(results).toEqual(['deer!', 'deer']);
  });

  it('unsubscribe during dispatch does not skip listeners (reverse iteration)', () => {
    const called = [];
    let unsub2;
    const fn1 = () => { called.push('fn1'); };
    const fn2 = () => { called.push('fn2'); unsub2(); };
    const fn3 = () => { called.push('fn3'); };
    on(Events.JUMP, fn1);
    unsub2 = on(Events.JUMP, fn2);
    on(Events.JUMP, fn3);
    emit(Events.JUMP);
    // Reverse order: fn3, fn2 (unsubs itself), fn1 — all three fire
    expect(called).toContain('fn1');
    expect(called).toContain('fn2');
    expect(called).toContain('fn3');
    expect(called).toHaveLength(3);
  });

  it('subscribing during dispatch does not fire the new listener in same cycle', () => {
    let lateCalled = false;
    on(Events.LAND, () => {
      on(Events.LAND, () => { lateCalled = true; });
    });
    emit(Events.LAND);
    // The newly added listener sits at a higher index than the current reverse cursor,
    // so it must NOT be called in the same dispatch cycle.
    expect(lateCalled).toBe(false);
  });
});

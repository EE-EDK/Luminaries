import { describe, it, expect, beforeEach } from 'vitest';
import { addSystem, removeSystem, setEnabled, run, list, reset, Phase } from '../scheduler.js';

beforeEach(() => reset());

describe('scheduler', () => {
  it('contract: passes (dt, t, contextSlices) — third arg is the shared snapshot', () => {
    let seen = null;
    addSystem('probe', Phase.HUD, (dt, t, ctx) => {
      seen = { dt, t, ctx };
    });
    run(0.016, 42.25);
    expect(seen.dt).toBe(0.016);
    expect(seen.t).toBe(42.25);
    expect(seen.ctx).toBeDefined();
    expect(seen.ctx.time).toBeDefined();
    expect(seen.ctx.quest).toBeDefined();
    expect(seen.ctx.player).toBeDefined();
  });

  it('runs systems in phase order', () => {
    const order = [];
    addSystem('c', Phase.VEGETATION, () => order.push('c'));
    addSystem('a', Phase.CRYSTAL_PROXIMITY, () => order.push('a'));
    addSystem('b', Phase.FAUNA_UPDATE, () => order.push('b'));
    run(0.016, 1.0);
    expect(order).toEqual(['a', 'b', 'c']);
  });

  it('passes dt and t to update functions', () => {
    let receivedDt = 0, receivedT = 0;
    addSystem('test', Phase.FLORA_GLOW, (dt, t) => { receivedDt = dt; receivedT = t; });
    run(0.016, 42.5);
    expect(receivedDt).toBe(0.016);
    expect(receivedT).toBe(42.5);
  });

  it('removeSystem() removes by name', () => {
    let count = 0;
    addSystem('a', 10, () => { count++; });
    addSystem('b', 20, () => { count++; });
    removeSystem('a');
    run(0.016, 0);
    expect(count).toBe(1);
  });

  it('setEnabled() skips disabled systems', () => {
    let count = 0;
    addSystem('a', 10, () => { count++; });
    setEnabled('a', false);
    run(0.016, 0);
    expect(count).toBe(0);
    setEnabled('a', true);
    run(0.016, 0);
    expect(count).toBe(1);
  });

  it('list() returns system metadata', () => {
    addSystem('weather', Phase.VEGETATION, () => {});
    addSystem('audio', Phase.AUDIO, () => {});
    const items = list();
    expect(items).toHaveLength(2);
    expect(items[0].name).toBe('weather');
    expect(items[1].name).toBe('audio');
  });

  it('handles same-phase systems in insertion order', () => {
    const order = [];
    addSystem('first', 50, () => order.push('first'));
    addSystem('second', 50, () => order.push('second'));
    run(0.016, 0);
    // Both at phase 50 — stable sort preserves insertion order
    expect(order[0]).toBe('first');
    expect(order[1]).toBe('second');
  });

  it('reset() clears all systems', () => {
    addSystem('a', 10, () => {});
    addSystem('b', 20, () => {});
    reset();
    expect(list()).toHaveLength(0);
  });

  it('systems added after run() are sorted on next run()', () => {
    const order = [];
    addSystem('b', 20, () => order.push('b'));
    run(0.016, 0);
    addSystem('a', 10, () => order.push('a'));
    order.length = 0;
    run(0.016, 0);
    expect(order).toEqual(['a', 'b']);
  });

  it('a throwing system does not kill subsequent systems', () => {
    const order = [];
    addSystem('ok1', 10, () => order.push('ok1'));
    addSystem('bad', 20, () => { throw new Error('boom'); });
    addSystem('ok2', 30, () => order.push('ok2'));
    run(0.016, 0);
    expect(order).toEqual(['ok1', 'ok2']);
  });

  it('duplicate system names are both registered and both run', () => {
    let count = 0;
    addSystem('dup', 10, () => { count++; });
    addSystem('dup', 10, () => { count++; });
    run(0.016, 0);
    // Both entries execute — addSystem does not deduplicate by name
    expect(count).toBe(2);
    expect(list()).toHaveLength(2);
  });

  it('removeSystem during run takes effect immediately for subsequent systems', () => {
    let callCount = 0;
    addSystem('killer', 10, () => {
      removeSystem('target');
    });
    addSystem('target', 20, () => {
      callCount++;
    });

    run(0.016, 0);
    expect(callCount).toBe(0);

    run(0.016, 0);
    expect(callCount).toBe(0);
  });

  it('removeSystem with nonexistent name is a no-op', () => {
    addSystem('real', 10, () => {});
    expect(() => removeSystem('ghost')).not.toThrow();
    expect(list()).toHaveLength(1);
  });
});

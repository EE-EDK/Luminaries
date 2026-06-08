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
    expect(seen.ctx.env).toBeDefined();
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

  // ── Throttle / stagger (Task 11.3) ─────────────────────────────────────────
  describe('cadence (everyN) + stagger (offset)', () => {
    it('default cadence runs every frame', () => {
      let count = 0;
      addSystem('a', 10, () => { count++; });
      for (let i = 0; i < 8; i++) run(0.016, i * 0.016);
      expect(count).toBe(8);
    });

    it('everyN:4 runs once per 4 frames', () => {
      let count = 0;
      addSystem('a', 10, () => { count++; }, { everyN: 4 });
      for (let i = 0; i < 12; i++) run(0.016, i * 0.016);
      expect(count).toBe(3); // frames 0, 4, 8
    });

    it('offset shifts which frame a throttled system fires on', () => {
      const fired = [];
      addSystem('a', 10, () => fired.push('hit'), { everyN: 4, offset: 2 });
      for (let i = 0; i < 8; i++) run(0.016, i * 0.016);
      // frame % 4 === 2 → frames 2 and 6
      expect(fired).toHaveLength(2);
    });

    it('staggers two throttled systems onto different frames (no shared-frame spike)', () => {
      const byFrame = [];
      let frame = 0;
      addSystem('a', 10, () => { byFrame[frame] = (byFrame[frame] || 0) + 1; }, { everyN: 4, offset: 0 });
      addSystem('b', 20, () => { byFrame[frame] = (byFrame[frame] || 0) + 1; }, { everyN: 4, offset: 2 });
      for (frame = 0; frame < 8; frame++) run(0.016, frame * 0.016);
      // Each fires on its own frame: a on 0,4 ; b on 2,6 — never the same frame.
      expect(byFrame.every((c) => c === undefined || c === 1)).toBe(true);
    });

    it('passes ACCUMULATED dt to a throttled system (timers stay wall-clock correct)', () => {
      let lastDt = 0;
      let calls = 0;
      addSystem('a', 10, (dt) => { lastDt = dt; calls++; }, { everyN: 4, offset: 0 });
      // 4 frames of 0.01s each → on the 4th-frame run the system should see ~0.04s.
      run(0.01, 0); // fires (frame 0) — first run, accDt was 0.01 at that point
      run(0.01, 0); // accumulate
      run(0.01, 0); // accumulate
      run(0.01, 0); // accumulate (frame 3, no fire)
      run(0.01, 0); // fires (frame 4): accDt = 0.01*4 = 0.04
      expect(calls).toBe(2);
      expect(lastDt).toBeCloseTo(0.04, 6);
    });

    it('full-rate system always receives the single-frame dt', () => {
      let lastDt = -1;
      addSystem('a', 10, (dt) => { lastDt = dt; });
      run(0.016, 0);
      run(0.016, 0);
      expect(lastDt).toBe(0.016);
    });

    it('offset is normalized into [0, everyN)', () => {
      let count = 0;
      // offset 6 with everyN 4 → effective offset 2
      addSystem('a', 10, () => { count++; }, { everyN: 4, offset: 6 });
      const items = list();
      expect(items[0].everyN).toBe(4);
      expect(items[0].offset).toBe(2);
      for (let i = 0; i < 8; i++) run(0.016, 0);
      expect(count).toBe(2); // frames 2, 6
    });

    it('everyN <= 1 is treated as full-rate (no throttle)', () => {
      let count = 0;
      addSystem('a', 10, () => { count++; }, { everyN: 1, offset: 3 });
      for (let i = 0; i < 5; i++) run(0.016, 0);
      expect(count).toBe(5);
      expect(list()[0].offset).toBe(0); // offset ignored when not throttled
    });

    it('list() exposes cadence metadata', () => {
      addSystem('full', 10, () => {});
      addSystem('slow', 20, () => {}, { everyN: 3, offset: 1 });
      const items = list();
      expect(items[0]).toMatchObject({ name: 'full', everyN: 1, offset: 0 });
      expect(items[1]).toMatchObject({ name: 'slow', everyN: 3, offset: 1 });
    });

    it('reset() restores the frame counter so cadence is deterministic per scene', () => {
      let count = 0;
      addSystem('a', 10, () => { count++; }, { everyN: 2, offset: 0 });
      run(0.016, 0); // frame 0 → fires
      run(0.016, 0); // frame 1 → skip
      expect(count).toBe(1);
      reset();
      addSystem('a', 10, () => { count++; }, { everyN: 2, offset: 0 });
      run(0.016, 0); // frame 0 again → fires (not frame 2)
      expect(count).toBe(2);
    });
  });
});

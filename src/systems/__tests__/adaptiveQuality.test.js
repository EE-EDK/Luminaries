// ================================================================
// adaptiveQuality — pure notch state machine (headless).
// ================================================================
// Task 11.5: prove FPS samples in → expected notch out, hysteresis honored.
// The module imports core/postprocessing.js (which instantiates a WebGLRenderer
// via core/renderer.js) only for the runtime bloom effect. We mock it so no
// WebGL context is created; the pure functions under test never touch it.
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../core/postprocessing.js', () => ({
  bloomPass: { strength: 0.6 },
  bloomEnabled: true,
}));

import {
  makeQualityState,
  stepQuality,
  setQualityFloor,
  getQualityFloor,
  startNotchFor,
  applyPlatformStart,
  getQualityNotch,
  updateAdaptiveQuality,
  MOBILE_START_NOTCH,
  particleScaleFor,
  bloomStrengthFor,
  lodScaleFor,
  densityScaleFor,
  Notch,
  MIN_NOTCH,
  MAX_NOTCH,
  DOWN_FPS,
  UP_FPS,
  DOWN_HOLD_S,
  UP_HOLD_S,
} from '../adaptiveQuality.js';

// Feed a constant FPS for a given wall-clock duration in fixed dt steps.
function feed(state, fps, seconds, dt = 1 / 60) {
  let elapsed = 0;
  while (elapsed < seconds - 1e-9) {
    stepQuality(state, fps, dt);
    elapsed += dt;
  }
  return state;
}

describe('adaptiveQuality notch machine — thresholds', () => {
  it('starts at FULL quality (notch 0)', () => {
    const s = makeQualityState();
    expect(s.notch).toBe(MIN_NOTCH);
    expect(s.notch).toBe(Notch.FULL);
  });

  it('exposes a sane hysteresis dead-band (DOWN < UP)', () => {
    expect(DOWN_FPS).toBeLessThan(UP_FPS);
    expect(DOWN_HOLD_S).toBeGreaterThan(0);
    expect(UP_HOLD_S).toBeGreaterThan(0);
  });
});

describe('adaptiveQuality notch machine — stepping down', () => {
  it('does NOT drop before the low-FPS hold window elapses', () => {
    const s = makeQualityState();
    // Just under the down-hold window of sustained low FPS.
    feed(s, DOWN_FPS - 5, DOWN_HOLD_S * 0.9);
    expect(s.notch).toBe(MIN_NOTCH);
  });

  it('drops exactly one notch after sustained low FPS past the hold window', () => {
    const s = makeQualityState();
    feed(s, DOWN_FPS - 5, DOWN_HOLD_S + 0.05);
    expect(s.notch).toBe(1);
  });

  it('drops one notch per hold window, not all at once', () => {
    const s = makeQualityState();
    // Three consecutive hold windows of low FPS → three single-step drops.
    feed(s, 5, DOWN_HOLD_S + 0.02); // very low FPS
    expect(s.notch).toBe(1);
    feed(s, 5, DOWN_HOLD_S + 0.02);
    expect(s.notch).toBe(2);
    feed(s, 5, DOWN_HOLD_S + 0.02);
    expect(s.notch).toBe(3);
  });

  it('never drops below MAX_NOTCH (readability floor)', () => {
    const s = makeQualityState();
    // Hammer with terrible FPS for many hold windows.
    feed(s, 3, DOWN_HOLD_S * 20);
    expect(s.notch).toBe(MAX_NOTCH);
    // One more window cannot push past the floor.
    feed(s, 3, DOWN_HOLD_S + 0.05);
    expect(s.notch).toBe(MAX_NOTCH);
  });
});

describe('adaptiveQuality notch machine — stepping up', () => {
  it('does NOT rise before the high-FPS hold window elapses', () => {
    const s = makeQualityState();
    // Drop to notch 1 first.
    feed(s, 5, DOWN_HOLD_S + 0.05);
    expect(s.notch).toBe(1);
    // Good FPS, but not for long enough to restore.
    feed(s, UP_FPS + 20, UP_HOLD_S * 0.8);
    expect(s.notch).toBe(1);
  });

  it('rises exactly one notch after sustained high FPS past the hold window', () => {
    const s = makeQualityState();
    feed(s, 5, DOWN_HOLD_S + 0.05);
    feed(s, 5, DOWN_HOLD_S + 0.05); // now at notch 2
    expect(s.notch).toBe(2);
    feed(s, UP_FPS + 30, UP_HOLD_S + 0.05);
    expect(s.notch).toBe(1);
  });

  it('never rises above MIN_NOTCH (FULL quality)', () => {
    const s = makeQualityState();
    feed(s, 120, UP_HOLD_S * 10);
    expect(s.notch).toBe(MIN_NOTCH);
  });
});

describe('adaptiveQuality notch machine — hysteresis / no oscillation', () => {
  it('holds steady in the dead-band (no drop, no rise)', () => {
    const s = makeQualityState();
    // Drop once so we are mid-range, then sit in the dead-band a long time.
    feed(s, 5, DOWN_HOLD_S + 0.05);
    expect(s.notch).toBe(1);
    const mid = (DOWN_FPS + UP_FPS) / 2;
    feed(s, mid, Math.max(DOWN_HOLD_S, UP_HOLD_S) * 3);
    // Dead-band must not change the notch in either direction.
    expect(s.notch).toBe(1);
  });

  it('a brief low-FPS blip in the dead-band does not bank a drop', () => {
    const s = makeQualityState();
    // Almost a full down-window of low FPS...
    feed(s, DOWN_FPS - 4, DOWN_HOLD_S * 0.8);
    expect(s.notch).toBe(MIN_NOTCH);
    // ...then recover into the dead-band long enough to bleed the timer off...
    feed(s, (DOWN_FPS + UP_FPS) / 2, DOWN_HOLD_S);
    // ...a fresh short low blip must NOT immediately drop (timer was decayed).
    feed(s, DOWN_FPS - 4, DOWN_HOLD_S * 0.5);
    expect(s.notch).toBe(MIN_NOTCH);
  });

  it('does not flap down when FPS jitters around the down threshold', () => {
    const s = makeQualityState();
    // Park at a mid notch, then jitter rapidly across the DOWN edge: one frame
    // below, one frame in the dead-band. The dead-band frame bleeds lowTime, so
    // lowTime never reaches DOWN_HOLD_S → no further drop (no flapping).
    feed(s, 5, DOWN_HOLD_S + 0.05); // → notch 1
    expect(s.notch).toBe(1);
    const deadband = (DOWN_FPS + UP_FPS) / 2;
    for (let i = 0; i < 600; i++) {
      stepQuality(s, DOWN_FPS - 2, 1 / 60); // below down (+lowTime)
      stepQuality(s, deadband, 1 / 60);     // dead-band (−lowTime)
    }
    // Net lowTime change per pair is ~0 → stays pinned at notch 1.
    expect(s.notch).toBe(1);
  });
});

describe('adaptiveQuality notch machine — guards', () => {
  it('treats non-finite FPS as 0 (worst case) without throwing', () => {
    const s = makeQualityState();
    expect(() => feed(s, NaN, DOWN_HOLD_S + 0.05)).not.toThrow();
    expect(s.notch).toBe(1); // NaN → treated as below DOWN_FPS → drops
  });

  it('ignores non-positive dt (no timer advance)', () => {
    const s = makeQualityState();
    for (let i = 0; i < 1000; i++) stepQuality(s, 3, 0);
    expect(s.notch).toBe(MIN_NOTCH);
    expect(s.lowTime).toBe(0);
  });
});

describe('adaptiveQuality knob tables', () => {
  it('particle/density scales are monotonically non-increasing toward the floor', () => {
    for (let n = MIN_NOTCH; n < MAX_NOTCH; n++) {
      expect(particleScaleFor(n + 1)).toBeLessThanOrEqual(particleScaleFor(n));
      expect(densityScaleFor(n + 1)).toBeLessThanOrEqual(densityScaleFor(n));
      expect(lodScaleFor(n + 1)).toBeLessThanOrEqual(lodScaleFor(n));
      expect(bloomStrengthFor(n + 1)).toBeLessThanOrEqual(bloomStrengthFor(n));
    }
  });

  it('full quality (notch 0) leaves every knob at its identity value', () => {
    expect(particleScaleFor(Notch.FULL)).toBe(1.0);
    expect(lodScaleFor(Notch.FULL)).toBe(1.0);
    expect(densityScaleFor(Notch.FULL)).toBe(1.0);
    expect(bloomStrengthFor(Notch.FULL)).toBe(0.6);
  });

  it('clamps out-of-range notches to the table bounds', () => {
    expect(particleScaleFor(-5)).toBe(particleScaleFor(MIN_NOTCH));
    expect(particleScaleFor(999)).toBe(particleScaleFor(MAX_NOTCH));
    expect(lodScaleFor(NaN)).toBe(lodScaleFor(MIN_NOTCH));
  });
});


// ================================================================
// Quality floor — the player's cap on how far the scaler may degrade.
// ================================================================
describe('quality floor', () => {
  /** Starve it long enough that it would hit the bottom unaided. */
  const starve = (state, seconds, cap) => {
    for (let t = 0; t < seconds; t += 0.1) stepQuality(state, 5, 0.1, cap);
    return state;
  };

  it('lets the scaler reach the bottom when the cap is wide open', () => {
    expect(starve(makeQualityState(), 30, MAX_NOTCH).notch).toBe(MAX_NOTCH);
  });

  it('never degrades past the cap, however bad the frame rate gets', () => {
    for (let cap = MIN_NOTCH; cap <= MAX_NOTCH; cap++) {
      expect(starve(makeQualityState(), 30, cap).notch, `cap ${cap}`).toBe(cap);
    }
  });

  it('pins quality entirely at a cap of zero', () => {
    expect(starve(makeQualityState(), 30, MIN_NOTCH).notch).toBe(MIN_NOTCH);
  });

  it('bites immediately when the cap drops below the current notch', () => {
    // The player raises the quality floor mid-sag; they should see it on the
    // next frame, not whenever the scaler happens to climb back on its own.
    const st = starve(makeQualityState(), 30, MAX_NOTCH);
    expect(st.notch).toBe(MAX_NOTCH);
    stepQuality(st, 5, 0.016, 1);
    expect(st.notch).toBe(1);
  });

  it('clamps a nonsense cap instead of walking off the knob tables', () => {
    expect(starve(makeQualityState(), 30, 999).notch).toBe(MAX_NOTCH);
    expect(starve(makeQualityState(), 30, -5).notch).toBe(MIN_NOTCH);
    expect(starve(makeQualityState(), 30, NaN).notch).toBe(MIN_NOTCH);
  });

  it('defaults to the full range when no cap is given', () => {
    const st = makeQualityState();
    for (let t = 0; t < 30; t += 0.1) stepQuality(st, 5, 0.1);
    expect(st.notch).toBe(MAX_NOTCH);
  });

  it('records the runtime cap it was set to', () => {
    expect(setQualityFloor(2)).toBe(2);
    expect(getQualityFloor()).toBe(2);
    expect(setQualityFloor(99)).toBe(MAX_NOTCH);
    setQualityFloor(MAX_NOTCH);
  });
});


// ================================================================
// Where a session opens — touch devices start cut down, and can climb back.
// ================================================================
describe('mobile start', () => {
  it('opens a touch device at the bloom-cut notch and a desktop at full quality', () => {
    expect(MOBILE_START_NOTCH).toBe(Notch.BLOOM_CUT);
    expect(startNotchFor(true)).toBe(2);
    expect(startNotchFor(false)).toBe(MIN_NOTCH);
  });

  it('never starts a touch device below the quality the player\'s floor allows', () => {
    // The floor is the cap on degradation: floor 1 means "never worse than notch 1".
    expect(startNotchFor(true, 4)).toBe(2);
    expect(startNotchFor(true, 2)).toBe(2);
    expect(startNotchFor(true, 1)).toBe(1);
    expect(startNotchFor(true, 0)).toBe(0);
  });

  it('treats a floor it cannot read as no cap, and clamps one out of range', () => {
    expect(startNotchFor(true, undefined)).toBe(2);
    expect(startNotchFor(true, NaN)).toBe(2);
    expect(startNotchFor(true, 99)).toBe(2);
    expect(startNotchFor(true, -3)).toBe(0);
  });

  it('leaves desktop alone whatever the floor says', () => {
    for (const f of [0, 1, 2, 3, 4]) expect(startNotchFor(false, f)).toBe(MIN_NOTCH);
  });

  it('builds a machine that opens where it is told, and still climbs on good frames', () => {
    const s = makeQualityState(startNotchFor(true));
    expect(s.notch).toBe(2);
    feed(s, UP_FPS + 6, UP_HOLD_S + 0.2);
    expect(s.notch, 'one step up after the hold').toBe(1);
    feed(s, UP_FPS + 6, UP_HOLD_S + 0.2);
    expect(s.notch, 'and back to full').toBe(MIN_NOTCH);
  });

  it('still steps down from the mobile start on a bad frame rate', () => {
    const s = makeQualityState(2);
    feed(s, DOWN_FPS - 8, DOWN_HOLD_S + 0.1);
    expect(s.notch).toBe(3);
  });

  it('clamps a nonsense start into the knob tables', () => {
    expect(makeQualityState(99).notch).toBe(MAX_NOTCH);
    expect(makeQualityState(-1).notch).toBe(MIN_NOTCH);
    expect(makeQualityState(NaN).notch).toBe(MIN_NOTCH);
    expect(makeQualityState().notch).toBe(MIN_NOTCH);
  });
});

describe('mobile start on the live scaler', () => {
  const reset = () => { setQualityFloor(MAX_NOTCH); };

  it('does not touch a desktop scaler, including one that has already degraded', () => {
    reset();
    expect(applyPlatformStart(false)).toBe(getQualityNotch());
    expect(getQualityNotch()).toBe(MIN_NOTCH);
    // Starve it until it has really dropped, then ask for the desktop start.
    // Resetting a working scaler to full quality would be the visible bug, and
    // it can only show against a notch that is not already zero.
    for (let i = 0; i < 400 && getQualityNotch() < 3; i++) updateAdaptiveQuality(0.5);
    const dropped = getQualityNotch();
    expect(dropped, 'the scaler should have degraded').toBeGreaterThanOrEqual(3);
    expect(applyPlatformStart(false)).toBe(dropped);
    expect(getQualityNotch()).toBe(dropped);
    reset();
    applyPlatformStart(true);
    for (let i = 0; i < 4000 && getQualityNotch() > MIN_NOTCH; i++) updateAdaptiveQuality(1 / 60);
  });

  it('moves a touch scaler to notch 2', () => {
    reset();
    expect(applyPlatformStart(true)).toBe(2);
    expect(getQualityNotch()).toBe(2);
  });

  it('honours the saved floor whichever order the two calls arrive in', () => {
    // Floor first (the setting was applied before the platform start).
    setQualityFloor(1);
    expect(applyPlatformStart(true)).toBe(1);
    // Platform start first, then the stored floor lands and clamps it.
    reset();
    applyPlatformStart(true);
    expect(getQualityNotch()).toBe(2);
    setQualityFloor(0);
    expect(getQualityNotch()).toBe(0);
    reset();
  });

  it('is climbed out of by the ordinary frame driver', () => {
    reset();
    applyPlatformStart(true);
    // Past the warm-up window, then a steady 60 fps for long enough to climb twice.
    for (let i = 0; i < 40; i++) updateAdaptiveQuality(1 / 60);
    for (let t = 0; t < 2 * UP_HOLD_S + 2; t += 1 / 60) updateAdaptiveQuality(1 / 60);
    expect(getQualityNotch()).toBe(MIN_NOTCH);
  });
});

// ================================================================
// renderScale — pure dynamic-resolution state machine (headless).
// ================================================================
// The module has no imports, so nothing here touches WebGL.
import { describe, it, expect } from 'vitest';
import {
  SCALES,
  MAX_INDEX,
  BASE_PIXEL_RATIO_CAP,
  DOWN_FPS,
  UP_FPS,
  SEVERE_FPS,
  DOWN_HOLD_S,
  UP_HOLD_S,
  SETTLE_S,
  RECENT_UP_S,
  basePixelRatio,
  pixelRatioAt,
  makeScaleState,
  stepScale,
} from '../renderScale.js';

// Feed a constant FPS for a wall-clock duration in fixed dt steps.
function feed(state, fps, seconds, dt = 1 / 60) {
  let elapsed = 0;
  while (elapsed < seconds - 1e-9) {
    stepScale(state, fps, dt);
    elapsed += dt;
  }
  return state;
}

describe('pixel ratio', () => {
  it('keeps the old fixed cap at scale 0', () => {
    expect(pixelRatioAt(1, 0)).toBe(1);
    expect(pixelRatioAt(2, 0)).toBe(BASE_PIXEL_RATIO_CAP);
    expect(pixelRatioAt(3, 0)).toBe(BASE_PIXEL_RATIO_CAP);
  });

  it('treats a bad devicePixelRatio as 1', () => {
    expect(basePixelRatio(NaN)).toBe(1);
    expect(basePixelRatio(0)).toBe(1);
    expect(basePixelRatio(-2)).toBe(1);
    expect(basePixelRatio(undefined)).toBe(1);
  });

  it('a 4K display at 100% scale reaches about 1080p at the lowest step', () => {
    const w = Math.round(3840 * pixelRatioAt(1, 4));
    expect(w).toBe(1920);
    expect(pixelRatioAt(1, MAX_INDEX)).toBeLessThan(0.5);
  });

  it('clamps an out-of-range index into the table', () => {
    expect(pixelRatioAt(1, -3)).toBe(1);
    expect(pixelRatioAt(1, 999)).toBe(SCALES[MAX_INDEX]);
    expect(pixelRatioAt(1, NaN)).toBe(1);
  });

  it('scales are strictly decreasing and start at full resolution', () => {
    expect(SCALES[0]).toBe(1);
    for (let i = 1; i < SCALES.length; i++) expect(SCALES[i]).toBeLessThan(SCALES[i - 1]);
  });
});

describe('stepScale', () => {
  it('never moves at a healthy frame rate', () => {
    const s = makeScaleState();
    feed(s, 60, 120);
    expect(s.index).toBe(0);
  });

  it('never moves in the dead band between the thresholds', () => {
    const s = makeScaleState();
    feed(s, (DOWN_FPS + UP_FPS) / 2, 120);
    expect(s.index).toBe(0);
  });

  it('steps down one level after a sustained sag', () => {
    const s = makeScaleState();
    feed(s, DOWN_FPS - 1, DOWN_HOLD_S + 0.1);
    expect(s.index).toBe(1);
  });

  it('does not react to a brief dip shorter than the hold', () => {
    const s = makeScaleState();
    feed(s, DOWN_FPS - 5, DOWN_HOLD_S * 0.5);
    feed(s, 60, 5);
    expect(s.index).toBe(0);
  });

  it('skips a level when the frame rate is severe', () => {
    const s = makeScaleState();
    feed(s, SEVERE_FPS - 2, DOWN_HOLD_S + 0.1);
    expect(s.index).toBe(2);
  });

  it('ignores FPS during the settle window after a change', () => {
    const s = makeScaleState();
    feed(s, DOWN_FPS - 1, DOWN_HOLD_S + 0.1);
    expect(s.index).toBe(1);
    // Stale low average right after the change must not trigger a second drop.
    feed(s, DOWN_FPS - 1, SETTLE_S - 0.2);
    expect(s.index).toBe(1);
  });

  it('keeps stepping down while the frame rate stays low, and stops at the floor', () => {
    const s = makeScaleState();
    feed(s, 8, 120);
    expect(s.index).toBe(MAX_INDEX);
    feed(s, 8, 30);
    expect(s.index).toBe(MAX_INDEX);
  });

  it('a 4K iGPU at 8 FPS reaches the low steps within a few seconds', () => {
    const s = makeScaleState();
    feed(s, 8, 12);
    expect(s.index).toBeGreaterThanOrEqual(4);
  });

  it('steps back up after sustained headroom', () => {
    const s = makeScaleState();
    feed(s, 8, 60);
    const low = s.index;
    feed(s, UP_FPS + 10, UP_HOLD_S + SETTLE_S + 0.5);
    expect(s.index).toBe(low - 1);
  });

  it('a brief burst of headroom does not bank a rise', () => {
    const s = makeScaleState();
    feed(s, 8, 60);
    const low = s.index;
    feed(s, UP_FPS + 10, UP_HOLD_S * 0.5);
    feed(s, DOWN_FPS + 2, 3);
    expect(s.index).toBe(low);
  });

  it('never climbs above full resolution', () => {
    const s = makeScaleState();
    feed(s, 240, 300);
    expect(s.index).toBe(0);
  });

  it('pins the ceiling when a rise is followed by a quick drop (no ping-pong)', () => {
    const s = makeScaleState();
    feed(s, 8, 60);
    const low = s.index;
    // Headroom → one step up ...
    feed(s, UP_FPS + 10, UP_HOLD_S + 0.2);
    expect(s.index).toBe(low - 1);
    // ... which turns out too expensive: drops back within RECENT_UP_S.
    feed(s, DOWN_FPS - 1, SETTLE_S + DOWN_HOLD_S + 0.2);
    expect(s.index).toBe(low);
    expect(s.floorIndex).toBe(low);
    // Plenty of headroom afterwards must not re-climb to the failed level.
    feed(s, 240, RECENT_UP_S + 60);
    expect(s.index).toBe(low);
  });

  it('a drop long after a rise does not pin the ceiling', () => {
    const s = makeScaleState();
    feed(s, 8, 60);
    const low = s.index;
    feed(s, UP_FPS + 10, UP_HOLD_S + SETTLE_S + 0.5);
    expect(s.index).toBe(low - 1);
    // Wait in the dead band: time passes without any further rise.
    feed(s, (DOWN_FPS + UP_FPS) / 2, RECENT_UP_S + 5);
    expect(s.index).toBe(low - 1);
    feed(s, DOWN_FPS - 1, DOWN_HOLD_S + 0.2);
    expect(s.index).toBe(low);
    expect(s.floorIndex).toBe(0);
  });

  it('treats a non-finite FPS as zero and a negative dt as zero', () => {
    const s = makeScaleState();
    stepScale(s, NaN, -1);
    stepScale(s, undefined, 0);
    expect(s.index).toBe(0);
    feed(s, NaN, DOWN_HOLD_S + 0.1);
    expect(s.index).toBeGreaterThan(0);
  });
});

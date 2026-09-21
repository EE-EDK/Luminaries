// ================================================================
// Render Scale — dynamic resolution (pure, no imports)
// ================================================================
// WHY THIS EXISTS
//   Fragment cost scales with drawn pixels. The old fixed cap
//   (min(devicePixelRatio, 1.5)) only helps high-DPI phones: a 4K monitor at
//   100% scale has ratio 1 and rendered all 8.3M pixels, which an integrated
//   GPU cannot hold at the project's 15 FPS floor. adaptiveQuality sheds
//   particles and bloom but never resolution, the largest lever on a weak GPU.
//
//   This module steps the drawing-buffer resolution down when smoothed FPS
//   sags and back up when there is headroom. It reacts only to measured FPS, so
//   a strong GPU stays at full resolution and looks exactly as before.
//
// DESIGN
//   • Pure state machine (makeScaleState + stepScale), unit-tested headlessly.
//   • Resolution is tried BEFORE the adaptiveQuality notches shed visible
//     work: the thresholds here sit above adaptiveQuality's 18/24 dead-band.
//   • Each change reallocates render targets, so a settle window ignores the
//     stale FPS average that follows a step.
//   • Oscillation guard: if a step down lands soon after a step up, the level
//     just left is a proven failure and becomes the highest resolution allowed.
// ================================================================

/** Multipliers on the base pixel ratio, highest resolution first. */
export const SCALES = [1, 0.85, 0.72, 0.6, 0.5, 0.42];
export const MAX_INDEX = SCALES.length - 1;

/** Ceiling for the device pixel ratio itself (the pre-existing cap). */
export const BASE_PIXEL_RATIO_CAP = 1.5;

export const DOWN_FPS = 20;       // below this → consider a step down
export const UP_FPS = 27;         // above this → consider a step up
export const SEVERE_FPS = 12;     // below this a step down skips one level
export const DOWN_HOLD_S = 1.0;   // FPS must stay low this long to drop
export const UP_HOLD_S = 5.0;     // FPS must stay high this long to rise
export const SETTLE_S = 2.5;      // ignore FPS after a change (targets realloc + stale EMA)
export const RECENT_UP_S = 30;    // a drop within this of a rise pins the ceiling

/**
 * @param {number} dpr window.devicePixelRatio (non-finite or <= 0 → 1)
 * @returns {number} the pixel ratio at full scale
 */
export function basePixelRatio(dpr) {
  const d = Number.isFinite(dpr) && dpr > 0 ? dpr : 1;
  return d < BASE_PIXEL_RATIO_CAP ? d : BASE_PIXEL_RATIO_CAP;
}

/**
 * @param {number} dpr window.devicePixelRatio
 * @param {number} index scale index, clamped into [0, MAX_INDEX]
 * @returns {number} the pixel ratio to hand to the renderer
 */
export function pixelRatioAt(dpr, index) {
  return basePixelRatio(dpr) * SCALES[clampIndex(index)];
}

function clampIndex(i) {
  if (!(i >= 0)) return 0;
  if (i > MAX_INDEX) return MAX_INDEX;
  return i | 0;
}

/**
 * @returns {{index:number, floorIndex:number, lowTime:number, highTime:number,
 *            settle:number, sinceUp:number}} floorIndex is the lowest index
 *   (highest resolution) the machine may climb back to.
 */
export function makeScaleState() {
  return { index: 0, floorIndex: 0, lowTime: 0, highTime: 0, settle: 0, sinceUp: Infinity };
}

/**
 * Pure step. Mutates and returns the same state object.
 * @param {ReturnType<typeof makeScaleState>} state
 * @param {number} smoothedFps EMA FPS; non-finite → 0
 * @param {number} dt seconds since the last step (clamped >= 0)
 */
export function stepScale(state, smoothedFps, dt) {
  const fps = Number.isFinite(smoothedFps) ? smoothedFps : 0;
  const d = dt > 0 ? dt : 0;
  state.sinceUp += d;

  if (state.settle > 0) {
    state.settle -= d;
    state.lowTime = 0;
    state.highTime = 0;
    return state;
  }

  if (fps < DOWN_FPS) {
    state.lowTime += d;
    state.highTime = 0;
    if (state.lowTime >= DOWN_HOLD_S && state.index < MAX_INDEX) {
      const jump = fps < SEVERE_FPS ? 2 : 1;
      state.index = Math.min(MAX_INDEX, state.index + jump);
      if (state.sinceUp < RECENT_UP_S) state.floorIndex = state.index;
      state.lowTime = 0;
      state.settle = SETTLE_S;
    }
  } else if (fps > UP_FPS) {
    state.highTime += d;
    state.lowTime = 0;
    if (state.highTime >= UP_HOLD_S && state.index > state.floorIndex) {
      state.index--;
      state.highTime = 0;
      state.sinceUp = 0;
      state.settle = SETTLE_S;
    }
  } else {
    state.lowTime = state.lowTime > d ? state.lowTime - d : 0;
    state.highTime = state.highTime > d ? state.highTime - d : 0;
  }
  return state;
}

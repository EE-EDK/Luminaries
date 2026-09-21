// ================================================================
// Render Scale Driver — applies renderScale.js to the live renderer
// ================================================================
// Reads the smoothed FPS that adaptiveQuality already maintains, steps the
// pure scale machine, and pushes a new pixel ratio to the renderer and the
// composer when the index changes. The decision logic is in core/renderScale.js
// (headless-tested); this file is only the WebGL-facing wiring.

import { applyRenderScale } from '../core/renderer.js';
import { syncComposerPixelRatio } from '../core/postprocessing.js';
import { getSmoothedFps, isAdaptiveQualityEnabled } from './adaptiveQuality.js';
import { makeScaleState, stepScale, pixelRatioAt, SCALES } from '../core/renderScale.js';

const _state = makeScaleState();
let _frames = 0;

// The EMA in adaptiveQuality is seeded optimistic and the first frames include
// shader compile and the intro. Wait for it to reflect steady-state cost.
const WARMUP_FRAMES = 90;

// A new viewport (window resized, moved to another monitor) is a new workload:
// let the scale climb back to full resolution if it now has the headroom.
window.addEventListener('resize', () => { _state.floorIndex = 0; });

/**
 * Per-frame update. Call once per requestAnimationFrame tick with the raw frame
 * delta (seconds), after updateAdaptiveQuality so the FPS average is current.
 * @param {number} dt
 */
export function updateRenderScale(dt) {
  if (!isAdaptiveQualityEnabled()) return; // LumiDebug A/B switch covers both scalers
  if (!(dt > 0)) return;
  if (++_frames <= WARMUP_FRAMES) return;

  const prev = _state.index;
  stepScale(_state, getSmoothedFps(), dt);
  if (_state.index !== prev) {
    applyRenderScale(_state.index);
    syncComposerPixelRatio();
  }
}

/** @returns {{index:number, scale:number, pixelRatio:number, floorIndex:number}} debug snapshot. */
export function getRenderScaleReport() {
  return {
    index: _state.index,
    scale: SCALES[_state.index],
    pixelRatio: pixelRatioAt(window.devicePixelRatio, _state.index),
    floorIndex: _state.floorIndex,
  };
}

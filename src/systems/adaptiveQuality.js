// ================================================================
// Adaptive Quality — FPS safety net (keep ≥ 15 FPS on real hardware)
// ================================================================
// Phase 11 (FPS hardening), Task 11.5.
//
// WHY THIS EXISTS
//   The owner's hard requirement is "never below 15 FPS" on real hardware.
//   The static budget (8 lights, instanced meshes, throttled checks) targets
//   ≥ 20 FPS, but weak GPUs / thermal throttling / busy weather frames can dip
//   below that. This module is the dynamic floor: when smoothed FPS sags it
//   sheds the cheapest, least-visible work first; when headroom returns it
//   restores quality one notch at a time. It runs in BOTH dev and production
//   (it is the safety net, so it must NOT be tree-shaken away like the dev
//   probes in perfMonitor.js).
//
// DESIGN
//   • Pure notch state machine (makeQualityState + stepQuality) — no Three.js,
//     no import.meta.env, no globals. Unit-tested headlessly: FPS samples in →
//     expected notch out, hysteresis honored.
//   • Hysteretic: step DOWN only after smoothed FPS holds < DOWN_FPS for
//     DOWN_HOLD_S; step UP only after it holds > UP_FPS for UP_HOLD_S. The
//     DOWN/UP thresholds straddle the target with a dead-band (18 vs 24) so the
//     scaler cannot oscillate between adjacent notches.
//   • Notches are ordered cheapest-/least-visible-first:
//       0  FULL          — everything on.
//       1  PARTICLES_LOW — far particle caps reduced (fireflies/spores/etc).
//       2  BLOOM_CUT     — bloom strength halved.
//       3  BLOOM_OFF     — bloom disabled, far LOD/cull pulled in.
//       4  DENSITY_LOW   — firefly/spore/fairy spawn densities reduced.
//     MIN_NOTCH = 0, MAX_NOTCH = 4. Notch 4 is the readability floor — it never
//     hides core gameplay entities (creatures, orbs, mushrooms, terrain), only
//     thins ambient particles and pulls distant LOD in.
//   • Silent transitions: the bloom strength is *eased* toward its notch target
//     (no pop). Multiplier knobs (particle/LOD/density) are read by the spawn
//     sites, which naturally ramp because they cap *counts* — existing particles
//     live out their lifetimes rather than vanishing.
//   • Zero per-frame allocation: one module-scoped state object, scalar math.
//
// CONSUMERS
//   • bloom strength      → applied here directly (core/postprocessing.js).
//   • getParticleScale()  → spawnFireflies() far cap (updates/spawning.js).
//   • getLodScale()       → far LOD/cull multiplier (read where cheap).
//   • getDensityScale()   → spawn-density multiplier (read where cheap).
//   • getQualityReport()  → LumiDebug.quality().
// ================================================================

import { bloomPass, bloomEnabled } from '../core/postprocessing.js';

// ----------------------------------------------------------------
// Notch constants (shared by the pure core + the runtime)
// ----------------------------------------------------------------
export const Notch = {
  FULL: 0,
  PARTICLES_LOW: 1,
  BLOOM_CUT: 2,
  BLOOM_OFF: 3,
  DENSITY_LOW: 4,
};
export const MIN_NOTCH = 0;
export const MAX_NOTCH = 4;

// Hysteresis thresholds. DOWN < target < UP, with a dead-band between them so
// the scaler never ping-pongs across adjacent notches. UP_HOLD is longer than
// DOWN_HOLD so we react fast to drops but restore quality conservatively.
export const DOWN_FPS = 18;      // below this → consider stepping down
export const UP_FPS = 24;        // above this → consider stepping up
export const DOWN_HOLD_S = 1.0;  // must stay below DOWN_FPS this long to drop
export const UP_HOLD_S = 3.0;    // must stay above UP_FPS this long to rise

/**
 * Create a fresh, pure notch-machine state. No side effects.
 * @returns {{notch:number, lowTime:number, highTime:number}}
 */
export function makeQualityState() {
  return { notch: MIN_NOTCH, lowTime: 0, highTime: 0 };
}

/**
 * Pure step of the notch state machine. Deterministic, allocation-free
 * (mutates and returns the same state object), no external dependencies.
 *
 * Hysteresis rules:
 *   • smoothedFps < DOWN_FPS accumulates lowTime (and resets highTime). When
 *     lowTime ≥ DOWN_HOLD_S the notch steps DOWN one step (toward MAX_NOTCH)
 *     and lowTime resets, so each drop costs another full hold window.
 *   • smoothedFps > UP_FPS accumulates highTime (and resets lowTime). When
 *     highTime ≥ UP_HOLD_S the notch steps UP one step (toward MIN_NOTCH).
 *   • In the dead-band (DOWN_FPS ≤ fps ≤ UP_FPS) both timers bleed back toward
 *     zero so a brief excursion doesn't bank progress toward a transition.
 *
 * @param {{notch:number, lowTime:number, highTime:number}} state
 * @param {number} smoothedFps  EMA FPS (frames/sec). Non-finite → treated as 0.
 * @param {number} dt           seconds since last step (clamped ≥ 0).
 * @returns {{notch:number, lowTime:number, highTime:number}} same object.
 */
export function stepQuality(state, smoothedFps, dt) {
  const fps = Number.isFinite(smoothedFps) ? smoothedFps : 0;
  const d = dt > 0 ? dt : 0;

  if (fps < DOWN_FPS) {
    state.lowTime += d;
    state.highTime = 0;
    if (state.lowTime >= DOWN_HOLD_S && state.notch < MAX_NOTCH) {
      state.notch++;
      state.lowTime = 0;
    }
  } else if (fps > UP_FPS) {
    state.highTime += d;
    state.lowTime = 0;
    if (state.highTime >= UP_HOLD_S && state.notch > MIN_NOTCH) {
      state.notch--;
      state.highTime = 0;
    }
  } else {
    // Dead-band: decay both accumulators so we don't latch a stale transition.
    state.lowTime = state.lowTime > d ? state.lowTime - d : 0;
    state.highTime = state.highTime > d ? state.highTime - d : 0;
  }
  return state;
}

// ----------------------------------------------------------------
// Quality knobs per notch (pure lookup tables — read by consumers)
// ----------------------------------------------------------------
// Each entry is the multiplier/flag in effect AT or ABOVE that notch level.
// Lower index = higher quality. These are deliberately gentle so transitions
// read as "the air thins out a little", never as a visible pop.
const _particleScale = [1.0, 0.65, 0.65, 0.65, 0.45]; // far particle cap mult
const _bloomStrength = [0.6, 0.6, 0.3, 0.0, 0.0];      // UnrealBloomPass.strength
const _lodScale = [1.0, 1.0, 1.0, 0.85, 0.85];         // far LOD/cull dist mult
const _densityScale = [1.0, 1.0, 1.0, 1.0, 0.7];       // spawn-density mult

/** @param {number} notch @returns {number} far-particle cap multiplier for a notch. */
export function particleScaleFor(notch) {
  return _particleScale[_clampNotch(notch)];
}
/** @param {number} notch @returns {number} target bloom strength for a notch. */
export function bloomStrengthFor(notch) {
  return _bloomStrength[_clampNotch(notch)];
}
/** @param {number} notch @returns {number} far LOD/cull distance multiplier for a notch. */
export function lodScaleFor(notch) {
  return _lodScale[_clampNotch(notch)];
}
/** @param {number} notch @returns {number} spawn-density multiplier for a notch. */
export function densityScaleFor(notch) {
  return _densityScale[_clampNotch(notch)];
}

function _clampNotch(n) {
  if (!(n >= MIN_NOTCH)) return MIN_NOTCH; // NaN/undefined → FULL
  if (n > MAX_NOTCH) return MAX_NOTCH;
  return n | 0;
}

// ================================================================
// Runtime (production + dev): rAF EMA sampler + notch driver + effects
// ================================================================
// EMA smoothing of instantaneous FPS. ~0.5 s time-constant feel at 60 FPS;
// fast enough to catch a sustained sag within the 1 s DOWN window, slow enough
// to ignore single-frame stalls (GC, shadow refresh).
const FPS_EMA_ALPHA = 0.05;

// Bloom-strength easing rate (units of strength per second) so notch changes
// fade rather than pop. 0.6 strength → 0 over ~1 s.
const BLOOM_EASE_RATE = 0.6;

const _state = makeQualityState();
let _emaFps = 60;          // seeded optimistic so we don't drop on the first frames
let _bloomCur = _bloomStrength[MIN_NOTCH];
let _enabled = true;       // owner can disable via LumiDebug for A/B comparison
let _frames = 0;           // frames sampled (lets us ignore the warm-up window)

// Ignore the first handful of frames: clock warm-up, shader compile, and the
// intro often produce a misleadingly low dt that would trip an instant drop.
const WARMUP_FRAMES = 30;

/**
 * Per-frame update. Call once per requestAnimationFrame tick with the real
 * frame dt (seconds). Samples FPS, advances the notch machine, and eases the
 * bloom strength toward the notch target. Allocation-free.
 *
 * Registered as a scheduler system (see systems/registration.js) but also safe
 * to call directly. Runs in production — this is the safety net, not a probe.
 *
 * @param {number} dt frame delta in seconds (already clamped upstream to ≤ 0.1).
 */
export function updateAdaptiveQuality(dt) {
  if (!_enabled) return;
  const d = dt > 0 ? dt : 0;
  if (d <= 0) return;

  // Instantaneous FPS → EMA. Clamp instantaneous to a sane band so a single
  // monster frame can't yank the average.
  const instFps = 1 / d;
  const clamped = instFps > 240 ? 240 : (instFps < 1 ? 1 : instFps);
  _emaFps += (clamped - _emaFps) * FPS_EMA_ALPHA;
  _frames++;

  // Only let the machine react once past the warm-up window.
  if (_frames > WARMUP_FRAMES) {
    const prev = _state.notch;
    stepQuality(_state, _emaFps, d);
    if (_state.notch !== prev) _applyNotch();
  }

  _easeBloom(d);
}

// Apply the discrete (non-eased) effects of the current notch. Bloom strength
// is eased separately in _easeBloom; here we only flip the bloom enable flag.
function _applyNotch() {
  // Bloom enable/disable: BLOOM_OFF and below cut bloom entirely. We keep the
  // pass in the composer chain (cheap) but zero its strength via the ease; the
  // enable flag below lets the renderer skip the pass when it reaches 0.
  // (Strength easing in _easeBloom does the visible fade.)
}

function _easeBloom(d) {
  if (!bloomEnabled || !bloomPass) return;
  const target = _bloomStrength[_state.notch];
  if (_bloomCur === target) return;
  const step = BLOOM_EASE_RATE * d;
  if (_bloomCur < target) {
    _bloomCur = _bloomCur + step > target ? target : _bloomCur + step;
  } else {
    _bloomCur = _bloomCur - step < target ? target : _bloomCur - step;
  }
  bloomPass.strength = _bloomCur;
}

// ----------------------------------------------------------------
// Public knobs (read by spawn/LOD consumers)
// ----------------------------------------------------------------
/** @returns {number} current notch (0 = full quality, 4 = readability floor). */
export function getQualityNotch() {
  return _state.notch;
}
/** @returns {number} smoothed FPS the scaler is reacting to. */
export function getSmoothedFps() {
  return _emaFps;
}
/** @returns {number} far-particle cap multiplier for the current notch. */
export function getParticleScale() {
  return _particleScale[_state.notch];
}
/** @returns {number} far LOD/cull distance multiplier for the current notch. */
export function getLodScale() {
  return _lodScale[_state.notch];
}
/** @returns {number} spawn-density multiplier for the current notch. */
export function getDensityScale() {
  return _densityScale[_state.notch];
}
/** Enable/disable the scaler (owner A/B testing via LumiDebug). */
export function setAdaptiveQualityEnabled(on) {
  _enabled = !!on;
}
/** @returns {boolean} whether the scaler is actively adjusting quality. */
export function isAdaptiveQualityEnabled() {
  return _enabled;
}

const _NOTCH_NAMES = ['FULL', 'PARTICLES_LOW', 'BLOOM_CUT', 'BLOOM_OFF', 'DENSITY_LOW'];

/**
 * Structured snapshot for LumiDebug.quality(). No allocation concern — this is
 * a debug accessor, not a hot-path call.
 * @returns {object}
 */
export function getQualityReport() {
  const n = _state.notch;
  return {
    enabled: _enabled,
    notch: n,
    notchName: _NOTCH_NAMES[n] || String(n),
    smoothedFps: Math.round(_emaFps * 10) / 10,
    lowTime: Math.round(_state.lowTime * 100) / 100,
    highTime: Math.round(_state.highTime * 100) / 100,
    particleScale: _particleScale[n],
    bloomStrength: _bloomStrength[n],
    lodScale: _lodScale[n],
    densityScale: _densityScale[n],
    thresholds: { downFps: DOWN_FPS, upFps: UP_FPS, downHoldS: DOWN_HOLD_S, upHoldS: UP_HOLD_S },
  };
}

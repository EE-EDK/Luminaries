// ================================================================
// Scheduler — ordered phase runner for the director loop
// ================================================================
import * as Context from './context.js';

const _systems = [];
let _sorted = true;
// Monotonic frame counter — drives N-frame cadence + index-staggered offsets so
// throttled (non-critical) systems don't all fire on the same frame.
let _frame = 0;

// Pre-allocated context snapshot to avoid per-frame allocations.
// attune/quest slices were removed: those values live in state/* stores and are
// read directly via live ES bindings (no one-frame-stale kernel copy).
const _contextSnapshot = {
  time: Context.timeCtx,
  player: Context.playerCtx,
  env: Context.envCtx,
  weather: Context.weatherCtx,
};

export const Phase = {
  // Adaptive quality runs first so its notch/knobs are current before the
  // particle-spawn and LOD systems read them this same frame.
  ADAPTIVE_QUALITY:    5,
  CRYSTAL_PROXIMITY:  10,
  PARTICLE_SPAWN:     20,
  FLORA_GLOW:         30,
  // Crystal resonance-chain visuals run with other glow work (after flora glow,
  // before spirit hum). crystalVisuals is the single owner of crystal emissive/scale.
  CRYSTAL_VISUALS:    32,
  SPATIAL_HASH_UPDATE: 35,
  // Spirit hum before fauna so pitch-lock is current when jellies/attunement read isLocked().
  SPIRIT_HUM:         38,
  FAUNA_UPDATE:       40,
  NEAREST_CREATURES:  45,
  ATTUNEMENT:         60,
  SKY:                70,
  VEGETATION:         80,
  ROCKS:              90,
  MAGICAL_UPDATE:     100,
  PARTICLES:          110,
  QUEST:              120,
  FOOTPRINTS:         130,
  AUDIO:              140,
  DISCOVERIES:        150,
  // Non-critical proximity/idle/glyph checks — throttled to a reduced cadence
  // (see registration.js). Runs just after the full-rate discovery slice.
  DISCOVERY_CHECKS:   152,
  HUD:                160,
};

/**
 * Register a system.
 * @param {string} name
 * @param {number} phase  ordering key (lower runs first)
 * @param {(dt:number, t:number, ctx:object)=>void} updateFn
 * @param {{everyN?:number, offset?:number}} [opts]
 *   everyN — run only every Nth frame (1 = every frame, the default). Use > 1
 *            ONLY for non-critical work (HUD/discovery checks) — never player
 *            physics, camera, or nearby fauna.
 *   offset — frame-phase stagger so throttled systems don't all fire on the same
 *            frame. Defaults to 0; pick distinct offsets per throttled system.
 *   When a throttled system runs, it receives the ACCUMULATED dt since its last
 *   run (not a single-frame dt), so time-based timers advance at the correct rate.
 */
export const addSystem = (name, phase, updateFn, opts) => {
  const everyN = opts && opts.everyN > 1 ? (opts.everyN | 0) : 1;
  const offset = opts && opts.offset ? ((opts.offset | 0) % everyN + everyN) % everyN : 0;
  _systems.push({ name, phase, update: updateFn, enabled: true, everyN, offset, _accDt: 0 });
  _sorted = false;
};

export const removeSystem = (name) => {
  const idx = _systems.findIndex((s) => s.name === name);
  if (idx !== -1) _systems.splice(idx, 1);
};

export const setEnabled = (name, enabled) => {
  const sys = _systems.find((s) => s.name === name);
  if (sys) sys.enabled = enabled;
};

export const run = (dt, t) => {
  if (!_sorted) {
    _systems.sort((a, b) => a.phase - b.phase);
    _sorted = true;
  }

  const frame = _frame++;
  for (let i = 0; i < _systems.length; i++) {
    const s = _systems[i];
    if (!s.enabled) continue;
    // N-frame cadence + staggered offset for throttled (non-critical) systems.
    // Full-rate systems (everyN === 1) always run with the raw frame dt.
    if (s.everyN > 1) {
      s._accDt += dt;
      if (frame % s.everyN !== s.offset) continue;
    }
    const stepDt = s.everyN > 1 ? s._accDt : dt;
    if (s.everyN > 1) s._accDt = 0;
    try {
      // Systems receive (dt, t, contextSlices). For throttled systems, dt is the
      // accumulated time since their last run so timers stay wall-clock correct.
      s.update(stepDt, t, _contextSnapshot);
    } catch (e) {
      if (import.meta.env?.DEV) console.error('scheduler: ' + s.name + ' threw:', e);
    }
  }
};

export const list = () => _systems.map((s) => ({ name: s.name, phase: s.phase, enabled: s.enabled, everyN: s.everyN, offset: s.offset }));

export const reset = () => {
  _systems.length = 0;
  _sorted = true;
  _frame = 0;
};

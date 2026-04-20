// ================================================================
// Scheduler — ordered phase runner for the director loop
// ================================================================
import * as Context from './context.js';

const _systems = [];
let _sorted = true;

// Pre-allocated context snapshot to avoid per-frame allocations
const _contextSnapshot = {
  time: Context.timeCtx,
  player: Context.playerCtx,
  env: Context.envCtx,
  weather: Context.weatherCtx,
  attune: Context.attuneCtx,
  quest: Context.questCtx,
};

export const Phase = {
  CRYSTAL_PROXIMITY:  10,
  PARTICLE_SPAWN:     20,
  FLORA_GLOW:         30,
  SPATIAL_HASH_UPDATE: 35,
  FAUNA_UPDATE:       40,
  NEAREST_CREATURES:  45,
  SPIRIT_HUM:         50,
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
  HUD:                160,
};

export const addSystem = (name, phase, updateFn) => {
  _systems.push({ name, phase, update: updateFn, enabled: true });
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

  for (let i = 0; i < _systems.length; i++) {
    if (!_systems[i].enabled) continue;
    try {
      // Systems now receive (dt, t, contextSlices)
      _systems[i].update(dt, t, _contextSnapshot);
    } catch (e) {
      if (import.meta.env?.DEV) console.error('scheduler: ' + _systems[i].name + ' threw:', e);
    }
  }
};

export const list = () => _systems.map((s) => ({ name: s.name, phase: s.phase, enabled: s.enabled }));

export const reset = () => {
  _systems.length = 0;
  _sorted = true;
};

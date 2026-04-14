// ================================================================
// Scheduler — ordered phase runner for the director loop
// ================================================================
// Systems register with a named phase. The scheduler runs them in
// phase order each frame. This makes director() ordering explicit,
// documentable, and reconfigurable.

const _systems = [];
let _sorted = true;

// Named phase constants — gaps allow insertion without renumbering
export const Phase = {
  CRYSTAL_PROXIMITY:  10,
  PARTICLE_SPAWN:     20,
  FLORA_GLOW:         30,
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

// Register a system to run at a given phase
export const addSystem = (name, phase, updateFn) => {
  _systems.push({ name, phase, update: updateFn, enabled: true });
  _sorted = false;
};

// Remove a system by name
export const removeSystem = (name) => {
  const idx = _systems.findIndex((s) => s.name === name);
  if (idx !== -1) _systems.splice(idx, 1);
};

// Enable/disable a system without removing it
export const setEnabled = (name, enabled) => {
  const sys = _systems.find((s) => s.name === name);
  if (sys) sys.enabled = enabled;
};

// Run all enabled systems in phase order
export const run = (dt, t) => {
  if (!_sorted) {
    _systems.sort((a, b) => a.phase - b.phase);
    _sorted = true;
  }
  for (let i = 0; i < _systems.length; i++) {
    if (!_systems[i].enabled) continue;
    try { _systems[i].update(dt, t); }
    catch (e) { if (import.meta.env?.DEV) console.error('scheduler: ' + _systems[i].name + ' threw:', e); }
  }
};

// Get registered system names (for debugging/tests)
export const list = () => _systems.map((s) => ({ name: s.name, phase: s.phase, enabled: s.enabled }));

// Clear all systems (useful for tests)
export const reset = () => {
  _systems.length = 0;
  _sorted = true;
};

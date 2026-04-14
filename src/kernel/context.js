// ================================================================
// Frame Context — pre-allocated per-frame read-only snapshot
// ================================================================
// Built once per frame, consumed by all systems. Replaces the ad-hoc
// _faunaCtx(), _vegCtx(), _magicalCtx(), _floraCtx() context bags.
// Zero allocation: the same object is reused every frame.

const _ctx = {
  // Time
  dt: 0,
  t: 0,

  // Player
  player: null,
  camera: null,
  sprinting: false,
  playerIdleTime: 0,

  // Environment
  bioGlow: 0,
  orbBoost: 1.15,
  orbsFound: 0,

  // Weather
  windX: 0,
  windZ: 0,
  windStrength: 0,
  weatherState: null,
  isStorming: false,
  rainRate: 0,
  lightningFlash: 0,

  // Day/night
  dayPhase: 0,

  // Attunement visual state
  attuneFlashTimer: 0,
  attuneFlashType: null,
  echoTimer: 0,

  // Hum resonance (for creature glow feedback)
  humResonanceType: null,
  humResonanceStr: 0,

  // Quest
  questPhase: 'SEEK',
};

// Update context with new values. Only writes properties that exist on _ctx.
export const update = (values) => {
  for (const key in values) {
    if (key in _ctx) _ctx[key] = values[key];
  }
};

// Read context — returns the pre-allocated object (do not store references)
export const ctx = _ctx;

// Reset to defaults (useful for tests)
export const reset = () => {
  _ctx.dt = 0;
  _ctx.t = 0;
  _ctx.player = null;
  _ctx.camera = null;
  _ctx.sprinting = false;
  _ctx.playerIdleTime = 0;
  _ctx.bioGlow = 0;
  _ctx.orbBoost = 1.15;
  _ctx.orbsFound = 0;
  _ctx.windX = 0;
  _ctx.windZ = 0;
  _ctx.windStrength = 0;
  _ctx.weatherState = null;
  _ctx.isStorming = false;
  _ctx.rainRate = 0;
  _ctx.lightningFlash = 0;
  _ctx.dayPhase = 0;
  _ctx.attuneFlashTimer = 0;
  _ctx.attuneFlashType = null;
  _ctx.echoTimer = 0;
  _ctx.humResonanceType = null;
  _ctx.humResonanceStr = 0;
  _ctx.questPhase = 'SEEK';
};

// ================================================================
// Frame Context — domain-specific pre-allocated snapshots
// ================================================================
// Zero allocation: these objects are reused every frame.
// Systems should consume only the slices they need.

const _time = {
  dt: 0,
  t: 0,
};

const _player = {
  body: null,
  camera: null,
  sprinting: false,
  idleTime: 0,
  // Re-allocated to avoid property access on potentially null player
  pos: { x: 0, y: 0, z: 0 },
};

const _env = {
  bioGlow: 0,
  orbBoost: 1.15,
  orbsFound: 0,
  dayPhase: 0,
};

const _weather = {
  windX: 0,
  windZ: 0,
  windStrength: 0,
  state: null,
  isStorming: false,
  rainRate: 0,
  lightningFlash: 0,
};

const _attune = {
  flashTimer: 0,
  flashType: null,
  echoTimer: 0,
  humResonanceType: null,
  humResonanceStr: 0,
};

const _quest = {
  phase: 'SEEK',
};

// Domain-specific getters
export const timeCtx = _time;
export const playerCtx = _player;
export const envCtx = _env;
export const weatherCtx = _weather;
export const attuneCtx = _attune;
export const questCtx = _quest;

// Global update - maps incoming values to the correct slice
export const update = (values) => {
  if (!values) return;
  
  if (values.dt !== undefined) _time.dt = values.dt;
  if (values.t !== undefined) _time.t = values.t;

  if (values.player !== undefined) {
    _player.body = values.player;
    if (values.player) {
      _player.pos.x = values.player.pos.x;
      _player.pos.y = values.player.pos.y;
      _player.pos.z = values.player.pos.z;
    }
  }
  if (values.camera !== undefined) _player.camera = values.camera;
  if (values.sprinting !== undefined) _player.sprinting = values.sprinting;
  if (values.playerIdleTime !== undefined) _player.idleTime = values.playerIdleTime;

  if (values.bioGlow !== undefined) _env.bioGlow = values.bioGlow;
  if (values.orbBoost !== undefined) _env.orbBoost = values.orbBoost;
  if (values.orbsFound !== undefined) _env.orbsFound = values.orbsFound;
  if (values.dayPhase !== undefined) _env.dayPhase = values.dayPhase;

  if (values.windX !== undefined) _weather.windX = values.windX;
  if (values.windZ !== undefined) _weather.windZ = values.windZ;
  if (values.windStrength !== undefined) _weather.windStrength = values.windStrength;
  if (values.weatherState !== undefined) _weather.state = values.weatherState;
  if (values.isStorming !== undefined) _weather.isStorming = values.isStorming;
  if (values.rainRate !== undefined) _weather.rainRate = values.rainRate;
  if (values.lightningFlash !== undefined) _weather.lightningFlash = values.lightningFlash;

  if (values.attuneFlashTimer !== undefined) _attune.flashTimer = values.attuneFlashTimer;
  if (values.attuneFlashType !== undefined) _attune.flashType = values.attuneFlashType;
  if (values.echoTimer !== undefined) _attune.echoTimer = values.echoTimer;
  if (values.humResonanceType !== undefined) _attune.humResonanceType = values.humResonanceType;
  if (values.humResonanceStr !== undefined) _attune.humResonanceStr = values.humResonanceStr;

  if (values.questPhase !== undefined) _quest.phase = values.questPhase;
};

// For backward compatibility during migration
export const ctx = {
  get dt() { return _time.dt; },
  get t() { return _time.t; },
  get player() { return _player.body; },
  get camera() { return _player.camera; },
  get sprinting() { return _player.sprinting; },
  get playerIdleTime() { return _player.idleTime; },
  get bioGlow() { return _env.bioGlow; },
  get orbBoost() { return _env.orbBoost; },
  get orbsFound() { return _env.orbsFound; },
  get windX() { return _weather.windX; },
  get windZ() { return _weather.windZ; },
  get windStrength() { return _weather.windStrength; },
  get weatherState() { return _weather.state; },
  get isStorming() { return _weather.isStorming; },
  get rainRate() { return _weather.rainRate; },
  get lightningFlash() { return _weather.lightningFlash; },
  get dayPhase() { return _env.dayPhase; },
  get attuneFlashTimer() { return _attune.flashTimer; },
  get attuneFlashType() { return _attune.flashType; },
  get echoTimer() { return _attune.echoTimer; },
  get humResonanceType() { return _attune.humResonanceType; },
  get humResonanceStr() { return _attune.humResonanceStr; },
  get questPhase() { return _quest.phase; },
};

export const reset = () => {
  _time.dt = 0;
  _time.t = 0;
  _player.body = null;
  _player.camera = null;
  _player.sprinting = false;
  _player.idleTime = 0;
  _player.pos.x = 0; _player.pos.y = 0; _player.pos.z = 0;
  _env.bioGlow = 0;
  _env.orbBoost = 1.15;
  _env.orbsFound = 0;
  _env.dayPhase = 0;
  _weather.windX = 0;
  _weather.windZ = 0;
  _weather.windStrength = 0;
  _weather.state = null;
  _weather.isStorming = false;
  _weather.rainRate = 0;
  _weather.lightningFlash = 0;
  _attune.flashTimer = 0;
  _attune.flashType = null;
  _attune.echoTimer = 0;
  _attune.humResonanceType = null;
  _attune.humResonanceStr = 0;
  _quest.phase = 'SEEK';
};

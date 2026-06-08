/**
 * Fauna smoke test — per-frame update loops must not throw.
 *
 * REGRESSION GUARD: pufflings.js once referenced `puffNeighbors` (bare) inside
 * the idle-state branch instead of the module-scope `_puffNeighbors`, throwing
 * `ReferenceError: puffNeighbors is not defined` every frame and causing
 * "Init Failed". This test exercises that exact code path.
 *
 * All modules that touch WebGL (Three.js geometry/materials), AudioContext, or
 * DOM are mocked so the update logic runs cleanly in the vitest node env.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// ── Mocks must be declared before any dynamic import of the modules under test.
// ── Order: deepest dependencies first. ─────────────────────────────────────────

// renderer / scene (WebGL sink)
vi.mock('../../../core/renderer.js', () => ({
  renderer: { info: { render: {} } },
  camera: { position: { x: 0, y: 1, z: 0 }, getWorldDirection: vi.fn(() => ({ x: 0, y: 0, z: -1 })) },
  clock: {},
  scene: {
    add: vi.fn(),
    remove: vi.fn(),
    traverse: vi.fn(),
  },
}));

// input — uses window which doesn't exist in node
vi.mock('../../../core/input.js', () => ({
  keys: {},
  yaw: 0,
  pitch: 0,
  mouseDown: false,
  started: false,
  joyX: 0,
  joyY: 0,
  joyOn: false,
  touchJump: false,
  touchSprint: false,
  humFreqArmed: false,
  pointerLocked: false,
  mobile: false,
  getInput: vi.fn(() => ({ forward: 0, strafe: 0 })),
}));

// player — imports renderer + input
vi.mock('../../../core/player.js', () => ({
  player: { pos: { x: 0, y: 1.7, z: 0 }, vel: { x: 0, y: 0, z: 0 }, onGround: true },
  playerIdleTime: 0,
  cameraBobY: 0,
  gravityMult: 1.0,
  setGravityMult: vi.fn(),
  setPlayerBoost: vi.fn(),
  consumeJumpEdge: vi.fn(() => false),
  updatePlayer: vi.fn(),
}));

// terrain — complex noise + Three.js
vi.mock('../../../world/terrain.js', () => ({
  getGroundY: vi.fn(() => 0),
  initTerrain: vi.fn(),
}));

// dimming — imports gameState (magicalStore) + eventBus
vi.mock('../../../systems/dimming.js', () => ({
  getLocalGlow: vi.fn(() => 1.0),
  isRestored: vi.fn(() => true),
  initDimming: vi.fn(),
  updateDimming: vi.fn(),
  prepareLocalGlowFrame: vi.fn(),
}));

// attunement — pure state, but imports spiritHum
vi.mock('../../../systems/attunement.js', () => ({
  getAttunement: vi.fn(() => 0),
  getAttunementTarget: vi.fn(() => null),
  getPlayerFrequency: vi.fn(() => null),
  getJellySyncFlash: vi.fn(() => 0),
  updateAttunement: vi.fn(() => 0),
  consumeAttunementFlash: vi.fn(() => null),
}));

// spiritHum — pure state, but imports constants (ok) + eventBus (ok)
vi.mock('../../../systems/spiritHum.js', () => ({
  isLocked: vi.fn(() => false),
  getLockType: vi.fn(() => null),
  getResonance: vi.fn(() => 0),
  getResonanceType: vi.fn(() => null),
  startHum: vi.fn(),
  stopHum: vi.fn(),
  updateHum: vi.fn(),
  resetLock: vi.fn(),
  refreshLock: vi.fn(),
}));

// dayNightCycle — imports Three.js (CanvasTexture etc.)
vi.mock('../../../systems/dayNightCycle.js', () => ({
  bioGlow: 1.0,
  phase: 'NIGHT',
  starBrightness: 0.85,
  initDayNight: vi.fn(),
  updateDayNight: vi.fn(),
  getWorldTime: vi.fn(() => 0),
  getPhase: vi.fn(() => 'NIGHT'),
}));

// weather — imports Three.js + scene
vi.mock('../../../systems/weather.js', () => ({
  isStorming: false,
  weatherState: 'CLEAR',
  windX: 0,
  windZ: 0,
  windStrength: 0,
  lightningFlash: 0,
  initWeather: vi.fn(),
  updateWeather: vi.fn(),
}));

// audio — AudioContext not available in node
vi.mock('../../../systems/audio.js', () => ({
  playCreatureSound: vi.fn(),
  playPufflingSinging: vi.fn(),
  playPufflingVocal: vi.fn(),
  initAudio: vi.fn(),
  toggleMute: vi.fn(),
}));

// pufflingChat — imports renderer + discoveries → player
vi.mock('../../../systems/pufflingChat.js', () => ({
  triggerPufflingChat: vi.fn(() => null),
}));

// registration — imports scheduler (pure) + entityStore (pure)
vi.mock('../../../systems/registration.js', () => ({
  nearest: {
    puffDist2: Infinity, puffPos: { x: 0, z: 0 },
    jellyDist2: Infinity, jellyPos: { x: 0, z: 0 },
    deerDist2: Infinity, deerPos: { x: 0, z: 0 }, deerWanderAng: 0,
    mothDist2: Infinity, mothPos: { x: 0, z: 0 },
    luminidDist2: Infinity, luminidPos: { x: 0, z: 0 },
  },
  registerAllSystems: vi.fn(),
}));

// senses — pure math, no imports, but mock to be safe
vi.mock('../../../systems/ai/senses.js', () => ({
  canSee: vi.fn(() => false),
  canHear: vi.fn(() => false),
}));

// luminid entity builder — imports renderer + Three.js
vi.mock('../../../entities/fauna/luminids.js', () => ({
  makeLuminid: vi.fn(),
  updateLuminid: vi.fn(),
}));

// ── Now import the modules under test ────────────────────────────────────────
import { puffs, deers, moths, jellies, luminids, orbs, ponds } from '../../../state/entityStore.js';
import { updatePuffs } from '../pufflings.js';
import { updateDeers } from '../deer.js';
import { updateMoths } from '../moths.js';
import { updateJellies } from '../jellies.js';
import { updateLuminids } from '../luminids.js';

// ── Helper: make a minimal puffling stub ─────────────────────────────────────
// Fields derived from what updatePuffs actually reads per frame.
function makePuffStub(x = 0, z = 0) {
  const scaleMock = { set: vi.fn() };
  return {
    group: {
      position: { x, y: 0, z, set: vi.fn() },
      rotation: { x: 0, y: 0, z: 0 },
      visible: true,
    },
    shell: { scale: scaleMock, rotation: { x: 0, y: 0, z: 0 } },
    mouth: null,
    phase: Math.random() * Math.PI * 2,
    speed: 3.1,
    state: 'idle',
    idleTimer: 2.0,     // positive so idle branch doesn't transition
    hopTimer: 0,
    wanderAng: 0,
    _baseY: 0,
    _targetY: 0,
    _lastTX: x,
    _lastTZ: z,
    _scaredT: 0,
    _followT: 0,
    _huddleTarget: 0,
    _syncTimer: 0,
    _blinkTimer: 3,
    _blinkState: 0,
    _talkTimer: 0,
    bodyMat: null,
    bellyMat: null,
    crownMat: null,
    sparkles: [],
    eyes: [],
    ears: [],
  };
}

// ── Helper: make a minimal deer stub ─────────────────────────────────────────
function makeDeerStub(x = 10, z = 10) {
  const pivotMock = () => ({ rotation: { x: 0, y: 0, z: 0 }, add: vi.fn() });
  return {
    group: {
      position: { x, y: 0, z },
      rotation: { x: 0, y: 0, z: 0 },
      visible: true,
    },
    state: 'walk',
    walkTimer: 2.0,
    phase: 0,
    speed: 4.5,
    wanderAng: 0,
    homeX: x,
    homeZ: z,
    headBob: 0,
    headLook: 0,
    legCycle: 0,
    earTwitchTimer: 3,
    earTwitchVal: 0,
    _baseY: 0,
    _targetY: 0,
    _lastTX: x,
    _lastTZ: z,
    _stT: 3.0,
    _zigTimer: 0.5,
    _zigDir: 1,
    fleeTimer: 0,
    _drinkTgt: null,
    mat: { emissiveIntensity: 0.5 },
    neckBasePivot: pivotMock(),
    neckMidPivot: pivotMock(),
    headPivot: pivotMock(),
    tailPivot: pivotMock(),
    legPivots: [],
    ears: null,
    manePlanes: null,
    branchOrbs: null,
    trailSpheres: null,
  };
}

// ── Helper: make a minimal moth stub ─────────────────────────────────────────
function makeMothStub(x = 5, z = 5) {
  return {
    group: {
      position: { x, y: 3, z },
      rotation: { x: 0, y: 0, z: 0 },
      visible: true,
      _wingPivots: [
        { pivot: { rotation: { z: 0 } }, side: 1 },
        { pivot: { rotation: { z: 0 } }, side: -1 },
      ],
    },
    phase: 0,
    centerX: x,
    centerZ: z,
    floatY: 3,
    orbitAng: 0,
    orbitR: 4,
    flapSpeed: 8,
    _state: 'patrol',
    _stT: 5.0,
    _bank: 0,
    _wanderRetargetT: undefined,
    _crystalCooldown: 30,
    _cachedGY: 0,
    _lastTX: x,
    _lastTZ: z,
    _prevMx: x,
    _prevMz: z,
    _prevY: 3,
    wingMat: { emissiveIntensity: 0.5, opacity: 0.5 },
    tails: null,
    antennae: null,
    dustMotes: null,
  };
}

// ── Helper: make a minimal jelly stub ────────────────────────────────────────
function makeJellyStub(x = 0, z = 5) {
  const childMock = () => ({ rotation: { x: 0, y: 0, z: 0 } });
  return {
    group: {
      position: { x, y: 4, z },
      rotation: { x: 0, y: 0, z: 0 },
      visible: true,
    },
    phase: 0,
    floatY: 4,
    homeX: x,
    homeZ: z,
    wobble: 1.2,
    driftAng: 0,
    _state: 'drift',
    _stT: 10.0,
    _migrateAng: 0,
    _syncPhase: 0,
    _pulseSync: 0,
    _cachedGY: 0,
    _lastTX: x,
    _lastTZ: z,
    _crimsonJoined: false,
    _idleCuriosityBlend: 0,
    bell: { scale: { set: vi.fn() } },
    tentGroup: { children: [childMock(), childMock()] },
    bellMat: {
      emissiveIntensity: 0.5,
      opacity: 0.5,
      color: { copy: vi.fn().mockReturnThis(), lerp: vi.fn().mockReturnThis() },
      emissive: { copy: vi.fn().mockReturnThis(), lerp: vi.fn().mockReturnThis() },
    },
    rimMat: null,
    lappetMat: null,
    tentMat: null,
    oralMat: null,
    innerMat: null,
    tipMat: null,
    spotMat: null,
    nerveMat: null,
    organMat: null,
    mucusMat: null,
  };
}

// ── Helper: make a minimal luminid stub ──────────────────────────────────────
function makeLuminidStub(x = 3, z = 3) {
  return {
    group: {
      position: { x, y: 0, z },
      visible: true,
    },
  };
}

// ── Reset entity arrays before each test ─────────────────────────────────────
beforeEach(() => {
  puffs.length = 0;
  deers.length = 0;
  moths.length = 0;
  jellies.length = 0;
  luminids.length = 0;
  orbs.length = 0;
  ponds.length = 0;
});

// ============================================================================
// PUFFLINGS — the primary regression target
// ============================================================================
describe('updatePuffs', () => {
  it('does not throw with empty array', () => {
    expect(() => updatePuffs(0.05, 0)).not.toThrow();
  });

  it('does not throw with 3 idle pufflings (regression: _puffNeighbors bug)', () => {
    // Place pufflings within 10m of each other so the neighbor loop executes
    // and the idle-state flocking code (_puffNeighbors) runs.
    puffs.push(makePuffStub(0, 0));
    puffs.push(makePuffStub(3, 0));   // within 10m => neighbor
    puffs.push(makePuffStub(-3, 2));  // within 10m => neighbor

    // All start idle with positive idleTimer → idle branch runs every frame.
    expect(() => {
      for (let i = 0; i < 5; i++) updatePuffs(0.05, i * 0.05);
    }).not.toThrow();
  });

  it('drives idle branch with neighbors present (exact bug path)', () => {
    // Two close puffs so _puffNeighbors.length > 0 inside the idle case —
    // the line that previously read the bare `puffNeighbors`.
    const p1 = makePuffStub(0, 0);
    const p2 = makePuffStub(2, 0);   // 2m away — well within 10m flocking radius
    p1.state = 'idle';
    p1.idleTimer = 999; // keep in idle for all iterations
    p2.state = 'idle';
    p2.idleTimer = 999;
    puffs.push(p1, p2);

    let threw = false;
    try {
      for (let i = 0; i < 5; i++) updatePuffs(0.05, i * 0.05);
    } catch (e) {
      threw = true;
    }
    expect(threw).toBe(false);
  });

  it('handles hop and startled states without throwing', () => {
    const p = makePuffStub(0, 0);
    p.state = 'hop';
    p.hopTimer = 0;
    puffs.push(p);

    const p2 = makePuffStub(1, 1);
    p2.state = 'startled';
    p2._scaredT = 0.8;
    p2.hopTimer = 0;
    puffs.push(p2);

    expect(() => {
      for (let i = 0; i < 5; i++) updatePuffs(0.05, i * 0.05);
    }).not.toThrow();
  });
});

// ============================================================================
// DEER
// ============================================================================
describe('updateDeers', () => {
  it('does not throw with empty array', () => {
    expect(() => updateDeers(0.05, 0)).not.toThrow();
  });

  it('does not throw with 3 deer in walk state', () => {
    deers.push(makeDeerStub(0, 0));
    deers.push(makeDeerStub(8, 0));
    deers.push(makeDeerStub(-8, 0));

    expect(() => {
      for (let i = 0; i < 5; i++) updateDeers(0.05, i * 0.05);
    }).not.toThrow();
  });

  it('does not throw with deer in flee state', () => {
    const d = makeDeerStub(0, 0);
    d.state = 'flee';
    d.fleeTimer = 2.0;
    d._zigTimer = 0.5;
    d._zigDir = 1;
    d.wanderAng = 0.3;
    deers.push(d);
    deers.push(makeDeerStub(5, 5));

    expect(() => {
      for (let i = 0; i < 5; i++) updateDeers(0.05, i * 0.05);
    }).not.toThrow();
  });
});

// ============================================================================
// MOTHS
// ============================================================================
describe('updateMoths', () => {
  it('does not throw with empty array', () => {
    expect(() => updateMoths(0.05, 0)).not.toThrow();
  });

  it('does not throw with 3 moths in patrol state', () => {
    moths.push(makeMothStub(0, 0));
    moths.push(makeMothStub(5, 0));
    moths.push(makeMothStub(-5, 3));

    expect(() => {
      for (let i = 0; i < 5; i++) updateMoths(0.05, i * 0.05);
    }).not.toThrow();
  });
});

// ============================================================================
// JELLIES
// ============================================================================
describe('updateJellies', () => {
  it('does not throw with empty array', () => {
    expect(() => updateJellies(0.05, 0)).not.toThrow();
  });

  it('does not throw with 3 jellies in drift state', () => {
    jellies.push(makeJellyStub(0, 0));
    jellies.push(makeJellyStub(10, 0));
    jellies.push(makeJellyStub(0, 10));

    expect(() => {
      for (let i = 0; i < 5; i++) updateJellies(0.05, i * 0.05);
    }).not.toThrow();
  });

  it('does not throw with jellies cycling through states', () => {
    const j1 = makeJellyStub(0, 0);
    const j2 = makeJellyStub(5, 5);
    j1._state = 'pulse';
    j2._state = 'migrate';
    j2._migrateAng = 1.2;
    jellies.push(j1, j2);

    expect(() => {
      for (let i = 0; i < 5; i++) updateJellies(0.05, i * 0.05);
    }).not.toThrow();
  });
});

// ============================================================================
// LUMINIDS
// ============================================================================
describe('updateLuminids', () => {
  it('does not throw with empty array', () => {
    expect(() => updateLuminids(0.05, 0)).not.toThrow();
  });

  it('does not throw with 2 luminids within cull distance', () => {
    luminids.push(makeLuminidStub(0, 0));
    luminids.push(makeLuminidStub(5, 5));

    expect(() => {
      for (let i = 0; i < 5; i++) updateLuminids(0.05, i * 0.05);
    }).not.toThrow();
  });
});

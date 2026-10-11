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
  getRainRate: () => 0,
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
import { makeDeer } from '../../../entities/fauna/deer.js';
import { makeDeerRig, DEER_JOINT } from '../../../entities/fauna/deerRig.js';
import { makeMothRig, MOTH_JOINT } from '../../../entities/fauna/mothRig.js';
import { makePufflingRig, PUFF_JOINT } from '../../../entities/fauna/pufflingRig.js';
import { makePuff } from '../../../entities/fauna/pufflings.js';
import { makeJelly } from '../../../entities/fauna/jellies.js';
import { makeMoth } from '../../../entities/fauna/moths.js';
import { Euler, Quaternion } from 'three';
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
    // The GPU rig the update loop writes ear angles and eye scales to (record shape since M5.2).
    rig: makePufflingRig(),
    eyes: [{ scale: { x: 1, y: 1, z: 1 } }, { scale: { x: 1, y: 1, z: 1 } }],
    ears: [
      { mesh: { rotation: { x: 0, y: 0, z: -0.3 } }, side: -1, baseRotZ: -0.3 },
      { mesh: { rotation: { x: 0, y: 0, z: 0.3 } }, side: 1, baseRotZ: 0.3 },
    ],
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
    // The GPU rig the update loop writes its joint angles to (record shape since M5.1).
    rig: makeDeerRig(),
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
      // Wing joints are state objects with full Euler fields (the rig converts x, y, z).
      _wingPivots: [
        { pivot: { rotation: { x: 0, y: 0, z: 0 } }, side: -1 },
        { pivot: { rotation: { x: 0, y: 0, z: 0 } }, side: 1 },
      ],
    },
    // The GPU rig the update loop writes its joint angles to (record shape since M5.2).
    rig: makeMothRig(),
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
    antennae: [{ rotation: { x: 0, y: 0, z: 0 } }, { rotation: { x: 0, y: 0, z: 0 } }],
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

// ================================================================
// Daily rhythm: the new states must run without throwing.
// ================================================================
// The decision logic itself is tested in systems/ai/__tests__/rhythm.test.js.
// What these cover is the other half — that each new branch inside the update
// loops actually executes. A state the FSM can enter but whose case body
// throws is worse than one that was never added, because it only fails once
// the clock reaches that hour.
describe('daily rhythm states', () => {
  it('a bedded deer updates without throwing, with and without a tree', () => {
    const withTree = makeDeerStub(40, 40);
    withTree.state = 'bed';
    withTree._stT = 5;
    withTree._bedTgt = { x: 43, z: 40 };
    // The no-tree case has to stay bedded and stay simulated for its null path
    // to run at all: deer are culled past 60 m (pDist2 > 3600), and a short
    // timer leaves the state before the body executes. The first version of
    // this test did both, so removing the null guard changed nothing and the
    // seeded defect survived.
    const noTree = makeDeerStub(45, 20);
    noTree.state = 'bed';
    noTree._stT = 999;
    noTree._bedTgt = null;
    deers.push(withTree, noTree);

    expect(() => {
      for (let i = 0; i < 40; i++) updateDeers(0.05, i * 0.05);
    }).not.toThrow();
    expect(noTree.state, 'the null-target deer must still be in bed').toBe('bed');
  });

  it('a bedded deer walks toward its tree and settles', () => {
    // Well away from the mocked player at the origin: a deer standing on the
    // player flees, and flee outranks every other state. The first version of
    // this test put it at (0,0) and measured a deer running for its life.
    const d = makeDeerStub(40, 40);
    d.state = 'bed';
    d._stT = 999;                    // stay bedded for the whole run
    d._bedTgt = { x: 50, z: 40 };
    deers.push(d);
    const startD2 = 100;
    for (let i = 0; i < 60; i++) updateDeers(0.05, i * 0.05);
    const dx = d.group.position.x - 50, dz = d.group.position.z - 40;
    expect(d.state).toBe('bed');
    expect(dx * dx + dz * dz).toBeLessThan(startD2);
  });

  it('a deer whose bed timer expires in fair weather gets up', () => {
    const d = makeDeerStub(40, 40);
    d.state = 'bed';
    d._stT = 0.1;
    d._bedTgt = { x: 40.5, z: 40 };
    deers.push(d);
    for (let i = 0; i < 10; i++) updateDeers(0.05, i * 0.05);
    // The mocked clock says NIGHT and the mocked sky is clear, so there is no
    // reason to stay down.
    expect(d.state).toBe('walk');
  });

  it('a puffling heading home updates without throwing', () => {
    const p1 = makePuffStub(25, 0);
    p1.state = 'home';
    p1._homeT = 5;
    p1._homeTgt = { x: 31, z: 0, colR: 1.2 };
    // Long hold, not a short one: with _homeT near zero the pre-switch block
    // sends it back to idle before the null-target path in the switch ever
    // runs, which made this assertion vacuous.
    const p2 = makePuffStub(20, 6);
    p2.state = 'home';
    p2._homeT = 999;
    p2._homeTgt = null;              // no house found: must not crash
    puffs.push(p1, p2);

    expect(() => {
      for (let i = 0; i < 40; i++) updatePuffs(0.05, i * 0.05);
    }).not.toThrow();
    expect(p2.state, 'the null-target puffling must still be heading home').toBe('home');
  });

  it('a puffling walks toward its house and stops at the door', () => {
    // Far enough from the player not to be startled, close enough to still be
    // simulated: pufflings are culled outright beyond 40 m (pDist2 > 1600), so
    // a stub parked at 56 m never runs its update at all. The first version of
    // this test sat outside that band and measured a creature that was asleep.
    const p = makePuffStub(25, 0);
    p.state = 'home';
    p._homeT = 999;
    p._homeTgt = { x: 33, z: 0, colR: 1.0 };
    puffs.push(p);
    for (let i = 0; i < 200; i++) updatePuffs(0.05, i * 0.05);
    const dx = p.group.position.x - 33, dz = p.group.position.z;
    const d = Math.sqrt(dx * dx + dz * dz);
    expect(d).toBeLessThan(3);        // arrived
    expect(d).toBeGreaterThan(0.3);   // did not climb inside the geometry
  });

  it('a resting moth updates without throwing when the timer expires', () => {
    const m = makeMothStub(0, 0);
    m._state = 'rest';
    m._stT = 0.05;
    m._restTree = { x: 1, z: 1, h: 6 };
    moths.push(m);
    expect(() => {
      for (let i = 0; i < 30; i++) updateMoths(0.05, i * 0.05);
    }).not.toThrow();
  });

  it('jellies update without throwing while the bloom is being pushed down', () => {
    jellies.push(makeJellyStub(0, 0), makeJellyStub(6, 6));
    expect(() => {
      for (let i = 0; i < 20; i++) updateJellies(0.05, i * 0.05);
    }).not.toThrow();
  });
});


// ================================================================
// Deer GPU rig: the angles must reach the arrays the shader reads.
// ================================================================
// The unit tests prove createRig composes correctly and the browser gate proves
// the shader reads it. Neither catches an update loop that computes every angle
// and then forgets to publish them: the deer simply stops moving on screen while
// its state machine runs happily. This runs the real builder through the real
// loop and reads the uniform arrays back.
describe('deer rig upload', () => {
  const _eu = new Euler(), _q = new Quaternion();
  const qOf = (r) => _q.setFromEuler(_eu.set(r.x, r.y, r.z)).clone();
  const rigQ = (d, j) => new Quaternion(d.rig.quats[j * 4], d.rig.quats[j * 4 + 1], d.rig.quats[j * 4 + 2], d.rig.quats[j * 4 + 3]);

  it('starts at rest, and after a walk every root joint holds the quaternion of the angles the loop computed', () => {
    const d = makeDeer(30, 30);
    d.state = 'walk';
    d.walkTimer = 999;
    deers.push(d);
    for (let j = 0; j < DEER_JOINT.COUNT; j++) expect(Math.abs(rigQ(d, j).w)).toBeCloseTo(1, 6);

    for (let i = 0; i < 40; i++) updateDeers(0.05, i * 0.05);

    // The legs are swinging (otherwise this proves nothing)...
    let swing = 0;
    for (let li = 0; li < 4; li++) swing = Math.max(swing, Math.abs(d.legPivots[li].upper.rotation.x));
    expect(swing, 'the walking deer never swung a leg').toBeGreaterThan(0.05);

    // ...and the rig holds exactly those angles, converted by independent maths.
    const roots = [
      [DEER_JOINT.NECK_BASE, d.neckBasePivot.rotation],
      [DEER_JOINT.TAIL, d.tailPivot.rotation],
      ...[0, 1, 2, 3].map((li) => [DEER_JOINT.UPPER_0 + li, d.legPivots[li].upper.rotation]),
    ];
    for (const [j, r] of roots) {
      const want = qOf(r), got = rigQ(d, j);
      expect(Math.abs(want.dot(got)), `joint ${j}`).toBeCloseTo(1, 5);
    }
    // A lower leg is its upper leg's rotation times its own.
    for (let li = 0; li < 4; li++) {
      const want = qOf(d.legPivots[li].upper.rotation).multiply(qOf(d.legPivots[li].lower.rotation));
      expect(Math.abs(want.dot(rigQ(d, DEER_JOINT.LOWER_0 + li))), `lower leg ${li}`).toBeCloseTo(1, 5);
    }
    // The head joint carries the idle tilt, which moves every frame.
    expect(Math.abs(rigQ(d, DEER_JOINT.HEAD).z)).toBeGreaterThan(1e-4);
  });

  it('a deer past the cull radius is left alone (no pose written, no upload)', () => {
    const d = makeDeer(200, 200);
    d.state = 'walk';
    deers.push(d);
    const before = Array.from(d.rig.quats);
    for (let i = 0; i < 5; i++) updateDeers(0.05, i * 0.05);
    expect(Array.from(d.rig.quats)).toEqual(before);
  });

  it('writes the SAME field names the loop always used, so nothing outside this file notices the change', () => {
    const d = makeDeer(30, 30);
    for (const k of ['neckBasePivot', 'neckMidPivot', 'headPivot', 'tailPivot']) expect(d[k].rotation).toEqual({ x: 0, y: 0, z: 0 });
    expect(d.ears.length).toBe(2);
    expect(d.legPivots.length).toBe(4);
  });
});

// ================================================================
// Moth GPU rig: the flap and quiver angles must reach the arrays the shader reads.
// ================================================================
// Same hazard as the deer: an update loop that computes the flap and never
// publishes it leaves a moth with its wings frozen open while everything else
// runs. This runs the real builder through the real loop and reads the uniform
// arrays back.
describe('moth rig upload', () => {
  const _eu = new Euler(), _q = new Quaternion();
  const qOf = (r) => _q.setFromEuler(_eu.set(r.x, r.y, r.z)).clone();
  const rigQ = (m, j) => new Quaternion(m.rig.quats[j * 4], m.rig.quats[j * 4 + 1], m.rig.quats[j * 4 + 2], m.rig.quats[j * 4 + 3]);

  it('starts at rest, and after flying every wing and antenna joint holds the quaternion of the angles the loop computed', () => {
    const m = makeMoth(20, 3, 20);
    moths.push(m);
    for (let j = 0; j < MOTH_JOINT.COUNT; j++) expect(Math.abs(rigQ(m, j).w)).toBeCloseTo(1, 6);

    for (let i = 0; i < 40; i++) updateMoths(0.05, i * 0.05);

    const wp = m.group._wingPivots;
    expect(Math.abs(wp[0].pivot.rotation.z), 'the moth never flapped').toBeGreaterThan(0.01);
    expect(wp[0].pivot.rotation.z, 'wings flap in opposite senses').toBeCloseTo(-wp[1].pivot.rotation.z, 9);
    for (let w = 0; w < 2; w++) {
      expect(Math.abs(qOf(wp[w].pivot.rotation).dot(rigQ(m, MOTH_JOINT.WING_0 + w))), `wing ${w}`).toBeCloseTo(1, 5);
    }
    expect(Math.abs(m.antennae[0].rotation.x), 'the antennae never quivered').toBeGreaterThan(1e-3);
    for (let a = 0; a < 2; a++) {
      expect(Math.abs(qOf(m.antennae[a].rotation).dot(rigQ(m, MOTH_JOINT.ANT_0 + a))), `antenna ${a}`).toBeCloseTo(1, 5);
    }
  });

  it('a moth past the cull radius is left alone (no pose written, no upload)', () => {
    const m = makeMoth(300, 3, 300);
    moths.push(m);
    const before = Array.from(m.rig.quats);
    for (let i = 0; i < 5; i++) updateMoths(0.05, i * 0.05);
    expect(Array.from(m.rig.quats)).toEqual(before);
  });

  it('keeps the record fields the loop and the rest of the game read', () => {
    const m = makeMoth(20, 3, 20);
    expect(m.group._wingPivots.map((w) => w.side)).toEqual([-1, 1]);
    expect(m.antennae.length).toBe(2);
    expect(m.tails).toEqual([]);
    expect(m.dustMotes).toEqual([]);
    expect(m.wingMat.opacity).toBeGreaterThan(0);
  });
});

// ================================================================
// Puffling GPU rig: ear angles and eye scales must reach the arrays the shader reads.
// ================================================================
describe('puffling rig upload', () => {
  const _eu = new Euler(), _q = new Quaternion();
  const qOf = (r) => _q.setFromEuler(_eu.set(r.x, r.y, r.z)).clone();
  const rigQ = (p, j) => new Quaternion(p.rig.quats[j * 4], p.rig.quats[j * 4 + 1], p.rig.quats[j * 4 + 2], p.rig.quats[j * 4 + 3]);

  it('is built at its resting pose: ears tilted by baseRotZ, eyes open', () => {
    const p = makePuff(30, 30);
    expect(rigQ(p, PUFF_JOINT.EAR_0).equals(qOf({ x: 0, y: 0, z: -0.3 })) || Math.abs(rigQ(p, PUFF_JOINT.EAR_0).dot(qOf({ x: 0, y: 0, z: -0.3 }))) > 0.999999).toBe(true);
    expect(Math.abs(rigQ(p, PUFF_JOINT.EAR_1).dot(qOf({ x: 0, y: 0, z: 0.3 })))).toBeGreaterThan(0.999999);
    for (let e = 0; e < 2; e++) expect([p.rig.scales[(PUFF_JOINT.EYE_0 + e) * 3], p.rig.scales[(PUFF_JOINT.EYE_0 + e) * 3 + 1], p.rig.scales[(PUFF_JOINT.EYE_0 + e) * 3 + 2]]).toEqual([1, 1, 1]);
  });

  it('after the loop runs, the ear joints hold the quaternion of the angles it computed, and a blink reaches the eye scale', () => {
    const p = makePuff(20, 20);
    puffs.push(p);
    let sawBlink = false, sawWiggle = false;
    for (let i = 0; i < 400 && !(sawBlink && sawWiggle); i++) {
      updatePuffs(0.05, i * 0.05);
      for (let e = 0; e < 2; e++) {
        const want = qOf(p.ears[e].mesh.rotation), got = rigQ(p, PUFF_JOINT.EAR_0 + e);
        expect(Math.abs(want.dot(got)), `ear ${e} at step ${i}`).toBeCloseTo(1, 5);
        if (Math.abs(p.ears[e].mesh.rotation.z - p.ears[e].baseRotZ) > 0.01) sawWiggle = true;
        // the rig's scale is the state's scale, exactly
        expect(p.rig.scales[(PUFF_JOINT.EYE_0 + e) * 3 + 1], `eye ${e} at step ${i}`).toBeCloseTo(p.eyes[e].scale.y, 6);
      }
      if (p.eyes[0].scale.y < 0.5) sawBlink = true;
    }
    expect(sawWiggle, 'the ears never moved').toBe(true);
    expect(sawBlink, 'the puffling never blinked in 20 s of updates').toBe(true);
  });

  it('a puffling past the cull radius is left alone (no pose written, no upload)', () => {
    const p = makePuff(60, 60);
    puffs.push(p);
    const before = [Array.from(p.rig.quats), Array.from(p.rig.scales)];
    for (let i = 0; i < 5; i++) updatePuffs(0.05, i * 0.05);
    expect([Array.from(p.rig.quats), Array.from(p.rig.scales)]).toEqual(before);
  });

  it('keeps the record fields the loop, the wizard event and the rest of the game read', () => {
    const w = makePuff(30, 30, { wizardHat: true, skipSceneAdd: true });
    for (const k of ['group', 'shell', 'mouth', 'core', 'bodyMat', 'bellyMat', 'crownMat']) expect(w[k], k).toBeTruthy();
    expect(w.core.material.color).toBeTruthy();
    expect(w.mouth.scale).toBeTruthy();
    expect(w.shell.scale.set).toBeTypeOf('function');
    expect(w.ears.map((e) => e.side)).toEqual([-1, 1]);
    expect(w.eyes.length).toBe(2);
  });
});

// ================================================================
// Allocation guard for the per-frame path (source scan).
// ================================================================
// The deer update runs for every deer inside 60 m, every frame. The rig adds a
// pose conversion per joint; it must reuse module-scope scratch. A `new` in the
// loop is a garbage-collection hitch under load, so the scan below fails on one.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

function bodyOf(file, signature) {
  const src = readFileSync(fileURLToPath(new URL(file, import.meta.url)), 'utf8');
  const start = src.indexOf(signature);
  expect(start, `${signature} not found in ${file}`).toBeGreaterThan(-1);
  // brace-match from the first '{' after the signature
  let i = src.indexOf('{', start), depth = 0, end = i;
  for (; end < src.length; end++) {
    if (src[end] === '{') depth++;
    else if (src[end] === '}' && --depth === 0) break;
  }
  return src.slice(i, end + 1)
    .replace(/\/\/[^\n]*/g, '')            // line comments
    .replace(/throw new [^;]*;/g, '')           // error paths are not the per-frame path
    .split('\n').filter((ln) => !/\bemit\(/.test(ln)).join('\n');   // CREATURE_SOUND on a state change, pre-existing
}
const ALLOC = /\bnew\s+[A-Z]|=\s*\[|\(\s*\[|return\s*\[|,\s*\[[^\]]*\]\s*[,)]|\.map\(|\.filter\(|\.slice\(|\.\.\.[a-zA-Z_]|Array\.from|\{\s*x\s*:/;

describe('deer per-frame path allocates nothing', () => {
  it('updateDeers has no new / array literal / map / filter / spread / object literal', () => {
    const body = bodyOf('../deer.js', 'export function updateDeers');
    const hit = ALLOC.exec(body);
    expect(hit && hit[0], 'allocation in updateDeers').toBeNull();
  });
  it('the rig pose writer (writeDeerPose, its helper) and createRig upload()/pose() allocate nothing', () => {
    for (const [file, sig] of [
      ['../../../entities/fauna/deerRig.js', 'export function writeDeerPose'],
      ['../../../entities/fauna/deerRig.js', 'function poseFromRotation'],
      ['../../../entities/_bake.js', 'function upload()'],
      ['../../../entities/_bake.js', 'function pose(i, q)'],
      ['../../../entities/_bake.js', 'function rot(qx'],
    ]) {
      const hit = ALLOC.exec(bodyOf(file, sig));
      expect(hit && hit[0], `allocation in ${sig}`).toBeNull();
    }
  });
});

describe('moth per-frame path allocates nothing', () => {
  it('the rig pose writer (writeMothPose, its helper) allocates nothing', () => {
    for (const sig of ['export function writeMothPose', 'function poseFromRotation']) {
      const hit = ALLOC.exec(bodyOf('../../../entities/fauna/mothRig.js', sig));
      expect(hit && hit[0], `allocation in ${sig}`).toBeNull();
    }
  });
  it('the flap and quiver block of updateMoths has no new / array literal / map / spread', () => {
    const src = bodyOf('../moths.js', 'export function updateMoths');
    const from = src.indexOf('const flapIntensity'), to = src.indexOf('writeMothPose(m);');
    expect(from).toBeGreaterThan(-1);
    expect(to).toBeGreaterThan(from);
    const hit = ALLOC.exec(src.slice(from, to));
    expect(hit && hit[0], 'allocation in the moth animation block').toBeNull();
  });
});

describe('puffling per-frame path allocates nothing', () => {
  it('the rig pose writer and the rig scale staging allocate nothing', () => {
    for (const [file, sig] of [
      ['../../../entities/fauna/pufflingRig.js', 'export function writePufflingPose'],
      ['../../../entities/_bake.js', 'function poseScale(i, sx, sy, sz)'],
    ]) {
      const hit = ALLOC.exec(bodyOf(file, sig));
      expect(hit && hit[0], `allocation in ${sig}`).toBeNull();
    }
  });
});

// ================================================================
// Why the jelly is NOT on a rig (M5.2): its seven meshes are its seven materials.
// ================================================================
// A rig removes meshes by moving per-part motion into the vertex shader. A jelly's
// meshes are already one per material, and the update loop writes every one of
// those seven materials (colour, opacity, emissive) each frame, so none of them can
// share a mesh until those writes become per-part uniforms. That is a different
// change (see NOTES.md, "Jellies"). This pins the reason: if one of the seven
// stops being written per frame, a merge becomes possible and someone should look.
describe('jelly: every one of the seven materials is driven per frame', () => {
  it('updateJellies writes colour, opacity or emissive on bell, rim, tent, inner, spot, nerve and tip', () => {
    const body = bodyOf('../jellies.js', 'export function updateJellies');
    for (const m of ['bellMat', 'rimMat', 'tentMat', 'innerMat', 'spotMat', 'nerveMat', 'tipMat']) {
      const re = new RegExp(`j\\.${m}\\.(color|opacity|emissive|emissiveIntensity)\\s*(=|\\.copy|\\.lerp)`);
      expect(re.test(body), `${m} is no longer written per frame`).toBe(true);
    }
  });

  it('the jelly is 7 meshes: one per material, bell squash and tentacle sway being group transforms (no per-tentacle loop on the GPU build)', () => {
    const j = makeJelly(0, 2, 0);
    const meshes = [];
    j.group.traverse((o) => { if (o.isMesh) meshes.push(o); });
    expect(meshes.length).toBe(7);
    expect(new Set(meshes.map((m) => m.material)).size).toBe(7);
    expect(j._gpu).toBe(true);
  });
});

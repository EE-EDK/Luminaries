/**
 * Jelly post-sync choreography test.
 *
 * Verifies the requested flow:
 *   sync (carry 'jelly')  -> synced jellies ESCORT above the player
 *   grab jelly sun-seed    -> flock sweeps to the OBELISK and orbits it
 *   transformation phase   -> flock DISPERSES
 *   carry window elapses    -> escort ends (carrier dropped → re-sync)
 *
 * Only WebGL/DOM/audio sinks are mocked; the real eventBus drives the listeners.
 */
import { describe, it, expect, vi, beforeAll } from 'vitest';

// Controllable state shared with the mocks (hoisted above the vi.mock calls).
const ctl = vi.hoisted(() => ({ freq: null, phase: 'SEEK' }));

vi.mock('../../../core/renderer.js', () => ({ scene: { add: vi.fn(), remove: vi.fn() } }));
vi.mock('../../../world/terrain.js', () => ({ getGroundY: () => 0, initTerrain: vi.fn() }));
vi.mock('../../../systems/dimming.js', () => ({ getLocalGlow: () => 1.0 }));
vi.mock('../../../systems/attunement.js', () => ({
  getAttunement: () => 0,
  getAttunementTarget: () => null,
  getPlayerFrequency: () => ctl.freq,
  getJellySyncFlash: () => 0,
}));
vi.mock('../../../core/player.js', () => ({
  player: { pos: { x: 30, y: 0, z: 30 } },
  playerIdleTime: 0,
}));
vi.mock('../../../systems/dayNightCycle.js', () => ({ bioGlow: 1.0, phase: 'NIGHT' }));
vi.mock('../../../systems/weather.js', () => ({ isStorming: false }));
vi.mock('../../../state/gameState.js', () => ({
  orbBoost: 1, humResonanceType: null, humResonanceStr: 0, echoTimer: 0, attuneFlashType: null,
}));
vi.mock('../../../systems/spiritHum.js', () => ({
  isLocked: () => false, getLockType: () => null, getResonance: () => 0, getResonanceType: () => null,
}));
vi.mock('../../../systems/audio.js', () => ({ playCreatureSound: vi.fn() }));
vi.mock('../../../entities/world/obelisk.js', () => ({ getObeliskGroup: () => null })); // anchor → (0,0,ringY=18)
vi.mock('../../../quest/questState.js', () => ({ getQuestPhase: () => ctl.phase }));
vi.mock('../../../utils/spatialHash.js', () => ({
  queryNearTrees: () => ({ length: 0, items: [] }),
  buildNamedDynamicHash: vi.fn(),
  queryNamedDynamic: () => ({ length: 0, items: [] }),
}));

import { emit, Events } from '../../../kernel/eventBus.js';
import { jellies } from '../../../state/entityStore.js';
import { player } from '../../../core/player.js';
import { updateJellies } from '../jellies.js';

function makeJellyStub(x, z) {
  const colorMock = { copy: vi.fn().mockReturnThis(), lerp: vi.fn().mockReturnThis() };
  return {
    group: { position: { x, y: 4, z }, rotation: { x: 0, y: 0, z: 0 }, visible: true },
    phase: 0, floatY: 4, homeX: x, homeZ: z, wobble: 1.2, driftAng: 0,
    _state: 'drift', _stT: 999, _migrateAng: 0, _syncPhase: 0, _pulseSync: 0,
    _cachedGY: 0, _lastTX: x, _lastTZ: z, _crimsonJoined: false, _idleCuriosityBlend: 0,
    bell: { scale: { set: vi.fn() } },
    tentGroup: { children: [{ rotation: { x: 0, z: 0 } }, { rotation: { x: 0, z: 0 } }] },
    bellMat: { emissiveIntensity: 0, opacity: 0.5, color: colorMock, emissive: colorMock },
    rimMat: null, lappetMat: null, tentMat: null, oralMat: null, innerMat: null,
    tipMat: null, spotMat: null, nerveMat: null, organMat: null, mucusMat: null,
  };
}

function run(frames, tStart, dt = 0.05) {
  let t = tStart;
  for (let k = 0; k < frames; k++) { t += dt; updateJellies(dt, t); }
  return t;
}

describe('jelly escort → obelisk → disperse', () => {
  beforeAll(() => {
    jellies.length = 0;
    for (let i = 0; i < 6; i++) jellies.push(makeJellyStub(30 + (i - 3) * 0.5, 30 + (i % 2)));
  });

  it('runs the full post-sync choreography', () => {
    ctl.freq = null; ctl.phase = 'SEEK';
    let t = run(1, 0); // first call registers the event listeners

    // --- 1. SYNC: carry jelly + CREATURE_ATTUNED → escort overhead ---
    ctl.freq = 'jelly';
    emit(Events.CREATURE_ATTUNED, { type: 'jelly' });
    t = run(60, t); // ~3s to converge

    const escortJ = jellies.find((j) => j._escort);
    expect(escortJ).toBeTruthy();
    // Risen above the player...
    expect(escortJ.group.position.y).toBeGreaterThan(30 * 0 + 4.5); // player.y(0) + ESCORT_Y(6.8) ± bob
    // ...and hovering over the player (within the escort ring + ease margin), NOT at the obelisk.
    const hdPlayer = Math.hypot(escortJ.group.position.x - 30, escortJ.group.position.z - 30);
    expect(hdPlayer).toBeLessThan(5);

    // --- 2. GRAB the jelly sun-seed → flock sweeps to the obelisk ring ---
    emit(Events.ORB_COLLECTED, { creatureType: 'jelly', orbsFound: 2 });
    t = run(140, t); // crimson sweep (~1s) + orbit convergence

    expect(jellies.every((j) => !j._escort)).toBe(true); // escort tags cleared
    const oj = jellies[0];
    const distOrigin = Math.hypot(oj.group.position.x, oj.group.position.z);
    expect(distOrigin).toBeLessThan(18);      // near the ~12.5m obelisk ring
    const ojToPlayer = Math.hypot(oj.group.position.x - 30, oj.group.position.z - 30);
    expect(ojToPlayer).toBeGreaterThan(15);   // left the overhead position

    // --- 3. TRANSFORMATION → disperse (ritual releases the flock) ---
    // Stand by the obelisk so the released jellies stay in view (not distance-culled),
    // then confirm they drop off the ~18m ring back toward free-drift height.
    player.pos.x = 0; player.pos.z = 0;
    ctl.phase = 'TRANSFORM';
    t = run(80, t);
    expect(oj.group.position.y).toBeLessThan(10);
  });

  it('does NOT escort once the carry window has elapsed (carrier dropped → re-sync needed)', () => {
    // Re-sync, confirm escort, then simulate the 60s window elapsing (carrier → null).
    ctl.freq = null; ctl.phase = 'SEEK';
    let t = run(1, 1000);
    ctl.freq = 'jelly';
    emit(Events.CREATURE_ATTUNED, { type: 'jelly' });
    t = run(40, t);
    const j = jellies.find((x) => x._escort);
    expect(j.group.position.y).toBeGreaterThan(4.5); // escorting overhead

    // Window elapsed: attunement.js drops the carrier.
    ctl.freq = null;
    t = run(80, t);
    expect(j.group.position.y).toBeLessThan(8); // fell back toward normal float height (no longer overhead)
  });
});

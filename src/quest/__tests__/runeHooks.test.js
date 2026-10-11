/**
 * The runes: a live collection reveals a fragment, a restore does not, and Tab
 * at the obelisk turns the lit runes between their two colours.
 *
 * The renderer, lights, lasers and quest state are stood in for; what runs for
 * real is questVisuals itself and three's Color, because the claim being made
 * is about the colours that end up on the rune materials.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Color } from 'three';
import { C } from '../../constants.js';
import { RUNE_FLIP_SEC } from '../runeFlip.js';

const H = vi.hoisted(() => ({
  state: { orbsFound: 0, questPhase: 'SEEK', obeliskY: 0, transformDone: false, orbs: [] },
  constellation: [],
}));

vi.mock('../../core/lighting.js', () => ({
  orbLight: { position: { set: vi.fn() }, intensity: 0, distance: 0, color: { set: vi.fn() } },
}));
vi.mock('../../core/renderer.js', () => ({ scene: { add: vi.fn(), remove: vi.fn() } }));
vi.mock('../lasers.js', () => ({ updateLasers: vi.fn(), setLaserFade: vi.fn(), cleanupLasers: vi.fn() }));
vi.mock('../../world/ground.js', () => ({ setGroundTransform: vi.fn() }));
vi.mock('../../systems/dayNightCycle.js', () => ({ bioGlow: 1 }));
vi.mock('../../world/sky.js', () => ({
  revealConstellation: (i) => H.constellation[i] || null,
  transformSky: vi.fn(),
}));
vi.mock('../questState.js', () => ({
  getQuestState: () => H.state,
  getTimers: () => ({ finale: 0, finalePhase: 0, transform: 0, freeRoam: 0 }),
  attemptCollectOrb: vi.fn(),
}));

// Fresh copies of the modules for every test: questVisuals subscribes to the
// event bus when it is initialised and keeps its rune-flip state at module
// scope, and narrativeState's reveal is one-way. A test that inherited any of
// those from the one before it would be testing the order, not the code.
let initQuestVisuals, restoreQuestVisuals, updateQuestVisuals, requestRuneFlip, getRuneFlipMix;
let revealTruth, emit, Events;

/** Five rune faces shaped like obelisk.js builds them. */
function makeFaces() {
  return Array.from({ length: 5 }, () => ({
    mat: { color: new Color(C.obeliskPink), emissive: new Color(C.obeliskPink), opacity: 0, emissiveIntensity: 0 },
    meshes: [{ visible: false }],
    revealed: false,
    revealTimer: 0,
  }));
}

const NAME = { child: 'The Drifter', adult: 'Chart 1' };
let faces, onRune;

beforeEach(async () => {
  vi.resetModules();
  ({ initQuestVisuals, restoreQuestVisuals, updateQuestVisuals, requestRuneFlip, getRuneFlipMix }
    = await import('../questVisuals.js'));
  ({ revealTruth } = await import('../../state/narrativeState.js'));
  ({ emit, Events } = await import('../../kernel/eventBus.js'));
  faces = makeFaces();
  onRune = vi.fn();
  // One orb, already taken: the collection handler reads its position and the
  // frame loop skips it, which is all either needs of it here.
  H.state = { orbsFound: 0, questPhase: 'SEEK', obeliskY: 0, transformDone: false, orbs: [{ found: true }] };
  H.constellation = [NAME];
  initQuestVisuals({
    orbs: [{ group: { position: { y: 0 }, visible: false } }],
    obeliskGroup: { position: { x: 0, y: 0, z: 0 }, rotation: { y: 0 } },
    makeLaser: vi.fn(() => ({})),
    obeliskMat: {}, obeliskGlowMat: {}, pinnacleOrb: null,
    player: { pos: { x: 0, z: 10 } },
    runeFaces: faces,
    onRuneRevealed: onRune,
    orbHudEl: { innerHTML: '' },
  });
});

describe('a live collection', () => {
  it('lights the rune and reports it, with the constellation that opened', () => {
    emit(Events.ORB_COLLECTED, { orbIndex: 0, x: 0, z: 0, orbsFound: 1, creatureType: 'deer' });
    expect(faces[0].revealed).toBe(true);
    expect(onRune).toHaveBeenCalledTimes(1);
    expect(onRune).toHaveBeenCalledWith(0, NAME);
  });

  it('reports each rune as its own ordinal', () => {
    for (let n = 1; n <= 3; n++) {
      emit(Events.ORB_COLLECTED, { orbIndex: 0, x: 0, z: 0, orbsFound: n, creatureType: 'jelly' });
    }
    expect(onRune.mock.calls.map((c) => c[0])).toEqual([0, 1, 2]);
  });
});

describe('a restore', () => {
  it('lights the runes without reporting a single one', () => {
    H.state = {
      orbsFound: 3, questPhase: 'SEEK', obeliskY: 0, transformDone: false,
      orbs: [{ found: true, creature: 'deer' }, { found: true, creature: 'moth' }, { found: true, creature: 'puff' }],
    };
    restoreQuestVisuals();
    expect(faces.filter((f) => f.revealed)).toHaveLength(3);
    expect(onRune).not.toHaveBeenCalled();
  });
});

describe('Tab at the obelisk', () => {
  const lit = (n = 2) => {
    for (let i = 1; i <= n; i++) {
      emit(Events.ORB_COLLECTED, { orbIndex: 0, x: 0, z: 0, orbsFound: i, creatureType: 'deer' });
    }
  };
  const deer = new Color(C.deerGlow);
  const pink = new Color(C.obeliskPink);
  const run = (seconds) => {
    for (let t = 0; t < seconds; t += 0.05) updateQuestVisuals(0.05, t, {});
  };

  it('does nothing before the truth', () => {
    lit();
    expect(requestRuneFlip(0, 10, 0)).toBe(false);
  });

  it('turns the lit runes to the archive pink over 0.6 s, and back', () => {
    revealTruth();
    lit(2);
    run(0.1);
    expect(faces[0].mat.color.getHex()).toBe(deer.getHex());   // at rest: the creature colour

    expect(requestRuneFlip(0, 10, 0)).toBe(true);
    run(RUNE_FLIP_SEC / 2);
    const mid = faces[0].mat.color.getHex();
    expect(mid).not.toBe(deer.getHex());
    expect(mid).not.toBe(pink.getHex());                       // part-way: neither end
    expect(getRuneFlipMix()).toBeGreaterThan(0);
    expect(getRuneFlipMix()).toBeLessThan(1);

    run(RUNE_FLIP_SEC);
    expect(faces[0].mat.color.getHex()).toBe(pink.getHex());
    expect(faces[1].mat.color.getHex()).toBe(pink.getHex());
    expect(getRuneFlipMix()).toBe(1);

    expect(requestRuneFlip(0, 10, 0)).toBe(true);
    run(RUNE_FLIP_SEC * 2);
    expect(faces[0].mat.color.getHex()).toBe(deer.getHex());
    expect(getRuneFlipMix()).toBe(0);
  });

  it('does not touch a rune that is not lit', () => {
    revealTruth();
    lit(1);
    requestRuneFlip(0, 10, 0);
    run(RUNE_FLIP_SEC * 2);
    expect(faces[3].revealed).toBe(false);
    expect(faces[3].mat.color.getHex()).toBe(pink.getHex());   // never recoloured
  });

  it('refuses from too far away or looking away, once the truth is known', () => {
    revealTruth();
    lit(1);
    expect(requestRuneFlip(0, 40, 0)).toBe(false);             // 40 m
    expect(requestRuneFlip(0, 10, Math.PI)).toBe(false);       // back to the stone
  });

  it('has nothing to turn when no rune is lit', () => {
    revealTruth();
    expect(requestRuneFlip(0, 10, 0)).toBe(false);
  });
});

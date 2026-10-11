/**
 * The wizard speaks in both registers at every beat.
 *
 * The encounter used to hand the display four bare strings, so after the
 * wizard lifted the veil — the whole point of the encounter — nothing he said
 * had a second half. Each beat is now a {child, adult} pair shown through
 * showNarrativePair. The FSM is driven the way wizardHumGate drives it, and
 * observed at the pair display: which pair, how often, in what order.
 */
import { describe, it, expect, vi } from 'vitest';
import { WIZARD } from '../../narrative/lines.js';
import { speak } from '../../narrative/voice.js';

const hum = vi.hoisted(() => ({ active: false }));

vi.mock('../../core/renderer.js', () => ({
  renderer: {}, camera: {}, clock: {},
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn() },
}));

vi.mock('../../entities/fauna/pufflings.js', () => ({
  makePuff: vi.fn(() => ({
    group: {
      position: { x: 6, y: 0, z: 0, set: vi.fn() },
      rotation: { x: 0, y: 0, z: 0 },
      visible: false,
      traverse: vi.fn(),
      updateMatrixWorld: vi.fn(),
    },
    shell: { scale: { set: vi.fn() }, rotation: { x: 0, y: 0, z: 0 } },
    mouth: null, phase: 0, speed: 3.1,
    bodyMat: null, bellyMat: null, crownMat: null, core: null,
    wanderAng: 0, _baseY: 0, _standoffR: 4, _talkTimer: 0,
  })),
}));

vi.mock('../../core/input.js', () => ({
  mobile: false,
  isHumInputActive: () => hum.active,
  yaw: 0, pitch: 0, keys: {}, mouseDown: false, started: true, joyX: 0, joyY: 0, joyOn: false,
}));

vi.mock('../../core/player.js', () => ({
  player: { pos: { x: 0, y: 0, z: 0 }, vel: { x: 0, z: 0 } },
}));

vi.mock('../audio/creatures.js', () => ({ playWizardApproachLaLa: vi.fn() }));

import {
  initWizardPufflingEvent, updateWizardPufflingEvent,
  debugSpawnWizardEncounter, resetWizardEncounter,
} from '../wizardPufflingEvent.js';

/** Play the whole encounter, answering the hum at 15 s, and record what was shown. */
function playEncounter(config) {
  hum.active = false;
  initWizardPufflingEvent({ getGroundY: () => 0, onTruthUnlocked: () => {}, ...config });
  resetWizardEncounter();
  expect(debugSpawnWizardEncounter()).toBe(true);
  const ctx = {
    player: { vel: { x: 0, z: 0 }, pos: { x: 0, y: 0, z: 0 } },
    cameraPos: { x: 0, y: 1.7, z: 0 },
    yaw: 0, pitch: 0,
  };
  const dt = 0.05;
  for (let i = 0; i < 40 / dt; i++) {
    const t = i * dt;
    hum.active = t >= 15;
    updateWizardPufflingEvent(dt, t, ctx);
  }
}

describe('the wizard shows pairs', () => {
  it('shows each beat exactly once, as the pair from lines.js, in story order', () => {
    const shown = [];
    playEncounter({ showNarrativePair: (set, sec) => shown.push({ set, sec }), playPufflingVocal: () => {} });
    expect(shown.map((s) => s.set)).toEqual([
      WIZARD.approach, WIZARD.deadSoul, WIZARD.humPrompt, WIZARD.proclaim, WIZARD.scream,
    ]);
  });

  it('gives every shown pair both voices', () => {
    const shown = [];
    playEncounter({ showNarrativePair: (set) => shown.push(set), playPufflingVocal: () => {} });
    expect(shown).toHaveLength(5);
    for (const set of shown) {
      expect(set.child.length).toBeGreaterThan(0);
      expect(set.adult.length).toBeGreaterThan(0);
      expect(set.child).not.toBe(set.adult);
    }
  });

  it('voices the child half, resolved, for the babble', () => {
    const spoken = [];
    playEncounter({
      showNarrativePair: () => {},
      playPufflingVocal: (text) => spoken.push(text),
    });
    expect(spoken).toEqual([
      speak(WIZARD.deadSoul.child, 'child'),
      speak(WIZARD.proclaim.child, 'child'),
      speak(WIZARD.scream.child, 'child'),
    ]);
  });

  it('still plays out for a host that only injects the older single-string display', () => {
    // Backward compatibility: a host that has not been updated gets the child
    // half through showNarrativeText instead of silence.
    const lines = [];
    playEncounter({ showNarrativeText: (text) => lines.push(text), playPufflingVocal: () => {} });
    expect(lines).toEqual([
      WIZARD.approach.child, WIZARD.deadSoul.child, WIZARD.humPrompt.child, WIZARD.proclaim.child, WIZARD.scream.child,
    ]);
  });

  it('prefers the pair display when both are injected', () => {
    const text = [];
    const pairs = [];
    playEncounter({
      showNarrativeText: (t) => text.push(t),
      showNarrativePair: (s) => pairs.push(s),
      playPufflingVocal: () => {},
    });
    expect(text).toEqual([]);
    expect(pairs).toHaveLength(5);
  });
});

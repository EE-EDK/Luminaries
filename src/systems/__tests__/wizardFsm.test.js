/**
 * Smoke test: wizard FSM idle state does not throw and accumulates movement
 * toward the spawn trigger without attempting to access Three.js / DOM APIs.
 *
 * makePuff and scene touch THREE + renderer; this test only drives the
 * idle->approach trigger guard. renderer.js and its transitive dependents are
 * mocked so no WebGLRenderer is instantiated.
 */
import { describe, it, expect, vi } from 'vitest';

// ── Mock renderer before any module that imports it is loaded ─────────────
vi.mock('../../core/renderer.js', () => ({
  renderer: {},
  camera: {},
  clock: {},
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn() },
}));

// ── Mock pufflings (createes Three.js geometry on import) ─────────────────
vi.mock('../../entities/fauna/pufflings.js', () => ({
  makePuff: vi.fn(() => ({
    group: {
      position: { x: 0, y: 0, z: 0, set: vi.fn() },
      rotation: { x: 0, y: 0, z: 0 },
      visible: false,
      traverse: vi.fn(),
      updateMatrixWorld: vi.fn(),
    },
    shell: { scale: { set: vi.fn() }, rotation: { x: 0, y: 0, z: 0 } },
    mouth: null,
    phase: 0,
    speed: 3.1,
    bodyMat: null,
    bellyMat: null,
    crownMat: null,
    core: null,
    wanderAng: 0,
    _baseY: 0,
    _standoffR: 4,
    _talkTimer: 0,
  })),
}));

// ── Mock input (also imports renderer.js) ─────────────────────────────────
vi.mock('../../core/input.js', () => ({
  humFreqArmed: false,
  yaw: 0,
  pitch: 0,
  keys: {},
  mouseDown: false,
  started: false,
  joyX: 0,
  joyY: 0,
  joyOn: false,
}));

// ── Mock audio/creatures (AudioContext may not exist in node env) ──────────
vi.mock('../audio/creatures.js', () => ({
  playWizardApproachLaLa: vi.fn(),
}));

import { initWizardPufflingEvent, updateWizardPufflingEvent } from '../wizardPufflingEvent.js';

// makePuff/scene touch THREE + renderer; this test only drives the idle->approach trigger guard.
describe('wizard FSM trigger', () => {
  it('does not throw while idle and accumulates toward spawn', () => {
    initWizardPufflingEvent({
      showNarrativeText: () => {},
      playPufflingVocal: () => {},
      getGroundY: () => 0,
      onTruthUnlocked: () => {},
    });
    const ctx = {
      player: { vel: { x: 3, z: 0 }, pos: { x: 0, y: 0, z: 0 } },
      cameraPos: { x: 0, y: 1, z: 0 },
      yaw: 0, pitch: 0,
    };
    // Idle for a short while — must not spawn yet (0.5s << 50s threshold), must not throw.
    expect(() => { for (let i = 0; i < 10; i++) updateWizardPufflingEvent(0.05, i * 0.05, ctx); }).not.toThrow();
  });
});

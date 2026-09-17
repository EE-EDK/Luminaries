/**
 * Wizard encounter — the "hum to answer it" gate must be answerable on a phone.
 *
 * REGRESSION GUARD: the waitHum state read `humFreqArmed` directly, and that
 * flag is set only by the F key. A mobile player hums by holding the pitch
 * slider (`touchHum`), never sets `humFreqArmed`, and so could stand in front
 * of the wizard forever — the encounter, and the TAB/truth unlock behind it,
 * were unreachable on touch. Both control schemes now go through one classifier,
 * `isHumInputActive()` in core/input.js.
 *
 * The FSM is driven through its public API and observed through the narrative
 * text callback: entering waitHum prints the prompt, passing the gate prints
 * the proclaim line. Everything that needs WebGL, audio or the DOM is mocked.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mutable hum state the input mock reads — hoisted so the vi.mock factory sees it.
const hum = vi.hoisted(() => ({ active: false, mobile: true }));

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
  get mobile() { return hum.mobile; },
  isHumInputActive: () => hum.active,
  yaw: 0,
  pitch: 0,
  keys: {},
  mouseDown: false,
  started: true,
  joyX: 0, joyY: 0, joyOn: false,
}));

vi.mock('../../core/player.js', () => ({
  player: { pos: { x: 0, y: 0, z: 0 }, vel: { x: 0, z: 0 } },
}));

vi.mock('../audio/creatures.js', () => ({ playWizardApproachLaLa: vi.fn() }));

import {
  initWizardPufflingEvent,
  updateWizardPufflingEvent,
  debugSpawnWizardEncounter,
  resetWizardEncounter,
} from '../wizardPufflingEvent.js';

const PROCLAIM_LINE = 'NOW you see BOTH worlds at once!';

/** Drive the FSM and collect every narrative line it prints. */
function runEncounter({ mobileDevice, humFrom, humUntil = Infinity, seconds = 30 }) {
  hum.mobile = mobileDevice;
  hum.active = false;
  const lines = [];
  initWizardPufflingEvent({
    showNarrativeText: (text) => lines.push(text),
    playPufflingVocal: () => {},
    getGroundY: () => 0,
    onTruthUnlocked: () => {},
  });
  resetWizardEncounter();
  expect(debugSpawnWizardEncounter()).toBe(true);

  const ctx = {
    player: { vel: { x: 0, z: 0 }, pos: { x: 0, y: 0, z: 0 } },
    cameraPos: { x: 0, y: 1.7, z: 0 },
    yaw: 0, pitch: 0,
  };
  const dt = 0.05;
  for (let i = 0; i < seconds / dt; i++) {
    const t = i * dt;
    hum.active = t >= humFrom && t < humUntil;
    updateWizardPufflingEvent(dt, t, ctx);
  }
  return lines;
}

beforeEach(() => { hum.active = false; });

describe('wizard hum gate', () => {
  // Timeline from debugSpawnWizardEncounter(): approach ends at >= 4 s,
  // confront runs 6.8 s, so waitHum begins near 10.8 s.
  it('mobile: holding the pitch slider answers the wizard', () => {
    // Silent through waitHum's start, then hold the slider: the 0.35 s path.
    const lines = runEncounter({ mobileDevice: true, humFrom: 15 });
    expect(lines.some((l) => l.startsWith('Hum to answer it'))).toBe(true);
    expect(lines).toContain(PROCLAIM_LINE);
  });

  it('mobile: the prompt names the slider, never the F key', () => {
    const lines = runEncounter({ mobileDevice: true, humFrom: 15 });
    const prompt = lines.find((l) => l.startsWith('Hum to answer it'));
    expect(prompt).toBeDefined();
    expect(prompt).toContain('HUM slider');
    expect(prompt).not.toContain('F');
  });

  it('desktop: the prompt still names the F key', () => {
    const lines = runEncounter({ mobileDevice: false, humFrom: 15 });
    const prompt = lines.find((l) => l.startsWith('Hum to answer it'));
    expect(prompt).toBeDefined();
    expect(prompt).toContain('press F');
  });

  it('never humming leaves the wizard waiting', () => {
    const lines = runEncounter({ mobileDevice: true, humFrom: Infinity });
    expect(lines.some((l) => l.startsWith('Hum to answer it'))).toBe(true);
    expect(lines).not.toContain(PROCLAIM_LINE);
  });

  it('a hum already running when asked must be held past 2.25 s', () => {
    // Humming before the wizard asks, released ~1.2 s into waitHum: that reads
    // as ambient humming the player happened to be doing, not an answer.
    const lines = runEncounter({ mobileDevice: true, humFrom: 0, humUntil: 12 });
    expect(lines.some((l) => l.startsWith('Hum to answer it'))).toBe(true);
    expect(lines).not.toContain(PROCLAIM_LINE);
  });

  it('a hum already running and held through does answer', () => {
    // Same start, but held to the end — past the 2.25 s deliberate-answer mark.
    const lines = runEncounter({ mobileDevice: true, humFrom: 0 });
    expect(lines).toContain(PROCLAIM_LINE);
  });
});

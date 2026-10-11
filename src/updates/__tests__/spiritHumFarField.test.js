/**
 * The far-field hint: two registers, named by the glossary, rebuilt only when
 * something about it changes.
 *
 * The hint sits in a per-frame update. It used to be built by joining a lookup
 * table of child-voice creature names into a sentence — once, when the creature
 * changed, so the range it printed never moved and Tab could not re-word it.
 * Now it is a pair. These tests stand a fake page and a fake hum behind the real
 * update function and read the one element the player reads.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

const H = vi.hoisted(() => ({
  hint: null,
  writes: 0,
  el: null,
}));

// A page: getElementById hands back inert elements, the far-field one recording writes.
vi.stubGlobal('document', {
  getElementById: (id) => {
    const el = {
      style: { setProperty() {}, removeProperty() {} },
      classList: { add() {}, remove() {} },
      _text: '',
    };
    if (id === 'hum-farfield-hint') {
      Object.defineProperty(el, 'textContent', {
        get() { return el._text; },
        set(v) { el._text = v; H.writes++; },
      });
      H.el = el;
    }
    return el;
  },
});

vi.mock('../../core/input.js', () => ({
  touchHum: false, touchHumY: 0, keys: {}, humFreqArmed: false, mobile: true,
  isHumInputActive: () => false,
}));
vi.mock('../../systems/spiritHum.js', () => ({
  startHum: vi.fn(), stopHum: vi.fn(), updateHum: vi.fn(),
  isHumming: () => false, isLocked: () => false, getLockType: () => null,
  getHumPitch: () => 0, getResonance: () => 0, getResonanceType: () => null,
  getLockProgress: () => 0, justLocked: () => false, getLockDecay: () => 0,
  getFarFieldHint: () => H.hint,
}));
vi.mock('../../systems/audio.js', () => ({
  startSpiritHumAudio: vi.fn(), updateSpiritHumAudio: vi.fn(), stopSpiritHumAudio: vi.fn(), playPitchLockSound: vi.fn(),
}));
vi.mock('../../particles/resonanceRings.js', () => ({ spawnResonanceRing: vi.fn() }));
vi.mock('../../world/terrain.js', () => ({ getGroundY: () => 0 }));
vi.mock('../../systems/discoveries.js', () => ({ showNarrativeText: vi.fn() }));
vi.mock('../../state/gameState.js', () => ({ setAttuneFlash: vi.fn(), setHumResonance: vi.fn() }));
vi.mock('../../systems/registration.js', () => ({
  nearest: { deerDist2: Infinity, jellyDist2: Infinity, mothDist2: Infinity, puffDist2: Infinity },
}));
vi.mock('../../systems/attunement.js', () => ({
  getJellyPostTimer: () => 0, JELLY_POST_ATTUNE_WINDOW: 20,
}));

let updateSpiritHumVisuals, setPerspective, revealTruth;
beforeEach(async () => {
  vi.resetModules();
  H.hint = null;
  H.writes = 0;
  ({ updateSpiritHumVisuals } = await import('../spiritHumVisuals.js'));
  ({ setPerspective, revealTruth } = await import('../../state/narrativeState.js'));
  setPerspective('child');
});

const frame = () => updateSpiritHumVisuals(0.016);
const hint = (type, dist) => { H.hint = { type, dist }; };

describe('the far-field hint', () => {
  it('says what it said before, to a child', () => {
    hint('moth', 17.2);
    frame();
    expect(H.el.textContent).toBe('Pitch matches moon moth — move closer (~17m)');
    expect(H.el.style.display).toBe('block');
  });

  it('names the species the adult way, to an adult, with the range', () => {
    setPerspective('adult');
    hint('moth', 17.2);
    frame();
    expect(H.el.textContent).toContain('orbital pollinator');
    expect(H.el.textContent).toContain('~17m');
    expect(H.el.textContent).not.toContain('moon moth');
  });

  it('shows both registers once the veil is lifted', () => {
    revealTruth();
    hint('deer', 22);
    frame();
    expect(H.el.textContent).toContain('Pitch matches deer');
    expect(H.el.textContent).toContain('biological metronome');
  });

  it('follows the range as it changes', () => {
    hint('puff', 30.4);
    frame();
    expect(H.el.textContent).toContain('~30m');
    hint('puff', 24.6);
    frame();
    expect(H.el.textContent).toContain('~25m');
  });

  it('rewrites the text only when the creature, the rounded range or the register changes', () => {
    hint('jelly', 28.4);
    frame();
    const base = H.writes;
    for (let i = 0; i < 100; i++) frame();            // 100 frames of the same hint
    expect(H.writes).toBe(base);

    hint('jelly', 28.2);                              // moved, but still rounds to 28
    for (let i = 0; i < 10; i++) frame();
    expect(H.writes).toBe(base);

    hint('jelly', 27.4);                              // rounds to 27: one rewrite
    frame();
    expect(H.writes).toBe(base + 1);

    setPerspective('adult');                          // Tab: one rewrite
    frame();
    expect(H.writes).toBe(base + 2);
  });

  it('re-words the moment the veil lifts, even when nothing else moved', () => {
    setPerspective('adult');
    hint('jelly', 20);
    frame();
    expect(H.el.textContent).not.toContain('Pitch matches');   // the adult half alone
    revealTruth();
    frame();
    expect(H.el.textContent).toContain('Pitch matches');       // both halves now
    expect(H.el.textContent).toContain('Band match');
  });

  it('hides when the pitch leaves the band', () => {
    hint('deer', 22);
    frame();
    H.hint = null;
    frame();
    expect(H.el.style.display).toBe('none');
  });
});

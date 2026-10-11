/**
 * The title screen's "click to begin" on a phone.
 *
 * A phone has nothing to click, and the title is the first line anyone reads.
 * These tests build the real title card against a stand-in page and read the
 * one element the player reads, once for each platform and, for the second
 * prompt, once for each register.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Inert stand-ins for the elements the card is built from: the title test
// reads text, so everything else only has to accept being touched.
function fakeEl() {
  return {
    style: {}, children: [], textContent: '', innerHTML: '', id: '',
    appendChild(c) { this.children.push(c); return c; },
    addEventListener() {}, setAttribute() {},
    getContext: () => null,
  };
}

vi.stubGlobal('document', {
  createElement: () => fakeEl(),
  getElementById: () => null,
  body: { appendChild() {} },
});
vi.stubGlobal('requestAnimationFrame', () => 0);

vi.mock('../elements.js', () => ({
  buildTree: () => fakeEl(),
  buildMushrooms: () => [],
  buildPufflings: () => [],
}));
vi.mock('../effects.js', () => ({
  initEffects: vi.fn(), animateTitle: vi.fn(), cleanupEffects: vi.fn(),
}));

let intro, setTouchPlatform, setPerspective, revealTruth;
let titleSub = null;

beforeEach(async () => {
  vi.resetModules();
  // The title's second line is the only element given this text; capture the
  // element by the text the card gives it, whichever platform is asked for.
  titleSub = null;
  const make = () => {
    const el = fakeEl();
    let t = '';
    Object.defineProperty(el, 'textContent', {
      get: () => t,
      set: (v) => { t = v; if (/to (begin|initialize)/.test(v)) titleSub = el; },
    });
    return el;
  };
  document.createElement = make;
  ({ setTouchPlatform } = await import('../../../narrative/controls.js'));
  ({ setPerspective, revealTruth } = await import('../../../state/narrativeState.js'));
  intro = await import('../index.js');
  setPerspective('child');
});

describe('the title prompt', () => {
  it('says tap on a phone', () => {
    setTouchPlatform(true);
    intro.initIntro(() => {});
    expect(titleSub.textContent).toBe('tap to begin');
  });

  it('says click on a desktop', () => {
    setTouchPlatform(false);
    intro.initIntro(() => {});
    expect(titleSub.textContent).toBe('click to begin');
  });

  it('says initialize to an adult, with the platform word', () => {
    setTouchPlatform(true);
    setPerspective('adult');
    intro.initIntro(() => {});
    expect(titleSub.textContent).toBe('tap to initialize');
  });

  it('is re-worded for a new forest when a save is offered, still on the right platform', () => {
    setTouchPlatform(true);
    intro.initIntro(() => {});
    intro.enableContinue(() => {});
    expect(titleSub.textContent).toBe('tap to begin a new forest');
  });
});

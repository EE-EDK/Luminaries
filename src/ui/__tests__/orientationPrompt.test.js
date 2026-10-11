/**
 * The landscape prompt: shown to a touch device held upright, gone when it is
 * turned, never shown to a desktop, and never able to stop the page loading.
 *
 * The DOM and the media query are injected, so each rule is exercised against
 * a stand-in that can be rotated by hand. The failure modes that matter most
 * are the silent ones: a prompt that appears on desktop, or one that throws
 * on a browser without matchMedia and takes the boot sequence with it.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  shouldPromptLandscape, landscapeCopy, initOrientationPrompt,
  isLandscapePromptShown, resetOrientationPrompt,
} from '../orientationPrompt.js';
import { LANDSCAPE_PROMPT } from '../../narrative/lines.js';
import { tokensIn, TERMS } from '../../narrative/glossary.js';
import { emit, Events } from '../../kernel/eventBus.js';
import { setPerspective } from '../../state/narrativeState.js';

/** A just-enough element. */
function fakeEl() {
  const el = {
    style: {}, children: [], attrs: {}, listeners: {}, textContent: '', removed: false,
    setAttribute(k, v) { el.attrs[k] = v; },
    appendChild(c) { el.children.push(c); return c; },
    addEventListener(t, fn) { (el.listeners[t] = el.listeners[t] || []).push(fn); },
    remove() { el.removed = true; },
    fire(t, ev = {}) { (el.listeners[t] || []).forEach((fn) => fn(ev)); },
  };
  return el;
}

/** A page, plus a media query the test can rotate. */
function fakePage({ portrait = true, legacyListener = false } = {}) {
  const body = fakeEl();
  const handlers = [];
  const mq = {
    matches: portrait,
    // The two ways a browser lets you listen. Old Safari only has addListener.
    ...(legacyListener
      ? { addListener(fn) { handlers.push(fn); }, removeListener(fn) { handlers.splice(handlers.indexOf(fn), 1); } }
      : { addEventListener(t, fn) { if (t === 'change') handlers.push(fn); }, removeEventListener(t, fn) { handlers.splice(handlers.indexOf(fn), 1); } }),
  };
  const queries = [];
  const win = { matchMedia(q) { queries.push(q); return mq; } };
  const doc = { body, createElement: () => fakeEl() };
  return {
    win, doc, body, mq, queries, handlers,
    rotate(toPortrait) { mq.matches = toPortrait; handlers.slice().forEach((fn) => fn({ matches: toPortrait })); },
  };
}

const card = (page) => page.body.children[0];
/** What a browser would resolve: an inline display set later wins over the one in cssText. */
const disp = (el) => el.style.display || (el.style.cssText.match(/display:(\w+)/) || [])[1];

beforeEach(() => { resetOrientationPrompt(); setPerspective('child'); });

describe('the decision', () => {
  it('wants the prompt only on a touch device held upright', () => {
    expect(shouldPromptLandscape(true, true)).toBe(true);
    expect(shouldPromptLandscape(true, false)).toBe(false);
    expect(shouldPromptLandscape(false, true)).toBe(false);
    expect(shouldPromptLandscape(false, false)).toBe(false);
  });

  it('stays down once the player has waved it away', () => {
    expect(shouldPromptLandscape(true, true, true)).toBe(false);
  });
});

describe('on a touch device', () => {
  it('shows the card when the device is upright', () => {
    const page = fakePage({ portrait: true });
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    expect(el).toBe(card(page));
    expect(page.queries).toEqual(['(orientation: portrait)']);
    expect(disp(el)).toBe('flex');
    expect(isLandscapePromptShown()).toBe(true);
    expect(el.attrs['aria-hidden']).toBe('false');
  });

  it('does not show it when the device is already sideways', () => {
    const page = fakePage({ portrait: false });
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    expect(disp(el)).toBe('none');
    expect(isLandscapePromptShown()).toBe(false);
  });

  it('goes away on rotate and comes back if it is turned upright again', () => {
    const page = fakePage({ portrait: true });
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    page.rotate(false);
    expect(disp(el)).toBe('none');
    expect(el.attrs['aria-hidden']).toBe('true');
    page.rotate(true);
    expect(disp(el)).toBe('flex');
  });

  it('listens the old way on a browser that has only addListener', () => {
    const page = fakePage({ portrait: true, legacyListener: true });
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    expect(page.handlers.length).toBe(1);
    page.rotate(false);
    expect(disp(el)).toBe('none');
  });

  it('can be waved away with a tap, and a real rotation lifts the wave', () => {
    const page = fakePage({ portrait: true });
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    let stopped = false;
    el.fire('click', { stopPropagation() { stopped = true; } });
    expect(stopped, 'the tap must not reach the canvas underneath').toBe(true);
    expect(disp(el)).toBe('none');
    page.rotate(false);
    page.rotate(true);
    expect(disp(el)).toBe('flex');
  });

  it('swallows touches so the intro does not start from under the card', () => {
    const page = fakePage({ portrait: true });
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    for (const t of ['touchstart', 'mousedown', 'click']) {
      let stopped = false;
      el.fire(t, { stopPropagation() { stopped = true; } });
      expect(stopped, t).toBe(true);
    }
  });

  it('covers the whole screen, above the title card and the panels', () => {
    const page = fakePage();
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    expect(el.style.cssText).toMatch(/position:fixed;top:0;left:0;right:0;bottom:0/);
    const z = Number(el.style.cssText.match(/z-index:(\d+)/)[1]);
    expect(z).toBeGreaterThan(400);
  });

  it('keeps its own text clear of a cut-out', () => {
    const page = fakePage();
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    for (const e of ['top', 'right', 'bottom', 'left']) expect(el.style.cssText).toContain(`env(safe-area-inset-${e}`);
  });

  it('scales its text with the text-size setting and animates nothing', () => {
    const page = fakePage();
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    for (const c of el.children) expect(c.style.cssText).toContain('--lumi-text-scale');
    // Nothing fades or spins, so reduced motion has nothing to switch off.
    const all = [el, ...el.children].map((x) => x.style.cssText).join(';');
    expect(all).not.toMatch(/transition|animation/);
  });

  it('is built once however often it is asked', () => {
    const page = fakePage();
    const a = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    const b = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    expect(b).toBe(a);
    expect(page.body.children.length).toBe(1);
    expect(page.handlers.length).toBe(1);
  });
});

describe('where it must not exist', () => {
  it('builds nothing on a desktop, even in a tall window', () => {
    const page = fakePage({ portrait: true });
    expect(initOrientationPrompt({ isTouch: false, win: page.win, doc: page.doc })).toBeNull();
    expect(page.body.children.length).toBe(0);
    expect(page.queries.length).toBe(0);
    expect(isLandscapePromptShown()).toBe(false);
  });

  it('builds nothing, and does not throw, when matchMedia is missing', () => {
    const page = fakePage();
    delete page.win.matchMedia;
    let el;
    expect(() => { el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc }); }).not.toThrow();
    expect(el).toBeNull();
    expect(page.body.children.length).toBe(0);
    expect(isLandscapePromptShown()).toBe(false);
  });

  it('builds nothing when matchMedia throws or hands back something unusable', () => {
    for (const mm of [() => { throw new Error('nope'); }, () => null, () => ({}), () => ({ matches: 'yes' })]) {
      const page = fakePage();
      page.win.matchMedia = mm;
      expect(initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc })).toBeNull();
      expect(page.body.children.length).toBe(0);
    }
  });

  it('builds nothing without a page at all', () => {
    expect(initOrientationPrompt({ isTouch: true })).toBeNull();
    expect(initOrientationPrompt()).toBeNull();
  });
});

describe('the words', () => {
  it('has all three lines, each with a child half and an adult half that differ', () => {
    // lines.test.js only sees a pair that already has both halves, so a half
    // that went missing would drop out of its scan instead of failing it.
    expect(Object.keys(LANDSCAPE_PROMPT).sort()).toEqual(['dismiss', 'sub', 'title']);
    for (const [k, p] of Object.entries(LANDSCAPE_PROMPT)) {
      expect(typeof p.child, `${k}.child`).toBe('string');
      expect(typeof p.adult, `${k}.adult`).toBe('string');
      expect(p.child.length, `${k}.child`).toBeGreaterThan(0);
      expect(p.adult.length, `${k}.adult`).toBeGreaterThan(0);
      expect(p.child, k).not.toBe(p.adult);
    }
  });

  it('speaks in the chosen voice with no token left on screen', () => {
    for (const voice of ['child', 'adult']) {
      const c = landscapeCopy({ voice });
      for (const k of ['title', 'sub', 'dismiss']) {
        expect(c[k].length, `${voice}.${k}`).toBeGreaterThan(0);
        expect(c[k], `${voice}.${k}`).not.toMatch(/[{}]/);
      }
    }
    expect(landscapeCopy({ voice: 'child' }).title).not.toBe(landscapeCopy({ voice: 'adult' }).title);
  });

  it('names the Sun-Seeds through the glossary, in each register\'s own word', () => {
    expect(landscapeCopy({ voice: 'child' }).sub).toContain('Sun-Seeds');
    expect(landscapeCopy({ voice: 'adult' }).sub).toContain('resonance anchors');
    for (const half of ['child', 'adult']) {
      for (const k of Object.keys(LANDSCAPE_PROMPT)) {
        for (const t of tokensIn(LANDSCAPE_PROMPT[k][half])) expect(TERMS[t.key], `${k}.${half}`).toBeDefined();
      }
    }
  });

  it('gives both registers once the veil is lifted', () => {
    const both = landscapeCopy({ voice: 'child', truthRevealed: true });
    expect(both.title).toContain('Turn me sideways!');
    expect(both.title).toContain('Rotate to landscape');
  });

  it('redraws in the other voice if the player flips register while it is up', () => {
    const page = fakePage();
    const el = initOrientationPrompt({ isTouch: true, win: page.win, doc: page.doc });
    expect(el.children[0].textContent).toBe('Turn me sideways!');
    setPerspective('adult');
    emit(Events.PERSPECTIVE_CHANGED, { perspective: 'adult', truthRevealed: false });
    expect(el.children[0].textContent).toBe('Rotate to landscape');
  });
});

/**
 * M5.4 gate: the game on a phone.
 *
 * Five things here can only be read off a running page.
 *
 * Safe areas. A node test can read that every pinned element says `env(...)`;
 * it cannot say where the element ends up. This drives Chromium's own
 * safe-area emulation (Emulation.setSafeAreaInsetsOverride) so that env() really
 * resolves to a notch, then measures rectangles: every corner-pinned control
 * must move by exactly its edge's inset, and must not land inside it. The
 * baseline is measured first with no insets, so "moved by 47px" is a
 * difference of two readings and not a claim about a layout.
 *
 * The landscape prompt. Held upright, a touch device gets the card; sideways it
 * does not; tapping it away holds until the next rotation; a desktop never gets
 * it; a browser with no matchMedia must neither show it nor stop the page.
 *
 * Touch look. A real touch drag (CDP Input.dispatchTouchEvent, which goes
 * through the browser's own hit-testing and the canvas's own listeners) must
 * turn the camera exactly as far as the same drag with the mouse, at more than
 * one sensitivity, with the Y axis normal and inverted.
 *
 * Quality start. A touch device opens the adaptive scaler at notch 2, a
 * desktop at 0, and a saved quality floor wins over the mobile default. The
 * scaler ignores its first 30 frames, which under SwiftShader is several
 * seconds, so the notch is read the moment the debug surface appears and the
 * frame counter is checked to prove it was read inside that window.
 *
 * And the first assertion of every context is that the frame loop is turning,
 * read off the game's own counter. A build cannot see a missing import.
 *
 * Not verifiable here: a real notch or home indicator (the emulation moves the
 * inset, not the glass), a real rotation (this resizes the viewport, which is
 * what the orientation query reads, but not the sensor or the OS animation),
 * and how any of it feels under a thumb.
 *
 * Needs the dev server (LumiDebug is dev-only): LUMI_URL, default :5173.
 * LUMI_TIMEOUT (ms) raises every ceiling; the default is generous because this
 * runs on a shared machine under a software rasteriser.
 */
import { chromium } from 'playwright';

const URL = process.env.LUMI_URL || 'http://localhost:5173/';
const T = Number(process.env.LUMI_TIMEOUT || 240000);
// LUMI_ONLY=A, B, C or any run of them narrows a seeded re-run to the context under test.
const ONLY = process.env.LUMI_ONLY || 'ABC';
// Ceiling for a state change once the page is up (a rotation, a tap). Boot gets T.
const W = Number(process.env.LUMI_WAIT || 60000);
const ok = [], bad = [], notes = [];
const check = (n, pass, d) => (pass ? ok : bad).push(`${n}${d ? ` — ${d}` : ''}`);
const near = (a, b, tol = 0.51) => Math.abs(a - b) <= tol;

const browser = await chromium.launch({
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'],
});

/** Run a probe in the page, or record a failure and return null. */
async function probe(page, name, fn, arg) {
  try {
    return await page.evaluate(fn, arg);
  } catch (e) {
    bad.push(`${name} — threw in the page: ${String(e).split('\n')[0]}`);
    return null;
  }
}

/**
 * Wait for a condition in the page and record the outcome by name. A wait that
 * times out is a failed check, not the end of the run: everything after it
 * still gets measured.
 */
async function until(page, name, fn, arg) {
  try {
    await page.waitForFunction(fn, arg, { timeout: W });
    check(name, true);
    return true;
  } catch (e) {
    bad.push(`${name} — not seen within ${W} ms`);
    return false;
  }
}

/**
 * Open a page in a fresh context, wait for the debug surface, and hand back
 * what a gate needs: the page, its context, the errors seen, and the quality
 * report read the moment the surface appeared.
 */
async function open(label, ctxOpts, { initScript } = {}) {
  try {
    return await openUnsafe(label, ctxOpts, { initScript });
  } catch (e) {
    // A page that never gets as far as the debug surface is a finding, not a
    // reason to end the run without a report.
    bad.push(`${label}: the page never reached the debug surface — ${String(e).split('\n')[0]}`);
    return null;
  }
}

async function openUnsafe(label, ctxOpts, { initScript } = {}) {
  const ctx = await browser.newContext(ctxOpts);
  const page = await ctx.newPage();
  page.setDefaultTimeout(T);
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  if (initScript) await page.addInitScript(initScript);
  await page.goto(URL, { waitUntil: 'load', timeout: T });
  await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: T });
  const early = await probe(page, `${label}: the early quality read`, () => ({
    q: window.LumiDebug.quality(), frames: window.LumiDebug.perf().fps.frames,
  }));
  return { label, ctx, page, errors, early };
}

/** The frame loop, by the game's own counter. */
async function loopTurns(c) {
  const loop = await probe(c.page, `${c.label}: the frame loop is running`, async () => {
    const before = window.LumiDebug.perf().fps.frames;
    await new Promise((r) => setTimeout(r, 2500));
    return { before, after: window.LumiDebug.perf().fps.frames };
  });
  if (loop) check(`${c.label}: the frame loop is running`, loop.after > loop.before, `frames ${loop.before} -> ${loop.after}`);
}

const TOUCH = { hasTouch: true, isMobile: true };

// ===================================================================
// A. A phone, upright. Prompt, then safe areas, then look, then quality.
// ===================================================================
const A = ONLY.includes('A') ? await open('phone', { viewport: { width: 390, height: 844 }, ...TOUCH }) : null;
if (A) try {
  await loopTurns(A);
  const { page } = A;

  // --- the viewport asks for the whole screen -------------------------------
  const vp = await probe(page, 'viewport meta', () => document.querySelector('meta[name=viewport]')?.content || '');
  check('the page asks for the whole screen (viewport-fit=cover)', /viewport-fit=cover/.test(vp || ''), vp);

  // --- quality start (read before the scaler's warm-up ends) ----------------
  if (A.early) {
    check('a touch device opens the scaler at notch 2', A.early.q.notch === 2, `notch=${A.early.q.notch} maxNotch=${A.early.q.maxNotch}`);
    check('...and that read was inside the scaler\'s warm-up window', A.early.frames <= 30, `frames=${A.early.frames}`);
  }

  // --- the landscape prompt, upright ----------------------------------------
  const card = () => probe(page, 'the prompt card', () => {
    const el = document.getElementById('orientation-prompt');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      display: getComputedStyle(el).display, w: r.width, h: r.height, left: r.left, top: r.top,
      title: el.children[0]?.textContent || '', sub: el.children[1]?.textContent || '',
      vw: innerWidth, vh: innerHeight, z: getComputedStyle(el).zIndex,
    };
  });
  let c0 = await card();
  check('upright, a touch device is shown the prompt', c0 && c0.display === 'flex', JSON.stringify(c0 && { display: c0.display }));
  if (c0) {
    check('it covers the whole screen', near(c0.w, c0.vw) && near(c0.h, c0.vh) && near(c0.left, 0) && near(c0.top, 0), `${c0.w}x${c0.h} of ${c0.vw}x${c0.vh}`);
    check('it sits above the panels', Number(c0.z) > 400, `z=${c0.z}`);
    check('it speaks the child voice first', c0.title === 'Turn me sideways!', c0.title);
    check('it names the Sun-Seeds through the glossary', /Sun-Seeds/.test(c0.sub) && !/[{}]/.test(c0.sub), c0.sub);
  }
  await probe(page, 'flip to adult', () => window.LumiDebug.setVoice('adult'));
  const c1 = await card();
  check('flipping the register redraws the card in the adult voice',
    c1 && c1.title === 'Rotate to landscape' && /resonance anchors/.test(c1.sub), c1 && c1.title);
  await probe(page, 'flip to child', () => window.LumiDebug.setVoice('child'));

  // --- notches: the card keeps its text inside the safe area ----------------
  const cdp = await A.ctx.newCDPSession(page);
  const setInsets = (i) => cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: i });
  const INS = { top: 44, left: 47, right: 47, bottom: 21 };
  await setInsets({ top: 44, left: 0, right: 0, bottom: 34 });   // upright: a notch and a home bar
  // The card is centred, so its text is nowhere near an edge to begin with;
  // what has to hold is the padding that keeps it clear when the content is
  // tall, read as the browser resolved it: 24px plus the inset on each side.
  const padded = await probe(page, 'card padding', () => {
    const cs = getComputedStyle(document.getElementById('orientation-prompt'));
    return { top: parseFloat(cs.paddingTop), bottom: parseFloat(cs.paddingBottom), left: parseFloat(cs.paddingLeft), right: parseFloat(cs.paddingRight) };
  });
  check('upright, the card pads itself clear of the notch and the home bar',
    padded && near(padded.top, 24 + 44) && near(padded.bottom, 24 + 34) && near(padded.left, 24) && near(padded.right, 24), JSON.stringify(padded));
  await setInsets({ top: 0, left: 0, right: 0, bottom: 0 });

  // --- waving it away, and a real rotation lifting the wave -----------------
  await page.touchscreen.tap(195, 420);
  await until(page, 'a tap waves the card away', () => getComputedStyle(document.getElementById('orientation-prompt')).display === 'none');
  await page.setViewportSize({ width: 844, height: 390 });
  await until(page, '(the viewport really turned sideways)', () => matchMedia('(orientation: landscape)').matches);
  c0 = await card();
  check('sideways, there is no card', c0 && c0.display === 'none', c0 && c0.display);
  await page.setViewportSize({ width: 390, height: 844 });
  await until(page, 'turned upright again, the card returns even after being waved away', () => getComputedStyle(document.getElementById('orientation-prompt')).display === 'flex');
  await page.setViewportSize({ width: 844, height: 390 });
  await until(page, 'and goes the moment the device is sideways', () => getComputedStyle(document.getElementById('orientation-prompt')).display === 'none');

  // --- safe areas, sideways, on the interface the player lives in ----------
  // Start the world: the title card would otherwise cover everything and the
  // quest HUD is hidden until then.
  await probe(page, 'skip intro', () => window.LumiDebug.skipIntro());
  // Elements that are display:none until something needs them are forced into
  // layout for the measurement and put back; the question is where they would
  // be, not whether the game is showing them right now.
  const PINNED = [
    ['#hud', ['top', 'left']],
    ['#orb-hud', ['top', 'right']],
    ['#settings-handle', ['top', 'right']],
    ['#dev-skip-toggle', ['top', 'right']],
    ['#joy-zone', ['bottom', 'left']],
    ['#btn-jump', ['bottom', 'right']],
    ['#btn-sprint', ['bottom', 'right']],
    ['#hum-slider', ['bottom', 'left']],
    ['#controls', ['bottom']],
  ];
  const measure = (sels) => probe(page, 'pinned rects', (list) => {
    const out = {};
    for (const s of list) {
      const el = document.querySelector(s);
      if (!el) { out[s] = null; continue; }
      const was = el.style.display;
      if (getComputedStyle(el).display === 'none') el.style.display = 'block';
      const r = el.getBoundingClientRect();
      out[s] = { top: r.top, left: r.left, right: r.right, bottom: r.bottom, w: r.width, h: r.height };
      el.style.display = was;
    }
    return { rects: out, vw: innerWidth, vh: innerHeight };
  }, sels);
  const sels = PINNED.map((p) => p[0]);
  await setInsets({ top: 0, left: 0, right: 0, bottom: 0 });
  const base = await measure(sels);
  await setInsets(INS);
  // The override applies on the next style recalculation; wait for the first
  // pinned element to have moved rather than for a fixed time.
  await until(page, '(the emulated insets took effect)', ({ s, left }) => document.querySelector(s).getBoundingClientRect().left >= left, { s: '#hud', left: 47 + 5 });
  const withIns = await measure(sels);
  if (base && withIns) {
    check('the pinned list is all there', sels.every((s) => base.rects[s] && withIns.rects[s]), sels.filter((s) => !base.rects[s]).join(','));
    for (const [sel, edges] of PINNED) {
      const a = base.rects[sel], b = withIns.rects[sel];
      if (!a || !b) continue;
      for (const edge of edges) {
        const d = edge === 'top' ? b.top - a.top : edge === 'left' ? b.left - a.left
          : edge === 'right' ? a.right - b.right : a.bottom - b.bottom;
        check(`${sel} moves in from the ${edge} by the whole inset`, near(d, INS[edge]), `moved ${d.toFixed(1)}px, inset ${INS[edge]}px`);
      }
      // The hum slider is 280px tall and sits above a 150px joystick zone, so on
      // a 390px-tall landscape screen its top is already off the glass with no
      // inset at all. That is the slider's geometry, not the safe area: it is
      // reported below as an observation instead of failing every other
      // check here for something this milestone did not introduce.
      const tallSlider = sel === '#hum-slider';
      check(`${sel} lands inside the safe area${tallSlider ? ' (sides and bottom)' : ''}`,
        (tallSlider || b.top >= INS.top - 0.5) && b.left >= INS.left - 0.5 && b.right <= base.vw - INS.right + 0.5 && b.bottom <= base.vh - INS.bottom + 0.5,
        `top ${b.top.toFixed(0)} left ${b.left.toFixed(0)} right ${b.right.toFixed(0)}/${base.vw - INS.right} bottom ${b.bottom.toFixed(0)}/${base.vh - INS.bottom}`);
      if (tallSlider && a.top < 0) notes.push(`the HUM slider's top is ${(-a.top).toFixed(0)}px above the screen in landscape (${base.vh}px tall) with no inset: ${a.h.toFixed(0)}px tall above a 150px joystick zone. Present before this milestone; needs a layout decision.`);
    }
    // The pair that must keep clear of each other, which is the whole reason
    // the orb count's offset is computed from the same inset as the gear.
    const orb = withIns.rects['#orb-hud'], gear = withIns.rects['#settings-handle'];
    check('the orb count still clears the gear, with the cut-out in', orb.right <= gear.left + 0.5, `orb right ${orb.right.toFixed(0)}, gear left ${gear.left.toFixed(0)}`);
  }

  // The floating text: where it can collide with a cut-out on the long edge.
  const text = await probe(page, 'discovery text and captions', () => {
    window.LumiDebug.pair('A very long line of child narration that wants to span as much of the screen as it can possibly manage before it wraps',
      'A very long line of adult narration that wants to span as much of the screen as it can possibly manage before it wraps', 60);
    const d = document.getElementById('discovery-text').getBoundingClientRect();
    const cap = document.getElementById('sound-captions');
    const prev = [cap.textContent, cap.style.opacity];
    cap.textContent = 'a long caption that is meant to reach as far across the screen as the caption box will let it go';
    cap.style.opacity = '1';
    const c = cap.getBoundingClientRect();
    cap.textContent = prev[0]; cap.style.opacity = prev[1];
    const nb = document.getElementById('notebook-root');
    let n = null;
    if (nb) { const was = nb.style.display; nb.style.display = 'block'; const r = nb.getBoundingClientRect(); n = { left: r.left, right: r.right, top: r.top, bottom: r.bottom }; nb.style.display = was; }
    return { d: { left: d.left, right: d.right, top: d.top, w: d.width }, c: { left: c.left, right: c.right, bottom: c.bottom }, n, vw: innerWidth, vh: innerHeight };
  });
  if (text) {
    check('the discovery line stays between the cut-outs', text.d.left >= INS.left && text.d.right <= text.vw - INS.right && text.d.top >= INS.top,
      `left ${text.d.left.toFixed(0)} right ${text.d.right.toFixed(0)}/${text.vw - INS.right} top ${text.d.top.toFixed(0)}`);
    check('the sound caption stays between the cut-outs and above the home bar',
      text.c.left >= INS.left && text.c.right <= text.vw - INS.right && text.c.bottom <= text.vh - INS.bottom,
      `left ${text.c.left.toFixed(0)} right ${text.c.right.toFixed(0)} bottom ${text.c.bottom.toFixed(0)}/${text.vh - INS.bottom}`);
    check('the notebook stays between the cut-outs', text.n && text.n.left >= INS.left && text.n.right <= text.vw - INS.right && text.n.top >= INS.top && text.n.bottom <= text.vh - INS.bottom,
      JSON.stringify(text.n));
  }
  await setInsets({ top: 0, left: 0, right: 0, bottom: 0 });

  // --- touch look is the mouse's look ---------------------------------------
  // Real touches through the browser, real mouse events through the page. The
  // yaw is read back through LumiDebug (same module instance as the game).
  const touchDrag = async (x0, y0, x1, y1) => {
    const pt = (x, y) => [{ x, y, id: 1, radiusX: 4, radiusY: 4, force: 1 }];
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pt(x0, y0) });
    const steps = 4;
    for (let i = 1; i <= steps; i++) {
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pt(x0 + (x1 - x0) * i / steps, y0 + (y1 - y0) * i / steps) });
    }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  };
  const mouseDrag = (dx, dy) => probe(page, 'mouse drag', ([mx, my]) => {
    const cv = document.querySelector('canvas');
    cv.dispatchEvent(new MouseEvent('mousedown', { button: 0, bubbles: true }));
    window.dispatchEvent(new MouseEvent('mousemove', { movementX: mx, movementY: my, bubbles: true }));
    window.dispatchEvent(new MouseEvent('mouseup', { button: 0, bubbles: true }));
  }, [dx, dy]);
  const setSetting = (k, v) => probe(page, `set ${k}`, async ([key, val]) => {
    const m = await import('/src/state/settingsState.js');
    m.setSetting(key, val);
  }, [k, v]);
  const look = () => probe(page, 'read look', () => window.LumiDebug.look());
  const MOUSE_SENS = 0.003;

  for (const [sens, invert] of [[1, false], [2.5, false], [1.5, true]]) {
    await setSetting('lookSensitivity', sens);
    await setSetting('invertY', invert);
    const applied = await probe(page, 'applied', () => window.LumiDebug.settings().applied);
    check(`sensitivity ${sens}${invert ? ' inverted' : ''} reached the input module`, applied && applied.lookSensitivity === sens && applied.invertY === invert,
      JSON.stringify(applied && { s: applied.lookSensitivity, i: applied.invertY }));

    await probe(page, 'aim', () => window.LumiDebug.look(0, 0));
    await touchDrag(500, 200, 600, 250);                  // +100 px right, +50 px down
    const t = await look();
    await probe(page, 'aim', () => window.LumiDebug.look(0, 0));
    await mouseDrag(100, 50);
    const m = await look();
    const wantYaw = -100 * MOUSE_SENS * sens;
    const wantPitch = -50 * MOUSE_SENS * sens * (invert ? -1 : 1);
    if (t && m) {
      check(`touch drag turns yaw by the sensitivity (${sens})`, near(t.yaw, wantYaw, 1e-6), `yaw ${t.yaw} want ${wantYaw}`);
      check(`touch drag turns pitch by the sensitivity and the invert setting (${sens}${invert ? ', inverted' : ''})`, near(t.pitch, wantPitch, 1e-6), `pitch ${t.pitch} want ${wantPitch}`);
      check(`the mouse turns exactly as far as the touch (${sens}${invert ? ', inverted' : ''})`, near(t.yaw, m.yaw, 1e-9) && near(t.pitch, m.pitch, 1e-9),
        `touch ${t.yaw.toFixed(5)},${t.pitch.toFixed(5)} mouse ${m.yaw.toFixed(5)},${m.pitch.toFixed(5)}`);
    }
  }
  check('nothing threw on the phone', A.errors.length === 0, A.errors.slice(0, 3).join(' | '));
} catch (e) {
  bad.push(`phone context — the gate itself failed: ${String(e).split('\n')[0]}`);
} finally {
  await A.ctx.close().catch(() => {});
}

// ===================================================================
// B. A phone with a saved quality floor, in a browser with no matchMedia.
// ===================================================================
const B = !ONLY.includes('B') ? null : await open('phone, floor 1, no matchMedia', { viewport: { width: 390, height: 844 }, ...TOUCH }, {
  initScript: () => {
    try { localStorage.setItem('lumi.settings.v1', JSON.stringify({ qualityFloor: 1 })); } catch (_) {}
    // A browser that cannot answer the question. Deleted off the prototype
    // chain as well as the instance so nothing can reach it by another route.
    try { delete window.matchMedia; } catch (_) {}
    try { Object.defineProperty(window, 'matchMedia', { value: undefined, configurable: true }); } catch (_) {}
  },
});
if (B) try {
  await loopTurns(B);
  if (B.early) {
    check('a saved quality floor beats the mobile default', B.early.q.notch === 1 && B.early.q.maxNotch === 1, `notch=${B.early.q.notch} maxNotch=${B.early.q.maxNotch}`);
    check('...read inside the warm-up window', B.early.frames <= 30, `frames=${B.early.frames}`);
  }
  const gone = await probe(B.page, 'matchMedia gone', () => ({
    mm: typeof window.matchMedia, card: !!document.getElementById('orientation-prompt'),
    canvas: !!document.querySelector('canvas'),
  }));
  check('(the stand-in really removed matchMedia)', gone && gone.mm === 'undefined', JSON.stringify(gone));
  check('with no matchMedia there is no card, and the game booted anyway', gone && !gone.card && gone.canvas, JSON.stringify(gone));
  check('nothing threw without matchMedia', B.errors.length === 0, B.errors.slice(0, 3).join(' | '));
} catch (e) {
  bad.push(`no-matchMedia context — the gate itself failed: ${String(e).split('\n')[0]}`);
} finally {
  await B.ctx.close().catch(() => {});
}

// ===================================================================
// C. A desktop in a tall window: no card, full quality, no phone controls.
// ===================================================================
const C = ONLY.includes('C') ? await open('desktop', { viewport: { width: 390, height: 844 } }) : null;
if (C) try {
  await loopTurns(C);
  if (C.early) {
    check('a desktop opens the scaler at full quality', C.early.q.notch === 0, `notch=${C.early.q.notch}`);
    check('...read inside the warm-up window', C.early.frames <= 30, `frames=${C.early.frames}`);
  }
  const d = await probe(C.page, 'desktop DOM', () => ({
    portrait: matchMedia('(orientation: portrait)').matches,
    card: !!document.getElementById('orientation-prompt'),
    joy: getComputedStyle(document.getElementById('joy-zone')).display,
  }));
  check('(the window really is portrait)', d && d.portrait === true, JSON.stringify(d));
  check('a desktop never gets the card, however tall the window', d && !d.card, JSON.stringify(d));
  check('nothing threw on the desktop', C.errors.length === 0, C.errors.slice(0, 3).join(' | '));
} catch (e) {
  bad.push(`desktop context — the gate itself failed: ${String(e).split('\n')[0]}`);
} finally {
  await C.ctx.close().catch(() => {});
}

await browser.close();
console.log([...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`)].join('\n'));
console.log(`\n${ok.length} passed, ${bad.length} failed`);
for (const n of notes) console.log(`  NOTE  ${n}`);
process.exit(bad.length ? 1 : 0);

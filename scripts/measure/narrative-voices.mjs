/**
 * M3.3 / M3.4 gate: every new line reaches the DOM, in the right register, and
 * the hidden layer happens when it should and not when it should not.
 *
 * Nothing here asks the code what it meant to show. Each probe reads the
 * overlay the player reads (`#discovery-text`, through LumiDebug.voice().onScreen)
 * or the material the player sees (rune colours, through LumiDebug.runeFlip()),
 * and the expected words are computed from lines.js by the same renderer the
 * game uses, so a reworded line does not break the gate and a line that never
 * arrives does.
 *
 * What it drives, in order:
 *   1. The title prompt, on a desktop context and on a touch context: "click"
 *      on one, "tap" on the other.
 *   2. The frame loop. The game's own counter must move; a build cannot see a
 *      missing import, and a dead loop is how one shows.
 *   3. A house memory: dusk, stand still beside a village.
 *   4. A glyph echo: read a glyph, hold a creature's band beside it.
 *   5. The wizard, beat by beat, each beat in both registers (Tab is flipped
 *      while a beat is up and the DOM re-read).
 *   6. The first fragment, and then all five and the joining line.
 *   7. Tab at the obelisk: the runes turn to the archive pink and back, and do
 *      not turn when the player is looking away.
 *
 * Timing: under SwiftShader the scene renders at single-digit FPS and the game
 * clamps dt, so game seconds pass much more slowly than wall-clock ones. Every
 * wait is a poll with a generous wall-clock ceiling. A step that times out
 * reports FAIL with what it last saw, never a silent pass.
 *
 *   LUMI_URL=http://localhost:5176/ node scripts/measure/narrative-voices.mjs
 */
import { chromium } from 'playwright';
import { WIZARD, FRAGMENTS, FRAGMENT_ASSEMBLY, HOUSE_MEMORIES } from '../../src/narrative/lines.js';
import { DISCOVERY_LABELS } from '../../src/quest/config.js';
import { speak } from '../../src/narrative/voice.js';

const URL = process.env.LUMI_URL || 'http://localhost:5173/';
const ok = [], bad = [], notes = [];
const check = (n, pass, d) => (pass ? ok : bad).push(`${n}${d ? ` — ${d}` : ''}`);

const child = (s) => speak(s, 'child', { touch: false });
const adult = (s) => speak(s, 'adult', { touch: false });

// NV_ONLY=house,glyph,wizard,fragment,flip,five runs just those steps (each
// sets up what it needs), so one seeded defect can be checked in minutes
// rather than after a full ten-minute pass.
const ONLY = (process.env.NV_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean);
const want = (tag) => ONLY.length === 0 || ONLY.includes(tag);
const t0 = Date.now();
const progress = (msg) => console.error(`[${Math.round((Date.now() - t0) / 1000)}s] ${msg}`);

const ARGS = ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'];
const browser = await chromium.launch({ args: ARGS });

function report() {
  console.log([...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`), ...notes.map((s) => `  NOTE  ${s}`)].join('\n'));
  console.log(`\n${ok.length} passed, ${bad.length} failed`);
  process.exit(bad.length ? 1 : 0);
}

/**
 * Poll until `fn` returns something truthy, or the ceiling passes. The default
 * gap is long on purpose: under software rendering every evaluate waits for the
 * page's next frame and competes with it, and a 250 ms poll measurably slowed
 * the game clock the step was waiting on.
 */
async function until(fn, { timeout = 60000, every = 2500 } = {}) {
  const end = Date.now() + timeout;
  let last = null;
  let tick = Date.now() + 30000;
  while (Date.now() < end) {
    last = await fn();
    if (last && last.done) return { ok: true, last };
    if (Date.now() > tick) { tick += 30000; progress(`  waiting… ${JSON.stringify(last).slice(0, 140)}`); }
    await new Promise((r) => setTimeout(r, every));
  }
  return { ok: false, last };
}

/** Run one numbered step; a throw becomes a named failure, not a stack trace. */
async function step(name, fn, tag = null) {
  if (tag && !want(tag)) return;
  progress(`step: ${name}`);
  try { await fn(); }
  catch (e) { bad.push(`${name} — threw: ${String(e).split('\n')[0]}`); }
}

// ----------------------------------------------------------------------------
// 1. The title prompt, on both platforms
// ----------------------------------------------------------------------------
async function titlePrompt(context) {
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  // World generation under SwiftShader takes about a minute after the load
  // event; the ceilings are set well above that.
  await page.goto(URL, { waitUntil: 'load', timeout: 120000 });
  await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: 300000 });
  const text = await page.evaluate(() => {
    for (const d of document.querySelectorAll('div')) {
      const t = d.children.length === 0 ? d.textContent : '';
      if (/to begin( a new forest)?$/.test(t)) return t;
    }
    return null;
  });
  return { page, text, errors };
}

await step('the title prompt', async () => {
  const touchCtx = await browser.newContext({ viewport: { width: 430, height: 900 }, hasTouch: true, isMobile: true });
  const t = await titlePrompt(touchCtx);
  check('on a touch device the title says tap, not click', /^tap to begin/.test(t.text || ''), String(t.text));
  check('no page error on the touch title', t.errors.length === 0, t.errors.slice(0, 2).join(' | '));
  await touchCtx.close();
});

// Small on purpose: software rendering is pixel-bound, and the game clock
// (and so every wait below) runs about four times slower at 1280x720.
const ctx = await browser.newContext({ viewport: { width: 480, height: 270 } });
const desk = await titlePrompt(ctx);
const page = desk.page;
const errors = desk.errors;
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
check('on a desktop the title says click', /^click to begin/.test(desk.text || ''), String(desk.text));

const lumi = (fn, arg) => page.evaluate(fn, arg);
const voice = () => lumi(() => window.LumiDebug.voice());

/** Everything that has been on the overlay, in order, with repeats collapsed. */
const history = [];
async function watch() {
  const v = await voice();
  const t = v.onScreen;
  if (t && history[history.length - 1] !== t) history.push(t);
  return v;
}
const seen = (needle) => history.some((h) => h.includes(needle));

await step('skip the intro', async () => {
  await lumi(() => window.LumiDebug.skipIntro());
  await lumi(() => window.LumiDebug.setVoice('child'));
});

// ----------------------------------------------------------------------------
// 2. The frame loop
// ----------------------------------------------------------------------------
await step('the frame loop', async () => {
  const before = await lumi(() => window.LumiDebug.perf().fps.frames);
  await new Promise((r) => setTimeout(r, 2000));
  const after = await lumi(() => window.LumiDebug.perf().fps.frames);
  check('the frame loop is running', after > before, `frames ${before} -> ${after}`);
  check('nothing threw on the way in', errors.length === 0, errors.slice(0, 3).join(' | '));
});

// ----------------------------------------------------------------------------
// 3. A house memory, at dusk
// ----------------------------------------------------------------------------
await step('the house memory', async () => {
  await lumi(() => window.LumiDebug.setTime(0));            // dusk
  const v = await lumi(() => window.LumiDebug.villages());
  if (!v.first) { notes.push('house memory not verified: this world placed no villages'); return; }
  await lumi((p) => window.LumiDebug.teleport(p.x + 3, p.z), v.first);
  const got = await until(async () => {
    await watch();
    const f = await lumi(() => window.LumiDebug.fragments());
    return { done: f.keys.some((k) => k.startsWith('house:')), keys: f.keys };
  }, { timeout: 300000 });
  check('standing still beside a village at dusk records its memory', got.ok, JSON.stringify(got.last));
  // The key is recorded the moment the line is handed to the overlay, which may
  // still be showing the previous line; wait for the memory itself to appear.
  const shownLine = await until(async () => {
    await watch();
    return { done: HOUSE_MEMORIES.some((m) => seen(child(m.child))) };
  }, { timeout: 180000 });
  check('and the memory line reaches the overlay', shownLine.ok, history.slice(-4).join(' || '));
}, 'house');

// ----------------------------------------------------------------------------
// 4. A glyph echo
// ----------------------------------------------------------------------------
await step('the glyph echo', async () => {
  const glyphs = await lumi(() => window.LumiDebug.glyphs());
  if (!glyphs.length) { notes.push('glyph echo not verified: this world placed no glyphs'); return; }
  const g = glyphs[0];
  await lumi((p) => window.LumiDebug.teleport(p.x, p.z), g);
  const read = await until(async () => {
    await watch();
    const gs = await lumi(() => window.LumiDebug.glyphs());
    return { done: gs[0].revealed };
  }, { timeout: 300000 });
  check('a glyph is read by standing still beside it', read.ok);
  if (!read.ok) return;

  // Hold the deer band beside the read glyph. The forced lock fades in three
  // game seconds, so it is renewed until the echo lands.
  const echoed = await until(async () => {
    await lumi(() => window.LumiDebug.unlockPitch('deer'));
    await watch();
    const f = await lumi(() => window.LumiDebug.fragments());
    return { done: f.keys.includes('echo:deer'), keys: f.keys };
  }, { timeout: 240000, every: 2500 });
  check('humming a creature band beside a read glyph records the echo', echoed.ok, JSON.stringify(echoed.last));
  // A child reader is answered in the adult register, and only in it.
  check('the echo is the creature line in the register the player is not reading',
    seen(DISCOVERY_LABELS.deer.adult), history.slice(-4).join(' || '));
}, 'glyph');

// ----------------------------------------------------------------------------
// 5. The wizard, beat by beat, in both registers
// ----------------------------------------------------------------------------
await step('the wizard', async () => {
  await lumi(() => window.LumiDebug.setVoice('child'));
  await lumi(() => window.LumiDebug.teleport(40, 40));
  history.length = 0;
  const spawned = await lumi(() => window.LumiDebug.spawnWizard());
  check('the encounter starts', spawned === true);

  const flipped = {};                    // beat -> the adult text read off the DOM
  const beats = [
    ['approach', WIZARD.approach], ['deadSoul', WIZARD.deadSoul], ['humPrompt', WIZARD.humPrompt],
    ['proclaim', WIZARD.proclaim], ['scream', WIZARD.scream],
  ];
  let pressedF = false;

  const done = await until(async () => {
    const v = await watch();
    for (const [name, pair] of beats) {
      // While a beat is up in the child register, read it in the adult one
      // from the DOM, then put the register back.
      if (!flipped[name] && v.onScreen === child(pair.child) && name !== 'scream') {
        const a = await lumi(() => window.LumiDebug.setVoice('adult'));
        flipped[name] = a.onScreen;
        await lumi(() => window.LumiDebug.setVoice('child'));
      }
    }
    if (!pressedF && v.onScreen && v.onScreen.startsWith('Hum to answer it')) {
      pressedF = true;
      await page.keyboard.press('KeyF');
    }
    return { done: v.truthRevealed, onScreen: v.onScreen };
  }, { timeout: 600000, every: 1200 });

  check('the encounter plays out to the reveal', done.ok, JSON.stringify(done.last));
  for (const [name, pair] of beats) {
    check(`wizard beat "${name}" reaches the overlay in the child register`, seen(child(pair.child)), child(pair.child));
  }
  const order = beats.map(([, p]) => history.findIndex((h) => h.includes(child(p.child))));
  check('the beats arrive in story order', order.every((v, i) => v >= 0 && (i === 0 || v > order[i - 1])), order.join(','));
  for (const name of ['approach', 'deadSoul', 'humPrompt', 'proclaim']) {
    const want = adult(WIZARD[name].adult);
    check(`wizard beat "${name}" re-renders in the adult register on Tab`, flipped[name] === want, `${flipped[name]} vs ${want}`);
  }
  if (!flipped.approach) notes.push('the approach hint (3.6 s) can end before the poll sees it under load; see its child-register check above');
  const v = await voice();
  check('the reveal landed', v.truthRevealed);
}, 'wizard');

// ----------------------------------------------------------------------------
// 6. The fragments
// ----------------------------------------------------------------------------
await step('the first fragment', async () => {
  // Stand-alone: the veil must be lifted for the stamp to appear beneath the drawing.
  await lumi(() => window.LumiDebug.unlockTruth());
  await lumi(() => window.LumiDebug.setVoice('child'));
  history.length = 0;
  await lumi(() => window.LumiDebug.grantOrbs(1));
  const got = await until(async () => {
    const v = await watch();
    return { done: seen(child(FRAGMENTS[0].child)), onScreen: v.onScreen };
  }, { timeout: 600000 });
  check('lighting the first rune shows the first fragment', got.ok, JSON.stringify(got.last));
  // The truth is known, so the fragment carries both registers: the child's
  // drawing above, the archive's stamp below.
  check('and, the veil being lifted, its archive stamp beneath it',
    history.some((h) => h.includes(child(FRAGMENTS[0].child)) && h.includes(adult(FRAGMENTS[0].adult))),
    history.slice(-3).join(' || '));
  const f = await lumi(() => window.LumiDebug.fragments());
  check('the revealed count is derived from the orbs', f.revealed === 1, JSON.stringify(f));
}, 'fragment');

// ----------------------------------------------------------------------------
// 7. Tab at the obelisk
// ----------------------------------------------------------------------------
await step('the rune flip', async () => {
  // Stand-alone: the flip needs the truth known and a rune lit. Runes 1 and 5
  // belong to "any creature" orbs and are already the archive pink, so the
  // colour is read from rune 2, the jelly's, which has a colour to turn from.
  await lumi(() => window.LumiDebug.unlockTruth());
  if ((await lumi(() => window.LumiDebug.fragments())).revealed < 2) await lumi(() => window.LumiDebug.grantOrbs(2));
  const colour = async () => {
    const r = await lumi(() => window.LumiDebug.runeFlip());
    return { mix: r.mix, c0: r.faces[1].color, lit: r.faces[1].revealed };
  };
  await lumi(() => window.LumiDebug.teleport(0, 14));
  await lumi(() => window.LumiDebug.look(0, 0));            // yaw 0 faces -z, toward the stone
  const before = await colour();
  check('a lit rune is showing a creature colour, not yet the pink', before.lit && before.mix === 0, JSON.stringify(before));

  // Looking away: Tab must not turn the runes.
  await lumi(() => window.LumiDebug.look(Math.PI, 0));
  await page.keyboard.press('Tab');
  await new Promise((r) => setTimeout(r, 1500));
  const away = await colour();
  check('Tab while looking away leaves the runes alone', away.mix === 0 && away.c0 === before.c0, JSON.stringify(away));

  // Looking at it.
  await lumi(() => window.LumiDebug.look(0, 0));
  await page.keyboard.press('Tab');
  let sawMid = false;
  const toPink = await until(async () => {
    const c = await colour();
    if (c.mix > 0 && c.mix < 1) sawMid = true;
    return { done: c.mix === 1, ...c };
  }, { timeout: 60000, every: 60 });
  check('Tab at the obelisk turns the runes', toPink.ok, JSON.stringify(toPink.last));
  check('the lit rune ends in a different colour', toPink.ok && toPink.last.c0 !== before.c0, `${before.c0} -> ${toPink.last && toPink.last.c0}`);
  if (!sawMid) notes.push('the 0.6 s blend was not caught mid-way at this frame rate; the blend itself is asserted in runeHooks.test.js');

  await page.keyboard.press('Tab');
  const back = await until(async () => {
    const c = await colour();
    return { done: c.mix === 0, ...c };
  }, { timeout: 60000, every: 60 });
  check('a second Tab turns them back to their creature colours', back.ok && back.last.c0 === before.c0, JSON.stringify(back.last));

  // Too far.
  await lumi(() => window.LumiDebug.teleport(0, 70));
  await lumi(() => window.LumiDebug.look(0, 0));
  await page.keyboard.press('Tab');
  await new Promise((r) => setTimeout(r, 1500));
  const far = await colour();
  check('Tab from beyond 30 m does nothing', far.mix === 0, JSON.stringify(far));
}, 'flip');

await step('all five fragments and the joining line', async () => {
  await lumi(() => window.LumiDebug.unlockTruth());
  await lumi(() => window.LumiDebug.setVoice('child'));
  await lumi(() => window.LumiDebug.teleport(60, 60));
  history.length = 0;
  await lumi(() => window.LumiDebug.grantOrbs(5));
  const got = await until(async () => {
    const v = await watch();
    return { done: seen(child(FRAGMENT_ASSEMBLY.child)), onScreen: v.onScreen };
  }, { timeout: 4800000, every: 2500 });
  check('the sixth line arrives', got.ok, JSON.stringify(got.last));
  const idx = FRAGMENTS.map((f) => history.findIndex((h) => h.includes(child(f.child))));
  const assembly = history.findIndex((h) => h.includes(child(FRAGMENT_ASSEMBLY.child)));
  // Fragment 1 was shown in the step before; the other four arrive here.
  check('fragments two to five each arrive', idx.slice(1).every((i) => i >= 0), idx.join(','));
  check('in order, and the joining line after the fifth',
    idx.slice(1).every((v, i, a) => i === 0 || v > a[i - 1]) && assembly > idx[4], `${idx.join(',')} then ${assembly}`);
  const f = await lumi(() => window.LumiDebug.fragments());
  check('the revealed count reads five', f.revealed === 5, JSON.stringify(f));
}, 'five');

check('no page errors from start to finish', errors.length === 0, errors.slice(0, 3).join(' | '));
await browser.close();
report();

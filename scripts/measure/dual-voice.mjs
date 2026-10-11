/**
 * M3.2 gate: both voices reach the screen, and Tab re-renders what is on it.
 *
 * Three things here can only be checked in a real page.
 *
 * The first is that the game still runs. discoveries.js lost a function and
 * gained five call sites in this milestone, and `npm run build` cannot see a
 * missing import — it is a runtime ReferenceError, not a syntax error, and it
 * has shipped from this repo once already. So the first assertion of every
 * gate is that the frame loop is turning.
 *
 * The second is the re-render. PERSPECTIVE_CHANGED has been emitted since the
 * perspective toggle shipped and had no subscriber that showed anything, so a
 * player who pressed Tab mid-line watched the old register finish its five
 * seconds. The check is: put a line up, flip the register, read the DOM. Not
 * the intended text — the DOM. A reporter that returned what the game meant
 * to show would have agreed with itself right through that bug.
 *
 * The third is that after the reveal the overlay carries two registers at
 * once, which is a <span> inside the element, not a longer string.
 *
 * Every probe runs inside probe(), which turns a throw in the page into a
 * named failure. An earlier version let the exception out: a seeded missing
 * import then produced a stack trace and no report at all, which reads like a
 * gate that did not run rather than a gate that caught something.
 */
import { chromium } from 'playwright';

const URL = process.env.LUMI_URL || 'http://localhost:5173/';
// Ceiling for page load and boot: shared machine, software rasteriser.
const T = Number(process.env.LUMI_TIMEOUT || 120000);

const ok = [], bad = [];
const check = (n, pass, d) => (pass ? ok : bad).push(`${n}${d ? ` — ${d}` : ''}`);

const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'] });
const page = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

/** Run a probe in the page, or record a failure and return null. */
async function probe(name, fn) {
  try {
    return await page.evaluate(fn);
  } catch (e) {
    bad.push(`${name} — threw in the page: ${String(e).split('\n')[0]}`);
    return null;
  }
}

function report() {
  console.log([...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`)].join('\n'));
  console.log(`\n${ok.length} passed, ${bad.length} failed`);
  process.exit(bad.length ? 1 : 0);
}

try {
  await page.goto(URL, { waitUntil: 'load', timeout: T });
  await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: T });
  await probe('the debug surface is reachable', () => window.LumiDebug.skipIntro());

  // 1. The frame loop, measured by the game's own counter rather than by a
  //    requestAnimationFrame of this script's. Under SwiftShader this scene
  //    renders at single-digit FPS, so a threshold on a rate would be a
  //    threshold on the software rasteriser; what separates a running loop
  //    from a dead one is that the counter moves at all.
  const loop = await probe('the frame loop is running', async () => {
    const before = window.LumiDebug.perf().fps.frames;
    await new Promise((r) => setTimeout(r, 1500));
    return { before, after: window.LumiDebug.perf().fps.frames };
  });
  if (loop) check('the frame loop is running', loop.after > loop.before, `frames ${loop.before} -> ${loop.after}`);
  check('nothing threw on the way in', errors.length === 0, errors.slice(0, 3).join(' | '));

  // 2. The finale card, child register. It used to say "The Obelisk Is
  //    Whole!" — the word the source uses for the thing, and the word neither
  //    voice uses.
  const finale = await probe('the finale card renders',
    () => { window.LumiDebug.setVoice('child'); return window.LumiDebug.finale(); });
  if (finale) {
    const t = finale.onScreen || '';
    check('the finale card speaks the child term for the obelisk',
      /Big Crystal/.test(t) && !/\bObelisk\b/i.test(t), t);
    check('no token reached the screen unresolved', t !== '' && !/\{/.test(t), t);
  }

  // 3. Tab, with a line still on screen. A re-render leaves the fade timer
  //    alone, so the same line must still be visible in the other register.
  const flip = await probe('the register flip runs', () => {
    window.LumiDebug.setVoice('child');
    const before = window.LumiDebug.pair('The {t:orb} is listening...', 'Node entering receptive state...', 8);
    const after = window.LumiDebug.setVoice('adult');
    const back = window.LumiDebug.setVoice('child');
    return { before, after, back };
  });
  if (flip) {
    check('the line goes up in the chosen register',
      flip.before.onScreen === 'The Sun-Seed is listening...' && flip.before.visible, flip.before.onScreen);
    check('flipping the register re-renders the line already on screen',
      flip.after.onScreen === 'Node entering receptive state...', flip.after.onScreen);
    check('it is still on screen after the flip, not restarted', flip.after.visible, `visible=${flip.after.visible}`);
    // Written to depend on the flip having changed something: with the
    // re-render removed, "flipping back" reads the line that never moved and
    // passes on its own.
    check('flipping back returns the first register',
      flip.back.onScreen === flip.before.onScreen && flip.after.onScreen !== flip.before.onScreen,
      `${flip.before.onScreen} -> ${flip.after.onScreen} -> ${flip.back.onScreen}`);
  }

  // 4. The seek HUD names the species in the register being read. The cryptic
  //    tiers name none, so checking those for a resolved creature token would
  //    pass on a token that was never there; tier 3 is asked for by index.
  const hud = await probe('the seek HUD renders', () => {
    const c = window.LumiDebug.setVoice('child');
    const a = window.LumiDebug.setVoice('adult');
    return { child: c.seekHudPlain, adult: a.seekHudPlain };
  });
  if (hud) {
    const both = `${hud.child} || ${hud.adult}`;
    check('the seek HUD differs by register', hud.child !== hud.adult, both);
    check('the seek HUD names a species in each register',
      /moon moth|jellyfish|puffling|deer|forest friend/.test(hud.child)
      && /orbital pollinator|bioluminescent drifter|micro-fauna|biological metronome|authenticated carrier/.test(hud.adult),
      both);
    check('the seek HUD resolves its creature token', !/\{/.test(hud.child) && !/\{/.test(hud.adult), both);
    // "Find a a forest friend" — the sentence supplied an article and so did
    // the name. It only shows in the rendered line.
    check('no doubled article in a rendered line', !/\b(a|an|the) (a|an|the)\b/i.test(both), both);
  }

  // 5. After the reveal, both registers at once — a <span>, not a longer
  //    string.
  const revealed = await probe('the reveal renders', () => {
    window.LumiDebug.setVoice('child');
    window.LumiDebug.unlockTruth();
    return window.LumiDebug.pair('The {t:obelisk} Is Whole!', 'Structural Alignment Complete', 8);
  });
  if (revealed) {
    check('the reveal puts both registers on screen', revealed.showingBoth, `showingBoth=${revealed.showingBoth}`);
    check('both registers are the glossary’s own words',
      /Big Crystal/.test(revealed.onScreen) && /Structural Alignment/.test(revealed.onScreen), revealed.onScreen);
  }

  // 6. A line with no second half must not come out twice after the reveal.
  const single = await probe('a single-voice line renders',
    () => { window.LumiDebug.say('Hum to answer it… ({hum})'); return window.LumiDebug.voice(); });
  if (single) {
    check('a single-voice line stays single after the reveal',
      !single.showingBoth && !/press F.*F: carrier/.test(single.onScreen), single.onScreen);
  }

  check('still no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));
} catch (e) {
  bad.push(`the gate itself failed: ${String(e).split('\n')[0]}`);
} finally {
  await b.close();
}
report();

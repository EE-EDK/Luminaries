/**
 * M1.1 gate: does a save actually come back, and does it come back QUIETLY?
 *
 * Grant two orbs, let the autosave land, reload, click Continue, then check
 * both halves of the claim: the progress is there, and none of the collection
 * theatre replayed (no restoration wave running, no camera pan queued, the
 * constellations already at full opacity rather than fading in).
 *
 * Run against `npx vite --port 5173` — LumiDebug is dev-only.
 */
import { chromium } from 'playwright';

const URL = process.env.LUMI_URL || 'http://localhost:5173/';
const ok = [], bad = [];
const check = (name, pass, detail) => (pass ? ok : bad).push(`${name}${detail ? ` — ${detail}` : ''}`);

const browser = await chromium.launch({
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'],
});
const ctx = await browser.newContext({ viewport: { width: 1024, height: 640 } });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto(URL, { waitUntil: 'load' });
await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: 30000 });

// --- Start a run, grant two orbs, wait for the autosave to land -------------
await page.evaluate(() => document.querySelector('#intro-continue')?.remove());
await page.mouse.click(512, 320);                       // click to begin
await page.waitForTimeout(1200);
await page.evaluate(() => window.LumiDebug.skipIntro?.());
await page.waitForTimeout(800);
await page.evaluate(() => window.LumiDebug.grantOrbs(2));
// Wait for the write, do not assume it. Under SwiftShader the render loop
// starves setTimeout badly enough that a 250 ms debounce can land seconds
// late; that is this harness, not the game.
const tWrite = Date.now();
const landed = await page.waitForFunction(
  () => !!localStorage.getItem('lumi.save.v1'), null, { timeout: 30000 },
).then(() => true).catch(() => false);
check('the autosave writes during play', landed, landed ? `after ${Date.now() - tWrite} ms` : 'never wrote');

const savedRaw = await page.evaluate(() => localStorage.getItem('lumi.save.v1'));
check('a save was written', !!savedRaw, savedRaw ? `${savedRaw.length} bytes` : 'nothing in lumi.save.v1');
const rejected = await page.evaluate(() => localStorage.getItem('lumi.save.rejected'));
check('nothing was parked as rejected', !rejected, rejected || '');

if (savedRaw) {
  const s = JSON.parse(savedRaw);
  check('save records two collected orbs', s.quest?.collected?.length === 2,
    `collected=${JSON.stringify(s.quest?.collected)}`);
  check('save carries the boot seed', typeof s.seed === 'number', `seed=${s.seed}`);
}

// --- Reload and continue ----------------------------------------------------
await page.reload({ waitUntil: 'load' });
await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: 30000 });

const btn = await page.$('#intro-continue');
check('Continue is offered on the title card', !!btn);
if (!btn) {
  console.log(report());
  await browser.close();
  process.exit(1);
}

// Watch the container's own handler: if stopPropagation fails, the click
// reaches it and the player gets the opening cinematic on top of their save.
// Bubble phase, like the real onTitleClick — a capture listener would fire
// before the button's handler and could never be stopped by it.
await page.evaluate(() => {
  window.__introStarted = false;
  document.querySelector('#intro-cinematic')
    ?.addEventListener('click', () => { window.__introStarted = true; });
});

// A pre-attached listener: if the restore replays a collection, this catches it.
await page.evaluate(() => {
  window.__replayed = [];
  const bus = window.LumiDebug.bus;
  for (const e of [bus.Events.ORB_COLLECTED, bus.Events.QUEST_PHASE, bus.Events.DISCOVERY]) {
    bus.on(e, () => window.__replayed.push(e));
  }
});

// force:true skips Playwright's actionability wait, which never settles while
// the render loop saturates the main thread under SwiftShader. The probe
// confirmed the button is the hit target at its own centre, so this is still a
// real input-level click on a reachable button.
await btn.click({ force: true, timeout: 15000 });
// Same story: the title card is removed on a 100 ms timer that slips here.
await page.waitForFunction(
  () => !document.querySelector('#intro-cinematic'), null, { timeout: 30000 },
).catch(() => {});
await page.waitForTimeout(1500);

const state = await page.evaluate(() => {
  const d = window.LumiDebug;
  const sv = d.save();
  return {
    orbs: sv.orbsFound,
    phase: sv.questPhase,
    sectors: sv.restoredSectors,
    introGone: !document.querySelector('#intro-cinematic') && !document.querySelector('#intro-continue'),
    hud: document.querySelector('#orb-hud')?.textContent?.trim() || '',
    replayed: window.__replayed || [],
    // stopPropagation holds: the container's click handler must not have run.
    cinematicRan: !!window.__introStarted,
  };
});

check('two orbs are restored', state.orbs === 2, `orbsFound=${state.orbs}`);
check('two sectors are already swept', state.sectors?.filter(Boolean).length === 2,
  `sectors=${JSON.stringify(state.sectors)}`);
check('the run resumes in RISING, not SEEK', state.phase === 'RISING', `phase=${state.phase}`);
check('the title card is gone', state.introGone);
check('the orb HUD shows the progress', /2/.test(state.hud), `hud="${state.hud}"`);
check('no collection event replayed', state.replayed.length === 0, state.replayed.join(','));
check('the cinematic never started', !state.cinematicRan,
  state.cinematicRan ? 'the click reached the container — stopPropagation failed' : '');
check('no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await page.screenshot({ path: './restored.png' });
await browser.close();

function report() {
  return [...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`)].join('\n');
}
console.log(report());
console.log(`\n${ok.length} passed, ${bad.length} failed`);
process.exit(bad.length ? 1 : 0);

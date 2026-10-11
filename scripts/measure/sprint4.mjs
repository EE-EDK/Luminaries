/**
 * Sprint 4 gate: the field notebook, the sound captions, the photo moment, and
 * the dawn light shafts, all in a real page.
 *
 * What a unit test cannot see, and so what is read here:
 *
 *  - The game still runs. A missing import is a runtime ReferenceError, not a
 *    build failure, and this sprint added eight modules and a scheduler system.
 *    The first assertion is that the frame loop is turning.
 *  - The ledger and the page agree. The notebook is a Set and a DOM grid; a
 *    ledger that fills while the panel stays blank is the failure, so both are
 *    read, separately.
 *  - A restore says nothing. Reload, Continue, and watch the bus: no orb, no
 *    discovery, and no notebook entry that was already in the save.
 *  - The shafts cost exactly one draw call and exist only at dawn and dusk. The
 *    count is taken with renderer.info, mesh visible against hidden, back to
 *    back in one task, because anything read across frames drifts.
 *  - Captions come out of the real settings toggle, off by default, and say the
 *    side the listener hears it on.
 *  - Holding H puts the interface away and brings it back.
 *
 * Waits are on conditions, never on fixed sleeps: this renders under a
 * software rasteriser and a timer that "should" have fired can be seconds late.
 * A condition that is never met is reported with the last value seen.
 *
 * Run against `npx vite --port 5174` (LumiDebug is dev-only):
 *   LUMI_URL=http://localhost:5174/ node scripts/measure/sprint4.mjs
 */
import { chromium } from 'playwright';

const URL = process.env.LUMI_URL || 'http://localhost:5173/';
const SLOW = Number(process.env.LUMI_SLOW || 240000);       // ms to wait on one condition
const ok = [], bad = [];
const check = (n, pass, d) => {
  const line = `${n}${d ? ` — ${d}` : ''}`;
  (pass ? ok : bad).push(line);
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${line}`);          // live, so a long run can be watched
};
const measured = {};

const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'] });
const ctx = await b.newContext({ viewport: { width: 1024, height: 640 } });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('crash', () => { bad.push('the page crashed'); console.log('  FAIL  the page crashed'); });
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

/** Run a probe in the page, or record a failure and return null. */
async function probe(name, fn, arg) {
  try {
    return await page.evaluate(fn, arg);
  } catch (e) {
    bad.push(`${name} — threw in the page: ${String(e).split('\n')[0]}`);
    console.log(`  FAIL  ${name} — threw in the page: ${String(e).split('\n')[0]}`);
    return null;
  }
}

/**
 * Wait until `fn(arg)` returns something truthy in the page. Returns
 * `{ ok, value }`; on timeout `value` is the last thing it returned, so a
 * failure says what it was waiting on and what it saw instead.
 */
async function until(name, fn, arg, timeout = SLOW) {
  const t0 = Date.now();
  let last = null;
  while (Date.now() - t0 < timeout) {
    try { last = await page.evaluate(fn, arg); } catch (e) { last = `threw: ${String(e).split('\n')[0]}`; }
    if (last && typeof last !== 'string') return { ok: true, value: last, ms: Date.now() - t0 };
    if (last && typeof last === 'string' && !last.startsWith('threw:')) return { ok: true, value: last, ms: Date.now() - t0 };
    await page.waitForTimeout(400);
  }
  return { ok: false, value: last, ms: Date.now() - t0, name };
}

function report() {
  console.log(`\nmeasured: ${JSON.stringify(measured)}`);
  console.log(`\n${ok.length} passed, ${bad.length} failed`);
  process.exit(bad.length ? 1 : 0);
}


try {
  // ---- 0. Boot, and the frame loop -----------------------------------------
  await page.goto(URL, { waitUntil: 'commit', timeout: SLOW });
  await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: SLOW, polling: 500 });
  await page.evaluate(() => document.querySelector('#intro-continue')?.remove());
  await page.mouse.click(512, 320);
  await probe('the intro can be skipped', () => window.LumiDebug.skipIntro?.());

  const f0 = await until('frames', () => window.LumiDebug.perf().fps.frames > 5 && window.LumiDebug.perf().fps.frames);
  check('the frame loop is running (frames counter moves)', f0.ok, `frames=${f0.value}`);
  const f1 = await until('frames move', (n) => window.LumiDebug.perf().fps.frames > n + 3 && window.LumiDebug.perf().fps.frames, f0.value || 0);
  check('the frame loop keeps turning', f1.ok, `frames ${f0.value} -> ${f1.value}`);
  check('nothing threw on the way in', errors.length === 0, errors.slice(0, 3).join(' | '));
  if (!f1.ok) throw new Error('the game is not running; nothing else is worth asserting');

  // ---- 1. The book exists and starts with the sky it opened under -----------
  const nb0 = await probe('the notebook reports', () => window.LumiDebug.notebook());
  if (nb0) {
    check('the book holds 38 entries over five pages', nb0.total === 38 && Object.keys(nb0.pages).length === 5,
      `total=${nb0.total} pages=${Object.keys(nb0.pages)}`);
    check('the weather it opened under is already in it', nb0.seen.some((k) => k.startsWith('weather.')), nb0.seen.join(','));
    // discoveries.js reads creature positions off the wrong field, so its four
    // creature discoveries fire for anyone standing at spawn. The book must
    // not believe them: the nearest creature here is 12 m or more away.
    check('starting the game does not log creatures that are not near', !nb0.seen.some((k) => k.startsWith('creature.')), nb0.seen.join(','));
    check('the page order is creature, flora, sky, place, weather',
      Object.keys(nb0.pages).join(',') === 'creature,flora,sky,place,weather', Object.keys(nb0.pages).join(','));
  }

  // ---- 2. N opens it; the grid and the ledger agree --------------------------
  await page.keyboard.press('n');
  const opened = await until('notebook opens on N', () => window.LumiDebug.notebook().open && window.LumiDebug.notebook());
  check('N opens the notebook', opened.ok, opened.ok ? `after ${opened.ms} ms` : 'never opened');
  if (opened.ok) {
    const nb = opened.value;
    check('the creatures page shows five cells', nb.shown.length === 5, `cells=${nb.shown.length}`);
    const unseenText = nb.shown.filter((c) => !c.seen).map((c) => c.text);
    check('an unseen entry does not give its name away', unseenText.length > 0 && unseenText.every((t) => /not found yet|unlogged/i.test(t)), unseenText.join(' | '));
    // Page through them all, reading every page's cell count from the DOM.
    const counts = {};
    for (const [i, name] of ['creature', 'flora', 'sky', 'place', 'weather'].entries()) {
      await page.keyboard.press(String(i + 1));
      const r = await until(`page ${name}`, (n) => {
        const nb_ = window.LumiDebug.notebook();
        return nb_.shown.length === n && nb_.shown;
      }, [5, 16, 6, 5, 6][i], 60000);
      counts[name] = r.ok ? r.value.length : `${r.value && r.value.length}`;
    }
    check('each page draws every one of its entries', JSON.stringify(counts) === JSON.stringify({ creature: 5, flora: 16, sky: 6, place: 5, weather: 6 }), JSON.stringify(counts));
    await page.keyboard.press('1');
  }

  // ---- 3. Fill it by standing near things -----------------------------------
  const fern = await probe('find a fern', () => window.LumiDebug.where('flora.fern'));
  check('the world has ferns to find', !!fern, JSON.stringify(fern));
  if (fern) {
    await probe('walk to the fern', (f) => window.LumiDebug.teleport(f.x + 1.5, f.z), fern);
    const seenFern = await until('fern is logged', () => window.LumiDebug.notebook().seen.includes('flora.fern') && 'seen');
    check('standing by a fern logs it', seenFern.ok, seenFern.ok ? `after ${seenFern.ms} ms` : 'never logged');
    await page.keyboard.press('2');
    const cell = await until('fern cell on the page', () => {
      const c = window.LumiDebug.notebook().shown.find((x) => x.key === 'flora.fern');
      return c && c.seen && c;
    });
    check('and the page shows it as seen, with its name', cell.ok && /fern/i.test(cell.value.text), JSON.stringify(cell.value));
  }
  const tree = await probe('find a tree', () => window.LumiDebug.where('flora.tree'));
  if (tree) {
    await probe('walk to the tree', (f) => window.LumiDebug.teleport(f.x + 3, f.z), tree);
    const seenTree = await until('tree is logged', () => window.LumiDebug.notebook().seen.includes('flora.tree') && 'seen');
    check('standing by a tree logs it', seenTree.ok, seenTree.ok ? `after ${seenTree.ms} ms` : 'never logged');
  }

  // Events: an orb fills the sky page; a real weather transition fills the weather page.
  await probe('grant two orbs', () => window.LumiDebug.grantOrbs(2));
  const sky = await until('constellations logged', () => {
    const s = window.LumiDebug.notebook().seen;
    return s.includes('sky.constellation0') && s.includes('sky.constellation1') && 'both';
  });
  check('two orbs log the first two constellations', sky.ok, JSON.stringify(sky.value));

  const names = nb0 ? nb0.weatherNames : [];
  check('the game names six weather states', names.length === 6, names.join(','));
  const weatherPage = {};
  for (const n of names) {
    await probe(`transition to ${n}`, (x) => window.LumiDebug.transitionWeather(x), n);
    const r = await until(`weather ${n} logged`, (x) => window.LumiDebug.notebook().seen.includes(`weather.${x}`) && 'seen', n, 90000);
    weatherPage[n] = r.ok;
  }
  check('every weather state the game has fills a weather entry by a real transition',
    names.length > 0 && names.every((n) => weatherPage[n]), JSON.stringify(weatherPage));
  const nbW = await probe('weather page total', () => window.LumiDebug.notebook());
  check('the weather page has exactly one entry per state', !!nbW && nbW.pages.weather.total === names.length,
    nbW && `${nbW.pages.weather.total} vs ${names.length}`);
  await probe('clear the sky again', () => window.LumiDebug.forceWeather('CLEAR'));

  // ---- 4. It rides in the save ----------------------------------------------
  await page.keyboard.press('n');                                   // close it, as a player would
  await until('notebook closes', () => !window.LumiDebug.notebook().open && 'closed', null, 60000);
  const wrote = await until('autosave holds the notebook', () => {
    const raw = localStorage.getItem('lumi.save.v1');
    if (!raw) return false;
    const nbk = JSON.parse(raw).narrative && JSON.parse(raw).narrative.notebook;
    return Array.isArray(nbk) && nbk.includes('flora.fern') && nbk.includes('sky.constellation1') && nbk.includes('weather.LUMINOUS_STORM') && nbk;
  });
  check('the autosave carries narrative.notebook with what was seen', wrote.ok, JSON.stringify(wrote.value));
  const saved = await probe('read the save', () => JSON.parse(localStorage.getItem('lumi.save.v1')));
  const savedKeys = (saved && saved.narrative && saved.narrative.notebook) || [];
  check('the save is still schema v1', !!saved && saved.v === 1, `v=${saved && saved.v}`);
  check('nothing was parked as rejected', (await probe('rejected', () => localStorage.getItem('lumi.save.rejected'))) === null);

  // ---- 5. Reload, Continue: the book comes back and says nothing -------------
  await page.reload({ waitUntil: 'commit', timeout: SLOW });
  await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: SLOW, polling: 500 });
  const btn = await page.waitForSelector('#intro-continue', { timeout: SLOW, state: 'attached' }).catch(() => null);
  check('Continue is offered on the title card', !!btn);
  if (btn) {
    await page.evaluate(() => {
      window.__replayed = [];
      const bus = window.LumiDebug.bus;
      for (const e of [bus.Events.ORB_COLLECTED, bus.Events.QUEST_PHASE, bus.Events.DISCOVERY]) {
        bus.on(e, () => window.__replayed.push(e));
      }
      window.__entries = [];
      bus.on(bus.Events.NOTEBOOK_ENTRY, (d) => window.__entries.push(d.key));
    });
    await btn.click({ force: true, timeout: 60000 });
    const back = await until('the saved book is back', (keys) => {
      const s = window.LumiDebug.notebook().seen;
      return keys.length > 0 && keys.every((k) => s.includes(k)) && s;
    }, savedKeys);
    check('every saved entry is back after Continue', back.ok, back.ok ? `${back.value.length} entries` : `wanted ${savedKeys.length}, have ${JSON.stringify(back.value)}`);
    const fr = await until('frames after continue', (n) => window.LumiDebug.perf().fps.frames > n + 5 && 'running', f1.value);
    check('the loop is turning after Continue', fr.ok);
    const quiet = await probe('what the restore announced', (keys) => ({
      replayed: window.__replayed,
      reannounced: window.__entries.filter((k) => keys.includes(k)),
      fresh: window.__entries.filter((k) => !keys.includes(k)),
    }), savedKeys);
    if (quiet) {
      check('no orb, quest or discovery event replayed', quiet.replayed.length === 0, quiet.replayed.join(','));
      check('no saved entry was announced again', quiet.reannounced.length === 0, quiet.reannounced.join(','));
      measured.freshEntriesAfterContinue = quiet.fresh;   // honest play after the load; allowed
    }
    const nbBack = await probe('book after restore', () => window.LumiDebug.notebook());
    if (nbBack) check('the pages agree with the ledger after a load',
      nbBack.pages.flora.seen === nbBack.seen.filter((k) => k.startsWith('flora.')).length, JSON.stringify(nbBack.pages));
  }

  // ---- 6. Sound captions -----------------------------------------------------
  const cap0 = await probe('captions default', () => window.LumiDebug.captions());
  check('the caption line exists and is off by default', !!cap0 && cap0.present && cap0.enabled === false, JSON.stringify(cap0));
  await probe('look straight', () => window.LumiDebug.look(0, 0));
  const offCall = await probe('a call with captions off', () => {
    window.LumiDebug.vocal('puff', 'left');
    return window.LumiDebug.captions();
  });
  check('a call with captions off writes nothing', !!offCall && offCall.text === '', JSON.stringify(offCall));

  // Turn it on the way a player would: the gear, then the toggle.
  // The gear, as a player would press it. A synthetic click on the element
  // itself: Playwright's own click waits on an actionability check that never
  // settles while the render loop saturates the main thread under SwiftShader.
  const gear = await probe('open the settings gear', () => { const g = document.querySelector('#settings-handle'); if (!g) return null; g.click(); return true; });
  check('the settings gear opens the panel', gear === true);
  const toggled = await probe('click the Sound captions toggle', () => {
    const t = Array.from(document.querySelectorAll('#settings-panel button')).find((x) => /Sound captions/.test(x.textContent));
    if (!t) return null;
    const before = t.textContent;
    t.click();
    return { before, after: t.textContent };
  });
  check('the settings panel has a Sound captions toggle, OFF to ON', !!toggled && /OFF/.test(toggled.before) && /ON/.test(toggled.after), JSON.stringify(toggled));
  const on = await until('captions enabled', () => window.LumiDebug.captions().enabled && 'on', null, 60000);
  check('the toggle reaches the caption module', on.ok);

  const sides = [['puff', 'left', '◀', /left/i], ['jelly', 'right', '▶', /right/i], ['deer', 'ahead', '▲', /ahead/i], ['moth', 'behind', '▼', /behind/i]];
  for (const [type, side, arrow, word] of sides) {
    const r = await probe(`a ${type} calls from the ${side}`, ([t, s]) => {
      window.LumiDebug.vocal(t, s);
      return window.LumiDebug.captions();
    }, [type, side]);
    check(`a ${type} on the ${side} reads ${arrow} and says ${side}`,
      !!r && r.text.startsWith(arrow) && word.test(r.text) && r.side === side && r.opacity === '1', JSON.stringify(r));
  }
  // Same sound, listener turned half way round: the world position flips, the caption does not.
  await probe('turn round', () => window.LumiDebug.look(Math.PI, 0));
  await page.waitForTimeout(3200);                                  // outlast the per-type cooldown (only ever lengthens)
  const turned = await probe('a puff calls from the right after a half turn', () => {
    window.LumiDebug.vocal('puff', 'right');
    return window.LumiDebug.captions();
  });
  check('captions follow the listener, not the world', !!turned && turned.side === 'right' && turned.text.startsWith('▶'), JSON.stringify(turned));
  await probe('look straight again', () => window.LumiDebug.look(0, 0));

  // Text scale.
  const scale = await probe('text size reaches the caption', async () => {
    const m = await import('/src/state/settingsState.js');
    const el = document.getElementById('sound-captions');
    m.setSetting('textSize', 1);
    const small = parseFloat(getComputedStyle(el).fontSize);
    m.setSetting('textSize', 1.5);
    const large = parseFloat(getComputedStyle(el).fontSize);
    m.setSetting('textSize', 1);
    return { small, large };
  });
  check('the caption line scales with --lumi-text-scale', !!scale && Math.abs(scale.large / scale.small - 1.5) < 0.02, JSON.stringify(scale));
  const regs = await probe('both registers', () => {
    const t0 = window.LumiDebug.captions();
    return t0;
  });
  measured.captionSample = regs && regs.text;

  // ---- 7. The light shafts ---------------------------------------------------
  await probe('clear weather, dawn', () => { window.LumiDebug.forceWeather('CLEAR'); return window.LumiDebug.setTime(0.75); });
  const dawn = await until('shafts at dawn', () => {
    window.LumiDebug.setTime(0.75);
    const s = window.LumiDebug.shafts();
    return s && s.phase === 'DAWN' && s.visible && s.opacity >= 0.18 && s;
  });
  check('at DAWN the shafts are visible at full strength', dawn.ok, JSON.stringify(dawn.value));
  if (dawn.ok) {
    check('there are eight shafts, sixteen quads', dawn.value.shafts === 8 && dawn.value.quads === 16, `shafts=${dawn.value.shafts} quads=${dawn.value.quads}`);
    measured.dawnShafts = dawn.value;
  }
  const dc = await probe('draw calls with and without the shafts', () => { window.LumiDebug.setTime(0.75); return window.LumiDebug.drawCalls(); });
  if (dc) {
    measured.drawCallsDawn = dc;
    check('the shafts add exactly one draw call (shown minus hidden)', dc.delta === 1, JSON.stringify(dc));
    check('and that is what the game draws at dawn (natural minus hidden)', dc.natural - dc.hidden === 1, JSON.stringify(dc));
    check('hiding them twice reads the same (the count is stable)', dc.hiddenAgain === dc.hidden, `${dc.hidden} vs ${dc.hiddenAgain}`);
  }

  // Rain takes the light away.
  const dryOpacity = dawn.ok ? dawn.value.opacity : 0;
  await probe('heavy rain', () => { window.LumiDebug.forceWeather('HEAVY_RAIN'); return window.LumiDebug.setTime(0.75); });
  const wet = await until('shafts dim in rain', (dry) => {
    window.LumiDebug.setTime(0.75);
    const s = window.LumiDebug.shafts();
    return s && s.phase === 'DAWN' && s.rain > 0.5 && s.opacity < dry * 0.6 && s;
  }, dryOpacity);
  check('in heavy rain the shafts dim', wet.ok, `dry opacity ${dryOpacity} -> ${JSON.stringify(wet.value)}`);
  if (wet.ok) measured.rain = { dry: dryOpacity, wetOpacity: wet.value.opacity, rainRate: wet.value.rain };

  // Night: gone, and the draw count does not include them.
  await probe('clear sky, night', () => { window.LumiDebug.forceWeather('CLEAR'); return window.LumiDebug.setTime(0.25); });
  const night = await until('shafts gone at night', () => {
    window.LumiDebug.setTime(0.25);
    const s = window.LumiDebug.shafts();
    return s && s.phase === 'NIGHT' && !s.visible && s.opacity === 0 && s;
  });
  check('at NIGHT the shafts are not drawn', night.ok, JSON.stringify(night.value));
  const dcNight = await probe('draw calls at night', () => { window.LumiDebug.setTime(0.25); return window.LumiDebug.drawCalls(); });
  if (dcNight) {
    measured.drawCallsNight = dcNight;
    check('at NIGHT the natural draw count equals the hidden one', dcNight.natural === dcNight.hidden, JSON.stringify(dcNight));
  }
  // Dusk too.
  const dusk = await until('shafts at dusk', () => {
    window.LumiDebug.setTime(0.02);
    const s = window.LumiDebug.shafts();
    return s && s.phase === 'DUSK' && s.visible && s.opacity >= 0.18 && s;
  });
  check('at DUSK the shafts are back', dusk.ok, JSON.stringify(dusk.value));

  // Dev menu dials.
  const haze = await probe('the haze dials', () => {
    const wrap = document.getElementById('dev-skip-wrap');
    if (!wrap) return null;
    const text = wrap.textContent;
    const sliders = Array.from(wrap.querySelectorAll('input[type=range]'));
    const hazeNote = () => (/haze: reach [^·]+· max \S+/.exec(wrap.textContent) || [''])[0];
    const before = hazeNote();
    const reach = sliders.find((s) => s.parentElement && /^Haze(?! max)/.test(s.parentElement.textContent.trim()));
    const max = sliders.find((s) => s.parentElement && /Haze max/.test(s.parentElement.textContent));
    if (!reach || !max) return { text: text.slice(0, 200), found: false };
    reach.value = '200'; reach.dispatchEvent(new Event('input', { bubbles: true }));
    max.value = '0.5'; max.dispatchEvent(new Event('input', { bubbles: true }));
    const after = hazeNote();
    const stored = localStorage.getItem('lumi.dev.haze');
    // put it back
    const resetBtn = Array.from(wrap.querySelectorAll('button')).find((x) => /Reset haze/.test(x.textContent));
    if (resetBtn) resetBtn.click();
    return { found: true, before, after, stored, reset: hazeNote() };
  });
  check('the dev menu has Haze and Haze max dials', !!haze && haze.found, JSON.stringify(haze));
  if (haze && haze.found) {
    check('turning them reaches the haze tuning', /reach 200 m · max 0\.5/.test(haze.after), `${haze.before} -> ${haze.after}`);
    check('they are remembered for the next visit', !!haze.stored && /200/.test(haze.stored), haze.stored);
    check('Reset haze puts back the shipped 140 m / 0.78', /reach 140 m · max 0\.78/.test(haze.reset), haze.reset);
  }

  // ---- 8. The photo moment ---------------------------------------------------
  await probe('daylight again', () => window.LumiDebug.setTime(0.4));
  await probe('show the interface things photo mode must hide', () => {
    const caps = document.getElementById('sound-captions'); if (caps) { caps.style.opacity = '1'; caps.textContent = 'x'; }
  });
  const idle = await probe('photo idle', () => window.LumiDebug.photo());
  check('the photo moment is idle until H is held', !!idle && !idle.held && idle.offset === 0 && !idle.bodyClass, JSON.stringify(idle));
  const hudBefore = idle && idle.hudVisibility;
  await page.keyboard.down('h');
  const held = await until('H held', () => {
    const p = window.LumiDebug.photo();
    return p.held && p.hudVisibility === 'hidden' && p.offset > 0 && p;
  });
  check('holding H hides the HUD and starts the yaw drifting', held.ok, JSON.stringify(held.value));
  const hidden = await probe('what is hidden', () => {
    const vis = (id) => { const e = document.getElementById(id); return e ? getComputedStyle(e).visibility : 'absent'; };
    return { hud: vis('hud'), controls: vis('controls'), orb: vis('orb-hud'), captions: vis('sound-captions'), dev: vis('dev-skip-wrap'), settings: vis('settings-panel-root') };
  });
  check('the HUD, controls, orb count, captions and panels are all hidden', !!hidden && Object.values(hidden).every((v) => v === 'hidden' || v === 'absent'), JSON.stringify(hidden));
  const drift1 = held.ok ? held.value.offset : 0;
  const drift2 = await until('drift grows', (a) => { const p = window.LumiDebug.photo(); return p.held && p.offset > a && p.offset; }, drift1, 120000);
  check('the drift keeps growing while it is held', drift2.ok, `${drift1} -> ${drift2.value}`);
  check('and stays small (0.02 rad/s)', drift2.ok && drift2.value < 0.02 * 120, `offset=${drift2.value}`);
  measured.photoOffsetWhileHeld = drift2.value;
  await page.keyboard.up('h');
  const released = await until('H released', (v) => {
    const p = window.LumiDebug.photo();
    return !p.held && p.hudVisibility === v && p.offset === 0 && !p.bodyClass && p;
  }, hudBefore, 120000);
  check('releasing H restores the HUD and settles the yaw back to exactly zero', released.ok, JSON.stringify(released.value));

  // Reduced motion: still hides, never drifts.
  await probe('reduce motion', async () => { (await import('/src/state/settingsState.js')).setSetting('reducedMotion', true); });
  const rmFrames = await probe('frames before', () => window.LumiDebug.perf().fps.frames);
  await page.keyboard.down('h');
  const rmHeld = await until('H held, reduced motion', () => { const p = window.LumiDebug.photo(); return p.held && p.hudVisibility === 'hidden' && p; });
  check('under reduced motion H still hides the HUD', rmHeld.ok, JSON.stringify(rmHeld.value));
  const rmRan = await until('frames passed while held', (n) => window.LumiDebug.perf().fps.frames > n + 15 && 'ran', rmFrames, 120000);
  const rmAfter = await probe('offset after frames', () => window.LumiDebug.photo());
  check('under reduced motion the camera does not drift over many held frames', rmRan.ok && !!rmAfter && rmAfter.offset === 0, JSON.stringify(rmAfter));
  await page.keyboard.up('h');
  await probe('motion back', async () => { (await import('/src/state/settingsState.js')).setSetting('reducedMotion', false); });
  const rmDone = await until('restored after reduced-motion photo', (v) => { const p = window.LumiDebug.photo(); return !p.held && p.hudVisibility === v && p; }, hudBefore);
  check('and the HUD comes back', rmDone.ok, JSON.stringify(rmDone.value));

  check('still no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));
} catch (e) {
  bad.push(`the gate itself failed: ${String(e).split('\n')[0]}`);
  console.log(`  FAIL  the gate itself failed: ${String(e).split('\n').slice(0, 3).join(' / ')}`);
} finally {
  await b.close();
}
report();

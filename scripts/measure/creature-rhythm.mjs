/**
 * M2.2 gate: do the creatures actually keep hours?
 *
 * The decisions are unit-tested in systems/ai/__tests__/rhythm.test.js and the
 * state bodies in the fauna smoke tests. Neither proves the two are wired
 * together in the running game, which is the part that breaks: a state the
 * clock never reaches is indistinguishable from one that works.
 *
 * So this moves the world clock and counts what the creatures are doing.
 */
import { chromium } from 'playwright';
const ok = [], bad = [];
const check = (n, p, d) => (p ? ok : bad).push(`${n}${d ? ` — ${d}` : ''}`);

const b = await chromium.launch({
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'],
});
const p = await (await b.newContext({ viewport: { width: 900, height: 560 } })).newPage();
const errors = [];
p.on('pageerror', (e) => errors.push(String(e)));
p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await p.goto(process.env.LUMI_URL || 'http://localhost:5173/', { waitUntil: 'load' });
await p.waitForFunction(() => !!window.LumiDebug, null, { timeout: 30000 });
await p.evaluate(() => document.querySelector('#intro-continue')?.remove());
await p.mouse.click(450, 280);
await p.waitForTimeout(1200);
await p.evaluate(() => window.LumiDebug.skipIntro());
await p.waitForTimeout(2500);

// Only simulated creatures count. Each loop culls beyond its own radius and
// skips the rest, so a frozen creature's state says nothing about the rhythm.
const at = async (t, label, seconds, nearType, standoff) => {
  await p.evaluate((tt) => window.LumiDebug.setTime(tt), t);
  if (nearType) {
    await p.evaluate(([ty, so]) => window.LumiDebug.goTo(ty, so), [nearType, standoff || 30]);
  }
  await p.waitForTimeout(seconds * 1000);
  const f = await p.evaluate(() => window.LumiDebug.fauna());
  console.log(`  [${label}] phase=${f.phase} rain=${f.rain} storm=${f.storming}`);
  for (const k of ['deer', 'puff', 'moth']) {
    console.log(`    ${k.padEnd(5)} live=${f[k].live} frozen=${f[k].frozen} nearest=${f[k].nearestDist}m ${JSON.stringify(f[k].states)}`);
  }
  return f;
};

const night = await at(0.25, 'night', 16, 'deer', 30);
check('the clock reports night', night.phase === 'NIGHT', night.phase);
check('there are deer close enough to observe', night.deer.live > 0,
  `live=${night.deer.live} nearest=${night.deer.nearestDist}m`);
check('no deer is bedded down at night', !night.deer.states.bed, JSON.stringify(night.deer.states));
check('no puffling is indoors at night', !night.puff.states.home, JSON.stringify(night.puff.states));

const dawn = await at(0.75, 'dawn', 12, 'deer', 30);
check('the clock reports dawn', dawn.phase === 'DAWN', dawn.phase);

// The deer check is driven rather than waited for, and the reason is worth
// recording. A deer inside its alert radius (12 m walking) flips to `alert`
// before its state machine runs, so its walk timer never advances and it can
// never reach a bedding decision — stand close enough to watch and you see
// deer watching you. Stand back and they wander toward you again within half a
// minute. So instead of hoping the emergent path lines up inside a timeout,
// this puts one deer beyond the alert radius at its own decision point and
// checks what it decides. The clock, the weather read and the branch are all
// still real; only the timer is nudged.
const forced = await p.evaluate(async () => {
  const st = await import('/src/state/entityStore.js');
  const pl = await import('/src/core/player.js');
  let best = null, bestD2 = Infinity;
  for (const d of st.deers) {
    const dx = d.group.position.x - pl.player.pos.x;
    const dz = d.group.position.z - pl.player.pos.z;
    const d2 = dx * dx + dz * dz;
    if (d2 > 625 && d2 < 3600 && d2 < bestD2) { bestD2 = d2; best = d; }
  }
  if (!best) return null;
  best.state = 'walk';
  best.walkTimer = 0.05;
  window.__deer = best;
  return { dist: Math.round(Math.sqrt(bestD2) * 10) / 10 };
});
check('a deer is simulated but outside its alert radius', !!forced,
  forced ? `${forced.dist} m away` : 'none between 25 and 60 m');
if (forced) {
  await p.waitForTimeout(3000);
  const bed = await p.evaluate(() => ({
    state: window.__deer.state,
    hasTree: !!window.__deer._bedTgt,
    hold: Math.round(window.__deer._stT * 10) / 10,
  }));
  check('a deer reaching its decision at dawn beds down', bed.state === 'bed', JSON.stringify(bed));
  check('it bedded against a tree rather than in the open', bed.hasTree, JSON.stringify(bed));
  check('it holds the bed rather than popping straight out', bed.hold > 5, `hold=${bed.hold}s`);
}

const mothDawn = await at(0.75, 'dawn (by the moths)', 26, 'moth', 12);
check('moths rest rather than patrol at dawn',
  (mothDawn.moth.states.rest || 0) > 0,
  `live=${mothDawn.moth.live} ${JSON.stringify(mothDawn.moth.states)}`);

const dusk = await at(0.0, 'dusk', 22, 'puff', 14);
check('the clock reports dusk', dusk.phase === 'DUSK', dusk.phase);
check('pufflings head home at dusk', (dusk.puff.states.home || 0) > 0,
  `live=${dusk.puff.live} ${JSON.stringify(dusk.puff.states)}`);

// And the forest wakes up: the same deer must leave the bed once dawn passes.
await p.evaluate(() => window.LumiDebug.setTime(0.25));
if (forced) {
  await p.evaluate(() => { window.__deer._stT = 0.05; });   // its hold expires now
  await p.waitForTimeout(3000);
  const woke = await p.evaluate(() => ({ state: window.__deer.state }));
  check('the same deer gets up once dawn has passed', woke.state !== 'bed', JSON.stringify(woke));
}

check('no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await b.close();
console.log('\n' + [...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`)].join('\n'));
console.log(`\n${ok.length} passed, ${bad.length} failed`);
process.exit(bad.length ? 1 : 0);

/**
 * M2.3 gate: are the couplings actually wired, and is the gust a wave?
 *
 * Two things here that a build cannot catch. A missing import is a runtime
 * ReferenceError, not a syntax error, so `npm run build` passes happily on a
 * frame loop that throws every tick — one of these couplings shipped that way
 * for exactly as long as it took this gate to run. And a gust that moves the
 * whole canopy at once looks identical in the source to one that travels; only
 * sampling the wave in two places tells them apart.
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
await p.waitForTimeout(3000);

// A frame loop that throws every tick is the failure a build cannot see.
check('the frame loop runs without throwing', errors.length === 0, errors.slice(0, 2).join(' | '));

const e0 = await p.evaluate(() => window.LumiDebug.env());
console.log('  env:', JSON.stringify(e0));
check('the environment reporter answers', !!e0);
check('the player is standing on something real',
  ['water', 'rock', 'mud', 'grass'].includes(e0.ground), `ground=${e0.ground}`);

// The gust must be a travelling wave, not a global switch.
check('the gust reads differently a half-wavelength away',
  Math.abs(e0.waveHere - e0.waveAcross) > 0.3,
  `here=${e0.waveHere} across=${e0.waveAcross}`);

await p.waitForTimeout(2500);
const e1 = await p.evaluate(() => window.LumiDebug.env());
check('the gust front travels: its phase advances', e1.gustPhase !== e0.gustPhase,
  `${e0.gustPhase} -> ${e1.gustPhase}`);
check('the gust direction is a unit-ish vector',
  Math.abs(Math.hypot(e1.gustDir.x, e1.gustDir.z) - 1) < 0.01,
  JSON.stringify(e1.gustDir));

// Ground classification must respond to where the player actually is.
const kinds = await p.evaluate(async () => {
  const st = await import('/src/state/entityStore.js');
  const out = {};
  if (st.ponds.length) {
    window.LumiDebug.teleport(st.ponds[0].x, st.ponds[0].z);
    out.onPond = window.LumiDebug.env().ground;
  }
  if (st.rocks_data.length) {
    window.LumiDebug.teleport(st.rocks_data[0].x, st.rocks_data[0].z);
    out.onRock = window.LumiDebug.env().ground;
  }
  window.LumiDebug.teleport(0, 0);
  out.atOrigin = window.LumiDebug.env().ground;
  return out;
});
console.log('  ground by place:', JSON.stringify(kinds));
check('standing in a pond reads as water', kinds.onPond === 'water', `got ${kinds.onPond}`);
check('standing on a rock reads as rock', kinds.onRock === 'rock', `got ${kinds.onRock}`);
check('open ground does not read as water', kinds.atOrigin !== 'water', `got ${kinds.atOrigin}`);

// The score must fill in as the forest is restored.
const before = (await p.evaluate(() => window.LumiDebug.env())).music;
await p.evaluate(() => window.LumiDebug.grantOrbs(4));
await p.waitForTimeout(2000);
const after = (await p.evaluate(() => window.LumiDebug.env())).music;
console.log('  music:', JSON.stringify(before), '->', JSON.stringify(after));
check('the harp thickens as the forest is restored', after.harpRate > before.harpRate,
  `${before.harpRate} -> ${after.harpRate}`);
check('the flute is held back at the start and arrives later',
  before.fluteChance === 0 && after.fluteChance > 0,
  `${before.fluteChance} -> ${after.fluteChance}`);

check('still no page errors after all of it', errors.length === 0, errors.slice(0, 3).join(' | '));

await b.close();
console.log('\n' + [...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`)].join('\n'));
console.log(`\n${ok.length} passed, ${bad.length} failed`);
process.exit(bad.length ? 1 : 0);

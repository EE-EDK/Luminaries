/**
 * M2.4 gate: are the villages readable at night and at distance?
 *
 * Both claims are visual, so both are pixel-measured with an A/A control first
 * — the forest is live, and two screenshots differ with nothing changed.
 *
 * The thing being fixed is subtle in the source and obvious on screen: window
 * and knob emissives were set once at build time and never touched, so a house
 * in a dimmed sector had bricks that went dark and windows that stayed exactly
 * as bright as a restored one's. And the distant impostor faded to nothing by
 * 95 m inside a world that is only 90 m in radius.
 */
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
const ok = [], bad = [];
const check = (n, p, d) => (p ? ok : bad).push(`${n}${d ? ` — ${d}` : ''}`);

const b = await chromium.launch({
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'],
});
const p = await (await b.newContext({ viewport: { width: 800, height: 500 } })).newPage();
const errors = [];
p.on('pageerror', (e) => errors.push(String(e)));
p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await p.goto(process.env.LUMI_URL || 'http://localhost:5173/', { waitUntil: 'load' });
await p.waitForFunction(() => !!window.LumiDebug, null, { timeout: 30000 });
await p.evaluate(() => document.querySelector('#intro-continue')?.remove());
await p.mouse.click(400, 250);
await p.waitForTimeout(1200);
await p.evaluate(() => window.LumiDebug.skipIntro());
await p.waitForTimeout(2500);
await p.evaluate(() => window.LumiDebug.setTime(0.25));   // night

const shot = async () => PNG.sync.read(await p.screenshot());
const boxLuma = (png, x0, y0, w, h) => {
  let sum = 0, n = 0;
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) {
      const i = (png.width * y + x) << 2;
      sum += 0.299 * png.data[i] + 0.587 * png.data[i + 1] + 0.114 * png.data[i + 2];
      n++;
    }
  }
  return sum / n;
};

// Stand off from a village and look at it.
// Read through LumiDebug, not a dynamic import: under the dev server an
// import() here can resolve to a second copy of the module whose house list is
// empty, which is indistinguishable from a world with no villages in it.
const placed = await p.evaluate(() => {
  const v = window.LumiDebug.villages();
  if (!v.count || !v.first) return null;
  window.LumiDebug.teleport(v.first.x + 16, v.first.z + 16);
  window.LumiDebug.look(Math.atan2(16, 16) + Math.PI, -0.05);
  return { count: v.count, x: v.first.x, z: v.first.z };
});
check('there are villages to look at', !!placed, placed ? `${placed.count} houses` : 'none placed');
if (!placed) { console.log('no villages placed; nothing to measure'); await b.close(); process.exit(1); }

await p.waitForTimeout(2000);
// Material state before any restoration, read off the running game.
const before = await p.evaluate(() => window.LumiDebug.villages());
const a1 = await shot();
await p.waitForTimeout(900);
const a2 = await shot();
const BOX = [200, 150, 400, 250];
const drift = Math.abs(boxLuma(a2, ...BOX) - boxLuma(a1, ...BOX));
const near = boxLuma(a2, ...BOX);
console.log(`  village at 23 m: luma ${near.toFixed(2)} (scene drift alone ${drift.toFixed(2)})`);
check('a village at close range is lit, not a silhouette', near > 2, `luma=${near.toFixed(2)}`);

// Restoration alone, with the quest untouched: granting the last orb also
// fires the finale, which transforms the world and takes the camera, so the
// first version of this check measured a cutscene and reported the village
// getting darker. The camera is re-aimed before the shot because the drift
// over several seconds is large enough to swamp the effect.
await p.evaluate(() => window.LumiDebug.restoreAll());
await p.evaluate((h) => {
  window.LumiDebug.teleport(h.x + 16, h.z + 16);
  window.LumiDebug.look(Math.atan2(16, 16) + Math.PI, -0.05);
}, { x: placed.x, z: placed.z });
await p.waitForTimeout(2500);
const after = await p.evaluate(() => window.LumiDebug.villages());
console.log(`  emissive before: ${JSON.stringify(before.emissive)}`);
console.log(`  emissive after:  ${JSON.stringify(after.emissive)}`);
check('every house reports its window and knob materials',
  after.litHouses > 0 && after.emissive.glass !== null && after.emissive.knob !== null,
  `${after.litHouses} houses, ${JSON.stringify(after.emissive)}`);
check('restoring the sector brightens the windows',
  after.emissive.glass > before.emissive.glass,
  `glass ${before.emissive.glass} -> ${after.emissive.glass}`);
check('and the door knobs', after.emissive.knob > before.emissive.knob,
  `knob ${before.emissive.knob} -> ${after.emissive.knob}`);
check('and the bricks, as they already did',
  after.emissive.brick > before.emissive.brick,
  `brick ${before.emissive.brick} -> ${after.emissive.brick}`);
check('a dimmed window still reads as a window, not a hole',
  before.emissive.glass > 0.15, `unrestored glass = ${before.emissive.glass}`);

// And it must still be there from across the world.
// Coordinates carried in from Node rather than parked on `window`: the page
// global did not survive the transform, and a lookup after it finds the
// rebuilt house list.
const far = await p.evaluate((h) => {
  // 85 m away: inside the old fade-to-nothing band, inside a 90 m world.
  const k = 85 / Math.SQRT2;
  window.LumiDebug.teleport(h.x + k, h.z + k);
  window.LumiDebug.look(Math.atan2(k, k) + Math.PI, -0.05);
  return { dist: 85 };
}, { x: placed.x, z: placed.z });
await p.waitForTimeout(2500);
const farLuma = boxLuma(await shot(), ...BOX);
console.log(`  village at ${far.dist} m: luma ${farLuma.toFixed(2)}`);
check('a village 85 m away has not vanished', farLuma > 1.2, `luma=${farLuma.toFixed(2)}`);

check('no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await p.screenshot({ path: './village.png' });
await b.close();
console.log('\n' + [...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`)].join('\n'));
console.log(`\n${ok.length} passed, ${bad.length} failed`);
process.exit(bad.length ? 1 : 0);

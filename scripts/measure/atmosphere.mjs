/**
 * M1.4 gate: the vignette must be visible without crushing the corners, the
 * grain must be film rather than noise, and reduced motion must turn the
 * grain off. Measured off the rendered pixels, not off the uniform values —
 * a uniform set to 0.34 proves the assignment ran, not that anything darkened.
 */
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
const ok = [], bad = [];
const check = (n, p, d) => (p ? ok : bad).push(`${n}${d ? ` — ${d}` : ''}`);

const b = await chromium.launch({ args:['--use-gl=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox'] });
const p = await (await b.newContext({ viewport:{width:800,height:500} })).newPage();
const errors = [];
p.on('pageerror', e => errors.push(String(e)));
p.on('console', m => { if (m.type()==='error') errors.push(m.text()); });

await p.goto('http://localhost:5173/', { waitUntil:'load' });
await p.waitForFunction(() => !!window.LumiDebug, null, { timeout:30000 });
await p.evaluate(() => document.querySelector('#intro-continue')?.remove());
await p.mouse.click(400, 250);
await p.waitForTimeout(1500);
await p.evaluate(() => window.LumiDebug.skipIntro());
await p.waitForTimeout(3000);

/** Mean luminance over a box, from a PNG buffer. */
const boxLuma = (png, x0, y0, w, h) => {
  let sum = 0, n = 0;
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) {
      const i = (png.width * y + x) << 2;
      sum += 0.299 * png.data[i] + 0.587 * png.data[i+1] + 0.114 * png.data[i+2];
      n++;
    }
  }
  return sum / n;
};

const shot = async () => PNG.sync.read(await p.screenshot());

// --- Vignette: the same pixels with it off and on ---------------------------
// Corner-vs-centre says nothing here: the corners hold sky and the centre
// holds dark forest, so the corners are legitimately brighter. The only
// honest measurement is the same pixels A/B'd against the effect itself.
const CORNERS = [[2,2,90,90],[708,2,90,90],[2,408,90,90],[708,408,90,90]];
const cornerLuma = (png) => CORNERS.reduce((a, c) => a + boxLuma(png, ...c), 0) / CORNERS.length;

await p.evaluate(() => window.LumiDebug.post({ vignette: 0, grain: 0 }));
await p.waitForTimeout(400);
const off = await shot();
// A/A control: the forest is live — creatures move, the clock advances — so
// two shots differ even with nothing changed. Measure that drift first, or
// it gets attributed to whatever was toggled in between.
await p.waitForTimeout(400);
const offAgain = await shot();
await p.evaluate(() => window.LumiDebug.post({ vignette: 0.34, grain: 0 }));
await p.waitForTimeout(400);
const on = await shot();

const cOff = cornerLuma(off), cOn = cornerLuma(on);
const mid = (png) => boxLuma(png, 340, 190, 120, 120);
const mOff = mid(off), mOn = mid(on);

check('the vignette darkens the corners', cOn < cOff * 0.95,
  `corners ${cOff.toFixed(1)} -> ${cOn.toFixed(1)}`);
const drift = Math.abs(mid(offAgain) - mOff);
check('the vignette leaves the centre alone',
  Math.abs(mOn - mOff) <= Math.max(drift * 2.5, 1.0),
  `centre ${mOff.toFixed(1)} -> ${mOn.toFixed(1)}, scene drift alone ${drift.toFixed(2)}`);
check('the corner change is far larger than the drift',
  Math.abs(cOn - cOff) > Math.abs(mOn - mOff) * 2,
  `corners ${(cOff - cOn).toFixed(1)} vs centre ${(mOff - mOn).toFixed(1)}`);
check('the vignette does not crush the corners to black', cOn > cOff * 0.55,
  `corners ${cOff.toFixed(1)} -> ${cOn.toFixed(1)}`);
check('the scene is still lit', mOn > 8, `centre=${mOn.toFixed(1)}`);

// --- Grain: two frames, same scene ------------------------------------------
await p.evaluate(() => window.LumiDebug.post({ vignette: 0.34, grain: 0.042 }));
await p.waitForTimeout(300);
const a1 = await shot();
await p.waitForTimeout(150);
const a2 = await shot();
let diff = 0, n = 0;
for (let y = 180; y < 300; y++) for (let x = 340; x < 460; x++) {
  const i = (a1.width * y + x) << 2;
  diff += Math.abs(a1.data[i] - a2.data[i]); n++;
}
const meanDiff = diff / n;
check('the grain is moving', meanDiff > 0.2, `mean frame delta=${meanDiff.toFixed(2)}`);
check('the grain is film, not static', meanDiff < 25, `mean frame delta=${meanDiff.toFixed(2)}`);

// --- The per-frame driver, read from the live module instance ---------------
await p.evaluate(() => window.LumiDebug.post(null));
await p.waitForTimeout(600);
const live = await p.evaluate(() => window.LumiDebug.post());
check('the driver keeps a vignette on screen', live && live.vignette > 0.05, JSON.stringify(live));
check('the driver keeps grain on screen', live && live.grain > 0, JSON.stringify(live));

await p.evaluate(async () => {
  const m = await import('/src/state/settingsState.js');
  m.setSetting('reducedMotion', true);
});
await p.waitForTimeout(900);
const post = await p.evaluate(() => window.LumiDebug.post());
check('reduced motion turns the grain off', post && post.grain === 0, JSON.stringify(post));
check('the vignette survives reduced motion', post && post.vignette > 0.05, JSON.stringify(post));

check('no page errors', errors.length === 0, errors.slice(0,3).join(' | '));

await p.screenshot({ path: './atmos.png' });
await b.close();
console.log([...ok.map(s=>`  PASS  ${s}`), ...bad.map(s=>`  FAIL  ${s}`)].join('\n'));
console.log(`\n${ok.length} passed, ${bad.length} failed`);
process.exit(bad.length ? 1 : 0);

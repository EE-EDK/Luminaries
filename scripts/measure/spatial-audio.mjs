/**
 * M2.1 gate: does sound actually come from somewhere?
 *
 * The old pan was `dx / max(dist, 1)` on the x axis alone — dz was used for
 * the distance and thrown away, so a deer behind the player and one in front
 * produced identical audio. Reading the panning code back would not have
 * caught that, so this instruments the real AudioContext before the page
 * loads and counts which node types the game actually builds.
 */
import { chromium } from 'playwright';
const ok = [], bad = [];
const check = (n, p, d) => (p ? ok : bad).push(`${n}${d ? ` — ${d}` : ''}`);

const b = await chromium.launch({
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox',
    '--autoplay-policy=no-user-gesture-required'],
});
const p = await (await b.newContext({ viewport: { width: 900, height: 560 } })).newPage();
const errors = [];
p.on('pageerror', (e) => errors.push(String(e)));
p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

// Count node types at the source, before any game code runs.
await p.addInitScript(() => {
  window.__audio = { panner: 0, stereo: 0, models: [] };
  const wrap = (proto) => {
    if (!proto) return;
    const cp = proto.createPanner;
    if (cp) {
      proto.createPanner = function (...a) {
        window.__audio.panner++;
        const n = cp.apply(this, a);
        // Record the model after the game configures it, not now.
        setTimeout(() => { try { window.__audio.models.push(n.panningModel); } catch (_) {} }, 0);
        return n;
      };
    }
    const cs = proto.createStereoPanner;
    if (cs) {
      proto.createStereoPanner = function (...a) {
        window.__audio.stereo++;
        return cs.apply(this, a);
      };
    }
  };
  wrap(window.AudioContext && window.AudioContext.prototype);
  wrap(window.webkitAudioContext && window.webkitAudioContext.prototype);
});

await p.goto(process.env.LUMI_URL || 'http://localhost:5173/', { waitUntil: 'load' });
await p.waitForFunction(() => !!window.LumiDebug, null, { timeout: 30000 });

// A real click: the AudioContext is built on the first gesture by design.
await p.evaluate(() => document.querySelector('#intro-continue')?.remove());
await p.mouse.click(450, 280);
await p.waitForTimeout(1200);
await p.evaluate(() => window.LumiDebug.skipIntro());

const ready = await p.waitForFunction(
  () => { const a = window.LumiDebug.audio(); return a && a.initialized; }, null, { timeout: 30000 },
).then(() => true).catch(() => false);
check('the audio context comes up on a gesture', ready);

const stage = await p.evaluate(() => window.LumiDebug.audio());
check('a listener exists at all', !!stage?.hasListener, JSON.stringify(stage?.hasListener));
check('the listener exposes AudioParams', !!stage?.listenerParams);
check('desktop gets HRTF', stage?.model === 'HRTF', `model=${stage?.model}`);

// The listener must follow the camera. Turn, and watch the forward vector move.
// Driven through the debug setter, not a real mouse drag: a drag on the canvas
// takes pointer lock, and in headless Chromium the lock request never resolves,
// so the drag hangs forever. The heading is what matters, not how it was reached.
await p.evaluate(() => window.LumiDebug.look(0, 0));
await p.waitForTimeout(600);
const before = await p.evaluate(() => window.LumiDebug.audio()?.listenerAt);
await p.evaluate(() => window.LumiDebug.look(Math.PI / 2, 0));
await p.waitForTimeout(600);
const after = await p.evaluate(() => window.LumiDebug.audio()?.listenerAt);
const turned = before && after
  && (Math.abs(after.fx - before.fx) > 0.05 || Math.abs(after.fz - before.fz) > 0.05);
check('the listener turns when the player turns', turned,
  before && after ? `forward ${before.fx.toFixed(2)},${before.fz.toFixed(2)} -> ${after.fx.toFixed(2)},${after.fz.toFixed(2)}` : 'no reading');

// Make noise with a known geometry and count the node types built.
await p.evaluate(() => window.LumiDebug.grantOrbs(2));   // laser hums, orb stings
await p.waitForTimeout(2500);
const counts = await p.evaluate(() => window.__audio);
check('the game builds real 3D panners', counts.panner > 0, `createPanner=${counts.panner}`);
check('no hand-rolled stereo panner is built', counts.stereo === 0, `createStereoPanner=${counts.stereo}`);
check('every panner carries the chosen model',
  counts.models.length > 0 && counts.models.every((m) => m === 'HRTF'),
  `models=${JSON.stringify([...new Set(counts.models)])}`);

// The pool must not grow without bound while sounds keep firing.
check('a quarter turn left points the ears at -X, as the camera does',
  !!after && after.fx < -0.8 && Math.abs(after.fz) < 0.3,
  after ? `forward ${after.fx.toFixed(2)},${after.fz.toFixed(2)}` : 'no reading');

const poolBefore = (await p.evaluate(() => window.LumiDebug.audio())).pool;
await p.waitForTimeout(4000);
const poolAfter = (await p.evaluate(() => window.LumiDebug.audio())).pool;
check('the panner pool stays bounded', poolAfter.pooled <= poolAfter.size,
  `pooled=${poolAfter.pooled}/${poolAfter.size}, live ${poolBefore.live} -> ${poolAfter.live}`);
check('panners are returned rather than leaked', poolAfter.pooled > 0 || poolAfter.live < 40,
  `pooled=${poolAfter.pooled} live=${poolAfter.live}`);

check('no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await b.close();
console.log([...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`)].join('\n'));
console.log(`\n${ok.length} passed, ${bad.length} failed`);
process.exit(bad.length ? 1 : 0);

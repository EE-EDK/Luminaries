/**
 * How many of each rigged creature type sit inside their own cull radius, over a grid of stand points
 * across the map: the numbers the pose band's N is chosen from (M5.3). Reads the live entity store.
 *   LUMI_URL=http://localhost:5173/ node scripts/measure/fauna-live-counts.mjs
 */
import { chromium } from 'playwright';
const URL = process.env.LUMI_URL || 'http://localhost:5173/';
const b = await chromium.launch({ executablePath: process.env.LUMI_BROWSER || undefined, args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'] });
const page = await (await b.newContext({ viewport: { width: 640, height: 400 } })).newPage();
await page.goto(URL, { waitUntil: 'load' });
await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: 120000 });
await page.evaluate(() => document.querySelector('#intro-continue')?.remove());
await page.mouse.click(320, 200); await page.waitForTimeout(1200);
await page.evaluate(() => { window.LumiDebug.skipIntro(); });
await page.waitForTimeout(2000);
const out = await page.evaluate(async () => {
  const urls = (path) => [...new Set([...performance.getEntriesByType('resource').map((e) => e.name.replace(location.origin, '')).filter((n) => n.split('?')[0] === path), path])];
  let R = null, ST = null;
  search: for (const ru of urls('/src/core/renderer.js')) { const Rc = await import(ru); for (const su of urls('/src/state/entityStore.js')) { const S = await import(su); const c = S.deers[0]; if (!c) continue; let hit = false; Rc.scene.traverse((o) => { if (o === c.group) hit = true; }); if (hit) { R = Rc; ST = S; break search; } } }
  const cull = { deer: 3600, moth: 2025, puff: 1600 };
  const arrs = { deer: ST.deers, moth: ST.moths, puff: ST.puffs };
  const res = { n: {}, samples: 0, stats: {} };
  for (const k in arrs) res.n[k] = arrs[k].length;
  const counts = { deer: [], moth: [], puff: [] };
  for (let x = -75; x <= 75; x += 7.5) for (let z = -75; z <= 75; z += 7.5) {
    if (Math.hypot(x, z) > 80) continue;
    res.samples++;
    for (const k in arrs) { let c = 0; for (const e of arrs[k]) { const dx = e.group.position.x - x, dz = e.group.position.z - z; if (dx * dx + dz * dz <= cull[k]) c++; } counts[k].push(c); }
  }
  for (const k in counts) { const a = counts[k].slice().sort((p, q) => p - q); const q = (f) => a[Math.min(a.length - 1, Math.floor(f * a.length))]; res.stats[k] = { mean: +(a.reduce((p, q2) => p + q2, 0) / a.length).toFixed(1), p50: q(0.5), p90: q(0.9), p95: q(0.95), max: a[a.length - 1] }; }
  return res;
});
console.log(JSON.stringify(out));
await b.close();

/**
 * M5.1 gate: the deer's GPU rig, measured on the running game.
 *
 * The deer used to be 17 meshes under 14 pivot groups that updates/fauna/deer.js
 * rotated every frame. It is now 3 meshes (body, unlit, trail) whose vertices
 * carry a joint index; the same angles reach the GPU as quaternions through
 * rig.pose() / rig.upload(). Unit tests prove the CPU composition equals the
 * old scene graph. They cannot prove a vertex shader runs, that the uniform
 * arrays reach it, or that a deer still looks like a deer. This does.
 *
 * What is asserted, in order:
 *   1. The frame loop is turning (LumiDebug.perf().fps.frames moves). A missing
 *      import is a runtime ReferenceError that `npm run build` cannot see.
 *   2. Nothing threw on the way in.
 *   3. There are live deer (LumiDebug.fauna()).
 *   4. Draw calls: one deer, isolated in front of the camera, shown vs hidden,
 *      counted on the main scene render only. Rig build: <= 3 per scene render.
 *   5. Pose evidence. One deer is lifted out of the simulation so nothing
 *      overwrites it, placed side-on 3.4 m ahead, and given known poses by
 *      writing the SAME state fields the update loop writes (neckBasePivot.
 *      rotation.x ... legPivots[i].upper.rotation.x ...) and then, on the rig
 *      build, calling writeDeerPose(). Each pose is screenshotted with the deer
 *      visible and hidden; the difference is the deer's silhouette (an A/A pair
 *      of hidden frames measures scene drift first). Then, per joint, every
 *      sampled vertex is projected to the screen twice - where the rig says it
 *      should be, and where it would be un-posed - and the silhouette is read
 *      at both. A shader that ignores the uniforms puts the pixels at the
 *      un-posed place; a shader that applies them puts the pixels at the posed
 *      place. Reading the picture, not the table.
 *   6. Optional cross-version check: LUMI_BASELINE=<dir> compares the silhouette
 *      against PNGs saved by LUMI_SAVE=<dir> from the pre-rig build.
 *
 * What this cannot prove: how the deer reads on a real GPU with real bloom, the
 * translucent sort of merged parts, or whether a walk cycle feels right. That
 * is the owner's eyes. SwiftShader is a software rasteriser.
 *
 * Run (needs playwright + pngjs, see README.md; LUMI_BROWSER=<path> picks a
 * browser binary, LUMI_SAVE / LUMI_BASELINE as above, LUMI_POSES=lying,flee
 * runs a subset of poses, LUMI_ONLY=draws stops after the draw-call count):
 *   npx vite --port 5175
 *   LUMI_URL=http://localhost:5175/ node scripts/measure/deer-rig.mjs
 */
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import fs from 'node:fs';
import path from 'node:path';

const URL = process.env.LUMI_URL || 'http://localhost:5173/';
const SAVE = process.env.LUMI_SAVE || '';
const BASE = process.env.LUMI_BASELINE || '';
const W = 640, H = 400;

const ok = [], bad = [], notes = [];
const check = (n, pass, d) => (pass ? ok : bad).push(`${n}${d ? ` - ${d}` : ''}`);

const b = await chromium.launch({ executablePath: process.env.LUMI_BROWSER || undefined, args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'] });
const page = await (await b.newContext({ viewport: { width: W, height: H } })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

/** Run a probe in the page, or record a failure and return null. */
async function probe(name, fn, arg) {
  try {
    return await page.evaluate(fn, arg);
  } catch (e) {
    bad.push(`${name} - threw in the page: ${String(e).split('\n')[0]}`);
    return null;
  }
}

function report() {
  console.log([...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`), ...notes.map((s) => `  note  ${s}`)].join('\n'));
  console.log(`\n${ok.length} passed, ${bad.length} failed`);
  process.exit(bad.length ? 1 : 0);
}

/** Wait until the game has rendered n more frames. Never a fixed sleep. */
async function frames(n) {
  const f0 = await page.evaluate(() => window.LumiDebug.perf().fps.frames);
  await page.waitForFunction(([a, k]) => window.LumiDebug.perf().fps.frames >= a + k, [f0, n], { timeout: 120000 });
}

const decode = (buf) => PNG.sync.read(buf);
/** Per-pixel colour distance above `thresh` between two frames. */
function differs(a, bb, i, thresh) {
  return Math.abs(a.data[i * 4] - bb.data[i * 4]) + Math.abs(a.data[i * 4 + 1] - bb.data[i * 4 + 1]) + Math.abs(a.data[i * 4 + 2] - bb.data[i * 4 + 2]) > thresh;
}
/**
 * Silhouette of the deer: pixels that differ between the frame with the deer
 * and BOTH of two frames without it, while those two empty frames agree with
 * each other. The live scene drifts (fireflies, jellies, bloom), so a plain
 * with-versus-without difference is mostly drift; a pixel that drifts between
 * the two empty frames cannot be credited to the deer.
 */
function silhouette(vis, hidA, hidB, thresh = 36) {
  const m = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) {
    if (differs(vis, hidA, i, thresh) && differs(vis, hidB, i, thresh) && !differs(hidA, hidB, i, thresh)) m[i] = 1;
  }
  return m;
}
/** Fraction of set pixels of `a` that have a set pixel of `b` within r px. */
function covered(a, b, roi, r = 2) {
  let n = 0, hit = 0;
  for (let y = roi.y0; y < roi.y1; y++) for (let x = roi.x0; x < roi.x1; x++) if (a[y * W + x]) { n++; if (near(b, x, y, r)) hit++; }
  return n ? hit / n : 0;
}
const count = (m, roi) => {
  let n = 0;
  for (let y = roi.y0; y < roi.y1; y++) for (let x = roi.x0; x < roi.x1; x++) n += m[y * W + x];
  return n;
};
/** Is any mask pixel within r px of (x, y)? */
function near(m, x, y, r = 2) {
  const xi = Math.round(x), yi = Math.round(y);
  for (let dy = -r; dy <= r; dy++) {
    for (let dx = -r; dx <= r; dx++) {
      const px = xi + dx, py = yi + dy;
      if (px >= 0 && py >= 0 && px < W && py < H && m[py * W + px]) return true;
    }
  }
  return false;
}

try {
  await page.goto(URL, { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: 60000 });
  await page.evaluate(() => document.querySelector('#intro-continue')?.remove());
  await page.mouse.click(W / 2, H / 2);
  await page.waitForTimeout(1200);
  await probe('the debug surface is reachable', () => window.LumiDebug.skipIntro());

  // 1. The frame loop, off the game's own counter.
  const loop = await probe('the frame loop is running', async () => {
    const before = window.LumiDebug.perf().fps.frames;
    await new Promise((r) => setTimeout(r, 2500));
    return { before, after: window.LumiDebug.perf().fps.frames };
  });
  if (loop) check('the frame loop is running', loop.after > loop.before, `frames ${loop.before} -> ${loop.after}`);
  check('nothing threw on the way in', errors.length === 0, errors.slice(0, 3).join(' | '));

  await probe('night, standing at the origin', () => {
    const L = window.LumiDebug;
    L.setTime(0.25); L.teleport(0, 0); L.look(0, 0);
    // Film grain moves every frame and would be read as scene drift in every A/A pair below.
    L.post({ vignette: 0, grain: 0 });
    // The adaptive scaler changes render scale when FPS dips (it always dips under SwiftShader).
    L.quality(false);
    // The control-hint bar covers the lower part of the frame, which is where the hooves are.
    const st = document.createElement('style');
    st.textContent = 'body *:not(canvas){visibility:hidden!important} canvas{visibility:visible!important}';
    document.head.appendChild(st);
  });
  await frames(2);

  // 3. Live deer, as the game itself counts them.
  const f = await probe('fauna() answers', () => window.LumiDebug.fauna());
  if (f) check('there are live deer', f.deer.live > 0, `live=${f.deer.live} frozen=${f.deer.frozen}`);

  // Handles into the live module instances. The README warns an import() can
  // hand back a second copy; each handle is proved to be the live one below
  // (the deer's group must be in the scene graph the renderer draws).
  const handles = await probe('module handles', async () => {
    const R = await import('/src/core/renderer.js');
    const ST = await import('/src/state/entityStore.js');
    const T = await import('/src/world/terrain.js');
    const d0 = ST.deers[0];
    // Only the rig build has the module; importing it on the pre-rig build is a 404 the console reports as an error.
    let rigMod = null;
    if (d0.rig) { try { rigMod = await import('/src/entities/fauna/deerRig.js'); } catch (e) { rigMod = null; } }
    window.__G = { R, ST, T, rigMod };
    let inScene = false;
    R.scene.traverse((o) => { if (o === d0.group) inScene = true; });
    const rr = R.renderer, orig = rr.render.bind(rr);
    window.__sceneRenders = 0; window.__sceneCalls = 0;
    rr.info.autoReset = false;
    rr.render = function (s, c) {
      const c0 = rr.info.render.calls;
      orig(s, c);
      if (s === R.scene) { window.__sceneRenders++; window.__sceneCalls += rr.info.render.calls - c0; }
    };
    return { inScene, hasRig: !!d0.rig, hasRigMod: !!rigMod, nDeer: ST.deers.length };
  });
  if (!handles) { report(); }
  check('the entity store is the live instance (deer is in the drawn scene)', handles.inScene);
  const RIG = handles.hasRig;
  notes.push(`build under test: ${RIG ? 'GPU rig (deer.rig present)' : 'scene-graph pivots (no deer.rig) - baseline mode'}`);
  if (RIG) check('the rig module is importable at its path', handles.hasRigMod);

  // Every deer as the player meets them at the origin: all simulated, all
  // hooked, counted at the source over several scene renders.
  const crowd = await probe('count the whole herd', async () => {
    const { R, ST } = window.__G;
    const rr = R.renderer;
    window.__herdCalls = 0;
    for (const d of ST.deers) {
      d.group.traverse((o) => {
        if (!o.isMesh) return;
        let c0 = 0;
        o.onBeforeRender = () => { c0 = rr.info.render.calls; };
        o.onAfterRender = () => { window.__herdCalls += rr.info.render.calls - c0; };
      });
    }
    const wait = (n) => new Promise((res) => { const t = window.__sceneRenders + n; const iv = setInterval(() => { if (window.__sceneRenders >= t) { clearInterval(iv); res(); } }, 50); });
    await wait(1);
    const a = [window.__sceneRenders, window.__herdCalls, window.__sceneCalls];
    await wait(8);
    const c = [window.__sceneRenders, window.__herdCalls, window.__sceneCalls];
    const n = c[0] - a[0];
    let meshes = 0;
    for (const d of ST.deers) d.group.traverse((o) => { if (o.isMesh) meshes++; });
    return { deers: ST.deers.length, deerCalls: (c[1] - a[1]) / n, sceneCalls: (c[2] - a[2]) / n, meshes, programs: rr.info.programs.length };
  });
  if (crowd) notes.push(`at the origin, night, ${crowd.deers} deer simulated (${crowd.meshes} deer meshes): deer draw calls per main-scene render = ${crowd.deerCalls.toFixed(1)}, whole scene = ${crowd.sceneCalls.toFixed(1)}; shader programs compiled so far: ${crowd.programs}`);

  // Pull every deer out of the simulation and out of sight, then stand one
  // side-on in front of the camera. Out of the `deers` array, nothing rewrites
  // its pose or visibility.
  const scene = await probe('isolate one deer', () => {
    const { R, ST, T } = window.__G;
    const saved = ST.deers.splice(0, ST.deers.length);
    for (const d of saved) d.group.visible = false;
    const d = saved[0];
    window.__d = d; window.__saved = saved;
    const cam = R.camera;
    const dir = cam.position.clone();
    cam.getWorldDirection(dir);
    const hl = Math.hypot(dir.x, dir.z) || 1;
    const dx = dir.x / hl, dz = dir.z / hl;
    const D = 3.4;
    const x = cam.position.x + dx * D, z = cam.position.z + dz * D;
    d.group.position.set(x, T.getGroundY(x, z), z);
    d.group.rotation.set(0, Math.atan2(-dz, dx), 0);   // forward = (-dz, dx): side-on
    d.group.visible = true;
    // updateDeers hides the small unlit meshes (eyes, nostrils, antler sparks) beyond 30 m; it was out of the loop when it was last far away.
    for (const m of d._detail || []) m.visible = true;
    for (const t of d.trailSpheres || []) t.mesh.visible = false;   // keep the silhouette to the body
    d.group.updateMatrixWorld(true);
    let meshes = 0;
    d.group.traverse((o) => { if (o.isMesh) meshes++; });
    return { meshes, x, z };
  });
  if (!scene) { report(); }

  // 4. Draw calls attributable to one deer, counted at the source. Each of the
  //    deer's meshes brackets its own draw with onBeforeRender / onAfterRender
  //    and adds the renderer's call counter difference, so nothing else in the
  //    scene (a jelly drifting into frame, a tree culled) can leak into the
  //    figure the way a shown-versus-hidden difference of whole-frame totals
  //    does. A double-sided transparent mesh is two draws; that is counted.
  const sceneRenders = async (n) => {
    const r0 = await page.evaluate(() => window.__sceneRenders);
    await page.waitForFunction((t) => window.__sceneRenders >= t, r0 + n, { timeout: 120000 });
  };
  await probe('hook the deer meshes', () => {
    const rr = window.__G.R.renderer;
    window.__deerCalls = 0; window.__deerDraws = 0;
    window.__d.group.traverse((o) => {
      if (!o.isMesh) return;
      let c0 = 0;
      o.onBeforeRender = () => { c0 = rr.info.render.calls; };
      o.onAfterRender = () => { window.__deerCalls += rr.info.render.calls - c0; window.__deerDraws++; };
    });
  });
  await sceneRenders(1);
  const h0 = await page.evaluate(() => [window.__sceneRenders, window.__deerCalls, window.__deerDraws, window.__sceneCalls]);
  await sceneRenders(6);
  const h1 = await page.evaluate(() => [window.__sceneRenders, window.__deerCalls, window.__deerDraws, window.__sceneCalls]);
  const nR = h1[0] - h0[0];
  const perDeer = Math.round(((h1[1] - h0[1]) / nR) * 100) / 100;
  const objsPerDeer = Math.round(((h1[2] - h0[2]) / nR) * 100) / 100;
  const sceneTotal = Math.round((h1[3] - h0[3]) / nR);
  notes.push(`draw calls for one deer per main-scene render: ${perDeer} (${objsPerDeer} mesh draws; ${scene.meshes} meshes in its group); whole scene now ${sceneTotal} (one deer in view, all others out of the simulation)`);
  if (RIG) {
    check('one deer costs <= 3 draw calls (body is double-sided transparent = 2, unlit = 1; trail hidden here)', perDeer > 0 && perDeer <= 3.01, `${perDeer}`);
    check('one deer is <= 3 meshes', scene.meshes <= 3, `${scene.meshes}`);
  }
  if (process.env.LUMI_ONLY === 'draws') { report(); }

  // 5. Pose evidence.
  const POSES = {
    stand: { nb: [0, 0, 0], nm: [0, 0, 0], head: [0, 0, 0], ears: [0, 0], up: [0, 0, 0, 0], low: [0, 0, 0, 0], tail: [0, 0] },
    stride: { nb: [-0.2, 0, 0.018], nm: [-0.1, 0, 0], head: [0, 0.15, 0.1], ears: [0.1, -0.1], up: [0.35, -0.35, -0.35, 0.35], low: [0, 0.175, 0.175, 0], tail: [0.1, 0.05] },
    lying: { nb: [-0.4, 0, 0], nm: [-0.2, 0, 0], head: [0, 0.6, 0.15], ears: [0, 0], up: [0.8, 0.8, 0.8, 0.8], low: [1.0, 1.0, 1.0, 1.0], tail: [0.06, 0] },
    flee: { nb: [-0.1, 0, 0.02], nm: [-0.05, 0, 0], head: [0, -0.7, 0], ears: [0.1, -0.1], up: [0.4, -0.4, -0.4, 0.4], low: [0, 0.2, 0.2, 0], tail: [0.5, 0.15] }
  };
  const results = {};
  let eyeChecks = 0;   // a check that examined nothing must not read as a pass
  const roiOf = (pts) => {
    let x0 = W, y0 = H, x1 = 0, y1 = 0;
    for (const [x, y] of pts) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
    return { x0: Math.max(0, Math.floor(x0 - 24)), y0: Math.max(0, Math.floor(y0 - 24)), x1: Math.min(W, Math.ceil(x1 + 24)), y1: Math.min(H, Math.ceil(y1 + 24)) };
  };

  // An empty frame to pair with the first pose's own empty frame.
  await probe('hide', () => { window.__d.group.visible = false; });
  await frames(3);
  let prevHid = decode(await page.screenshot({ timeout: 240000 }));
  await probe('show', () => { window.__d.group.visible = true; });

  const only = (process.env.LUMI_POSES || '').split(',').filter(Boolean);
  for (const [name, P] of Object.entries(POSES)) {
    if (only.length && !only.includes(name)) continue;
    const applied = await probe(`pose "${name}" applies`, async (P) => {
      const d = window.__d;
      const set = (o, v) => { o.rotation.x = v[0]; o.rotation.y = v[1]; o.rotation.z = v[2]; };
      set(d.neckBasePivot, P.nb); set(d.neckMidPivot, P.nm); set(d.headPivot, P.head);
      d.ears[0].rotation.x = P.ears[0]; d.ears[1].rotation.x = P.ears[1];
      for (let i = 0; i < 4; i++) { d.legPivots[i].upper.rotation.x = P.up[i]; d.legPivots[i].lower.rotation.x = P.low[i]; }
      d.tailPivot.rotation.x = P.tail[0]; d.tailPivot.rotation.z = P.tail[1];
      if (d.rig) window.__G.rigMod.writeDeerPose(d);
      d.group.visible = true;
      d.group.updateMatrixWorld(true);
      return true;
    }, P);
    if (!applied) continue;
    await frames(3);

    const vis = decode(await page.screenshot({ timeout: 240000 }));
    await probe('hide', () => { window.__d.group.visible = false; });
    await frames(3);
    const hid = decode(await page.screenshot({ timeout: 240000 }));
    await probe('show', () => { window.__d.group.visible = true; });

    // Projection of the deer's own vertices, posed and un-posed.
    const proj = await probe(`pose "${name}" projects`, () => {
      const d = window.__d, cam = window.__G.R.camera;
      cam.updateMatrixWorld(true);
      const v = d.group.position.clone();
      const out = { all: [], joints: {}, eyes: [] };
      const HEAD = window.__G.rigMod ? window.__G.rigMod.DEER_JOINT.HEAD : -1;
      const Wd = window.innerWidth, Hd = window.innerHeight;
      const toPx = (x, y, z) => {
        v.set(x, y, z).applyMatrix4(d.group.matrixWorld).project(cam);
        return [(v.x * 0.5 + 0.5) * Wd, (1 - (v.y * 0.5 + 0.5)) * Hd];
      };
      const rig = d.rig;
      // The deer's own box (rest pose, generous) so the region of interest exists on the pre-rig build too.
      for (const cx of [-0.6, 0.6]) for (const cy of [0, 1.9]) for (const cz of [-1.0, 1.0]) out.all.push(toPx(cx, cy, cz));
      d.group.traverse((o) => {
        if (!o.isMesh || !o.geometry.attributes.aJoint) return;
        const pos = o.geometry.attributes.position, aj = o.geometry.attributes.aJoint;
        const step = Math.max(1, Math.floor(pos.count / 400));
        for (let i = 0; i < pos.count; i += step) {
          const j = Math.round(aj.getX(i));
          const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
          const rest = toPx(x, y, z);
          out.all.push(rest);
          if (rig && j === HEAD && o.material.isMeshBasicMaterial) {
            // the eyes and their highlights: head-joint vertices of the unlit mesh in the eye boxes (rest pose, head frame)
            const dx = Math.abs(x - rig.rest[HEAD * 3]), dy = y - rig.rest[HEAD * 3 + 1], dz = z - rig.rest[HEAD * 3 + 2];
            if (dx > 0.06 && dx < 0.12 && dy > 0.0 && dy < 0.07 && dz > 0.05 && dz < 0.12) out.eyes.push(i);
          }
          if (j < 0 || !rig) continue;
          const q = rig.quats, t = rig.trans;
          const qx = q[j * 4], qy = q[j * 4 + 1], qz = q[j * 4 + 2], qw = q[j * 4 + 3];
          const tx = 2 * (qy * z - qz * y), ty = 2 * (qz * x - qx * z), tz = 2 * (qx * y - qy * x);
          const rx = x + qw * tx + (qy * tz - qz * ty), ry = y + qw * ty + (qz * tx - qx * tz), rz = z + qw * tz + (qx * ty - qy * tx);
          const posed = toPx(rx + t[j * 3], ry + t[j * 3 + 1], rz + t[j * 3 + 2]);
          if (j === HEAD && o.material.isMeshBasicMaterial && out.eyes[out.eyes.length - 1] === i) out.eyes[out.eyes.length - 1] = posed;
          const moved = Math.hypot(rx + t[j * 3] - x, ry + t[j * 3 + 1] - y, rz + t[j * 3 + 2] - z);
          (out.joints[j] || (out.joints[j] = [])).push({ rest, posed, moved });
        }
      });
      out.eyes = out.eyes.filter((e) => Array.isArray(e));
      return out;
    });
    if (!proj) continue;

    const mask = silhouette(vis, hid, prevHid);
    const roi = roiOf(proj.all);
    const lit = count(mask, roi);
    let drift = 0;
    for (let y = roi.y0; y < roi.y1; y++) for (let x = roi.x0; x < roi.x1; x++) if (differs(hid, prevHid, y * W + x, 36)) drift++;
    let baseMask = null;
    if (BASE) {
      const rd = (suffix) => path.join(BASE, `${name}.${suffix}.png`);
      if (fs.existsSync(rd('vis')) && fs.existsSync(rd('hid0'))) baseMask = silhouette(decode(fs.readFileSync(rd('vis'))), decode(fs.readFileSync(rd('hid'))), decode(fs.readFileSync(rd('hid0'))));
    }
    results[name] = { mask, roi, lit, vis, hid, prevHid, baseMask };
    if (RIG && proj.eyes.length) {
      // The picture, not the table: the eyes carry a white highlight. Count near-white pixels within 4 px of where the
      // rig puts the eye vertices, in this render and in the pre-rig render of the same pose (same pixels).
      const brightNear = (img) => {
        let n = 0;
        const seen = new Set();
        for (const [ex, ey] of proj.eyes) {
          for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
            const x = Math.round(ex) + dx, y = Math.round(ey) + dy;
            if (x < 0 || y < 0 || x >= W || y >= H || seen.has(y * W + x)) continue;
            seen.add(y * W + x);
            const k = (y * W + x) * 4;
            if (Math.min(img.data[k], img.data[k + 1], img.data[k + 2]) >= 170) n++;
          }
        }
        return n;
      };
      const nNew = brightNear(vis);
      let nOld = null;
      if (BASE && fs.existsSync(path.join(BASE, `${name}.vis.png`))) nOld = brightNear(decode(fs.readFileSync(path.join(BASE, `${name}.vis.png`))));
      notes.push(`pose "${name}" eye highlight pixels (near-white within 4 px of the rig's eye vertices): new ${nNew}${nOld === null ? '' : `, pre-rig render ${nOld}`}`);
      if (nOld !== null && nOld >= 2) eyeChecks++;
      if (nOld !== null && nOld >= 2) check(`pose "${name}": the eyes show (not veiled by the translucent body)`, nNew >= Math.ceil(nOld * 0.5), `new ${nNew} vs pre-rig ${nOld}`);
      else if (nOld === null && name === 'stand') { eyeChecks++; check('the eyes show in the stand pose', nNew >= 1, `${nNew}`); }
    }
    check(`pose "${name}": the deer is on screen`, lit > 150, `silhouette px=${lit} (empty-vs-empty drift in the same region: ${drift})`);
    prevHid = hid;

    if (SAVE) {
      fs.mkdirSync(SAVE, { recursive: true });
      fs.writeFileSync(path.join(SAVE, `${name}.vis.png`), PNG.sync.write(vis));
      fs.writeFileSync(path.join(SAVE, `${name}.hid.png`), PNG.sync.write(hid));
      fs.writeFileSync(path.join(SAVE, `${name}.hid0.png`), PNG.sync.write(results[name].prevHid));
      fs.writeFileSync(path.join(SAVE, `${name}.roi.json`), JSON.stringify(roi));
    }

    if (RIG) {
      let sumPosed = 0, sumRest = 0, sumBase = 0, nMoved = 0;
      const per = [];
      for (const [j, list] of Object.entries(proj.joints)) {
        if (list.length < 6) continue;
        let hp = 0, hr = 0, hb = 0, mv = 0;
        for (const s of list) {
          if (near(mask, s.posed[0], s.posed[1])) hp++;
          if (near(mask, s.rest[0], s.rest[1])) hr++;
          if (baseMask && near(baseMask, s.posed[0], s.posed[1])) hb++;
          mv += s.moved;
        }
        const fp = hp / list.length, fr = hr / list.length, fb = hb / list.length, mean = mv / list.length;
        per.push(`j${j}:${fp.toFixed(2)}/${fr.toFixed(2)}${baseMask ? `/${fb.toFixed(2)}` : ''}${mean > 0.1 ? '*' : ''}`);
        // A single thin leg is a poor witness: it hides behind grass that sways between runs and sits close to the
        // background in tone (the stand pose, where both builds have identical geometry, shows individual legs
        // reading 0.3 against 0.8 from drift alone). So the verdict is taken over all the joints that moved.
        if (mean > 0.12) { sumPosed += fp; sumRest += fr; sumBase += fb; nMoved++; }
      }
      notes.push(`pose "${name}" silhouette hit at the rig's predicted pixel / at the un-posed pixel${baseMask ? ' / in the PRE-RIG render at the rig\'s pixel' : ''} per joint (* = moved >10 cm): ${per.join(' ')}`);
      if (nMoved >= 2) {
        const mp = sumPosed / nMoved, mr = sumRest / nMoved;
        check(`pose "${name}": the moved joints are NOT where the un-posed mesh would be`, mp - mr >= 0.15, `posed ${mp.toFixed(2)} vs un-posed ${mr.toFixed(2)} over ${nMoved} moved joints`);
        if (baseMask) {
          const mb = sumBase / nMoved;
          check(`pose "${name}": the moved joints are as visible where the rig put them as the old scene-graph deer is there`, mp >= mb - 0.15, `new ${mp.toFixed(2)} vs pre-rig render ${mb.toFixed(2)} at the same pixels`);
        }
      }
    }
  }

  if (RIG && !only.length) check('the eye check examined at least one pose', eyeChecks >= 1, `${eyeChecks} poses`);

  // Structure from the silhouette itself (stand pose): head above body above hooves.
  if (results.stand) {
    const { mask, roi } = results.stand;
    const rows = [];
    for (let y = roi.y0; y < roi.y1; y++) { let n = 0; for (let x = roi.x0; x < roi.x1; x++) n += mask[y * W + x]; rows.push(n); }
    const total = rows.reduce((a, c) => a + c, 0);
    let top = -1, bot = -1;
    for (let i = 0; i < rows.length; i++) if (rows[i] > 0) { if (top < 0) top = i; bot = i; }
    const h = bot - top + 1;
    const frac = (a, c) => { let s = 0; for (let i = top + Math.floor(h * a); i < top + Math.floor(h * c); i++) s += rows[i]; return s / total; };
    const upper = frac(0, 0.25), mid = frac(0.25, 0.7), lower = frac(0.7, 1.0);
    notes.push(`stand silhouette height ${h}px; ink by band top/mid/bottom = ${upper.toFixed(2)}/${mid.toFixed(2)}/${lower.toFixed(2)}`);
    check('a deer stands as a deer: most mass in the body band, some above it (head, antlers), some below (legs)',
      mid > upper && mid > lower && upper > 0.03 && lower > 0.008, `${upper.toFixed(2)}/${mid.toFixed(2)}/${lower.toFixed(2)}`);
  }

  // 6. Cross-version silhouette comparison against PNGs saved by the pre-rig build.
  if (BASE) {
    for (const name of Object.keys(POSES)) {
      if (only.length && !only.includes(name)) continue;
      const rd = (suffix) => path.join(BASE, `${name}.${suffix}.png`);
      if (!results[name] || !fs.existsSync(rd('vis')) || !fs.existsSync(rd('hid0'))) { check(`baseline "${name}" present`, false, rd('vis')); continue; }
      const bm = silhouette(decode(fs.readFileSync(rd('vis'))), decode(fs.readFileSync(rd('hid'))), decode(fs.readFileSync(rd('hid0'))));
      const cm = results[name].mask, roi = results[name].roi;
      // Silhouette overlap between two separate runs is a coarse instrument: the stand pose, where both builds have
      // IDENTICAL geometry, scored recall 0.62 to 0.98 across repeated captures, and the empty-vs-empty drift in
      // the region is routinely larger than the deer. So 0.5 only catches a gross shape error (a missing or
      // misplaced body mass). The pose verdict is carried by the moved-joint checks above, which compare the same
      // pixels in the old and new renders.
      const recall = covered(bm, cm, roi), precision = covered(cm, bm, roi);
      check(`pose "${name}": the rigged deer covers the pre-rig silhouette (recall, 2 px)`, recall >= 0.5, recall.toFixed(3));
      check(`pose "${name}": the rigged deer adds nothing the pre-rig one lacked (precision, 2 px)`, precision >= 0.5, precision.toFixed(3));
    }
  }

  check('still no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));
} catch (e) {
  bad.push(`gate crashed - ${String(e).split('\n')[0]}`);
}
await b.close();
report();

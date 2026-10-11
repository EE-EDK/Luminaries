/**
 * M5.2 gate: the moth / puffling / jelly GPU rigs, measured on the running game.
 *
 * Same method as deer-rig.mjs (read its header for the full argument), one
 * script for the three creatures of milestone 5.2. LUMI_CREATURE=moth|puffling|jelly.
 *
 *   1. The frame loop is turning, nothing threw, there are live creatures.
 *   2. Draw calls, counted at the source: every mesh of one isolated creature
 *      brackets its own draw with onBeforeRender / onAfterRender and adds the
 *      renderer's call-counter difference. The whole simulated crowd is counted
 *      the same way. Rig build: mesh and draw-call ceilings per creature.
 *   3. Pose evidence. One creature is lifted out of the simulation (spliced out
 *      of its entityStore array so nothing rewrites it), placed in front of the
 *      camera, and given known poses by writing the SAME state fields the update
 *      loop writes, then, on the rig build, calling the creature's pose writer.
 *      Each pose is screenshotted with the creature shown and hidden (two empty
 *      frames, so scene drift cannot be credited to it). Every jointed vertex is
 *      projected to the screen twice - where the rig says it is, and where the
 *      un-posed mesh would be - and the silhouette is read at both.
 *   4. Markings: the unlit parts that sit on top of a translucent body (moth
 *      eyespots) must show. Measured as |shown - hidden| at their projected
 *      pixels, in this render and in the pre-rig render of the same pose.
 *   5. Optional cross-version check: LUMI_SAVE=<dir> on the pre-rig build writes
 *      PNGs, LUMI_BASELINE=<dir> on the new build compares at the same pixels.
 *
 * Cannot prove: how it reads on a real GPU with real bloom, or whether the
 * motion feels right. SwiftShader is a software rasteriser; that is eyes.
 *
 * Run (playwright + pngjs, see README.md; LUMI_BROWSER picks a browser binary,
 * LUMI_POSES=up,down runs a subset, LUMI_ONLY=draws stops after the draw count):
 *   npx vite --port 5175
 *   LUMI_CREATURE=moth LUMI_URL=http://localhost:5175/ node scripts/measure/creature-rig.mjs
 */
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import fs from 'node:fs';
import path from 'node:path';

const URL = process.env.LUMI_URL || 'http://localhost:5173/';
const SAVE = process.env.LUMI_SAVE || '';
const BASE = process.env.LUMI_BASELINE || '';
const KIND = process.env.LUMI_CREATURE || 'moth';
const W = 640, H = 400;
// Camera pitch (rad, up). Looking at the sky instead of the grass takes most of the scene drift out of the background.
const PITCH = process.env.LUMI_PITCH === undefined ? 0.5 : Number(process.env.LUMI_PITCH);

// ---------------------------------------------------------------------------
// Per-creature configuration. `page` functions run INSIDE the page (they are
// serialised), so they may only use their arguments and browser globals.
// ---------------------------------------------------------------------------
const KINDS = {
  moth: {
    store: 'moths',
    rigModule: '/src/entities/fauna/mothRig.js',
    writer: 'writeMothPose',
    maxMeshes: 3,
    maxCalls: 5,                 // fur 1 + glow (double-sided transparent) 2 + unlit (double-sided transparent) 2
    movedMin: 0.04,              // metres a joint's vertices must move on average to count as "moved"
    box: [[-0.5, -0.3, -0.35], [0.5, 0.3, 0.35]],   // creature-space box for the region of interest
    // Wings: pivot.rotation.z = flap * side; flap +a lifts both tips. Antennae are exaggerated 5x so the 2 px lines show.
    poses: {
      rest: { wings: [0, 0], ant: [[0, 0], [0, 0]] },
      up: { wings: [-0.7, 0.7], ant: [[0, 0], [0, 0]] },
      down: { wings: [0.7, -0.7], ant: [[0, 0], [0, 0]] },
      asym: { wings: [-0.7, -0.7], ant: [[0.5, 0.3], [-0.5, -0.3]] }
    },
    page: {
      place: function (d, cam, T) {
        const dir = cam.position.clone();
        cam.getWorldDirection(dir);
        const hl = Math.hypot(dir.x, dir.z) || 1;
        const dx = dir.x / hl, dz = dir.z / hl, D = 1.5;
        d.group.position.set(cam.position.x + dir.x * D, cam.position.y + dir.y * D, cam.position.z + dir.z * D);
        d.group.rotation.set(0, Math.atan2(dx, dz), 0);   // head (+z) points away from the camera: wings spread across the screen
      },
      applyPose: function (d, P) {
        for (let w = 0; w < 2; w++) {
          d.group._wingPivots[w].pivot.rotation.x = 0; d.group._wingPivots[w].pivot.rotation.y = 0;
          d.group._wingPivots[w].pivot.rotation.z = P.wings[w];
          d.antennae[w].rotation.x = P.ant[w][0]; d.antennae[w].rotation.z = P.ant[w][1];
        }
      },
      // Is this unlit-mesh vertex a "marking" that must show over the wing membrane? (eyespots = BREATHE)
      isMarking: function (mode, M, joint) { return mode === M.BREATHE; }
    }
  },
  puffling: {
    store: 'puffs',
    rigModule: '/src/entities/fauna/pufflingRig.js',
    writer: 'writePufflingPose',
    maxMeshes: 6,
    maxCalls: 6,                 // body (solid, 1) + belly 1 + dark 1 + core 1 + mouth 1 + spores 1
    movedMin: 0.012,
    // No silhouette-hit verdict for the joints: the puffling is bright enough that bloom puts a halo of "differs from the empty
    // frame" pixels around the whole body, so the ears' posed and un-posed tips both read as covered (measured: 1.00 / 1.00 at
    // +/-1.9 rad). The ears are judged against the pre-rig render of the same pose instead (earBoxes below), the eyes by colour.
    silhouetteJoints: [],
    box: [[-0.4, 0.0, -0.4], [0.4, 1.0, 0.4]],
    // Eye boxes in shell space, for the blink check (pixels of the eye colour inside them)
    eyes: { centres: [[-0.09, 0.68, 0.18], [0.09, 0.68, 0.18]], halfW: 0.045, halfH: 0.04 },
    ears: { centres: [[-0.13, 0.85, 0], [0.13, 0.85, 0]], half: 0.12 },
    // ears: rotation.z (rest +/-0.3); eyeY: eye scale.y; shell: the hop squash, which composes with the merged meshes for free
    poses: {
      rest: { ears: [-0.3, 0.3], eyeY: 1, shell: [1, 1, 1] },
      // The ear is a fat cone (0.12 wide, 0.15 long) turning about its own centre, so a small turn leaves its tip inside its own
      // un-posed footprint. These angles are far past anything the loop writes (+/-0.4) on purpose: they put the tip well clear.
      blink: { ears: [1.9, -1.9], eyeY: 0.1, shell: [1, 1, 1] },
      squash: { ears: [-1.9, 1.9], eyeY: 1, shell: [0.85, 1.3, 0.85] }
    },
    page: {
      place: function (d, cam, T) {
        const dir = cam.position.clone();
        cam.getWorldDirection(dir);
        const hl = Math.hypot(dir.x, dir.z) || 1;
        const dx = dir.x / hl, dz = dir.z / hl, D = 1.5;
        d.group.position.set(cam.position.x + dir.x * D, cam.position.y + dir.y * D - 0.45, cam.position.z + dir.z * D);   // body centre on the view ray
        d.group.rotation.set(0, Math.atan2(-dx, -dz), 0);   // face (+z, the eyes) toward the camera
      },
      applyPose: function (d, P) {
        for (let e = 0; e < 2; e++) {
          d.ears[e].mesh.rotation.z = P.ears[e];
          d.eyes[e].scale.y = P.eyeY;
        }
        d.shell.scale.set(P.shell[0], P.shell[1], P.shell[2]);
      },
      isMarking: function (mode, M, joint) { return false; }
    }
  },
  jelly: {
    store: 'jellies',
    rigModule: null,
    writer: null,
    rigless: true,               // no joints: the seven meshes are the seven per-frame-driven materials (see NOTES.md)
    maxMeshes: 7,
    maxCalls: 8,                 // 7 meshes; the bell (double-sided transparent) is two draws
    box: [[-0.6, -1.2, -0.6], [0.6, 0.4, 0.6]],
    poses: {},
    page: {
      place: function (d, cam, T) {
        const dir = cam.position.clone();
        cam.getWorldDirection(dir);
        const hl = Math.hypot(dir.x, dir.z) || 1;
        const D = 3.2;
        d.group.position.set(cam.position.x + dir.x * D, cam.position.y + dir.y * D, cam.position.z + dir.z * D);
      },
      applyPose: function (d, P) {},
      isMarking: function (mode, M, joint) { return false; }
    }
  }
};
const K = KINDS[KIND];
if (!K) { console.error(`unknown LUMI_CREATURE=${KIND}`); process.exit(2); }
const kindSrc = '({' + Object.entries(K.page).map(([k, v]) => `${JSON.stringify(k)}:${v.toString()}`).join(',') + '})';

const ok = [], bad = [], notes = [];
const check = (n, pass, d) => (pass ? ok : bad).push(`${n}${d ? ` - ${d}` : ''}`);

const b = await chromium.launch({ executablePath: process.env.LUMI_BROWSER || undefined, args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'] });
const page = await (await b.newContext({ viewport: { width: W, height: H } })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

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

async function frames(n) {
  const f0 = await page.evaluate(() => window.LumiDebug.perf().fps.frames);
  await page.waitForFunction(([a, k]) => window.LumiDebug.perf().fps.frames >= a + k, [f0, n], { timeout: 120000 });
}

const decode = (buf) => PNG.sync.read(buf);
function diffAt(a, bb, i) {
  return Math.abs(a.data[i * 4] - bb.data[i * 4]) + Math.abs(a.data[i * 4 + 1] - bb.data[i * 4 + 1]) + Math.abs(a.data[i * 4 + 2] - bb.data[i * 4 + 2]);
}
const differs = (a, bb, i, thresh) => diffAt(a, bb, i) > thresh;
/** Pixels that differ between the shown frame and BOTH empty frames while the empties agree. */
function silhouette(vis, hidA, hidB, thresh = 36) {
  const m = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) if (differs(vis, hidA, i, thresh) && differs(vis, hidB, i, thresh) && !differs(hidA, hidB, i, thresh)) m[i] = 1;
  return m;
}
function near(m, x, y, r = 2) {
  const xi = Math.round(x), yi = Math.round(y);
  for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
    const px = xi + dx, py = yi + dy;
    if (px >= 0 && py >= 0 && px < W && py < H && m[py * W + px]) return true;
  }
  return false;
}
function covered(a, bm, roi, r = 2) {
  let n = 0, hit = 0;
  for (let y = roi.y0; y < roi.y1; y++) for (let x = roi.x0; x < roi.x1; x++) if (a[y * W + x]) { n++; if (near(bm, x, y, r)) hit++; }
  return n ? hit / n : 0;
}
const count = (m, roi) => {
  let n = 0;
  for (let y = roi.y0; y < roi.y1; y++) for (let x = roi.x0; x < roi.x1; x++) n += m[y * W + x];
  return n;
};
/** Sum of |shown - hidden| (all channels) over the pixels within r of the given points, each pixel once. */
function inkNear(vis, hid, pts, r = 3) {
  const seen = new Set();
  let sum = 0, n = 0;
  for (const [ex, ey] of pts) {
    for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
      const x = Math.round(ex) + dx, y = Math.round(ey) + dy;
      if (x < 0 || y < 0 || x >= W || y >= H || seen.has(y * W + x)) continue;
      seen.add(y * W + x);
      sum += diffAt(vis, hid, y * W + x); n++;
    }
  }
  return n ? sum / n : 0;
}

try {
  await page.goto(URL, { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: 60000 });
  await page.evaluate(() => document.querySelector('#intro-continue')?.remove());
  await page.mouse.click(W / 2, H / 2);
  await page.waitForTimeout(1200);
  await probe('the debug surface is reachable', () => window.LumiDebug.skipIntro());

  const loop = await probe('the frame loop is running', async () => {
    const before = window.LumiDebug.perf().fps.frames;
    await new Promise((r) => setTimeout(r, 2500));
    return { before, after: window.LumiDebug.perf().fps.frames };
  });
  if (loop) check('the frame loop is running', loop.after > loop.before, `frames ${loop.before} -> ${loop.after}`);
  check('nothing threw on the way in', errors.length === 0, errors.slice(0, 3).join(' | '));

  await probe('night, standing at the origin', (pitch) => {
    const L = window.LumiDebug;
    L.setTime(0.25); L.teleport(0, 0); L.look(0, pitch);
    L.post({ vignette: 0, grain: 0 });
    L.quality(false);
    const st = document.createElement('style');
    st.textContent = 'body *:not(canvas){visibility:hidden!important} canvas{visibility:visible!important}';
    document.head.appendChild(st);
  }, PITCH);
  await frames(2);

  const f = await probe('fauna() answers', () => window.LumiDebug.fauna());
  if (f) notes.push(`fauna(): ${JSON.stringify(f[KIND] || f)}`);

  const handles = await probe('module handles', async ([K, kindSrc]) => {
    // A dev server stamps modules it has seen change with ?t=<time>, so a plain import() of the same path can be a SECOND
    // instance (empty store, a different scene). Try every URL the page actually requested for each module, plain one
    // last, and keep the pair whose first creature is in the scene that is being drawn.
    const urls = (path) => {
      const seen = performance.getEntriesByType('resource').map((e) => e.name.replace(location.origin, '')).filter((n) => n.split('?')[0] === path);
      return [...new Set([...seen, path])];
    };
    let R = null, ST = null, d0 = null;
    search: for (const ru of urls('/src/core/renderer.js')) {
      const Rc = await import(ru);
      for (const su of urls('/src/state/entityStore.js')) {
        const STc = await import(su);
        const c = STc[K.store][0];
        if (!c) continue;
        let hit = false;
        Rc.scene.traverse((o) => { if (o === c.group) hit = true; });
        if (hit) { R = Rc; ST = STc; d0 = c; break search; }
      }
    }
    if (!d0) return { empty: true, n: 0 };
    const T = await import('/src/world/terrain.js');
    const MO = await import('/src/entities/_motion.js');
    const store = ST[K.store];
    let rigMod = null;
    if (d0.rig) { try { rigMod = await import(K.rigModule); } catch (e) { rigMod = null; } }
    window.__G = { R, ST, T, MOTION: MO.MOTION, rigMod, store, writerName: K.writer, P: (0, eval)(kindSrc) };
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
    return { inScene, hasRig: !!d0.rig, hasRigMod: !!rigMod, n: store.length };
  }, [{ store: K.store, rigModule: K.rigModule, writer: K.writer }, kindSrc]);
  if (!handles || handles.empty) { bad.push(`no live ${KIND} to measure (store empty)`); report(); }
  check('the entity store is the live instance (creature is in the drawn scene)', handles.inScene);
  const RIG = handles.hasRig;
  notes.push(`build under test: ${RIG ? 'GPU rig (record has .rig)' : 'scene-graph pivots (no .rig) - baseline mode'}`);
  if (RIG) check('the rig module is importable at its path', handles.hasRigMod);

  const crowd = await probe('count the whole crowd', async () => {
    const { R, store } = window.__G;
    const rr = R.renderer;
    window.__crowdCalls = 0;
    for (const d of store) {
      d.group.traverse((o) => {
        if (!o.isMesh) return;
        let c0 = 0;
        o.onBeforeRender = () => { c0 = rr.info.render.calls; };
        o.onAfterRender = () => { window.__crowdCalls += rr.info.render.calls - c0; };
      });
    }
    const wait = (n) => new Promise((res) => { const t = window.__sceneRenders + n; const iv = setInterval(() => { if (window.__sceneRenders >= t) { clearInterval(iv); res(); } }, 50); });
    await wait(1);
    const a = [window.__sceneRenders, window.__crowdCalls, window.__sceneCalls];
    await wait(8);
    const c = [window.__sceneRenders, window.__crowdCalls, window.__sceneCalls];
    const n = c[0] - a[0];
    let meshes = 0;
    for (const d of store) d.group.traverse((o) => { if (o.isMesh) meshes++; });
    return { n: store.length, calls: (c[1] - a[1]) / n, sceneCalls: (c[2] - a[2]) / n, meshes, programs: rr.info.programs.length };
  });
  if (crowd) notes.push(`at the origin, night, ${crowd.n} ${KIND} simulated (${crowd.meshes} meshes): ${KIND} draw calls per main-scene render = ${crowd.calls.toFixed(1)}, whole scene = ${crowd.sceneCalls.toFixed(1)}; shader programs compiled so far: ${crowd.programs}`);

  const scene = await probe('isolate one creature', () => {
    const { R, T, store, P } = window.__G;
    const saved = store.splice(0, store.length);
    for (const d of saved) d.group.visible = false;
    const d = saved[0];
    window.__d = d; window.__saved = saved;
    P.place(d, R.camera, T);
    d.group.visible = true;
    for (const m of d._detail || []) m.visible = true;
    d.group.updateMatrixWorld(true);
    let meshes = 0;
    d.group.traverse((o) => { if (o.isMesh) meshes++; });
    const dv = R.camera.position.clone(); R.camera.getWorldDirection(dv);
    return { meshes, aimY: dv.y };
  });
  if (!scene) { report(); }
  notes.push(`camera aim: view direction y = ${scene.aimY.toFixed(2)} (pitch ${PITCH}; > 0 looks at the sky)`);

  const sceneRenders = async (n) => {
    const r0 = await page.evaluate(() => window.__sceneRenders);
    await page.waitForFunction((t) => window.__sceneRenders >= t, r0 + n, { timeout: 120000 });
  };
  await probe('hook the creature meshes', () => {
    const rr = window.__G.R.renderer;
    window.__oneCalls = 0; window.__oneDraws = 0;
    window.__d.group.traverse((o) => {
      if (!o.isMesh) return;
      let c0 = 0;
      o.onBeforeRender = () => { c0 = rr.info.render.calls; };
      o.onAfterRender = () => { window.__oneCalls += rr.info.render.calls - c0; window.__oneDraws++; };
    });
  });
  await sceneRenders(1);
  const h0 = await page.evaluate(() => [window.__sceneRenders, window.__oneCalls, window.__oneDraws, window.__sceneCalls]);
  await sceneRenders(6);
  const h1 = await page.evaluate(() => [window.__sceneRenders, window.__oneCalls, window.__oneDraws, window.__sceneCalls]);
  const nR = h1[0] - h0[0];
  const perOne = Math.round(((h1[1] - h0[1]) / nR) * 100) / 100;
  const drawsOne = Math.round(((h1[2] - h0[2]) / nR) * 100) / 100;
  const sceneTotal = Math.round((h1[3] - h0[3]) / nR);
  notes.push(`draw calls for one ${KIND} per main-scene render: ${perOne} (${drawsOne} mesh draws; ${scene.meshes} meshes in its group); whole scene now ${sceneTotal} (one ${KIND} in view, the rest out of the simulation)`);
  if (RIG || K.rigless) {
    check(`one ${KIND} costs <= ${K.maxCalls} draw calls`, perOne > 0 && perOne <= K.maxCalls + 0.01, `${perOne}`);
    check(`one ${KIND} is <= ${K.maxMeshes} meshes`, scene.meshes <= K.maxMeshes, `${scene.meshes}`);
  }
  if (process.env.LUMI_ONLY === 'draws' || K.rigless) { if (K.rigless) notes.push('no rig on this creature: draw-call evidence only (see NOTES.md for why)'); check('still no page errors', errors.length === 0, errors.slice(0, 3).join(' | ')); report(); }

  // 3. Pose evidence.
  const results = {};
  const roiOf = (pts) => {
    let x0 = W, y0 = H, x1 = 0, y1 = 0;
    for (const [x, y] of pts) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
    return { x0: Math.max(0, Math.floor(x0 - 24)), y0: Math.max(0, Math.floor(y0 - 24)), x1: Math.min(W, Math.ceil(x1 + 24)), y1: Math.min(H, Math.ceil(y1 + 24)) };
  };

  await probe('hide', () => { window.__d.group.visible = false; });
  await frames(3);
  let prevHid = decode(await page.screenshot({ timeout: 240000 }));
  await probe('show', () => { window.__d.group.visible = true; });

  let markChecks = 0;
  const eyeDark = {};
  const only = (process.env.LUMI_POSES || '').split(',').filter(Boolean);
  for (const [name, P] of Object.entries(K.poses)) {
    if (only.length && !only.includes(name)) continue;
    const applied = await probe(`pose "${name}" applies`, (P) => {
      const d = window.__d;
      window.__G.P.applyPose(d, P);
      if (d.rig) window.__G.rigMod[window.__G.writerName](d);
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

    const proj = await probe(`pose "${name}" projects`, ([box, eyes, ears]) => {
      const d = window.__d, cam = window.__G.R.camera, G = window.__G;
      cam.updateMatrixWorld(true);
      const v = d.group.position.clone();
      const out = { all: [], joints: {}, marks: [] };
      const Wd = window.innerWidth, Hd = window.innerHeight;
      let mw = d.group.matrixWorld;   // the mesh being projected (its parent chain includes any Group squash such as a puffling's shell)
      const toPx = (x, y, z) => {
        v.set(x, y, z).applyMatrix4(mw).project(cam);
        return [(v.x * 0.5 + 0.5) * Wd, (1 - (v.y * 0.5 + 0.5)) * Hd];
      };
      const rig = d.rig;
      for (const cx of [box[0][0], box[1][0]]) for (const cy of [box[0][1], box[1][1]]) for (const cz of [box[0][2], box[1][2]]) out.all.push(toPx(cx, cy, cz));
      if (eyes) {
        // pixel boxes around the eyes at rest, from the shell's world matrix (identity scale in the poses that use them)
        d.shell.updateWorldMatrix(true, false);
        mw = d.shell.matrixWorld;
        out.eyeBoxes = eyes.centres.map(([x, y, z]) => {
          const c = toPx(x, y, z), r = toPx(x + eyes.halfW, y, z), t = toPx(x, y + eyes.halfH, z);
          return { cx: c[0], cy: c[1], hw: Math.abs(r[0] - c[0]), hh: Math.abs(t[1] - c[1]) };
        });
        mw = d.group.matrixWorld;
      }
      if (ears) {
        d.shell.updateWorldMatrix(true, false);
        mw = d.shell.matrixWorld;
        out.earBoxes = ears.centres.map(([x, y, z]) => {
          const c = toPx(x, y, z), r = toPx(x + ears.half, y, z), t = toPx(x, y + ears.half, z);
          return { cx: c[0], cy: c[1], hw: Math.abs(r[0] - c[0]) + Math.abs(r[1] - c[1]), hh: Math.abs(t[1] - c[1]) + Math.abs(t[0] - c[0]) };
        });
        mw = d.group.matrixWorld;
      }
      d.group.traverse((o) => {
        if (!o.isMesh || !o.geometry.attributes.aJoint) return;
        o.updateWorldMatrix(true, false);
        mw = o.matrixWorld;
        const pos = o.geometry.attributes.position, aj = o.geometry.attributes.aJoint, am = o.geometry.attributes.aMotion;
        const unlit = o.material.isMeshBasicMaterial;
        const step = Math.max(1, Math.floor(pos.count / 400));
        for (let i = 0; i < pos.count; i += unlit ? 1 : step) {
          const sampled = i % step === 0;
          const isMark = unlit && G.P.isMarking(am.getX(i), G.MOTION, Math.round(aj.getX(i)));
          if (!isMark && !sampled) continue;
          const j = Math.round(aj.getX(i));
          const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
          let px = x, py = y, pz = z;
          if (j >= 0 && rig) {
            const q = rig.quats, t = rig.trans;
            const qx = q[j * 4], qy = q[j * 4 + 1], qz = q[j * 4 + 2], qw = q[j * 4 + 3];
            const tx = 2 * (qy * z - qz * y), ty = 2 * (qz * x - qx * z), tz = 2 * (qx * y - qy * x);
            px = x + qw * tx + (qy * tz - qz * ty) + t[j * 3]; py = y + qw * ty + (qz * tx - qx * tz) + t[j * 3 + 1]; pz = z + qw * tz + (qx * ty - qy * tx) + t[j * 3 + 2];
          }
          const posed = toPx(px, py, pz);
          if (isMark) out.marks.push(posed);
          if (!sampled) continue;
          const rest = toPx(x, y, z);
          out.all.push(rest);
          if (j < 0 || !rig) continue;
          (out.joints[j] || (out.joints[j] = [])).push({ rest, posed, moved: Math.hypot(px - x, py - y, pz - z) });
        }
      });
      return out;
    }, [K.box, K.eyes || null, K.ears || null]);
    if (!proj) continue;

    const mask = silhouette(vis, hid, prevHid);
    const roi = roiOf(proj.all);
    const lit = count(mask, roi);
    let drift = 0;
    for (let y = roi.y0; y < roi.y1; y++) for (let x = roi.x0; x < roi.x1; x++) if (differs(hid, prevHid, y * W + x, 36)) drift++;
    let baseMask = null, baseVis = null, baseHid = null;
    if (BASE) {
      const rd = (suffix) => path.join(BASE, `${name}.${suffix}.png`);
      if (fs.existsSync(rd('vis')) && fs.existsSync(rd('hid0'))) {
        baseVis = decode(fs.readFileSync(rd('vis'))); baseHid = decode(fs.readFileSync(rd('hid')));
        baseMask = silhouette(baseVis, baseHid, decode(fs.readFileSync(rd('hid0'))));
      }
    }
    results[name] = { mask, roi, lit, baseMask };
    check(`pose "${name}": the ${KIND} is on screen`, lit > 150, `silhouette px=${lit} (empty-vs-empty drift in the same region: ${drift})`);

    if (SAVE) {
      fs.mkdirSync(SAVE, { recursive: true });
      fs.writeFileSync(path.join(SAVE, `${name}.vis.png`), PNG.sync.write(vis));
      fs.writeFileSync(path.join(SAVE, `${name}.hid.png`), PNG.sync.write(hid));
      fs.writeFileSync(path.join(SAVE, `${name}.hid0.png`), PNG.sync.write(prevHid));
    }

    // Markings: ink where the rig puts them, new render vs the pre-rig render at the same pixels.
    if (RIG && proj.marks.length) {
      const inkNew = inkNear(vis, hid, proj.marks);
      notes.push(`pose "${name}": mean |shown - hidden| within 3 px of ${proj.marks.length} marking vertices: new ${inkNew.toFixed(1)}${baseVis ? `, pre-rig render ${inkNear(baseVis, baseHid, proj.marks).toFixed(1)}` : ''}`);
      markChecks++;
      check(`pose "${name}": the markings have ink at all (not erased)`, inkNew > 12, inkNew.toFixed(1));
      if (baseVis) {
        const inkOld = inkNear(baseVis, baseHid, proj.marks);
        check(`pose "${name}": the markings show as strongly as in the pre-rig render (not veiled by the membrane)`, inkNew >= inkOld * 0.6, `new ${inkNew.toFixed(1)} vs pre-rig ${inkOld.toFixed(1)}`);
      }
    }

    if (proj.eyeBoxes) {
      // Blink evidence: dark pixels (the eye colour) inside boxes around both eyes' rest positions. Eyes closed to a tenth of
      // their height leave a sliver; the same count in the pre-rig render of the same pose is the yardstick.
      // `band` limits the count to a thin strip through each eye's centre line (a closed eye is a sliver there; an eye that has
      // flown away, or been squashed about the wrong point, leaves the strip empty).
      const darkIn = (img, band = 1) => {
        let n = 0;
        for (const bx of proj.eyeBoxes) {
          for (let y = Math.max(0, Math.floor(bx.cy - bx.hh * band)); y <= Math.min(H - 1, Math.ceil(bx.cy + bx.hh * band)); y++) {
            for (let x = Math.max(0, Math.floor(bx.cx - bx.hw)); x <= Math.min(W - 1, Math.ceil(bx.cx + bx.hw)); x++) {
              const k = (y * W + x) * 4;
              if ((img.data[k] + img.data[k + 1] + img.data[k + 2]) / 3 < 90) n++;
            }
          }
        }
        return n;
      };
      eyeDark[name] = { now: darkIn(vis), old: baseVis ? darkIn(baseVis) : null, bandNow: darkIn(vis, 0.3), bandOld: baseVis ? darkIn(baseVis, 0.3) : null };
      notes.push(`pose "${name}": dark (eye-colour) pixels inside the eye boxes: new ${eyeDark[name].now}${eyeDark[name].old === null ? '' : `, pre-rig render ${eyeDark[name].old}`}; in the centre strip: new ${eyeDark[name].bandNow}${eyeDark[name].bandOld === null ? '' : `, pre-rig ${eyeDark[name].bandOld}`}`);
    }

    if (proj.earBoxes && baseVis && name !== 'rest') {
      // Mean |new - pre-rig| inside boxes around both ears: against the pre-rig render of THIS pose, and against the pre-rig
      // render with the ears at rest. If the rig put the ears where the scene graph did, the first is small and the second large.
      const restPath = path.join(BASE, 'rest.vis.png');
      const boxMean = (a, b2) => {
        let sum = 0, n = 0;
        for (const bx of proj.earBoxes) {
          for (let y = Math.max(0, Math.floor(bx.cy - bx.hh)); y <= Math.min(H - 1, Math.ceil(bx.cy + bx.hh)); y++) {
            for (let x = Math.max(0, Math.floor(bx.cx - bx.hw)); x <= Math.min(W - 1, Math.ceil(bx.cx + bx.hw)); x++) { sum += diffAt(a, b2, y * W + x); n++; }
          }
        }
        return n ? sum / n : 0;
      };
      if (fs.existsSync(restPath)) {
        const restOld = decode(fs.readFileSync(restPath));
        const dSame = boxMean(vis, baseVis), dRest = boxMean(vis, restOld);
        notes.push(`pose "${name}": mean |new - pre-rig| in the ear boxes: vs the pre-rig render of this pose ${dSame.toFixed(1)}, vs the pre-rig ears at rest ${dRest.toFixed(1)}`);
        // Clean runs measured same-pose 0.0 to 2.2 against rest 40 to 137 (ratio <= 0.06); ears swapped between sides measured 28.4 against 53.4 (0.53).
        check(`pose "${name}": the ears are where the old scene-graph ears are, not where they rest`, dRest > 6 && dSame <= 0.2 * dRest, `same-pose ${dSame.toFixed(1)}, rest ${dRest.toFixed(1)}`);
      }
    }

    if (RIG && !(K.silhouetteJoints && K.silhouetteJoints.length === 0)) {
      let sumPosed = 0, sumRest = 0, sumBase = 0, nMoved = 0;
      const per = [];
      for (const [j, all] of Object.entries(proj.joints)) {
        if (all.length < 6) continue;
        const list = all, rad = 2;
        let hp = 0, hr = 0, hb = 0, mv = 0;
        for (const s of list) {
          if (near(mask, s.posed[0], s.posed[1], rad)) hp++;
          if (near(mask, s.rest[0], s.rest[1], rad)) hr++;
          if (baseMask && near(baseMask, s.posed[0], s.posed[1], rad)) hb++;
          mv += s.moved;
        }
        const fp = hp / list.length, fr = hr / list.length, fb = hb / list.length, mean = mv / list.length;
        per.push(`j${j}:${fp.toFixed(2)}/${fr.toFixed(2)}${baseMask ? `/${fb.toFixed(2)}` : ''}${mean > K.movedMin ? '*' : ''}`);
        const judged = !K.silhouetteJoints || K.silhouetteJoints.includes(Number(j));
        if (mean > K.movedMin && judged) { sumPosed += fp; sumRest += fr; sumBase += fb; nMoved++; }
      }
      notes.push(`pose "${name}" silhouette hit at the rig's predicted pixel / at the un-posed pixel${baseMask ? " / in the PRE-RIG render at the rig's pixel" : ''} per joint (* = moved): ${per.join(' ')}`);
      if (nMoved >= 1 && name !== 'rest') {
        const mp = sumPosed / nMoved, mr = sumRest / nMoved;
        check(`pose "${name}": the moved joints are NOT where the un-posed mesh would be`, mp - mr >= 0.15, `posed ${mp.toFixed(2)} vs un-posed ${mr.toFixed(2)} over ${nMoved} moved joints`);
        if (baseMask) {
          const mb = sumBase / nMoved;
          check(`pose "${name}": the moved joints are as visible where the rig put them as the old scene-graph ${KIND} is there`, mp >= mb - 0.15, `new ${mp.toFixed(2)} vs pre-rig render ${mb.toFixed(2)} at the same pixels`);
        }
      } else if (name !== 'rest') check(`pose "${name}": some joints moved`, false, 'no joint moved more than the threshold');
    }
    prevHid = hid;
  }
  if (eyeDark.rest) {
    const r = eyeDark.rest;
    check('the eyes show at rest (dark pixels where the eyes are)', r.now >= 12, `${r.now}`);
    if (eyeDark.blink) {
      const b2 = eyeDark.blink;
      check('a blink closes the eyes: far fewer eye-colour pixels than at rest', b2.now <= r.now * 0.6, `blink ${b2.now} vs rest ${r.now}`);
      // ...but a sliver must remain on the eye's own centre line: eyes that were squashed about the wrong point, or flown off, also lose their pixels.
      check('...and the closed eye is still there, as a sliver on the eye centre line', b2.bandNow >= 3 && (b2.bandOld === null || b2.bandNow >= 0.5 * b2.bandOld), `strip: new ${b2.bandNow}${b2.bandOld === null ? '' : ` vs pre-rig ${b2.bandOld}`}`);
      if (r.old !== null && b2.old !== null && r.old > 0) {
        check('...and by about the amount the pre-rig puffling blinked', Math.abs(b2.now / r.now - b2.old / r.old) <= 0.3, `new ratio ${(b2.now / r.now).toFixed(2)} vs pre-rig ${(b2.old / r.old).toFixed(2)}`);
      }
    }
  }
  if (RIG && K.poses && !only.length && Object.values(K.page).length && notes.some((s) => s.includes('marking'))) check('the marking check examined at least one pose', markChecks >= 1, `${markChecks} poses`);

  if (BASE) {
    for (const name of Object.keys(K.poses)) {
      if (only.length && !only.includes(name)) continue;
      const rd = (suffix) => path.join(BASE, `${name}.${suffix}.png`);
      if (!results[name] || !fs.existsSync(rd('vis')) || !fs.existsSync(rd('hid0'))) { check(`baseline "${name}" present`, false, rd('vis')); continue; }
      const bm = silhouette(decode(fs.readFileSync(rd('vis'))), decode(fs.readFileSync(rd('hid'))), decode(fs.readFileSync(rd('hid0'))));
      const cm = results[name].mask, roi = results[name].roi;
      // Coarse by construction (see deer-rig.mjs): 0.5 only catches a gross shape error.
      const recall = covered(bm, cm, roi), precision = covered(cm, bm, roi);
      check(`pose "${name}": the rigged ${KIND} covers the pre-rig silhouette (recall, 2 px)`, recall >= 0.5, recall.toFixed(3));
      check(`pose "${name}": the rigged ${KIND} adds nothing the pre-rig one lacked (precision, 2 px)`, precision >= 0.5, precision.toFixed(3));
    }
  }

  check('still no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));
} catch (e) {
  bad.push(`gate crashed - ${String(e).split('\n')[0]}`);
}
await b.close();
report();

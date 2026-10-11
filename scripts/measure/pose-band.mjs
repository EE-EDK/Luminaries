/**
 * M5.3 gate: the pose band, measured on the running game.
 *
 * The rigged creatures (deer, moth, puffling) hand their joint angles to the GPU
 * through a pose writer. entities/_poseBand.js lets only the nearest N of each
 * type do that; the rest hold the pose they last had. The unit tests prove the
 * selector and that the loops call it. This proves it on the live game, reading
 * the one thing that matters: do the arrays the shader reads stop changing for
 * the far creatures while the near ones keep moving?
 *
 *   1. The frame loop is turning, nothing threw, and the band the game itself
 *      reports (LumiDebug.quality().poseBand, which lives in main's module
 *      instance) is advancing frame by frame with the limits the code says.
 *   2. The live band module instance is found (a dev server can hand the page a
 *      second copy of a module) and PROVEN live: a limit set through it shows up
 *      in LumiDebug.quality().poseBand, which main's own copy reports.
 *   3. For each type, standing where the type has more live creatures than the
 *      band allows (the origin: 12 deer, 12 moths, 6 pufflings; pufflings use
 *      goTo): every scene render, the rig arrays (joint quaternions and scales)
 *      of every live creature are compared with the previous render's. Reported:
 *      the most creatures written in any single render (must not exceed the
 *      limit), who moved and who held, and whether the held ones' own state
 *      angles were changing meanwhile (otherwise holding still proves nothing).
 *      Run at full width, with the band squeezed to a quarter (the quality
 *      scaler's effect, applied through the same setter), and widened again: the
 *      held creatures must resume, and a resumed creature's rig must equal the
 *      quaternion of its current angles, not a stale one.
 *   4. Everything held is still drawn (group.visible), at its place. The cap
 *      freezes poses, it never hides a creature.
 *
 * Cannot prove how a frozen far deer reads on screen at 40 m; that is eyes.
 *
 * Run (playwright, see README.md; LUMI_BROWSER picks a browser binary):
 *   npx vite --port 5181
 *   LUMI_URL=http://localhost:5181/ node scripts/measure/pose-band.mjs
 */
import { chromium } from 'playwright';

const URL = process.env.LUMI_URL || 'http://localhost:5173/';
const W = 640, H = 400;
const WAIT_MS = 150000;

const ok = [], bad = [], notes = [];
const T0 = Date.now();
const say = (m) => console.error(`[${((Date.now() - T0) / 1000).toFixed(0)}s] ${m}`);
const check = (n, pass, d) => (pass ? ok : bad).push(`${n}${d ? ` - ${d}` : ''}`);

const b = await chromium.launch({ executablePath: process.env.LUMI_BROWSER || undefined, args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-sandbox'] });
const page = await (await b.newContext({ viewport: { width: W, height: H } })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

function report() {
  console.log([...ok.map((s) => `  PASS  ${s}`), ...bad.map((s) => `  FAIL  ${s}`), ...notes.map((s) => `  note  ${s}`)].join('\n'));
  console.log(`\n${ok.length} passed, ${bad.length} failed`);
  b.close().finally(() => process.exit(bad.length ? 1 : 0));
}

async function probe(name, fn, arg) {
  try { return await page.evaluate(fn, arg); } catch (e) { bad.push(`${name} - threw in the page: ${String(e).split('\n')[0]}`); return null; }
}

const TYPES = {
  deer: { store: 'deers', cull2: 3600, goTo: null, state: (c) => { let s = 0; for (const l of c.legPivots) s += Math.abs(l.upper.rotation.x) + Math.abs(l.lower.rotation.x); return s + Math.abs(c.neckBasePivot.rotation.x) + Math.abs(c.tailPivot.rotation.x); },
    joint: 5 /* DEER_JOINT.UPPER_0 */, stateEuler: (c) => c.legPivots[0].upper.rotation },
  moth: { store: 'moths', cull2: 2025, goTo: null, state: (c) => Math.abs(c.group._wingPivots[0].pivot.rotation.z) + Math.abs(c.antennae[0].rotation.x) + Math.abs(c.antennae[1].rotation.z),
    joint: 0 /* MOTH_JOINT.WING_0 */, stateEuler: (c) => c.group._wingPivots[0].pivot.rotation },
  puff: { store: 'puffs', cull2: 1600, goTo: 'puff', state: (c) => { let s = 0; for (const e of c.ears) s += Math.abs(e.mesh.rotation.z - e.baseRotZ); for (const e of c.eyes) s += Math.abs(1 - e.scale.y); return s; },
    joint: 0 /* PUFF_JOINT.EAR_0 */, stateEuler: (c) => c.ears[0].mesh.rotation }
};
const srcOf = (k) => '({' + ['state', 'stateEuler'].map((f) => `${f}:${TYPES[k][f].toString()}`).join(',') + '})';

try {
  await page.goto(URL, { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.LumiDebug, null, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#intro-continue')?.remove());
  await page.mouse.click(W / 2, H / 2);
  await page.waitForTimeout(1200);
  await probe('skip the intro', () => window.LumiDebug.skipIntro());

  say('booted');
  // ---- 1. the frame loop and the band the game itself reports ---------------------------------
  const loop = await probe('the frame loop is running', async () => {
    const L = window.LumiDebug;
    L.setTime(0.25); L.teleport(0, 0); L.quality(false);   // scaler off: the band stays where this script puts it
    const f0 = L.perf().fps.frames, q0 = L.quality().poseBand;
    await new Promise((r) => setTimeout(r, 3000));
    return { f0, f1: L.perf().fps.frames, q0, q1: L.quality().poseBand, notch: L.quality().notch };
  });
  if (loop) {
    check('the frame loop is running', loop.f1 > loop.f0, `frames ${loop.f0} -> ${loop.f1}`);
    check('the band the game reports is advancing in all three loops', ['deer', 'moth', 'puff'].every((k) => loop.q1[k].frame > loop.q0[k].frame), JSON.stringify(loop.q1));
    check('at full quality the limits are the capacities', ['deer', 'moth', 'puff'].every((k) => loop.q1[k].limit === loop.q1[k].capacity), `notch ${loop.notch}`);
    notes.push(`band capacities (deer/moth/puffling): ${loop.q1.deer.capacity}/${loop.q1.moth.capacity}/${loop.q1.puff.capacity}`);
  }
  check('nothing threw on the way in', errors.length === 0, errors.slice(0, 3).join(' | '));

  say('frame loop checked');
  // ---- 2. the live module instances ------------------------------------------------------------
  const handles = await probe('module handles', async (srcs) => {
    const urls = (path) => {
      const seen = performance.getEntriesByType('resource').map((e) => e.name.replace(location.origin, '')).filter((n) => n.split('?')[0] === path);
      return [...new Set([...seen, path])];
    };
    let R = null, ST = null;
    search: for (const ru of urls('/src/core/renderer.js')) {
      const Rc = await import(ru);
      for (const su of urls('/src/state/entityStore.js')) {
        const STc = await import(su);
        const c = STc.deers[0];
        if (!c) continue;
        let hit = false;
        Rc.scene.traverse((o) => { if (o === c.group) hit = true; });
        if (hit) { R = Rc; ST = STc; break search; }
      }
    }
    if (!R) return { err: 'no entity store instance has a deer in the drawn scene' };
    // Which copy of _poseBand.js is main's? The one whose frame counter moves AND whose limit change main's own report shows.
    let PB = null;
    const L = window.LumiDebug;
    for (const pu of urls('/src/entities/_poseBand.js')) {
      const M = await import(pu);
      const a = M.poseBands.deer.frame;
      await new Promise((r) => setTimeout(r, 600));
      if (M.poseBands.deer.frame <= a) continue;
      M.setPoseBandScale(0.5);
      const seen = L.quality().poseBand.deer.limit;
      M.setPoseBandScale(1);
      if (seen === Math.floor(M.poseBands.deer.capacity * 0.5 + 0.5)) { PB = M; break; }
    }
    if (!PB) return { err: 'no _poseBand.js instance is the one the game reports' };
    window.__G = { R, ST, PB, P: { deer: (0, eval)(srcs.deer), moth: (0, eval)(srcs.moth), puff: (0, eval)(srcs.puff) } };
    const rr = R.renderer;
    window.__renders = 0;
    const orig = rr.render.bind(rr);
    rr.render = function (s, c) { orig(s, c); if (s === R.scene) window.__renders++; };
    return { ok: true };
  }, { deer: srcOf('deer'), moth: srcOf('moth'), puff: srcOf('puff') });
  if (!handles || handles.err) { bad.push(`module handles - ${handles ? handles.err : 'probe failed'}`); report(); }
  check('the band module instance is the live one (a limit set through it shows in the game\'s own report)', handles.ok);

  say('module handles found');
  // ---- 3. per type: who is written, who holds --------------------------------------------------
  for (const kind of ['deer', 'moth', 'puff']) {
    const T = TYPES[kind];
    if (T.goTo) await probe('stand among the pufflings', (t) => window.LumiDebug.goTo(t, 8), T.goTo);
    else await probe('stand at the origin', () => window.LumiDebug.teleport(0, 0));
    await page.waitForTimeout(1500);

    // window: run `renders` scene renders at the given band scale, snapshotting every live creature's rig each render
    const runWindow = (scale, minRenders) => probe(`${kind}: window at scale ${scale}`, async ([kind, cull2, scale, minRenders, wantStateMotion, waitMs]) => {
      const { R, ST, PB, P } = window.__G;
      const store = ST[{ deer: 'deers', moth: 'moths', puff: 'puffs' }[kind]];
      PB.setPoseBandScale(scale);
      // Settle: the band decides a frame ahead, so the first renders after a change still carry the old membership.
      const settleTo = window.__renders + 3, settleBy = Date.now() + waitMs;
      while (window.__renders < settleTo && Date.now() < settleBy) await new Promise((r) => setTimeout(r, 40));
      const cam = R.camera.position;
      const live = store.filter((c) => { const dx = c.group.position.x - cam.x, dz = c.group.position.z - cam.z; return dx * dx + dz * dz <= cull2; });
      if (kind === 'deer') for (const d of live) { d.state = 'walk'; d.walkTimer = 999; }
      const snap = (c) => { const q = Array.from(c.rig.quats); if (c.rig.scales) q.push(...c.rig.scales); return q.join(','); };
      const prev = live.map(snap);
      const changes = live.map(() => 0), stateMoves = live.map(() => 0), lastState = live.map((c) => P[kind].state(c));
      let maxWritten = 0, renders = 0, ticks = 0;
      let lastFrame = PB.poseBands[kind].frame, overBound = 0;
      const deadline = Date.now() + waitMs;
      let lastR = window.__renders;
      while (Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 40));
        if (window.__renders === lastR) continue;
        lastR = window.__renders; renders++;
        // The band advances once per update tick. If more than one tick landed between two samples the union of their written sets
        // may legitimately be larger than one tick's limit, so the bound for a sample is limit x ticks since the last sample.
        const fnow = PB.poseBands[kind].frame, adv = Math.max(1, fnow - lastFrame);
        lastFrame = fnow; ticks += adv;
        let w = 0;
        live.forEach((c, i) => {
          const s = snap(c);
          if (s !== prev[i]) { changes[i]++; w++; prev[i] = s; }
          const st = P[kind].state(c);
          if (Math.abs(st - lastState[i]) > 1e-6) { stateMoves[i]++; lastState[i] = st; }
        });
        if (w > maxWritten) maxWritten = w;
        if (w > adv * PB.poseBands[kind].limit) overBound++;
        // long enough, and (when asked) the creatures that are not being written have been seen to move in state
        if (renders >= minRenders) {
          const heldMoving = live.some((c, i) => changes[i] === 0 && stateMoves[i] > 0);
          const anyHeld = live.some((c, i) => changes[i] === 0);
          if (!wantStateMotion || !anyHeld || heldMoving) break;
        }
      }
      const dist = live.map((c) => Math.hypot(c.group.position.x - cam.x, c.group.position.z - cam.z));
      return {
        n: live.length, renders, maxWritten, ticks, overBound,
        ids: live.map((c) => store.indexOf(c)),
        inRange: live.map((c) => { const dx = c.group.position.x - cam.x, dz = c.group.position.z - cam.z; return dx * dx + dz * dz <= cull2 * 0.9; }), limit: PB.poseBands[kind].limit, changes, stateMoves,
        dist: dist.map((d) => +d.toFixed(1)),
        // a creature that drifted past its cull radius during the window is hidden by the loop, by design: judge the rest
        visible: live.filter((c) => { const dx = c.group.position.x - cam.x, dz = c.group.position.z - cam.z; return dx * dx + dz * dz <= cull2 * 0.9; }).map((c) => c.group.visible)
      };
    }, [kind, T.cull2, scale, minRenders, true, WAIT_MS]);

    say(`${kind}: full window`);
    const full = await runWindow(1, 4);
    say(`${kind}: quarter window`);
    const quarter = await runWindow(0.25, 8);
    if (!full || !quarter) continue;

    const cap = full.limit;
    notes.push(`${kind}: ${full.n} live at this spot; full band limit ${cap}, quarter band limit ${quarter.limit}`);
    check(`${kind}: at full width no sample writes more creatures than limit x update ticks`, full.overBound === 0, `max written in one sample ${full.maxWritten}, limit ${cap}, ${full.ticks} ticks over ${full.renders} samples`);
    check(`${kind}: there are more live creatures than the squeezed band holds (otherwise nothing is tested)`, quarter.n > quarter.limit, `${quarter.n} live, limit ${quarter.limit}`);
    check(`${kind}: squeezed to a quarter, no sample writes more creatures than limit x update ticks`, quarter.overBound === 0, `max written in one sample ${quarter.maxWritten}, limit ${quarter.limit}, ${quarter.ticks} ticks over ${quarter.renders} samples`);
    if (quarter.ticks === quarter.renders) check(`${kind}: with one tick per sample the squeezed limit is exact`, quarter.maxWritten <= quarter.limit, `max written ${quarter.maxWritten}, limit ${quarter.limit}`);

    const heldIdx = quarter.changes.map((c, i) => (c === 0 ? i : -1)).filter((i) => i >= 0);
    const movedIdx = quarter.changes.map((c, i) => (c > 0 ? i : -1)).filter((i) => i >= 0);
    check(`${kind}: the near band keeps moving on the GPU`, movedIdx.length > 0 && movedIdx.length >= Math.min(quarter.limit, quarter.n) - 1, `${movedIdx.length} written at least once over ${quarter.renders} renders`);
    check(`${kind}: the far creatures' arrays stop changing`, heldIdx.length >= quarter.n - quarter.limit - 1 && heldIdx.length > 0, `${heldIdx.length} of ${quarter.n} never written`);
    const heldMoving = heldIdx.filter((i) => quarter.stateMoves[i] > 0).length;
    check(`${kind}: and their own joint angles kept changing meanwhile (so holding still is the cap, not stillness)`, heldMoving > 0, `${heldMoving} of ${heldIdx.length} held creatures changed state angle`);
    if (heldIdx.length && movedIdx.length) {
      const nearestHeld = Math.min(...heldIdx.map((i) => quarter.dist[i]));
      const nearestMoved = Math.min(...movedIdx.map((i) => quarter.dist[i]));
      const farthestMoved = Math.max(...movedIdx.map((i) => quarter.dist[i]));
      check(`${kind}: the nearest creature is in the band, not held`, nearestMoved <= nearestHeld, `nearest written ${nearestMoved} m, nearest held ${nearestHeld} m`);
      notes.push(`${kind}: written creatures lie ${nearestMoved}-${farthestMoved} m out, held ones start at ${nearestHeld} m (a held one may sit inside a written one's distance only through the 16 percent hysteresis margin)`);
    }
    check(`${kind}: every creature, held or not, is still drawn`, quarter.visible.every(Boolean), `${quarter.visible.filter((v) => !v).length} hidden`);

    // widen again: the held ones come back, and what they show is the current angle
    say(`${kind}: widened window`);
    const back = await runWindow(1, 4);
    if (back) {
      // by creature, not by position in the window's list; a creature that drifted out of its cull radius is not expected to resume
      const heldIds = heldIdx.map((i) => quarter.ids[i]);
      const backAt = new Map(back.ids.map((id, i) => [id, i]));
      const expected = heldIds.filter((id) => backAt.has(id) && back.inRange[backAt.get(id)]);
      const resumed = expected.filter((id) => back.changes[backAt.get(id)] > 0).length;
      check(`${kind}: widening the band brings the held creatures back`, expected.length > 0 && resumed >= Math.min(expected.length, Math.max(1, back.limit - quarter.limit)), `${resumed} of ${expected.length} held creatures still in range resumed (limit ${back.limit}, ${back.n} live)`);
    }
    const fresh = await probe(`${kind}: a resumed creature shows its current angle`, async ([kind, cull2]) => {
      const { R, ST, PB } = window.__G;
      // Euler XYZ -> quaternion, by hand (a bare 'three' import does not resolve from the page)
      const quat = (x, y, z) => {
        const c1 = Math.cos(x / 2), c2 = Math.cos(y / 2), c3 = Math.cos(z / 2), s1 = Math.sin(x / 2), s2 = Math.sin(y / 2), s3 = Math.sin(z / 2);
        return [s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3];
      };
      const store = ST[{ deer: 'deers', moth: 'moths', puff: 'puffs' }[kind]];
      PB.setPoseBandScale(1);
      const cam = R.camera.position;
      const fr = PB.poseBands[kind].frame;
      await new Promise((r) => setTimeout(r, 1500));
      // only creatures the band is writing right now (a deer left outside a full band is held by design)
      const live = store.filter((c) => { const dx = c.group.position.x - cam.x, dz = c.group.position.z - cam.z; return dx * dx + dz * dz <= cull2 && c._pbFrame >= PB.poseBands[kind].frame - 1; });
      // read the angle and the rig inside ONE task, so no frame can land between them; the rig lags the state by at most the frame
      // it was written in, so accept the rig matching the state read now or the state of the previous render (tolerance below)
      const out = [];
      for (const c of live) {
        const e = window.__G.P[kind].stateEuler(c);
        const q = quat(e.x, e.y, e.z);
        const j = { deer: 5, moth: 0, puff: 0 }[kind];
        let dot = 0;
        for (let k = 0; k < 4; k++) dot += q[k] * c.rig.quats[j * 4 + k];
        out.push(Math.abs(dot));
      }
      return { n: out.length, min: Math.min(...out) };
    }, [kind, T.cull2]);
    if (fresh) check(`${kind}: after widening, every live creature's rig is within a frame of its current angle`, fresh.n > 0 && fresh.min > 0.995, `smallest |dot| ${fresh.min.toFixed(5)} over ${fresh.n}`);
  }

  check('no page errors after all of it', errors.length === 0, errors.slice(0, 3).join(' | '));
} catch (e) {
  bad.push(`gate crashed - ${String(e).split('\n')[0]}`);
}
report();

# FPS Hotspot Report — 2026-06-07 (Task 11.1)

> **Status:** STATIC analysis + dev-only live probe. This document drives Phase-11
> tasks 11.2–11.5. **No gameplay code paths were changed** by Task 11.1 — only a
> dev-only measurement probe was added (`LumiDebug.perf()`), gated by
> `import.meta.env.DEV` and tree-shaken from the production bundle.

## Why this is static (measurement reality)

Real FPS, draw calls, and `renderer.info` **cannot be captured in the CI / headless
environment**: `requestAnimationFrame` never ticks, the render loop never runs a
frame, and `renderer.info.render.calls` stays `0`. The numbers below are therefore
**reasoned from code** (entity counts, loop complexity, light/draw-call budget), not
measured. The **owner measures live FPS on real hardware** using the probe shipped
in this task.

**Owner target (real hardware):** sustained **avg ≥ 20 FPS**, **1%-low ≥ 15 FPS**,
**never below 15** (below 15 reads as obviously jerky and must be eliminated).

---

## LumiDebug.perf() — usage recipe

A dev-only rolling-window FPS sampler now feeds an in-game / console probe.

**Where the data comes from**
- `src/systems/perfMonitor.js` — `sampleFrame(dt)` is called once per `requestAnimationFrame`
  tick in `src/main.js` `animate()`. It records frame durations into a fixed
  240-frame ring buffer (pre-allocated `Float32Array`, **zero per-frame
  allocation**; ~4 s @ 60 FPS, ~12 s @ 20 FPS).
- `getFpsStats()` → `{ fpsAvg, fps1pctLow, fpsMin, frames }` over that window.
  `fps1pctLow` is the mean FPS of the slowest 1 % of frames.
- `getTopTimings(n)` → top-N `_director*` subsystems by EMA ms (the same EMA the
  existing `reportTimings` table uses).
- `getRendererInfo()` → `{ drawCalls, triangles, programs, geometries, textures }`
  snapshotted from `renderer.info` (renderer wired via `setRenderer()` at init and
  re-captured every gameplay frame by `reportTimings`).

**How to run it (owner, real hardware)**
1. `npm run dev`, open the game, and **start the gameplay loop** (the sampler runs
   every frame, but draw-call data is most meaningful in-world).
2. Move around the worst-case scenario for **~10–15 s** so the rolling window fills
   with representative frames.
3. Open the probe one of two ways:
   - **DevTools console:** `LumiDebug.perf()` — also `LumiDebug.perf(10)` for the
     top-10 hottest subsystems.
   - **In-game terminal:** press **Esc twice within 3 s** to open the bottom
     terminal, type `perf()` (resolves via `with (LumiDebug)`).
4. Read the logged lines + table. Example shape:
   ```
   [perf] FPS  avg 41.2  1%-low 23.8  min 19.1  (over 240 frames)   target: avg>=20, 1%-low>=15
   [perf] draws 168  tris 1843200  programs 22  geos 140  texs 28
   ┌─────────┬──────────────┬──────────┬──────────┐
   │ (index) │    System    │  Avg ms  │  Max ms  │
   ├─────────┼──────────────┼──────────┼──────────┤
   │    0    │   'fauna'    │  '3.910' │  '7.220' │
   │    1    │  'crystals'  │  '1.240' │  '2.980' │
   └─────────┴──────────────┴──────────┴──────────┘
   ```
5. The returned value (`{ fps, renderer, top }`) is a plain object — capture it per
   scenario to fill the **measured** columns of the tables below.

The probe is a **no-op in production**: the sampler, ring buffer, and stats math are
all behind `import.meta.env.DEV` and verified stripped from `docs/assets/index-*.js`.

---

## Scene inventory (static — from `constants.js` + populate)

| Asset class | Count | Notes |
|---|---:|---|
| Trees | **495** | `TREE_N=500`, keep-out culled to ~495; 10 templates × `InstancedMesh`, per-instance frustum/LOD cull in `updateTreeLOD()` |
| Creatures (fauna) | **92** | puff **40** + jelly **35** + deer **12** + moth **35** + luminid **5** = 127 if moths/luminids counted; the **flocking O(n²) set is 87** (puff 40 + jelly 35 + deer 12) |
| Mushrooms | 370 | 10 shared module-scope materials |
| Crystals | 18 | 9 shared materials; up to 3 proximity point lights |
| Ferns / flowers / reeds | 250 / 230 / 90 | mostly instanced flora |
| Rocks / boulders / pebbles | 350 / 50 / 250 | SDF `InstancedMesh` |
| Misc flora (thornbloom…veilmoss) | ~480 | instanced density pass |
| Particles | 11 systems | each capped < 500/system (fireflies, spores, seeds, leaves, rain, dust, resonance rings, star motes, echo, …) |

> **Creature-count clarification for the report owner:** the brief's "92 = puff 40 /
> jelly 35 / deer 12 + moths/luminids" treats moths+luminids as the remainder. The
> three flocking species that run **per-frame neighbor scans** are **puff (40),
> jelly (35), deer (12)** — these are the O(n²) hotspot and the target of Task 11.2.
> Moths (35) and luminids (5) do **not** run mutual neighbor loops.

---

## Hotspot ranking (static reasoning)

Ranked by expected CPU cost per frame on the hot path. "Addressed by" maps each
hotspot to the Phase-11 task that fixes it.

| # | Hotspot | Where | Cost model | Addressed by |
|---|---|---|---|---|
| **1** | **Fauna O(n²) neighbor scans** | `updates/fauna/pufflings.js:128`, `deer.js:109`, `jellies.js`; plus secondary scans (puff huddle `:85`, puff↔deer startle `:68`, deer cascade-flee `:96`) | Each creature scans **all** others every frame. Worst case per frame ≈ puff 40²(=1600) + jelly 35²(=1225) + deer 12²(=144) ≈ **~3 000 distance checks**, plus the huddle/startle/cascade secondary loops (another ~1600 in storms). All squared-distance (no `sqrt`), but it's the largest avoidable per-frame loop count. | **11.2** (spatial hash → O(k) per query, flocking radius unchanged) |
| **2** | **Post-processing (bloom + saturation)** | `core/postprocessing.js` | `EffectComposer` = RenderPass → UnrealBloomPass (5 mip blur passes) → SaturationPass. Bloom internal res already capped at **448²** (`postprocessing.js:48`). GPU-bound; fixed per-frame cost regardless of scene. | **11.3** (confirm 512²/448² cap holds), **11.5** (adaptive: cut bloom strength under load) |
| **3** | **Draw calls / overdraw** | renderer-wide | Budget **< 200 draw calls**. Heaviest contributors: instanced trees (10 templates), flora instances, particle point clouds, transparent glow/haze (`depthWrite:false`) overdraw. Needs **live** `renderer.info.render.calls` to confirm — use the probe. | **11.4** (runtime draw-call audit + instancing/LOD breaches) |
| **4** | **Crystal proximity + resonance chains** | `main.js:_directorCrystalProximity` (`:276`), `updateCrystalResonance`, crystal-chain visuals | Per-frame scan of 18 crystals for player proximity (squared-dist, early-break) + up-to-3 dynamic point lights + (now-live) chain pulse visuals when standing in a 3+ cluster. Light count peaks here. | **11.4** (light ≤ 8 assert), **11.3** (throttle chain visuals if needed) |
| **5** | **Echo-visions + discovery/idle checks** | `systems/echoVisions.js`, `systems/discoveries.js`, `_directorDiscoveries` | Echo-visions known to use `sqrt`/allocation (accepted in audit 8.2). Discovery/idle-hint checks run every frame but don't need 60 Hz. | **11.3** (throttle / N-frame cadence) |
| **6** | **Shadow map updates** | `core/lighting.js:25` | `moon.shadow.autoUpdate = false`, manual ~1 Hz — already optimized. Verify it stays off. | **11.3** (confirm only) |
| **7** | **Tree LOD / frustum cull** | `entities/flora/trees.js` `updateTreeLOD()` | Per-instance camera-aware cull over 495 trees each frame. Necessary, but a candidate for distance-gating / N-frame striping if it shows up hot. | **11.3** / **11.4** (LOD distance tightening only if data shows a breach) |

### Draw-call reasoning (why ~< 200 is plausible but must be verified live)
- **Instanced geometry** collapses the big populations: 495 trees → ~10 draw calls
  (one per template `InstancedMesh`); rocks/boulders/pebbles → a few instanced calls;
  flora density classes → one call each. This is what keeps the count off the
  ~2 000-mesh naïve ceiling.
- **Remaining draw calls** come from: per-creature meshes that are **not** instanced
  (jellies, pufflings, deer, moths, luminids each render individually — ~92 groups),
  particle point clouds (11 systems), transparent glow/haze layers (extra passes due
  to `depthWrite:false`), the orb/quest visuals, sky dome, and the 3 post passes.
- **Action:** the static model can't produce the exact integer — **the owner must run
  `LumiDebug.perf()` and read `draws`** to confirm `< 200`. If un-instanced creatures
  push it over, Task 11.4 adds `InstancedMesh` where > 50 copies aren't instanced.

---

## Light budget (static — confirmed in code)

**8 real-time lights, exactly at budget** (`core/lighting.js`, `MAX_CRYSTAL_LIGHTS=3`):

| Light | Source | Count |
|---|---|---:|
| Hemisphere ambient | `hemiLight` | 1 |
| Directional (moon w/ shadow + moon2 fill) | `moon`, `moon2` | 2 |
| Player carry | `playerLight` | 1 |
| Orb | `orbLight` | 1 |
| Crystal proximity pool | `dynamicLights` (`MAX_CRYSTAL_LIGHTS`) | 3 |
| **Total** | | **8** |

No headroom — Task 11.4's runtime assert (`≤ 8`) must confirm nothing transiently
exceeds this during the crystal-cluster scenario.

---

## Stress scenarios to measure (owner — fills the empty columns)

Run each for ~15–20 s while moving, then `LumiDebug.perf()`. Record into this table.

| Scenario | How to trigger | avg FPS | 1%-low | min | draws | tris | lights | top subsystems (ms) |
|---|---|---:|---:|---:|---:|---:|---:|---|
| (i) Dense fauna cluster | Stand inside a tight puffling/jelly group | _measure_ | _measure_ | _measure_ | _measure_ | _measure_ | ≤8 | expect `fauna` #1 |
| (ii) Luminous storm + sprint | Weather → storm, echo-visions active, hold sprint | _measure_ | _measure_ | _measure_ | _measure_ | _measure_ | ≤8 | expect particles/echo |
| (iii) Quest finale / transform | `LumiDebug.grantOrbs(5)` then `forcePhase(phases.FINALE)` / `TRANSFORM` | _measure_ | _measure_ | _measure_ | _measure_ | _measure_ | ≤8 | expect quest/particles |
| (iv) 3+ crystal cluster | Walk into a cluster of ≥3 crystals (chain visuals live) | _measure_ | _measure_ | _measure_ | _measure_ | _measure_ | **=8 peak** | expect crystals/lights |

> Debug helpers for setup: `grantOrbs(n)`, `forcePhase(phases.*)`, `pauseTimers()`,
> `unlockEverything()`, `spawnWizard()` — see `LumiDebug.help()`.

---

## Prioritized optimization list (drives 11.2–11.5)

1. **[11.2] Spatial-hash the fauna neighbor scans** — replace the per-frame O(n²)
   loops in `pufflings.js` / `deer.js` / `jellies.js` with `queryNearDynamic` over
   `utils/spatialHash.js`. **Largest avoidable CPU win.** Behavior must stay
   identical: the neighbor **radius is unchanged** (puff 10 m / `d2<100`, deer 20 m /
   `d2<400`); only the candidate set is pre-filtered to nearby buckets. Reuse the
   existing module-scope neighbor buffers (Task 8.2). Guard with the existing
   `faunaSmoke` test + reasoning.
2. **[11.3] Throttle / stagger non-60 Hz work** — far-creature updates on an
   N-frame cadence (offset by index mod N to avoid synchronized hitches), throttle
   discovery/idle-hint checks, confirm shadow `autoUpdate` off + bloom res capped.
   Keep player physics, camera, and nearby fauna at full rate.
3. **[11.4] Runtime draw-call / light / particle audit** — with the live probe,
   assert ≤ 8 lights, < 200 draws, < 500 particles/system. Instance any > 50-copy
   group that isn't instanced (un-instanced creatures are the most likely breach);
   add a **headless regression guard** asserting the ceilings via `renderer.info`.
4. **[11.5] Adaptive quality floor** — only if 11.2–11.4 don't already hold ≥ 20
   everywhere. Hysteretic FPS-driven notch scaler (far particle counts → bloom
   strength → far LOD/cull → fairy/firefly/spore density), never below gameplay
   readability. Expose current notch via `LumiDebug`.
5. **[11.6] Re-measure** — re-run scenarios (i)–(iv) with the probe; confirm
   avg ≥ 20 and 1%-low ≥ 15 in each; record before/after here.

---

## Behavior-preservation guard (for 11.2)

The flocking output is exercised by `src/updates/fauna/__tests__/faunaSmoke.test.js`
(idle-branch neighbor path, exact-bug repro at 2 m / 3 m separation). When 11.2
swaps the candidate set to a spatial hash, this test must stay green with the
**unchanged radius constants** — the steering output (`separation`/`cohesion`) is a
pure function of the neighbor set, and the spatial hash returns the same set within
the radius, so the result is identical. Extend that test with a deterministic
neighbor-set assertion if 11.2's refactor warrants it.

---

*Generated by Task 11.1 (FPS hardening, audit-remediation plan 2026-06-07). Tests:
183 pass (176 baseline + 7 new perfMonitor probe tests). Build: clean.*

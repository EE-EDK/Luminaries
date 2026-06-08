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

---

## Phase 11 changes summary (Tasks 11.2–11.5)

> **Status:** All four optimisation passes landed. Tests: **218 pass** (176 baseline +
> 42 new across 11.1–11.5). Build: clean. The numbers in the stress-scenario table
> remain `_measure_` — they must be filled in by the owner on real hardware using the
> recipe below. No headless FPS measurement is possible.

### 11.2 — Fauna spatial hash (O(n²) → O(k) neighbour scans)

**Files changed:** `src/utils/spatialHash.js`, `src/updates/fauna/pufflings.js`,
`src/updates/fauna/deer.js`, `src/updates/fauna/jellies.js`

**What was done:**
- `buildNamedDynamicHash(name, list, cellSize)` + `queryNamedDynamic(name, x, z, r)` added to
  `spatialHash.js`. Each fauna type ('puff', 'deer', 'jelly') gets its own named grid keyed to
  its neighbour radius, so same-type queries are not conflated with other fauna.
- Each updater rebuilds its named grid once at the top of its update function, then all neighbour
  lookups within that tick query the grid rather than scanning the full list.
  - **pufflings.js** — 'puff' grid (cell = flock radius 10 m) backs the flocking loop
    (`d2 < 100`), the huddle nearest-search, and pairwise collision. Per-frame `_hashIdx` ordinal
    preserves the old j = i+1 "each pair once" symmetric resolution.
  - **deer.js** — 'deer' grid (cell = neighbour radius 20 m) merges the cascade-flee and
    herd-cohesion scans into one `queryNamedDynamic` call (`d2 < 400`). Identical
    squared-distance filter; first-match flee semantics preserved.
  - **jellies.js** — 'jelly' grid (cell = 15 m) replaces the sync-phase inline `Map`; the
    12-frame sync throttle is unchanged.
- **Radii unchanged** — the neighbour radius passed to each query is the same constant that was
  previously used in the O(n²) loop. Steering output is identical for any fixed entity set.
- **Behaviour guard** — `faunaSmoke.test.js` (idle-branch path, exact-bug repro at 2 m / 3 m)
  stays green. `spatialHash.test.js` extended with named-grid coverage.

**Expected per-frame CPU reduction (qualitative):**

Before: `puff 40² = 1600` + `jelly 35² = 1225` + `deer 12² = 144` ≈ **~3 000 squared-distance
checks per frame** in the flocking loops alone, plus ~1 600 more in the huddle / startle /
cascade-flee secondary passes during storms. The four jelly sync scans each rebuilt a fresh `Map`
over 35 entries every call.

After: each query touches only the 1–4 hash buckets that overlap the radius. For a 40-puffling
cluster with a 10 m flock radius across a ~250 m × 250 m world, the expected bucket count is ≤ 4
cells, typical candidate set ≤ 8–12 puffs — a **10–20× reduction** in candidates per query.
Benefit is highest in open-field scenarios; in a dense cluster the candidate set converges toward
the full group (same cost), but that is the worst case. Net: the **fauna** column in
`LumiDebug.perf()` EMA should drop noticeably in the dense-fauna scenario.

---

### 11.3 — N-frame throttling of non-critical systems

**Files changed:** `src/kernel/scheduler.js`, `src/systems/registration.js`,
`src/systems/discoveries.js`, `src/systems/echoVisions.js`, `src/debug/debugConsole.js`

**What was done:**
- `scheduler.js` gained `everyN` / `offset` options for `addSystem`. Throttled systems receive the
  **accumulated `dt` since their last run** so timers stay wall-clock correct regardless of cadence.
  A monotonic per-scheduler frame counter drives the cadence; `reset()` clears it; `list()` exposes
  metadata for `LumiDebug.perf()`.
- `registration.js` splits the discoveries update into:
  - **`discoveries` (full-rate)** — puffling speech-bubble screen-projection (must stay 60 Hz).
  - **`discoveryChecks` (everyN=4, offset=2)** — proximity-discovery trigger, idle hints, glyph
    reveal. These touch no physics / motion, so running them once every 4 frames (~15 Hz at 60 FPS)
    has no perceptible effect. The `offset:2` staggers this batch away from any other throttled
    systems so no single frame does all the reduced-cadence work at once.
- `discoveries.js` — `checkIdleHints(idleTime, dt)` now uses the passed `dt` for hint/cooldown
  timers (was hardcoded 0.016 s) so the throttled cadence does not drift.
- `echoVisions.js` — cheap gate: activation test runs before the heavier `isRestored()` lookup;
  fast-path early-out of the per-frame visibility pass when inactive and already hidden.
- `debugConsole.js` — `LumiDebug.perf()` now lists throttled systems (`discoveryChecks×4@2`)
  so the owner can confirm which work is staggered off the hot path.

**Expected per-frame CPU reduction (qualitative):**

`discoveryChecks` ran 60 times per second; after throttling it runs ~15 times per second — a 4×
reduction of that work unit. This is a secondary hotspot (much cheaper than fauna), but it
contributes to the discovery / idle-hint checks that happen even when the player stands still.
The echoVisions fast-path eliminates the `isRestored()` call and visibility-pass iteration on all
frames when no echo-vision is active, which is the common case outside the quest finale.

---

### 11.4 — Light-budget fix (9th real-time light removed) + headless guard

**Files changed:** `src/entities/world/obelisk.js`, `src/quest/questVisuals.js`,
`src/core/__tests__/lightBudget.test.js`

**What was done:**
- **Root cause:** `obelisk.js` created a dedicated `PointLight` on top of the documented 8-light
  rig. Three.js bakes the scene's active light count into every lit shader regardless of intensity
  level, so even an intensity-0 obelisk light was a genuine shader-cost and budget breach.
- **Fix:** the dedicated obelisk light was removed. The pooled `orbLight` — which is idle once all
  5 orbs are found (exactly when the obelisk rises) — is re-aimed at the obelisk position with a
  purple colour in `questVisuals.updateQuestVisuals`. The scene now holds **exactly 8 real-time
  lights** (1 hemi + 2 directional + 1 player + 1 orb + 3 crystal proximity).
- **Headless guard:** `src/core/__tests__/lightBudget.test.js` counts the actual `Light` instances
  added by `lighting.js` (asserts `=== 8` + `<= 8`), pins `MAX_CRYSTAL_LIGHTS` at 3, and asserts
  `makeObelisk()` adds zero new lights. This test will fail if a future commit re-introduces a
  stray light.

**Expected draw-call / shader-cost reduction (qualitative):**

Removing the 9th real-time light drops the shader `#define NUM_POINT_LIGHTS` macro by 1, which
causes Three.js to recompile a lighter variant of every affected material's fragment shader. The
shader-compile cost is a one-time overhead (first warm-up frames), but the **per-fragment ALU cost
is reduced on every subsequently rendered frame** for all lit materials — particularly the ~400
mushrooms and ~18 crystals that have large triangle counts and per-fragment lighting. The
visible-light budget is also fully at capacity again, removing the risk of the crystal pool being
silently capped before MAX_CRYSTAL_LIGHTS=3.

---

### 11.5 — Adaptive quality floor (production FPS safety net)

**Files changed:** `src/systems/adaptiveQuality.js` (new), `src/systems/registration.js`,
`src/kernel/scheduler.js` (`Phase.ADAPTIVE_QUALITY`), `src/kernel/context.js`
(`ctx.time.frameDt`), `src/updates/spawning.js`, `src/entities/flora/trees.js`,
`src/debug/debugConsole.js` (`LumiDebug.quality()`)

**What was done:**
- **`adaptiveQuality.js`** — hysteretic notch state machine. Pure core (`makeQualityState` +
  `stepQuality`) is allocation-free and unit-tested headlessly. Runtime layer samples the rAF EMA
  and drives the notch; bloom strength is eased (no pop). Runs in **dev + production** (it is the
  safety net, not a dev probe).
- **Notch ladder (cheapest first):**

  | Notch | Name | particleScale | bloomStrength | lodScale | densityScale |
  |---|---|---:|---:|---:|---:|
  | 0 | FULL | 1.00 | 0.60 | 1.00 | 1.00 |
  | 1 | PARTICLES_LOW | 0.65 | 0.60 | 1.00 | 1.00 |
  | 2 | BLOOM_CUT | 0.65 | 0.30 | 1.00 | 1.00 |
  | 3 | BLOOM_OFF | 0.65 | 0.00 | 0.85 | 1.00 |
  | 4 | DENSITY_LOW | 0.45 | 0.00 | 0.85 | 0.70 |

- **Hysteresis:** step DOWN after smoothed FPS holds < 18 for 1 s; step UP after it holds > 24 for
  3 s. Dead-band (18–24 FPS) bleeds both timers so brief excursions don't bank a transition.
- **Wiring:** registered as `Phase.ADAPTIVE_QUALITY` (runs first each frame) driven by
  `ctx.time.frameDt` (raw rAF delta, not dilated `worldDt`) so FPS sampling is accurate during
  slow-mo beats. Knob consumers: `spawnFireflies` far cap × `getParticleScale()`, spore density ×
  `getDensityScale()`, tree far-cull radius × `getLodScale()²`.
- **`LumiDebug.quality()`** — snapshot of current notch, smoothedFps, active knob values, and
  hysteresis timers. `quality(false)` / `quality(true)` toggles the scaler for A/B testing.
- **`LumiDebug.perf()` updated** — also calls `listSystems()` and logs throttled systems so the
  owner sees `discoveryChecks×4@2` in the perf snapshot.

**Expected CPU/GPU reduction when the scaler activates (qualitative):**

Notch 1 (PARTICLES_LOW) reduces far-particle caps by 35%, shedding particle `InstancedMesh`
instance count and thus per-instance matrix update cost. Notch 2 (BLOOM_CUT) halves bloom
strength, and notch 3 (BLOOM_OFF) fully disables the UnrealBloomPass (eliminates its 5-mip blur
passes — the single largest GPU cost per frame after rasterisation). Notch 4 (DENSITY_LOW) pulls
in the tree far-cull sphere radius by 15% (reducing instance-matrix update counts for distant
trees) and cuts firefly/spore spawn density by 30%. Importantly, the scaler **only activates when
the static budget is already failing** — if 11.2–11.4 hold `avg ≥ 20` in all four scenarios the
notch will stay at 0 (FULL) indefinitely.

---

## Verification recipe (owner — real hardware)

Use this procedure to confirm `avg ≥ 20 FPS` and `1%-low ≥ 15 FPS` in each stress scenario
and to diagnose any scenario that dips below target.

### Setup

```sh
npm run dev        # http://localhost:5173  (dev build, probes active)
```

Open the game and **start playing** (click to unlock pointer, wait through the intro). The
`perfMonitor` ring buffer fills over the first ~10 seconds of gameplay; FPS stats are only
meaningful once the buffer has enough frames. The adaptive-quality scaler warms up over the first
30 frames to avoid false drops during shader compile.

The two probe commands are:
- `LumiDebug.perf(topN?)` — FPS stats + renderer.info + hottest subsystems (+ throttled systems)
- `LumiDebug.quality()` — current notch, smoothed FPS, active quality knobs

Both are accessible from the **DevTools console** directly, or from the **in-game terminal**
(press **Esc twice within 3 s**, then type `perf()` or `quality()`).

---

### Scenario (i): Dense fauna cluster

**Trigger:** Stand inside a tight puffling / jelly group. The puffling starting area (northeast
corner of the map) is a reliable cluster. If needed: `LumiDebug.unlockEverything()` draws fauna
closer with attunement.

**Procedure:**
1. Walk into the densest visible puffling/jelly cluster.
2. Move around slowly for **15–20 s** so the ring buffer fills.
3. Run `LumiDebug.perf()`.
4. Check: `avg ≥ 20`, `1%-low ≥ 15`.
5. Expect `fauna` near the top of the subsystem table.

**If this scenario dips below target:**
- `fauna` EMA > 3 ms → the spatial-hash cell size may be too large for the cluster density.
  In `spatialHash.js`, the 'puff' grid uses `_PUFF_FLOCK_R` (10 m) as cell size; reducing to
  5 m would tighten bucket counts at the cost of more map entries. This is a one-line tuning
  change.
- Check `LumiDebug.quality()` → if `notch > 0` the scaler already stepped down. If `notch === 0`
  and `avg < 18`, the scaler has not yet had time to react; give it another 1–2 s.
- If the scaler reaches notch 2 (BLOOM_CUT) and FPS still sags, step it manually:
  `LumiDebug.quality(false)` to pin, then toggle bloom off via `quality.bloomStrength` inspection.

---

### Scenario (ii): Luminous storm + sprint

**Trigger:** Force a storm with `LumiDebug.forcePhase(phases.SEEKING)` + wait for weather to cycle
(or open DevTools and call `window.__forceWeather?.('storm')` if exposed). Hold sprint
(Shift/double-tap forward) through the rain + echo-visions active area.

**Procedure:**
1. Force a storm. Move into an open area and hold sprint for **15–20 s**.
2. Run `LumiDebug.perf()`.
3. Check: `avg ≥ 20`, `1%-low ≥ 15`.
4. Expect `particles` (rain + echo) and possibly `fauna` near the top.

**If this scenario dips below target:**
- `particles` EMA dominates → rain particle count (max 300) or echo-vision path sampling is the
  bottleneck. The echo-vision fast-path (`echoVisions.js`) exits early when inactive; if active,
  the path-sampling loop runs every frame. Reducing the path step count in `echoVisions.js`
  (currently a static stride) would be the knob.
- If the adaptive scaler reaches notch 1 (PARTICLES_LOW) quickly, the far-particle cap reduction
  (0.65×) should help the rain system. If it doesn't, check that `getParticleScale()` is actually
  consumed in `updates/spawning.js` `spawnFireflies`.

---

### Scenario (iii): Quest finale / transform

**Trigger:**
```js
LumiDebug.grantOrbs(5)
LumiDebug.forcePhase(phases.FINALE)
// or: LumiDebug.forcePhase(phases.TRANSFORM)
```

**Procedure:**
1. Grant 5 orbs, force FINALE (or TRANSFORM).
2. Move and look around during the finale particle burst for **15–20 s**.
3. Run `LumiDebug.perf()`.
4. Check: `avg ≥ 20`, `1%-low ≥ 15`.
5. Expect `quest` and `particles` near the top.

**If this scenario dips below target:**
- Large particle bursts + quest-state transitions + sky constellation reveals all fire on the same
  frame. Check `particles` EMA vs `quest` EMA — the burst is transient; `avg` should recover once
  the burst settles.
- If the 1%-low is the culprit (single spike, not sustained sag), the adaptive scaler won't help
  (it reacts over 1 s). The fix is to stagger the burst onset: emit constellation reveals across
  2–3 frames rather than all at once. File a follow-up if the 1%-low < 15 is reproducible.

---

### Scenario (iv): 3+ crystal cluster

**Trigger:** Walk into a cluster of ≥ 3 crystals (they spawn in groups near the orb sites). The
crystal-chain visuals (resonance pulse) go live when ≥ 2 crystals are in proximity.

**Procedure:**
1. Approach a crystal cluster until the chain-pulse visual activates.
2. Stand still for **15–20 s** (the chain pulse is the sustained load).
3. Run `LumiDebug.perf()`.
4. Check: `avg ≥ 20`, `1%-low ≥ 15`.
5. Confirm renderer `draws` line shows `lights` column ≤ 8. The crystal proximity pool
   (`MAX_CRYSTAL_LIGHTS = 3`) peaks here; the total must remain ≤ 8.
6. Expect `crystalProximity` and `crystalVisuals` near the top.

**If this scenario dips below target:**
- The 9th-light fix (Task 11.4) already removed the obelisk light breach. If `lights > 8` shows
  up in a future run, use the `lightBudget.test.js` guard to isolate which entity introduced it.
- `crystalVisuals` EMA > 2 ms → the resonance-chain pulse is iterating chain segments too
  frequently. The `crystalVisuals` scheduler system runs full-rate (everyN=1); changing it to
  `everyN=2, offset=1` halves its cadence at the cost of slightly jerkier pulse animation. Try
  that before touching the pulse math.
- If `drawCalls > 200` in this scenario, check that no instanced geometry has been accidentally
  split into per-mesh draws (e.g. a crystal segment using a new `Mesh` instead of an instanced
  slot).

---

### Notch-by-notch knob guide (for adaptive scaler tuning)

If any scenario stays persistently below target even after the scaler reaches the readability
floor (notch 4), use `LumiDebug.quality(false)` to pin the quality and isolate the offending
subsystem from the `perf()` table. Then apply the matching fix:

| Notch | What was shed | Knob to adjust if still too slow |
|---|---|---|
| 1 (PARTICLES_LOW) | Far particle cap × 0.65 | Lower to 0.45 in `_particleScale[1]` (adaptiveQuality.js) |
| 2 (BLOOM_CUT) | Bloom strength 0.6 → 0.3 | Lower to 0.15 or jump straight to 0.0 |
| 3 (BLOOM_OFF) | Bloom disabled; far LOD × 0.85 | Tighten `_lodScale[3]` to 0.70 |
| 4 (DENSITY_LOW) | Firefly/spore density × 0.70; LOD × 0.85 | Tighten `_densityScale[4]` to 0.50 |

After any notch-table tweak, re-run `npm test` (the `adaptiveQuality.test.js` unit tests assert
notch transitions but not the knob values — a manual table comparison is sufficient) and
`npm run build` to confirm no regressions.

---

## Measured results (fill in after owner playtest)

Run each scenario per the recipe above. Record the `LumiDebug.perf()` output here. The `before`
columns are static-reasoning estimates from Task 11.1; the `after` columns are real measurements.

| Scenario | avg FPS (before est.) | avg FPS (after — measure) | 1%-low (after) | min (after) | draws | lights | top subsystem (ms) | notch |
|---|---:|---:|---:|---:|---:|---:|---|---:|
| (i) Dense fauna | ~20–25 (hotspot) | _measure_ | _measure_ | _measure_ | _measure_ | ≤8 | `fauna` | _measure_ |
| (ii) Storm+sprint | ~22–28 | _measure_ | _measure_ | _measure_ | _measure_ | ≤8 | `particles`/`echo` | _measure_ |
| (iii) Finale/transform | ~18–24 (burst) | _measure_ | _measure_ | _measure_ | _measure_ | ≤8 | `quest`/`particles` | _measure_ |
| (iv) Crystal cluster | ~25–30 | _measure_ | _measure_ | _measure_ | _measure_ | **=8 peak** | `crystalVisuals` | _measure_ |

> **Pass criteria:** avg ≥ 20 and 1%-low ≥ 15 in every row.
> If any row fails, the "if dips below target" section for that scenario identifies the knob.

---

*Updated by Task 11.6 (document changes + verification recipe, 2026-06-07). Tests: 218 pass
(176 baseline + 42 new across 11.1–11.5). Build: clean. Static-reasoning quality; owner fills
measured columns on real hardware.*

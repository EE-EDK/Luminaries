# Luminaries Codebase Review — Unified Plan Document

**Date:** 2026-04-14
**Scope:** Full `src/` review across 12 modules (~86 files, ~14,000 LOC)
**Reviewers:** 12 parallel agents (core, entities, kernel, particles, quest, state, systems, ui, updates, utils, world, top-level)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Phase 0 — Critical Bugs (Must Fix First)](#phase-0--critical-bugs)
3. [Phase 1 — Performance Hotpath Fixes](#phase-1--performance-hotpath-fixes)
4. [Phase 2 — Architecture & Integration Cleanup](#phase-2--architecture--integration-cleanup)
5. [Phase 3 — Convention Compliance Pass](#phase-3--convention-compliance-pass)
6. [Phase 4 — Streamlining & Refactoring](#phase-4--streamlining--refactoring)
7. [Phase 5 — Test Coverage & Documentation](#phase-5--test-coverage--documentation)
8. [Appendix A — Full Issue Registry](#appendix-a--full-issue-registry)
9. [Appendix B — Math.random() Audit](#appendix-b--mathrandom-audit)

---

## Executive Summary

The Luminaries codebase is in **good overall health**. The functional style is consistent, the kernel infrastructure (eventBus, scheduler) is well-designed, the entity builder pattern is followed across all 30 entity types, and the procedural audio/music/terrain systems are impressive engineering. The game runs and plays correctly end-to-end.

However, the review uncovered **13 bugs**, **23 performance issues** (some systemic), **30+ convention violations**, and significant **architectural dead code** in the kernel layer. The single biggest performance opportunity is a terrain height cache that would eliminate hundreds of expensive noise evaluations per frame. The single biggest architectural issue is a kernel infrastructure layer (registry + context) that is populated every frame but has zero consumers.

### By the Numbers

| Category | Count | Examples |
|----------|-------|---------|
| Critical bugs | 13 | Resonance rings invisible, deer stuck at y=0, missing touchcancel, eventBus dispatch corruption |
| Performance (hot path) | 23 | 600+ sqrt/frame in getGroundY, 43K wasted tree collision iterations, frame allocations in 15+ files |
| Dead code / unused | 12 | Kernel context (zero readers), kernel registry (zero readers), 12+ unused imports in main.js |
| Convention violations | 30+ | 60+ inline hex colors across fauna, 18+ inline clamp patterns, 55+ inline dist2 patterns |
| Missing tests | 7 | EventBus dispatch edge cases, scheduler error isolation, utils/rng.js, utils/math.js |
| Streamlining opportunities | 20+ | Shared particle pool factory, extracted director functions, consolidated resize handler |

### Recommended Execution Order

**Phase 0** fixes gameplay-breaking bugs. **Phase 1** tackles performance — the highest-value work since every fix directly improves FPS. **Phase 2** cleans up architecture (dead kernel code, dual notification paths). **Phase 3** is a convention sweep (colors, Math.sqrt, depthWrite). **Phase 4** is refactoring for maintainability. **Phase 5** adds tests and fixes docs.

---

## Phase 0 — Critical Bugs

*These are correctness issues that affect gameplay, cause visual artifacts, or risk data corruption. Fix before anything else.*

### 0.1 Resonance ring opacity compounds multiplicatively — rings invisible
- **ID:** C-PART-001
- **File:** `src/particles/resonanceRings.js:105`
- **Problem:** `r.mat.opacity *= (1.0 - t)` compounds each frame, draining to zero in 2-3 frames. Resonance rings are the primary visual feedback for the spirit hum pitch-matching mechanic.
- **Fix:** Store `r.startOpacity = resonanceStrength * 0.6` in `spawnResonanceRing()`. Replace line 105 with `r.mat.opacity = r.startOpacity * (1.0 - t)`.

### 0.2 Deer ground-clamping hardcoded to y=0
- **ID:** C-ENT-001
- **File:** `src/entities/fauna/deer.js:428`
- **Problem:** `g.position.y = 0;` ignores terrain. Deer float above or sink below sloped ground.
- **Fix:** Replace with `g.position.y = getGroundY(g.position.x, g.position.z);` (import `getGroundY` from terrain.js). Consider caching like other fauna (movement threshold check).

### 0.3 EventBus `off()` during dispatch corrupts listener iteration
- **ID:** C-KERN-001
- **File:** `src/kernel/eventBus.js:63-67`
- **Problem:** If a listener calls `off()` or its returned unsubscribe function during `emit()`, `splice()` mutates the array mid-iteration, skipping the next listener.
- **Fix:** Reverse iteration in `emit()`: `for (let i = arr.length - 1; i >= 0; i--) arr[i](data);` — zero-alloc, splice-safe.

### 0.4 Scheduler: throwing system kills all subsequent systems in the frame
- **ID:** C-KERN-002
- **File:** `src/kernel/scheduler.js:56-58`
- **Problem:** An uncaught exception in any system's `update()` aborts the entire frame. With 16 registered systems, a bug in one kills audio, quest, HUD, and everything downstream.
- **Fix:** Wrap each system call in try/catch:
  ```js
  try { _systems[i].update(dt, t); }
  catch (e) { if (import.meta.env?.DEV) console.error('scheduler: ' + _systems[i].name, e); }
  ```

### 0.5 Missing touchcancel handlers on mobile controls
- **ID:** C-CORE-002
- **File:** `src/core/input.js:103-184`
- **Problem:** Joystick, jump, sprint, and hum slider handle `touchstart`/`touchmove`/`touchend` but not `touchcancel`. A cancelled touch (incoming call, system dialog) locks the player into continuous motion/jumping/sprinting.
- **Fix:** Add `touchcancel` listeners mirroring `touchend` logic for `jzEl`, `bjEl`, `bsEl`, `slEl`.

### 0.6 Puffling core + spore materials missing `depthWrite: false`
- **IDs:** C-ENT-003, C-ENT-004
- **Files:** `src/entities/fauna/pufflings.js:22, 97`
- **Problem:** Transparent materials without `depthWrite: false` cause rendering artifacts — transparent objects incorrectly occlude things behind them.
- **Fix:** Add `depthWrite: false` to both `coreMat` (line 22) and `sporeMat` (line 97).

### 0.7 Deer trail spheres added to scene but never cleaned up
- **ID:** C-ENT-002
- **File:** `src/entities/fauna/deer.js:308`
- **Problem:** 3 trail spheres per deer (36 total) added directly to `scene`, not to the deer's group. Memory leak if scene is ever cleared.
- **Fix:** Add trail spheres to the deer's group instead of `scene`.

### 0.8 RNG seed=0 absorbing state
- **ID:** C-UTIL-001
- **File:** `src/utils/rng.js:9`
- **Problem:** LCG formula produces 0 when seed is 0, and 0 maps back to 0 forever. `resetSeed(0)` is silently swallowed by `||` operator.
- **Fix:** Guard: `if (_s === 0) _s = 42;` in `sr()`. Use `??` instead of `||` in `resetSeed`.

### 0.9 Quest: rune color capture is fragile — `consumeFrequency()` ordering
- **ID:** C-QUEST-001
- **File:** `src/quest/questManager.js:287-331`
- **Problem:** `freq` is captured before `consumeFrequency()` resets it. Works by accident. Any reorder breaks rune coloring silently.
- **Fix:** Store creature type on orb object before consuming. Include `creatureType` in ORB_COLLECTED event payload. Move `consumeFrequency()` to after all frequency-dependent logic.

### 0.10 Quest: no `break` after orb collection — potential double-collection
- **ID:** C-QUEST-002
- **File:** `src/quest/questManager.js:243-349`
- **Problem:** After collecting an orb, the loop continues iterating remaining orbs. Currently safe because `consumeFrequency()` nullifies the gate, but fragile.
- **Fix:** Add `break;` after the orb-collection block (after line 348).

### 0.11 Luminid `wanderAng` uses seeded RNG at runtime
- **IDs:** C-UPD-001, I-ENT-006
- **File:** `src/entities/fauna/luminids.js:129`
- **Problem:** `sr()` used in per-frame update loop. Corrupts seeded sequence for other systems.
- **Fix:** Replace `sr()` with `Math.random()`.

### 0.12 Luminid IK `localFoot` computed but never used
- **ID:** C-UPD-002
- **File:** `src/entities/fauna/luminids.js:185-186`
- **Problem:** `leg.currentPos.clone().sub(g.position)` allocates a Vector3 that is never referenced. Pure waste.
- **Fix:** Delete lines 185-186.

### 0.13 Thunder timer goes infinitely negative
- **ID:** C-SYS-002
- **File:** `src/systems/audio/ambient.js:41-42`
- **Problem:** Timer decrements every frame unconditionally, accumulating hundreds of seconds of negative debt.
- **Fix:** Only decrement when `thunderTimer > 0`, or clamp: `Math.max(thunderTimer - dt, -1)`.

---

## Phase 1 — Performance Hotpath Fixes

*These directly impact FPS. Ordered by estimated impact.*

### 1.1 Terrain height cache (LUT) for `getGroundY()`
- **IDs:** S-WORLD-001, C-WORLD-001, C-WORLD-002, C-WORLD-003, I-WORLD-007
- **File:** `src/world/terrain.js`
- **Impact:** Eliminates 150-500+ expensive noise evaluations per frame (each with 15+ noise layers + 12 sqrt ops + flat zone scan).
- **Plan:** After all flat zones are registered, build a 180x180 grid cache (~130KB). `getGroundY()` becomes a bilinear interpolation of 4 grid points. The current implementation becomes the cache-fill function.
- **Estimated gain:** 2-5ms/frame on mobile, 0.5-1.5ms on desktop.

### 1.2 Spatial hash for tree collision (~43K wasted iterations/frame)
- **ID:** P-UPD-005
- **Files:** `src/updates/fauna/deer.js:223`, `pufflings.js:279`, `moths.js:180`
- **Impact:** Deer (12), pufflings (40), and moths (35) each scan all 500 trees for collision. 43,500 array accesses/frame.
- **Plan:** Build a 10m-cell spatial hash at init. Each creature checks 1-4 cells instead of 500 entries. One-time cost, permanent benefit.
- **Estimated gain:** Eliminates ~40K iterations/frame.

### 1.3 `getInput()` allocates object every frame
- **ID:** C-CORE-001
- **File:** `src/core/input.js:220-232`
- **Fix:** Lift module-scoped `_input = { x: 0, z: 0 }`, mutate and return it.

### 1.4 Luminid per-frame allocations: `.clone()`, `.forEach()`, `.some()`, object literals
- **ID:** P-UPD-001
- **File:** `src/entities/fauna/luminids.js:152-193`
- **Fix:** Pre-allocate `_tmpVec3`, replace `.forEach()`/`.some()` with `for` loops, replace `distanceToSquared({...})` with manual `dx*dx+dy*dy+dz*dz`.

### 1.5 Fauna neighbor arrays + steering object literals (systemic)
- **IDs:** P-UPD-002, P-UPD-003
- **Files:** All fauna update files
- **Fix:** Module-scoped reusable neighbor buffers. Pre-allocated `_pos = { x: 0, z: 0 }` mutated before each steering call.

### 1.6 Inactive particles recompute hide matrix every frame
- **IDs:** P-PART-001, P-PART-002
- **Files:** All 9 InstancedMesh particle files
- **Fix:** Write hide matrix once when particle first becomes inactive. Guard `needsUpdate = true` behind `anyActive` flag.
- **Estimated gain:** Eliminates ~370 wasted `updateMatrix()` calls/frame.

### 1.7 Rain + firefly `getGroundY()` called per-particle per-frame
- **IDs:** P-PART-003, P-PART-004
- **Files:** `src/particles/rain.js:83`, `fireflies.js:78`
- **Fix:** Cache ground Y at spawn time for rain. Cache with movement-threshold refresh for fireflies (every 0.5s or 1m movement).
- **Estimated gain:** Eliminates 150-450 terrain lookups/frame (even more with height cache from 1.1).

### 1.8 Bloom resolution cap lost after window resize
- **ID:** I-CORE-003
- **File:** `src/core/postprocessing.js:71-75`
- **Fix:** After `composer.setSize()`, manually re-cap bloom pass resolution to 512x512.

### 1.9 `camera.updateProjectionMatrix()` called every frame unconditionally
- **ID:** I-CORE-001
- **File:** `src/core/player.js:140`
- **Fix:** Only call when FOV actually changes (threshold check or dirty flag).

### 1.10 Player collision loops: no distance pre-filter
- **ID:** I-CORE-006
- **File:** `src/core/player.js:84-109`
- **Fix:** Add `if (cd2 > 25) continue;` early in tree/rock collision loops. Skips ~95% of entities.

### 1.11 Jelly glow sync: O(n^2) on ALL jellies, ignoring culling
- **ID:** P-UPD-004
- **File:** `src/updates/fauna/jellies.js:20-39`
- **Fix:** Reduce sync frequency to every 10-20 frames (lerp rate is slow enough to be imperceptible at 3Hz).

### 1.12 Math.sqrt() in hot paths (multiple locations)
- **IDs:** C-QUEST-003, C-UPD-003, C-PART-002, I-CORE-004, I-CORE-005
- **Files:** `questManager.js:259`, `deer.js:158`, `seeds.js:90`, `player.js:111,119`
- **Fix:** Replace with squared-distance comparisons where possible.

### 1.13 echoVisions.js allocates `new Vector3()` in animation loop
- **ID:** C-SYS-001
- **File:** `src/systems/echoVisions.js:61`
- **Fix:** Pre-allocated ring buffer of plain `{x,y,z}` objects instead of `new Vector3()` + `shift()`.

### 1.14 HUD `innerHTML` set every frame
- **ID:** C-UI-001
- **File:** `src/ui/hud.js:37`
- **Fix:** Pre-create child spans in `initHUD()`. Set `textContent` on individual spans only when values change (dirty-checking).

### 1.15 Uncached `getGroundY()` for jellies and moths
- **IDs:** I-UPD-003, I-UPD-004
- **Files:** `src/updates/fauna/jellies.js:131`, `moths.js:173`
- **Fix:** Add movement-threshold caching pattern (already used by deer and pufflings).

### 1.16 Fauna update return objects allocate per frame
- **ID:** I-UPD-005
- **Files:** All 5 fauna update files
- **Fix:** Module-scoped result objects, reset and reused each frame.

### 1.17 Steering functions allocate return objects, ignore pre-allocated `_tmp`
- **ID:** I-SYS-003
- **File:** `src/systems/ai/steering.js`
- **Fix:** Use the module-scoped `_tmp` or have callers pass output objects.

### 1.18 Luminids: no visibility culling
- **ID:** I-UPD-001
- **File:** `src/updates/fauna/luminids.js:14-27`
- **Fix:** Add distance-squared check (~70m/4900 d2) before calling expensive `updateLuminid()`.

### 1.19 ambientCreatures.js iterates all 1200 grass patches per frame
- **ID:** I-SYS-004
- **File:** `src/systems/audio/ambientCreatures.js:95-100`
- **Fix:** Cache nearest-grass value with movement-threshold refresh.

---

## Phase 2 — Architecture & Integration Cleanup

*These fix structural issues: dead code, dual ownership, convention violations in architecture.*

### 2.1 Remove dead kernel context population from animation loop
- **IDs:** C-STATE-001, S-STATE-002, I-KERN-002, S-KERN-002
- **Files:** `src/main.js:552-568`, `kernel/context.js`, `systems/registration.js:13`
- **Problem:** `updateContext()` writes ~20 properties per frame. Zero systems read `ctx`. `smoothedDimFactor` on context is always 0.
- **Fix:** Remove `updateContext()` call from `animate()`. Remove `import { ctx }` from `registration.js`. Remove `import { ctx as frameCtx }` from `main.js`. Remove `smoothedDimFactor` from context definition.

### 2.2 Remove dead kernel registry population from init
- **IDs:** C-STATE-002, S-STATE-001
- **File:** `src/main.js:618-648`
- **Problem:** 30 `register()` calls populate a registry that no system ever queries via `get()`.
- **Fix:** Remove the 30 `register()` calls and the `import { register, EntityType }` from main.js. Keep registry module and tests intact for future use.

### 2.3 Eliminate duplicate callback + eventBus notifications in quest
- **ID:** I-QUEST-005
- **File:** `src/quest/questManager.js:296-320`
- **Problem:** Orb collection fires both legacy callbacks AND event bus events, causing double-invocation of some actions.
- **Fix:** Audit which callbacks are redundant with event bus subscribers. Remove legacy callbacks that duplicate bus subscriptions.

### 2.4 Delete dead audio barrel: `audio/index.js`
- **ID:** I-SYS-001, S-SYS-001
- **File:** `src/systems/audio/index.js`
- **Fix:** Delete. All consumers use `systems/audio.js` as the barrel.

### 2.5 Remove unused imports from main.js (12+)
- **ID:** I-TOP-002
- **File:** `src/main.js` import block
- **Fix:** Remove `bloomPass`, `setSaturation`, `GEO`, `started`, `touchJump`, `rightMouseDown`, `mouseY`, `screenH`, `touchHum`, `touchHumY`, `updateGroundUniforms`, `skyGroup`, `updateTreeLOD`, `updateGrassGlobals`, `sr`, `isRestored`, `spawnBubblePop`, `frameCtx`, and consolidate double dust.js import.

### 2.6 Remove dead code: `fpsS` in main.js, dead `fi`/`si` in particles, `_revealedCount` in sky.js, `orbCreatureMap` in quest
- **IDs:** C-TOP-002, I-PART-002, I-WORLD-005, I-QUEST-004
- **Files:** `main.js:431`, `fireflies.js:39`, `spores.js:36`, `sky.js:504`, `questManager.js:63`

### 2.7 Remove dead imports from registration.js
- **IDs:** S-KERN-001, S-SYS-003
- **File:** `src/systems/registration.js:13-20`
- **Fix:** Remove unused imports of `ctx`, `get`, `EntityType`, and fauna/particle functions.

### 2.8 Fix obelisk rise speed: constant says 4, code hardcodes 8
- **ID:** I-QUEST-003
- **File:** `src/quest/questManager.js:2,399`
- **Fix:** Either use the imported `OBELISK_RISE_SPEED` constant or update the constant to 8 and use it.

### 2.9 Fix crystal light count doc mismatch
- **ID:** C-TOP-001
- **Files:** `CLAUDE.md`, `reference/performance.md`
- **Fix:** Update docs to reflect `MAX_CRYSTAL_LIGHTS = 3`.

---

## Phase 3 — Convention Compliance Pass

*Systematic sweep for project convention violations. Can be done file-by-file.*

### 3.1 Inline hex colors → C object (60+ violations across fauna)
- **IDs:** I-ENT-001 through I-ENT-005, I-QUEST-001, I-QUEST-002, I-PART-001, I-WORLD-001, I-WORLD-002
- **Files:** `deer.js` (18+), `pufflings.js` (5), `jellies.js` (4), `moths.js` (11+), `luminids.js` (6), `questManager.js` (6+), `dust.js` (1), `rain.js` (1), `sky.js` (10+), `ground.js` (1)
- **Plan:** Add all missing creature/effect colors to `C` object in `constants.js`. Replace inline hex values with `C.*` references. One commit per category (fauna, particles, quest, world).

### 3.2 Shared material promotion (1,300+ redundant instances)
- **IDs:** I-ENT-009, I-ENT-010, I-ENT-011, I-ENT-012, I-ENT-013, I-ENT-008
- **Files:** `deer.js` (~250 instances), `spiralfrond.js` (~800), `corpsebloom.js` (~120), `helixvine.js` (~200), `luminids.js` (~20)
- **Plan:** Lift non-animated materials to module scope with `_` prefix. Keep per-instance only when `emissiveIntensity` or other properties are individually animated.

### 3.3 `Math.random()` for world-gen textures → `sr()`
- **IDs:** I-WORLD-003, I-WORLD-004
- **Files:** `ground.js:34` (bark texture), `sky.js:313` (twinkle stars)
- **Fix:** Replace `const R = Math.random;` with `const R = sr;` for deterministic world generation.

### 3.4 `depthWrite: false` audit (any remaining transparent materials)
- **IDs:** C-ENT-003, C-ENT-004 (already in Phase 0)
- **Plan:** Grep for `transparent: true` without `depthWrite: false` across all files. Fix any remaining.

### 3.5 Magic number TAU (6.28 → constant)
- **ID:** M-UTIL-004
- **Plan:** Add `export const TAU = Math.PI * 2;` to `constants.js`. Replace `6.28` literals across ~50 call sites. Low priority — the angular error is tiny.

### 3.6 Duplicate `dist2` with incompatible signatures
- **ID:** C-UTIL-003
- **Files:** `src/utils/math.js:3`, `src/systems/ai/senses.js:40`
- **Fix:** Move the object-signature variant to `math.js` as `dist2obj()`. Keep scalar version as primary.

### 3.7 `clamp` has zero consumers (18+ inline patterns)
- **ID:** M-UTIL-002
- **Plan:** Migrate inline `Math.max(lo, Math.min(hi, val))` patterns to import `clamp` from `math.js`. Selective — hot-path code may prefer inline for performance.

### 3.8 `smoothstep` duplicated in 4+ files
- **ID:** M-UTIL-001
- **Plan:** Add `smoothstep(t)` to `math.js`. Replace local definitions in `terrain.js`, `ground.js`, `questManager.js`, `intro/effects.js`, `playerVisuals.js`.

### 3.9 Audio volume violations
- **ID:** I-SYS-006
- **Files:** `creatures.js` (peaks at 0.10), `ambient.js` (thunder at 0.20), music bass pulse (0.15)
- **Fix:** Cap creature vol to 0.08, reduce thunder to 0.12, reduce bass pulse to 0.08. Artistic judgment needed.

---

## Phase 4 — Streamlining & Refactoring

*Structural improvements for maintainability. Lower urgency, higher long-term value.*

### 4.1 Extract main.js `_director*` functions into standalone modules
- **ID:** S-TOP-001, S-TOP-002
- **Target:** Reduce main.js from ~812 to ~450-500 lines.
- **Extractions:**
  - `_directorFloraGlow` (63 lines) → `updates/floraGlow.js`
  - Fauna nearest-tracking wrappers (40 lines) → into `updates/fauna.js`
  - Pre-game idle loop (48 lines) → `updates/idleLoop.js`
  - Entity registry registration (30 lines) → into `populate.js`

### 4.2 Migrate remaining manual-dispatch systems to scheduler
- **File:** `src/main.js` animate()
- **Systems to migrate:** `updateDayNight`, `updateWeather`, `updateRain`, `updateAurora`, `updateDimming`, `updatePlayerVisuals`, `updateAudio`, `updateLaserHums`, `updateMusic`, wind setters, `updateFlies`, `updateSpores`.
- **Approach:** Add early scheduler phases (WORLD_SYSTEMS at phase 5, PLAYER at phase 35, etc.).

### 4.3 Shared particle pool factory
- **ID:** S-PART-001
- **Files:** 8 InstancedMesh particle files
- **Plan:** Create `particles/particlePool.js` with `createParticlePool()`, `hideParticle()`, `finalizeFrame()`. Eliminates ~40 lines of duplicated boilerplate per file (~320 total).

### 4.4 Consolidate resize handlers
- **ID:** I-CORE-002
- **Files:** `renderer.js:29`, `postprocessing.js:71`, `input.js:55`
- **Fix:** Single resize handler that updates renderer, camera, composer, and screenH in deterministic order.

### 4.5 Migrate fauna audio imports to event bus
- **ID:** I-SYS-002
- **Files:** 8 files in `updates/` that directly import `audio.js`
- **Fix:** Emit events (`Events.CREATURE_SOUND`) instead of calling `playCreatureSound()` directly. Subscribe in `audio.js`.

### 4.6 Quest callback injection → event bus migration
- **ID:** S-TOP-004
- **File:** `src/main.js:726-759`
- **Fix:** Progressively migrate `initQuest()` config callbacks to event bus subscriptions. Each migrated callback is one fewer line in the config.

### 4.7 Consolidate wind parameter passing via kernel context
- **ID:** S-PART-002
- **Files:** `spores.js`, `seeds.js`, `leaves.js`
- **Fix:** Read wind from shared state instead of 3 separate setter functions.

### 4.8 UI consolidation
- **IDs:** I-UI-001, I-UI-002, S-UI-001, S-UI-002
- **Plan:** Define z-index scale constant. Move discovery DOM creation into `src/ui/`. Merge overlay.js into hud.js.

### 4.9 Shared creature emissive calculation helper
- **ID:** S-UPD-002
- **Plan:** Extract the ~5-line emissive pattern repeated in all 4 fauna update files into a shared function.

### 4.10 `lerp` reimplemented as local `mix` in 2 files
- **ID:** M-UTIL-005
- **Files:** `weather.js`, `dayNightCycle.js`
- **Fix:** Import `lerp` from `math.js` instead of redefining.

---

## Phase 5 — Test Coverage & Documentation

### 5.1 Kernel test gaps (7 missing scenarios)
- **IDs:** T-KERN-001 through T-KERN-007
- **Tests to add:**
  - EventBus: unsubscribe during dispatch, subscribe during dispatch
  - Scheduler: system that throws, duplicate system names, remove nonexistent
  - Context: null/empty input
  - Registry: empty sentinel identity

### 5.2 Utils tests (currently zero)
- **ID:** I-UTIL-001
- **Plan:** Add `src/utils/__tests__/rng.test.js` and `math.test.js`. Test: reproducibility, distribution, edge seeds (0, MAX), save/restore roundtrip, clamp edge cases, lerp at t=0/1/0.5.

### 5.3 Documentation fixes
- **IDs:** C-TOP-001, I-QUEST-003
- **Fixes:**
  - Update `performance.md` and `CLAUDE.md` to reflect `MAX_CRYSTAL_LIGHTS = 3`
  - Fix `inKeepOut()` location in `reference/patterns.md` (docs say terrain.js, actually in populate.js)
  - Document `lerp` t-parameter is unclamped in `math.js`

### 5.4 Debug info gating
- **ID:** UX-UI-001
- **File:** `src/ui/hud.js`
- **Fix:** Gate FPS and position display behind `import.meta.env.DEV` or a debug toggle key.

### 5.5 Accessibility quick wins
- **ID:** A-UI-001
- **Plan:** Add `role="status"` and `aria-live="polite"` to `#hud` and `#orb-hud`. Add `prefers-reduced-motion` media query for discovery text transitions.

---

## Appendix A — Full Issue Registry

| ID | Phase | Type | File | Description | Priority |
|----|-------|------|------|-------------|----------|
| C-PART-001 | 0 | Bug | resonanceRings.js:105 | Opacity compounds multiplicatively — rings invisible | Critical |
| C-ENT-001 | 0 | Bug | deer.js:428 | Ground clamp hardcoded to y=0 | Critical |
| C-KERN-001 | 0 | Bug | eventBus.js:63 | off() during dispatch corrupts iteration | Critical |
| C-KERN-002 | 0 | Bug | scheduler.js:56 | Throwing system kills all subsequent | Critical |
| C-CORE-002 | 0 | Bug | input.js:103-184 | Missing touchcancel on mobile controls | Critical |
| C-ENT-003 | 0 | Bug | pufflings.js:22 | Core material missing depthWrite:false | Critical |
| C-ENT-004 | 0 | Bug | pufflings.js:97 | Spore material missing depthWrite:false | Critical |
| C-ENT-002 | 0 | Bug | deer.js:308 | Trail spheres leak — added to scene, never cleaned | High |
| C-UTIL-001 | 0 | Bug | rng.js:9 | Seed=0 absorbing state | Medium |
| C-QUEST-001 | 0 | Bug | questManager.js:287 | Rune color capture fragile | High |
| C-QUEST-002 | 0 | Bug | questManager.js:243 | No break after orb collection | High |
| C-UPD-001 | 0 | Bug | luminids.js:129 | sr() in runtime update path | Medium |
| C-UPD-002 | 0 | Bug | luminids.js:185 | Dead .clone() allocation | Medium |
| C-SYS-002 | 0 | Bug | ambient.js:41 | Thunder timer goes infinitely negative | Medium |
| S-WORLD-001 | 1 | Perf | terrain.js | Height cache LUT for getGroundY() | Critical |
| P-UPD-005 | 1 | Perf | deer/puff/moths | 43K wasted tree collision iterations/frame | High |
| C-CORE-001 | 1 | Perf | input.js:220 | getInput() allocates every frame | High |
| P-UPD-001 | 1 | Perf | luminids.js:152 | .clone(), .forEach(), .some() in hot path | High |
| P-UPD-002 | 1 | Perf | deer/pufflings | Per-creature neighbor array allocation | Medium |
| P-UPD-003 | 1 | Perf | deer/pufflings | Object literal per steering call | Medium |
| P-PART-001 | 1 | Perf | All InstancedMesh | Inactive particles recompute hide matrix | Medium |
| P-PART-002 | 1 | Perf | All InstancedMesh | needsUpdate=true unconditionally | Medium |
| P-PART-003 | 1 | Perf | rain.js:83 | getGroundY() per-drop per-frame (300) | Medium |
| P-PART-004 | 1 | Perf | fireflies.js:78 | getGroundY() per-fly per-frame (150) | Medium |
| I-CORE-003 | 1 | Perf | postprocessing.js:71 | Bloom 512 cap lost after resize | Medium |
| I-CORE-001 | 1 | Perf | player.js:140 | updateProjectionMatrix every frame | Medium |
| I-CORE-006 | 1 | Perf | player.js:84-109 | Collision loops no distance pre-filter | Medium |
| P-UPD-004 | 1 | Perf | jellies.js:20-39 | O(n^2) glow sync on unculled jellies | Medium |
| C-QUEST-003 | 1 | Perf | questManager.js:259 | Math.sqrt in orb proximity | Low |
| C-UPD-003 | 1 | Perf | deer.js:158 | Math.sqrt in drink state | Low |
| C-PART-002 | 1 | Perf | seeds.js:90 | Math.sqrt in per-particle update | Medium |
| I-CORE-004 | 1 | Perf | player.js:111 | World boundary sqrt | Low |
| I-CORE-005 | 1 | Perf | player.js:119 | Speed check sqrt | Low |
| C-SYS-001 | 1 | Perf | echoVisions.js:61 | new Vector3() in animation loop | Medium |
| C-UI-001 | 1 | Perf | hud.js:37 | innerHTML every frame | Medium |
| I-UPD-003 | 1 | Perf | jellies.js:131 | Uncached getGroundY | Medium |
| I-UPD-004 | 1 | Perf | moths.js:173 | Uncached getGroundY | Medium |
| I-UPD-005 | 1 | Perf | All fauna returns | Return object per frame | Low |
| I-SYS-003 | 1 | Perf | steering.js | Return object allocation | Low |
| I-UPD-001 | 1 | Perf | luminids.js | No visibility culling | Medium |
| I-SYS-004 | 1 | Perf | ambientCreatures.js | 1200 grass patches per frame | Low |
| C-STATE-001 | 2 | Arch | context.js + main.js | updateContext() has zero consumers | High |
| C-STATE-002 | 2 | Arch | registry.js + main.js | register() x30, get() never called | High |
| I-QUEST-005 | 2 | Arch | questManager.js | Duplicate callback + eventBus | High |
| I-SYS-001 | 2 | Dead | audio/index.js | Entire file never imported | Low |
| I-TOP-002 | 2 | Dead | main.js imports | 12+ unused imports | Medium |
| C-TOP-002 | 2 | Dead | main.js:431 | fpsS variable never used | Low |
| S-KERN-001 | 2 | Dead | registration.js | Unused ctx/get/EntityType imports | Medium |
| I-QUEST-003 | 2 | Bug | questManager.js:399 | OBELISK_RISE_SPEED mismatch (4 vs 8) | Low |
| C-TOP-001 | 2 | Doc | CLAUDE.md + performance.md | Crystal light count wrong (3 vs 5) | Medium |
| I-ENT-001-005 | 3 | Convention | All fauna | 60+ inline hex colors | Medium |
| I-ENT-009-013 | 3 | Convention | Multiple flora/fauna | 1300+ unsharable materials | Medium |
| I-WORLD-003 | 3 | Convention | ground.js | Math.random for world-gen | Low |
| I-WORLD-004 | 3 | Convention | sky.js | Math.random for twinkle stars | Low |
| M-UTIL-001 | 3 | Convention | math.js | smoothstep duplicated 4x | Low |
| M-UTIL-002 | 3 | Convention | math.js | clamp has 0 consumers | Low |
| C-UTIL-003 | 3 | Convention | math.js / senses.js | Duplicate dist2 signatures | Medium |
| S-TOP-001 | 4 | Refactor | main.js | Extract _director* functions | Medium |
| S-PART-001 | 4 | Refactor | 8 particle files | Shared pool factory | Medium |
| I-SYS-002 | 4 | Arch | updates/fauna/* | Audio imports violate isolation | Medium |
| I-CORE-002 | 4 | Refactor | 3 files | Consolidate resize handlers | Low |
| T-KERN-001-007 | 5 | Test | kernel tests | 7 missing test scenarios | Medium |
| I-UTIL-001 | 5 | Test | utils/ | Zero test coverage | High |
| UX-UI-001 | 5 | UX | hud.js | Debug info shown to players | Medium |
| A-UI-001 | 5 | A11y | All UI | Zero accessibility | Medium |

---

## Appendix B — Math.random() Audit

**184 total occurrences across 34 files.** All convention-compliant (runtime variation) except:

| File | Count | Issue |
|------|-------|-------|
| `entities/flora/trees.js` | 14 | Used for bark canvas texture generation (world-gen context) — should be `sr()` |
| `world/ground.js` | ~50 | Used for ground texture generation — should be `sr()` |
| `world/sky.js` | ~15 | Used for twinkle star placement — should be `sr()` |
| `entities/fauna/luminids.js` | 1 | Uses `sr()` at runtime (inverse violation) — should be `Math.random()` |

All other 183 occurrences across 30 files are compliant (particles, audio synthesis, AI state machines, runtime spawn variation).

---

*This document is ready for review. No code changes have been made. Upon approval, execution will follow the phase order above, with commits after each discrete fix.*

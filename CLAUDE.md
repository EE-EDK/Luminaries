# CLAUDE.md — Luminaries

## What This Is

Luminaries is a first-person 3D bioluminescent forest built with Three.js r172+ / Vite / Web Audio API. ~14,000 lines across ~86 ES module files. Procedurally generated terrain, textures, audio, and music — zero external assets loaded at runtime.

**Live:** https://ee-edk.github.io/Luminaries/

## Quick Start

```sh
npm install          # First time
npm run dev          # http://localhost:5173
npm run build        # Production build to dist/
npm test             # Run unit tests (kernel modules)
```

## Context Loading

**Read these files to fast-track understanding.** Start with architecture, then read whichever is relevant to your task:

| File | What It Covers | Read When |
|------|---------------|-----------|
| `reference/architecture.md` | System dependency graph, data flow, spawn order, director pattern, module interfaces | **Always read first** |
| `reference/dashboard.html` | Single-page dashboard of the whole `reference/` shelf: doc index, architecture, budgets, entities, audio, quest, status, drift list (open in a browser; kunzhub layout) | Orienting in a new session, or finding which reference doc to open |
| `reference/entities.md` | Complete registry: all 29 entity types, 11 particle systems, counts, cull distances, builders | Adding/modifying entities |
| `reference/patterns.md` | 10 canonical code patterns with full examples (entity builder, particle pool, culling, state machine, etc.) | Writing any new code |
| `reference/performance.md` | Hard limits: light budget, draw calls, FPS, particles, memory rules | Adding visual features |
| `reference/audio.md` | Web Audio API graph, synthesis patterns, layer reference, callback injection + event bus | Audio work |
| `reference/procedural-audio-engine-protocol.md` | Production methodology for zero-asset Web Audio API synthesis (voice pools, scheduling, anti-clicking, spatial audio) | Audio architecture |
| `reference/unified_webgl_protocol_v4.1.md` | Legacy monolithic protocol (v4.1) — still valid for Luminaries-specific patterns | Historical reference |
| `../../../tools/webgl-protocol-v5/00-hub.md` | **WebGL Protocol v5.0** — modular successor to v4.1. 46 composable modules + walking-sim recipe. Use for new Three.js work or understanding universal patterns. | New Three.js projects, architecture decisions |
| `reference/phase-1-summary.md` | Everything built in Phase 1, completion checklist, known debt | Understanding current state |
| `reference/phase-2-roadmap.md` | 21 prioritized implementation items for Phase 2 (from MANIFESTO.md) | Planning Phase 2 work |
| `reference/MANIFESTO.md` | Full Phase 2 design: Symbiotic Attunement, The Dimming, dual-narrative, all mechanics | Understanding the vision |

## Current Phase

**Phase 1 (Foundation): COMPLETE.** Core forest, 29 entity types, 11 particle systems, procedural audio + generative music, 6-state weather, 4-phase day/night, 5-orb quest with laser/rainbow/transform finale.

**Phase 2 (Symbiotic Attunement): 20/21 FEATURES DONE.** See `reference/MANIFESTO.md` for full design.

Implemented:
1. **The Dimming** — DONE: 5 angular sectors, restoration waves, edge blending (`systems/dimming.js`)
2. **Creature Attunement** — DONE: All 4 types — jelly (left-click/PULSE rhythm), puffling (sprint), deer (stride-match), moth (orbit+look). Now gated by spirit hum pitch-lock (`systems/attunement.js`)
2b. **Spirit Hum + Resonance Tuning** — DONE: Two-phase creature unlock; F key/Q-E (or slider) pitch control, 4 creature frequency bands, resonance glow, ring particles (`systems/spiritHum.js`, `particles/resonanceRings.js`)
3. **Orb Activation Gate** — DONE: Frequency check + reject hint + cooldown (`quest/questState.js`, `quest/questVisuals.js`)
4. **Stillness/Curiosity** — DONE: Jelly drift, deer flee shrink, moth orbit shift, puffling follow (`main.js`)
5. **Fairy Ring Boost** — DONE: 3.5× super-jump + 4s feather fall in restored zones (`updates/magicalEntities.js`)
6. **Audio Sync Progression** — DONE: Creature cooldowns halved at 2+ orbs (`systems/audio.js`)
7. **Player Light Evolution** — DONE: 6-level color/intensity/range + attunement color overlay
8. **Wisp Guides** — DONE: Midpoint targeting, frequency-aware guide fraction (`main.js`)
9. **Dual Narrative** — DONE: Tab toggle, child/adult discovery text (`systems/discoveries.js`)
10. **Sky Constellations** — DONE: 5 patterns revealed per orb (`world/sky.js`)
11. **Shooting Star Wishes** — DONE: 5 wish levels gated by orbs, dual perspective (`world/sky.js`)
12. **Finale/Transform/Free Roam** — DONE: Overlay text + FREE_ROAM endgame state
13. **Weather Attunement Modifiers** — DONE: Multipliers based on creature type/weather state (`constants.js`, `systems/attunement.js`)
14. **Day/Night Gating** — DONE: Attunement rate scaled by bioGlow; orb proximity scaled by bioGlow (`systems/attunement.js`, `quest/questState.js`)
15. **Bubble Pop Rewards** — DONE: Restored zone pulse; dimmed zone repulsion (`updates/magicalEntities.js`)
16. **Dandelion Wayfinding** — DONE: Gentle bias toward nearest unfound orb (`particles/seeds.js`)
17. **Obelisk Rune Reveal** — DONE: Colored runes per orb creature type (`quest/questVisuals.js`)
18. **Ground Glyphs** — DONE: Hidden discovery markers revealed by stillness within 3m + 2s idle (`populate.js`, `systems/discoveries.js`)
19. **Crystal Resonance Chains** — DONE: CRYSTAL_CHAIN event drives sequential wave pulse on clustered crystals (`updates/crystalVisuals.js`, `systems/audio/crystals.js`)
20. **Echo-Visions** — DONE: Storm-sprint creature path traces as glowing LineSegments (`systems/echoVisions.js`)

Remaining (1 feature): Deferred optimizations / FPS hardening. See `reference/phase-2-roadmap.md`.

## Critical Rules

These are non-negotiable. Every session must follow them.

### Performance Budget
- **20 FPS minimum** — HARD REQUIREMENT. Flag alternatives before any risky change.
- **8 real-time lights max** — 1 hemi + 2 directional + 1 player + 1 orb + 3 crystal proximity. To add a light, remove one.
- **< 200 draw calls** — Use InstancedMesh for anything with > 50 copies.
- **< 500 particles** per system.
- **No allocations in the animation loop.** Pre-allocate at module scope.
- **Squared distances only** in culling checks. Never `Math.sqrt()` in hot path.

### Coding Conventions
- `const`/`let` only, no `var`. No classes — functional style.
- Named imports from Three.js: `import { Scene, Mesh, Vector3 } from 'three'`. Named imports for project modules.
- Seeded RNG (`sr()` from `utils/rng.js`) for world generation. `Math.random()` only for runtime variation.
- Colors from `C` object in `constants.js`. Never inline hex values.
- `depthWrite: false` for all transparent/glow/haze materials.
- Banner comments: `// ===...===` for major sections.
- **Text rendering:** DOM-based overlays for intro/discovery/HUD text. `troika-three-text` for in-world 3D text.
- **Material sharing:** Lift non-modulated materials to module scope with `_` prefix (e.g., `_rockMat`). Keep per-instance materials only when `emissiveIntensity` or other properties are individually animated at runtime.

### Audio Rules
- Entity files **NEVER** import audio.js. Use callback injection through main.js OR subscribe via kernel eventBus (preferred for new code).
- Guard every audio function: `if (!initialized || muted) return;`
- Volumes: 0.02-0.08 per voice. Always call `.stop(time)` to prevent node accumulation.
- Connect through `connectWithReverb(gain, masterGain, wetAmount)`.
- **Sanctioned volume exceptions** (do not flag as bugs): thunder burst (`src/systems/audio/ambient.js` — 0.20/0.15, short transient with immediate exponential decay) and music bus voices (`src/systems/music.js` — 0.15, attenuated by musicMasterGain×0.6 × masterGain×0.42 ≈ 0.038 effective). Full rationale: `reference/audio.md` → "Sanctioned exceptions" table.

### Entity Placement
- Use `sr()` for placement, never `Math.random()`.
- Check `inKeepOut()` before placing.
- Register flat zones BEFORE sampling `getGroundY()`.
- Keep material references on returned objects for runtime modulation.

## Common Tasks

### Adding a New Entity
1. Add count constant to `constants.js` (e.g., `export const NEWENT_N = 10;`)
2. Add colors to `C` object in `constants.js`
3. Create `src/entities/<category>/newEntity.js` — export `makeNewEntity()` following the builder pattern in `reference/patterns.md`
   - Build decorative parts through `createBaker()` / `roleMaterial()` from `entities/_bake.js` (one mesh per material role, motion on the GPU via `entities/_motion.js`). A `roleMaterial` on an unbaked geometry renders black. For > 50 copies use `createInstancedFloraType()` from `entities/_instancedFlora.js`. `src/entities/__tests__/entityBudget.test.js` pins the mesh count per builder — add the new builder to its `CEILINGS` table.
4. Import and call in `main.js` `populate()`
5. Register update as a scheduler system via `addSystem()` in `systems/registration.js`, or add to an existing `_director*` function in `main.js`
6. Check light budget if entity emits light

### Adding a New Particle System
1. Create `src/particles/newParticle.js` with `init*()`, `spawn*()`, `update*()` — pattern in `reference/patterns.md`
2. Import in `main.js`, call `init*()` in init block
3. Call `update*()` in a scheduler system or `_director*` function, `spawn*()` on trigger conditions

### Adding a New Sound
1. Add function in `audio.js` with `if (!initialized || muted) return` guard
2. Build oscillator/noise chain → gain envelope → `connectWithReverb()`
3. Always call `.stop(time)`. Keep volume 0.02-0.08.
4. Export from audio.js. Either import in main.js and pass as callback, or subscribe to an eventBus event in `audio.js` `initAudio()`

### Implementing Remaining Phase 2 Features
1. Read `reference/phase-2-roadmap.md` for remaining items (20 of 21 done)
2. Read `reference/MANIFESTO.md` for detailed design per feature
3. Tier 1 is COMPLETE — core gameplay loop works end-to-end
4. All Tier 2 items (9-14) are DONE
5. All Tier 3 items are DONE (including ground glyphs (18) and echo-visions (21))

## Key File Locations

| What | Where |
|------|-------|
| All constants + colors | `src/constants.js` |
| Animation loop + scheduler | `src/main.js` → `director()` calls `runScheduler()` |
| Player physics | `src/core/player.js` |
| Terrain height | `src/world/terrain.js` → `getGroundY()` |
| Audio system | `src/systems/audio.js` (32KB) |
| Quest state machine | `src/quest/questState.js` → `initQuestState()`, `updateQuestState()`, `getQuestState()` |
| Quest visuals + effects | `src/quest/questVisuals.js` → Three.js orb/obelisk/laser rendering |
| Quest config | `src/quest/config.js` → `QuestPhases`, `QUEST_CONFIG`, `ORB_CREATURE_SEQUENCE` |
| Weather states | `src/systems/weather.js` |
| Day/night + bioGlow | `src/systems/dayNightCycle.js` |
| Sector dimming | `src/systems/dimming.js` → `getLocalGlow()`, `initDimming()` |
| Creature attunement | `src/systems/attunement.js` → `updateAttunement()`, `getPlayerFrequency()`, `consumeFrequency()` |
| Spirit hum system | `src/systems/spiritHum.js` → `startHum()`, `updateHum()`, `isLocked()`, `getLockType()` |
| Resonance ring particles | `src/particles/resonanceRings.js` → `initResonanceRings()`, `spawnResonanceRing()` |
| Discovery text + narrative | `src/systems/discoveries.js` → `showNarrativeText()`, `dualLine()`, dual child/adult labels; `src/state/narrativeState.js` → `togglePerspective()`, `getPerspective()`, `revealTruth()`, `isTruthRevealed()` |
| Wizard-puffling encounter | `src/systems/wizardPufflingEvent.js` → `initWizardPufflingEvent()`, `updateWizardPufflingEvent()`, `resetWizardEncounter()`, `debugSpawnWizardEncounter()`; FSM: idle→approach→confront→waitHum→proclaim→prebeam→smite→handBack→done; trigger: ~18s cumulative walk; payoff: `revealTruth()` + `unlockTruthControlHint()` |
| Puffling cryptic chat | `src/systems/pufflingChat.js` → `initPufflingChat()`, `triggerPufflingChat()`, `updatePufflingChat()`; context pools: dimmed/restored/nearOrb/attuning/carrying/general; dual perspective; DOM bubble above puffling head |
| Intro sequence | `src/systems/intro.js` (title, narration, pixie, mushrooms, puffling) |
| Perf monitor (dev) | `src/systems/perfMonitor.js` → `timeStart()`, `timeEnd()`, `reportTimings()` |
| AI senses/steering | `src/systems/ai/senses.js`, `steering.js` |
| Game guide | `reference/GAME_GUIDE.md` (player-facing, update as features change) |
| Kernel event bus | `src/kernel/eventBus.js` → `Events`, `on()`, `emit()` |
| Kernel scheduler | `src/kernel/scheduler.js` → `addSystem()`, `Phase`, `run()` |
| Kernel frame context | `src/kernel/context.js` → `update()`, `ctx` |
| System registration | `src/systems/registration.js` → `registerAllSystems()`, `nearest` |

## Recent Optimizations

Performance pass based on WebGL FPS Guide v2 analysis:

- **Bloom resolution** capped at 512x512 (was unbounded at half-viewport)
- **Shadow autoUpdate** disabled; throttled to ~1Hz manual updates
- **Tree frustum culling** — camera-aware per-instance culling in `updateTreeLOD()` with generous sphere radius
- **Shared materials** — 10 module-scoped materials in mushrooms, 9 in crystals (300+ fewer material instances)
- **Named imports** — All source files converted from `import * as THREE` to named imports for tree-shaking
- **Terser build** — 2-pass compression, `drop_console`, `toplevel` mangle, `es2020` target
- **perfMonitor** — Dev-only EMA timing per director subsystem + `renderer.info` monitoring (tree-shaken in production)
- **Intro overhaul** — Dramatic title with CSS mushrooms and animated puffling, multi-layer noise pixie with dust particles, slower narration pacing (7s per card)
- **Gameplay fixes** — Puffling Z-axis speed parity, reduced rock collision radii, tighter terrain tracking threshold
- **Organic ponds** — Noise-deformed geometry with lobes, elongation, mud bank rims (no longer circular)
- **Fairy ring fixes** — Mushrooms raised +0.06m, glow disc raised to y=0.12, wider flat zones (radius 5m)
- **Intro typing** — Terminal text at 10 chars/sec with punctuation pauses (was 25 chars/sec uniform)
- **Entity bake / instance pass (2026-09-16)** — parts merged per material role (`_bake.js`), ferns/flowers/mushrooms/reeds instanced (`_instancedFlora.js`), grass chunked, tree impostors in one `Points` cloud, shared vertex-shader motion (`_motion.js`). Single-frame draw calls at the four probe points 2,351 / 1,679 / 2,787 / 3,551 → 611 / 642 / 763 / 769; scene objects 15,972 → 4,709. Full numbers: `reference/entity-audit-2026-09-16.md`.
- **Dev skip panel collapsed (2026-09-17)** — the always-open overlay is now a 44 px hamburger in the top-right; open/closed persists in `localStorage`, the backtick key toggles it (captured, so it never starts the game), the status poll stops while closed, and the orb HUD keeps its corner.

## Known Technical Debt

1. **`main.js` size** — 906 lines (measured 2026-08-27 via `wc -l src/main.js`). Director refactored into named `_director*` subsystem functions registered with kernel scheduler. Further extraction into independent system files is possible.
2. **No save/load** — Game resets on refresh.
3. **No accessibility** — No screen reader, colorblind, or reduced-motion support.
4. **Intro DOM overlays** — Uses CSS/DOM rather than troika-three-text (acceptable for pre-gameplay screen).
5. **Draw calls still 3–4× the < 200 budget** (measured 611–769 on 2026-09-16, single-frame probe). Remaining cost is animated fauna drawn as 7–17 rigid-pivot meshes each (deer 123, jellies 72, pufflings 40, moths 30 at the origin) plus the near-camera cluster at the world centre. Next step is skinned or instanced fauna, or a per-type cap on animated creatures drawn.

## TODO

- [x] Weather modifiers (Remaining Phase 2 feature)
- [x] day/night gating (Remaining Phase 2 feature)
- [x] bubble pop rewards (Remaining Phase 2 feature)
- [x] dandelion wayfinding (Remaining Phase 2 feature)
- [x] obelisk runes (Remaining Phase 2 feature)
- [ ] **Jellies (formation + encounter)** — Further visual/behavior pass: ritual + crimson ring still needs tuning; verify encounter feels cohesive in play (see `src/updates/fauna/jellies.js`).
- [ ] **Jelly / attunement encounter** — "Receptive" flow still not reliably working end-to-end: trace attunement + `CREATURE_ATTUNED` + spirit hum gating; confirm narrative/camera/UX (see `systems/attunement.js`, `spiritHum.js`, `quest/questState.js`, `quest/questVisuals.js`).
- [ ] **Puffling houses (readability)** — Still reading as basic black silhouettes in night; improve materials (env, tone map parity, emissive) vs `mushroom-house-puffling-home.html` reference; verify not culled (see `entities/world/pufflingHomeDetailed.js`, `pufflingHomes.js`).
- [ ] **2nd phase / quest progression unlock** — Cannot advance past first-phase gate: audit orb count, quest state, `FREE_ROAM` / `getQuestState`, frequency gate, and any blockers in `quest/questState.js` + `quest/questVisuals.js` (repro with save-less refresh).
- [ ] **In-game debug UI** — Debug terminal (`Esc`×2) not obvious / not discoverable: add brief HUD hint in dev, optional persistent affordance, ensure `initDebugConsole()` + `LumiDebug` surface in `docs` build; verify not stripped by `import.meta.env` on GH Pages (`src/debug/debugConsole.js`, `index.html` / HUD copy).
- [x] crystal resonance chains (Phase 2 feature — wired via CRYSTAL_CHAIN event + `updates/crystalVisuals.js`)
- [x] ground glyphs (Phase 2 feature — wired in `populate.js` + `systems/discoveries.js`)
- [x] echo-visions (Phase 2 feature — wired in `systems/echoVisions.js` + `main.js`)
- [ ] Refactor `main.js` to extract subsystems (Debt)
- [ ] Implement save/load system (Debt)
- [ ] Add accessibility support (Debt)
- [ ] Replace Intro DOM overlays with troika-three-text (Debt)

## END SESSION (Luminaries)

When a session touches this repo, align with the **root workspace** `END SESSION` protocol (`ENGINEERING-PROJECTS/CLAUDE.md`: verify + journal, project commit, `run_all_tools` / report if workspace-level). For **project-only** Luminaries work, minimum: `npm test`, `npm run build`, one descriptive commit, push `origin main`.

**Roll-up (next sessions — playtest / polish queue):** Track the five open **[ ]** items in **TODO** above (jellies, encounter, houses, 2nd phase, debug discoverability) until each is verified in dev **and** on `https://ee-edk.github.io/Luminaries/` if applicable. Append date + outcome to this subsection when an item closes (additive; do not delete history).

**2026-06-07 — Multi-agent audit + 12-phase remediation (branch `claude/adoring-matsumoto-c00b22`).** A 9-facet deep audit (67 findings, adversarially verified) drove a sequenced plan (`reference/audit-remediation-plan-2026-06-07.md`) executed subagent-driven over 12 phases (~68 commits). Tests **164 → 218** (added quest-progression, orb-gate, wizard-FSM, spirit-hum, perfMonitor, spatial-hash, light-budget + a fauna-update smoke guard). Most-advanced/closed: **2nd-phase gate** (orb 1 → `any`, fixed wrong "right-click to hum" hint, spirit-hum lock dead-band); **wizard** (root cause: `lookAngles()` aimed the cinematic camera **180° away** — fixed; + real `truthRevealed` payoff, 18 s trigger, camera hand-back, reset, rise-into-beam); **jellies** (ritual orbits the obelisk + disperses at finale); **houses** (HSL bricks + emissive floor + glow-accent mushrooms; finale cottage → red/white toadstools + gardens); **debug UI** (`LumiDebug.perf()`). Also: crystal-resonance-chain visuals **wired** (were dead), dead code removed (`glyphs.js`, `registry.js`, `updateDeer/Puff`, `orbStore.orbsFound`, light-pooler, `ATTUNEMENT_FLASH`), per-frame fauna/camera allocations killed + spatial-hashed, bundle split (three vendor chunk), finale exposure capped 2.8→1.6, ferns/reeds glow on restoration, floating rocks/pebbles re-grounded, docs synced (questManager→questState, controls single-sourced, 20/21 features). **Owner visual-verify pending** on reload: wizard visible + rises in beam, jelly ring over obelisk, no floaters, finale warmth, cottages+gardens.

**2026-07-01 — Review pass: attunement inversions + dead event wiring + hot-path efficiency.** Three-agent audit (REVIEW_PLAN re-verification, fresh perf scan, dead-wiring trace) confirmed the June remediation held (14/19 registry items fixed) and found the root cause of the 2nd-phase gate TODO: **two 180°-inverted vector checks in `systems/attunement.js`** — the moth gaze vector was the exact negative of the YXZ camera forward (check only passed with the moth *behind* the player), and the deer stride-match compared `playerYaw` against `wanderAng` when player-forward is `yaw+π` in the deer convention (walking alongside never counted). Both fixed (moth vector negated; deer uses true velocity heading via new `playerMoveAng`). Orbs 3 (deer) and 4 (moth) were effectively uncollectable except by accident — same bug class as the June wizard `lookAngles()` fix. Also fixed: `QUEST_PHASE` emitted with zero subscribers — finale/transform/free-roam overlay text never displayed (Feature 12 regression; now subscribed in `initDiscoveries()`); `CRYSTAL_VISITED` had no listener so the `crystalChain` discovery was unreachable (wired); orb reject-flash color was orb-array-indexed instead of progression-indexed (now uses `ORB_REJECTED` payload `d.required`); spirit-hum lock now proximity-refreshes for all 4 creature types (was jelly-only — puff/deer/moth locks silently expired in 3 s); attunement clamped at 1.0; stale `OBELISK_RISE_SPEED = 8` removed from constants.js (`QUEST_CONFIG.OBELISK_RISE_SPEED = 0.8` is single source of truth). Efficiency: echo-bloom squared-band pre-gate (~600 sqrt/frame eliminated while wave active); bloom 512-cap after resize was a silent no-op (`UnrealBloomPass.setSize()` sizes targets from its args and never reads `.resolution` — now re-calls `setSize(capped×2)`); seeds wayfinding hoisted (`getQuestState()` allocated per seed per frame); hide-once + matrix dirty-flag for fireflies/dust/seeds instanced pools; nearest-grass scan (1,440 patches/frame) cached with 1 m movement threshold in `ambientCreatures.js`; `getOrbsFound()` replaces `getQuestState()` in dayNightCycle + `animate()`; `syncContext()` and `updateAttunement()` creatureData now zero-alloc; moths result object pre-allocated (last fauna straggler); pufflingHomes impostor band derives 45/40/95 m from the squared constants with squared pre-gate; `Esc×2: Terminal` added to desktop controls line (debug-discoverability TODO — note prod `esbuild drop:['console']` still silences `LumiDebug` console output; in-game terminal unaffected). Files touched (17): attunement, attunementVisuals, discoveries, main, questVisuals, quest/config, constants, magicalEntities, seeds, fireflies, dust, dayNightCycle, ambientCreatures, postprocessing, input, pufflingHomes, moths. Tests **231/231 pass**, production build clean (verified on a mirrored sandbox copy). **Owner playtest pending:** deer stride-match + moth gaze → orbs 3-4 → FINALE/TRANSFORM/FREE_ROAM overlay text, crystal-chain discovery line, reject-flash colors. Not committed — run tests locally, then commit/push from Windows (sandbox had no git access to the submodule).

**2026-09-16 — Entity deep dive: bake, instance, placement fix, GPU motion.** Audit of all 33 `src/entities/` files measured 2,351 / 1,679 / 2,787 / 3,551 draw calls at (0,0) / (30,0) / (-30,25) / (45,45) (single-frame probe; an earlier two-frame probe had reported double) against the < 200 budget, and found placement starvation: every grass patch pushed a 2–4.5 m keep-out and every later flora loop made one attempt, so flowers spawned 1 of 230, reeds 2 of 90, thornblooms 2 of 55. Owner approved phases 1–4 + placement. Built: `entities/_bake.js` (parts merged per material role with colour / alpha / emissive / sway / motion / pivot baked as vertex attributes), `entities/_motion.js` (one vertex-shader chunk: height-weighted wind, player brush-aside, storm droop, modes BOB / ORBIT / PENDULUM / WAVE / BREATHE / SPIN / FLUTTER / FLICKER / REACH), `entities/_instancedFlora.js` (ferns 6, flowers 6, mushrooms 8, reeds 6 templates × roles as InstancedMesh with per-instance glow; records keep `capMat` / `petalMat` shape through a material proxy), grass merged into 24 m chunks, tree impostors as one `Points` cloud, puffling-home brick geometry shared. All 30 builders rewritten with their record shapes preserved (moth 91 → 8 meshes, deer 90 → 17, fern 57 → instanced, obelisk 117 → 18). Fixes: grass keep-outs split into `grassZones`, `findSpot()` retries for every spawner; dandelion dispersal hid the stem (now `disperseDandelion()`); thornblooms / helixvines never culled; rainbow sparkles frame-rate dependent and `Math.random()` at build; obelisk reveal materials created at opacity 0; reactions reset spawn scale to 1 (`_baseScale`); instanced templates identical from LCG seed correlation. Result: draw calls 611 / 642 / 763 / 769, scene objects 15,972 → 4,709, runtime flora ferns 26 → 133, mushrooms 51 → 216, flowers 1 → 122, grass 215 → 433; triangles 0.68 M → 1.36 M (full spawn + richer models). Budget of 200 **not** reached — fauna per-pivot meshes remain (Debt 5). New `src/entities/__tests__/entityBudget.test.js` (26 tests; killed two seeded defects before trust). Tests **257/257**, build clean (mirrored sandbox; SwiftShader screenshots inspected for ferns, snapthorns, mushrooms, jellies, deer). Docs: `reference/entity-audit-2026-09-16.md`, `reference/entities.md`. `docs/` build output not regenerated. **Not committed** — the checkout's `.git` points outside the shared folder; owner runs tests, looks at the scene on the GPU with `LumiDebug.perf()` at the four points, stages the §6 file list explicitly, commits without tool names or trailers, pushes as a separate command. Session lost power once mid-audit; the audit file was persisted before the rework began.

**2026-09-17 — Pages deploy unblocked, hermetic tests, dev panel behind a hamburger.** The Pages workflow had been failing since 2026-09-15, before the entity work: `npm ci` on Ubuntu rejected `package-lock.json` because the wasm rolldown binding's peers (`@emnapi/core`, `@emnapi/runtime` 1.11.3) were absent — regenerating the lock on Windows does not add peers of a platform-optional package, so the lock was regenerated on Linux and `npm ci --dry-run` now passes on both hosts. Tests are hermetic: `vitest.config.js` pins `NODE_ENV=test` because Vite reads NODE_ENV before mode, and a shell inheriting `NODE_ENV=production` compiled the suite as production, turned every `import.meta.env.DEV` export in `perfMonitor.js` into a no-op, and failed 5 tests with assertions that named nothing; the first test in `perfMonitor.test.js` now asserts the precondition out loud and was driven against the un-pinned config to prove it fires. `debug/devSkipPanel.js` rebuilt as a hamburger pop-out (details in Recent Optimizations). `.gitignore` now covers `*.zip` so delivery snapshots cannot be staged. Tests **258/258** with and without `NODE_ENV=production` set; build clean; panel verified headless for default-collapsed, click, backtick, reload persistence, no page errors, and no overlap with the orb HUD. Pushed to `origin/main`; Pages deploy green. **CORRECTION (2026-09-17, same day):** the first report of this said the workstation had `NODE_ENV=production` set globally. It does not. Measured after the fact: `HKCU\Environment` and the HKLM Session Manager environment both have no `NODE_ENV`, no PowerShell profile sets it, and a process created outside the Claude desktop app's tree (via `Win32_Process.Create`, which rebuilds the environment from the registry) sees it undefined. The value lives in the Claude desktop app's own process and is inherited by every shell it spawns, which is where the tests were being run. Nothing on the machine needs changing; the `vitest.config.js` pin is the fix and it covers the app's shells too.

**2026-09-17 — Mobile could not answer the wizard.** The wizard encounter's `waitHum` state gated on `humFreqArmed`, which only the F key sets. Mobile hums by holding the pitch slider (`touchHum`), never sets that flag, so a touch player reached the confrontation and stood there forever — the encounter and the TAB/truth unlock behind it were unreachable on a phone, and the prompt read "press F" on a device with no keyboard. Both control schemes now go through one classifier, `isHumInputActive()` in `core/input.js` (`touchHum || (!mobile && humFreqArmed)`), which `updates/spiritHumVisuals.js` already computed inline and now imports instead; the wizard prompt names the HUM slider on touch and the F key on desktop. New `src/systems/__tests__/wizardHumGate.test.js` drives the FSM from `debugSpawnWizardEncounter()` and reads the narrative callback: mobile hold answers, the prompt names the right control on each platform, silence leaves the wizard waiting, and a hum already running when asked must be held past 2.25 s. Seeded defect (gate restricted to desktop) failed exactly the two "mobile can answer" cases and left the negatives passing. Tests **264/264**, build clean. Still desktop-only wording, not changed: the two idle hints in `systems/discoveries.js` (~line 225) that say "Press F ... Q or E" are shown on mobile too.

## Auto-Commit & Push

After completing each task, automatically commit all relevant changes with a descriptive message and push to `origin main`. Report what was committed. This is standing authorization — no confirmation needed.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `python3 -c "from graphify.watch import _rebuild_code; from pathlib import Path; _rebuild_code(Path('.'))"` to keep the graph current

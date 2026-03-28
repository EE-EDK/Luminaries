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
| `reference/entities.md` | Complete registry: all 29 entity types, 11 particle systems, counts, cull distances, builders | Adding/modifying entities |
| `reference/patterns.md` | 10 canonical code patterns with full examples (entity builder, particle pool, culling, state machine, etc.) | Writing any new code |
| `reference/performance.md` | Hard limits: light budget, draw calls, FPS, particles, memory rules | Adding visual features |
| `reference/audio.md` | Web Audio API graph, synthesis patterns, layer reference, callback injection + event bus | Audio work |
| `reference/procedural-audio-engine-protocol.md` | Production methodology for zero-asset Web Audio API synthesis (voice pools, scheduling, anti-clicking, spatial audio) | Audio architecture |
| `reference/phase-1-summary.md` | Everything built in Phase 1, completion checklist, known debt | Understanding current state |
| `reference/phase-2-roadmap.md` | 21 prioritized implementation items for Phase 2 (from MANIFESTO.md) | Planning Phase 2 work |
| `reference/MANIFESTO.md` | Full Phase 2 design: Symbiotic Attunement, The Dimming, dual-narrative, all mechanics | Understanding the vision |

## Current Phase

**Phase 1 (Foundation): COMPLETE.** Core forest, 29 entity types, 11 particle systems, procedural audio + generative music, 6-state weather, 4-phase day/night, 5-orb quest with laser/rainbow/transform finale.

**Phase 2 (Symbiotic Attunement): 14/21 FEATURES DONE.** See `reference/MANIFESTO.md` for full design.

Implemented:
1. **The Dimming** — DONE: 5 angular sectors, restoration waves, edge blending (`systems/dimming.js`)
2. **Creature Attunement** — DONE: All 4 types — jelly (SPACE rhythm), puffling (sprint), deer (stride-match), moth (orbit+look). Now gated by spirit hum pitch-lock (`systems/attunement.js`)
2b. **Spirit Hum + Resonance Tuning** — DONE: Two-phase creature unlock; right-click/slider pitch control, 4 creature frequency bands, resonance glow, ring particles (`systems/spiritHum.js`, `particles/resonanceRings.js`)
3. **Orb Activation Gate** — DONE: Frequency check + reject hint + cooldown (`quest/questManager.js`)
4. **Stillness/Curiosity** — DONE: Jelly drift, deer flee shrink, moth orbit shift, puffling follow (`main.js`)
5. **Fairy Ring Boost** — DONE: 3.5× super-jump + 4s feather fall in restored zones (`core/player.js`)
6. **Audio Sync Progression** — DONE: Creature cooldowns halved at 2+ orbs (`systems/audio.js`)
7. **Player Light Evolution** — DONE: 6-level color/intensity/range + attunement color overlay
8. **Wisp Guides** — DONE: Midpoint targeting, frequency-aware guide fraction (`main.js`)
9. **Dual Narrative** — DONE: Tab toggle, child/adult discovery text (`systems/discoveries.js`)
10. **Sky Constellations** — DONE: 5 patterns revealed per orb (`world/sky.js`)
11. **Shooting Star Wishes** — DONE: 5 wish levels gated by orbs, dual perspective (`world/sky.js`)
12. **Finale/Transform/Free Roam** — DONE: Overlay text + FREE_ROAM endgame state

Remaining (8 features): Weather modifiers, day/night gating, bubble pop rewards, crystal resonance chains, dandelion wayfinding, obelisk runes, ground glyphs, echo-visions. See `reference/phase-2-roadmap.md`.

## Critical Rules

These are non-negotiable. Every session must follow them.

### Performance Budget
- **20 FPS minimum** — HARD REQUIREMENT. Flag alternatives before any risky change.
- **8 real-time lights max** — 1 hemi + 2 directional + 1 player + 1 orb + 5 crystal proximity. To add a light, remove one.
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
1. Read `reference/phase-2-roadmap.md` for remaining items (8 of 21)
2. Read `reference/MANIFESTO.md` for detailed design per feature
3. Tier 1 is COMPLETE — core gameplay loop works end-to-end
4. Remaining Tier 2 items (9-14) are independent of each other
5. Remaining Tier 3 items: ground glyphs (18) and echo-visions (21)

## Key File Locations

| What | Where |
|------|-------|
| All constants + colors | `src/constants.js` |
| Animation loop + scheduler | `src/main.js` → `director()` calls `runScheduler()` |
| Player physics | `src/core/player.js` |
| Terrain height | `src/world/terrain.js` → `getGroundY()` |
| Audio system | `src/systems/audio.js` (32KB) |
| Quest state machine | `src/quest/questManager.js` |
| Weather states | `src/systems/weather.js` |
| Day/night + bioGlow | `src/systems/dayNightCycle.js` |
| Sector dimming | `src/systems/dimming.js` → `getLocalGlow()`, `initDimming()` |
| Creature attunement | `src/systems/attunement.js` → `updateAttunement()`, `getPlayerFrequency()`, `consumeFrequency()` |
| Spirit hum system | `src/systems/spiritHum.js` → `startHum()`, `updateHum()`, `isLocked()`, `getLockType()` |
| Resonance ring particles | `src/particles/resonanceRings.js` → `initResonanceRings()`, `spawnResonanceRing()` |
| Discovery text + narrative | `src/systems/discoveries.js` → `togglePerspective()`, `getPerspective()`, dual child/adult labels |
| Intro sequence | `src/systems/intro.js` (title, narration, pixie, mushrooms, puffling) |
| Perf monitor (dev) | `src/systems/perfMonitor.js` → `timeStart()`, `timeEnd()`, `reportTimings()` |
| AI senses/steering | `src/systems/ai/senses.js`, `steering.js` |
| Game guide | `reference/GAME_GUIDE.md` (player-facing, update as features change) |
| Kernel event bus | `src/kernel/eventBus.js` → `Events`, `on()`, `emit()` |
| Kernel registry | `src/kernel/registry.js` → `register()`, `get()`, `EntityType` |
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

## Known Technical Debt

1. **`main.js` size** — ~1,100 lines. Director refactored into named `_director*` subsystem functions registered with kernel scheduler. Further extraction into independent system files is possible.
2. **No save/load** — Game resets on refresh.
3. **No accessibility** — No screen reader, colorblind, or reduced-motion support.
4. **Intro DOM overlays** — Uses CSS/DOM rather than troika-three-text (acceptable for pre-gameplay screen).

## TODO

- [ ] Weather modifiers (Remaining Phase 2 feature)
- [ ] day/night gating (Remaining Phase 2 feature)
- [ ] bubble pop rewards (Remaining Phase 2 feature)
- [ ] crystal resonance chains (Remaining Phase 2 feature)
- [ ] dandelion wayfinding (Remaining Phase 2 feature)
- [ ] obelisk runes (Remaining Phase 2 feature)
- [ ] ground glyphs (Remaining Phase 2 feature)
- [ ] echo-visions (Remaining Phase 2 feature)
- [ ] Refactor `main.js` to extract subsystems (Debt)
- [ ] Implement save/load system (Debt)
- [ ] Add accessibility support (Debt)
- [ ] Replace Intro DOM overlays with troika-three-text (Debt)

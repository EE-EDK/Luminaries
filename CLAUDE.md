# CLAUDE.md — Luminaries

## What This Is

Luminaries is a first-person 3D bioluminescent forest built with Three.js r172+ / Vite / Web Audio API. ~13,000 lines across 64 ES module files. Procedurally generated terrain, textures, audio, and music — zero external assets loaded at runtime.

**Live:** https://ee-edk.github.io/Luminaries/

## Quick Start

```sh
npm install          # First time
npm run dev          # http://localhost:5173
npm run build        # Production build to dist/
```

## Context Loading

**Read these files to fast-track understanding.** Start with architecture, then read whichever is relevant to your task:

| File | What It Covers | Read When |
|------|---------------|-----------|
| `reference/architecture.md` | System dependency graph, data flow, spawn order, director pattern, module interfaces | **Always read first** |
| `reference/entities.md` | Complete registry: all 29 entity types, 9 particle systems, counts, cull distances, builders | Adding/modifying entities |
| `reference/patterns.md` | 10 canonical code patterns with full examples (entity builder, particle pool, culling, state machine, etc.) | Writing any new code |
| `reference/performance.md` | Hard limits: light budget, draw calls, FPS, particles, memory rules | Adding visual features |
| `reference/audio.md` | Web Audio API graph, synthesis patterns, layer reference, callback injection | Audio work |
| `reference/procedural-audio-engine-protocol.md` | Production methodology for zero-asset Web Audio API synthesis (voice pools, scheduling, anti-clicking, spatial audio) | Audio architecture |
| `reference/phase-1-summary.md` | Everything built in Phase 1, completion checklist, known debt | Understanding current state |
| `reference/phase-2-roadmap.md` | 21 prioritized implementation items for Phase 2 (from MANIFESTO.md) | Planning Phase 2 work |
| `reference/MANIFESTO.md` | Full Phase 2 design: Symbiotic Attunement, The Dimming, dual-narrative, all mechanics | Understanding the vision |

## Current Phase

**Phase 1 (Foundation): COMPLETE.** Core forest, 29 entity types, 9 particle systems, procedural audio + generative music, 6-state weather, 4-phase day/night, 5-orb quest with laser/rainbow/transform finale.

**Phase 2 (Symbiotic Attunement): IN PROGRESS.** See `reference/MANIFESTO.md` for full design. Key additions:

1. **The Dimming** — Sector-based bioGlow suppression (DONE: 5 angular sectors, restoration waves, edge blending)
2. **Creature Attunement** — Match creature rhythms to carry their frequency
3. **Orb Activation Gate** — Frequency required to activate orbs
4. **Dual Narrative** — Child ("Magic Garden") / Adult ("Chronobiological Archive") text layers
5. **Player Light Evolution** — Color/intensity/range scales with sync level (0/5 → 5/5)
6. **Audio Sync Progression** — New layers unlock as orbs are found
7. **21 total features** — Prioritized in `reference/phase-2-roadmap.md`

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
- Entity files **NEVER** import audio.js. Use callback injection through main.js.
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
5. Add update logic in `director()` with visibility culling
6. Check light budget if entity emits light

### Adding a New Particle System
1. Create `src/particles/newParticle.js` with `init*()`, `spawn*()`, `update*()` — pattern in `reference/patterns.md`
2. Import in `main.js`, call `init*()` in init block
3. Call `update*()` in director, `spawn*()` on trigger conditions

### Adding a New Sound
1. Add function in `audio.js` with `if (!initialized || muted) return` guard
2. Build oscillator/noise chain → gain envelope → `connectWithReverb()`
3. Always call `.stop(time)`. Keep volume 0.02-0.08.
4. Export from audio.js, import in main.js, pass as callback to consuming system

### Implementing Phase 2 Features
1. Read `reference/phase-2-roadmap.md` for priority order and file lists
2. Read `reference/MANIFESTO.md` for detailed design per feature
3. Start with Tier 1 (Dimming → Attunement → Orb Gate → Curiosity)
4. Tier 2 items are independent of each other
5. Tier 3 (narrative) needs stable gameplay loop first

## Key File Locations

| What | Where |
|------|-------|
| All constants + colors | `src/constants.js` |
| Animation loop + director | `src/main.js` (line ~1891 for director) |
| Player physics | `src/core/player.js` |
| Terrain height | `src/world/terrain.js` → `getGroundY()` |
| Audio system | `src/systems/audio.js` (32KB) |
| Quest state machine | `src/quest/questManager.js` |
| Weather states | `src/systems/weather.js` |
| Day/night + bioGlow | `src/systems/dayNightCycle.js` |
| Sector dimming | `src/systems/dimming.js` → `getLocalGlow()`, `initDimming()` |
| Discovery text | `src/systems/discoveries.js` |
| Intro sequence | `src/systems/intro.js` (title, narration, pixie, mushrooms, puffling) |
| Perf monitor (dev) | `src/systems/perfMonitor.js` → `timeStart()`, `timeEnd()`, `reportTimings()` |
| AI senses/steering | `src/systems/ai/senses.js`, `steering.js` |
| Game guide | `GAME_GUIDE.md` (player-facing, update as features change) |

## Recent Optimizations

Performance pass based on WebGL FPS Guide v2 analysis:

- **Bloom resolution** capped at 512x512 (was unbounded at half-viewport)
- **Shadow autoUpdate** disabled; throttled to ~1Hz manual updates
- **Tree frustum culling** — camera-aware per-instance culling in `updateTreeLOD()` with generous sphere radius
- **Shared materials** — 10 module-scoped materials in mushrooms, 9 in crystals (300+ fewer material instances)
- **Named imports** — All 54 source files converted from `import * as THREE` to named imports for tree-shaking
- **Terser build** — 2-pass compression, `drop_console`, `toplevel` mangle, `es2020` target
- **perfMonitor** — Dev-only EMA timing per director subsystem + `renderer.info` monitoring (tree-shaken in production)
- **Intro overhaul** — Dramatic title with CSS mushrooms and animated puffling, multi-layer noise pixie with dust particles, slower narration pacing (7s per card)
- **Gameplay fixes** — Puffling Z-axis speed parity, reduced rock collision radii, tighter terrain tracking threshold

## Known Technical Debt

1. **`state.js`** — Legacy shared state. Most state migrated to main.js module scope but some duplication remains (quest state in both places).
2. **`main.js` size** — 2,356 lines. The `director()` function is the monolith (now instrumented with perfMonitor). Phase 2 should extract per-system update modules.
3. **No save/load** — Game resets on refresh.
4. **No accessibility** — No screen reader, colorblind, or reduced-motion support.
5. **Intro DOM overlays** — Uses CSS/DOM rather than troika-three-text (acceptable for pre-gameplay screen).

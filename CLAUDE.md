# CLAUDE.md — Luminaries

## Project Overview

Luminaries is an interactive 3D bioluminescent forest exploration experience built with Three.js. Players navigate a procedurally generated nighttime forest filled with glowing flora, fauna, and collectible orbs.

## Repository Structure

```
Luminaries/
├── index.html              # Thin shell: CSS + DOM elements + module entry
├── package.json            # Vite + Three.js
├── vite.config.js          # Vite configuration
├── CLAUDE.md               # This file
├── README.md
├── public/
│   └── assets/             # Textures, audio (future)
└── src/
    ├── main.js             # Entry point — bootstraps everything, animation loop
    ├── constants.js         # All constants, color palette (C object)
    ├── state.js             # Shared mutable state (legacy, being phased out)
    ├── utils/
    │   ├── rng.js           # Seeded RNG (sr function)
    │   └── math.js          # Shared math helpers (dist2, clamp, lerp)
    ├── core/
    │   ├── renderer.js      # WebGL renderer, camera, scene, clock, fog
    │   ├── lighting.js      # All light setup + crystal proximity system
    │   ├── postprocessing.js # Bloom composer pipeline
    │   ├── input.js         # Keyboard, mouse, mobile joystick
    │   ├── player.js        # Player controller, physics, camera bob
    │   └── geometries.js    # Shared GEO object (reusable geometries)
    ├── systems/
    │   ├── audio.js         # Procedural Web Audio API sound + music
    │   ├── weather.js       # Weather state machine
    │   └── daynight.js      # Day/night cycle
    ├── world/
    │   ├── ground.js        # Procedural ground texture (canvas + vertex biomes)
    │   ├── terrain.js       # Terrain height + flat zone registration
    │   ├── aurora.js        # Aurora borealis effect
    │   └── sky.js           # Sky dome (stars, galaxies, nebulae, constellations)
    ├── entities/
    │   ├── flora/
    │   │   ├── trees.js       # Template-instanced trees (10 templates, InstancedMesh)
    │   │   ├── mushrooms.js
    │   │   ├── crystals.js
    │   │   ├── grass.js
    │   │   ├── ferns.js
    │   │   ├── flowers.js
    │   │   ├── reeds.js
    │   │   └── dandelions.js
    │   ├── fauna/
    │   │   ├── jellies.js
    │   │   ├── pufflings.js
    │   │   ├── deer.js
    │   │   └── moths.js
    │   ├── magical/
    │   │   ├── wisps.js
    │   │   ├── fairyRings.js
    │   │   ├── bubbles.js
    │   │   ├── ponds.js
    │   │   └── orbs.js
    │   └── world/
    │       ├── obelisk.js
    │       ├── moat.js
    │       ├── rainbows.js
    │       └── rocks.js
    ├── particles/
    │   ├── fireflies.js
    │   ├── spores.js
    │   ├── dust.js
    │   ├── seeds.js
    │   ├── starMotes.js
    │   └── bubblePops.js
    ├── quest/
    │   ├── questManager.js  # Quest state machine + finale
    │   └── lasers.js        # Laser + rainbow finale effects
    └── ui/
        ├── hud.js           # FPS, quest status, position display
        └── overlay.js       # Start screen, orb HUD
```

## Technology Stack

- **Three.js r172+** — 3D rendering (npm ES module)
- **Vite** — Build system, dev server, hot reload
- **Post-processing** — EffectComposer, RenderPass, UnrealBloomPass (Three.js examples/jsm)
- **ES Modules** — `const`/`let`, `import`/`export` throughout
- **Web Audio API** — Fully procedural audio (no audio files, no Howler.js)
- **WebGL** — Hardware-accelerated 3D graphics

## Development Workflow

### Running

```sh
npm install          # First time only
npm run dev          # Starts Vite dev server with hot reload
npm run build        # Production build to dist/
npm run preview      # Preview production build
```

### Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server (http://localhost:5173) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve production build locally |

## Code Architecture

### Module Organization

The codebase follows a **modular ES module architecture**:

1. **`src/constants.js`** — All constants and color palette (`C` object)
2. **`src/core/`** — Engine systems (renderer, lighting, input, player, postprocessing)
3. **`src/world/`** — World generation (ground texture, sky dome)
4. **`src/entities/`** — Entity builders organized by category (flora, fauna, magical, world)
5. **`src/particles/`** — Pooled particle systems (fireflies, spores, dust, seeds, etc.)
6. **`src/quest/`** — Quest state machine and visual effects
7. **`src/ui/`** — HUD and overlay management
8. **`src/main.js`** — Entry point: imports everything, orchestrates populate/animate loop

### Key Constants

```javascript
export const GRAVITY = 15;
export const MOVE_SPEED = 6;
export const WORLD_R = 90;           // World radius in meters (1 unit = 1 meter)
export const TREE_N = 500;            // Template instanced (10 templates × InstancedMesh)
export const MAX_CRYSTAL_LIGHTS = 5; // Light budget: total max 8 GPU lights
```

### Color Palette

The `C` object in `src/constants.js` defines all colors as hex values, organized by category: environment, flora, creatures, quest, sky. Always use `C.propertyName` rather than inline hex values.

### Design Patterns

- **ES Module imports** — Each file exports specific functions/objects; `main.js` wires everything together
- **Procedural generation** — Seeded RNG (`sr()` from `utils/rng.js`, seed=42) for deterministic world building
- **Entity builder pattern** — `make*()` functions return metadata objects with `group`, position, and behavioral state
- **Three.js Groups** — Each entity is a `THREE.Group` with child meshes
- **Template instancing** — Trees use `InstancedMesh` with 10 baked templates (4 mesh categories: trunk, canopy, glow, detail). ~40 draw calls for 500 trees
- **Shared geometry** — Common geometries in `GEO` object (`core/geometries.js`)
- **Pooled particles** — Pre-allocated particle pools with `init*()`, `spawn*()`, `update*()` pattern
- **Light budget** — Hard cap of 8 real-time lights (1 hemisphere + 2 directional + 1 player + 5 crystal proximity)
- **Bloom post-processing** — Emissive materials + UnrealBloomPass create the bioluminescent glow effect
- **Procedural audio** — All sounds generated via Web Audio API oscillators, filters, and gain envelopes. No audio files

### Entity Categories

| Category | Module Path | Entities |
|----------|-------------|----------|
| Flora | `entities/flora/` | Trees, mushrooms, crystals, grass, ferns, flowers, reeds, dandelions |
| Fauna | `entities/fauna/` | Jellies, pufflings, deer, moths |
| Magical | `entities/magical/` | Wisps, fairy rings, bubbles, orbs, ponds |
| World | `entities/world/` | Rocks, obelisk, moat, rainbows |
| Particles | `particles/` | Fireflies, spores, dust, seeds, star motes, bubble pops |

### Player Mechanics

- **Controls:** WASD movement, SPACE jump, SHIFT sprint, click+drag mouse look
- **Mobile:** Virtual joystick (`#joy-zone`) and jump button (`#btn-jump`)
- **Quest:** Collect 5 golden orbs; obelisk rises on completion; finale with lasers + rainbows
- **Physics:** Gravity, velocity-based movement, ground/air drag, jump impulse, head bob, landing cushion

## Coding Conventions

- **`const`/`let` declarations** — Modern ES module style throughout
- **ES module imports** — `import * as THREE from 'three'` for Three.js; named imports for project modules
- **Comment banners** — Major sections use `// ===...===` banner comments
- **Functional, imperative approach** — No classes; standalone functions and module-scoped state
- **Three.js r172+ API** — Uses ES module imports, `SRGBColorSpace` (not deprecated `sRGBEncoding`)

## Performance Budget

- **20 FPS minimum** — HARD REQUIREMENT. Any change risking this must flag alternatives
- **Draw call budget** — Aim for <200 total draw calls
- **Light budget** — Max 8 real-time lights (1 hemisphere + 2 directional + 1 player + 4-5 crystal proximity)
- **Particle count** — Flag if adding >500 particles to any system

## Current System Architecture

### Tree Rendering
10 baked templates (2 per palette × 5 palettes), 4 `InstancedMesh` per template (trunk, canopy, glow, detail) = ~40 draw calls for 500 trees. LOD: 4 tiers (full detail <20m, reduced 20-70m, impostor sprite 70-110m, hidden >110m). Wind sway applied to tier 0 instance matrices. Trunk uses procedural canvas bark texture with vertex colors.

### Audio System
Fully procedural Web Audio API (NO audio files, NO Howler.js). Master gain → destination. Shared reverb. Layers: ambient (forest hum, wind, rain, water, thunder), creatures (jelly, puffling, deer, moth), player (footstep, jump, land), interactive (bubble pop, fairy bounce, orb collect, laser zap/hum), music (generative harp/flute/lute). All in `src/systems/audio.js`.

### Ground Texture
Two-tier hybrid: 2048×2048 canvas texture (10-layer procedural with warm earth tones) × vertex color biomes (8 types including warm russet/golden, noise-blended). Single PlaneGeometry with 200×200 segments.

### Entity Spawn Order
Flat zones (ponds, fairy rings) registered first → trees placed with correct height → other entities. Heights re-sampled after all flat zones registered.

### Weather System
State machine in `src/systems/weather.js` (CLEAR, MISTY, LIGHT_RAIN, HEAVY_RAIN, FOG_BANK, LUMINOUS_STORM). Weighted random transitions with cosine blend.

### Quest System
5 orbs → collect → flash → fly up → laser → obelisk rises. Audio callbacks passed via initQuest config.

## Important Constraints

- **Light budget** — Never exceed 8 simultaneous real-time lights. `MAX_CRYSTAL_LIGHTS` enforces proximity-based light activation.
- **Performance** — Bloom post-processing is the heaviest visual feature with a fallback (`bloomEnabled` flag). Keep entity counts reasonable.
- **Browser compatibility** — Must work in modern browsers (Chrome, Firefox, Safari, Edge) with WebGL. Mobile support (touch controls) is built-in.
- **Seeded RNG** — Use `sr()` for world generation to maintain deterministic placement. Don't use `Math.random()` for entity placement.

## Common Tasks

### Adding a new entity type

1. Define count constant in `src/constants.js` (e.g., `export const NEWENT_N = 10;`)
2. Add colors to the `C` palette object in `src/constants.js`
3. Create `src/entities/<category>/newEntity.js` with a `make*()` builder function
4. Import and call the builder in `src/main.js` `populate()` function
5. Add update logic in `src/main.js` `director()` or a dedicated update function
6. Respect the light budget if the entity emits light

### Adding a new particle system

1. Create `src/particles/newParticle.js` with `init*()`, `spawn*()`, `update*()` functions
2. Import in `src/main.js`, call `init*()` in the init block
3. Call `update*()` in the director or animation loop

### Tuning world generation

Adjust count constants in `src/constants.js` and the `WORLD_R` radius. The seeded RNG ensures reproducible placement.

### Modifying visual effects

Bloom parameters are in `src/core/postprocessing.js`. Emissive material intensity on individual entities controls per-object glow contribution.

## Coding Patterns

### Adding new sounds
Create function in `audio.js` with `if (!initialized || muted) return` guard. Use oscillators + filters + gain envelopes. Connect via `connectWithReverb(gain, masterGain, wetAmount)`. Self-terminate with `.stop(time)`.

### Audio callbacks
Pass functions via config objects to quest/entity systems. Don't import `audio.js` directly in entity files.

### Adding instanced entities
Create template geometry, merge with `mergeGeometries` (use `toNonIndexed()` to normalize indexed/non-indexed geometries), use `InstancedMesh` with `DynamicDrawUsage`, manage visibility via count manipulation.

### Entity placement
Always check `inKeepOut()`, register flat zones before sampling `getGroundY()`, add keepOutZones for new large entities.

## Best Practices

- Prefer `InstancedMesh` for any entity with >20 copies
- Reuse geometries from `GEO` object when possible
- Use seeded RNG (`sr()`) for world gen, never `Math.random()` for placement
- Keep materials shared — don't create per-instance materials
- `depthWrite: false` for transparent glow/haze effects
- New sounds: keep volumes low (0.02-0.08 per voice), always call `.stop(time)` to prevent node accumulation
- When merging geometries: normalize with `toNonIndexed()` first, ensure same attribute set (position, normal, color; remove uv unless needed)

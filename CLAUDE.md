# CLAUDE.md — Luminaries

## Project Overview

Luminaries is an interactive 3D bioluminescent forest exploration experience built as a single-file HTML/JavaScript application using Three.js. Players navigate a procedurally generated nighttime forest filled with glowing flora, fauna, and collectible orbs.

**Live usage:** Open `Luminaries.html` in any modern browser with WebGL support. No build step, server, or installation required.

## Repository Structure

```
Luminaries/
├── Luminaries.html   # Entire application (~4,530 lines: HTML + CSS + JS)
├── README.md         # One-line project description
└── CLAUDE.md         # This file
```

This is a **monolithic single-file project**. All HTML, CSS, and JavaScript live in `Luminaries.html`. There is no build system, no package manager, and no separate source files.

## Technology Stack

- **Three.js r128** — 3D rendering (loaded via CDN)
- **Post-processing** — EffectComposer, RenderPass, UnrealBloomPass (CDN)
- **Vanilla JavaScript** — No framework, no TypeScript, no transpilation
- **WebGL** — Hardware-accelerated 3D graphics

### CDN Dependencies (loaded in `<script>` tags)

```
cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
unpkg.com/three@0.128.0/examples/js/postprocessing/EffectComposer.js
unpkg.com/three@0.128.0/examples/js/postprocessing/RenderPass.js
unpkg.com/three@0.128.0/examples/js/postprocessing/UnrealBloomPass.js
unpkg.com/three@0.128.0/examples/js/shaders/CopyShader.js
unpkg.com/three@0.128.0/examples/js/shaders/LuminosityHighPassShader.js
```

## Development Workflow

### Running

Open `Luminaries.html` directly in a browser, or serve it locally:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/Luminaries.html
```

### No Build / Test / Lint Tooling

There is no `package.json`, no test framework, no linter, and no CI/CD pipeline. Validation is manual — open in browser and visually verify.

## Code Architecture

The JavaScript inside `Luminaries.html` follows a **phased initialization** pattern:

### Initialization Phases (top-to-bottom in file)

1. **Constants** (~lines 47–100) — Physics, world size, entity counts, color palette
2. **Seeded RNG** (~line 103) — Linear Congruential Generator seeded at 42
3. **Phase 0 — Scaffold** — WebGL renderer, camera, scene, clock
4. **Phase I — World Anchor** — Procedural ground texture, lighting, bloom post-processing
5. **Space Sky Dome** — Stars (600), galaxies, nebulae, constellations, cosmic anomalies
6. **Entity Creation** — Trees, mushrooms, crystals, creatures, vegetation, magical elements
7. **Player Controller** — First-person movement, physics, input handling
8. **Animation Loop** — `requestAnimationFrame` game loop with delta-time physics
9. **Init Block** — `populate()` call, particle system init, `animate()` start

### Key Constants

```javascript
var GRAVITY=15, MOVE_SPEED=6, SPRINT_MULT=1.8, JUMP_IMPULSE=8;
var WORLD_R=90;           // World radius in meters (1 unit = 1 meter)
var TREE_N=60, MUSH_N=45, CRYSTAL_N=10;
var JELLY_N=6, PUFF_N=8, DEER_N=4, MOTH_N=5;
var ORB_N=5;              // Collectible quest orbs
var MAX_CRYSTAL_LIGHTS=5; // Light budget: total max 8 GPU lights
```

### Color Palette

The `C` object (~lines 63–101) defines all colors as hex values, organized by category: environment, flora, creatures, quest, sky. Always use `C.propertyName` rather than inline hex values.

### Design Patterns

- **Procedural generation** — Seeded RNG (`sr()`) for deterministic world building; parametric creation of all entities
- **Three.js Groups** — Each entity (tree, creature, etc.) is a `THREE.Group` with child meshes/lights
- **Entity arrays with metadata** — Entities stored in arrays (e.g., `trees_data`, `mush_data`, `jellies`) alongside behavioral state
- **Shared geometry/materials** — Common geometries in a `GEO` object; materials reused across instances
- **Light budget** — Hard cap of 8 real-time lights (1 hemisphere + 1 directional + 1 player + 5 crystal proximity)
- **Bloom post-processing** — Emissive materials + UnrealBloomPass create the bioluminescent glow effect

### Entity Categories

| Category | Entities |
|----------|----------|
| Flora | Trees, mushrooms, crystals, grass, ferns, flowers, reeds, dandelions |
| Fauna | Jellies, puffs, deer, moths |
| Magical | Wisps, fairy rings, bubbles, star motes, orbs (collectible) |
| World | Ground plane, sky dome, obelisk, moat, rainbows, ponds |
| Particles | Fireflies, spores, dust motes, dandelion seeds, bubble pops |

### Player Mechanics

- **Controls:** WASD movement, SPACE jump, SHIFT sprint, click+drag mouse look
- **Mobile:** Virtual joystick (`#joy-zone`) and jump button (`#btn-jump`)
- **Quest:** Collect 5 golden orbs (tracked in `#orb-hud`); obelisk rises on completion
- **Physics:** Gravity, velocity-based movement, ground/air drag, jump impulse

## Coding Conventions

- **`var` declarations** — The codebase uses `var` throughout (not `let`/`const`). Maintain consistency.
- **Compact/minified style** — Semicolons separate statements on single lines; short variable names are common (e.g., `sr` for seeded random, `C` for colors, `_s` for RNG state).
- **Comment banners** — Major sections use `// ===...===` banner comments with section titles.
- **Inline everything** — CSS is in `<style>`, JS is in `<script>`. No external files.
- **Functional, imperative approach** — No classes, no modules, no OOP inheritance. Standalone functions and global state.
- **Three.js r128 API** — Uses the legacy global `THREE` namespace (not ES module imports). `CapsuleGeometry` is not available in r128; the code notes this explicitly.

## Important Constraints

- **Single-file architecture** — Do not split into multiple files without explicit request. The single-file design is intentional for easy distribution.
- **Three.js r128** — Do not upgrade or use APIs from newer Three.js versions. The code explicitly notes r128 limitations (e.g., no `CapsuleGeometry`).
- **Light budget** — Never exceed 8 simultaneous real-time lights. The `MAX_CRYSTAL_LIGHTS` constant enforces proximity-based light activation.
- **Performance** — The bloom post-processing is the heaviest visual feature and has a fallback (`bloomEnabled` flag). Keep entity counts reasonable for real-time rendering.
- **CDN dependencies** — All external libraries load from CDN. Do not add local `node_modules` or bundled dependencies.
- **Browser compatibility** — Must work in modern browsers (Chrome, Firefox, Safari, Edge) with WebGL. Mobile support (touch controls) is built-in.

## Common Tasks

### Adding a new entity type

1. Define count constant (e.g., `var NEWENT_N=10;`) in the constants block
2. Add colors to the `C` palette object
3. Create a builder function that returns a `THREE.Group`
4. Add an array to store instances and metadata
5. Call the builder in `populate()` or a new `init*()` function
6. Add animation logic in the `animate()` loop
7. Respect the light budget if the entity emits light

### Tuning world generation

Adjust the count constants (`TREE_N`, `MUSH_N`, etc.) and the `WORLD_R` radius. The seeded RNG (`sr()`, seed=42) ensures reproducible placement.

### Modifying visual effects

Bloom parameters are set when creating the `UnrealBloomPass`. Emissive material intensity on individual entities controls per-object glow contribution.

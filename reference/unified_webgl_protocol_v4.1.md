# Unified Generative WebGL Protocol v4.1

**Architectural standard for LLM-assisted generation of physics-based Three.js simulations.**

```
Protocol Version : 4.1
Lineage         : WebGL Protocol v2.0 (PDF) → v2 (Luminaries) → v3.0 (Gemini) → v4.0 → v4.1
TEP Integration : Technical Editor Master Protocol v5.2
Framework       : Three.js r128 (single-file CDN) / r172+ (Vite ES modules)
Coordinate Sys  : Y-Up, origin (0,0,0) = ground center
Scale Authority : 1.0 unit = 1.0 meter
Validation      : Patterns extracted from Luminaries (14,000 LOC, 86 files, shipping)
Audio Source     : Procedural Audio Engine Protocol (zero-asset Web Audio API)
```

---

## §0 Meta: Scope, Versioning, Assumptions

### 0.1 Protocol Scope

This protocol governs the generation of interactive, physics-based Three.js simulations by Large Language Models. It applies to two distinct output formats, and every phase in the document addresses both unless explicitly marked otherwise.

**Format A — Single-File HTML Prototype.** A self-contained `<!DOCTYPE html>` file loading Three.js from CDN (`r128`). Used for rapid prototyping, concept validation, and demonstrations. All code lives inside a single `<script>` block. Identified in code examples by the marker `[SINGLE-FILE]`.

**Format B — Multi-File Vite/ES Module Project.** A production-grade project using `import` / `export`, Vite as the build tool, and Three.js installed via npm (`r172+`). Code is compartmentalized into a defined module hierarchy. Identified in code examples by the marker `[MULTI-FILE]`.

The agent must declare its target format before generating any code. If the user does not specify, the agent must ask. This is a mandatory pause trigger per TEP v5.2 §I (Output Disambiguation Gate).

### 0.2 Three.js Version Divergence

Several Three.js APIs changed between r128 and r172+. The agent must select the correct API surface for the declared target version. The following table covers the critical divergences.

| Feature | r128 (CDN, single-file) | r172+ (npm, multi-file) | Notes |
|---|---|---|---|
| Color space | `renderer.outputEncoding = THREE.sRGBEncoding` | `renderer.outputColorSpace = THREE.SRGBColorSpace` | `sRGBEncoding` deprecated r152 |
| CapsuleGeometry | **Does not exist.** Use `CylinderGeometry`. | Available. | #1 cause of blank screens on r128 |
| Seeded random | Not available. Implement custom LCG. | `THREE.MathUtils.seededRandom()` available but limited. Custom LCG preferred. | See §5.7 |
| Imports | Global `THREE` namespace via `<script>` tag | Named imports: `import { Scene } from 'three'` | |
| Post-processing | Not bundled with CDN build. Must vendor-inline or skip. | `three/addons/postprocessing/*` | Bloom requires multi-file |
| Geometry utils | Not available via CDN | `import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'` | Required for template instancing |
| OrbitControls | Separate CDN script or vendor-inline | `import { OrbitControls } from 'three/addons/controls/OrbitControls.js'` | |
| Material cloning | `.clone()` works | `.clone()` works | No divergence |

**Hard rule:** If the target is r128, every code block must be verified against this table before delivery. A `CapsuleGeometry` call on r128 produces a blank screen with zero console errors — it is a silent, invisible failure.

### 0.3 Governing Assumptions

These assumptions bound the entire protocol. Violations invalidate downstream guarantees.

1. **Newtonian approximation.** Physics integrations prioritize visual fidelity and framerate over mathematical precision. Euler integration is the default; Verlet or RK4 are not required unless the simulation demands energy conservation (pendulums, orbits).
2. **Single-threaded execution.** All code runs on the browser's main thread. No Web Workers, no OffscreenCanvas. Physics integrations above ~1000 independent bodies will cause latency spikes on mobile architectures.
3. **Spherical collision.** All collision detection is distance-based (sphere-sphere or point-sphere). Mesh-based or convex-hull collision is out of scope.
4. **WebGL 1.0+ minimum.** No WebGL2-only features are required. WebGL2 features (e.g., `EXT_color_buffer_float` for HDR) may be used when available but must degrade gracefully.
5. **No external assets.** All geometry is procedural (Three.js primitives, merged geometry, canvas textures). No `.glb`, `.obj`, `.png` imports. Audio is procedural via Web Audio API.
6. **Desktop-first, mobile-aware.** Primary target is desktop Chrome/Firefox/Safari. Mobile performance is respected via pixel ratio caps, draw call budgets, and LOD systems, but touch input is secondary.

**Limiting factors:**
- Canvas texture generation (2048×2048) blocks the main thread for 50–200ms on init. This is acceptable at startup but must never occur during gameplay.
- `requestAnimationFrame` throttles to ~1 FPS when the tab is backgrounded. The `dt` cap (§7.2) prevents physics explosion on tab return.
- Web Audio API requires a user gesture to start `AudioContext`. Init audio on first click/keypress, not on page load.

### 0.4 TEP v5.2 Integration Map

This protocol is designed to be used under the Technical Editor Master Protocol v5.2. The following table maps TEP requirements to protocol sections.

| TEP v5.2 Requirement | Protocol Section |
|---|---|
| Performance Budgets (§IV) — declared upfront, non-negotiable | §9.3, Appendix B |
| Functional Style (§IV) — const/let, named imports, seeded RNG, C object | §2.9, §5.6, §5.7 |
| Doxygen Tiered (§IV) — @file, @brief, @param, @return | All code blocks |
| No allocations in animation loops (§IV) | §6.7, §9.4 |
| Failure Mode Analysis footer (§III) | Every phase verification gate |
| Assumption Explicitization (§III) | §0.3, §12.4 |
| Web/3D Domain Checklist (§VII) | §12.2, §13.1 |
| Output Disambiguation Gate (§I) | §0.1, §13.4 |
| Seeded RNG for procedural content (§IV) | §5.7 (mandatory) |

---

## §1 Agentic Execution Flow

### 1.1 Phase Dependency Graph

Phases must execute in strict sequential order. Each phase declares its **requires** (what must exist from prior phases) and its **provides** (what subsequent phases depend on). Attempting to build a later phase without its prerequisites produces the failure modes catalogued in §12.

```
Phase 0: Scaffold
  requires: nothing
  provides: renderer, scene, camera, clock, constants, animation loop skeleton, resize handler

Phase I: World Anchor
  requires: renderer, scene, camera (Phase 0)
  provides: coordinate system, getGroundY(), ground mesh, sky dome, lighting rig, shadows

Phase 1.5: Input Controller
  requires: animation loop skeleton (Phase 0)
  provides: keys{} state map, getInputVector(), pointer lock (optional)

Phase II: Asset Factory
  requires: scene, getGroundY(), constants/colors (Phase 0 + I)
  provides: GEO pool, MAT pool, C palette, sr() RNG, entity make*() functions, Actor API

Phase III: Kinematic Kernel
  requires: getGroundY(), getInputVector(), Actor API, constants (Phase I + 1.5 + II)
  provides: updatePlayer(), physics profiles, collision system, ParticlePool, creature physics

Phase IV: Simulation Director
  requires: all entities + physics + input (Phase I–III)
  provides: director(dt, t), state machines, visibility culling, emissive glow, AI systems

Phase V: Procedural Audio
  requires: director events, entity positions, player position (Phase IV)
  provides: audio graph, noise buffers, synthesis, callback injection, generative music

Phase VI: Post-Processing & Visual Budget
  requires: renderer, scene, camera, all visual entities (Phase 0–IV)
  provides: bloom pipeline, light budget, performance monitoring

Phase VII: Narrative Integration
  requires: stable game loop, audio callbacks, entity references (Phase I–VI)
  provides: quest state machine, discovery system, progression gating, finale sequence
```

### 1.2 Agentic Decision Gates

Before generating code, the LLM agent must execute these gates in order. Each gate is a hard stop — proceeding past a failed gate produces compounding errors that are expensive to fix.

**Gate 0 — Format Declaration.** Single-file or multi-file? If ambiguous, ask. Do not guess.

**Gate 1 — Performance Budget.** Declare the hard limits table (§9.3) before writing any rendering code. These numbers are non-negotiable once set (TEP v5.2 §IV). If the user hasn't specified, propose defaults and confirm.

**Gate 2 — Scope Assessment.** Count the expected entity types, instance counts, particle systems, and state machines. If the sum exceeds single-file complexity thresholds (>800 LOC, >5 entity types, >3 state machines), recommend multi-file format regardless of user's initial request. Present the recommendation with rationale before proceeding.

**Gate 3 — Phase Readiness.** Before generating each phase, verify that all `requires` from the dependency graph are satisfied in the existing code. If a prior phase was skipped or is incomplete, halt and complete it first.

**Gate 4 — Post-Generation Verification.** After completing all phases, execute the full failure mode checklist (§12.1) against the generated code. Document pass/fail for each mode.

### 1.3 Output Plan Template

Per TEP v5.2, confirm the output plan before generating substantial content.

```
OUTPUT PLAN (WebGL Simulation):
├─ Format: [single-file HTML / multi-file Vite]
├─ Three.js Version: [r128 CDN / r172+ npm]
├─ Destination: [artifact / file / inline]
├─ Performance Budget:
│   ├─ Target FPS: [value]
│   ├─ Max Draw Calls: [value]
│   ├─ Max Real-Time Lights: [value]
│   ├─ Max Particles (per pool): [value]
│   └─ Max Entity Count: [value]
├─ Phases Required: [list applicable phases, e.g., 0–IV for non-narrative sim]
├─ Estimated LOC: [value]
└─ Proceed? [Y to confirm, or specify alternate]
```

---

## §2 Phase 0: Scaffold

**Requires:** Nothing.
**Provides:** `renderer`, `scene`, `camera`, `clock`, constants module, animation loop skeleton, resize handler.

Phase 0 establishes the execution environment. No visual content is created here — that is Phase I's responsibility. Phase 0 is the empty stage: lights off, curtain down, but the theater is built and the projector is running.

### 2.1 Format Decision

If not already resolved by Gate 0, resolve now. The decision cascades through every subsequent phase.

| Criterion | Single-File HTML | Multi-File Vite |
|---|---|---|
| LOC estimate | < 800 | ≥ 800 |
| Entity types | ≤ 5 | > 5 |
| State machines | ≤ 3 | > 3 |
| Post-processing | None (no bloom on r128 CDN) | Bloom, SSAO, etc. |
| Audio | Basic (≤3 oscillator voices) | Full procedural audio graph |
| Narrative/quest | None or trivial | Multi-phase quest |
| Iteration speed | Fast (refresh browser) | Medium (Vite HMR) |
| Deployment | Drop file on any server | Requires build step |

### 2.2 HTML Template [SINGLE-FILE]

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><!-- Simulation Title --></title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { overflow: hidden; background: #000; font-family: monospace; }
  canvas { display: block; }
  #hud {
    position: absolute; top: 12px; left: 12px; color: #fff;
    background: rgba(0,0,0,0.7); padding: 10px 14px; border-radius: 6px;
    font-size: 13px; z-index: 100; pointer-events: none;
  }
  #controls {
    position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%);
    color: #ccc; background: rgba(0,0,0,0.7); padding: 10px 18px;
    border-radius: 8px; font-size: 12px; z-index: 100;
    text-align: center; pointer-events: none;
  }
</style>
</head>
<body>
<div id="hud">State: INIT | FPS: --</div>
<div id="controls">WASD Move | SPACE Jump | SHIFT Sprint</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
'use strict';
// ═══════════════════════════════════════════════════
// All simulation code follows — Phase 0 through IV
// in strict Code Generation Sequence order.
// ═══════════════════════════════════════════════════
</script>
</body>
</html>
```

### 2.3 Vite Project Structure [MULTI-FILE]

```
project-root/
├── index.html              # Minimal HTML shell
├── package.json            # three, vite as devDependency
├── vite.config.js          # Base config
├── src/
│   ├── main.js             # Entry: orchestration + animation loop
│   ├── constants.js        # All constants + color palette + physics profiles
│   ├── core/
│   │   ├── renderer.js     # WebGL renderer, camera, scene, clock exports
│   │   ├── lighting.js     # Light setup + proximity pool system
│   │   ├── postprocessing.js  # Bloom pipeline + fallback
│   │   ├── input.js        # Keyboard, mouse, touch, pointer lock
│   │   ├── player.js       # Player controller + physics
│   │   └── geometries.js   # Shared GEO pool
│   ├── world/
│   │   ├── terrain.js      # Heightmap + flat zones + keep-out
│   │   ├── ground.js       # Procedural ground texture + vertex biomes
│   │   └── sky.js          # Sky dome + celestial objects
│   ├── entities/
│   │   ├── flora/          # Plant entity types
│   │   ├── fauna/          # Creature entity types
│   │   ├── magical/        # Interactive objects (orbs, crystals)
│   │   └── world/          # Terrain features, structures
│   ├── particles/          # Pooled particle systems (one file per type)
│   ├── systems/
│   │   ├── audio.js        # Procedural audio engine
│   │   ├── music.js        # Generative music layer
│   │   ├── weather.js      # Weather state machine
│   │   ├── dayNightCycle.js  # Time-of-day system
│   │   ├── discoveries.js  # First-encounter tracking
│   │   └── ai/             # Senses + steering behaviors
│   ├── quest/
│   │   └── questManager.js # Quest state machine
│   └── ui/
│       ├── hud.js          # Runtime stats + quest status
│       └── overlay.js      # Start screen + UI elements
```

### 2.4 CDN Version Rules [SINGLE-FILE]

When targeting r128 via CDN, the following APIs are unavailable and require substitution.

**CapsuleGeometry → CylinderGeometry.** `CapsuleGeometry` was introduced in r142. On r128, calling `new THREE.CapsuleGeometry(...)` does not throw an error — it silently produces `undefined`, resulting in a blank screen with no console output. This is the single most common LLM-generated bug in single-file simulations. Always use `CylinderGeometry` with hemisphere end caps if capsule shapes are needed.

**MathUtils.seededRandom() → custom LCG.** Not available on r128. See §5.7 for the required implementation.

**outputColorSpace → outputEncoding.** On r128, use `renderer.outputEncoding = THREE.sRGBEncoding`. On r172+, use `renderer.outputColorSpace = THREE.SRGBColorSpace`. The old property is removed in recent versions.

**Post-processing passes.** Not bundled with the CDN build. If bloom or other post-processing is required, either vendor-inline the pass code (adds ~200 LOC) or accept that the single-file version will not have post-processing. This is a legitimate reason to recommend Format B.

### 2.5 Renderer Configuration

```javascript
/**
 * @file core/renderer.js [MULTI-FILE] or inline [SINGLE-FILE]
 * @brief Initializes the WebGL renderer with performance-safe defaults.
 */

// [SINGLE-FILE]
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));  // Cap at 2x — higher causes thermal throttling on mobile
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputEncoding = THREE.sRGBEncoding;  // r128
// renderer.outputColorSpace = THREE.SRGBColorSpace;  // r172+
document.body.appendChild(renderer.domElement);

// [MULTI-FILE]
import * as THREE from 'three';

export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;  // r172+
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

export const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x081018, 0.01);  // Exponential fog hides draw distance naturally

export const camera = new THREE.PerspectiveCamera(
    65,                                          // FOV — 60-70 for first-person, 45-55 for third-person
    window.innerWidth / window.innerHeight,
    0.1,                                         // Near plane — 0.1m minimum to avoid z-fighting
    300                                          // Far plane — 2-3x world radius
);

export const clock = new THREE.Clock();
```

**Pixel ratio cap rationale:** `devicePixelRatio` can be 3.0 on high-DPI mobile displays. Rendering at 3x resolution quadruples fill rate compared to 2x. The visual improvement from 2x to 3x is imperceptible in a simulation context but the thermal cost is significant. Cap at 2.0.

**Fog selection:** `FogExp2` (exponential) produces a more natural distance fade than `Fog` (linear). Linear fog creates a visible hard edge at the far boundary. Exponential fog density of 0.01–0.02 works well for worlds with 80–120m radius.

### 2.6 Camera Setup

Three camera modes are supported. Choose based on the simulation type.

**First-person (WASD exploration).** Camera position equals player position plus eye height offset. Camera rotation controlled by mouse/pointer lock. This is the default for exploration-type simulations.

```javascript
// Camera position is set in updatePlayer() — see §6.2
// After physics integration, before render:
camera.position.set(player.pos.x, player.pos.y + headBobY + landingDipY, player.pos.z);
```

**Third-person follow-camera.** Camera tracks a player actor with a lerped offset. Use when the player character is a visible entity (vehicle, creature).

```javascript
// Pre-allocated vectors — never allocate in the animation loop
const _camOffset = new THREE.Vector3(0, 6, 12);
const _camDesired = new THREE.Vector3();

function updateCamera(playerMesh) {
    _camDesired.copy(playerMesh.position).add(_camOffset);
    camera.position.lerp(_camDesired, 0.05);  // Smooth follow
    camera.lookAt(playerMesh.position.x, playerMesh.position.y + 1.5, playerMesh.position.z);
}
```

**Orbit controls (observation-only).** No player entity. Camera orbits around a focal point. Use for showcases, demos, and non-interactive simulations.

```javascript
// [MULTI-FILE] only — OrbitControls not available on r128 CDN without vendor-inline
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2.1;  // Prevent camera from going underground
// Call controls.update() in the animation loop
```

**Decision rule:** If the simulation has WASD input → first-person. If the simulation has a visible player avatar → third-person follow. If the simulation is non-interactive or observational → orbit controls.

### 2.7 Animation Loop Skeleton

The animation loop is the heartbeat of the simulation. It runs every frame, reads the clock, and dispatches to all systems in a fixed order. The order matters — changing it produces subtle bugs (e.g., camera jitter if the camera updates before physics).

```javascript
/**
 * @brief Main animation loop. Called once per frame via requestAnimationFrame.
 * @warning Update order is canonical. Do not reorder without understanding the
 *          dependency chain: input → physics → state → animation → camera → HUD → render.
 */
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    // Delta time cap: prevents physics explosion when tab returns from background.
    // Background tabs throttle rAF to ~1 FPS. Without the cap, dt could be 5+ seconds,
    // causing entities to teleport and particles to explode. 0.1s (100ms) is the ceiling.
    const dt = Math.min(clock.getDelta(), 0.1);

    // Canonical update order:
    // 1. Input polling         — read keyboard/mouse state
    // 2. Player physics        — integrate player velocity, gravity, collision
    // 3. Director              — state machines, entity updates, AI, particles, culling
    // 4. Quest/narrative       — progression checks, event triggers
    // 5. Audio                 — spatial audio updates, music state
    // 6. Camera                — position/rotation (AFTER physics, BEFORE render)
    // 7. HUD                   — DOM updates (throttled, not every frame)
    // 8. Post-processing       — bloom compose if enabled
    // 9. Render                — final draw call

    // Placeholder calls — each is implemented in its respective phase:
    // pollInput(dt);                    // Phase 1.5
    // updatePlayer(dt);                 // Phase III
    // director(dt, clock.elapsedTime);  // Phase IV
    // updateQuest(dt, clock.elapsedTime, player);  // Phase VII
    // updateAudio(dt);                  // Phase V
    // updateCamera();                   // Phase 0 / III
    // updateHUD(dt);                    // §11
    // composer.render();                // Phase VI (or renderer.render(scene, camera) if no post-processing)
    renderer.render(scene, camera);
}
```

### 2.8 Resize Handler

```javascript
/**
 * @brief Handles viewport resize events. Updates camera projection and renderer size.
 * @note Also update post-processing composer size if bloom is active (§9.1).
 */
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // If post-processing is active:
    // composer.setSize(window.innerWidth, window.innerHeight);
});
```

### 2.9 Constants Module

All magic numbers live in one place. This is enforced by TEP v5.2 §IV (colors from constants objects, never inline hex).

```javascript
/**
 * @file constants.js [MULTI-FILE] or constants block [SINGLE-FILE]
 * @brief All simulation constants. Single source of truth.
 * @note 1.0 unit = 1.0 meter. All distances in meters, all times in seconds.
 */

// ── World ──────────────────────────────────────────
const WORLD_R = 90;          // World radius in meters
const EYE_H = 1.7;           // Player eye height in meters
const SKY_R = 250;           // Sky dome radius in meters

// ── Physics ────────────────────────────────────────
const GRAVITY = 15;           // m/s² (tuned for game feel, not realism)
const MOVE_SPEED = 6;         // Base walk speed m/s
const SPRINT_MULT = 1.8;      // Sprint multiplier
const JUMP_IMPULSE = 8;       // Jump velocity m/s
const GROUND_DRAG = 0.85;     // Per-frame velocity damping on ground
const AIR_DRAG = 0.98;        // Per-frame velocity damping in air
const DT_CAP = 0.1;           // Maximum delta time in seconds

// ── Physics Profiles ───────────────────────────────
const PHYS = {
    HUMAN:    { gravity: 15.0, drag: 0.85, airDrag: 0.98 },
    HEAVY:    { gravity: 40.0, drag: 0.95, airDrag: 1.00 },
    LIGHT:    { gravity: 2.0,  drag: 0.80, airDrag: 0.95 },
    STANDARD: { gravity: 9.8,  drag: 0.90, airDrag: 0.99 },
};

// ── Visual Budget (non-negotiable once set) ────────
const BUDGET = {
    TARGET_FPS: 20,            // Minimum acceptable FPS
    MAX_DRAW_CALLS: 200,       // Hard ceiling
    MAX_LIGHTS: 8,             // Real-time light maximum
    MAX_PARTICLES_PER_POOL: 500,
    MAX_TEXTURE_MEM_MB: 32,
    CULL_DIST: 110,            // Entity visibility cull distance in meters
    CULL_DIST_SQ: 110 * 110,   // Pre-computed squared distance
};

// ── Color Palette ──────────────────────────────────
// Rule: ALWAYS use C.propertyName. NEVER inline hex values in entity code.
// This enables global palette swaps and theme transitions.
const C = {
    // Environment
    sky: 0x081018,    fog: 0x060c14,    ground: 0x3a5f0b,

    // Flora (per type: base, glow, stem/detail)
    bark: 0x5a4030,   leaf: 0x1a4820,   leafGlow: 0x44ffaa,

    // Fauna (per creature: body, glow, eye/detail)
    // Populated per-project in §5.6

    // Quest (orb, laser, obelisk, finale)
    // Populated per-project in §10.1

    // Sky (stars, nebulae, galaxies)
    // Populated per-project in §3.4
};
```

### 2.10 Phase 0 Verification Gate

Before proceeding to Phase I, verify all of the following. Each is a hard requirement.

| # | Check | How to Verify |
|---|---|---|
| 0-A | Renderer is attached to DOM | `document.querySelector('canvas')` exists |
| 0-B | Scene, camera, clock are initialized | Variables are defined and non-null |
| 0-C | Pixel ratio is capped at 2 | `renderer.getPixelRatio() <= 2` |
| 0-D | Animation loop calls `requestAnimationFrame` | Loop function exists and is invoked |
| 0-E | `dt` is capped at 0.1 | `Math.min(clock.getDelta(), 0.1)` pattern present |
| 0-F | Resize handler updates camera + renderer | `resize` event listener registered |
| 0-G | Constants module defines WORLD_R, GRAVITY, C palette | All referenced constants exist |
| 0-H | No `CapsuleGeometry` if target is r128 | Text search confirms absence |
| 0-I | `outputEncoding` (r128) or `outputColorSpace` (r172+) matches target | Correct API used |

**Failure mode if skipped:** Blank screen, physics explosion on tab return, stretched viewport after resize, inconsistent scale across entities.

---

## §3 Phase I: World Anchor

**Requires:** `renderer`, `scene`, `camera` (Phase 0).
**Provides:** coordinate system, `getGroundY(x, z)`, ground mesh, sky dome, lighting rig, shadows.

The World Anchor is the spatial foundation that every subsequent phase depends on. The "Void State" failure mode — where objects render without spatial reference, producing scale errors and orientation confusion — is caused by skipping or incompletely implementing this phase.

### 3.1 Coordinate System Declaration

Every simulation must establish these conventions as comments or constants at the top of the world module. Ambiguity here propagates through every entity placement, physics calculation, and camera position.

```javascript
/**
 * COORDINATE SYSTEM:
 * ├─ Axes: Y-Up (Three.js default)
 * ├─ Origin: (0, 0, 0) = ground plane center
 * ├─ Scale: 1.0 unit = 1.0 meter
 * ├─ World bounds: circle of radius WORLD_R centered on origin
 * ├─ Ground plane: XZ plane (Y = 0 for flat, Y = getGroundY(x,z) for terrain)
 * └─ Forward: -Z direction (Three.js convention)
 */
```

### 3.2 Terrain Generation

Terrain is not a static mesh — it is a mathematical function `getGroundY(x, z)` that returns the Y-coordinate at any world position. Every entity, particle, and physics integration that touches the ground must query this function. A flat ground is the degenerate case where `getGroundY()` returns 0.

#### 3.2.1 Heightmap Stack

Terrain is constructed from layered noise functions. Each layer adds detail to the previous one.

**Layer 1 — Base noise.** Value noise or Perlin noise at 0.02–0.04 frequency scale with 2–4 octaves of FBM (fractional Brownian motion). This produces the large-scale hills and valleys. Amplitude: 3–8 meters.

**Layer 2 — Landform features.** Optional additional noise shapes for specific terrain character. Ridge noise (absolute value of noise, producing V-shaped crests), cell noise (Voronoi, producing knolls and mounds), and terrace steps (quantized noise). These are additive on top of Layer 1.

**Layer 3 — Flat zone system.** Critical for placing structures, ponds, and fairy rings. A `registerFlatZone(x, z, radius)` call marks a circular area as flat. When `getGroundY()` is called within a flat zone, it returns the Y value sampled at the zone center instead of the noise value. This prevents structures from clipping into hillsides.

**Layer 4 — Keep-out zones.** `inKeepOut(x, z)` returns true if the position is within the exclusion radius of a major feature (large tree, pond, structure). Entity placement code checks this before spawning.

#### 3.2.2 Spawn Ordering Dependency [CRITICAL]

Flat zones must be registered BEFORE any entities sample `getGroundY()`. The following spawn order is mandatory:

```
1. Register flat zones (ponds, fairy rings, clearings, structures)
2. Place major features (large trees, rocks, structures)
3. Register keep-out zones around major features
4. Place minor entities (small flora, fauna, particles)
```

Violating this order causes entities to float above flattened terrain or clip into hillsides that were later flattened.

#### 3.2.3 Implementation

```javascript
/**
 * @file world/terrain.js [MULTI-FILE] or terrain block [SINGLE-FILE]
 * @brief Heightmap generation with flat zone and keep-out systems.
 */

const _flatZones = [];   // { x, z, radius, y } — y is sampled at registration time
const _keepOuts = [];     // { x, z, radius }

/**
 * @brief Simple value noise implementation for terrain generation.
 * @param x [float] World X coordinate.
 * @param z [float] World Z coordinate.
 * @return [float] Noise value in range [-1, 1].
 * @note Uses a seeded hash for determinism. Replace with a higher-quality
 *       noise function (simplex, Perlin) for production terrain.
 */
function noise2D(x, z) {
    // Simple hash-based value noise — adequate for most simulations.
    // For higher quality, substitute simplex noise.
    const ix = Math.floor(x), iz = Math.floor(z);
    const fx = x - ix, fz = z - iz;
    // Smoothstep interpolation
    const ux = fx * fx * (3 - 2 * fx);
    const uz = fz * fz * (3 - 2 * fz);
    // Hash function (deterministic, no Math.random())
    const hash = (a, b) => {
        let h = (a * 127.1 + b * 311.7);
        h = Math.sin(h) * 43758.5453;
        return h - Math.floor(h);
    };
    const v00 = hash(ix, iz), v10 = hash(ix + 1, iz);
    const v01 = hash(ix, iz + 1), v11 = hash(ix + 1, iz + 1);
    const a = v00 + ux * (v10 - v00);
    const b = v01 + ux * (v11 - v01);
    return (a + uz * (b - a)) * 2 - 1;  // Remap to [-1, 1]
}

/**
 * @brief Fractional Brownian Motion — layered noise for natural terrain.
 * @param x [float] World X coordinate.
 * @param z [float] World Z coordinate.
 * @param octaves [int] Number of noise layers (2-4 typical).
 * @param lacunarity [float] Frequency multiplier per octave (2.0 typical).
 * @param gain [float] Amplitude multiplier per octave (0.5 typical).
 * @return [float] Combined noise value.
 */
function fbm(x, z, octaves, lacunarity, gain) {
    let value = 0, amplitude = 1, frequency = 1, maxAmp = 0;
    for (let i = 0; i < octaves; i++) {
        value += amplitude * noise2D(x * frequency, z * frequency);
        maxAmp += amplitude;
        amplitude *= gain;
        frequency *= lacunarity;
    }
    return value / maxAmp;  // Normalize to [-1, 1]
}

/**
 * @brief Registers a flat zone. Must be called BEFORE any entity spawning.
 * @param x [float] Zone center X in meters.
 * @param z [float] Zone center Z in meters.
 * @param radius [float] Zone radius in meters.
 */
function registerFlatZone(x, z, radius) {
    // Sample the terrain Y at the zone center BEFORE flattening
    const baseY = _rawGetGroundY(x, z);
    _flatZones.push({ x, z, radius, y: baseY });
}

/**
 * @brief Registers a keep-out zone. Entities check this before spawning.
 * @param x [float] Zone center X in meters.
 * @param z [float] Zone center Z in meters.
 * @param radius [float] Exclusion radius in meters.
 */
function registerKeepOut(x, z, radius) {
    _keepOuts.push({ x, z, radius });
}

/**
 * @brief Checks if a position is inside a keep-out zone.
 * @param x [float] Query X in meters.
 * @param z [float] Query Z in meters.
 * @return [boolean] True if position is within any keep-out zone.
 */
function inKeepOut(x, z) {
    for (const ko of _keepOuts) {
        const dx = x - ko.x, dz = z - ko.z;
        if (dx * dx + dz * dz < ko.radius * ko.radius) return true;
    }
    return false;
}

// Raw terrain without flat zones — used internally for flat zone Y sampling
function _rawGetGroundY(x, z) {
    const scale = 0.03;  // Noise frequency — 0.02-0.04 for rolling hills
    const amplitude = 5; // Maximum height variation in meters
    return fbm(x * scale, z * scale, 3, 2.0, 0.5) * amplitude;
}

/**
 * @brief Returns the terrain height at any world position.
 * @param x [float] World X coordinate in meters.
 * @param z [float] World Z coordinate in meters.
 * @return [float] Ground Y coordinate in meters.
 * @note Flat zones override the noise value within their radius.
 *       Call registerFlatZone() before any entity spawning.
 */
function getGroundY(x, z) {
    // Check flat zones first (higher priority)
    for (const fz of _flatZones) {
        const dx = x - fz.x, dz = z - fz.z;
        if (dx * dx + dz * dz < fz.radius * fz.radius) {
            return fz.y;  // Return the flat zone's fixed Y
        }
    }
    return _rawGetGroundY(x, z);
}
```

### 3.3 Ground Mesh

The ground mesh is a subdivided plane whose vertices are displaced by `getGroundY()`. For visual richness, it combines vertex-color biomes (large-scale color variation) with a procedural canvas texture (close-up detail).

```javascript
/**
 * @brief Constructs the ground plane with heightmap displacement and vertex colors.
 * @param scene [THREE.Scene] Target scene.
 * @param worldRadius [float] World radius in meters.
 */
function buildGround(scene, worldRadius) {
    const segments = 200;  // 200×200 = 40,000 vertices — adequate for smooth terrain
    const geo = new THREE.PlaneGeometry(worldRadius * 2, worldRadius * 2, segments, segments);
    geo.rotateX(-Math.PI / 2);  // Rotate from XY to XZ plane

    // Displace vertices by heightmap
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), z = pos.getZ(i);
        pos.setY(i, getGroundY(x, z));
    }
    geo.computeVertexNormals();  // Recompute normals after displacement

    // Procedural canvas texture (2048×2048)
    const texCanvas = document.createElement('canvas');
    texCanvas.width = 2048;
    texCanvas.height = 2048;
    const ctx = texCanvas.getContext('2d');
    // Paint base biome color patches, detail layers (mycelium, roots, moss, pebbles, leaf litter).
    // Each detail layer uses a different noise scale for natural variety.
    // Implementation is project-specific — see Appendix C for palette template.
    ctx.fillStyle = '#3a5f0b';
    ctx.fillRect(0, 0, 2048, 2048);
    // ... additional procedural detail painting ...

    const texture = new THREE.CanvasTexture(texCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;  // r172+ (omit for r128)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    const mat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 1.0,
        metalness: 0.0,
    });

    const ground = new THREE.Mesh(geo, mat);
    ground.receiveShadow = true;
    scene.add(ground);
}
```

**Shader uniform injection** for runtime effects (quest finale color transforms, player proximity glow). This is an advanced technique used in multi-file projects.

```javascript
// [MULTI-FILE] — inject custom uniforms via onBeforeCompile
mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = { value: 0 };
    shader.uniforms.uPlayerX = { value: 0 };
    shader.uniforms.uPlayerZ = { value: 0 };
    shader.uniforms.uTransform = { value: 0 };  // Quest finale blend factor
    // Modify fragment shader to use these uniforms for proximity-based color shifts
};
```

### 3.4 Sky Dome

A large inverted sphere (or hemisphere) textured with a procedural canvas. The canvas is painted once at init time — animated elements (shooting stars, twinkle) use separate meshes or GPU-driven attribute oscillation to avoid repainting.

```javascript
/**
 * @brief Constructs a procedural sky dome with stars, nebulae, and galaxy bands.
 * @param scene [THREE.Scene] Target scene.
 * @param skyRadius [float] Dome radius in meters (should be > world radius).
 */
function buildSkyDome(scene, skyRadius) {
    const skyGeo = new THREE.SphereGeometry(skyRadius, 64, 32);
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 2048;
    skyCanvas.height = 1024;
    const ctx = skyCanvas.getContext('2d');

    // Background gradient (dark horizon to darker zenith)
    const grad = ctx.createLinearGradient(0, 0, 0, 1024);
    grad.addColorStop(0, '#000510');
    grad.addColorStop(1, '#081020');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 2048, 1024);

    // Star field — varying brightness and subtle color variation
    // Use seeded RNG (§5.7) for deterministic star placement
    // ... project-specific star painting ...

    // Nebulae — soft gaussian blobs with colored tinting
    // Galaxy bands — elongated noise streaks
    // Constellation line segments — optional

    const skyTex = new THREE.CanvasTexture(skyCanvas);
    skyTex.colorSpace = THREE.SRGBColorSpace;  // r172+

    const skyMat = new THREE.MeshBasicMaterial({
        map: skyTex,
        side: THREE.BackSide,  // Render interior faces
    });

    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    scene.add(skyMesh);
}
```

### 3.5 Lighting Rig

A dual-source lighting setup is mandatory. Single-source lighting produces flat, unreadable scenes where depth perception fails. The hemisphere light provides ambient fill (sky color above, ground bounce below), and the directional light provides the key light with shadow casting.

```javascript
/**
 * @brief Initializes the lighting rig.
 * @param scene [THREE.Scene] Target scene.
 */
function initLighting(scene) {
    // Ambient fill — HemisphereLight provides sky/ground color gradient
    const hemiLight = new THREE.HemisphereLight(
        0x87CEEB,  // Sky color (use C.sky for themed scenes)
        0x3a5f0b,  // Ground bounce color (use C.ground)
        0.6        // Intensity
    );
    scene.add(hemiLight);

    // Key light — DirectionalLight with shadow casting
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(50, 100, 50);  // High angle sun/moon
    dirLight.castShadow = true;

    // Shadow camera frustum — MUST be configured explicitly.
    // Default frustum is too small and produces clipped shadows.
    dirLight.shadow.camera.left = -50;
    dirLight.shadow.camera.right = 50;
    dirLight.shadow.camera.top = 50;
    dirLight.shadow.camera.bottom = -50;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 200;
    dirLight.shadow.mapSize.set(2048, 2048);  // 2048 for desktop, 512 for mobile
    dirLight.shadow.bias = -0.001;            // Prevents shadow acne

    scene.add(dirLight);

    // Atmosphere — scene background and fog
    scene.background = new THREE.Color(C.sky);
    scene.fog = new THREE.FogExp2(C.fog, 0.01);
}
```

**Atmosphere presets.** Different simulation themes require different lighting and fog configurations. Select the appropriate preset at init time.

| Preset | Background | Fog Density | Hemi Intensity | Dir Intensity | Use Case |
|---|---|---|---|---|---|
| Daylight | `0x87CEEB` | 0.003 | 0.8 | 1.4 | Outdoor daytime |
| Dusk | `0x2a1a3a` | 0.006 | 0.4 | 0.6 | Golden hour |
| Night / Bioluminescent | `0x081018` | 0.01 | 0.15 | 0.3 | Dark worlds with glow |
| Void / Space | `0x000000` | 0 | 0.05 | 0 | Abstract / space |
| Fog Bank | `0x889999` | 0.02 | 0.6 | 0.4 | Dense fog |

### 3.6 Shadow Configuration

Shadow mapping is the most common source of visual artifacts in LLM-generated simulations. The three failure modes are shadow acne (Moiré patterns on lit surfaces), peter-panning (shadows detached from their casters), and frustum clipping (shadows disappear at the world edge).

**Shadow acne** is caused by self-shadowing due to depth buffer precision limits. Fix: `shadow.bias = -0.001`. If acne persists, try `-0.002`. Values below `-0.005` cause peter-panning.

**Peter-panning** is caused by excessive bias pushing shadows away from casters. Fix: reduce `shadow.bias` toward zero. If shadow acne returns, increase shadow map resolution instead.

**Frustum clipping** is caused by the shadow camera's frustum being smaller than the scene. Fix: set `shadow.camera.left/right/top/bottom` to cover the entire playable area, not just the area around the light.

### 3.7 Phase I Verification Gate

| # | Check | How to Verify |
|---|---|---|
| I-A | `getGroundY(0, 0)` returns a number | Function exists and returns float |
| I-B | Ground mesh is visible and oriented on XZ plane | Visual check — no mesh clipping through camera |
| I-C | Two light sources exist (hemisphere + directional) | `scene.children` includes both light types |
| I-D | Shadow map is configured with explicit frustum | `dirLight.shadow.camera.left` is set (not default -5) |
| I-E | Shadow bias is set | `dirLight.shadow.bias === -0.001` |
| I-F | Atmosphere (background + fog) is configured | `scene.background` and `scene.fog` are non-null |
| I-G | Flat zones registered before entity spawning | Registration calls precede entity make*() calls |
| I-H | Coordinate system comment is present | Comment block documenting Y-up, scale, origin |

**Failure mode if skipped:** Void State (objects without spatial reference), shadow acne, floating entities over flattened terrain, entities clipping into hillsides.

---

## §4 Phase 1.5: Input Controller

**Requires:** Animation loop skeleton (Phase 0).
**Provides:** `keys{}` state map, `getInputVector()`, pointer lock (optional).

Input handling is separated from physics for a critical reason: event handlers fire asynchronously and at unpredictable rates, while physics must integrate at a consistent time step. The rule is absolute: **handlers SET state, the physics loop READS state.** Any physics calculation inside an event handler produces frame-rate-dependent motion.

### 4.1 Key State Map

```javascript
/**
 * @brief Global keyboard state map. Keys are e.code values (physical layout).
 * @note Uses e.code (physical key position) not e.key (character, layout-dependent).
 *       This ensures WASD works correctly on AZERTY, Dvorak, and other layouts.
 */
const keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    // Prevent default for game keys to stop page scrolling
    if (['Space', 'ShiftLeft', 'ShiftRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD',
         'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
    }
});

window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

// CRITICAL: Reset all keys on window blur (alt-tab, focus loss).
// Without this, keys stuck in the "down" state cause the player to
// walk forever after returning to the tab.
window.addEventListener('blur', () => {
    Object.keys(keys).forEach(k => keys[k] = false);
});
```

### 4.2 Input Polling

The input vector is computed once per frame in the physics update, not in the event handler. This function translates the binary key state map into a world-space movement vector.

```javascript
/**
 * @brief Computes the movement vector from current keyboard state.
 * @return [THREE.Vector3] Normalized direction vector scaled by movement speed.
 * @note Diagonal movement is normalized to prevent the classic "diagonal speed boost"
 *       where moving diagonally is sqrt(2) times faster than moving on-axis.
 */
// Pre-allocated — never allocate in the hot path
const _inputDir = new THREE.Vector3();

function getInputVector() {
    _inputDir.set(0, 0, 0);
    if (keys['KeyW'] || keys['ArrowUp'])    _inputDir.z -= 1;
    if (keys['KeyS'] || keys['ArrowDown'])  _inputDir.z += 1;
    if (keys['KeyA'] || keys['ArrowLeft'])  _inputDir.x -= 1;
    if (keys['KeyD'] || keys['ArrowRight']) _inputDir.x += 1;

    if (_inputDir.lengthSq() > 0) _inputDir.normalize();

    const speed = (keys['ShiftLeft'] || keys['ShiftRight'])
        ? MOVE_SPEED * SPRINT_MULT
        : MOVE_SPEED;

    return _inputDir.multiplyScalar(speed);
}
```

### 4.3 First-Person Mouse Look (Pointer Lock)

For first-person simulations, mouse movement controls camera yaw (horizontal) and pitch (vertical). Pointer Lock API captures the cursor so the mouse does not leave the window.

```javascript
/**
 * @brief First-person mouse look with Pointer Lock API.
 * @note Pointer Lock requires a user gesture (click) to activate.
 *       The mousemove handler only fires while the pointer is locked.
 */
let yaw = 0, pitch = 0;
const MOUSE_SENS = 0.002;
const PITCH_LIMIT = Math.PI / 2 - 0.05;  // Prevent gimbal lock at poles

renderer.domElement.addEventListener('click', () => {
    renderer.domElement.requestPointerLock();
});

document.addEventListener('mousemove', (e) => {
    if (document.pointerLockElement !== renderer.domElement) return;
    yaw -= e.movementX * MOUSE_SENS;
    pitch -= e.movementY * MOUSE_SENS;
    pitch = Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, pitch));
});

// Apply yaw/pitch to camera in the animation loop (AFTER physics, BEFORE render):
// camera.rotation.order = 'YXZ';
// camera.rotation.set(pitch, yaw, 0);
```

### 4.4 Touch/Mobile Input

For mobile-aware simulations, provide virtual joystick zones. The left half of the screen maps to movement; the right half maps to look. Implementation is project-specific, but the principle is identical: touch handlers SET state, physics loop READS state.

```javascript
// Conceptual structure — not a complete implementation
const touchState = { moveX: 0, moveZ: 0, lookX: 0, lookY: 0 };

renderer.domElement.addEventListener('touchmove', (e) => {
    for (const touch of e.changedTouches) {
        if (touch.clientX < window.innerWidth / 2) {
            // Left side: movement
            touchState.moveX = (touch.clientX - touchOriginX) / 50;
            touchState.moveZ = (touch.clientY - touchOriginY) / 50;
        } else {
            // Right side: look
            touchState.lookX = touch.clientX - touchPrevX;
            touchState.lookY = touch.clientY - touchPrevY;
        }
    }
});
```

### 4.5 Phase 1.5 Verification Gate

| # | Check | How to Verify |
|---|---|---|
| 1.5-A | `keys{}` object exists and responds to keydown/keyup | Press a key, verify `keys['KeyW'] === true` |
| 1.5-B | `getInputVector()` returns a THREE.Vector3 | Call and verify return type |
| 1.5-C | Diagonal normalization active | Hold W+D simultaneously, verify `inputDir.length() ≈ 1.0` |
| 1.5-D | Blur handler resets all keys | Alt-tab and return, verify no stuck movement |
| 1.5-E | `preventDefault` on game keys | Press Space, verify page does not scroll |
| 1.5-F | No physics calculations in any event handler | Code review — handlers only SET boolean state |

**Failure mode if skipped:** Player movement at inconsistent speeds across different frame rates (physics in event handler), diagonal speed boost, stuck keys after alt-tab, page scrolling on Space press.

---

## §5 Phase II: Asset Factory

**Requires:** `scene`, `getGroundY()`, constants/colors (Phase 0 + I).
**Provides:** `GEO` pool, `MAT` pool, `C` palette, `sr()` seeded RNG, entity `make*()` functions, Actor API contract.

The Asset Factory defines how every visual entity is constructed. Two failure modes originate here: **Primitive Collapse** (actors rendered as featureless cubes or spheres because the LLM took a geometric shortcut) and **GPU memory exhaustion** (unique geometry/material allocated per instance instead of shared). This phase prevents both through mandatory construction rules and pooling patterns.

### 5.1 Compound Primitive Rule

Every actor is a `THREE.Group` containing multiple child meshes. The minimum child count depends on the actor category. An actor with fewer primitives than the minimum is visually unacceptable and constitutes a protocol violation.

| Actor Category | Minimum Primitives | Rationale | Examples |
|---|---:|---|---|
| Simple prop | 3 | Barrel needs body + rim + lid minimum | Barrel, crate, tree stump, rock |
| Tree / plant | 4 | Trunk + canopy + root flare + detail | Oak, pine, mushroom, fern |
| Vehicle | 10 | Body + cabin + 4 wheels + bumpers + details | Car, truck, cart |
| Humanoid | 12 | Torso + head + 2 arms + 2 legs + hands + feet | Person, robot, skeleton |
| Creature | 8 | Body + head + limbs + tail/wings + eyes | Bird, deer, fish, jellyfish |
| Structure | 6 | Walls + roof + door + windows + foundation | House, tower, bridge |

A car as a single `BoxGeometry` is **prohibited**. A bird as a single `ConeGeometry` is **prohibited**. These are the most common LLM failure modes and represent the protocol's namesake "Primitive Collapse."

### 5.2 Decomposition Process

When building a new actor type, follow this 5-step process to prevent defaulting to minimum-viable geometry.

**Step 1 — Anatomical inventory.** List 5–8+ functional sub-regions of the real-world object. For a bird: head, beak, torso, left wing, right wing, tail fan, legs, eyes. Do not skip this step. Writing the list first prevents the common failure of starting with a torso and then "running out of patience" for extremities.

**Step 2 — Primitive selection per region.** Map each region to the simplest Three.js primitive that approximates its shape.

| Shape Class | Three.js Primitive | Use For |
|---|---|---|
| Flat / boxy | `BoxGeometry` | Torsos, crates, walls, wings (thin box) |
| Cylindrical | `CylinderGeometry` | Limbs, tree trunks, pipes, barrels |
| Round / organic | `SphereGeometry` | Heads, eyes, boulders, bubbles |
| Tapered | `ConeGeometry` | Beaks, horns, spires, treetops |
| Elongated round | `CylinderGeometry` (r128) or `CapsuleGeometry` (r172+) | Torsos, smooth limbs |
| Toroidal | `TorusGeometry` | Rings, wheels, halos |
| Irregular | Merged geometry or displaced sphere | Rocks, coral, clouds |

**Step 3 — Scale from reference.** Determine the largest dimension of the actor in meters first (e.g., a sedan is 4.5m long). Then derive all child dimensions as proportions of the parent. This anchors the model to the world's meter-scale convention and prevents "toy scale" perception.

**Step 4 — Symmetry exploitation.** Build one side, then position-mirror the other. For a bird, build the left wing pivot group, then create the right wing by cloning and negating the X position. This ensures symmetry and halves the construction work.

**Step 5 — Hierarchical assembly.** Assemble from leaf to root: child meshes → pivot groups → sub-assemblies → root group → scene. Apply world positions only to the root group. All locomotion moves the root group; child positions are local offsets that never change during runtime.

```
Assembly order (bird example):
  eyeMesh → headGroup
  beakMesh → headGroup
  headGroup → bodyGroup
  wingMeshL → wingPivotL → bodyGroup
  wingMeshR → wingPivotR → bodyGroup
  tailMesh → bodyGroup
  legMeshL → bodyGroup
  legMeshR → bodyGroup
  bodyGroup (root) → scene
```

### 5.3 Shared Geometry Pool (GEO)

Never create standard geometries per instance. A shared pool of unit-scale primitives is created once at init time and reused via `mesh.scale.set()`. This reduces GPU memory by eliminating duplicate vertex buffers.

```javascript
/**
 * @brief Shared geometry pool. Created once, shared across all entities.
 * @note All geometries are unit scale (radius 1, height 1, etc.).
 *       Scale via mesh.scale.set(sx, sy, sz) at construction time.
 */
const GEO = {
    box:        new THREE.BoxGeometry(1, 1, 1),
    sphere8:    new THREE.SphereGeometry(1, 8, 6),     // Low-poly — distant objects, particles
    sphere16:   new THREE.SphereGeometry(1, 16, 12),   // Medium — heads, eyes, boulders
    sphere32:   new THREE.SphereGeometry(1, 32, 24),   // High — hero objects, close-up
    cylinder:   new THREE.CylinderGeometry(1, 1, 1, 8),
    cone:       new THREE.ConeGeometry(1, 1, 8),
    torus:      new THREE.TorusGeometry(1, 0.3, 8, 16),
    plane:      new THREE.PlaneGeometry(1, 1),
};
```

**Scale-from-pool example:** A tree trunk that is 0.3m radius and 4m tall:
```javascript
const trunk = new THREE.Mesh(GEO.cylinder, matBark);
trunk.scale.set(0.3, 4, 0.3);  // sx=radius, sy=height, sz=radius
trunk.position.y = 2;           // Raise by half height (cylinder origin is center)
```

### 5.4 Entity Builder Pattern

Every entity type exports a `make*()` function (multi-file) or follows the same pattern inline (single-file). The function returns a flat metadata object — not a class instance. This is the functional style mandated by TEP v5.2 §IV.

```javascript
/**
 * @brief Constructs a tree entity at the specified world position.
 * @param x [float] World X coordinate in meters.
 * @param z [float] World Z coordinate in meters.
 * @return [Object] Entity metadata: { group, x, z, mat, phase, speed, type }.
 * @note Position is sampled from getGroundY() — flat zones must be registered first.
 */
function makeTree(x, z) {
    const group = new THREE.Group();

    // Trunk
    const trunk = new THREE.Mesh(GEO.cylinder, MAT.bark);
    trunk.scale.set(0.3, 4, 0.3);
    trunk.position.y = 2;
    trunk.castShadow = true;
    group.add(trunk);

    // Canopy
    const canopy = new THREE.Mesh(GEO.sphere16, MAT.leaf);
    canopy.scale.set(2.5, 3, 2.5);
    canopy.position.y = 5;
    canopy.castShadow = true;
    group.add(canopy);

    // Root flare
    const roots = new THREE.Mesh(GEO.cone, MAT.bark);
    roots.scale.set(0.8, 0.6, 0.8);
    roots.position.y = 0.3;
    group.add(roots);

    // Detail: small knot on trunk
    const knot = new THREE.Mesh(GEO.sphere8, MAT.bark);
    knot.scale.set(0.15, 0.12, 0.1);
    knot.position.set(0.25, 2.5, 0);
    group.add(knot);

    // Position in world
    const y = getGroundY(x, z);
    group.position.set(x, y, z);

    // Variation via seeded RNG
    const scaleVar = 0.7 + sr() * 0.6;  // 0.7–1.3 size variation
    group.scale.setScalar(scaleVar);
    group.rotation.y = sr() * Math.PI * 2;  // Random rotation

    return {
        group, x, z,
        mat: canopy.material,   // Reference for runtime glow modulation
        phase: sr() * Math.PI * 2,  // Desynchronize animation
        speed: 0.5 + sr() * 0.5,    // Animation speed variation
        type: 'tree',
    };
}
```

**Rules for entity builders:**
- Return flat objects, not class instances.
- Keep material references on the returned object for runtime modulation (emissive intensity, color).
- Use seeded RNG (`sr()`) for all variation — never `Math.random()`. See §5.7.
- Position the root group via `group.position.set()`. Never position child meshes in world space.
- Sample `getGroundY(x, z)` for the Y position. Do not hardcode `y = 0`.

### 5.5 Materials Convention

```javascript
/**
 * @brief Shared material pool. Created once, shared across all same-type entities.
 * @note Use MeshStandardMaterial for all lit objects. MeshBasicMaterial is only
 *       for unlit elements (sky dome, HUD overlays, debug wireframes).
 */
const MAT = {
    bark:   new THREE.MeshStandardMaterial({ color: C.bark,  roughness: 0.8, metalness: 0.0 }),
    leaf:   new THREE.MeshStandardMaterial({ color: C.leaf,  roughness: 0.7, metalness: 0.0 }),
    metal:  new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.3, metalness: 0.8 }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9, metalness: 0.0 }),
    glass:  new THREE.MeshStandardMaterial({ color: 0x88ccff, roughness: 0.1, transparent: true, opacity: 0.35 }),
    skin:   new THREE.MeshStandardMaterial({ color: 0xc68642, roughness: 0.7, metalness: 0.0 }),
};
```

**Material rules:**

1. **Share materials** across same-type entities. Never create per-instance materials. 100 trees = 1 `matBark` shared, not 100 material objects.

2. **Clone for individual modulation.** If an entity needs its own emissive intensity (e.g., a crystal that pulses independently), clone the material once and store the reference: `const mat = MAT.crystal.clone(); entityObj.mat = mat;`

3. **`depthWrite: false`** for all transparent, glow, and haze effects. Without this, transparent objects create invisible "holes" in the depth buffer that hide objects behind them.

4. **Prefer `MeshStandardMaterial` with `emissive` + `emissiveIntensity`** over `MeshBasicMaterial` for glowing objects that should contribute to bloom post-processing. `MeshBasicMaterial` ignores the lighting pipeline entirely — it will glow but won't interact with bloom.

5. **`emissiveIntensity` range: 0.3–2.0.** Values below 0.3 are invisible in bloom. Values above 2.0 cause bloom blowout (white halo larger than the object).

### 5.6 Color Palette (C Object)

All colors are defined in a single `C` (Color) object. This is not a suggestion — it is a hard requirement mandated by TEP v5.2 §IV ("Colors from constants objects, never inline hex"). Inline hex values (e.g., `color: 0xff0000`) are prohibited in entity code.

**Rationale:** A centralized palette enables global color swaps (day → night), theme transitions (quest finale color transforms), and consistent visual identity. Finding and replacing scattered hex values across 60+ files is error-prone and incomplete.

```javascript
/**
 * @brief Global color palette. Single source of truth for all colors.
 * @note Naming convention: [entity][part] in camelCase.
 *       Examples: jellyBell, jellyGlow, jellyTent, deerBody, deerGlow.
 */
const C = {
    // ── Environment ────────────────────────────
    sky:        0x081018,
    fog:        0x060c14,
    ground:     0x3a5f0b,
    water:      0x1a3350,

    // ── Flora ──────────────────────────────────
    bark:       0x5a4030,
    leaf:       0x1a4820,
    leafGlow:   0x44ffaa,
    mushCap:    0x8844aa,
    mushGlow:   0xcc88ff,
    moss:       0x2a5a20,
    flower:     0xff6688,

    // ── Fauna ──────────────────────────────────
    deerBody:   0xb08860,
    deerGlow:   0x88ddaa,
    jellyBell:  0x4488cc,
    jellyGlow:  0x66ccff,
    jellyTent:  0x3366aa,
    mothBody:   0xccaa77,
    mothWing:   0xeeddaa,

    // ── Quest / Interactive ────────────────────
    orbCore:    0xffffff,
    orbGlow:    0x44ddff,
    laserBeam:  0xff4444,
    obelisk:    0x334455,
    finaleFlash: 0xffffff,

    // ── Sky / Celestial ────────────────────────
    starDim:    0x666688,
    starBright: 0xddddff,
    nebula:     0x442266,
    galaxy:     0x885599,
};
```

### 5.7 Seeded Random Number Generator

**Mandatory.** All procedural generation uses seeded RNG. `Math.random()` is prohibited in entity construction, terrain generation, and placement logic. This is required by TEP v5.2 §IV ("Seeded RNG for procedural generation — reproducibility").

**Rationale:** Seeded RNG produces identical worlds across page reloads. Without it, every reload produces a different entity layout, making debugging impossible ("the bug only happens sometimes" becomes "the bug happens at seed 42 with the tree at position 87, -23").

```javascript
/**
 * @brief Linear Congruential Generator for seeded random numbers.
 * @note Compatible with all Three.js versions including r128 where
 *       THREE.MathUtils.seededRandom() is unavailable.
 * @warning Not cryptographically secure. Adequate for procedural generation.
 */
let _seed = 12345;  // Default seed — override via setSeed()

/**
 * @brief Sets the global RNG seed. Call once before any entity construction.
 * @param s [int] Seed value. Any positive integer.
 */
function setSeed(s) { _seed = s; }

/**
 * @brief Returns the next pseudo-random number in [0, 1).
 * @return [float] Pseudo-random value.
 */
function sr() {
    _seed = (_seed * 16807 + 0) % 2147483647;  // Park-Miller LCG
    return (_seed - 1) / 2147483646;
}

/**
 * @brief Returns a pseudo-random float in [min, max).
 * @param min [float] Lower bound (inclusive).
 * @param max [float] Upper bound (exclusive).
 * @return [float] Random value in range.
 */
function srRange(min, max) {
    return min + sr() * (max - min);
}

/**
 * @brief Returns a pseudo-random integer in [min, max].
 * @param min [int] Lower bound (inclusive).
 * @param max [int] Upper bound (inclusive).
 * @return [int] Random integer in range.
 */
function srInt(min, max) {
    return Math.floor(min + sr() * (max - min + 1));
}
```

**Enforcement rule:** During the post-generation verification pass (§12.3), search the entire codebase for `Math.random()`. Any occurrence outside of audio noise buffer generation (which requires true randomness for non-repeating noise) is a protocol violation.

### 5.8 Instancing Strategy

Individual `THREE.Group` objects are acceptable for low-count entities but cause draw call explosion at scale. The instancing strategy is tiered by instance count.

| Instance Count | Strategy | Draw Calls Per Type | Notes |
|---|---|---:|---|
| 1–10 | Individual `THREE.Group` | 3–10 per instance | Simple, full animation per instance |
| 10–50 | Consider `InstancedMesh` | 1 per mesh category | Break even on overhead |
| 50+ | **Mandatory `InstancedMesh`** | 1 per mesh category | Critical for draw call budget |
| 500+ | `InstancedMesh` + LOD + visibility culling | 1 per mesh category per LOD tier | Required for mobile |

#### Template Instancing for Diverse Entities

When many instances must look different (e.g., 500 trees with 10 visual variants), use the template instancing pattern: create N template designs, and use `InstancedMesh` for each template. Each template's mesh categories (trunk, canopy, glow, detail) are separate `InstancedMesh` objects.

```
Example: 500 trees with 10 visual templates
  10 templates × 4 mesh categories (trunk, canopy, glow, detail) = 40 InstancedMesh objects
  Each template holds ~50 instances
  Total draw calls: ~40 (not 500 × 4 = 2,000)
```

#### Geometry Merging for Templates [MULTI-FILE]

When a template has multiple mesh categories that do not need independent animation, merge them into a single geometry to reduce draw calls further.

```javascript
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// CRITICAL: Normalize indexed/non-indexed before merging.
// Mixed indexed + non-indexed geometries cause a silent failure in mergeGeometries().
const parts = [
    trunkGeo.toNonIndexed(),
    canopyGeo.toNonIndexed(),
];
// Ensure all parts have the same attribute set (position, normal, color).
// Remove UV attributes if inconsistent between parts.
const merged = mergeGeometries(parts);
```

### 5.9 LOD System

For high-count entities (50+), implement distance-based Level of Detail (LOD) tiers. LOD is managed per-frame in the director loop by computing squared distance to the player and adjusting what is rendered.

| Tier | Distance from Player | Rendering Strategy |
|---|---|---|
| 0 (Full) | < 20m | Full detail mesh + per-frame animation + shadows |
| 1 (Reduced) | 20–70m | Fewer child meshes, simplified animation, no shadows |
| 2 (Billboard) | 70–110m | Sprite impostor or single merged mesh, no animation |
| 3 (Culled) | > 110m | `visible = false` — completely skipped |

**Critical performance rule:** When an entity is at Tier 3 (`visible = false`), skip ALL updates for that entity — not just rendering, but animation, AI, physics, and glow calculations. The `continue` statement in the director loop (§7.3) must fire before any computation occurs.

### 5.10 Points-Based Particle Pool (High-Count Alternative)

For particle counts exceeding 200, individual `THREE.Mesh` objects become expensive. The Points-based pool uses `THREE.Points` with `BufferGeometry` and pre-allocated `Float32Array` attributes — a single draw call handles the entire pool regardless of particle count.

```javascript
/**
 * @brief High-count particle pool using THREE.Points geometry.
 * @note Single draw call for the entire pool. Pre-allocated buffers never resize.
 *       Particle state lives in a parallel JavaScript array; buffer is updated per-frame.
 */
const POOL = 500;
let pointsMesh = null;
const particles = [];

function initParticleSystem(scene) {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(POOL * 3);
    const sizes = new Float32Array(POOL);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geo.attributes.position.setUsage(THREE.DynamicDrawUsage);  // Tell GPU to expect updates

    const mat = new THREE.PointsMaterial({
        size: 0.2,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,          // ALWAYS for transparent particles
        sizeAttenuation: true,      // Size decreases with distance
    });

    pointsMesh = new THREE.Points(geo, mat);
    scene.add(pointsMesh);
}

function spawnParticle(x, y, z, lifetime) {
    let slot = particles.find(p => p.life <= 0);
    if (!slot) {
        if (particles.length >= POOL) return;  // Pool full — do not grow
        slot = { idx: particles.length, life: 0 };
        particles.push(slot);
    }
    slot.x = x; slot.y = y; slot.z = z;
    slot.vx = 0; slot.vy = 0; slot.vz = 0;
    slot.life = lifetime;
    slot.maxLife = lifetime;
}

function updateParticleSystem(dt) {
    const pos = pointsMesh.geometry.attributes.position.array;
    let active = 0;
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.life <= 0) continue;
        p.life -= dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        pos[active * 3]     = p.x;
        pos[active * 3 + 1] = p.y;
        pos[active * 3 + 2] = p.z;
        active++;
    }
    pointsMesh.geometry.attributes.position.needsUpdate = true;
    pointsMesh.geometry.setDrawRange(0, active);  // Only render active particles
    return active;
}
```

**When to use Points vs. Mesh pools:**

| Particle Count | Pool Type | Draw Calls | Per-Particle Features |
|---|---|---|---|
| < 200 | Mesh-based (§6.5) | 1 per particle | Individual rotation, scale, opacity, shadow |
| 200–5,000 | Points-based (§5.10) | 1 total | Size, position only. No rotation or shadow. |
| 5,000+ | InstancedMesh | 1 total | Full transform, per-instance color |

### 5.11 GPU Shader Animation (Zero CPU Cost)

For very high-count entities that follow simple animation patterns (grass swaying, leaves fluttering), push the animation entirely to the vertex shader. This produces zero CPU cost per instance — all computation happens on the GPU.

```javascript
/**
 * @brief GPU-animated grass using vertex shader displacement.
 * @note 1,200 grass patches with 38-67 blades each. Zero CPU animation cost.
 *       Wind sway computed entirely in the vertex shader using uTime and uWindX/Z uniforms.
 */
const grassMat = new THREE.MeshStandardMaterial({ /* ... */ });

grassMat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = { value: 0 };
    shader.uniforms.uWindX = { value: 0 };
    shader.uniforms.uWindZ = { value: 0 };
    shader.uniforms.uGlowMult = { value: 1.0 };  // For zone dimming

    // Inject displacement into the vertex shader:
    // Blade tips sway based on world position + time + wind direction.
    // The sway amount is proportional to the vertex's Y height (base stays fixed, tips move).
    shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        float sway = sin(transformed.x * 0.5 + uTime * 2.0 + uWindX) * 0.15 * transformed.y;
        transformed.x += sway;
        transformed.z += sin(transformed.z * 0.4 + uTime * 1.7 + uWindZ) * 0.1 * transformed.y;`
    );
};

// Per-frame: only update uniforms (trivial cost)
// grassMat.userData.shader.uniforms.uTime.value = t;
// grassMat.userData.shader.uniforms.uWindX.value = windX;
```

**Candidates for GPU animation:** grass, leaves, surface water ripples, flag/banner cloth, hair/fur strands — anything with many instances following a shared mathematical pattern based on position and time.

### 5.10 Actor API Contract [SINGLE-FILE CLASS PATTERN]

For single-file simulations that use class syntax, every actor class must expose this API. The Director (Phase IV) calls these methods — actors never call them on themselves and never reference game state or other actors.

```javascript
/**
 * @brief Base contract for all actor types.
 * @note Actors are "dumb muscles" — they expose methods but do not make decisions.
 *       The Director tells actors what to do. Actors never branch on game state.
 */
class ActorBase {
    constructor(scene) {
        this.mesh = new THREE.Group();  // Root group — all locomotion applied here
        this.velocity = new THREE.Vector3();
        this.grounded = true;
        scene.add(this.mesh);
    }

    /**
     * @brief Per-frame animation update. Called by Director.
     * @param dt [float] Delta time in seconds.
     */
    update(dt) {
        // Override in subclass: procedural animation, glow pulsing, etc.
    }

    /**
     * @brief Returns actor's world position.
     * @return [THREE.Vector3] World-space position.
     * @note Use this for spawn origin, distance checks, and audio spatial calculations.
     *       Do NOT use this.mesh.position directly — it may be a local offset.
     */
    getWorldPosition() {
        const p = new THREE.Vector3();
        this.mesh.getWorldPosition(p);
        return p;
    }

    /**
     * @brief Cleans up GPU resources. Call when actor is permanently removed.
     */
    dispose() {
        this.mesh.traverse(child => {
            if (child.isMesh) {
                child.geometry.dispose();
                child.material.dispose();
            }
        });
    }
}
```

**In multi-file projects,** the entity builder pattern (§5.4) replaces classes. The `make*()` function returns a flat object, and update logic lives in the director as standalone functions.

### 5.11 Phase II Verification Gate

| # | Check | How to Verify |
|---|---|---|
| II-A | GEO pool is defined with shared geometries | `GEO.box`, `GEO.sphere16`, etc. exist |
| II-B | MAT pool is defined with shared materials | `MAT.bark`, `MAT.leaf`, etc. exist |
| II-C | C palette contains all project colors | No inline hex values (`0x______`) in entity code |
| II-D | `sr()` seeded RNG is defined and used | Search for `Math.random()` — should be absent in entity code |
| II-E | Every actor has ≥ minimum primitives for its category | Count children per §5.1 table |
| II-F | All entity positions sample `getGroundY()` | No hardcoded `y = 0` in entity placement |
| II-G | Entities with 50+ instances use InstancedMesh | Review instance counts vs. strategy table |
| II-H | Materials shared, not per-instance | Verify material reference equality across instances |
| II-I | No `new THREE.BufferGeometry()` or `new THREE.Material()` in animation loop | Code review — all construction at init time |

**Failure modes if violated:**
- Primitive Collapse: actors are featureless geometric shapes (§5.1 violated).
- GPU memory exhaustion: per-instance geometry/material allocation (§5.3, §5.5 violated).
- Non-deterministic worlds: `Math.random()` used instead of `sr()` (§5.7 violated).
- Draw call budget exceeded: 500+ individual Groups instead of InstancedMesh (§5.8 violated).

---

## §6 Phase III: Kinematic Kernel

**Requires:** `getGroundY()`, `getInputVector()`, Actor API, constants (Phase I + 1.5 + II).
**Provides:** `updatePlayer()`, physics profiles, collision system, `ParticlePool`, creature physics models.

The Kinematic Kernel governs everything that moves. The cardinal rule of this phase is simple and absolute: **ALL motion must be scaled by `dt` (delta time).** A position change without `* dt` is frame-rate-dependent — it runs twice as fast at 120 FPS as it does at 60 FPS. This is the "Animation-Physics Entanglement" failure mode, and it is the second most common LLM-generated bug after CapsuleGeometry on r128.

### 6.1 Core Rule: ALL Motion × dt

Every line of code that modifies a position, velocity, rotation, or any time-varying quantity must include `* dt`. There are zero exceptions.

```javascript
// ✓ CORRECT — frame-rate independent
actor.mesh.position.addScaledVector(actor.velocity, dt);
actor.velocity.y -= GRAVITY * dt;
actor.mesh.rotation.y += rotSpeed * dt;
particle.life -= dt;

// ✗ PROHIBITED — frame-rate dependent
actor.mesh.position.add(actor.velocity);        // Missing * dt
actor.mesh.position.y -= 0.1;                    // Constant per frame
actor.mesh.rotation.y += 0.01;                   // Constant per frame
particle.life -= 0.016;                           // Hardcoded frame time
```

**Verification method:** Search the entire codebase for `.position.` and `.rotation.` modifications. Every occurrence must include `dt` in the same expression or be a one-time initialization (not in the animation loop).

### 6.2 Player Controller

The player controller is a velocity-based physics integration with gravity, ground drag, air drag, jump impulse, head bob, and landing cushion. It runs once per frame in the animation loop, after input polling and before the director.

```javascript
/**
 * @brief Player state. Position, velocity, and grounded flag.
 * @note pos.y is the player's feet Y, not eye Y. Camera adds EYE_H offset.
 */
const player = {
    pos: new THREE.Vector3(0, 0, 0),
    vel: new THREE.Vector3(),
    onGround: true,
    headBobPhase: 0,
    headBobY: 0,
    landingDip: 0,
    lastFallVel: 0,
};

// Pre-allocated temporary vectors — no allocations in the hot path
const _moveDir = new THREE.Vector3();
const _forward = new THREE.Vector3();
const _right = new THREE.Vector3();

/**
 * @brief Updates player physics: movement, gravity, jump, ground collision, head bob.
 * @param dt [float] Delta time in seconds (capped at 0.1).
 * @warning This function modifies player.pos directly. Camera position must be
 *          updated AFTER this function and BEFORE render.
 */
function updatePlayer(dt) {
    // 1. Read input and compute world-space movement direction
    const input = getInputVector();  // Returns pre-normalized vector scaled by speed

    // For first-person: rotate input by camera yaw
    _forward.set(-Math.sin(yaw), 0, -Math.cos(yaw));
    _right.set(_forward.z, 0, -_forward.x);
    _moveDir.set(0, 0, 0);
    _moveDir.addScaledVector(_right, input.x);
    _moveDir.addScaledVector(_forward, -input.z);  // -z because input.z is inverted

    // 2. Apply horizontal movement
    player.vel.x = _moveDir.x;
    player.vel.z = _moveDir.z;

    // 3. Gravity
    if (!player.onGround) {
        player.vel.y -= GRAVITY * dt;
    }

    // 4. Jump
    if (keys['Space'] && player.onGround) {
        player.vel.y = JUMP_IMPULSE;
        player.onGround = false;
    }

    // 5. Integrate position
    player.pos.addScaledVector(player.vel, dt);

    // 6. Ground collision
    const groundY = getGroundY(player.pos.x, player.pos.z);
    if (player.pos.y <= groundY) {
        // Landing detection — compute dip from fall velocity
        if (!player.onGround && player.vel.y < -2) {
            player.landingDip = Math.min(Math.abs(player.vel.y) * 0.02, 0.15);
        }
        player.pos.y = groundY;
        player.vel.y = 0;
        player.onGround = true;
    } else {
        player.onGround = false;
    }

    // 7. Ground drag (decelerates when input stops)
    if (player.onGround) {
        player.vel.x *= GROUND_DRAG;
        player.vel.z *= GROUND_DRAG;
    } else {
        player.vel.x *= AIR_DRAG;
        player.vel.z *= AIR_DRAG;
    }

    // 8. Head bob — sine wave tied to movement speed
    const moveSpeed = Math.sqrt(player.vel.x * player.vel.x + player.vel.z * player.vel.z);
    if (moveSpeed > 0.5 && player.onGround) {
        player.headBobPhase += moveSpeed * dt * 2;
        player.headBobY = Math.sin(player.headBobPhase) * 0.06;
        // Footstep sound trigger at zero-crossings of the sine wave
        // if (Math.sin(player.headBobPhase) > 0 && Math.sin(player.headBobPhase - moveSpeed * dt * 2) <= 0) {
        //     playFootstep();  // Audio callback — see §8.4
        // }
    } else {
        player.headBobY *= 0.9;  // Decay to zero when stationary
    }

    // 9. Landing cushion — exponential decay of the downward dip
    player.landingDip *= 0.88;  // Decay factor — adjust for feel

    // 10. Camera position (first-person)
    camera.position.set(
        player.pos.x,
        player.pos.y + EYE_H + player.headBobY - player.landingDip,
        player.pos.z
    );
    camera.rotation.order = 'YXZ';
    camera.rotation.set(pitch, yaw, 0);

    // 11. Entity collision (radius-based push-out)
    resolveCollisions(player);

    // 12. World boundary enforcement
    const distFromCenter = Math.sqrt(player.pos.x * player.pos.x + player.pos.z * player.pos.z);
    if (distFromCenter > WORLD_R - 2) {
        const angle = Math.atan2(player.pos.z, player.pos.x);
        player.pos.x = Math.cos(angle) * (WORLD_R - 2);
        player.pos.z = Math.sin(angle) * (WORLD_R - 2);
    }
}
```

### 6.3 Physics Profiles

Different entity types have different physics feel. Heavy objects slam down fast with little drag. Light objects float and flutter. These profiles are defined in the constants module and referenced by type string.

```javascript
/**
 * @brief Physics profile lookup. Used by ParticlePool and creature physics.
 * @note Gravity values are tuned for game feel, not physical accuracy.
 *       Real gravity is 9.8 m/s². HUMAN uses 15 for snappier jump arcs.
 */
const PHYS = {
    HUMAN:    { gravity: 15.0, drag: 0.85, airDrag: 0.98 },   // Player, humanoid NPCs
    HEAVY:    { gravity: 40.0, drag: 0.95, airDrag: 1.00 },   // Rocks, debris, impacts
    LIGHT:    { gravity: 2.0,  drag: 0.80, airDrag: 0.95 },   // Feathers, spores, dust
    STANDARD: { gravity: 9.8,  drag: 0.90, airDrag: 0.99 },   // Default fallback
    FLOAT:    { gravity: 0.5,  drag: 0.70, airDrag: 0.90 },   // Bubbles, embers, fireflies
};
```

**Square-Cube Law for animation speed tuning:** Large objects must move and accelerate slower than small objects to feel massive. A 50-meter dragon that flaps at the same frequency as a 1-meter bird looks like a toy. Scale animation frequencies inversely with the cube root of the object's volume. This is a perceptual rule, not a physics equation, but it governs visual believability.

### 6.4 Collision System

Radius-based push-out collision. No physics engines needed. Each collidable entity (tree, rock, structure) exposes an `x`, `z`, and `radius` on its metadata object. The collision resolver iterates all collidables and pushes the player out of any overlapping radius.

```javascript
/**
 * @brief Resolves player-entity collisions via radius-based push-out.
 * @param player [Object] Player state with pos property.
 * @note Always uses squared distance for the initial check.
 *       Math.sqrt() is only called for entities that actually collide.
 */
function resolveCollisions(player) {
    for (const entity of collidables) {
        const dx = player.pos.x - entity.x;
        const dz = player.pos.z - entity.z;
        const d2 = dx * dx + dz * dz;
        const r2 = entity.radius * entity.radius;

        if (d2 < r2 && d2 > 0.0001) {  // Inside collision radius
            const d = Math.sqrt(d2);  // Only compute sqrt for actual collisions
            const nx = dx / d;
            const nz = dz / d;
            // Push player to the edge of the collision radius
            player.pos.x = entity.x + nx * entity.radius;
            player.pos.z = entity.z + nz * entity.radius;
            // Zero velocity in the push direction to prevent jitter
            const vDot = player.vel.x * nx + player.vel.z * nz;
            if (vDot < 0) {
                player.vel.x -= vDot * nx;
                player.vel.z -= vDot * nz;
            }
        }
    }
}
```

**Performance note:** The `collidables` array should contain only entities within the player's general vicinity. For large worlds, use a spatial hash or simply filter by squared distance before iterating. The full collision loop should check ≤100 entities per frame.

### 6.5 Particle Pool

Particles are pre-allocated at init time. **Never** allocate `new THREE.Mesh()` during gameplay — this is a hard rule. The pool recycles dead particles, and when the pool is full, it recycles the oldest active particle. This guarantees a fixed memory footprint regardless of how many particles are spawned.

```javascript
/**
 * @brief Pre-allocated particle pool with physics-based lifecycle.
 * @param scene [THREE.Scene] Target scene for particle meshes.
 * @param max [int] Maximum simultaneous particles. Fixed at construction.
 * @param geo [THREE.BufferGeometry] Shared geometry from GEO pool.
 * @param mat [THREE.Material] Base material (cloned per particle for opacity).
 */
class ParticlePool {
    constructor(scene, max, geo, mat) {
        this.pool = [];
        for (let i = 0; i < max; i++) {
            const m = new THREE.Mesh(geo, mat.clone());
            m.castShadow = false;
            m.visible = false;
            scene.add(m);
            this.pool.push({
                mesh: m,
                vel: new THREE.Vector3(),
                rotVel: new THREE.Vector3(),
                life: 0,
                maxLife: 0,
                type: 'STANDARD',
                active: false,
            });
        }
    }

    /**
     * @brief Spawns a single particle at the given position with the given velocity.
     * @param pos [THREE.Vector3] World-space spawn position.
     * @param vel [THREE.Vector3] Initial velocity in m/s.
     * @param type [string] Physics profile key from PHYS dictionary.
     * @param life [float] Lifetime in seconds.
     */
    spawn(pos, vel, type = 'STANDARD', life = 2.0) {
        // Find a dead particle, or recycle the oldest active one
        let p = this.pool.find(x => !x.active);
        if (!p) p = this.pool.reduce((a, b) => a.life < b.life ? a : b);

        p.mesh.position.copy(pos);
        p.mesh.rotation.set(sr() * 6.28, sr() * 6.28, sr() * 6.28);
        p.mesh.visible = true;
        p.mesh.material.opacity = 1.0;
        p.vel.copy(vel);
        p.rotVel.set(
            (sr() - 0.5) * 10,
            (sr() - 0.5) * 10,
            (sr() - 0.5) * 10
        );
        p.life = life;
        p.maxLife = life;
        p.type = type;
        p.active = true;
    }

    /**
     * @brief Spawns a burst of particles from a single origin.
     * @param origin [THREE.Vector3] Burst center position.
     * @param count [int] Number of particles to spawn.
     * @param spread [float] Velocity spread in m/s.
     * @param type [string] Physics profile key.
     * @param life [float] Base lifetime in seconds (varied ±30%).
     */
    burst(origin, count, spread = 5, type = 'STANDARD', life = 2.0) {
        const _burstVel = new THREE.Vector3();  // Reuse per burst
        for (let i = 0; i < count; i++) {
            _burstVel.set(
                (sr() - 0.5) * spread * 2,
                sr() * spread,
                (sr() - 0.5) * spread * 2
            );
            this.spawn(origin, _burstVel, type, life * (0.7 + sr() * 0.6));
        }
    }

    /**
     * @brief Updates all active particles. Called once per frame.
     * @param dt [float] Delta time in seconds.
     */
    update(dt) {
        for (const p of this.pool) {
            if (!p.active) continue;

            p.life -= dt;
            if (p.life <= 0) {
                p.active = false;
                p.mesh.visible = false;
                continue;
            }

            // Physics integration
            const pr = PHYS[p.type] || PHYS.STANDARD;
            p.vel.y -= pr.gravity * dt;
            p.vel.multiplyScalar(pr.airDrag);
            p.mesh.position.addScaledVector(p.vel, dt);

            // Rotation (visual only — not physics-coupled)
            p.mesh.rotation.x += p.rotVel.x * dt;
            p.mesh.rotation.y += p.rotVel.y * dt;

            // Opacity fade based on remaining life
            if (p.mesh.material.transparent) {
                p.mesh.material.opacity = p.life / p.maxLife;
            }

            // Ground boundary
            const groundY = getGroundY(p.mesh.position.x, p.mesh.position.z);
            if (p.mesh.position.y < groundY + 0.05) {
                p.mesh.position.y = groundY + 0.05;
                p.vel.set(0, 0, 0);  // Friction stop
            }
        }
    }

    /**
     * @brief Returns the number of currently active particles.
     * @return [int] Active particle count.
     */
    get activeCount() {
        return this.pool.filter(p => p.active).length;
    }
}
```

**Pool sizing guidelines:**
- Burst effects (explosions, impacts): 30–100 particles.
- Continuous effects (fireflies, rain, spores): 200–500 particles.
- Above 500 per pool: use `THREE.Points` with `BufferGeometry` or `InstancedMesh` instead of individual meshes.

**Spawn origin rule:** Always use `actor.getWorldPosition()` (or the entity's stored `x, z` plus `getGroundY()`) for spawn origin, not `mesh.position`. If the actor is a child of a moved group, `mesh.position` is a local offset and the particles will spawn at the wrong location. This is the "Offset Geometry" failure mode.

### 6.6 Creature Physics Models

Each creature type has its own movement model. These are not a shared physics engine — each is a specialized function tuned for the creature's locomotion style. All use `dt` for frame-rate independence and squared-distance culling to skip distant creatures.

#### Drift (Jellyfish, Floating Entities)

Vertical sine-wave bob combined with gentle velocity toward a target point. The sine phase is per-entity (desynchronized) to prevent a "synchronized swimming" artifact.

```javascript
/**
 * @brief Drift movement for floating entities.
 * @param entity [Object] Entity metadata with group, phase, speed, target.
 * @param dt [float] Delta time.
 * @param t [float] Elapsed time in seconds.
 */
function updateDrift(entity, dt, t) {
    // Vertical bob — sine wave with per-entity phase offset
    const bobY = Math.sin(t * entity.speed + entity.phase) * 0.3;
    entity.group.position.y = entity.baseY + bobY;

    // Gentle horizontal drift toward target
    if (entity.target) {
        const dx = entity.target.x - entity.group.position.x;
        const dz = entity.target.z - entity.group.position.z;
        const d = Math.sqrt(dx * dx + dz * dz);
        if (d > 0.5) {
            entity.group.position.x += (dx / d) * entity.driftSpeed * dt;
            entity.group.position.z += (dz / d) * entity.driftSpeed * dt;
        }
    }
}
```

#### Hop (Small Creatures, Pufflings)

Timer-based impulse followed by gravity between hops. Ground snap on landing.

```javascript
/**
 * @brief Hop movement for small ground creatures.
 * @param entity [Object] Entity with group, vel, hopTimer, hopCooldown.
 * @param dt [float] Delta time.
 */
function updateHop(entity, dt) {
    entity.hopTimer -= dt;

    if (entity.hopTimer <= 0 && entity.onGround) {
        // New hop impulse
        entity.vel.y = 3 + sr() * 2;  // Upward impulse
        entity.vel.x = (sr() - 0.5) * 2;  // Random horizontal
        entity.vel.z = (sr() - 0.5) * 2;
        entity.onGround = false;
        entity.hopTimer = entity.hopCooldown + sr() * 1.0;
    }

    // Gravity between hops
    if (!entity.onGround) {
        entity.vel.y -= PHYS.LIGHT.gravity * dt;
    }

    // Integrate
    entity.group.position.addScaledVector(entity.vel, dt);

    // Ground collision
    const groundY = getGroundY(entity.group.position.x, entity.group.position.z);
    if (entity.group.position.y <= groundY) {
        entity.group.position.y = groundY;
        entity.vel.set(0, 0, 0);
        entity.onGround = true;
    }
}
```

#### Walk (Deer, Large Creatures)

Velocity-based movement toward a target with IK-inspired leg phase offsets for visual walk animation.

```javascript
/**
 * @brief Walk movement for large ground creatures.
 * @param entity [Object] Entity with group, vel, target, walkPhase.
 * @param dt [float] Delta time.
 */
function updateWalk(entity, dt) {
    if (!entity.target) return;

    const dx = entity.target.x - entity.group.position.x;
    const dz = entity.target.z - entity.group.position.z;
    const d = Math.sqrt(dx * dx + dz * dz);

    if (d > 1.0) {
        // Move toward target
        const speed = entity.walkSpeed * dt;
        entity.group.position.x += (dx / d) * speed;
        entity.group.position.z += (dz / d) * speed;

        // Face movement direction
        entity.group.rotation.y = Math.atan2(dx, dz);

        // Snap to terrain
        entity.group.position.y = getGroundY(
            entity.group.position.x,
            entity.group.position.z
        );

        // Walk animation — leg phase offsets
        entity.walkPhase += entity.walkSpeed * dt * 2;
        // Apply sine-based leg offsets to leg pivot groups
        // entity.legFL.rotation.x = Math.sin(entity.walkPhase) * 0.3;
        // entity.legFR.rotation.x = Math.sin(entity.walkPhase + Math.PI) * 0.3;
    }
}
```

#### Orbit (Moths, Circling Entities)

Circular path around a center point with vertical oscillation and wing flap animation.

```javascript
/**
 * @brief Orbit movement for circling entities.
 * @param entity [Object] Entity with group, centerX, centerZ, orbitR, orbitSpeed, flapSpeed.
 * @param dt [float] Delta time.
 * @param t [float] Elapsed time.
 */
function updateOrbit(entity, dt, t) {
    const angle = t * entity.orbitSpeed + entity.phase;
    entity.group.position.x = entity.centerX + Math.cos(angle) * entity.orbitR;
    entity.group.position.z = entity.centerZ + Math.sin(angle) * entity.orbitR;
    entity.group.position.y = entity.baseY + Math.sin(t * 1.5 + entity.phase) * 0.5;

    // Face tangent direction
    entity.group.rotation.y = angle + Math.PI / 2;

    // Wing flap — fast sine oscillation on wing pivot groups
    const flapAngle = Math.sin(t * entity.flapSpeed) * 0.4;
    // entity.wingL.rotation.z = -flapAngle;
    // entity.wingR.rotation.z = flapAngle;
}
```

### 6.7 Buffer Management

For systems using `THREE.Points` or `InstancedMesh` (high-count particles, foliage), proper buffer management prevents GPU stalls and ensures the driver knows to expect updates.

```javascript
// Tell the GPU this buffer will be updated frequently
geo.attributes.position.setUsage(THREE.DynamicDrawUsage);

// After modifying buffer data:
geo.attributes.position.needsUpdate = true;

// Only render active particles (avoid drawing dead particles at origin)
geo.setDrawRange(0, activeCount);
```

**Critical rule:** Pre-allocate `Float32Array` buffers at init time. Never resize them during gameplay. If the pool needs more capacity, increase the initial allocation — do not grow dynamically.

### 6.8 Phase III Verification Gate

| # | Check | How to Verify |
|---|---|---|
| III-A | Every position/rotation change includes `* dt` | Search for `.position.` and `.rotation.` in animation code |
| III-B | Player controller has gravity, drag, and jump | All three behaviors produce correct results |
| III-C | Ground collision snaps player to `getGroundY()` | Walk over terrain, verify feet follow ground |
| III-D | Head bob phase resets to zero when stationary | Stop moving, verify camera settles |
| III-E | ParticlePool pre-allocates all particles at init | No `new THREE.Mesh()` in spawn/burst/update |
| III-F | Particle spawn uses `getWorldPosition()` for origin | Particles appear at actor location, not origin |
| III-G | All creature movement uses `dt` scaling | Creatures move at same speed at 30 FPS and 60 FPS |
| III-H | Collision push-out uses squared distance for initial check | `Math.sqrt()` only on actual collisions |
| III-I | Pool exhaustion recycles oldest (not crash/leak) | Spawn more than pool max, verify no freeze |

**Failure modes if violated:**
- Animation-Physics Entanglement: motion without `* dt` (§6.1 violated).
- Floating Debris: particles hover because gravity term is missing (§6.5 violated).
- Offset Geometry: particles spawn at world origin instead of actor position (§6.5 spawn origin rule violated).
- Toy Scale: large creatures animate at the same speed as small ones (§6.3 Square-Cube Law violated).

---

## §7 Phase IV: Simulation Director

**Requires:** All entities + physics + input (Phase I–III).
**Provides:** `director(dt, t)`, state machines, visibility culling, emissive glow, AI systems.

The Director is the brain of the simulation. It is a single, centralized function that runs every frame and orchestrates all entity behavior, state transitions, culling, and system updates. Actors are "dumb muscles" — they expose methods (move, animate, setPose) but never make decisions about when to call them. The Director makes all decisions.

**Why centralized?** Scattered `requestAnimationFrame` callbacks produce non-deterministic update ordering, make debugging a nightmare (which callback fired first?), and prevent global optimizations (skip entire categories when the player is far away). A single Director function processes everything in a documented, reproducible sequence.

### 7.1 The Director Pattern

```javascript
/**
 * @brief Central update loop. Called once per frame from animate().
 * @param dt [float] Delta time in seconds (capped at 0.1).
 * @param t [float] Elapsed time in seconds.
 * @note Update order is canonical. Each step may depend on results from earlier steps.
 */
function director(dt, t) {
    // ── Step 1: Context checks ──────────────────────────
    // Player proximity to special features (ponds, quest objects, triggers)
    // Sets flags consumed by later steps

    // ── Step 2: Particle spawning ───────────────────────
    // Proximity-triggered spawns (spores near mushrooms, mist near water)
    // Ambient particle emission at regular intervals

    // ── Step 3: Entity updates ──────────────────────────
    // For each entity array (trees, creatures, structures):
    //   - Distance cull check (§7.3) — skip ALL updates if beyond cull distance
    //   - Glow pulse (§7.7) — emissiveIntensity modulation
    //   - Animation — procedural movement, limb articulation
    //   - AI — state machine transitions, steering (§7.6)
    //   - Visibility LOD — tier adjustment (§5.9)

    // ── Step 4: System updates ──────────────────────────
    // Weather state machine (§7.5)
    // Day/night cycle (§7.5)
    // Aurora, shooting stars, ambient effects

    // ── Step 5: Particle pool updates ───────────────────
    // Update all particle pools (physics integration, lifetime, culling)
    // Pool updates run AFTER entity updates so newly spawned particles get one frame of physics

    // ── Step 6: Audio updates ───────────────────────────
    // Ambient audio level adjustments
    // Music state changes based on game state
    // Spatial audio position updates

    // ── Step 7: Sky updates ─────────────────────────────
    // Shooting star spawning, twinkle oscillation

    // ── Step 8: Discovery checks ────────────────────────
    // First-encounter proximity triggers (§10.2)

    // ── Step 9: HUD updates ─────────────────────────────
    // Update DOM elements with FPS, state, quest progress
    // Throttle to every 4-8 frames (DOM writes are expensive)
}
```

### 7.2 Delta Time Cap & Spiral of Death Prevention

The `dt` cap at 0.1 seconds is not conservative — it is critical. When a browser tab is backgrounded, `requestAnimationFrame` throttles to ~1 FPS. When the user returns, the first frame's `dt` could be 5, 10, or even 30 seconds. Without the cap:

- Players teleport across the map (position += velocity × 30 seconds).
- Gravity accelerates objects to terminal velocity in one frame.
- Particles explode outward from their origins.
- State machine timers expire simultaneously, causing cascading transitions.

```javascript
const dt = Math.min(clock.getDelta(), 0.1);
```

This is the **only** line that reads from the clock. All downstream functions receive `dt` as a parameter. No function should call `clock.getDelta()` independently — that would consume the delta and return 0 to subsequent callers.

### 7.3 Visibility Culling

Every entity type with more than ~20 instances must be distance-culled. The culling check occurs at the top of the entity update loop, before any computation. When an entity is culled, the `continue` statement skips ALL processing — animation, AI, glow, physics. This is the single most impactful performance optimization in the system.

```javascript
/**
 * @brief Entity update loop with distance-based visibility culling.
 * @note ALWAYS use squared distance for the comparison. Math.sqrt() is
 *       ~20x slower and is completely unnecessary for a > b comparisons.
 */
for (const entity of entities) {
    const dx = entity.x - player.pos.x;
    const dz = entity.z - player.pos.z;
    const d2 = dx * dx + dz * dz;

    // Cull check — skip EVERYTHING for distant entities
    if (d2 > BUDGET.CULL_DIST_SQ) {
        if (entity.group.visible) entity.group.visible = false;
        continue;  // ← This skip is the performance win
    }
    if (!entity.group.visible) entity.group.visible = true;

    // Only reached for visible entities:
    updateGlow(entity, t);
    updateAnimation(entity, dt);
    updateAI(entity, dt, t, player.pos);
}
```

**Squared distance rule:** `distanceTo()` and `Math.sqrt()` are prohibited in the hot path (per-entity, per-frame loops). Always compute `dx*dx + dz*dz` and compare against a pre-computed squared threshold (`CULL_DIST_SQ = CULL_DIST * CULL_DIST`). This rule saves thousands of `Math.sqrt()` calls per frame.

### 7.4 State Machine Implementation

The state machine is the core logic structure for complex behaviors. It manages named states (each with `enter`, `update`, `exit` callbacks), data-driven transitions (conditions evaluated per frame), and forced transitions (for external events like collision or quest triggers).

```javascript
/**
 * @brief Generic state machine with data-driven transitions.
 * @note States are registered with enter/update/exit callbacks.
 *       Transitions are evaluated in order; first matching condition wins.
 */
class StateMachine {
    constructor() {
        this.states = {};
        this.transitions = [];
        this.current = null;
    }

    /**
     * @brief Registers a named state with lifecycle callbacks.
     * @param name [string] State identifier.
     * @param callbacks [Object] { enter(), update(dt), exit() } — all optional.
     */
    addState(name, { enter = () => {}, update = () => {}, exit = () => {} }) {
        this.states[name] = { enter, update, exit };
    }

    /**
     * @brief Registers a conditional transition between two states.
     * @param from [string] Source state name.
     * @param to [string] Target state name.
     * @param condition [Function] Returns boolean. Evaluated every frame.
     * @param onTransition [Function|null] Optional callback fired during transition.
     */
    addTransition(from, to, condition, onTransition = null) {
        this.transitions.push({ from, to, condition, onTransition });
    }

    /**
     * @brief Sets the initial state and calls its enter() callback.
     * @param state [string] Initial state name.
     */
    start(state) {
        this.current = state;
        this.states[state]?.enter();
    }

    /**
     * @brief Per-frame update. Evaluates transitions, then runs current state's update().
     * @param dt [float] Delta time.
     */
    update(dt) {
        if (!this.current) return;

        // Evaluate transitions in registration order — first match wins
        for (const t of this.transitions) {
            if (t.from === this.current && t.condition()) {
                this.states[this.current].exit();
                if (t.onTransition) t.onTransition();
                this.current = t.to;
                this.states[this.current].enter();
                return;  // One transition per frame maximum
            }
        }

        // No transition fired — run current state's update
        this.states[this.current].update(dt);
    }

    /**
     * @brief Forces an immediate state change, bypassing transition conditions.
     * @param name [string] Target state name.
     */
    forceState(name) {
        if (this.current) this.states[this.current].exit();
        this.current = name;
        this.states[name].enter();
    }
}
```

**Transition table pattern.** Define transitions as a data array and register them in a loop. This makes the state machine's behavior visible at a glance and prevents scattered if-else chains.

```javascript
// Interactive player state machine
const PLAYER_TRANSITIONS = [
    { from: 'IDLE',    to: 'WALKING',  condition: () => inputActive() },
    { from: 'WALKING', to: 'IDLE',     condition: () => !inputActive() },
    { from: 'WALKING', to: 'RUNNING',  condition: () => keys['ShiftLeft'] },
    { from: 'RUNNING', to: 'WALKING',  condition: () => !keys['ShiftLeft'] },
    { from: 'WALKING', to: 'JUMPING',  condition: () => keys['Space'] && player.onGround },
    { from: 'RUNNING', to: 'JUMPING',  condition: () => keys['Space'] && player.onGround },
    { from: 'JUMPING', to: 'AIRBORNE', condition: () => !player.onGround },
    { from: 'AIRBORNE', to: 'LANDING', condition: () => player.onGround },
    { from: 'LANDING', to: 'IDLE',     condition: () => true },  // Immediate transition
];

const playerSM = new StateMachine();
playerSM.addState('IDLE',     { update: (dt) => { /* idle animation */ } });
playerSM.addState('WALKING',  { update: (dt) => { /* walk animation */ } });
playerSM.addState('RUNNING',  { update: (dt) => { /* run animation */ } });
playerSM.addState('JUMPING',  { enter: () => { /* play jump sound */ } });
playerSM.addState('AIRBORNE', { update: (dt) => { /* air animation */ } });
playerSM.addState('LANDING',  { enter: () => { /* play land sound, trigger dip */ } });

for (const t of PLAYER_TRANSITIONS) {
    playerSM.addTransition(t.from, t.to, t.condition, t.onTransition);
}
playerSM.start('IDLE');
```

### 7.5 World-Level State Machines

Two world-level state machines run continuously and export variables consumed by entities and rendering systems.

#### Weather State Machine

```javascript
/**
 * @brief Weather state machine with weighted random transitions and cosine crossfade.
 * @note Exports: windX, windZ, windStrength, weatherState, isStorming, lightningFlash, getRainRate()
 */
const WEATHER_STATES = {
    CLEAR:          { duration: [60, 90], wind: 0.2, fog: 0.005 },
    MISTY:          { duration: [30, 60], wind: 0.3, fog: 0.015 },
    LIGHT_RAIN:     { duration: [40, 70], wind: 0.5, fog: 0.01 },
    HEAVY_RAIN:     { duration: [30, 50], wind: 1.0, fog: 0.012 },
    FOG_BANK:       { duration: [40, 60], wind: 0.1, fog: 0.025 },
    LUMINOUS_STORM: { duration: [20, 40], wind: 1.5, fog: 0.008 },
};

// Transition weights: each state lists probabilities for transitioning to other states
const WEATHER_TRANSITIONS = {
    CLEAR:          { MISTY: 0.3, LIGHT_RAIN: 0.2, FOG_BANK: 0.1 },
    MISTY:          { CLEAR: 0.3, LIGHT_RAIN: 0.3, FOG_BANK: 0.2 },
    LIGHT_RAIN:     { HEAVY_RAIN: 0.4, MISTY: 0.3, CLEAR: 0.2 },
    HEAVY_RAIN:     { LUMINOUS_STORM: 0.3, LIGHT_RAIN: 0.4, CLEAR: 0.1 },
    FOG_BANK:       { CLEAR: 0.4, MISTY: 0.3 },
    LUMINOUS_STORM: { HEAVY_RAIN: 0.3, CLEAR: 0.3, FOG_BANK: 0.2 },
};
```

Transitions between weather states use **cosine blending** over a 3–5 second crossfade period. Abrupt changes in fog density or wind strength are visually jarring. The crossfade interpolates all exported variables from the old state's values to the new state's values using `(1 - cos(progress * PI)) / 2`.

#### Day/Night Cycle

```javascript
/**
 * @brief Day/night cycle with interpolated keyframes.
 * @note Default cycle: 10 minutes. Exports: bioGlow, starBrightness, phase.
 *       bioGlow multiplier (0.65–1.5) is consumed by all emissive entities.
 */
const DAY_PHASES = {
    DUSK:       { t: 0.00, bioGlow: 0.65, starBrightness: 0.2, hemiIntensity: 0.4 },
    NIGHT:      { t: 0.25, bioGlow: 1.0,  starBrightness: 0.8, hemiIntensity: 0.15 },
    DEEP_NIGHT: { t: 0.50, bioGlow: 1.5,  starBrightness: 1.0, hemiIntensity: 0.08 },
    DAWN:       { t: 0.75, bioGlow: 0.8,  starBrightness: 0.3, hemiIntensity: 0.35 },
};
```

### 7.6 Creature AI

Creature AI uses a layered architecture: senses (perception), steering (movement primitives), and a per-creature state machine (behavior selection).

#### Senses

```javascript
/**
 * @brief AI sense functions. Used by creature state machines to evaluate conditions.
 * @note All use squared distance to avoid Math.sqrt() in the hot path.
 */
function canSee(entity, target, maxDist) {
    const dx = target.x - entity.x, dz = target.z - entity.z;
    return dx * dx + dz * dz < maxDist * maxDist;
}

function canHear(entity, target, maxDist) {
    // Hearing range is larger than sight range and ignores facing direction
    const dx = target.x - entity.x, dz = target.z - entity.z;
    return dx * dx + dz * dz < maxDist * maxDist;
}

function isNear(entity, target, threshold) {
    const dx = target.x - entity.x, dz = target.z - entity.z;
    return dx * dx + dz * dz < threshold * threshold;
}
```

#### Steering Behaviors

```javascript
/**
 * @brief Steering primitives for creature movement.
 * @note Return velocity vectors that are added to the creature's base movement.
 */
const _steerVec = new THREE.Vector3();  // Pre-allocated

function flee(entity, threat, fleeSpeed) {
    _steerVec.set(entity.x - threat.x, 0, entity.z - threat.z).normalize().multiplyScalar(fleeSpeed);
    return _steerVec;
}

function arrive(entity, target, arriveSpeed, slowRadius) {
    const dx = target.x - entity.x, dz = target.z - entity.z;
    const d = Math.sqrt(dx * dx + dz * dz);
    const speed = d < slowRadius ? arriveSpeed * (d / slowRadius) : arriveSpeed;
    _steerVec.set(dx / d * speed, 0, dz / d * speed);
    return _steerVec;
}

function separation(entity, neighbors, sepRadius, sepStrength) {
    _steerVec.set(0, 0, 0);
    for (const n of neighbors) {
        const dx = entity.x - n.x, dz = entity.z - n.z;
        const d2 = dx * dx + dz * dz;
        if (d2 > 0 && d2 < sepRadius * sepRadius) {
            const d = Math.sqrt(d2);
            _steerVec.x += (dx / d) * sepStrength / d;
            _steerVec.z += (dz / d) * sepStrength / d;
        }
    }
    return _steerVec;
}

function worldBounds(entity, worldRadius, pushStrength) {
    const d2 = entity.x * entity.x + entity.z * entity.z;
    const r2 = worldRadius * worldRadius;
    if (d2 > r2 * 0.8) {
        const d = Math.sqrt(d2);
        _steerVec.set(-entity.x / d * pushStrength, 0, -entity.z / d * pushStrength);
        return _steerVec;
    }
    _steerVec.set(0, 0, 0);
    return _steerVec;
}
```

#### Creature State Machine Pattern

Each creature type has its own set of states and transitions. The states are creature-specific but follow a common pattern: timer-based transitions with weighted random next-state selection.

```javascript
// Example: deer AI states
// IDLE → WALK → WANDER → PAUSE → LOOK → IDLE
// On canSee(player, 15m): any state → FLEE
// After FLEE timer expires: FLEE → WANDER
```

### 7.7 Emissive Glow Pattern

The signature visual feature for bioluminescent and magical worlds: every glowing entity pulses independently at its own frequency, modulated by the global day/night cycle.

```javascript
/**
 * @brief Updates emissive glow for a single entity.
 * @param entity [Object] Entity metadata with mat, speed, phase, baseGlow.
 * @param t [float] Elapsed time in seconds.
 * @note bioGlow is the global multiplier from the day/night cycle (0.65–1.5).
 *       At deep night, all glow intensifies. At dusk, glow is subdued.
 */
function updateGlow(entity, t) {
    const pulse = Math.sin(t * entity.speed + entity.phase) * 0.5 + 0.5;  // 0–1 range
    entity.mat.emissiveIntensity = entity.baseGlow * (0.5 + pulse * 0.8) * bioGlow;
}
```

**Why per-entity `speed` and `phase`?** Without these, all entities of the same type pulse in perfect synchronization — a visually dead giveaway of procedural generation. With randomized speed (0.5–1.5) and phase (0–2π), each entity pulses at its own rhythm, creating the organic feel of a living ecosystem.

### 7.8 Director Rules

These rules are non-negotiable. Violating them produces action-at-a-distance bugs that are extremely difficult to trace.

1. **Actors expose methods. The Director calls them.** An actor never calls its own `update()`. It never checks `if (playerDistance < 10)`. It never references another actor by name.

2. **All distance checks, collision detection, and event triggers live in the Director.** This is the only place where cross-entity logic exists.

3. **Transition triggers are data-driven.** If you find yourself writing `if (state === 'ATTACK' && distance < 5)` inline, extract it to a transition condition function and register it with the state machine.

4. **One state transition per frame maximum.** The `return` statement after a transition in the state machine's `update()` prevents cascade transitions where multiple states fire in a single frame.

5. **HUD updates are throttled.** DOM writes trigger browser layout recalculation. Update HUD elements every 4–8 frames, not every frame. Use a frame counter: `if (++hudCounter % 6 === 0) updateHUD()`.

### 7.9 Event Bus Pattern [MULTI-FILE]

For large projects (50+ files), the Director pattern alone becomes unwieldy — the single function grows to 1000+ lines. The event bus pattern provides a decoupled alternative for cross-cutting concerns without replacing the Director for per-entity updates.

```javascript
/**
 * @file kernel/eventBus.js
 * @brief Typed publish/subscribe event bus for cross-system communication.
 */
const Events = {
    ORB_COLLECTED:   'orb_collected',
    FOOTSTEP:        'footstep',
    JUMP:            'jump',
    LAND:            'land',
    CREATURE_VOICE:  'creature_voice',
    FAIRY_BOUNCE:    'fairy_bounce',
    BUBBLE_POP:      'bubble_pop',
    WEATHER_CHANGE:  'weather_change',
    DISCOVERY:       'discovery',
    QUEST_ADVANCE:   'quest_advance',
};

const _listeners = {};

function on(event, callback) {
    if (!_listeners[event]) _listeners[event] = [];
    _listeners[event].push(callback);
}

function emit(event, data) {
    if (!_listeners[event]) return;
    for (const cb of _listeners[event]) cb(data);
}

function off(event, callback) {
    if (!_listeners[event]) return;
    _listeners[event] = _listeners[event].filter(cb => cb !== callback);
}
```

**When to use event bus vs. Director:**
- **Director:** Per-frame entity updates, visibility culling, animation, AI — anything that runs every frame for a specific entity type.
- **Event bus:** Discrete events that cross system boundaries — orb collection triggering audio + visual effects + quest state + discovery text simultaneously. Multiple subscribers react independently without the emitter knowing about them.

Both patterns coexist. The Director handles the per-frame simulation loop. The event bus handles discrete cross-cutting events.

### 7.10 Scheduler Architecture [MULTI-FILE]

For projects exceeding ~60 files, the Director's internal ordering can be formalized into a scheduler — a system that runs registered subsystem functions in declared phase order.

```javascript
/**
 * @file kernel/scheduler.js
 * @brief Ordered phase runner. Subsystems register at a phase, scheduler runs all in order.
 */
const Phase = {
    PROXIMITY:    10,  // Crystal proximity, zone checks
    SPAWN:        20,  // Particle spawning
    FLORA_GLOW:   30,  // Flora emissive updates
    FAUNA:        40,  // Creature AI + animation
    INTERACTION:  50,  // Attunement, spirit hum, resonance
    SKY:          60,  // Shooting stars, aurora
    VEGETATION:   70,  // Fern sway, flower bloom
    MAGICAL:      80,  // Wisps, bubbles, fairy rings
    PARTICLES:    90,  // All particle pool updates
    QUEST:       100,  // Quest state progression
    AUDIO:       110,  // Audio spatial updates
    DISCOVERIES: 120,  // First-encounter checks
};

const _systems = [];

function registerSystem(phase, name, updateFn) {
    _systems.push({ phase, name, updateFn });
    _systems.sort((a, b) => a.phase - b.phase);
}

function runScheduler(dt, t, context) {
    for (const sys of _systems) {
        sys.updateFn(dt, t, context);
    }
}
```

The scheduler replaces the monolithic `director()` function with registered subsystem functions. Each subsystem module registers itself at init time, declaring its execution phase. The scheduler runs them in phase order every frame.

### 7.11 Zone/Sector-Based Environmental Modulation

For worlds with progression-based restoration mechanics, environmental properties (bioGlow, audio density, entity behavior) can be modulated by zone. Each objective restores a sector, and the Director modulates all entities within that sector.

```javascript
/**
 * @brief Computes the local glow multiplier for a given position.
 * @param x [float] Entity X position.
 * @param z [float] Entity Z position.
 * @param bioGlow [float] Global day/night bioGlow (0.65–1.5).
 * @return [float] Effective glow multiplier for the entity.
 * @note Returns full bioGlow in restored sectors, dimmed bioGlow in unrestored sectors.
 */
function getLocalGlow(x, z, bioGlow) {
    for (const orb of activatedOrbs) {
        const dx = x - orb.x, dz = z - orb.z;
        if (dx * dx + dz * dz < orb.restoreR * orb.restoreR) {
            return bioGlow;  // Full glow in restored zone
        }
    }
    return bioGlow * DIMMING_FACTOR;  // Suppressed glow in unrestored zone
}
```

The emissive glow pattern (§7.7) then uses `getLocalGlow()` instead of raw `bioGlow`:

```javascript
const pulse = Math.sin(t * entity.speed + entity.phase) * 0.5 + 0.5;
entity.mat.emissiveIntensity = (0.5 + pulse * 0.7) * getLocalGlow(entity.x, entity.z, bioGlow);
```

This creates a visible contrast: restored zones glow vibrantly while unrestored zones remain muted, providing both visual feedback and wayfinding cues.

### 7.12 Weather-Responsive Entity Pattern

Entities can read weather state exports to modulate their behavior, creating an interconnected ecosystem feel:

```javascript
// Reading weather exports to modulate entity behavior
// In the entity update within the Director:
entity.group.position.x += windX * windStrength * dt * entity.swayFactor;
entity.group.position.z += windZ * windStrength * dt * entity.swayFactor;

// Dampen spawn rates during rain
const rainRate = getRainRate();
const dampened = Math.max(0.2, 1.0 - rainRate * 0.8);
// Use dampened to reduce particle spawn rates, creature activity, etc.
```

Weather modifiers can also scale gameplay mechanics (e.g., attunement rates), making the world feel strategically responsive:

| Weather State | Effect Example |
|---|---|
| CLEAR | Baseline — no modifier |
| MISTY | Slow-moving creatures easier to observe (wider timing windows) |
| LIGHT_RAIN | Energetic creatures more active (easier to match fast rhythms) |
| HEAVY_RAIN | All creature activity reduced (harder conditions) |
| FOG_BANK | Skittish creatures calmer (reduced flee radius) |
| STORM | Electrical creatures excited (tighter orbit patterns, easier tracking) |

### 7.13 Stillness as a Mechanic

Track player idle time. When the player stands still for 5+ seconds near a creature, trigger a curiosity response — the creature approaches the player instead of the player approaching it.

```javascript
// In player update:
if (moveSpeed < 0.5) {
    playerIdleTime += dt;
} else {
    playerIdleTime = 0;
}

// In creature AI (Director loop):
if (playerIdleTime > 5 && isNear(player.pos, entity, curiosityRange)) {
    entity.state = 'curious';
    // Use arrive() steering toward player position, slow speed
}
```

| Creature Type | Normal Behavior Near Player | Curiosity Response (5s+ idle) |
|---|---|---|
| Drifter | Aimless drift | Floats closer, pulse brightens |
| Hopper | Hops away if startled | Cautiously approaches, ears forward |
| Walker | Flees at threshold distance | Flee radius shrinks, turns to look |
| Orbiter | Ignores player, orbits | Orbit center shifts toward player |

This inverts the flee response and rewards patience — a core design principle for contemplative simulations.

### 7.14 Per-Entity Cull Distance Tuning

Cull distances are not one-size-fits-all. Larger, more visually prominent entities are visible from farther away. Smaller entities can be culled aggressively without the player noticing.

| Entity Category | Recommended Cull Distance | Rationale |
|---|---|---|
| Large trees | 110m (4-tier LOD) | Silhouette visible at distance |
| Large creatures | 55–60m | Movement visible at distance |
| Small creatures | 40m | Invisible beyond this anyway |
| Small flora | 40m | Ground-level, obscured by terrain |
| Medium flora (mushrooms) | 50m | Glow visible slightly farther |
| Rocks / obstacles | 50m | Important for navigation |
| Crystals | No cull (few count) | Light sources, always relevant |
| Particles | System-dependent | Fireflies 60m, spores 30m |

### 7.15 Phase IV Verification Gate

| # | Check | How to Verify |
|---|---|---|
| IV-A | Single `director(dt, t)` function exists | No scattered `requestAnimationFrame` callbacks |
| IV-B | Update order follows canonical sequence | Steps 1–9 are in documented order |
| IV-C | Visibility culling uses squared distance | No `Math.sqrt()` in per-entity cull check |
| IV-D | Culled entities skip ALL updates (not just rendering) | `continue` statement fires before any computation |
| IV-E | State machine transitions are data-driven | Transition array exists, registered in loop |
| IV-F | Actors do not reference game state or other actors | Code review — actors only respond to method calls |
| IV-G | Emissive glow uses per-entity phase/speed | No synchronized pulsing visible |
| IV-H | HUD updates are throttled (not every frame) | Frame counter check present |
| IV-I | `dt` is not read from clock in Director | Only `animate()` reads clock; Director receives `dt` parameter |

**Failure modes if violated:**
- Non-deterministic behavior from scattered update callbacks (§7.1 violated).
- Physics explosion on tab return without dt cap (§7.2 violated).
- Performance collapse from updating culled entities (§7.3 violated).
- Cascade state transitions firing multiple states per frame (§7.4 violated).
- Synchronized glow "breathing" artifact (§7.7 violated).

---

## §8 Phase V: Procedural Audio Engine

**Requires:** Director events, entity positions, player position (Phase IV).
**Provides:** Audio graph with bus architecture, voice pools, noise buffers, synthesis patterns, spatial audio, generative music, state-reactive layers.

**Source:** This section integrates the Procedural Audio Engine Protocol — a production methodology for zero-asset Web Audio API synthesis validated in Luminaries (32KB audio.js + 10KB music.js, 15+ synthesis voice types, zero audio file imports).

All sound is generated via the Web Audio API. No audio file imports. This keeps the simulation self-contained, eliminates HTTP requests, enables infinite variation (every sound instance is uniquely parameterized), and allows real-time reaction to world state (pitch, timbre, volume, and reverb modulate continuously in response to player position, weather, time of day, and entity proximity).

### 8.1 The Web Audio API as a Modular Synthesizer

The Web Audio API provides a graph-based audio processing model analogous to a hardware modular synthesizer. JavaScript only touches parameter automation — the actual DSP runs natively on the browser's audio thread at sample rate (typically 44,100 Hz).

| Synth Module | Web Audio Node | Usage |
|---|---|---|
| VCO (oscillator) | `OscillatorNode` | Creature voices, drones, tones |
| VCF (filter) | `BiquadFilterNode` | Shaping timbre, removing rumble |
| VCA (amplifier) | `GainNode` | Volume control, envelopes, fades |
| Noise generator | `AudioBufferSourceNode` + pre-generated buffer | Wind, rain, forest ambience |
| Panner | `StereoPannerNode` | Left/right spatial placement |
| Delay / Reverb | `DelayNode` + `GainNode` feedback loops | Shared acoustic space |
| Mixer | `GainNode` as bus, multiple inputs summed | Category mixing |

### 8.2 AudioContext Lifecycle

```javascript
/**
 * @file systems/audio.js
 * @brief Procedural audio engine. Zero external audio files.
 */
let ctx = null;
let masterGain = null;
let initialized = false;
let muted = false;

/**
 * @brief Initializes the audio system. Call on first user interaction.
 * @note AudioContext MUST be created or resumed inside a user gesture handler
 *       (browser autoplay policy). Safe to call multiple times — subsequent calls are no-ops.
 */
function initAudio() {
    if (initialized) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.5;
    masterGain.connect(ctx.destination);

    // Build full DSP graph: buses, reverb, ambient layers, voice pool
    buildBusArchitecture();
    buildSharedReverb();
    buildAmbientLayers();
    buildVoicePool();

    initialized = true;
}

// Hook into first user interaction — all three gesture types for cross-platform
window.addEventListener('keydown', initAudio, { once: true });
window.addEventListener('click', initAudio, { once: true });
window.addEventListener('touchstart', initAudio, { once: true });
```

### 8.3 Signal Flow & Bus Architecture

The audio graph is a tree rooted at `AudioContext.destination`, with a master gain as the single control point for global volume. All audio subsystems connect through named category buses, each with independent volume control.

```
                          ┌─ Ambient Bus ────┐
                          │                  │
Persistent Voices ────────┤                  ├──→ Master Gain → Destination
                          │                  │         ↑
Transient Pool ───────────┼─ Entity Bus ─────┤         │
                          │                  │    Reverb Send
Music Voices ─────────────┼─ Music Bus ──────┤    (shared effect)
                          │                  │
Interaction Voices ───────┼─ Interaction Bus ┘
                          │
                          └─→ Reverb Input → Delay Network → Reverb Bus → Master
```

Each bus is a `GainNode` with independent volume control:

| Bus | Purpose | Typical Gain Range |
|---|---|---|
| **Ambient** | Environmental layers: noise, weather, biome atmosphere | 0.3–0.6 |
| **Entity** | AI-driven entity sounds: creature voices, movement | 0.4–0.8 |
| **Music** | Generative composition: melodic instruments, drones | 0.2–0.5 |
| **Interaction** | Player-triggered: footsteps, impacts, UI feedback | 0.5–1.0 |

```javascript
let ambientBus, entityBus, musicBus, interactionBus;

function buildBusArchitecture() {
    ambientBus = ctx.createGain();     ambientBus.gain.value = 0.4;
    entityBus = ctx.createGain();      entityBus.gain.value = 0.6;
    musicBus = ctx.createGain();       musicBus.gain.value = 0.3;
    interactionBus = ctx.createGain(); interactionBus.gain.value = 0.7;

    ambientBus.connect(masterGain);
    entityBus.connect(masterGain);
    musicBus.connect(masterGain);
    interactionBus.connect(masterGain);
}
```

### 8.4 Shared Reverb: Dual-Delay Feedback Network

A convincing reverb is built from two cross-fed delay lines with filtering. All voices that need reverb route through a shared send — never create per-voice reverb effects.

```javascript
let reverbInput, reverbBus;

function buildSharedReverb() {
    reverbInput = ctx.createGain();
    reverbBus = ctx.createGain();
    reverbBus.gain.value = 0.3;

    const delay1 = ctx.createDelay(1.0);
    const delay2 = ctx.createDelay(1.0);
    const fb1 = ctx.createGain();
    const fb2 = ctx.createGain();
    const lpf = ctx.createBiquadFilter();
    const hpf = ctx.createBiquadFilter();

    // Irrational delay ratio prevents comb filtering.
    // If delay times share a common factor, feedback patterns align periodically,
    // creating audible metallic artifacts. 0.55 and 0.79 (LCM ~43s) produce
    // a dense, non-repeating tail that simulates natural room reflections.
    delay1.delayTime.value = 0.55;
    delay2.delayTime.value = 0.79;
    fb1.gain.value = 0.35;
    fb2.gain.value = 0.30;

    // Lowpass in feedback: natural reverberation loses high frequencies with
    // each reflection (absorbed by surfaces). 2500 Hz darkens the tail progressively.
    lpf.type = 'lowpass';  lpf.frequency.value = 2500;

    // Highpass in feedback: without it, low-frequency energy accumulates across
    // iterations, producing audible rumble. 200 Hz cutoff keeps the tail clean.
    hpf.type = 'highpass'; hpf.frequency.value = 200;

    // Cross-feed topology: delay1 → fb1 → hpf → delay2 → fb2 → lpf → delay1
    reverbInput.connect(delay1);
    delay1.connect(fb1).connect(hpf).connect(delay2);
    delay2.connect(fb2).connect(lpf).connect(delay1);

    // Output taps from both delay lines
    delay1.connect(reverbBus);
    delay2.connect(reverbBus);
    reverbBus.connect(masterGain);
}

/**
 * @brief Routes a voice to both its dry bus and the shared reverb send.
 * @param sourceGain [GainNode] The voice's output gain node.
 * @param dryBus [GainNode] The category bus for dry signal.
 * @param wetAmount [float] Reverb send level (0.0–0.4 typical).
 */
function connectWithReverb(sourceGain, dryBus, wetAmount) {
    sourceGain.connect(dryBus);              // Dry path
    const wet = ctx.createGain();
    wet.gain.value = wetAmount;
    sourceGain.connect(wet).connect(reverbInput);  // Wet path
}
```

### 8.5 The Guard Pattern

Every exported audio function must check initialization and mute state before doing work. This prevents null reference errors during early frames (before user gesture) and respects the player's mute preference without requiring callers to check.

```javascript
export function playCreatureCall(type, params) {
    if (!initialized || muted) return;
    // ... synthesis logic
}
```

### 8.6 Voice Management: Fire-and-Forget vs. Pooling

#### When Fire-and-Forget Is Adequate

Fire-and-forget voice creation (`createOscillator()` → `.start()` → `.stop()` → garbage collected) works at low density. The browser's GC reclaims nodes after `.stop()`. Below ~15 simultaneous transient voices, GC pauses are imperceptible.

**Use fire-and-forget when:**
- Fewer than 15 simultaneous transient voices
- Sounds triggered at intervals > 100ms
- Session duration under 30 minutes
- Desktop-only target

#### When Pooling Is Required

Above 15 simultaneous transients, or with rapid-fire triggers (< 100ms apart), or on mobile, or for sessions longer than 1 hour — node creation/destruction causes GC pressure spikes (stutters every 2–5 seconds), node accumulation if `.stop()` timing is imprecise, and memory fragmentation.

#### Voice Pool Architecture

Pre-allocate a fixed array of synthesis chains at init time. Keep them permanently connected but silent (gain = 0). Assign to events dynamically.

**Standard synthesis chain:**
```
OscillatorNode → BiquadFilterNode → GainNode → StereoPannerNode → Bus GainNode
```

```javascript
const POOL_SIZE = 32;  // 32 for desktop, 16 for mobile
const voicePool = [];

function buildVoicePool() {
    for (let i = 0; i < POOL_SIZE; i++) {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();
        const panner = ctx.createStereoPanner();

        osc.connect(filter).connect(gain).connect(panner);
        panner.connect(entityBus);

        gain.gain.value = 0;  // Silent until assigned
        osc.start();           // Start immediately — gain controls audibility

        voicePool.push({
            osc, filter, gain, panner,
            state: 'idle',     // 'idle' | 'active' | 'releasing'
            startTime: 0,
        });
    }
}
```

**Critical rule: never disconnect nodes.** Setting gain to 0 is functionally silent. The browser's audio thread skips processing for silent subgraphs on most implementations. Disconnecting and reconnecting causes click artifacts and forces graph recompilation.

#### Voice Assignment

```javascript
function assignVoice(config) {
    // 1. Find idle voice
    let voice = voicePool.find(v => v.state === 'idle');

    // 2. If none idle, steal (see §8.8)
    if (!voice) voice = stealVoice();
    if (!voice) return null;

    // 3. Configure
    const now = ctx.currentTime;
    voice.osc.type = config.waveform || 'sine';
    voice.osc.frequency.setValueAtTime(config.freq, now);
    voice.filter.type = config.filterType || 'lowpass';
    voice.filter.frequency.setValueAtTime(config.filterFreq || 5000, now);
    voice.panner.pan.setValueAtTime(config.pan || 0, now);

    // 4. Ramp gain from 0 (attack phase) — see Anti-Clicking Protocol §8.7
    voice.gain.gain.setValueAtTime(0, now);
    voice.gain.gain.linearRampToValueAtTime(config.volume || 0.05, now + (config.attack || 0.01));

    // 5. Schedule release
    const duration = config.duration || 0.5;
    voice.gain.gain.setValueAtTime(config.volume || 0.05, now + duration - 0.05);
    voice.gain.gain.linearRampToValueAtTime(0, now + duration);

    voice.state = 'active';
    voice.startTime = now;

    // 6. Mark idle after duration
    setTimeout(() => {
        if (voice.state === 'active') voice.state = 'idle';
    }, duration * 1000 + 50);

    return voice;
}
```

### 8.7 Anti-Clicking Protocol

Audio clicks and pops occur when a signal's value changes discontinuously — a gain jumping from one value to another without a ramp, an oscillator starting abruptly, or parameter automation not anchored from the current value.

#### The Anchor Rule

**Always** call `setValueAtTime(currentValue, now)` before any ramp automation:

```javascript
// ✗ WRONG — starts ramp from unknown state, may click
gain.linearRampToValueAtTime(0.05, now + 0.01);

// ✓ RIGHT — anchors at current value, then ramps smoothly
gain.setValueAtTime(gain.value, now);
gain.linearRampToValueAtTime(0.05, now + 0.01);
```

Without the anchor, the automation system does not know where to ramp FROM. It may interpolate from a stale scheduled value, causing a discontinuity.

#### ADSR Envelope Pattern

```javascript
/**
 * @brief Applies an ADSR envelope to a gain node.
 * @param gain [GainNode] Target gain node.
 * @param params [Object] { attack, decay, sustain, release, peak, sustainDuration }.
 * @note Uses setTargetAtTime for release — exponential decay that mimics natural
 *       acoustic damping and approaches silence without needing the exact current value.
 */
function applyEnvelope(gain, { attack, decay, sustain, release, peak, sustainDuration }) {
    const now = ctx.currentTime;

    // Anchor at silence
    gain.gain.setValueAtTime(0, now);

    // Attack: silence → peak
    gain.gain.linearRampToValueAtTime(peak, now + attack);

    // Decay: peak → sustain level
    // exponentialRamp cannot target 0 — use Math.max with a floor
    gain.gain.exponentialRampToValueAtTime(
        Math.max(sustain * peak, 0.001),
        now + attack + decay
    );

    // Release: schedule for after sustain hold
    // setTargetAtTime provides exponential decay toward 0.
    // timeConstant = release/3 reaches ~5% of sustain in `release` seconds.
    setTimeout(() => {
        gain.gain.setTargetAtTime(0.001, ctx.currentTime, release / 3);
    }, (attack + decay + sustainDuration) * 1000);
}
```

#### Voice Recycling Safety

After scheduling release, mark the voice as `'releasing'`. Only transition to `'idle'` when the gain has fallen below an audible threshold:

```javascript
if (voice.state === 'releasing' && voice.gain.gain.value < 0.001) {
    voice.state = 'idle';
}
```

This prevents reassignment while the voice is still audibly fading out.

#### Crossfade Overlaps

When transitioning between ambient layers (e.g., forest → cave, clear → rainy), overlap the outgoing and incoming layers by 30–50ms minimum. Shorter overlaps produce a perceptible gap; longer overlaps waste polyphony.

### 8.8 Voice Stealing & Polyphony

#### Hard Polyphony Cap

| Platform | Max Voices | Pool Size | Rationale |
|---|---|---|---|
| Desktop (modern) | 50 oscillators | 32 chains | Headroom for complex scenes |
| Desktop (minimum) | 40 oscillators | 24 chains | Conservative for older hardware |
| Mobile | 24 oscillators | 16 chains | Battery + thermal constraints |

#### Stealing Priority

When the pool is full and a new sound must play:

1. **Releasing voices first.** Already fading out — stealing is nearly inaudible.
2. **Oldest active voice.** Longest-running voice is likely the least perceptually important.
3. **Never steal persistent voices.** Ambient layers are exempt from the pool entirely.

#### Stolen Voice Procedure

```javascript
function stealVoice() {
    // 1. Try releasing voices
    let voice = voicePool.find(v => v.state === 'releasing');

    // 2. Fall back to oldest active
    if (!voice) {
        let oldest = null, oldestTime = Infinity;
        for (const v of voicePool) {
            if (v.state === 'active' && v.startTime < oldestTime) {
                oldest = v;
                oldestTime = v.startTime;
            }
        }
        voice = oldest;
    }
    if (!voice) return null;

    const now = ctx.currentTime;

    // 3. Cancel pending automation
    voice.gain.gain.cancelScheduledValues(now);

    // 4. Anchor at current value (prevents click)
    voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);

    // 5. Emergency fadeout — 5ms is fast enough to be imperceptible.
    //    Shorter durations may click on some hardware.
    //    Longer durations introduce audible latency for urgent sounds.
    voice.gain.gain.linearRampToValueAtTime(0, now + 0.005);

    voice.state = 'idle';
    return voice;
}
```

### 8.9 Scheduling Strategies

#### Strategy A: Game-Loop Direct (Default)

Trigger sounds from the animation loop or director. Use `AudioContext.currentTime` for sample-accurate start times within the current frame.

**Pros:** Zero latency between game event and sound. Natural integration with game state.
**Cons:** Sounds fire on frame boundaries (~16ms at 60fps, ~50ms at 20fps). Fine for effects, imprecise for rhythmic music.

#### Strategy B: Lookahead Scheduler (For Music)

A `setInterval(25ms)` timer runs independently of the render loop. Each tick scans an event queue for events within a 100ms lookahead window and schedules them on the hardware audio clock.

```javascript
const LOOKAHEAD = 0.1;    // 100ms lookahead window
const INTERVAL = 0.025;   // 25ms check interval

setInterval(() => {
    const now = ctx.currentTime;
    while (nextEventTime < now + LOOKAHEAD) {
        scheduleEvent(nextEvent, nextEventTime);
        advanceToNextEvent();
    }
}, INTERVAL * 1000);
```

**Pros:** Sub-millisecond timing precision. Events committed to the hardware clock are immune to main-thread jank.
**Cons:** 100ms commit window adds architectural complexity.

#### Strategy C: Hybrid (Recommended)

Use Strategy A for game-triggered sounds (footsteps, creature calls, impacts, ambient modulation) and Strategy B for generative music sequences. This is the recommended approach for any simulation with both sound effects and music.

| Sound Type | Strategy | Rationale |
|---|---|---|
| Footsteps, impacts | A | Must sync with visual frame |
| Creature voices | A | Triggered by proximity/AI, frame-accurate is sufficient |
| Ambient layers | A | Continuous gain modulation per frame |
| Melodic sequences | B | Timing precision matters for musical perception |
| Rhythmic patterns | B | Jank-proof scheduling |

### 8.10 Noise Buffers

Generated once at init time, looped forever. They provide the base layer for ambient soundscapes (wind, water, forest hum).

```javascript
/**
 * @brief Creates a procedural noise buffer.
 * @param type [string] 'white' or 'brown'.
 * @param duration [float] Buffer duration in seconds.
 * @return [AudioBuffer] Loopable noise buffer.
 * @note Math.random() is permitted here — audio noise requires true
 *       randomness for non-repeating texture. This is the one exception
 *       to the seeded RNG rule (§5.7).
 */
function createNoiseBuffer(type, duration) {
    const len = ctx.sampleRate * duration;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);

    if (type === 'white') {
        for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    } else if (type === 'brown') {
        let last = 0;
        for (let i = 0; i < len; i++) {
            data[i] = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
            last = data[i];
            data[i] *= 1.8;  // Boost amplitude (brown noise is quieter than white)
        }
    }

    // Overlap-add crossfade for seamless looping (50ms fade)
    const fadeLen = Math.floor(ctx.sampleRate * 0.05);
    for (let i = 0; i < fadeLen; i++) {
        const t = i / fadeLen;
        data[i] *= t;
        data[len - 1 - i] *= t;
    }

    return buf;
}
```

**Co-prime buffer lengths.** When layering multiple noise buffers, use durations that share no common factor. This prevents audible repetition patterns because the loop points never align.

| Buffer | Duration | Samples (44.1kHz) | Purpose |
|---|---|---|---|
| Brown noise (forest hum) | 16s | 705,600 | Base ambient |
| White noise (rain) | 11s | 485,100 | Weather layer |
| Brown noise (wind) | 9s | 396,900 | Wind layer |

**LCM = 1,584 seconds (~26 minutes)** before all three buffers align simultaneously. For practical purposes, the combined texture never repeats.

**Buffer reuse:** A single `AudioBuffer` can be shared by multiple `AudioBufferSourceNode` instances. Create one buffer per noise type, then create new source nodes pointing to the same buffer data. This avoids duplicating sample data in memory.

### 8.11 Spatial Audio

#### Distance Falloff

For positioned sounds in a 3D world, calculate volume based on distance from the listener. Always use squared distance for the initial cull check — `Math.sqrt()` only when within range.

```javascript
/**
 * @brief Computes distance-based volume for a positioned sound.
 * @param soundX [float] Sound source X position.
 * @param soundZ [float] Sound source Z position.
 * @param listenerX [float] Listener (player) X position.
 * @param listenerZ [float] Listener (player) Z position.
 * @param maxDist [float] Maximum hearing distance in meters.
 * @param baseVol [float] Volume at zero distance.
 * @return [float] Attenuated volume (0 if out of range).
 */
function getDistanceVolume(soundX, soundZ, listenerX, listenerZ, maxDist, baseVol) {
    const dx = soundX - listenerX;
    const dz = soundZ - listenerZ;
    const d2 = dx * dx + dz * dz;
    const maxDist2 = maxDist * maxDist;

    if (d2 > maxDist2) return 0;  // Squared distance cull — no sqrt

    const d = Math.sqrt(d2);  // Only compute sqrt when within range
    return Math.max(0, 1.0 - d / maxDist) * baseVol;
}
```

#### Stereo Panning

Use `StereoPannerNode` for left/right placement based on the angle between the listener's forward direction and the sound source:

```javascript
/**
 * @brief Computes stereo pan value from sound position relative to listener heading.
 * @return [float] Pan value: -1 (full left) to +1 (full right).
 */
function getStereoPan(soundX, soundZ, listenerX, listenerZ, listenerYaw) {
    const angle = Math.atan2(soundX - listenerX, soundZ - listenerZ);
    const relative = angle - listenerYaw;
    return Math.sin(relative);
}
```

#### Zone-Based Ambient Modulation

Rather than spatializing individual ambient sources (expensive and unnecessary for environmental layers), modulate ambient bus gains based on the player's zone:

- Near water → boost water ambience gain, reduce forest gain
- On ridgeline → boost wind gain
- In dense forest → boost insect/creature gains, reduce wind
- Near crystals → boost resonance drone

Use the same squared-distance proximity checks used for entity culling.

### 8.12 Decoupling: Callback Injection & Event Bus

Entity and world code **never** import the audio module directly. Two patterns are supported for cross-cutting audio triggers.

#### Callback Injection (Legacy, still valid)

Main module imports both audio functions and entity systems, then passes audio functions as callbacks during initialization:

```javascript
// main.js
import { playCreatureCall } from './systems/audio.js';
import { initCreatures } from './entities/index.js';
initCreatures({ onCall: playCreatureCall });

// creatures.js — never imports audio
let _onCall = null;
export function initCreatures(config) { _onCall = config.onCall; }
// When sound needed:
if (_onCall) _onCall(type, x, z);
```

#### Event Bus (Modern, preferred for new code)

Systems subscribe to typed events. No import coupling between emitter and subscriber:

```javascript
// systems/audio.js — subscribes to events
import { on, Events } from '../kernel/eventBus.js';
on(Events.ORB_COLLECTED, (d) => playOrbCollect());
on(Events.FOOTSTEP, (d) => playFootstep(d.sprinting, d.nearWater));
on(Events.CREATURE_VOICE, (d) => playCreatureCall(d.type, d.x, d.z));

// quest/questManager.js — emits events (never imports audio)
import { emit, Events } from '../kernel/eventBus.js';
emit(Events.ORB_COLLECTED, { orbIndex: i, orbsFound, x: o.x, z: o.z });
```

The event bus breaks all circular dependency chains and enables any number of systems to react to the same event without the emitter knowing about them.

### 8.13 Creature Sound Design Patterns

Each creature type has a distinct synthesis pattern — a unique "voice" built from oscillators, filters, and envelopes. The combination of waveform, frequency range, envelope shape, and effects creates a recognizable identity.

| Creature Type | Synthesis Chain | Frequency Range | Cooldown | Character |
|---|---|---|---|---|
| Drifter (jelly-like) | Dual detuned sines + vibrato LFO + glide | 360–420 Hz | ~8s | Glass harmonica, meditative |
| Hopper (puffling-like) | 3-note pentatonic arpeggio, 70ms between notes | 500–750 Hz | ~6s | Bright chirp, staccato |
| Walker (deer-like) | Detuned triangles + slow attack (120ms) | 100–130 Hz | ~18s | Warm distant horn |
| Orbiter (moth-like) | Sine with FM, 8–12 Hz LFO depth | 200–280 Hz | ~10s | Soft whisper-flutter |

**Design guidelines for new creature voices:**
1. Choose a synthesis model that matches the creature's movement rhythm (staccato for hoppers, legato for drifters).
2. Assign a frequency band that does not overlap with existing creatures — this prevents audio masking where two creatures at similar frequencies become indistinguishable.
3. Keep individual voice volumes at 0.02–0.08. The mix is dense; individual voices must be quiet.
4. Route through `connectWithReverb()` to place in the shared acoustic space.
5. Apply creature-specific cooldowns to prevent sound spam in dense entity clusters.

### 8.14 Generative Music

A separate module builds on top of the audio system. Generative music uses simple oscillator patterns modulated by game state. Musical layers are kept soft (0.01–0.04 volume) — music is atmosphere, not foreground.

#### Harmonic Field Selection

Choose a scale where any combination of simultaneous notes produces consonance. This allows multiple independent voices to play without coordination:

| Scale | Clashes? | Best For |
|---|---|---|
| Major Pentatonic (C D E G A) | None | Safe ambient music — the default choice |
| Minor Pentatonic (A C D E G) | None | Darker moods |
| Whole Tone (C D E F# G# A#) | Dissonant by nature | Dreamlike / ethereal |
| Dorian (D E F G A B C) | Minor 2nd (E-F) | Balanced tension |

**Major Pentatonic is the safest choice** — no semitone intervals means no dissonance regardless of which notes sound simultaneously.

#### Chord Progression

Cycle through 3–4 chords on a slow timer. Each chord defines a subset of the scale that instruments favor:

```javascript
const chords = [
    { root: 'C',  notes: [261.6, 329.6, 392.0] },
    { root: 'Am', notes: [220.0, 261.6, 329.6] },
    { root: 'F',  notes: [349.2, 440.0, 261.6] },
    { root: 'G',  notes: [392.0, 493.9, 293.7] },
];
let chordIndex = 0;
let chordTimer = 0;
const CHORD_DURATION = 16;  // seconds

function updateChord(dt) {
    chordTimer += dt;
    if (chordTimer > CHORD_DURATION) {
        chordTimer = 0;
        chordIndex = (chordIndex + 1) % chords.length;
    }
}
```

#### Instrument Layering with Jitter

Spawn instrument voices on independent timers with random jitter to prevent mechanical regularity:

```javascript
const instruments = [
    { name: 'harp', baseInterval: 3.0, jitter: 1.5 },
    { name: 'pad',  baseInterval: 8.0, jitter: 3.0 },
    { name: 'bell', baseInterval: 5.0, jitter: 2.0 },
];

// Stagger initial start times
instruments.forEach(inst => {
    inst.timer = inst.baseInterval * Math.random();
});

function updateMusic(dt) {
    instruments.forEach(inst => {
        inst.timer -= dt;
        if (inst.timer <= 0) {
            playInstrumentNote(inst.name, chords[chordIndex]);
            inst.timer = inst.baseInterval + (Math.random() - 0.5) * inst.jitter;
        }
    });
}
```

#### Reactive Density

World state modulates how frequently instruments play and how many are active:

| World State | Density | Active Instruments |
|---|---|---|
| Idle / calm | Sparse | Drone + occasional harp |
| Active exploration | Moderate | + pad, occasional bell |
| Near interactive objects | Dense | All instruments, shorter intervals |
| Climax / event | Maximum | Rapid notes, additional octaves |

### 8.15 State-Reactive Audio (Progressive Soundscapes)

As the player progresses (collecting objectives, visiting areas, completing milestones), new audio layers unlock. This creates a sense of the world sonically evolving in response to the player's actions.

#### Layer Activation Protocol

Each new layer follows the anti-clicking protocol for smooth introduction:

```javascript
function activateLayer(layerGain, targetVolume, fadeSeconds) {
    const now = ctx.currentTime;
    layerGain.gain.setValueAtTime(0, now);  // Anchor
    layerGain.gain.linearRampToValueAtTime(targetVolume, now + fadeSeconds);
}
```

#### Progression Example

| Milestone | Audio Change |
|---|---|
| Start (0 objectives) | Baseline ambient only (wind, noise layers) |
| First objective | + resonance drone layer |
| 2 objectives | + creature call frequency doubles (cooldowns halve) |
| 3 objectives | + harmonic undertone layer |
| 4 objectives | + full creature chorus, entity sounds gain harmonics |
| All objectives | + complete harmonic orchestra, all layers at full density |

#### Entity Sound Evolution

Beyond adding new layers, existing sounds evolve with progression:
- **Cooldowns halve** — creatures vocalize twice as often
- **Harmonics added** — creature calls gain octave doublings
- **Reverb send increases** — sounds feel more spacious and connected
- **Volume ceilings rise** — the world gets louder as it "awakens"

### 8.16 Audio Performance Budget

| Metric | Budget | Rationale |
|---|---|---|
| Frame impact | < 1ms per frame | Audio processing must not cause frame drops |
| Max oscillators | 40–50 (desktop), 24 (mobile) | Browser-dependent; Safari most constrained |
| Noise buffers | ~4 MB total | 3 buffers × ~1.3 MB each |
| Voice pool | 32 chains (desktop), 16 (mobile) | Pre-allocated, zero runtime allocation |
| GC pressure | Zero in hot path | Node reuse, pre-allocated buffers |

**Node reuse vs. creation cost:**

| Operation | Cost | Allocation |
|---|---|---|
| `createOscillator()` + `.start()` | ~0.1ms | Heap allocation |
| Reconfigure existing node parameters | ~0.005ms | Zero allocation |

Node reuse is ~20× faster and produces zero garbage. Over a 60-minute session with 1000+ transient sounds, the difference is measurable in both GC pause frequency and memory stability.

**Audio clock drift detection:**

```javascript
function checkAudioHealth() {
    const { performanceTime } = ctx.getOutputTimestamp();
    const systemTime = performance.now() / 1000;
    const drift = Math.abs(systemTime - performanceTime);
    if (drift > 0.01) {
        console.warn('Audio thread overloaded, drift:', drift.toFixed(4), 's');
    }
}
```

**Mobile adjustments:**

| Adjustment | Desktop | Mobile |
|---|---|---|
| Pool size | 32 | 16 |
| Noise buffer duration | 16s | 8s |
| Reverb | Full dual-delay | Single delay or skip |
| Max simultaneous oscillators | 50 | 24 |
| Ambient layers | All | Core subset only |

### 8.17 Audio Rules Summary

These rules are mandatory. Violating them produces memory leaks, audio chaos, or crashes.

1. **Guard every public function.** `if (!initialized || muted) return;` at the top.
2. **Individual voice volumes: 0.02–0.08.** The mix is dense. Master gain handles overall volume.
3. **Always `.stop(time)` on fire-and-forget oscillators.** Unstopped nodes leak memory indefinitely.
4. **Never disconnect pooled nodes.** Gain-zero is silence. Disconnecting causes clicks and graph recompilation.
5. **Anchor before every ramp.** `setValueAtTime(current, now)` before `linearRampToValueAtTime()`.
6. **Shared reverb only.** One dual-delay reverb connected as a send. Never per-voice reverb.
7. **Cooldowns on entity sounds: 4–18 seconds per type.** Prevents audio noise from dense clusters.
8. **Layer gating by progression.** Do not activate all audio layers from frame 1. Build the mix gradually.
9. **Co-prime noise buffer lengths.** Prevents audible repetition patterns.
10. **Callback injection or event bus.** Entity files never import audio.js directly.

### 8.18 Phase V Verification Gate

| # | Check | How to Verify |
|---|---|---|
| V-A | Audio init requires user gesture | `initAudio()` called from keydown/click/touch handler |
| V-B | All public audio functions guarded | `if (!initialized \|\| muted) return;` at top |
| V-C | All fire-and-forget oscillators call `.stop(time)` | Search for `.start(` — each must have matching `.stop(` |
| V-D | Voice pool pre-allocated at init | Pool array populated in `buildVoicePool()` |
| V-E | Anti-clicking anchors present | Every `linearRampToValueAtTime` preceded by `setValueAtTime` |
| V-F | No entity files import audio.js | Import graph shows audio only imported by main.js (or event bus subscription) |
| V-G | Creature sound cooldowns implemented | Timestamp + minimum interval check present |
| V-H | Noise buffers use co-prime lengths | Buffer durations share no common factor |
| V-I | Bus architecture has 4 category buses | Ambient, Entity, Music, Interaction buses exist |
| V-J | Shared reverb uses irrational delay ratios | Delay times are not integer multiples |
| V-K | Mobile pool size reduced | Conditional pool size based on platform detection |

**Failure modes if violated:**
- Memory leak from oscillators never stopped (rule 3) or nodes never gain-zeroed (rule 4).
- Audio clicks from missing anchor (rule 5).
- Audio crash before user interaction (guard pattern missing).
- Audio noise from 30+ simultaneous creature voices (cooldown rule 7 violated).
- Circular import crash (rule 10 violated).
- Audible noise buffer repetition (rule 9 violated).

---

## §9 Phase VI: Post-Processing & Visual Budget

**Requires:** `renderer`, `scene`, `camera`, all visual entities (Phase 0–IV).
**Provides:** Bloom pipeline, light budget management, performance monitoring.

### 9.1 Bloom Pipeline [MULTI-FILE ONLY]

Bloom is the primary visual enhancement for bioluminescent and magical worlds. All entities with `emissive` color and `emissiveIntensity > 0` automatically contribute to bloom. The pipeline uses Three.js `EffectComposer` with `UnrealBloomPass`.

```javascript
// [MULTI-FILE] — post-processing imports not available on r128 CDN
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.8,    // strength — 0.5-1.2 typical range
    0.4,    // radius — blur spread
    0.85    // threshold — minimum brightness to bloom
);
composer.addPass(bloomPass);

// In resize handler:
// composer.setSize(window.innerWidth, window.innerHeight);

// In animation loop (replaces renderer.render()):
// composer.render();
```

**Fallback flag.** Maintain a `bloomEnabled` boolean. On low-performance devices (detected by monitoring FPS), disable the EffectComposer and fall back to direct `renderer.render(scene, camera)`. This is the first degradation step when the performance budget is exceeded.

```javascript
let bloomEnabled = true;

function postRender() {
    if (bloomEnabled) {
        composer.render();
    } else {
        renderer.render(scene, camera);
    }
}
```

### 9.2 Light Budget

WebGL has practical limits on real-time lights. The budget allocation must be declared upfront (TEP v5.2 §IV) and enforced at runtime.

```
Budget: 8 real-time lights maximum (BUDGET.MAX_LIGHTS)
Allocation:
  1  HemisphereLight     (ambient sky/ground — permanent)
  2  DirectionalLight     (moon, secondary source — permanent)
  1  PointLight           (player-attached light — permanent)
  1  PointLight           (quest progression light — conditional)
  N  PointLight           (proximity-sorted dynamic pool, N = 8 - fixed count)
```

**Proximity-sorted dynamic pool.** For dynamic lights (crystal glow, campfires, bioluminescent creatures), maintain a pool of N `PointLight` objects. Each frame, sort light-emitting entities by distance to player and assign the pool lights to the nearest N. Deactivate (`.intensity = 0`) lights assigned to distant entities.

```javascript
/**
 * @brief Updates the dynamic light pool. Assigns real-time lights to nearest entities.
 * @param lightEntities [Array] All entities that emit light, with { x, z, lightColor, lightIntensity }.
 * @param playerPos [Object] Player position { x, z }.
 * @param lightPool [Array] Pre-allocated PointLight objects.
 * @note Re-sort only when player moves > 1m to avoid per-frame sort overhead.
 */
let _lastSortX = 0, _lastSortZ = 0;

function updateLightPool(lightEntities, playerPos, lightPool) {
    const dx = playerPos.x - _lastSortX, dz = playerPos.z - _lastSortZ;
    if (dx * dx + dz * dz < 1) return;  // Player hasn't moved enough — skip re-sort

    _lastSortX = playerPos.x;
    _lastSortZ = playerPos.z;

    // Sort by distance to player (squared distance)
    lightEntities.sort((a, b) => {
        const da = (a.x - playerPos.x) ** 2 + (a.z - playerPos.z) ** 2;
        const db = (b.x - playerPos.x) ** 2 + (b.z - playerPos.z) ** 2;
        return da - db;
    });

    // Assign pool lights to nearest entities
    for (let i = 0; i < lightPool.length; i++) {
        if (i < lightEntities.length) {
            const e = lightEntities[i];
            lightPool[i].position.set(e.x, e.lightY || 2, e.z);
            lightPool[i].color.setHex(e.lightColor);
            lightPool[i].intensity = e.lightIntensity;
        } else {
            lightPool[i].intensity = 0;  // Deactivate unused pool lights
        }
    }
}
```

### 9.3 Performance Budget

The performance budget is declared upfront and is non-negotiable once set (TEP v5.2 §IV). Every rendering decision is evaluated against these limits. When a limit is exceeded, the corresponding action triggers automatically — no human intervention required.

| Resource | Hard Limit | Trigger Action if Exceeded |
|---|---|---|
| **Frame rate** | 20 FPS minimum | Disable bloom → reduce entity counts → reduce shadow resolution |
| **Draw calls** | < 200 | Convert individual Groups to InstancedMesh → merge static geometry |
| **Real-time lights** | 8 maximum | Enforce proximity pool (nearest N only) |
| **Particles per pool** | < 500 | Reduce spawn rate → recycle oldest → halt new spawns |
| **Texture memory** | < 32 MB total | Reduce canvas texture sizes (2048 → 1024 → 512) |
| **Shadow maps** | 2048 desktop / 512 mobile | Reduce resolution → disable secondary light shadows |

**Runtime monitoring.** Track FPS with a smoothed exponential average. If FPS drops below the budget for 3+ consecutive seconds, trigger the first degradation action. If it remains below budget after 5 seconds, trigger the next action.

```javascript
let fpsSmooth = 60;
let belowBudgetStart = 0;
let degradationLevel = 0;

function monitorPerformance(dt) {
    fpsSmooth = fpsSmooth * 0.95 + (1 / Math.max(dt, 0.001)) * 0.05;

    if (fpsSmooth < BUDGET.TARGET_FPS) {
        if (belowBudgetStart === 0) belowBudgetStart = performance.now();
        const duration = (performance.now() - belowBudgetStart) / 1000;

        if (duration > 3 && degradationLevel === 0) {
            bloomEnabled = false;  // First degradation: disable bloom
            degradationLevel = 1;
        }
        if (duration > 5 && degradationLevel === 1) {
            // Second degradation: reduce particle spawn rates by 50%
            degradationLevel = 2;
        }
    } else {
        belowBudgetStart = 0;
    }
}
```

### 9.4 Memory Rules

These rules prevent the slow memory accumulation that causes frame rate degradation over long play sessions.

1. **No allocations in the animation loop.** Pre-allocate all temporary vectors, matrices, and quaternions at module scope with `_` prefix naming convention (`_tempVec`, `_camDesired`, `_steerVec`). Any `new THREE.Vector3()` inside `animate()`, `director()`, or `update()` is a protocol violation.

2. **Reuse geometry from the GEO pool.** Scale via `mesh.scale.set()`, never via `new THREE.SphereGeometry(customRadius)`.

3. **Buffer attribute reuse.** Particle systems pre-allocate `Float32Array` buffers at init time. The buffer size never changes at runtime.

4. **Dispose removed entities.** If an entity is permanently removed (not just culled), call `geometry.dispose()` and `material.dispose()` to release GPU memory.

5. **Material sharing.** Same-type entities share material references. Only clone when an entity needs individual emissive modulation.

### 9.5 Phase VI Verification Gate

| # | Check | How to Verify |
|---|---|---|
| VI-A | Performance budget declared before any rendering code | Budget table exists in constants |
| VI-B | Bloom has a disable fallback | `bloomEnabled` flag controls render path |
| VI-C | Dynamic lights use proximity pool | Pool sort + assignment logic present |
| VI-D | Total real-time lights ≤ BUDGET.MAX_LIGHTS | Count all light objects in scene |
| VI-E | No `new THREE.Vector3()` in animation/director/update | Search for `new THREE.` in hot-path functions |
| VI-F | FPS monitoring with degradation triggers | `monitorPerformance()` function present |
| VI-G | Bloom resize updates composer size | `composer.setSize()` in resize handler |

**Failure modes if violated:**
- Sustained FPS below budget with no recovery (§9.3 monitoring absent).
- Draw call explosion from individual meshes at scale (§9.3 draw call budget violated).
- Slow memory leak from per-frame allocations (§9.4 rule 1 violated).
- Bloom renders at wrong resolution after resize (§9.5 VI-G violated).

---

## §10 Phase VII: Narrative Integration

**Requires:** Stable game loop, audio callbacks, entity references (Phase I–VI).
**Provides:** Quest state machine, discovery system, dual-narrative architecture, progression gating, finale sequence, source code lore layer.

Narrative integration is built last, on top of a stable simulation. Without it, the simulation is a tech demo — visually impressive but without purpose. This phase provides the structural patterns that give the player a reason to explore.

**Design philosophy:** The narrative emerges from observation, not exposition. No dialogue, no cutscenes, no exposition dumps. All story is delivered through brief discovery text and environmental clues. The story is optional — a player can complete the simulation without reading any text. The core message is communicated through mechanics: preservation through attention, not possession; synchrony, not extraction.

### 10.1 Quest State Machine

A multi-phase state machine tracks player progression. The quest manager is a pure logic module — it never directly manipulates entities or audio. It exports state and fires callbacks (or emits events) injected at init time (§8.12).

```javascript
let questPhase = 'SEEK';
let objectivesFound = 0;
const objectivesTotal = 5;
let phaseTimer = 0;
let _questCallbacks = {};

function initQuest(callbacks) { _questCallbacks = callbacks; }

function updateQuest(dt, t, playerPos) {
    if (questPhase === 'SEEK') {
        for (const obj of objectives) {
            if (obj.collected) continue;
            const dx = playerPos.x - obj.x, dz = playerPos.z - obj.z;
            if (dx * dx + dz * dz < 4) {
                obj.collected = true;
                objectivesFound++;
                emit(Events.ORB_COLLECTED, { index: objectivesFound, x: obj.x, z: obj.z });
                if (objectivesFound >= objectivesTotal) {
                    questPhase = 'RISING';
                    phaseTimer = 0;
                }
            }
        }
    } else if (questPhase === 'RISING') {
        phaseTimer += dt;
        if (phaseTimer > 12) { questPhase = 'COMPLETE'; phaseTimer = 0; }
    }
    // ... COMPLETE → FINALE → TRANSFORM → FREE_ROAM transitions
}
```

### 10.2 Dual-Narrative Architecture

The world can be read differently depending on the maturity of the player's observation. A `perspective` state (`'child'` | `'adult'`) controls which text layer is displayed, toggled via a key (e.g., Tab) or UI button. The game state, mechanics, and world are identical — only the textual framing changes.

```javascript
let perspective = 'child';  // Default: accessible, universal

function togglePerspective() {
    perspective = perspective === 'child' ? 'adult' : 'child';
}

// Parallel text maps:
const discoveryTexts = {
    walker: {
        child: "A glowing deer! It walks so quietly...",
        adult: "Biological Metronome detected. Gait: 0.8Hz oscillation."
    },
    hopper: {
        child: "A fuzzy little hopper!",
        adult: "High-frequency bounce pattern logged. 2Hz."
    },
    drifter: {
        child: "A floating glow-friend!",
        adult: "Pulse Metronome acquired. Phase-locked oscillation."
    },
    orbiter: {
        child: "Pretty spinning wings!",
        adult: "Orbital Metronome tracked. Radius 3.2m."
    },
};

function getDiscoveryText(type) {
    return discoveryTexts[type]?.[perspective] || type;
}
```

**Voice guidelines per perspective:**

| Aspect | Child Voice | Adult Voice |
|---|---|---|
| Sentence length | 8–15 words max | 10–20 words, formatted as log entries |
| Vocabulary | Wonder-filled, nature metaphors | Clinical, archival, slightly melancholic |
| Tone | "Sleepy," "sparkly," "friends" | "Oscillation," "entropy," "calibration" |
| Darkness | Nothing beyond "sleepy" | Subtext of loss, but never explicit |
| Format | Simple declaration | Field report or log entry |

**The hidden third layer.** Behind both perspectives lies an implied narrative: an architect who built the world to preserve it as a child once saw it. The child perspective is the original data. The adult perspective is the maintenance routine. The player keeps something beautiful alive through observation and synchrony. This layer is never stated explicitly — it is inferred by players who notice the patterns.

### 10.3 Discovery System

First-encounter text triggered by proximity to new entity types. Each entity type can only be "discovered" once. The display uses a fixed-position DOM overlay with CSS transitions.

```javascript
const discovered = {};

function checkDiscoveries(playerPos, entities) {
    for (const [type, list] of Object.entries(entities)) {
        if (discovered[type]) continue;
        for (const e of list) {
            const dx = playerPos.x - e.x, dz = playerPos.z - e.z;
            if (dx * dx + dz * dz < e.discoveryRadius * e.discoveryRadius) {
                discovered[type] = true;
                showDiscovery(type);
                emit(Events.DISCOVERY, { type });
                break;
            }
        }
    }
}

function showDiscovery(type) {
    const el = document.getElementById('discovery');
    el.textContent = getDiscoveryText(type);
    el.style.opacity = '1';
    setTimeout(() => { el.style.opacity = '0'; }, 3600);
}
```

```css
#discovery {
    position: fixed; top: 30%; left: 50%; transform: translateX(-50%);
    color: #fff; font-size: 24px; font-family: serif;
    text-shadow: 0 0 20px rgba(68, 255, 170, 0.8);
    opacity: 0; transition: opacity 0.6s ease;
    pointer-events: none; z-index: 200;
}
```

### 10.4 Progression-Gated Narrative Fragments

Ambient narrative fragments (e.g., triggered by looking at the sky during shooting stars) are gated by the player's progression level. This creates a drip-feed of story that rewards continued exploration.

```javascript
const progressionTexts = {
    0: { child: "Make a wish!",
         adult: "Archival fragment: ...system boot, cycle 1." },
    1: { child: "The stars are listening...",
         adult: "Fragment: ...I built this place for her." },
    2: { child: "Someone drew pictures in the sky.",
         adult: "Fragment: ...oscillations matched her heartbeat." },
    3: { child: "I wonder who lived here before.",
         adult: "Fragment: ...I hope she remembers the fireflies." },
    4: { child: "The stars feel closer tonight.",
         adult: "Fragment: ...time cannot take what has been loved." },
};

function getProgressionText() {
    const level = Math.min(objectivesFound, 4);
    return progressionTexts[level]?.[perspective] || '';
}
```

### 10.5 Progression-Gated Content

Not everything should be active from frame 1. Layer systems and content density by player progression to build engagement gradually.

| Progress Level | Unlocked Systems |
|---|---|
| 0 (baseline) | World exploration, ambient audio, basic weather |
| 1 | New audio layer (drone), first visual enhancement, expanded creature sounds |
| 2 | Creature sound frequency doubles, weather adds its most dramatic state |
| 3 | Directional hints toward remaining objectives, expanded ambient music |
| 4 | Enhanced reverb, full musical variation, new creature behaviors |
| 5 (complete) | Full audio symphony, post-game free roam, all visual effects maximum |

### 10.6 Finale Sequence

Multi-phase visual escalation for quest completion. Each sub-phase has a time window and specific visual/audio effects.

| Phase | Time Window | Visual Effect | Audio Effect |
|---|---|---|---|
| COMPLETE | 0–12s | Central structure activates, creatures migrate inward | Rising drone, harmonic buildup |
| FINALE | 12–42s | Sustained peak, all effects active, creature gathering | Full orchestral layers, reverb maximum |
| TRANSFORM | 42–55s | World-wide color shift, flash, new material colors | Crescendo → silence → new ambient |
| FREE_ROAM | 55s+ | All restrictions lifted, peaceful exploration | New ambient layer at maximum density |

Use DOM overlays for full-screen flash effects. Stagger visual effects over 2–3 seconds for dramatic buildup. Cosine-blend between old and new material colors during TRANSFORM: `color.lerpColors(oldColor, newColor, (1 - Math.cos(progress * Math.PI)) / 2)`.

### 10.7 Creature Interaction Design Template

For simulations where creatures are central to gameplay, the interaction design follows a layered unlock pattern. Each creature type has a unique interaction method that reflects its behavioral character.

**Design principles:**
- **Observation before interaction.** The player must first observe the creature's rhythm before attempting to interact. Stillness mechanics (§7.13) reward patience.
- **Behavioral mirroring.** The interaction method mirrors the creature's natural behavior: match a walker's pace, match a drifter's rhythm, match a hopper's energy level, match an orbiter's circular motion.
- **Frequency as currency.** Once attuned, the player "carries" the creature's frequency as a temporary state. This frequency decays over time, creating urgency to reach the objective before it fades.
- **Visual feedback loop.** The player's light shifts color to match the attuned creature. Environmental glow modulates in response. Audio layers shift.

| Creature Archetype | Interaction Method | Player Action | Feedback |
|---|---|---|---|
| Drifter (slow, meditative) | Rhythm matching (timed input in sync with creature's bob) | Stand still nearby, tap input in rhythm | Glass-harmonica voice brightens |
| Hopper (fast, staccato) | Energy matching (sprint near creature) | Sprint within range | Chirp arpeggio quickens |
| Walker (graceful, steady) | Pace matching (walk same direction) | Walk (no sprint) within range, same heading | Horn tone rises |
| Orbiter (circular, hypnotic) | Path matching (circle near creature while looking at it) | Move laterally within range, maintain visual lock | Flutter intensifies |

### 10.8 Source Code Lore (4th Wall Layer)

For projects targeting an audience that may inspect the source (F12 / DevTools), the source code itself can contain an embedded narrative layer — comments formatted as field reports, lab notes, or personal logs that deepen the world's mystery.

**Guidelines:**
- Place lore comments near the top of entity/system files, after the banner comment but before code. Never inline with logic.
- Voice: clinical-becoming-unsettled. Start with scientific observation, end with something that doesn't quite add up. Never explain the mystery — only deepen it.
- Reference real code properties (pulse rates, distances, counts) as if they're observed phenomena.
- Keep each note to 4–7 lines of comment text.
- Use `//` line comments, not block comments.
- Aim for ~1 lore comment per major system/entity file. Not every file needs one.
- Prioritize files an inspector would naturally explore first (main entry, player, audio, quest objectives, key creatures).

### 10.9 Narrative Constraints

These constraints are structural, not suggestions. They define the narrative's character.

1. **No exposition dumps.** All story delivered through brief discovery text (8–20 words) and environmental clues.
2. **No dialogue.** The player is alone — accompanied only by the world itself.
3. **No cutscenes.** Everything happens in-world during gameplay. The player is never taken out of control.
4. **The story is optional.** A player can complete the simulation without reading any text. The mechanics are the story.
5. **The dual narrative is structural, not cosmetic.** Every discovery text, environmental cue, and creature behavior must read coherently from both perspectives.
6. **Weather affects gameplay, not just visuals.** The ecosystem is interconnected — weather modifies creature behavior which modifies interaction difficulty.
7. **Stillness is a mechanic.** The simulation rewards patience as a core design principle, not just a nice-to-have.
8. **The finale is emotional, not spectacular.** Visual effects support the emotional payoff; they do not replace it.

### 10.10 Phase VII Verification Gate

| # | Check | How to Verify |
|---|---|---|
| VII-A | Quest manager uses callback injection or event bus, not direct imports | No audio/entity imports in quest module |
| VII-B | Discovery triggers fire only once per type | `discovered[type]` flag prevents re-trigger |
| VII-C | Progression gating is implemented | Subsystem activation checks objective count |
| VII-D | Finale phases have timed transitions | `phaseTimer` advances and triggers transitions |
| VII-E | Flash effect uses DOM overlay, not WebGL | No full-screen WebGL quad for flash |
| VII-F | Dual-narrative texts exist for both perspectives | Every discovery key has both child and adult text |
| VII-G | Perspective toggle is functional | Tab key (or equivalent) switches perspective |
| VII-H | Progression-gated fragments exist per level | Text map has entries for 0 through max objectives |
| VII-I | Narrative constraints respected | No dialogue, no cutscenes, no exposition dumps |

**Failure modes if violated:**
- Circular import crash from quest importing audio (§8.12 violated).
- Discovery spam from repeated triggers (flag check missing).
- All audio layers active from frame 1, creating overwhelming initial experience (§10.5 violated).
- Single-perspective text breaks immersion for the alternate audience (§10.2 violated).

---

## §11 HUD & Error Handling

### 11.1 HUD

The HUD displays runtime stats (FPS, state, particle count, quest progress) via DOM elements. DOM writes trigger browser layout recalculation, so HUD updates are throttled to every 4–8 frames.

```javascript
const hudEl = document.getElementById('hud');
let fpsDisplay = 60;
let hudCounter = 0;

/**
 * @brief Updates the HUD DOM element. Throttled to reduce layout thrash.
 * @param dt [float] Delta time.
 */
function updateHUD(dt) {
    if (++hudCounter % 6 !== 0) return;  // Update every 6th frame

    fpsDisplay = fpsDisplay * 0.95 + (1 / Math.max(dt, 0.001)) * 0.05;
    hudEl.textContent = [
        `FPS: ${Math.round(fpsDisplay)}`,
        `State: ${playerSM?.current || 'N/A'}`,
        `Particles: ${particlePool?.activeCount || 0}`,
        `Quest: ${orbsFound}/${orbsTotal}`,
    ].join(' | ');
}
```

### 11.2 Phase Breadcrumb Logging

Wrap `init()` in a try-catch that logs phase completion. This provides immediate diagnostic information when a blank screen occurs.

```javascript
function init() {
    try {
        console.log('✓ Phase 0: Renderer');
        // ... Phase 0 init ...

        console.log('✓ Phase I: World anchor');
        initWorldAnchor(scene);

        console.log('✓ Phase 1.5: Input controller');
        // ... Input init ...

        console.log(`✓ Phase II: Actors (${scene.children.length} children)`);
        // ... Entity construction ...

        console.log(`✓ Phase III: Particle pool (${particlePool.pool.length} capacity)`);
        // ... Pool init ...

        console.log('✓ Phase IV: Director');
        // ... State machine init ...

        console.log('═══ Initialization complete. Starting animation loop. ═══');
        animate();
    } catch (e) {
        console.error('INIT FAILURE:', e);
        // Display error in DOM for non-developer users
        document.body.innerHTML = `<div style="color:red;padding:20px;font-family:monospace;">
            Simulation failed to initialize.<br>Error: ${e.message}<br>
            Check console for details.</div>`;
    }
}
```

### 11.3 Blank-Screen Diagnostic Checklist

When the simulation shows a blank screen, diagnose in this order (most common causes first):

1. **CapsuleGeometry on r128.** Search for `CapsuleGeometry` — if found and target is r128, replace with `CylinderGeometry`. This is the #1 cause.
2. **Camera inside geometry.** Check `camera.position` — if it's at `(0,0,0)` and the ground plane is at Y=0, the camera is inside the ground. Set `camera.position.y` to `EYE_H` or higher.
3. **Missing lights.** If no lights are in the scene, `MeshStandardMaterial` renders black. Check that `initLighting()` was called.
4. **Shadow camera frustum too small.** Default shadow camera covers a tiny area. If the only directional light has misconfigured shadow bounds, shadows clip and the scene may appear black.
5. **`renderer.render()` never called.** Verify that the animation loop invokes `renderer.render(scene, camera)` or `composer.render()`.
6. **Fog density too high.** `FogExp2` density above 0.05 turns everything white/black depending on fog color. Check `scene.fog.density`.
7. **Canvas not appended to DOM.** Verify `document.body.appendChild(renderer.domElement)` was called.

### 11.4 Runtime Error Recovery

Non-fatal errors (e.g., a single entity failing to construct) should not crash the entire simulation. Use targeted try-catch around entity construction loops and log failures without halting initialization.

```javascript
for (let i = 0; i < treeCount; i++) {
    try {
        const tree = makeTree(srRange(-WORLD_R, WORLD_R), srRange(-WORLD_R, WORLD_R));
        trees.push(tree);
        scene.add(tree.group);
    } catch (e) {
        console.warn(`Tree ${i} failed to construct:`, e.message);
        // Continue — skip this tree, build the rest
    }
}
```

---

## §12 Verification & Failure Analysis

### 12.1 Master Failure Mode Table

This table catalogs every known failure mode, its phase origin, visible symptom, root cause, fix, and verification test. Execute this checklist during the post-generation verification pass (Gate 4 from §1.2).

| # | Failure Mode | Phase | Symptom | Root Cause | Fix | Verification |
|---|---|---|---|---|---|---|
| 1 | Blank Screen (silent) | II | Nothing renders, no console errors | `CapsuleGeometry` on r128 | Replace with `CylinderGeometry` | Search for `CapsuleGeometry` |
| 2 | Blank Screen (black) | I | Canvas is black | No lights added to scene | Add HemisphereLight + DirectionalLight | Count lights in `scene.children` |
| 3 | Coordinate Drift | II | Child meshes separate during movement | Movement applied to child instead of parent Group | All locomotion on root Group only | Move actor, verify children stay attached |
| 4 | Floating Debris | III | Particles hover after impact | Missing `vel.y -= g * dt` in particle update | Add gravity to particle physics loop | Spawn particles, verify they fall |
| 5 | Offset Geometry | III | FX spawn at world origin, not actor position | Using `mesh.position` instead of `getWorldPosition()` | Use `getWorldPosition()` for spawn origin | Spawn FX on a moving actor |
| 6 | Animation Speed Collapse | III | Objects move too fast or too slow | Motion not scaled by `dt` | Add `* dt` to all position/rotation changes | Run at 30 FPS and 60 FPS, compare speed |
| 7 | Primitive Collapse | II | Actors are featureless cubes/spheres | Minimum primitive count not met | Enforce compound primitive rule (§5.1) | Count children per actor type |
| 8 | Void State | I | Objects render without spatial reference | Ground/lights not initialized before actors | Complete Phase I before Phase II | Verify ground and lights exist before actors |
| 9 | Event-Handler Physics | 1.5 | Inconsistent movement speed across FPS | Physics in `keydown` handler instead of loop | Handlers SET state, loop READS state | Check handlers for position changes |
| 10 | Shadow Acne | I | Moiré patterns on lit surfaces | Self-shadowing from depth precision | `shadow.bias = -0.001` | Visual inspection of flat surfaces |
| 11 | Missing Resize | 0 | Stretched viewport after resize | No resize handler | Update aspect + projection + renderer size | Resize window, verify proportions |
| 12 | Diagonal Speed Boost | 1.5 | Moving diagonally is faster than on-axis | Input vector not normalized | `if (dir.length() > 0) dir.normalize()` | Hold W+D, compare speed to W only |
| 13 | Stuck Keys | 1.5 | Player moves forever after alt-tab | No blur handler resetting key state | `window.addEventListener('blur', reset)` | Alt-tab and return |
| 14 | Physics Explosion | IV | Objects teleport on tab return | `dt` not capped, first frame has huge delta | `Math.min(clock.getDelta(), 0.1)` | Background tab 5s, return |
| 15 | Synchronized Glow | IV | All entities pulse in unison | Missing per-entity `phase` and `speed` | Randomize phase (0–2π) and speed (0.5–1.5) | Visual inspection |
| 16 | Audio Memory Leak | V | FPS degrades over time | Oscillators not stopped | `.stop(time)` on all oscillators | Monitor Web Audio node count |
| 17 | Audio Crash | V | Console error on load | `AudioContext` started before user gesture | Init audio on first click/keypress | Load page, verify no audio errors |
| 18 | Entity Floating | I | Entities hover above flattened terrain | Flat zones registered after entity placement | Register flat zones BEFORE spawning | Check registration order |
| 19 | Non-Deterministic Layout | II | Different world on each reload | `Math.random()` instead of seeded RNG | Replace with `sr()` | Reload twice, compare entity positions |
| 20 | Draw Call Explosion | VI | FPS drops with many entities | Per-instance Groups instead of InstancedMesh | Convert 50+ instances to InstancedMesh | Check `renderer.info.render.calls` |

### 12.2 Pre-Generation Checklist

Execute before writing any code for a new simulation.

- [ ] Format declared: single-file or multi-file (Gate 0)
- [ ] Three.js version confirmed: r128 or r172+ (§0.2)
- [ ] Performance budget declared and confirmed by user (Gate 1, §9.3)
- [ ] Scope assessed: entity count, state machine count, LOC estimate (Gate 2)
- [ ] Output plan confirmed (§1.3)
- [ ] Color palette defined in C object (§5.6)
- [ ] Physics profiles selected (§6.3)
- [ ] Seeded RNG seed value selected (§5.7)

### 12.3 Post-Generation Verification Pass

Execute after all code is complete.

- [ ] Search for `CapsuleGeometry` — must be absent if target is r128
- [ ] Search for `Math.random()` — must be absent in entity/terrain code (allowed in audio noise buffers)
- [ ] Search for `new THREE.` inside animate/director/update functions — must be absent (no hot-path allocations)
- [ ] Search for `.position.` changes without `* dt` in animation code
- [ ] Verify all oscillators have matching `.stop()` calls
- [ ] Count real-time lights — must be ≤ BUDGET.MAX_LIGHTS
- [ ] Verify `getGroundY()` is called for all entity Y positions (no hardcoded `y = 0`)
- [ ] Verify flat zone registration precedes entity spawning
- [ ] Verify all entity types meet minimum primitive count (§5.1)
- [ ] Verify animation loop update order matches canonical sequence (§2.7)
- [ ] Run the Master Failure Mode Table (§12.1) as a final pass

### 12.4 Governing Assumptions & Limiting Factors

**Governing Assumptions** (restatement from §0.3 for checklist convenience):
- Newtonian physics approximation. Euler integration. No energy conservation guarantee.
- Single-threaded JavaScript execution. No Web Workers.
- Spherical collision (distance-based). No mesh or convex-hull collision.
- WebGL 1.0+ minimum. WebGL2 features degrade gracefully.
- No external asset imports. All content procedural.

**Limiting Factors:**
- Canvas texture generation blocks the main thread for 50–200ms. Acceptable at init only.
- `requestAnimationFrame` throttles to ~1 FPS when backgrounded. The `dt` cap prevents physics explosion on return.
- Web Audio API requires user gesture to start.
- Physics integrations above ~1000 independent bodies cause latency spikes on mobile.
- `InstancedMesh` with per-instance color requires manual buffer management (`instanceColor` attribute).
- `mergeGeometries` requires all input geometries to have matching attribute sets (all indexed or all non-indexed, same attribute names).

---

## §13 Technical Editor Protocol Integration

This section maps TEP v5.2 requirements to their enforcement points within this protocol, ensuring that any simulation generated under this protocol automatically satisfies the TEP's Web/3D domain checklist.

### 13.1 TEP v5.2 §VII Web/3D Checklist Mapping

| TEP Requirement | Protocol Enforcement |
|---|---|
| Architecture docs read before any code | §1.2 Gate 3 — Phase Readiness check requires reading prior phase documentation |
| Performance budget declared and enforced | §1.2 Gate 1 → §2.9 BUDGET constant → §9.3 hard limits table → §9.3 runtime monitoring |
| No allocations in animation/render loops | §9.4 Rule 1 → §12.3 post-gen search for `new THREE.` in hot paths |
| Seeded RNG for procedural content | §5.7 → §12.3 post-gen search for `Math.random()` |
| Phase-based roadmaps with tier priorities | §1.1 Phase Dependency Graph → §1.2 Agentic Decision Gates |

### 13.2 Performance Budget Declaration Template

Copy this table at the start of every new simulation project and fill in actual values before writing code.

```
PERFORMANCE BUDGET:
├─ Target FPS:              [20 / 30 / 60]
├─ Max Draw Calls:          [100 / 200 / 500]
├─ Max Real-Time Lights:    [4 / 8]
├─ Max Particles Per Pool:  [100 / 200 / 500]
├─ Max Entity Types:        [N]
├─ Max Total Entity Count:  [N]
├─ Ground Texture Res:      [512 / 1024 / 2048]
├─ Sky Texture Res:         [512 / 1024 / 2048]
├─ Shadow Map Res:          [512 / 1024 / 2048]
├─ Audio Voices (simult.):  [4 / 8 / 16]
├─ Bloom Enabled:           [yes / no / fallback]
└─ Target Platform:         [desktop / desktop+mobile]
```

### 13.3 Doxygen Tier Application to WebGL Code

Per TEP v5.2 §IV, documentation scales with scope.

**Tier 1 (always required):** `@file`, `@brief`, `@param` (with units and ranges), `@return`. Applied to every file header and every exported function.

**Tier 2 (conditional):** `@warning` (for silent failure modes like CapsuleGeometry), `@note` (for non-obvious design decisions), `@pre` (for phase dependencies). Applied to functions with known gotchas.

**Tier 3 (professional):** `@version`, `@date`, `@see` (cross-references to protocol sections). Applied to module-level documentation in multi-file projects.

### 13.4 Output Plan for WebGL Projects

When the Output Disambiguation Gate triggers (>100 lines, multi-file output), confirm with this specialized template.

```
OUTPUT PLAN (WebGL Simulation):
├─ Format: [single-file HTML / multi-file Vite]
├─ Three.js Version: [r128 CDN / r172+ npm]
├─ Destination: [artifact / file(s) / inline]
├─ Performance Budget: [filled from §13.2 template]
├─ Phases Required: [0–IV for non-narrative / 0–VII for full]
├─ Estimated LOC: [N]
├─ Entity Types: [list]
├─ State Machines: [list]
└─ Proceed? [Y / specify alternate]
```

### 13.5 Seeded RNG Enforcement Rule

**Rule:** All procedural generation code must use `sr()` (§5.7). `Math.random()` is permitted only in:
- Audio noise buffer generation (white/brown noise requires true randomness for non-repeating noise).
- One-time debug/development randomization explicitly marked with `// DEBUG: Math.random()`.

**Enforcement:** The post-generation verification pass (§12.3) includes a mandatory text search for `Math.random()`. Each occurrence must be justified or replaced.

---

## Appendix A: Module Organization Template (Vite)

Reference directory structure for multi-file projects. Copy and prune for project scope.

```
src/
├── main.js              # Entry: init(), animate(), director() orchestration
├── constants.js         # ALL constants, colors (C), physics profiles (PHYS), budgets (BUDGET)
├── core/
│   ├── renderer.js      # WebGL renderer, camera, scene, clock exports
│   ├── lighting.js      # Light setup + proximity pool system
│   ├── postprocessing.js  # Bloom pipeline + fallback flag
│   ├── input.js         # Keyboard, mouse, touch, pointer lock
│   ├── player.js        # Player controller + physics + head bob
│   └── geometries.js    # Shared GEO pool + sr() seeded RNG
├── world/
│   ├── terrain.js       # Heightmap + flat zones + keep-out zones
│   ├── ground.js        # Procedural ground texture + vertex biomes
│   └── sky.js           # Sky dome + celestial objects
├── entities/
│   ├── flora/           # Plant entity types (one file per type)
│   ├── fauna/           # Creature entity types (one file per type)
│   ├── magical/         # Interactive objects (orbs, crystals, portals)
│   └── world/           # Terrain features, structures
├── particles/           # Pooled particle systems (one file per type)
├── systems/
│   ├── audio.js         # Procedural audio engine + noise buffers
│   ├── music.js         # Generative music layer
│   ├── weather.js       # Weather state machine + exports
│   ├── dayNightCycle.js # Time-of-day + bioGlow export
│   ├── discoveries.js   # First-encounter tracking
│   └── ai/              # Senses + steering behaviors (one file per behavior set)
├── quest/
│   └── questManager.js  # Quest state machine + progression gating
└── ui/
    ├── hud.js           # Runtime stats + quest status DOM updates
    └── overlay.js       # Start screen, discovery overlay, finale flash
```

## Appendix B: Performance Budget Template

Copy for each project. Fill before writing code. Do not modify after Phase 0 is complete.

| Resource | Budget | Actual | Status |
|---|---|---|---|
| Target FPS | | | |
| Draw calls | | | |
| Real-time lights | | | |
| Particle pool (per system) | | | |
| Ground texture resolution | | | |
| Sky texture resolution | | | |
| Shadow map resolution | | | |
| Entity types | | | |
| Total entity count | | | |
| Audio voices (simultaneous) | | | |
| Total estimated LOC | | | |
| Bloom enabled | | | |

## Appendix C: Color Palette Template

Organize colors by category in a single `C` object in `constants.js`.

```javascript
export const C = {
    // ── Environment ──────────────────────────
    sky:            0x000000,
    fog:            0x000000,
    ground:         0x000000,
    water:          0x000000,

    // ── Flora (per type: base, glow, stem/detail) ──
    entityBase:     0x000000,
    entityGlow:     0x000000,
    entityDetail:   0x000000,

    // ── Fauna (per creature: body, glow, eye/detail) ──
    creatureBody:   0x000000,
    creatureGlow:   0x000000,
    creatureDetail: 0x000000,

    // ── Quest (orb, laser, obelisk, finale) ──
    questPrimary:   0x000000,
    questGlow:      0x000000,
    questAccent:    0x000000,

    // ── Sky (stars, nebulae, galaxies) ──
    starDim:        0x000000,
    starBright:     0x000000,
    nebula:         0x000000,
};
// Naming convention: [entity][part] in camelCase.
// Examples: jellyBell, jellyGlow, jellyTent, deerBody, deerGlow.
```

## Appendix D: Physics Constants Reference

| Constant | Value | Unit | Usage |
|---|---|---|---|
| GRAVITY (game) | 15 | m/s² | Player jump arcs (snappy feel) |
| GRAVITY (realistic) | 9.8 | m/s² | Standard falling objects |
| GRAVITY (heavy) | 30–60 | m/s² | Rocks, debris (visual slam) |
| GRAVITY (light) | 2–5 | m/s² | Feathers, spores, embers |
| GRAVITY (float) | 0.5 | m/s² | Bubbles, fireflies |
| MOVE_SPEED | 6 | m/s | Base walk speed |
| SPRINT_MULT | 1.8 | × | Sprint = MOVE_SPEED × SPRINT_MULT |
| JUMP_IMPULSE | 8 | m/s | Upward velocity on jump |
| GROUND_DRAG | 0.85 | per-frame | Horizontal deceleration on ground |
| AIR_DRAG | 0.98 | per-frame | Horizontal deceleration in air |
| DT_CAP | 0.1 | seconds | Maximum delta time per frame |
| MOUSE_SENS | 0.002 | rad/pixel | Mouse look sensitivity |
| PITCH_LIMIT | ±1.52 | radians | ~87° — prevents gimbal lock |
| HEAD_BOB_AMP | 0.06 | meters | Vertical head bob amplitude |
| CULL_DIST | 110 | meters | Entity visibility cull distance |

## Appendix E: Three.js API Version Divergence Table

Extended reference for r128 ↔ r172+ differences. See §0.2 for the critical subset.

| Feature | r128 | r172+ | Migration Path |
|---|---|---|---|
| `CapsuleGeometry` | ✗ Not available | ✓ Available | Use `CylinderGeometry` on r128 |
| `outputEncoding` | `THREE.sRGBEncoding` | Removed → `outputColorSpace = THREE.SRGBColorSpace` | Conditional based on version |
| `MathUtils.seededRandom()` | ✗ Not available | Limited implementation | Custom LCG preferred for both (§5.7) |
| `BufferGeometryUtils.mergeGeometries()` | ✗ Not in CDN | ✓ `three/addons/utils/` | Vendor-inline or skip on r128 |
| Post-processing passes | ✗ Not in CDN | ✓ `three/addons/postprocessing/` | Vendor-inline or skip on r128 |
| `OrbitControls` | ✗ Not in CDN (separate script) | ✓ `three/addons/controls/` | Separate CDN or vendor-inline on r128 |
| `texture.colorSpace` | ✗ Not available | ✓ Use for `CanvasTexture` | Omit on r128 |
| `renderer.outputColorSpace` | ✗ Not available | ✓ Replaces `outputEncoding` | Use `outputEncoding` on r128 |
| `THREE.SRGBColorSpace` | ✗ Not available | ✓ Constant | Use `THREE.sRGBEncoding` on r128 |

## Appendix F: Atmosphere Preset Library

Pre-configured atmosphere settings for common simulation themes. Apply during Phase I initialization.

| Preset | scene.background | Fog Type | Fog Param | Hemi Sky | Hemi Ground | Hemi Int | Dir Int | Dir Color | Use Case |
|---|---|---|---|---|---|---|---|---|---|
| Daylight | `0x87CEEB` | Fog | far: 300 | `0x87CEEB` | `0x3a5f0b` | 0.8 | 1.4 | `0xfff8e7` | Bright outdoor |
| Overcast | `0x8899aa` | FogExp2 | 0.005 | `0x8899aa` | `0x555555` | 0.6 | 0.6 | `0xcccccc` | Muted outdoor |
| Dusk | `0x2a1a3a` | FogExp2 | 0.006 | `0x5533aa` | `0x331122` | 0.4 | 0.6 | `0xff8844` | Golden hour |
| Night | `0x081018` | FogExp2 | 0.01 | `0x112244` | `0x000000` | 0.15 | 0.3 | `0x8888cc` | Dark with moonlight |
| Deep Night | `0x030308` | FogExp2 | 0.012 | `0x080818` | `0x000000` | 0.08 | 0.1 | `0x6666aa` | Near-black, glow-dependent |
| Bioluminescent | `0x060c14` | FogExp2 | 0.01 | `0x0a1020` | `0x001108` | 0.12 | 0.2 | `0x8888aa` | Luminaries-style |
| Void / Space | `0x000000` | None | — | — | — | 0.05 | 0 | — | Abstract, no atmosphere |
| Fog Bank | `0x889999` | FogExp2 | 0.025 | `0x889999` | `0x667777` | 0.6 | 0.4 | `0xdddddd` | Dense fog |
| Underwater | `0x0a2040` | FogExp2 | 0.02 | `0x0a2040` | `0x051020` | 0.3 | 0.4 | `0x88bbcc` | Submerged feel |
| Lava / Infernal | `0x1a0800` | FogExp2 | 0.008 | `0x331100` | `0x110000` | 0.3 | 0.8 | `0xff4400` | Volcanic, emissive |

## Appendix G: Audio Bus Architecture Template

Copy for each project. Adjust bus gains and reverb parameters to match the project's acoustic character.

```
AUDIO ARCHITECTURE:
├─ AudioContext
│   └── Master Gain (0.5) → Destination
│         ├── Ambient Bus (0.3-0.6) → [noise layers, weather, biome]
│         ├── Entity Bus (0.4-0.8) → [creature voices, movement sounds]
│         ├── Music Bus (0.2-0.5) → [generative instruments, drones]
│         ├── Interaction Bus (0.5-1.0) → [footsteps, impacts, UI]
│         └── Reverb Bus (0.3) → Master
│               ├── Delay 1 (time: ___s, feedback: ___)
│               ├── Delay 2 (time: ___s, feedback: ___)
│               ├── HPF @ 200Hz (anti-rumble)
│               └── LPF @ 2500Hz (tail darkening)
│
├─ Voice Pool: __ chains (desktop) / __ chains (mobile)
├─ Noise Buffers: _s brown + _s white + _s pink (co-prime)
├─ Scheduling: Strategy A (game-loop) + Strategy B (music lookahead)
└─ Mobile Overrides: reduced pool, shorter buffers, simplified reverb
```

## Appendix H: Creature Interaction Design Template

Use when designing creature types that interact with the player. Fill in per-creature-type.

```
CREATURE DESIGN: [Name]
├─ Movement Model: [drift / hop / walk / orbit / custom]
├─ Rhythm: [frequency in Hz, character description]
├─ Audio Voice:
│   ├── Synthesis: [waveform → filter → envelope description]
│   ├── Frequency range: [Hz–Hz]
│   └── Cooldown: [seconds]
├─ Interaction:
│   ├── Phase 1 (optional gate): [pitch matching, proximity, etc.]
│   ├── Phase 2 (behavior): [player action to attune]
│   ├── Detection range: [meters]
│   ├── Attunement rate: [units/second]
│   ├── Decay rate: [units/second]
│   └── Feedback: [visual + audio changes during attunement]
├─ Curiosity Response (idle > 5s):
│   └── [behavior change when player is still]
├─ Weather Modifier:
│   └── [which weather states affect this creature's attunement rate]
├─ Cull Distance: [meters]
├─ LOD Tiers: [if applicable]
└─ Compound Primitive Count: [minimum children]
```

## Appendix I: Narrative Text Design Template

For projects using the dual-narrative system (§10.2). Fill in discovery texts for both perspectives.

```
NARRATIVE TEXT MAP:
├─ Perspective Toggle: [key or UI element]
├─ Default: [child / adult]
│
├─ Discovery Texts (first encounter):
│   ├── [entity_type]:
│   │     child: "[8-15 words, wonder-filled]"
│   │     adult: "[10-20 words, clinical log format]"
│   └── ...
│
├─ Progression Fragments (gated by objectives):
│   ├── 0: child: "..." / adult: "..."
│   ├── 1: child: "..." / adult: "..."
│   └── ...
│
├─ Finale Texts:
│   ├── COMPLETE:  child: "..." / adult: "..."
│   ├── TRANSFORM: child: "..." / adult: "..."
│   └── FREE_ROAM: child: "..." / adult: "..."
│
└─ Voice Guidelines:
    ├── Child: [tone, vocabulary, sentence length, forbidden words]
    └── Adult: [tone, vocabulary, sentence length, format]
```

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| v1.0 | 2024 | Original single-file protocol from Project Eagle |
| v2.0 (PDF) | 2024 | Formalized System of Specialists pattern |
| v2.0 (MD) | 2025 | Production multi-file protocol from Luminaries (13K LOC, 64 files) |
| v3.0 | 2026-03 | Gemini-authored unification of v2 PDF + v2 MD |
| v4.0 | 2026-04-02 | Full rewrite integrating all sources + TEP v5.2. Dual-target (r128/r172+). Complete code implementations. Phase verification gates. 20-mode failure table. Audio, narrative, AI, LOD systems restored. Seeded RNG enforced. Performance budget mandatory. |
| **v4.1** | **2026-04-02** | **Integrated Procedural Audio Engine Protocol: voice pooling, anti-clicking (anchor rule + ADSR), voice stealing with polyphony caps, scheduling strategies (game-loop/lookahead/hybrid), 4-bus signal flow architecture, detailed reverb (irrational delay ratios + HPF/LPF in feedback), stereo panning, zone-based ambient modulation, audio performance budget with drift detection, mobile adjustments, 10-rule audio summary. Integrated Luminaries production patterns: event bus (§7.9), scheduler architecture (§7.10), zone/sector environmental modulation (§7.11), weather-responsive entities (§7.12), stillness-as-mechanic (§7.13), per-entity cull distance tuning (§7.14), Points-based particle pool (§5.10), GPU shader animation (§5.11), dual-narrative architecture (§10.2) with voice guidelines and constraint system (§10.9), progression-gated narrative fragments (§10.4), creature interaction design template (§10.7 + Appendix H), source code lore layer (§10.8). Added Appendices G–I. Updated metrics to 14K LOC / 86 files.** |

---

*Protocol v4.1 — Unified from five source documents + Luminaries production reference under Technical Editor Master Protocol v5.2.*
*Every pattern validated in a shipping 14,000-line, 86-file codebase.*
*No pattern is theoretical — all have been tested against known LLM failure modes.*

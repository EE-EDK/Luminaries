# Generative WebGL Protocol v2

**A production protocol for LLM-assisted Three.js world-building.**

Evolved from the original Generative WebGL Protocol through the development of [Luminaries](https://ee-edk.github.io/Luminaries/) — a 13,000-line, 64-file procedurally generated bioluminescent forest. Every pattern in this document has been validated in a shipping codebase.

---

## How to Use This Protocol

This protocol is a sequential construction guide. An LLM (or human developer) building a Three.js world should follow Phases I through VII in order. Each phase builds on the previous one. Skipping phases leads to structural problems that compound.

**Target:** Vite + Three.js ES module projects. Not single-file HTML simulations.

**Assumptions:** ES modules, `const`/`let`, no classes (functional style), Three.js r172+.

---

## Phase I: World Anchor

> Establish the coordinate system, renderer, camera, and the raw terrain that everything else sits on.

### 1.1 Renderer & Scene

```js
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));  // Cap at 2x for mobile
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;  // Not deprecated sRGBEncoding
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x081018, 0.01);  // Exponential fog hides draw distance

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 300);
const clock = new THREE.Clock();
```

**Rules:**
- Pixel ratio capped at 2 — higher causes performance problems on mobile
- FogExp2 is preferred over Fog for natural falloff
- Camera far plane should be 2-3x your world radius
- Export renderer, camera, scene, clock from a dedicated `core/renderer.js`

### 1.2 Coordinate System

Define your world as a circle with radius `WORLD_R`. All coordinates are in meters (1 unit = 1 meter). Define this in a `constants.js` file alongside all other constants.

```js
export const WORLD_R = 90;  // 90-meter radius circle
export const EYE_H = 1.7;   // Player eye height in meters
```

### 1.3 Terrain Generation

Terrain is a heightmap function `getGroundY(x, z)` that returns the Y coordinate at any world position.

**Layer stack:**
1. **Base noise** — Value noise or Perlin at 0.02-0.04 scale, 2-4 octaves FBM
2. **Landform features** — Ridge noise (V-shaped crests), cell noise (knolls/mounds), terrace steps
3. **Flat zone system** — `registerFlatZone(x, z, radius)` marks areas as flat (for ponds, fairy rings, buildings). `getGroundY()` returns flat Y within these zones.
4. **Keep-out zones** — `inKeepOut(x, z)` prevents entity overlap with large features

**Critical rule:** Flat zones must be registered BEFORE any entities sample `getGroundY()`. Spawn order matters:
```
1. Register flat zones (ponds, rings, clearings)
2. Place trees (sample terrain with flat zones active)
3. Place other flora/fauna (sample terrain)
```

### 1.4 Ground Mesh

A single `PlaneGeometry` with sufficient segments for vertex-color biomes:

```js
const ground = new THREE.PlaneGeometry(WORLD_R * 2, WORLD_R * 2, 200, 200);
ground.rotateX(-Math.PI / 2);
```

**Procedural canvas texture (2048x2048):**
1. Base biome color patches (cell noise for organic shapes)
2. Detail layers: mycelium veins, root networks, moss clusters, pebbles, leaf litter
3. Each layer uses different noise scales for natural variety

**Vertex color biomes** painted per-vertex using noise-blended zones (8+ biome types). This provides large-scale color variation while the canvas texture provides close-up detail.

**Shader uniforms** for runtime effects:
```js
material.onBeforeCompile = (shader) => {
  shader.uniforms.uTime = { value: 0 };
  shader.uniforms.uPlayerX = { value: 0 };
  shader.uniforms.uPlayerZ = { value: 0 };
  shader.uniforms.uTransform = { value: 0 };  // For quest finale effects
};
```

### 1.5 Sky Dome

A large inverted sphere (or hemisphere) textured with a procedural canvas:

```js
const skyGeo = new THREE.SphereGeometry(SKY_R, 64, 32);
const skyCanvas = document.createElement('canvas');
skyCanvas.width = 2048; skyCanvas.height = 1024;
```

Paint onto the canvas: background gradient, star fields (varying brightness/color), nebulae (soft gaussian blobs), galaxy bands (elongated noise), constellation line segments. Use `THREE.CanvasTexture` and set `texture.colorSpace = THREE.SRGBColorSpace`.

For animated elements (shooting stars, twinkle), use separate meshes or GPU-driven attribute oscillation rather than repainting the canvas.

---

## Phase II: Asset Factory

> Build reusable entity templates. Instancing is mandatory for high-count entities.

### 2.1 Shared Geometry Pool

Create a `GEO` object that holds commonly reused geometries:

```js
export const GEO = {
  sphere8: new THREE.SphereGeometry(1, 8, 6),
  sphere16: new THREE.SphereGeometry(1, 16, 12),
  cylinder: new THREE.CylinderGeometry(1, 1, 1, 8),
  cone: new THREE.ConeGeometry(1, 1, 8),
  box: new THREE.BoxGeometry(1, 1, 1),
};
```

Scale via `mesh.scale.set()` rather than creating new geometries. This reduces GPU memory and draw call overhead.

### 2.2 Entity Builder Pattern

Every entity type exports a `make*()` function returning a metadata object:

```js
export function makeEntity(x, z) {
  const group = new THREE.Group();
  // ... build mesh hierarchy
  group.position.set(x, getGroundY(x, z), z);
  return { group, x, z, mat, phase, speed, /* behavioral state */ };
}
```

**Rules:**
- Return flat objects, not classes
- Keep material references on the returned object for runtime modulation
- Use seeded RNG (`sr()`) for placement variation, never `Math.random()`
- Position the group, not individual child meshes

### 2.3 Instancing Strategy

| Entity Count | Strategy |
|-------------|----------|
| 1-10 | Individual `THREE.Group` |
| 10-50 | Consider `InstancedMesh` |
| 50+ | **Must use `InstancedMesh`** |
| 500+ | `InstancedMesh` + LOD + visibility culling |

**Template instancing** for diverse entities (e.g., 500 trees with 10 visual variants):

```
10 templates × 4 mesh categories (trunk, canopy, glow, detail) = 40 InstancedMesh
Each template holds ~50 instances
Total: 500 trees, ~40 draw calls (not 2,000)
```

**Geometry merging for templates:**
```js
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// CRITICAL: normalize indexed/non-indexed before merging
const parts = [trunkGeo.toNonIndexed(), canopyGeo.toNonIndexed()];
// Ensure same attribute set (position, normal, color; remove uv if inconsistent)
const merged = mergeGeometries(parts);
```

### 2.4 LOD System

For high-count entities, implement distance-based LOD tiers:

| Tier | Distance | Approach |
|------|----------|----------|
| 0 | < 20m | Full detail mesh + per-frame animation |
| 1 | 20-70m | Reduced mesh (fewer children) |
| 2 | 70-110m | Billboard sprite or impostor |
| 3 | > 110m | Hidden (`visible = false`) |

LOD is managed per-frame in the director loop by computing squared distance to the player and adjusting instance counts or visibility.

### 2.5 Material Conventions

- **Share materials** across same-type entities. Never create per-instance materials.
- Entities needing individual emissive modulation: clone the material once and store the reference.
- `depthWrite: false` for all transparent, glow, and haze effects.
- Prefer `MeshStandardMaterial` with `emissive` + `emissiveIntensity` over `MeshBasicMaterial` for bloom pipeline contribution.
- Keep `emissiveIntensity` between 0.3-2.0 to avoid bloom blowout.

### 2.6 Color Palette

Define ALL colors in a single `C` object in `constants.js`:

```js
export const C = {
  sky: 0x081018, fog: 0x060c14,
  bark: 0x5a4030, leaf: 0x1a4820, leafGlow: 0x44ffaa,
  // ... organized by category: environment, flora, fauna, quest, sky
};
```

**Rule:** Always use `C.propertyName`. Never inline hex values in entity code. This enables global palette swaps and theme transitions (e.g., quest finale color transforms).

---

## Phase III: Kinematic Kernel

> Physics, movement, particles. Everything that moves through the world.

### 3.1 Player Controller

Velocity-based movement with gravity, drag, and jump:

```js
const player = { pos: new THREE.Vector3(0, EYE_H, 0), vel: new THREE.Vector3(), onGround: true };

export function updatePlayer(dt) {
  // 1. Read input → compute world-space movement vector
  // 2. Apply movement: player.vel.x += moveX * MOVE_SPEED
  // 3. Apply gravity: if (!player.onGround) player.vel.y -= GRAVITY * dt
  // 4. Apply drag: player.vel.x *= player.onGround ? GROUND_DRAG : AIR_DRAG
  // 5. Integrate: player.pos.addScaledVector(player.vel, dt)
  // 6. Ground collision: if (player.pos.y < getGroundY(x, z) + EYE_H) → land
  // 7. Entity collision: radius checks against trees, rocks
  // 8. Camera: position = player.pos + headBob offset
}
```

**Essential physics constants:**
```js
export const GRAVITY = 15;        // Meters per second squared
export const MOVE_SPEED = 6;      // Base walk speed
export const SPRINT_MULT = 1.8;   // Sprint multiplier
export const JUMP_IMPULSE = 8;    // Jump velocity
export const GROUND_DRAG = 0.85;  // Per-frame velocity damping on ground
export const AIR_DRAG = 0.98;     // Per-frame velocity damping in air
```

**Head bob:** Sine-wave phase tied to movement speed. Track `headBobPhase` and increment by `speed * dt`. Apply Y offset `sin(headBobPhase) * amplitude`. Zero-cross triggers footstep sounds.

**Landing cushion:** On ground contact after fall, apply a brief downward dip (`landingDip`) that decays exponentially. Dip magnitude proportional to fall velocity.

### 3.2 Collision

Simple radius-based collision (no physics engine needed):

```js
for (const tree of trees) {
  const dx = player.pos.x - tree.x;
  const dz = player.pos.z - tree.z;
  const d2 = dx * dx + dz * dz;
  if (d2 < tree.radius * tree.radius) {
    // Push player out
    const d = Math.sqrt(d2);
    const nx = dx / d, nz = dz / d;
    player.pos.x = tree.x + nx * tree.radius;
    player.pos.z = tree.z + nz * tree.radius;
  }
}
```

### 3.3 Pooled Particle Systems

Pre-allocate all particles at init time. Never allocate during gameplay.

**Lifecycle:** `init*()` → `spawn*()` → `update*()` — three exported functions per system.

```js
// init: Create Points mesh with pre-sized BufferGeometry
// spawn: Find dead particle in pool, reset its properties
// update: Loop all particles, advance physics, update buffer, set needsUpdate
```

**Buffer management:**
```js
geo.attributes.position.setUsage(THREE.DynamicDrawUsage);  // Tell GPU to expect updates
// After update:
geo.attributes.position.needsUpdate = true;
geo.setDrawRange(0, activeCount);  // Only render active particles
```

**Particle physics per type:**
- **Fireflies:** Random walk + vertical drift + lifetime fade
- **Spores:** Upward buoyancy + wind influence + size shrink
- **Dust:** Burst from point + gravity + ground collision
- **Seeds:** Wind-driven + gentle fall + directional bias (optional wayfinding)
- **Rain:** Downward velocity + wind offset + ground collision despawn

### 3.4 Creature Physics

Each creature type has its own movement model (not a shared physics engine):

- **Drift** (jellies): `sin(t * freq + phase)` for bob, gentle velocity toward target
- **Hop** (pufflings): Timer-based impulse, gravity between hops, ground snap
- **Walk** (deer): Velocity toward target with IK-like leg phase offsets
- **Orbit** (moths): Circular path around `centerX/Z` at `orbitR`, flap = `sin(t * flapSpeed)`

All use delta-time (`dt`) for frame-rate independence. All include squared-distance culling.

---

## Phase IV: Simulation Director

> The central update loop that orchestrates everything per frame.

### 4.1 The Director Pattern

A single `director(dt, t)` function in `main.js` that runs all per-frame updates:

```js
function director(dt, t) {
  // 1. Context checks (player proximity to features)
  // 2. Particle spawning (proximity-triggered)
  // 3. Entity updates (glow, animation, AI, visibility)
  // 4. System updates (weather, day/night, aurora)
  // 5. Particle updates (all pools)
  // 6. Audio updates (ambient, music)
  // 7. Sky updates (shooting stars, twinkle)
  // 8. Discovery checks
  // 9. HUD updates
}
```

**Why centralized?** Avoids scattered `requestAnimationFrame` callbacks, ensures deterministic update order, makes debugging straightforward, and enables global optimizations (skip categories when distant).

### 4.2 The Animation Loop

```js
function loop(t) {
  requestAnimationFrame(loop);
  if (!started) return;
  const dt = Math.min(clock.getDelta(), 0.1);  // Cap dt to prevent spiral of death
  updatePlayer(dt);
  director(dt, t * 0.001);  // Convert ms to seconds
  updateQuest(dt, t * 0.001, player);
  postRender();  // Bloom compose + final render
}
```

**Cap delta time** at 0.1s (100ms). If a frame takes longer than 100ms, entities shouldn't teleport.

### 4.3 Visibility Culling

Every entity with >20 instances gets distance-based culling in the director:

```js
const dx = entity.x - player.pos.x;
const dz = entity.z - player.pos.z;
const d2 = dx * dx + dz * dz;
if (d2 > CULL_DIST_SQ) {
  if (entity.group.visible) entity.group.visible = false;
  continue;  // Skip ALL updates for culled entities
}
if (!entity.group.visible) entity.group.visible = true;
```

**Always use squared distances.** Never call `Math.sqrt()` in the hot path.

### 4.4 State Machines

Three categories of state machines run per frame:

**Weather (world-level):**
```
States: CLEAR → MISTY → LIGHT_RAIN → HEAVY_RAIN → FOG_BANK → LUMINOUS_STORM
Transitions: Weighted random, 30-90s per state, cosine-blended crossfade
Exports: windX, windZ, windStrength, weatherState, isStorming, lightningFlash, getRainRate()
```

**Day/Night (world-level):**
```
Phases: DUSK (t=0.0) → NIGHT (t=0.25) → DEEP_NIGHT (t=0.5) → DAWN (t=0.75)
Cycle: 10-minute default, interpolated keyframes
Exports: bioGlow (0.65-1.5), starBrightness, phase
```

**Creature AI (per-entity):**
```
States vary by type: idle, walk, wander, hop, pause, look, flee, patrol, curious
Transitions: Timer-based with weighted random next state
Uses AI senses: canSee(), canHear(), isNear()
Uses AI steering: flee(), arrive(), separation(), cohesion(), worldBounds()
```

### 4.5 Emissive Glow Pattern

The signature visual pattern for bioluminescent worlds:

```js
const pulse = Math.sin(t * entity.speed + entity.phase) * 0.5 + 0.5;
entity.mat.emissiveIntensity = entity.baseGlow * (0.5 + pulse * 0.8) * bioGlow;
```

- Per-entity `speed` and `phase` prevent synchronized pulsing
- Multiply by global `bioGlow` from day/night cycle
- Result: every glowing entity pulses independently, brighter at deep night

---

## Phase V: Procedural Audio

> All sound generated via Web Audio API. No audio files.

### 5.1 Audio Graph Architecture

```
AudioContext
  └── masterGain → destination
        ├── Ambient layers (looped noise buffers + filters)
        ├── Creature voices (transient oscillator chains)
        ├── Player sounds (impact synthesis)
        ├── Interactive sounds (triggered synthesis)
        ├── Music layers (generative oscillators)
        └── Shared reverb (dual feedback delay)
```

### 5.2 Noise Buffers

Generated once at init, looped forever:

```js
function createNoiseBuffer(type, duration) {
  const len = ctx.sampleRate * duration;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  if (type === 'brown') {
    let last = 0;
    for (let i = 0; i < len; i++) {
      data[i] = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
      last = data[i]; data[i] *= 1.8;
    }
  }
  // Overlap-add crossfade for seamless looping
  // ...
  return buf;
}
```

**Use co-prime buffer lengths** (e.g., 2.0s and 2.3s) for layered noise. This prevents audible repetition patterns.

### 5.3 Synthesis Patterns

**Creature voices** — oscillators + filters + gain envelopes:
```js
export function playCreatureSound(type, position, playerPos) {
  if (!initialized || muted) return;
  // Spatial volume falloff
  const d2 = distSq(position, playerPos);
  if (d2 > maxRange * maxRange) return;
  const vol = baseVol * (1 - Math.sqrt(d2) / maxRange);
  // Build synthesis chain per creature type
  // ...
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);  // ALWAYS stop
}
```

### 5.4 Callback Injection

**Critical pattern:** Entity files never import audio.js. Audio triggers pass through main.js:

```js
// main.js:
import { playOrbCollect } from './systems/audio.js';
initQuest({ playOrbCollect, playLaserZap, /* ... */ });

// questManager.js:
let playOrbCollectFn = null;
export function initQuest(config) { playOrbCollectFn = config.playOrbCollect; }
// When needed:
if (playOrbCollectFn) playOrbCollectFn();
```

This prevents circular imports and keeps the audio system as a pure service layer.

### 5.5 Audio Rules

1. **Guard every public function:** `if (!initialized || muted) return;`
2. **Volumes 0.02-0.08** per voice. The mix is dense — individual voices must be quiet.
3. **Always `.stop(time)`** on oscillators and buffer sources. Failure causes Web Audio node accumulation.
4. **Shared reverb** via `connectWithReverb(gain, masterGain, wetAmount)`. Don't create per-voice reverbs.
5. **Cooldowns** on creature sounds (4-18s per type). Without cooldowns, dense entity areas produce audio chaos.
6. **Layer gating** by game progression. Don't play all layers from the start — build the mix as the player advances.

### 5.6 Generative Music

Build on top of the audio system with a separate `music.js` module:

- Use simple oscillator patterns: pentatonic scale, slow arpeggios, drone fundamentals
- Modulate tempo/intensity with game state (weather, time of day, quest progress)
- Keep musical layers soft (0.01-0.04 volume) — music is atmosphere, not foreground
- Call `setupMusic(ctx, masterGain)` from audio init, `updateMusic(dt)` per frame

---

## Phase VI: Post-Processing & Visual Budget

> Manage the rendering pipeline and enforce performance constraints.

### 6.1 Bloom Pipeline

```js
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.8,   // strength
  0.4,   // radius
  0.85   // threshold
));
```

All entities with `emissive` + `emissiveIntensity > 0` contribute to bloom. This is the primary visual feature for bioluminescent worlds.

**Fallback:** Maintain a `bloomEnabled` flag. On low-performance devices, skip the EffectComposer and render directly.

### 6.2 Light Budget

WebGL has practical limits on real-time lights. Budget carefully:

```
Budget: 8 real-time lights maximum
Allocation:
  1 HemisphereLight    (ambient sky/ground)
  2 DirectionalLight   (moon, secondary moon)
  1 PointLight         (player light)
  1 PointLight         (quest progression light)
  N PointLight         (proximity-sorted dynamic pool, N = 8 - fixed)
```

**Proximity sorting:** For dynamic lights (crystal glow, campfires, etc.), sort by distance to player, activate the nearest N, deactivate the rest. Re-sort only when the player moves > 1m (avoid per-frame sort).

```js
// Only re-sort when player moves significantly
if (distSq(player.pos, lastSortPos) > 1) {
  crystals.sort((a, b) => distSq(a, player.pos) - distSq(b, player.pos));
  lastSortPos.copy(player.pos);
  // Assign lights to nearest N crystals, remove from rest
}
```

### 6.3 Performance Budget

| Resource | Hard Limit | Action if Exceeded |
|----------|-----------|-------------------|
| Frame rate | 20 FPS minimum | Reduce entity counts, disable bloom |
| Draw calls | < 200 | Convert to InstancedMesh |
| Real-time lights | 8 | Use proximity pool |
| Particles per system | < 500 | Reduce spawn rate |
| Texture memory | < 32MB total | Reduce canvas sizes |

### 6.4 Memory Rules

- **No allocations in the animation loop.** Pre-allocate temporaries at module scope.
- **Reuse geometry** from the GEO pool whenever possible.
- **Buffer attribute reuse:** Particle systems pre-allocate Float32Arrays at init.
- **Dispose unused geometries and materials** if entities are removed.

---

## Phase VII: Narrative Integration

> Systems that give the simulation meaning. Built last, on top of stable foundations.

### 7.1 Quest State Machine

A multi-phase state machine tracking player progression:

```
SEEK → RISING → COMPLETE → FINALE → TRANSFORM → FREE_ROAM
```

**Implementation:**
- Store `questPhase` as a string enum
- Store `orbsFound` as an integer counter
- Each phase has a handler in `updateQuest(dt, t, player)` with timer-based sub-phases
- Audio callbacks injected via config object (never import audio directly)

### 7.2 Discovery System

First-encounter text triggered by proximity/behavior:

```js
const discovered = { deer: false, pond: false, /* ... */ };
const labels = { deer: 'Spirit Deer', pond: 'Moonlit Pond', /* ... */ };

export function checkDiscoveries(playerPos, entities) {
  if (!discovered.deer) {
    for (const d of deers) {
      if (distSq(d.pos, playerPos) < threshold) {
        showDiscovery('deer');
        break;
      }
    }
  }
}
```

Display via a fixed-position DOM element with CSS transitions. Fade in for 0.6s, hold for 3s, fade out for 0.6s.

### 7.3 Dual-Narrative Pattern

For games supporting multiple reading levels:

```js
const perspective = 'child'; // or 'adult', toggled by player
const texts = {
  deer: {
    child: "A glowing deer! It walks so quietly...",
    adult: "Biological Metronome detected. Gait pattern: 0.8Hz oscillation."
  }
};
// In showDiscovery:
discoveryEl.textContent = texts[key][perspective];
```

### 7.4 Progression-Gated Content

Layer game systems by progression level. Not everything should be active from frame 1:

| Progress | Unlocked Systems |
|----------|-----------------|
| 0/5 | Baseline world — exploration, ambient audio, weather |
| 1/5 | New audio layer (harmonic drone), first constellation |
| 2/5 | Creature sounds double frequency, expanded ambient |
| 3/5 | Directional hints toward remaining objectives |
| 4/5 | Enhanced reverb, expanded musical variation |
| 5/5 | Full audio symphony, post-game free roam state |

### 7.5 Finale Sequence

Multi-phase visual escalation for quest completion:

1. **COMPLETE (0-12s):** Central structure activates, creatures migrate inward, visual intensity ramps
2. **FINALE (12-42s):** Sustained peak, all effects active, creature gathering
3. **TRANSFORM (42-55s):** World-wide visual transformation (color shift, flash, new state)
4. **FREE_ROAM:** All restrictions lifted, peaceful exploration with maximum audio/visual density

Use DOM overlays for full-screen flash effects. Stagger laser/beam effects over 2-3 seconds for dramatic buildup. Cosine-blend between old and new material colors during transformation.

---

## Appendix A: Performance Budget Template

Copy this table for your project and fill in actual values:

| Resource | Budget | Actual | Status |
|----------|--------|--------|--------|
| Target FPS | | | |
| Draw calls | | | |
| Real-time lights | | | |
| Particle pool (per system) | | | |
| Ground texture resolution | | | |
| Sky texture resolution | | | |
| Entity types | | | |
| Total entity count | | | |
| Audio voices (simultaneous) | | | |

## Appendix B: Color Palette Template

Organize colors by category in a single `C` object:

```js
export const C = {
  // Environment
  sky: 0x000000, fog: 0x000000, ground: 0x000000,

  // Flora (per type: base, glow, stem/detail)
  entityBase: 0x000000, entityGlow: 0x000000, entityDetail: 0x000000,

  // Fauna (per creature: body, glow, eye/detail)
  creatureBody: 0x000000, creatureGlow: 0x000000, creatureDetail: 0x000000,

  // Quest (orb, laser, obelisk, finale)
  questPrimary: 0x000000, questGlow: 0x000000, questAccent: 0x000000,

  // Sky (stars, nebulae, galaxies)
  skyElement: 0x000000,
};
```

**Naming convention:** `[entity][part]` in camelCase. Example: `jellyBell`, `jellyGlow`, `jellyTent`.

## Appendix C: Module Organization Template

```
src/
├── main.js              # Entry + orchestration + animation loop
├── constants.js         # All constants + color palette
├── core/
│   ├── renderer.js      # WebGL renderer, camera, scene, clock
│   ├── lighting.js      # Light setup + proximity system
│   ├── postprocessing.js # Bloom pipeline
│   ├── input.js         # Keyboard, mouse, touch
│   ├── player.js        # Player controller + physics
│   └── geometries.js    # Shared GEO pool
├── world/
│   ├── terrain.js       # Heightmap + flat zones
│   ├── ground.js        # Procedural ground texture
│   └── sky.js           # Sky dome + celestial objects
├── entities/
│   ├── flora/           # Plant types
│   ├── fauna/           # Creature types
│   ├── magical/         # Special interactive objects
│   └── world/           # Terrain features, structures
├── particles/           # Pooled particle systems
├── systems/
│   ├── audio.js         # Procedural audio
│   ├── music.js         # Generative music
│   ├── weather.js       # Weather state machine
│   ├── dayNightCycle.js # Time-of-day system
│   ├── discoveries.js   # First-encounter tracking
│   └── ai/              # Senses + steering behaviors
├── quest/
│   └── questManager.js  # Quest state machine
└── ui/
    ├── hud.js           # Runtime stats + quest status
    └── overlay.js       # Start screen + UI elements
```

---

*Protocol v2 — Evolved from the Generative WebGL Protocol through building Luminaries.*
*Original protocol authored for single-file simulations; this version targets production multi-file Three.js projects.*

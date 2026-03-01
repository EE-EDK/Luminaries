# Code Pattern Library

> Canonical patterns used throughout Luminaries. Follow these exactly when adding new code.

## 1. Entity Builder Pattern

Every entity module exports a `make*()` function that returns a metadata object:

```js
// entities/flora/example.js
import * as THREE from 'three';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { getGroundY } from '../../world/terrain.js';

export function makeExample(x, z) {
  const group = new THREE.Group();
  const y = getGroundY(x, z);

  // Build geometry (reuse from GEO if possible)
  const geo = new THREE.SphereGeometry(0.5, 8, 6);
  const mat = new THREE.MeshStandardMaterial({
    color: C.someColor,
    emissive: C.someGlow,
    emissiveIntensity: 0.5,
    roughness: 0.6
  });
  const mesh = new THREE.Mesh(geo, mat);
  group.add(mesh);

  group.position.set(x, y, z);

  // Return metadata object with group + behavioral state
  return {
    group,
    x, z,
    mat,            // keep reference for runtime emissive modulation
    phase: sr() * 6.28,  // seeded random phase offset
    speed: 0.8 + sr() * 0.4,
    // ... other per-instance state
  };
}
```

**Rules:**
- Use `sr()` (seeded RNG) for any placement/variation, never `Math.random()`
- Keep material references on the returned object if you need runtime modulation
- Position the group, not individual meshes
- Return flat object (no classes)

## 2. Particle Pool Pattern

Pre-allocated pools with init/spawn/update lifecycle:

```js
// particles/example.js
import * as THREE from 'three';

const POOL = 100;
let mesh = null;
const particles = [];

export function initExample(scene) {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(POOL * 3);
  const sizes = new Float32Array(POOL);
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  geo.attributes.position.setUsage(THREE.DynamicDrawUsage);

  const mat = new THREE.PointsMaterial({
    size: 0.2,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,    // ALWAYS for transparent particles
    sizeAttenuation: true
  });

  mesh = new THREE.Points(geo, mat);
  scene.add(mesh);
}

export function spawnExample(x, y, z, lifetime) {
  // Find dead particle or oldest
  let slot = particles.find(p => p.life <= 0);
  if (!slot) {
    if (particles.length >= POOL) return;
    slot = { idx: particles.length, life: 0 };
    particles.push(slot);
  }
  slot.x = x; slot.y = y; slot.z = z;
  slot.life = lifetime;
  slot.maxLife = lifetime;
  // ... velocity, etc.
}

export function updateExample(dt, t) {
  const pos = mesh.geometry.attributes.position.array;
  let active = 0;
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    if (p.life <= 0) { /* hide particle */ continue; }
    p.life -= dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    pos[i * 3] = p.x;
    pos[i * 3 + 1] = p.y;
    pos[i * 3 + 2] = p.z;
    active++;
  }
  mesh.geometry.attributes.position.needsUpdate = true;
  mesh.geometry.setDrawRange(0, active);
  return active;
}
```

## 3. Visibility Culling Pattern

Applied in `director()` for every entity with > 20 instances:

```js
// In director(dt, t):
for (let i = 0; i < entities.length; i++) {
  const e = entities[i];
  const dx = e.x - player.pos.x;
  const dz = e.z - player.pos.z;
  const d2 = dx * dx + dz * dz;   // squared distance (avoid sqrt)

  if (d2 > CULL_DIST_SQ) {
    if (e.group.visible) e.group.visible = false;
    continue;                       // skip all updates for culled entities
  }
  if (!e.group.visible) e.group.visible = true;

  // ... per-frame updates only for visible entities
}
```

**Rule:** Always use squared distances. Never call `Math.sqrt()` in the hot path.

## 4. Emissive Glow Pulse Pattern

Standard pulsing glow for bioluminescent entities:

```js
// In director update loop:
const pulse = Math.sin(t * entity.speed + entity.phase) * 0.5 + 0.5;  // 0..1
entity.mat.emissiveIntensity = entity.baseIntensity * (0.5 + pulse * 0.8) * bioGlow;
```

- `entity.speed` — oscillation frequency (0.5-2.0 typical)
- `entity.phase` — offset from `sr()` so entities don't pulse in sync
- `bioGlow` — global multiplier from day/night cycle (0.65-1.5)

## 5. Weather-Responsive Pattern

Reading weather exports to modulate behavior:

```js
import { windX, windZ, windStrength, weatherState, isStorming, getRainRate } from './systems/weather.js';

// In update:
entity.x += windX * windStrength * dt * swayFactor;
entity.z += windZ * windStrength * dt * swayFactor;

const rainRate = getRainRate();
const dampened = Math.max(0.2, 1.0 - rainRate * 0.8);
// Use dampened to reduce spawn rates, particle counts, etc.
```

## 6. Audio Callback Injection Pattern

Entity systems never import audio.js. Audio is injected via callbacks:

```js
// In the entity/quest module:
let onSoundFn = null;

export function initModule(config) {
  onSoundFn = config.onSound || (() => {});
}

// When sound needed:
if (onSoundFn) onSoundFn(x, z);

// In main.js:
import { playSound } from './systems/audio.js';
import { initModule } from './entity/module.js';
initModule({ onSound: playSound });
```

## 7. Flat Zone Registration Pattern

Large entities (ponds, fairy rings) register flat zones before other entities place:

```js
import { registerFlatZone } from '../world/terrain.js';

// In populate(), BEFORE tree/flora placement:
const pond = makePond(x, z);
registerFlatZone(x, z, radius);  // Terrain returns flat Y within this circle
```

## 8. Keep-Out Zone Pattern

Prevent entity overlap with large features:

```js
import { inKeepOut } from '../world/terrain.js';

// When placing entities:
let x, z;
do {
  const a = sr() * Math.PI * 2;
  const d = sr() * WORLD_R;
  x = Math.cos(a) * d;
  z = Math.sin(a) * d;
} while (inKeepOut(x, z));
```

## 9. Instanced Mesh Template Pattern

For high-count entities (trees use this):

```js
// 1. Build template geometry
const templateGeo = mergeGeometries(parts.map(p => p.toNonIndexed()));
// Note: toNonIndexed() normalizes indexed/non-indexed before merge

// 2. Create InstancedMesh
const instanced = new THREE.InstancedMesh(templateGeo, material, MAX_COUNT);
instanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

// 3. Set transforms per instance
const matrix = new THREE.Matrix4();
for (let i = 0; i < count; i++) {
  matrix.makeTranslation(x, y, z);
  instanced.setMatrixAt(i, matrix);
}
instanced.count = count;  // Control visibility via count
instanced.instanceMatrix.needsUpdate = true;
```

## 10. State Machine Pattern

Used by weather, quest, day/night, and creature AI:

```js
const STATES = {
  IDLE:   { duration: [5, 10], next: { WALK: 0.6, LOOK: 0.4 } },
  WALK:   { duration: [3, 8],  next: { IDLE: 0.5, LOOK: 0.3, WALK: 0.2 } },
  LOOK:   { duration: [2, 4],  next: { IDLE: 0.4, WALK: 0.6 } }
};

// Transition:
entity.stateTimer -= dt;
if (entity.stateTimer <= 0) {
  const trans = STATES[entity.state].next;
  let r = Math.random(), cumulative = 0;
  for (const [state, weight] of Object.entries(trans)) {
    cumulative += weight;
    if (r <= cumulative) { entity.state = state; break; }
  }
  const dur = STATES[entity.state].duration;
  entity.stateTimer = dur[0] + Math.random() * (dur[1] - dur[0]);
}
```

## Coding Conventions

- **`const`/`let` only** — never `var`
- **No classes** — functional, imperative style throughout
- **ES module imports** — `import * as THREE from 'three'`; named imports for project modules
- **Banner comments** — Major sections use `// ===...===` banners
- **Module-scoped state** — state lives at module scope, not in closures or globals
- **No `Math.random()` for placement** — use `sr()` (seeded RNG). `Math.random()` only for runtime variation (particle effects, etc.)

## Source Code Lore (4th Wall Layer)

The source code contains an embedded narrative layer for F12 inspectors. This is a deliberate design choice that fits the adult "Chronobiological Archive" narrative from MANIFESTO.md.

**Guidelines for adding lore comments:**

1. **Voice**: Use pseudoscientific field reports, lab notes, and personal logs from unnamed researchers who studied the forest. Key recurring characters:
   - Dr. R. Vasquez — lead researcher, wrote final reports
   - Dr. Chen — acoustic specialist
   - Anonymous/unnamed — miscellaneous observers

2. **Tone**: Clinical-becoming-unsettled. Start with scientific observation, end with something that doesn't quite add up. Never explain the mystery — only deepen it.

3. **Placement**: Near the top of entity/system files, after the banner comment but before code. Never inline with logic.

4. **Content rules**:
   - Reference real properties of the code (pulse rates, distances, counts) as if they're observed phenomena
   - Hint that the forest is aware, intentional, designed — but never confirm by whom
   - The "L" signature (seen in main.js) is the only direct address to the reader
   - Keep each note to 4-7 lines of comment text
   - Use `//` line comments, not block comments

5. **Coverage**: Aim for ~1 lore comment per major system/entity file. Not every file needs one. Prioritize files an inspector would naturally explore first (main.js, player.js, audio.js, orbs, deer, obelisk).

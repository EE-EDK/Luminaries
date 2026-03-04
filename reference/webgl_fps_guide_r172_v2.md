# Building Ultra-Efficient First-Person 3D Games with Three.js
## Sub-4MB WebGL FPS Guide — r172+ / Vite Edition

> **Version note:** This guide targets **Three.js r172+ loaded as ES modules via Vite**, which is the stack used in the Luminaries reference project (`EE-EDK/Luminaries`). Sections marked ⚠️ **r128 DIFF** flag behavior that changed between r128 (CDN UMD) and r172+ (ES module). If you are on r128 from cdnjs, those callouts apply to you instead.

---

## Budget baseline

A sub-4MB first-person WebGL game is achievable. The Luminaries project demonstrates the floor: **Three.js r172+ (ES module, tree-shaken) + ~13,000 lines of game code + zero external assets** produces a build well under 4 MB. The ceiling is a pre-made-asset game like NotStrike, which ships a full-featured FPS with GLB models and physics at ~1.9 MB gzipped.

| Category | Budget (gzipped) | Strategy |
|---|---|---|
| Three.js core (tree-shaken) | 80–155 KB | Named imports via Vite; see §1 |
| Addon loaders | 20–50 KB | Only what you load |
| Game code + shaders | 50–200 KB | Vite + Terser minification |
| Textures | **0 KB** (preferred) | Procedural canvas; see §1 |
| 3D models | **0 KB** (preferred) | Procedural BufferGeometry |
| Audio | **0 KB** (preferred) | Web Audio API synthesis; ZzFX |
| HUD / fonts | 0 KB | CSS overlay, system fonts |
| **Remaining headroom** | **~3.6–3.8 MB** | Content and iteration space |

An aggressively procedural build — the Luminaries model — leaves nearly the entire budget as headroom.

---

## §1 — Bundle size and asset compression

### Three.js with Vite: tree-shaking now works

⚠️ **r128 DIFF — critical change.** Three.js r128 loaded as a UMD bundle from cdnjs cannot be tree-shaken. The monolithic `three.min.js` is ~640 KB raw / ~155 KB gzipped and includes everything regardless of use.

**In r172+ with Vite, named ES module imports enable dead-code elimination.** Unused exports (animation system, all unused geometries, unused material types, etc.) are stripped at build time by Vite's Rollup backend.

```javascript
// ❌ WRONG — disables tree-shaking, imports entire library
import * as THREE from 'three';

// ✅ CORRECT — Vite eliminates unused exports at build time
import {
  WebGLRenderer, Scene, PerspectiveCamera,
  InstancedMesh, BufferGeometry, BufferAttribute,
  MeshStandardMaterial, MeshBasicMaterial,
  DirectionalLight, AmbientLight,
  Vector3, Matrix4, Quaternion, Euler,
  Color, Frustum, Raycaster,
  SRGBColorSpace
} from 'three';
```

**Potential savings: 30–60% of the Three.js bundle** depending on which subsystems you use. Audit all `import * as THREE` patterns — each one defeats tree-shaking for that file. In Luminaries, all 64 source files should use named imports.

**Build verification:** After `npm run build`, check `dist/assets/` sizes. Run `npx vite-bundle-visualizer` or add `rollupOptions.plugins: [visualizer()]` to `vite.config.js` to see which Three.js modules survived tree-shaking.

### Texture compression: skip the decoders, go procedural

For a sub-4MB game, KTX2/Basis Universal and Draco geometry compression carry prohibitive decoder overhead regardless of Three.js version. The Basis transcoder WASM adds ~200–400 KB; the Draco decoder WASM adds ~150–300 KB. These decoders consume 10–15% of your total budget before a single asset loads.

**Luminaries solved this entirely by going procedural.** Zero texture files. The 2048×2048 ground texture, sky dome, bark patterns, and all surface detail are generated from canvas code at startup in 1–5 ms per texture.

```javascript
// Procedural wall texture — 0 KB asset cost
function generateWallTexture(w = 256, h = 256) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#8B7355';
  ctx.fillRect(0, 0, w, h);
  const bw = 64, bh = 32, gap = 4;
  for (let y = 0; y < h; y += bh + gap) {
    const off = (Math.floor(y / (bh + gap)) % 2) * (bw / 2);
    for (let x = -bw; x < w + bw; x += bw + gap) {
      const r = 140 + Math.random() * 40;
      ctx.fillStyle = `rgb(${r},${Math.floor(r * 0.4)},${Math.floor(r * 0.3)})`;
      ctx.fillRect(x + off, y, bw, bh);
    }
  }
  const tex = new CanvasTexture(c);  // named import from 'three'
  tex.wrapS = tex.wrapT = RepeatWrapping;
  return tex;
}
```

If you need pre-made texture files, use **JPEG at quality 75** (15–40 KB per 512×512). Skip Basis/KTX2 unless your texture budget exceeds ~1.5 MB and you've exhausted procedural options.

### Geometry: procedural or meshoptimizer

Same rule applies. Procedural `BufferGeometry` from typed arrays costs zero bytes. For pre-made models, **gltfpack with meshoptimizer compression** (`-cc` flag) produces the best size/decoder-cost tradeoff — the meshoptimizer decoder is only ~10–20 KB vs. Draco's ~150–300 KB.

```bash
# Meshoptimizer — small decoder, compresses animations too
npm install -g gltfpack
gltfpack -i input.glb -o output.glb -cc

# Full gltf-transform pipeline with WebP textures
npm install -g @gltf-transform/cli
gltf-transform optimize input.glb temp.glb --texture-compress webp
gltf-transform meshopt temp.glb output.glb --level medium
```

Merge all static scenery sharing a material into a single `BufferGeometry` at load time. In r172+:

```javascript
// ⚠️ r128 DIFF: renamed from mergeBufferGeometries() to mergeGeometries() in r152+
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const geometries = wallMeshes.map(m => {
  const g = m.geometry.clone();
  g.applyMatrix4(m.matrixWorld); // bake world transform into vertices
  return g;
});
const merged = mergeGeometries(geometries);
const level = new Mesh(merged, sharedMaterial); // 1 draw call for entire static level
scene.add(level);
```

### Audio: ZzFX procedural is ~900 bytes

**ZzFX** (Frank Force) generates all sound effects from parameter arrays. Each sound costs ~60 bytes of inline data. ZzFXM adds music sequencing for ~1 KB more. This is the standard js13kGames approach and directly matches Luminaries' Web Audio API strategy.

```javascript
// ZzFX procedural gunshot — ~60 bytes of parameter data
zzfx(...[,,925,.04,.3,.6,1,.3,,6.27,-184,.09,.17]);
// Design sounds at https://killedbyapixel.github.io/ZzFX/
```

If you need recorded audio, use **OGG Vorbis at 64 kbps mono** (~8 KB/second). All modern browsers including Safari support OGG as of 2024.

### HUD/fonts: CSS overlay costs zero bytes

Position `<div>` elements over the canvas with `pointer-events: none`. No Three.js font atlas, no SDF font loader, no additional draw calls.

```html
<div id="hud" style="position:absolute;top:0;left:0;width:100%;height:100%;
  pointer-events:none;z-index:10;font:bold 18px monospace;color:#fff;">
  <span id="hp">100</span> HP
</div>
```

---

## §2 — Draw calls and GPU efficiency

### Target draw call budget

**Under 100 draw calls for consistent 60 FPS across devices.** Under 200 is acceptable on desktop. At 500 draw calls, CPU overhead from the WebGL state machine alone can consume 5–25 ms of a 16.67 ms frame budget.

Monitor live in dev:

```javascript
setInterval(() => {
  console.log(
    'Calls:', renderer.info.render.calls,
    '| Tris:', renderer.info.render.triangles,
    '| Geometries:', renderer.info.memory.geometries,
    '| Textures:', renderer.info.memory.textures,
    '| Programs:', renderer.info.programs.length
  );
}, 2000);
```

Rising `geometries` or `textures` values after load indicate memory leaks from missing `.dispose()` calls — critical to verify before Phase 2 dynamic content additions.

### Instanced rendering

`InstancedMesh` renders all instances in a single draw call. The crossover point where instancing beats individual meshes is roughly 50+ identical objects in view. Luminaries uses this pattern to render 500 trees in ~40 draw calls (10 templates × 4 InstancedMesh per LOD tier).

```javascript
import { InstancedMesh, Object3D } from 'three';

const geo = new BoxGeometry(1, 2, 1);
const mat = new MeshStandardMaterial({ color: 0x556b2f });
const mesh = new InstancedMesh(geo, mat, 500);
mesh.userData.totalCount = 500;

const dummy = new Object3D();
for (let i = 0; i < 500; i++) {
  dummy.position.set(Math.random() * 200 - 100, 0, Math.random() * 200 - 100);
  dummy.updateMatrix();
  mesh.setMatrixAt(i, dummy.matrix);
}
mesh.instanceMatrix.needsUpdate = true;
scene.add(mesh);
```

### Per-instance frustum culling — implement this

⚠️ **Gap in Luminaries (verified, Phase 1).** Three.js treats each `InstancedMesh` as a single object with one bounding sphere encompassing all instances. If any corner of that sphere intersects the frustum, **all instances go to the GPU** — including trees behind the player. In a first-person forest, ~50–60% of instances are behind the camera at any given moment. Benchmarks on Quest 2 hardware show 2,600 individual meshes with per-object culling at 85 FPS, versus the same objects as one InstancedMesh (no per-instance culling) at 55 FPS.

Manual per-instance culling costs one `frustum.containsPoint()` test per instance per frame:

```javascript
import { Frustum, Matrix4, Object3D } from 'three';

const frustum = new Frustum();
const projScreenMatrix = new Matrix4();
const dummy = new Object3D();

// Store original matrices separately before culling loop
// to avoid clobbering during the visible-to-front swap
function cullInstances(instancedMesh, camera, originalMatrices) {
  projScreenMatrix.multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse
  );
  frustum.setFromProjectionMatrix(projScreenMatrix);

  let visible = 0;
  const total = instancedMesh.userData.totalCount;

  for (let i = 0; i < total; i++) {
    dummy.matrix.copy(originalMatrices[i]);
    dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
    if (frustum.containsPoint(dummy.position)) {
      instancedMesh.setMatrixAt(visible, originalMatrices[i]);
      visible++;
    }
  }
  instancedMesh.count = visible;
  instancedMesh.instanceMatrix.needsUpdate = true;
}
```

Call once per frame per InstancedMesh, after camera matrices are updated.

### Frustum culling — built-in vs. manual

Three.js r172+ performs per-object frustum culling by default (`object.frustumCulled = true`). **Occlusion culling is not supported natively.** For indoor FPS levels, implement room-based manual culling: precompute which rooms are visible from each room, then toggle `object.visible` at runtime.

For squared-distance culling (Luminaries' current approach), avoid `Math.sqrt()` in the hot path:

```javascript
// ✅ Correct — no sqrt
const dx = entity.x - player.x, dz = entity.z - player.z;
const distSq = dx * dx + dz * dz;
mesh.visible = distSq < MAX_DIST_SQ; // precompute: const MAX_DIST_SQ = MAX_DIST ** 2
```

### Shadows: bake static, one light dynamic

Real-time shadows multiply draw calls — each shadow-casting light re-renders the scene from its perspective. PointLight shadows require 6 cubemap renders; never use them in performance-constrained games.

Optimal pattern: bake lightmaps for static geometry (zero runtime cost), then one `DirectionalLight` with `PCFShadowMap` at 1024×1024 for dynamic objects only. Disable shadow auto-update:

```javascript
import { PCFShadowMap } from 'three';

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFShadowMap;
dirLight.shadow.mapSize.set(1024, 1024);
dirLight.shadow.autoUpdate = false;
// Trigger manually when dynamic objects move significantly:
// dirLight.shadow.needsUpdate = true;
```

### Bloom + InstancedMesh interaction

⚠️ **Luminaries-specific warning.** UnrealBloomPass renders additional luminosity threshold and blur passes on top of geometry. If emissive InstancedMesh objects (glowing trees, mushrooms, crystals) are numerous, bloom cost multiplies significantly on mid-range hardware.

Keep bloom at reduced internal resolution:

```javascript
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { Vector2 } from 'three';

const bloomPass = new UnrealBloomPass(
  new Vector2(512, 512),  // internal resolution — NOT renderer resolution
  strength,
  radius,
  threshold
);
```

Also provide a `lowEndDevice` flag (Luminaries already does this) that skips bloom entirely and uses `emissive` color directly without the post-processing pass.

### Material sharing

Each distinct shader program triggers a GPU program switch — a significant state change. Creating `new MeshStandardMaterial({color: 0xff0000})` twice produces two separate GPU programs. Pass the **same material reference** to multiple meshes:

```javascript
// ❌ Two GPU programs
const meshA = new Mesh(geo, new MeshStandardMaterial({ color: 0xff0000 }));
const meshB = new Mesh(geo, new MeshStandardMaterial({ color: 0xff0000 }));

// ✅ One GPU program, two meshes
const mat = new MeshStandardMaterial({ color: 0xff0000 });
const meshA = new Mesh(geo, mat);
const meshB = new Mesh(geo, mat);
```

---

## §3 — ECS and game loop architecture

### Minimal hand-rolled ECS (~80 lines)

For under 500 entities, a hand-rolled ECS outperforms any library and has zero import cost. Entities are plain objects with component maps. Components are pure data. Systems iterate filtered entity sets.

```javascript
class World {
  constructor() { this.entities = []; this.systems = []; }
  create() {
    const e = { id: this.entities.length, components: new Map() };
    this.entities.push(e);
    return e;
  }
  add(e, c)    { e.components.set(c.constructor, c); return e; }
  get(e, C)    { return e.components.get(C); }
  has(e, C)    { return e.components.has(C); }
  query(...Cs) { return this.entities.filter(e => Cs.every(C => e.components.has(C))); }
  update(dt)   { for (const s of this.systems) s.update(this, dt); }
}

// Components — pure data, no logic
class Transform {
  constructor(x=0,y=0,z=0) {
    this.x=x; this.y=y; this.z=z;
    this.prevX=x; this.prevY=y; this.prevZ=z; // saved for interpolation
    this.rotY=0;
  }
}
class Velocity  { constructor() { this.x=0; this.y=0; this.z=0; } }
class Health    { constructor(hp=100) { this.current=hp; this.max=hp; } }
class Collider  { constructor(hx=.5,hy=1,hz=.5) { this.hx=hx; this.hy=hy; this.hz=hz; } }
class Renderable{ constructor(mesh) { this.mesh=mesh; } }
class PlayerInput {
  constructor() {
    this.forward=false; this.back=false; this.left=false; this.right=false;
    this.jump=false; this.sprint=false; this.shoot=false;
    this.yaw=0; this.pitch=0;
  }
}
class Weapon { constructor() { this.damage=25; this.cooldown=0; this.fireRate=.15; this.ammo=30; } }
```

**Essential FPS systems (execution order):**
1. `InputSystem` — keyboard/mouse state → PlayerInput component
2. `MovementSystem` — PlayerInput + Velocity → Transform (save `prev*` first)
3. `PhysicsSystem` — gravity integration, jump, ground detection
4. `CollisionSystem` — AABB tests, wall slide resolution, stair stepping
5. `WeaponSystem` — fire rate, ammo, projectile spawning from pool
6. `AISystem` — enemy perception, steering, state transitions
7. `RenderSyncSystem` — interpolated ECS Transform → Three.js mesh positions (runs last)

### Director function: add per-system timing before Phase 2

⚠️ **Luminaries-specific gap (verified).** `main.js`'s `director()` function updates 29 entity types, 9 particle systems, weather, quest, and UI in one call. When a single system spikes during Phase 2 additions, isolating it without instrumentation requires guesswork.

Add development-only timing before Phase 2 begins:

```javascript
const DEV = import.meta.env.DEV; // Vite sets this automatically; stripped from prod builds
const timings = {};

function timed(label, fn) {
  if (!DEV) return fn();
  const t0 = performance.now();
  fn();
  // Exponential moving average — smooths per-frame noise
  timings[label] = (timings[label] || 0) * 0.9 + (performance.now() - t0) * 0.1;
}

// In director():
timed('flora',    () => updateFlora(dt));
timed('fauna',    () => updateFauna(dt));
timed('particles',() => updateParticles(dt));
timed('weather',  () => updateWeather(dt));
timed('audio',    () => updateAudio(dt));
timed('quest',    () => updateQuest(dt));

// Log summary every 5 seconds in dev
if (DEV && Math.floor(now / 5000) !== Math.floor((now - dt * 1000) / 5000)) {
  console.table(timings);
}
```

The `import.meta.env.DEV` branches are entirely eliminated by Vite in production builds — zero runtime cost.

### Fixed timestep game loop with interpolation

Runs physics at fixed 60 Hz regardless of display refresh rate. Visual interpolation eliminates stuttering at high refresh rates:

```javascript
const STEP = 1000 / 60;  // 16.667ms physics timestep
const MAX_STEPS = 5;      // spiral-of-death guard
let accumulator = 0, lastTime = 0;

function loop(now) {
  requestAnimationFrame(loop);
  const frame = Math.min(now - lastTime, 200); // clamp tab-away spikes
  lastTime = now;
  accumulator += frame;

  // Save previous positions for interpolation
  for (const e of world.query(Transform)) {
    const t = world.get(e, Transform);
    t.prevX = t.x; t.prevY = t.y; t.prevZ = t.z;
  }

  // Fixed-rate physics updates
  let steps = 0;
  while (accumulator >= STEP && steps < MAX_STEPS) {
    world.update(STEP / 1000);
    accumulator -= STEP;
    steps++;
  }
  if (steps >= MAX_STEPS) accumulator = 0; // panic: drop remaining time

  // Render with sub-frame interpolation
  const alpha = accumulator / STEP;
  renderSyncSystem.update(world, alpha);
  renderer.render(scene, camera);
}
requestAnimationFrame(loop);
```

### Collision detection without a physics library

**AABB minimum-penetration-axis resolution** produces wall sliding as a natural result. Find the smallest overlap on X, Y, or Z — push the player out on that axis only:

```javascript
function resolveAABB(pos, vel, collider, block) {
  const dx = pos.x - block.x, dy = pos.y - block.y, dz = pos.z - block.z;
  const ox = (collider.hx + block.hx) - Math.abs(dx);
  const oy = (collider.hy + block.hy) - Math.abs(dy);
  const oz = (collider.hz + block.hz) - Math.abs(dz);
  if (ox <= 0 || oy <= 0 || oz <= 0) return; // no overlap

  if      (ox <= oy && ox <= oz) { pos.x += ox * Math.sign(dx); vel.x = 0; }
  else if (oy <= ox && oy <= oz) { pos.y += oy * Math.sign(dy); vel.y = 0; }
  else                           { pos.z += oz * Math.sign(dz); vel.z = 0; }
}
```

Velocity on the non-colliding axes is preserved — that's the slide.

**Jump constants from design targets:** Given desired peak height α and jump duration t: `gravity = 2α/t²` and `jumpSpeed = 2α/t`. For α = 2.5 m and t = 0.4 s: gravity ≈ 31.25 m/s², jumpSpeed = 12.5 m/s. Variable-height jumps: halve upward velocity when jump key releases early.

### Object pooling: toggle visibility, never remove

```javascript
class Pool {
  constructor(factory, n = 50) {
    this.factory = factory;
    this.free = Array.from({ length: n }, () => {
      const obj = factory();
      obj.mesh.visible = false;
      obj.mesh.position.set(0, -9999, 0); // safety displacement
      return obj;
    });
  }
  acquire() {
    const obj = this.free.pop() ?? this.factory();
    obj.mesh.visible = true;
    return obj;
  }
  release(obj) {
    obj.mesh.visible = false;
    obj.mesh.position.set(0, -9999, 0);
    this.free.push(obj);
  }
}
```

Never call `scene.remove()` + `scene.add()` in the hot path — it triggers internal array reallocation on every call.

---

## §4 — Asset pipeline and tooling

### Vite config for game builds

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: { passes: 2, drop_console: true },
      mangle: { toplevel: true }
    },
    rollupOptions: {
      output: {
        manualChunks: undefined // single-bundle for game builds; no chunk splitting
      }
    }
  }
});
```

For post-build extreme compression, pipe through Roadroller:

```bash
npm run build
npx roadroller dist/assets/index-*.js -o dist/assets/game.packed.js
# Roadroller achieves ~15% beyond standard gzip on JS
```

### Dispose all dynamic objects — required for Phase 2

⚠️ **Luminaries-specific: verify before Phase 2 dynamic content.** Any system that spawns and removes Three.js objects at runtime must dispose resources explicitly. Missing `.dispose()` calls leak GPU memory permanently for the session.

```javascript
function destroyEntity(mesh, scene) {
  scene.remove(mesh);
  mesh.geometry.dispose();

  // Only dispose material if this entity owned it exclusively
  if (mesh.material.userData.owned) {
    if (Array.isArray(mesh.material)) {
      mesh.material.forEach(m => m.dispose());
    } else {
      mesh.material.dispose();
    }
  }

  // Dispose any textures the material owns
  ['map','normalMap','roughnessMap','emissiveMap','aoMap'].forEach(key => {
    if (mesh.material[key]) mesh.material[key].dispose();
  });
}
```

**Verification:** `renderer.info.memory.geometries` and `renderer.info.memory.textures` must return to their post-load baseline values after removing entities. Any upward drift is a leak. Test this before adding Phase 2 content.

### Procedural texture generation

Generate all textures during `init()`, never per-frame. Canvas 2D textures run in 1–5 ms per 256×256 texture. For complex patterns (noise, FBM), render to a `WebGLRenderTarget` via a fullscreen shader pass — sub-millisecond.

```javascript
import { CanvasTexture, RepeatWrapping } from 'three';

function noiseTexture(size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255 | 0;
    img.data[i] = img.data[i+1] = img.data[i+2] = v;
    img.data[i+3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new CanvasTexture(c);
  tex.wrapS = tex.wrapT = RepeatWrapping;
  return tex;
}
```

### Single-file embedding

Base64 inflates binary data by 33% and compresses poorly under gzip. For large embedded assets, convert to ObjectURL to avoid DOM parsing overhead on massive data URIs:

```javascript
async function loadEmbeddedGLB(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  const blob = new Blob([bytes], { type: 'model/gltf-binary' });
  const url = URL.createObjectURL(blob);
  return url; // pass to GLTFLoader.load(); call URL.revokeObjectURL(url) in onLoad callback
}
```

---

## §5 — Case studies

### Luminaries (EE-EDK/Luminaries) — procedural first-person forest

The reference implementation for this guide's stack. Verified stats:

- **64 source files, ~13,000 lines of code, zero external assets**
- **500 trees in ~40 draw calls** — 10 templates × 4 LOD tiers via InstancedMesh
- **4-tier LOD:** Full < 20 m | Reduced 20–70 m | Impostor sprite 70–110 m | Hidden > 110 m
- **GPU grass:** 1,200 patches animated entirely in vertex shader — zero CPU animation cost
- **8-light hard cap** with proximity-sorted crystal pool
- **6-state weather** + 4-phase day/night + 9 pooled particle systems
- **Web Audio API synthesis** — brown noise layers, oscillator chains, generative ambient music. Zero audio files.

**Known Phase 1 optimization gaps:**
- Per-instance frustum culling not yet on InstancedMesh objects (§2)
- `director()` lacks per-system timing instrumentation (§3)
- `import * as THREE` patterns not fully converted to named imports across all 64 files (§1)

### Q1K3 (Dominic Szablewski, js13kGames 2021) — FPS in 13,304 bytes

The definitive reference for extreme-compression FPS architecture. Two full levels, 31 textures, enemy AI, multiple weapons, procedural music — all under 13 KB zipped.

- **31 procedural textures** via a 5-function generator. Definitions + generator = ~1.3 KB compressed vs. 150 KB as PNGs.
- **Levels at 6 bytes per block** (position + size + texture index). Two levels: 563 blocks + 188 entities = 4.5 KB uncompressed.
- **Models as raw binary** with 1-byte vertex coordinates. Invisible faces stripped.
- **Single draw call per category** — terrain buffer, decoration buffer, model buffer.
- **Roadroller** compression added ~1.2 KB of headroom beyond standard gzip.

Source and making-of: https://phoboslab.org/log/2021/09/q1k3-making-of

### Krunker.io — production browser FPS on Three.js

Built on Three.js with Howler.js audio. Configurable render resolution scale (default 0.6×) to maintain performance across devices. Ships as Electron on desktop with Chrome GPU flags unlocked. Demonstrates that a Three.js FPS can reach commercial scale without leaving the web stack.

### Gorescript Classic — open-source Three.js FPS

Retro 2.5D-style first-person shooter built with Three.js, MIT licensed. Achieves 80–110 FPS on capable hardware. Includes a built-in map editor. Reference for Three.js-specific FPS rendering patterns.

---

## §6 — First-person implementation

### Pointer Lock API

```javascript
const canvas = renderer.domElement;

canvas.addEventListener('click', () => {
  if (!document.pointerLockElement) canvas.requestPointerLock();
});

document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === canvas) gsm.transition('playing');
  else gsm.transition('paused'); // ESC pressed
});

// Accumulate deltas between frames — never apply per mousemove event
let mouseDX = 0, mouseDY = 0;
document.addEventListener('mousemove', e => {
  if (document.pointerLockElement === canvas) {
    mouseDX += e.movementX;
    mouseDY += e.movementY;
  }
});

// Consume and reset in game loop
function applyMouseLook(sensitivity = 0.002) {
  playerBody.rotation.y -= mouseDX * sensitivity;
  camera.rotation.x = Math.max(-1.5, Math.min(1.5,
    camera.rotation.x - mouseDY * sensitivity
  ));
  mouseDX = 0; mouseDY = 0;
}
```

### Camera rig: yaw on body, pitch on camera

Two nested objects. Body rotates Y (yaw); camera (child of body) rotates X (pitch). **Always set Euler order 'YXZ'** on the camera to prevent gimbal lock.

```javascript
import { Object3D, PerspectiveCamera } from 'three';

const playerBody = new Object3D();
const camera = new PerspectiveCamera(75, aspect, 0.1, 1000);
camera.rotation.order = 'YXZ';
camera.position.y = 1.7; // eye height in meters
playerBody.add(camera);
scene.add(playerBody);
```

**FOV:** 75° is standard. Sprint zoom via lerp each frame:

```javascript
camera.fov += (isSprinting ? 85 : 75 - camera.fov) * 5 * dt;
camera.updateProjectionMatrix();
```

**Near/far:** 0.1 near, far matched to level size (500–2000). Keep far/near ratio under 10,000 to avoid z-fighting.

### View bob and weapon sway

```javascript
let bobTimer = 0;

function headBob(dt, isMoving, speed, baseSpeed) {
  if (isMoving) bobTimer += dt * 8 * (speed / baseSpeed);
  else bobTimer *= 0.9; // decay to rest
  camera.position.y = 1.7 + Math.sin(bobTimer) * 0.05;
  camera.position.x = Math.cos(bobTimer * 0.5) * 0.025;
}

let swayX = 0, swayY = 0, targetX = 0, targetY = 0;

function weaponSway(dx, dy, dt) {
  targetX = -dx * 0.02; targetY = -dy * 0.02;
  swayX += (targetX - swayX) * 4 * dt;
  swayY += (targetY - swayY) * 4 * dt;
  targetX *= 0.9; targetY *= 0.9;
  weaponMesh.position.set(0.3 + swayX, -0.3 + swayY, -0.5);
}
```

### Minimap: Canvas 2D, zero GPU overhead

A Canvas 2D overlay beats a second orthographic camera render pass, which would double draw calls:

```javascript
const mapCtx = minimapCanvas.getContext('2d');

function drawMinimap(playerPos, playerRotY, walls) {
  const s = 2, cx = 100, cy = 100;
  mapCtx.fillStyle = '#111';
  mapCtx.fillRect(0, 0, 200, 200);
  mapCtx.fillStyle = '#555';
  for (const w of walls) {
    mapCtx.fillRect(
      cx + (w.x - playerPos.x) * s - w.hx * s,
      cy + (w.z - playerPos.z) * s - w.hz * s,
      w.hx * 2 * s, w.hz * 2 * s
    );
  }
  mapCtx.fillStyle = '#0f0';
  mapCtx.beginPath();
  mapCtx.arc(cx, cy, 4, 0, Math.PI * 2);
  mapCtx.fill();
}
```

### Performance profiling toolkit

| Tool | What it shows | Access |
|---|---|---|
| `renderer.info` | Draw calls, triangles, GPU memory counts | `renderer.info.render.calls` each frame |
| Stats.js | FPS / ms / memory panels | `import Stats from 'three/addons/libs/stats.module.js'` |
| Spector.js | Every WebGL command per frame, highlighted draw calls | Chrome extension |
| Chrome Performance panel | CPU flamechart + GPU task durations | DevTools → Performance → Record |
| Vite Bundle Visualizer | Tree-shaking effectiveness, module sizes | `rollup-plugin-visualizer` in vite.config.js |

**GPU-bound vs. CPU-bound test:** Call `renderer.setPixelRatio(0.5)`. Significant FPS improvement → GPU-bound (reduce resolution, triangle count, shader complexity). No improvement → CPU-bound (reduce draw calls, simplify director(), profile per-system timings).

---

## Summary — ranked by impact

1. **Named ES module imports** — 30–60% Three.js bundle reduction at zero runtime cost. Audit all 64 Luminaries source files for `import * as THREE` patterns.
2. **Per-instance frustum culling on InstancedMesh** — recovers ~50% GPU vertex throughput in first-person views. Not yet implemented in Luminaries Phase 1.
3. **director() per-system timing** — prerequisite for Phase 2 performance stability. Add before adding new systems.
4. **dispose() on all dynamic objects** — `renderer.info.memory.*` must not drift after load. Verify before Phase 2.
5. **Bloom internal resolution cap** — `new Vector2(512, 512)` for UnrealBloomPass. Verify it's not running at full screen resolution.
6. **Material sharing** — same material instance across meshes; never `new Material()` per mesh in a loop.
7. **Total draw call audit** — `renderer.info.render.calls` should be under 150 including bloom passes. Log it.

# Performance Budget & Constraints

> Hard limits that must never be exceeded. Check this before adding anything.

## Hard Limits

| Resource | Budget | Current Usage | Headroom |
|----------|--------|---------------|----------|
| **Frame rate** | 20 FPS minimum | ~30-60 FPS desktop | Moderate |
| **Draw calls** | < 200 total | ~80-120 (varies by LOD) | Good |
| **Real-time lights** | 8 max | 8 (1 hemi + 2 dir + 1 player + 1 orb + 5 crystal) | **None** |
| **Particle systems** | < 500 per system | Fireflies ~120, others < 100 | Good |
| **Texture memory** | Reasonable | Ground 2048², sky 2048x1024, bark 512² | Moderate |

## Light Budget Breakdown

```
1  HemisphereLight     (ambient sky/ground)     — always on
1  DirectionalLight    (moon)                    — always on
1  DirectionalLight    (moon2, secondary)        — always on
1  PointLight          (playerLight)             — follows camera
1  PointLight          (orbLight)                — quest progression
5  PointLight          (crystalLights[0-4])      — proximity-sorted, nearest 5 crystals
─────────────────────────────────────────────────────────
9  total               BUT only 8 active at once (orbLight off until quest progress)
```

**Rule:** To add a new light, you must REMOVE one from the budget. Crystal lights are the flex pool — reduce `MAX_CRYSTAL_LIGHTS` if needed. Never add ambient/directional lights.

## Instancing Guidelines

| Entity Count | Approach |
|-------------|----------|
| 1-10 | Individual THREE.Group, no instancing needed |
| 10-50 | Consider InstancedMesh if geometry is identical |
| 50+ | **Must use InstancedMesh** |
| 500+ | InstancedMesh + LOD + visibility culling |

Current instanced entities:
- **Trees:** 10 templates x InstancedMesh (trunk, canopy, glow, detail)
- **Grass:** 1,200 patches via vertex shader animation (zero CPU)
- **Star motes:** Points geometry with buffer attributes

## Visibility Culling Distances

All entities use distance-based visibility culling. The `director()` function sets `entity.group.visible = false` beyond these distances:

| Entity | Cull Distance | Check Type |
|--------|---------------|------------|
| Mushrooms | 50m | 3D distance |
| Jellies | 55m | 2D (xz) |
| Pufflings | 40m | 2D |
| Deer | 60m | 2D |
| Moths | 45m | 2D |
| Ferns | 40m | 2D |
| Flowers | 40m | 2D |
| Reeds | 40m | 2D |
| Rocks | 50m | 2D |
| Trees | 110m (4-tier LOD) | 2D |

## Bloom Post-Processing

The heaviest visual feature. Parameters in `core/postprocessing.js`:
- Uses `UnrealBloomPass` from Three.js examples
- Fallback: `bloomEnabled` flag can disable if performance drops
- All emissive materials contribute to bloom

**Rule:** When adding emissive materials, keep `emissiveIntensity` between 0.3-2.0. Higher values cause bloom blowout.

## Material Sharing Rules

- **Never create per-instance materials** — share materials across same-type entities
- Exception: entities that need individual emissive modulation get cloned materials
- `depthWrite: false` required for all transparent/glow/haze effects
- Prefer `MeshStandardMaterial` with emissive over `MeshBasicMaterial` for bloom contribution

## Memory Patterns

- **Geometry reuse:** `GEO` object in `core/geometries.js` holds shared geometries
- **Buffer reuse:** Particle systems pre-allocate Float32Arrays, never grow
- **Audio cleanup:** Always call `.stop(time)` on oscillators to prevent Web Audio node accumulation
- **No garbage in hot path:** Avoid `new THREE.Vector3()` in `director()` — use module-scoped temporaries

## When to Flag Performance Risk

Flag in your response if adding:
- More than 500 particles to any single system
- Any new real-time light source
- Any new per-frame loop over > 200 entities without culling
- Any new canvas texture > 1024x1024
- Any new post-processing pass
- Any `Math.random()` or `new` allocation inside the animation loop

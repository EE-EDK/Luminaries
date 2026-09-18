# Entity Registry

> Complete reference for all entity types, their counts, culling distances, and file locations.

## Flora (16 types)

Counts are the `constants.js` values (`*_N`, `GRASS_PATCHES`). Spawned counts are lower where
placement rejects a spot (see `reference/entity-audit-2026-09-16.md` §5 for the measured
runtime counts at seed 42). "Instanced" types are drawn as template `InstancedMesh`
populations (`entities/_instancedFlora.js`): the whole population costs templates × roles draw
calls, is never per-instance culled, and only instances inside 30 m get their glow tint written.
"Baked" types are one `Mesh` per material role (`entities/_bake.js`), hidden beyond 40 m.

| Entity | Count | Cull / Draw | File | Builder | Key Properties |
|--------|-------|-------------|------|---------|----------------|
| Trees | 500 | 4-tier LOD | `entities/flora/trees.js` | `createTreeTemplates()` + `createTreeInstances()` | 10 templates, 4 InstancedMesh/template (trunk, canopy, glow, detail), wind sway; tier-2 impostors are one shared `Points` cloud (1 draw call) |
| Mushrooms | 370 | instanced, 8 templates × 2 roles (16 draws) | `entities/flora/mushrooms.js` | `makeMush()` | Cap breathes (GPU), gills, spots, proximity pulse, shadow-casting caps |
| Crystals | 18 | 55 m | `entities/flora/crystals.js` | `makeCrystal()` | 3 baked meshes; vein flicker (GPU), rotation, proximity lights (5 max) |
| Grass | 1,440 | GPU shader, 60 m | `entities/flora/grass.js` | `makeGrassPatch()` + `chunkGrassPatches()` | Patches merged into 24 m world-space chunks (12 draws at origin); per-vertex `emisColor`; vertex-shader wind, zero CPU |
| Ferns | 250 | instanced, 6 × 2 (12 draws) | `entities/flora/ferns.js` | `makeFern()` | Height-weighted sway, curl reaction (`_baseScale` preserved) |
| Flowers | 230 | instanced, 6 × 2 (12 draws) | `entities/flora/flowers.js` | `makeFlower()` | 5–7 petals, breathing glow, bloom reactivity (`_react`) |
| Reeds | 90 | instanced, 6 × 2 (12 draws) | `entities/flora/reeds.js` | `makeReed()` | Tube stalks, plume baked 2.3× brighter, wind sway |
| Dandelions | 60 | 40 m | `entities/flora/dandelions.js` | `makeDandelion()` + `disperseDandelion()` | 2 baked meshes; seed dispersal hides `headMesh` only; regrowth timer |
| Thornblooms | 55 | 40 m | `entities/flora/thornbloom.js` | `makeThornbloom()` | 4 baked meshes; orb + additive haze, spikes |
| Helixvines | 50 | 40 m | `entities/flora/helixvine.js` | `makeHelixvine()` | 4 baked meshes; rings orbit on the GPU |
| Snapthorns | 44 | 40 m | `entities/flora/snapthorn.js` | `makeSnapthorn()` | 5 baked meshes; tentacles wave and lean toward the player (`MOTION.REACH`, 3.5 m) |
| Spiral Fronds | 65 | 40 m | `entities/flora/spiralfrond.js` | `makeSpiralFrond()` | 4 baked meshes; curling frond geometry |
| Corpse Blooms | 34 | 40 m | `entities/flora/corpsebloom.js` | `makeCorpseBloom()` | 4 baked meshes; flies orbit on the GPU |
| Orb Bushes | 46 | 40 m | `entities/flora/orbbush.js` | `makeOrbBush()` | 3 baked meshes; orbs bob on the GPU |
| Lantern Pods | 41 | 40 m | `entities/flora/lanternpod.js` | `makeLanternPod()` | 3 baked meshes; pendulum pods (GPU), warm glow |
| Veil Moss | 50 | 40 m | `entities/flora/veilmoss.js` | `makeVeilMoss()` | 2 baked meshes; curtain wave (GPU) |

### Part baking and GPU motion (2026-09-16)

- `entities/_motion.js` — one vertex-shader chunk shared by every baked material: wind sway
  (height-weighted `aSway`), player brush-aside (1.2 m), storm droop, and per-part motion modes
  (`MOTION.BOB / ORBIT / PENDULUM / WAVE / BREATHE / SPIN / FLUTTER / FLICKER / REACH`) read from
  `aMotion` (mode, amp, phase, speed) about `aPivot`. Uniforms are written once per frame by
  `updateMotionGlobals()` in `updates/vegetation.js`.
- `entities/_bake.js` — `createBaker().add(geo, {role, pos, rot, scale, color, opacity, emis,
  sway, motion, pivot})` then `build({role: roleMaterial(kind, opts)})`. **Every mesh that uses a
  `roleMaterial` must come out of a baker** — a raw geometry on a motion material renders black.
  `src/entities/__tests__/entityBudget.test.js` pins the mesh count of every builder and checks
  the baked attributes.
- `entities/_instancedFlora.js` — `createInstancedFloraType()`; records keep their old shape
  (`group`, `capMat`, `petalMat`, ...) through a material-shaped proxy that writes a per-instance
  glow attribute.

## Fauna (5 types)

Creatures are baked per rigid pivot (body, head, legs, wings ...) so the CPU animation still
drives the pivots while decorative parts move on the GPU. `applyDetailLod(rec, d2)` hides the
small accent meshes listed in `rec._detail` beyond the stated detail distance.

| Entity | Count | Cull / Detail | Meshes | File | Builder | States | Audio | Resonance Band |
|--------|-------|---------------|-------:|------|---------|--------|-------|----------------|
| Jellies | 35 | 55 m / 30 m | 7 | `entities/fauna/jellies.js` | `makeJelly()` | drift, pulse (tentacles wave on the GPU) | Glass harmonica (360-420Hz) | 390Hz ±40 |
| Pufflings | 40 | 40 m / 20 m | 10 (13 wizard) | `entities/fauna/pufflings.js` | `makePuff()` | hop, idle, wander; breathe, blink, ear flick | 3-note chirp arpeggio (500-750Hz) | 550Hz ±45 |
| Deer | 12 | 60 m / 30 m | 17 | `entities/fauna/deer.js` | `makeDeer()` | walk, pause, look, flee | Distant horn (100-130Hz) | 120Hz ±30 |
| Moths | 35 | 45 m / 25 m | 8 | `entities/fauna/moths.js` | `makeMoth()` | patrol (orbit); eyespots pulse, tails flutter, antennae quiver | Whisper-flutter (200-280Hz) | 240Hz ±35 |
| Luminids | 5 | — | 17 | `entities/fauna/luminids.js` | `makeLuminid()` | stilt walk (2-bone IK legs) | — | — |

### Creature Resonance Bands (Spirit Hum)

Each creature type has a pitch band. The player must press F to hum and match the creature's frequency (Q/E to sweep pitch) within ±tolerance for 2 seconds to "lock" before behavior-based attunement can begin. Creatures within 20m glow brighter when their band is matched. See `src/systems/spiritHum.js` for the state machine and `src/particles/resonanceRings.js` for visual feedback.

### Deer AI Detail
- **Flee radius:** 8m (`DEER_FLEE_R`)
- **Flee speed:** 2.2x normal (`DEER_FLEE_SPEED_MULT`)
- **IK legs:** sin-based phase offsets, front/back 180 degrees apart
- **Head look:** neckPivot rotation toward player in `look` state

## Magical (5 types)

| Entity | Count | File | Builder | Key Behavior |
|--------|-------|------|---------|--------------|
| Wisps | 6 | `entities/magical/wisps.js` | `makeWisp()` | Target tracking, scatter, velocity-based following |
| Fairy Rings | 8 | `entities/magical/fairyRings.js` | `makeFairyRing()` | 8-13 mushrooms, spore haze, center stone, `active` flag |
| Bubbles | 40 | `entities/magical/bubbles.js` | `makeBubble()` | Drift, bob, proximity pop (1.5m), respawn |
| Ponds | 10 | `entities/magical/ponds.js` | `makePond()` | Water surface, lily pads, flat zone registration |
| Orbs | 5 | `entities/magical/orbs.js` | `makeOrb()` | Quest items, gold glow, proximity sense (12m), touch (2.5m) |

## World (4 types)

| Entity | Count | File | Builder | Purpose |
|--------|-------|------|---------|---------|
| Rocks | 350 + 50 boulders + 250 pebbles | `entities/world/rocks.js` | SDF instanced | Collision obstacles, 50m cull |
| Obelisk | 1 | `entities/world/obelisk.js` | `makeObelisk()` | 18 baked meshes; quest target, center of world, rises with orb collection; cap edge / glyph / inscription reveal from 0.6 / 0.7 / 0.55 opacity |
| Moat | 1 | `entities/world/moat.js` | `makeMoat()` | One mesh in a `Group` (`getMoatMesh()` returns the group); fades in during finale |
| Rainbows | 6 arcs | `entities/world/rainbows.js` | `makeRainbows()` | Finale effect, 6 colors + sparkle chains |

## Particles (11 systems)

| System | Pool Size | File | Pattern | Spawn Trigger |
|--------|-----------|------|---------|---------------|
| Fireflies | ~120 | `particles/fireflies.js` | init/spawn/update | Director: proximity to crystals, flowers, random |
| Spores | — | `particles/spores.js` | init/spawn/update | Director: proximity to mushrooms |
| Dust | — | `particles/dust.js` | init/spawn/update | Player landing impact burst |
| Seeds | — | `particles/seeds.js` | init/spawn/update | Dandelion proximity dispersal |
| Star Motes | 50 | `particles/starMotes.js` | init/update | Always active, ambient |
| Bubble Pops | — | `particles/bubblePops.js` | init/spawn/update | Bubble proximity pop |
| Leaves | — | `particles/leaves.js` | init/spawn/update | Wind-driven |
| Footprints | — | `particles/footprints.js` | init/spawn/update | Player movement |
| Rain | — | `particles/rain.js` | init/update | Weather state (LIGHT_RAIN, HEAVY_RAIN, LUMINOUS_STORM) |
| Resonance Rings | 12 | `particles/resonanceRings.js` | init/spawn/update | Spirit hum pitch within creature band + creature nearby |
| Orb Burst | — | `particles/orbBurst.js` | init/spawn/update | Orb collection golden burst |

## Tree LOD System

Distances are to the tree's mid-canopy, compared as squared metres.

| Tier | Distance | Detail | Draw Calls |
|------|----------|--------|------------|
| 0 | < 18 m | Full detail mesh + wind sway | 4 per template |
| 1 | 18-63 m | Trunk / canopy / glow, no detail, no sway | 3 per template |
| 1→2 | 63-75 m | Cross-fade: mesh still drawn, impostor fading in | as above |
| 2 | 75 m → world edge | Impostor point in one shared `Points` cloud | 1 total |
| 3 | > `WORLD_R` × 2.4 (216 m) | Hidden — nothing inside the world reaches it | 0 |

**Total tree draw calls:** ~41 (10 templates × 4 meshes, culled by LOD, + 1 impostor cloud); measured 50 at the origin on 2026-09-16 including shadow passes.

### The distant forest (rewritten 2026-09-18)

The far tier used to hide every tree past 115 m and draw the ones inside it as an
additive radial glow whose colour was multiplied by the forest dim factor. In a
world of radius 90 m that cost a player at the edge 185 of 495 trees, and the
survivors rendered at ~5 % luminance — the forest appeared to start at the 63 m
mesh boundary with nothing behind it. Now:

- **Nothing in-world is culled.** The cull radius is derived from `WORLD_R`, and
  the whole far forest is one draw call regardless of how many trees it holds.
- **The impostor is tree-shaped.** `getTreeImpostorTexture()` stamps a canopy
  blob over a tapered trunk, with the trunk darker than the canopy in the texture
  RGB. Normal blending, not additive, so a dimmed tree can render *darker* than
  the sky — which is what a silhouette is.
- **Tint is silhouette → glow.** `IMPOSTOR_SILHOUETTE` blended toward the
  template's canopy glow by how lit the forest currently is, so the far forest
  brightens as the quest restores it.
- **Aerial perspective.** Every impostor mixes toward `IMPOSTOR_HAZE` with
  distance (ramped on squared distance, no `sqrt` in the loop), so the forest
  recedes in legible layers instead of merging into black.

Pinned by `src/entities/flora/__tests__/treeLod.test.js`.

## Entity Color Palette Quick Reference

All colors defined in `constants.js` as the `C` object. Key groupings:

- **Jelly:** `jellyBell` 0x7788ff, `jellyGlow` 0xaaccff
- **Puffling:** `puffBody` 0xffddcc, `puffGlow` 0xffaa88
- **Deer:** `deerBody` 0xaaeeff, `deerGlow` 0x88ddff
- **Moth:** `mothWing` 0xaaff99, `mothGlow` 0xccffaa
- **Crystal:** `crystal` 0x33ffdd, `crystalCore` 0x88ffee
- **Orb:** `orbGold` 0xffcc33, `orbGlow` 0xffeeaa
- **Obelisk:** `obeliskBlack` 0x0a0a12, `obeliskPink` 0xff44aa

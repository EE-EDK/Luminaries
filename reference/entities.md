# Entity Registry

> Complete reference for all entity types, their counts, culling distances, and file locations.

## Flora (16 types)

| Entity | Count | Cull Distance | File | Builder | Key Properties |
|--------|-------|---------------|------|---------|----------------|
| Trees | 500 | 4-tier LOD | `entities/flora/trees.js` | `createTreeTemplates()` + `createTreeInstances()` | 10 templates, 4 InstancedMesh/template (trunk, canopy, glow, detail), wind sway |
| Mushrooms | 250 | 50m | `entities/flora/mushrooms.js` | `makeMush()` | Glow pulse (sin-based), emissive cap, spore emission |
| Crystals | 18 | — | `entities/flora/crystals.js` | `makeCrystal()` | Rotation, proximity lights (5 max), glow pulse |
| Grass | 1,200 | GPU shader | `entities/flora/grass.js` | `makeGrassPatch()` | Vertex shader animation, zero CPU cost, 3 palette variants (purple/blue/teal), 38-67 blades/patch, GPU dimming via uGlowMult |
| Ferns | 160 | 40m | `entities/flora/ferns.js` | `makeFern()` | Gentle sway |
| Flowers | 140 | 40m | `entities/flora/flowers.js` | `makeFlower()` | Bloom reactivity (`_react`), firefly attraction |
| Reeds | 40 | 40m | `entities/flora/reeds.js` | `makeReed()` | Wind sway |
| Dandelions | 25 | — | `entities/flora/dandelions.js` | `makeDandelion()` | Seed dispersal (8 seeds per approach), regrowth timer 15-25s |
| Thornblooms | 30 | — | `entities/flora/thornbloom.js` | `makeThornbloom()` | Glowing orb center, spike geometry |
| Helixvines | 30 | — | `entities/flora/helixvine.js` | `makeHelixvine()` | Spiral pod clusters |
| Snapthorns | 24 | — | `entities/flora/snapthorn.js` | `makeSnapthorn()` | Reactive tips, player proximity response |
| Spiral Fronds | 45 | — | `entities/flora/spiralfrond.js` | `makeSpiralFrond()` | Curling frond geometry |
| Corpse Blooms | 24 | — | `entities/flora/corpsebloom.js` | `makeCorpseBloom()` | Spadix + spathe, eerie glow |
| Orb Bushes | 36 | — | `entities/flora/orbbush.js` | `makeOrbBush()` | Pink orb clusters on branches |
| Lantern Pods | 36 | — | `entities/flora/lanternpod.js` | `makeLanternPod()` | Hanging pod lanterns, warm glow |
| Veil Moss | 45 | — | `entities/flora/veilmoss.js` | `makeVeilMoss()` | Draped moss on support structure |

## Fauna (4 types)

| Entity | Count | Cull Distance | File | Builder | States | Audio |
|--------|-------|---------------|------|---------|--------|-------|
| Jellies | 35 | 55m | `entities/fauna/jellies.js` | `makeJelly()` | drift, pulse | Glass harmonica (360-420Hz) |
| Pufflings | 40 | 40m | `entities/fauna/pufflings.js` | `makePuff()` | hop, idle, wander | 3-note chirp arpeggio (500-750Hz) |
| Deer | 12 | 60m | `entities/fauna/deer.js` | `makeDeer()` | walk, pause, look, flee | Distant horn (100-130Hz) |
| Moths | 35 | 45m | `entities/fauna/moths.js` | `makeMoth()` | patrol (orbit) | Whisper-flutter (200-280Hz) |

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
| Rocks | 60 | `entities/world/rocks.js` | `makeRock()` | Collision obstacles, 50m cull |
| Obelisk | 1 | `entities/world/obelisk.js` | `makeObelisk()` | Quest target, center of world, rises with orb collection |
| Moat | 1 | `entities/world/moat.js` | `makeMoat()` | Ring around obelisk, fades in during finale |
| Rainbows | 6 arcs | `entities/world/rainbows.js` | `makeRainbows()` | Finale effect, 6 colors + sparkle chains |

## Particles (9 systems)

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

## Tree LOD System

| Tier | Distance | Detail | Draw Calls |
|------|----------|--------|------------|
| 0 | < 20m | Full detail + wind sway | 4 per template |
| 1 | 20-70m | Reduced (no glow mesh) | 3 per template |
| 2 | 70-110m | Impostor sprite | 1 per template |
| 3 | > 110m | Hidden | 0 |

**Total tree draw calls:** ~40 (10 templates x 4 meshes, culled by LOD)

## Entity Color Palette Quick Reference

All colors defined in `constants.js` as the `C` object. Key groupings:

- **Jelly:** `jellyBell` 0x7788ff, `jellyGlow` 0xaaccff
- **Puffling:** `puffBody` 0xffddcc, `puffGlow` 0xffaa88
- **Deer:** `deerBody` 0xaaeeff, `deerGlow` 0x88ddff
- **Moth:** `mothWing` 0xaaff99, `mothGlow` 0xccffaa
- **Crystal:** `crystal` 0x33ffdd, `crystalCore` 0x88ffee
- **Orb:** `orbGold` 0xffcc33, `orbGlow` 0xffeeaa
- **Obelisk:** `obeliskBlack` 0x0a0a12, `obeliskPink` 0xff44aa

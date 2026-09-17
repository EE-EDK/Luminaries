# Entity Audit and Rework — 2026-09-16

Scope: every file under `src/entities/` (33 files, 7,687 lines measured with `wc -l` before the
rework), plus the consumers that read the entity records (`populate.js`, `updates/vegetation.js`,
`updates/magicalEntities.js`, `updates/spawning.js`, `updates/crystalVisuals.js`,
`updates/fauna/*.js`, `main.js`, `quest/questVisuals.js`).
Goals set by the owner: efficiency, fix defects, richer and more lifelike entities without
breaking the 20 FPS floor.

Status: **phases 1–4 and the placement fix implemented, verified headless, written back to the
working tree. Not committed** — git is not reachable from the Cowork session (the checkout's
`.git` file points at `ENGINEERING-PROJECTS\.git\modules\web\luminaries`, outside the shared
folder). Commit and push are the owner's steps (§7).

History: the first pass of this session (audit only) was interrupted by a power loss on the
workstation; the audit was persisted to this file, then the owner approved phases 1–4 plus the
placement fix and the rework was done in a cloud sandbox copy of `src/`, verified, and written
back. Section 1b was originally reported with a two-frame probe (`rAF(rAF)`), which doubled every
draw-call count; the table below is the corrected single-frame measurement. The original numbers
(4,720 / 3,352 / 5,468 / 7,092) are superseded.

---

## 1. Baseline measurements (before the rework)

All numbers were produced in this session. Method noted per table.

### 1a. What actually spawned vs what `constants.js` asks for

Method: `populate()` run headless (Chromium + SwiftShader against `vite` dev server), array
lengths read from `state/entityStore.js` after `debugSkipIntro()`. The world seed is fixed at 42
(`utils/rng.js`), so the live site produces the same counts.

| Entity | Constant | Spawned | Entity | Constant | Spawned |
|---|---:|---:|---|---:|---:|
| Flowers | 230 | **1** | Ferns | 250 | 26 |
| Reeds | 90 | **2** | Mushrooms | 370 | 51 |
| Dandelions | 60 | **2** | Grass patches | 1440 | 215 |
| Thornblooms | 55 | **2** | Crystals | 18 | 7 |
| Corpse blooms | 34 | **2** | Pufflings | 40 | 20 |
| Orb bushes | 46 | **2** | Deer | 12 | 8 |
| Helixvines | 50 | 3 | Luminids | 5 | **1** |
| Lantern pods | 41 | 4 | Snapthorns | 44 | 8 |
| Spiral fronds | 65 | 11 | Veil moss | 50 | 18 |
| Jellies | 35 | 36 | Moths | 35 | 35 |
| Trees | 500 | 495 | Rocks+boulders | 400 | 355 |

### 1b. Draw calls per frame — CORRECTED single-frame probe

Method: `renderer.info.autoReset = false`, `info.reset()`, wait exactly one
`requestAnimationFrame`, read `info.render.calls` / `.triangles`. Player teleported to each
point, 0.7 s settle. Includes the bloom / saturation composer passes and shadow passes.

| Player (x, z) | Draw calls | Triangles |
|---|---:|---:|
| 0, 0 | 2,351 | 742,414 |
| 30, 0 | 1,679 | 667,353 |
| -30, 25 | 2,787 | 630,831 |
| 45, 45 | 3,551 | 679,073 |
| **mean** | **2,592** | **679,918** |

Budget in `reference/performance.md`: **< 200**. Scene graph at runtime: 15,972 objects,
15,049 meshes, 5,328 materials, 13,856 geometries.

### 1c. Per-builder cost before (vitest, 12 samples per builder, scene mocked)

| Builder | meshes / instance | materials / instance | geometries / instance | triangles / instance |
|---|---:|---:|---:|---:|
| moth | 91.0 | 18.0 | 91.0 | 1,238 |
| deer | 90.0 | 37.0 | 90.0 | 1,163 |
| pond | 71.0 | 22.6 | 71.0 | 6,635 |
| fairy ring | 66.5 | 26.2 | 43.2 | 1,720 |
| fern | 57.3 | 14.3 | 57.3 | 450 |
| dandelion | 55.5 | 26.0 | 55.5 | 617 |
| orb bush | 45.2 | 21.0 | 45.2 | 785 |
| flower | 45.0 | 13.0 | 45.0 | 414 |
| jelly | 44.0 | 11.0 | 44.0 | 820 |
| reed | 43.9 | 9.0 | 43.9 | 1,115 |
| snapthorn | 38.7 | 36.7 | 38.7 | 1,348 |
| mushroom | 35.8 | 13.0 | 32.8 | 575 |
| spiral frond | 35.1 | 10.3 | 35.1 | 846 |
| orb (quest) | 35.0 | 18.0 | 35.0 | 1,108 |
| thornbloom | 30.8 | 9.0 | 30.8 | 1,074 |
| crystal | 30.3 | 10.0 | 28.3 | 400 |
| veil moss | 30.0 | 9.6 | 30.0 | 540 |
| luminid | 29.0 | 4.0 | 29.0 | 630 |
| lantern pod | 25.2 | 21.0 | 25.2 | 889 |
| wisp | 21.0 | 13.0 | 21.0 | 478 |
| helixvine | 20.8 | 8.5 | 20.8 | 1,469 |
| puffling | 18.0 | 9.0 | 18.0 | 1,672 |
| corpse bloom | 18.0 | 9.0 | 18.0 | 391 |
| bubble | 15.0 | 12.0 | 15.0 | 570 |
| obelisk (×1) | 117 | 31 | 117 | 3,330 |
| puffling home (×1, ~70 total) | 20 | 17 | 18 | 14,282 |

At full constants the 24 non-instanced types totalled **66,483 meshes / 22,673 materials /
65,150 geometries / 1.19 M triangles**.

---

## 2. Defects found and their disposition

| # | Defect | Fix |
|---|---|---|
| 1 | **Placement starvation** (`populate.js`): every grass patch pushed a 2–4.5 m keep-out, and every flora loop after it made one placement attempt, so flowers / reeds / dandelions / fantasy flora were almost entirely rejected (1a). | Grass keep-outs moved to a separate `grassZones` list (`inGrass()`), used only for grass-on-grass; `findSpot(tries, sample, ok)` retry helper; every flora and fauna spawner retries. Runtime counts in §5. |
| 2 | **Draw calls 8–18× over budget** (1b corrected): one `Mesh` per decorative part. | Phase 1 part baking (`_bake.js`) and Phase 2 instancing (`_instancedFlora.js`) + grass chunking + tree impostor cloud. §4. |
| 3 | **Dandelion dispersal hid the wrong children** (`for (c = 2; ...)` hid the stem). | `disperseDandelion(d)` exported from `flora/dandelions.js`, hides `headMesh` only; `updates/spawning.js` calls it. |
| 4 | **Thornblooms and helixvines never distance-culled.** | Both go through `nearGate()` in `updates/vegetation.js` (hidden > 40 m, glow written < 30 m). |
| 5 | **Rainbow sparkles frame-rate dependent** (`+= speed * 0.016`). | `updateRainbowSparkles(t, dt)`; `main.js` passes `dt`. |
| 6 | **`Math.random()` at build time** in `world/rainbows.js`. | `sr()`. |
| 7 | **Snapthorn allocated 36.7 materials per plant.** | 5 meshes, 5 materials; tentacles are baked tubes on `MOTION.REACH`. |
| 8 | **Fairy rings re-created identical materials** per dot / worm. | Baked; 5 meshes, spores and worms move on the GPU. |
| 9 | **Puffling homes rebuilt ~14k identical triangles per house.** | `getTemplates()` shares geometries; `brickGeometryFor()` shares position/normal/uv buffers and owns only the colour attribute. |
| 10 | **Documentation drift** (`reference/entities.md` counts; comments in `crystals.js`, `mushrooms.js`). | `entities.md` counts now match `constants.js`; the rewritten builders carry current comments. |
| 11 | Minor: `flora/reeds.js` set `joint.rotation.x` then overrode it with `lookAt`. | Gone with the rewrite (tube stalks). `world/rocks.js` typed-array view per visible rock per LOD update: **not touched** (rocks were out of the approved scope). |
| 12 | Found during the rework: obelisk cap-edge / glyph / inscription materials were created at opacity 0 and the reveal never showed them. | Base opacities 0.6 / 0.7 / 0.55. |
| 13 | Found during the rework: the old reactions pass reset every plant's scale to 1, discarding the spawn-time scale. | Records keep `_baseScale`; reactions multiply it. |
| 14 | Found during the rework: instanced templates built from consecutive small seeds were identical (LCG first-draw correlation). | Template seed hashed (`seed * 2654435761 + ti * 40503`) and the generator warmed 8 draws; `entityBudget.test.js` asserts templates differ. |

---

## 3. What was built

**Phase 1 — bake.** `src/entities/_bake.js`: `createBaker()` collects parts by material role with
per-part colour, alpha, emissive scale, sway weight, motion mode and pivot baked into vertex
attributes (`color` RGBA, `aEmis`, `aSway`, `aMotion` vec4, `aPivot`), then merges one `Mesh`
per role. `roleMaterial(kind, opts)` makes the matching vertex-coloured material (`solid`,
`glow`, `haze`, `basic`) and attaches the motion shader. Every builder keeps its record shape
(`group`, `capMat`, `petalMat`, `bellMat`, ...) so the updaters and quest visuals kept working;
material fields that no longer exist are `null` or alias the surviving material, and per-part
arrays the old CPU loops iterated (`tails`, `dustMotes`, `embers`, `spores`, `pads`, `tadpoles`,
`manePlanes`, ...) are empty. Fauna are baked per rigid pivot so the CPU gait / flap / pulse code
is unchanged.

**Phase 2 — instance.** `src/entities/_instancedFlora.js`: ferns (6 templates), flowers (6),
mushrooms (8), reeds (6) as template × role `InstancedMesh` populations with a per-instance glow
attribute (`aInstGlow`) and phase (`aInstPhase`). Records expose a material-shaped proxy
(`rec.capMat.emissiveIntensity = v` writes the instance tint) and an off-scene `Object3D`
`group` that drives the matrix (dirty-checked upload once per frame). Grass patches are merged
into 24 m world-space chunks (`chunkGrassPatches`) with the palette baked as per-vertex
`emisColor`. Tree tier-2 impostors are one `Points` cloud (`flushTreeImpostors()`).

**Phase 3 — fixes.** Table in §2.

**Phase 4 — life.** `src/entities/_motion.js`: one vertex-shader chunk shared by every baked
and instanced material — height-weighted wind sway with world-position phase, player brush-aside
(1.2 m), storm droop, and per-part modes `BOB`, `ORBIT`, `PENDULUM`, `WAVE`, `BREATHE`, `SPIN`,
`FLUTTER`, `FLICKER` (emissive only), `REACH` (wave + lean toward the player within 3.5 m).
Uniforms are written once per frame by `updateMotionGlobals()`. Applied per entity: snapthorn
tentacles reach, jelly tentacles and oral arm undulate, moth eyespots pulse and tails flutter,
puffling and deer breathe, mushroom caps breathe, helix rings orbit, lantern pods swing, veil
curtains wave, corpse-bloom flies and wisp embers orbit, crystal veins flicker, fairy-ring spores
drift. Creature accent meshes (`rec._detail`) are hidden beyond 20–30 m by `applyDetailLod()`.

---

## 4. Results (after, same method as §1)

### 4a. Draw calls per frame — single-frame probe, same four positions

| Player (x, z) | Before | After | Triangles after |
|---|---:|---:|---:|
| 0, 0 | 2,351 | **611** | 1,370,757 |
| 30, 0 | 1,679 | **642** | 1,309,400 |
| -30, 25 | 2,787 | **763** | 1,290,078 |
| 45, 45 | 3,551 | **769** | 1,468,338 |
| **mean** | **2,592** | **696** | **1,359,643** |

Scene graph at runtime: 4,709 objects, 3,502 meshes, 2,117 materials, 3,112 geometries
(was 15,972 / 15,049 / 5,328 / 13,856).

Triangles doubled (0.68 M → 1.36 M) because the placement fix now spawns the flora the constants
ask for (ferns 26 → 133, mushrooms 51 → 216, flowers 1 → 122, grass 215 → 433, §5) and the
rebuilt models carry more detail. Triangle count is GPU-side and was not the bottleneck; draw
calls and object count were.

**The < 200 budget in `reference/performance.md` is not reached.** Per-category tally at the
origin (renderBufferDirect patch, one frame): deer 123, jellies 72, trees 50, pufflings 40,
unowned standard materials 32, moths 30, bubbles 26, spiral fronds 20, instanced flora ~29,
ponds 18, luminids 18, crystals 16, wisps 15, fairy rings 14, shadow passes 14, grass 12. The
remaining cost is animated fauna drawn as several rigid-pivot meshes each and the near-camera
cluster of every category at the world centre. Reaching 200 needs either skinned / instanced
fauna or a per-type distance cap on the number of animated creatures drawn; both are outside
the approved scope and are the recommended next step.

### 4b. Per-builder cost after (vitest, 12 samples, scene mocked)

| Builder | meshes | materials | geometries | triangles | before (meshes) |
|---|---:|---:|---:|---:|---:|
| puffling | 10 | 7 | 9 | 1,760 | 18 |
| moth | 8 | 3 | 8 | 1,354 | 91 |
| jelly | 7 | 7 | 7 | 1,296 | 44 |
| deer | 17 | 3 | 17 | 1,609 | 90 |
| luminid | 17 | 4 | 17 | 796 | 29 |
| snapthorn | 5 | 5 | 5 | 1,673 | 38.7 |
| thornbloom | 4 | 4 | 4 | 1,211 | 30.8 |
| helixvine | 4 | 4 | 4 | 1,661 | 20.8 |
| spiral frond | 4 | 4 | 4 | 930 | 35.1 |
| corpse bloom | 4 | 4 | 4 | 430 | 18 |
| orb bush | 3 | 3 | 3 | 946 | 45.2 |
| lantern pod | 3 | 3 | 3 | 973 | 25.2 |
| crystal | 3 | 3 | 3 | 485 | 30.3 |
| dandelion | 2 | 2 | 2 | 643 | 55.5 |
| veil moss | 2 | 2 | 2 | 626 | 30 |
| bubble | 2 | 2 | 2 | 570 | 15 |
| pond | 7 | 7 | 7 | 2,166 | 71 |
| fairy ring | 5 | 5 | 5 | 1,836 | 66.5 |
| wisp | 6 | 6 | 6 | 620 | 21 |
| orb (quest) | 7 | 7 | 7 | 1,418 | 35 |
| obelisk (×1) | 18 | 18 | 18 | 3,612 | 117 |
| ferns / flowers / reeds (population) | 12 draws | 2 | 12 | — | 57.3 / 45 / 43.9 each |
| mushrooms (population) | 16 draws | 2 | 16 | — | 35.8 each |

At full constants the non-instanced types total **3,046 meshes / 2,518 materials / 3,006
geometries** (was 66,483 / 22,673 / 65,150). Ceilings are pinned by
`src/entities/__tests__/entityBudget.test.js`.

### 4c. Tests and build

- `npm test`: 257 passed (231 existing + 26 new in `entityBudget.test.js`). The new test was
  driven against two seeded defects before being trusted: an extra raw mesh in the puffling
  builder (ceiling rule fails) and a motion material on an unbaked geometry (attribute rule
  fails); both reverted.
- `npm run build`: clean. The "chunks larger than 500 kB" notice is pre-existing (baseline
  build prints it too).
- Showcase screenshots (SwiftShader) inspected for ferns, snapthorns, mushrooms, jellies, deer:
  every entity renders with its parts in place and no page errors. Colour and bloom cannot be
  judged under SwiftShader; the owner should look at the live scene on the RTX 3090.
- **Real FPS was not measured** (SwiftShader ≈ 3 s/frame). Owner: `LumiDebug.perf()` before and
  after, same four positions.

---

## 5. Runtime entity counts after the placement fix (seed 42)

| Entity | Constant | Before | After | Entity | Constant | Before | After |
|---|---:|---:|---:|---|---:|---:|---:|
| Flowers | 230 | 1 | **122** | Ferns | 250 | 26 | **133** |
| Reeds | 90 | 2 | **43** | Mushrooms | 370 | 51 | **216** |
| Dandelions | 60 | 2 | **22** | Grass patches | 1440 | 215 | **433** |
| Thornblooms | 55 | 2 | **46** | Crystals | 18 | 7 | **18** |
| Corpse blooms | 34 | 2 | **28** | Pufflings | 40 | 20 | **35** |
| Orb bushes | 46 | 2 | **41** | Deer | 12 | 8 | **12** |
| Helixvines | 50 | 3 | **37** | Luminids | 5 | 1 | **5** |
| Lantern pods | 41 | 4 | **22** | Snapthorns | 44 | 8 | **35** |
| Spiral fronds | 65 | 11 | **49** | Veil moss | 50 | 18 | **40** |

Remaining shortfalls (flowers 122/230, reeds 43/90, lantern pods 22/41, dandelions 22/60) are
the placement rules that still hold after 12 tries (8 for lantern pods): the open-area bias
rejects 90–92 % of dense-biome and 50–55 % of edge-biome samples for flowers, reeds and
dandelions, lantern pods must land within 2–6 m of a tree, and the tree / fern / pod keep-outs
still apply. Raising the try count or relaxing the bias is a tuning decision, not a defect.

---

## 6. Files changed

New: `src/entities/_motion.js`, `src/entities/_bake.js`, `src/entities/_instancedFlora.js`,
`src/entities/__tests__/entityBudget.test.js`.

Rewritten (builders): `entities/flora/{ferns,flowers,mushrooms,reeds,crystals,dandelions,
thornbloom,helixvine,snapthorn,spiralfrond,corpsebloom,orbbush,lanternpod,veilmoss,grass,trees}.js`,
`entities/fauna/{jellies,pufflings,deer,moths,luminids}.js`,
`entities/magical/{wisps,bubbles,orbs,fairyRings,ponds}.js`,
`entities/world/{obelisk,moat,rainbows,pufflingHomeDetailed}.js`.

Consumers updated: `populate.js`, `main.js`, `quest/questVisuals.js`,
`updates/{vegetation,magicalEntities,spawning,crystalVisuals}.js`,
`updates/fauna/{jellies,pufflings,deer,moths}.js`.

Untouched: `entities/world/{energyLines,pufflingHomes,rocks}.js`.

Docs: this file, `reference/entities.md`, `CLAUDE.md` (roll-up entry).

`docs/` (the built site) was **not** regenerated; run `npm run build` before the next push.

---

## 7. Owner steps

1. `npm test` and `npm run build` on KunzPrime (confirms the Windows toolchain agrees with the
   sandbox).
2. Look at the scene on the GPU; `LumiDebug.perf()` at (0,0), (30,0), (-30,25), (45,45).
3. Stage by explicit path (the list in §6), commit with a message in the project's own words
   (no tool names, no attribution trailers — the commit-msg hook rejects them), then push as a
   separate command.

---

## 8. Measurement recipe (reproducible)

Sandbox: copy of `src/`, `index.html`, `public/`, `vite.config.js`, `package.json`;
`npm install --legacy-peer-deps` (plain `npm install` fails on vitest 4.1.2 peer resolution
with npm 10.9: "Cannot read properties of null (reading 'edgesOut')").

1. `npx vite --port 5173 --strictPort`
2. Playwright Chromium with `--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader`
3. Wait for `window.LumiDebug`, then
   `import('/src/systems/intro/index.js').then(m => m.debugSkipIntro())`
4. Teleport: `import('/src/core/player.js')` → set `player.pos`, y = `getGroundY + 1.7`
5. `renderer.info.autoReset = false; renderer.info.reset();` wait **one** rAF, read
   `renderer.info.render.calls` / `.triangles`. Two nested rAFs count two frames.

Frame time under SwiftShader is not meaningful (≈3 s/frame); only draw calls, triangles and
object counts are used from that environment.

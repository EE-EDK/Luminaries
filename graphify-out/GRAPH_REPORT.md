# Graph Report - .  (2026-04-19)

## Corpus Check
- 136 files · ~209,059 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 958 nodes · 1578 edges · 135 communities detected
- Extraction: 53% EXTRACTED · 47% INFERRED · 0% AMBIGUOUS · INFERRED: 741 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `X()` - 43 edges
2. `Ra()` - 36 edges
3. `vO()` - 31 edges
4. `la()` - 27 edges
5. `Cc()` - 27 edges
6. `Y()` - 21 edges
7. `ap()` - 20 edges
8. `fa()` - 19 edges
9. `fd()` - 19 edges
10. `hc()` - 18 edges

## Surprising Connections (you probably didn't know these)
- `updateMusic()` --calls--> `playDrone()`  [INFERRED]
  src\systems\audio\music.js → src\systems\music.js
- `updateMusic()` --calls--> `playBassPulse()`  [INFERRED]
  src\systems\audio\music.js → src\systems\music.js
- `updateMusic()` --calls--> `generateHarpArpeggio()`  [INFERRED]
  src\systems\audio\music.js → src\systems\music.js
- `updateMusic()` --calls--> `generateFlutePhrase()`  [INFERRED]
  src\systems\audio\music.js → src\systems\music.js
- `updateMusic()` --calls--> `generateChimeCluster()`  [INFERRED]
  src\systems\audio\music.js → src\systems\music.js

## Communities

### Community 0 - "Bundled Assets"
Cohesion: 0.03
Nodes (32): Al(), av(), bl(), cl(), $e(), Er(), eu(), Fl() (+24 more)

### Community 1 - "Utility Functions A"
Cohesion: 0.05
Nodes (76): ao(), ap(), au(), Ba(), Bf(), Bk(), bv(), Bx() (+68 more)

### Community 2 - "Utility Functions B"
Cohesion: 0.11
Nodes (36): Ac(), bc(), c(), Cc(), Dc(), Ds(), ec(), el() (+28 more)

### Community 3 - "Utility Functions C"
Cohesion: 0.08
Nodes (28): ay(), bg(), Eg(), fg(), Gg(), gx(), Hg(), hx() (+20 more)

### Community 4 - "Kernel Logic"
Cohesion: 0.12
Nodes (10): animate(), director(), _directorFaunaUpdate(), _directorMagical(), updateDeers(), updateFairyRings(), updateJellies(), updateLuminids() (+2 more)

### Community 5 - "Utility Functions D"
Cohesion: 0.12
Nodes (20): _b(), Bd(), ca(), co(), da(), db(), dd(), gb() (+12 more)

### Community 6 - "Spirit Hum System"
Cohesion: 0.11
Nodes (2): startResonanceDrone(), stopResonanceDrone()

### Community 7 - "Utility Functions E"
Cohesion: 0.16
Nodes (18): AE(), be(), de(), df(), fE(), hE(), ie(), le() (+10 more)

### Community 8 - "Utility Functions F"
Cohesion: 0.12
Nodes (17): a(), eo(), gO(), Ka(), kE(), Lx(), ne(), og() (+9 more)

### Community 9 - "Utility Functions G"
Cohesion: 0.12
Nodes (17): am(), bb(), cm(), ED(), em(), i(), If(), JD() (+9 more)

### Community 10 - "Utility Functions H"
Cohesion: 0.24
Nodes (17): bT(), gt(), ht(), JT(), Kt(), n(), pt(), qT() (+9 more)

### Community 11 - "Sky & Stars"
Cohesion: 0.23
Nodes (13): createConstellations(), createShootingStars(), createSkyDome(), createTwinkleStars(), getConstellationDir(), paintSkyCanvas(), revealConstellation(), rgba() (+5 more)

### Community 12 - "Utility Functions I"
Cohesion: 0.13
Nodes (15): Bw(), Fw(), Hw(), Ja(), nT(), ov(), qw(), re() (+7 more)

### Community 13 - "Intro Animations"
Cohesion: 0.23
Nodes (12): animateMushrooms(), animatePixie(), animatePufflings(), animateTitle(), animateTitleGlow(), animateTree(), noise1d(), pixiePos() (+4 more)

### Community 14 - "Discoveries System"
Cohesion: 0.15
Nodes (4): checkDiscoveries(), checkIdleHints(), showDiscovery(), showNarrativeText()

### Community 15 - "Game State"
Cohesion: 0.14
Nodes (0): 

### Community 16 - "Rock Generation"
Cohesion: 0.21
Nodes (8): applyVertexColors(), createImpostor(), createRockSDF(), displaceSmooth(), initPebbles(), initProceduralRocks(), marchingCubes(), measureGeometry()

### Community 17 - "Tree Generation"
Cohesion: 0.24
Nodes (10): applySlopeTilt(), bakeTemplate(), createTreeInstances(), createTreeTemplates(), generateTemplateTree(), getBarkTexture(), getCanopyAlphaMap(), getGlowTexture() (+2 more)

### Community 18 - "Music Synthesis"
Cohesion: 0.33
Nodes (11): generateChimeCluster(), generateFlutePhrase(), generateHarpArpeggio(), initMusic(), noteFreq(), playBassPulse(), playChime(), playDrone() (+3 more)

### Community 19 - "Terrain Engine"
Cohesion: 0.36
Nodes (11): buildHeightCache(), cellDist(), _computeGroundY(), fbm(), getGroundNormal(), getGroundY(), hash(), landformHeight() (+3 more)

### Community 20 - "Utility Functions J"
Cohesion: 0.17
Nodes (12): d(), ek(), ep(), f(), Ik(), Lk(), o(), Qf() (+4 more)

### Community 21 - "Audio Core"
Cohesion: 0.17
Nodes (0): 

### Community 22 - "Utility Functions K"
Cohesion: 0.27
Nodes (11): g(), h(), hh(), hl(), l(), lm(), m(), Os() (+3 more)

### Community 23 - "Core Architecture"
Cohesion: 0.2
Nodes (11): Director Pattern, Kernel (Scheduler/EventBus/Registry), Deterministic World Generation, 20 FPS Minimum Mandate, Zero Assets Mandate, Luminaries Project, Procedural Audio Engine Protocol, Unified WebGL Protocol v4.1 (+3 more)

### Community 24 - "Utility Functions L"
Cohesion: 0.22
Nodes (10): AA(), dg(), jy(), Mv(), nv(), sy(), Vv(), vy() (+2 more)

### Community 25 - "Quest Interactions"
Cohesion: 0.36
Nodes (9): explodeGlitter(), getObeliskTipY(), initFlashOverlay(), initGlitter(), initQuest(), revealAllObeliskDetails(), transformTreesAndGround(), updateGlitter() (+1 more)

### Community 26 - "AI Steering"
Cohesion: 0.2
Nodes (0): 

### Community 27 - "Player Audio"
Cohesion: 0.2
Nodes (0): 

### Community 28 - "Input Handling"
Cohesion: 0.2
Nodes (0): 

### Community 29 - "Attunement Logic"
Cohesion: 0.25
Nodes (2): updateAttunement(), _updatePuffOnly()

### Community 30 - "Utility Functions M"
Cohesion: 0.29
Nodes (8): ip(), jf(), mf(), np(), r(), rp(), um(), wm()

### Community 31 - "Intro System"
Cohesion: 0.29
Nodes (2): onTitleClick(), startIntro()

### Community 32 - "Obelisk System"
Cohesion: 0.25
Nodes (0): 

### Community 33 - "Ground Engine"
Cohesion: 0.43
Nodes (5): createGround(), gfbm(), ghash(), gnoise(), makeGroundTexture()

### Community 34 - "Quest Audio"
Cohesion: 0.29
Nodes (0): 

### Community 35 - "World Sectors"
Cohesion: 0.33
Nodes (2): getSector(), isRestored()

### Community 36 - "Task Scheduler"
Cohesion: 0.29
Nodes (0): 

### Community 37 - "Utility Functions N"
Cohesion: 0.52
Nodes (7): cf(), Ef(), ff(), lf(), sf(), uf(), yf()

### Community 38 - "Laser System"
Cohesion: 0.43
Nodes (4): buildBendGeo(), makeLaser(), rebuildBends(), updateLasers()

### Community 39 - "Math Utils"
Cohesion: 0.29
Nodes (0): 

### Community 40 - "Utility Functions O"
Cohesion: 0.33
Nodes (6): af(), gp(), hp(), mp(), Qp(), Wd()

### Community 41 - "Utility Functions P"
Cohesion: 0.4
Nodes (6): at(), dt(), ft(), it(), ot(), xw()

### Community 42 - "World Population"
Cohesion: 0.67
Nodes (5): computeSlopeQuat(), inKeepOut(), makeGlyphs(), populate(), tiltToSlope()

### Community 43 - "Weather Engine"
Cohesion: 0.47
Nodes (4): buildMistPlanes(), initWeather(), pickNext(), updateWeather()

### Community 44 - "Magical Entity Updates"
Cohesion: 0.33
Nodes (0): 

### Community 45 - "Creature Audio"
Cohesion: 0.47
Nodes (3): playAttunementFlash(), playPufflingSinging(), singNoteFreq()

### Community 46 - "AI Senses"
Cohesion: 0.4
Nodes (2): dist(), dist2()

### Community 47 - "Service Registry"
Cohesion: 0.33
Nodes (0): 

### Community 48 - "Game Mechanics"
Cohesion: 0.33
Nodes (6): Fauna (Jelly/Puffling/Deer/Moth), Creature Attunement, The Dimming (Sector Suppression), Dual Narrative (Child/Adult), Spirit Hum (Pitch Lock), Phase 2 (Symbiotic Attunement)

### Community 49 - "Footprints System"
Cohesion: 0.5
Nodes (2): createFootShape(), initFootprints()

### Community 50 - "RNG Utils"
Cohesion: 0.4
Nodes (0): 

### Community 51 - "Leaves Particles"
Cohesion: 0.4
Nodes (0): 

### Community 52 - "Spores Particles"
Cohesion: 0.4
Nodes (0): 

### Community 53 - "Seeds Particles"
Cohesion: 0.4
Nodes (0): 

### Community 54 - "Player Visuals"
Cohesion: 0.4
Nodes (0): 

### Community 55 - "Puffling Chat"
Cohesion: 0.5
Nodes (2): pickMessage(), triggerPufflingChat()

### Community 56 - "EventBus Tests"
Cohesion: 0.4
Nodes (0): 

### Community 57 - "Moth Generation"
Cohesion: 0.6
Nodes (3): _makeForewingShape(), _makeHindwingShape(), makeMoth()

### Community 58 - "Event Bus"
Cohesion: 0.4
Nodes (0): 

### Community 59 - "Day/Night Cycle"
Cohesion: 0.4
Nodes (0): 

### Community 60 - "Ambient Audio"
Cohesion: 0.6
Nodes (3): ensureAmbient(), spawnCricketPing(), updateAmbientSounds()

### Community 61 - "Laser Audio"
Cohesion: 0.4
Nodes (0): 

### Community 62 - "Orb Bursts"
Cohesion: 0.5
Nodes (0): 

### Community 63 - "Luminid Fauna"
Cohesion: 0.5
Nodes (0): 

### Community 64 - "Moat Visuals"
Cohesion: 0.5
Nodes (0): 

### Community 65 - "Dust Particles"
Cohesion: 0.5
Nodes (0): 

### Community 66 - "Resonance Rings"
Cohesion: 0.5
Nodes (0): 

### Community 67 - "Intro Models"
Cohesion: 0.5
Nodes (0): 

### Community 68 - "Puffling Fauna"
Cohesion: 0.5
Nodes (0): 

### Community 69 - "Star Motes"
Cohesion: 0.67
Nodes (2): spawnStarMote(), updateStarMotes()

### Community 70 - "Particle Spawning"
Cohesion: 0.5
Nodes (0): 

### Community 71 - "Deer Fauna"
Cohesion: 0.5
Nodes (0): 

### Community 72 - "Entity Store"
Cohesion: 0.5
Nodes (0): 

### Community 73 - "Rainbow Visuals"
Cohesion: 0.67
Nodes (2): buildRibbonGeo(), makeRainbows()

### Community 74 - "Rain System"
Cohesion: 0.83
Nodes (3): hideDropVerts(), initRain(), updateRain()

### Community 75 - "Performance Monitor"
Cohesion: 0.5
Nodes (0): 

### Community 76 - "Bubble Particles"
Cohesion: 0.5
Nodes (0): 

### Community 77 - "Fireflies Particles"
Cohesion: 0.5
Nodes (0): 

### Community 78 - "Overlay UI"
Cohesion: 0.5
Nodes (0): 

### Community 79 - "Dandelion Flora"
Cohesion: 0.67
Nodes (0): 

### Community 80 - "Atmospheric Audio"
Cohesion: 1.0
Nodes (2): playThunder(), updateAudio()

### Community 81 - "Spatial Hashing"
Cohesion: 0.67
Nodes (0): 

### Community 82 - "Aurora Visuals"
Cohesion: 0.67
Nodes (0): 

### Community 83 - "Vegetation Updates"
Cohesion: 0.67
Nodes (0): 

### Community 84 - "Echo Visions"
Cohesion: 0.67
Nodes (0): 

### Community 85 - "Kernel Context"
Cohesion: 0.67
Nodes (0): 

### Community 86 - "Pond Generation"
Cohesion: 1.0
Nodes (2): makeOrganicDiscGeo(), makePond()

### Community 87 - "Jelly Fauna"
Cohesion: 0.67
Nodes (0): 

### Community 88 - "Energy Lines"
Cohesion: 0.67
Nodes (0): 

### Community 89 - "Post-Processing"
Cohesion: 0.67
Nodes (0): 

### Community 90 - "Grass Generation"
Cohesion: 0.67
Nodes (0): 

### Community 91 - "HUD System"
Cohesion: 0.67
Nodes (0): 

### Community 92 - "Snapthorn Flora"
Cohesion: 0.67
Nodes (0): 

### Community 93 - "Wisp Entities"
Cohesion: 1.0
Nodes (0): 

### Community 94 - "Reed Flora"
Cohesion: 1.0
Nodes (0): 

### Community 95 - "Lanternpod Flora"
Cohesion: 1.0
Nodes (0): 

### Community 96 - "Fairy Rings"
Cohesion: 1.0
Nodes (0): 

### Community 97 - "Flower Flora"
Cohesion: 1.0
Nodes (0): 

### Community 98 - "Glyphs Visuals"
Cohesion: 1.0
Nodes (0): 

### Community 99 - "Attunement Visuals"
Cohesion: 1.0
Nodes (0): 

### Community 100 - "Fern Flora"
Cohesion: 1.0
Nodes (0): 

### Community 101 - "Thornbloom Flora"
Cohesion: 1.0
Nodes (0): 

### Community 102 - "Veilmoss Flora"
Cohesion: 1.0
Nodes (0): 

### Community 103 - "Spirit Hum Visuals"
Cohesion: 1.0
Nodes (0): 

### Community 104 - "Spiralfrond Flora"
Cohesion: 1.0
Nodes (0): 

### Community 105 - "Corpsebloom Flora"
Cohesion: 1.0
Nodes (0): 

### Community 106 - "Helixvine Flora"
Cohesion: 1.0
Nodes (0): 

### Community 107 - "System Registration"
Cohesion: 1.0
Nodes (0): 

### Community 108 - "Crystal Lighting"
Cohesion: 1.0
Nodes (0): 

### Community 109 - "Mushroom Flora"
Cohesion: 1.0
Nodes (0): 

### Community 110 - "Orb Entities"
Cohesion: 1.0
Nodes (0): 

### Community 111 - "Bubble Entities"
Cohesion: 1.0
Nodes (0): 

### Community 112 - "Orbbush Flora"
Cohesion: 1.0
Nodes (0): 

### Community 113 - "Audio Controls"
Cohesion: 1.0
Nodes (0): 

### Community 114 - "Crystal Flora"
Cohesion: 1.0
Nodes (0): 

### Community 115 - "Build Config"
Cohesion: 1.0
Nodes (0): 

### Community 116 - "Test Config"
Cohesion: 1.0
Nodes (0): 

### Community 117 - "Global Constants"
Cohesion: 1.0
Nodes (0): 

### Community 118 - "Geometry Utils"
Cohesion: 1.0
Nodes (0): 

### Community 119 - "Renderer Core"
Cohesion: 1.0
Nodes (0): 

### Community 120 - "Context Tests"
Cohesion: 1.0
Nodes (0): 

### Community 121 - "Registry Tests"
Cohesion: 1.0
Nodes (0): 

### Community 122 - "Scheduler Tests"
Cohesion: 1.0
Nodes (0): 

### Community 123 - "Intro Utils"
Cohesion: 1.0
Nodes (0): 

### Community 124 - "Fauna Registry"
Cohesion: 1.0
Nodes (0): 

### Community 125 - "Math Tests"
Cohesion: 1.0
Nodes (0): 

### Community 126 - "RNG Tests"
Cohesion: 1.0
Nodes (0): 

### Community 127 - "Lighting Constraints"
Cohesion: 1.0
Nodes (1): 8 Real-time Lights Max

### Community 128 - "Rendering Constraints"
Cohesion: 1.0
Nodes (1): < 200 Draw Calls Mandate

### Community 129 - "Allocation Constraints"
Cohesion: 1.0
Nodes (1): Zero Loop Allocations Mandate

### Community 130 - "Gameplay Boosts"
Cohesion: 1.0
Nodes (1): Fairy Ring Boost

### Community 131 - "Editorial Protocols"
Cohesion: 1.0
Nodes (1): Technical Editor Protocol v5.1

### Community 132 - "Project Milestones"
Cohesion: 1.0
Nodes (1): Phase 1 (Foundation)

### Community 133 - "Flora Categories"
Cohesion: 1.0
Nodes (1): Flora (Trees/Mushrooms/Crystals/etc)

### Community 134 - "Magical Categories"
Cohesion: 1.0
Nodes (1): Magical Entities (Wisps/Fairy Rings/Orbs)

## Knowledge Gaps
- **17 isolated node(s):** `20 FPS Minimum Mandate`, `8 Real-time Lights Max`, `< 200 Draw Calls Mandate`, `Zero Loop Allocations Mandate`, `Three.js (r172+)` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Wisp Entities`** (2 nodes): `wisps.js`, `makeWisp()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Reed Flora`** (2 nodes): `reeds.js`, `makeReed()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Lanternpod Flora`** (2 nodes): `lanternpod.js`, `makeLanternPod()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fairy Rings`** (2 nodes): `fairyRings.js`, `makeFairyRing()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Flower Flora`** (2 nodes): `flowers.js`, `makeFlower()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Glyphs Visuals`** (2 nodes): `glyphs.js`, `updateGlyphs()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Attunement Visuals`** (2 nodes): `attunementVisuals.js`, `updateAttunementVisuals()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fern Flora`** (2 nodes): `ferns.js`, `makeFern()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Thornbloom Flora`** (2 nodes): `thornbloom.js`, `makeThornbloom()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Veilmoss Flora`** (2 nodes): `veilmoss.js`, `makeVeilMoss()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Spirit Hum Visuals`** (2 nodes): `spiritHumVisuals.js`, `updateSpiritHumVisuals()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Spiralfrond Flora`** (2 nodes): `spiralfrond.js`, `makeSpiralFrond()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Corpsebloom Flora`** (2 nodes): `corpsebloom.js`, `makeCorpseBloom()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Helixvine Flora`** (2 nodes): `helixvine.js`, `makeHelixvine()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `System Registration`** (2 nodes): `registration.js`, `registerAllSystems()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Crystal Lighting`** (2 nodes): `lighting.js`, `initCrystalLights()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Mushroom Flora`** (2 nodes): `mushrooms.js`, `makeMush()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Orb Entities`** (2 nodes): `orbs.js`, `makeOrb()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Bubble Entities`** (2 nodes): `bubbles.js`, `makeBubble()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Orbbush Flora`** (2 nodes): `orbbush.js`, `makeOrbBush()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Audio Controls`** (2 nodes): `audio.js`, `toggleMute()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Crystal Flora`** (2 nodes): `crystals.js`, `makeCrystal()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Build Config`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Test Config`** (1 nodes): `vitest.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Global Constants`** (1 nodes): `constants.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Geometry Utils`** (1 nodes): `geometries.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Renderer Core`** (1 nodes): `renderer.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Context Tests`** (1 nodes): `context.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Registry Tests`** (1 nodes): `registry.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Scheduler Tests`** (1 nodes): `scheduler.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Intro Utils`** (1 nodes): `intro.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fauna Registry`** (1 nodes): `fauna.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Math Tests`** (1 nodes): `math.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `RNG Tests`** (1 nodes): `rng.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Lighting Constraints`** (1 nodes): `8 Real-time Lights Max`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Rendering Constraints`** (1 nodes): `< 200 Draw Calls Mandate`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Allocation Constraints`** (1 nodes): `Zero Loop Allocations Mandate`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Gameplay Boosts`** (1 nodes): `Fairy Ring Boost`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Editorial Protocols`** (1 nodes): `Technical Editor Protocol v5.1`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Project Milestones`** (1 nodes): `Phase 1 (Foundation)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Flora Categories`** (1 nodes): `Flora (Trees/Mushrooms/Crystals/etc)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Magical Categories`** (1 nodes): `Magical Entities (Wisps/Fairy Rings/Orbs)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `X()` connect `Utility Functions C` to `Bundled Assets`, `Utility Functions A`, `Utility Functions B`, `Utility Functions E`, `Utility Functions F`, `Utility Functions J`, `Utility Functions K`, `Utility Functions L`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Why does `Ra()` connect `Utility Functions A` to `Bundled Assets`, `Utility Functions B`, `Utility Functions C`, `Utility Functions D`, `Utility Functions E`, `Utility Functions F`, `Utility Functions G`, `Utility Functions P`, `Utility Functions O`, `Utility Functions J`, `Utility Functions L`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Why does `vO()` connect `Utility Functions E` to `Bundled Assets`, `Utility Functions A`, `Utility Functions C`, `Utility Functions F`, `Utility Functions H`, `Utility Functions I`, `Utility Functions K`, `Utility Functions M`?**
  _High betweenness centrality (0.000) - this node is a cross-community bridge._
- **Are the 42 inferred relationships involving `X()` (e.g. with `au()` and `lm()`) actually correct?**
  _`X()` has 42 INFERRED edges - model-reasoned connections that need verification._
- **Are the 35 inferred relationships involving `Ra()` (e.g. with `fa()` and `qa()`) actually correct?**
  _`Ra()` has 35 INFERRED edges - model-reasoned connections that need verification._
- **Are the 30 inferred relationships involving `vO()` (e.g. with `X()` and `Y()`) actually correct?**
  _`vO()` has 30 INFERRED edges - model-reasoned connections that need verification._
- **Are the 26 inferred relationships involving `la()` (e.g. with `da()` and `fa()`) actually correct?**
  _`la()` has 26 INFERRED edges - model-reasoned connections that need verification._
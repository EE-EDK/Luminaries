# Graph Report - C:\Users\edk7c\ENGINEERING-PROJECTS\web\luminaries  (2026-04-26)

## Corpus Check
- 129 files · ~119,598 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 630 nodes · 670 edges · 119 communities detected
- Extraction: 76% EXTRACTED · 24% INFERRED · 0% AMBIGUOUS · INFERRED: 159 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `updateWizardPufflingEvent()` - 9 edges
2. `animateTitle()` - 8 edges
3. `_computeGroundY()` - 8 edges
4. `updateQuest()` - 7 edges
5. `updateQuestVisuals()` - 7 edges
6. `showNarrativeText()` - 7 edges
7. `updateMusic()` - 7 edges
8. `_directorFaunaUpdate()` - 6 edges
9. `animate()` - 6 edges
10. `initProceduralRocks()` - 6 edges

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

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (11): animate(), director(), _directorFaunaUpdate(), _directorMagical(), syncContext(), updateDeers(), updateFairyRings(), updateJellies() (+3 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (2): startResonanceDrone(), stopResonanceDrone()

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (13): checkDiscoveries(), checkEntityGroup(), checkIdleHints(), getHintClarityTier(), getSeekHudLabel(), showDiscovery(), showFinaleText(), showFreeRoamText() (+5 more)

### Community 3 - "Community 3"
Cohesion: 0.23
Nodes (13): createConstellations(), createShootingStars(), createSkyDome(), createTwinkleStars(), getConstellationDir(), paintSkyCanvas(), revealConstellation(), rgba() (+5 more)

### Community 4 - "Community 4"
Cohesion: 0.23
Nodes (12): explodeGlitter(), gatherCreatures(), getObeliskTipY(), initFlashOverlay(), initGlitter(), initQuestVisuals(), onOrbCollected(), onOrbLaserStart() (+4 more)

### Community 5 - "Community 5"
Cohesion: 0.23
Nodes (12): animateMushrooms(), animatePixie(), animatePufflings(), animateTitle(), animateTitleGlow(), animateTree(), noise1d(), pixiePos() (+4 more)

### Community 6 - "Community 6"
Cohesion: 0.31
Nodes (11): buildHeightCache(), cellDist(), _computeGroundY(), fbm(), getGroundNormal(), getGroundY(), hash(), landformHeight() (+3 more)

### Community 7 - "Community 7"
Cohesion: 0.21
Nodes (8): applyVertexColors(), createImpostor(), createRockSDF(), displaceSmooth(), initPebbles(), initProceduralRocks(), marchingCubes(), measureGeometry()

### Community 8 - "Community 8"
Cohesion: 0.25
Nodes (11): cleanupLaser(), clearCameraForce(), forceLookAt(), lookAngles(), removeWizard(), spawnSkyLaser(), spawnSmokePuff(), spawnWizardNearPlayer() (+3 more)

### Community 9 - "Community 9"
Cohesion: 0.24
Nodes (10): applySlopeTilt(), bakeTemplate(), createTreeInstances(), createTreeTemplates(), generateTemplateTree(), getBarkTexture(), getCanopyAlphaMap(), getGlowTexture() (+2 more)

### Community 10 - "Community 10"
Cohesion: 0.33
Nodes (11): generateChimeCluster(), generateFlutePhrase(), generateHarpArpeggio(), initMusic(), noteFreq(), playBassPulse(), playChime(), playDrone() (+3 more)

### Community 11 - "Community 11"
Cohesion: 0.17
Nodes (0): 

### Community 12 - "Community 12"
Cohesion: 0.17
Nodes (0): 

### Community 13 - "Community 13"
Cohesion: 0.18
Nodes (0): 

### Community 14 - "Community 14"
Cohesion: 0.2
Nodes (0): 

### Community 15 - "Community 15"
Cohesion: 0.36
Nodes (9): explodeGlitter(), getObeliskTipY(), initFlashOverlay(), initGlitter(), initQuest(), revealAllObeliskDetails(), transformTreesAndGround(), updateGlitter() (+1 more)

### Community 16 - "Community 16"
Cohesion: 0.25
Nodes (2): updateAttunement(), _updatePuffOnly()

### Community 17 - "Community 17"
Cohesion: 0.43
Nodes (5): createGround(), gfbm(), ghash(), gnoise(), makeGroundTexture()

### Community 18 - "Community 18"
Cohesion: 0.25
Nodes (0): 

### Community 19 - "Community 19"
Cohesion: 0.25
Nodes (0): 

### Community 20 - "Community 20"
Cohesion: 0.43
Nodes (5): addHarmonicLayer(), noteFreq(), startClusterHarmonies(), stopClusterHarmonies(), updateCrystalResonance()

### Community 21 - "Community 21"
Cohesion: 0.29
Nodes (2): onTitleClick(), startIntro()

### Community 22 - "Community 22"
Cohesion: 0.29
Nodes (0): 

### Community 23 - "Community 23"
Cohesion: 0.29
Nodes (0): 

### Community 24 - "Community 24"
Cohesion: 0.43
Nodes (4): buildBendGeo(), makeLaser(), rebuildBends(), updateLasers()

### Community 25 - "Community 25"
Cohesion: 0.33
Nodes (2): getSector(), isRestored()

### Community 26 - "Community 26"
Cohesion: 0.29
Nodes (0): 

### Community 27 - "Community 27"
Cohesion: 0.29
Nodes (0): 

### Community 28 - "Community 28"
Cohesion: 0.43
Nodes (4): _query(), queryNearAll(), queryNearDynamic(), queryNearTrees()

### Community 29 - "Community 29"
Cohesion: 0.33
Nodes (0): 

### Community 30 - "Community 30"
Cohesion: 0.33
Nodes (0): 

### Community 31 - "Community 31"
Cohesion: 0.4
Nodes (2): setPerspective(), togglePerspective()

### Community 32 - "Community 32"
Cohesion: 0.4
Nodes (2): dist(), dist2()

### Community 33 - "Community 33"
Cohesion: 0.33
Nodes (0): 

### Community 34 - "Community 34"
Cohesion: 0.47
Nodes (4): buildMistPlanes(), initWeather(), pickNext(), updateWeather()

### Community 35 - "Community 35"
Cohesion: 0.67
Nodes (5): computeSlopeQuat(), inKeepOut(), makeGlyphs(), populate(), tiltToSlope()

### Community 36 - "Community 36"
Cohesion: 0.33
Nodes (0): 

### Community 37 - "Community 37"
Cohesion: 0.47
Nodes (3): playAttunementFlash(), playPufflingSinging(), singNoteFreq()

### Community 38 - "Community 38"
Cohesion: 0.4
Nodes (0): 

### Community 39 - "Community 39"
Cohesion: 0.4
Nodes (0): 

### Community 40 - "Community 40"
Cohesion: 0.6
Nodes (3): ensureAmbient(), spawnCricketPing(), updateAmbientSounds()

### Community 41 - "Community 41"
Cohesion: 0.4
Nodes (0): 

### Community 42 - "Community 42"
Cohesion: 0.4
Nodes (0): 

### Community 43 - "Community 43"
Cohesion: 0.5
Nodes (2): pickMessage(), triggerPufflingChat()

### Community 44 - "Community 44"
Cohesion: 0.4
Nodes (0): 

### Community 45 - "Community 45"
Cohesion: 0.4
Nodes (0): 

### Community 46 - "Community 46"
Cohesion: 0.6
Nodes (3): _makeForewingShape(), _makeHindwingShape(), makeMoth()

### Community 47 - "Community 47"
Cohesion: 0.4
Nodes (0): 

### Community 48 - "Community 48"
Cohesion: 0.4
Nodes (0): 

### Community 49 - "Community 49"
Cohesion: 0.4
Nodes (0): 

### Community 50 - "Community 50"
Cohesion: 0.5
Nodes (2): initCrystalLights(), initLightPooler()

### Community 51 - "Community 51"
Cohesion: 0.5
Nodes (2): createFootShape(), initFootprints()

### Community 52 - "Community 52"
Cohesion: 0.4
Nodes (0): 

### Community 53 - "Community 53"
Cohesion: 0.5
Nodes (0): 

### Community 54 - "Community 54"
Cohesion: 0.5
Nodes (0): 

### Community 55 - "Community 55"
Cohesion: 0.83
Nodes (3): hideDropVerts(), initRain(), updateRain()

### Community 56 - "Community 56"
Cohesion: 0.5
Nodes (0): 

### Community 57 - "Community 57"
Cohesion: 0.5
Nodes (0): 

### Community 58 - "Community 58"
Cohesion: 0.5
Nodes (0): 

### Community 59 - "Community 59"
Cohesion: 0.5
Nodes (0): 

### Community 60 - "Community 60"
Cohesion: 0.5
Nodes (0): 

### Community 61 - "Community 61"
Cohesion: 0.5
Nodes (0): 

### Community 62 - "Community 62"
Cohesion: 0.67
Nodes (2): spawnStarMote(), updateStarMotes()

### Community 63 - "Community 63"
Cohesion: 0.67
Nodes (2): buildRibbonGeo(), makeRainbows()

### Community 64 - "Community 64"
Cohesion: 0.5
Nodes (0): 

### Community 65 - "Community 65"
Cohesion: 0.5
Nodes (0): 

### Community 66 - "Community 66"
Cohesion: 0.5
Nodes (0): 

### Community 67 - "Community 67"
Cohesion: 0.5
Nodes (0): 

### Community 68 - "Community 68"
Cohesion: 0.5
Nodes (0): 

### Community 69 - "Community 69"
Cohesion: 0.5
Nodes (0): 

### Community 70 - "Community 70"
Cohesion: 0.67
Nodes (2): ensureJellyRitualOrb(), updateJellies()

### Community 71 - "Community 71"
Cohesion: 0.5
Nodes (0): 

### Community 72 - "Community 72"
Cohesion: 0.67
Nodes (0): 

### Community 73 - "Community 73"
Cohesion: 0.67
Nodes (0): 

### Community 74 - "Community 74"
Cohesion: 0.67
Nodes (0): 

### Community 75 - "Community 75"
Cohesion: 0.67
Nodes (0): 

### Community 76 - "Community 76"
Cohesion: 0.67
Nodes (0): 

### Community 77 - "Community 77"
Cohesion: 0.67
Nodes (0): 

### Community 78 - "Community 78"
Cohesion: 0.67
Nodes (0): 

### Community 79 - "Community 79"
Cohesion: 0.67
Nodes (0): 

### Community 80 - "Community 80"
Cohesion: 1.0
Nodes (2): playThunder(), updateAudio()

### Community 81 - "Community 81"
Cohesion: 0.67
Nodes (0): 

### Community 82 - "Community 82"
Cohesion: 0.67
Nodes (0): 

### Community 83 - "Community 83"
Cohesion: 1.0
Nodes (2): makeOrganicDiscGeo(), makePond()

### Community 84 - "Community 84"
Cohesion: 0.67
Nodes (0): 

### Community 85 - "Community 85"
Cohesion: 0.67
Nodes (0): 

### Community 86 - "Community 86"
Cohesion: 1.0
Nodes (0): 

### Community 87 - "Community 87"
Cohesion: 1.0
Nodes (0): 

### Community 88 - "Community 88"
Cohesion: 1.0
Nodes (0): 

### Community 89 - "Community 89"
Cohesion: 1.0
Nodes (0): 

### Community 90 - "Community 90"
Cohesion: 1.0
Nodes (0): 

### Community 91 - "Community 91"
Cohesion: 1.0
Nodes (0): 

### Community 92 - "Community 92"
Cohesion: 1.0
Nodes (0): 

### Community 93 - "Community 93"
Cohesion: 1.0
Nodes (0): 

### Community 94 - "Community 94"
Cohesion: 1.0
Nodes (0): 

### Community 95 - "Community 95"
Cohesion: 1.0
Nodes (0): 

### Community 96 - "Community 96"
Cohesion: 1.0
Nodes (0): 

### Community 97 - "Community 97"
Cohesion: 1.0
Nodes (0): 

### Community 98 - "Community 98"
Cohesion: 1.0
Nodes (0): 

### Community 99 - "Community 99"
Cohesion: 1.0
Nodes (0): 

### Community 100 - "Community 100"
Cohesion: 1.0
Nodes (0): 

### Community 101 - "Community 101"
Cohesion: 1.0
Nodes (0): 

### Community 102 - "Community 102"
Cohesion: 1.0
Nodes (0): 

### Community 103 - "Community 103"
Cohesion: 1.0
Nodes (0): 

### Community 104 - "Community 104"
Cohesion: 1.0
Nodes (0): 

### Community 105 - "Community 105"
Cohesion: 1.0
Nodes (0): 

### Community 106 - "Community 106"
Cohesion: 1.0
Nodes (0): 

### Community 107 - "Community 107"
Cohesion: 1.0
Nodes (0): 

### Community 108 - "Community 108"
Cohesion: 1.0
Nodes (0): 

### Community 109 - "Community 109"
Cohesion: 1.0
Nodes (0): 

### Community 110 - "Community 110"
Cohesion: 1.0
Nodes (0): 

### Community 111 - "Community 111"
Cohesion: 1.0
Nodes (0): 

### Community 112 - "Community 112"
Cohesion: 1.0
Nodes (0): 

### Community 113 - "Community 113"
Cohesion: 1.0
Nodes (0): 

### Community 114 - "Community 114"
Cohesion: 1.0
Nodes (0): 

### Community 115 - "Community 115"
Cohesion: 1.0
Nodes (0): 

### Community 116 - "Community 116"
Cohesion: 1.0
Nodes (0): 

### Community 117 - "Community 117"
Cohesion: 1.0
Nodes (0): 

### Community 118 - "Community 118"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Community 86`** (2 nodes): `attunementVisuals.js`, `updateAttunementVisuals()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 87`** (2 nodes): `spiralfrond.js`, `makeSpiralFrond()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 88`** (2 nodes): `spiritHumVisuals.js`, `updateSpiritHumVisuals()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 89`** (2 nodes): `bubbles.js`, `makeBubble()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 90`** (2 nodes): `lanternpod.js`, `makeLanternPod()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 91`** (2 nodes): `reeds.js`, `makeReed()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 92`** (2 nodes): `audio.js`, `toggleMute()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 93`** (2 nodes): `helixvine.js`, `makeHelixvine()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 94`** (2 nodes): `thornbloom.js`, `makeThornbloom()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 95`** (2 nodes): `registration.js`, `registerAllSystems()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 96`** (2 nodes): `fairyRings.js`, `makeFairyRing()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (2 nodes): `wisps.js`, `makeWisp()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 98`** (2 nodes): `corpsebloom.js`, `makeCorpseBloom()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 99`** (2 nodes): `orbs.js`, `makeOrb()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 100`** (2 nodes): `flowers.js`, `makeFlower()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 101`** (2 nodes): `glyphs.js`, `updateGlyphs()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 102`** (2 nodes): `mushrooms.js`, `makeMush()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 103`** (2 nodes): `config.js`, `vitest.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 104`** (2 nodes): `ferns.js`, `makeFern()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 105`** (2 nodes): `veilmoss.js`, `makeVeilMoss()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (2 nodes): `orbbush.js`, `makeOrbBush()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 107`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 108`** (1 nodes): `constants.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 109`** (1 nodes): `geometries.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 110`** (1 nodes): `renderer.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 111`** (1 nodes): `context.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 112`** (1 nodes): `registry.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 113`** (1 nodes): `scheduler.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 114`** (1 nodes): `gameState.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 115`** (1 nodes): `intro.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 116`** (1 nodes): `fauna.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 117`** (1 nodes): `math.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 118`** (1 nodes): `rng.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 8 inferred relationships involving `updateWizardPufflingEvent()` (e.g. with `updateSmoke()` and `spawnWizardNearPlayer()`) actually correct?**
  _`updateWizardPufflingEvent()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **Are the 7 inferred relationships involving `animateTitle()` (e.g. with `animatePixie()` and `animatePufflings()`) actually correct?**
  _`animateTitle()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 7 inferred relationships involving `_computeGroundY()` (e.g. with `buildHeightCache()` and `smoothstep()`) actually correct?**
  _`_computeGroundY()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `updateQuest()` (e.g. with `revealAllObeliskDetails()` and `getObeliskTipY()`) actually correct?**
  _`updateQuest()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `updateQuestVisuals()` (e.g. with `getObeliskTipY()` and `updateGlitter()`) actually correct?**
  _`updateQuestVisuals()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
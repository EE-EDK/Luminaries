// ================================================================
// Luminaries — Main Entry Point
// ================================================================
// Welcome, Inspector.
// This is a procedurally generated bioluminescent forest. Everything
// you see, hear, and feel is built from mathematics — no textures,
// no audio files, no borrowed assets. Just numbers becoming light.
//
// If you're reading this, you've gone deeper than most. The forest
// has layers. So does its source. There are notes scattered through
// these files — field reports, lab entries, observations from people
// who studied this place before you arrived. Some made it out.
//
// Explore. The mushrooms pulse when you're near. The deer aren't
// running from you. The orbs are waiting.
//
// — L
// ================================================================
import { AdditiveBlending, BufferAttribute, BufferGeometry, DoubleSide, DynamicDrawUsage, Line, LineBasicMaterial, Mesh, MeshBasicMaterial, RingGeometry } from 'three';

// Core systems
import { renderer, camera, clock, scene } from './core/renderer.js';
import { render as postRender, bloomPass, setSaturation } from './core/postprocessing.js';
import { initCrystalLights, crystalLights, playerLight, orbLight, moon, hemiLight, moon2 } from './core/lighting.js';
import { keys, yaw, pitch, started, setGoCallback, setStarted, touchSprint, touchJump, rightMouseDown, mouseY, screenH, touchHum, touchHumY, setYaw, setPitch } from './core/input.js';
import { GEO } from './core/geometries.js';

// Constants
import {
  WORLD_R, EYE_H, STARMOTE_N,
  C
} from './constants.js';

// Utils
import { sr } from './utils/rng.js';

// World
import { createGround, updateGroundUniforms } from './world/ground.js';
import { createSkyDome, skyGroup, updateSky, checkShootingStarWish, getConstellationDir } from './world/sky.js';
import { getGroundY, registerFlatZone } from './world/terrain.js';
import { initAurora, updateAurora } from './world/aurora.js';

// Player
import { player, updatePlayer, cameraBobY, playerIdleTime, setCollisionData, setDustBurstFn, setAudioCallbacks, setGravityMult } from './core/player.js';

// Entities — Flora
import { makeTreeImpostor, createTreeTemplates, createTreeInstances, updateTreeLOD } from './entities/flora/trees.js';
import { makeMush } from './entities/flora/mushrooms.js';
import { makeCrystal } from './entities/flora/crystals.js';
import { makeGrassPatch, updateGrassGlobals } from './entities/flora/grass.js';
import { makeFern } from './entities/flora/ferns.js';
import { makeFlower } from './entities/flora/flowers.js';
import { makeReed } from './entities/flora/reeds.js';
import { makeDandelion, updateDandelions } from './entities/flora/dandelions.js';
import { makeThornbloom } from './entities/flora/thornbloom.js';
import { makeHelixvine } from './entities/flora/helixvine.js';
import { makeSnapthorn } from './entities/flora/snapthorn.js';
import { makeSpiralFrond } from './entities/flora/spiralfrond.js';
import { makeCorpseBloom } from './entities/flora/corpsebloom.js';
import { makeOrbBush } from './entities/flora/orbbush.js';
import { makeLanternPod } from './entities/flora/lanternpod.js';
import { makeVeilMoss } from './entities/flora/veilmoss.js';

// Entities — Fauna
import { makeJelly } from './entities/fauna/jellies.js';
import { makePuff } from './entities/fauna/pufflings.js';
import { makeDeer } from './entities/fauna/deer.js';
import { makeMoth } from './entities/fauna/moths.js';

// Entities — Magical
import { makeWisp } from './entities/magical/wisps.js';
import { makeFairyRing } from './entities/magical/fairyRings.js';
import { makeBubble } from './entities/magical/bubbles.js';
import { makePond } from './entities/magical/ponds.js';
import { makeOrb } from './entities/magical/orbs.js';

// Entities — World
import { initProceduralRocks, placeProceduralRock, finalizeProceduralRocks, updateProceduralRocks, initPebbles, addPebble, finalizePebbles } from './entities/world/rocks.js';
import { makeObelisk, getObeliskGroup, getObeliskMat, getObeliskGlowMat, getPinnacleOrb, getPinnacleRings, getRuneFaces } from './entities/world/obelisk.js';
import { makeMoat, getMoatMesh, getMoatMat } from './entities/world/moat.js';
import { makeRainbows, rainbowArcs, updateRainbowSparkles } from './entities/world/rainbows.js';

// Particles
import { initFlies, spawnFly, updateFlies } from './particles/fireflies.js';
import { initSpores, spawnSpore, updateSpores, setSporeWind } from './particles/spores.js';
import { initStarMotes, updateStarMotes } from './particles/starMotes.js';
import { initDustMotes, spawnDustBurst } from './particles/dust.js';
import { initDandSeeds, spawnDandSeed, updateDandSeeds, setSeedWind } from './particles/seeds.js';
import { initBubblePops, spawnBubblePop, updateBubblePops } from './particles/bubblePops.js';
import { updateDustMotes } from './particles/dust.js';
import { initLeaves, spawnLeaf, updateLeaves, setLeafWind } from './particles/leaves.js';
import { initFootprints, spawnFootprint, updateFootprints } from './particles/footprints.js';
import { initOrbBurst, spawnOrbBurst, updateOrbBurst } from './particles/orbBurst.js';
import { initResonanceRings, spawnResonanceRing, updateResonanceRings } from './particles/resonanceRings.js';

// Quest
import { initQuest, updateQuest, questPhase, orbsFound } from './quest/questManager.js';
import { makeLaser } from './quest/lasers.js';

// Systems
import { initDayNight, updateDayNight, bioGlow, phase as dayPhase } from './systems/dayNightCycle.js';
import { initWeather, updateWeather, windX, windZ, windStrength, weatherState, lightningFlash, isStorming, getRainRate } from './systems/weather.js';
import { initRain, updateRain } from './particles/rain.js';

// Audio
import { initAudio, updateAudio, playCreatureSound, playFootstep, playJumpSound, playLandSound, playBubblePop, playFairyBounce, updateStepCooldown, updateAmbientSounds, playOrbCollect, playOrbWarble, playLaserZap, playLaserHum, updateLaserHums, stopLaserHums, updateMusic, playPufflingSinging, playAttunementFlash, playOrbReject, playPufflingVocal, startResonanceDrone, setAudioOrbCount, startSpiritHumAudio, updateSpiritHumAudio, stopSpiritHumAudio, playPitchLockSound } from './systems/audio.js';

// Puffling Chat (Phase 2)
import { initPufflingChat, triggerPufflingChat, updatePufflingChat } from './systems/pufflingChat.js';

// AI
import { canSee, canHear, isNear } from './systems/ai/senses.js';
import { flee as steerFlee, arrive as steerArrive, separation, cohesion, worldBounds, avoidObstacles } from './systems/ai/steering.js';

// Dimming (Phase 2)
import { initDimming, getLocalGlow, updateDimming, notifyOrbCollected, isRestored } from './systems/dimming.js';

// Attunement (Phase 2)
import { updateAttunement, getAttunement, getAttunementTarget, getPlayerFrequency, getFlashCreaturePos, consumeFrequency, checkFlash } from './systems/attunement.js';

// Spirit Hum (Phase 2)
import { startHum, stopHum, updateHum, isHumming, isLocked, getLockType, getHumPitch, getResonance, getResonanceType, getLockProgress, justLocked } from './systems/spiritHum.js';

// Performance monitoring (dev-only, tree-shaken in production)
import { timeStart, timeEnd, reportTimings } from './systems/perfMonitor.js';

// Kernel (modular infrastructure)
import { register, EntityType } from './kernel/registry.js';
import { emit, on, Events } from './kernel/eventBus.js';
import { addSystem, run as runScheduler, Phase } from './kernel/scheduler.js';
import { update as updateContext, ctx as frameCtx } from './kernel/context.js';
import { registerAllSystems, nearest } from './systems/registration.js';

// Extracted update modules
import { updateJellies as _updateJellies, updatePuffs as _updatePuffs, updateDeers as _updateDeers, updateMoths as _updateMoths } from './updates/fauna.js';
import { updateVegetation as _updateVegetation, updateFloraReactions as _updateFloraReactions } from './updates/vegetation.js';
import { updateWisps as _updateWisps, updateFairyRings as _updateFairyRings, updateBubbles as _updateBubbles, updatePonds as _updatePonds, updateEchoBloom as _updateEchoBloom } from './updates/magicalEntities.js';
import { populate as _populate } from './populate.js';
import { updatePlayerVisuals as _updatePlayerVisuals, triggerCameraPan, updateCameraPan, getSmoothedDimFactor } from './updates/playerVisuals.js';
import { spawnFireflies, spawnSpores, spawnWindParticles } from './updates/spawning.js';

// Discoveries
import { initDiscoveries, checkDiscoveries, updateDiscoveryUI, showOrbRejectHint, showOrbDiscovery, showOrbListening, togglePerspective, getPerspective, showNarrativeText, checkIdleHints } from './systems/discoveries.js';

// Intro cinematic (Phase 2)
import { initIntro, startIntro, enableTitleClick, updateIntro, introActive, introDone } from './systems/intro.js';

// UI
import { initHUD, updateHUD } from './ui/hud.js';
import { initOverlay, getOrbHudEl, showGame } from './ui/overlay.js';

// ================================================================
// Entity arrays
// ================================================================
const trees_data = []; // { x, z, y, treeH, yRot, scale }
let treeMeshes = []; // InstancedMesh groups per template
const treeImpostors = []; // billboard sprites per tree
const mush_data = [];
const crys_data = [];
const jellies = [];
const puffs = [];
const deers = [];
const moths = [];
const grassPatches = [];
const ferns = [];
const flowers = [];
const reeds = [];
const rocks_data = [];
const wisps = [];
const dandelions = [];
const fairyRings = [];
const bubbles = [];
const ponds = [];
const orbs = [];
const thornblooms = [];
const helixvines = [];
const snapthorns = [];
const spiralfronds = [];
const corpseblooms = [];
const orbbushes = [];
const lanternpods = [];
const veilmosses = [];
const groundGlows = [];
const crystalSortBuf = []; // Reused for crystal proximity sorting
let crystalSortPX = 0, crystalSortPZ = 0; // Last player pos when sort ran

// ================================================================
// Global dimming state (smoothed for natural transitions)
// ================================================================
let _orbBoost = 1.15; // baseline +15%, then +5% per orb (1.15 → 1.40 at 5/5)

// ================================================================
// Attunement visual state
// ================================================================
let _attuneFlashTimer = 0; // decays after full-attunement flash (2.5s extended window)
let _attuneFlashType = null; // creature type that triggered flash (for color effects)
let _echoTimer = 0; // creature echo calls — other creatures respond to unlock
let _nearestPuffDist2 = Infinity; // updated per frame during puffling loop
let _nearestPuffPos = { x: 0, z: 0 }; // position of nearest puffling
let _nearestJellyDist2 = Infinity; // updated per frame during jelly loop
let _nearestJellyPos = { x: 0, z: 0 };
let _nearestDeerDist2 = Infinity; // updated per frame during deer loop
let _nearestDeerPos = { x: 0, z: 0 };
let _nearestDeerWanderAng = 0;
let _nearestMothDist2 = Infinity; // updated per frame during moth loop
let _nearestMothPos = { x: 0, z: 0 };
let _puffSingTimer = 0; // per-puffling singing timer for following state
let _featherFallTimer = 0; // fairy ring super-jump feather fall timer

// ================================================================
// Spirit hum visual state
// ================================================================
let _humWasActive = false;       // edge-detect for start/stop audio
let _humRingTimer = 0;           // ring spawn timer (~3Hz)
let _humResonanceType = null;    // which creature band is resonating (prev frame)
let _humResonanceStr = 0;        // 0–1 resonance strength (prev frame)

// Slider DOM refs for visual feedback
const _humThumbEl = document.getElementById('hum-thumb');
const _humBandColors = {
  deer:  'rgba(136,221,255,',
  moth:  'rgba(204,255,170,',
  jelly: 'rgba(170,204,255,',
  puff:  'rgba(255,170,136,',
};
let _humSliderDirty = false; // track whether slider styles need reset

// ================================================================
// Echo bloom state
// ================================================================
const echoBloom = { timer: 0, center: null, radius: 0 };

// Batch 2 Item 6: Crystal resonance energy lines
const MAX_ENERGY_LINES = 15;
const energyLines = [];
let energyLinesInited = false;
function initEnergyLines() {
  if (energyLinesInited) return;
  energyLinesInited = true;
  const lineMat = new LineBasicMaterial({
    color: C.crystal, transparent: true, opacity: 0,
    blending: AdditiveBlending, depthWrite: false
  });
  for (let i = 0; i < MAX_ENERGY_LINES; i++) {
    const geo = new BufferGeometry();
    const positions = new Float32Array(6); // 2 points x 3 coords
    geo.setAttribute('position', new BufferAttribute(positions, 3));
    geo.attributes.position.setUsage(DynamicDrawUsage);
    const line = new Line(geo, lineMat.clone());
    line.visible = false;
    scene.add(line);
    energyLines.push({ line, geo, opacity: 0, active: false });
  }
}

// Batch 2 Item 2: Visible echo bloom wave ring
let echoBloomRing = null;
function getEchoBloomRing() {
  if (echoBloomRing) return echoBloomRing;
  const ringGeo = new RingGeometry(0.9, 1.0, 48);
  const ringMat = new MeshBasicMaterial({
    color: C.echoBloom, transparent: true, opacity: 0.5,
    side: DoubleSide, depthWrite: false, blending: AdditiveBlending
  });
  echoBloomRing = new Mesh(ringGeo, ringMat);
  echoBloomRing.rotation.x = -Math.PI / 2;
  echoBloomRing.visible = false;
  scene.add(echoBloomRing);
  return echoBloomRing;
}


// ================================================================
// Update functions (vegetation, creatures, entities)
// ================================================================

function updateVegetation(dt, t) {
  _updateVegetation(dt, t, _vegCtx());
}


// Shared context for extracted vegetation update functions
function _vegCtx() {
  return {
    player, windStrength, windX, windZ, bioGlow, _orbBoost, smoothedDimFactor: getSmoothedDimFactor(), camera,
    treeMeshes, treeImpostors, ferns, flowers, reeds,
    thornblooms, helixvines, snapthorns, spiralfronds, corpseblooms,
    orbbushes, lanternpods, veilmosses, groundGlows
  };
}
function _floraCtx() {
  return {
    player, bioGlow, _orbBoost, isStorming, weatherState, getRainRate,
    flowers, mush_data, ferns, crys_data,
    initEnergyLines, energyLines, MAX_ENERGY_LINES
  };
}

// Shared context for extracted fauna update functions
function _faunaCtx() {
  const _sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
  return {
    player, dayPhase, isStorming, bioGlow, _orbBoost,
    _humResonanceType, _humResonanceStr, _echoTimer, _attuneFlashTimer, _attuneFlashType,
    playerIdleTime, sprinting: _sprinting, trees_data, orbs, deers, ponds, crys_data, fairyRings,
    playCreatureSound, playPufflingSinging, playPufflingVocal, triggerPufflingChat
  };
}

function updateJellies(dt, t) {
  const result = _updateJellies(jellies, dt, t, _faunaCtx());
  _nearestJellyDist2 = result.nearestDist2;
  _nearestJellyPos.x = result.nearestPos.x;
  _nearestJellyPos.z = result.nearestPos.z;
}

function updatePuffs(dt, t) {
  const result = _updatePuffs(puffs, dt, t, _faunaCtx());
  _nearestPuffDist2 = result.nearestDist2;
  _nearestPuffPos.x = result.nearestPos.x;
  _nearestPuffPos.z = result.nearestPos.z;
}

function updateDeers(dt, t) {
  const result = _updateDeers(deers, dt, t, _faunaCtx());
  _nearestDeerDist2 = result.nearestDist2;
  _nearestDeerPos.x = result.nearestPos.x;
  _nearestDeerPos.z = result.nearestPos.z;
  _nearestDeerWanderAng = result.nearestWanderAng;
}

function updateMoths(dt, t) {
  const result = _updateMoths(moths, dt, t, _faunaCtx());
  _nearestMothDist2 = result.nearestDist2;
  _nearestMothPos.x = result.nearestPos.x;
  _nearestMothPos.z = result.nearestPos.z;
}

function _magicalCtx() {
  const _sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
  return {
    player, bioGlow, _orbBoost, playerIdleTime, sprinting: _sprinting,
    questPhase, orbs, playFairyBounce, playBubblePop, getRainRate,
    crys_data, mush_data, flowers, getEchoBloomRing, echoBloom
  };
}

function updateWisps(dt, t) {
  _updateWisps(wisps, dt, t, _magicalCtx());
}

function updateFairyRings(dt, t) {
  const result = _updateFairyRings(fairyRings, dt, t, _magicalCtx());
  if (result.featherFallTriggered) _featherFallTimer = 4.0;
}

function updateBubbles(dt, t) {
  _updateBubbles(bubbles, dt, t, _magicalCtx());
}

function updatePonds(dt, t) {
  _updatePonds(ponds, dt, t, _magicalCtx());
}

function updateEchoBloom(dt, t) {
  _updateEchoBloom(dt, t, _magicalCtx());
}

// ================================================================
// Reactive Flora (proximity/touch responses)
// ================================================================
function updateFloraReactions(dt, t) {
  return _updateFloraReactions(dt, t, _floraCtx());
}


// ================================================================
// Director
// ================================================================
let dirState = 'EXPLORE';

function director(dt, t) {
  // Enhancement 8: Slow-mo micro-pause — world holds its breath on attunement flash
  // First 0.4s at 0.3× speed, then ease back to 1.0× over next 0.6s (1.0s total dilation)
  if (_attuneFlashTimer > 1.5) { // first 1.0s of the 2.5s window
    const dilationT = (_attuneFlashTimer - 1.5); // 1.0 → 0.0
    const timeScale = dilationT > 0.6 ? 0.3 : (0.3 + (1.0 - dilationT / 0.6) * 0.7);
    dt *= timeScale;
  }

  // Run all registered systems in phase order
  runScheduler(dt, t);

  if (_attuneFlashTimer > 0) _attuneFlashTimer -= dt;
  if (_echoTimer > 0) _echoTimer -= dt;

  reportTimings(renderer);
}

// ================================================================
// Director subsystem functions (registered with kernel scheduler)
// ================================================================

function _directorCrystalProximity(dt, t) {
  timeStart('crystalProximity');
  let nearCrys = false;
  for (let i = 0; i < crys_data.length; i++) {
    const dx = crys_data[i].x - player.pos.x, dz = crys_data[i].z - player.pos.z;
    if (dx * dx + dz * dz < 64) { nearCrys = true; break; }
  }
  dirState = nearCrys ? 'NEAR_CRYSTAL' : 'EXPLORE';
  timeEnd('crystalProximity');
}

function _directorParticleSpawn(dt, t) {
  timeStart('fireflySpawn');
  const curRain = getRainRate();
  spawnFireflies(dt, t, { dirState, player, crys_data, flowers, curRain, spawnFly, updateFlies });
  timeEnd('fireflySpawn');
  timeStart('spores');
  spawnSpores(dt, { player, mush_data, spawnSpore });
  timeEnd('spores');
}

function _directorFloraGlow(dt, t) {
  timeStart('mushrooms');
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const mdx = m.x - player.pos.x, mdy = (m.group.position.y || 0) - player.pos.y, mdz = m.z - player.pos.z;
    const md2 = mdx * mdx + mdy * mdy + mdz * mdz;
    if (md2 > 2500) { if (m.group.visible) m.group.visible = false; continue; }
    if (!m.group.visible) m.group.visible = true;
    const p = Math.sin(t * m.speed + m.phase) * 0.5 + 0.5;
    m.capMat.emissiveIntensity = m.base * (0.7 + p * 1.0) * getLocalGlow(m.x, m.z, bioGlow * _orbBoost);
    if (_attuneFlashTimer > 0 && md2 < 625) {
      m.capMat.emissiveIntensity += _attuneFlashTimer * 0.6;
    }
  }
  timeEnd('mushrooms');

  timeStart('crystals');
  for (let i = 0; i < crys_data.length; i++) {
    const c = crys_data[i];
    const p = Math.sin(t * 0.6 + c.phase) * 0.5 + 0.5;
    const cGlow = getLocalGlow(c.x, c.z, bioGlow * _orbBoost);
    c.mat.emissiveIntensity = (1.0 + p * 1.5) * cGlow;
    if (_attuneFlashTimer > 0) {
      const cdx = c.x - player.pos.x, cdz = c.z - player.pos.z;
      if (cdx * cdx + cdz * cdz < 225) {
        c.mat.emissiveIntensity += _attuneFlashTimer * 0.35;
      }
    }
    c.group.children[0].rotation.y += dt * 0.15;
    if (c.light) c.light.intensity = (0.3 + p * 0.4) * cGlow;
  }

  if (!crystalSortBuf.length) {
    for (let i = 0; i < crys_data.length; i++) crystalSortBuf.push({ idx: i, dist: 0 });
  }
  const csDX = player.pos.x - crystalSortPX, csDZ = player.pos.z - crystalSortPZ;
  if (csDX * csDX + csDZ * csDZ > 1) {
    crystalSortPX = player.pos.x; crystalSortPZ = player.pos.z;
    for (let i = 0; i < crys_data.length; i++) {
      const c = crys_data[i];
      const dx = c.x - player.pos.x, dz = c.z - player.pos.z;
      crystalSortBuf[i].idx = i;
      crystalSortBuf[i].dist = dx * dx + dz * dz;
    }
    crystalSortBuf.sort((a, b) => a.dist - b.dist);
  }
  for (let i = 0; i < crystalLights.length; i++) {
    if (i < crystalSortBuf.length && crystalSortBuf[i].dist < 2500) {
      const c = crys_data[crystalSortBuf[i].idx];
      const p = Math.sin(t * 0.6 + c.phase) * 0.5 + 0.5;
      crystalLights[i].position.set(c.x, 1.5, c.z);
      crystalLights[i].intensity = (1.5 + p * 2.0) * getLocalGlow(c.x, c.z, bioGlow * _orbBoost);
      crystalLights[i].distance = 16;
      crystalLights[i].color.setHex(C.crystal);
    } else {
      crystalLights[i].intensity = 0;
    }
  }
  timeEnd('crystals');

  timeStart('vegetation');
  spawnWindParticles(dt, t, { player, dandelions, trees_data, windStrength, isStorming, spawnDandSeed, spawnLeaf });
  timeEnd('vegetation');
}

function _directorFaunaUpdate(dt, t) {
  timeStart('fauna');
  updateJellies(dt, t);
  updatePuffs(dt, t);
  updateDeers(dt, t);
  updateMoths(dt, t);
  timeEnd('fauna');
}

function _directorSpiritHum(dt, t) {
  const _humInput = rightMouseDown || touchHum;
  if (_humInput && !_humWasActive) {
    startHum();
    startSpiritHumAudio();
  } else if (!_humInput && _humWasActive) {
    stopHum();
    stopSpiritHumAudio();
  }
  _humWasActive = _humInput;

  const _humInputY = touchHum ? touchHumY : (screenH > 0 ? mouseY / screenH : 0.5);

  updateHum(dt, _humInputY, {
    deerDist2: _nearestDeerDist2,
    jellyDist2: _nearestJellyDist2,
    mothDist2: _nearestMothDist2,
    puffDist2: _nearestPuffDist2
  });

  if (isHumming()) {
    updateSpiritHumAudio(getHumPitch(), getResonance(), getResonanceType());
  }

  if (justLocked()) {
    playPitchLockSound(getLockType());
    _attuneFlashTimer = 0.3;
    if (_humThumbEl) {
      _humThumbEl.style.background = 'rgba(255,255,255,0.95)';
      _humThumbEl.style.boxShadow = '0 0 20px 10px rgba(255,255,255,0.8)';
      _humThumbEl.style.transform = 'scale(1.5)';
      _humSliderDirty = true;
    }
    const _lockT = getLockType();
    const _lockTexts = {
      puff: { child: 'The pufflings hear you!', adult: 'Frequency matched — biosignature synchronized' },
      deer: { child: 'The deer turn to listen...', adult: 'Cervine frequency locked — maintain stride' },
      jelly: { child: 'The jellies glow brighter!', adult: 'Cnidarian resonance established — pulse in rhythm' },
      moth: { child: 'The moths circle closer!', adult: 'Lepidoptera wavelength acquired — orbit and observe' }
    };
    if (_lockT && _lockTexts[_lockT]) {
      const _ltxt = _lockTexts[_lockT][getPerspective()] || _lockTexts[_lockT].child;
      showNarrativeText(_ltxt, 4.0);
    }
    if (_lockT === 'puff') {
      for (let ri = 0; ri < 5; ri++) {
        spawnResonanceRing(_nearestPuffPos.x, getGroundY(_nearestPuffPos.x, _nearestPuffPos.z), _nearestPuffPos.z, 'puff', 1.0);
      }
    }
  }

  const _humRes = getResonance();
  const _humResType = getResonanceType();
  if (_humRes > 0.1 && _humResType && isHumming()) {
    _humRingTimer += dt;
    if (_humRingTimer > 0.33) {
      _humRingTimer = 0;
      let rx = 0, rz = 0;
      switch (_humResType) {
        case 'deer':  rx = _nearestDeerPos.x; rz = _nearestDeerPos.z; break;
        case 'moth':  rx = _nearestMothPos.x; rz = _nearestMothPos.z; break;
        case 'jelly': rx = _nearestJellyPos.x; rz = _nearestJellyPos.z; break;
        case 'puff':  rx = _nearestPuffPos.x; rz = _nearestPuffPos.z; break;
      }
      const ry = getGroundY(rx, rz);
      spawnResonanceRing(rx, ry, rz, _humResType, _humRes);
    }
  } else {
    _humRingTimer = 0;
  }

  _humResonanceType = _humResType;
  _humResonanceStr = _humRes;

  if (_humThumbEl) {
    if (isHumming() && _humRes > 0.1 && _humResType) {
      const cBase = _humBandColors[_humResType];
      const alpha = 0.4 + _humRes * 0.6;
      const lp = getLockProgress();
      const spread = lp * 8;
      const glowA = 0.3 + lp * 0.7;
      const scale = 1.0 + lp * 0.3;
      _humThumbEl.style.background = cBase + alpha + ')';
      _humThumbEl.style.borderColor = cBase + '1)';
      _humThumbEl.style.boxShadow = '0 0 ' + (spread + 4) + 'px ' + spread + 'px ' + cBase + glowA + ')';
      _humThumbEl.style.transform = 'scale(' + scale + ')';
      _humSliderDirty = true;
    } else if (_humSliderDirty) {
      _humThumbEl.style.background = 'rgba(100,255,180,.35)';
      _humThumbEl.style.borderColor = 'rgba(100,255,180,.5)';
      _humThumbEl.style.boxShadow = 'none';
      _humThumbEl.style.transform = 'scale(1)';
      _humSliderDirty = false;
    }
  }
}

function _directorAttunement(dt, t) {
  const _attuneJumping = !player.onGround;
  const _attuneSpeed = Math.sqrt(player.vel.x * player.vel.x + player.vel.z * player.vel.z);
  const _attuneSprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
  updateAttunement(dt, _attuneJumping, _nearestPuffDist2, {
    nearestPuffPos: _nearestPuffPos,
    nearestJellyDist2: _nearestJellyDist2, nearestJellyPos: _nearestJellyPos,
    nearestDeerDist2: _nearestDeerDist2, nearestDeerPos: _nearestDeerPos, nearestDeerWanderAng: _nearestDeerWanderAng,
    nearestMothDist2: _nearestMothDist2, nearestMothPos: _nearestMothPos,
    playerYaw: yaw, playerSpeed: _attuneSpeed, spacePressed: !!keys['Space'],
    sprinting: _attuneSprinting,
    playerX: player.pos.x, playerZ: player.pos.z, time: t
  });

  if (checkFlash()) {
    _attuneFlashTimer = 2.5;
    const _flashType = getAttunementTarget();
    _attuneFlashType = _flashType;
    _echoTimer = 1.5;
    const flashPos = getFlashCreaturePos() || _nearestPuffPos;
    playAttunementFlash(flashPos, player.pos, _flashType);
    const _attuneTexts = {
      puff: { child: 'They know you now!', adult: 'Full attunement — the boundary between observer and observed dissolves' },
      deer: { child: 'You walk as one.', adult: 'Stride-locked — biosignatures indistinguishable' },
      jelly: { child: 'Your hearts beat together!', adult: 'Pulse synchronization complete — resonance achieved' },
      moth: { child: 'You are part of the dance!', adult: 'Orbital lock confirmed — mutual observation state' }
    };
    if (_flashType && _attuneTexts[_flashType]) {
      const _atxt = _attuneTexts[_flashType][getPerspective()] || _attuneTexts[_flashType].child;
      showNarrativeText(_atxt, 5.0);
    }
    if (_flashType === 'puff') {
      for (let pi = 0; pi < puffs.length; pi++) {
        const pp = puffs[pi];
        if (pp.state === 'syncing') {
          pp._syncTimer = 0.27;
          if (pp.bodyMat) pp.bodyMat.emissiveIntensity = 4.0;
          if (pp.crownMat) pp.crownMat.emissiveIntensity = 3.0;
        }
      }
      for (let pi = 0; pi < puffs.length; pi++) {
        const pp = puffs[pi];
        if (pp.state !== 'syncing') continue;
        const ppx = pp.group.position.x, ppz = pp.group.position.z;
        spawnResonanceRing(ppx, getGroundY(ppx, ppz), ppz, 'puff', 1.0);
      }
    }
    const fgY = getGroundY(flashPos.x, flashPos.z);
    for (let hi = 0; hi < 3; hi++) {
      spawnResonanceRing(flashPos.x, fgY + hi * 1.0, flashPos.z, _flashType || 'puff', 1.0);
    }
  }

  if (_attuneFlashTimer > 1.0 && _attuneFlashType) {
    _humRingTimer += dt;
    if (_humRingTimer > 0.1) {
      _humRingTimer = 0;
      let rx = 0, rz = 0;
      switch (_attuneFlashType) {
        case 'deer':  rx = _nearestDeerPos.x; rz = _nearestDeerPos.z; break;
        case 'moth':  rx = _nearestMothPos.x; rz = _nearestMothPos.z; break;
        case 'jelly': rx = _nearestJellyPos.x; rz = _nearestJellyPos.z; break;
        case 'puff':  rx = _nearestPuffPos.x; rz = _nearestPuffPos.z; break;
      }
      const ry = getGroundY(rx, rz);
      const heightOff = (Math.random() * 2.5);
      spawnResonanceRing(rx, ry + heightOff, rz, _attuneFlashType, 0.7 + Math.random() * 0.3);
    }
  }
}

function _directorSkyWish(dt, t) {
  const _wishText = checkShootingStarWish(pitch, orbsFound, getPerspective());
  if (_wishText) showNarrativeText(_wishText, 5.0);
}

function _directorRocks(dt, t) {
  timeStart('rocks');
  updateProceduralRocks(player.pos.x, player.pos.y, player.pos.z, camera);
  timeEnd('rocks');
}

function _directorMagical(dt, t) {
  timeStart('particles');
  updateWisps(dt, t);
  updateDandelions(dandelions, dt, t, player.pos);
  updateFairyRings(dt, t);
  updateBubbles(dt, t);
  updatePonds(dt, t);
  timeEnd('particles');
}

function _directorParticles(dt, t) {
  updateStarMotes(dt, t, player.pos);
  updateDandSeeds(dt, t);
  updateLeaves(dt, t);
  updateDustMotes(dt);
  updateBubblePops(dt);
  updateOrbBurst(dt, t);
  updateEchoBloom(dt, t);
  updateResonanceRings(dt);
}

function _directorQuest(dt, t) {
  timeStart('quest');
  const chainCount = updateFloraReactions(dt, t);
  updateQuest(dt, t);
  updateRainbowSparkles(t);
  timeEnd('quest');
}

function _directorFootprints(dt, t) {
  timeStart('footprints');
  if (player.onGround) {
    const speed2 = player.vel.x * player.vel.x + player.vel.z * player.vel.z;
    if (speed2 > 0.5) {
      const moveAngle = Math.atan2(player.vel.x, player.vel.z);
      const sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
      spawnFootprint(player.pos.x, player.pos.z, moveAngle, sprinting);
    }
  }
  updateFootprints(dt, getRainRate());
  timeEnd('footprints');
}

function _directorAudio(dt, t) {
  timeStart('audio');
  updateAmbientSounds(dt, player.pos, ponds, grassPatches, dayPhase, getRainRate());
  updateStepCooldown(dt);
  timeEnd('audio');
}

function _directorDiscoveries(dt, t) {
  timeStart('discoveries');
  checkDiscoveries(player.pos, deers, puffs, jellies, moths, fairyRings, ponds, 0);
  checkIdleHints(playerIdleTime);
  updateDiscoveryUI(dt);
  updatePufflingChat(dt, renderer.domElement);
  timeEnd('discoveries');
}

// ================================================================
// HUD
// ================================================================
let fpsS = 60;

// ================================================================
// Animation loop
// ================================================================
let elapsed = 0;
let gameStarted = false;

function go() {
  // Trigger intro cinematic — startIntro guards against double-call
  startIntro();
}

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.1);
  elapsed += dt;

  updateDayNight(dt);
  const rainRate = updateWeather(dt, elapsed, player.pos);
  updateRain(dt, player.pos, rainRate, windX, windZ);
  updateAurora(dt, elapsed, dayPhase, bioGlow, weatherState);

  // Advance dimming restoration waves BEFORE querying glow values
  updateDimming(dt);
  // Progressive glow boost: +5% per orb found
  _orbBoost = 1.15 + orbsFound * 0.05;

  // Constellation camera pan — trigger when a new orb is collected
  triggerCameraPan(orbsFound, yaw, pitch, getConstellationDir);

  // Player light evolution + dimming + hum light modulation
  _updatePlayerVisuals(dt, elapsed, {
    orbsFound, playerLight, _attuneFlashTimer, _attuneFlashType,
    player, setSaturation, renderer, bloomPass, hemiLight, scene, lightningFlash
  });


  // Update audio system (Items 1-3)
  setAudioOrbCount(orbsFound);
  updateAudio(dt, windStrength, rainRate, isStorming, lightningFlash, dayPhase, player.pos, ponds);
  updateLaserHums(player.pos);

  // Background music — dynamic/reactive
  const pSpeed = Math.sqrt(player.vel.x * player.vel.x + player.vel.z * player.vel.z);
  let nearMagic = false;
  for (let i = 0; i < ponds.length; i++) {
    const dx = ponds[i].x - player.pos.x, dz = ponds[i].z - player.pos.z;
    if (dx * dx + dz * dz < 225) { nearMagic = true; break; } // 15m
  }
  if (!nearMagic) {
    for (let i = 0; i < fairyRings.length; i++) {
      const dx = fairyRings[i].x - player.pos.x, dz = fairyRings[i].z - player.pos.z;
      if (dx * dx + dz * dz < 144) { nearMagic = true; break; } // 12m
    }
  }
  updateMusic(dt, dayPhase, pSpeed, nearMagic);

  // Pass wind to particle systems (Item 9)
  setSporeWind(windX, windZ);
  setSeedWind(windX, windZ, windStrength);
  setLeafWind(windX, windZ, windStrength);

  if (!gameStarted) {
    // Intro cinematic camera control (if active)
    updateIntro(dt, camera);

    // Pre-game idle camera (only if intro isn't controlling it)
    if (!introActive()) {
      camera.position.set(0, EYE_H, 0);
      camera.rotation.order = 'YXZ';
      camera.rotation.y += dt * 0.08;
      camera.rotation.x = 0;
    }

    // Still pulse mushrooms + crystals
    for (let i = 0; i < mush_data.length; i++) {
      const m = mush_data[i];
      const p = Math.sin(elapsed * m.speed + m.phase) * 0.5 + 0.5;
      m.capMat.emissiveIntensity = m.base * (0.5 + p * 0.8) * bioGlow;
    }
    for (let i = 0; i < crys_data.length; i++) {
      const c = crys_data[i];
      c.mat.emissiveIntensity = (1.0 + Math.sin(elapsed * 0.6 + c.phase) * 0.5 * 1.5 + 0.75) * bioGlow;
    }
    updateJellies(dt, elapsed);
    updatePuffs(dt, elapsed);
    updateDeers(dt, elapsed);
    updateMoths(dt, elapsed);
    updateSky(dt, elapsed);
    updateVegetation(dt, elapsed);
    updateStarMotes(dt, elapsed, player.pos);
    // Idle bubble bob
    for (let i = 0; i < bubbles.length; i++) {
      if (!bubbles[i].popped)
        bubbles[i].group.position.y = bubbles[i].floatY + Math.sin(elapsed * 0.6 + bubbles[i].phase) * bubbles[i].bobAmp;
    }
    // Idle pond pads
    for (let i = 0; i < ponds.length; i++) {
      for (let j = 0; j < ponds[i].pads.length; j++)
        ponds[i].pads[j].mesh.position.y = 0.05 + Math.sin(elapsed * 0.8 + ponds[i].pads[j].phase) * 0.015;
    }
    // Idle orb pulse
    for (let i = 0; i < orbs.length; i++) {
      const o = orbs[i];
      const p = Math.sin(elapsed * 1.5 + o.phase) * 0.5 + 0.5;
      o.group.position.y = o.flyY + Math.sin(elapsed * 0.8 + o.phase) * 0.3;
      o.glowMat.opacity = 0.3 + p * 0.4;
    }

    postRender();
    return;
  }

  // Active game loop
  // Feather fall — reduced gravity after fairy ring super-jump
  if (_featherFallTimer > 0) {
    _featherFallTimer -= dt;
    setGravityMult(0.3); // 30% gravity during feather fall
  } else {
    setGravityMult(1.0);
  }
  updatePlayer(dt);
  // Update shared frame context for kernel-based systems
  updateContext({
    dt, t: elapsed,
    player, camera,
    sprinting: keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint,
    playerIdleTime,
    bioGlow, orbBoost: _orbBoost, orbsFound,
    windX, windZ, windStrength,
    weatherState, isStorming, rainRate,
    lightningFlash,
    dayPhase,
    attuneFlashTimer: _attuneFlashTimer,
    attuneFlashType: _attuneFlashType,
    echoTimer: _echoTimer,
    humResonanceType: _humResonanceType,
    humResonanceStr: _humResonanceStr,
    questPhase,
  });
  director(dt, elapsed);
  const flyC = updateFlies(dt, elapsed);
  const spC = updateSpores(dt);

  camera.position.copy(player.pos);
  camera.position.y += cameraBobY;
  camera.rotation.order = 'YXZ';

  // Constellation camera pan — smoothly override yaw/pitch
  const camPan = updateCameraPan(dt, yaw, pitch, setYaw, setPitch);
  camera.rotation.y = camPan.yaw;
  camera.rotation.x = camPan.pitch;

  updateHUD(dt, player.pos);
  postRender();
}

// ================================================================
// Init
// ================================================================
try {
  // Register obelisk flat zone (world center always flat)
  registerFlatZone(0, 0, 5);

  createSkyDome();

  // Init day/night cycle
  initDayNight({
    scene, moon, moon2, hemiLight, playerLight
  });

  treeMeshes = _populate({
    trees_data, treeImpostors, mush_data, crys_data, jellies, puffs, deers, moths,
    grassPatches, ferns, flowers, reeds, rocks_data, wisps, dandelions,
    fairyRings, bubbles, ponds, orbs, thornblooms, helixvines, snapthorns,
    spiralfronds, corpseblooms, orbbushes, lanternpods, veilmosses, groundGlows
  }, {
    makeTreeImpostor, createTreeTemplates, createTreeInstances,
    makeMush, makeCrystal, makeJelly, makePuff, makeDeer, makeMoth,
    makeGrassPatch, makeFern, makeFlower, makeReed,
    initProceduralRocks, placeProceduralRock, finalizeProceduralRocks,
    initPebbles, addPebble, finalizePebbles,
    makeWisp, makeDandelion, makeFairyRing, makeBubble, makePond, makeOrb,
    makeThornbloom, makeHelixvine, makeSnapthorn, makeSpiralFrond,
    makeCorpseBloom, makeOrbBush, makeLanternPod, makeVeilMoss
  }, scene);

  // Register all entity arrays with kernel registry
  register(EntityType.TREES, trees_data);
  register(EntityType.TREE_MESHES, treeMeshes);
  register(EntityType.TREE_IMPOSTORS, treeImpostors);
  register(EntityType.MUSHROOMS, mush_data);
  register(EntityType.CRYSTALS, crys_data);
  register(EntityType.JELLIES, jellies);
  register(EntityType.PUFFLINGS, puffs);
  register(EntityType.DEER, deers);
  register(EntityType.MOTHS, moths);
  register(EntityType.GRASS, grassPatches);
  register(EntityType.FERNS, ferns);
  register(EntityType.FLOWERS, flowers);
  register(EntityType.REEDS, reeds);
  register(EntityType.ROCKS, rocks_data);
  register(EntityType.WISPS, wisps);
  register(EntityType.DANDELIONS, dandelions);
  register(EntityType.FAIRY_RINGS, fairyRings);
  register(EntityType.BUBBLES, bubbles);
  register(EntityType.PONDS, ponds);
  register(EntityType.ORBS, orbs);
  register(EntityType.THORNBLOOMS, thornblooms);
  register(EntityType.HELIXVINES, helixvines);
  register(EntityType.SNAPTHORNS, snapthorns);
  register(EntityType.SPIRALFRONDS, spiralfronds);
  register(EntityType.CORPSEBLOOMS, corpseblooms);
  register(EntityType.ORBBUSHES, orbbushes);
  register(EntityType.LANTERNPODS, lanternpods);
  register(EntityType.VEILMOSSES, veilmosses);
  register(EntityType.GROUND_GLOWS, groundGlows);

  // Force one shadow map render now that all geometry is placed
  moon.shadow.needsUpdate = true;

  // Create ground AFTER populate so pond/fairy ring flat zones are registered
  const groundMesh = createGround();

  // Wire up collision data for player
  setCollisionData(trees_data, rocks_data);
  setDustBurstFn(spawnDustBurst);

  // Wire up player audio callbacks (Items 1-3)
  setAudioCallbacks(
    (sprinting) => {
      // Check if near water for splash sound
      let nearWater = false;
      for (let pi = 0; pi < ponds.length; pi++) {
        const pdx = ponds[pi].x - player.pos.x, pdz = ponds[pi].z - player.pos.z;
        if (pdx * pdx + pdz * pdz < 16) { nearWater = true; break; }
      }
      playFootstep(sprinting, nearWater);
      // Footstep dust particles (Item 3)
      if (Math.random() < 0.4) spawnDustBurst(player.pos.x, player.pos.z, 1);
    },
    () => playJumpSound(),
    (impactStrength) => playLandSound(impactStrength)
  );

  // Init weather + rain
  initWeather();
  initRain();

  // Init particle pools
  initFlies(150);
  initSpores(60);
  initCrystalLights();
  initStarMotes(STARMOTE_N);
  initDustMotes(20);
  initDandSeeds(40);
  initBubblePops(30);
  initLeaves(50);
  initFootprints();
  initOrbBurst();
  initResonanceRings(scene);

  // Aurora (sky event)
  initAurora();

  // Build quest structures
  makeObelisk();
  makeMoat();
  makeRainbows();

  // Init audio system (Items 1-3)
  initAudio();

  // Init discoveries (Item 10)
  initDiscoveries();
  initPufflingChat();

  // Init UI (must be before quest so orb HUD element is available)
  initHUD();
  initOverlay();

  // Init intro cinematic (creates title screen immediately)
  initIntro(() => {
    // Cinematic complete — hand off to player
    gameStarted = true;
    setStarted(true);
    showGame();
  });
  enableTitleClick();

  // Init dimming system (Phase 2 — must be before quest so orb collection can notify)
  initDimming(orbs);

  // Init quest system
  initQuest({
    orbs: orbs,
    obeliskGroup: getObeliskGroup(),
    obeliskMat: getObeliskMat(),
    obeliskGlowMat: getObeliskGlowMat(),
    pinnacleOrb: getPinnacleOrb(),
    pinnacleRings: getPinnacleRings(),
    moatMesh: getMoatMesh(),
    moatMat: getMoatMat(),
    rainbowArcs: rainbowArcs,
    player: player,
    makeLaser: makeLaser,
    orbHudEl: getOrbHudEl(),
    deers: deers,
    puffs: puffs,
    jellies: jellies,
    moths: moths,
    trees: trees_data,
    treeMeshes: treeMeshes,
    groundMesh: groundMesh,
    playOrbCollect: playOrbCollect,
    playOrbWarble: playOrbWarble,
    playLaserZap: playLaserZap,
    playLaserHum: playLaserHum,
    stopLaserHums: stopLaserHums,
    notifyOrbCollected: notifyOrbCollected,
    playOrbReject: playOrbReject,
    showOrbRejectHint: () => showOrbRejectHint(),
    showOrbListening: () => showOrbListening(),
    showOrbDiscovery: showOrbDiscovery,
    spawnOrbBurst: spawnOrbBurst,
    startResonanceDrone: startResonanceDrone,
    runeFaces: getRuneFaces()
  });

  // Wire up go callback
  setGoCallback(go);

  // Narrative perspective toggle (Tab key)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') { e.preventDefault(); togglePerspective(); }
  });

  // Register director subsystems with kernel scheduler
  // Each section of director() is wrapped as a named system with explicit phase.
  // Systems can be independently disabled via scheduler.setEnabled(name, false)
  // or replaced by removing + re-adding with the same phase.
  registerAllSystems({
    crystalProximity: (dt, t) => _directorCrystalProximity(dt, t),
    particleSpawn: (dt, t) => _directorParticleSpawn(dt, t),
    floraGlow: (dt, t) => _directorFloraGlow(dt, t),
    faunaUpdate: (dt, t) => _directorFaunaUpdate(dt, t),
    spiritHumUpdate: (dt, t) => _directorSpiritHum(dt, t),
    attunementUpdate: (dt, t) => _directorAttunement(dt, t),
    skyUpdate: (dt, t) => { updateSky(dt, t); _directorSkyWish(dt, t); },
    vegetationUpdate: (dt, t) => updateVegetation(dt, t),
    rocksUpdate: (dt, t) => _directorRocks(dt, t),
    magicalUpdate: (dt, t) => _directorMagical(dt, t),
    particleUpdate: (dt, t) => _directorParticles(dt, t),
    questUpdate: (dt, t) => _directorQuest(dt, t),
    footprintUpdate: (dt, t) => _directorFootprints(dt, t),
    audioUpdate: (dt, t) => _directorAudio(dt, t),
    discoveriesUpdate: (dt, t) => _directorDiscoveries(dt, t),
    hudUpdate: (dt, t) => reportTimings(renderer),
  });

  // Seed initial fireflies
  for (let i = 0; i < 50; i++) {
    const a = Math.random() * 6.28, d = 3 + Math.random() * WORLD_R * 0.7;
    const fx = Math.cos(a) * d, fz = Math.sin(a) * d;
    spawnFly(fx, getGroundY(fx, fz), fz, 8 + Math.random() * 12);
  }

  console.log('✓ Init: trees=' + trees_data.length + ' mush=' + mush_data.length +
    ' crystals=' + crys_data.length + ' orbs=' + orbs.length +
    ' creatures=' + (jellies.length + puffs.length + deers.length + moths.length) +
    ' wisps=' + wisps.length + ' dandelions=' + dandelions.length +
    ' fairyRings=' + fairyRings.length + ' bubbles=' + bubbles.length +
    ' ponds=' + ponds.length +
    ' scene=' + scene.children.length);

  animate();
} catch (err) {
  console.error('INIT FAILED:', err);
  document.body.innerHTML = '<div style="color:red;padding:30px;font-family:monospace">' +
    '<h2>Init Failed</h2><pre>' + (err.stack || err.message) + '</pre></div>';
}

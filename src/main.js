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
// Core systems
import { renderer, camera, clock, scene } from './core/renderer.js';
import { render as postRender } from './core/postprocessing.js';
import { initCrystalLights, crystalLights, playerLight, orbLight, moon, hemiLight, moon2 } from './core/lighting.js';
import { keys, yaw, pitch, setGoCallback, setStarted, touchSprint, setYaw, setPitch, unlockTruthControlHint } from './core/input.js';
// Constants
import {
  WORLD_R, EYE_H, STARMOTE_N,
  C
} from './constants.js';

// World
import { createGround } from './world/ground.js';
import { createSkyDome, updateSky, checkShootingStarWish, getConstellationDir } from './world/sky.js';
import { getGroundY, registerFlatZone } from './world/terrain.js';
import { prepareLocalGlowFrame } from './systems/dimming.js';
import { initAurora, updateAurora } from './world/aurora.js';

// Player
import { player, updatePlayer, cameraBobY, playerIdleTime, setCollisionData, setDustBurstFn, setAudioCallbacks, setGravityMult } from './core/player.js';

// Entities — Flora
import { makeTreeImpostor, createTreeTemplates, createTreeInstances } from './entities/flora/trees.js';
import { makeMush } from './entities/flora/mushrooms.js';
import { makeCrystal } from './entities/flora/crystals.js';
import { makeGrassPatch } from './entities/flora/grass.js';
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
import { makeLuminid } from './entities/fauna/luminids.js';

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
import { initDustMotes, spawnDustBurst, updateDustMotes } from './particles/dust.js';
import { initDandSeeds, spawnDandSeed, updateDandSeeds, setSeedWind } from './particles/seeds.js';
import { initBubblePops, updateBubblePops } from './particles/bubblePops.js';
import { initLeaves, spawnLeaf, updateLeaves, setLeafWind } from './particles/leaves.js';
import { initFootprints, spawnFootprint, updateFootprints } from './particles/footprints.js';
import { initOrbBurst, spawnOrbBurst, updateOrbBurst } from './particles/orbBurst.js';
import { initResonanceRings, updateResonanceRings } from './particles/resonanceRings.js';

// Quest
import { initQuestState, updateQuestState, getQuestState } from './quest/questState.js';
import { initQuestVisuals, updateQuestVisuals } from './quest/questVisuals.js';
import { makeLaser } from './quest/lasers.js';

// Narrative
import { togglePerspective, getPerspective } from './state/narrativeState.js';
import { showNarrativeText, showOrbDiscovery, initDiscoveries, updateDiscoveries, showFinaleText, showTransformText, showFreeRoamText, checkDiscoveries, showOrbRejectHint, showOrbListening, checkIdleHints } from './systems/discoveries.js';

// Population
import { populate as _populate } from './populate.js';

// Systems
import { initDayNight, updateDayNight, bioGlow, phase as dayPhase } from './systems/dayNightCycle.js';
import { initWeather, updateWeather, windX, windZ, windStrength, weatherState, lightningFlash, isStorming, getRainRate } from './systems/weather.js';
import { initRain, updateRain } from './particles/rain.js';

// Audio
import { initAudio, updateAudio, playFootstep, playJumpSound, playLandSound, updateStepCooldown, updateAmbientSounds, playOrbWarble, playLaserZap, playLaserHum, updateLaserHums, stopLaserHums, updateMusic, startResonanceDrone, setAudioOrbCount, initCrystalClusters, updateCrystalResonance, playPufflingVocal } from './systems/audio.js';

// Intro cinematic (Phase 2)
import { initIntro, startIntro, enableTitleClick, updateIntro, introActive } from './systems/intro.js';

// UI
import { initHUD, updateHUD } from './ui/hud.js';
import { initOverlay, getOrbHudEl, showGame } from './ui/overlay.js';

// ================================================================
// Entity arrays (centralized in state/entityStore.js)
// ================================================================
import {
  trees_data, treeMeshes, treeImpostors, mush_data, crys_data,
  jellies, puffs, deers, moths, luminids, grassPatches, ferns, flowers, reeds,
  rocks_data, wisps, dandelions, fairyRings, bubbles, ponds, orbs,
  thornblooms, helixvines, snapthorns, spiralfronds, corpseblooms,
  orbbushes, lanternpods, veilmosses, groundGlows, glyphs_data,
  crystalSortBuf, crystalSortPX, crystalSortPZ,
  setTreeMeshes, setCrystalSortPos, initTreeHash
} from './state/entityStore.js';

// ================================================================
// Shared game state (centralized in state/gameState.js)
// ================================================================
import {
  orbBoost as _orbBoost, setOrbBoost,
  attuneFlashTimer as _attuneFlashTimer, attuneFlashType as _attuneFlashType,
  echoTimer as _echoTimer,
  humResonanceType as _humResonanceType, humResonanceStr as _humResonanceStr,
  featherFallTimer as _featherFallTimer,
  decayAttuneFlash, decayEchoTimer, decayFeatherFall, setFeatherFallTimer
} from './state/gameState.js';

// Kernel
import { update as updateContext } from './kernel/context.js';
import { run as runScheduler } from './kernel/scheduler.js';

// Registration
import { registerAllSystems, nearest } from './systems/registration.js';

// Dimming
import { initDimming, updateDimming, getLocalGlow } from './systems/dimming.js';

// Echo Visions
import { initEchoVisions, updateEchoVisions } from './systems/echoVisions.js';

// Puffling Chat
import { initPufflingChat, updatePufflingChat } from './systems/pufflingChat.js';
import { initWizardPufflingEvent, updateWizardPufflingEvent } from './systems/wizardPufflingEvent.js';

// Performance Monitor
import { reportTimings, timeStart, timeEnd } from './systems/perfMonitor.js';

// Visual subsystems (extracted from main.js)
import { updateSpiritHumVisuals } from './updates/spiritHumVisuals.js';
import { updateAttunementVisuals } from './updates/attunementVisuals.js';
import { initCrystalVisuals, updateCrystalVisuals } from './updates/crystalVisuals.js';
import { updateVegetation, updateFloraReactions } from './updates/vegetation.js';
import { updatePlayerVisuals, updateCameraPan, triggerCameraPan } from './updates/playerVisuals.js';
import { updateBubbles, updatePonds, updateWisps, updateEchoBloom, updateFairyRings as _updateFairyRings } from './updates/magicalEntities.js';
import { spawnFireflies, spawnSpores, spawnWindParticles } from './updates/spawning.js';
import { updateJellies as _updateJellies, updatePuffs as _updatePuffs, updateDeers as _updateDeers, updateMoths as _updateMoths, updateLuminids as _updateLuminids } from './updates/fauna.js';


// ================================================================
// Update functions (vegetation, creatures, entities)
// ================================================================

function updateJellies(dt, t) {
  const result = _updateJellies(dt, t);
  nearest.jellyDist2 = result.nearestDist2;
  nearest.jellyPos.x = result.nearestPos.x;
  nearest.jellyPos.z = result.nearestPos.z;
}

function updatePuffs(dt, t) {
  const result = _updatePuffs(dt, t);
  nearest.puffDist2 = result.nearestDist2;
  nearest.puffPos.x = result.nearestPos.x;
  nearest.puffPos.z = result.nearestPos.z;
}

function updateDeers(dt, t) {
  const result = _updateDeers(dt, t);
  nearest.deerDist2 = result.nearestDist2;
  nearest.deerPos.x = result.nearestPos.x;
  nearest.deerPos.z = result.nearestPos.z;
  nearest.deerWanderAng = result.nearestWanderAng;
}

function updateMoths(dt, t) {
  const result = _updateMoths(dt, t);
  nearest.mothDist2 = result.nearestDist2;
  nearest.mothPos.x = result.nearestPos.x;
  nearest.mothPos.z = result.nearestPos.z;
}

function updateLuminids(dt, t) {
  const result = _updateLuminids(dt, t);
  nearest.luminidDist2 = result.nearestDist2;
  nearest.luminidPos.x = result.nearestPos.x;
  nearest.luminidPos.z = result.nearestPos.z;
}

function updateFairyRings(dt, t) {
  const result = _updateFairyRings(dt, t);
  if (result.featherFallTriggered) setFeatherFallTimer(4.0);
}

// ================================================================
// Sync Context — updates the kernel context with current frame values
// ================================================================
function syncContext(dt, t) {
  const q = getQuestState();
  updateContext({
    dt, t,
    player, camera,
    sprinting: keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint,
    playerIdleTime,
    bioGlow, orbBoost: _orbBoost, orbsFound: q.orbsFound,
    windX, windZ, windStrength, weatherState, lightningFlash, isStorming, rainRate: getRainRate(),
    dayPhase,
    attuneFlashTimer: _attuneFlashTimer, attuneFlashType: _attuneFlashType, echoTimer: _echoTimer,
    humResonanceType: _humResonanceType, humResonanceStr: _humResonanceStr,
    questPhase: q.questPhase
  });
}

// ================================================================
// Director
// ================================================================
let dirState = 'EXPLORE';

function director(dt, t) {
  // Sync frame values to kernel context slices
  syncContext(dt, t);

  // Enhancement 8: Slow-mo micro-pause — world holds its breath on attunement flash
  // First 0.4s at 0.3× speed, then ease back to 1.0× over next 0.6s (1.0s total dilation)
  if (_attuneFlashTimer > 1.5) { // first 1.0s of the 2.5s window
    const dilationT = (_attuneFlashTimer - 1.5); // 1.0 → 0.0
    const timeScale = dilationT > 0.6 ? 0.3 : (0.3 + (1.0 - dilationT / 0.6) * 0.7);
    dt *= timeScale;
  }

  // Run all registered systems in phase order
  runScheduler(dt, t);

  decayAttuneFlash(dt);
  decayEchoTimer(dt);

  reportTimings(renderer);
}

// ================================================================
// Director subsystem functions (registered with kernel scheduler)
// ================================================================

function _directorCrystalProximity(dt, t, ctx) {
  timeStart('crystalProximity');
  let nearCrys = false;
  const pPos = ctx.player.pos;
  for (let i = 0; i < crys_data.length; i++) {
    const dx = crys_data[i].x - pPos.x, dz = crys_data[i].z - pPos.z;
    if (dx * dx + dz * dz < 64) { nearCrys = true; break; }
  }
  dirState = nearCrys ? 'NEAR_CRYSTAL' : 'EXPLORE';
  timeEnd('crystalProximity');
}

function _directorParticleSpawn(dt, t, ctx) {
  timeStart('fireflySpawn');
  const w = ctx.weather;
  const p = ctx.player;
  spawnFireflies(dt, t, { dirState, player: p.body, crys_data, flowers, curRain: w.rainRate, spawnFly, updateFlies });
  timeEnd('fireflySpawn');
  timeStart('spores');
  spawnSpores(dt, { player: p.body, mush_data, spawnSpore });
  timeEnd('spores');
}

function _directorFloraGlow(dt, t, ctx) {
  const e = ctx.env;
  const a = ctx.attune;
  const pPos = ctx.player.pos;

  timeStart('mushrooms');
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const mdx = m.x - pPos.x, mdy = (m.group.position.y || 0) - pPos.y, mdz = m.z - pPos.z;
    const md2 = mdx * mdx + mdy * mdy + mdz * mdz;
    if (md2 > 2500) { if (m.group.visible) m.group.visible = false; continue; }
    if (!m.group.visible) m.group.visible = true;
    const p = Math.sin(t * m.speed + m.phase) * 0.5 + 0.5;
    m.capMat.emissiveIntensity = m.base * (0.7 + p * 1.0) * getLocalGlow(m.x, m.z, e.bioGlow * e.orbBoost);
    if (a.flashTimer > 0 && md2 < 625) {
      m.capMat.emissiveIntensity += a.flashTimer * 0.6;
    }
  }
  timeEnd('mushrooms');

  timeStart('crystals');
  for (let i = 0; i < crys_data.length; i++) {
    const c = crys_data[i];
    const p = Math.sin(t * 0.6 + c.phase) * 0.5 + 0.5;
    const cGlow = getLocalGlow(c.x, c.z, e.bioGlow * e.orbBoost);
    c.mat.emissiveIntensity = (1.0 + p * 1.5) * cGlow;
    if (a.flashTimer > 0) {
      const cdx = c.x - pPos.x, cdz = c.z - pPos.z;
      if (cdx * cdx + cdz * cdz < 225) {
        c.mat.emissiveIntensity += a.flashTimer * 0.35;
      }
    }
    c.group.children[0].rotation.y += dt * 0.15;
  }

  if (!crystalSortBuf.length) {
    for (let i = 0; i < crys_data.length; i++) crystalSortBuf.push({ idx: i, dist: 0 });
  }
  const csDX = pPos.x - crystalSortPX, csDZ = pPos.z - crystalSortPZ;
  if (csDX * csDX + csDZ * csDZ > 1) {
    setCrystalSortPos(pPos.x, pPos.z);
    for (let i = 0; i < crys_data.length; i++) {
      const c = crys_data[i];
      const dx = c.x - pPos.x, dz = c.z - pPos.z;
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
      crystalLights[i].intensity = (1.5 + p * 2.0) * getLocalGlow(c.x, c.z, e.bioGlow * e.orbBoost);
      crystalLights[i].distance = 16;
      crystalLights[i].color.setHex(C.crystal);
    } else {
      crystalLights[i].intensity = 0;
    }
  }
  timeEnd('crystals');

  timeStart('vegetation');
  const w = ctx.weather;
  spawnWindParticles(dt, t, { player: ctx.player.body, dandelions, trees_data, windStrength: w.windStrength, isStorming: w.isStorming, spawnDandSeed, spawnLeaf });
  timeEnd('vegetation');
}

function _directorFaunaUpdate(dt, t, ctx) {
  timeStart('fauna');
  try { updateJellies(dt, t); } catch (e) { console.warn('jelly update error:', e); }
  try { updatePuffs(dt, t); } catch (e) { console.warn('puff update error:', e); }
  try { updateDeers(dt, t); } catch (e) { console.warn('deer update error:', e); }
  try { updateMoths(dt, t); } catch (e) { console.warn('moth update error:', e); }
  try { updateLuminids(dt, t); } catch (e) { console.warn('luminid update error:', e); }
  timeEnd('fauna');
}

function _directorSpiritHum(dt, t, ctx) {
  updateSpiritHumVisuals(dt);
}

function _directorCrystalVisuals(dt, t, ctx) {
  updateCrystalVisuals(dt, t);
}

function _directorAttunement(dt, t, ctx) {
  updateAttunementVisuals(dt, t, ctx);
}

function _directorSkyWish(dt, t, ctx) {
  const _wishText = checkShootingStarWish(pitch, ctx.env.orbsFound, getPerspective());
  if (_wishText) showNarrativeText(_wishText, 5.0);
}

function _directorRocks(dt, t, ctx) {
  timeStart('rocks');
  const p = ctx.player;
  updateProceduralRocks(p.pos.x, p.pos.y, p.pos.z, p.camera);
  timeEnd('rocks');
}

function _directorMagical(dt, t, ctx) {
  timeStart('particles');
  const p = ctx.player;
  updateWisps(dt, t);
  updateDandelions(dandelions, dt, t, p.pos);
  updateFairyRings(dt, t);
  updateBubbles(dt, t);
  updatePonds(dt, t);
  updateEchoVisions(dt, t, p.sprinting);
  timeEnd('particles');
}

function _directorParticles(dt, t, ctx) {
  const pPos = ctx.player.pos;
  updateStarMotes(dt, t, pPos);
  updateDandSeeds(dt, t, ctx);
  updateLeaves(dt, t);
  updateDustMotes(dt);
  updateBubblePops(dt);
  updateOrbBurst(dt, t);
  updateEchoBloom(dt, t);
  updateResonanceRings(dt);
}

function _directorQuest(dt, t, ctx) {
  timeStart('quest');
  updateFloraReactions(dt, t);
  updateQuestState(dt);
  updateQuestVisuals(dt, t);
  updateRainbowSparkles(t);
  timeEnd('quest');
}

function _directorFootprints(dt, t, ctx) {
  timeStart('footprints');
  const p = ctx.player;
  if (p.body && p.body.onGround) {
    const speed2 = p.body.vel.x * p.body.vel.x + p.body.vel.z * p.body.vel.z;
    if (speed2 > 0.5) {
      const moveAngle = Math.atan2(p.body.vel.x, p.body.vel.z);
      spawnFootprint(p.pos.x, p.pos.z, moveAngle, p.sprinting);
    }
  }
  updateFootprints(dt, ctx.weather.rainRate);
  timeEnd('footprints');
}

function _directorAudio(dt, t, ctx) {
  timeStart('audio');
  updateAmbientSounds(dt, ctx.player.pos, ponds, grassPatches, ctx.env.dayPhase, ctx.weather.rainRate);
  updateStepCooldown(dt);
  timeEnd('audio');
}

function _directorDiscoveries(dt, t, ctx) {
  timeStart('discoveries');
  const p = ctx.player;
  checkDiscoveries(p.pos, deers, puffs, jellies, moths, fairyRings, ponds, 0);
  checkIdleHints(p.idleTime);
  updateDiscoveries(dt, t);
  updatePufflingChat(dt, renderer.domElement);
  timeEnd('discoveries');
}

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

  const { orbsFound } = getQuestState();

  updateDayNight(dt);
  const rainRate = updateWeather(dt, elapsed, player.pos);
  updateRain(dt, player.pos, rainRate, windX, windZ);
  updateAurora(dt, elapsed, dayPhase, bioGlow, weatherState);

  // Advance dimming restoration waves BEFORE querying glow values
  updateDimming(dt);
  prepareLocalGlowFrame();
  // Progressive glow boost: +5% per orb found
  setOrbBoost(1.15 + orbsFound * 0.05);

  // Constellation camera pan — trigger when a new orb is collected
  triggerCameraPan(orbsFound, yaw, pitch, getConstellationDir);

  // Player light evolution + dimming + hum light modulation
  updatePlayerVisuals(dt, elapsed);


  // Update audio system (Items 1-3)
  setAudioOrbCount(orbsFound);
  updateAudio(dt, windStrength, rainRate, isStorming, lightningFlash, dayPhase, player.pos, ponds);
  updateCrystalResonance(dt, player.pos);
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
    decayFeatherFall(dt);
    setGravityMult(0.3); // 30% gravity during feather fall
  } else {
    setGravityMult(1.0);
  }
  updatePlayer(dt);
  // Sync camera to player *before* wizard event so look-at physics match current player (not T-1 frame).
  camera.position.copy(player.pos);
  camera.position.y += cameraBobY;
  const wizardCam = updateWizardPufflingEvent(dt, elapsed, {
    player,
    cameraPos: camera.position,
    yaw,
    pitch
  });
  director(dt, elapsed);
  const flyC = updateFlies(dt, elapsed);
  const spC = updateSpores(dt);

  camera.rotation.order = 'YXZ';

  // Constellation camera pan — smoothly override yaw/pitch
  const camPan = updateCameraPan(dt, yaw, pitch, setYaw, setPitch);
  let finalYaw = camPan.yaw;
  let finalPitch = camPan.pitch;
  if (wizardCam && wizardCam.active) {
    finalYaw = wizardCam.yaw;
    finalPitch = wizardCam.pitch;
    setYaw(finalYaw);
    setPitch(finalPitch);
  }
  camera.rotation.y = finalYaw;
  camera.rotation.x = finalPitch;

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

  setTreeMeshes(_populate({
    trees_data, treeImpostors, mush_data, crys_data, jellies, puffs, deers, moths, luminids,
    grassPatches, ferns, flowers, reeds, rocks_data, wisps, dandelions,
    fairyRings, bubbles, ponds, orbs, thornblooms, helixvines, snapthorns,
    spiralfronds, corpseblooms, orbbushes, lanternpods, veilmosses, groundGlows,
    glyphs_data
  }, {
    makeTreeImpostor, createTreeTemplates, createTreeInstances,
    makeMush, makeCrystal, makeJelly, makePuff, makeDeer, makeMoth, makeLuminid,
    makeGrassPatch, makeFern, makeFlower, makeReed,
    initProceduralRocks, placeProceduralRock, finalizeProceduralRocks,
    initPebbles, addPebble, finalizePebbles,
    makeWisp, makeDandelion, makeFairyRing, makeBubble, makePond, makeOrb,
    makeThornbloom, makeHelixvine, makeSnapthorn, makeSpiralFrond,
    makeCorpseBloom, makeOrbBush, makeLanternPod, makeVeilMoss
  }, scene));

  // Build spatial hash for tree collision queries (once, trees don't move)
  initTreeHash(10);

  // Force one shadow map render now that all geometry is placed
  moon.shadow.needsUpdate = true;

  // Create ground AFTER populate so pond/fairy ring flat zones are registered
  // (populate ends with buildHeightCache() once all flat zones exist)
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
  initEchoVisions();

  // Aurora (sky event)
  initAurora();

  // Build quest structures
  makeObelisk();
  makeMoat();
  makeRainbows();

  // Init audio system (Items 1-3)
  initAudio();
  initCrystalClusters(crys_data);

  // Init discoveries (Item 10)
  initDiscoveries();
  initPufflingChat();
  initWizardPufflingEvent({
    showNarrativeText,
    playPufflingVocal,
    getGroundY,
    onTruthUnlocked: unlockTruthControlHint
  });

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
  initQuestState(orbs);
  initQuestVisuals({
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
    playOrbWarble: playOrbWarble,
    playLaserZap: playLaserZap,
    playLaserHum: playLaserHum,
    stopLaserHums: stopLaserHums,
    showOrbRejectHint: () => showOrbRejectHint(),
    showOrbListening: () => showOrbListening(),
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
    crystalProximity: (dt, t, ctx) => _directorCrystalProximity(dt, t, ctx),
    particleSpawn: (dt, t, ctx) => _directorParticleSpawn(dt, t, ctx),
    floraGlow: (dt, t, ctx) => _directorFloraGlow(dt, t, ctx),
    faunaUpdate: (dt, t, ctx) => _directorFaunaUpdate(dt, t, ctx),
    spiritHumUpdate: (dt, t, ctx) => _directorSpiritHum(dt, t, ctx),
    attunementUpdate: (dt, t, ctx) => _directorAttunement(dt, t, ctx),
    skyUpdate: (dt, t, ctx) => { updateSky(dt, t); _directorSkyWish(dt, t, ctx); },
    vegetationUpdate: (dt, t, ctx) => updateVegetation(dt, t),
    rocksUpdate: (dt, t, ctx) => _directorRocks(dt, t, ctx),
    magicalUpdate: (dt, t, ctx) => _directorMagical(dt, t, ctx),
    particleUpdate: (dt, t, ctx) => _directorParticles(dt, t, ctx),
    questUpdate: (dt, t, ctx) => _directorQuest(dt, t, ctx),
    footprintUpdate: (dt, t, ctx) => _directorFootprints(dt, t, ctx),
    audioUpdate: (dt, t, ctx) => _directorAudio(dt, t, ctx),
    discoveriesUpdate: (dt, t, ctx) => _directorDiscoveries(dt, t, ctx),
    hudUpdate: (dt, t, ctx) => reportTimings(renderer),
  });

  // Seed initial fireflies
  for (let i = 0; i < 50; i++) {
    const a = Math.random() * 6.28, d = 3 + Math.random() * WORLD_R * 0.7;
    const fx = Math.cos(a) * d, fz = Math.sin(a) * d;
    spawnFly(fx, getGroundY(fx, fz), fz, 8 + Math.random() * 12);
  }

  console.log('✓ Init: trees=' + trees_data.length + ' mush=' + mush_data.length +
    ' crystals=' + crys_data.length + ' orbs=' + orbs.length +
    ' creatures=' + (jellies.length + puffs.length + deers.length + moths.length + luminids.length) +
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

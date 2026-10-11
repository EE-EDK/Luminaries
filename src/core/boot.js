// ================================================================
// Boot — build the world, wire the systems, offer the save
// ================================================================
// The init sequence that used to sit at the bottom of main.js, moved whole and
// in the same order: populate, then ground, then particle pools, then audio,
// UI, intro, dimming, quest, settings, save/restore, scheduler. The order is
// load-bearing (the orb HUD must exist before the quest reads it; settings
// load before any consumer subscribes), so nothing here was reordered.
//
// main.js wraps the call in the try/catch that paints "Init Failed".

// Core systems
import { camera, scene } from './renderer.js';
// Evaluated for its resize listener, and ahead of input.js as it has always been:
// the renderer, the composer and the input module all listen for 'resize', and
// they have always done so in that order.
import './postprocessing.js';
import { initCrystalLights, playerLight, moon, hemiLight, moon2 } from './lighting.js';
import { yaw, setGoCallback, setStarted, unlockTruthControlHint } from './input.js';
// Constants
import { WORLD_R, STARMOTE_N } from '../constants.js';
// World
import { createGround } from '../world/ground.js';
import { createSkyDome } from '../world/sky.js';
import { getGroundY, registerFlatZone } from '../world/terrain.js';
import { initAurora } from '../world/aurora.js';
// Player
import { player, setCollisionData, setDustBurstFn, setAudioCallbacks } from './player.js';
// Entities — Flora
import { makeTreeImpostor, createTreeTemplates, createTreeInstances } from '../entities/flora/trees.js';
import { makeMush } from '../entities/flora/mushrooms.js';
import { makeCrystal } from '../entities/flora/crystals.js';
import { makeGrassPatch } from '../entities/flora/grass.js';
import { makeFern } from '../entities/flora/ferns.js';
import { makeFlower } from '../entities/flora/flowers.js';
import { makeReed } from '../entities/flora/reeds.js';
import { makeDandelion } from '../entities/flora/dandelions.js';
import { makeThornbloom } from '../entities/flora/thornbloom.js';
import { makeHelixvine } from '../entities/flora/helixvine.js';
import { makeSnapthorn } from '../entities/flora/snapthorn.js';
import { makeSpiralFrond } from '../entities/flora/spiralfrond.js';
import { makeCorpseBloom } from '../entities/flora/corpsebloom.js';
import { makeOrbBush } from '../entities/flora/orbbush.js';
import { makeLanternPod } from '../entities/flora/lanternpod.js';
import { makeVeilMoss } from '../entities/flora/veilmoss.js';
// Entities — Fauna
import { makeJelly } from '../entities/fauna/jellies.js';
import { makePuff } from '../entities/fauna/pufflings.js';
import { makeDeer } from '../entities/fauna/deer.js';
import { makeMoth } from '../entities/fauna/moths.js';
import { makeLuminid } from '../entities/fauna/luminids.js';
// Entities — Magical
import { makeWisp } from '../entities/magical/wisps.js';
import { makeFairyRing } from '../entities/magical/fairyRings.js';
import { makeBubble } from '../entities/magical/bubbles.js';
import { makePond } from '../entities/magical/ponds.js';
import { makeOrb } from '../entities/magical/orbs.js';
// Entities — World
import { initProceduralRocks, placeProceduralRock, finalizeProceduralRocks, regroundProceduralRocks, initPebbles, addPebble, finalizePebbles, regroundPebbles } from '../entities/world/rocks.js';
import { makeObelisk, getObeliskGroup, getObeliskMat, getObeliskGlowMat, getPinnacleOrb, getPinnacleRings, getRuneFaces } from '../entities/world/obelisk.js';
import { makeMoat, getMoatMesh, getMoatMat } from '../entities/world/moat.js';
import { makeRainbows, rainbowArcs } from '../entities/world/rainbows.js';
// Particles
import { initFlies, spawnFly } from '../particles/fireflies.js';
import { initSpores } from '../particles/spores.js';
import { initStarMotes } from '../particles/starMotes.js';
import { initDustMotes, spawnDustBurst } from '../particles/dust.js';
import { initDandSeeds } from '../particles/seeds.js';
import { initBubblePops } from '../particles/bubblePops.js';
import { initLeaves } from '../particles/leaves.js';
import { initFootprints } from '../particles/footprints.js';
import { initOrbBurst, spawnOrbBurst } from '../particles/orbBurst.js';
import { initResonanceRings } from '../particles/resonanceRings.js';
// Quest
import { initQuestState, getOrbsFound, getQuestState } from '../quest/questState.js';
import { initQuestVisuals, requestRuneFlip } from '../quest/questVisuals.js';
import { makeLaser } from '../quest/lasers.js';
// Narrative
import { togglePerspective, revealTruth } from '../state/narrativeState.js';
import { showNarrativePair, initDiscoveries, showOrbRejectHint, showOrbListening } from '../systems/discoveries.js';
// Population
import { populate as _populate } from '../populate.js';
// Systems
import { initDayNight } from '../systems/dayNightCycle.js';
import { initWeather } from '../systems/weather.js';
import { initRain } from '../particles/rain.js';
// Audio
import { initAudio, playFootstep, playJumpSound, playLandSound, playOrbWarble, playLaserZap, playLaserHum, stopLaserHums, startResonanceDrone, initCrystalClusters, playPufflingVocal } from '../systems/audio.js';
// Intro cinematic (Phase 2)
import { initIntro, startIntro, enableTitleClick, enableContinue, introActive, debugSkipIntro } from '../systems/intro.js';
import { on, Events } from '../kernel/eventBus.js';
import { guardedStorage, readSave, clearSave, initAutosave } from '../state/saveState.js';
import { buildSnapshot, applySnapshot, validateOpts } from '../state/worldSnapshot.js';
import { getBootSeed } from '../utils/rng.js';
import { startLightLean } from '../updates/playerVisuals.js';
import { setTouchPlatform } from '../narrative/controls.js';
import { initSessionSummary, showSessionSummary } from '../ui/sessionSummary.js';
import { getDiscoveredKeys } from '../state/narrativeState.js';
import { mobile as _isMobile } from './input.js';
import { initSettings, getSetting, onSetting } from '../state/settingsState.js';
import { initSettingsPanel } from '../ui/settingsPanel.js';
import { initOrientationPrompt } from '../ui/orientationPrompt.js';
import { setLookSensitivity, setInvertY } from './input.js';
import { setReducedMotion } from './player.js';
import { bindMixerSettings, applyMixerSettings, setSpatialPlatform } from '../systems/audio.js';
import { setQualityFloor, applyPlatformStart } from '../systems/adaptiveQuality.js';
// UI
import { initHUD } from '../ui/hud.js';
import { initOverlay, getOrbHudEl, showGame } from '../ui/overlay.js';
import { getPufflingHouseCollision } from '../entities/world/pufflingHomes.js';
import { queueReveal, resetFragments } from '../systems/fragments.js';
// Sprint 4: notebook, captions, photo moment, light shafts
import { initFieldwork } from '../systems/fieldwork.js';
import { trees_data, treeMeshes, treeImpostors, mush_data, crys_data, jellies, puffs, deers, moths, luminids, grassPatches, ferns, flowers, reeds, rocks_data, wisps, dandelions, fairyRings, bubbles, ponds, orbs, thornblooms, helixvines, snapthorns, spiralfronds, corpseblooms, orbbushes, lanternpods, veilmosses, groundGlows, glyphs_data, setTreeMeshes, initTreeHash } from '../state/entityStore.js';
// Dimming
import { initDimming } from '../systems/dimming.js';
// Echo Visions
import { initEchoVisions } from '../systems/echoVisions.js';
// Puffling Chat
import { initPufflingChat } from '../systems/pufflingChat.js';
import { initWizardPufflingEvent, resetWizardEncounter } from '../systems/wizardPufflingEvent.js';
// Visual subsystems (extracted from main.js)
import { initCrystalVisuals } from '../updates/crystalVisuals.js';
import { registerDirectorSystems } from './director.js';
import { safeInset } from '../utils/dom.js';
import { gameStarted, setGameStarted } from './loop.js';
import { attachDevSaveHooks } from '../debug/debugWiring.js';

// When this visit began, for the session summary. Wall clock, not world time.
const _sessionStart = Date.now();
let _summaryShown = false;
function _sessionStats(restored) {
  return {
    orbs: getOrbsFound(),
    discoveries: getDiscoveredKeys().length,
    seconds: (Date.now() - _sessionStart) / 1000,
    restored,
  };
}


// Save plumbing. The store is guarded because localStorage throws outright in
// a private window and on a full quota — a forest you cannot save is still a
// forest you can walk through.
const saveStore = guardedStorage(typeof localStorage !== 'undefined' ? localStorage : null);
const SAVING_KEY = 'lumi.save.enabled';
/** @brief Remember-progress toggle, owned by settingsState. */
function isSavingEnabled() { return getSetting('rememberProgress') !== false; }
let autosave = { request() {}, flush() { return false; }, suspend() {}, resume() {}, dispose() {}, lastWrite() { return 0; } };

function go() {
  // Re-arm the wizard encounter so stale state from a prior session never leaks into a new run.
  resetWizardEncounter();
  resetFragments();
  // Trigger intro cinematic — startIntro guards against double-call
  startIntro();
}

/**
 * @brief Run the whole init sequence once. Throws on failure; the caller owns the error screen.
 */
export function boot() {
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
    initProceduralRocks, placeProceduralRock, finalizeProceduralRocks, regroundProceduralRocks,
    initPebbles, addPebble, finalizePebbles, regroundPebbles,
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
  setCollisionData(trees_data, rocks_data, getPufflingHouseCollision());
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
  // Crystal resonance-chain visuals: register the CRYSTAL_CHAIN listener once.
  // crystalVisuals is the single per-frame owner of crystal emissive/scale.
  initCrystalVisuals();

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
    showNarrativePair,
    playPufflingVocal,
    getGroundY,
    onTruthUnlocked: () => { revealTruth(); unlockTruthControlHint(); }
  });

  // Init UI (must be before quest so orb HUD element is available)
  initHUD();
  initOverlay();

  // Init intro cinematic (creates title screen immediately)
  initIntro(() => {
    // Cinematic complete — hand off to player
    setGameStarted(true);
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
    showOrbRejectHint: (required, got) => showOrbRejectHint(required, got),
    showOrbListening: () => showOrbListening(),
    spawnOrbBurst: spawnOrbBurst,
    startResonanceDrone: startResonanceDrone,
    runeFaces: getRuneFaces(),
    onRuneRevealed: queueReveal,
    grassPatches: grassPatches,
    ferns: ferns,
    flowers: flowers,
    reeds: reeds
  });

  // ================================================================
  // Settings
  // ================================================================
  // Loaded before the panel is built and before any consumer subscribes, so
  // each consumer's first call carries the stored value rather than a default
  // it would then have to be corrected away from.
  setTouchPlatform(_isMobile);
  // HRTF costs real CPU per voice; a phone gets the cheap directional model.
  setSpatialPlatform(_isMobile);
  initSettings(saveStore);

  onSetting('masterVolume', () => applyMixerSettings());
  onSetting('muted', () => applyMixerSettings());
  bindMixerSettings(() => getSetting('masterVolume'), () => getSetting('muted'));
  onSetting('lookSensitivity', (v) => setLookSensitivity(v));
  onSetting('invertY', (v) => setInvertY(v));
  onSetting('reducedMotion', (v) => setReducedMotion(v));
  // A phone opens one cut down and climbs if it can; the floor subscription
  // below clamps that to whatever the player has chosen.
  applyPlatformStart(_isMobile);
  onSetting('qualityFloor', (v) => setQualityFloor(v));
  onSetting('textSize', (v) => {
    document.documentElement.style.setProperty('--lumi-text-scale', String(v));
  });

  initSettingsPanel({
    onClearSave: () => { clearSave(saveStore); autosave.suspend(); autosave.resume(); },
  });
  // Touch devices held upright are asked, once and kindly, to turn sideways.
  initOrientationPrompt({ isTouch: _isMobile });
  // Sprint 4: the notebook (N), sound captions, photo moment (H), dawn/dusk shafts.
  initFieldwork({ scene, camera, sun: moon });
  // The gear sits where the orb count used to; move the count clear of both it
  // and the dev hamburger. Same insets as the pair, or a camera cut-out would
  // push them left and leave the count where it was, underneath.
  const _orbHud = document.getElementById('orb-hud');
  if (_orbHud) _orbHud.style.right = safeInset('right', 118);

  // ================================================================
  // Save / restore
  // ================================================================
  // Everything the restore touches is initialised by now: populate, dimming,
  // quest state and quest visuals. A save is offered only if one reads back
  // clean — readSave throws a corrupt payload away rather than half-applying
  // it, so a Continue button on screen means there is really something behind
  // it.
  autosave = initAutosave({
    collect: buildSnapshot,
    // Not during the intro, and not before the player has a world to save.
    isActive: () => gameStarted && !introActive() && isSavingEnabled(),
    store: saveStore,
    seed: getBootSeed(),
    validateOpts,
  });

  for (const e of [Events.ORB_COLLECTED, Events.QUEST_PHASE, Events.WORLD_TRANSFORMED,
    Events.DISCOVERY, Events.PERSPECTIVE_CHANGED, Events.CREATURE_ATTUNED, Events.NOTEBOOK_ENTRY]) {
    on(e, () => autosave.request(e));
  }
  // After an orb, the player's light drifts toward the next one for a second.
  // Not a marker — just one direction made slightly brighter than the rest.
  on(Events.ORB_COLLECTED, () => {
    const st = getQuestState();
    for (let i = 0; i < st.orbs.length; i++) {
      const o = st.orbs[i];
      if (!o.found) { startLightLean(o.x, o.z); break; }
    }
  });

  initSessionSummary();
  // Once, when the world comes back — not on every re-entry to FREE_ROAM.
  on(Events.QUEST_PHASE, (e) => {
    if (e && e.phase === 'FREE_ROAM' && !_summaryShown) {
      _summaryShown = true;
      setTimeout(() => showSessionSummary(_sessionStats(true), 14), 6000);
    }
  });

  attachDevSaveHooks(autosave);
  window.addEventListener('pagehide', () => {
    autosave.flush('pagehide');
    // Drawn but not read: pagehide is too late to render. It costs nothing and
    // means a tab restored from the back-forward cache shows where they left off.
    if (gameStarted) showSessionSummary(_sessionStats(false), 0);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') autosave.flush('hidden');
  });

  const saved = readSave(saveStore, validateOpts);
  if (saved) {
    enableContinue(() => {
      try {
        resetWizardEncounter();
        applySnapshot(saved, { autosave });
      } catch (err) {
        // A save we cannot apply is worse than none: the world is now half
        // restored. Throw it out and start clean rather than hand the player
        // a forest that disagrees with itself.
        console.error('[save] restore failed, starting a new forest:', err);
        clearSave(saveStore);
        window.location.reload();
        return;
      }
      setGameStarted(true);
      setStarted(true);
      showGame();
      debugSkipIntro();
      autosave.request('restored');
    });
  }

  // Wire up go callback
  setGoCallback(go);

  // Narrative perspective toggle (Tab key)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') {
      e.preventDefault();
      togglePerspective();
      // After the truth, Tab at the obelisk also turns its runes between the
      // two worlds' colours; anywhere else this does nothing.
      requestRuneFlip(player.pos.x, player.pos.z, yaw);
    }
  });

  // Register director subsystems with kernel scheduler (the registrations
  // themselves live beside the functions they name, in core/director.js).
  registerDirectorSystems();

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
}

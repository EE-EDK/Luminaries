// ================================================================
// Frame loop — what happens once per animation frame
// ================================================================
// Split out of main.js unchanged. Before the game starts it runs the title
// screen's idle camera; after, it owns the single camera yaw/pitch arbiter
// (wizard cinematic > constellation pan > live look) and the order in which
// the player, the director and the renderer are stepped.

// Core systems
import { camera, clock } from './renderer.js';
import { render as postRender } from './postprocessing.js';
import { keys, yaw, pitch, setLookSuppressed, setMoveSuppressed } from './input.js';
// Constants
import { EYE_H, ORB_N, FAIRY_SKY_GRAV_UP, FAIRY_SKY_GRAV_DOWN } from '../constants.js';
// World
import { updateSky, getConstellationDir } from '../world/sky.js';
import { prepareLocalGlowFrame } from '../systems/dimming.js';
import { updateAurora } from '../world/aurora.js';
// Player
import { player, updatePlayer, cameraBobY, playerIdleTime, setGravityMult } from './player.js';
// Particles
import { updateFlies } from '../particles/fireflies.js';
import { updateSpores, setSporeWind } from '../particles/spores.js';
import { updateStarMotes } from '../particles/starMotes.js';
import { setSeedWind } from '../particles/seeds.js';
import { setLeafWind } from '../particles/leaves.js';
// Quest
import { getOrbsFound } from '../quest/questState.js';
// Systems
import { updateDayNight, bioGlow, phase as dayPhase } from '../systems/dayNightCycle.js';
import { updateWeather, windX, windZ, windStrength, weatherState, lightningFlash, isStorming } from '../systems/weather.js';
import { updateRain } from '../particles/rain.js';
// Audio
import { updateAudio, updateLaserHums, updateMusic, setAudioOrbCount, updateCrystalResonance } from '../systems/audio.js';
// Intro cinematic (Phase 2)
import { updateIntro, introActive } from '../systems/intro.js';
import { isCameraPanActive } from '../updates/playerVisuals.js';
import { strafeRoll, breathOffset } from '../utils/math.js';
import { isReducedMotion } from './player.js';
import { updateAudioListener } from '../systems/audio.js';
// UI
import { updateHUD } from '../ui/hud.js';
// Sprint 4: notebook, captions, photo moment, light shafts
import { stepPhotoMoment } from '../systems/fieldwork.js';
import { mush_data, crys_data, fairyRings, bubbles, ponds, orbs } from '../state/entityStore.js';
import { setOrbBoost, featherFallTimer as _featherFallTimer, decayFeatherFall, setFeatherFallTimer } from '../state/gameState.js';
// Dimming
import { updateDimming, getLocalGlow } from '../systems/dimming.js';
// Puffling Chat
import { updateWizardPufflingEvent } from '../systems/wizardPufflingEvent.js';
// Performance Monitor
import { sampleFrame } from '../systems/perfMonitor.js';
// Visual subsystems (extracted from main.js)
import { updateVegetation } from '../updates/vegetation.js';
import { updatePlayerVisuals, updateCameraPan, triggerCameraPan } from '../updates/playerVisuals.js';
import { director, attuneTimeScale, updateJellies, updatePuffs, updateDeers, updateMoths } from './director.js';

// Camera character. Small enough to feel rather than see.
const CAM_STRAFE_ROLL = 0.02;   // radians at full strafe, about 1.1 degrees
const CAM_BREATH_AMP = 0.006;   // radians of pitch once the player is still
let _camRoll = 0;

let elapsed = 0;

/**
 * Whether the intro (or a restored save) has handed the world to the player.
 * A live binding, like input.js's `started`: readers see the current value
 * without a getter call, only boot writes it.
 */
export let gameStarted = false;

/** @brief Hand the world to the player (intro finished, or Continue pressed). */
export function setGameStarted(on) { gameStarted = !!on; }

/**
 * @brief One frame: the sky and weather, then either the idle title camera or
 * the full game (player, wizard, director, camera arbiter, audio listener, HUD).
 *
 * Re-arms itself first thing, so a throw mid-frame does not stop the loop from
 * trying again next tick.
 */
export function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.1);
  elapsed += dt;

  // Dev-only rolling FPS sampler (no-op + tree-shaken in production).
  sampleFrame(dt);

  const orbsFound = getOrbsFound(); // numeric getter — no per-frame object allocation

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
  updateMusic(dt, dayPhase, pSpeed, nearMagic, getOrbsFound() / ORB_N);

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

    // Still pulse mushrooms + crystals (respect dimming sectors)
    for (let i = 0; i < mush_data.length; i++) {
      const m = mush_data[i];
      const p = Math.sin(elapsed * m.speed + m.phase) * 0.5 + 0.5;
      m.capMat.emissiveIntensity = m.base * (0.5 + p * 0.8) * getLocalGlow(m.x, m.z, bioGlow);
    }
    for (let i = 0; i < crys_data.length; i++) {
      const c = crys_data[i];
      c.mat.emissiveIntensity = (1.0 + Math.sin(elapsed * 0.6 + c.phase) * 0.5 * 1.5 + 0.75) * getLocalGlow(c.x, c.z, bioGlow);
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
  // Feather fall — reduced gravity after fairy-ring sky super-jump.
  // Asymmetric arc: lighter gravity on the way up (reach the constellation band fast),
  // much lighter on the way down (slow magical feather-float, not a slam). Phase keyed
  // on vertical velocity sign: rising (>=0) uses the ascent scale, falling uses descent.
  // End the float the moment the player touches back down (one-shot per super-jump) so a
  // lingering timer can't leave low-gravity active on the ground for a later normal jump.
  if (_featherFallTimer > 0) {
    if (player.onGround && player.vel.y <= 0) {
      setFeatherFallTimer(0);
      setGravityMult(1.0);
    } else {
      decayFeatherFall(dt);
      setGravityMult(player.vel.y >= 0 ? FAIRY_SKY_GRAV_UP : FAIRY_SKY_GRAV_DOWN);
    }
  } else {
    setGravityMult(1.0);
  }
  // Slow-mo beat: dilate the player's physics dt with the SAME scale the world uses in
  // director() so movement, gravity, jump arcs and head-bob slow with the breath beat.
  // attuneTimeScale() returns 1.0 outside the beat, so normal play is unaffected.
  updatePlayer(dt * attuneTimeScale());
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

  // ===========================================================
  // Single camera yaw/pitch arbiter — priority: wizardCam > constellation pan > live look.
  // Exactly ONE owner resolves camera.rotation per frame. Cinematics (wizard, pan) suppress
  // raw mouse/touch look so the live angles stay frozen; that makes the hand-back snap-free
  // because each cinematic eases its motion back to those same frozen angles before releasing.
  // ===========================================================
  // Advance the pan every frame so its timer/state machine stays coherent even if the
  // wizard wins this frame (the pan trigger is gated on orb pickup, so overlap is rare).
  const camPan = updateCameraPan(dt, yaw, pitch);
  const wizardOwns = !!(wizardCam && wizardCam.active);
  const panOwns = camPan.active;
  const cinematicOwns = wizardOwns || panOwns;

  // Freeze the live look while a cinematic owns the camera. The live yaw/pitch stay parked
  // at the player's pre-cinematic look (no mouse/touch accumulation), giving each cinematic
  // a stable ease-back anchor. Both cinematics end their motion exactly at that frozen look,
  // so when ownership releases camera.rotation already equals the live look — no snap, no
  // write-back into yaw/pitch needed. (Writing cinematic angles into the live look here would
  // poison the ease-back target on the next frame.)
  setLookSuppressed(cinematicOwns);
  // Full lock during the wizard encounter: freeze locomotion (not just look) so the
  // force-aimed camera can hold on the wizard without WASD feeling reversed. Movement
  // resumes automatically when the wizard ascends and the cinematic releases.
  setMoveSuppressed(wizardOwns);

  let finalYaw, finalPitch;
  if (wizardOwns) {
    finalYaw = wizardCam.yaw;
    finalPitch = wizardCam.pitch;
  } else if (panOwns) {
    finalYaw = camPan.yaw;
    finalPitch = camPan.pitch;
  } else {
    // Live look: input.js already owns yaw/pitch; the arbiter just mirrors them to the camera.
    finalYaw = yaw;
    finalPitch = pitch;
  }
  camera.rotation.y = finalYaw;
  camera.rotation.x = finalPitch;
  camera.rotation.y += stepPhotoMoment(dt, cinematicOwns); // Sprint 4 (D4): H held drifts the yaw

  // Two small things the camera does on its own, applied after the arbiter so
  // a cutscene pan is never fought over: a lean into a strafe, and a slow
  // breath once the player has genuinely stopped. Both are camera motion the
  // player did not ask for, so reduced motion skips them entirely.
  if (!isReducedMotion() && !isCameraPanActive()) {
    _camRoll = strafeRoll(_camRoll, keys.a ? -1 : (keys.d ? 1 : 0), CAM_STRAFE_ROLL, dt);
    camera.rotation.z = _camRoll;
    camera.rotation.x = finalPitch + breathOffset(playerIdleTime, elapsed, CAM_BREATH_AMP);
  } else if (_camRoll !== 0) {
    _camRoll = 0;
    camera.rotation.z = 0;
  }

  // The listener rides the camera, after the arbiter has settled where the
  // camera actually is — reading yaw/pitch before a cutscene pan has had its
  // say would put the ears somewhere the eyes are not.
  updateAudioListener(player.pos.x, player.pos.y, player.pos.z,
    camera.rotation.y, camera.rotation.x);

  updateHUD(dt, player.pos);
  postRender();
}

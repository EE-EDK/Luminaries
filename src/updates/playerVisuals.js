// ================================================================
// Player visual updates — light evolution, dimming, camera pan
// ================================================================
// Extracted from main.js animate().

import { Color } from 'three';
import { C, ORB_N, DIMMING_FACTOR, PLAYER_LIGHT_COLORS, PLAYER_LIGHT_INTENSITY, PLAYER_LIGHT_RANGE } from '../constants.js';
import { getLocalGlow } from '../systems/dimming.js';
import { isHumming, isLocked, getResonance, getResonanceType } from '../systems/spiritHum.js';
import { getPlayerFrequency } from '../systems/attunement.js';
import { player } from '../core/player.js';
import { renderer, scene } from '../core/renderer.js';
import { smoothstep } from '../utils/math.js';
import { setSaturation, bloomPass } from '../core/postprocessing.js';
import { playerLight, hemiLight } from '../core/lighting.js';
import { getOrbsFound } from '../quest/questState.js';
import { attuneFlashTimer, attuneFlashType } from '../state/gameState.js';
import { lightningFlash } from '../systems/weather.js';

// Pre-allocated Color objects
const _playerLightColor = new Color(PLAYER_LIGHT_COLORS[0]);
const _playerLightTargetColor = new Color(PLAYER_LIGHT_COLORS[0]);
const _flashCreatureColor = new Color();
const _humLightColor = new Color(C.playerLight);

// Creature glow hex map for flash color effects
const _creatureGlowHex = { puff: C.puffGlow, deer: C.deerGlow, jelly: C.jellyGlow, moth: C.mothGlow };

// Dimming state
let smoothedDimFactor = 0.35;
export function getSmoothedDimFactor() { return smoothedDimFactor; }

// ================================================================
// Constellation camera pan state
// ================================================================
let _camPanActive = false;
let _camPanTimer = 0;
let _camPanTargetYaw = 0;
let _camPanTargetPitch = 0;
let _camPanSavedYaw = 0;
let _camPanSavedPitch = 0;
let _camPanOrbsPrev = 0;
const CAM_PAN_LERP_IN = 2.0;
const CAM_PAN_HOLD = 2.5;
const CAM_PAN_LERP_OUT = 1.5;
const CAM_PAN_TOTAL = CAM_PAN_LERP_IN + CAM_PAN_HOLD + CAM_PAN_LERP_OUT;

/** True while a constellation pan owns the camera (read by the main.js arbiter). */
export function isCameraPanActive() { return _camPanActive; }

// Pre-allocated result for updateCameraPan — avoids a per-frame object literal
const _camPanResult = { active: false, yaw: 0, pitch: 0 };

/**
 * Trigger camera pan toward constellation when a new orb is collected.
 * Called once per frame from animate().
 */
export function triggerCameraPan(orbsFound, yaw, pitch, getConstellationDir) {
  if (orbsFound > _camPanOrbsPrev && orbsFound <= 5) {
    const cDir = getConstellationDir(orbsFound - 1);
    if (cDir) {
      _camPanActive = true;
      _camPanTimer = 0;
      _camPanSavedYaw = yaw;
      _camPanSavedPitch = pitch;
      let targetYaw = Math.atan2(-Math.cos(cDir.theta), -Math.sin(cDir.theta));
      let yawDiff = targetYaw - yaw;
      while (yawDiff > Math.PI) yawDiff -= 2 * Math.PI;
      while (yawDiff < -Math.PI) yawDiff += 2 * Math.PI;
      _camPanTargetYaw = _camPanSavedYaw + yawDiff;
      _camPanTargetPitch = Math.PI / 2 - cDir.phi;
    }
  }
  _camPanOrbsPrev = orbsFound;
}

/**
 * Interpolate the constellation camera pan. Pure: never writes yaw/pitch itself — the
 * single arbiter in animate() owns all writes. Returns { active, yaw, pitch }.
 *
 * `liveYaw`/`livePitch` are the player's current look angles. They are frozen for the
 * pan's duration (input look is suppressed by the arbiter), so the lerp-OUT eases back to
 * the CURRENT live look rather than a value saved at trigger time — no snap on hand-back.
 * Reading live each frame keeps the ease-back correct even if something nudges the look.
 */
export function updateCameraPan(dt, liveYaw, livePitch) {
  if (!_camPanActive) {
    _camPanResult.active = false;
    _camPanResult.yaw = liveYaw;
    _camPanResult.pitch = livePitch;
    return _camPanResult;
  }

  _camPanTimer += dt;
  if (_camPanTimer >= CAM_PAN_TOTAL) {
    _camPanActive = false;
    _camPanResult.active = false;
    _camPanResult.yaw = liveYaw;
    _camPanResult.pitch = livePitch;
    return _camPanResult;
  }

  let t;
  const lerpOutStart = CAM_PAN_LERP_IN + CAM_PAN_HOLD;
  let finalYaw, finalPitch;

  if (_camPanTimer < CAM_PAN_LERP_IN) {
    t = _camPanTimer / CAM_PAN_LERP_IN;
    const ease = smoothstep(t);
    finalYaw = _camPanSavedYaw + (_camPanTargetYaw - _camPanSavedYaw) * ease;
    finalPitch = _camPanSavedPitch + (_camPanTargetPitch - _camPanSavedPitch) * ease;
  } else if (_camPanTimer < lerpOutStart) {
    finalYaw = _camPanTargetYaw;
    finalPitch = _camPanTargetPitch;
  } else {
    t = (_camPanTimer - lerpOutStart) / CAM_PAN_LERP_OUT;
    const ease = smoothstep(t);
    // Shortest-path yaw ease back toward the (frozen) live look.
    let yawDiff = liveYaw - _camPanTargetYaw;
    while (yawDiff > Math.PI) yawDiff -= 2 * Math.PI;
    while (yawDiff < -Math.PI) yawDiff += 2 * Math.PI;
    finalYaw = _camPanTargetYaw + yawDiff * ease;
    finalPitch = _camPanTargetPitch + (livePitch - _camPanTargetPitch) * ease;
  }

  _camPanResult.active = true;
  _camPanResult.yaw = finalYaw;
  _camPanResult.pitch = finalPitch;
  return _camPanResult;
}

/**
 * Update player light color/intensity/range and global dimming.
 * Returns the current dimF for use elsewhere if needed.
 */
export function updatePlayerVisuals(dt, elapsed) {

  // Player light evolution — color/intensity/range scales with orbs
  const _orbsFound = getOrbsFound();
  const orbIdx = Math.min(_orbsFound, ORB_N);
  _playerLightTargetColor.set(PLAYER_LIGHT_COLORS[orbIdx]);
  _playerLightColor.lerp(_playerLightTargetColor, Math.min(2.0 * dt, 1.0));
  playerLight.color.copy(_playerLightColor);
  playerLight.intensity = PLAYER_LIGHT_INTENSITY[orbIdx];
  playerLight.distance = PLAYER_LIGHT_RANGE[orbIdx];

  // Enhancement 4: Player light flare + creature color overlay during attunement flash
  if (attuneFlashTimer > 0 && attuneFlashType) {
    const flashNorm = attuneFlashTimer / 2.5;
    const flareEase = flashNorm * flashNorm;
    playerLight.intensity *= (1.0 + flareEase * 2.0);
    playerLight.distance *= (1.0 + flareEase * 0.5);
    const glowHex = _creatureGlowHex[attuneFlashType];
    if (glowHex) {
      _flashCreatureColor.setHex(glowHex);
      playerLight.color.lerp(_flashCreatureColor, flareEase * 0.6);
    }
  }

  // Global dimming blend
  const localDim = getLocalGlow(player.pos.x, player.pos.z, 1.0);
  const globalRestore = DIMMING_FACTOR + (1.0 - DIMMING_FACTOR) * (_orbsFound / ORB_N);
  const targetDimF = localDim * 0.7 + globalRestore * 0.3;
  smoothedDimFactor += (targetDimF - smoothedDimFactor) * Math.min(8.0 * dt, 1.0);
  const dimF = smoothedDimFactor;

  // Enhancement 1: Bloom pulse + saturation swell during attunement flash
  // Enhancement 5: Fog density dip ("the forest clears")
  const flashActive = attuneFlashTimer > 0;
  const flashNormDim = flashActive ? (attuneFlashTimer / 2.5) : 0;
  const flashEaseDim = flashNormDim * flashNormDim;

  setSaturation(dimF + (flashActive ? flashEaseDim * 0.4 : 0));
  renderer.toneMappingExposure = 0.7 + 2.1 * dimF;
  if (dimF < 1.0) {
    const desatT = 1.0 - dimF;
    const fogFlashMult = flashActive ? (1.0 - flashEaseDim * 0.3) : 1.0;
    scene.fog.density *= (1.0 + 1.5 * desatT) * fogFlashMult;
    hemiLight.intensity *= (0.15 + 0.85 * dimF);
    playerLight.intensity *= (0.1 + 0.9 * dimF);
    playerLight.distance *= (0.25 + 0.75 * dimF);
    const bloomBase = 0.85 + desatT * 0.35;
    if (bloomPass) bloomPass.threshold = bloomBase - (flashActive ? flashEaseDim * 0.55 : 0);
  } else {
    if (flashActive) {
      scene.fog.density *= (1.0 - flashEaseDim * 0.3);
    }
    if (bloomPass) bloomPass.threshold = 0.85 - (flashActive ? flashEaseDim * 0.55 : 0);
  }

  // Lightning flash
  if (lightningFlash > 0) {
    hemiLight.intensity += lightningFlash * 0.8;
    scene.background.r = Math.min(scene.background.r + lightningFlash * 0.08, 0.25);
    scene.background.g = Math.min(scene.background.g + lightningFlash * 0.08, 0.25);
    scene.background.b = Math.min(scene.background.b + lightningFlash * 0.12, 0.35);
  }

  // Spirit hum — player light modulation while humming
  if (isHumming() || isLocked()) {
    const humPulse = 1.0 + 0.15 * Math.sin(elapsed * 4 * Math.PI);
    playerLight.intensity *= humPulse;
    playerLight.distance *= 1.3;
    const _humResNow = getResonance();
    const _humResTypeNow = getResonanceType();
    if (_humResNow > 0.1 && _humResTypeNow) {
      let hcol = C.playerLight;
      switch (_humResTypeNow) {
        case 'deer':  hcol = C.deerGlow;  break;
        case 'moth':  hcol = C.mothGlow;  break;
        case 'jelly': hcol = C.jellyGlow; break;
        case 'puff':  hcol = C.puffGlow;  break;
      }
      _humLightColor.setHex(hcol);
      playerLight.color.lerp(_humLightColor, Math.min(_humResNow * 3 * dt, 1));
    }
  }

  // Player light color shift — tinted by carried creature frequency
  const pFreq = getPlayerFrequency();
  if (pFreq) {
    let tr = 0.4, tg = 0.533, tb = 0.533;
    switch (pFreq) {
      case 'puff': tr = 1.0; tg = 0.667; tb = 0.533; break;
      case 'jelly': tr = 0.4; tg = 0.8; tb = 1.0; break;
      case 'deer': tr = 0.4; tg = 1.0; tb = 0.8; break;
      case 'moth': tr = 0.6; tg = 1.0; tb = 0.5; break;
    }
    playerLight.color.r += (tr - playerLight.color.r) * 2.0 * dt;
    playerLight.color.g += (tg - playerLight.color.g) * 2.0 * dt;
    playerLight.color.b += (tb - playerLight.color.b) * 2.0 * dt;
  } else {
    playerLight.color.r += (0.4 - playerLight.color.r) * 2.0 * dt;
    playerLight.color.g += (0.533 - playerLight.color.g) * 2.0 * dt;
    playerLight.color.b += (0.533 - playerLight.color.b) * 2.0 * dt;
  }
}

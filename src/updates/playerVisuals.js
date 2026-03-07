// ================================================================
// Player visual updates — light evolution, dimming, camera pan
// ================================================================
// Extracted from main.js animate().

import { Color } from 'three';
import { C, ORB_N, DIMMING_FACTOR, PLAYER_LIGHT_COLORS, PLAYER_LIGHT_INTENSITY, PLAYER_LIGHT_RANGE } from '../constants.js';
import { getLocalGlow } from '../systems/dimming.js';
import { isHumming, isLocked, getResonance, getResonanceType } from '../systems/spiritHum.js';
import { getPlayerFrequency } from '../systems/attunement.js';

// Pre-allocated Color objects
const _playerLightColor = new Color(PLAYER_LIGHT_COLORS[0]);
const _playerLightTargetColor = new Color(PLAYER_LIGHT_COLORS[0]);
const _flashCreatureColor = new Color();
const _humLightColor = new Color(0x668888);

// Creature glow hex map for flash color effects
const _creatureGlowHex = { puff: C.puffGlow, deer: C.deerGlow, jelly: C.jellyGlow, moth: C.mothGlow };

// Dimming state
let smoothedDimFactor = 0.35;

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
      _camPanTargetPitch = -(Math.PI / 2 - cDir.phi);
    }
  }
  _camPanOrbsPrev = orbsFound;
}

/**
 * Interpolate camera pan. Returns { yaw, pitch }.
 * If no pan is active, returns the input yaw/pitch unchanged.
 */
export function updateCameraPan(dt, yaw, pitch, setYaw, setPitch) {
  if (!_camPanActive) return { yaw, pitch };

  _camPanTimer += dt;
  if (_camPanTimer >= CAM_PAN_TOTAL) {
    setYaw(_camPanSavedYaw);
    setPitch(_camPanSavedPitch);
    _camPanActive = false;
    return { yaw: _camPanSavedYaw, pitch: _camPanSavedPitch };
  }

  let t;
  const lerpOutStart = CAM_PAN_LERP_IN + CAM_PAN_HOLD;
  let finalYaw, finalPitch;

  if (_camPanTimer < CAM_PAN_LERP_IN) {
    t = _camPanTimer / CAM_PAN_LERP_IN;
    const ease = t * t * (3 - 2 * t);
    finalYaw = _camPanSavedYaw + (_camPanTargetYaw - _camPanSavedYaw) * ease;
    finalPitch = _camPanSavedPitch + (_camPanTargetPitch - _camPanSavedPitch) * ease;
  } else if (_camPanTimer < lerpOutStart) {
    finalYaw = _camPanTargetYaw;
    finalPitch = _camPanTargetPitch;
  } else {
    t = (_camPanTimer - lerpOutStart) / CAM_PAN_LERP_OUT;
    const ease = t * t * (3 - 2 * t);
    finalYaw = _camPanTargetYaw + (_camPanSavedYaw - _camPanTargetYaw) * ease;
    finalPitch = _camPanTargetPitch + (_camPanSavedPitch - _camPanTargetPitch) * ease;
  }

  return { yaw: finalYaw, pitch: finalPitch };
}

/**
 * Update player light color/intensity/range and global dimming.
 * Returns the current dimF for use elsewhere if needed.
 */
export function updatePlayerVisuals(dt, elapsed, ctx) {
  const {
    orbsFound, playerLight, _attuneFlashTimer, _attuneFlashType,
    player, setSaturation, renderer, bloomPass, hemiLight, scene, lightningFlash
  } = ctx;

  // Player light evolution — color/intensity/range scales with orbs
  const orbIdx = Math.min(orbsFound, ORB_N);
  _playerLightTargetColor.set(PLAYER_LIGHT_COLORS[orbIdx]);
  _playerLightColor.lerp(_playerLightTargetColor, Math.min(2.0 * dt, 1.0));
  playerLight.color.copy(_playerLightColor);
  playerLight.intensity = PLAYER_LIGHT_INTENSITY[orbIdx];
  playerLight.distance = PLAYER_LIGHT_RANGE[orbIdx];

  // Enhancement 4: Player light flare + creature color overlay during attunement flash
  if (_attuneFlashTimer > 0 && _attuneFlashType) {
    const flashNorm = _attuneFlashTimer / 2.5;
    const flareEase = flashNorm * flashNorm;
    playerLight.intensity *= (1.0 + flareEase * 2.0);
    playerLight.distance *= (1.0 + flareEase * 0.5);
    const glowHex = _creatureGlowHex[_attuneFlashType];
    if (glowHex) {
      _flashCreatureColor.setHex(glowHex);
      playerLight.color.lerp(_flashCreatureColor, flareEase * 0.6);
    }
  }

  // Global dimming blend
  const localDim = getLocalGlow(player.pos.x, player.pos.z, 1.0);
  const globalRestore = DIMMING_FACTOR + (1.0 - DIMMING_FACTOR) * (orbsFound / ORB_N);
  const targetDimF = localDim * 0.7 + globalRestore * 0.3;
  smoothedDimFactor += (targetDimF - smoothedDimFactor) * Math.min(8.0 * dt, 1.0);
  const dimF = smoothedDimFactor;

  // Enhancement 1: Bloom pulse + saturation swell during attunement flash
  // Enhancement 5: Fog density dip ("the forest clears")
  const flashActive = _attuneFlashTimer > 0;
  const flashNormDim = flashActive ? (_attuneFlashTimer / 2.5) : 0;
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
      let hcol = 0x668888;
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

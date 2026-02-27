import * as THREE from 'three';
import { ORB_N, ORB_TOUCH_R, ORB_SENSE_R, OBELISK_H, OBELISK_RISE_SPEED, JUMP_IMPULSE, FAIRY_RING_R, FAIRY_BOUNCE, BUBBLE_POP_R, WORLD_R, WISP_N, EYE_H, C } from '../constants.js';
import { orbLight } from '../core/lighting.js';
import { keys, touchSprint } from '../core/input.js';
import { sr } from '../utils/rng.js';
import { updateLasers } from './lasers.js';

const _orbGoldColor = new THREE.Color(C.orbGold);
const _whiteColor = new THREE.Color(0xffffff);

// Quest state
export let orbsFound = 0;
export let questPhase = 'SEEK'; // SEEK → RISING → COMPLETE → FINALE
export let obeliskY = -OBELISK_H;
export let finaleTimer = 0;

// References set from main
let orbs = [];
let obeliskGroup = null;
let obeliskMat = null;
let obeliskGlowMat = null;
let moatMesh = null;
let moatMat = null;
let rainbowArcs = [];
let player = null;
let makeLaserFn = null;
let orbHudEl = null;

// Entity arrays for finale gathering
let deers = [], puffs = [], jellies = [], moths = [];

export function initQuest(config) {
  orbs = config.orbs;
  obeliskGroup = config.obeliskGroup;
  obeliskMat = config.obeliskMat;
  obeliskGlowMat = config.obeliskGlowMat;
  moatMesh = config.moatMesh;
  moatMat = config.moatMat;
  rainbowArcs = config.rainbowArcs;
  player = config.player;
  makeLaserFn = config.makeLaser;
  orbHudEl = config.orbHudEl;
  deers = config.deers || [];
  puffs = config.puffs || [];
  jellies = config.jellies || [];
  moths = config.moths || [];
}

export function updateQuest(dt, t) {
  // Orb proximity light — find nearest unfound orb
  let nearestOrb = null, nearestD = Infinity;
  for (let i = 0; i < orbs.length; i++) {
    const o = orbs[i]; if (o.found) continue;
    const dx = o.x - player.pos.x, dz = o.z - player.pos.z;
    const d = dx * dx + dz * dz;
    if (d < nearestD) { nearestD = d; nearestOrb = o; }
  }
  // Proximity light on nearest unfound orb
  if (nearestOrb && nearestD < ORB_SENSE_R * ORB_SENSE_R) {
    const p = Math.sin(t * 2 + nearestOrb.phase) * 0.5 + 0.5;
    orbLight.position.set(nearestOrb.x, 1.0, nearestOrb.z);
    orbLight.intensity = 1.0 + p * 2.0;
    orbLight.distance = ORB_SENSE_R;
  } else {
    orbLight.intensity = 0;
  }

  // Animate all orbs
  for (let i = 0; i < orbs.length; i++) {
    const o = orbs[i];
    if (o.found && !o.flyUp && !o._flashing) continue;

    if (!o.found) {
      const p = Math.sin(t * 1.5 + o.phase) * 0.5 + 0.5;
      o.group.position.y = o.flyY + Math.sin(t * 0.8 + o.phase) * 0.3;
      o.glowMat.opacity = 0.3 + p * 0.4;
      o.hazeMat.opacity = 0.08 + p * 0.12;

      // Proximity glow boost — orb gets brighter when player is near
      const dx = o.x - player.pos.x, dz = o.z - player.pos.z;
      const dist2 = dx * dx + dz * dz;
      const senseR2 = ORB_SENSE_R * ORB_SENSE_R;
      if (dist2 < senseR2) {
        const proximity = 1.0 - Math.sqrt(dist2) / ORB_SENSE_R;
        const glow = proximity * proximity; // quadratic ramp
        o.glowMat.opacity = Math.min(0.3 + p * 0.4 + glow * 0.5, 1.0);
        o.hazeMat.opacity = Math.min(0.08 + p * 0.12 + glow * 0.25, 0.6);
        // White-hot core when close, gold when far
        o.coreMat.color.copy(_whiteColor).lerp(_orbGoldColor, 1.0 - glow);
        // Scale pulse — orb swells slightly when player approaches
        const sc = 1.0 + glow * 0.3;
        o.group.scale.setScalar(sc);
      } else {
        o.group.scale.setScalar(1.0);
      }

      // Rotate sparkle ring
      for (let s = 3; s < o.group.children.length; s++) {
        const ch = o.group.children[s];
        const sa = ((s - 3) / 6) * 6.28 + t * 1.5;
        ch.position.x = Math.cos(sa) * 0.4;
        ch.position.z = Math.sin(sa) * 0.4;
        ch.position.y = Math.sin(sa * 2 + t) * 0.1;
      }

      // Touch detection
      if (dist2 < ORB_TOUCH_R * ORB_TOUCH_R) {
        o.found = true;
        o._flashing = true;
        o._flashTimer = 0;
        o.flyY = o.group.position.y;
        orbsFound++;
        // Update HUD
        const hud = orbHudEl || document.getElementById('orb-hud');
        if (hud) hud.innerHTML = '✦ ' + orbsFound + ' / ' + ORB_N;
        if (questPhase === 'SEEK') questPhase = 'RISING';
      }
    }

    // Flash phase: orb goes super bright, then transitions to fly-up
    if (o._flashing) {
      o._flashTimer += dt;
      const flashFrac = Math.min(o._flashTimer / 1.5, 1); // 1.5s flash
      // Bright white-gold flash
      const flashInt = flashFrac < 0.3 ? flashFrac / 0.3 : (1.0 - (flashFrac - 0.3) / 0.7);
      o.glowMat.opacity = 0.5 + flashInt * 0.5;
      o.hazeMat.opacity = 0.3 + flashInt * 0.5;
      o.group.scale.setScalar(1.0 + flashInt * 0.6);
      // Vibrate
      o.group.position.x = o.x + Math.sin(t * 30) * flashInt * 0.05;
      o.group.position.z = o.z + Math.cos(t * 25) * flashInt * 0.05;

      if (o._flashTimer > 1.5) {
        o._flashing = false;
        o.flyUp = true;
        o.group.position.x = o.x;
        o.group.position.z = o.z;
      }
    }

    if (o.flyUp) {
      const targetY = OBELISK_H + 5;
      o.flyY += (targetY - o.flyY) * dt * 0.8;
      o.group.position.y = o.flyY;
      const frac = Math.min((o.flyY - 1) / (targetY - 1), 1);
      o.group.scale.setScalar(1.0 - frac * 0.6);
      o.glowMat.opacity = 0.8 - frac * 0.5;
      if (o.flyY > targetY - 1 && !o.laserLine) {
        o.flyUp = false;
        o.group.visible = false;
        o.laserLine = makeLaserFn(o.x, o.z, targetY);
      }
    }
  }

  // Obelisk rising
  if (questPhase === 'RISING') {
    if (obeliskY < 0) {
      obeliskY += OBELISK_RISE_SPEED * dt;
      if (obeliskY > 0) obeliskY = 0;
      if (obeliskGroup) obeliskGroup.position.y = obeliskY;
    }
    if (orbsFound >= ORB_N && obeliskY >= 0) {
      questPhase = 'COMPLETE';
      finaleTimer = 0;
    }
  }

  // Obelisk subtle rotation + light intensity
  if (obeliskGroup) {
    obeliskGroup.rotation.y += dt * 0.03;
    const oLight = obeliskGroup.children[obeliskGroup.children.length - 1];
    if (oLight && oLight.isLight) {
      const riseT = Math.max(0, Math.min(1, (obeliskY + OBELISK_H) / OBELISK_H));
      oLight.intensity = riseT * 1.5 * (0.8 + Math.sin(t * 1.5) * 0.2);
    }
  }

  // Animate laser beams (new system)
  updateLasers(dt, t);

  // === FINALE ===
  if (questPhase === 'COMPLETE') {
    finaleTimer += dt;

    const glowRamp = Math.min(finaleTimer / 3, 1);
    if (obeliskMat) obeliskMat.emissiveIntensity = glowRamp * 1.5;
    if (obeliskGlowMat) obeliskGlowMat.emissiveIntensity = glowRamp * 2.5;

    if (finaleTimer > 1 && moatMat) {
      const moatFade = Math.min((finaleTimer - 1) / 4, 1);
      moatMat.opacity = moatFade * 0.6;
      if (moatMesh) {
        if (!moatMesh.visible) moatMesh.visible = true;
        moatMesh.position.y = 0.05 + Math.sin(t * 3) * 0.02 * moatFade;
      }
    }

    if (finaleTimer > 2) {
      for (let i = 0; i < rainbowArcs.length; i++) {
        const delay = i * 0.3;
        const arcFade = Math.min(Math.max((finaleTimer - 2 - delay) / 2, 0), 1);
        if (arcFade > 0 && !rainbowArcs[i].mesh.visible) rainbowArcs[i].mesh.visible = true;
        rainbowArcs[i].mat.opacity = arcFade * 0.55;
        rainbowArcs[i].mesh.rotation.y += dt * 0.1 * (i + 1) * 0.3;
      }
    }

    // Phase 4: All creatures migrate toward center
    if (finaleTimer > 1) {
      const gatherStrength = Math.min((finaleTimer - 1) / 6, 1) * 2.0;
      for (let i = 0; i < deers.length; i++) {
        const d = deers[i], g = d.group;
        const tx = -g.position.x, tz = -g.position.z;
        const dist = Math.sqrt(tx * tx + tz * tz);
        if (dist > 8) {
          d.wanderAng = Math.atan2(-g.position.x, -g.position.z);
          d.state = 'walk'; d.speed = 1.5 * gatherStrength;
          g.position.x += tx / dist * d.speed * dt;
          g.position.z += tz / dist * d.speed * dt;
          g.rotation.y = d.wanderAng;
        } else { d.state = 'pause'; }
      }
      for (let i = 0; i < puffs.length; i++) {
        const p = puffs[i], g = p.group;
        const tx = -g.position.x, tz = -g.position.z;
        const dist = Math.sqrt(tx * tx + tz * tz);
        if (dist > 8) {
          p.wanderAng = Math.atan2(-g.position.x, -g.position.z);
          p.state = 'hop'; p.hopTimer = p.hopTimer % 1.2;
          g.position.x += tx / dist * 1.5 * gatherStrength * dt;
          g.position.z += tz / dist * 1.5 * gatherStrength * dt;
        }
      }
      for (let i = 0; i < jellies.length; i++) {
        const j = jellies[i], g = j.group;
        g.position.x += (0 - g.position.x) * dt * 0.15 * gatherStrength;
        g.position.z += (0 - g.position.z) * dt * 0.15 * gatherStrength;
      }
      for (let i = 0; i < moths.length; i++) {
        const m = moths[i];
        m.centerX += (0 - m.centerX) * dt * 0.2 * gatherStrength;
        m.centerZ += (0 - m.centerZ) * dt * 0.2 * gatherStrength;
        m.orbitR = Math.max(m.orbitR - dt * 0.3 * gatherStrength, 2);
      }
    }

    if (finaleTimer > 10) questPhase = 'FINALE';
  }

  // Sustain finale state
  if (questPhase === 'FINALE') {
    if (obeliskMat) obeliskMat.emissiveIntensity = 1.5 + Math.sin(t * 0.5) * 0.3;
    if (obeliskGlowMat) obeliskGlowMat.emissiveIntensity = 2.5 + Math.sin(t * 0.7) * 0.5;
    if (moatMesh) moatMesh.position.y = 0.05 + Math.sin(t * 3) * 0.02;
    for (let i = 0; i < rainbowArcs.length; i++) {
      rainbowArcs[i].mesh.rotation.y += dt * 0.1 * (i + 1) * 0.3;
      rainbowArcs[i].mat.opacity = 0.45 + Math.sin(t + i) * 0.1;
    }
  }
}

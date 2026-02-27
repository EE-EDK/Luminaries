import * as THREE from 'three';
import { ORB_N, ORB_TOUCH_R, ORB_SENSE_R, OBELISK_H, OBELISK_RISE_SPEED, C } from '../constants.js';
import { orbLight } from '../core/lighting.js';
import { scene, camera } from '../core/renderer.js';
import { sr } from '../utils/rng.js';
import { updateLasers, setLaserFade } from './lasers.js';

const _orbGoldColor = new THREE.Color(C.orbGold);
const _whiteColor = new THREE.Color(0xffffff);

// Quest state
export let orbsFound = 0;
export let questPhase = 'SEEK'; // SEEK → RISING → COMPLETE → FINALE → TRANSFORM
export let obeliskY = -OBELISK_H;
export let finaleTimer = 0;

// References set from main
let orbs = [];
let obeliskGroup = null;
let obeliskMat = null;
let obeliskGlowMat = null;
let pinnacleOrb = null;
let pinnacleRings = [];
let moatMesh = null;
let moatMat = null;
let rainbowArcs = [];
let player = null;
let makeLaserFn = null;
let orbHudEl = null;

// Entity arrays for finale gathering
let deers = [], puffs = [], jellies = [], moths = [];

// World transformation state
let trees = [];
let groundMesh = null;
let finalePhaseTimer = 0;
let transformTimer = 0;
let treeLasers = [];
let flashPlane = null;
let flashMat = null;
let transformDone = false;

// Pinnacle explosion glitter
const GLITTER_COUNT = 200;
let glitterMesh = null;
const glitterParticles = [];
let glitterExploded = false;

function initGlitter() {
  if (glitterMesh) return;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(GLITTER_COUNT * 3);
  const colors = new Float32Array(GLITTER_COUNT * 3);
  const sizes = new Float32Array(GLITTER_COUNT);
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  geo.attributes.position.setUsage(THREE.DynamicDrawUsage);
  geo.attributes.color.setUsage(THREE.DynamicDrawUsage);
  geo.attributes.size.setUsage(THREE.DynamicDrawUsage);

  const mat = new THREE.PointsMaterial({
    size: 0.3, vertexColors: true, transparent: true, opacity: 0.9,
    blending: THREE.AdditiveBlending, depthWrite: false,
    sizeAttenuation: true
  });
  glitterMesh = new THREE.Points(geo, mat);
  glitterMesh.visible = false;
  scene.add(glitterMesh);

  const pinkBase = new THREE.Color(C.obeliskPink);
  const purpleBase = new THREE.Color(0xaa44ff);
  for (let i = 0; i < GLITTER_COUNT; i++) {
    const c = Math.random() < 0.7 ? pinkBase : purpleBase;
    colors[i * 3] = c.r * (0.8 + Math.random() * 0.4);
    colors[i * 3 + 1] = c.g * (0.8 + Math.random() * 0.4);
    colors[i * 3 + 2] = c.b * (0.8 + Math.random() * 0.4);
    sizes[i] = 0.15 + Math.random() * 0.25;
    glitterParticles.push({
      x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: 0,
      life: 0, active: false,
      sparklePhase: Math.random() * 6.28
    });
  }
  geo.attributes.color.needsUpdate = true;
  geo.attributes.size.needsUpdate = true;
}

function explodeGlitter(cx, cy, cz) {
  glitterExploded = true;
  glitterMesh.visible = true;
  for (let i = 0; i < GLITTER_COUNT; i++) {
    const p = glitterParticles[i];
    p.x = cx; p.y = cy; p.z = cz;
    // Burst outward in all directions
    const theta = Math.random() * 6.28;
    const phi = Math.random() * Math.PI;
    const speed = 2 + Math.random() * 5;
    p.vx = Math.sin(phi) * Math.cos(theta) * speed;
    p.vy = Math.cos(phi) * speed * 0.5 + Math.random() * 2;
    p.vz = Math.sin(phi) * Math.sin(theta) * speed;
    p.life = 5 + Math.random() * 6;
    p.active = true;
  }
}

function updateGlitter(dt, t) {
  if (!glitterMesh || !glitterMesh.visible) return;
  const posArr = glitterMesh.geometry.attributes.position.array;
  const sizeArr = glitterMesh.geometry.attributes.size.array;
  let anyActive = false;
  for (let i = 0; i < GLITTER_COUNT; i++) {
    const p = glitterParticles[i];
    if (!p.active) {
      posArr[i * 3 + 1] = -100;
      sizeArr[i] = 0;
      continue;
    }
    anyActive = true;
    p.life -= dt;
    if (p.life <= 0 || p.y < -1) { p.active = false; continue; }
    // Gravity + air resistance
    p.vy -= 1.5 * dt;
    p.vx *= 0.995; p.vz *= 0.995;
    // Flutter
    p.vx += Math.sin(t * 3 + i * 0.7) * 0.3 * dt;
    p.vz += Math.cos(t * 2.5 + i * 1.1) * 0.2 * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.z += p.vz * dt;
    posArr[i * 3] = p.x;
    posArr[i * 3 + 1] = p.y;
    posArr[i * 3 + 2] = p.z;
    // Sparkle size
    const sparkle = Math.sin(t * 6 + p.sparklePhase) * 0.5 + 0.5;
    const fadeFrac = Math.min(p.life / 2, 1);
    sizeArr[i] = (0.15 + sparkle * 0.2) * fadeFrac;
  }
  glitterMesh.geometry.attributes.position.needsUpdate = true;
  glitterMesh.geometry.attributes.size.needsUpdate = true;
  if (!anyActive) glitterMesh.visible = false;
}

export function initQuest(config) {
  orbs = config.orbs;
  obeliskGroup = config.obeliskGroup;
  obeliskMat = config.obeliskMat;
  obeliskGlowMat = config.obeliskGlowMat;
  pinnacleOrb = config.pinnacleOrb;
  pinnacleRings = config.pinnacleRings || [];
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
  trees = config.trees || [];
  groundMesh = config.groundMesh || null;
  initGlitter();
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
        const glow = proximity * proximity;
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
        // Start rising on first orb
        if (questPhase === 'SEEK') questPhase = 'RISING';
      }
    }

    // Flash phase: orb goes super bright, then transitions to fly-up
    if (o._flashing) {
      o._flashTimer += dt;
      const flashFrac = Math.min(o._flashTimer / 1.5, 1);
      const flashInt = flashFrac < 0.3 ? flashFrac / 0.3 : (1.0 - (flashFrac - 0.3) / 0.7);
      o.glowMat.opacity = 0.5 + flashInt * 0.5;
      o.hazeMat.opacity = 0.3 + flashInt * 0.5;
      o.group.scale.setScalar(1.0 + flashInt * 0.6);
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
        // Laser starts from ground level, goes all the way up
        const tipY = getObeliskTipY();
        o.laserLine = makeLaserFn(o.x, o.z, 0, tipY);
      }
    }
  }

  // --- Obelisk incremental rising: one rung per orb ---
  const rungHeight = OBELISK_H / ORB_N;
  const targetObeliskY = -OBELISK_H + orbsFound * rungHeight;
  const isRising = obeliskY < targetObeliskY - 0.01;
  if (isRising) {
    // Rise at 8 units/sec (fast, dramatic per-rung)
    obeliskY += 8 * dt;
    if (obeliskY > targetObeliskY) obeliskY = targetObeliskY;
    if (obeliskGroup) {
      obeliskGroup.position.y = obeliskY;
      // Rumble shake while rising
      obeliskGroup.position.x = Math.sin(t * 25) * 0.04;
      obeliskGroup.position.z = Math.cos(t * 30) * 0.03;
    }
  } else if (obeliskGroup) {
    // Settle back to center when not rising
    obeliskGroup.position.x *= 0.9;
    obeliskGroup.position.z *= 0.9;
  }
  // Transition to COMPLETE when fully risen
  if (orbsFound >= ORB_N && obeliskY >= -0.01 && questPhase === 'RISING') {
    questPhase = 'COMPLETE';
    finaleTimer = 0;
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

  // --- Pinnacle orb + rings animation ---
  if (pinnacleOrb && pinnacleOrb.mesh.visible) {
    const pulse = Math.sin(t * 2) * 0.5 + 0.5;
    pinnacleOrb.mat.opacity = 0.6 + pulse * 0.3;
    pinnacleOrb.hazeMat.opacity = 0.15 + pulse * 0.12;
    // Brighten as more orbs are found
    const orbFrac = orbsFound / ORB_N;
    pinnacleOrb.mat.opacity *= (0.3 + orbFrac * 0.7);
    pinnacleOrb.hazeMat.opacity *= (0.2 + orbFrac * 0.8);
  }
  for (let ri = 0; ri < pinnacleRings.length; ri++) {
    const r = pinnacleRings[ri];
    if (!r.mesh.visible) continue;
    r.mesh.rotation.x += r.rx * dt;
    r.mesh.rotation.y += r.ry * dt;
    r.mesh.rotation.z += r.rz * dt;
    // Rings brighten with orb count
    const orbFrac = orbsFound / ORB_N;
    r.mat.opacity = (0.15 + orbFrac * 0.35) * (0.8 + Math.sin(t * 1.5 + ri) * 0.2);
  }

  // Animate laser beams — pass current obelisk tip Y
  const tipY = getObeliskTipY();
  updateLasers(dt, t, tipY);

  // Fade out orb lasers after pinnacle explosion
  if (questPhase === 'COMPLETE' && finaleTimer > 3) {
    setLaserFade(Math.max(0, 1 - (finaleTimer - 3) / 4));
  } else if (questPhase === 'FINALE' || questPhase === 'TRANSFORM') {
    setLaserFade(0);
  }

  // Update glitter particles
  updateGlitter(dt, t);

  // === FINALE ===
  if (questPhase === 'COMPLETE') {
    finaleTimer += dt;

    const glowRamp = Math.min(finaleTimer / 3, 1);
    if (obeliskMat) obeliskMat.emissiveIntensity = glowRamp * 1.5;
    if (obeliskGlowMat) obeliskGlowMat.emissiveIntensity = glowRamp * 2.5;

    // Pinnacle orb goes super bright then explodes at t=2s
    if (pinnacleOrb && pinnacleOrb.mesh.visible && finaleTimer > 1 && finaleTimer < 3) {
      const brightFrac = Math.min((finaleTimer - 1) / 1.5, 1);
      pinnacleOrb.mat.opacity = 0.9 + brightFrac * 0.1;
      pinnacleOrb.hazeMat.opacity = 0.5 + brightFrac * 0.5;
      pinnacleOrb.mesh.scale.setScalar(1 + brightFrac * 0.5);
      pinnacleOrb.haze.scale.setScalar(1 + brightFrac * 1.0);
      // Rings spin faster
      for (let ri = 0; ri < pinnacleRings.length; ri++) {
        const r = pinnacleRings[ri];
        r.mesh.rotation.x += r.rx * dt * (1 + brightFrac * 4);
        r.mesh.rotation.y += r.ry * dt * (1 + brightFrac * 4);
        r.mesh.rotation.z += r.rz * dt * (1 + brightFrac * 4);
      }
    }
    if (pinnacleOrb && pinnacleOrb.mesh.visible && finaleTimer >= 3 && !glitterExploded) {
      // EXPLODE! Get world position of pinnacle orb
      const worldPos = new THREE.Vector3();
      pinnacleOrb.mesh.getWorldPosition(worldPos);
      explodeGlitter(worldPos.x, worldPos.y, worldPos.z);
      // Hide pinnacle orb and rings
      pinnacleOrb.mesh.visible = false;
      pinnacleOrb.haze.visible = false;
      for (let ri = 0; ri < pinnacleRings.length; ri++) {
        pinnacleRings[ri].mesh.visible = false;
      }
    }

    if (finaleTimer > 3 && moatMat) {
      const moatFade = Math.min((finaleTimer - 3) / 4, 1);
      moatMat.opacity = moatFade * 0.6;
      if (moatMesh) {
        if (!moatMesh.visible) moatMesh.visible = true;
        moatMesh.position.y = 0.05 + Math.sin(t * 3) * 0.02 * moatFade;
      }
    }

    if (finaleTimer > 4) {
      for (let i = 0; i < rainbowArcs.length; i++) {
        const delay = i * 0.3;
        const arcFade = Math.min(Math.max((finaleTimer - 4 - delay) / 2, 0), 1);
        if (arcFade > 0 && !rainbowArcs[i].mesh.visible) rainbowArcs[i].mesh.visible = true;
        rainbowArcs[i].mat.opacity = arcFade * 0.55;
        rainbowArcs[i].mesh.rotation.y += dt * 0.1 * (i + 1) * 0.3;
      }
    }

    // All creatures migrate toward center
    if (finaleTimer > 3) {
      const gatherStrength = Math.min((finaleTimer - 3) / 6, 1) * 2.0;
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

    if (finaleTimer > 12) questPhase = 'FINALE';
  }

  // Sustain finale state
  if (questPhase === 'FINALE') {
    finalePhaseTimer += dt;
    if (obeliskMat) obeliskMat.emissiveIntensity = 1.5 + Math.sin(t * 0.5) * 0.3;
    if (obeliskGlowMat) obeliskGlowMat.emissiveIntensity = 2.5 + Math.sin(t * 0.7) * 0.5;
    if (moatMesh) moatMesh.position.y = 0.05 + Math.sin(t * 3) * 0.02;
    for (let i = 0; i < rainbowArcs.length; i++) {
      rainbowArcs[i].mesh.rotation.y += dt * 0.1 * (i + 1) * 0.3;
      rainbowArcs[i].mat.opacity = 0.45 + Math.sin(t + i) * 0.1;
    }
    // After 30s of finale, begin world transformation
    if (finalePhaseTimer > 30) {
      questPhase = 'TRANSFORM';
      transformTimer = 0;
      initFlashPlane();
    }
  }

  // === WORLD TRANSFORMATION ===
  if (questPhase === 'TRANSFORM') {
    transformTimer += dt;

    // Continue sustaining obelisk/moat/rainbow
    if (obeliskMat) obeliskMat.emissiveIntensity = 1.5 + Math.sin(t * 0.5) * 0.3;
    if (obeliskGlowMat) obeliskGlowMat.emissiveIntensity = 2.5 + Math.sin(t * 0.7) * 0.5;
    if (moatMesh) moatMesh.position.y = 0.05 + Math.sin(t * 3) * 0.02;
    for (let i = 0; i < rainbowArcs.length; i++) {
      rainbowArcs[i].mesh.rotation.y += dt * 0.1 * (i + 1) * 0.3;
      rainbowArcs[i].mat.opacity = 0.45 + Math.sin(t + i) * 0.1;
    }

    // Phase 1: 0-3s — Pink lasers shoot to every tree (staggered)
    if (transformTimer < 3 && treeLasers.length < trees.length) {
      const targetCount = Math.min(
        Math.floor((transformTimer / 3) * trees.length),
        trees.length
      );
      while (treeLasers.length < targetCount) {
        const idx = treeLasers.length;
        const tr = trees[idx];
        const tY = getObeliskTipY();
        const path = new THREE.LineCurve3(
          new THREE.Vector3(0, tY, 0),
          new THREE.Vector3(tr.x, 0, tr.z)
        );
        const tMat = new THREE.MeshBasicMaterial({
          color: C.laserPink, transparent: true, opacity: 0,
          blending: THREE.AdditiveBlending, depthWrite: false
        });
        const tube = new THREE.Mesh(
          new THREE.TubeGeometry(path, 8, 0.04, 4, false), tMat
        );
        scene.add(tube);
        const gMat = new THREE.MeshBasicMaterial({
          color: C.laserGlow, transparent: true, opacity: 0,
          blending: THREE.AdditiveBlending, depthWrite: false
        });
        const glow = new THREE.Mesh(
          new THREE.TubeGeometry(path, 8, 0.12, 4, false), gMat
        );
        scene.add(glow);
        treeLasers.push({ tube, glow, mat: tMat, glowMat: gMat, timer: 0 });
      }
    }

    // Animate tree laser fade-in + pulse
    for (let i = 0; i < treeLasers.length; i++) {
      const tl = treeLasers[i];
      tl.timer += dt;
      const fade = Math.min(tl.timer / 0.5, 1);
      const pulse = Math.sin(t * 3 + i * 0.5) * 0.5 + 0.5;
      tl.mat.opacity = fade * (0.5 + pulse * 0.3);
      tl.glowMat.opacity = fade * (0.15 + pulse * 0.1);
    }

    // Flash sequence: 3s brighten → 4s blind → 3s dim
    let flashOpacity = 0;
    if (transformTimer >= 3 && transformTimer < 6) {
      flashOpacity = (transformTimer - 3) / 3;
    } else if (transformTimer >= 6 && transformTimer < 10) {
      flashOpacity = 1;
      if (!transformDone) {
        transformTreesAndGround();
        transformDone = true;
      }
    } else if (transformTimer >= 10 && transformTimer < 13) {
      flashOpacity = 1 - (transformTimer - 10) / 3;
    }

    if (flashMat) {
      flashMat.opacity = flashOpacity;
      if (flashPlane) flashPlane.visible = flashOpacity > 0.001;
    }
  }
}

// Helper: current world-space Y of obelisk tip
function getObeliskTipY() {
  return obeliskY + OBELISK_H + 3;
}

// Create a full-screen white plane for the blinding flash
function initFlashPlane() {
  if (flashPlane) return;
  flashMat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 0,
    depthTest: false, depthWrite: false
  });
  flashPlane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), flashMat);
  flashPlane.position.z = -0.15;
  flashPlane.renderOrder = 9999;
  flashPlane.frustumCulled = false;
  camera.add(flashPlane);
  if (!camera.parent) scene.add(camera);
}

// Transform all tree materials and ground to pink/purple theme
function transformTreesAndGround() {
  const pinkShades = [
    { color: 0x551430, glow: 0xcc2277, core: 0xff44aa },
    { color: 0x3a1040, glow: 0xaa33bb, core: 0xdd55ff },
    { color: 0x441428, glow: 0xdd3388, core: 0xff66bb },
    { color: 0x2a1050, glow: 0x8833cc, core: 0xbb55ff },
    { color: 0x401830, glow: 0xcc4499, core: 0xff77cc },
  ];

  const darkCyan = new THREE.Color(0x0a3040);
  const darkCyanEmissive = new THREE.Color(0x082838);

  for (let i = 0; i < trees.length; i++) {
    const group = trees[i].group;
    const shade = pinkShades[i % pinkShades.length];
    const processed = new Set();

    group.traverse((child) => {
      if (!child.isMesh || !child.material) return;
      const mat = child.material;
      if (processed.has(mat)) return;
      processed.add(mat);

      const hsl = {};
      mat.color.getHSL(hsl);

      if (hsl.h >= 0.2 && hsl.h <= 0.6 && hsl.s > 0.08) {
        // Green/teal/cyan → pink/purple
        if (hsl.l > 0.45) {
          mat.color.set(shade.core);
        } else if (mat.transparent && mat.opacity < 0.15) {
          mat.color.set(shade.glow);
        } else {
          mat.color.set(shade.color);
        }
        if (mat.emissive) mat.emissive.set(shade.glow);
      } else if (hsl.h < 0.2 && hsl.s > 0.05 && hsl.l > 0.05 && hsl.l < 0.4) {
        // Brown/orange → dark cyan
        mat.color.copy(darkCyan);
        if (mat.emissive) mat.emissive.copy(darkCyanEmissive);
      } else if (hsl.l < 0.06) {
        // Very dark (mound) → dark purple
        mat.color.set(0x0a0818);
      }
    });
  }

  // Transform ground
  if (groundMesh && groundMesh.material) {
    groundMesh.material.emissive.set(0x200840);
    groundMesh.material.emissiveIntensity = 0.3;
    const colorAttr = groundMesh.geometry.attributes.color;
    if (colorAttr) {
      const arr = colorAttr.array;
      for (let i = 0; i < arr.length; i += 3) {
        const r = arr[i], g = arr[i + 1], b = arr[i + 2];
        // Shift greens → purples
        arr[i] = r * 0.5 + b * 0.3;
        arr[i + 1] = g * 0.15;
        arr[i + 2] = b * 0.7 + g * 0.4;
      }
      colorAttr.needsUpdate = true;
    }
  }
}

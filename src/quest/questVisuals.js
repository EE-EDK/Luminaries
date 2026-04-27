// ================================================================
// Quest Visuals — Three.js Rendering & Effects
// ================================================================
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color, DynamicDrawUsage, LineCurve3, Mesh, MeshBasicMaterial, Points, PointsMaterial, TubeGeometry, Vector3 } from 'three';
import { ORB_N, ORB_TOUCH_R, ORB_SENSE_R, OBELISK_H, OBELISK_RISE_SPEED, C } from '../constants.js';
import { orbLight } from '../core/lighting.js';
import { scene } from '../core/renderer.js';
import { sr } from '../utils/rng.js';
import { updateLasers, setLaserFade, cleanupLasers } from './lasers.js';
import { setGroundTransform } from '../world/ground.js';
import { bioGlow } from '../systems/dayNightCycle.js';
import { revealConstellation } from '../world/sky.js';
import { on, emit, Events } from '../kernel/eventBus.js';
import { QuestPhases } from './config.js';
import { getQuestState, getTimers, attemptCollectOrb } from './questState.js';

const _orbGoldColor = new Color(C.orbGold);
const _whiteColor = new Color(C.white);
const _orbActivatedPink = new Color(0xff4fd2);

// References
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

// Audio callbacks (orb collect/reject SFX: event bus → systems/audio.js only)
let playOrbWarbleFn = null;
let playLaserZapFn = null;
let playLaserHumFn = null;
let stopLaserHumsFn = null;
let showOrbRejectHintFn = null;
let showOrbListeningFn = null;

// Phase 2 enhancement callbacks
let spawnOrbBurstFn = null;
let startResonanceDroneFn = null;

// Rune face references
let runeFaces = [];

// Entity arrays for finale gathering
let deers = [], puffs = [], jellies = [], moths = [];

// World transformation state
let trees = [];
let treeMeshesRef = [];
let groundMesh = null;
let treeLasers = [];
let flashPlane = null;
let orbLasersCleaned = false;

// Pinnacle explosion glitter
const GLITTER_COUNT = 200;
let glitterMesh = null;
const glitterParticles = [];
let glitterExploded = false;

function initGlitter() {
  if (glitterMesh) return;
  const geo = new BufferGeometry();
  const positions = new Float32Array(GLITTER_COUNT * 3);
  const colors = new Float32Array(GLITTER_COUNT * 3);
  const sizes = new Float32Array(GLITTER_COUNT);
  geo.setAttribute('position', new BufferAttribute(positions, 3));
  geo.setAttribute('color', new BufferAttribute(colors, 3));
  geo.setAttribute('size', new BufferAttribute(sizes, 1));
  geo.attributes.position.setUsage(DynamicDrawUsage);
  geo.attributes.color.setUsage(DynamicDrawUsage);
  geo.attributes.size.setUsage(DynamicDrawUsage);

  const mat = new PointsMaterial({
    size: 0.3, vertexColors: true, transparent: true, opacity: 0.9,
    blending: AdditiveBlending, depthWrite: false,
    sizeAttenuation: true
  });
  glitterMesh = new Points(geo, mat);
  glitterMesh.visible = false;
  scene.add(glitterMesh);

  const pinkBase = new Color(C.obeliskPink);
  const purpleBase = new Color(C.glitterPurple);
  for (let i = 0; i < GLITTER_COUNT; i++) {
    const c = sr() < 0.7 ? pinkBase : purpleBase;
    colors[i * 3] = c.r * (0.8 + sr() * 0.4);
    colors[i * 3 + 1] = c.g * (0.8 + sr() * 0.4);
    colors[i * 3 + 2] = c.b * (0.8 + sr() * 0.4);
    sizes[i] = 0.15 + sr() * 0.25;
    glitterParticles.push({
      x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: 0,
      life: 0, active: false,
      sparklePhase: sr() * 6.28
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
    const theta = sr() * 6.28;
    const phi = sr() * Math.PI;
    const speed = 2 + sr() * 5;
    p.vx = Math.sin(phi) * Math.cos(theta) * speed;
    p.vy = Math.cos(phi) * speed * 0.5 + sr() * 2;
    p.vz = Math.sin(phi) * Math.sin(theta) * speed;
    p.life = 5 + sr() * 6;
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
    p.vy -= 1.5 * dt;
    p.vx *= 0.995; p.vz *= 0.995;
    p.vx += Math.sin(t * 3 + i * 0.7) * 0.3 * dt;
    p.vz += Math.cos(t * 2.5 + i * 1.1) * 0.2 * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.z += p.vz * dt;
    posArr[i * 3] = p.x;
    posArr[i * 3 + 1] = p.y;
    posArr[i * 3 + 2] = p.z;
    const sparkle = Math.sin(t * 6 + p.sparklePhase) * 0.5 + 0.5;
    const fadeFrac = Math.min(p.life / 2, 1);
    sizeArr[i] = (0.15 + sparkle * 0.2) * fadeFrac;
  }
  glitterMesh.geometry.attributes.position.needsUpdate = true;
  glitterMesh.geometry.attributes.size.needsUpdate = true;
  if (!anyActive) glitterMesh.visible = false;
}

export function initQuestVisuals(config) {
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
  treeMeshesRef = config.treeMeshes || [];
  groundMesh = config.groundMesh || null;
  playOrbWarbleFn = config.playOrbWarble || null;
  playLaserZapFn = config.playLaserZap || null;
  playLaserHumFn = config.playLaserHum || null;
  stopLaserHumsFn = config.stopLaserHums || null;
  showOrbRejectHintFn = config.showOrbRejectHint || null;
  showOrbListeningFn = config.showOrbListening || null;
  spawnOrbBurstFn = config.spawnOrbBurst || null;
  startResonanceDroneFn = config.startResonanceDrone || null;
  runeFaces = config.runeFaces || [];
  initGlitter();

  // Listen to state events
  on(Events.ORB_COLLECTED, onOrbCollected);
  on(Events.ORB_REJECTED, onOrbRejected);
  on(Events.ORB_FLY_START, (d) => { if (playOrbWarbleFn) playOrbWarbleFn(); });
  on(Events.ORB_LASER_START, onOrbLaserStart);
  on(Events.WORLD_TRANSFORMED, transformTreesAndGround);
}

function onOrbCollected(d) {
  if (spawnOrbBurstFn) spawnOrbBurstFn(d.x, orbs[d.orbIndex].group.position.y, d.z);
  if (startResonanceDroneFn) startResonanceDroneFn(d.orbsFound);
  revealConstellation(d.orbsFound - 1);
  
  const hud = orbHudEl || document.getElementById('orb-hud');
  if (hud) hud.innerHTML = '✦ ' + d.orbsFound + ' / ' + ORB_N;

  const faceIdx = d.orbsFound - 1;
  if (faceIdx < runeFaces.length) {
    const face = runeFaces[faceIdx];
    let col = C.obeliskPink;
    if (d.creatureType === 'jelly') col = C.jellyGlow;
    if (d.creatureType === 'puff')  col = C.puffGlow;
    if (d.creatureType === 'deer')  col = C.deerGlow;
    if (d.creatureType === 'moth')  col = C.mothGlow;
    face.mat.color.set(col);
    face.revealed = true;
    face.revealTimer = 0;
    for (let m = 0; m < face.meshes.length; m++) {
      face.meshes[m].visible = true;
    }
  }
  if (d.orbsFound >= ORB_N) revealAllObeliskDetails();
}

function onOrbRejected(d) {
  if (showOrbRejectHintFn) showOrbRejectHintFn();
}

function onOrbLaserStart(d) {
  const o = orbs[d.index];
  const tipY = getObeliskTipY();
  o.laserLine = makeLaserFn(o.x, o.z, 0, tipY);
  if (playLaserZapFn) playLaserZapFn();
  if (playLaserHumFn) playLaserHumFn(o.x, o.z);
}

export function updateQuestVisuals(dt, t, ctx) {
  const state = getQuestState();
  const timers = getTimers();
  const _bio = ctx?.env?.bioGlow !== undefined ? ctx.env.bioGlow : bioGlow;

  // Obelisk Tip Y
  const tipY = getObeliskTipY();

  // Orb proximity light
  let nearestOrb = null, nearestD = Infinity;
  for (let i = 0; i < orbs.length; i++) {
    const o = orbs[i]; if (state.orbs[i].found) continue;
    const dx = o.x - player.pos.x, dz = o.z - player.pos.z;
    const d = dx * dx + dz * dz;
    if (d < nearestD) { nearestD = d; nearestOrb = o; }
  }
  if (nearestOrb && nearestD < ORB_SENSE_R * ORB_SENSE_R) {
    const p = Math.sin(t * 2 + nearestOrb.phase) * 0.5 + 0.5;
    orbLight.position.set(nearestOrb.x, 1.0, nearestOrb.z);
    orbLight.intensity = (1.0 + p * 2.0) * _bio;
    orbLight.distance = ORB_SENSE_R;
  } else {
    orbLight.intensity = 0;
  }

  // Animate all orbs
  for (let i = 0; i < orbs.length; i++) {
    const o = orbs[i];
    const s = state.orbs[i];
    if (s.found && !s.flyUp && !s.flashing) continue;

    if (!s.found) {
      const p = Math.sin(t * 1.5 + o.phase) * 0.5 + 0.5;
      o.group.position.y = o.flyY + Math.sin(t * 0.8 + o.phase) * 0.3;
      o.glowMat.opacity = (0.3 + p * 0.4) * _bio;
      o.hazeMat.opacity = (0.08 + p * 0.12) * _bio;

      const dx = o.x - player.pos.x, dz = o.z - player.pos.z;
      const dist2 = dx * dx + dz * dz;
      const senseR2 = ORB_SENSE_R * ORB_SENSE_R;
      if (dist2 < senseR2) {
        const proximity = 1.0 - dist2 / senseR2;
        const glow = proximity;
        o.glowMat.opacity = Math.min((0.3 + p * 0.4 + glow * 0.5) * _bio, 1.0);
        o.hazeMat.opacity = Math.min((0.08 + p * 0.12 + glow * 0.25) * _bio, 0.6);
        o.coreMat.color.copy(_whiteColor).lerp(_orbGoldColor, 1.0 - glow);
        o.group.scale.setScalar(1.0 + glow * 0.3);
        if (glow > 0.15 && showOrbListeningFn) showOrbListeningFn();
        
        // Attempt collection (logic is in state, visuals triggered by events)
        attemptCollectOrb(i, player.pos);
      } else {
        o.group.scale.setScalar(1.0);
      }

      for (let sc = 3; sc < o.group.children.length; sc++) {
        const ch = o.group.children[sc];
        const sa = ((sc - 3) / 6) * 6.28 + t * 1.5;
        ch.position.x = Math.cos(sa) * 0.4;
        ch.position.z = Math.sin(sa) * 0.4;
        ch.position.y = Math.sin(sa * 2 + t) * 0.1;
      }
    }

    if (s.flashing) {
      const flashFrac = Math.min(s.flashTimer / 1.5, 1);
      const flashInt = flashFrac < 0.3 ? flashFrac / 0.3 : (1.0 - (flashFrac - 0.3) / 0.7);
      o.glowMat.opacity = 0.5 + flashInt * 0.5;
      o.hazeMat.opacity = 0.3 + flashInt * 0.5;
      o.coreMat.color.copy(_orbActivatedPink);
      o.group.scale.setScalar(1.0 + flashInt * 0.6);
      o.group.position.x = o.x + Math.sin(t * 30) * flashInt * 0.05;
      o.group.position.z = o.z + Math.cos(t * 25) * flashInt * 0.05;
    }

    if (s.flyUp) {
      o.group.position.y = s.flyY;
      o.group.position.x = o.x;
      o.group.position.z = o.z;
      const frac = Math.min((s.flyY - 1) / (30 - 1), 1);
      o.group.scale.setScalar(1.0 - frac * 0.6);
      o.glowMat.opacity = 0.8 - frac * 0.5;
      if (s.flyY > 29) o.group.visible = false;
    }
  }

  // Obelisk Rise
  if (obeliskGroup) {
    obeliskGroup.position.y = state.obeliskY;
    // Shake logic could be added here if rising
  }

  // Obelisk subtle rotation
  if (obeliskGroup) {
    obeliskGroup.rotation.y += dt * 0.03;
    const oLight = obeliskGroup.children[obeliskGroup.children.length - 1];
    if (oLight && oLight.isLight) {
      const riseT = Math.max(0, Math.min(1, (state.obeliskY + OBELISK_H) / OBELISK_H));
      oLight.intensity = riseT * 1.5 * (0.8 + Math.sin(t * 1.5) * 0.2);
    }
  }

  // Rune reveal
  for (let fi = 0; fi < runeFaces.length; fi++) {
    const face = runeFaces[fi];
    if (!face.revealed) continue;
    face.revealTimer += dt;
    const fadeIn = Math.min(face.revealTimer / 2.0, 1.0);
    const pulse = Math.sin(t * 1.5 + fi * 1.57) * 0.1 + 0.9;
    face.mat.opacity = fadeIn * 0.85 * pulse;
  }

  // Pinnacle
  if (pinnacleOrb && pinnacleOrb.mesh.visible) {
    const pulse = Math.sin(t * 2) * 0.5 + 0.5;
    const orbFrac = state.orbsFound / ORB_N;
    pinnacleOrb.mat.opacity = (0.6 + pulse * 0.3) * (0.3 + orbFrac * 0.7);
    pinnacleOrb.hazeMat.opacity = (0.15 + pulse * 0.12) * (0.2 + orbFrac * 0.8);
  }
  for (let ri = 0; ri < pinnacleRings.length; ri++) {
    const r = pinnacleRings[ri];
    if (!r.mesh.visible) continue;
    r.mesh.rotation.x += r.rx * dt;
    r.mesh.rotation.y += r.ry * dt;
    r.mesh.rotation.z += r.rz * dt;
    const orbFrac = state.orbsFound / ORB_N;
    r.mat.opacity = (0.15 + orbFrac * 0.35) * (0.8 + Math.sin(t * 1.5 + ri) * 0.2);
  }

  updateLasers(dt, t, tipY);

  if (state.questPhase === QuestPhases.COMPLETE && timers.finale > 3) {
    setLaserFade(Math.max(0, 1 - (timers.finale - 3) / 4));
  } else if (state.questPhase === QuestPhases.FINALE || state.questPhase === QuestPhases.TRANSFORM) {
    setLaserFade(0);
    if (stopLaserHumsFn) { stopLaserHumsFn(); stopLaserHumsFn = null; }
  }

  updateGlitter(dt, t);

  // Finale & Transform visuals
  if (state.questPhase === QuestPhases.COMPLETE) {
    const fT = timers.finale;
    const glowRamp = Math.min(fT / 3, 1);
    if (obeliskMat) obeliskMat.emissiveIntensity = glowRamp * 1.5;
    if (obeliskGlowMat) obeliskGlowMat.emissiveIntensity = glowRamp * 2.5;

    if (pinnacleOrb && pinnacleOrb.mesh.visible && fT > 1 && fT < 3) {
      const brightFrac = Math.min((fT - 1) / 1.5, 1);
      pinnacleOrb.mat.opacity = 0.9 + brightFrac * 0.1;
      pinnacleOrb.hazeMat.opacity = 0.5 + brightFrac * 0.5;
      pinnacleOrb.mesh.scale.setScalar(1 + brightFrac * 0.5);
      pinnacleOrb.haze.scale.setScalar(1 + brightFrac * 1.0);
    }
    if (pinnacleOrb && pinnacleOrb.mesh.visible && fT >= 3 && !glitterExploded) {
      const worldPos = new Vector3();
      pinnacleOrb.mesh.getWorldPosition(worldPos);
      explodeGlitter(worldPos.x, worldPos.y, worldPos.z);
      pinnacleOrb.mesh.visible = false;
      pinnacleOrb.haze.visible = false;
      for (let ri = 0; ri < pinnacleRings.length; ri++) pinnacleRings[ri].mesh.visible = false;
    }

    if (fT > 3 && moatMat) {
      const moatFade = Math.min((fT - 3) / 4, 1);
      moatMat.opacity = moatFade * 0.6;
      if (moatMesh) {
        if (!moatMesh.visible) moatMesh.visible = true;
        moatMesh.position.y = 0.05 + Math.sin(t * 3) * 0.02 * moatFade;
      }
    }

    if (fT > 4) {
      for (let i = 0; i < rainbowArcs.length; i++) {
        const delay = i * 0.3;
        const arcFade = Math.min(Math.max((fT - 4 - delay) / 2, 0), 1);
        if (arcFade > 0 && !rainbowArcs[i].mesh.visible) rainbowArcs[i].mesh.visible = true;
        rainbowArcs[i].mat.opacity = arcFade * 0.55;
        rainbowArcs[i].mesh.rotation.y += dt * 0.1 * (i + 1) * 0.3;
      }
    }

    // Creature Gathering
    if (fT > 3) {
      const gatherStrength = Math.min((fT - 3) / 6, 1) * 2.0;
      gatherCreatures(dt, gatherStrength);
    }
  }

  if (state.questPhase === QuestPhases.FINALE) {
    if (obeliskMat) obeliskMat.emissiveIntensity = 1.5 + Math.sin(t * 0.5) * 0.3;
    if (obeliskGlowMat) obeliskGlowMat.emissiveIntensity = 2.5 + Math.sin(t * 0.7) * 0.5;
    if (moatMesh) moatMesh.position.y = 0.05 + Math.sin(t * 3) * 0.02;
    for (let i = 0; i < rainbowArcs.length; i++) {
      rainbowArcs[i].mesh.rotation.y += dt * 0.1 * (i + 1) * 0.3;
      rainbowArcs[i].mat.opacity = 0.45 + Math.sin(t + i) * 0.1;
    }
    if (timers.finalePhase > 30) {
      initFlashOverlay();
    }
  }

  if (state.questPhase === QuestPhases.TRANSFORM) {
    updateTransformVisuals(dt, t, timers.transform);
  }

  if (state.questPhase === 'FREE_ROAM') {
    if (obeliskMat) obeliskMat.emissiveIntensity = 1.5 + Math.sin(t * 0.5) * 0.3;
    if (obeliskGlowMat) obeliskGlowMat.emissiveIntensity = 2.5 + Math.sin(t * 0.7) * 0.5;
    if (moatMesh) moatMesh.position.y = 0.05 + Math.sin(t * 3) * 0.02;
    for (let i = 0; i < rainbowArcs.length; i++) {
      rainbowArcs[i].mesh.rotation.y += dt * 0.1 * (i + 1) * 0.3;
      rainbowArcs[i].mat.opacity = 0.45 + Math.sin(t + i) * 0.1;
    }
    if (pinnacleOrb && pinnacleOrb.mesh.visible) {
      const pulse = Math.sin(t * 1.5) * 0.5 + 0.5;
      pinnacleOrb.mat.opacity = 0.85 + pulse * 0.15;
      pinnacleOrb.hazeMat.opacity = 0.3 + pulse * 0.2;
    }
    const hud = orbHudEl || document.getElementById('orb-hud');
    if (hud && hud.textContent !== '✦ Luminaries') hud.innerHTML = '✦ Luminaries';
  }
}

function gatherCreatures(dt, gatherStrength) {
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

function updateTransformVisuals(dt, t, transformTimer) {
  if (transformTimer < 3 && treeLasers.length < trees.length) {
    const targetCount = Math.min(Math.floor((transformTimer / 3) * trees.length), trees.length);
    while (treeLasers.length < targetCount) {
      const tr = trees[treeLasers.length];
      const tY = getObeliskTipY();
      const path = new LineCurve3(new Vector3(0, tY, 0), new Vector3(tr.x, 0, tr.z));
      const tMat = new MeshBasicMaterial({ color: C.laserPink, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false });
      const tube = new Mesh(new TubeGeometry(path, 8, 0.06, 4, false), tMat);
      scene.add(tube);
      const gMat = new MeshBasicMaterial({ color: C.laserGlow, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false });
      const glow = new Mesh(new TubeGeometry(path, 8, 0.18, 4, false), gMat);
      scene.add(glow);
      treeLasers.push({ tube, glow, mat: tMat, glowMat: gMat, timer: 0 });
    }
  }

  const fadeLinear = transformTimer >= 13 ? Math.min((transformTimer - 13) / 30, 1) : 0;
  const laserFadeOut = fadeLinear * fadeLinear * (3 - 2 * fadeLinear);
  for (let i = 0; i < treeLasers.length; i++) {
    const tl = treeLasers[i];
    tl.timer += dt;
    const fade = Math.min(tl.timer / 0.5, 1) * (1 - laserFadeOut);
    const pulse = Math.sin(t * 3 + i * 0.5) * 0.5 * (1 - laserFadeOut) + 0.5;
    tl.mat.opacity = fade * (0.6 + pulse * 0.4);
    tl.glowMat.opacity = fade * (0.2 + pulse * 0.15);
  }
  if (fadeLinear >= 1 && treeLasers.length > 0) {
    for (const tl of treeLasers) {
      scene.remove(tl.tube); tl.tube.geometry.dispose(); tl.mat.dispose();
      scene.remove(tl.glow); tl.glow.geometry.dispose(); tl.glowMat.dispose();
    }
    treeLasers.length = 0;
  }
  if (transformTimer >= 13 && !orbLasersCleaned) {
    cleanupLasers();
    orbLasersCleaned = true;
  }

  let flashOpacity = 0;
  if (transformTimer >= 3 && transformTimer < 6) flashOpacity = (transformTimer - 3) / 3;
  else if (transformTimer >= 6 && transformTimer < 10) flashOpacity = 1;
  else if (transformTimer >= 10 && transformTimer < 13) flashOpacity = 1 - (transformTimer - 10) / 3;
  if (flashPlane) flashPlane.style.opacity = flashOpacity;

  if (transformTimer >= 13 && pinnacleOrb && !pinnacleOrb.mesh.visible) {
    pinnacleOrb.mesh.visible = true;
    pinnacleOrb.haze.visible = true;
    pinnacleOrb.mesh.scale.setScalar(1.2);
    pinnacleOrb.haze.scale.setScalar(1.8);
  }
  if (transformTimer >= 13 && pinnacleOrb && pinnacleOrb.mesh.visible) {
    const pulse = Math.sin(t * 1.5) * 0.5 + 0.5;
    pinnacleOrb.mat.opacity = 0.85 + pulse * 0.15;
    pinnacleOrb.hazeMat.opacity = 0.3 + pulse * 0.2;
  }
}

function revealAllObeliskDetails() {
  if (!obeliskGroup) return;
  obeliskGroup.traverse(ch => {
    if (ch.isMesh && !ch.visible) {
      let isRuneMesh = false;
      for (const face of runeFaces) {
        if (face.meshes.includes(ch)) { isRuneMesh = true; break; }
      }
      if (!isRuneMesh) ch.visible = true;
    }
  });
}

function getObeliskTipY() {
  return getQuestState().obeliskY + OBELISK_H + 3;
}

function initFlashOverlay() {
  if (flashPlane) return;
  flashPlane = document.createElement('div');
  flashPlane.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;';
  document.body.appendChild(flashPlane);
}

function transformTreesAndGround() {
  const pinkShades = [
    { color: C.questPink1, glow: C.questPink1Glow, core: C.questPink1Core },
    { color: C.questPink2, glow: C.questPink2Glow, core: C.questPink2Core },
    { color: C.questPink3, glow: C.questPink3Glow, core: C.questPink3Core },
    { color: C.questPink4, glow: C.questPink4Glow, core: C.questPink4Core },
    { color: C.questPink5, glow: C.questPink5Glow, core: C.questPink5Core },
  ];
  for (let i = 0; i < treeMeshesRef.length; i++) {
    const mesh = treeMeshesRef[i];
    const shade = pinkShades[i % pinkShades.length];
    if (mesh.trunkMat) { mesh.trunkMat.color.set(C.transformTrunk); mesh.trunkMat.emissive.set(C.transformTrunkGlow); mesh.trunkMat.emissiveIntensity = 1.2; }
    if (mesh.canopyMat) { mesh.canopyMat.color.set(shade.core); mesh.canopyMat.emissive.set(shade.glow); mesh.canopyMat.emissiveIntensity = 3.5; }
    if (mesh.glowMat) { mesh.glowMat.color.set(shade.glow); mesh.glowMat.emissive.set(shade.glow); mesh.glowMat.emissiveIntensity = 1.2; }
    if (mesh.detailMat) { mesh.detailMat.color.set(shade.color); mesh.detailMat.emissive.set(shade.glow); mesh.detailMat.emissiveIntensity = 1.5; }
  }
  setGroundTransform(1.0);
  if (groundMesh?.material) {
    groundMesh.material.emissive.set(C.transformGroundGlow);
    groundMesh.material.emissiveIntensity = 1.0;
    const colorAttr = groundMesh.geometry.attributes.color;
    if (colorAttr) {
      const arr = colorAttr.array;
      for (let i = 0; i < arr.length; i += 3) {
        const r = arr[i], g = arr[i+1], b = arr[i+2];
        arr[i] = r * 0.45 + b * 0.25 + g * 0.10;
        arr[i+1] = g * 0.10;
        arr[i+2] = b * 0.6 + g * 0.45 + r * 0.10;
      }
      colorAttr.needsUpdate = true;
    }
  }
}

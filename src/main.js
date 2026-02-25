// ================================================================
// Luminaries — Main Entry Point
// ================================================================
import * as THREE from 'three';

// Core systems
import { renderer, camera, clock, scene } from './core/renderer.js';
import { render as postRender } from './core/postprocessing.js';
import { initCrystalLights, crystalLights, playerLight, orbLight, moon, hemiLight, moon2 } from './core/lighting.js';
import { keys, yaw, pitch, started, setGoCallback, setStarted, touchSprint, touchJump } from './core/input.js';
import { GEO } from './core/geometries.js';

// Constants
import {
  WORLD_R, EYE_H, TREE_N, MUSH_N, CRYSTAL_N, JELLY_N, PUFF_N, DEER_N, MOTH_N,
  GRASS_PATCHES, FERN_N, FLOWER_N, REED_N, ROCK_N, WISP_N, DANDELION_N,
  FAIRY_RING_N, BUBBLE_N, POND_N, ORB_N, STARMOTE_N, C,
  FAIRY_RING_R, FAIRY_BOUNCE, BUBBLE_POP_R, JUMP_IMPULSE, DEER_FLEE_R, DEER_FLEE_SPEED_MULT
} from './constants.js';

// Utils
import { sr } from './utils/rng.js';

// World
import { createGround } from './world/ground.js';
import { createSkyDome, skyGroup, updateSky } from './world/sky.js';

// Player
import { player, updatePlayer, cameraBobY, playerIdleTime, setCollisionData, setDustBurstFn } from './core/player.js';

// Entities — Flora
import { makeTree } from './entities/flora/trees.js';
import { makeMush } from './entities/flora/mushrooms.js';
import { makeCrystal } from './entities/flora/crystals.js';
import { makeGrassPatch } from './entities/flora/grass.js';
import { makeFern } from './entities/flora/ferns.js';
import { makeFlower } from './entities/flora/flowers.js';
import { makeReed } from './entities/flora/reeds.js';
import { makeDandelion, updateDandelions } from './entities/flora/dandelions.js';

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
import { makeRock } from './entities/world/rocks.js';
import { makeObelisk, getObeliskGroup, getObeliskMat, getObeliskGlowMat } from './entities/world/obelisk.js';
import { makeMoat, getMoatMesh, getMoatMat } from './entities/world/moat.js';
import { makeRainbows, rainbowArcs } from './entities/world/rainbows.js';

// Particles
import { initFlies, spawnFly, updateFlies } from './particles/fireflies.js';
import { initSpores, spawnSpore, updateSpores } from './particles/spores.js';
import { initStarMotes, updateStarMotes } from './particles/starMotes.js';
import { initDustMotes, spawnDustBurst } from './particles/dust.js';
import { initDandSeeds, updateDandSeeds } from './particles/seeds.js';
import { initBubblePops, spawnBubblePop, updateBubblePops } from './particles/bubblePops.js';
import { updateDustMotes } from './particles/dust.js';

// Quest
import { initQuest, updateQuest, questPhase, orbsFound } from './quest/questManager.js';
import { makeLaser } from './quest/lasers.js';

// Systems
import { initDayNight, updateDayNight, bioGlow } from './systems/dayNightCycle.js';
import { initWeather, updateWeather, windX, windZ, windStrength, lightningFlash, isStorming } from './systems/weather.js';
import { initRain, updateRain } from './particles/rain.js';

// UI
import { initHUD, updateHUD } from './ui/hud.js';
import { initOverlay, getOrbHudEl, showGame } from './ui/overlay.js';

// ================================================================
// Entity arrays
// ================================================================
const trees_data = [];
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

// ================================================================
// Echo bloom state
// ================================================================
let echoBloomTimer = 0;
let echoBloomCenter = null;
let echoBloomRadius = 0;

// ================================================================
// Populate world
// ================================================================
function populate() {
  // Trees
  for (let i = 0; i < TREE_N; i++) {
    let x, z, ok = false;
    for (let a = 0; a < 20; a++) {
      const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R - 10);
      x = Math.cos(ang) * d; z = Math.sin(ang) * d; ok = true;
      for (let j = 0; j < trees_data.length; j++) {
        const dx = trees_data[j].x - x, dz = trees_data[j].z - z;
        if (dx * dx + dz * dz < 9) { ok = false; break; }
      }
      if (ok) break;
    }
    if (ok) { const g = makeTree(x, z); trees_data.push({ group: g, x: x, z: z }); }
  }
  // Mushrooms near trees
  for (let i = 0; i < MUSH_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const ang = sr() * 6.28, d = 1 + sr() * 4;
    mush_data.push(makeMush(ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d));
  }
  // Crystals
  for (let i = 0; i < CRYSTAL_N; i++) {
    const ang = sr() * 6.28, d = 8 + sr() * WORLD_R * 0.6;
    crys_data.push(makeCrystal(Math.cos(ang) * d, Math.sin(ang) * d));
  }
  // Jellies
  for (let i = 0; i < JELLY_N; i++) {
    const ang = sr() * 6.28, d = 10 + sr() * WORLD_R * 0.5;
    jellies.push(makeJelly(Math.cos(ang) * d, 3 + sr() * 5, Math.sin(ang) * d));
  }
  // Pufflings
  for (let i = 0; i < PUFF_N; i++) {
    const ref = mush_data[Math.floor(sr() * mush_data.length)];
    const ang = sr() * 6.28, d = 1 + sr() * 5;
    puffs.push(makePuff(ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d));
  }
  // Spirit Deer
  for (let i = 0; i < DEER_N; i++) {
    const ang = sr() * 6.28, d = 12 + sr() * WORLD_R * 0.5;
    deers.push(makeDeer(Math.cos(ang) * d, Math.sin(ang) * d));
  }
  // Moths
  for (let i = 0; i < MOTH_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    moths.push(makeMoth(ref.x, 2 + sr() * 4, ref.z));
  }
  // Grass patches
  for (let i = 0; i < GRASS_PATCHES; i++) {
    const ang = sr() * 6.28, d = 2 + sr() * (WORLD_R * 0.9);
    grassPatches.push(makeGrassPatch(Math.cos(ang) * d, Math.sin(ang) * d, 2 + sr() * 2.5, 25 + Math.floor(sr() * 20)));
  }
  // Rocks
  for (let i = 0; i < ROCK_N; i++) {
    let rx, rz, ok4 = false;
    for (let a = 0; a < 10; a++) {
      const ang = sr() * 6.28, d = 3 + sr() * (WORLD_R * 0.85);
      rx = Math.cos(ang) * d; rz = Math.sin(ang) * d; ok4 = true;
      for (let j = 0; j < trees_data.length; j++) {
        const ddx = trees_data[j].x - rx, ddz = trees_data[j].z - rz;
        if (ddx * ddx + ddz * ddz < 4) { ok4 = false; break; }
      }
      if (ok4) break;
    }
    if (ok4) rocks_data.push(makeRock(rx, rz));
  }
  // Ferns
  for (let i = 0; i < FERN_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const ang = sr() * 6.28, d = 1 + sr() * 5;
    ferns.push(makeFern(ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d));
  }
  // Flowers
  for (let i = 0; i < FLOWER_N; i++) {
    const ang = sr() * 6.28, d = 3 + sr() * (WORLD_R * 0.7);
    flowers.push(makeFlower(Math.cos(ang) * d, Math.sin(ang) * d));
  }
  // Reeds
  for (let i = 0; i < REED_N; i++) {
    const ang = sr() * 6.28, d = 4 + sr() * (WORLD_R * 0.8);
    reeds.push(makeReed(Math.cos(ang) * d, Math.sin(ang) * d));
  }
  // Golden orbs
  for (let i = 0; i < ORB_N; i++) {
    let ox, oz, ok = false;
    for (let a = 0; a < 30; a++) {
      const ang = sr() * 6.28, d = 20 + sr() * (WORLD_R * 0.6);
      ox = Math.cos(ang) * d; oz = Math.sin(ang) * d; ok = true;
      for (let j = 0; j < orbs.length; j++) {
        const ddx = orbs[j].x - ox, ddz = orbs[j].z - oz;
        if (ddx * ddx + ddz * ddz < 225) { ok = false; break; }
      }
      if (ok) break;
    }
    if (ok) orbs.push(makeOrb(ox, oz));
  }
  // Wisps
  for (let i = 0; i < WISP_N; i++) {
    const wa = sr() * 6.28, wd = 2 + sr() * 3;
    wisps.push(makeWisp(Math.cos(wa) * wd, 1.0 + sr() * 0.5, Math.sin(wa) * wd));
  }
  // Dandelions
  for (let i = 0; i < DANDELION_N; i++) {
    const ang = sr() * 6.28, d = 4 + sr() * (WORLD_R * 0.7);
    dandelions.push(makeDandelion(Math.cos(ang) * d, Math.sin(ang) * d));
  }
  // Fairy rings
  for (let i = 0; i < FAIRY_RING_N; i++) {
    let fx, fz, ok2 = false;
    for (let a = 0; a < 20; a++) {
      const ang = sr() * 6.28, d = 10 + sr() * (WORLD_R * 0.6);
      fx = Math.cos(ang) * d; fz = Math.sin(ang) * d; ok2 = true;
      for (let j = 0; j < trees_data.length; j++) {
        const ddx = trees_data[j].x - fx, ddz = trees_data[j].z - fz;
        if (ddx * ddx + ddz * ddz < 36) { ok2 = false; break; }
      }
      if (ok2) break;
    }
    if (ok2) fairyRings.push(makeFairyRing(fx, fz));
  }
  // Bubbles
  for (let i = 0; i < BUBBLE_N; i++) {
    const ang = sr() * 6.28, d = 5 + sr() * WORLD_R * 0.6;
    bubbles.push(makeBubble(Math.cos(ang) * d, 0.5 + sr() * 5, Math.sin(ang) * d));
  }
  // Ponds
  for (let i = 0; i < POND_N; i++) {
    let px, pz, ok3 = false;
    for (let a = 0; a < 20; a++) {
      const ang = sr() * 6.28, d = 8 + sr() * (WORLD_R * 0.6);
      px = Math.cos(ang) * d; pz = Math.sin(ang) * d; ok3 = true;
      for (let j = 0; j < trees_data.length; j++) {
        const ddx = trees_data[j].x - px, ddz = trees_data[j].z - pz;
        if (ddx * ddx + ddz * ddz < 16) { ok3 = false; break; }
      }
      if (ok3) break;
    }
    if (ok3) ponds.push(makePond(px, pz));
  }
}

// ================================================================
// Update functions (vegetation, creatures, entities)
// ================================================================

function updateVegetation(dt, t) {
  const wAmp = 1.0 + windStrength * 1.5; // wind amplifies sway
  const wLeanX = windX * 0.03; // directional lean
  const wLeanZ = windZ * 0.03;
  for (let i = 0; i < grassPatches.length; i++) {
    const gp = grassPatches[i];
    const sway = (Math.sin(t * 0.7 + gp.cx * 0.05) * 0.04 + Math.sin(t * 1.3 + gp.cz * 0.08) * 0.02) * wAmp;
    gp.mesh.rotation.z = sway + wLeanX;
    gp.mesh.rotation.x = Math.sin(t * 0.9 + gp.cz * 0.06) * 0.03 * wAmp + wLeanZ;
  }
  for (let i = 0; i < ferns.length; i++) {
    const f = ferns[i];
    f.group.rotation.z = Math.sin(t * 0.8 + f.phase) * 0.03 * wAmp + wLeanX;
    f.group.rotation.x = Math.sin(t * 0.6 + f.phase + 1) * 0.02 * wAmp + wLeanZ;
  }
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    const p = Math.sin(t * 1.0 + fl.phase) * 0.5 + 0.5;
    fl.petalMat.emissiveIntensity = (0.3 + p * 0.5) * bioGlow;
    fl.group.rotation.z = Math.sin(t * 0.9 + fl.phase) * 0.04 * wAmp + wLeanX * 0.5;
  }
  for (let i = 0; i < reeds.length; i++) {
    const r = reeds[i];
    r.group.rotation.z = Math.sin(t * 1.1 + r.phase) * r.swayAmp * wAmp + wLeanX;
    r.group.rotation.x = Math.sin(t * 0.8 + r.phase + 2) * r.swayAmp * 0.5 * wAmp + wLeanZ;
  }
}

function updateJellies(dt, t) {
  for (let i = 0; i < jellies.length; i++) {
    const j = jellies[i];
    j.driftAng += dt * 0.15;
    const radius = 8 + Math.sin(t * 0.1 + j.phase) * 4;
    const tx = j.homeX + Math.cos(j.driftAng) * radius;
    const tz = j.homeZ + Math.sin(j.driftAng) * radius;
    const g = j.group;
    g.position.x += (tx - g.position.x) * dt * 0.3;
    g.position.z += (tz - g.position.z) * dt * 0.3;
    g.position.y = j.floatY + Math.sin(t * j.wobble + j.phase) * 1.5;
    const p = Math.sin(t * 1.2 + j.phase) * 0.5 + 0.5;
    j.bellMat.emissiveIntensity = (0.4 + p * 0.8) * bioGlow;
    j.bellMat.opacity = 0.35 + p * 0.25;
    g.rotation.y += dt * 0.2;
    for (let ti = 2; ti < g.children.length; ti++) {
      g.children[ti].rotation.x = Math.sin(t * 2 + ti + j.phase) * 0.15;
      g.children[ti].rotation.z = Math.sin(t * 1.5 + ti * 0.7 + j.phase) * 0.1;
    }
  }
}

function updatePuffs(dt, t) {
  for (let i = 0; i < puffs.length; i++) {
    const p = puffs[i], g = p.group;
    if (p.state === 'idle') {
      p.idleTimer -= dt;
      g.position.y = Math.sin(t * 2 + p.phase) * 0.02;
      g.rotation.y += Math.sin(t * 0.5 + p.phase) * dt * 0.3;
      if (p.idleTimer <= 0) {
        p.state = 'hop'; p.wanderAng += ((Math.random() - 0.5) * 1.5); p.hopTimer = 0;
      }
    } else {
      p.hopTimer += dt;
      const hopDur = 1.2;
      const frac = p.hopTimer / hopDur;
      if (frac >= 1.0) {
        p.state = 'idle'; p.idleTimer = 1.5 + Math.random() * 3; g.position.y = 0;
      } else {
        g.position.y = Math.sin(frac * Math.PI) * 0.3;
        g.position.x += Math.sin(p.wanderAng) * p.speed * dt;
        g.position.z += Math.cos(p.wanderAng) * p.speed * dt;
        const sq = 1.0 - Math.sin(frac * Math.PI) * 0.15;
        const st = 1.0 + Math.sin(frac * Math.PI) * 0.2;
        g.scale.set(sq, st, sq);
        g.rotation.y = p.wanderAng;
      }
      const d = Math.sqrt(g.position.x * g.position.x + g.position.z * g.position.z);
      if (d > WORLD_R * 0.85) p.wanderAng += Math.PI;
    }
  }
}

function updateDeers(dt, t) {
  for (let i = 0; i < deers.length; i++) {
    const d = deers[i], g = d.group;
    const dx = g.position.x - player.pos.x, dz = g.position.z - player.pos.z;
    const pDist = Math.sqrt(dx * dx + dz * dz);
    if (pDist < DEER_FLEE_R) {
      d.wanderAng = Math.atan2(dx, dz); d.state = 'flee'; d.fleeTimer = 2.0 + Math.random() * 1.5;
    }
    let moveSpeed = d.speed;
    let isMoving = false;
    if (d.state === 'flee') {
      d.fleeTimer -= dt; moveSpeed = d.speed * DEER_FLEE_SPEED_MULT; isMoving = true;
      if (d.fleeTimer <= 0) { d.state = 'walk'; d.walkTimer = 0; }
    } else if (d.state === 'pause') {
      d.pauseTimer -= dt;
      if (d.pauseTimer <= 0) { d.state = 'walk'; d.wanderAng += (Math.random() - 0.5) * 0.8; }
    } else {
      d.walkTimer += dt; isMoving = true;
      if (d.walkTimer > 4 + Math.random() * 5) {
        d.state = 'pause'; d.pauseTimer = 2.5 + Math.random() * 4; d.walkTimer = 0;
      }
    }
    if (isMoving) {
      g.position.x += Math.sin(d.wanderAng) * moveSpeed * dt;
      g.position.z += Math.cos(d.wanderAng) * moveSpeed * dt;
      g.rotation.y = d.wanderAng;
      d.legCycle += dt * moveSpeed * 5;
      g.position.y = Math.abs(Math.sin(d.legCycle)) * 0.02;
    }
    const dist = Math.sqrt(g.position.x * g.position.x + g.position.z * g.position.z);
    if (dist > WORLD_R * 0.85) d.wanderAng += Math.PI * 0.8;
    // Joint animation
    const legAmp = isMoving ? (d.state === 'flee' ? 0.45 : 0.3) : 0.02;
    for (let li = 0; li < d.legPivots.length; li++) {
      const lp = d.legPivots[li];
      const phase = (lp.isFront === (lp.side < 0)) ? 0 : Math.PI;
      const swing = Math.sin(d.legCycle + phase) * legAmp;
      lp.upper.rotation.x = swing;
      lp.lower.rotation.x = Math.max(0, Math.sin(d.legCycle + phase - 0.5)) * legAmp * 0.6;
    }
    if (d.neckPivot) {
      if (d.state === 'pause') {
        d.headLook += (Math.sin(t * 0.4 + d.phase) * 0.003) * 60 * dt;
        d.neckPivot.rotation.y = Math.sin(t * 0.3 + d.phase) * 0.25;
        d.neckPivot.rotation.x = Math.sin(t * 0.5 + d.phase * 2) * 0.08 - 0.05;
      } else if (d.state === 'flee') {
        d.neckPivot.rotation.x = -0.15; d.neckPivot.rotation.y = 0;
      } else {
        d.neckPivot.rotation.x = Math.sin(d.legCycle * 0.5) * 0.06 - 0.02;
        d.neckPivot.rotation.y = Math.sin(d.legCycle * 0.25) * 0.05;
      }
    }
    if (d.tailPivot) {
      const tailSpeed = d.state === 'flee' ? 3 : 0.8;
      d.tailPivot.rotation.x = 0.5 + Math.sin(t * tailSpeed + d.phase) * 0.15;
      d.tailPivot.rotation.z = Math.sin(t * tailSpeed * 0.7 + d.phase) * 0.1;
    }
    const pulse = Math.sin(t * 0.8 + d.phase) * 0.5 + 0.5;
    d.mat.emissiveIntensity = (0.3 + pulse * 0.4) * bioGlow;
    d.mat.opacity = 0.55 + pulse * 0.2;
  }
}

function updateMoths(dt, t) {
  for (let i = 0; i < moths.length; i++) {
    const m = moths[i], g = m.group;
    m.orbitAng += dt * 0.4;
    const tx = m.centerX + Math.cos(m.orbitAng) * m.orbitR;
    const tz = m.centerZ + Math.sin(m.orbitAng) * m.orbitR;
    g.position.x += (tx - g.position.x) * dt * 1.5;
    g.position.z += (tz - g.position.z) * dt * 1.5;
    g.position.y = m.floatY + Math.sin(t * 0.7 + m.phase) * 0.8;
    g.rotation.y = m.orbitAng + Math.PI / 2;
    const flap = Math.sin(t * m.flapSpeed + m.phase) * 0.4;
    for (let w = 0; w < g._wingPivots.length; w++) {
      const wp = g._wingPivots[w];
      wp.pivot.rotation.z = flap * wp.side;
    }
    const pulse = Math.sin(t * 1.5 + m.phase) * 0.5 + 0.5;
    m.wingMat.emissiveIntensity = (0.5 + pulse * 0.6) * bioGlow;
    m.wingMat.opacity = 0.45 + pulse * 0.25;
  }
}

function updateWisps(dt, t) {
  const sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
  let guideOrb = null;
  if (playerIdleTime > 5 && (questPhase === 'SEEK' || questPhase === 'RISING')) {
    let bestD = Infinity;
    for (let oi = 0; oi < orbs.length; oi++) {
      if (orbs[oi].found) continue;
      const odx = orbs[oi].x - player.pos.x, odz = orbs[oi].z - player.pos.z;
      const od2 = odx * odx + odz * odz;
      if (od2 < bestD) { bestD = od2; guideOrb = orbs[oi]; }
    }
  }
  for (let i = 0; i < wisps.length; i++) {
    const w = wisps[i];
    const orbitAng = t * 0.5 + w.phase + (i / WISP_N) * 6.28;
    const orbitR = sprinting ? 4 + i * 2 : 1.5 + i * 0.8;
    const orbitY = sprinting ? 3 + i : 1.2 + Math.sin(t * 0.7 + w.phase) * 0.5;
    w.targetX = player.pos.x + Math.cos(orbitAng) * orbitR;
    w.targetY = player.pos.y - EYE_H + orbitY;
    w.targetZ = player.pos.z + Math.sin(orbitAng) * orbitR;
    if (i === 0 && guideOrb) {
      const guideFrac = Math.min((playerIdleTime - 5) / 3, 0.6);
      w.targetX += (guideOrb.x - player.pos.x) * guideFrac;
      w.targetZ += (guideOrb.z - player.pos.z) * guideFrac;
      w.targetY += 0.5;
    }
    const followRate = sprinting ? 0.8 : 2.5;
    w.velX += (w.targetX - w.group.position.x) * followRate * dt;
    w.velY += (w.targetY - w.group.position.y) * followRate * dt;
    w.velZ += (w.targetZ - w.group.position.z) * followRate * dt;
    w.velX *= 0.92; w.velY *= 0.92; w.velZ *= 0.92;
    w.group.position.x += w.velX * dt * 4;
    w.group.position.y += w.velY * dt * 4;
    w.group.position.z += w.velZ * dt * 4;
    const p = Math.sin(t * 2 + w.phase) * 0.5 + 0.5;
    w.glowMat.opacity = 0.3 + p * 0.4;
    w.hazeMat.opacity = 0.08 + p * 0.12;
    const ch = w.group.children[3];
    const sa = t * 3 + w.phase;
    ch.position.set(Math.cos(sa) * 0.18, Math.sin(sa * 1.5) * 0.06, Math.sin(sa) * 0.18);
  }
}

function updateFairyRings(dt, t) {
  for (let i = 0; i < fairyRings.length; i++) {
    const fr = fairyRings[i];
    const dx = fr.x - player.pos.x, dz = fr.z - player.pos.z;
    const dist2 = dx * dx + dz * dz;
    const inRing = dist2 < (FAIRY_RING_R + 0.5) * (FAIRY_RING_R + 0.5);
    const targetGlow = inRing ? 1.0 : 0.0;
    fr.glowIntensity += (targetGlow - fr.glowIntensity) * dt * 3;
    fr.discMat.opacity = fr.glowIntensity * 0.25 * (0.6 + Math.sin(t * 2 + fr.phase) * 0.4);
    fr.mushMat.emissiveIntensity = (0.2 + fr.glowIntensity * 0.8) * bioGlow;
    if (inRing && player.vel.y > 0 && player.vel.y <= JUMP_IMPULSE + 0.5) {
      player.vel.y = JUMP_IMPULSE + FAIRY_BOUNCE;
      fr.glowIntensity = 1.5;
    }
  }
}

function updateBubbles(dt, t) {
  for (let i = 0; i < bubbles.length; i++) {
    const b = bubbles[i];
    if (b.popped) {
      b.popTimer -= dt;
      if (b.popTimer <= 0) {
        b.popped = false; b.group.visible = true;
        const a = sr() * 6.28, d = 8 + sr() * WORLD_R * 0.5;
        b.homeX = Math.cos(a) * d; b.homeZ = Math.sin(a) * d;
        b.floatY = 0.5 + sr() * 4;
        b.group.position.set(b.homeX, b.floatY, b.homeZ);
      }
      continue;
    }
    b.driftAng += dt * 0.2;
    const tx = b.homeX + Math.sin(b.driftAng) * 3;
    const tz = b.homeZ + Math.cos(b.driftAng * 0.7) * 3;
    b.group.position.x += (tx - b.group.position.x) * dt * 0.5;
    b.group.position.z += (tz - b.group.position.z) * dt * 0.5;
    b.group.position.y = b.floatY + Math.sin(t * 0.6 + b.phase) * b.bobAmp;
    const hue = (t * 0.1 + b.phase) % 1;
    b.shellMat.color.setRGB(
      Math.sin(hue * 6.28) * 0.15 + 0.7,
      Math.sin(hue * 6.28 + 2.09) * 0.15 + 0.7,
      Math.sin(hue * 6.28 + 4.19) * 0.15 + 0.8
    );
    b.shellMat.opacity = 0.18 + Math.sin(t * 1.5 + b.phase) * 0.08;
    const bdx = b.group.position.x - player.pos.x;
    const bdy = b.group.position.y - player.pos.y;
    const bdz = b.group.position.z - player.pos.z;
    if (bdx * bdx + bdy * bdy + bdz * bdz < BUBBLE_POP_R * BUBBLE_POP_R * b.sc * b.sc) {
      b.popped = true; b.popTimer = 8 + Math.random() * 8;
      b.group.visible = false;
      spawnBubblePop(b.group.position.x, b.group.position.y, b.group.position.z, 6);
    }
  }
}

function updatePonds(dt, t) {
  for (let i = 0; i < ponds.length; i++) {
    const po = ponds[i];
    for (let j = 0; j < po.pads.length; j++) {
      po.pads[j].mesh.position.y = 0.05 + Math.sin(t * 0.8 + po.pads[j].phase) * 0.015;
    }
    po.waterMat.emissiveIntensity = (0.15 + Math.sin(t * 1.0 + po.phase) * 0.1) * bioGlow;
    const fp = Math.sin(t * 1.2 + po.phase) * 0.5 + 0.5;
    po.flMat.emissiveIntensity = (0.3 + fp * 0.5) * bioGlow;
  }
}

function updateEchoBloom(dt, t) {
  echoBloomTimer -= dt;
  if (echoBloomTimer <= 0) {
    echoBloomTimer = 0.5;
    for (let i = 0; i < crys_data.length; i++) {
      const c = crys_data[i];
      const dx = c.x - player.pos.x, dz = c.z - player.pos.z;
      if (dx * dx + dz * dz < 36) {
        echoBloomCenter = { x: c.x, z: c.z }; echoBloomRadius = 0; break;
      }
    }
  }
  if (!echoBloomCenter) return;
  echoBloomRadius += dt * 12;
  if (echoBloomRadius > 30) { echoBloomCenter = null; echoBloomRadius = 0; return; }
  const wave = echoBloomRadius;
  const waveW = 4.0;
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const dx = m.x - echoBloomCenter.x, dz = m.z - echoBloomCenter.z;
    const d = Math.sqrt(dx * dx + dz * dz);
    if (Math.abs(d - wave) < waveW) {
      const waveFrac = 1 - Math.abs(d - wave) / waveW;
      m.capMat.emissiveIntensity = Math.max(m.capMat.emissiveIntensity, (m.base + waveFrac * 2.0) * bioGlow);
    }
  }
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    const fx = fl.group.position.x - echoBloomCenter.x;
    const fz = fl.group.position.z - echoBloomCenter.z;
    const d = Math.sqrt(fx * fx + fz * fz);
    if (Math.abs(d - wave) < waveW) {
      const waveFrac = 1 - Math.abs(d - wave) / waveW;
      fl.petalMat.emissiveIntensity = Math.max(fl.petalMat.emissiveIntensity, (0.3 + waveFrac * 1.5) * bioGlow);
    }
  }
}

// ================================================================
// Director
// ================================================================
let dirState = 'EXPLORE';
let ffTimer = 0, spTimer = 0;

function director(dt, t) {
  // Crystal proximity check
  let nearCrys = false;
  for (let i = 0; i < crys_data.length; i++) {
    const dx = crys_data[i].x - player.pos.x, dz = crys_data[i].z - player.pos.z;
    if (dx * dx + dz * dz < 64) { nearCrys = true; break; }
  }
  dirState = nearCrys ? 'NEAR_CRYSTAL' : 'EXPLORE';

  // Firefly spawning
  ffTimer += dt;
  const ffRate = dirState === 'NEAR_CRYSTAL' ? 0.08 : 0.25;
  const ffMax = dirState === 'NEAR_CRYSTAL' ? 120 : 100;
  if (ffTimer > ffRate) {
    ffTimer = 0;
    const flyCount = updateFlies(0, t); // get count without advancing
    if (flyCount < ffMax) {
      if (dirState === 'NEAR_CRYSTAL') {
        for (let i = 0; i < crys_data.length; i++) {
          const dx = crys_data[i].x - player.pos.x, dz = crys_data[i].z - player.pos.z;
          if (dx * dx + dz * dz < 100)
            spawnFly(crys_data[i].x, 1, crys_data[i].z, 3 + Math.random() * 4);
        }
      } else {
        const a = Math.random() * 6.28, d = 5 + Math.random() * 25;
        spawnFly(player.pos.x + Math.cos(a) * d, 0, player.pos.z + Math.sin(a) * d, 6 + Math.random() * 10);
      }
    }
  }

  // Spore emission
  spTimer += dt;
  if (spTimer > 0.2) {
    spTimer = 0;
    for (let i = 0; i < mush_data.length; i++) {
      const m = mush_data[i];
      const dx = m.x - player.pos.x, dz = m.z - player.pos.z;
      if (dx * dx + dz * dz < 200 && Math.random() < 0.15)
        spawnSpore(m.x, 0.6 * m.group.scale.x, m.z);
    }
  }

  // Mushroom glow pulse
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const p = Math.sin(t * m.speed + m.phase) * 0.5 + 0.5;
    m.capMat.emissiveIntensity = m.base * (0.5 + p * 0.8) * bioGlow;
  }

  // Crystal glow + rotation
  for (let i = 0; i < crys_data.length; i++) {
    const c = crys_data[i];
    const p = Math.sin(t * 0.6 + c.phase) * 0.5 + 0.5;
    c.mat.emissiveIntensity = (1.0 + p * 1.5) * bioGlow;
    c.group.children[0].rotation.y += dt * 0.15;
    if (c.light) c.light.intensity = (0.3 + p * 0.4) * bioGlow;
  }

  // Crystal proximity lights
  const sorted = [];
  for (let i = 0; i < crys_data.length; i++) {
    const c = crys_data[i];
    const dx = c.x - player.pos.x, dz = c.z - player.pos.z;
    sorted.push({ idx: i, dist: dx * dx + dz * dz });
  }
  sorted.sort((a, b) => a.dist - b.dist);
  for (let i = 0; i < crystalLights.length; i++) {
    if (i < sorted.length && sorted[i].dist < 2500) {
      const c = crys_data[sorted[i].idx];
      const p = Math.sin(t * 0.6 + c.phase) * 0.5 + 0.5;
      crystalLights[i].position.set(c.x, 1.5, c.z);
      crystalLights[i].intensity = (1.5 + p * 2.0) * bioGlow;
      crystalLights[i].distance = 16;
      crystalLights[i].color.setHex(C.crystal);
    } else {
      crystalLights[i].intensity = 0;
    }
  }

  // Update all subsystems
  updateJellies(dt, t);
  updatePuffs(dt, t);
  updateDeers(dt, t);
  updateMoths(dt, t);
  updateSky(dt, t);
  updateVegetation(dt, t);
  updateWisps(dt, t);
  updateDandelions(dandelions, dt, t, player.pos);
  updateFairyRings(dt, t);
  updateBubbles(dt, t);
  updatePonds(dt, t);
  updateStarMotes(dt, t, player.pos);
  updateDandSeeds(dt, t);
  updateDustMotes(dt);
  updateBubblePops(dt);
  updateEchoBloom(dt, t);
  updateQuest(dt, t);
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
  if (gameStarted) return;
  gameStarted = true;
  setStarted(true);
  showGame();
}

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.1);
  elapsed += dt;

  updateDayNight(dt);
  const rainRate = updateWeather(dt, elapsed, player.pos);
  updateRain(dt, player.pos, rainRate, windX, windZ);

  // Lightning flash (brief ambient light spike during storms)
  if (lightningFlash > 0) {
    hemiLight.intensity += lightningFlash * 2.5;
    scene.background.r = Math.min(1, scene.background.r + lightningFlash * 0.3);
    scene.background.g = Math.min(1, scene.background.g + lightningFlash * 0.3);
    scene.background.b = Math.min(1, scene.background.b + lightningFlash * 0.4);
  }

  if (!gameStarted) {
    // Pre-game idle animation
    yaw; // read-only
    camera.position.set(0, EYE_H, 0);
    camera.rotation.order = 'YXZ';
    camera.rotation.y += dt * 0.08;
    camera.rotation.x = 0;

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
      o.group.position.y = 1.0 + Math.sin(elapsed * 0.8 + o.phase) * 0.3;
      o.glowMat.opacity = 0.3 + p * 0.4;
    }

    postRender();
    return;
  }

  // Active game loop
  updatePlayer(dt);
  director(dt, elapsed);
  const flyC = updateFlies(dt, elapsed);
  const spC = updateSpores(dt);

  camera.position.copy(player.pos);
  camera.position.y += cameraBobY;
  camera.rotation.order = 'YXZ';
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;

  updateHUD(dt, player.pos);
  postRender();
}

// ================================================================
// Init
// ================================================================
try {
  createGround();
  createSkyDome();

  // Init day/night cycle (after sky is built so materials can be cached)
  initDayNight({
    scene, moon, moon2, hemiLight, playerLight, skyGroup
  });

  populate();

  // Wire up collision data for player
  setCollisionData(trees_data, rocks_data);
  setDustBurstFn(spawnDustBurst);

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

  // Build quest structures
  makeObelisk();
  makeMoat();
  makeRainbows();

  // Init quest system
  initQuest({
    orbs: orbs,
    obeliskGroup: getObeliskGroup(),
    obeliskMat: getObeliskMat(),
    obeliskGlowMat: getObeliskGlowMat(),
    moatMesh: getMoatMesh(),
    moatMat: getMoatMat(),
    rainbowArcs: rainbowArcs,
    player: player,
    makeLaser: makeLaser,
    orbHudEl: getOrbHudEl(),
    deers: deers,
    puffs: puffs,
    jellies: jellies,
    moths: moths
  });

  // Init UI
  initHUD();
  initOverlay();

  // Wire up go callback
  setGoCallback(go);

  // Seed initial fireflies
  for (let i = 0; i < 50; i++) {
    const a = Math.random() * 6.28, d = 3 + Math.random() * WORLD_R * 0.7;
    spawnFly(Math.cos(a) * d, 0, Math.sin(a) * d, 8 + Math.random() * 12);
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

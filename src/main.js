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
import { getGroundY, registerFlatZone } from './world/terrain.js';

// Player
import { player, updatePlayer, cameraBobY, playerIdleTime, setCollisionData, setDustBurstFn } from './core/player.js';

// Entities — Flora
import { makeTree } from './entities/flora/trees.js';
import { makeMush } from './entities/flora/mushrooms.js';
import { makeCrystal } from './entities/flora/crystals.js';
import { makeGrassPatch, updateGrassPatch } from './entities/flora/grass.js';
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
const crystalSortBuf = []; // Reused for crystal proximity sorting
let crystalSortPX = 0, crystalSortPZ = 0; // Last player pos when sort ran

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
    if (ok) {
      const g = makeTree(x, z);
      g.position.y = getGroundY(x, z);
      trees_data.push({ group: g, x: x, z: z });
    }
  }
  // Mushrooms near trees
  for (let i = 0; i < MUSH_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const ang = sr() * 6.28, d = 1 + sr() * 4;
    const mx = ref.x + Math.cos(ang) * d, mz = ref.z + Math.sin(ang) * d;
    const m = makeMush(mx, mz);
    m.group.position.y = getGroundY(mx, mz);
    mush_data.push(m);
  }
  // Crystals
  for (let i = 0; i < CRYSTAL_N; i++) {
    const ang = sr() * 6.28, d = 8 + sr() * WORLD_R * 0.6;
    const cx = Math.cos(ang) * d, cz = Math.sin(ang) * d;
    const c = makeCrystal(cx, cz);
    c.group.position.y = getGroundY(cx, cz);
    crys_data.push(c);
  }
  // Jellies (float above ground)
  for (let i = 0; i < JELLY_N; i++) {
    const ang = sr() * 6.28, d = 10 + sr() * WORLD_R * 0.5;
    const jx = Math.cos(ang) * d, jz = Math.sin(ang) * d;
    jellies.push(makeJelly(jx, getGroundY(jx, jz) + 3 + sr() * 5, jz));
  }
  // Pufflings
  for (let i = 0; i < PUFF_N; i++) {
    const ref = mush_data[Math.floor(sr() * mush_data.length)];
    const ang = sr() * 6.28, d = 1 + sr() * 5;
    const px = ref.x + Math.cos(ang) * d, pz = ref.z + Math.sin(ang) * d;
    const p = makePuff(px, pz);
    p.group.position.y = getGroundY(px, pz);
    p._baseY = getGroundY(px, pz);
    puffs.push(p);
  }
  // Spirit Deer
  for (let i = 0; i < DEER_N; i++) {
    const ang = sr() * 6.28, d = 12 + sr() * WORLD_R * 0.5;
    const dx = Math.cos(ang) * d, dz = Math.sin(ang) * d;
    const de = makeDeer(dx, dz);
    const deerY = getGroundY(dx, dz);
    de.group.position.y = deerY;
    de._baseY = deerY;
    deers.push(de);
  }
  // Moths (fly above ground)
  for (let i = 0; i < MOTH_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    moths.push(makeMoth(ref.x, getGroundY(ref.x, ref.z) + 2 + sr() * 4, ref.z));
  }
  // Grass patches (4 varieties: original green, purple, blue, teal)
  const grassPalettes = [null, C.grassPurple, C.grassBlue, C.grassTeal];
  for (let i = 0; i < GRASS_PATCHES; i++) {
    const ang = sr() * 6.28, d = 2 + sr() * (WORLD_R * 0.9);
    const gx = Math.cos(ang) * d, gz = Math.sin(ang) * d;
    const pal = grassPalettes[Math.floor(sr() * grassPalettes.length)];
    const gp = makeGrassPatch(gx, gz, 2 + sr() * 2.5, 25 + Math.floor(sr() * 20), pal);
    gp.mesh.position.y = getGroundY(gx, gz);
    grassPatches.push(gp);
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
    if (ok4) {
      const r = makeRock(rx, rz);
      r.group.position.y = getGroundY(rx, rz);
      rocks_data.push(r);
    }
  }
  // Ferns
  for (let i = 0; i < FERN_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const ang = sr() * 6.28, d = 1 + sr() * 5;
    const fx = ref.x + Math.cos(ang) * d, fz = ref.z + Math.sin(ang) * d;
    const f = makeFern(fx, fz);
    f.group.position.y = getGroundY(fx, fz);
    ferns.push(f);
  }
  // Flowers
  for (let i = 0; i < FLOWER_N; i++) {
    const ang = sr() * 6.28, d = 3 + sr() * (WORLD_R * 0.7);
    const flx = Math.cos(ang) * d, flz = Math.sin(ang) * d;
    const fl = makeFlower(flx, flz);
    fl.group.position.y = getGroundY(flx, flz);
    flowers.push(fl);
  }
  // Reeds
  for (let i = 0; i < REED_N; i++) {
    const ang = sr() * 6.28, d = 4 + sr() * (WORLD_R * 0.8);
    const rdx = Math.cos(ang) * d, rdz = Math.sin(ang) * d;
    const rd = makeReed(rdx, rdz);
    rd.group.position.y = getGroundY(rdx, rdz);
    reeds.push(rd);
  }
  // Golden orbs (float above terrain)
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
    if (ok) {
      const o = makeOrb(ox, oz);
      o.group.position.y = getGroundY(ox, oz) + 1.0;
      o.flyY = getGroundY(ox, oz) + 1.0;
      orbs.push(o);
    }
  }
  // Wisps (float above terrain)
  for (let i = 0; i < WISP_N; i++) {
    const wa = sr() * 6.28, wd = 2 + sr() * 3;
    const wx = Math.cos(wa) * wd, wz = Math.sin(wa) * wd;
    wisps.push(makeWisp(wx, getGroundY(wx, wz) + 1.0 + sr() * 0.5, wz));
  }
  // Dandelions
  for (let i = 0; i < DANDELION_N; i++) {
    const ang = sr() * 6.28, d = 4 + sr() * (WORLD_R * 0.7);
    const dnx = Math.cos(ang) * d, dnz = Math.sin(ang) * d;
    const dn = makeDandelion(dnx, dnz);
    dn.group.position.y = getGroundY(dnx, dnz);
    dandelions.push(dn);
  }
  // Fairy rings (register flat zones first)
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
    if (ok2) {
      registerFlatZone(fx, fz, 4);
      const fr = makeFairyRing(fx, fz);
      fr.group.position.y = getGroundY(fx, fz);
      fairyRings.push(fr);
    }
  }
  // Bubbles (float above terrain)
  for (let i = 0; i < BUBBLE_N; i++) {
    const ang = sr() * 6.28, d = 5 + sr() * WORLD_R * 0.6;
    const bx = Math.cos(ang) * d, bz = Math.sin(ang) * d;
    bubbles.push(makeBubble(bx, getGroundY(bx, bz) + 0.5 + sr() * 5, bz));
  }
  // Ponds (register flat zones, keep at terrain level)
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
    if (ok3) {
      registerFlatZone(px, pz, 3);
      const po = makePond(px, pz);
      po.group.position.y = getGroundY(px, pz);
      ponds.push(po);
    }
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
    updateGrassPatch(grassPatches[i], t, wAmp, wLeanX, wLeanZ, player.pos.x, player.pos.z);
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
    const j = jellies[i], g = j.group;
    const jx = g.position.x, jz = g.position.z;

    // State transitions
    j._stT -= dt;
    if (j._stT <= 0) {
      if (isStorming) {
        j._state = 'display'; j._stT = 10 + Math.random() * 15;
      } else {
        const r = Math.random();
        if (r < 0.5) { j._state = 'drift'; j._stT = 20 + Math.random() * 30; }
        else if (r < 0.75) { j._state = 'pulse'; j._stT = 8 + Math.random() * 12; }
        else {
          j._state = 'migrate'; j._migrateAng = Math.random() * 6.28;
          j._stT = 15 + Math.random() * 20;
        }
      }
    }
    // Force display during storms
    if (isStorming && j._state !== 'display') {
      j._state = 'display'; j._stT = 10;
    }

    switch (j._state) {
      case 'drift': {
        j.driftAng += dt * 0.15;
        const radius = 8 + Math.sin(t * 0.1 + j.phase) * 4;
        const tx = j.homeX + Math.cos(j.driftAng) * radius;
        const tz = j.homeZ + Math.sin(j.driftAng) * radius;
        g.position.x += (tx - jx) * dt * 0.3;
        g.position.z += (tz - jz) * dt * 0.3;
        g.position.y = j.floatY + Math.sin(t * j.wobble + j.phase) * 1.5;
        break;
      }
      case 'pulse': {
        j.driftAng += dt * 0.08;
        g.position.x += Math.cos(j.driftAng) * dt * 0.3;
        g.position.z += Math.sin(j.driftAng) * dt * 0.3;
        g.position.y = j.floatY + Math.sin(t * j.wobble + j.phase) * 1.0;
        j._pulseSync = Math.sin(t * 2.0 + Math.floor(i / 2) * Math.PI) * 0.5 + 0.5;
        break;
      }
      case 'migrate': {
        g.position.x += Math.cos(j._migrateAng) * dt * 1.0;
        g.position.z += Math.sin(j._migrateAng) * dt * 1.0;
        g.position.y = j.floatY + Math.sin(t * j.wobble + j.phase) * 0.8;
        const md2 = g.position.x * g.position.x + g.position.z * g.position.z;
        if (md2 > (WORLD_R * 0.8) * (WORLD_R * 0.8)) j._migrateAng += Math.PI;
        break;
      }
      case 'display': {
        j.driftAng += dt * 0.4;
        g.position.x += Math.cos(j.driftAng) * dt * 0.8;
        g.position.z += Math.sin(j.driftAng) * dt * 0.8;
        g.position.y = j.floatY + Math.sin(t * 2.0 + j.phase) * 2.0;
        break;
      }
    }

    // Visual updates
    const basePulse = Math.sin(t * 1.2 + j.phase) * 0.5 + 0.5;
    let emissiveMult = 1.0, opacityBoost = 0;
    if (j._state === 'pulse') {
      emissiveMult = 1.0 + j._pulseSync * 1.5;
      opacityBoost = j._pulseSync * 0.15;
    } else if (j._state === 'display') {
      emissiveMult = 1.5 + Math.sin(t * 4 + j.phase) * 0.8;
      opacityBoost = 0.15;
    }
    j.bellMat.emissiveIntensity = (0.4 + basePulse * 0.8) * bioGlow * emissiveMult;
    j.bellMat.opacity = 0.35 + basePulse * 0.25 + opacityBoost;
    g.rotation.y += dt * 0.2;
    for (let ti = 2; ti < g.children.length; ti++) {
      g.children[ti].rotation.x = Math.sin(t * 2 + ti + j.phase) * 0.15;
      g.children[ti].rotation.z = Math.sin(t * 1.5 + ti * 0.7 + j.phase) * 0.1;
    }
  }
}

function updatePuffs(dt, t) {
  const sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
  for (let i = 0; i < puffs.length; i++) {
    const p = puffs[i], g = p.group;
    const px = g.position.x, pz = g.position.z;
    const ddx = px - player.pos.x, ddz = pz - player.pos.z;
    const pDist2 = ddx * ddx + ddz * ddz;

    // Startle check
    if (p.state !== 'startled' && p.state !== 'following' && p.state !== 'huddle') {
      const startleR = sprinting ? 3.5 : 2.0;
      if (pDist2 < startleR * startleR) {
        p.state = 'startled'; p._scaredT = 0.6 + Math.random() * 0.5;
        p.wanderAng = Math.atan2(ddx, ddz); p.hopTimer = 0;
      }
    }

    // Huddle in storms
    if (isStorming && p.state !== 'startled' && p.state !== 'huddle') {
      let closest = Infinity, closestIdx = -1;
      for (let j = 0; j < puffs.length; j++) {
        if (j === i) continue;
        const odx = puffs[j].group.position.x - px, odz = puffs[j].group.position.z - pz;
        const od2 = odx * odx + odz * odz;
        if (od2 < closest) { closest = od2; closestIdx = j; }
      }
      if (closestIdx >= 0 && closest > 1) {
        p.state = 'huddle'; p._huddleTarget = closestIdx;
      }
    }

    // Following: cautiously approach idle player
    if (playerIdleTime > 8 && pDist2 < 144 && p.state === 'idle' && Math.random() < 0.001) {
      p.state = 'following'; p._followT = 10 + Math.random() * 10;
    }

    // Update terrain-relative base Y only when moved enough (avoid per-frame noise calc)
    const pdx2 = px - p._lastTX, pdz2 = pz - p._lastTZ;
    if (pdx2 * pdx2 + pdz2 * pdz2 > 0.25) { p._baseY = getGroundY(px, pz); p._lastTX = px; p._lastTZ = pz; }

    switch (p.state) {
      case 'idle': {
        p.idleTimer -= dt;
        g.position.y = p._baseY + Math.sin(t * 2 + p.phase) * 0.02;
        g.rotation.y += Math.sin(t * 0.5 + p.phase) * dt * 0.3;
        if (p.idleTimer <= 0) {
          p.state = 'hop'; p.wanderAng += (Math.random() - 0.5) * 1.5; p.hopTimer = 0;
        }
        break;
      }
      case 'hop': {
        p.hopTimer += dt;
        const hopDur = 1.2;
        const frac = p.hopTimer / hopDur;
        if (frac >= 1.0) {
          p.state = 'idle'; p.idleTimer = 1.5 + Math.random() * 3; g.position.y = p._baseY;
        } else {
          g.position.y = p._baseY + Math.sin(frac * Math.PI) * 0.3;
          g.position.x += Math.sin(p.wanderAng) * p.speed * dt;
          g.position.z += Math.cos(p.wanderAng) * p.speed * dt;
          const sq = 1.0 - Math.sin(frac * Math.PI) * 0.15;
          const st = 1.0 + Math.sin(frac * Math.PI) * 0.2;
          g.scale.set(sq, st, sq);
          g.rotation.y = p.wanderAng;
        }
        break;
      }
      case 'startled': {
        p._scaredT -= dt;
        p.hopTimer += dt * 1.5;
        const frac = Math.min(p.hopTimer / 0.8, 1);
        g.position.y = p._baseY + Math.sin(frac * Math.PI) * 0.5;
        g.position.x += Math.sin(p.wanderAng) * p.speed * 2 * dt;
        g.position.z += Math.cos(p.wanderAng) * p.speed * 2 * dt;
        g.scale.set(0.85, 1.3, 0.85);
        if (p._scaredT <= 0) {
          p.state = 'idle'; p.idleTimer = 3 + Math.random() * 3;
          g.position.y = p._baseY; g.scale.set(1, 1, 1);
        }
        break;
      }
      case 'following': {
        p._followT -= dt;
        if (pDist2 > 225 || playerIdleTime < 3 || p._followT <= 0) {
          p.state = 'idle'; p.idleTimer = 2; break;
        }
        p.wanderAng = Math.atan2(player.pos.x - px, player.pos.z - pz);
        if (pDist2 > 9) {
          p.hopTimer += dt;
          const frac = (p.hopTimer % 1.5) / 1.5;
          g.position.y = p._baseY + Math.sin(frac * Math.PI) * 0.2;
          g.position.x += Math.sin(p.wanderAng) * p.speed * 0.4 * dt;
          g.position.z += Math.cos(p.wanderAng) * p.speed * 0.4 * dt;
        } else {
          g.position.y = p._baseY + Math.sin(t * 3 + p.phase) * 0.03;
        }
        g.rotation.y = p.wanderAng;
        break;
      }
      case 'huddle': {
        if (!isStorming) { p.state = 'idle'; p.idleTimer = 2; break; }
        const tgt = puffs[p._huddleTarget];
        if (tgt) {
          const hdx = tgt.group.position.x - px, hdz = tgt.group.position.z - pz;
          const hd = Math.sqrt(hdx * hdx + hdz * hdz);
          if (hd > 0.5) {
            g.position.x += (hdx / hd) * p.speed * 0.5 * dt;
            g.position.z += (hdz / hd) * p.speed * 0.5 * dt;
          }
        }
        g.rotation.z = Math.sin(t * 8) * 0.05;
        g.position.y = p._baseY;
        break;
      }
    }

    // Eye blink animation
    p._blinkTimer -= dt;
    if (p._blinkTimer <= 0) {
      if (p._blinkState === 0) {
        // Close eyes
        for (let ei = 0; ei < p.eyes.length; ei++) p.eyes[ei].scale.y = 0.1;
        p._blinkState = 1; p._blinkTimer = 0.08 + Math.random() * 0.06;
      } else {
        // Open eyes
        for (let ei = 0; ei < p.eyes.length; ei++) p.eyes[ei].scale.y = 1.0;
        p._blinkState = 0; p._blinkTimer = 2 + Math.random() * 5;
      }
    }
    // Ear wiggle (subtle rotation oscillation)
    for (let ei = 0; ei < p.ears.length; ei++) {
      const ear = p.ears[ei];
      ear.mesh.rotation.z = ear.baseRotZ + Math.sin(t * 3.5 + ear.side * 1.2 + p.phase) * 0.08;
    }
    // Tail pom bounce
    p.tail.position.y = 0.38 + Math.sin(t * 4 + p.phase) * 0.015;

    // World bounds
    const wd2 = g.position.x * g.position.x + g.position.z * g.position.z;
    if (wd2 > (WORLD_R * 0.85) * (WORLD_R * 0.85)) p.wanderAng += Math.PI;
  }
}

function updateDeers(dt, t) {
  const sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
  for (let i = 0; i < deers.length; i++) {
    const d = deers[i], g = d.group;
    const gx = g.position.x, gz = g.position.z;
    const ddx = gx - player.pos.x, ddz = gz - player.pos.z;
    const pDist2 = ddx * ddx + ddz * ddz;
    const pAng = Math.atan2(ddx, ddz);
    const alertR = sprinting ? 18 : 12;
    const alertR2 = alertR * alertR;
    const fleeR = sprinting ? 10 : DEER_FLEE_R;
    const fleeR2 = fleeR * fleeR;

    // Only recalc terrain height when moved enough (>0.5m)
    const dtx = gx - d._lastTX, dtz = gz - d._lastTZ;
    if (dtx * dtx + dtz * dtz > 0.25) { d._baseY = getGroundY(gx, gz); d._lastTX = gx; d._lastTZ = gz; }
    const deerBaseY = d._baseY;

    // Threat detection (overrides passive states)
    if (d.state !== 'flee' && d.state !== 'alert' && d.state !== 'watching') {
      if (pDist2 < fleeR2) {
        d.state = 'flee'; d.wanderAng = pAng;
        d.fleeTimer = 2.5 + Math.random() * 2; d._zigTimer = 0;
      } else if (pDist2 < alertR2) {
        d.state = 'alert'; d._stT = 1.0 + Math.random() * 1.5;
      }
    }

    let moveSpeed = d.speed, isMoving = false;

    switch (d.state) {
      case 'walk': {
        isMoving = true;
        d.walkTimer -= dt;
        if (d.walkTimer <= 0) {
          const r = Math.random();
          if (r < 0.25) { d.state = 'pause'; d.pauseTimer = 2 + Math.random() * 3; }
          else if (r < 0.4) { d.state = 'graze'; d._stT = 3 + Math.random() * 4; }
          else if (r < 0.5 && ponds.length > 0) {
            d.state = 'drink'; d._stT = 8;
            let bestD2 = Infinity;
            for (let pi = 0; pi < ponds.length; pi++) {
              const pdx = ponds[pi].x - gx, pdz = ponds[pi].z - gz;
              const pd2 = pdx * pdx + pdz * pdz;
              if (pd2 < bestD2) { bestD2 = pd2; d._drinkTgt = ponds[pi]; }
            }
          }
          else if (r < 0.55) { d.state = 'rest'; d._stT = 5 + Math.random() * 5; }
          else { d.wanderAng += (Math.random() - 0.5) * 1.2; d.walkTimer = 3 + Math.random() * 5; }
        }
        // Gently steer toward home zone
        const homeD2 = (gx - d.homeX) * (gx - d.homeX) + (gz - d.homeZ) * (gz - d.homeZ);
        if (homeD2 > 400) {
          const homeAng = Math.atan2(d.homeX - gx, d.homeZ - gz);
          d.wanderAng += (homeAng - d.wanderAng) * dt * 0.5;
        }
        break;
      }
      case 'pause': {
        d.pauseTimer -= dt;
        d.headLook = Math.sin(t * 0.6) * 0.4;
        if (d.pauseTimer <= 0) { d.state = 'walk'; d.walkTimer = 3 + Math.random() * 5; }
        break;
      }
      case 'graze': {
        d._stT -= dt;
        d.headBob = -0.5;
        if (d._stT <= 0) { d.state = 'walk'; d.walkTimer = 2 + Math.random() * 4; d.headBob = 0; }
        break;
      }
      case 'drink': {
        d._stT -= dt;
        if (d._drinkTgt) {
          const tdx = d._drinkTgt.x - gx, tdz = d._drinkTgt.z - gz;
          const td = Math.sqrt(tdx * tdx + tdz * tdz);
          if (td > 2) {
            d.wanderAng = Math.atan2(tdx, tdz); isMoving = true; moveSpeed = d.speed * 0.7;
          } else { d.headBob = -0.6; }
        }
        if (d._stT <= 0) {
          d.state = 'walk'; d.walkTimer = 3 + Math.random() * 4;
          d.headBob = 0; d._drinkTgt = null;
        }
        break;
      }
      case 'rest': {
        d._stT -= dt;
        g.position.y = Math.max(deerBaseY - 0.3, g.position.y - dt * 0.5);
        if (d._stT <= 0) { d.state = 'walk'; d.walkTimer = 2 + Math.random() * 3; }
        break;
      }
      case 'alert': {
        d._stT -= dt;
        if (pDist2 < fleeR2) {
          d.state = 'flee'; d.wanderAng = pAng; d.fleeTimer = 2.5 + Math.random() * 2;
        } else if (d._stT <= 0) {
          if (pDist2 < (alertR * 1.2) * (alertR * 1.2)) { d.state = 'watching'; d._stT = 3 + Math.random() * 3; }
          else { d.state = 'walk'; d.walkTimer = 2 + Math.random() * 3; }
        }
        break;
      }
      case 'watching': {
        d._stT -= dt;
        isMoving = true; moveSpeed = d.speed * 0.3;
        d.wanderAng = pAng;
        if (pDist2 < fleeR2) {
          d.state = 'flee'; d.wanderAng = pAng; d.fleeTimer = 2.5 + Math.random() * 2;
        } else if (pDist2 > (alertR * 1.5) * (alertR * 1.5) || d._stT <= 0) {
          d.state = 'walk'; d.walkTimer = 2 + Math.random() * 4;
        }
        break;
      }
      case 'flee': {
        isMoving = true; moveSpeed = d.speed * DEER_FLEE_SPEED_MULT;
        d.fleeTimer -= dt;
        d._zigTimer -= dt;
        if (d._zigTimer <= 0) { d._zigDir *= -1; d._zigTimer = 0.4 + Math.random() * 0.4; }
        d.wanderAng = pAng + d._zigDir * 0.3;
        if (d.fleeTimer <= 0 || pDist2 > (alertR * 2) * (alertR * 2)) {
          d.state = 'walk'; d.walkTimer = 3 + Math.random() * 5;
        }
        break;
      }
    }

    // Movement
    if (isMoving) {
      g.position.x += Math.sin(d.wanderAng) * moveSpeed * dt;
      g.position.z += Math.cos(d.wanderAng) * moveSpeed * dt;
      d.legCycle += dt * moveSpeed * 3;
    }
    // World bounds
    const wd2 = g.position.x * g.position.x + g.position.z * g.position.z;
    if (wd2 > (WORLD_R * 0.9) * (WORLD_R * 0.9)) {
      d.wanderAng = Math.atan2(-g.position.x, -g.position.z);
    }
    // Return to ground from rest / track terrain
    if (d.state !== 'rest') {
      const yDiff = deerBaseY - g.position.y;
      if (Math.abs(yDiff) > 0.01) {
        g.position.y += Math.sign(yDiff) * Math.min(Math.abs(yDiff), dt * 2);
      } else {
        g.position.y = deerBaseY;
      }
    }

    // Heading
    g.rotation.y = d.wanderAng;

    // Head tracking for alert/watching
    if (d.state === 'alert' || d.state === 'watching') {
      const targetYaw = pAng - d.wanderAng;
      d.headLook += (targetYaw * 0.5 - d.headLook) * dt * 3;
    }

    // Neck pivot animation
    const targetBob = d.headBob || 0;
    d.neckPivot.rotation.x += (targetBob - d.neckPivot.rotation.x) * dt * 3;
    d.neckPivot.rotation.y += (d.headLook - d.neckPivot.rotation.y) * dt * 4;
    if (isMoving && d.state !== 'graze' && d.state !== 'drink') {
      d.neckPivot.rotation.x += Math.sin(d.legCycle * 2) * 0.05;
    }

    // Leg animation
    for (let li = 0; li < d.legPivots.length; li++) {
      const lp = d.legPivots[li];
      if (isMoving) {
        const offset = lp.isFront ? 0 : Math.PI;
        const sideOff = lp.side > 0 ? Math.PI : 0;
        const swing = Math.sin(d.legCycle + offset + sideOff) * 0.4 * (moveSpeed / d.speed);
        lp.upper.rotation.x = swing;
        lp.lower.rotation.x = Math.max(0, -swing * 0.6);
      } else if (d.state === 'rest' && g.position.y < -0.1) {
        lp.upper.rotation.x += (0.8 - lp.upper.rotation.x) * dt * 2;
        lp.lower.rotation.x += (1.0 - lp.lower.rotation.x) * dt * 2;
      } else {
        lp.upper.rotation.x *= 0.9;
        lp.lower.rotation.x *= 0.9;
      }
    }

    // Tail
    d.tailPivot.rotation.x = Math.sin(t * 1.5 + d.phase) * 0.15;
    if (d.state === 'flee') d.tailPivot.rotation.x += 0.3;
    if (d.state === 'alert') d.tailPivot.rotation.z = Math.sin(t * 6) * 0.1;
    else d.tailPivot.rotation.z *= 0.9;

    // Emissive
    d.mat.emissiveIntensity = (0.3 + Math.sin(t * 0.8 + d.phase) * 0.2) * bioGlow;
    d.headLook *= 0.98;
  }
}

function updateMoths(dt, t) {
  for (let i = 0; i < moths.length; i++) {
    const m = moths[i], g = m.group;
    const mx = g.position.x, mz = g.position.z;

    // State transitions from patrol
    if (m._state === 'patrol') {
      if (Math.random() < 0.002) {
        let bestD2 = Infinity, bestCrys = null;
        for (let ci = 0; ci < crys_data.length; ci++) {
          const cdx = crys_data[ci].x - mx, cdz = crys_data[ci].z - mz;
          const cd2 = cdx * cdx + cdz * cdz;
          if (cd2 < 900 && cd2 < bestD2) { bestD2 = cd2; bestCrys = crys_data[ci]; }
        }
        if (bestCrys) {
          m._state = 'attracted'; m._attractTarget = bestCrys;
          m._stT = 6 + Math.random() * 8;
        }
      }
      if (Math.random() < 0.001) {
        let bestD2 = Infinity, bestTree = null;
        for (let ti = 0; ti < trees_data.length; ti++) {
          const tdx = trees_data[ti].x - mx, tdz = trees_data[ti].z - mz;
          const td2 = tdx * tdx + tdz * tdz;
          if (td2 < 400 && td2 < bestD2) { bestD2 = td2; bestTree = trees_data[ti]; }
        }
        if (bestTree) {
          m._state = 'rest'; m._restTree = bestTree;
          m._stT = 4 + Math.random() * 6;
        }
      }
    }

    switch (m._state) {
      case 'patrol': {
        m.orbitAng += dt * 0.4;
        const tx = m.centerX + Math.cos(m.orbitAng) * m.orbitR;
        const tz = m.centerZ + Math.sin(m.orbitAng) * m.orbitR;
        g.position.x += (tx - mx) * dt * 1.5;
        g.position.z += (tz - mz) * dt * 1.5;
        g.position.y = m.floatY + Math.sin(t * 0.7 + m.phase) * 0.8;
        g.rotation.y = m.orbitAng + Math.PI / 2;
        break;
      }
      case 'attracted': {
        m._stT -= dt;
        if (!m._attractTarget || m._stT <= 0) {
          m._state = 'patrol'; m._attractTarget = null; break;
        }
        m.orbitAng += dt * 0.8;
        const tgt = m._attractTarget;
        const spiral = Math.max(0.5, m._stT * 0.4);
        const tx = tgt.x + Math.cos(m.orbitAng) * spiral;
        const tz = tgt.z + Math.sin(m.orbitAng) * spiral;
        g.position.x += (tx - mx) * dt * 2.0;
        g.position.z += (tz - mz) * dt * 2.0;
        g.position.y += (2.0 - g.position.y) * dt * 0.5;
        g.rotation.y = m.orbitAng + Math.PI / 2;
        break;
      }
      case 'rest': {
        m._stT -= dt;
        if (!m._restTree || m._stT <= 0) {
          m._state = 'patrol'; m._restTree = null;
          m.centerX = g.position.x; m.centerZ = g.position.z;
          break;
        }
        const tree = m._restTree;
        const tdx = tree.x + 0.5 - mx, tdz = tree.z + 0.5 - mz;
        const td = Math.sqrt(tdx * tdx + tdz * tdz);
        if (td > 0.3) {
          g.position.x += tdx / td * dt * 2;
          g.position.z += tdz / td * dt * 2;
        }
        g.position.y += (2.5 - g.position.y) * dt * 1.5;
        g.rotation.y = Math.atan2(tdx, tdz);
        break;
      }
    }

    // Wing flap (barely flutter when resting)
    const flapIntensity = m._state === 'rest' ? 0.05 : 0.4;
    const flap = Math.sin(t * m.flapSpeed + m.phase) * flapIntensity;
    for (let w = 0; w < g._wingPivots.length; w++) {
      const wp = g._wingPivots[w];
      wp.pivot.rotation.z = flap * wp.side;
    }

    // Emissive
    const pulse = Math.sin(t * 1.5 + m.phase) * 0.5 + 0.5;
    const attractBoost = m._state === 'attracted' ? 0.4 : 0;
    m.wingMat.emissiveIntensity = (0.5 + pulse * 0.6 + attractBoost) * bioGlow;
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
    // Sparkle orbiter — variable radius and speed
    const sa = t * (2.5 + i * 0.5) + w.phase;
    const sparkR = 0.14 + Math.sin(t * 1.3 + w.phase) * 0.06;
    const ch = w.group.children[5]; // spark
    ch.position.set(Math.cos(sa) * sparkR, Math.sin(sa * 1.5) * 0.08, Math.sin(sa) * sparkR);
    // Plasma tendrils wave
    for (let ti = 0; ti < w.tendrils.length; ti++) {
      const td = w.tendrils[ti];
      const wave = Math.sin(t * 3 + ti * 2.1 + w.phase) * 0.3;
      const radius = 0.08 + Math.sin(t * 2 + ti * 1.5) * 0.04;
      td.mesh.position.x = Math.cos(td.baseAng + wave) * radius;
      td.mesh.position.z = Math.sin(td.baseAng + wave) * radius;
      td.mesh.rotation.y = td.baseAng + wave;
      td.mesh.rotation.z = Math.PI / 3 + Math.sin(t * 2.5 + ti) * 0.2;
    }
    // Ember trail bob
    for (let ei = 0; ei < w.embers.length; ei++) {
      const eOff = (ei + 1) * 0.08;
      w.embers[ei].position.y = -0.06 - eOff + Math.sin(t * 4 + ei * 1.4 + w.phase) * 0.03;
      w.embers[ei].position.x = Math.sin(t * 2.5 + ei * 2 + w.phase) * 0.06;
      w.embers[ei].material.opacity = 0.2 + Math.sin(t * 5 + ei * 1.7) * 0.15;
    }
    // Inner facet rotation
    w.facet.rotation.y += dt * 1.5;
    w.facet.rotation.x += dt * 0.7;
    // Halos gentle spin
    w.halo.rotation.z += dt * 0.3;
    w.halo2.rotation.y += dt * 0.2;
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
    // Spore motes drift upward and cycle
    const sporeAlpha = 0.08 + fr.glowIntensity * 0.25;
    fr.sporeMat.opacity = sporeAlpha;
    for (let si = 0; si < fr.spores.length; si++) {
      const sp = fr.spores[si];
      sp.drift += dt * 0.3;
      sp.mesh.position.y += sp.speed * dt * (0.5 + fr.glowIntensity);
      sp.mesh.position.x = sp.baseX + Math.sin(t * 0.8 + sp.drift) * 0.15;
      sp.mesh.position.z = sp.baseZ + Math.cos(t * 0.6 + sp.drift) * 0.12;
      // Reset when too high
      if (sp.mesh.position.y > 0.8) {
        sp.mesh.position.y = 0.03;
      }
      sp.mesh.scale.setScalar(0.6 + Math.sin(t * 2 + si) * 0.4);
    }
    // Glow worms pulse independently
    for (let gwi = 0; gwi < fr.glowWorms.length; gwi++) {
      const pulse = Math.sin(t * 1.5 + gwi * 1.3 + fr.phase) * 0.5 + 0.5;
      fr.glowWorms[gwi].material.opacity = 0.1 + pulse * 0.4 + fr.glowIntensity * 0.3;
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
    // Lily pad bob
    for (let j = 0; j < po.pads.length; j++) {
      po.pads[j].mesh.position.y = 0.05 + Math.sin(t * 0.8 + po.pads[j].phase) * 0.015;
    }
    po.waterMat.emissiveIntensity = (0.15 + Math.sin(t * 1.0 + po.phase) * 0.1) * bioGlow;
    const fp = Math.sin(t * 1.2 + po.phase) * 0.5 + 0.5;
    po.flMat.emissiveIntensity = (0.3 + fp * 0.5) * bioGlow;
    // Animated ripple rings — expand and fade cyclically
    for (let ri = 0; ri < po.ripples.length; ri++) {
      const rp = po.ripples[ri];
      const cycle = ((t * 0.25 + rp.phase) % 1.0); // 0→1 expansion cycle
      const scale = 0.2 + cycle * po.pondR * 0.8;
      rp.mesh.scale.setScalar(scale);
      rp.mesh.material.opacity = (1.0 - cycle) * 0.12;
    }
    // Tadpole swim paths — lazy circles
    for (let tdi = 0; tdi < po.tadpoles.length; tdi++) {
      const td = po.tadpoles[tdi];
      td.ang += td.speed * dt;
      const tx = Math.cos(td.ang) * td.orbR;
      const tz = Math.sin(td.ang) * td.orbR;
      td.body.position.x = tx;
      td.body.position.z = tz;
      td.body.rotation.y = td.ang + Math.PI / 2;
      // Tail follows behind
      const tailOff = 0.02;
      td.tail.position.x = tx - Math.cos(td.ang) * tailOff;
      td.tail.position.z = tz - Math.sin(td.ang) * tailOff;
      td.tail.rotation.y = td.ang;
      td.tail.rotation.z = Math.PI / 2 + Math.sin(t * 8 + tdi * 3) * 0.4;
    }
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
// Reactive Flora (proximity/touch responses)
// ================================================================
function updateFloraReactions(dt, t) {
  const px = player.pos.x, pz = player.pos.z;

  // --- Flowers: bloom open + glow surge when player approaches (within 4m) ---
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    const fx = fl.group.position.x, fz = fl.group.position.z;
    const ddx = fx - px, ddz = fz - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const target = dist2 < 16 ? 1.0 : 0.0;
    fl._react = (fl._react || 0);
    fl._react += (target - fl._react) * dt * (target > 0 ? 4 : 1.5);
    // Bloom scale (spread petals outward)
    const sc = 1.0 + fl._react * 0.15;
    fl.group.scale.set(sc, 1.0 + fl._react * 0.05, sc);
    // Add glow boost
    fl.petalMat.emissiveIntensity += fl._react * 0.6 * bioGlow;
  }

  // --- Mushrooms: bright pulse on proximity (within 2m) ---
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const ddx = m.x - px, ddz = m.z - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const touch = dist2 < 4 ? 1.0 : 0.0;
    m._touch = (m._touch || 0);
    m._touch += (touch - m._touch) * dt * (touch > 0 ? 6 : 1.5);
    // Boost emissive and slight scale pulse
    m.capMat.emissiveIntensity += m._touch * 1.5 * bioGlow;
    const ms = 1.0 + m._touch * 0.08;
    m.group.scale.set(ms, 1.0 + m._touch * 0.04, ms);
  }


  // --- Ferns: curl inward when very close (within 1.5m) ---
  for (let i = 0; i < ferns.length; i++) {
    const f = ferns[i];
    const fx = f.group.position.x, fz = f.group.position.z;
    const ddx = fx - px, ddz = fz - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const target = dist2 < 2.25 ? 0.65 : 1.0;
    f._curl = (f._curl === undefined ? 1.0 : f._curl);
    f._curl += (target - f._curl) * dt * (target < 1.0 ? 4 : 1.5);
    f.group.scale.set(1.0 + (1 - f._curl) * 0.3, f._curl, 1.0 + (1 - f._curl) * 0.3);
  }

  // --- Crystal resonance: chain glow to nearby crystals ---
  for (let i = 0; i < crys_data.length; i++) {
    const c = crys_data[i];
    const ddx = c.x - px, ddz = c.z - pz;
    if (ddx * ddx + ddz * ddz < 36) { // within 6m of player
      for (let j = 0; j < crys_data.length; j++) {
        if (i === j) continue;
        const c2 = crys_data[j];
        const cdx = c.x - c2.x, cdz = c.z - c2.z;
        const cd2 = cdx * cdx + cdz * cdz;
        if (cd2 < 400) { // neighbor within 20m
          const chainStr = (1 - Math.sqrt(cd2) / 20) * 0.8;
          c2.mat.emissiveIntensity += chainStr * bioGlow;
          if (c2.light) c2.light.intensity += chainStr * 0.3 * bioGlow;
        }
      }
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
            spawnFly(crys_data[i].x, getGroundY(crys_data[i].x, crys_data[i].z) + 1, crys_data[i].z, 3 + Math.random() * 4);
        }
      } else {
        const a = Math.random() * 6.28, d = 5 + Math.random() * 25;
        const flyX = player.pos.x + Math.cos(a) * d, flyZ = player.pos.z + Math.sin(a) * d;
        spawnFly(flyX, getGroundY(flyX, flyZ), flyZ, 6 + Math.random() * 10);
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

  // Crystal proximity lights — only re-sort when player moves >1m
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
  // Rock crystal sparkle twinkle
  for (let i = 0; i < rocks_data.length; i++) {
    const rk = rocks_data[i];
    if (rk.sparkles) for (let si = 0; si < rk.sparkles.length; si++) {
      rk.sparkles[si].material.opacity = 0.15 + Math.sin(t * 4 + i * 2.3 + si * 1.7) * 0.35;
    }
  }
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
  updateFloraReactions(dt, t);
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
      o.group.position.y = o.flyY + Math.sin(elapsed * 0.8 + o.phase) * 0.3;
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
  // Register obelisk flat zone (world center always flat)
  registerFlatZone(0, 0, 5);

  createSkyDome();

  // Init day/night cycle
  initDayNight({
    scene, moon, moon2, hemiLight, playerLight
  });

  populate();

  // Create ground AFTER populate so pond/fairy ring flat zones are registered
  createGround();

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

  // Init UI (must be before quest so orb HUD element is available)
  initHUD();
  initOverlay();

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

  // Wire up go callback
  setGoCallback(go);

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

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
  FAIRY_RING_N, BUBBLE_N, POND_N, ORB_N, STARMOTE_N,
  THORNBLOOM_N, HELIXVINE_N, SNAPTHORN_N,
  SPIRALFROND_N, CORPSEBLOOM_N, ORBBUSH_N, LANTERNPOD_N, VEILMOSS_N, GROUND_GLOW_N,
  C,
  FAIRY_RING_R, FAIRY_BOUNCE, BUBBLE_POP_R, JUMP_IMPULSE, DEER_FLEE_R, DEER_FLEE_SPEED_MULT
} from './constants.js';

// Utils
import { sr } from './utils/rng.js';

// World
import { createGround, updateGroundUniforms } from './world/ground.js';
import { createSkyDome, skyGroup, updateSky } from './world/sky.js';
import { getGroundY, registerFlatZone } from './world/terrain.js';
import { initAurora, updateAurora } from './world/aurora.js';

// Player
import { player, updatePlayer, cameraBobY, playerIdleTime, setCollisionData, setDustBurstFn, setAudioCallbacks } from './core/player.js';

// Entities — Flora
import { makeTreeImpostor, createTreeTemplates, createTreeInstances, updateTreeLOD, transformTreeMaterials } from './entities/flora/trees.js';
import { makeMush } from './entities/flora/mushrooms.js';
import { makeCrystal } from './entities/flora/crystals.js';
import { makeGrassPatch, updateGrassGlobals } from './entities/flora/grass.js';
import { makeFern } from './entities/flora/ferns.js';
import { makeFlower } from './entities/flora/flowers.js';
import { makeReed } from './entities/flora/reeds.js';
import { makeDandelion, updateDandelions } from './entities/flora/dandelions.js';
import { makeThornbloom } from './entities/flora/thornbloom.js';
import { makeHelixvine } from './entities/flora/helixvine.js';
import { makeSnapthorn, updateSnapthorns } from './entities/flora/snapthorn.js';
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

// Entities — Magical
import { makeWisp } from './entities/magical/wisps.js';
import { makeFairyRing } from './entities/magical/fairyRings.js';
import { makeBubble } from './entities/magical/bubbles.js';
import { makePond } from './entities/magical/ponds.js';
import { makeOrb } from './entities/magical/orbs.js';

// Entities — World
import { makeRock } from './entities/world/rocks.js';
import { makeObelisk, getObeliskGroup, getObeliskMat, getObeliskGlowMat, getPinnacleOrb, getPinnacleRings } from './entities/world/obelisk.js';
import { makeMoat, getMoatMesh, getMoatMat } from './entities/world/moat.js';
import { makeRainbows, rainbowArcs, updateRainbowSparkles } from './entities/world/rainbows.js';

// Particles
import { initFlies, spawnFly, updateFlies } from './particles/fireflies.js';
import { initSpores, spawnSpore, updateSpores, setSporeWind } from './particles/spores.js';
import { initStarMotes, updateStarMotes } from './particles/starMotes.js';
import { initDustMotes, spawnDustBurst } from './particles/dust.js';
import { initDandSeeds, spawnDandSeed, updateDandSeeds, setSeedWind } from './particles/seeds.js';
import { initBubblePops, spawnBubblePop, updateBubblePops } from './particles/bubblePops.js';
import { updateDustMotes } from './particles/dust.js';
import { initLeaves, spawnLeaf, updateLeaves, setLeafWind } from './particles/leaves.js';
import { initFootprints, spawnFootprint, updateFootprints } from './particles/footprints.js';

// Quest
import { initQuest, updateQuest, questPhase, orbsFound } from './quest/questManager.js';
import { makeLaser } from './quest/lasers.js';

// Systems
import { initDayNight, updateDayNight, bioGlow, phase as dayPhase } from './systems/dayNightCycle.js';
import { initWeather, updateWeather, windX, windZ, windStrength, weatherState, lightningFlash, isStorming, getRainRate } from './systems/weather.js';
import { initRain, updateRain } from './particles/rain.js';

// Audio
import { initAudio, updateAudio, playCreatureSound, playFootstep, playJumpSound, playLandSound, playBubblePop, playFairyBounce, updateStepCooldown, updateAmbientSounds, playOrbCollect, playOrbWarble, playLaserZap, playLaserHum, updateLaserHums, stopLaserHums, updateMusic } from './systems/audio.js';

// AI
import { canSee, canHear, isNear } from './systems/ai/senses.js';
import { flee as steerFlee, arrive as steerArrive, separation, cohesion, worldBounds, avoidObstacles } from './systems/ai/steering.js';

// Discoveries
import { initDiscoveries, checkDiscoveries, updateDiscoveryUI } from './systems/discoveries.js';

// UI
import { initHUD, updateHUD } from './ui/hud.js';
import { initOverlay, getOrbHudEl, showGame } from './ui/overlay.js';

// ================================================================
// Entity arrays
// ================================================================
const trees_data = []; // { x, z, y, treeH, yRot, scale }
let treeMeshes = []; // InstancedMesh groups per template
const treeImpostors = []; // billboard sprites per tree
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
const thornblooms = [];
const helixvines = [];
const snapthorns = [];
const spiralfronds = [];
const corpseblooms = [];
const orbbushes = [];
const lanternpods = [];
const veilmosses = [];
const groundGlows = [];
const crystalSortBuf = []; // Reused for crystal proximity sorting
let crystalSortPX = 0, crystalSortPZ = 0; // Last player pos when sort ran

// ================================================================
// Echo bloom state
// ================================================================
let echoBloomTimer = 0;
let echoBloomCenter = null;
let echoBloomRadius = 0;

// Batch 2 Item 6: Crystal resonance energy lines
const MAX_ENERGY_LINES = 15;
const energyLines = [];
let energyLinesInited = false;
function initEnergyLines() {
  if (energyLinesInited) return;
  energyLinesInited = true;
  const lineMat = new THREE.LineBasicMaterial({
    color: C.crystal, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  for (let i = 0; i < MAX_ENERGY_LINES; i++) {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(6); // 2 points x 3 coords
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.attributes.position.setUsage(THREE.DynamicDrawUsage);
    const line = new THREE.Line(geo, lineMat.clone());
    line.visible = false;
    scene.add(line);
    energyLines.push({ line, geo, opacity: 0, active: false });
  }
}

// Batch 2 Item 2: Visible echo bloom wave ring
let echoBloomRing = null;
function getEchoBloomRing() {
  if (echoBloomRing) return echoBloomRing;
  const ringGeo = new THREE.RingGeometry(0.9, 1.0, 48);
  const ringMat = new THREE.MeshBasicMaterial({
    color: C.echoBloom, transparent: true, opacity: 0.5,
    side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending
  });
  echoBloomRing = new THREE.Mesh(ringGeo, ringMat);
  echoBloomRing.rotation.x = -Math.PI / 2;
  echoBloomRing.visible = false;
  scene.add(echoBloomRing);
  return echoBloomRing;
}

// ================================================================
// Keep-out zones — prevent entities from spawning on fairy rings / ponds
// ================================================================
const keepOutZones = []; // { x, z, r2 } — r2 is squared radius

function inKeepOut(x, z) {
  for (let i = 0; i < keepOutZones.length; i++) {
    const dx = keepOutZones[i].x - x, dz = keepOutZones[i].z - z;
    if (dx * dx + dz * dz < keepOutZones[i].r2) return true;
  }
  return false;
}

// ================================================================
// Populate world
// ================================================================
function populate() {
  // Trees — clustered placement: dense groves + sparse clearings
  // 1. Generate cluster centers
  const clusterN = 25 + Math.floor(sr() * 15); // 25-39 grove clusters
  const clusters = [];
  for (let ci = 0; ci < clusterN; ci++) {
    const ang = sr() * 6.28, d = 8 + sr() * (WORLD_R - 15);
    clusters.push({
      x: Math.cos(ang) * d,
      z: Math.sin(ang) * d,
      r: 6 + sr() * 18,          // cluster radius 6-24m
      density: 0.5 + sr() * 0.5  // density weight
    });
  }
  // 2. Generate clearing zones (areas with no trees)
  const clearingN = 5 + Math.floor(sr() * 4); // 5-8 clearings
  const clearings = [];
  for (let ci = 0; ci < clearingN; ci++) {
    const ang = sr() * 6.28, d = 12 + sr() * (WORLD_R * 0.65);
    clearings.push({
      x: Math.cos(ang) * d,
      z: Math.sin(ang) * d,
      r2: (10 + sr() * 15) ** 2  // clearing radius 10-25m, stored squared
    });
  }
  // 3. Place trees: ~80% in clusters, ~20% scattered
  for (let i = 0; i < TREE_N; i++) {
    let x, z, ok = false;
    for (let a = 0; a < 25; a++) {
      if (sr() < 0.2) {
        // Scattered lone tree — uniform random placement
        const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R - 10);
        x = Math.cos(ang) * d; z = Math.sin(ang) * d;
      } else {
        // Cluster tree — pick a random cluster, offset from center with gaussian-like spread
        const ci = Math.floor(sr() * clusterN);
        const cl = clusters[ci];
        // Box-Muller-ish: average of 2 uniform samples for bell-shaped distribution
        const offR = cl.r * (sr() + sr()) * 0.5 * cl.density;
        const offA = sr() * 6.28;
        x = cl.x + Math.cos(offA) * offR;
        z = cl.z + Math.sin(offA) * offR;
      }
      // Check within world bounds
      if (x * x + z * z > (WORLD_R - 5) * (WORLD_R - 5)) continue;
      // Check clearings — reject if inside a clearing
      let inClearing = false;
      for (let ci = 0; ci < clearings.length; ci++) {
        const dx = clearings[ci].x - x, dz = clearings[ci].z - z;
        if (dx * dx + dz * dz < clearings[ci].r2) { inClearing = true; break; }
      }
      if (inClearing) continue;
      // Minimum spacing between trees (2.5m)
      ok = true;
      for (let j = 0; j < trees_data.length; j++) {
        const dx = trees_data[j].x - x, dz = trees_data[j].z - z;
        if (dx * dx + dz * dz < 6.25) { ok = false; break; }
      }
      if (ok) break;
    }
    if (ok) {
      const treeH = 6 + sr() * 10;
      sr(); // radius (consumed for RNG alignment)
      const gy = getGroundY(x, z);
      const yRot = sr() * Math.PI * 2;
      const scale = 0.8 + sr() * 0.4;
      const impostor = makeTreeImpostor(treeH, gy);
      impostor.position.x = x;
      impostor.position.z = z;
      treeImpostors.push(impostor);
      trees_data.push({ x, z, y: gy, treeH, yRot, scale });
      keepOutZones.push({ x, z, r2: 4 }); // 2m radius
    }
  }
  // Create 10 instanced templates (2 per palette × 5 palettes)
  const treeTemplates = createTreeTemplates(10);
  const maxPerTemplate = Math.ceil(TREE_N / 10) + 10;
  treeMeshes = createTreeInstances(treeTemplates, trees_data, maxPerTemplate);
  // Fairy rings — spawn early so other entities respect keep-out zones
  for (let i = 0; i < FAIRY_RING_N; i++) {
    let fx, fz, ok2 = false;
    for (let a = 0; a < 20; a++) {
      const ang = sr() * 6.28, d = 10 + sr() * (WORLD_R * 0.6);
      fx = Math.cos(ang) * d; fz = Math.sin(ang) * d;
      ok2 = !inKeepOut(fx, fz);
      if (ok2) break;
    }
    if (ok2) {
      registerFlatZone(fx, fz, 4);
      const fr = makeFairyRing(fx, fz);
      fr.group.position.y = getGroundY(fx, fz);
      fairyRings.push(fr);
      keepOutZones.push({ x: fx, z: fz, r2: 64 }); // 8m radius — matches flat zone effect range
    }
  }
  // Ponds — spawn early so other entities respect keep-out zones
  for (let i = 0; i < POND_N; i++) {
    let px, pz, ok3 = false;
    for (let a = 0; a < 20; a++) {
      const ang = sr() * 6.28, d = 8 + sr() * (WORLD_R * 0.6);
      px = Math.cos(ang) * d; pz = Math.sin(ang) * d;
      ok3 = !inKeepOut(px, pz);
      if (ok3) break;
    }
    if (ok3) {
      registerFlatZone(px, pz, 3);
      const po = makePond(px, pz);
      po.group.position.y = getGroundY(px, pz);
      ponds.push(po);
      keepOutZones.push({ x: px, z: pz, r2: 49 }); // 7m radius — matches flat zone effect range
    }
  }
  // Precompute tree density weights for biome-aware flora placement
  const treeDensity = new Float32Array(trees_data.length);
  let totalDensity = 0;
  for (let i = 0; i < trees_data.length; i++) {
    let count = 0;
    for (let j = 0; j < trees_data.length; j++) {
      if (i === j) continue;
      const dx = trees_data[i].x - trees_data[j].x;
      const dz = trees_data[i].z - trees_data[j].z;
      if (dx * dx + dz * dz < 144) count++; // within 12m
    }
    treeDensity[i] = Math.max(count, 0.2); // floor so isolated trees aren't zero-weight
    totalDensity += treeDensity[i];
  }
  // Helper: count trees within 10m of a position (for open-area detection)
  function countNearTrees(x, z) {
    let count = 0;
    for (let j = 0; j < trees_data.length; j++) {
      const dx = x - trees_data[j].x, dz = z - trees_data[j].z;
      if (dx * dx + dz * dz < 100) count++;
    }
    return count;
  }
  // Mushrooms near trees — weighted toward dense groves
  for (let i = 0; i < MUSH_N; i++) {
    let r = sr() * totalDensity, refIdx = 0;
    for (let j = 0; j < treeDensity.length; j++) {
      r -= treeDensity[j];
      if (r <= 0) { refIdx = j; break; }
    }
    const ref = trees_data[refIdx];
    const ang = sr() * 6.28, d = 1 + sr() * 4;
    const mx = ref.x + Math.cos(ang) * d, mz = ref.z + Math.sin(ang) * d;
    if (inKeepOut(mx, mz)) continue;
    const m = makeMush(mx, mz);
    m.group.position.y = getGroundY(mx, mz);
    mush_data.push(m);
    keepOutZones.push({ x: mx, z: mz, r2: 1 });
  }
  // Crystals
  for (let i = 0; i < CRYSTAL_N; i++) {
    const ang = sr() * 6.28, d = 8 + sr() * WORLD_R * 0.6;
    const cx = Math.cos(ang) * d, cz = Math.sin(ang) * d;
    if (inKeepOut(cx, cz)) continue;
    const c = makeCrystal(cx, cz);
    c.group.position.y = getGroundY(cx, cz);
    crys_data.push(c);
    keepOutZones.push({ x: cx, z: cz, r2: 4 });
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
    if (inKeepOut(px, pz)) continue;
    const p = makePuff(px, pz);
    p.group.position.y = getGroundY(px, pz);
    p._baseY = getGroundY(px, pz);
    puffs.push(p);
  }
  // Spirit Deer
  for (let i = 0; i < DEER_N; i++) {
    const ang = sr() * 6.28, d = 12 + sr() * WORLD_R * 0.5;
    const dx = Math.cos(ang) * d, dz = Math.sin(ang) * d;
    if (inKeepOut(dx, dz)) continue;
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
    const rad = 2 + sr() * 2.5, cnt = 25 + Math.floor(sr() * 20);
    if (inKeepOut(gx, gz)) continue;
    const gp = makeGrassPatch(gx, gz, rad, cnt, pal);
    gp.mesh.position.y = getGroundY(gx, gz);
    grassPatches.push(gp);
    keepOutZones.push({ x: gx, z: gz, r2: rad * rad });
  }
  // Rocks
  for (let i = 0; i < ROCK_N; i++) {
    let rx, rz, ok4 = false;
    for (let a = 0; a < 10; a++) {
      const ang = sr() * 6.28, d = 3 + sr() * (WORLD_R * 0.85);
      rx = Math.cos(ang) * d; rz = Math.sin(ang) * d;
      ok4 = !inKeepOut(rx, rz);
      if (ok4) break;
    }
    if (ok4) {
      const r = makeRock(rx, rz);
      r.group.position.y = getGroundY(rx, rz) - 0.08;
      rocks_data.push(r);
      keepOutZones.push({ x: rx, z: rz, r2: 2.25 });
    }
  }
  // Ferns
  for (let i = 0; i < FERN_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const ang = sr() * 6.28, d = 1 + sr() * 5;
    const fx = ref.x + Math.cos(ang) * d, fz = ref.z + Math.sin(ang) * d;
    if (inKeepOut(fx, fz)) continue;
    const f = makeFern(fx, fz);
    f.group.position.y = getGroundY(fx, fz);
    ferns.push(f);
    keepOutZones.push({ x: fx, z: fz, r2: 1 });
  }
  // Flowers — biased toward open areas
  for (let i = 0; i < FLOWER_N; i++) {
    const ang = sr() * 6.28, d = 3 + sr() * (WORLD_R * 0.7);
    const flx = Math.cos(ang) * d, flz = Math.sin(ang) * d;
    if (inKeepOut(flx, flz)) continue;
    if (countNearTrees(flx, flz) > 1 && sr() < 0.8) continue;
    const fl = makeFlower(flx, flz);
    fl.group.position.y = getGroundY(flx, flz);
    flowers.push(fl);
    keepOutZones.push({ x: flx, z: flz, r2: 1 });
  }
  // Reeds — biased toward open areas
  for (let i = 0; i < REED_N; i++) {
    const ang = sr() * 6.28, d = 4 + sr() * (WORLD_R * 0.8);
    const rdx = Math.cos(ang) * d, rdz = Math.sin(ang) * d;
    if (inKeepOut(rdx, rdz)) continue;
    if (countNearTrees(rdx, rdz) > 1 && sr() < 0.8) continue;
    const rd = makeReed(rdx, rdz);
    rd.group.position.y = getGroundY(rdx, rdz);
    reeds.push(rd);
    keepOutZones.push({ x: rdx, z: rdz, r2: 1 });
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
  // Dandelions — biased toward open areas
  for (let i = 0; i < DANDELION_N; i++) {
    const ang = sr() * 6.28, d = 4 + sr() * (WORLD_R * 0.7);
    const dnx = Math.cos(ang) * d, dnz = Math.sin(ang) * d;
    if (inKeepOut(dnx, dnz)) continue;
    if (countNearTrees(dnx, dnz) > 1 && sr() < 0.8) continue;
    const dn = makeDandelion(dnx, dnz);
    dn.group.position.y = getGroundY(dnx, dnz);
    dandelions.push(dn);
    keepOutZones.push({ x: dnx, z: dnz, r2: 1 });
  }
  // Bubbles (float above terrain)
  for (let i = 0; i < BUBBLE_N; i++) {
    const ang = sr() * 6.28, d = 5 + sr() * WORLD_R * 0.6;
    const bx = Math.cos(ang) * d, bz = Math.sin(ang) * d;
    bubbles.push(makeBubble(bx, getGroundY(bx, bz) + 0.5 + sr() * 5, bz));
  }
  // Thornblooms (open areas)
  for (let i = 0; i < THORNBLOOM_N; i++) {
    const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R * 0.7);
    const tx = Math.cos(ang) * d, tz = Math.sin(ang) * d;
    if (inKeepOut(tx, tz)) continue;
    const tb = makeThornbloom(tx, tz);
    tb.group.position.y = getGroundY(tx, tz);
    thornblooms.push(tb);
    keepOutZones.push({ x: tx, z: tz, r2: 2.25 });
  }
  // Helixvines (near trees)
  for (let i = 0; i < HELIXVINE_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const ang = sr() * 6.28, d = 2 + sr() * 4;
    const hx = ref.x + Math.cos(ang) * d, hz = ref.z + Math.sin(ang) * d;
    if (inKeepOut(hx, hz)) continue;
    const hv = makeHelixvine(hx, hz);
    hv.group.position.y = getGroundY(hx, hz);
    helixvines.push(hv);
    keepOutZones.push({ x: hx, z: hz, r2: 1 });
  }
  // Snapthorns (open areas)
  for (let i = 0; i < SNAPTHORN_N; i++) {
    const ang = sr() * 6.28, d = 6 + sr() * (WORLD_R * 0.65);
    const sx = Math.cos(ang) * d, sz = Math.sin(ang) * d;
    if (inKeepOut(sx, sz)) continue;
    const sn = makeSnapthorn(sx, sz);
    sn.group.position.y = getGroundY(sx, sz);
    snapthorns.push(sn);
    keepOutZones.push({ x: sx, z: sz, r2: 2.25 });
  }
  // SpiralFronds (near trees)
  for (let i = 0; i < SPIRALFROND_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const ang = sr() * 6.28, d = 2 + sr() * 5;
    const sfx = ref.x + Math.cos(ang) * d, sfz = ref.z + Math.sin(ang) * d;
    if (inKeepOut(sfx, sfz)) continue;
    const sf = makeSpiralFrond(sfx, sfz);
    sf.group.position.y = getGroundY(sfx, sfz);
    spiralfronds.push(sf);
    keepOutZones.push({ x: sfx, z: sfz, r2: 1.5 });
  }
  // CorpseBlooms (open areas)
  for (let i = 0; i < CORPSEBLOOM_N; i++) {
    const ang = sr() * 6.28, d = 8 + sr() * (WORLD_R * 0.6);
    const cbx = Math.cos(ang) * d, cbz = Math.sin(ang) * d;
    if (inKeepOut(cbx, cbz)) continue;
    const cb = makeCorpseBloom(cbx, cbz);
    cb.group.position.y = getGroundY(cbx, cbz);
    corpseblooms.push(cb);
    keepOutZones.push({ x: cbx, z: cbz, r2: 3 });
  }
  // OrbBushes (scattered)
  for (let i = 0; i < ORBBUSH_N; i++) {
    const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R * 0.7);
    const obx = Math.cos(ang) * d, obz = Math.sin(ang) * d;
    if (inKeepOut(obx, obz)) continue;
    const ob = makeOrbBush(obx, obz);
    ob.group.position.y = getGroundY(obx, obz);
    orbbushes.push(ob);
    keepOutZones.push({ x: obx, z: obz, r2: 1.5 });
  }
  // LanternPods (near trees)
  for (let i = 0; i < LANTERNPOD_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const ang = sr() * 6.28, d = 2 + sr() * 4;
    const lpx = ref.x + Math.cos(ang) * d, lpz = ref.z + Math.sin(ang) * d;
    if (inKeepOut(lpx, lpz)) continue;
    const lp = makeLanternPod(lpx, lpz);
    lp.group.position.y = getGroundY(lpx, lpz);
    lanternpods.push(lp);
    keepOutZones.push({ x: lpx, z: lpz, r2: 1.5 });
  }
  // VeilMoss (near rocks)
  for (let i = 0; i < VEILMOSS_N; i++) {
    const ref = rocks_data.length > 0
      ? rocks_data[Math.floor(sr() * rocks_data.length)]
      : { x: 0, z: 0 };
    const ang = sr() * 6.28, d = 1 + sr() * 3;
    const vmx = ref.x + Math.cos(ang) * d, vmz = ref.z + Math.sin(ang) * d;
    if (inKeepOut(vmx, vmz)) continue;
    const vm = makeVeilMoss(vmx, vmz);
    vm.group.position.y = getGroundY(vmx, vmz);
    veilmosses.push(vm);
    keepOutZones.push({ x: vmx, z: vmz, r2: 1 });
  }
  // Ground glow patches (subtle bioluminescent light on terrain)
  for (let i = 0; i < GROUND_GLOW_N; i++) {
    const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R * 0.8);
    const gx = Math.cos(ang) * d, gz = Math.sin(ang) * d;
    const patchR = 1.5 + sr() * 3.5;
    const col = C.groundGlowColors[Math.floor(sr() * C.groundGlowColors.length)];
    const baseOp = 0.03 + sr() * 0.05;
    const mat = new THREE.MeshBasicMaterial({
      color: col, transparent: true, opacity: baseOp,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(new THREE.CircleGeometry(patchR, 10), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(gx, getGroundY(gx, gz) + 0.02, gz);
    scene.add(mesh);
    groundGlows.push({ mesh, mat, phase: sr() * 6.28, baseOpacity: baseOp, speed: 0.3 + sr() * 0.3, x: gx, z: gz });
  }

  // Re-sample tree heights after all flat zones are registered
  // (ponds/fairy rings register flat zones that modify getGroundY retroactively)
  for (let i = 0; i < trees_data.length; i++) {
    const tr = trees_data[i];
    const newY = getGroundY(tr.x, tr.z);
    tr.y = newY;
    if (treeImpostors[i]) {
      treeImpostors[i].position.y = newY + (tr.treeH || 10) * 0.6;
    }
  }
  // Rebuild instanced tree matrices with corrected heights
  if (treeMeshes.length > 0) {
    const _d = new THREE.Object3D();
    for (let ti = 0; ti < treeMeshes.length; ti++) {
      const mesh = treeMeshes[ti];
      for (let ii = 0; ii < mesh.instances.length; ii++) {
        const inst = mesh.instances[ii];
        const td = trees_data[inst.posIdx];
        inst.y = td.y;
        _d.position.set(td.x, td.y, td.z);
        _d.rotation.set(0, td.yRot, 0);
        _d.scale.setScalar(td.scale);
        _d.updateMatrix();
        if (mesh.trunk) mesh.trunk.setMatrixAt(ii, _d.matrix);
        if (mesh.canopy) mesh.canopy.setMatrixAt(ii, _d.matrix);
        if (mesh.glow) mesh.glow.setMatrixAt(ii, _d.matrix);
        if (mesh.detail) mesh.detail.setMatrixAt(ii, _d.matrix);
      }
      if (mesh.trunk) mesh.trunk.instanceMatrix.needsUpdate = true;
      if (mesh.canopy) mesh.canopy.instanceMatrix.needsUpdate = true;
      if (mesh.glow) mesh.glow.instanceMatrix.needsUpdate = true;
      if (mesh.detail) mesh.detail.instanceMatrix.needsUpdate = true;
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
  // --- Tree 4-tier LOD with instanced meshes ---
  // Tier 0 (<20m): full detail — main + detail + glow InstancedMesh, wind sway
  // Tier 1 (20-70m): reduced — main + glow only (no detail)
  // Tier 2 (70-110m): impostor — billboard sprite only
  // Tier 3 (>110m): hidden entirely
  const px = player.pos.x, py = player.pos.y, pz = player.pos.z;
  updateTreeLOD(treeMeshes, treeImpostors, px, py, pz, t, wAmp, wLeanX, wLeanZ);
  // Grass sway — single call updates shared GPU uniforms for all patches
  updateGrassGlobals(t, wAmp, wLeanX, wLeanZ, px, pz);
  // Ground shader uniforms (procedural patterns + player proximity glow)
  updateGroundUniforms(t, px, pz);
  // Ferns — visibility cull beyond 40m, animate within 30m (3D distance)
  for (let i = 0; i < ferns.length; i++) {
    const f = ferns[i];
    const fdx = f.group.position.x - px, fdy = f.group.position.y - py, fdz = f.group.position.z - pz;
    const fd2 = fdx * fdx + fdy * fdy + fdz * fdz;
    if (fd2 > 1600) { if (f.group.visible) f.group.visible = false; continue; }
    if (!f.group.visible) f.group.visible = true;
    if (fd2 > 900) continue;
    f.group.rotation.z = Math.sin(t * 0.8 + f.phase) * 0.03 * wAmp + wLeanX;
    f.group.rotation.x = Math.sin(t * 0.6 + f.phase + 1) * 0.02 * wAmp + wLeanZ;
  }
  // Flowers — visibility cull beyond 40m, animate within 30m (3D distance)
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    const fldx = fl.group.position.x - px, fldy = fl.group.position.y - py, fldz = fl.group.position.z - pz;
    const fld2 = fldx * fldx + fldy * fldy + fldz * fldz;
    if (fld2 > 1600) { if (fl.group.visible) fl.group.visible = false; continue; }
    if (!fl.group.visible) fl.group.visible = true;
    if (fld2 > 900) continue;
    const p = Math.sin(t * 1.0 + fl.phase) * 0.5 + 0.5;
    fl.petalMat.emissiveIntensity = (0.3 + p * 0.5) * bioGlow;
    fl.group.rotation.z = Math.sin(t * 0.9 + fl.phase) * 0.04 * wAmp + wLeanX * 0.5;
  }
  // Reeds — visibility cull beyond 40m, animate within 30m (3D distance)
  for (let i = 0; i < reeds.length; i++) {
    const r = reeds[i];
    const rdx = r.group.position.x - px, rdy = r.group.position.y - py, rdz = r.group.position.z - pz;
    const rd2 = rdx * rdx + rdy * rdy + rdz * rdz;
    if (rd2 > 1600) { if (r.group.visible) r.group.visible = false; continue; }
    if (!r.group.visible) r.group.visible = true;
    if (rd2 > 900) continue;
    r.group.rotation.z = Math.sin(t * 1.1 + r.phase) * r.swayAmp * wAmp + wLeanX;
    r.group.rotation.x = Math.sin(t * 0.8 + r.phase + 2) * r.swayAmp * 0.5 * wAmp + wLeanZ;
  }
  // Thornbloom orb glow pulse + gentle sway
  for (let i = 0; i < thornblooms.length; i++) {
    const tb = thornblooms[i];
    const p = Math.sin(t * 1.2 + tb.phase) * 0.5 + 0.5;
    tb.orbMat.emissiveIntensity = (0.5 + p * 0.5) * bioGlow;
    tb.hazeMat.opacity = (0.04 + p * 0.04) * bioGlow;
    tb.group.rotation.z = Math.sin(t * 0.5 + tb.phase) * 0.02 * wAmp + wLeanX * 0.3;
    tb.group.rotation.x = Math.sin(t * 0.4 + tb.phase + 1) * 0.015 * wAmp + wLeanZ * 0.3;
  }
  // Helixvine pod glow pulse
  for (let i = 0; i < helixvines.length; i++) {
    const hv = helixvines[i];
    for (let j = 0; j < hv.podMats.length; j++) {
      const p = Math.sin(t * 1.5 + hv.phase + j * 1.8) * 0.5 + 0.5;
      hv.podMats[j].emissiveIntensity = (0.3 + p * 0.5) * bioGlow;
    }
    hv.group.rotation.z = Math.sin(t * 0.35 + hv.phase) * 0.01 * wAmp + wLeanX * 0.2;
  }
  // Snapthorn continuous animation (tentacles + breathing)
  updateSnapthorns(snapthorns, dt, t, bioGlow);
  // SpiralFrond tip glow pulse + sway
  for (let i = 0; i < spiralfronds.length; i++) {
    const sf = spiralfronds[i];
    const sdx = sf.x - px, sdz = sf.z - pz;
    const sd2 = sdx * sdx + sdz * sdz;
    if (sd2 > 1600) { if (sf.group.visible) sf.group.visible = false; continue; }
    if (!sf.group.visible) sf.group.visible = true;
    if (sd2 < 900) {
      for (let j = 0; j < sf.tipMats.length; j++) {
        const p = Math.sin(t * 1.8 + sf.phase + j * 1.5) * 0.5 + 0.5;
        sf.tipMats[j].emissiveIntensity = (0.3 + p * 0.5) * bioGlow;
      }
      sf.group.rotation.z = Math.sin(t * 0.4 + sf.phase) * 0.015 * wAmp + wLeanX * 0.2;
      sf.group.rotation.x = Math.sin(t * 0.35 + sf.phase + 1) * 0.01 * wAmp + wLeanZ * 0.2;
    }
  }
  // CorpseBloom fly orbiting + glow pulse
  for (let i = 0; i < corpseblooms.length; i++) {
    const cb = corpseblooms[i];
    const cdx = cb.x - px, cdz = cb.z - pz;
    const cd2 = cdx * cdx + cdz * cdz;
    if (cd2 > 1600) { if (cb.group.visible) cb.group.visible = false; continue; }
    if (!cb.group.visible) cb.group.visible = true;
    if (cd2 < 900) {
      cb.columnMat.emissiveIntensity = (0.3 + Math.sin(t * 1.0 + cb.phase) * 0.25) * bioGlow;
      cb.hazeMat.opacity = (0.03 + Math.sin(t * 0.8 + cb.phase) * 0.02) * bioGlow;
      for (let fi = 0; fi < cb.flies.length; fi++) {
        const flyAng = t * (2 + fi * 0.5) + fi * 2.1;
        const flyR = 0.2 + Math.sin(t * 0.7 + fi) * 0.08;
        const flyH = 0.1 + Math.sin(t * 1.3 + fi * 1.7) * 0.15;
        cb.flies[fi].position.set(Math.cos(flyAng) * flyR, cb.spadixY + flyH, Math.sin(flyAng) * flyR);
      }
      cb.group.rotation.z = Math.sin(t * 0.3 + cb.phase) * 0.01 * wAmp + wLeanX * 0.15;
    }
  }
  // OrbBush orb pulse + sway
  for (let i = 0; i < orbbushes.length; i++) {
    const ob = orbbushes[i];
    const odx = ob.x - px, odz = ob.z - pz;
    const od2 = odx * odx + odz * odz;
    if (od2 > 1600) { if (ob.group.visible) ob.group.visible = false; continue; }
    if (!ob.group.visible) ob.group.visible = true;
    if (od2 < 900) {
      for (let j = 0; j < ob.orbMats.length; j++) {
        const p = Math.sin(t * 2.0 + ob.phase + j * 1.3) * 0.5 + 0.5;
        ob.orbMats[j].emissiveIntensity = (0.3 + p * 0.5) * bioGlow;
      }
      ob.group.rotation.z = Math.sin(t * 0.45 + ob.phase) * 0.012 * wAmp + wLeanX * 0.2;
      ob.group.rotation.x = Math.sin(t * 0.4 + ob.phase + 1) * 0.008 * wAmp + wLeanZ * 0.2;
    }
  }
  // LanternPod pod sway + glow
  for (let i = 0; i < lanternpods.length; i++) {
    const lp = lanternpods[i];
    const ldx = lp.x - px, ldz = lp.z - pz;
    const ld2 = ldx * ldx + ldz * ldz;
    if (ld2 > 1600) { if (lp.group.visible) lp.group.visible = false; continue; }
    if (!lp.group.visible) lp.group.visible = true;
    if (ld2 < 900) {
      for (let j = 0; j < lp.podMats.length; j++) {
        const p = Math.sin(t * 1.5 + lp.phase + j * 1.8) * 0.5 + 0.5;
        lp.podMats[j].emissiveIntensity = (0.3 + p * 0.4) * bioGlow;
      }
      lp.group.rotation.z = Math.sin(t * 0.6 + lp.phase) * 0.02 * wAmp + wLeanX * 0.25;
      lp.group.rotation.x = Math.sin(t * 0.5 + lp.phase + 1) * 0.015 * wAmp + wLeanZ * 0.25;
    }
  }
  // VeilMoss curtain sway + glow
  for (let i = 0; i < veilmosses.length; i++) {
    const vm = veilmosses[i];
    const vdx = vm.x - px, vdz = vm.z - pz;
    const vd2 = vdx * vdx + vdz * vdz;
    if (vd2 > 1600) { if (vm.group.visible) vm.group.visible = false; continue; }
    if (!vm.group.visible) vm.group.visible = true;
    if (vd2 < 900) {
      for (let j = 0; j < vm.veilMats.length; j++) {
        vm.veilMats[j].rotation.z = Math.sin(t * 0.8 + vm.phase + j * 0.7) * 0.06 * wAmp;
      }
      vm.group.rotation.z = Math.sin(t * 0.35 + vm.phase) * 0.01 * wAmp + wLeanX * 0.15;
    }
  }
  // Ground glow patch pulse
  for (let i = 0; i < groundGlows.length; i++) {
    const gg = groundGlows[i];
    const gdx = gg.x - px, gdz = gg.z - pz;
    if (gdx * gdx + gdz * gdz > 3600) { gg.mesh.visible = false; continue; }
    gg.mesh.visible = true;
    const pulse = Math.sin(t * gg.speed + gg.phase) * 0.3 + 0.7;
    gg.mat.opacity = gg.baseOpacity * pulse * bioGlow;
  }
}

function updateJellies(dt, t) {
  // Batch 2 Item 1: Nearby jellies sync glow phase over time
  // First pass: compute sync phase for each jelly based on neighbors
  for (let i = 0; i < jellies.length; i++) {
    const j = jellies[i], g = j.group;
    const jx = g.position.x, jz = g.position.z;
    if (j._syncPhase === undefined) j._syncPhase = j.phase;

    // Find nearby jellies and blend toward their average phase
    let syncSum = 0, syncCount = 0;
    for (let k = 0; k < jellies.length; k++) {
      if (k === i) continue;
      const o = jellies[k];
      const odx = o.group.position.x - jx, odz = o.group.position.z - jz;
      if (odx * odx + odz * odz < 225) { // within 15m
        syncSum += o._syncPhase || o.phase;
        syncCount++;
      }
    }
    if (syncCount > 0) {
      const avgPhase = syncSum / syncCount;
      // Gradually converge toward neighbor average (sync rate)
      j._syncPhase += (avgPhase - j._syncPhase) * dt * 0.4;
    }
  }

  // Batch 2 Item 4: Jelly day/night — higher at DEEP_NIGHT, lower at DAWN
  const jellyAltMod = dayPhase === 'DEEP_NIGHT' ? 2.0 : (dayPhase === 'DAWN' ? -1.5 : 0);

  for (let i = 0; i < jellies.length; i++) {
    // Visibility culling — skip rendering/update for distant jellies
    const _jg = jellies[i].group;
    const _jdx = _jg.position.x - player.pos.x, _jdz = _jg.position.z - player.pos.z;
    const _jdy = _jg.position.y - player.pos.y;
    if (_jdx * _jdx + _jdy * _jdy + _jdz * _jdz > 3025) { _jg.visible = false; continue; }
    _jg.visible = true;
    const j = jellies[i], g = j.group;
    const jx = g.position.x, jz = g.position.z;
    const jFloatY = j.floatY + jellyAltMod;

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
      playCreatureSound('jelly', { x: jx, z: jz }, player.pos);
    }

    switch (j._state) {
      case 'drift': {
        j.driftAng += dt * 0.15;
        const radius = 8 + Math.sin(t * 0.1 + j.phase) * 4;
        const tx = j.homeX + Math.cos(j.driftAng) * radius;
        const tz = j.homeZ + Math.sin(j.driftAng) * radius;
        g.position.x += (tx - jx) * dt * 0.3;
        g.position.z += (tz - jz) * dt * 0.3;
        g.position.y = jFloatY + Math.sin(t * j.wobble + j.phase) * 1.5;
        break;
      }
      case 'pulse': {
        j.driftAng += dt * 0.08;
        g.position.x += Math.cos(j.driftAng) * dt * 0.3;
        g.position.z += Math.sin(j.driftAng) * dt * 0.3;
        g.position.y = jFloatY + Math.sin(t * j.wobble + j.phase) * 1.0;
        // Use synchronized phase for coordinated pulsing
        j._pulseSync = Math.sin(t * 2.0 + j._syncPhase) * 0.5 + 0.5;
        break;
      }
      case 'migrate': {
        g.position.x += Math.cos(j._migrateAng) * dt * 1.0;
        g.position.z += Math.sin(j._migrateAng) * dt * 1.0;
        g.position.y = jFloatY + Math.sin(t * j.wobble + j.phase) * 0.8;
        const md2 = g.position.x * g.position.x + g.position.z * g.position.z;
        if (md2 > (WORLD_R * 0.8) * (WORLD_R * 0.8)) j._migrateAng += Math.PI;
        break;
      }
      case 'display': {
        j.driftAng += dt * 0.4;
        g.position.x += Math.cos(j.driftAng) * dt * 0.8;
        g.position.z += Math.sin(j.driftAng) * dt * 0.8;
        g.position.y = jFloatY + Math.sin(t * 2.0 + j.phase) * 2.0;
        // Storm sync: all jellies converge to global beat
        j._syncPhase += (0 - j._syncPhase) * dt * 2.0;
        break;
      }
    }

    // Terrain floor — prevent jellies going underground on hills
    const jellyGroundY = getGroundY(g.position.x, g.position.z);
    if (g.position.y < jellyGroundY + 3) g.position.y = jellyGroundY + 3;

    // Periodic hum sound
    if (j._state === 'pulse' && Math.random() < 0.003) {
      playCreatureSound('jelly', { x: jx, z: jz }, player.pos);
    }
    // Visual updates — use synchronized phase for coordinated glow waves
    const syncP = j._syncPhase || j.phase;
    const basePulse = Math.sin(t * 1.2 + syncP) * 0.5 + 0.5;
    let emissiveMult = 1.0, opacityBoost = 0;
    if (j._state === 'pulse') {
      emissiveMult = 1.0 + j._pulseSync * 1.5;
      opacityBoost = j._pulseSync * 0.15;
    } else if (j._state === 'display') {
      // Storm: all jellies flash in unison
      const stormPulse = Math.sin(t * 4) * 0.5 + 0.5;
      emissiveMult = 1.5 + stormPulse * 1.2;
      opacityBoost = 0.15 + stormPulse * 0.1;
    } else if (j._state === 'drift') {
      // Even drifting jellies get subtle sync glow
      emissiveMult = 1.0 + basePulse * 0.3;
    }
    j.bellMat.emissiveIntensity = (0.4 + basePulse * 0.8) * bioGlow * emissiveMult;
    j.bellMat.opacity = 0.35 + basePulse * 0.25 + opacityBoost;
    g.rotation.y += dt * 0.2;
    for (let ti = 2; ti < g.children.length; ti++) {
      g.children[ti].rotation.x = Math.sin(t * 2 + ti + syncP) * 0.15;
      g.children[ti].rotation.z = Math.sin(t * 1.5 + ti * 0.7 + syncP) * 0.1;
    }
  }
}

function updatePuffs(dt, t) {
  const sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
  // Batch 2 Item 4: Puffling day/night — sleepy at DAWN, playful at NIGHT
  const puffSpeedMult = dayPhase === 'DAWN' ? 0.6 : (dayPhase === 'NIGHT' ? 1.3 : 1.0);
  const puffIdleMult = dayPhase === 'DAWN' ? 2.0 : (dayPhase === 'NIGHT' ? 0.6 : 1.0);
  for (let i = 0; i < puffs.length; i++) {
    const p = puffs[i], g = p.group;
    const px = g.position.x, pz = g.position.z;
    const ddx = px - player.pos.x, ddz = pz - player.pos.z;
    const pDist2 = ddx * ddx + ddz * ddz;

    // Visibility culling — skip rendering/update for distant pufflings
    if (pDist2 > 1600) { g.visible = false; continue; }
    g.visible = true;

    // Startle check (also startled by nearby fleeing deer — Item 6: cross-species)
    if (p.state !== 'startled' && p.state !== 'following' && p.state !== 'huddle') {
      const startleR = sprinting ? 3.5 : 2.0;
      let startled = pDist2 < startleR * startleR;
      if (!startled) {
        for (let di = 0; di < deers.length; di++) {
          if (deers[di].state !== 'flee') continue;
          const deerDx = deers[di].group.position.x - px, deerDz = deers[di].group.position.z - pz;
          if (deerDx * deerDx + deerDz * deerDz < 25) { startled = true; break; }
        }
      }
      if (startled) {
        p.state = 'startled'; p._scaredT = 0.6 + Math.random() * 0.5;
        p.wanderAng = Math.atan2(ddx, ddz); p.hopTimer = 0;
        playCreatureSound('puff', { x: px, z: pz }, player.pos);
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

    // Batch 2 Item 7: Puffling flocking — gather neighbors for boid forces
    const puffPos = { x: px, z: pz };
    const puffNeighbors = [];
    for (let j = 0; j < puffs.length; j++) {
      if (j === i) continue;
      const ox = puffs[j].group.position.x, oz = puffs[j].group.position.z;
      const d2 = (ox - px) * (ox - px) + (oz - pz) * (oz - pz);
      if (d2 < 100) puffNeighbors.push({ x: ox, z: oz }); // within 10m
    }
    const sep = separation(puffPos, puffNeighbors, 1.5);
    const coh = puffNeighbors.length > 0 ? cohesion(puffPos, puffNeighbors) : { x: 0, z: 0 };
    // Flocking steer angle: gentle blend of separation + cohesion
    const flockX = sep.x * 2.0 + coh.x * 0.3;
    const flockZ = sep.z * 2.0 + coh.z * 0.3;
    const flockMag = Math.sqrt(flockX * flockX + flockZ * flockZ);

    switch (p.state) {
      case 'idle': {
        p.idleTimer -= dt;
        g.position.y = p._baseY + Math.sin(t * 2 + p.phase) * 0.02;
        g.rotation.y += Math.sin(t * 0.5 + p.phase) * dt * 0.3;
        // Idle drift toward flock center (very gentle)
        if (flockMag > 0.1 && puffNeighbors.length > 1) {
          g.position.x += coh.x * 0.05 * dt;
          g.position.z += coh.z * 0.05 * dt;
        }
        // Random idle chirp (rare)
        if (Math.random() < 0.0002) playCreatureSound('puff', { x: px, z: pz }, player.pos);
        if (p.idleTimer <= 0) {
          // Bias hop direction toward flock center
          const flockAng = flockMag > 0.2 ? Math.atan2(flockX, flockZ) : 0;
          p.state = 'hop'; p.wanderAng += (Math.random() - 0.5) * 1.5 + flockAng * 0.3; p.hopTimer = 0;
        }
        break;
      }
      case 'hop': {
        p.hopTimer += dt;
        const hopDur = 1.2;
        const frac = p.hopTimer / hopDur;
        if (frac >= 1.0) {
          p.state = 'idle'; p.idleTimer = (1.5 + Math.random() * 3) * puffIdleMult; g.position.y = p._baseY;
        } else {
          g.position.y = p._baseY + Math.sin(frac * Math.PI) * 0.3;
          g.position.x += Math.sin(p.wanderAng) * p.speed * puffSpeedMult * dt;
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
        // Scatter with separation force (Batch 2 Item 7)
        g.position.x += Math.sin(p.wanderAng) * p.speed * 2 * dt + sep.x * 0.5 * dt;
        g.position.z += Math.cos(p.wanderAng) * p.speed * 2 * dt + sep.z * 0.5 * dt;
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

    // Sparkle mote orbiting
    if (p.sparkles) {
      for (let si = 0; si < p.sparkles.length; si++) {
        const sp = p.sparkles[si];
        const sa = t * (2 + si * 0.7) + sp.phase;
        sp.mesh.position.set(
          Math.cos(sa) * sp.orbitR,
          0.5 + Math.sin(sa * 1.3) * 0.1,
          Math.sin(sa) * sp.orbitR
        );
        sp.mat.opacity = (0.3 + Math.sin(t * 4 + sp.phase) * 0.3) * bioGlow;
      }
    }
    // Crown glow
    if (p.crownMat) {
      p.crownMat.emissiveIntensity = (0.2 + Math.sin(t * 2 + p.phase) * 0.15) * bioGlow;
    }

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

    // Visibility culling — skip rendering/update for distant deer
    if (pDist2 > 3600) { g.visible = false; continue; }
    g.visible = true;

    const pAng = Math.atan2(ddx, ddz);
    const alertR = sprinting ? 18 : 12;
    const alertR2 = alertR * alertR;
    const fleeR = sprinting ? 10 : DEER_FLEE_R;
    const fleeR2 = fleeR * fleeR;

    // Only recalc terrain height when moved enough (>0.5m)
    const dtx = gx - d._lastTX, dtz = gz - d._lastTZ;
    if (dtx * dtx + dtz * dtz > 0.25) { d._baseY = getGroundY(gx, gz); d._lastTX = gx; d._lastTZ = gz; }
    const deerBaseY = d._baseY;

    // Threat detection using AI senses (Item 5)
    if (d.state !== 'flee' && d.state !== 'alert' && d.state !== 'watching') {
      const deerPos = { x: gx, z: gz };
      const playerTarget = { x: player.pos.x, z: player.pos.z };
      if (pDist2 < fleeR2 || canHear(deerPos, playerTarget, fleeR, sprinting)) {
        d.state = 'flee'; d.wanderAng = pAng;
        d.fleeTimer = 2.5 + Math.random() * 2; d._zigTimer = 0;
        playCreatureSound('deer', deerPos, player.pos);
      } else if (pDist2 < alertR2 || canSee(deerPos, d.wanderAng, playerTarget, alertR, Math.PI * 0.5)) {
        d.state = 'alert'; d._stT = 1.0 + Math.random() * 1.5;
        playCreatureSound('deer', deerPos, player.pos);
      }
    }

    // Batch 2 Item 8: Deer herd awareness
    // Cascade flee: if one deer flees, nearby deer also flee
    if (d.state !== 'flee') {
      for (let di = 0; di < deers.length; di++) {
        if (di === i || deers[di].state !== 'flee') continue;
        const odx = deers[di].group.position.x - gx, odz = deers[di].group.position.z - gz;
        if (odx * odx + odz * odz < 400) { // within 20m
          d.state = 'flee'; d.wanderAng = deers[di].wanderAng + (Math.random() - 0.5) * 0.4;
          d.fleeTimer = 2 + Math.random() * 1.5; d._zigTimer = 0;
          break;
        }
      }
    }
    // Herd neighbor data for cohesion/separation
    const deerNeighbors = [];
    for (let di = 0; di < deers.length; di++) {
      if (di === i) continue;
      const ox = deers[di].group.position.x, oz = deers[di].group.position.z;
      const d2 = (ox - gx) * (ox - gx) + (oz - gz) * (oz - gz);
      if (d2 < 400) deerNeighbors.push({ x: ox, z: oz }); // within 20m
    }
    const deerSep = separation({ x: gx, z: gz }, deerNeighbors, 3);
    const deerCoh = deerNeighbors.length > 0 ? cohesion({ x: gx, z: gz }, deerNeighbors) : { x: 0, z: 0 };
    // Alert state: all nearby deer look at same threat
    if (d.state === 'alert' || d.state === 'watching') {
      d.headLook += (pAng - d.wanderAng) * 0.3 * dt;
    }

    let moveSpeed = d.speed, isMoving = false;

    switch (d.state) {
      case 'walk': {
        isMoving = true;
        d.walkTimer -= dt;
        if (d.walkTimer <= 0) {
          const r = Math.random();
          // Batch 2 Item 4: Deer day/night — graze more at DUSK, rest more at DEEP_NIGHT
          const grazeThresh = dayPhase === 'DUSK' ? 0.55 : 0.4;
          const restThresh = dayPhase === 'DEEP_NIGHT' ? 0.25 : 0.1;
          if (r < 0.25) { d.state = 'pause'; d.pauseTimer = 2 + Math.random() * 3; }
          else if (r < grazeThresh) { d.state = 'graze'; d._stT = dayPhase === 'DUSK' ? (5 + Math.random() * 6) : (3 + Math.random() * 4); }
          else if (r < grazeThresh + 0.1 && ponds.length > 0) {
            d.state = 'drink'; d._stT = 8;
            let bestD2 = Infinity;
            for (let pi = 0; pi < ponds.length; pi++) {
              const pdx = ponds[pi].x - gx, pdz = ponds[pi].z - gz;
              const pd2 = pdx * pdx + pdz * pdz;
              if (pd2 < bestD2) { bestD2 = pd2; d._drinkTgt = ponds[pi]; }
            }
          }
          else if (r < grazeThresh + 0.1 + restThresh) { d.state = 'rest'; d._stT = dayPhase === 'DEEP_NIGHT' ? (8 + Math.random() * 8) : (5 + Math.random() * 5); }
          else { d.wanderAng += (Math.random() - 0.5) * 1.2; d.walkTimer = 3 + Math.random() * 5; }
        }
        // Gently steer toward home zone
        const homeD2 = (gx - d.homeX) * (gx - d.homeX) + (gz - d.homeZ) * (gz - d.homeZ);
        if (homeD2 > 400) {
          const homeAng = Math.atan2(d.homeX - gx, d.homeZ - gz);
          d.wanderAng += (homeAng - d.wanderAng) * dt * 0.5;
        }
        // Batch 2 Item 8: Herd cohesion + separation during walk
        if (deerNeighbors.length > 0) {
          const herdAng = Math.atan2(deerCoh.x * 0.15 + deerSep.x * 0.8, deerCoh.z * 0.15 + deerSep.z * 0.8);
          d.wanderAng += (herdAng - d.wanderAng) * dt * 0.3;
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
        // Obstacle avoidance during flee (Item 5)
        const avoidF = avoidObstacles({ x: gx, z: gz }, d.wanderAng, trees_data, 3, 1.5);
        if (avoidF.x * avoidF.x + avoidF.z * avoidF.z > 0.01) {
          d.wanderAng += Math.atan2(avoidF.z, avoidF.x) * 0.3;
        }
        // Smooth world bounds (Item 5)
        const bnd = worldBounds({ x: gx, z: gz }, 8);
        if (bnd.x !== 0 || bnd.z !== 0) {
          d.wanderAng = Math.atan2(bnd.z, bnd.x);
        }
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

    // Mane flutter
    if (d.manePlanes) {
      for (let mi = 0; mi < d.manePlanes.length; mi++) {
        d.manePlanes[mi].rotation.z = Math.sin(t * 3 + mi * 1.2 + d.phase) * 0.15;
      }
    }
    // Branch orb glow pulse
    if (d.branchOrbs) {
      for (let bi = 0; bi < d.branchOrbs.length; bi++) {
        d.branchOrbs[bi].material.opacity = (0.3 + Math.sin(t * 2.5 + d.phase + bi * 1.5) * 0.3) * bioGlow;
      }
    }
    // Ghost trail spheres — lerp toward previous positions in world space
    if (d.trailSpheres) {
      const isMoving = d.state === 'walk' || d.state === 'flee';
      for (let ti = 0; ti < d.trailSpheres.length; ti++) {
        const trail = d.trailSpheres[ti];
        const lerpSpeed = 0.03 + ti * 0.02;
        trail.prevX += (gx - trail.prevX) * lerpSpeed;
        trail.prevY += (g.position.y + 0.8 - trail.prevY) * lerpSpeed;
        trail.prevZ += (gz - trail.prevZ) * lerpSpeed;
        trail.mesh.position.set(trail.prevX, trail.prevY + Math.sin(t * 2 + ti * 1.5) * 0.04, trail.prevZ);
        trail.mat.opacity = isMoving ? (0.12 - ti * 0.03) * bioGlow : 0.02 * bioGlow;
      }
    }
  }
}

function updateMoths(dt, t) {
  for (let i = 0; i < moths.length; i++) {
    const m = moths[i], g = m.group;
    const mx = g.position.x, mz = g.position.z;

    // Visibility culling — skip rendering/update for distant moths
    const _mdx = mx - player.pos.x, _mdz = mz - player.pos.z;
    if (_mdx * _mdx + _mdz * _mdz > 2025) { g.visible = false; continue; }
    g.visible = true;

    // State transitions from patrol
    if (m._state === 'patrol') {
      if (Math.random() < 0.002) {
        let bestD2 = Infinity, bestTarget = null;
        // Check crystals
        for (let ci = 0; ci < crys_data.length; ci++) {
          const cdx = crys_data[ci].x - mx, cdz = crys_data[ci].z - mz;
          const cd2 = cdx * cdx + cdz * cdz;
          if (cd2 < 900 && cd2 < bestD2) { bestD2 = cd2; bestTarget = crys_data[ci]; }
        }
        // Also check active fairy rings (Item 6: cross-species)
        for (let fi = 0; fi < fairyRings.length; fi++) {
          if (fairyRings[fi].glowIntensity < 0.3) continue;
          const fdx = fairyRings[fi].x - mx, fdz = fairyRings[fi].z - mz;
          const fd2 = fdx * fdx + fdz * fdz;
          if (fd2 < 900 && fd2 < bestD2) { bestD2 = fd2; bestTarget = fairyRings[fi]; }
        }
        if (bestTarget) {
          m._state = 'attracted'; m._attractTarget = bestTarget;
          m._stT = 6 + Math.random() * 8;
          playCreatureSound('moth', { x: mx, z: mz }, player.pos);
        }
      }
      // Rest chance higher at DAWN (Item 4: day/night)
      const restChance = dayPhase === 'DAWN' ? 0.005 : (dayPhase === 'DEEP_NIGHT' ? 0.0003 : 0.001);
      if (Math.random() < restChance) {
        let bestD2 = Infinity, bestTree = null;
        for (let ti = 0; ti < trees_data.length; ti++) {
          const tdx = trees_data[ti].x - mx, tdz = trees_data[ti].z - mz;
          const td2 = tdx * tdx + tdz * tdz;
          if (td2 < 400 && td2 < bestD2) { bestD2 = td2; bestTree = trees_data[ti]; }
        }
        if (bestTree) {
          m._state = 'rest'; m._restTree = bestTree;
          m._stT = dayPhase === 'DAWN' ? (8 + Math.random() * 10) : (4 + Math.random() * 6);
        }
      }
    }

    // Batch 2 Item 4: Moth day/night — DEEP_NIGHT=active, DAWN=sleepy
    const mothSpeed = dayPhase === 'DEEP_NIGHT' ? 1.6 : (dayPhase === 'DAWN' ? 0.5 : 1.0);
    const mothRange = dayPhase === 'DEEP_NIGHT' ? 1.4 : 1.0;

    switch (m._state) {
      case 'patrol': {
        m.orbitAng += dt * 0.4 * mothSpeed;
        const tx = m.centerX + Math.cos(m.orbitAng) * m.orbitR * mothRange;
        const tz = m.centerZ + Math.sin(m.orbitAng) * m.orbitR * mothRange;
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

    // Terrain floor — prevent moths going underground on hills
    const mothGroundY = getGroundY(g.position.x, g.position.z);
    if (g.position.y < mothGroundY + 1.5) g.position.y = mothGroundY + 1.5;

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
      playFairyBounce();
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
      playBubblePop(b.group.position, player.pos);
    }
  }
}

function updatePonds(dt, t) {
  const curRain = getRainRate();
  for (let i = 0; i < ponds.length; i++) {
    const po = ponds[i];
    // Lily pad bob — more agitated during rain (Item 8)
    const padBob = 0.015 + curRain * 0.01;
    for (let j = 0; j < po.pads.length; j++) {
      po.pads[j].mesh.position.y = 0.05 + Math.sin(t * (0.8 + curRain * 0.4) + po.pads[j].phase) * padBob;
    }
    // Water glow — slightly brighter during/after rain (Item 8)
    const rainGlowBoost = curRain * 0.08;
    po.waterMat.emissiveIntensity = (0.15 + rainGlowBoost + Math.sin(t * 1.0 + po.phase) * 0.1) * bioGlow;
    const fp = Math.sin(t * 1.2 + po.phase) * 0.5 + 0.5;
    po.flMat.emissiveIntensity = (0.3 + fp * 0.5) * bioGlow;
    // Animated ripple rings — faster and more visible during rain (Item 8)
    const rippleSpeed = 0.25 + curRain * 0.2;
    const rippleAlpha = 0.12 + curRain * 0.08;
    for (let ri = 0; ri < po.ripples.length; ri++) {
      const rp = po.ripples[ri];
      const cycle = ((t * rippleSpeed + rp.phase) % 1.0);
      const scale = 0.2 + cycle * po.pondR * 0.8;
      rp.mesh.scale.setScalar(scale);
      rp.mesh.material.opacity = (1.0 - cycle) * rippleAlpha;
    }
    // Tadpole swim paths — speed up during rain (Item 8)
    const tadSpeedMult = 1.0 + curRain * 0.5;
    for (let tdi = 0; tdi < po.tadpoles.length; tdi++) {
      const td = po.tadpoles[tdi];
      td.ang += td.speed * tadSpeedMult * dt;
      const tx = Math.cos(td.ang) * td.orbR;
      const tz = Math.sin(td.ang) * td.orbR;
      td.body.position.x = tx;
      td.body.position.z = tz;
      td.body.rotation.y = td.ang + Math.PI / 2;
      const tailOff = 0.02;
      td.tail.position.x = tx - Math.cos(td.ang) * tailOff;
      td.tail.position.z = tz - Math.sin(td.ang) * tailOff;
      td.tail.rotation.y = td.ang;
      td.tail.rotation.z = Math.PI / 2 + Math.sin(t * (8 + curRain * 2) + tdi * 3) * 0.4;
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
  // Batch 2 Item 2: Visible wave ring
  const ring = getEchoBloomRing();
  if (!echoBloomCenter) {
    ring.visible = false;
    return;
  }
  echoBloomRadius += dt * 12;
  if (echoBloomRadius > 30) {
    echoBloomCenter = null; echoBloomRadius = 0;
    ring.visible = false;
    return;
  }
  // Position and scale the ring to match wave front
  ring.visible = true;
  ring.position.set(echoBloomCenter.x, 0.15, echoBloomCenter.z);
  ring.scale.setScalar(echoBloomRadius);
  // Fade opacity as it expands
  ring.material.opacity = (1.0 - echoBloomRadius / 30) * 0.45;

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
  const px = player.pos.x, py = player.pos.y, pz = player.pos.z;
  const curRain = getRainRate();
  const stormDroop = isStorming ? 0.6 : (curRain > 0.3 ? curRain * 0.4 : 0);

  // --- Flowers: bloom on proximity, droop during storms (Item 7) ---
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    const fx = fl.group.position.x, fz = fl.group.position.z;
    const ddx = fx - px, ddz = fz - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const target = dist2 < 16 ? 1.0 : 0.0;
    fl._react = (fl._react || 0);
    fl._react += (target - fl._react) * dt * (target > 0 ? 4 : 1.5);
    // Bloom scale reduced during storms (Item 7)
    const sc = (1.0 + fl._react * 0.15) * (1.0 - stormDroop * 0.12);
    const sy = (1.0 + fl._react * 0.05) * (1.0 - stormDroop * 0.15);
    fl.group.scale.set(sc, sy, sc);
    // Add glow boost (dimmed in storms)
    fl.petalMat.emissiveIntensity += fl._react * 0.6 * bioGlow * (1.0 - stormDroop * 0.4);
  }

  // --- Mushrooms: bright pulse on proximity + glow surge after rain (Item 7) ---
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const ddx = m.x - px, ddz = m.z - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const touch = dist2 < 4 ? 1.0 : 0.0;
    m._touch = (m._touch || 0);
    m._touch += (touch - m._touch) * dt * (touch > 0 ? 6 : 1.5);
    // Rain boost: mushrooms glow brighter during/after rain (Item 7)
    const rainBoost = curRain * 0.4;
    m.capMat.emissiveIntensity += (m._touch * 1.5 + rainBoost) * bioGlow;
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

  // --- Crystal resonance: chain glow to nearby crystals, dampened in fog (Item 7) ---
  // Batch 2 Item 6: Draw visible energy lines between chaining crystals
  initEnergyLines();
  const fogDampen = weatherState === 'FOG_BANK' ? 0.5 : 1.0;
  let crystalChainCount = 0;
  let lineIdx = 0;
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
          crystalChainCount++;
          const chainStr = (1 - Math.sqrt(cd2) / 20) * 0.8 * fogDampen;
          c2.mat.emissiveIntensity += chainStr * bioGlow;
          // Activate energy line between these two crystals
          if (lineIdx < MAX_ENERGY_LINES) {
            const el = energyLines[lineIdx];
            const posArr = el.geo.attributes.position.array;
            const cy1 = 1.0, cy2 = 1.0; // crystal height
            posArr[0] = c.x; posArr[1] = cy1; posArr[2] = c.z;
            posArr[3] = c2.x; posArr[4] = cy2; posArr[5] = c2.z;
            el.geo.attributes.position.needsUpdate = true;
            el.geo.computeBoundingSphere();
            el.active = true;
            // Pulse opacity with energy flow
            const pulse = Math.sin(t * 3 + i * 1.5 + j * 0.7) * 0.3 + 0.5;
            el.opacity = chainStr * pulse * bioGlow;
            el.line.material.opacity = el.opacity;
            el.line.visible = true;
            lineIdx++;
          }
        }
      }
    }
  }
  // Fade out unused energy lines
  for (let i = lineIdx; i < MAX_ENERGY_LINES; i++) {
    const el = energyLines[i];
    if (el.line.visible) {
      el.opacity *= 0.85; // smooth fade out
      el.line.material.opacity = el.opacity;
      if (el.opacity < 0.01) el.line.visible = false;
    }
  }
  return crystalChainCount;
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

  // Firefly spawning — reduced during rain (Item 9), biased toward blooming flowers (Item 6)
  ffTimer += dt;
  const curRain = getRainRate();
  const rainDamper = Math.max(0.2, 1.0 - curRain * 0.8); // reduce spawn in rain
  const ffRate = (dirState === 'NEAR_CRYSTAL' ? 0.08 : 0.25) / rainDamper;
  const ffMax = Math.floor((dirState === 'NEAR_CRYSTAL' ? 120 : 100) * rainDamper);
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
      } else if (Math.random() < 0.3 && flowers.length > 0) {
        // Bias toward blooming flowers (Item 6)
        const fl = flowers[Math.floor(Math.random() * flowers.length)];
        if (fl._react > 0.3) {
          const fx = fl.group.position.x, fz = fl.group.position.z;
          spawnFly(fx + (Math.random() - 0.5) * 2, getGroundY(fx, fz) + 0.5, fz + (Math.random() - 0.5) * 2, 4 + Math.random() * 6);
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

  // Mushroom glow pulse + visibility cull (3D distance)
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const mdx = m.x - player.pos.x, mdy = (m.group.position.y || 0) - player.pos.y, mdz = m.z - player.pos.z;
    const md2 = mdx * mdx + mdy * mdy + mdz * mdz;
    if (md2 > 2500) { if (m.group.visible) m.group.visible = false; continue; }
    if (!m.group.visible) m.group.visible = true;
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

  // Dandelion wind dispersal — auto-scatter seeds in strong wind (Item 7)
  if (windStrength > 0.8 && Math.random() < 0.005) {
    for (let i = 0; i < dandelions.length; i++) {
      const dn = dandelions[i];
      if (!dn.dispersed && Math.random() < 0.1) {
        dn.dispersed = true;
        for (let s = 0; s < 8; s++) spawnDandSeed(dn.x, dn.h + 0.05, dn.z);
        for (let c = 2; c < dn.group.children.length; c++) dn.group.children[c].visible = false;
        dn.regrowTimer = 15 + Math.random() * 10;
      }
    }
  }

  // Batch 2 Item 5: Leaf fall from trees during wind
  // Spawn rate increases with wind strength; storm = many leaves
  const leafSpawnChance = windStrength > 0.3 ? (windStrength - 0.3) * 0.02 : 0;
  const stormLeafBoost = isStorming ? 0.03 : 0;
  if (Math.random() < leafSpawnChance + stormLeafBoost) {
    // Pick a random tree near the player for spawning
    for (let i = 0; i < trees_data.length; i++) {
      const tr = trees_data[i];
      const dx = tr.x - player.pos.x, dz = tr.z - player.pos.z;
      if (dx * dx + dz * dz < 900 && Math.random() < 0.15) { // within 30m
        const canopyY = (tr.treeH || 10) * 0.7 + (tr.y || 0);
        spawnLeaf(tr.x, canopyY, tr.z);
        break;
      }
    }
  }

  // Update all subsystems
  updateJellies(dt, t);
  updatePuffs(dt, t);
  updateDeers(dt, t);
  updateMoths(dt, t);
  updateSky(dt, t);
  updateVegetation(dt, t);
  // Batch 2 Item 3: Rock sparkles reactive to crystals, player, and chain resonance
  const rpx = player.pos.x, rpy = player.pos.y, rpz = player.pos.z;
  for (let i = 0; i < rocks_data.length; i++) {
    const rk = rocks_data[i];
    const rx = rk.x || rk.group.position.x, rz = rk.z || rk.group.position.z;
    const rrx = rx - rpx, rry = (rk.group.position.y || 0) - rpy, rrz = rz - rpz;
    const rd2 = rrx * rrx + rry * rry + rrz * rrz;
    // Visibility cull beyond 50m
    if (rd2 > 2500) { if (rk.group.visible) rk.group.visible = false; continue; }
    if (!rk.group.visible) rk.group.visible = true;
    if (!rk.sparkles) continue;
    if (rd2 > 400) continue; // skip sparkle updates beyond 20m
    // Crystal proximity boost: rocks near active crystals glow brighter
    let crystalBoost = 0;
    for (let ci = 0; ci < crys_data.length; ci++) {
      const cdx = crys_data[ci].x - rx, cdz = crys_data[ci].z - rz;
      const cd2 = cdx * cdx + cdz * cdz;
      if (cd2 < 100) { // within 10m of crystal
        crystalBoost = Math.max(crystalBoost, (1 - Math.sqrt(cd2) / 10) * 0.6);
      }
    }
    // Player proximity: subtle moss glow pulse
    const prx = rx - player.pos.x, prz = rz - player.pos.z;
    const pd2 = prx * prx + prz * prz;
    const playerGlow = pd2 < 25 ? (1 - Math.sqrt(pd2) / 5) * 0.3 : 0;
    // Chain resonance flash (uses echoBloomRadius as indicator)
    let chainFlash = 0;
    if (echoBloomCenter && echoBloomRadius > 0) {
      const edx = rx - echoBloomCenter.x, edz = rz - echoBloomCenter.z;
      const ed = Math.sqrt(edx * edx + edz * edz);
      if (Math.abs(ed - echoBloomRadius) < 3) {
        chainFlash = (1 - Math.abs(ed - echoBloomRadius) / 3) * 0.8;
      }
    }
    for (let si = 0; si < rk.sparkles.length; si++) {
      const baseSparkle = Math.sin(t * 4 + i * 2.3 + si * 1.7) * 0.35;
      rk.sparkles[si].material.opacity = 0.15 + baseSparkle + crystalBoost + playerGlow + chainFlash;
    }
    // Animate moss emissive if rock has moss
    if (rk.mossMat && playerGlow > 0) {
      rk.mossMat.emissiveIntensity = 0.05 + playerGlow * 0.4 * Math.sin(t * 2 + i) * 0.5 + 0.5;
    }
  }
  updateWisps(dt, t);
  updateDandelions(dandelions, dt, t, player.pos);
  updateFairyRings(dt, t);
  updateBubbles(dt, t);
  updatePonds(dt, t);
  updateStarMotes(dt, t, player.pos);
  updateDandSeeds(dt, t);
  updateLeaves(dt, t);
  updateDustMotes(dt);
  updateBubblePops(dt);
  updateEchoBloom(dt, t);
  const chainCount = updateFloraReactions(dt, t);
  updateQuest(dt, t);
  updateRainbowSparkles(t);

  // Footprint trails — spawn from player movement
  if (player.onGround) {
    const speed2 = player.vel.x * player.vel.x + player.vel.z * player.vel.z;
    if (speed2 > 0.5) {
      const moveAngle = Math.atan2(player.vel.x, player.vel.z);
      const sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
      spawnFootprint(player.pos.x, player.pos.z, moveAngle, sprinting);
    }
  }
  updateFootprints(dt, getRainRate());

  // Ambient creature sounds (frogs + crickets)
  updateAmbientSounds(dt, player.pos, ponds, grassPatches, dayPhase, getRainRate());

  // Audio + step cooldown
  updateStepCooldown(dt);

  // Discoveries (Item 10)
  checkDiscoveries(player.pos, deers, puffs, jellies, moths, fairyRings, ponds, chainCount);
  updateDiscoveryUI(dt);
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
  updateAurora(dt, elapsed, dayPhase, bioGlow, weatherState);

  // Lightning flash (brief ambient light spike during storms)
  // Keep flash moderate to avoid blowing out with tonemapping + bloom
  if (lightningFlash > 0) {
    hemiLight.intensity += lightningFlash * 0.8;
    scene.background.r = Math.min(scene.background.r + lightningFlash * 0.08, 0.25);
    scene.background.g = Math.min(scene.background.g + lightningFlash * 0.08, 0.25);
    scene.background.b = Math.min(scene.background.b + lightningFlash * 0.12, 0.35);
  }

  // Update audio system (Items 1-3)
  updateAudio(dt, windStrength, rainRate, isStorming, lightningFlash, dayPhase, player.pos, ponds);
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

  // Aurora (sky event)
  initAurora();

  // Build quest structures
  makeObelisk();
  makeMoat();
  makeRainbows();

  // Init audio system (Items 1-3)
  initAudio();

  // Init discoveries (Item 10)
  initDiscoveries();

  // Init UI (must be before quest so orb HUD element is available)
  initHUD();
  initOverlay();

  // Init quest system
  initQuest({
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
    playOrbCollect: playOrbCollect,
    playOrbWarble: playOrbWarble,
    playLaserZap: playLaserZap,
    playLaserHum: playLaserHum,
    stopLaserHums: stopLaserHums
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

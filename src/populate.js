// ================================================================
// World population — places all 29 entity types
// ================================================================
// Extracted from main.js. Runs once at startup.

import { Vector3, Quaternion, Object3D, CircleGeometry, Mesh, MeshBasicMaterial, AdditiveBlending, DoubleSide, RingGeometry } from 'three';
import { scene } from './core/renderer.js';

import {
  WORLD_R, TREE_N, MUSH_N, CRYSTAL_N, JELLY_N, PUFF_N, DEER_N, MOTH_N, LUMINID_N,
  GRASS_PATCHES, FERN_N, FLOWER_N, REED_N, ROCK_N, BOULDER_N, PEBBLE_N, WISP_N, DANDELION_N,
  FAIRY_RING_N, BUBBLE_N, POND_N, ORB_N,
  THORNBLOOM_N, HELIXVINE_N, SNAPTHORN_N,
  SPIRALFROND_N, CORPSEBLOOM_N, ORBBUSH_N, LANTERNPOD_N, VEILMOSS_N, GROUND_GLOW_N,
  ROCK_GROUND_SINK, C
} from './constants.js';

import { sr } from './utils/rng.js';
import { getGroundY, getMeshGroundY, getGroundNormal, registerFlatZone, buildHeightCache } from './world/terrain.js';
import { placePufflingHomeClusters, getPufflingHouseCollision } from './entities/world/pufflingHomes.js';
import { chunkGrassPatches } from './entities/flora/grass.js';
import { ORB_CREATURE_SEQUENCE } from './quest/config.js';

// ================================================================
// Slope tilt helpers — for aligning entities to terrain contour
// ================================================================
const _slopeTiltUp = new Vector3(0, 1, 0);
const _slopeTiltNormal = new Vector3();
const _slopeTiltQuat = new Quaternion();
const _slopeTiltIdent = new Quaternion();

// Apply slope tilt directly to group quaternion (for entities without per-frame sway)
function tiltToSlope(group, x, z, factor) {
  const n = getGroundNormal(x, z);
  _slopeTiltNormal.set(n.x, n.y, n.z);
  _slopeTiltQuat.setFromUnitVectors(_slopeTiltUp, _slopeTiltNormal);
  _slopeTiltQuat.slerp(_slopeTiltIdent, 1.0 - factor);
  group.quaternion.copy(_slopeTiltQuat);
}

// Compute and return a slope quaternion to store on entity data (for entities with per-frame sway)
function computeSlopeQuat(x, z, factor) {
  const n = getGroundNormal(x, z);
  _slopeTiltNormal.set(n.x, n.y, n.z);
  _slopeTiltQuat.setFromUnitVectors(_slopeTiltUp, _slopeTiltNormal);
  _slopeTiltQuat.slerp(_slopeTiltIdent, 1.0 - factor);
  return _slopeTiltQuat.clone();
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

// Grass patches keep their own overlap list. They used to push 2–4.5 m keep-out
// zones into keepOutZones, which blanketed the interior and starved every plant
// placed after them (measured 2026-09-16: 1 of 230 flowers, 2 of 90 reeds,
// 2 of 60 dandelions, 2 of 55 thornblooms survived). Grass only needs to avoid
// other grass; flowers and ferns growing through it are the point.
const grassZones = []; // { x, z, r2 }
function inGrass(x, z) {
  for (let i = 0; i < grassZones.length; i++) {
    const dx = grassZones[i].x - x, dz = grassZones[i].z - z;
    if (dx * dx + dz * dz < grassZones[i].r2) return true;
  }
  return false;
}

/**
 * @brief Try up to `tries` candidate positions; the first one outside every keep-out
 * zone that also passes `ok` (optional) is returned as [x, z], else null.
 * Every spawner below used to make a single attempt and `continue` on rejection.
 * @param {number} tries
 * @param {() => number[]} sample returns a candidate [x, z]
 * @param {(x:number, z:number) => boolean} [ok] extra acceptance test (biome bias etc.)
 */
function findSpot(tries, sample, ok) {
  for (let a = 0; a < tries; a++) {
    const c = sample();
    if (inKeepOut(c[0], c[1])) continue;
    if (ok && !ok(c[0], c[1])) continue;
    return c;
  }
  return null;
}

function makeGlyphs(glyphs_data) {
  const geo = new RingGeometry(0.8, 1.0, 16);
  for (let i = 0; i < 12; i++) {
    let gx, gz;
    for (let a = 0; a < 20; a++) {
      const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R * 0.8);
      gx = Math.cos(ang) * d; gz = Math.sin(ang) * d;
      if (!inKeepOut(gx, gz)) break;
    }
    const mat = new MeshBasicMaterial({
      color: C.obeliskPink, transparent: true, opacity: 0,
      blending: AdditiveBlending, depthWrite: false
    });
    const mesh = new Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    const gy = getGroundY(gx, gz);
    mesh.position.set(gx, gy + 0.02, gz);
    scene.add(mesh);
    glyphs_data.push({ mesh, mat, revealed: false, timer: 0, x: gx, z: gz });
  }
}

// ================================================================
// Populate world
// ================================================================
export function populate(arrays, builders, scene) {
  const {
    trees_data, treeImpostors, mush_data, crys_data, jellies, puffs, deers, moths, luminids,
    grassPatches, ferns, flowers, reeds, rocks_data, wisps, dandelions,
    fairyRings, bubbles, ponds, orbs, thornblooms, helixvines, snapthorns,
    spiralfronds, corpseblooms, orbbushes, lanternpods, veilmosses, groundGlows,
    glyphs_data
  } = arrays;

  const {
    makeTreeImpostor, createTreeTemplates, createTreeInstances,
    makeMush, makeCrystal, makeJelly, makePuff, makeDeer, makeMoth, makeLuminid,
    makeGrassPatch, makeFern, makeFlower, makeReed,
    initProceduralRocks, placeProceduralRock, finalizeProceduralRocks, regroundProceduralRocks,
    initPebbles, addPebble, finalizePebbles, regroundPebbles,
    makeWisp, makeDandelion, makeFairyRing, makeBubble, makePond, makeOrb,
    makeThornbloom, makeHelixvine, makeSnapthorn, makeSpiralFrond,
    makeCorpseBloom, makeOrbBush, makeLanternPod, makeVeilMoss
  } = builders;

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
      impostor.userData.treeTemplateIndex = trees_data.length % 10;
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
  const treeMeshes = createTreeInstances(treeTemplates, trees_data, maxPerTemplate);

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
      registerFlatZone(fx, fz, 5); // wider flat zone to prevent mushroom clipping
      const fr = makeFairyRing(fx, fz);
      fr.group.position.y = getGroundY(fx, fz);
      fairyRings.push(fr);
      keepOutZones.push({ x: fx, z: fz, r2: 81 }); // 9m radius — matches wider flat zone
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
      registerFlatZone(px, pz, 5); // larger flat zone for bigger ponds
      const po = makePond(px, pz);
      po.group.position.y = getGroundY(px, pz);
      ponds.push(po);
      keepOutZones.push({ x: px, z: pz, r2: 81 }); // 9m radius — matches larger flat zone
    }
  }
  // Obelisk zone is registered in main before populate; fairy rings and ponds above finish
  // all flat-zone registration. From here through createGround(), getGroundY uses the cache.
  buildHeightCache();
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
  // Helper: classify broad biome from local tree density.
  // open: clearings / meadows, edge: transitional, dense: groves.
  function classifyBiome(x, z) {
    const n = countNearTrees(x, z);
    if (n <= 1) return 'open';
    if (n <= 3) return 'edge';
    return 'dense';
  }
  // Mushrooms near trees — weighted toward dense groves
  for (let i = 0; i < MUSH_N; i++) {
    let r = sr() * totalDensity, refIdx = 0;
    for (let j = 0; j < treeDensity.length; j++) {
      r -= treeDensity[j];
      if (r <= 0) { refIdx = j; break; }
    }
    const ref = trees_data[refIdx];
    const spot = findSpot(8, () => {
      const ang = sr() * 6.28, d = 1 + sr() * 4;
      return [ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d];
    }, (x, z) => !(classifyBiome(x, z) === 'dense' && sr() < 0.45)); // avoid oversaturating dense groves
    if (!spot) continue;
    const mx = spot[0], mz = spot[1];
    const m = makeMush(mx, mz);
    m.group.position.y = getGroundY(mx, mz) - 0.06;
    tiltToSlope(m.group, mx, mz, 0.3);
    mush_data.push(m);
    keepOutZones.push({ x: mx, z: mz, r2: 1 });
  }
  // Crystals
  for (let i = 0; i < CRYSTAL_N; i++) {
    const spot = findSpot(12, () => { const ang = sr() * 6.28, d = 8 + sr() * WORLD_R * 0.6; return [Math.cos(ang) * d, Math.sin(ang) * d]; });
    if (!spot) continue;
    const cx = spot[0], cz = spot[1];
    const c = makeCrystal(cx, cz);
    c.group.position.y = getGroundY(cx, cz) - 0.06;
    tiltToSlope(c.group, cx, cz, 0.45);
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
    const spot = findSpot(8, () => { const ang = sr() * 6.28, d = 1 + sr() * 5; return [ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d]; });
    if (!spot) continue;
    const px = spot[0], pz = spot[1];
    const p = makePuff(px, pz);
    p.group.position.y = getGroundY(px, pz);
    p._baseY = getGroundY(px, pz);
    puffs.push(p);
  }
  // Spirit Deer
  for (let i = 0; i < DEER_N; i++) {
    const spot = findSpot(10, () => { const ang = sr() * 6.28, d = 12 + sr() * WORLD_R * 0.5; return [Math.cos(ang) * d, Math.sin(ang) * d]; });
    if (!spot) continue;
    const dx = spot[0], dz = spot[1];
    const de = makeDeer(dx, dz);
    const deerY = getGroundY(dx, dz);
    de.group.position.y = deerY;
    de._baseY = deerY;
    deers.push(de);
  }
  // Luminids (towering giants)
  for (let i = 0; i < LUMINID_N; i++) {
    const spot = findSpot(10, () => { const ang = sr() * 6.28, d = 15 + sr() * WORLD_R * 0.45; return [Math.cos(ang) * d, Math.sin(ang) * d]; });
    if (!spot) continue;
    const lx = spot[0], lz = spot[1];
    const lu = makeLuminid(lx, lz);
    lu.group.position.y = getGroundY(lx, lz);
    luminids.push(lu);
  }
  // Moths (fly above ground) — scatter across the map like deer; optional tree fallback
  for (let i = 0; i < MOTH_N; i++) {
    let mx, mz, ok = false;
    for (let a = 0; a < 14; a++) {
      const ang = sr() * 6.28, d = 8 + sr() * WORLD_R * 0.58;
      const tx = Math.cos(ang) * d, tz = Math.sin(ang) * d;
      if (!inKeepOut(tx, tz)) { mx = tx; mz = tz; ok = true; break; }
    }
    if (!ok && trees_data.length) {
      const ref = trees_data[Math.floor(sr() * trees_data.length)];
      mx = ref.x; mz = ref.z;
    } else if (!ok) {
      mx = Math.cos(sr() * 6.28) * 24; mz = Math.sin(sr() * 6.28) * 24;
    }
    moths.push(makeMoth(mx, getGroundY(mx, mz) + 2 + sr() * 4, mz));
  }
  // Grass patches (4 varieties: original green, purple, blue, teal)
  const grassPalettes = [null, C.grassPurple, C.grassBlue, C.grassTeal];
  for (let i = 0; i < GRASS_PATCHES; i++) {
    // Keep grass in the reachable interior — the perimeter mountain ring rises
    // steeply from ~0.68*WORLD_R (terrain.js rimT/wall), and a flat disc of blades
    // can't conform to that near-vertical go/no-go wall (reads as floating grass).
    const pal = grassPalettes[Math.floor(sr() * grassPalettes.length)];
    const rad = 2 + sr() * 2.5, cnt = 38 + Math.floor(sr() * 30);
    // Grass avoids big features (keepOutZones) and other grass (grassZones); it
    // does NOT block the flora placed after it.
    const spot = findSpot(6, () => { const ang = sr() * 6.28, d = 2 + sr() * (WORLD_R * 0.62); return [Math.cos(ang) * d, Math.sin(ang) * d]; }, (x, z) => !inGrass(x, z));
    if (!spot) continue;
    const gx = spot[0], gz = spot[1];
    const gp = makeGrassPatch(gx, gz, rad, cnt, pal);
    // Anchor to the RENDERED mesh surface (matches per-blade getMeshGroundY in
    // grass.js); small bury keeps bases just inside the terrain on slopes.
    gp.mesh.position.y = getMeshGroundY(gx, gz) - 0.03;
    grassPatches.push(gp);
    grassZones.push({ x: gx, z: gz, r2: rad * rad * 0.6 }); // patches may overlap at the edges
  }
  // Rocks — SDF instanced procedural rocks
  initProceduralRocks();
  for (let i = 0; i < ROCK_N; i++) {
    let rx, rz, ok4 = false;
    for (let a = 0; a < 10; a++) {
      const ang = sr() * 6.28, d = 3 + sr() * (WORLD_R * 0.85);
      rx = Math.cos(ang) * d; rz = Math.sin(ang) * d;
      ok4 = !inKeepOut(rx, rz);
      if (ok4) break;
    }
    if (ok4) {
      const gy = getGroundY(rx, rz);
      const info = placeProceduralRock(rx, rz, gy, false);
      const topY = gy + info.scale * info.squash * (1 - ROCK_GROUND_SINK);
      rocks_data.push({ x: rx, z: rz, colR: info.colR, topY, scale: info.scale });
      keepOutZones.push({ x: rx, z: rz, r2: 2.25 });
    }
  }
  // Boulders — large SDF instanced formations
  for (let i = 0; i < BOULDER_N; i++) {
    let bx, bz, ok5 = false;
    for (let a = 0; a < 10; a++) {
      const ang = sr() * 6.28, d = 8 + sr() * (WORLD_R * 0.8);
      bx = Math.cos(ang) * d; bz = Math.sin(ang) * d;
      ok5 = !inKeepOut(bx, bz);
      if (ok5) break;
    }
    if (ok5) {
      const gy = getGroundY(bx, bz);
      const info = placeProceduralRock(bx, bz, gy, true);
      const topY = gy + info.scale * info.squash * (1 - ROCK_GROUND_SINK);
      rocks_data.push({ x: bx, z: bz, colR: info.colR, topY, scale: info.scale });
      keepOutZones.push({ x: bx, z: bz, r2: 9 });
    }
  }
  finalizeProceduralRocks();
  // Pebbles — scattered tiny stones near rocks and trees
  initPebbles();
  for (let i = 0; i < PEBBLE_N; i++) {
    let px, pz;
    if (rocks_data.length > 0 && sr() < 0.5) {
      // Near existing rock/boulder
      const ref = rocks_data[Math.floor(sr() * rocks_data.length)];
      const ang = sr() * 6.28, d = 0.5 + sr() * 3;
      px = ref.x + Math.cos(ang) * d;
      pz = ref.z + Math.sin(ang) * d;
    } else if (trees_data.length > 0 && sr() < 0.5) {
      // Near trees
      const ref = trees_data[Math.floor(sr() * trees_data.length)];
      const ang = sr() * 6.28, d = 1 + sr() * 4;
      px = ref.x + Math.cos(ang) * d;
      pz = ref.z + Math.sin(ang) * d;
    } else {
      // Random scatter
      const ang = sr() * 6.28, d = 3 + sr() * (WORLD_R * 0.85);
      px = Math.cos(ang) * d; pz = Math.sin(ang) * d;
    }
    addPebble(px, pz, getGroundY(px, pz));
  }
  finalizePebbles();
  // Ferns
  for (let i = 0; i < FERN_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    // Bias ferns toward edge/open so groves don't turn into solid fern carpets.
    const spot = findSpot(8, () => { const ang = sr() * 6.28, d = 1 + sr() * 5; return [ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d]; },
      (x, z) => { const bm = classifyBiome(x, z); return !((bm === 'dense' && sr() < 0.55) || (bm === 'open' && sr() < 0.15)); });
    if (!spot) continue;
    const fx = spot[0], fz = spot[1];
    const f = makeFern(fx, fz);
    f.group.position.y = getGroundY(fx, fz) - 0.05;
    f.slopeQ = computeSlopeQuat(fx, fz, 0.4);
    ferns.push(f);
    keepOutZones.push({ x: fx, z: fz, r2: 1 });
  }
  // Flowers — biased toward open areas
  for (let i = 0; i < FLOWER_N; i++) {
    const spot = findSpot(12, () => { const ang = sr() * 6.28, d = 3 + sr() * (WORLD_R * 0.7); return [Math.cos(ang) * d, Math.sin(ang) * d]; },
      (x, z) => { const bm = classifyBiome(x, z); return !((bm === 'dense' && sr() < 0.92) || (bm === 'edge' && sr() < 0.55)); });
    if (!spot) continue;
    const flx = spot[0], flz = spot[1];
    const fl = makeFlower(flx, flz);
    fl.group.position.y = getGroundY(flx, flz) - 0.05;
    fl.slopeQ = computeSlopeQuat(flx, flz, 0.35);
    flowers.push(fl);
    keepOutZones.push({ x: flx, z: flz, r2: 1 });
  }
  // Reeds — biased toward open areas
  for (let i = 0; i < REED_N; i++) {
    const spot = findSpot(12, () => { const ang = sr() * 6.28, d = 4 + sr() * (WORLD_R * 0.8); return [Math.cos(ang) * d, Math.sin(ang) * d]; },
      (x, z) => { const bm = classifyBiome(x, z); return !((bm === 'dense' && sr() < 0.9) || (bm === 'edge' && sr() < 0.5)); });
    if (!spot) continue;
    const rdx = spot[0], rdz = spot[1];
    const rd = makeReed(rdx, rdz);
    rd.group.position.y = getGroundY(rdx, rdz) - 0.05;
    rd.slopeQ = computeSlopeQuat(rdx, rdz, 0.15);
    reeds.push(rd);
    keepOutZones.push({ x: rdx, z: rdz, r2: 1 });
  }
  // Golden orbs — one per angular sector for even world coverage
  // Split 360° into 5 sectors (72° each), place one orb per sector
  // Minimum 30m between any two orbs
  const sectorSize = 6.28 / ORB_N;
  const orbPositions = []; // track placed positions for distance check
  for (let i = 0; i < ORB_N; i++) {
    let ox, oz, ok = false;
    const sectorStart = i * sectorSize;
    for (let a = 0; a < 50; a++) {
      const ang = sectorStart + sr() * sectorSize;
      const d = 30 + sr() * (WORLD_R * 0.5);
      ox = Math.cos(ang) * d; oz = Math.sin(ang) * d;
      if (inKeepOut(ox, oz)) continue;
      // Enforce 30m minimum distance from all previously placed orbs
      let tooClose = false;
      for (let j = 0; j < orbPositions.length; j++) {
        const ddx = ox - orbPositions[j].x, ddz = oz - orbPositions[j].z;
        if (ddx * ddx + ddz * ddz < 900) { tooClose = true; break; }
      }
      if (tooClose) continue;
      ok = true;
      break;
    }
    if (ok) {
      orbPositions.push({ x: ox, z: oz });
      const o = makeOrb(ox, oz);
      o.group.position.y = getGroundY(ox, oz) + 1.0;
      o.flyY = getGroundY(ox, oz) + 1.0;
      orbs.push(o);
    }
  }
  // ================================================================
  // Orb–creature proximity guarantee (Slice H)
  // For each gated orb (ORB_CREATURE_SEQUENCE index 1→jelly, 2→deer, 3→moth),
  // ensure at least one creature of the required type has its home within
  // GUARANTEE_R (18 m, inside the 20 m spirit-hum resonance range).
  // If none exists, nudge/spawn one using seeded sr() at 12–16 m from the orb.
  // ================================================================
  const GUARANTEE_R2 = 324; // 18² — must be < RESONANCE_RANGE2 (400 = 20²)
  for (let oi = 0; oi < orbs.length; oi++) {
    const req = ORB_CREATURE_SEQUENCE[oi]; // 'any', 'jelly', 'deer', or 'moth'
    if (req === 'any') continue;
    const ob = orbs[oi];
    const ox = ob.x, oz = ob.z;
    let found = false;
    if (req === 'jelly') {
      for (let ji = 0; ji < jellies.length; ji++) {
        const j = jellies[ji];
        const dx = j.homeX - ox, dz = j.homeZ - oz;
        if (dx * dx + dz * dz < GUARANTEE_R2) { found = true; break; }
      }
      if (!found) {
        // Spawn a guarantee jelly within 12-16 m of the orb
        const ga = sr() * 6.28, gd = 12 + sr() * 4;
        const gx = ox + Math.cos(ga) * gd, gz = oz + Math.sin(ga) * gd;
        const gy = getGroundY(gx, gz) + 3 + sr() * 2;
        jellies.push(makeJelly(gx, gy, gz));
      }
    } else if (req === 'deer') {
      for (let di = 0; di < deers.length; di++) {
        const d = deers[di];
        const dx = d.homeX - ox, dz = d.homeZ - oz;
        if (dx * dx + dz * dz < GUARANTEE_R2) { found = true; break; }
      }
      if (!found) {
        // Spawn a guarantee deer within 12-16 m of the orb (up to 8 attempts)
        for (let ga2 = 0; ga2 < 8; ga2++) {
          const ga = sr() * 6.28, gd = 12 + sr() * 4;
          const gx = ox + Math.cos(ga) * gd, gz = oz + Math.sin(ga) * gd;
          if (inKeepOut(gx, gz)) continue;
          const de = makeDeer(gx, gz);
          const deerY = getGroundY(gx, gz);
          de.group.position.y = deerY;
          de._baseY = deerY;
          deers.push(de);
          break;
        }
      }
    } else if (req === 'moth') {
      for (let mi = 0; mi < moths.length; mi++) {
        const m = moths[mi];
        const dx = m.centerX - ox, dz = m.centerZ - oz;
        if (dx * dx + dz * dz < GUARANTEE_R2) { found = true; break; }
      }
      if (!found) {
        // Spawn a guarantee moth within 12-16 m of the orb
        const ga = sr() * 6.28, gd = 12 + sr() * 4;
        const gx = ox + Math.cos(ga) * gd, gz = oz + Math.sin(ga) * gd;
        const gy = getGroundY(gx, gz) + 2 + sr() * 2;
        moths.push(makeMoth(gx, gy, gz));
      }
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
    const spot = findSpot(12, () => { const ang = sr() * 6.28, d = 4 + sr() * (WORLD_R * 0.7); return [Math.cos(ang) * d, Math.sin(ang) * d]; },
      (x, z) => { const bm = classifyBiome(x, z); return !((bm === 'dense' && sr() < 0.92) || (bm === 'edge' && sr() < 0.55)); });
    if (!spot) continue;
    const dnx = spot[0], dnz = spot[1];
    const dn = makeDandelion(dnx, dnz);
    dn.group.position.y = getGroundY(dnx, dnz) - 0.05;
    tiltToSlope(dn.group, dnx, dnz, 0.35);
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
    const spot = findSpot(10, () => { const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R * 0.7); return [Math.cos(ang) * d, Math.sin(ang) * d]; });
    if (!spot) continue;
    const tx = spot[0], tz = spot[1];
    const tb = makeThornbloom(tx, tz);
    tb.group.position.y = getGroundY(tx, tz) - 0.05;
    tb.slopeQ = computeSlopeQuat(tx, tz, 0.3);
    thornblooms.push(tb);
    keepOutZones.push({ x: tx, z: tz, r2: 2.25 });
  }
  // Helixvines (near trees)
  for (let i = 0; i < HELIXVINE_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    // Keep some in groves but shift excess into less-crowded transitions.
    const spot = findSpot(8, () => { const ang = sr() * 6.28, d = 2 + sr() * 4; return [ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d]; },
      (x, z) => !(classifyBiome(x, z) === 'dense' && sr() < 0.35));
    if (!spot) continue;
    const hx = spot[0], hz = spot[1];
    const hv = makeHelixvine(hx, hz);
    hv.group.position.y = getGroundY(hx, hz) - 0.05;
    hv.slopeQ = computeSlopeQuat(hx, hz, 0.25);
    helixvines.push(hv);
    keepOutZones.push({ x: hx, z: hz, r2: 1 });
  }
  // Snapthorns (open areas)
  for (let i = 0; i < SNAPTHORN_N; i++) {
    const spot = findSpot(10, () => { const ang = sr() * 6.28, d = 6 + sr() * (WORLD_R * 0.65); return [Math.cos(ang) * d, Math.sin(ang) * d]; });
    if (!spot) continue;
    const sx = spot[0], sz = spot[1];
    const sn = makeSnapthorn(sx, sz);
    sn.group.position.y = getGroundY(sx, sz) - 0.05;
    tiltToSlope(sn.group, sx, sz, 0.25);
    snapthorns.push(sn);
    keepOutZones.push({ x: sx, z: sz, r2: 2.25 });
  }
  // SpiralFronds (near trees)
  for (let i = 0; i < SPIRALFROND_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const spot = findSpot(8, () => { const ang = sr() * 6.28, d = 2 + sr() * 5; return [ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d]; });
    if (!spot) continue;
    const sfx = spot[0], sfz = spot[1];
    const sf = makeSpiralFrond(sfx, sfz);
    sf.group.position.y = getGroundY(sfx, sfz) - 0.05;
    sf.slopeQ = computeSlopeQuat(sfx, sfz, 0.35);
    spiralfronds.push(sf);
    keepOutZones.push({ x: sfx, z: sfz, r2: 1.5 });
  }
  // CorpseBlooms (open areas)
  for (let i = 0; i < CORPSEBLOOM_N; i++) {
    const spot = findSpot(10, () => { const ang = sr() * 6.28, d = 8 + sr() * (WORLD_R * 0.6); return [Math.cos(ang) * d, Math.sin(ang) * d]; });
    if (!spot) continue;
    const cbx = spot[0], cbz = spot[1];
    const cb = makeCorpseBloom(cbx, cbz);
    cb.group.position.y = getGroundY(cbx, cbz) - 0.05;
    cb.slopeQ = computeSlopeQuat(cbx, cbz, 0.3);
    corpseblooms.push(cb);
    keepOutZones.push({ x: cbx, z: cbz, r2: 3 });
  }
  // OrbBushes (scattered)
  for (let i = 0; i < ORBBUSH_N; i++) {
    const spot = findSpot(10, () => { const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R * 0.7); return [Math.cos(ang) * d, Math.sin(ang) * d]; });
    if (!spot) continue;
    const obx = spot[0], obz = spot[1];
    const ob = makeOrbBush(obx, obz);
    ob.group.position.y = getGroundY(obx, obz) - 0.05;
    ob.slopeQ = computeSlopeQuat(obx, obz, 0.35);
    orbbushes.push(ob);
    keepOutZones.push({ x: obx, z: obz, r2: 1.5 });
  }
  // LanternPods (near trees)
  for (let i = 0; i < LANTERNPOD_N; i++) {
    const ref = trees_data[Math.floor(sr() * trees_data.length)];
    const spot = findSpot(8, () => { const ang = sr() * 6.28, d = 2 + sr() * 4; return [ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d]; },
      (x, z) => !(classifyBiome(x, z) === 'dense' && sr() < 0.4));
    if (!spot) continue;
    const lpx = spot[0], lpz = spot[1];
    const lp = makeLanternPod(lpx, lpz);
    lp.group.position.y = getGroundY(lpx, lpz) - 0.05;
    lp.slopeQ = computeSlopeQuat(lpx, lpz, 0.3);
    lanternpods.push(lp);
    keepOutZones.push({ x: lpx, z: lpz, r2: 1.5 });
  }
  // VeilMoss (near rocks)
  for (let i = 0; i < VEILMOSS_N; i++) {
    const ref = rocks_data.length > 0
      ? rocks_data[Math.floor(sr() * rocks_data.length)]
      : { x: 0, z: 0 };
    const spot = findSpot(8, () => { const ang = sr() * 6.28, d = 1 + sr() * 3; return [ref.x + Math.cos(ang) * d, ref.z + Math.sin(ang) * d]; });
    if (!spot) continue;
    const vmx = spot[0], vmz = spot[1];
    const vm = makeVeilMoss(vmx, vmz);
    vm.group.position.y = getGroundY(vmx, vmz) - 0.05;
    vm.slopeQ = computeSlopeQuat(vmx, vmz, 0.2);
    veilmosses.push(vm);
    keepOutZones.push({ x: vmx, z: vmz, r2: 1 });
  }
  // Puffling mushroom-home settlements (20 sites × 2–5 houses, instanced)
  // Houses register plateaus and rebuild the height cache, so getGroundY()
  // returns plateau-adjusted values for everything placed afterward.
  placePufflingHomeClusters({ inKeepOut, classifyBiome, sr, keepOutZones, trees_data, rocks_data });

  // Remove ground-level entities that overlap house collision zones,
  // then re-ground survivors to the plateau-aware height cache.
  const houseCol = getPufflingHouseCollision();
  const HOUSE_FLORA_PAD = 2;
  function overlapsHouse(ex, ez) {
    for (let j = 0; j < houseCol.length; j++) {
      const dx = ex - houseCol[j].x, dz = ez - houseCol[j].z;
      const need = houseCol[j].colR + HOUSE_FLORA_PAD;
      if (dx * dx + dz * dz < need * need) return true;
    }
    return false;
  }
  for (let i = grassPatches.length - 1; i >= 0; i--) {
    const gp = grassPatches[i];
    const gpx = gp.mesh.position.x, gpz = gp.mesh.position.z;
    if (overlapsHouse(gpx, gpz)) {
      scene.remove(gp.mesh);
      gp.mesh.geometry.dispose();
      gp.mesh.material.dispose();
      grassPatches.splice(i, 1);
    } else {
      // Re-bake each blade's contour against the FINAL mesh surface. Grass geometry is built
      // (populate line ~347) BEFORE puffling-home plateaus reshape the terrain and rebuild the
      // height cache, so the baked per-blade offsets (baseContour) no longer match the ground —
      // leaving blades floating/sunk by up to ~3 m. Swap the stale contour for the current one
      // vertex-by-vertex so every blade meets the rendered surface again.
      const centerY = getMeshGroundY(gpx, gpz);
      const geo = gp.mesh.geometry;
      const pos = geo.attributes.position;
      const con = geo.attributes.baseContour;
      if (con) {
        for (let v = 0; v < pos.count; v++) {
          const newDy = getMeshGroundY(gpx + pos.getX(v), gpz + pos.getZ(v)) - centerY;
          pos.setY(v, pos.getY(v) - con.getX(v) + newDy);
          con.setX(v, newDy);
        }
        pos.needsUpdate = true;
        con.needsUpdate = true;
        geo.computeVertexNormals();
      }
      gp.mesh.position.y = centerY - 0.03;
    }
  }
  // Every patch is now on its final ground: merge them into ~30 world-space chunk
  // meshes (one draw call each). grassPatches entries keep cx/cz and gain `range`.
  chunkGrassPatches(grassPatches);
  const floraArrays = [ferns, flowers, reeds, thornblooms, helixvines, snapthorns,
    spiralfronds, corpseblooms, orbbushes, lanternpods, veilmosses, dandelions];
  // Remove an entity the houses grew over. Instanced plants (ferns, flowers,
  // mushrooms, reeds) hide their instance; merged ones dispose their meshes.
  // Shared module-scope materials are never disposed here (other plants use them).
  function disposeEntity(e) {
    if (e.remove) { e.remove(); return; }
    e.group.traverse((ch) => {
      if (ch.geometry) ch.geometry.dispose();
    });
    scene.remove(e.group);
  }
  for (let ai = 0; ai < floraArrays.length; ai++) {
    const arr = floraArrays[ai];
    for (let i = arr.length - 1; i >= 0; i--) {
      const e = arr[i];
      const ex = e.group.position.x, ez = e.group.position.z;
      if (overlapsHouse(ex, ez)) {
        disposeEntity(e);
        arr.splice(i, 1);
      } else {
        e.group.position.y = getGroundY(ex, ez) - 0.05;
      }
    }
  }
  for (let i = mush_data.length - 1; i >= 0; i--) {
    const m = mush_data[i];
    const mx = m.x, mz = m.z;
    if (overlapsHouse(mx, mz)) {
      disposeEntity(m);
      mush_data.splice(i, 1);
    } else {
      m.group.position.y = getGroundY(mx, mz) - 0.06;
    }
  }
  for (let i = crys_data.length - 1; i >= 0; i--) {
    const c = crys_data[i];
    const cx = c.x, cz = c.z;
    if (overlapsHouse(cx, cz)) {
      disposeEntity(c);
      crys_data.splice(i, 1);
    } else {
      c.group.position.y = getGroundY(cx, cz) - 0.06;
    }
  }
  // Pufflings — overlap check + re-ground + update _baseY
  for (let i = puffs.length - 1; i >= 0; i--) {
    const p = puffs[i];
    const px = p.group.position.x, pz = p.group.position.z;
    if (overlapsHouse(px, pz)) {
      disposeEntity(p);
      puffs.splice(i, 1);
    } else {
      const y = getGroundY(px, pz);
      p.group.position.y = y;
      p._baseY = y;
    }
  }
  // Spirit Deer — overlap check + re-ground + update _baseY
  for (let i = deers.length - 1; i >= 0; i--) {
    const d = deers[i];
    const dx = d.group.position.x, dz = d.group.position.z;
    if (overlapsHouse(dx, dz)) {
      disposeEntity(d);
      deers.splice(i, 1);
    } else {
      const y = getGroundY(dx, dz);
      d.group.position.y = y;
      d._baseY = y;
    }
  }
  // Luminids — overlap check + re-ground (no _baseY)
  for (let i = luminids.length - 1; i >= 0; i--) {
    const lu = luminids[i];
    const lx = lu.group.position.x, lz = lu.group.position.z;
    if (overlapsHouse(lx, lz)) {
      disposeEntity(lu);
      luminids.splice(i, 1);
    } else {
      lu.group.position.y = getGroundY(lx, lz);
    }
  }
  // Orbs — re-ground only (don't remove near houses)
  for (let i = 0; i < orbs.length; i++) {
    const o = orbs[i];
    o.group.position.y = getGroundY(o.x, o.z) + 1.0;
    o.flyY = getGroundY(o.x, o.z) + 1.0;
  }
  // Rocks/boulders + pebbles: re-sample terrain and rebuild instanced matrices so
  // they don't float above (or sink below) the house-plateau-graded ground. The
  // instanced systems retain per-instance x/z, so re-grounding IS feasible — it just
  // re-snaps Y and rebuilds the matrices (no sr() re-roll, world-gen stays deterministic).
  const regroundedRocks = regroundProceduralRocks();
  // regroundedRocks is in placement order, matching rocks_data; refresh collision topY.
  for (let i = 0; i < regroundedRocks.length && i < rocks_data.length; i++) {
    rocks_data[i].topY = regroundedRocks[i].topY;
  }
  regroundPebbles();
  // Flying entities (jellies, moths, wisps, bubbles) skipped — height
  // difference from plateaus is negligible for entities 2-5m above ground.

  // Ground glow patches (subtle bioluminescent light on terrain)
  for (let i = 0; i < GROUND_GLOW_N; i++) {
    const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R * 0.8);
    const gx = Math.cos(ang) * d, gz = Math.sin(ang) * d;
    const patchR = 1.5 + sr() * 3.5;
    const col = C.groundGlowColors[Math.floor(sr() * C.groundGlowColors.length)];
    const baseOp = 0.08 + sr() * 0.12;
    const mat = new MeshBasicMaterial({
      color: col, transparent: true, opacity: baseOp,
      blending: AdditiveBlending, depthWrite: false, side: DoubleSide
    });
    // Drape geometry over terrain — rotate geometry to XZ plane, then set per-vertex Y
    const geo = new CircleGeometry(patchR, 10);
    geo.rotateX(-Math.PI / 2);
    const centerY = getGroundY(gx, gz);
    const posAttr = geo.attributes.position;
    for (let v = 0; v < posAttr.count; v++) {
      const wx = gx + posAttr.getX(v);
      const wz = gz + posAttr.getZ(v);
      posAttr.setY(v, getGroundY(wx, wz) - centerY + 0.02);
    }
    posAttr.needsUpdate = true;
    geo.computeVertexNormals();
    const mesh = new Mesh(geo, mat);
    mesh.position.set(gx, centerY, gz);
    scene.add(mesh);
    groundGlows.push({ mesh, mat, phase: sr() * 6.28, baseOpacity: baseOp, speed: 0.3 + sr() * 0.3, x: gx, z: gz });
  }

  // Ground Glyphs (Phase 2)
  makeGlyphs(glyphs_data);

  // Re-sample tree heights after all flat zones are registered
  // (ponds/fairy rings register flat zones that modify getGroundY retroactively)
  for (let i = 0; i < trees_data.length; i++) {
    const tr = trees_data[i];
    const newY = getGroundY(tr.x, tr.z);
    tr.y = newY;
    if (treeImpostors[i]) {
      treeImpostors[i].position.y = newY + (tr.treeH || 10) * 0.5;   // stamp centre (trees.js)
    }
  }
  // Rebuild instanced tree matrices with corrected heights + slope tilt
  if (treeMeshes.length > 0) {
    const _d = new Object3D();
    const _tUp = new Vector3(0, 1, 0);
    const _tNorm = new Vector3();
    const _tSQ = new Quaternion();
    const _tIQ = new Quaternion();
    const _tYQ = new Quaternion();
    for (let ti = 0; ti < treeMeshes.length; ti++) {
      const mesh = treeMeshes[ti];
      for (let ii = 0; ii < mesh.instances.length; ii++) {
        const inst = mesh.instances[ii];
        const td = trees_data[inst.posIdx];
        inst.y = td.y;
        // Re-cache normal after flat zone correction
        const n = getGroundNormal(td.x, td.z);
        inst.nx = n.x; inst.ny = n.y; inst.nz = n.z;
        _d.position.set(td.x, td.y, td.z);
        // Slope tilt + Y rotation
        _tNorm.set(n.x, n.y, n.z);
        _tSQ.setFromUnitVectors(_tUp, _tNorm);
        _tSQ.slerp(_tIQ, 0.85); // 15% tilt — trunks stay vertical
        _tYQ.setFromAxisAngle(_tUp, td.yRot);
        _d.quaternion.copy(_tSQ).multiply(_tYQ);
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

  return treeMeshes;
}

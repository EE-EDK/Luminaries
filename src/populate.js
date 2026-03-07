// ================================================================
// World population — places all 29 entity types
// ================================================================
// Extracted from main.js. Runs once at startup.

import { Vector3, Quaternion, Object3D, CircleGeometry, Mesh, MeshBasicMaterial, AdditiveBlending, DoubleSide } from 'three';

import {
  WORLD_R, TREE_N, MUSH_N, CRYSTAL_N, JELLY_N, PUFF_N, DEER_N, MOTH_N,
  GRASS_PATCHES, FERN_N, FLOWER_N, REED_N, ROCK_N, BOULDER_N, PEBBLE_N, WISP_N, DANDELION_N,
  FAIRY_RING_N, BUBBLE_N, POND_N, ORB_N,
  THORNBLOOM_N, HELIXVINE_N, SNAPTHORN_N,
  SPIRALFROND_N, CORPSEBLOOM_N, ORBBUSH_N, LANTERNPOD_N, VEILMOSS_N, GROUND_GLOW_N,
  C
} from './constants.js';

import { sr } from './utils/rng.js';
import { getGroundY, getGroundNormal, registerFlatZone } from './world/terrain.js';

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

// ================================================================
// Populate world
// ================================================================
export function populate(arrays, builders, scene) {
  const {
    trees_data, treeImpostors, mush_data, crys_data, jellies, puffs, deers, moths,
    grassPatches, ferns, flowers, reeds, rocks_data, wisps, dandelions,
    fairyRings, bubbles, ponds, orbs, thornblooms, helixvines, snapthorns,
    spiralfronds, corpseblooms, orbbushes, lanternpods, veilmosses, groundGlows
  } = arrays;

  const {
    makeTreeImpostor, createTreeTemplates, createTreeInstances,
    makeMush, makeCrystal, makeJelly, makePuff, makeDeer, makeMoth,
    makeGrassPatch, makeFern, makeFlower, makeReed,
    makeRock, makeBoulder, initPebbles, addPebble, finalizePebbles,
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
    tiltToSlope(m.group, mx, mz, 0.3);
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
    const rad = 2 + sr() * 2.5, cnt = 38 + Math.floor(sr() * 30);
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
      tiltToSlope(r.group, rx, rz, 0.5);
      rocks_data.push(r);
      keepOutZones.push({ x: rx, z: rz, r2: 2.25 });
    }
  }
  // Boulders — large dramatic formations
  for (let i = 0; i < BOULDER_N; i++) {
    let bx, bz, ok5 = false;
    for (let a = 0; a < 10; a++) {
      const ang = sr() * 6.28, d = 8 + sr() * (WORLD_R * 0.8);
      bx = Math.cos(ang) * d; bz = Math.sin(ang) * d;
      ok5 = !inKeepOut(bx, bz);
      if (ok5) break;
    }
    if (ok5) {
      const b = makeBoulder(bx, bz);
      b.group.position.y = getGroundY(bx, bz) - 0.3;
      tiltToSlope(b.group, bx, bz, 0.6);
      rocks_data.push(b);
      keepOutZones.push({ x: bx, z: bz, r2: 9 });
    }
  }
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
    const ang = sr() * 6.28, d = 1 + sr() * 5;
    const fx = ref.x + Math.cos(ang) * d, fz = ref.z + Math.sin(ang) * d;
    if (inKeepOut(fx, fz)) continue;
    const f = makeFern(fx, fz);
    f.group.position.y = getGroundY(fx, fz);
    f.slopeQ = computeSlopeQuat(fx, fz, 0.4);
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
    fl.slopeQ = computeSlopeQuat(flx, flz, 0.35);
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
    const ang = sr() * 6.28, d = 5 + sr() * (WORLD_R * 0.7);
    const tx = Math.cos(ang) * d, tz = Math.sin(ang) * d;
    if (inKeepOut(tx, tz)) continue;
    const tb = makeThornbloom(tx, tz);
    tb.group.position.y = getGroundY(tx, tz);
    tb.slopeQ = computeSlopeQuat(tx, tz, 0.3);
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
    hv.slopeQ = computeSlopeQuat(hx, hz, 0.25);
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
    tiltToSlope(sn.group, sx, sz, 0.25);
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
    sf.slopeQ = computeSlopeQuat(sfx, sfz, 0.35);
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
    cb.slopeQ = computeSlopeQuat(cbx, cbz, 0.3);
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
    ob.slopeQ = computeSlopeQuat(obx, obz, 0.35);
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
    lp.slopeQ = computeSlopeQuat(lpx, lpz, 0.3);
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
    vm.slopeQ = computeSlopeQuat(vmx, vmz, 0.2);
    veilmosses.push(vm);
    keepOutZones.push({ x: vmx, z: vmz, r2: 1 });
  }
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

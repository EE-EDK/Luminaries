// ================================================================
// Puffling mushroom homes — clustered settlements across the world
// ================================================================
// Detailed brick/cap/door/window meshes (see pufflingHomeDetailed.js), same art as
// public/assets/mushroom-house-puffling-home.html.

import { Quaternion, Vector3 } from 'three';
import {
  createPufflingHomeDetailedGroup,
  pufflingHomeCollisionRadius,
  applyThemeToDetailedHouse,
  themePayloadBioluminescent,
  PUFF_HOUSE,
  PUFF_HOME_WORLD_SCALE
} from './pufflingHomeDetailed.js';
import { scene } from '../../core/renderer.js';
import {
  getGroundY,
  getGroundNormal,
  registerHousePlateau,
  clearHousePlateaus,
  buildHeightCache
} from '../../world/terrain.js';
import { WORLD_R, ORB_N } from '../../constants.js';
import { on, Events } from '../../kernel/eventBus.js';
import { getQuestState } from '../../quest/questState.js';

const CLUSTER_N = 20;
const OBELISK_EXCLUSION_R2 = 400; // 20 m from origin
const MIN_CLUSTER_SEP2 = 324; // 18 m between cluster centers
/** Minimum horizontal distance between house centers (collision disks ~10 m Ø). */
const MIN_HOUSE_CENTER_SEP = 10.5;
const MIN_HOUSE_CENTER_SEP2 = MIN_HOUSE_CENTER_SEP * MIN_HOUSE_CENTER_SEP;
/** Rim belt — foothills below world wall (intentional settlements). */
const RIM_D_MIN = WORLD_R * 0.56;
const RIM_D_MAX = WORLD_R * 0.93;
/** Midslope pockets — fewer, still graded / intentional. */
const MID_D_MIN = WORLD_R * 0.30;
const MID_D_MAX = WORLD_R * 0.56;
/** Extra clearance beyond tree trunk collision radius (see fauna pufflings). */
const TREE_SITE_CLEAR = 5.2;
/** Extra clearance beyond rock colR. */
const ROCK_SITE_CLEAR = 3.8;

/** Sample footprint under widest part of scaled detailed base for anchorGroundY. */
const FOOTPRINT_SAMPLE_R = PUFF_HOUSE.baseRadius * PUFF_HOME_WORLD_SCALE + 1.15;

const _vUp = new Vector3(0, 1, 0);
const _vNorm = new Vector3();
const _qTilt = new Quaternion();
const _qYaw = new Quaternion();
const _qIdent = new Quaternion();

/** @type {import('three').Group[]} */
let _detailedRoots = [];

let _themeListenerRegistered = false;

function applyPufflingHomeTheme(cottage) {
  for (let i = 0; i < _detailedRoots.length; i++) {
    applyThemeToDetailedHouse(_detailedRoots[i], cottage);
  }
}

function syncThemeFromQuest() {
  applyPufflingHomeTheme(getQuestState().orbsFound >= ORB_N);
}

function registerThemeListener() {
  if (_themeListenerRegistered) return;
  _themeListenerRegistered = true;
  on(Events.ORB_COLLECTED, syncThemeFromQuest);
}

/** Bias settlements toward outer rim / foothills; some midslope for variety. */
function sampleRimClusterCenter(sr) {
  const ang = sr() * Math.PI * 2;
  const dist = sr() < 0.76
    ? RIM_D_MIN + sr() * (RIM_D_MAX - RIM_D_MIN)
    : MID_D_MIN + sr() * (MID_D_MAX - MID_D_MIN);
  return { cx: Math.cos(ang) * dist, cz: Math.sin(ang) * dist };
}

/** Grade a leveled pad around cluster (mean natural height); radius covers ring of houses + apron. */
function registerClusterPad(cx, cz, houses) {
  if (!houses.length) return;
  let maxRing = 0;
  for (let h = 0; h < houses.length; h++) {
    const dx = houses[h].x - cx;
    const dz = houses[h].z - cz;
    const rr = Math.sqrt(dx * dx + dz * dz);
    if (rr > maxRing) maxRing = rr;
  }
  let sumY = 0;
  for (let h = 0; h < houses.length; h++) {
    sumY += anchorGroundY(houses[h].x, houses[h].z);
  }
  const padY = sumY / houses.length;
  const padR = Math.max(12, maxRing + 6.5);
  registerHousePlateau(cx, cz, padR, padY);
}

/** @type {Array<{ x: number, z: number, colR: number }>} */
let _pufflingHouseCollision = [];

export function getPufflingHouseCollision() {
  return _pufflingHouseCollision;
}

function clusterCenterOk(x, z, centers) {
  if (x * x + z * z < OBELISK_EXCLUSION_R2) return false;
  for (let i = 0; i < centers.length; i++) {
    const dx = x - centers[i].x;
    const dz = z - centers[i].z;
    if (dx * dx + dz * dz < MIN_CLUSTER_SEP2) return false;
  }
  return true;
}

/** Lowest ground under footprint + small sink so stalk base meets terrain on slopes. */
function anchorGroundY(x, z) {
  let y = getGroundY(x, z);
  const samples = 8;
  for (let i = 0; i < samples; i++) {
    const a = (i / samples) * Math.PI * 2;
    const gx = x + Math.cos(a) * FOOTPRINT_SAMPLE_R;
    const gz = z + Math.sin(a) * FOOTPRINT_SAMPLE_R;
    const gy = getGroundY(gx, gz);
    if (gy < y) y = gy;
  }
  return y - 0.04;
}

/**
 * @param {number} hx
 * @param {number} hz
 * @param {Array<{ x: number, z: number, scale?: number }>|undefined} treesData
 */
function clearOfTrees(hx, hz, treesData) {
  if (!treesData || treesData.length === 0) return true;
  for (let i = 0; i < treesData.length; i++) {
    const tr = treesData[i];
    const dx = tr.x - hx;
    const dz = tr.z - hz;
    const trunkR = (tr.scale || 1) * 0.8 + 0.3;
    const need = trunkR + TREE_SITE_CLEAR;
    if (dx * dx + dz * dz < need * need) return false;
  }
  return true;
}

/**
 * @param {number} hx
 * @param {number} hz
 * @param {Array<{ x: number, z: number, colR?: number }>|undefined} rocksData
 */
function clearOfRocks(hx, hz, rocksData) {
  if (!rocksData || rocksData.length === 0) return true;
  for (let i = 0; i < rocksData.length; i++) {
    const rd = rocksData[i];
    const cr = rd.colR != null ? rd.colR : 0.5;
    const need = cr + ROCK_SITE_CLEAR;
    const dx = rd.x - hx;
    const dz = rd.z - hz;
    if (dx * dx + dz * dz < need * need) return false;
  }
  return true;
}

/**
 * @param {number} hx
 * @param {number} hz
 * @param {Array<{ x: number, z: number }>} placed
 */
function clearOfOtherHouses(hx, hz, placed) {
  for (let i = 0; i < placed.length; i++) {
    const dx = placed[i].x - hx;
    const dz = placed[i].z - hz;
    if (dx * dx + dz * dz < MIN_HOUSE_CENTER_SEP2) return false;
  }
  return true;
}

/**
 * @param {number} cx
 * @param {number} cz
 * @param {number} n
 * @param {function(number, number): boolean} inKeepOut
 * @param {function(number, number): string} classifyBiome
 * @param {function(): number} rnd
 * @param {Array<{ x: number, z: number, y: number, yaw: number }>} placedOut
 * @param {Array<{ x: number, z: number, scale?: number }>|undefined} treesData
 * @param {Array<{ x: number, z: number, colR?: number }>|undefined} rocksData
 */
function housesInCluster(cx, cz, n, inKeepOut, classifyBiome, rnd, placedOut, treesData, rocksData) {
  const out = [];
  let ringR = 6.9 + rnd() * 2.8;
  const baseAngOff = rnd() * Math.PI * 2;

  for (let i = 0; i < n; i++) {
    let accepted = false;
    for (let attempt = 0; attempt < 28 && !accepted; attempt++) {
      const baseAng = (i / Math.max(n, 1)) * Math.PI * 2 + baseAngOff + (rnd() - 0.5) * 0.28;
      let rr = ringR * (0.9 + rnd() * 0.22);
      let hx = cx + Math.cos(baseAng) * rr;
      let hz = cz + Math.sin(baseAng) * rr;

      for (let step = 0; step < 10 && inKeepOut(hx, hz); step++) {
        rr *= 0.86;
        hx = cx + Math.cos(baseAng) * rr;
        hz = cz + Math.sin(baseAng) * rr;
      }
      if (inKeepOut(hx, hz)) continue;
      if (classifyBiome(hx, hz) === 'dense' && rnd() < 0.45) continue;
      if (!clearOfTrees(hx, hz, treesData)) continue;
      if (!clearOfRocks(hx, hz, rocksData)) continue;
      if (!clearOfOtherHouses(hx, hz, placedOut)) continue;

      const y = anchorGroundY(hx, hz);
      const yaw = Math.atan2(hx - cx, hz - cz);
      out.push({ x: hx, z: hz, y, yaw });
      placedOut.push({ x: hx, z: hz, y, yaw });
      accepted = true;
    }
    if (!accepted) ringR += 1.15;
  }
  return out;
}

/**
 * @param {{ inKeepOut: function(number, number): boolean, classifyBiome: function(number, number): string, sr: function(): number, keepOutZones?: Array<{ x: number, z: number, r2: number }>, trees_data?: Array<{ x: number, z: number, scale?: number }>, rocks_data?: Array<{ x: number, z: number, colR?: number }> }} ctx
 */
export function placePufflingHomeClusters(ctx) {
  const { inKeepOut, classifyBiome, sr, keepOutZones, trees_data: treesData, rocks_data: rocksData } = ctx;

  clearHousePlateaus();
  _pufflingHouseCollision.length = 0;
  _detailedRoots = [];

  const placements = [];
  const placedAcc = [];
  const clusterCenters = [];

  let ci = 0;
  let guard = 0;
  while (ci < CLUSTER_N && guard < CLUSTER_N * 120) {
    guard++;
    let cx = 0;
    let cz = 0;
    let placed = false;
    for (let attempt = 0; attempt < 70; attempt++) {
      const rim = sampleRimClusterCenter(sr);
      cx = rim.cx;
      cz = rim.cz;
      if (inKeepOut(cx, cz)) continue;
      if (!clusterCenterOk(cx, cz, clusterCenters)) continue;
      if (!clearOfTrees(cx, cz, treesData)) continue;
      if (!clearOfRocks(cx, cz, rocksData)) continue;
      placed = true;
      break;
    }
    if (!placed) continue;

    const groupSize = 2 + Math.floor(sr() * 4);
    const houses = housesInCluster(cx, cz, groupSize, inKeepOut, classifyBiome, sr, placedAcc, treesData, rocksData);
    if (houses.length === 0) continue;

    registerClusterPad(cx, cz, houses);

    for (let h = 0; h < houses.length; h++) {
      placements.push(houses[h]);
    }
    clusterCenters.push({ x: cx, z: cz });
    if (keepOutZones) {
      keepOutZones.push({ x: cx, z: cz, r2: 100 });
    }
    ci++;
  }

  let nInst = placements.length;
  if (nInst === 0) {
    const fx = WORLD_R * 0.72;
    const fz = -WORLD_R * 0.21;
    const fb = housesInCluster(fx, fz, 3, () => false, () => 'clear', sr, placedAcc, treesData, rocksData);
    registerClusterPad(fx, fz, fb);
    for (let hi = 0; hi < fb.length; hi++) placements.push(fb[hi]);
    if (keepOutZones) keepOutZones.push({ x: fx, z: fz, r2: 100 });
    nInst = placements.length;
    if (nInst === 0) {
      registerThemeListener();
      syncThemeFromQuest();
      return;
    }
  }

  buildHeightCache();
  for (let pi = 0; pi < placements.length; pi++) {
    const pl = placements[pi];
    pl.y = anchorGroundY(pl.x, pl.z);
  }
  const houseColR = pufflingHomeCollisionRadius();
  for (let ci = 0; ci < placements.length; ci++) {
    const pl = placements[ci];
    _pufflingHouseCollision.push({ x: pl.x, z: pl.z, colR: houseColR });
  }

  const themeStart = themePayloadBioluminescent();
  for (let i = 0; i < nInst; i++) {
    const { x, z, y, yaw } = placements[i];
    const seed = (i * 9185527 + (Math.floor(x * 313.37) ^ Math.floor(z * 271.99))) >>> 0;
    const house = createPufflingHomeDetailedGroup(themeStart, seed);
    const n = getGroundNormal(x, z);
    _vNorm.set(n.x, n.y, n.z);
    _qTilt.setFromUnitVectors(_vUp, _vNorm);
    _qTilt.slerp(_qIdent, 0.88);
    _qYaw.setFromAxisAngle(_vUp, yaw);
    house.quaternion.copy(_qTilt).multiply(_qYaw);
    house.position.set(x, y, z);
    scene.add(house);
    _detailedRoots.push(house);
  }

  registerThemeListener();
  syncThemeFromQuest();
}

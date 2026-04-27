// ================================================================
// Puffling mushroom homes — instanced clusters across the world
// ================================================================
// Twenty settlement sites; stalk + cap + gill + door + knob (instanced).
// Colors/proportions aligned with public/assets/mushroom-house-puffling-home.html THEMES.

import {
  BoxGeometry,
  CylinderGeometry,
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  Quaternion,
  SphereGeometry,
  Vector3
} from 'three';
import { scene } from '../../core/renderer.js';
import { getGroundY, getGroundNormal } from '../../world/terrain.js';
import { WORLD_R, ORB_N } from '../../constants.js';
import { on, Events } from '../../kernel/eventBus.js';
import { getQuestState } from '../../quest/questState.js';

const CLUSTER_N = 20;
const OBELISK_EXCLUSION_R2 = 400; // 20 m from origin
const MIN_CLUSTER_SEP2 = 324; // 18 m between cluster centers
/** Minimum horizontal distance between house centers (caps ~6 m wide). */
const MIN_HOUSE_CENTER_SEP = 9.25;
const MIN_HOUSE_CENTER_SEP2 = MIN_HOUSE_CENTER_SEP * MIN_HOUSE_CENTER_SEP;
/** Extra clearance beyond tree trunk collision radius (see fauna pufflings). */
const TREE_SITE_CLEAR = 5.2;
/** Extra clearance beyond rock colR. */
const ROCK_SITE_CLEAR = 3.8;

const H_STALK = 4;
const RB_STALK = 2.1;
const RT_STALK = 1.75;
const R_CAP = 3.0;
/** Matches HOUSE.capFlatten in mushroom-house-puffling-home.html */
const CAP_FLATTEN = 0.55;
const DOOR_Y = 1.15;
const DOOR_RADIAL = RT_STALK + 0.12;
const GILL_H = 0.42;
/** Sample stalk footprint — lowest terrain contact reduces floating on slopes. */
const FOOTPRINT_SAMPLE_R = RB_STALK * 0.94;

const _vUp = new Vector3(0, 1, 0);
const _vNorm = new Vector3();
const _qTilt = new Quaternion();
const _qYaw = new Quaternion();
const _qIdent = new Quaternion();
const _dummy = new Object3D();

/** @type {MeshStandardMaterial | null} */
let _stalkMat = null;
/** @type {MeshStandardMaterial | null} */
let _capMat = null;
/** @type {MeshStandardMaterial | null} */
let _gillMat = null;
/** @type {MeshStandardMaterial | null} */
let _doorMat = null;
/** @type {MeshStandardMaterial | null} */
let _knobMat = null;
/** @type {InstancedMesh | null} */
let _stalkMesh = null;
/** @type {InstancedMesh | null} */
let _capMesh = null;
/** @type {InstancedMesh | null} */
let _gillMesh = null;
/** @type {InstancedMesh | null} */
let _doorMesh = null;
/** @type {InstancedMesh | null} */
let _knobMesh = null;

let _themeListenerRegistered = false;

// --- Themes: keys aligned with mushroom-house-puffling-home.html THEMES.BIOLUMINESCENT / COTTAGECORE ---
const THEME_BIO = {
  stalk: 0x222a2a,
  cap: 0x003333,
  capEmissive: 0x002222,
  capEmissiveInt: 0.25,
  gill: 0x00ff88,
  gillEmissive: 0x00aa55,
  gillEmissiveInt: 0.7,
  door: 0x2a1a15,
  knob: 0x88ffcc,
  knobEmissive: 0x00ffaa,
  knobEmissiveInt: 1.5
};

const THEME_COTTAGE = {
  stalk: 0xb8a890,
  cap: 0xff7aa8,
  capEmissive: 0x000000,
  capEmissiveInt: 0,
  gill: 0xfff0f5,
  gillEmissive: 0x000000,
  gillEmissiveInt: 0,
  door: 0x5a3a1f,
  knob: 0xb87333,
  knobEmissive: 0x000000,
  knobEmissiveInt: 0
};

function setMaterialFogOff(mat) {
  if (mat) mat.fog = false;
}

function applyPufflingHomeTheme(cottage) {
  const p = cottage ? THEME_COTTAGE : THEME_BIO;
  if (_stalkMat) _stalkMat.color.setHex(p.stalk);
  if (_capMat) {
    _capMat.color.setHex(p.cap);
    _capMat.emissive.setHex(p.capEmissive);
    _capMat.emissiveIntensity = p.capEmissiveInt;
  }
  if (_gillMat) {
    _gillMat.color.setHex(p.gill);
    _gillMat.emissive.setHex(p.gillEmissive);
    _gillMat.emissiveIntensity = p.gillEmissiveInt;
  }
  if (_doorMat) _doorMat.color.setHex(p.door);
  if (_knobMat) {
    _knobMat.color.setHex(p.knob);
    _knobMat.emissive.setHex(p.knobEmissive);
    _knobMat.emissiveIntensity = p.knobEmissiveInt;
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

  _stalkMat = new MeshStandardMaterial({
    color: THEME_BIO.stalk, roughness: 0.92, metalness: 0
  });
  _capMat = new MeshStandardMaterial({
    color: THEME_BIO.cap,
    emissive: THEME_BIO.capEmissive,
    emissiveIntensity: THEME_BIO.capEmissiveInt,
    roughness: 0.45,
    metalness: 0.05
  });
  _gillMat = new MeshStandardMaterial({
    color: THEME_BIO.gill,
    emissive: THEME_BIO.gillEmissive,
    emissiveIntensity: THEME_BIO.gillEmissiveInt,
    roughness: 0.9,
    metalness: 0
  });
  _doorMat = new MeshStandardMaterial({
    color: THEME_BIO.door, roughness: 0.9, metalness: 0
  });
  _knobMat = new MeshStandardMaterial({
    color: THEME_BIO.knob,
    emissive: THEME_BIO.knobEmissive,
    emissiveIntensity: THEME_BIO.knobEmissiveInt,
    metalness: 0.65,
    roughness: 0.28
  });

  setMaterialFogOff(_stalkMat);
  setMaterialFogOff(_capMat);
  setMaterialFogOff(_gillMat);
  setMaterialFogOff(_doorMat);
  setMaterialFogOff(_knobMat);

  const geoStalk = new CylinderGeometry(RT_STALK, RB_STALK, H_STALK, 10);
  const geoCap = new SphereGeometry(R_CAP, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  const geoGill = new CylinderGeometry(R_CAP - 0.1, R_CAP * 0.58, GILL_H, 14, 1, false);
  const geoDoor = new BoxGeometry(0.55, 1.35, 0.12);
  const geoKnob = new SphereGeometry(0.14, 8, 6);

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
      const ang = sr() * Math.PI * 2;
      const d = 14 + sr() * (WORLD_R * 0.82 - 14);
      cx = Math.cos(ang) * d;
      cz = Math.sin(ang) * d;
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
    const fx = WORLD_R * 0.42;
    const fz = -WORLD_R * 0.28;
    const fb = housesInCluster(fx, fz, 3, () => false, () => 'clear', sr, placedAcc, treesData, rocksData);
    for (let hi = 0; hi < fb.length; hi++) placements.push(fb[hi]);
    if (keepOutZones) keepOutZones.push({ x: fx, z: fz, r2: 100 });
    nInst = placements.length;
    if (nInst === 0) {
      registerThemeListener();
      syncThemeFromQuest();
      return;
    }
  }

  _stalkMesh = new InstancedMesh(geoStalk, _stalkMat, nInst);
  _capMesh = new InstancedMesh(geoCap, _capMat, nInst);
  _gillMesh = new InstancedMesh(geoGill, _gillMat, nInst);
  _doorMesh = new InstancedMesh(geoDoor, _doorMat, nInst);
  _knobMesh = new InstancedMesh(geoKnob, _knobMat, nInst);

  for (const im of [_stalkMesh, _capMesh, _gillMesh, _doorMesh, _knobMesh]) {
    im.castShadow = true;
    im.receiveShadow = true;
    im.frustumCulled = false;
  }

  for (let i = 0; i < nInst; i++) {
    const { x, z, y, yaw } = placements[i];
    const n = getGroundNormal(x, z);
    _vNorm.set(n.x, n.y, n.z);
    _qTilt.setFromUnitVectors(_vUp, _vNorm);
    _qTilt.slerp(_qIdent, 0.92);
    _qYaw.setFromAxisAngle(_vUp, yaw);
    const qWorld = _dummy.quaternion.copy(_qTilt).multiply(_qYaw);

    _dummy.position.set(x, y + H_STALK * 0.5, z);
    _dummy.scale.set(1, 1, 1);
    _dummy.quaternion.copy(qWorld);
    _dummy.updateMatrix();
    _stalkMesh.setMatrixAt(i, _dummy.matrix);

    _dummy.position.set(x, y + H_STALK, z);
    _dummy.quaternion.copy(qWorld);
    _dummy.scale.set(1, CAP_FLATTEN, 1);
    _dummy.updateMatrix();
    _capMesh.setMatrixAt(i, _dummy.matrix);

    _dummy.position.set(x, y + H_STALK - GILL_H * 0.5 - 0.06, z);
    _dummy.quaternion.copy(qWorld);
    _dummy.scale.set(1, 1, 1);
    _dummy.updateMatrix();
    _gillMesh.setMatrixAt(i, _dummy.matrix);

    const ox = Math.cos(yaw) * DOOR_RADIAL;
    const oz = Math.sin(yaw) * DOOR_RADIAL;
    _dummy.position.set(x + ox, y + DOOR_Y, z + oz);
    _dummy.quaternion.copy(qWorld);
    _dummy.scale.set(1, 1, 1);
    _dummy.updateMatrix();
    _doorMesh.setMatrixAt(i, _dummy.matrix);

    const nx = Math.cos(yaw);
    const nz = Math.sin(yaw);
    const rx = -Math.sin(yaw);
    const rz = Math.cos(yaw);
    const kx = x + nx * (DOOR_RADIAL + 0.1) + rx * 0.34;
    const kz = z + nz * (DOOR_RADIAL + 0.1) + rz * 0.34;
    const ky = y + DOOR_Y + 0.26;
    _dummy.position.set(kx, ky, kz);
    _dummy.quaternion.copy(qWorld);
    _dummy.scale.set(1, 1, 1);
    _dummy.updateMatrix();
    _knobMesh.setMatrixAt(i, _dummy.matrix);
  }

  _stalkMesh.instanceMatrix.needsUpdate = true;
  _capMesh.instanceMatrix.needsUpdate = true;
  _gillMesh.instanceMatrix.needsUpdate = true;
  _doorMesh.instanceMatrix.needsUpdate = true;
  _knobMesh.instanceMatrix.needsUpdate = true;

  scene.add(_stalkMesh, _capMesh, _gillMesh, _doorMesh, _knobMesh);

  registerThemeListener();
  syncThemeFromQuest();
}

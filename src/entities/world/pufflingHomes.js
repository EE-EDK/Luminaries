// ================================================================
// Puffling mushroom homes — instanced clusters across the world
// ================================================================
// Twenty settlement sites; each has 2–5 houses. Low-poly stalk + cap +
// door (3 InstancedMeshes). Theme matches quest: bioluminescent until
// all orbs found, then cottagecore.

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
const H_STALK = 4;
const RB_STALK = 2.1;
const RT_STALK = 1.75;
const R_CAP = 3.0;
const CAP_Y_SCALE = 0.52;
const DOOR_Y = 1.15;
const DOOR_RADIAL = RT_STALK + 0.12;

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
let _doorMat = null;
/** @type {InstancedMesh | null} */
let _stalkMesh = null;
/** @type {InstancedMesh | null} */
let _capMesh = null;
/** @type {InstancedMesh | null} */
let _doorMesh = null;

let _themeListenerRegistered = false;

const THEME_BIO = {
  stalk: 0x2a3840,
  cap: 0x003333,
  capEmissive: 0x002222,
  capEmissiveInt: 0.22,
  door: 0x2a1a15
};

const THEME_COTTAGE = {
  stalk: 0x5c3d28,
  cap: 0xff7aa8,
  capEmissive: 0x000000,
  capEmissiveInt: 0,
  door: 0x5a3a1f
};

function applyPufflingHomeTheme(cottage) {
  const p = cottage ? THEME_COTTAGE : THEME_BIO;
  if (_stalkMat) _stalkMat.color.setHex(p.stalk);
  if (_capMat) {
    _capMat.color.setHex(p.cap);
    _capMat.emissive.setHex(p.capEmissive);
    _capMat.emissiveIntensity = p.capEmissiveInt;
  }
  if (_doorMat) _doorMat.color.setHex(p.door);
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

/**
 * @param {number} cx
 * @param {number} cz
 * @param {number} n
 * @param {function(number, number): boolean} inKeepOut
 * @param {function(number, number): string} classifyBiome
 * @param {function(): number} rnd
 * @returns {{ x: number, z: number, y: number, yaw: number }[]}
 */
function housesInCluster(cx, cz, n, inKeepOut, classifyBiome, rnd) {
  const out = [];
  const ringR = 4.2 + rnd() * 2.2;
  for (let i = 0; i < n; i++) {
    const baseAng = (i / n) * Math.PI * 2 + (rnd() - 0.5) * 0.35;
    let rr = ringR * (0.88 + rnd() * 0.24);
    let hx = cx + Math.cos(baseAng) * rr;
    let hz = cz + Math.sin(baseAng) * rr;
    for (let step = 0; step < 6 && inKeepOut(hx, hz); step++) {
      rr *= 0.82;
      hx = cx + Math.cos(baseAng) * rr;
      hz = cz + Math.sin(baseAng) * rr;
    }
    if (inKeepOut(hx, hz)) continue;
    if (classifyBiome(hx, hz) === 'dense' && rnd() < 0.5) continue;
    const y = getGroundY(hx, hz);
    const yaw = Math.atan2(hx - cx, hz - cz);
    out.push({ x: hx, z: hz, y, yaw });
  }
  return out;
}

/**
 * @param {{ inKeepOut: function(number, number): boolean, classifyBiome: function(number, number): string, sr: function(): number, keepOutZones?: Array<{ x: number, z: number, r2: number }> }} ctx
 */
export function placePufflingHomeClusters(ctx) {
  const { inKeepOut, classifyBiome, sr, keepOutZones } = ctx;

  _stalkMat = new MeshStandardMaterial({
    color: THEME_BIO.stalk, roughness: 0.92, metalness: 0
  });
  _capMat = new MeshStandardMaterial({
    color: THEME_BIO.cap,
    emissive: THEME_BIO.capEmissive,
    emissiveIntensity: THEME_BIO.capEmissiveInt,
    roughness: 0.48,
    metalness: 0.04
  });
  _doorMat = new MeshStandardMaterial({
    color: THEME_BIO.door, roughness: 0.9, metalness: 0
  });

  const geoStalk = new CylinderGeometry(RT_STALK, RB_STALK, H_STALK, 8);
  const geoCap = new SphereGeometry(R_CAP, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  const geoDoor = new BoxGeometry(0.55, 1.35, 0.12);

  const placements = [];
  const clusterCenters = [];

  let ci = 0;
  let guard = 0;
  while (ci < CLUSTER_N && guard < CLUSTER_N * 100) {
    guard++;
    let cx = 0;
    let cz = 0;
    let placed = false;
    for (let attempt = 0; attempt < 55; attempt++) {
      const ang = sr() * Math.PI * 2;
      const d = 14 + sr() * (WORLD_R * 0.82 - 14);
      cx = Math.cos(ang) * d;
      cz = Math.sin(ang) * d;
      if (inKeepOut(cx, cz)) continue;
      if (!clusterCenterOk(cx, cz, clusterCenters)) continue;
      placed = true;
      break;
    }
    if (!placed) continue;

    const groupSize = 2 + Math.floor(sr() * 4);
    const houses = housesInCluster(cx, cz, groupSize, inKeepOut, classifyBiome, sr);
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

  const nInst = placements.length;
  if (nInst === 0) {
    registerThemeListener();
    syncThemeFromQuest();
    return;
  }

  _stalkMesh = new InstancedMesh(geoStalk, _stalkMat, nInst);
  _capMesh = new InstancedMesh(geoCap, _capMat, nInst);
  _doorMesh = new InstancedMesh(geoDoor, _doorMat, nInst);
  _stalkMesh.castShadow = true;
  _stalkMesh.receiveShadow = true;
  _capMesh.castShadow = true;
  _capMesh.receiveShadow = true;
  _doorMesh.castShadow = true;
  _doorMesh.receiveShadow = true;

  for (let i = 0; i < nInst; i++) {
    const { x, z, y, yaw } = placements[i];
    const n = getGroundNormal(x, z);
    _vNorm.set(n.x, n.y, n.z);
    _qTilt.setFromUnitVectors(_vUp, _vNorm);
    _qTilt.slerp(_qIdent, 0.88);
    _qYaw.setFromAxisAngle(_vUp, yaw);
    _dummy.quaternion.copy(_qTilt).multiply(_qYaw);

    _dummy.position.set(x, y + H_STALK * 0.5, z);
    _dummy.scale.set(1, 1, 1);
    _dummy.updateMatrix();
    _stalkMesh.setMatrixAt(i, _dummy.matrix);

    _dummy.position.set(x, y + H_STALK, z);
    _dummy.quaternion.copy(_qTilt).multiply(_qYaw);
    _dummy.scale.set(1, CAP_Y_SCALE, 1);
    _dummy.updateMatrix();
    _capMesh.setMatrixAt(i, _dummy.matrix);

    const ox = Math.cos(yaw) * DOOR_RADIAL;
    const oz = Math.sin(yaw) * DOOR_RADIAL;
    _dummy.position.set(x + ox, y + DOOR_Y, z + oz);
    _dummy.quaternion.copy(_qTilt).multiply(_qYaw);
    _dummy.scale.set(1, 1, 1);
    _dummy.updateMatrix();
    _doorMesh.setMatrixAt(i, _dummy.matrix);
  }

  _stalkMesh.instanceMatrix.needsUpdate = true;
  _capMesh.instanceMatrix.needsUpdate = true;
  _doorMesh.instanceMatrix.needsUpdate = true;

  scene.add(_stalkMesh, _capMesh, _doorMesh);

  registerThemeListener();
  syncThemeFromQuest();
}

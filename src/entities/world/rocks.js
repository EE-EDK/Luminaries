// ================================================================
// Rock Formations — natural rounded rocks, boulders, pebbles
// ================================================================
// SphereGeometry base with gentle noise displacement for organic lumpy
// shapes. Three size classes: boulders, medium rocks, pebbles.
// Five rock types with distinct color palettes.
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C, PEBBLE_N } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Rock type definitions
// ================================================================
const ROCK_TYPES = [
  { palette: 'rockGranite',   roughness: 0.88, metalness: 0.04 },
  { palette: 'rockSandstone', roughness: 0.92, metalness: 0.02 },
  { palette: 'rockLimestone', roughness: 0.85, metalness: 0.03 },
  { palette: 'rockSlate',     roughness: 0.90, metalness: 0.06 },
  { palette: 'rockBasalt',    roughness: 0.94, metalness: 0.04 },
];

// ================================================================
// Gentle noise displacement — lumpy, organic, NOT spiky
// ================================================================
function displaceSmooth(geo, amplitude, seed) {
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    const len = Math.sqrt(px * px + py * py + pz * pz) || 1;
    const nx = px / len, ny = py / len, nz = pz / len;
    // Multi-frequency smooth noise — no sharp features
    const n1 = Math.sin(px * 4.3 + seed) * Math.sin(py * 3.7 + pz * 2.1 + seed * 0.7);
    const n2 = Math.sin(pz * 5.1 + seed * 1.3) * Math.sin(px * 2.9 + py * 4.7) * 0.5;
    const n3 = Math.sin((px + py) * 3.1 + seed * 2.1) * Math.sin((pz - px) * 2.7) * 0.3;
    const disp = (n1 + n2 + n3) * amplitude;
    pos.setX(i, px + nx * disp);
    pos.setY(i, py + ny * disp);
    pos.setZ(i, pz + nz * disp);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

// ================================================================
// Vertex color variation — subtle grain and weathering
// ================================================================
const _vc = new THREE.Color();
const _vcBase = new THREE.Color();
const _vcHi = new THREE.Color();
const _vcDark = new THREE.Color();

function applyVertexColors(geo, pal) {
  const pos = geo.attributes.position;
  const count = pos.count;
  const colors = new Float32Array(count * 3);
  _vcBase.set(pal[0]);
  _vcHi.set(pal[1]);
  _vcDark.set(pal[2]);
  for (let i = 0; i < count; i++) {
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    // Height blend: lighter on top, darker at base
    const len = Math.sqrt(px * px + py * py + pz * pz) || 1;
    const heightT = Math.max(0, Math.min(1, (py / len) * 0.5 + 0.5));
    // Position noise for grain variation
    const grain = Math.sin(px * 11.3 + pz * 7.7) * 0.5 + 0.5;
    _vc.copy(_vcBase);
    _vc.lerp(_vcHi, heightT * 0.35 + grain * 0.2);
    _vc.lerp(_vcDark, (1 - heightT) * 0.25);
    colors[i * 3] = _vc.r;
    colors[i * 3 + 1] = _vc.g;
    colors[i * 3 + 2] = _vc.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

// ================================================================
// Pick random rock type, return material + palette
// ================================================================
function pickRockType() {
  const type = ROCK_TYPES[Math.floor(sr() * ROCK_TYPES.length)];
  const pal = C[type.palette]; // [base, hi, dark, accent]
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: type.roughness,
    metalness: type.metalness,
  });
  return { mat, pal, type };
}

// ================================================================
// Shared moss material
// ================================================================
const mossMat = new THREE.MeshStandardMaterial({
  color: C.rockMoss, emissive: C.rockMoss, emissiveIntensity: 0.03, roughness: 0.95
});

// ================================================================
// makeRock — medium rocks (0.3-0.8m)
// ================================================================
export function makeRock(x, z) {
  const g = new THREE.Group();
  const { mat, pal } = pickRockType();
  const seed = sr() * 100;

  // Main stone — smooth sphere with gentle lumps
  const mainR = 0.3 + sr() * 0.5;
  const mainGeo = new THREE.SphereGeometry(mainR, 10, 8);
  displaceSmooth(mainGeo, mainR * 0.08, seed);
  applyVertexColors(mainGeo, pal);
  const main = new THREE.Mesh(mainGeo, mat);
  // Flatten and stretch for natural rock proportions
  const sy = 0.35 + sr() * 0.3;
  const sx = 0.9 + sr() * 0.5;
  const sz2 = 0.9 + sr() * 0.5;
  main.scale.set(sx, sy, sz2);
  // Embed bottom half into ground
  main.position.y = mainR * sy * 0.25;
  main.rotation.set(sr() * 0.4, sr() * 6.28, sr() * 0.3);
  main.castShadow = true;
  main.receiveShadow = true;
  g.add(main);

  // 1-2 companion stones nestled against the main rock
  const compN = 1 + Math.floor(sr() * 2);
  for (let ci = 0; ci < compN; ci++) {
    const { mat: cMat, pal: cPal } = pickRockType();
    const cR = mainR * (0.25 + sr() * 0.35);
    const cGeo = new THREE.SphereGeometry(cR, 8, 6);
    displaceSmooth(cGeo, cR * 0.07, seed + ci * 13.7);
    applyVertexColors(cGeo, cPal);
    const comp = new THREE.Mesh(cGeo, cMat);
    const cSy = 0.3 + sr() * 0.35;
    comp.scale.set(0.9 + sr() * 0.4, cSy, 0.9 + sr() * 0.4);
    const ang = sr() * 6.28;
    const dist = mainR * 0.5 + sr() * mainR * 0.4;
    comp.position.set(Math.cos(ang) * dist, cR * cSy * 0.2, Math.sin(ang) * dist);
    comp.rotation.set(sr() * 0.5, sr() * 6.28, sr() * 0.4);
    comp.receiveShadow = true;
    g.add(comp);
  }

  // Small moss patch on top (50% chance)
  if (sr() < 0.5) {
    const mSz = mainR * 0.2 + sr() * mainR * 0.15;
    const moss = new THREE.Mesh(new THREE.SphereGeometry(mSz, 5, 4), mossMat);
    moss.scale.set(1.3, 0.15, 1.3);
    moss.position.set(sr() * mainR * 0.2, mainR * sy * 0.4, sr() * mainR * 0.2);
    g.add(moss);
  }

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, x, z, colR: mainR * 0.8 };
}

// ================================================================
// makeBoulder — large rock formations (1.2-3.0m)
// ================================================================
export function makeBoulder(x, z) {
  const g = new THREE.Group();
  const { mat, pal } = pickRockType();
  const seed = sr() * 100;

  // Main boulder — larger sphere, more segments for smoother appearance
  const mainR = 1.2 + sr() * 1.8;
  const mainGeo = new THREE.SphereGeometry(mainR, 14, 10);
  displaceSmooth(mainGeo, mainR * 0.10, seed);
  applyVertexColors(mainGeo, pal);
  const main = new THREE.Mesh(mainGeo, mat);
  const sy = 0.45 + sr() * 0.25;
  main.scale.set(1 + sr() * 0.4, sy, 1 + sr() * 0.4);
  // Sink into ground — boulders look heavy and embedded
  main.position.y = mainR * sy * 0.3;
  main.rotation.set(sr() * 0.2, sr() * 6.28, sr() * 0.15);
  main.castShadow = true;
  main.receiveShadow = true;
  g.add(main);

  // Leaning slab companion (60% chance)
  if (sr() < 0.6) {
    const { mat: sMat, pal: sPal } = pickRockType();
    const sR = mainR * (0.3 + sr() * 0.25);
    const sGeo = new THREE.SphereGeometry(sR, 10, 8);
    displaceSmooth(sGeo, sR * 0.09, seed + 37.1);
    applyVertexColors(sGeo, sPal);
    const slab = new THREE.Mesh(sGeo, sMat);
    const sSy = 0.3 + sr() * 0.25;
    slab.scale.set(1.2 + sr() * 0.4, sSy, 0.9 + sr() * 0.4);
    const slabAng = sr() * 6.28;
    slab.position.set(
      Math.cos(slabAng) * mainR * 0.7,
      sR * sSy * 0.2,
      Math.sin(slabAng) * mainR * 0.7
    );
    slab.rotation.set(sr() * 0.4, sr() * 6.28, sr() * 0.3);
    slab.castShadow = true;
    g.add(slab);
  }

  // Moss on top of boulders
  const mossN = 2 + Math.floor(sr() * 3);
  for (let mi = 0; mi < mossN; mi++) {
    const mR = mainR * 0.12 + sr() * mainR * 0.1;
    const moss = new THREE.Mesh(new THREE.SphereGeometry(mR, 5, 4), mossMat);
    moss.scale.set(1.4, 0.15, 1.4);
    const ma = sr() * 6.28;
    moss.position.set(
      Math.cos(ma) * mainR * 0.3,
      mainR * sy * 0.45 + sr() * 0.05,
      Math.sin(ma) * mainR * 0.3
    );
    g.add(moss);
  }

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, x, z, colR: mainR * 0.9 };
}

// ================================================================
// Pebble InstancedMesh — scattered tiny stones, 1 draw call
// ================================================================
let pebbleMesh = null;
const _pebDummy = new THREE.Object3D();

export function initPebbles() {
  // Smooth sphere pebble — flattened per instance
  const geo = new THREE.SphereGeometry(1, 6, 5);
  displaceSmooth(geo, 0.08, 42.7);
  const mat = new THREE.MeshStandardMaterial({
    color: C.rockBase, roughness: 0.90, metalness: 0.03
  });
  pebbleMesh = new THREE.InstancedMesh(geo, mat, PEBBLE_N);
  pebbleMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
  pebbleMesh.count = 0;
  scene.add(pebbleMesh);
  return pebbleMesh;
}

// Color variation for pebble instances
const _pebColor = new THREE.Color();
const PEBBLE_COLORS = [0x8a8a90, 0x9a8a70, 0xa0a098, 0x607080, 0x7a7a82, 0x706860, 0x908880];

export function addPebble(x, z, groundY) {
  if (!pebbleMesh) return;
  const idx = pebbleMesh.count;
  if (idx >= PEBBLE_N) return;

  const sz = 0.04 + sr() * 0.10;
  _pebDummy.position.set(x, groundY + sz * 0.08, z);
  _pebDummy.rotation.set(sr() * 0.5, sr() * 6.28, sr() * 0.5);
  _pebDummy.scale.set(
    sz * (0.9 + sr() * 0.5),
    sz * (0.2 + sr() * 0.3),
    sz * (0.9 + sr() * 0.5)
  );
  _pebDummy.updateMatrix();
  pebbleMesh.setMatrixAt(idx, _pebDummy.matrix);

  _pebColor.set(PEBBLE_COLORS[Math.floor(sr() * PEBBLE_COLORS.length)]);
  pebbleMesh.setColorAt(idx, _pebColor);

  pebbleMesh.count = idx + 1;
}

export function finalizePebbles() {
  if (!pebbleMesh) return;
  pebbleMesh.instanceMatrix.needsUpdate = true;
  if (pebbleMesh.instanceColor) pebbleMesh.instanceColor.needsUpdate = true;
}

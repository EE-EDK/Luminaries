// ================================================================
// Rock Formations — varied rock types, angular geometry, three size classes
// ================================================================
// Granite, sandstone, limestone, slate, basalt — each with unique color,
// roughness, and displacement. Boulders are dramatic large formations.
// Pebbles scatter as cheap InstancedMesh clusters.
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C, PEBBLE_N } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Rock type definitions
// ================================================================
const ROCK_TYPES = [
  { palette: 'rockGranite',   roughness: 0.82, metalness: 0.08, dispAmp: 0.14 },
  { palette: 'rockSandstone', roughness: 0.90, metalness: 0.03, dispAmp: 0.10 },
  { palette: 'rockLimestone', roughness: 0.78, metalness: 0.05, dispAmp: 0.08 },
  { palette: 'rockSlate',     roughness: 0.85, metalness: 0.10, dispAmp: 0.16 },
  { palette: 'rockBasalt',    roughness: 0.92, metalness: 0.06, dispAmp: 0.12 },
];

// ================================================================
// Vertex displacement — gives geometry a rough, natural rock profile
// ================================================================
function displaceVertices(geo, amplitude, frequency) {
  geo.computeVertexNormals();
  const pos = geo.attributes.position;
  const norm = geo.attributes.normal;
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    const nx = norm.getX(i), ny = norm.getY(i), nz = norm.getZ(i);
    const noise = Math.sin(px * frequency + py * 3.7) *
                  Math.cos(pz * frequency + px * 2.3) *
                  Math.sin(py * frequency * 0.7 + pz * 1.9);
    const disp = noise * amplitude;
    pos.setX(i, px + nx * disp);
    pos.setY(i, py + ny * disp);
    pos.setZ(i, pz + nz * disp);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

// ================================================================
// Pick a random rock type and create materials
// ================================================================
function pickRockMaterials() {
  const type = ROCK_TYPES[Math.floor(sr() * ROCK_TYPES.length)];
  const pal = C[type.palette]; // [base, hi, weather, accent]
  const base = new THREE.MeshStandardMaterial({
    color: pal[0], roughness: type.roughness, metalness: type.metalness
  });
  const hi = new THREE.MeshStandardMaterial({
    color: pal[1], roughness: type.roughness - 0.05, metalness: type.metalness
  });
  const weather = new THREE.MeshStandardMaterial({
    color: pal[2], roughness: type.roughness + 0.05, metalness: 0.02
  });
  return { base, hi, weather, type };
}

// ================================================================
// Shared moss material
// ================================================================
const mossMat = new THREE.MeshStandardMaterial({
  color: C.rockMoss, emissive: C.rockMoss, emissiveIntensity: 0.03, roughness: 0.9
});

// ================================================================
// makeRock — medium rocks (0.3-0.8m radius)
// ================================================================
export function makeRock(x, z) {
  const g = new THREE.Group();
  const { base, hi, weather, type } = pickRockMaterials();

  // Main stone — angular IcosahedronGeometry with displacement
  const mainSz = 0.3 + sr() * 0.5;
  const mainGeo = new THREE.IcosahedronGeometry(mainSz, 1);
  displaceVertices(mainGeo, mainSz * type.dispAmp, 5.0 + sr() * 3.0);
  const main = new THREE.Mesh(mainGeo, sr() < 0.6 ? base : hi);
  const scaleY = 0.4 + sr() * 0.4;
  main.scale.set(1 + sr() * 0.6, scaleY, 1 + sr() * 0.6);
  main.position.y = mainSz * scaleY * 0.35;
  main.rotation.set(sr() * 0.5, sr() * 3, sr() * 0.3);
  main.castShadow = true; main.receiveShadow = true;
  g.add(main);

  // Secondary stones (1-3 companions)
  const secN = 1 + Math.floor(sr() * 3);
  for (let si = 0; si < secN; si++) {
    const sa = sr() * 6.28, sd = mainSz * 0.6 + sr() * mainSz * 0.5;
    const sSz = mainSz * 0.3 + sr() * mainSz * 0.4;
    const secGeo = new THREE.IcosahedronGeometry(sSz, 0);
    displaceVertices(secGeo, sSz * type.dispAmp * 0.8, 6.0);
    const sec = new THREE.Mesh(secGeo, sr() < 0.5 ? base : weather);
    const secScaleY = 0.3 + sr() * 0.4;
    sec.scale.set(1 + sr() * 0.5, secScaleY, 1 + sr() * 0.5);
    sec.position.set(Math.cos(sa) * sd, sSz * secScaleY * 0.3, Math.sin(sa) * sd);
    sec.rotation.set(sr() * 0.8, sr() * 3, sr() * 0.5);
    g.add(sec);
  }

  // Moss patches on top surfaces
  const mossN = 2 + Math.floor(sr() * 3);
  for (let mi = 0; mi < mossN; mi++) {
    const ma = sr() * 6.28, md = sr() * mainSz * 0.6;
    const mSz = mainSz * 0.15 + sr() * mainSz * 0.2;
    const moss = new THREE.Mesh(new THREE.SphereGeometry(mSz, 4, 3), mossMat);
    moss.scale.set(1.5, 0.2, 1.5);
    moss.position.set(Math.cos(ma) * md, mainSz * 0.35 + sr() * 0.05, Math.sin(ma) * md);
    g.add(moss);
  }

  // Lichen spots
  const lichenColors = [0x887744, 0x998855, 0x667755, 0xaa9966];
  for (let li = 0; li < 3; li++) {
    const lichenMat = new THREE.MeshStandardMaterial({
      color: lichenColors[Math.floor(sr() * lichenColors.length)],
      roughness: 0.9, transparent: true, opacity: 0.5
    });
    const la = sr() * 6.28;
    const lichen = new THREE.Mesh(new THREE.SphereGeometry(mainSz * 0.06 + sr() * mainSz * 0.08, 3, 3), lichenMat);
    lichen.scale.set(2, 0.15, 2);
    lichen.position.set(Math.cos(la) * mainSz * 0.5, mainSz * 0.25 + sr() * 0.1, Math.sin(la) * mainSz * 0.5);
    g.add(lichen);
  }

  // Weathering cracks
  const crackMat = new THREE.MeshBasicMaterial({
    color: 0x252528, transparent: true, opacity: 0.3
  });
  const crackN = 2 + Math.floor(sr() * 3);
  for (let ci = 0; ci < crackN; ci++) {
    const ca = sr() * 6.28;
    const cLen = mainSz * 0.3 + sr() * mainSz * 0.4;
    const crack = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.001, cLen, 3), crackMat);
    const cR = mainSz * 0.3 + sr() * mainSz * 0.2;
    crack.position.set(Math.cos(ca) * cR, mainSz * 0.2 + sr() * mainSz * 0.15, Math.sin(ca) * cR);
    crack.rotation.set(sr() * 0.5, ca, Math.PI / 2 + sr() * 0.4);
    g.add(crack);
  }

  // Crystal sparkle hints
  const sparkles = [];
  const sparkleMat = new THREE.MeshBasicMaterial({
    color: 0x88ccff, transparent: true, opacity: 0.4
  });
  if (sr() < 0.5) {
    const sparkN = 2 + Math.floor(sr() * 3);
    for (let spi = 0; spi < sparkN; spi++) {
      const spa = sr() * 6.28;
      const spr = mainSz * 0.25 + sr() * mainSz * 0.25;
      const spark = new THREE.Mesh(new THREE.SphereGeometry(0.006, 3, 3), sparkleMat);
      spark.position.set(Math.cos(spa) * spr, mainSz * 0.15 + sr() * mainSz * 0.2, Math.sin(spa) * spr);
      g.add(spark);
      sparkles.push(spark);
    }
  }

  // Soil ring
  const soilMat = new THREE.MeshBasicMaterial({
    color: 0x1a1a12, transparent: true, opacity: 0.10, side: THREE.DoubleSide
  });
  const soil = new THREE.Mesh(new THREE.RingGeometry(mainSz * 0.5, mainSz * 1.0, 8), soilMat);
  soil.rotation.x = -Math.PI / 2; soil.position.y = 0.005; g.add(soil);

  // Embedded pebbles
  const pebMat = new THREE.MeshStandardMaterial({ color: 0x7a7a82, roughness: 0.9 });
  const pebN = 4 + Math.floor(sr() * 3);
  for (let pi = 0; pi < pebN; pi++) {
    const pa = sr() * 6.28, pd = mainSz * 0.5 + sr() * mainSz * 0.6;
    const pSz = 0.03 + sr() * 0.05;
    const peb = new THREE.Mesh(new THREE.SphereGeometry(pSz, 3, 3), pebMat);
    peb.scale.set(1 + sr() * 0.5, 0.4, 1 + sr() * 0.5);
    peb.position.set(Math.cos(pa) * pd, pSz * 0.15, Math.sin(pa) * pd);
    g.add(peb);
  }

  // Grass tuft
  if (sr() < 0.6) {
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x33aa55, emissive: C.grassTip, emissiveIntensity: 0.05,
      roughness: 0.7, side: THREE.DoubleSide
    });
    for (let gi = 0; gi < 3; gi++) {
      const ga = sr() * 6.28;
      const blade = new THREE.Mesh(new THREE.PlaneGeometry(0.015, 0.08 + sr() * 0.06), grassMat);
      blade.position.set(Math.cos(ga) * mainSz * 0.3, mainSz * 0.3, Math.sin(ga) * mainSz * 0.3);
      blade.rotation.y = sr() * 3; blade.rotation.x = -0.2 - sr() * 0.3;
      g.add(blade);
    }
  }

  g.position.set(x, 0, z); scene.add(g);
  return { group: g, x, z, colR: mainSz * 0.8, sparkles, sparkleMat };
}

// ================================================================
// makeBoulder — large dramatic rock formations (1.5-3.5m radius)
// ================================================================
export function makeBoulder(x, z) {
  const g = new THREE.Group();
  const { base, hi, weather, type } = pickRockMaterials();

  // Main boulder — high-detail icosahedron with aggressive displacement
  const mainSz = 1.5 + sr() * 2.0;
  const mainGeo = new THREE.IcosahedronGeometry(mainSz, 2);
  displaceVertices(mainGeo, mainSz * (type.dispAmp + 0.08), 2.5 + sr() * 2.0);
  const main = new THREE.Mesh(mainGeo, base);
  const scaleY = 0.5 + sr() * 0.3;
  main.scale.set(1 + sr() * 0.4, scaleY, 1 + sr() * 0.4);
  main.position.y = mainSz * scaleY * 0.4;
  main.rotation.set(sr() * 0.3, sr() * 3, sr() * 0.2);
  main.castShadow = true; main.receiveShadow = true;
  g.add(main);

  // Accent slab — a wedge broken off the main mass
  if (sr() < 0.7) {
    const slabSz = mainSz * 0.3 + sr() * mainSz * 0.3;
    const slabGeo = new THREE.IcosahedronGeometry(slabSz, 1);
    displaceVertices(slabGeo, slabSz * type.dispAmp, 4.0);
    const slab = new THREE.Mesh(slabGeo, sr() < 0.5 ? hi : weather);
    const slabAng = sr() * 6.28;
    slab.scale.set(1.3 + sr() * 0.4, 0.3 + sr() * 0.3, 1 + sr() * 0.5);
    slab.position.set(
      Math.cos(slabAng) * mainSz * 0.8,
      slabSz * 0.2,
      Math.sin(slabAng) * mainSz * 0.8
    );
    slab.rotation.set(sr() * 0.6, sr() * 3, sr() * 0.4);
    slab.castShadow = true;
    g.add(slab);
  }

  // Heavy moss coverage on boulders
  const mossN = 4 + Math.floor(sr() * 5);
  for (let mi = 0; mi < mossN; mi++) {
    const ma = sr() * 6.28, md = sr() * mainSz * 0.5;
    const mSz = mainSz * 0.1 + sr() * mainSz * 0.12;
    const moss = new THREE.Mesh(new THREE.SphereGeometry(mSz, 4, 3), mossMat);
    moss.scale.set(1.5, 0.2, 1.5);
    moss.position.set(Math.cos(ma) * md, mainSz * scaleY * 0.45 + sr() * 0.1, Math.sin(ma) * md);
    g.add(moss);
  }

  // Lichen clusters
  const lichenColors = [0x887744, 0x998855, 0x667755, 0xaa9966];
  const lichN = 3 + Math.floor(sr() * 3);
  for (let li = 0; li < lichN; li++) {
    const lichenMat = new THREE.MeshStandardMaterial({
      color: lichenColors[Math.floor(sr() * lichenColors.length)],
      roughness: 0.9, transparent: true, opacity: 0.5
    });
    const la = sr() * 6.28;
    const lichen = new THREE.Mesh(
      new THREE.SphereGeometry(mainSz * 0.05 + sr() * mainSz * 0.06, 3, 3), lichenMat
    );
    lichen.scale.set(2, 0.15, 2);
    lichen.position.set(
      Math.cos(la) * mainSz * 0.45,
      mainSz * scaleY * 0.3 + sr() * 0.1,
      Math.sin(la) * mainSz * 0.45
    );
    g.add(lichen);
  }

  // Crystal sparkles
  const sparkles = [];
  const sparkleMat = new THREE.MeshBasicMaterial({
    color: 0x88ccff, transparent: true, opacity: 0.4
  });
  if (sr() < 0.6) {
    const sparkN = 3 + Math.floor(sr() * 4);
    for (let spi = 0; spi < sparkN; spi++) {
      const spa = sr() * 6.28;
      const spr = mainSz * 0.3 + sr() * mainSz * 0.2;
      const spark = new THREE.Mesh(new THREE.SphereGeometry(0.008, 3, 3), sparkleMat);
      spark.position.set(
        Math.cos(spa) * spr,
        mainSz * 0.2 + sr() * mainSz * 0.3,
        Math.sin(spa) * spr
      );
      g.add(spark);
      sparkles.push(spark);
    }
  }

  // Soil ring
  const soilMat = new THREE.MeshBasicMaterial({
    color: 0x1a1a12, transparent: true, opacity: 0.10, side: THREE.DoubleSide
  });
  const soil = new THREE.Mesh(new THREE.RingGeometry(mainSz * 0.6, mainSz * 1.3, 10), soilMat);
  soil.rotation.x = -Math.PI / 2; soil.position.y = 0.005; g.add(soil);

  g.position.set(x, 0, z); scene.add(g);
  return { group: g, x, z, colR: mainSz * 0.9, sparkles, sparkleMat };
}

// ================================================================
// Pebble InstancedMesh — scattered tiny stones, 1 draw call for all
// ================================================================
let pebbleMesh = null;
const _pebDummy = new THREE.Object3D();

export function initPebbles() {
  const geo = new THREE.IcosahedronGeometry(1, 0); // unit icosahedron, scaled per instance
  // Slight displacement for irregularity
  displaceVertices(geo, 0.15, 8.0);
  const mat = new THREE.MeshStandardMaterial({
    color: C.rockBase, roughness: 0.88, metalness: 0.05
  });
  pebbleMesh = new THREE.InstancedMesh(geo, mat, PEBBLE_N);
  pebbleMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
  pebbleMesh.count = 0;
  scene.add(pebbleMesh);
  return pebbleMesh;
}

// Color variation for pebble instances
const _pebColor = new THREE.Color();
const PEBBLE_COLORS = [0x8a8a90, 0x9a8a70, 0xa0a098, 0x607080, 0x7a7a82, 0x706860];

export function addPebble(x, z, groundY) {
  if (!pebbleMesh) return;
  const idx = pebbleMesh.count;
  if (idx >= PEBBLE_N) return;

  const sz = 0.04 + sr() * 0.10;
  _pebDummy.position.set(x, groundY + sz * 0.15, z);
  _pebDummy.rotation.set(sr() * 3, sr() * 3, sr() * 3);
  _pebDummy.scale.set(
    sz * (1 + sr() * 0.6),
    sz * (0.25 + sr() * 0.4),
    sz * (1 + sr() * 0.6)
  );
  _pebDummy.updateMatrix();
  pebbleMesh.setMatrixAt(idx, _pebDummy.matrix);

  // Per-instance color variation
  _pebColor.set(PEBBLE_COLORS[Math.floor(sr() * PEBBLE_COLORS.length)]);
  pebbleMesh.setColorAt(idx, _pebColor);

  pebbleMesh.count = idx + 1;
}

export function finalizePebbles() {
  if (!pebbleMesh) return;
  pebbleMesh.instanceMatrix.needsUpdate = true;
  if (pebbleMesh.instanceColor) pebbleMesh.instanceColor.needsUpdate = true;
}

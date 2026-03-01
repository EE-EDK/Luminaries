// ================================================================
// Rock Formations — varied rock types, angular geometry, three size classes
// ================================================================
// Granite, sandstone, limestone, slate, basalt — each with unique color,
// roughness, and displacement. Higher subdivision + multi-octave noise +
// vertex colors + canvas bump maps for realistic surface detail.
// Boulders are dramatic large formations. Pebbles scatter as InstancedMesh.
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C, PEBBLE_N } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Rock type definitions — increased displacement amplitudes
// ================================================================
const ROCK_TYPES = [
  { palette: 'rockGranite',   roughness: 0.82, metalness: 0.08, dispAmp: 0.25, bumpIdx: 0 },
  { palette: 'rockSandstone', roughness: 0.90, metalness: 0.03, dispAmp: 0.20, bumpIdx: 1 },
  { palette: 'rockLimestone', roughness: 0.78, metalness: 0.05, dispAmp: 0.18, bumpIdx: 2 },
  { palette: 'rockSlate',     roughness: 0.85, metalness: 0.10, dispAmp: 0.28, bumpIdx: 3 },
  { palette: 'rockBasalt',    roughness: 0.92, metalness: 0.06, dispAmp: 0.22, bumpIdx: 4 },
];

// ================================================================
// Canvas-generated bump maps — one per rock type, cached
// ================================================================
const _bumpMaps = [];

function generateRockBumpMap(seed) {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const v = Math.sin(x * 0.3 + seed) * Math.cos(y * 0.4 + seed * 0.7) * 0.5
              + Math.sin(x * 0.7 + y * 0.5 + seed * 1.3) * 0.3
              + Math.sin(x * 1.3 + y * 1.1 + seed * 2.1) * 0.15
              + (Math.sin(x * seed * 0.01 + y * 0.02) * 0.5 + 0.5) * 0.15;
      const val = Math.floor(Math.max(0, Math.min(1, v * 0.5 + 0.5)) * 255);
      const idx = (y * size + x) * 4;
      imgData.data[idx] = imgData.data[idx + 1] = imgData.data[idx + 2] = val;
      imgData.data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// Generate bump maps for all 5 rock types at module load
for (let i = 0; i < 5; i++) {
  _bumpMaps.push(generateRockBumpMap(i * 7.3 + 1.7));
}

// ================================================================
// Multi-octave vertex displacement — rough, natural rock profile
// ================================================================
function displaceVertices(geo, amplitude, frequency) {
  geo.computeVertexNormals();
  const pos = geo.attributes.position;
  const norm = geo.attributes.normal;
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    const nx = norm.getX(i), ny = norm.getY(i), nz = norm.getZ(i);
    // Multi-octave noise for natural roughness
    const n1 = Math.sin(px * frequency + py * 3.7) *
               Math.cos(pz * frequency + px * 2.3);
    const n2 = Math.sin(px * frequency * 2.1 + pz * 5.3) *
               Math.cos(py * frequency * 1.7 + px * 4.1) * 0.5;
    const n3 = Math.sin(pz * frequency * 3.7 + py * 8.1) * 0.25;
    const noise = n1 + n2 + n3;
    const disp = noise * amplitude;
    pos.setX(i, px + nx * disp);
    pos.setY(i, py + ny * disp);
    pos.setZ(i, pz + nz * disp);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

// ================================================================
// Per-vertex color variation — simulates grain, strata, weathering
// ================================================================
const _vtxColor = new THREE.Color();
const _vtxBase = new THREE.Color();
const _vtxHi = new THREE.Color();
const _vtxWth = new THREE.Color();

function addVertexColors(geo, baseHex, hiHex, weatherHex) {
  const pos = geo.attributes.position;
  const count = pos.count;
  const colors = new Float32Array(count * 3);
  _vtxBase.set(baseHex);
  _vtxHi.set(hiHex);
  _vtxWth.set(weatherHex);
  for (let i = 0; i < count; i++) {
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    // Height-based blend (top = highlight, bottom = weathering)
    const heightT = Math.max(0, Math.min(1, py * 0.5 + 0.5));
    // Position-based noise for grain
    const noise = Math.sin(px * 7.3 + pz * 5.1) * 0.5 + 0.5;
    _vtxColor.copy(_vtxBase);
    _vtxColor.lerp(_vtxHi, heightT * 0.4 + noise * 0.3);
    _vtxColor.lerp(_vtxWth, (1 - heightT) * 0.3);
    colors[i * 3] = _vtxColor.r;
    colors[i * 3 + 1] = _vtxColor.g;
    colors[i * 3 + 2] = _vtxColor.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

// ================================================================
// Pick a random rock type and create materials with bump map + vertex colors
// ================================================================
function pickRockMaterials() {
  const type = ROCK_TYPES[Math.floor(sr() * ROCK_TYPES.length)];
  const pal = C[type.palette]; // [base, hi, weather, accent]
  const bump = _bumpMaps[type.bumpIdx];
  const base = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: type.roughness, metalness: type.metalness,
    bumpMap: bump, bumpScale: 0.15
  });
  const hi = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: type.roughness - 0.05, metalness: type.metalness,
    bumpMap: bump, bumpScale: 0.12
  });
  const weather = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: type.roughness + 0.05, metalness: 0.02,
    bumpMap: bump, bumpScale: 0.18
  });
  return { base, hi, weather, type, pal };
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
  const { base, hi, weather, type, pal } = pickRockMaterials();

  // Main stone — subdivision 2 (80 faces) with multi-octave displacement
  const mainSz = 0.3 + sr() * 0.5;
  const mainGeo = new THREE.IcosahedronGeometry(mainSz, 2);
  displaceVertices(mainGeo, mainSz * type.dispAmp, 5.0 + sr() * 3.0);
  addVertexColors(mainGeo, pal[0], pal[1], pal[2]);
  const main = new THREE.Mesh(mainGeo, sr() < 0.6 ? base : hi);
  const scaleY = 0.4 + sr() * 0.4;
  main.scale.set(1 + sr() * 0.6, scaleY, 1 + sr() * 0.6);
  // Embed deeper into terrain
  main.position.y = mainSz * scaleY * 0.15;
  main.rotation.set(sr() * 0.5, sr() * 3, sr() * 0.3);
  main.castShadow = true; main.receiveShadow = true;
  g.add(main);

  // Secondary stones (1-3 companions) — subdivision 1 (20 faces)
  const secN = 1 + Math.floor(sr() * 3);
  for (let si = 0; si < secN; si++) {
    const sa = sr() * 6.28, sd = mainSz * 0.6 + sr() * mainSz * 0.5;
    const sSz = mainSz * 0.3 + sr() * mainSz * 0.4;
    const secGeo = new THREE.IcosahedronGeometry(sSz, 1);
    displaceVertices(secGeo, sSz * type.dispAmp * 0.8, 6.0);
    addVertexColors(secGeo, pal[0], pal[1], pal[2]);
    const sec = new THREE.Mesh(secGeo, sr() < 0.5 ? base : weather);
    const secScaleY = 0.3 + sr() * 0.4;
    sec.scale.set(1 + sr() * 0.5, secScaleY, 1 + sr() * 0.5);
    sec.position.set(Math.cos(sa) * sd, sSz * secScaleY * 0.15, Math.sin(sa) * sd);
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
  const { base, hi, weather, type, pal } = pickRockMaterials();

  // Main boulder — subdivision 3 (320 faces) with aggressive displacement
  const mainSz = 1.5 + sr() * 2.0;
  const mainGeo = new THREE.IcosahedronGeometry(mainSz, 3);
  displaceVertices(mainGeo, mainSz * (type.dispAmp + 0.08), 2.5 + sr() * 2.0);
  addVertexColors(mainGeo, pal[0], pal[1], pal[2]);
  const main = new THREE.Mesh(mainGeo, base);
  const scaleY = 0.5 + sr() * 0.3;
  main.scale.set(1 + sr() * 0.4, scaleY, 1 + sr() * 0.4);
  // Embed 35% into terrain so it looks grounded
  main.position.y = mainSz * scaleY * 0.15;
  main.rotation.set(sr() * 0.3, sr() * 3, sr() * 0.2);
  main.castShadow = true; main.receiveShadow = true;
  g.add(main);

  // Accent slab — a wedge broken off the main mass
  if (sr() < 0.7) {
    const slabSz = mainSz * 0.3 + sr() * mainSz * 0.3;
    const slabGeo = new THREE.IcosahedronGeometry(slabSz, 2);
    displaceVertices(slabGeo, slabSz * type.dispAmp, 4.0);
    addVertexColors(slabGeo, pal[0], pal[1], pal[2]);
    const slab = new THREE.Mesh(slabGeo, sr() < 0.5 ? hi : weather);
    const slabAng = sr() * 6.28;
    slab.scale.set(1.3 + sr() * 0.4, 0.3 + sr() * 0.3, 1 + sr() * 0.5);
    slab.position.set(
      Math.cos(slabAng) * mainSz * 0.8,
      slabSz * 0.1,
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

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { saveSeed, restoreSeed } from '../../utils/rng.js';

// ================================================================
// Procedural bark texture — generated once, shared by all trunk InstancedMeshes
// ================================================================
let _barkTexture = null;
function getBarkTexture() {
  if (_barkTexture) return _barkTexture;
  const W = 256, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Base: warm dark brown gradient (darker at base, lighter at top)
  const baseGrad = ctx.createLinearGradient(0, 0, 0, H);
  baseGrad.addColorStop(0, '#5a4030');
  baseGrad.addColorStop(0.3, '#4d3528');
  baseGrad.addColorStop(0.7, '#3a2a1e');
  baseGrad.addColorStop(1, '#2e2015');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, W, H);

  // Vertical bark ridges — irregular parallel streaks
  for (let ridge = 0; ridge < 28; ridge++) {
    const rx = (ridge / 28) * W + (Math.sin(ridge * 3.7) * 6);
    const rw = 2 + Math.sin(ridge * 2.1) * 1.5;
    const bright = Math.sin(ridge * 1.3 + 0.5) * 0.5 + 0.5;
    const r = Math.floor(50 + bright * 30);
    const g = Math.floor(30 + bright * 20);
    const b = Math.floor(15 + bright * 12);
    ctx.strokeStyle = `rgba(${r},${g},${b},0.4)`;
    ctx.lineWidth = rw;
    ctx.beginPath();
    let y = 0;
    ctx.moveTo(rx, y);
    while (y < H) {
      y += 8 + Math.random() * 12;
      const wobble = Math.sin(y * 0.03 + ridge) * 3;
      ctx.lineTo(rx + wobble, y);
    }
    ctx.stroke();
  }

  // Deep bark fissures — darker cracks between ridges
  for (let fissure = 0; fissure < 18; fissure++) {
    const fx = (fissure / 18) * W + Math.sin(fissure * 5.3) * 8;
    ctx.strokeStyle = 'rgba(20,12,6,0.35)';
    ctx.lineWidth = 0.8 + Math.random() * 1.2;
    ctx.beginPath();
    let fy = Math.random() * 40;
    ctx.moveTo(fx, fy);
    while (fy < H) {
      fy += 5 + Math.random() * 10;
      ctx.lineTo(fx + Math.sin(fy * 0.05 + fissure * 2) * 4, fy);
    }
    ctx.stroke();
  }

  // Horizontal bark bands — subtle cross-grain texture
  for (let band = 0; band < 30; band++) {
    const by = (band / 30) * H + Math.random() * 10;
    ctx.strokeStyle = `rgba(${30 + Math.random() * 20},${18 + Math.random() * 12},${8 + Math.random() * 8},0.15)`;
    ctx.lineWidth = 0.5 + Math.random() * 1.5;
    ctx.beginPath();
    ctx.moveTo(0, by);
    for (let bx = 0; bx < W; bx += 10) {
      ctx.lineTo(bx, by + Math.sin(bx * 0.04 + band) * 2);
    }
    ctx.stroke();
  }

  // Knots — small dark ovals
  for (let k = 0; k < 5; k++) {
    const kx = Math.random() * W, ky = 50 + Math.random() * (H - 100);
    const kw = 4 + Math.random() * 6, kh = 3 + Math.random() * 5;
    const kGrad = ctx.createRadialGradient(kx, ky, 0, kx, ky, kw);
    kGrad.addColorStop(0, 'rgba(15,8,4,0.5)');
    kGrad.addColorStop(0.5, 'rgba(30,18,10,0.3)');
    kGrad.addColorStop(1, 'rgba(40,25,14,0)');
    ctx.fillStyle = kGrad;
    ctx.beginPath();
    ctx.ellipse(kx, ky, kw, kh, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Bioluminescent vein hints — faint green streaks in some cracks
  for (let v = 0; v < 8; v++) {
    const vx = Math.random() * W;
    ctx.strokeStyle = 'rgba(34,136,85,0.08)';
    ctx.lineWidth = 0.5 + Math.random() * 0.8;
    ctx.beginPath();
    let vy = Math.random() * H * 0.3;
    ctx.moveTo(vx, vy);
    const vLen = 30 + Math.random() * 80;
    while (vy < vy + vLen && vy < H) {
      vy += 4 + Math.random() * 6;
      ctx.lineTo(vx + Math.sin(vy * 0.08 + v * 2) * 2, vy);
    }
    ctx.stroke();
  }

  _barkTexture = new THREE.CanvasTexture(canvas);
  _barkTexture.wrapS = THREE.RepeatWrapping;
  _barkTexture.wrapT = THREE.RepeatWrapping;
  return _barkTexture;
}

// Bioluminescent color palettes for canopy variety
const GLOW_PALETTES = [
  { leaf: 0x145528, glow: 0x22cc77, core: 0x44ffaa },  // emerald
  { leaf: 0x0e3828, glow: 0x33bbaa, core: 0x55ffcc },  // teal
  { leaf: 0x1a4420, glow: 0x44cc55, core: 0x77ff88 },  // lime-green
  { leaf: 0x103030, glow: 0x2299aa, core: 0x44ddee },  // cyan
  { leaf: 0x182844, glow: 0x3388cc, core: 0x55bbff },  // blue (rare)
];
export { GLOW_PALETTES };

// ================================================================
// Billboard impostor — procedural glow texture for distant trees
// ================================================================
let _glowTexture = null;
function getGlowTexture() {
  if (_glowTexture) return _glowTexture;
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const c = canvas.getContext('2d');
  const grad = c.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(68, 255, 136, 0.55)');
  grad.addColorStop(0.25, 'rgba(34, 204, 100, 0.35)');
  grad.addColorStop(0.6, 'rgba(20, 120, 60, 0.12)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  c.fillStyle = grad;
  c.fillRect(0, 0, size, size);
  _glowTexture = new THREE.CanvasTexture(canvas);
  return _glowTexture;
}

// Create a billboard impostor sprite for a tree (1 draw call at distance)
export function makeTreeImpostor(treeH, groundY) {
  const mat = new THREE.SpriteMaterial({
    map: getGlowTexture(),
    color: 0x33cc88,
    transparent: true,
    opacity: 0.65,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const sprite = new THREE.Sprite(mat);
  const canopyW = treeH * 0.55;
  sprite.scale.set(canopyW * 2.2, canopyW * 1.6, 1);
  sprite.position.y = groundY + treeH * 0.6;
  sprite.visible = false;
  scene.add(sprite);
  return sprite;
}

// ================================================================
// Generate a template tree Group at origin (for baking into merged geometry)
// Categories: 'trunk' (bark/mound), 'canopy' (core/mid leaves),
//             'glow' (haze/underglow), 'detail' (veins/roots/branches/moss/fungi)
// ================================================================
function generateTemplateTree(palIdx) {
  const g = new THREE.Group();
  const h = 6 + sr() * 10, r = 0.2 + sr() * 0.3;

  // Trunk
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.4, r, h, 6));
  trunk.material = new THREE.MeshStandardMaterial({ color: 0x5a4030 });
  trunk.position.y = h / 2;
  trunk.userData._cat = 'trunk';
  g.add(trunk);

  // Veins
  const veinN = 2 + Math.floor(sr() * 3);
  for (let vi = 0; vi < veinN; vi++) {
    const va = vi / veinN * 6.28 + sr() * 0.5;
    const vH = h * 0.4 + sr() * h * 0.4;
    const vein = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.015, vH, 3));
    vein.material = new THREE.MeshStandardMaterial({ color: 0x228855 });
    vein.position.set(Math.cos(va) * r * 0.74, h * 0.15 + vH / 2, Math.sin(va) * r * 0.74);
    vein.userData._cat = 'detail';
    g.add(vein);
  }

  // Roots
  const rootN = 3 + Math.floor(sr() * 3);
  for (let ri = 0; ri < rootN; ri++) {
    const ra = ri / rootN * 6.28 + sr() * 0.5;
    const rLen = 0.8 + sr() * 1.5;
    const root = new THREE.Mesh(new THREE.CylinderGeometry(0.02, r * 0.3, rLen, 4));
    root.material = new THREE.MeshStandardMaterial({ color: 0x3a2c1a });
    root.position.set(Math.cos(ra) * r * 0.5, 0.08, Math.sin(ra) * r * 0.5);
    root.rotation.z = ra < 3.14 ? (1.2 + sr() * 0.3) : -(1.2 + sr() * 0.3);
    root.rotation.y = ra;
    root.userData._cat = 'detail';
    g.add(root);
  }

  // Branches with canopy clusters — force palette to palIdx
  const pal = GLOW_PALETTES[palIdx % GLOW_PALETTES.length];
  const bc = 3 + Math.floor(sr() * 4);
  for (let i = 0; i < bc; i++) {
    const by = h * (0.70 + sr() * 0.25), ang = sr() * Math.PI * 2, bl = 1.5 + sr() * 3;

    // Branch (wooden — goes with trunk)
    const br = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.06, bl, 4));
    br.material = new THREE.MeshStandardMaterial({ color: 0x5a4030 });
    br.position.set(Math.cos(ang) * 0.3, by, Math.sin(ang) * 0.3);
    br.rotation.z = (sr() - 0.5) * 1.2; br.rotation.y = ang;
    br.userData._cat = 'trunk';
    g.add(br);

    // Consume palette sr() call to keep RNG alignment
    sr();
    const cx = Math.cos(ang) * (bl * 0.5);
    const cy = by + sr() * 1.5;
    const cz = Math.sin(ang) * (bl * 0.5);
    const leafSize = 1 + sr() * 2;

    // Core (bright emissive canopy)
    sr(); // consume emissiveIntensity random
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(leafSize * 0.3, 1));
    core.material = new THREE.MeshStandardMaterial({ color: pal.core });
    core.position.set(cx, cy, cz);
    core.userData._cat = 'canopy';
    g.add(core);

    // Mid canopy
    sr(); // emissiveIntensity
    const mid = new THREE.Mesh(new THREE.IcosahedronGeometry(leafSize * 0.75, 1));
    mid.material = new THREE.MeshStandardMaterial({ color: pal.leaf });
    mid.position.set(cx + (sr() - 0.5) * 0.4, cy + (sr() - 0.5) * 0.4, cz + (sr() - 0.5) * 0.4);
    mid.scale.set(1 + sr() * 0.4, 0.65 + sr() * 0.5, 1 + sr() * 0.4);
    mid.userData._cat = 'canopy';
    g.add(mid);

    // Haze
    const haze = new THREE.Mesh(new THREE.IcosahedronGeometry(leafSize * 1.2, 1));
    haze.material = new THREE.MeshStandardMaterial({ color: pal.glow });
    haze.position.set(cx, cy, cz);
    haze.userData._cat = 'glow';
    g.add(haze);

    // Hanging moss
    if (sr() < 0.35) {
      const mLen = 0.3 + sr() * 0.8;
      const moss = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.003, mLen, 3));
      moss.material = new THREE.MeshStandardMaterial({ color: 0x2a5030 });
      const mOff = sr() * bl * 0.4;
      moss.position.set(Math.cos(ang) * (0.3 + mOff), by - mLen / 2 - sr() * 0.3, Math.sin(ang) * (0.3 + mOff));
      moss.userData._cat = 'detail';
      g.add(moss);
    } else {
      sr(); sr(); sr(); // consume same sr() calls as the moss branch for RNG consistency
    }
  }

  // Shelf fungi
  const fungN = Math.floor(sr() * 3);
  for (let fi = 0; fi < fungN; fi++) {
    const fy = 1 + sr() * h * 0.4;
    const fa = sr() * 6.28;
    const fungR = 0.08 + sr() * 0.08;
    const fung = new THREE.Mesh(new THREE.SphereGeometry(fungR, 5, 3));
    fung.material = new THREE.MeshStandardMaterial({ color: 0x5a3520 });
    fung.scale.set(1.5, 0.3, 1);
    fung.position.set(Math.cos(fa) * r * 0.8, fy, Math.sin(fa) * r * 0.8);
    fung.rotation.y = -fa;
    fung.userData._cat = 'detail';
    g.add(fung);
  }

  // Underglow — positioned near canopy to light from above, not mid-trunk
  const under = new THREE.Mesh(new THREE.SphereGeometry(2.5 + sr() * 1.5, 8, 6));
  under.material = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.leaf) });
  under.position.y = h * 0.85;
  under.userData._cat = 'glow';
  g.add(under);

  // Base mound
  const mound = new THREE.Mesh(new THREE.SphereGeometry(r * 2.5, 6, 3));
  mound.material = new THREE.MeshStandardMaterial({ color: 0x121008 });
  mound.scale.set(1, 0.12, 1); mound.position.y = 0.02;
  mound.userData._cat = 'trunk';
  g.add(mound);

  g.userData.treeH = h;
  return g;
}

// ================================================================
// Bake a template tree Group into merged BufferGeometries with vertex colors
// Returns { trunkGeo, canopyGeo, glowGeo, detailGeo, treeH, palIdx }
// ================================================================
function bakeTemplate(palIdx, seedOffset) {
  // Use a separate seed for template generation so main world RNG is unaffected
  const saved = saveSeed();
  restoreSeed(7919 + seedOffset * 1013 + palIdx * 3571); // deterministic unique seed per template

  const group = generateTemplateTree(palIdx);
  const treeH = group.userData.treeH;

  restoreSeed(saved); // restore main RNG

  // Update world matrices for children
  group.updateMatrixWorld(true);

  const trunkGeoms = [], canopyGeoms = [], glowGeoms = [], detailGeoms = [];
  const color = new THREE.Color();

  for (let ci = 0; ci < group.children.length; ci++) {
    const mesh = group.children[ci];
    if (!mesh.isMesh) continue;

    let geo = mesh.geometry.clone();
    // Apply mesh transform to vertices
    mesh.updateMatrix();
    geo.applyMatrix4(mesh.matrix);

    // Normalize to non-indexed geometry (CylinderGeometry is indexed,
    // IcosahedronGeometry is not — mergeGeometries requires all same)
    if (geo.index) {
      const nonIndexed = geo.toNonIndexed();
      geo.dispose();
      geo = nonIndexed;
    }

    // Bake material color as vertex colors
    // For trunk category: use white vertex colors so bark texture shows through
    // (vertexColor × textureColor — brown × brown = too dark; white × brown = correct)
    const cat = mesh.userData._cat || 'trunk';
    if (cat === 'trunk') {
      color.set(0xffffff);
    } else {
      color.copy(mesh.material.color);
    }
    const posAttr = geo.attributes.position;
    const vCount = posAttr.count;
    const colors = new Float32Array(vCount * 3);
    for (let vi = 0; vi < vCount; vi++) {
      colors[vi * 3] = color.r;
      colors[vi * 3 + 1] = color.g;
      colors[vi * 3 + 2] = color.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Keep UVs on trunk geometry for bark texture mapping;
    // remove UVs from other categories (not all have them, causes merge issues)
    if (cat === 'trunk') {
      // Ensure trunk geo has UVs (CylinderGeometry and SphereGeometry do)
      if (!geo.attributes.uv) {
        // Safety: generate placeholder UVs if missing
        const uvs = new Float32Array(vCount * 2);
        geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
      }
    } else {
      if (geo.attributes.uv) geo.deleteAttribute('uv');
    }

    if (cat === 'trunk') trunkGeoms.push(geo);
    else if (cat === 'canopy') canopyGeoms.push(geo);
    else if (cat === 'glow') glowGeoms.push(geo);
    else if (cat === 'detail') detailGeoms.push(geo);

    // Dispose temp material
    mesh.material.dispose();
  }

  const trunkGeo = trunkGeoms.length > 0 ? mergeGeometries(trunkGeoms) : null;
  const canopyGeo = canopyGeoms.length > 0 ? mergeGeometries(canopyGeoms) : null;
  const glowGeo = glowGeoms.length > 0 ? mergeGeometries(glowGeoms) : null;
  const detailGeo = detailGeoms.length > 0 ? mergeGeometries(detailGeoms) : null;

  // Dispose individual geometries
  for (const g of trunkGeoms) g.dispose();
  for (const g of canopyGeoms) g.dispose();
  for (const g of glowGeoms) g.dispose();
  for (const g of detailGeoms) g.dispose();

  return { trunkGeo, canopyGeo, glowGeo, detailGeo, treeH, palIdx };
}

// ================================================================
// Create InstancedMesh set for all templates
// Returns array of { trunk, canopy, glow, detail, instances: [] } per template
// ================================================================
const _dummy = new THREE.Object3D();

export function createTreeTemplates(templateCount) {
  const templates = [];
  for (let t = 0; t < templateCount; t++) {
    const palIdx = t % GLOW_PALETTES.length;
    const seedOffset = Math.floor(t / GLOW_PALETTES.length);
    templates.push(bakeTemplate(palIdx, seedOffset));
  }
  return templates;
}

export function createTreeInstances(templates, positions, maxPerTemplate) {
  const meshes = [];

  for (let t = 0; t < templates.length; t++) {
    const tmpl = templates[t];
    const palData = GLOW_PALETTES[tmpl.palIdx];

    // Trunk InstancedMesh (bark, branches, mound) — bark texture, no emissive
    // (green emissive was tinting trunks blue/green, hiding bark detail)
    const barkTex = getBarkTexture();
    const trunkMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      map: barkTex,
      roughness: 0.85,
      emissive: 0x000000,
      emissiveIntensity: 0
    });
    const trunkMesh = tmpl.trunkGeo ? new THREE.InstancedMesh(tmpl.trunkGeo, trunkMat, maxPerTemplate) : null;
    if (trunkMesh) {
      trunkMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      trunkMesh.count = 0;
      scene.add(trunkMesh);
    }

    // Canopy InstancedMesh (cores, mid-canopy leaves) — emissive glow source
    const canopyMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.5,
      emissive: palData.glow,
      emissiveIntensity: 0.22
    });
    const canopyMesh = tmpl.canopyGeo ? new THREE.InstancedMesh(tmpl.canopyGeo, canopyMat, maxPerTemplate) : null;
    if (canopyMesh) {
      canopyMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      canopyMesh.count = 0;
      scene.add(canopyMesh);
    }

    // Glow InstancedMesh (haze, underglow) — soft transparent halos
    const glowMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      emissive: palData.glow,
      emissiveIntensity: 0.08,
      transparent: true,
      opacity: 0.07,
      depthWrite: false
    });
    const glowMesh = tmpl.glowGeo ? new THREE.InstancedMesh(tmpl.glowGeo, glowMat, maxPerTemplate) : null;
    if (glowMesh) {
      glowMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      glowMesh.count = 0;
      scene.add(glowMesh);
    }

    // Detail InstancedMesh (veins, roots, moss, fungi) — small features, close range only
    const detailMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      emissive: palData.glow,
      emissiveIntensity: 0.2
    });
    const detailMesh = tmpl.detailGeo ? new THREE.InstancedMesh(tmpl.detailGeo, detailMat, maxPerTemplate) : null;
    if (detailMesh) {
      detailMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      detailMesh.count = 0;
      scene.add(detailMesh);
    }

    meshes.push({
      trunk: trunkMesh,
      canopy: canopyMesh,
      glow: glowMesh,
      detail: detailMesh,
      trunkMat,
      canopyMat,
      glowMat,
      detailMat,
      instances: [],
      treeH: tmpl.treeH
    });
  }

  // Assign each position to a template (round-robin for even distribution)
  for (let i = 0; i < positions.length; i++) {
    const tIdx = i % templates.length;
    const pos = positions[i];
    const yRot = pos.yRot;
    const scale = pos.scale;

    _dummy.position.set(pos.x, pos.y, pos.z);
    _dummy.rotation.set(0, yRot, 0);
    _dummy.scale.setScalar(scale);
    _dummy.updateMatrix();

    const idx = meshes[tIdx].instances.length;
    if (meshes[tIdx].trunk) meshes[tIdx].trunk.setMatrixAt(idx, _dummy.matrix);
    if (meshes[tIdx].canopy) meshes[tIdx].canopy.setMatrixAt(idx, _dummy.matrix);
    if (meshes[tIdx].glow) meshes[tIdx].glow.setMatrixAt(idx, _dummy.matrix);
    if (meshes[tIdx].detail) meshes[tIdx].detail.setMatrixAt(idx, _dummy.matrix);

    meshes[tIdx].instances.push({
      x: pos.x, z: pos.z, y: pos.y,
      yRot, scale, treeH: pos.treeH || meshes[tIdx].treeH,
      posIdx: i
    });
  }

  // Set initial counts — trunk + canopy + glow visible, detail hidden (LOD)
  for (let t = 0; t < meshes.length; t++) {
    const n = meshes[t].instances.length;
    if (meshes[t].trunk) meshes[t].trunk.count = n;
    if (meshes[t].canopy) meshes[t].canopy.count = n;
    if (meshes[t].glow) meshes[t].glow.count = n;
    if (meshes[t].detail) meshes[t].detail.count = 0; // detail starts hidden
  }

  return meshes;
}

// ================================================================
// LOD update for instanced trees
// Rebuilds instance matrices each frame based on distance
// ================================================================
export function updateTreeLOD(treeMeshes, treeImpostors, px, py, pz, t, wAmp, wLeanX, wLeanZ) {
  for (let ti = 0; ti < treeMeshes.length; ti++) {
    const mesh = treeMeshes[ti];
    let trunkCount = 0, canopyCount = 0, glowCount = 0, detailCount = 0;

    for (let i = 0; i < mesh.instances.length; i++) {
      const inst = mesh.instances[i];
      const dx = inst.x - px, dz = inst.z - pz;
      const dy = (inst.y + (inst.treeH || 10) * 0.4) - py;
      const d2 = dx * dx + dy * dy + dz * dz;
      const posIdx = inst.posIdx;

      // Tier 3 (>110m): hidden entirely
      if (d2 > 12100) {
        if (treeImpostors[posIdx]) treeImpostors[posIdx].visible = false;
        continue;
      }

      // Tier 2 (70-110m): impostor only
      if (d2 > 4900) {
        if (treeImpostors[posIdx]) treeImpostors[posIdx].visible = true;
        continue;
      }

      // Tier 0-1 (<70m): show 3D instanced mesh
      if (treeImpostors[posIdx]) treeImpostors[posIdx].visible = false;

      _dummy.position.set(inst.x, inst.y, inst.z);
      _dummy.scale.setScalar(inst.scale);

      if (d2 < 400) {
        // Tier 0 (<20m): full detail + wind sway
        const tPhase = inst.x * 0.1 + inst.z * 0.13;
        _dummy.rotation.set(
          Math.sin(t * 0.25 + tPhase + 1) * 0.003 * wAmp + wLeanZ * 0.15,
          inst.yRot,
          Math.sin(t * 0.3 + tPhase) * 0.004 * wAmp + wLeanX * 0.15
        );
        _dummy.updateMatrix();
        if (mesh.detail) mesh.detail.setMatrixAt(detailCount++, _dummy.matrix);
      } else {
        // Tier 1 (20-70m): no detail, no sway
        _dummy.rotation.set(0, inst.yRot, 0);
        _dummy.updateMatrix();
      }

      if (mesh.trunk) mesh.trunk.setMatrixAt(trunkCount++, _dummy.matrix);
      if (mesh.canopy) mesh.canopy.setMatrixAt(canopyCount++, _dummy.matrix);
      if (mesh.glow) mesh.glow.setMatrixAt(glowCount++, _dummy.matrix);
    }

    if (mesh.trunk) { mesh.trunk.count = trunkCount; mesh.trunk.instanceMatrix.needsUpdate = true; }
    if (mesh.canopy) { mesh.canopy.count = canopyCount; mesh.canopy.instanceMatrix.needsUpdate = true; }
    if (mesh.glow) { mesh.glow.count = glowCount; mesh.glow.instanceMatrix.needsUpdate = true; }
    if (mesh.detail) { mesh.detail.count = detailCount; mesh.detail.instanceMatrix.needsUpdate = true; }
  }
}

// ================================================================
// Transform tree materials for quest TRANSFORM phase
// ================================================================
export function transformTreeMaterials(treeMeshes, color, emissive, emissiveIntensity) {
  for (let ti = 0; ti < treeMeshes.length; ti++) {
    const mesh = treeMeshes[ti];
    if (mesh.trunkMat) {
      mesh.trunkMat.emissive.set(emissive);
      mesh.trunkMat.emissiveIntensity = emissiveIntensity * 0.15;
    }
    if (mesh.canopyMat) {
      mesh.canopyMat.color.set(color);
      mesh.canopyMat.emissive.set(emissive);
      mesh.canopyMat.emissiveIntensity = emissiveIntensity;
    }
    if (mesh.glowMat) {
      mesh.glowMat.emissive.set(emissive);
      mesh.glowMat.emissiveIntensity = emissiveIntensity * 0.3;
    }
    if (mesh.detailMat) {
      mesh.detailMat.emissive.set(emissive);
      mesh.detailMat.emissiveIntensity = emissiveIntensity * 0.4;
    }
  }
}

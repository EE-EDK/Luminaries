import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { saveSeed, restoreSeed } from '../../utils/rng.js';
import { lerp } from '../../utils/math.js';
import { getGroundNormal } from '../../world/terrain.js';

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

  // Trunk — wider flared base tapering upward (like the reference image)
  const baseFlare = r * 1.8; // wide buttress base
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.4, baseFlare, h, 8));
  trunk.material = new THREE.MeshStandardMaterial({ color: 0x5a4030 });
  trunk.position.y = h / 2;
  trunk.userData._cat = 'trunk';
  g.add(trunk);

  // Bioluminescent veins on trunk surface
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

  // Buttress roots — thick roots spreading along the ground surface
  // Like the reference: wide, prominent roots radiating outward from the flared base
  const _rootUp = new THREE.Vector3(0, 1, 0);
  const rootN = 4 + Math.floor(sr() * 4); // 4-7 major roots
  for (let ri = 0; ri < rootN; ri++) {
    const ra = ri / rootN * 6.28 + sr() * 0.4;
    const rLen = 0.8 + sr() * 1.8; // shorter roots stay closer to ground
    const rBaseR = baseFlare * (0.3 + sr() * 0.2); // thick at trunk junction
    const rTipR = 0.03 + sr() * 0.03;
    // Roots angle downward into the terrain
    const rootDown = -0.25 - sr() * 0.25; // steeper angle hugs terrain
    const rdx = Math.cos(ra) * Math.cos(rootDown);
    const rdy = Math.sin(rootDown);
    const rdz = Math.sin(ra) * Math.cos(rootDown);
    const rootDir = new THREE.Vector3(rdx, rdy, rdz).normalize();

    const rootGeo = new THREE.CylinderGeometry(rTipR, rBaseR, rLen, 5);
    rootGeo.translate(0, rLen / 2, 0); // base at origin
    const rootMesh = new THREE.Mesh(rootGeo, new THREE.MeshStandardMaterial({ color: 0x4a3828 }));
    rootMesh.position.set(Math.cos(ra) * baseFlare * 0.6, 0.05, Math.sin(ra) * baseFlare * 0.6);
    const rq = new THREE.Quaternion().setFromUnitVectors(_rootUp, rootDir);
    rootMesh.quaternion.copy(rq);
    rootMesh.userData._cat = 'trunk';
    g.add(rootMesh);

    // Secondary smaller root splitting off each major root
    if (sr() < 0.6) {
      const subT = 0.4 + sr() * 0.3;
      const subAng = ra + (sr() - 0.5) * 1.2;
      const subLen = 0.5 + sr() * 1.0;
      const subDir = new THREE.Vector3(
        Math.cos(subAng) * Math.cos(-0.1),
        Math.sin(-0.1),
        Math.sin(subAng) * Math.cos(-0.1)
      ).normalize();
      const subGeo = new THREE.CylinderGeometry(0.02, rBaseR * 0.3, subLen, 4);
      subGeo.translate(0, subLen / 2, 0);
      const subMesh = new THREE.Mesh(subGeo, new THREE.MeshStandardMaterial({ color: 0x4a3828 }));
      const sBase = new THREE.Vector3(
        Math.cos(ra) * baseFlare * 0.6 + rdx * rLen * subT,
        0.05 + rdy * rLen * subT,
        Math.sin(ra) * baseFlare * 0.6 + rdz * rLen * subT
      );
      subMesh.position.copy(sBase);
      const sq = new THREE.Quaternion().setFromUnitVectors(_rootUp, subDir);
      subMesh.quaternion.copy(sq);
      subMesh.userData._cat = 'trunk';
      g.add(subMesh);
    } else { sr(); sr(); }
  }

  // ---- Realistic branching system ----
  // Lower scaffold branches + crown branches with sub-branching + canopy at tips
  const pal = GLOW_PALETTES[palIdx % GLOW_PALETTES.length];
  const _branchMat = new THREE.MeshStandardMaterial({ color: 0x5a4030 });
  const _branchMatDark = new THREE.MeshStandardMaterial({ color: 0x4a3525 });
  const _up = new THREE.Vector3(0, 1, 0);

  // Helper: create a tapered branch cylinder oriented from base toward direction
  function addBranch(basePos, dir, len, baseR, tipR, mat) {
    const geo = new THREE.CylinderGeometry(tipR, baseR, len, 5);
    geo.translate(0, len / 2, 0); // base at local origin, tip at (0,len,0)
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(basePos);
    const d = dir.clone().normalize();
    const quat = new THREE.Quaternion().setFromUnitVectors(_up, d);
    mesh.quaternion.copy(quat);
    mesh.userData._cat = 'trunk';
    g.add(mesh);
  }

  // Helper: add organic canopy cluster — multiple small scattered leaf clouds
  // instead of uniform spheres, creating irregular natural-looking foliage
  function addCanopy(cx, cy, cz, size) {
    // 3-6 small leaf cloud volumes scattered around branch tip
    const cloudN = 3 + Math.floor(sr() * 4);
    const spread = size * 0.45;
    for (let ci = 0; ci < cloudN; ci++) {
      const cloudR = size * (0.12 + sr() * 0.18); // varied small radii
      const cloud = new THREE.Mesh(new THREE.IcosahedronGeometry(cloudR, 1));
      // Alternate between leaf and brighter core colors for depth
      const isBright = sr() < 0.3;
      cloud.material = new THREE.MeshStandardMaterial({
        color: isBright ? pal.core : pal.leaf
      });
      // Scatter position irregularly around the center
      cloud.position.set(
        cx + (sr() - 0.5) * spread * 2,
        cy + (sr() - 0.3) * spread * 1.4, // bias slightly upward
        cz + (sr() - 0.5) * spread * 2
      );
      // Non-uniform scale: elongated, squashed, stretched for organic shape
      cloud.scale.set(
        0.7 + sr() * 0.8,
        0.5 + sr() * 0.9,
        0.7 + sr() * 0.8
      );
      cloud.userData._cat = 'canopy';
      g.add(cloud);
    }

    // Soft glow haze — slightly smaller than before, centered
    const haze = new THREE.Mesh(new THREE.IcosahedronGeometry(size * 0.5, 1));
    haze.material = new THREE.MeshStandardMaterial({ color: pal.glow });
    haze.position.set(cx, cy, cz);
    haze.scale.set(1 + sr() * 0.3, 0.7 + sr() * 0.4, 1 + sr() * 0.3);
    haze.userData._cat = 'glow';
    g.add(haze);
  }

  // ---- Lower scaffold branches (2-3, at 30-55% height) ----
  // Shorter, thicker, angled upward — reaching for light
  const lowerN = 2 + Math.floor(sr() * 2);
  for (let i = 0; i < lowerN; i++) {
    const by = h * (0.30 + sr() * 0.25);
    const ang = i / lowerN * Math.PI * 2 + sr() * 1.0;
    const upAngle = 0.35 + sr() * 0.45; // 20-46° upward
    const len = 1.0 + sr() * 1.8;
    const baseR = r * 0.4;
    const tipR = r * 0.08;
    const dx = Math.cos(ang) * Math.cos(upAngle);
    const dy = Math.sin(upAngle);
    const dz = Math.sin(ang) * Math.cos(upAngle);
    const dir = new THREE.Vector3(dx, dy, dz);
    const base = new THREE.Vector3(Math.cos(ang) * r * 0.95, by, Math.sin(ang) * r * 0.95);
    addBranch(base, dir, len, baseR, tipR, _branchMat);

    // Occasional hanging moss from lower branches
    if (sr() < 0.4) {
      const mLen = 0.4 + sr() * 0.8;
      const moss = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.003, mLen, 3));
      moss.material = new THREE.MeshStandardMaterial({ color: 0x2a5030 });
      const mT = 0.4 + sr() * 0.4; // along branch
      moss.position.set(base.x + dx * len * mT, base.y + dy * len * mT - mLen / 2, base.z + dz * len * mT);
      moss.userData._cat = 'detail';
      g.add(moss);
    } else { sr(); sr(); }
  }

  // ---- Crown branches (5-8, at 55-92% height) with sub-branches ----
  const crownN = 5 + Math.floor(sr() * 4);
  for (let i = 0; i < crownN; i++) {
    const by = h * (0.55 + sr() * 0.37);
    const ang = i / crownN * Math.PI * 2 + sr() * 0.5; // evenly spaced + jitter
    const upAngle = 0.6 + sr() * 0.55; // 34-66° above horizontal, strongly upward
    const len = 1.5 + sr() * 3.0;
    const baseR = r * 0.35;
    const tipR = 0.03 + sr() * 0.02;
    const dx = Math.cos(ang) * Math.cos(upAngle);
    const dy = Math.sin(upAngle);
    const dz = Math.sin(ang) * Math.cos(upAngle);
    const dir = new THREE.Vector3(dx, dy, dz);
    const base = new THREE.Vector3(Math.cos(ang) * r * 0.95, by, Math.sin(ang) * r * 0.95);
    addBranch(base, dir, len, baseR, tipR, _branchMat);

    // Tip position for canopy
    const tipX = base.x + dx * len;
    const tipY = base.y + dy * len;
    const tipZ = base.z + dz * len;
    const leafSize = 0.8 + sr() * 1.5;
    addCanopy(tipX, tipY, tipZ, leafSize);

    // 1-3 sub-branches splitting off main branch
    const subN = 1 + Math.floor(sr() * 3);
    for (let si = 0; si < subN; si++) {
      const subT = 0.35 + sr() * 0.35; // 35-70% along parent
      const subBase = new THREE.Vector3(
        base.x + dx * len * subT,
        base.y + dy * len * subT,
        base.z + dz * len * subT
      );
      const subAng = ang + (sr() - 0.5) * 1.8;
      const subUp = 0.45 + sr() * 0.55; // 26-57° upward
      const subLen = 0.6 + sr() * 1.4;
      const subDir = new THREE.Vector3(
        Math.cos(subAng) * Math.cos(subUp),
        Math.sin(subUp),
        Math.sin(subAng) * Math.cos(subUp)
      );
      addBranch(subBase, subDir, subLen, 0.04, 0.012, _branchMatDark);

      // Small canopy cluster at sub-branch tip
      const stx = subBase.x + subDir.x * subLen;
      const sty = subBase.y + subDir.y * subLen;
      const stz = subBase.z + subDir.z * subLen;
      const subLeaf = 0.5 + sr() * 0.8;
      addCanopy(stx, sty, stz, subLeaf);
    }

    // Hanging moss on some crown branches
    if (sr() < 0.3) {
      const mLen = 0.3 + sr() * 0.7;
      const moss = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.003, mLen, 3));
      moss.material = new THREE.MeshStandardMaterial({ color: 0x2a5030 });
      const mT = 0.5 + sr() * 0.3;
      moss.position.set(base.x + dx * len * mT, base.y + dy * len * mT - mLen / 2, base.z + dz * len * mT);
      moss.userData._cat = 'detail';
      g.add(moss);
    } else { sr(); sr(); }
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
const _slopeUp = new THREE.Vector3(0, 1, 0);
const _slopeNorm = new THREE.Vector3();
const _slopeQ = new THREE.Quaternion();
const _identQ = new THREE.Quaternion();
const _swayQ = new THREE.Quaternion();
const _yRotQ = new THREE.Quaternion();
const SLOPE_FACTOR = 0.15; // Subtle tilt — keeps trunks vertical, roots do the work via steep template angles

// Apply slope tilt + Y rotation to _dummy quaternion using cached normal
function applySlopeTilt(nx, ny, nz, yRot) {
  _slopeNorm.set(nx, ny, nz);
  _slopeQ.setFromUnitVectors(_slopeUp, _slopeNorm);
  _slopeQ.slerp(_identQ, 1.0 - SLOPE_FACTOR);
  _yRotQ.setFromAxisAngle(_slopeUp, yRot);
  _dummy.quaternion.copy(_slopeQ).multiply(_yRotQ);
}

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

    // Trunk InstancedMesh (bark, branches, mound) — bark texture, warm self-illumination
    // Warm brown emissive so bark texture shows even under green scene lighting
    const barkTex = getBarkTexture();
    const trunkMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      map: barkTex,
      roughness: 0.85,
      emissive: 0x1a1008,
      emissiveIntensity: 0.4
    });
    const trunkMesh = tmpl.trunkGeo ? new THREE.InstancedMesh(tmpl.trunkGeo, trunkMat, maxPerTemplate) : null;
    if (trunkMesh) {
      trunkMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      trunkMesh.count = 0;
      scene.add(trunkMesh);
    }

    // Canopy InstancedMesh (cores, mid-canopy leaves) — semi-transparent glowing volumes
    const canopyMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.5,
      emissive: palData.glow,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.5,
      depthWrite: false
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
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.15,
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
      emissiveIntensity: 0.4
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

    // Compute slope normal for root-grounding tilt
    const n = getGroundNormal(pos.x, pos.z);
    _dummy.position.set(pos.x, pos.y, pos.z);
    applySlopeTilt(n.x, n.y, n.z, yRot);
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
      posIdx: i,
      nx: n.x, ny: n.y, nz: n.z
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
      const impostor = treeImpostors[posIdx];

      // Tier 3 (>115m): hidden entirely
      if (d2 > 13225) {
        if (impostor) impostor.visible = false;
        continue;
      }

      // Fade-out zone (105-115m): impostor fading to invisible
      if (d2 > 11025) {
        if (impostor) {
          const d = Math.sqrt(d2);
          impostor.visible = true;
          impostor.material.opacity = lerp(0.65, 0, (d - 105) / 10);
        }
        continue;
      }

      // Tier 2 (75-105m): impostor at full opacity
      if (d2 > 5625) {
        if (impostor) {
          impostor.visible = true;
          impostor.material.opacity = 0.65;
        }
        continue;
      }

      // Cross-fade zone (63-75m): impostor fading out, 3D mesh also shown
      if (d2 > 3969) {
        const d = Math.sqrt(d2);
        const fadeFrac = (d - 63) / 12; // 0 at 63m, 1 at 75m
        if (impostor) {
          impostor.visible = true;
          impostor.material.opacity = lerp(0, 0.65, fadeFrac);
        }
        // Also render the 3D mesh during cross-fade
        _dummy.position.set(inst.x, inst.y, inst.z);
        applySlopeTilt(inst.nx, inst.ny, inst.nz, inst.yRot);
        _dummy.scale.setScalar(inst.scale);
        _dummy.updateMatrix();
        if (mesh.trunk) mesh.trunk.setMatrixAt(trunkCount++, _dummy.matrix);
        if (mesh.canopy) mesh.canopy.setMatrixAt(canopyCount++, _dummy.matrix);
        if (mesh.glow) mesh.glow.setMatrixAt(glowCount++, _dummy.matrix);
        continue;
      }

      // Tier 0-1 (<63m): show 3D instanced mesh only
      if (impostor) impostor.visible = false;

      _dummy.position.set(inst.x, inst.y, inst.z);
      _dummy.scale.setScalar(inst.scale);

      if (d2 < 400) {
        // Tier 0 (<20m): full detail + wind sway on top of slope tilt
        const tPhase = inst.x * 0.1 + inst.z * 0.13;
        applySlopeTilt(inst.nx, inst.ny, inst.nz, inst.yRot);
        const swX = Math.sin(t * 0.25 + tPhase + 1) * 0.003 * wAmp + wLeanZ * 0.15;
        const swZ = Math.sin(t * 0.3 + tPhase) * 0.004 * wAmp + wLeanX * 0.15;
        _swayQ.set(swX * 0.5, 0, swZ * 0.5, 1).normalize(); // small-angle approx
        _dummy.quaternion.multiply(_swayQ);
        _dummy.updateMatrix();
        if (mesh.detail) mesh.detail.setMatrixAt(detailCount++, _dummy.matrix);
      } else {
        // Tier 1 (20-63m): no detail, no sway
        applySlopeTilt(inst.nx, inst.ny, inst.nz, inst.yRot);
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

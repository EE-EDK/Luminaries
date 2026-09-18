import { BufferAttribute, BufferGeometry, CanvasTexture, Color, CylinderGeometry, DoubleSide, DynamicDrawUsage, Frustum, Group, IcosahedronGeometry, InstancedMesh, Matrix4, Mesh, MeshStandardMaterial, Object3D, PlaneGeometry, Points, PointsMaterial, Quaternion, RepeatWrapping, Sphere, SphereGeometry, SRGBColorSpace, Vector3 } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { scene } from '../../core/renderer.js';
import { C, WORLD_R } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { saveSeed, restoreSeed } from '../../utils/rng.js';
import { lerp } from '../../utils/math.js';
import { getGroundNormal } from '../../world/terrain.js';
import { getLodScale } from '../../systems/adaptiveQuality.js';

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

  // Base: warm amber-brown gradient (darker at base, lighter at top)
  const baseGrad = ctx.createLinearGradient(0, 0, 0, H);
  baseGrad.addColorStop(0, '#7a5840');
  baseGrad.addColorStop(0.3, '#6d4d38');
  baseGrad.addColorStop(0.7, '#5a3f2e');
  baseGrad.addColorStop(1, '#4e3525');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, W, H);

  // Vertical bark ridges — irregular parallel streaks
  for (let ridge = 0; ridge < 28; ridge++) {
    const rx = (ridge / 28) * W + (Math.sin(ridge * 3.7) * 6);
    const rw = 2 + Math.sin(ridge * 2.1) * 1.5;
    const bright = Math.sin(ridge * 1.3 + 0.5) * 0.5 + 0.5;
    const r = Math.floor(75 + bright * 45);
    const g = Math.floor(50 + bright * 30);
    const b = Math.floor(25 + bright * 18);
    ctx.strokeStyle = `rgba(${r},${g},${b},0.5)`;
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
    ctx.strokeStyle = `rgba(${55 + Math.random() * 30},${38 + Math.random() * 20},${18 + Math.random() * 12},0.2)`;
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
    ctx.strokeStyle = 'rgba(34,136,85,0.15)';
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

  _barkTexture = new CanvasTexture(canvas);
  _barkTexture.colorSpace = SRGBColorSpace;
  _barkTexture.wrapS = RepeatWrapping;
  _barkTexture.wrapT = RepeatWrapping;
  return _barkTexture;
}

// Bioluminescent color palettes for canopy variety — sourced from C.treeGlowPalettes
const GLOW_PALETTES = C.treeGlowPalettes;
export { GLOW_PALETTES };

// ================================================================
// Impostor texture — a tree-shaped stamp for the distant forest
// ================================================================
// The old impostor was the radial glow above, blended additively. That reads as
// light, not as a tree: while the forest is dimmed (treeDim starts at 0.35 and
// the quest is about restoring it) the glow multiplies down to ~5% luminance
// and the entire far forest disappears, so trees seemed to pop into existence
// at the 63 m mesh boundary. This stamp carries the tree's SHAPE — canopy blob
// over a tapered trunk — in its alpha, and its RGB darkens the trunk relative
// to the canopy. Drawn with normal blending and tinted per tree, a dimmed tree
// far away is a dark silhouette exactly like a dimmed tree close up.
let _impostorTexture = null;
function getTreeImpostorTexture() {
  if (_impostorTexture) return _impostorTexture;
  const S = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const d = img.data;
  const cx = S * 0.5, cy = S * 0.37, maxR = S * 0.46;

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      // --- Canopy: organic-edged blob, same perturbation family as the
      // near-tree canopy alpha map so near and far read as one forest.
      const dx = x - cx, dy = (y - cy) * 1.12;      // slightly wider than tall
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ang = Math.atan2(dy, dx);
      const edgeR = maxR * (0.80
        + 0.10 * Math.sin(ang * 3 + 0.5)
        + 0.06 * Math.sin(ang * 5 + 1.7)
        + 0.03 * Math.sin(ang * 7 + 3.1));
      const t = dist / edgeR;
      const canopy = t < 0.55 ? 1 : Math.max(0, 1 - Math.pow((t - 0.55) / 0.45, 1.4));

      // --- Trunk: tapered column from under the canopy to the bottom edge.
      const ny = y / S;
      let trunk = 0;
      if (ny > 0.42) {
        const halfW = S * (0.030 + 0.030 * (ny - 0.42) / 0.58);
        const tx = Math.abs(x - S * 0.5);
        trunk = Math.max(0, 1 - Math.pow(tx / halfW, 2.2));
        if (ny > 0.94) trunk *= (1 - ny) / 0.06;    // fade into the ground
      }

      const a = Math.min(1, Math.max(canopy, trunk * 0.95));
      // Trunk pixels render darker than canopy pixels (texture RGB multiplies
      // the per-tree vertex colour), which gives the silhouette some structure.
      const lum = canopy >= trunk ? 1.0 : 0.42;
      const v = Math.round(lum * 255);
      const i = (y * S + x) * 4;
      d[i] = v; d[i + 1] = v; d[i + 2] = v; d[i + 3] = Math.round(a * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  _impostorTexture = new CanvasTexture(canvas);
  return _impostorTexture;
}

// ================================================================
// Procedural canopy alpha map — soft organic blob for billboard quads
// ================================================================
let _canopyAlphaMap = null;
function getCanopyAlphaMap() {
  if (_canopyAlphaMap) return _canopyAlphaMap;
  const S = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const cx = S / 2, cy = S / 2, maxR = S / 2;

  // Build pixel data for organic blob shape (grayscale — alphaMap reads green channel)
  const imgData = ctx.createImageData(S, S);
  const data = imgData.data;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const dx = x - cx, dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      // Organic edge: perturb radius with layered sine waves
      const edgeR = maxR * (0.82
        + 0.09 * Math.sin(angle * 3 + 0.5)
        + 0.06 * Math.sin(angle * 5 + 1.7)
        + 0.03 * Math.sin(angle * 7 + 3.1)
      );

      // Soft radial falloff with gentle core
      const t = dist / edgeR;
      let alpha;
      if (t < 0.5) {
        alpha = 1.0;
      } else {
        alpha = Math.max(0, 1.0 - Math.pow((t - 0.5) / 0.5, 1.5));
      }

      const v = Math.floor(alpha * 255);
      const idx = (y * S + x) * 4;
      data[idx] = v;
      data[idx + 1] = v;
      data[idx + 2] = v;
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);

  _canopyAlphaMap = new CanvasTexture(canvas);
  return _canopyAlphaMap;
}

// ================================================================
// Impostor cloud — every distant tree's glow billboard is one point in a
// single Points mesh (1 draw call for all 495 trees; was one Sprite each,
// ~90 draw calls at the world centre). makeTreeImpostor() returns a proxy
// with the Sprite-shaped fields updateTreeLOD() and populate.js already use
// (position, visible, material.color / .opacity, userData); the arrays are
// flushed to the GPU once per frame by flushTreeImpostors().
// ================================================================
const IMP_MAX = 1024;
let _impCloud = null;
let _impCount = 0;
let _impPos = null, _impCol = null, _impAlpha = null, _impSize = null;
const _impProxies = [];

function getImpostorCloud() {
  if (_impCloud) return _impCloud;
  const geo = new BufferGeometry();
  _impPos = new Float32Array(IMP_MAX * 3);
  _impCol = new Float32Array(IMP_MAX * 3);
  _impAlpha = new Float32Array(IMP_MAX);
  _impSize = new Float32Array(IMP_MAX);
  geo.setAttribute('position', new BufferAttribute(_impPos, 3).setUsage(DynamicDrawUsage));
  geo.setAttribute('color', new BufferAttribute(_impCol, 3).setUsage(DynamicDrawUsage));
  geo.setAttribute('aAlpha', new BufferAttribute(_impAlpha, 1).setUsage(DynamicDrawUsage));
  geo.setAttribute('aSize', new BufferAttribute(_impSize, 1));
  geo.setDrawRange(0, 0);
  // Normal blending, not additive: the impostor has to be able to render DARKER
  // than the sky, because a dimmed tree is a silhouette. Additive can only add
  // light, which is why the dimmed far forest was invisible.
  const mat = new PointsMaterial({
    map: getTreeImpostorTexture(), vertexColors: true, transparent: true,
    depthWrite: false, sizeAttenuation: true, size: 1
  });
  mat.customProgramCacheKey = () => 'lumTreeImpostor';
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aAlpha;\nattribute float aSize;\nvarying float vAlpha;')
      .replace('gl_PointSize = size;', 'gl_PointSize = aSize; vAlpha = aAlpha;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vAlpha;')
      .replace('#include <color_fragment>', '#include <color_fragment>\n  diffuseColor.a *= vAlpha;');
  };
  _impCloud = new Points(geo, mat);
  _impCloud.frustumCulled = false;
  scene.add(_impCloud);
  return _impCloud;
}

// Create a billboard impostor for a tree — a slot in the shared point cloud.
export function makeTreeImpostor(treeH, groundY) {
  getImpostorCloud();
  if (_impCount >= IMP_MAX) throw new Error('tree impostor cloud is full; raise IMP_MAX');
  const idx = _impCount++;
  const canopyW = treeH * 0.55;
  // World width → point size: PointsMaterial gives px = aSize·(H/2)/depth, a sprite gives
  // W·(H/2)/(depth·tan(fov/2)); fov 65° → 1/tan(32.5°) ≈ 1.57.
  // The point is square and the stamp draws ground-to-crown inside it; canopyW is
  // 0.55·treeH, so 2.2·canopyW = 1.21·treeH covers the whole tree with the point
  // centred at mid-trunk.
  _impSize[idx] = canopyW * 2.2 * 1.57;
  _impAlpha[idx] = 0;
  const proxy = {
    isImpostorProxy: true, idx,
    position: { x: 0, y: groundY + treeH * 0.5, z: 0 },   // stamp centre = mid-trunk
    visible: false,
    material: { color: new Color(C.treeGlowImpostor), opacity: 0.65 },
    userData: {}
  };
  _impProxies.push(proxy);
  _impCloud.geometry.setDrawRange(0, _impCount);
  return proxy;
}

/** @brief Copy every impostor proxy's state into the point-cloud attributes (once per frame). */
export function flushTreeImpostors() {
  if (!_impCloud) return;
  const geo = _impCloud.geometry;
  for (let i = 0; i < _impProxies.length; i++) {
    const p = _impProxies[i];
    const o = p.idx * 3;
    _impPos[o] = p.position.x; _impPos[o + 1] = p.position.y; _impPos[o + 2] = p.position.z;
    const c = p.material.color;
    _impCol[o] = c.r; _impCol[o + 1] = c.g; _impCol[o + 2] = c.b;
    _impAlpha[p.idx] = p.visible ? p.material.opacity : 0;
  }
  geo.attributes.position.needsUpdate = true;
  geo.attributes.color.needsUpdate = true;
  geo.attributes.aAlpha.needsUpdate = true;
}

// ================================================================
// Generate a template tree Group at origin (for baking into merged geometry)
// Categories: 'trunk' (bark/mound), 'canopy' (core/mid leaves),
//             'glow' (haze/underglow), 'detail' (veins/roots/branches/moss/fungi)
// ================================================================
function generateTemplateTree(palIdx) {
  const g = new Group();
  const h = 6 + sr() * 10, r = 0.2 + sr() * 0.3;

  // Trunk — wider flared base tapering upward (like the reference image)
  const baseFlare = r * 1.8; // wide buttress base
  const trunk = new Mesh(new CylinderGeometry(r * 0.4, baseFlare, h, 8));
  trunk.material = new MeshStandardMaterial({ color: C.barkTrunk });
  trunk.position.y = h / 2;
  trunk.userData._cat = 'trunk';
  g.add(trunk);

  // Bioluminescent veins on trunk surface
  const veinN = 2 + Math.floor(sr() * 3);
  for (let vi = 0; vi < veinN; vi++) {
    const va = vi / veinN * 6.28 + sr() * 0.5;
    const vH = h * 0.4 + sr() * h * 0.4;
    const vein = new Mesh(new CylinderGeometry(0.008, 0.015, vH, 3));
    vein.material = new MeshStandardMaterial({ color: C.barkVein });
    vein.position.set(Math.cos(va) * r * 0.74, h * 0.15 + vH / 2, Math.sin(va) * r * 0.74);
    vein.userData._cat = 'detail';
    g.add(vein);
  }

  // Buttress roots — thick roots spreading along the ground surface
  // Like the reference: wide, prominent roots radiating outward from the flared base
  const _rootUp = new Vector3(0, 1, 0);
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
    const rootDir = new Vector3(rdx, rdy, rdz).normalize();

    const rootGeo = new CylinderGeometry(rTipR, rBaseR, rLen, 5);
    rootGeo.translate(0, rLen / 2, 0); // base at origin
    const rootMesh = new Mesh(rootGeo, new MeshStandardMaterial({ color: C.barkRoot }));
    rootMesh.position.set(Math.cos(ra) * baseFlare * 0.6, 0.05, Math.sin(ra) * baseFlare * 0.6);
    const rq = new Quaternion().setFromUnitVectors(_rootUp, rootDir);
    rootMesh.quaternion.copy(rq);
    rootMesh.userData._cat = 'trunk';
    g.add(rootMesh);

    // Secondary smaller root splitting off each major root
    if (sr() < 0.6) {
      const subT = 0.4 + sr() * 0.3;
      const subAng = ra + (sr() - 0.5) * 1.2;
      const subLen = 0.5 + sr() * 1.0;
      const subDir = new Vector3(
        Math.cos(subAng) * Math.cos(-0.1),
        Math.sin(-0.1),
        Math.sin(subAng) * Math.cos(-0.1)
      ).normalize();
      const subGeo = new CylinderGeometry(0.02, rBaseR * 0.3, subLen, 4);
      subGeo.translate(0, subLen / 2, 0);
      const subMesh = new Mesh(subGeo, new MeshStandardMaterial({ color: C.barkRoot }));
      const sBase = new Vector3(
        Math.cos(ra) * baseFlare * 0.6 + rdx * rLen * subT,
        0.05 + rdy * rLen * subT,
        Math.sin(ra) * baseFlare * 0.6 + rdz * rLen * subT
      );
      subMesh.position.copy(sBase);
      const sq = new Quaternion().setFromUnitVectors(_rootUp, subDir);
      subMesh.quaternion.copy(sq);
      subMesh.userData._cat = 'trunk';
      g.add(subMesh);
    } else { sr(); sr(); }
  }

  // ---- Realistic branching system ----
  // Lower scaffold branches + crown branches with sub-branching + canopy at tips
  const pal = GLOW_PALETTES[palIdx % GLOW_PALETTES.length];
  const _branchMat = new MeshStandardMaterial({ color: C.barkTrunk });
  const _branchMatDark = new MeshStandardMaterial({ color: C.barkBranchDark });
  const _up = new Vector3(0, 1, 0);

  // Helper: create a tapered branch cylinder oriented from base toward direction
  function addBranch(basePos, dir, len, baseR, tipR, mat) {
    const geo = new CylinderGeometry(tipR, baseR, len, 5);
    geo.translate(0, len / 2, 0); // base at local origin, tip at (0,len,0)
    const mesh = new Mesh(geo, mat);
    mesh.position.copy(basePos);
    const d = dir.clone().normalize();
    const quat = new Quaternion().setFromUnitVectors(_up, d);
    mesh.quaternion.copy(quat);
    mesh.userData._cat = 'trunk';
    g.add(mesh);
  }

  // Helper: add billboard canopy cluster — camera-facing quads with alpha map
  // for fluffy, volumetric bioluminescent foliage
  function addCanopy(cx, cy, cz, size) {
    // 6-8 billboard quads scattered around branch tip
    const quadN = 6 + Math.floor(sr() * 3);
    const spread = size * 0.45;

    for (let ci = 0; ci < quadN; ci++) {
      const qSize = size * (0.3 + sr() * 0.4); // varied quad sizes
      const isBright = sr() < 0.3;

      // Tiny PlaneGeometry — billboard shader does the expansion in view space
      const quadGeo = new PlaneGeometry(0.01, 0.01);
      // Store billboard expansion size as custom vertex attribute
      const vCount = quadGeo.attributes.position.count;
      const sizeArr = new Float32Array(vCount);
      for (let vi = 0; vi < vCount; vi++) sizeArr[vi] = qSize;
      quadGeo.setAttribute('quadSize', new BufferAttribute(sizeArr, 1));

      const quad = new Mesh(quadGeo, new MeshStandardMaterial({
        color: isBright ? pal.core : pal.leaf
      }));
      // Scatter position irregularly around the center
      quad.position.set(
        cx + (sr() - 0.5) * spread * 2,
        cy + (sr() - 0.3) * spread * 1.4,
        cz + (sr() - 0.5) * spread * 2
      );
      quad.userData._cat = 'canopy';
      g.add(quad);
    }

    // Soft glow haze — volumetric underglow beneath canopy
    const haze = new Mesh(new IcosahedronGeometry(size * 0.5, 1));
    haze.material = new MeshStandardMaterial({ color: pal.glow });
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
    const dir = new Vector3(dx, dy, dz);
    const base = new Vector3(Math.cos(ang) * r * 0.95, by, Math.sin(ang) * r * 0.95);
    addBranch(base, dir, len, baseR, tipR, _branchMat);

    // Occasional hanging moss from lower branches
    if (sr() < 0.4) {
      const mLen = 0.4 + sr() * 0.8;
      const moss = new Mesh(new CylinderGeometry(0.008, 0.003, mLen, 3));
      moss.material = new MeshStandardMaterial({ color: C.barkMoss });
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
    const dir = new Vector3(dx, dy, dz);
    const base = new Vector3(Math.cos(ang) * r * 0.95, by, Math.sin(ang) * r * 0.95);
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
      const subBase = new Vector3(
        base.x + dx * len * subT,
        base.y + dy * len * subT,
        base.z + dz * len * subT
      );
      const subAng = ang + (sr() - 0.5) * 1.8;
      const subUp = 0.45 + sr() * 0.55; // 26-57° upward
      const subLen = 0.6 + sr() * 1.4;
      const subDir = new Vector3(
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
      const moss = new Mesh(new CylinderGeometry(0.008, 0.003, mLen, 3));
      moss.material = new MeshStandardMaterial({ color: C.barkMoss });
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
    const fung = new Mesh(new SphereGeometry(fungR, 5, 3));
    fung.material = new MeshStandardMaterial({ color: C.barkFungi });
    fung.scale.set(1.5, 0.3, 1);
    fung.position.set(Math.cos(fa) * r * 0.8, fy, Math.sin(fa) * r * 0.8);
    fung.rotation.y = -fa;
    fung.userData._cat = 'detail';
    g.add(fung);
  }

  // Underglow — positioned near canopy to light from above, not mid-trunk
  const under = new Mesh(new SphereGeometry(2.5 + sr() * 1.5, 8, 6));
  under.material = new MeshStandardMaterial({ color: new Color(C.leaf) });
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
  const color = new Color();

  for (let ci = 0; ci < group.children.length; ci++) {
    const mesh = group.children[ci];
    if (!mesh.isMesh) continue;

    let geo = mesh.geometry.clone();
    // Apply mesh transform to vertices
    mesh.updateMatrix();
    geo.applyMatrix4(mesh.matrix);

    // Normalize to non-indexed geometry (CylinderGeometry/PlaneGeometry are indexed,
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
      color.set(C.white);
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
    geo.setAttribute('color', new BufferAttribute(colors, 3));

    // Keep UVs on trunk geometry (bark texture) and canopy geometry (billboard shader);
    // remove UVs from glow/detail categories (not all have them, causes merge issues)
    if (cat === 'trunk') {
      // Ensure trunk geo has UVs (CylinderGeometry and SphereGeometry do)
      if (!geo.attributes.uv) {
        const uvs = new Float32Array(vCount * 2);
        geo.setAttribute('uv', new BufferAttribute(uvs, 2));
      }
    } else if (cat === 'canopy') {
      // Canopy quads: preserve UVs (billboard shader) and quadSize attribute
      // PlaneGeometry always has UVs, so no safety check needed
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
const _dummy = new Object3D();
const _impColor = new Color();
const _impGlow = new Color();
/** Unlit far-tree tint — canopy in shadow, not black, so silhouettes keep a little depth. */
const IMPOSTOR_SILHOUETTE = 0x24352c;
/**
 * Aerial perspective. Without it a dimmed tree and a night sky are both nearly
 * black and the far forest is a void — which is exactly what players saw. Every
 * impostor is mixed toward this haze with distance, so the forest recedes in
 * legible layers instead of falling off a cliff at the mesh boundary.
 */
const IMPOSTOR_HAZE = 0x5c7c70;
/** Squared distance at which haze reaches full strength (~140 m). */
const IMPOSTOR_HAZE_FULL_D2 = 19600;
/** Haze never fully erases the tree. */
const IMPOSTOR_HAZE_MAX = 0.78;
/** Impostor opacity once the 3D mesh has handed over. Near-solid: the stamp IS the tree now. */
const IMPOSTOR_OPACITY = 0.92;
const _slopeUp = new Vector3(0, 1, 0);
const _slopeNorm = new Vector3();
const _slopeQ = new Quaternion();
const _identQ = new Quaternion();
const _swayQ = new Quaternion();
const _yRotQ = new Quaternion();
const _frustum = new Frustum();
const _projScreenMatrix = new Matrix4();
const _testPoint = new Vector3();
const _treeCullSphere = new Sphere();
const SLOPE_FACTOR = 0.15; // Subtle tilt — keeps trunks vertical, roots do the work via steep template angles

// Billboard vertex shader injection for canopy quads
// Keeps standard project_vertex (handles instancing/batching), then adds billboard expansion
function canopyOnBeforeCompile(shader) {
  // Declare custom attribute for per-quad expansion size
  shader.vertexShader = shader.vertexShader.replace(
    'void main() {',
    'attribute float quadSize;\nvoid main() {'
  );
  // Compute billboard offset from UVs after begin_vertex
  shader.vertexShader = shader.vertexShader.replace(
    '#include <begin_vertex>',
    `#include <begin_vertex>
    vec2 billboardOffset = (uv - 0.5) * 2.0 * quadSize;`
  );
  // Keep standard project_vertex intact (sets mvPosition correctly with instancing),
  // then add billboard expansion in view space and recompute gl_Position
  shader.vertexShader = shader.vertexShader.replace(
    '#include <project_vertex>',
    `#include <project_vertex>
    mvPosition.xy += billboardOffset;
    gl_Position = projectionMatrix * mvPosition;`
  );
}

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
    const trunkMat = new MeshStandardMaterial({
      vertexColors: true,
      map: barkTex,
      roughness: 0.75,
      emissive: C.barkEmissive,
      emissiveIntensity: 0.6
    });
    const trunkMesh = tmpl.trunkGeo ? new InstancedMesh(tmpl.trunkGeo, trunkMat, maxPerTemplate) : null;
    if (trunkMesh) {
      trunkMesh.instanceMatrix.setUsage(DynamicDrawUsage);
      trunkMesh.count = 0;
      trunkMesh.frustumCulled = false;
      scene.add(trunkMesh);
    }

    // Canopy InstancedMesh — billboard quads with alpha-mapped fluffy glow
    const canopyMat = new MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.5,
      emissive: palData.glow,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      side: DoubleSide,
      alphaMap: getCanopyAlphaMap(),
      alphaTest: 0.12
    });
    canopyMat.onBeforeCompile = canopyOnBeforeCompile;
    const canopyMesh = tmpl.canopyGeo ? new InstancedMesh(tmpl.canopyGeo, canopyMat, maxPerTemplate) : null;
    if (canopyMesh) {
      canopyMesh.instanceMatrix.setUsage(DynamicDrawUsage);
      canopyMesh.count = 0;
      canopyMesh.frustumCulled = false;
      scene.add(canopyMesh);
    }

    // Glow InstancedMesh (haze, underglow) — soft transparent halos
    const glowMat = new MeshStandardMaterial({
      vertexColors: true,
      emissive: palData.glow,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.15,
      depthWrite: false
    });
    const glowMesh = tmpl.glowGeo ? new InstancedMesh(tmpl.glowGeo, glowMat, maxPerTemplate) : null;
    if (glowMesh) {
      glowMesh.instanceMatrix.setUsage(DynamicDrawUsage);
      glowMesh.count = 0;
      glowMesh.frustumCulled = false;
      scene.add(glowMesh);
    }

    // Detail InstancedMesh (veins, roots, moss, fungi) — small features, close range only
    const detailMat = new MeshStandardMaterial({
      vertexColors: true,
      emissive: palData.glow,
      emissiveIntensity: 0.4
    });
    const detailMesh = tmpl.detailGeo ? new InstancedMesh(tmpl.detailGeo, detailMat, maxPerTemplate) : null;
    if (detailMesh) {
      detailMesh.instanceMatrix.setUsage(DynamicDrawUsage);
      detailMesh.count = 0;
      detailMesh.frustumCulled = false;
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
// Canopy "living" pulse — 3D instanced canopy + distant billboard impostors
// ================================================================
/**
 * @brief Emissive/opacity breathing per tree palette template (shared materials + per-sprite impostors).
 * Frequencies tuned so a full breath is ~6–14s — slow enough to feel organic, fast enough to read in-game.
 * @param templateIndex Instanced template index (0..templates-1), must match GLOW_PALETTES row.
 * @param time World time (s).
 * @param treeDim Sector dim factor × orb boost (same as vegetation treeDim).
 */
export function treeCanopyLivingPulse(templateIndex, time, treeDim) {
  const seed = templateIndex * 2.399963229 + templateIndex * templateIndex * 0.00217;
  // Was ~20–60s per cycle (too slow to notice); ~3× faster fundamentals + slightly stronger contrast.
  const s1 = Math.sin(time * 1.05 + seed);
  const s2 = Math.sin(time * 0.71 + seed * 1.6847);
  const s3 = Math.sin(time * 0.43 + seed * 0.413);
  const mix = (s1 * 0.5 + 0.5) * 0.38 + (s2 * 0.5 + 0.5) * 0.35 + (s3 * 0.5 + 0.5) * 0.27;
  const emFull = 0.48 + 0.88 * mix;
  const opFull = 0.56 + 0.48 * mix;
  // Heavy dimming used to disable pulse entirely (treeDim ≤ 0.06) — blend toward flat so restored areas always breathe visibly.
  const pulseBlend = Math.min(1, Math.max(0, (treeDim - 0.02) / 0.11));
  const em = 1 + (emFull - 1) * pulseBlend;
  const op = 1 + (opFull - 1) * pulseBlend;
  return { em, op };
}

/**
 * @brief Tint one distant-tree impostor: silhouette first, glow on top.
 *
 * The tint is a blend between a near-black silhouette and the template's canopy
 * glow, driven by how lit the forest currently is. That blend is the whole point:
 * the previous version multiplied the glow colour by the dim factor, so a dimmed
 * forest (treeDim starts at 0.35) produced ~5% luminance on an additive sprite
 * and the far forest vanished. A silhouette has no such floor to fall through —
 * a dark tree at 100 m stays as visible as a dark tree at 40 m.
 *
 * @param {object} impostor proxy from makeTreeImpostor()
 * @param {number} posIdx tree index (palette fallback)
 * @param {number} time seconds
 * @param {number} treeDim 0..1 forest dimming (× orb boost)
 * @param {number} bioGlow 0..1 day/night bioluminescence
 * @param {number} lodOpacity 0..1 LOD cross-fade weight
 */
function _applyImpostorCanopyPulse(impostor, posIdx, time, treeDim, bioGlow, lodOpacity, d2) {
  const ti = impostor.userData?.treeTemplateIndex != null
    ? impostor.userData.treeTemplateIndex
    : (posIdx % GLOW_PALETTES.length);
  const pulse = treeCanopyLivingPulse(ti, time, treeDim);
  const pal = GLOW_PALETTES[ti % GLOW_PALETTES.length];
  const bio = 0.4 + 0.6 * bioGlow;
  // How lit this tree reads, 0 (fully dimmed) → 1 (restored and pulsing bright).
  const lit = Math.min(1, Math.max(0, treeDim * bio * pulse.em));
  _impColor.setHex(IMPOSTOR_SILHOUETTE).lerp(_impGlow.setHex(pal.glow), lit);
  // Aerial perspective, ramped on squared distance (no sqrt in this loop; the
  // quadratic ramp also matches how haze actually builds — slow near, fast far).
  const hazeT = Math.min(IMPOSTOR_HAZE_MAX,
    Math.max(0, (d2 - 3969) / (IMPOSTOR_HAZE_FULL_D2 - 3969)) * IMPOSTOR_HAZE_MAX);
  _impColor.lerp(_impGlow.setHex(IMPOSTOR_HAZE), hazeT);
  impostor.material.color.copy(_impColor);
  // Shape stays solid; only the LOD cross-fade and a slight breathing move it.
  const pulseOp = 0.88 + 0.12 * pulse.op;
  impostor.material.opacity = Math.min(1, lodOpacity * pulseOp);
}

// ================================================================
// LOD update for instanced trees
// Rebuilds instance matrices each frame based on distance
// ================================================================
export function updateTreeLOD(treeMeshes, treeImpostors, px, py, pz, t, wAmp, wLeanX, wLeanZ, cam, treeDim = 1, bioGlow = 1) {
  // Update camera frustum once per frame (if camera provided)
  if (cam) {
    _projScreenMatrix.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
    _frustum.setFromProjectionMatrix(_projScreenMatrix);
  }

  // Far cull. The whole distant forest is ONE draw call (the impostor point
  // cloud), so hiding trees by distance buys nothing and costs the far half of
  // the world: the old 115 m radius dropped 185 of 495 trees from the view of a
  // player standing at the edge of a 90 m-radius world. The radius is now
  // derived from the world so nothing in-world is ever culled, and it still
  // pulls in at low quality notches (lodScale 0.85 → 183 m, still past the
  // 180 m worst case). Squared once — no per-instance sqrt.
  const _lodS = getLodScale();
  const _hideR = WORLD_R * 2.4 * _lodS;
  const _hideD2 = _hideR * _hideR;

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

      // Tier 3: past the far-cull radius — nothing inside this world reaches it.
      if (d2 > _hideD2) {
        if (impostor) impostor.visible = false;
        continue;
      }

      // Frustum cull: skip 3D mesh for trees outside camera view
      // Only cull trees that would use 3D InstancedMesh (< 75m)
      // Impostors (sprites) are cheap, so let them through
      if (cam && d2 < 5625) {
        const treeR = (inst.treeH || 10) * 1.2 * inst.scale;
        _testPoint.set(inst.x, inst.y + (inst.treeH || 10) * 0.4, inst.z);
        _treeCullSphere.center.copy(_testPoint);
        _treeCullSphere.radius = treeR;
        if (!_frustum.intersectsSphere(_treeCullSphere)) {
          if (impostor) impostor.visible = false;
          continue;
        }
      }

      // Tier 2 (75 m to the far edge of the world): impostor at full opacity.
      // No fade-out band — the forest does not thin into nothing any more.
      if (d2 > 5625) {
        if (impostor) {
          impostor.visible = true;
          _applyImpostorCanopyPulse(impostor, posIdx, t, treeDim, bioGlow, IMPOSTOR_OPACITY, d2);
        }
        continue;
      }

      // Tier 1→2 cross-fade (63-75 m): impostor fading in behind the 3D mesh
      if (d2 > 3969) {
        const d = Math.sqrt(d2);
        const fadeFrac = (d - 63) / 12; // 0 at 63m, 1 at 75m
        if (impostor) {
          impostor.visible = true;
          const lodOp = lerp(0, IMPOSTOR_OPACITY, fadeFrac);
          _applyImpostorCanopyPulse(impostor, posIdx, t, treeDim, bioGlow, lodOp, d2);
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

      if (d2 < 324) {
        // Tier 0 (<18m): full detail + wind sway on top of slope tilt
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
  flushTreeImpostors();
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

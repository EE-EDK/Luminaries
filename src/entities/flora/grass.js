import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { sr } from '../../utils/rng.js';

// --- Grass Patch (procedural blade geometry with vertex-level sway) ---
// palette: [base1, base2, mid, tip1, tip2, tip3, clover, cloverBr, emissive] hex array (optional)
export function makeGrassPatch(cx, cz, radius, density, palette) {
  const geo = new THREE.BufferGeometry();
  const verts = [], colors = [], heights = [];
  const count = density || 20;
  const colBase1 = new THREE.Color(palette ? palette[0] : 0x0a2010);
  const colBase2 = new THREE.Color(palette ? palette[1] : 0x152e18);
  const colMid = new THREE.Color(palette ? palette[2] : 0x2a6035);
  const colTip1 = new THREE.Color(palette ? palette[3] : 0x44ee55);
  const colTip2 = new THREE.Color(palette ? palette[4] : 0x77ffcc);
  const colTip3 = new THREE.Color(palette ? palette[5] : 0xddff66);
  const tmpC = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const ang = sr() * 6.28, dist = sr() * radius;
    const lx = Math.cos(ang) * dist, lz = Math.sin(ang) * dist;
    const h = 0.25 + sr() * 0.65;
    const w = 0.03 + sr() * 0.05;
    const lean = (sr() - 0.5) * 0.2;
    const leanZ = (sr() - 0.5) * 0.2;
    const curveMag = (sr() - 0.5) * 0.12;
    const bc = sr() < 0.5 ? colBase1 : colBase2;
    const tipSel = sr();
    const tc = tipSel < 0.4 ? colTip1 : (tipSel < 0.7 ? colTip2 : colTip3);

    const h1 = h * 0.35, h2 = h * 0.7;
    const lean1 = lean * 0.3, lean2 = lean * 0.7;
    const leanZ1 = leanZ * 0.3, leanZ2 = leanZ * 0.7;
    // Segment 1: base quad (2 tris)
    verts.push(lx - w, 0.01, lz);
    verts.push(lx + w, 0.01, lz);
    verts.push(lx + lean1 - w * 0.9, h1, lz + leanZ1);
    heights.push(0, 0, 0.35);
    colors.push(bc.r, bc.g, bc.b, bc.r, bc.g, bc.b);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    verts.push(lx + w, 0.01, lz);
    verts.push(lx + lean1 + w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean1 - w * 0.9, h1, lz + leanZ1);
    heights.push(0, 0.35, 0.35);
    colors.push(bc.r, bc.g, bc.b);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    // Segment 2: mid quad (2 tris)
    const w2 = w * 0.65;
    verts.push(lx + lean1 - w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean1 + w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean2 - w2, h2, lz + leanZ2 + curveMag);
    heights.push(0.35, 0.35, 0.7);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    verts.push(lx + lean1 + w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean2 + w2, h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean2 - w2, h2, lz + leanZ2 + curveMag);
    heights.push(0.35, 0.7, 0.7);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    // Segment 3: tip triangle
    verts.push(lx + lean2 - w2, h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean2 + w2, h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean + curveMag * 2, h, lz + leanZ + curveMag * 1.5);
    heights.push(0.7, 0.7, 1.0);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    colors.push(tc.r, tc.g, tc.b);
  }
  // Ground cover: clover-like triangles
  const cloverCol = new THREE.Color(palette ? palette[6] : 0x1a5528);
  const cloverBr = new THREE.Color(palette ? palette[7] : 0x33aa55);
  const cloverN = Math.floor(count * 0.3);
  for (let ci = 0; ci < cloverN; ci++) {
    const ca = sr() * 6.28, cd = sr() * radius * 0.9;
    const clx = Math.cos(ca) * cd, clz = Math.sin(ca) * cd;
    const csz = 0.02 + sr() * 0.03;
    verts.push(clx - csz, 0.01, clz);
    verts.push(clx + csz, 0.01, clz);
    verts.push(clx, 0.03 + sr() * 0.02, clz + csz);
    heights.push(0, 0, 0.05);
    colors.push(cloverCol.r, cloverCol.g, cloverCol.b);
    colors.push(cloverCol.r, cloverCol.g, cloverCol.b);
    colors.push(cloverBr.r, cloverBr.g, cloverBr.b);
  }
  const posAttr = new THREE.Float32BufferAttribute(verts, 3);
  posAttr.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', posAttr);
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  // Store height fraction (0=ground, 1=tip) for per-vertex sway
  geo.setAttribute('bladeHeight', new THREE.Float32BufferAttribute(heights, 1));
  geo.computeVertexNormals();
  // Store original positions for deformation
  const origPos = new Float32Array(verts.length);
  origPos.set(posAttr.array);
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.7, side: THREE.DoubleSide,
    emissive: palette ? palette[8] : 0x44ff66, emissiveIntensity: 0.08
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(cx, 0, cz);
  scene.add(mesh);
  return { mesh, geo, cx, cz, origPos };
}

// Per-vertex grass sway: deforms blade tips based on wind + player proximity
export function updateGrassPatch(gp, t, wAmp, wLeanX, wLeanZ, playerX, playerZ) {
  const posArr = gp.geo.attributes.position.array;
  const htArr = gp.geo.attributes.bladeHeight.array;
  const orig = gp.origPos;
  const cx = gp.cx, cz = gp.cz;
  // Player proximity flatten (world-space)
  const pLocalX = playerX - cx, pLocalZ = playerZ - cz;
  for (let i = 0, n = htArr.length; i < n; i++) {
    const hFrac = htArr[i];
    if (hFrac < 0.01) continue; // ground verts don't move
    const i3 = i * 3;
    const ox = orig[i3], oy = orig[i3 + 1], oz = orig[i3 + 2];
    // Wind-based per-vertex sway (tip moves most)
    const swayX = (Math.sin(t * 0.7 + (cx + ox) * 0.05) * 0.06 + Math.sin(t * 1.3 + (cz + oz) * 0.08) * 0.03) * wAmp * hFrac * hFrac;
    const swayZ = (Math.sin(t * 0.9 + (cz + oz) * 0.06) * 0.04 + Math.sin(t * 1.7 + (cx + ox) * 0.04) * 0.02) * wAmp * hFrac * hFrac;
    let dx = swayX + wLeanX * hFrac;
    let dz = swayZ + wLeanZ * hFrac;
    // Player proximity: flatten blades within 1.2m
    const pdx = ox - pLocalX, pdz = oz - pLocalZ;
    const pd2 = pdx * pdx + pdz * pdz;
    if (pd2 < 1.44) { // 1.2^2
      const proximity = 1.0 - Math.sqrt(pd2) / 1.2;
      const flatten = proximity * proximity * 0.7;
      // Push blade tip away from player and down
      const pAng = Math.atan2(pdx, pdz);
      dx += Math.sin(pAng) * flatten * hFrac * 0.15;
      dz += Math.cos(pAng) * flatten * hFrac * 0.15;
      posArr[i3 + 1] = oy * (1.0 - flatten * hFrac); // squash Y
    } else {
      posArr[i3 + 1] = oy;
    }
    posArr[i3] = ox + dx;
    posArr[i3 + 2] = oz + dz;
  }
  gp.geo.attributes.position.needsUpdate = true;
}

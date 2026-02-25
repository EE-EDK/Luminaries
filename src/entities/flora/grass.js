import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { sr } from '../../utils/rng.js';

// --- Grass Patch (procedural blade geometry with vertex colors) ---
export function makeGrassPatch(cx, cz, radius, density) {
  const geo = new THREE.BufferGeometry();
  const verts = [], colors = [];
  const count = density || 20;
  const colBase1 = new THREE.Color(0x0a2010); // deep dark green base
  const colBase2 = new THREE.Color(0x152e18); // slightly lighter base
  const colMid = new THREE.Color(0x2a6035);   // warm mid green
  const colTip1 = new THREE.Color(0x44ee55);  // vivid bright green tip
  const colTip2 = new THREE.Color(0x77ffcc);  // bright cyan-green tip
  const colTip3 = new THREE.Color(0xddff66);  // warm yellow-green tip
  const tmpC = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const ang = sr() * 6.28, dist = sr() * radius;
    const lx = Math.cos(ang) * dist, lz = Math.sin(ang) * dist;
    const h = 0.25 + sr() * 0.65;
    const w = 0.03 + sr() * 0.05;
    const lean = (sr() - 0.5) * 0.2;
    const leanZ = (sr() - 0.5) * 0.2;
    const curveMag = (sr() - 0.5) * 0.12; // blade curve at top
    // 3-segment blade: base quad, mid quad, tip triangle
    // Base colors
    const bc = sr() < 0.5 ? colBase1 : colBase2;
    const tipSel = sr();
    const tc = tipSel < 0.4 ? colTip1 : (tipSel < 0.7 ? colTip2 : colTip3);

    // Segment 1: base (0 to h*0.35)
    const h1 = h * 0.35, h2 = h * 0.7;
    const lean1 = lean * 0.3, lean2 = lean * 0.7;
    const leanZ1 = leanZ * 0.3, leanZ2 = leanZ * 0.7;
    // Quad: 2 triangles for base segment
    verts.push(lx - w, 0.01, lz); // BL
    verts.push(lx + w, 0.01, lz); // BR
    verts.push(lx + lean1 - w * 0.9, h1, lz + leanZ1); // TL
    colors.push(bc.r, bc.g, bc.b, bc.r, bc.g, bc.b);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    verts.push(lx + w, 0.01, lz); // BR
    verts.push(lx + lean1 + w * 0.9, h1, lz + leanZ1); // TR
    verts.push(lx + lean1 - w * 0.9, h1, lz + leanZ1); // TL
    colors.push(bc.r, bc.g, bc.b);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    // Segment 2: mid (h*0.35 to h*0.7)
    const w2 = w * 0.65;
    verts.push(lx + lean1 - w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean1 + w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean2 - w2, h2, lz + leanZ2 + curveMag);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    verts.push(lx + lean1 + w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean2 + w2, h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean2 - w2, h2, lz + leanZ2 + curveMag);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    // Segment 3: tip triangle (h*0.7 to h)
    verts.push(lx + lean2 - w2, h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean2 + w2, h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean + curveMag * 2, h, lz + leanZ + curveMag * 1.5);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    colors.push(tc.r, tc.g, tc.b);
  }
  // Ground cover: tiny clover-like triangles at base (adds density)
  const cloverCol = new THREE.Color(0x1a5528);
  const cloverN = Math.floor(count * 0.3);
  for (let ci = 0; ci < cloverN; ci++) {
    const ca = sr() * 6.28, cd = sr() * radius * 0.9;
    const clx = Math.cos(ca) * cd, clz = Math.sin(ca) * cd;
    const csz = 0.02 + sr() * 0.03;
    verts.push(clx - csz, 0.01, clz);
    verts.push(clx + csz, 0.01, clz);
    verts.push(clx, 0.03 + sr() * 0.02, clz + csz);
    colors.push(cloverCol.r, cloverCol.g, cloverCol.b);
    colors.push(cloverCol.r, cloverCol.g, cloverCol.b);
    const clBr = new THREE.Color(0x33aa55);
    colors.push(clBr.r, clBr.g, clBr.b);
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.7, side: THREE.DoubleSide,
    emissive: 0x44ff66, emissiveIntensity: 0.08
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(cx, 0, cz);
  scene.add(mesh);
  return { mesh: mesh, geo: geo, cx: cx, cz: cz };
}

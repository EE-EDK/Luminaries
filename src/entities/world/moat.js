// --- Moat (ring of water around obelisk) ---
import { CircleGeometry, CylinderGeometry, DoubleSide, Mesh, MeshBasicMaterial, MeshStandardMaterial, Path, Shape, ShapeGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

let moatMesh = null;
let moatMat = null;

export function getMoatMesh() { return moatMesh; }
export function getMoatMat() { return moatMat; }

export function makeMoat() {
  const mat = new MeshStandardMaterial({
    color: C.moatBlue, emissive: 0x1155aa, emissiveIntensity: 0.3,
    transparent: true, opacity: 0, roughness: 0.1, metalness: 0.3
  });
  moatMat = mat;
  // Ring shape: outer=6m, inner=3m
  const shape = new Shape();
  shape.absarc(0, 0, 6, 0, 6.28, false);
  const hole = new Path();
  hole.absarc(0, 0, 3, 0, 6.28, true);
  shape.holes.push(hole);
  const geo = new ShapeGeometry(shape, 24);
  const mesh = new Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0.05;
  mesh.visible = false;
  scene.add(mesh);
  moatMesh = mesh;

  // Submerged glow stones (bright pebbles on moat floor)
  const glowStoneMat = new MeshBasicMaterial({
    color: 0x4488cc, transparent: true, opacity: 0.0
  });
  for (let gsi = 0; gsi < 12; gsi++) {
    const gsA = (gsi / 12) * 6.28 + sr() * 0.3;
    const gsR = 3.5 + sr() * 2.0;
    const gs = new Mesh(new SphereGeometry(0.04 + sr() * 0.04, 4, 3), glowStoneMat);
    gs.scale.set(1.2, 0.4, 1.2);
    gs.position.set(Math.cos(gsA) * gsR, 0.02, Math.sin(gsA) * gsR);
    gs.visible = false; scene.add(gs);
  }

  // Water foam patches (white blobs at inner edge)
  const foamMat = new MeshBasicMaterial({
    color: 0xccddee, transparent: true, opacity: 0.0, side: DoubleSide
  });
  for (let fmi = 0; fmi < 6; fmi++) {
    const fmA = (fmi / 6) * 6.28 + sr() * 0.5;
    const foam = new Mesh(new CircleGeometry(0.12 + sr() * 0.1, 5), foamMat);
    foam.rotation.x = -Math.PI / 2;
    foam.position.set(Math.cos(fmA) * 3.3, 0.06, Math.sin(fmA) * 3.3);
    foam.visible = false; scene.add(foam);
  }

  // Current flow lines (faint arcs showing water direction)
  const currMat = new MeshBasicMaterial({
    color: 0x88bbdd, transparent: true, opacity: 0.0
  });
  for (let cli = 0; cli < 8; cli++) {
    const clA = (cli / 8) * 6.28;
    const clR = 4 + sr() * 1.5;
    const current = new Mesh(new CylinderGeometry(0.003, 0.003, 0.4, 3), currMat);
    current.position.set(Math.cos(clA) * clR, 0.055, Math.sin(clA) * clR);
    current.rotation.x = Math.PI / 2; current.rotation.z = clA + Math.PI / 2;
    current.visible = false; scene.add(current);
  }

  // Depth gradient ring (darker center channel)
  const depthMat = new MeshBasicMaterial({
    color: 0x040810, transparent: true, opacity: 0.0, side: DoubleSide
  });
  const depthShape = new Shape();
  depthShape.absarc(0, 0, 5.2, 0, 6.28, false);
  const depthHole = new Path();
  depthHole.absarc(0, 0, 3.8, 0, 6.28, true);
  depthShape.holes.push(depthHole);
  const depthGeo = new ShapeGeometry(depthShape, 16);
  const depthMesh = new Mesh(depthGeo, depthMat);
  depthMesh.rotation.x = -Math.PI / 2; depthMesh.position.y = 0.04;
  depthMesh.visible = false; scene.add(depthMesh);
}

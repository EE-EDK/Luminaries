// --- Laser beam (from orb float position to obelisk top) ---
import * as THREE from 'three';
import { scene } from '../core/renderer.js';
import { C, OBELISK_H } from '../constants.js';

export function makeLaser(fromX, fromZ, floatY) {
  const topY = OBELISK_H + 2; // obelisk tip
  const points = [
    new THREE.Vector3(fromX, floatY, fromZ),
    new THREE.Vector3(0, topY, 0)
  ];
  const mat = new THREE.MeshBasicMaterial({
    color: C.laserPink, transparent: true, opacity: 0.8
  });
  // Use a thin tube for visible width
  const path = new THREE.LineCurve3(points[0], points[1]);
  const tubeGeo = new THREE.TubeGeometry(path, 1, 0.08, 6, false);
  const tube = new THREE.Mesh(tubeGeo, mat);
  scene.add(tube);
  // Outer glow tube
  const glowMat = new THREE.MeshBasicMaterial({
    color: C.laserGlow, transparent: true, opacity: 0.25
  });
  const glowTube = new THREE.Mesh(new THREE.TubeGeometry(path, 1, 0.25, 6, false), glowMat);
  scene.add(glowTube);
  return { tube: tube, glow: glowTube, mat: mat, glowMat: glowMat };
}

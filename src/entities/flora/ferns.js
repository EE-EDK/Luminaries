import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// --- Fern (fronds, leaflets, fiddlehead, water droplets) ---
export function makeFern(x, z) {
  const g = new THREE.Group();
  const fMat = new THREE.MeshStandardMaterial({
    color: C.fern, emissive: C.fernGlow, emissiveIntensity: 0.08,
    roughness: 0.7, side: THREE.DoubleSide
  });
  const frondCount = 3 + Math.floor(sr() * 2);
  const scale = 0.5 + sr() * 0.7;

  // Root clump at base (dark humus mound)
  const rootMat = new THREE.MeshStandardMaterial({ color: 0x1a1208, roughness: 0.95 });
  const rootClump = new THREE.Mesh(new THREE.SphereGeometry(0.06, 5, 3), rootMat);
  rootClump.scale.set(1.5, 0.5, 1.5); rootClump.position.y = 0.02; g.add(rootClump);
  // Tiny root tendrils
  for (let ri = 0; ri < 3; ri++) {
    const ra = sr() * 6.28;
    const root = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.002, 0.08, 3), rootMat);
    root.position.set(Math.cos(ra) * 0.06, 0.01, Math.sin(ra) * 0.06);
    root.rotation.z = (ra < 3.14 ? 1 : -1) * 1.2; root.rotation.y = ra; g.add(root);
  }

  for (let i = 0; i < frondCount; i++) {
    const ang = (i / frondCount) * 6.28 + sr() * 0.3;
    // Frond midrib (thin cylinder spine)
    const midrib = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.006, 0.55, 3),
      new THREE.MeshStandardMaterial({ color: 0x1a4520, roughness: 0.8 }));
    midrib.position.set(Math.cos(ang) * 0.15, 0.25, Math.sin(ang) * 0.15);
    midrib.rotation.y = -ang; midrib.rotation.x = -0.6 - sr() * 0.4;
    g.add(midrib);
    // Frond blade
    const frond = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.6, 1, 3), fMat);
    frond.position.set(Math.cos(ang) * 0.15, 0.25, Math.sin(ang) * 0.15);
    frond.rotation.y = -ang;
    frond.rotation.x = -0.6 - sr() * 0.4;
    g.add(frond);
    // Leaflets along the frond (6 instead of 4, alternating)
    for (let j = 0; j < 6; j++) {
      const lf = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.06, 1, 1), fMat);
      const fy = 0.06 + j * 0.08;
      const side = (j % 2 === 0) ? 1 : -1;
      lf.position.set(Math.cos(ang) * (0.15 + 0.06), fy, Math.sin(ang) * (0.15 + 0.06 * side));
      lf.rotation.y = -ang; lf.rotation.x = -0.8; lf.rotation.z = side * 0.5;
      g.add(lf);
    }
    // Spore dots on underside (3 per frond)
    const sporeMat = new THREE.MeshStandardMaterial({
      color: 0x886622, emissive: 0x443311, emissiveIntensity: 0.1
    });
    for (let sp = 0; sp < 3; sp++) {
      const spore = new THREE.Mesh(new THREE.SphereGeometry(0.008, 3, 3), sporeMat);
      const sy = 0.12 + sp * 0.12;
      spore.position.set(Math.cos(ang) * (0.15 + 0.02), sy - 0.01, Math.sin(ang) * (0.15 + 0.02));
      g.add(spore);
    }
  }
  // Center curl (fiddlehead) with spiral hint
  const curlMat = new THREE.MeshStandardMaterial({
    color: C.fernGlow, emissive: C.fernGlow, emissiveIntensity: 0.3
  });
  const curl = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 3), curlMat);
  curl.position.y = 0.35; g.add(curl);
  // Spiral arm on fiddlehead
  const spiralArm = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.003, 0.06, 3), curlMat);
  spiralArm.position.set(0.02, 0.37, 0); spiralArm.rotation.z = -0.8; g.add(spiralArm);

  // Water droplets on fronds (3-4 tiny glass beads)
  const dropMat = new THREE.MeshStandardMaterial({
    color: 0xeeffff, emissive: 0x88bbdd, emissiveIntensity: 0.1,
    transparent: true, opacity: 0.5, roughness: 0.0, metalness: 0.5
  });
  for (let dri = 0; dri < 3; dri++) {
    const dra = sr() * 6.28, drd = sr() * 0.2;
    const drop = new THREE.Mesh(new THREE.SphereGeometry(0.006 + sr() * 0.005, 3, 3), dropMat);
    drop.position.set(Math.cos(dra) * drd, 0.12 + sr() * 0.2, Math.sin(dra) * drd);
    g.add(drop);
  }

  // Dead brown frond (one withered frond at base)
  const deadMat = new THREE.MeshStandardMaterial({
    color: 0x3a2a10, roughness: 0.9, side: THREE.DoubleSide, transparent: true, opacity: 0.6
  });
  const deadFrond = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.4, 1, 2), deadMat);
  const deadAng = sr() * 6.28;
  deadFrond.position.set(Math.cos(deadAng) * 0.12, 0.05, Math.sin(deadAng) * 0.12);
  deadFrond.rotation.x = -1.3; deadFrond.rotation.y = deadAng; g.add(deadFrond);

  // Stipe hairs (tiny fuzz on main stems)
  const hairMat = new THREE.MeshBasicMaterial({ color: 0x2a4020, transparent: true, opacity: 0.3 });
  for (let hi = 0; hi < 4; hi++) {
    const hair = new THREE.Mesh(new THREE.CylinderGeometry(0.001, 0.001, 0.015, 3), hairMat);
    hair.position.set((sr() - 0.5) * 0.08, 0.08 + sr() * 0.15, (sr() - 0.5) * 0.08);
    hair.rotation.z = (sr() - 0.5) * 1.5; g.add(hair);
  }

  // Soil crumbs at base
  const soilMat = new THREE.MeshStandardMaterial({ color: 0x1a1208, roughness: 0.95 });
  for (let sci = 0; sci < 3; sci++) {
    const soil = new THREE.Mesh(new THREE.SphereGeometry(0.006, 3, 3), soilMat);
    soil.position.set((sr() - 0.5) * 0.1, 0.005, (sr() - 0.5) * 0.1); g.add(soil);
  }

  g.scale.setScalar(scale);
  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, phase: sr() * 6.28 };
}

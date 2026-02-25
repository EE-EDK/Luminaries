// --- Rock Formation (Lusion-style: smooth rounded stones with moss + lichen) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makeRock(x, z) {
  const g = new THREE.Group();
  const rockMat = new THREE.MeshStandardMaterial({
    color: C.rockBase, roughness: 0.85, metalness: 0.05
  });
  const rockLightMat = new THREE.MeshStandardMaterial({
    color: C.rockLight, roughness: 0.8, metalness: 0.05
  });
  const mossMat = new THREE.MeshStandardMaterial({
    color: C.rockMoss, emissive: C.rockMoss, emissiveIntensity: 0.03, roughness: 0.9
  });

  // Main stone (large rounded form)
  const mainSz = 0.3 + sr() * 0.5;
  const main = new THREE.Mesh(new THREE.SphereGeometry(mainSz, 8, 6), sr() < 0.6 ? rockMat : rockLightMat);
  main.scale.set(1 + sr() * 0.6, 0.4 + sr() * 0.4, 1 + sr() * 0.6);
  main.position.y = mainSz * 0.2;
  main.rotation.set(sr() * 0.5, sr() * 3, sr() * 0.3);
  main.castShadow = true; main.receiveShadow = true;
  g.add(main);

  // Secondary stones (1-3 smaller companions)
  const secN = 1 + Math.floor(sr() * 3);
  for (let si = 0; si < secN; si++) {
    const sa = sr() * 6.28, sd = mainSz * 0.6 + sr() * mainSz * 0.5;
    const sSz = mainSz * 0.3 + sr() * mainSz * 0.4;
    const sec = new THREE.Mesh(new THREE.SphereGeometry(sSz, 5, 4), sr() < 0.5 ? rockMat : rockLightMat);
    sec.scale.set(1 + sr() * 0.5, 0.3 + sr() * 0.4, 1 + sr() * 0.5);
    sec.position.set(Math.cos(sa) * sd, sSz * 0.15, Math.sin(sa) * sd);
    sec.rotation.set(sr() * 0.8, sr() * 3, sr() * 0.5);
    g.add(sec);
  }

  // Moss patches on top surfaces (2-4 green blobs)
  const mossN = 2 + Math.floor(sr() * 3);
  for (let mi = 0; mi < mossN; mi++) {
    const ma = sr() * 6.28, md = sr() * mainSz * 0.6;
    const mSz = mainSz * 0.15 + sr() * mainSz * 0.2;
    const moss = new THREE.Mesh(new THREE.SphereGeometry(mSz, 4, 3), mossMat);
    moss.scale.set(1.5, 0.2, 1.5);
    moss.position.set(Math.cos(ma) * md, mainSz * 0.35 + sr() * 0.05, Math.sin(ma) * md);
    g.add(moss);
  }

  // Lichen spots (tiny colored patches — yellow/orange/gray)
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

  // Embedded pebbles at base (4-6 tiny half-buried stones)
  const pebMat = new THREE.MeshStandardMaterial({ color: 0x3a3a40, roughness: 0.9 });
  const pebN = 4 + Math.floor(sr() * 3);
  for (let pi = 0; pi < pebN; pi++) {
    const pa = sr() * 6.28, pd = mainSz * 0.5 + sr() * mainSz * 0.6;
    const pSz = 0.03 + sr() * 0.05;
    const peb = new THREE.Mesh(new THREE.SphereGeometry(pSz, 3, 3), pebMat);
    peb.scale.set(1 + sr() * 0.5, 0.4, 1 + sr() * 0.5);
    peb.position.set(Math.cos(pa) * pd, pSz * 0.15, Math.sin(pa) * pd);
    g.add(peb);
  }

  // Tiny grass tuft growing from crevice (2-3 blades)
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
  return { group: g, x: x, z: z, colR: mainSz * 0.8 };
}

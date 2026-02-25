import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// --- Reed cluster (enhanced tall thin swaying tubes) ---
export function makeReed(x, z) {
  const g = new THREE.Group();
  const reedMat = new THREE.MeshStandardMaterial({
    color: C.reed, emissive: C.reedTip, emissiveIntensity: 0.05, roughness: 0.7
  });
  const tipMat = new THREE.MeshStandardMaterial({
    color: C.reedTip, emissive: C.reedTip, emissiveIntensity: 0.15
  });
  // Base mud clump
  const mudMat = new THREE.MeshStandardMaterial({ color: 0x1a1510, roughness: 0.95 });
  const mud = new THREE.Mesh(new THREE.SphereGeometry(0.08, 5, 3), mudMat);
  mud.scale.set(1.5, 0.4, 1.5); mud.position.y = 0.02; g.add(mud);

  const count = 3 + Math.floor(sr() * 4);
  const leafMat = new THREE.MeshStandardMaterial({
    color: C.reed, roughness: 0.7, side: THREE.DoubleSide
  });
  for (let i = 0; i < count; i++) {
    const h = 0.6 + sr() * 1.0;
    const ox = (sr() - 0.5) * 0.2, oz = (sr() - 0.5) * 0.2;
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.015, h, 4), reedMat);
    stalk.position.set(ox, h / 2, oz); g.add(stalk);
    // Joint nodes (2-3 per stalk)
    const jointN = 2 + Math.floor(sr() * 2);
    const jointMat = new THREE.MeshStandardMaterial({ color: 0x2a4a20, roughness: 0.7 });
    for (let ji = 0; ji < jointN; ji++) {
      const jy = h * 0.2 + ji * h * 0.25;
      const joint = new THREE.Mesh(new THREE.TorusGeometry(0.012, 0.004, 4, 6), jointMat);
      joint.position.set(ox, jy, oz); joint.rotation.x = Math.PI / 2; g.add(joint);
    }
    // Leaf blade from a joint (1 per stalk, arching out)
    if (sr() < 0.7) {
      const leafLen = 0.1 + sr() * 0.15;
      const la = sr() * 6.28;
      const leaf = new THREE.Mesh(new THREE.PlaneGeometry(0.02, leafLen), leafMat);
      leaf.position.set(ox + Math.cos(la) * 0.02, h * 0.4, oz + Math.sin(la) * 0.02);
      leaf.rotation.y = -la; leaf.rotation.x = -0.5 - sr() * 0.4;
      g.add(leaf);
    }
    // Tip tuft (seed plume -- elongated with fluff)
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.025, 4, 3), tipMat);
    tip.scale.set(0.8, 1.5, 0.8); tip.position.set(ox, h + 0.02, oz); g.add(tip);
    // Seed plume whiskers (3 tiny upward lines)
    const whiskMat = new THREE.MeshBasicMaterial({ color: C.reedTip, transparent: true, opacity: 0.4 });
    for (let wi = 0; wi < 3; wi++) {
      const wa = wi / 3 * 6.28 + sr() * 0.5;
      const whisk = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.001, 0.04, 3), whiskMat);
      whisk.position.set(ox + Math.cos(wa) * 0.015, h + 0.05, oz + Math.sin(wa) * 0.015);
      whisk.rotation.z = (sr() - 0.5) * 0.4; g.add(whisk);
    }
  }
  g.position.set(x, 0, z); scene.add(g);

  // Dried leaf sheaths (papery brown wraps at joints)
  const sheathMat = new THREE.MeshStandardMaterial({
    color: 0x4a3a18, roughness: 0.9, side: THREE.DoubleSide, transparent: true, opacity: 0.5
  });
  for (let shi = 0; shi < 2; shi++) {
    const shA = sr() * 6.28, shD = (sr() - 0.5) * 0.15;
    const sheath = new THREE.Mesh(new THREE.PlaneGeometry(0.025, 0.02), sheathMat);
    sheath.position.set(shD, 0.2 + shi * 0.25, (sr() - 0.5) * 0.1);
    sheath.rotation.set(sr() * 0.5, sr(), sr() * 0.5); g.add(sheath);
  }

  // Cattail fluff wisps (floating white motes near tips)
  const fluffMat = new THREE.MeshBasicMaterial({ color: 0xeeddcc, transparent: true, opacity: 0.25 });
  for (let ffi = 0; ffi < 3; ffi++) {
    const fluff = new THREE.Mesh(new THREE.SphereGeometry(0.005, 3, 3), fluffMat);
    fluff.position.set((sr() - 0.5) * 0.15, 0.8 + sr() * 0.6, (sr() - 0.5) * 0.15);
    g.add(fluff);
  }

  // Water stain band (faint horizontal ring at ground level)
  const stainMat = new THREE.MeshStandardMaterial({
    color: 0x223320, roughness: 0.9, transparent: true, opacity: 0.2
  });
  const stain = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.008, 4, 8), stainMat);
  stain.rotation.x = Math.PI / 2; stain.position.y = 0.03; g.add(stain);

  return { group: g, phase: sr() * 6.28, swayAmp: 0.03 + sr() * 0.04 };
}

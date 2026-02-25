import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { spawnDandSeed } from '../../particles/seeds.js';

// --- Dandelion Puff (enhanced stem + seed head, dispersible) ---
export function makeDandelion(x, z) {
  const g = new THREE.Group();
  const h = 0.35 + sr() * 0.45;
  // Basal leaf rosette (3-4 toothed leaves flat on ground)
  const rosetteMat = new THREE.MeshStandardMaterial({
    color: 0x2a6028, roughness: 0.7, side: THREE.DoubleSide
  });
  const rosN = 3 + Math.floor(sr() * 2);
  for (let ri = 0; ri < rosN; ri++) {
    const ra = (ri / rosN) * 6.28 + sr() * 0.3;
    const rLeaf = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.035), rosetteMat);
    rLeaf.position.set(Math.cos(ra) * 0.05, 0.02, Math.sin(ra) * 0.05);
    rLeaf.rotation.x = -1.4; rLeaf.rotation.y = -ra; g.add(rLeaf);
  }
  // Stem
  const stemMat = new THREE.MeshStandardMaterial({ color: C.dandStem, roughness: 0.8 });
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, h, 4), stemMat);
  stem.position.y = h / 2; g.add(stem);
  // Stem fuzz (tiny hairs along stem)
  const fuzzMat = new THREE.MeshBasicMaterial({ color: 0xddddcc, transparent: true, opacity: 0.3 });
  for (let fi = 0; fi < 4; fi++) {
    const fy = h * 0.2 + fi * h * 0.18;
    const fuzz = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.001, 0.02, 3), fuzzMat);
    fuzz.position.set(0.01, fy, 0); fuzz.rotation.z = -0.8; g.add(fuzz);
  }
  // Leaf at base (original)
  const leafMat = new THREE.MeshStandardMaterial({ color: C.fern, roughness: 0.7, side: THREE.DoubleSide });
  const leaf = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.03), leafMat);
  leaf.position.set(0.03, h * 0.15, 0); leaf.rotation.z = -0.4; g.add(leaf);
  // Seed head (fluffy sphere)
  const headMat = new THREE.MeshStandardMaterial({
    color: C.dandHead, emissive: C.dandSeedGlow, emissiveIntensity: 0.2,
    transparent: true, opacity: 0.85
  });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), headMat);
  head.position.y = h + 0.05; g.add(head);
  // Dew drop on seed head
  const dewMat = new THREE.MeshStandardMaterial({
    color: 0xeeffff, emissive: 0xaaddff, emissiveIntensity: 0.15,
    transparent: true, opacity: 0.5, roughness: 0.0, metalness: 0.5
  });
  const dew = new THREE.Mesh(new THREE.SphereGeometry(0.012, 4, 3), dewMat);
  dew.position.set(0.04, h + 0.07, 0.03); g.add(dew);
  // Individual seed tufts (8 tiny cones radiating outward, up from 6)
  const tuftMat = new THREE.MeshBasicMaterial({ color: C.dandSeed, transparent: true, opacity: 0.7 });
  for (let i = 0; i < 8; i++) {
    const ta = (i / 8) * 6.28 + sr() * 0.2;
    const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.015, 0.05, 3), tuftMat);
    tuft.position.set(Math.cos(ta) * 0.06, h + 0.05 + sr() * 0.04, Math.sin(ta) * 0.06);
    tuft.rotation.x = (sr() - 0.5) * 0.6; tuft.rotation.z = (sr() - 0.5) * 0.6;
    g.add(tuft);
    // Tiny filament from each tuft
    const filMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });
    const fil = new THREE.Mesh(new THREE.CylinderGeometry(0.001, 0.001, 0.03, 3), filMat);
    fil.position.set(Math.cos(ta) * 0.08, h + 0.08, Math.sin(ta) * 0.08);
    fil.rotation.set((sr() - 0.5) * 0.5, 0, (sr() - 0.5) * 0.5); g.add(fil);
    // Pappus fiber fan (2 radial hair lines per tuft)
    const papMat = new THREE.MeshBasicMaterial({ color: 0xeeeedd, transparent: true, opacity: 0.15 });
    for (let pfi = 0; pfi < 2; pfi++) {
      const pfA = ta + (pfi - 0.5) * 0.5;
      const pap = new THREE.Mesh(new THREE.CylinderGeometry(0.0008, 0.0008, 0.025, 3), papMat);
      pap.position.set(Math.cos(pfA) * 0.075, h + 0.09, Math.sin(pfA) * 0.075);
      pap.rotation.set((sr() - 0.5) * 0.8, 0, (sr() - 0.5) * 0.8); g.add(pap);
    }
  }

  // Achene seeds (tiny dark oval at base of each tuft cluster)
  const achMat = new THREE.MeshStandardMaterial({ color: 0x3a2a10, roughness: 0.9 });
  for (let ai = 0; ai < 4; ai++) {
    const aa = (ai / 4) * 6.28 + sr() * 0.5;
    const ach = new THREE.Mesh(new THREE.SphereGeometry(0.005, 3, 3), achMat);
    ach.scale.set(0.6, 1.5, 0.6);
    ach.position.set(Math.cos(aa) * 0.04, h + 0.04, Math.sin(aa) * 0.04);
    g.add(ach);
  }

  // Stem groove lines (3 faint vertical lines)
  const grooveMat = new THREE.MeshBasicMaterial({ color: 0x1a3010, transparent: true, opacity: 0.15 });
  for (let gi = 0; gi < 3; gi++) {
    const ga = (gi / 3) * 6.28;
    const groove = new THREE.Mesh(new THREE.CylinderGeometry(0.001, 0.001, h * 0.7, 3), grooveMat);
    groove.position.set(Math.cos(ga) * 0.01, h * 0.35, Math.sin(ga) * 0.01);
    g.add(groove);
  }

  // Micro-trichomes (tiny hairs on stem surface)
  const trichMat = new THREE.MeshBasicMaterial({ color: 0xccddbb, transparent: true, opacity: 0.2 });
  for (let tri = 0; tri < 5; tri++) {
    const tY = h * 0.1 + sr() * h * 0.7;
    const tA = sr() * 6.28;
    const trich = new THREE.Mesh(new THREE.CylinderGeometry(0.0008, 0.0008, 0.012, 3), trichMat);
    trich.position.set(Math.cos(tA) * 0.012, tY, Math.sin(tA) * 0.012);
    trich.rotation.z = (tA < 3.14 ? -0.8 : 0.8); trich.rotation.y = tA;
    g.add(trich);
  }

  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, headMat: headMat, x: x, z: z, h: h, dispersed: false, phase: sr() * 6.28,
    seedCount: 8, regrowTimer: 0
  };
}

// --- Dandelion dispersal: walk-through triggers seed burst ---
export function updateDandelions(dandelions, dt, t, playerPos) {
  for (let i = 0; i < dandelions.length; i++) {
    const d = dandelions[i];
    if (!d.dispersed) {
      // Check player proximity
      const dx = d.x - playerPos.x, dz = d.z - playerPos.z;
      if (dx * dx + dz * dz < 1.2) {
        d.dispersed = true;
        // Burst seeds
        for (let s = 0; s < 8; s++) spawnDandSeed(d.x, d.h + 0.05, d.z);
        // Hide the seed head and tufts
        for (let c = 2; c < d.group.children.length; c++) {
          d.group.children[c].visible = false;
        }
        d.regrowTimer = 15 + Math.random() * 10;
      } else {
        // Gentle sway
        d.group.rotation.z = Math.sin(t * 0.9 + d.phase) * 0.04;
        // Head glow pulse
        d.headMat.emissiveIntensity = 0.15 + Math.sin(t * 1.2 + d.phase) * 0.1;
      }
    } else {
      // Regrow timer
      d.regrowTimer -= dt;
      if (d.regrowTimer <= 0) {
        d.dispersed = false;
        for (let c = 2; c < d.group.children.length; c++) {
          d.group.children[c].visible = true;
        }
      }
      d.group.rotation.z = Math.sin(t * 0.9 + d.phase) * 0.02;
    }
  }
}

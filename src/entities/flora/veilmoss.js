import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// VeilMoss — Ethereal hanging curtain moss/lichen that drapes from
// thin vertical supports, with translucent glowing edges
// ================================================================

export function makeVeilMoss(x, z) {
  const g = new THREE.Group();
  const supportN = 1 + Math.floor(sr() * 2); // 1-2 supports
  const veilMats = [];

  for (let si = 0; si < supportN; si++) {
    const sx = (si - (supportN - 1) * 0.5) * 0.3; // spread supports
    const supportH = 1.0 + sr() * 0.8; // 1.0-1.8m

    // --- Vertical support (thin trunk/branch) ---
    const supportMat = new THREE.MeshStandardMaterial({
      color: C.veilSupport, roughness: 0.85,
      emissive: 0x0a0a08, emissiveIntensity: 0.03
    });
    const support = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.03, supportH, 4), supportMat
    );
    support.position.set(sx, supportH / 2, 0);
    g.add(support);

    // Cross-bar at top
    const barLen = 0.2 + sr() * 0.15;
    const bar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.012, barLen, 3), supportMat
    );
    bar.position.set(sx, supportH * 0.9, 0);
    bar.rotation.z = Math.PI / 2;
    g.add(bar);

    // --- Hanging veil curtains (3-5 per support) ---
    const veilN = 3 + Math.floor(sr() * 3);
    for (let vi = 0; vi < veilN; vi++) {
      const veilW = 0.08 + sr() * 0.06;
      const veilH = supportH * (0.3 + sr() * 0.4);
      const vxOff = (vi - (veilN - 1) * 0.5) * (barLen / veilN);

      const veilMat = new THREE.MeshStandardMaterial({
        color: C.veilMoss, emissive: C.veilGlow,
        emissiveIntensity: 0.12 + sr() * 0.08,
        transparent: true, opacity: 0.25 + sr() * 0.15,
        roughness: 0.6, side: THREE.DoubleSide
      });

      const veil = new THREE.Mesh(
        new THREE.PlaneGeometry(veilW, veilH), veilMat
      );
      // Hang from cross-bar, draping downward
      veil.position.set(
        sx + vxOff,
        supportH * 0.9 - veilH * 0.5,
        (sr() - 0.5) * 0.05
      );
      // Slight rotation for natural drape look
      veil.rotation.y = (sr() - 0.5) * 0.4;
      g.add(veil);
      veilMats.push(veil);

      // Glowing edge dots along bottom of each veil
      const dotN = 2 + Math.floor(sr() * 2);
      const edgeMat = new THREE.MeshBasicMaterial({
        color: C.veilEdge, transparent: true, opacity: 0.4
      });
      for (let di = 0; di < dotN; di++) {
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.006, 3, 3), edgeMat
        );
        dot.position.set(
          sx + vxOff + (sr() - 0.5) * veilW * 0.8,
          supportH * 0.9 - veilH + sr() * veilH * 0.15,
          (sr() - 0.5) * 0.04
        );
        g.add(dot);
      }
    }

    // Tiny lichen patches on support
    const lichenMat = new THREE.MeshStandardMaterial({
      color: C.veilMoss, emissive: C.veilGlow,
      emissiveIntensity: 0.08, transparent: true, opacity: 0.3
    });
    for (let li = 0; li < 3; li++) {
      const ly = supportH * (0.2 + sr() * 0.5);
      const la = sr() * 6.28;
      const lichen = new THREE.Mesh(
        new THREE.SphereGeometry(0.015 + sr() * 0.01, 4, 3), lichenMat
      );
      lichen.scale.set(1.5, 0.5, 1);
      lichen.position.set(
        sx + Math.cos(la) * 0.025,
        ly,
        Math.sin(la) * 0.025
      );
      g.add(lichen);
    }
  }

  // --- Base moss/debris ---
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x2a3a28, roughness: 0.9,
    emissive: C.veilGlow, emissiveIntensity: 0.03
  });
  const base = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 5, 4), baseMat
  );
  base.scale.set(1.5, 0.3, 1.5);
  base.position.y = 0.02;
  g.add(base);

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, veilMats, phase: sr() * 6.28, x, z };
}

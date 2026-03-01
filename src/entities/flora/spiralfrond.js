import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// SpiralFrond — Fantasy plant with corkscrew-spiraling fronds,
// bioluminescent tips, and a central stem
// ================================================================

export function makeSpiralFrond(x, z) {
  const g = new THREE.Group();
  const h = 1.2 + sr() * 0.8; // 1.2-2.0m
  const frondN = 3 + Math.floor(sr() * 3); // 3-5 fronds

  // --- Central stem ---
  const stemMat = new THREE.MeshStandardMaterial({
    color: C.spiralStem, roughness: 0.7,
    emissive: C.spiralFrond, emissiveIntensity: 0.06
  });
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02, 0.05, h, 5), stemMat
  );
  stem.position.y = h / 2;
  g.add(stem);

  // --- Base rosette leaves ---
  const leafMat = new THREE.MeshStandardMaterial({
    color: 0x1a4430, emissive: 0x0a1a10, emissiveIntensity: 0.05,
    side: THREE.DoubleSide
  });
  for (let i = 0; i < 3; i++) {
    const la = sr() * 6.28;
    const leaf = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.2), leafMat);
    leaf.position.set(Math.cos(la) * 0.1, h * 0.12, Math.sin(la) * 0.1);
    leaf.rotation.y = -la;
    leaf.rotation.x = -0.7;
    g.add(leaf);
  }

  // --- Spiraling fronds ---
  const tipMats = [];

  for (let fi = 0; fi < frondN; fi++) {
    const baseAngle = (fi / frondN) * 6.28 + sr() * 0.4;
    const spiralH = h * (0.5 + sr() * 0.35);
    const spiralR = 0.15 + sr() * 0.15;
    const turns = 1.0 + sr() * 1.5;

    // Build helical curve
    const points = [];
    const segs = 14;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const angle = baseAngle + t * turns * 6.28;
      const r = spiralR * (0.2 + t * 0.8);
      points.push(new THREE.Vector3(
        Math.cos(angle) * r,
        h * 0.25 + t * spiralH,
        Math.sin(angle) * r
      ));
    }
    const curve = new THREE.CatmullRomCurve3(points);

    // Frond tube
    const frondMat = new THREE.MeshStandardMaterial({
      color: C.spiralFrond, emissive: C.spiralGlow,
      emissiveIntensity: 0.12, roughness: 0.5
    });
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 16, 0.012 + sr() * 0.006, 4, false), frondMat
    );
    g.add(tube);

    // Small leaflets along frond (3-4 per frond)
    const leafletN = 3 + Math.floor(sr() * 2);
    for (let li = 0; li < leafletN; li++) {
      const lt = 0.2 + (li / leafletN) * 0.6;
      const lPt = curve.getPoint(lt);
      const leaflet = new THREE.Mesh(
        new THREE.PlaneGeometry(0.04, 0.06),
        new THREE.MeshStandardMaterial({
          color: C.spiralFrond, emissive: C.spiralGlow,
          emissiveIntensity: 0.08, side: THREE.DoubleSide
        })
      );
      leaflet.position.copy(lPt);
      leaflet.rotation.set(sr() * 1.5, sr() * 3, sr() * 1.5);
      g.add(leaflet);
    }

    // Glowing tip sphere
    const tipPt = curve.getPoint(1);
    const tipMat = new THREE.MeshStandardMaterial({
      color: C.spiralTip, emissive: C.spiralGlow,
      emissiveIntensity: 0.6,
      transparent: true, opacity: 0.7
    });
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.025 + sr() * 0.015, 5, 4), tipMat);
    tip.position.copy(tipPt);
    g.add(tip);
    tipMats.push(tipMat);

    // Tip haze
    const haze = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 4, 3),
      new THREE.MeshBasicMaterial({
        color: C.spiralGlow, transparent: true, opacity: 0.04,
        blending: THREE.AdditiveBlending, depthWrite: false
      })
    );
    haze.position.copy(tipPt);
    g.add(haze);
  }

  // --- Root tendrils at base ---
  const rootMat = new THREE.MeshStandardMaterial({
    color: 0x1a2830, roughness: 0.85,
    emissive: 0x0a1510, emissiveIntensity: 0.04
  });
  for (let i = 0; i < 3; i++) {
    const ra = (i / 3) * 6.28 + sr() * 0.5;
    const root = new THREE.Mesh(
      new THREE.CylinderGeometry(0.006, 0.018, 0.15 + sr() * 0.1, 3), rootMat
    );
    root.position.set(Math.cos(ra) * 0.06, 0.04, Math.sin(ra) * 0.06);
    root.rotation.z = (ra < 3.14 ? 0.8 : -0.8);
    root.rotation.y = ra;
    g.add(root);
  }

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, tipMats, phase: sr() * 6.28, x, z };
}

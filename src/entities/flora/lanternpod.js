import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// LanternPod — Thin stems curving outward with hanging translucent
// glowing pods at their tips, like natural paper lanterns
// ================================================================

export function makeLanternPod(x, z) {
  const g = new THREE.Group();
  const stemN = 2 + Math.floor(sr() * 3); // 2-4 stems
  const podMats = [];

  // --- Root mound ---
  const rootMat = new THREE.MeshStandardMaterial({
    color: 0x1a2818, roughness: 0.9,
    emissive: 0x050a05, emissiveIntensity: 0.03
  });
  const mound = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 5, 4), rootMat
  );
  mound.scale.set(1.5, 0.4, 1.5);
  mound.position.y = 0.02;
  g.add(mound);

  // --- Base leaf ---
  const leafMat = new THREE.MeshStandardMaterial({
    color: C.lanternStem, emissive: 0x0a1a08,
    emissiveIntensity: 0.04, side: THREE.DoubleSide
  });
  for (let i = 0; i < 2; i++) {
    const la = sr() * 6.28;
    const leaf = new THREE.Mesh(
      new THREE.PlaneGeometry(0.1, 0.18), leafMat
    );
    leaf.position.set(Math.cos(la) * 0.08, 0.08, Math.sin(la) * 0.08);
    leaf.rotation.y = -la;
    leaf.rotation.x = -0.6;
    g.add(leaf);
  }

  for (let si = 0; si < stemN; si++) {
    const stemAngle = (si / stemN) * 6.28 + sr() * 0.5;
    const stemH = 0.8 + sr() * 0.8; // 0.8-1.6m
    const stemLean = 0.3 + sr() * 0.4; // how far it leans outward

    // Build a drooping curve for the stem
    const points = [];
    const segs = 10;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const outward = stemLean * Math.sin(t * Math.PI * 0.7);
      const height = t < 0.7
        ? t / 0.7 * stemH  // rise
        : stemH - (t - 0.7) / 0.3 * stemH * 0.25; // droop at end
      points.push(new THREE.Vector3(
        Math.cos(stemAngle) * outward,
        height,
        Math.sin(stemAngle) * outward
      ));
    }
    const curve = new THREE.CatmullRomCurve3(points);

    // Stem tube
    const stemMat = new THREE.MeshStandardMaterial({
      color: C.lanternStem, roughness: 0.7,
      emissive: C.lanternHaze, emissiveIntensity: 0.06
    });
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 12, 0.008 + sr() * 0.004, 4, false), stemMat
    );
    g.add(tube);

    // --- Hanging pod at tip ---
    const tipPt = curve.getPoint(1);
    const podR = 0.06 + sr() * 0.04;

    // Outer shell (translucent)
    const podMat = new THREE.MeshStandardMaterial({
      color: C.lanternPod, emissive: C.lanternGlow,
      emissiveIntensity: 0.5 + sr() * 0.3,
      transparent: true, opacity: 0.5,
      roughness: 0.2, metalness: 0.1
    });
    const pod = new THREE.Mesh(
      new THREE.SphereGeometry(podR, 8, 6), podMat
    );
    pod.position.copy(tipPt);
    pod.position.y -= podR * 0.3; // hang below stem tip
    g.add(pod);
    podMats.push(podMat);

    // Inner core (brighter)
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffffcc, emissive: C.lanternGlow,
      emissiveIntensity: 1.0,
      transparent: true, opacity: 0.5,
      roughness: 0.0
    });
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(podR * 0.4, 5, 4), coreMat
    );
    core.position.copy(pod.position);
    g.add(core);

    // Pod haze
    const haze = new THREE.Mesh(
      new THREE.SphereGeometry(podR * 2.5, 5, 4),
      new THREE.MeshBasicMaterial({
        color: C.lanternHaze, transparent: true, opacity: 0.04,
        blending: THREE.AdditiveBlending, depthWrite: false
      })
    );
    haze.position.copy(pod.position);
    g.add(haze);

    // Small cap/calyx where stem meets pod
    const capMat = new THREE.MeshStandardMaterial({
      color: C.lanternStem, roughness: 0.6
    });
    const cap = new THREE.Mesh(
      new THREE.ConeGeometry(podR * 0.5, podR * 0.4, 5), capMat
    );
    cap.position.copy(tipPt);
    cap.rotation.x = Math.PI; // point downward
    g.add(cap);
  }

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, podMats, phase: sr() * 6.28, x, z };
}

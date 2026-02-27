import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Helixvine — Alien twisting plant with spiraling stems,
// geometric pods, floating torus rings, and glow nodes
// ================================================================

export function makeHelixvine(x, z) {
  const g = new THREE.Group();
  const stemCount = 2 + Math.floor(sr() * 2); // 2-3 stems

  // --- Base bulb ---
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x1a1830, roughness: 0.85,
    emissive: C.helixStem, emissiveIntensity: 0.1
  });
  const base = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 8, 6), baseMat
  );
  base.scale.set(1.2, 0.5, 1.2);
  base.position.y = 0.05;
  g.add(base);

  const podMats = [];

  for (let si = 0; si < stemCount; si++) {
    const stemH = 1.5 + sr() * 1.0; // 1.5-2.5m
    const spiralR = 0.15 + sr() * 0.15; // how wide the helix spirals
    const spiralTurns = 1.5 + sr() * 1.5; // 1.5-3 turns
    const stemPhase = sr() * 6.28;

    // Build a helical CatmullRomCurve3
    const points = [];
    const segs = 16;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const angle = stemPhase + t * spiralTurns * 6.28;
      const r = spiralR * (0.3 + t * 0.7); // radius grows upward
      points.push(new THREE.Vector3(
        Math.cos(angle) * r,
        t * stemH,
        Math.sin(angle) * r
      ));
    }
    const curve = new THREE.CatmullRomCurve3(points);

    // Stem tube
    const stemMat = new THREE.MeshStandardMaterial({
      color: C.helixStem, emissive: C.helixNode,
      emissiveIntensity: 0.12, roughness: 0.7
    });
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 20, 0.025 + sr() * 0.01, 5, false), stemMat
    );
    g.add(tube);

    // --- Alien pod at top (OctahedronGeometry or DodecahedronGeometry) ---
    const podR = 0.1 + sr() * 0.08;
    const useOcta = sr() < 0.5;
    const podGeo = useOcta
      ? new THREE.OctahedronGeometry(podR, 0)
      : new THREE.DodecahedronGeometry(podR, 0);
    const podMat = new THREE.MeshStandardMaterial({
      color: C.helixPod, emissive: C.helixPodGlow,
      emissiveIntensity: 0.5 + sr() * 0.3,
      transparent: true, opacity: 0.65,
      roughness: 0.2, metalness: 0.2
    });
    const pod = new THREE.Mesh(podGeo, podMat);
    const tipPt = curve.getPoint(1);
    pod.position.copy(tipPt);
    pod.rotation.set(sr() * 3, sr() * 3, sr() * 3);
    g.add(pod);
    podMats.push(podMat);

    // Pod glow haze
    const podHaze = new THREE.Mesh(
      new THREE.SphereGeometry(podR * 2.5, 6, 4),
      new THREE.MeshBasicMaterial({
        color: C.helixPodGlow, transparent: true, opacity: 0.05,
        blending: THREE.AdditiveBlending, depthWrite: false
      })
    );
    podHaze.position.copy(tipPt);
    g.add(podHaze);

    // --- Torus rings floating along stem (1-2) ---
    const ringN = 1 + Math.floor(sr() * 2);
    for (let ri = 0; ri < ringN; ri++) {
      const ringT = 0.3 + sr() * 0.5; // position along curve (30-80%)
      const ringPt = curve.getPoint(ringT);
      const ringMat = new THREE.MeshStandardMaterial({
        color: C.helixRing, emissive: C.helixPodGlow,
        emissiveIntensity: 0.2,
        transparent: true, opacity: 0.45, roughness: 0.3
      });
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.1 + sr() * 0.08, 0.008, 6, 12), ringMat
      );
      ring.position.copy(ringPt);
      ring.rotation.set(sr() * 3, sr() * 3, sr() * 3);
      g.add(ring);
    }

    // --- Glow nodes at mid-points (2-3 per stem) ---
    const nodeN = 2 + Math.floor(sr() * 2);
    for (let ni = 0; ni < nodeN; ni++) {
      const nodeT = 0.2 + (ni / nodeN) * 0.6;
      const nodePt = curve.getPoint(nodeT);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: C.helixNode, emissive: C.helixPodGlow,
        emissiveIntensity: 0.35,
        transparent: true, opacity: 0.5
      });
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.025 + sr() * 0.015, 5, 4), nodeMat
      );
      node.position.copy(nodePt);
      g.add(node);
    }
  }

  // --- Tendrils at base (2-3 thin curling arms) ---
  const tendrilMat = new THREE.MeshStandardMaterial({
    color: C.helixStem, emissive: C.helixNode,
    emissiveIntensity: 0.06, roughness: 0.8
  });
  const tendrilN = 2 + Math.floor(sr() * 2);
  for (let ti = 0; ti < tendrilN; ti++) {
    const ta = (ti / tendrilN) * 6.28 + sr() * 0.5;
    const tLen = 0.3 + sr() * 0.4;
    const tendril = new THREE.Mesh(
      new THREE.CylinderGeometry(0.006, 0.015, tLen, 3), tendrilMat
    );
    tendril.position.set(
      Math.cos(ta) * 0.12, tLen * 0.3,
      Math.sin(ta) * 0.12
    );
    tendril.rotation.z = (ta < 3.14 ? 0.8 : -0.8) + sr() * 0.3;
    tendril.rotation.y = ta;
    g.add(tendril);
  }

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, podMats: podMats, phase: sr() * 6.28 };
}

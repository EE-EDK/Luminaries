import { AdditiveBlending, CatmullRomCurve3, CylinderGeometry, DodecahedronGeometry, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, OctahedronGeometry, SphereGeometry, TorusGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Helixvine — Alien twisting plant with spiraling stems,
// geometric pods, floating torus rings, and glow nodes
// ================================================================

const _baseMat = new MeshStandardMaterial({
  color: 0x1a1830, roughness: 0.85,
  emissive: C.helixStem, emissiveIntensity: 0.1
});

const _stemMat = new MeshStandardMaterial({
  color: C.helixStem, emissive: C.helixNode,
  emissiveIntensity: 0.12, roughness: 0.7
});

const _podHazeMat = new MeshBasicMaterial({
  color: C.helixPodGlow, transparent: true, opacity: 0.05,
  blending: AdditiveBlending, depthWrite: false
});

const _ringMat = new MeshStandardMaterial({
  color: C.helixRing, emissive: C.helixPodGlow,
  emissiveIntensity: 0.2,
  transparent: true, opacity: 0.45, roughness: 0.3
});

const _nodeMat = new MeshStandardMaterial({
  color: C.helixNode, emissive: C.helixPodGlow,
  emissiveIntensity: 0.35,
  transparent: true, opacity: 0.5
});

const _tendrilMat = new MeshStandardMaterial({
  color: C.helixStem, emissive: C.helixNode,
  emissiveIntensity: 0.06, roughness: 0.8
});

export function makeHelixvine(x, z) {
  const g = new Group();
  const stemCount = 2 + Math.floor(sr() * 2); // 2-3 stems

  // --- Base bulb ---
  const base = new Mesh(
    new SphereGeometry(0.18, 8, 6), _baseMat
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
      points.push(new Vector3(
        Math.cos(angle) * r,
        t * stemH,
        Math.sin(angle) * r
      ));
    }
    const curve = new CatmullRomCurve3(points);

    // Stem tube
    const tube = new Mesh(
      new TubeGeometry(curve, 20, 0.025 + sr() * 0.01, 5, false), _stemMat
    );
    g.add(tube);

    // --- Alien pod at top (OctahedronGeometry or DodecahedronGeometry) ---
    const podR = 0.1 + sr() * 0.08;
    const useOcta = sr() < 0.5;
    const podGeo = useOcta
      ? new OctahedronGeometry(podR, 0)
      : new DodecahedronGeometry(podR, 0);
    const podMat = new MeshStandardMaterial({
      color: C.helixPod, emissive: C.helixPodGlow,
      emissiveIntensity: 0.5 + sr() * 0.3,
      transparent: true, opacity: 0.65,
      roughness: 0.2, metalness: 0.2
    });
    const pod = new Mesh(podGeo, podMat);
    const tipPt = curve.getPoint(1);
    pod.position.copy(tipPt);
    pod.rotation.set(sr() * 3, sr() * 3, sr() * 3);
    g.add(pod);
    podMats.push(podMat);

    // Pod glow haze
    const podHaze = new Mesh(
      new SphereGeometry(podR * 2.5, 6, 4), _podHazeMat
    );
    podHaze.position.copy(tipPt);
    g.add(podHaze);

    // --- Torus rings floating along stem (1-2) ---
    const ringN = 1 + Math.floor(sr() * 2);
    for (let ri = 0; ri < ringN; ri++) {
      const ringT = 0.3 + sr() * 0.5; // position along curve (30-80%)
      const ringPt = curve.getPoint(ringT);
      const ring = new Mesh(
        new TorusGeometry(0.1 + sr() * 0.08, 0.008, 6, 12), _ringMat
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
      const node = new Mesh(
        new SphereGeometry(0.025 + sr() * 0.015, 5, 4), _nodeMat
      );
      node.position.copy(nodePt);
      g.add(node);
    }
  }

  // --- Tendrils at base (2-3 thin curling arms) ---
  const tendrilN = 2 + Math.floor(sr() * 2);
  for (let ti = 0; ti < tendrilN; ti++) {
    const ta = (ti / tendrilN) * 6.28 + sr() * 0.5;
    const tLen = 0.3 + sr() * 0.4;
    const tendril = new Mesh(
      new CylinderGeometry(0.006, 0.015, tLen, 3), _tendrilMat
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

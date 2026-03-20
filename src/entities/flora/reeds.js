import { CatmullRomCurve3, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry, TorusGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Reed cluster — tall curving stalks with seed plumes
// ================================================================

// --- Module-scope shared materials (none animated per-instance) ---
const _reedMat = new MeshStandardMaterial({
  color: C.reed, emissive: C.reedTip, emissiveIntensity: 0.15, roughness: 0.7
});
const _tipMat = new MeshStandardMaterial({
  color: C.reedTip, emissive: C.reedTip, emissiveIntensity: 0.35
});
const _mudMat = new MeshStandardMaterial({ color: 0x1a1510, roughness: 0.95 });
const _leafMat = new MeshStandardMaterial({
  color: C.reed, roughness: 0.7, side: DoubleSide
});
const _jointMat = new MeshStandardMaterial({ color: 0x2a4a20, roughness: 0.7 });
const _whiskMat = new MeshBasicMaterial({ color: C.reedTip, transparent: true, opacity: 0.4 });
const _sheathMat = new MeshStandardMaterial({
  color: 0x4a3a18, roughness: 0.9, side: DoubleSide, transparent: true, opacity: 0.5
});
const _fluffMat = new MeshBasicMaterial({ color: 0xeeddcc, transparent: true, opacity: 0.25 });
const _stainMat = new MeshStandardMaterial({
  color: 0x223320, roughness: 0.9, transparent: true, opacity: 0.2
});

export function makeReed(x, z) {
  const g = new Group();

  // Base mud clump
  const mud = new Mesh(new SphereGeometry(0.08, 5, 3), _mudMat);
  mud.scale.set(1.5, 0.4, 1.5); mud.position.y = 0.02; g.add(mud);

  const count = 3 + Math.floor(sr() * 4);
  for (let i = 0; i < count; i++) {
    const h = 0.6 + sr() * 1.0;
    const ox = (sr() - 0.5) * 0.2, oz = (sr() - 0.5) * 0.2;
    const leanAngle = sr() * 6.28;
    const maxLean = 0.08 + sr() * 0.12;

    // Build a gently curving stalk with CatmullRomCurve3
    const pts = [];
    const nPts = 6;
    for (let pi = 0; pi <= nPts; pi++) {
      const t = pi / nPts;
      // Quadratic lean — more bend toward the top (seed head weight)
      const lean = maxLean * t * t;
      pts.push(new Vector3(
        ox + Math.cos(leanAngle) * lean,
        t * h,
        oz + Math.sin(leanAngle) * lean
      ));
    }
    const curve = new CatmullRomCurve3(pts);
    const stalk = new Mesh(new TubeGeometry(curve, 8, 0.012, 4, false), _reedMat);
    g.add(stalk);

    // Joint nodes (2-3 per stalk) — placed along the curve
    const jointN = 2 + Math.floor(sr() * 2);
    for (let ji = 0; ji < jointN; ji++) {
      const jt = 0.2 + ji * 0.25; // parameter along curve
      const jPos = curve.getPoint(jt);
      const joint = new Mesh(new TorusGeometry(0.012, 0.004, 4, 6), _jointMat);
      joint.position.copy(jPos);
      joint.rotation.x = Math.PI / 2;
      // Orient joint ring to face along stalk tangent
      const tang = curve.getTangent(jt);
      joint.lookAt(jPos.x + tang.x, jPos.y + tang.y, jPos.z + tang.z);
      g.add(joint);
    }

    // Leaf blade from a joint (1 per stalk, arching out)
    if (sr() < 0.7) {
      const leafLen = 0.1 + sr() * 0.15;
      const la = sr() * 6.28;
      const leafPos = curve.getPoint(0.4);
      const leaf = new Mesh(new PlaneGeometry(0.02, leafLen), _leafMat);
      leaf.position.set(leafPos.x + Math.cos(la) * 0.02, leafPos.y, leafPos.z + Math.sin(la) * 0.02);
      leaf.rotation.y = -la; leaf.rotation.x = -0.5 - sr() * 0.4;
      g.add(leaf);
    }

    // Tip tuft (seed plume) — placed at curve tip
    const tipPos = curve.getPoint(1);
    const tipTang = curve.getTangent(1);
    const tip = new Mesh(new SphereGeometry(0.025, 4, 3), _tipMat);
    tip.scale.set(0.8, 1.5, 0.8);
    tip.position.copy(tipPos);
    tip.position.y += 0.02;
    g.add(tip);

    // Seed plume whiskers (3 tiny upward lines)
    for (let wi = 0; wi < 3; wi++) {
      const wa = wi / 3 * 6.28 + sr() * 0.5;
      const whisk = new Mesh(new SphereGeometry(0.003, 3, 2), _whiskMat);
      whisk.scale.set(0.7, 5, 0.7); // elongated vertically
      whisk.position.set(
        tipPos.x + Math.cos(wa) * 0.015,
        tipPos.y + 0.03,
        tipPos.z + Math.sin(wa) * 0.015
      );
      whisk.rotation.z = (sr() - 0.5) * 0.4;
      g.add(whisk);
    }
  }

  g.position.set(x, 0, z); scene.add(g);

  // Dried leaf sheaths (papery brown wraps at joints)
  for (let shi = 0; shi < 2; shi++) {
    const shD = (sr() - 0.5) * 0.15;
    const sheath = new Mesh(new PlaneGeometry(0.025, 0.02), _sheathMat);
    sheath.position.set(shD, 0.2 + shi * 0.25, (sr() - 0.5) * 0.1);
    sheath.rotation.set(sr() * 0.5, sr(), sr() * 0.5); g.add(sheath);
  }

  // Cattail fluff wisps (floating white motes near tips)
  for (let ffi = 0; ffi < 3; ffi++) {
    const fluff = new Mesh(new SphereGeometry(0.005, 3, 3), _fluffMat);
    fluff.position.set((sr() - 0.5) * 0.15, 0.8 + sr() * 0.6, (sr() - 0.5) * 0.15);
    g.add(fluff);
  }

  // Water stain band (faint horizontal ring at ground level)
  const stain = new Mesh(new TorusGeometry(0.1, 0.008, 4, 8), _stainMat);
  stain.rotation.x = Math.PI / 2; stain.position.y = 0.03; g.add(stain);

  return { group: g, phase: sr() * 6.28, swayAmp: 0.03 + sr() * 0.04 };
}

import { AdditiveBlending, CatmullRomCurve3, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// OrbBush — Woody branches with leaf clusters and glowing pink orbs
// on thin filament stems floating above the foliage
// ================================================================

// --- Module-scope shared materials ---
const _branchMat = new MeshStandardMaterial({
  color: 0x2a1e14, roughness: 0.85,
  emissive: 0x0a0a04, emissiveIntensity: 0.04
});
const _leafMat = new MeshStandardMaterial({
  color: C.orbBushLeaf, roughness: 0.8,
  emissive: 0x0a1a0a, emissiveIntensity: 0.06, side: DoubleSide
});
const _filMat = new MeshStandardMaterial({
  color: C.orbBushStem, roughness: 0.7,
  emissive: C.orbBushGlow, emissiveIntensity: 0.05
});
const _debrisMat = new MeshStandardMaterial({ color: 0x1a2018, roughness: 0.9 });

export function makeOrbBush(x, z) {
  const g = new Group();
  const bushR = 0.3 + sr() * 0.15;
  const bushH = 0.3 + sr() * 0.2;

  // --- Woody branch stems (3-4) arcing outward from central base ---
  const branchN = 3 + Math.floor(sr() * 2);
  for (let bi = 0; bi < branchN; bi++) {
    const ba = (bi / branchN) * 6.28 + sr() * 0.8;
    const bLen = bushR * (0.7 + sr() * 0.5);
    const bH = bushH * (0.6 + sr() * 0.4);

    // 5-point curve arcing outward and slightly up
    const pts = [];
    for (let pi = 0; pi <= 4; pi++) {
      const t = pi / 4;
      const outward = bLen * Math.sin(t * Math.PI * 0.6);
      const height = t * bH * 0.8 + Math.sin(t * Math.PI) * bH * 0.3;
      pts.push(new Vector3(
        Math.cos(ba) * outward,
        height,
        Math.sin(ba) * outward
      ));
    }
    const curve = new CatmullRomCurve3(pts);
    const branch = new Mesh(new TubeGeometry(curve, 8, 0.012, 4, false), _branchMat);
    g.add(branch);

    // 2-3 leaves per branch at 40%, 70%, 95% along curve
    const leafTs = [0.4, 0.7, 0.95];
    for (let li = 0; li < leafTs.length; li++) {
      if (li === 2 && sr() < 0.3) continue; // sometimes skip 3rd leaf
      const lPos = curve.getPoint(leafTs[li]);
      const lTang = curve.getTangent(leafTs[li]);
      const leafSize = 0.05 + sr() * 0.04;
      const leaf = new Mesh(new PlaneGeometry(leafSize, leafSize * 1.4), _leafMat);
      leaf.position.copy(lPos);
      // Orient roughly perpendicular to branch, with some randomness
      leaf.rotation.set(
        -0.3 - sr() * 0.5,
        Math.atan2(lTang.x, lTang.z) + (sr() - 0.5) * 0.6,
        (sr() - 0.5) * 0.3
      );
      g.add(leaf);
    }
  }

  // --- Drooping base leaves for fullness (3-4) ---
  for (let i = 0; i < 3 + Math.floor(sr() * 2); i++) {
    const la = sr() * 6.28;
    const lr = bushR * 0.4 + sr() * bushR * 0.3;
    const leaf = new Mesh(new PlaneGeometry(0.07, 0.1), _leafMat);
    leaf.position.set(
      Math.cos(la) * lr,
      bushH * 0.15 + sr() * 0.08,
      Math.sin(la) * lr
    );
    leaf.rotation.set(-0.8 - sr() * 0.4, -la, sr() * 0.3);
    g.add(leaf);
  }

  // --- Glowing orbs on thin filaments ---
  const orbMats = [];
  const orbN = 6 + Math.floor(sr() * 5); // 6-10 orbs

  for (let i = 0; i < orbN; i++) {
    const oa = sr() * 6.28;
    const od = sr() * bushR * 0.7;
    const oh = bushH + 0.15 + sr() * 0.3; // above the bush
    const orbSize = 0.02 + sr() * 0.015;

    // Filament stem
    const fH = oh - bushH * 0.3;
    const fil = new Mesh(
      new CylinderGeometry(0.003, 0.005, fH, 3), _filMat
    );
    fil.position.set(
      Math.cos(oa) * od,
      bushH * 0.3 + fH / 2,
      Math.sin(oa) * od
    );
    fil.rotation.z = (sr() - 0.5) * 0.3;
    fil.rotation.x = (sr() - 0.5) * 0.3;
    g.add(fil);

    // Glowing orb (per-instance material — emissiveIntensity animated)
    const orbMat = new MeshStandardMaterial({
      color: C.orbBushOrb, emissive: C.orbBushGlow,
      emissiveIntensity: 0.5 + sr() * 0.3,
      transparent: true, opacity: 0.7,
      roughness: 0.2
    });
    const orb = new Mesh(
      new SphereGeometry(orbSize, 5, 4), orbMat
    );
    orb.position.set(
      Math.cos(oa) * od + (sr() - 0.5) * 0.03,
      oh,
      Math.sin(oa) * od + (sr() - 0.5) * 0.03
    );
    g.add(orb);
    orbMats.push(orbMat);

    // Tiny haze around each orb
    const haze = new Mesh(
      new SphereGeometry(orbSize * 2.5, 4, 3),
      new MeshBasicMaterial({
        color: C.orbBushGlow, transparent: true, opacity: 0.03,
        blending: AdditiveBlending, depthWrite: false
      })
    );
    haze.position.copy(orb.position);
    g.add(haze);
  }

  // --- Ground debris ---
  for (let i = 0; i < 3; i++) {
    const da = sr() * 6.28, dd = bushR + sr() * 0.1;
    const debris = new Mesh(
      new SphereGeometry(0.015, 3, 3), _debrisMat
    );
    debris.position.set(Math.cos(da) * dd, 0.01, Math.sin(da) * dd);
    debris.scale.set(1, 0.4, 1);
    g.add(debris);
  }

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, orbMats, phase: sr() * 6.28, x, z };
}

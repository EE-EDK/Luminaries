import { AdditiveBlending, CatmullRomCurve3, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Thornbloom — Fantasy flower with curved stem, sepal bracts,
// cupped botanical petals, and translucent glowing orb center
// ================================================================

// --- Module-scope shared materials ---
const _stemMat = new MeshStandardMaterial({
  color: C.thornStem, roughness: 0.8,
  emissive: 0x0a1a10, emissiveIntensity: 0.1
});
const _thornMat = new MeshStandardMaterial({
  color: C.thornSpike, roughness: 0.6
});
const _petalMat = new MeshStandardMaterial({
  color: C.thornPetal, emissive: 0x330a18,
  emissiveIntensity: 0.15,
  transparent: true, opacity: 0.7,
  roughness: 0.6, side: DoubleSide
});
const _leafMat = new MeshStandardMaterial({
  color: 0x1a3818, emissive: 0x0a1a0a, emissiveIntensity: 0.05,
  side: DoubleSide
});
const _bractMat = new MeshStandardMaterial({
  color: C.thornStem, emissive: C.thornOrbGlow,
  emissiveIntensity: 0.12, roughness: 0.65
});
const _veinMat = new MeshStandardMaterial({
  color: 0x330a18, roughness: 0.7, emissive: 0x330a18, emissiveIntensity: 0.05
});

export function makeThornbloom(x, z) {
  const g = new Group();
  const h = 1.0 + sr() * 0.8; // stem height 1.0-1.8m
  const orbR = 0.25 + sr() * 0.15; // orb radius

  // --- Stem: curved with subtle S-curve ---
  const stemLeanDir = sr() * 6.28;
  const stemLeanAmt = 0.04 + sr() * 0.06;
  const stemPts = [];
  for (let pi = 0; pi <= 4; pi++) {
    const t = pi / 4;
    // Subtle S-curve lean
    const sCurve = Math.sin(t * Math.PI) * stemLeanAmt;
    stemPts.push(new Vector3(
      Math.cos(stemLeanDir) * sCurve,
      t * h,
      Math.sin(stemLeanDir) * sCurve
    ));
  }
  const stemCurve = new CatmullRomCurve3(stemPts);
  const stem = new Mesh(
    new TubeGeometry(stemCurve, 10, 0.045, 5, false), _stemMat
  );
  g.add(stem);

  // --- Thorns along stem (4-6) placed via curve.getPoint ---
  const thornN = 4 + Math.floor(sr() * 3);
  for (let i = 0; i < thornN; i++) {
    const tt = 0.15 + (i / thornN) * 0.6;
    const tPos = stemCurve.getPoint(tt);
    const ta = (i / thornN) * 6.28 + sr() * 1.0;

    // Small thorn as short TubeGeometry curving outward
    const thornLen = 0.06 + sr() * 0.04;
    const thornPts = [
      new Vector3(tPos.x, tPos.y, tPos.z),
      new Vector3(
        tPos.x + Math.cos(ta) * thornLen * 0.6,
        tPos.y + thornLen * 0.2,
        tPos.z + Math.sin(ta) * thornLen * 0.6
      ),
      new Vector3(
        tPos.x + Math.cos(ta) * thornLen,
        tPos.y + thornLen * 0.1,
        tPos.z + Math.sin(ta) * thornLen
      )
    ];
    const thornCurve = new CatmullRomCurve3(thornPts);
    const thorn = new Mesh(
      new TubeGeometry(thornCurve, 3, 0.006, 3, false), _thornMat
    );
    g.add(thorn);
  }

  // --- Translucent orb center (the core feature) ---
  const stemTop = stemCurve.getPoint(1);
  const orbY = stemTop.y + orbR * 0.5;
  const orbMat = new MeshStandardMaterial({
    color: C.thornOrb, emissive: C.thornOrbGlow,
    emissiveIntensity: 0.8,
    transparent: true, opacity: 0.35,
    roughness: 0.1, metalness: 0.3
  });
  const orb = new Mesh(
    new SphereGeometry(orbR, 12, 10), orbMat
  );
  orb.position.set(stemTop.x, orbY, stemTop.z);
  g.add(orb);

  // --- Inner core ---
  const coreMat = new MeshStandardMaterial({
    color: 0xffffcc, emissive: C.thornOrbGlow,
    emissiveIntensity: 1.2,
    transparent: true, opacity: 0.6,
    roughness: 0.0, metalness: 0.1
  });
  const core = new Mesh(
    new SphereGeometry(orbR * 0.35, 8, 6), coreMat
  );
  core.position.set(stemTop.x, orbY, stemTop.z);
  g.add(core);

  // --- Haze glow around orb ---
  const hazeMat = new MeshBasicMaterial({
    color: C.thornOrbGlow, transparent: true, opacity: 0.06,
    blending: AdditiveBlending, depthWrite: false
  });
  const haze = new Mesh(
    new SphereGeometry(orbR * 2.0, 8, 6), hazeMat
  );
  haze.position.set(stemTop.x, orbY, stemTop.z);
  g.add(haze);

  // --- Sepals/bracts (5-6) curving outward and downward from below the orb ---
  const bractN = 5 + Math.floor(sr() * 2);
  for (let i = 0; i < bractN; i++) {
    const ba = (i / bractN) * 6.28 + sr() * 0.3;
    const bractLen = 0.12 + sr() * 0.06;
    // 3-point curve arcing outward and downward from below orb
    const bractPts = [
      new Vector3(stemTop.x, orbY - orbR * 0.3, stemTop.z),
      new Vector3(
        stemTop.x + Math.cos(ba) * bractLen * 0.6,
        orbY - orbR * 0.5,
        stemTop.z + Math.sin(ba) * bractLen * 0.6
      ),
      new Vector3(
        stemTop.x + Math.cos(ba) * bractLen,
        orbY - orbR * 0.8 - sr() * 0.05,
        stemTop.z + Math.sin(ba) * bractLen
      )
    ];
    const bractCurve = new CatmullRomCurve3(bractPts);
    const bract = new Mesh(
      new TubeGeometry(bractCurve, 4, 0.008, 3, false), _bractMat
    );
    g.add(bract);
  }

  // --- Botanical petals (5-6) with cup curvature ---
  const petalN = 5 + Math.floor(sr() * 2);
  for (let i = 0; i < petalN; i++) {
    const pa = (i / petalN) * 6.28 + sr() * 0.3;
    const pLen = 0.18 + sr() * 0.1;
    const pW = pLen * 0.6;

    // Create petal geometry with vertex displacement for cup curvature
    const petalGeo = new PlaneGeometry(pW, pLen * 1.3, 4, 6);
    const posAttr = petalGeo.attributes.position;
    for (let vi = 0; vi < posAttr.count; vi++) {
      const px = posAttr.getX(vi);
      const py = posAttr.getY(vi);
      // Parabolic cupping: z offset based on x-distance from center
      const xNorm = px / (pW * 0.5);
      const cupDepth = 0.03 + sr() * 0.01;
      posAttr.setZ(vi, -xNorm * xNorm * cupDepth);
    }
    posAttr.needsUpdate = true;
    petalGeo.computeVertexNormals();

    const petal = new Mesh(petalGeo, _petalMat);
    petal.position.set(
      stemTop.x + Math.cos(pa) * (orbR + 0.04),
      orbY + orbR * 0.1 - sr() * 0.08,
      stemTop.z + Math.sin(pa) * (orbR + 0.04)
    );
    petal.rotation.y = -pa;
    petal.rotation.x = -0.4 - sr() * 0.3; // droop outward
    g.add(petal);

    // 1-2 vein lines per petal (thin cylinders)
    const veinN = 1 + Math.floor(sr() * 2);
    for (let vi = 0; vi < veinN; vi++) {
      const veinLen = pLen * 0.8;
      const vein = new Mesh(
        new CylinderGeometry(0.002, 0.001, veinLen, 3), _veinMat
      );
      const veinOff = (vi - (veinN - 1) * 0.5) * pW * 0.25;
      vein.position.set(
        stemTop.x + Math.cos(pa) * (orbR + 0.06 + veinLen * 0.3),
        orbY + orbR * 0.05 - sr() * 0.05,
        stemTop.z + Math.sin(pa) * (orbR + 0.06 + veinLen * 0.3)
      );
      vein.rotation.y = -pa;
      vein.rotation.x = -0.4 - sr() * 0.3;
      vein.rotation.z = veinOff * 2;
      g.add(vein);
    }
  }

  // --- Small base leaves (2) ---
  for (let i = 0; i < 2; i++) {
    const la = sr() * 6.28;
    const leafPos = stemCurve.getPoint(0.3);
    const leaf = new Mesh(
      new PlaneGeometry(0.15, 0.25), _leafMat
    );
    leaf.position.set(
      leafPos.x + Math.cos(la) * 0.12,
      leafPos.y,
      leafPos.z + Math.sin(la) * 0.12
    );
    leaf.rotation.y = -la;
    leaf.rotation.x = -0.8;
    g.add(leaf);
  }

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, orbMat, hazeMat, phase: sr() * 6.28, x, z };
}

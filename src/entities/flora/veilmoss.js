import { CatmullRomCurve3, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// VeilMoss — Ethereal hanging curtain moss/lichen that drapes from
// organic curved trunks with branching arms
// ================================================================

// --- Module-scope shared material (trunk not animated per-instance) ---
const _trunkMat = new MeshStandardMaterial({
  color: C.veilSupport, roughness: 0.85,
  emissive: 0x0a0a08, emissiveIntensity: 0.03
});
const _lichenMat = new MeshStandardMaterial({
  color: C.veilMoss, emissive: C.veilGlow,
  emissiveIntensity: 0.08, transparent: true, opacity: 0.3
});
const _dripMat = new MeshStandardMaterial({
  color: C.veilEdge, emissive: C.veilGlow, emissiveIntensity: 0.15,
  transparent: true, opacity: 0.4, roughness: 0.0, metalness: 0.3
});
const _baseMat = new MeshStandardMaterial({
  color: 0x2a3a28, roughness: 0.9,
  emissive: C.veilGlow, emissiveIntensity: 0.03
});
const _edgeMat = new MeshBasicMaterial({
  color: C.veilEdge, transparent: true, opacity: 0.4
});

export function makeVeilMoss(x, z) {
  const g = new Group();
  const supportN = 1 + Math.floor(sr() * 2); // 1-2 supports
  const veilMats = [];
  const veilRefs = []; // mesh refs with depth for pendulum animation

  for (let si = 0; si < supportN; si++) {
    const sx = (si - (supportN - 1) * 0.5) * 0.3; // spread supports
    const supportH = 1.0 + sr() * 0.8; // 1.0-1.8m

    // --- Organic curved trunk (gentle S-curve/lean) ---
    const leanDir = sr() * 6.28;
    const leanAmt = 0.05 + sr() * 0.08;
    const trunkPts = [];
    for (let pi = 0; pi <= 5; pi++) {
      const t = pi / 5;
      // S-curve: lean one way in lower half, opposite in upper half
      const sCurve = Math.sin(t * Math.PI) * leanAmt * (t < 0.5 ? 1 : -0.4);
      trunkPts.push(new Vector3(
        sx + Math.cos(leanDir) * sCurve,
        t * supportH,
        Math.sin(leanDir) * sCurve
      ));
    }
    const trunkCurve = new CatmullRomCurve3(trunkPts);
    const trunk = new Mesh(
      new TubeGeometry(trunkCurve, 10, 0.02, 4, false), _trunkMat
    );
    g.add(trunk);

    // --- Branch arms splitting off at 60-80% height (2-3) ---
    const armN = 2 + Math.floor(sr() * 2);
    const armTips = []; // store arm tip positions for veil hanging

    for (let ai = 0; ai < armN; ai++) {
      const armT = 0.6 + sr() * 0.2; // split point on trunk
      const armOrigin = trunkCurve.getPoint(armT);
      const armAngle = (ai / armN) * 6.28 + sr() * 1.0;
      const armLen = 0.15 + sr() * 0.12;

      // 4-point curve arcing outward and drooping slightly
      const armPts = [];
      for (let api = 0; api <= 3; api++) {
        const at = api / 3;
        const outward = armLen * at;
        const droop = -at * at * 0.05; // slight downward droop at tip
        armPts.push(new Vector3(
          armOrigin.x + Math.cos(armAngle) * outward,
          armOrigin.y + droop + at * 0.02,
          armOrigin.z + Math.sin(armAngle) * outward
        ));
      }
      const armCurve = new CatmullRomCurve3(armPts);
      const arm = new Mesh(
        new TubeGeometry(armCurve, 6, 0.01, 3, false), _trunkMat
      );
      g.add(arm);

      armTips.push(armCurve.getPoint(1));
    }

    // --- Hanging veil curtains from arm tips ---
    const veilN = Math.min(armTips.length + Math.floor(sr() * 2), armTips.length + 2);
    for (let vi = 0; vi < veilN; vi++) {
      // Hang from arm tips, cycling if more veils than arms
      const tipIdx = vi % armTips.length;
      const hangPt = armTips[tipIdx];
      const veilW = 0.08 + sr() * 0.06;
      const veilH = supportH * (0.3 + sr() * 0.4);
      const vxOff = vi >= armTips.length ? (sr() - 0.5) * 0.06 : 0;

      // Per-instance material (opacity varies, animated)
      const veilMat = new MeshStandardMaterial({
        color: C.veilMoss, emissive: C.veilGlow,
        emissiveIntensity: 0.12 + sr() * 0.08,
        transparent: true, opacity: 0.25 + sr() * 0.15,
        roughness: 0.6, side: DoubleSide
      });

      const veil = new Mesh(
        new PlaneGeometry(veilW, veilH), veilMat
      );
      // Hang from arm tip, draping downward
      veil.position.set(
        hangPt.x + vxOff,
        hangPt.y - veilH * 0.5,
        hangPt.z + (sr() - 0.5) * 0.05
      );
      veil.rotation.y = (sr() - 0.5) * 0.4;
      g.add(veil);
      veilMats.push(veil);
      veilRefs.push({ mesh: veil, depth: 0.5 + vi * 0.3 });

      // Glowing edge dots along bottom of each veil
      const dotN = 2 + Math.floor(sr() * 2);
      for (let di = 0; di < dotN; di++) {
        const dot = new Mesh(
          new SphereGeometry(0.006, 3, 3), _edgeMat
        );
        dot.position.set(
          veil.position.x + (sr() - 0.5) * veilW * 0.8,
          veil.position.y - veilH * 0.5 + sr() * veilH * 0.15,
          veil.position.z + (sr() - 0.5) * 0.04
        );
        g.add(dot);
      }
    }

    // Tiny lichen patches on trunk
    for (let li = 0; li < 3; li++) {
      const lt = 0.2 + sr() * 0.5;
      const lPos = trunkCurve.getPoint(lt);
      const la = sr() * 6.28;
      const lichen = new Mesh(
        new SphereGeometry(0.015 + sr() * 0.01, 4, 3), _lichenMat
      );
      lichen.scale.set(1.5, 0.5, 1);
      lichen.position.set(
        lPos.x + Math.cos(la) * 0.025,
        lPos.y,
        lPos.z + Math.sin(la) * 0.025
      );
      g.add(lichen);
    }
  }

  // --- Drip drops at veil bottom edges ---
  for (let dri = 0; dri < 3; dri++) {
    const drip = new Mesh(new SphereGeometry(0.005, 3, 3), _dripMat);
    drip.position.set(
      (sr() - 0.5) * 0.3,
      0.15 + sr() * 0.3,
      (sr() - 0.5) * 0.06
    );
    g.add(drip);
  }

  // --- Base moss/debris ---
  const base = new Mesh(
    new SphereGeometry(0.12, 5, 4), _baseMat
  );
  base.scale.set(1.5, 0.3, 1.5);
  base.position.y = 0.02;
  g.add(base);

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, veilMats, veilRefs, phase: sr() * 6.28, x, z };
}

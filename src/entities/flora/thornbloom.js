import { CatmullRomCurve3, CylinderGeometry, Group, PlaneGeometry, SphereGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';

// ================================================================
// Thornbloom — curved thorned stem, sepal bracts, cupped petals and a
// translucent glowing orb. 4 meshes (was 31). The orb turns slowly, the
// petals breathe around it, and the whole stem sways with height.
// ================================================================

const _plantMat = roleMaterial('solid', { emissive: 0x0a1a10, emissiveIntensity: 0.1, roughness: 0.75, doubleSide: true });
const _petalMat = roleMaterial('glow', { emissive: 0x330a18, emissiveIntensity: 0.15, roughness: 0.6, doubleSide: true });

export function makeThornbloom(x, z) {
  const g = new Group();
  const h = 1.0 + sr() * 0.8;
  const orbR = 0.25 + sr() * 0.15;
  const phase = sr() * 6.28;
  const sway = swayByHeight(0.1, h + orbR, 0.35);
  const b = createBaker();
  const orbMat = roleMaterial('glow', { emissive: C.thornOrbGlow, emissiveIntensity: 0.8, roughness: 0.1, metalness: 0.3 });
  const hazeMat = roleMaterial('haze', { opacity: 0.06 });

  // Stem with a subtle S-curve
  const leanDir = sr() * 6.28, leanAmt = 0.04 + sr() * 0.06;
  const stemPts = [];
  for (let pi = 0; pi <= 4; pi++) {
    const t = pi / 4, sC = Math.sin(t * Math.PI) * leanAmt;
    stemPts.push(new Vector3(Math.cos(leanDir) * sC, t * h, Math.sin(leanDir) * sC));
  }
  const stemCurve = new CatmullRomCurve3(stemPts);
  b.add(new TubeGeometry(stemCurve, 10, 0.045, 5, false), { role: 'plant', color: C.thornStem, emis: 1, sway });

  // Thorns
  const thornN = 4 + Math.floor(sr() * 3);
  for (let i = 0; i < thornN; i++) {
    const tPos = stemCurve.getPoint(0.15 + (i / thornN) * 0.6);
    const ta = (i / thornN) * 6.28 + sr() * 1.0, tl = 0.06 + sr() * 0.04;
    const pts = [tPos.clone(), new Vector3(tPos.x + Math.cos(ta) * tl * 0.6, tPos.y + tl * 0.2, tPos.z + Math.sin(ta) * tl * 0.6), new Vector3(tPos.x + Math.cos(ta) * tl, tPos.y + tl * 0.1, tPos.z + Math.sin(ta) * tl)];
    b.add(new TubeGeometry(new CatmullRomCurve3(pts), 3, 0.006, 3, false), { role: 'plant', color: C.thornSpike, emis: 0, sway });
  }

  const top = stemCurve.getPoint(1);
  const orbY = top.y + orbR * 0.5;
  const orbPivot = [top.x, orbY, top.z];
  const spin = { mode: MOTION.SPIN, speed: 0.2 + sr() * 0.15, phase };

  // Orb + inner core
  b.add(new SphereGeometry(orbR, 14, 12), { role: 'orb', pos: orbPivot, color: C.thornOrb, emis: 1.0, opacity: 0.35, sway, pivot: orbPivot, motion: spin });
  b.add(new SphereGeometry(orbR * 0.35, 8, 6), { role: 'orb', pos: orbPivot, color: 0xffffcc, emis: 1.5, opacity: 0.6, sway, pivot: orbPivot, motion: { mode: MOTION.BREATHE, amp: 0.12, phase, speed: 1.2 } });
  // Facet sparkles drifting inside the orb
  for (let si = 0; si < 5; si++) {
    const a = sr() * 6.28, e = (sr() - 0.5) * 2.5, r = orbR * (0.4 + sr() * 0.45);
    b.add(new SphereGeometry(0.012, 3, 3), {
      role: 'orb', pos: [top.x + Math.cos(a) * Math.cos(e) * r, orbY + Math.sin(e) * r, top.z + Math.sin(a) * Math.cos(e) * r],
      color: 0xffffff, emis: 2.0, opacity: 0.8, sway, pivot: orbPivot, motion: { mode: MOTION.ORBIT, amp: 0.02, phase: sr() * 6.28, speed: 0.3 + sr() * 0.4 }
    });
  }
  // Haze
  b.add(new SphereGeometry(orbR * 2.0, 8, 6), { role: 'haze', pos: orbPivot, color: C.thornOrbGlow, sway, pivot: orbPivot, motion: { mode: MOTION.BREATHE, amp: 0.08, phase, speed: 1.2 } });

  // Bracts
  const bractN = 5 + Math.floor(sr() * 2);
  for (let i = 0; i < bractN; i++) {
    const ba = (i / bractN) * 6.28 + sr() * 0.3, bl = 0.12 + sr() * 0.06;
    const pts = [new Vector3(top.x, orbY - orbR * 0.3, top.z), new Vector3(top.x + Math.cos(ba) * bl * 0.6, orbY - orbR * 0.5, top.z + Math.sin(ba) * bl * 0.6), new Vector3(top.x + Math.cos(ba) * bl, orbY - orbR * 0.8 - sr() * 0.05, top.z + Math.sin(ba) * bl)];
    b.add(new TubeGeometry(new CatmullRomCurve3(pts), 4, 0.008, 3, false), { role: 'plant', color: C.thornStem, emis: 1.2, sway });
  }

  // Petals — cupped, breathing about the orb
  const petalN = 5 + Math.floor(sr() * 2);
  const breathe = { mode: MOTION.BREATHE, amp: 0.04, phase, speed: 0.7 };
  for (let i = 0; i < petalN; i++) {
    const pa = (i / petalN) * 6.28 + sr() * 0.3, pLen = 0.18 + sr() * 0.1, pW = pLen * 0.6;
    const petalGeo = new PlaneGeometry(pW, pLen * 1.3, 4, 6);
    const pos = petalGeo.attributes.position;
    const cupDepth = 0.03 + sr() * 0.01;
    for (let vi = 0; vi < pos.count; vi++) {
      const xn = pos.getX(vi) / (pW * 0.5);
      pos.setZ(vi, -xn * xn * cupDepth);
    }
    petalGeo.computeVertexNormals();
    b.add(petalGeo, {
      role: 'petal', pos: [top.x + Math.cos(pa) * (orbR + 0.04), orbY + orbR * 0.1 - sr() * 0.08, top.z + Math.sin(pa) * (orbR + 0.04)],
      rot: [-0.4 - sr() * 0.3, -pa, 0], color: C.thornPetal, emis: 1, opacity: 0.7, sway, pivot: orbPivot, motion: breathe
    });
    const veinN = 1 + Math.floor(sr() * 2);
    for (let vi = 0; vi < veinN; vi++) {
      const vl = pLen * 0.8, vo = (vi - (veinN - 1) * 0.5) * pW * 0.25;
      b.add(new CylinderGeometry(0.002, 0.001, vl, 3), {
        role: 'plant', pos: [top.x + Math.cos(pa) * (orbR + 0.06 + vl * 0.3), orbY + orbR * 0.05 - sr() * 0.05, top.z + Math.sin(pa) * (orbR + 0.06 + vl * 0.3)],
        rot: [-0.4 - sr() * 0.3, -pa, vo * 2], color: 0x330a18, emis: 0.3, sway, pivot: orbPivot, motion: breathe
      });
    }
  }
  // Base leaves
  for (let i = 0; i < 2; i++) {
    const la = sr() * 6.28, lp = stemCurve.getPoint(0.3);
    b.add(new PlaneGeometry(0.15, 0.25), { role: 'plant', pos: [lp.x + Math.cos(la) * 0.12, lp.y, lp.z + Math.sin(la) * 0.12], rot: [-0.8, -la, 0], color: 0x1a3818, emis: 0.5, sway });
  }

  const m = b.build({ plant: _plantMat, petal: _petalMat, orb: orbMat, haze: hazeMat });
  g.add(m.plant, m.petal, m.orb, m.haze);
  g.position.set(x, 0, z); scene.add(g);
  return { group: g, orbMat, hazeMat, phase, x, z };
}

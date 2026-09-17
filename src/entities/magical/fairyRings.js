// --- Fairy Ring (mushroom circle + glow ring — baked, 5 meshes; was 66) ---
// Mini mushrooms (caps, stems, toadstools) share the ring's mushMat so the
// activation glow still drives them; moss, stone, old caps and lichen are
// one ground mesh; cap dots, mycelium web and damp ring one unlit mesh;
// spore motes and glow worms one mesh under sporeMat (motes rise and drift,
// worms twinkle — GPU); the glow disc stays its own mesh.
import { CircleGeometry, CylinderGeometry, Group, Mesh, MeshBasicMaterial, RingGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C, FAIRY_RING_R } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { GEO } from '../../core/geometries.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

const _groundMat = roleMaterial('solid', { emissive: 0x0a2210, emissiveIntensity: 0.05, roughness: 0.9 });
const _unlitMat = roleMaterial('basic', { doubleSide: true });

export function makeFairyRing(x, z) {
  const g = new Group();
  const ringR = FAIRY_RING_R;
  const phase = sr() * 6.28;
  const mushCount = 8 + Math.floor(sr() * 5);
  const b = createBaker();
  const mushMat = roleMaterial('solid', { emissive: C.fairyGlow, emissiveIntensity: 0.2, roughness: 0.5 });
  const sporeMat = roleMaterial('basic', { opacity: 0.2 });
  const liftY = 0.06;

  for (let i = 0; i < mushCount; i++) {
    const a = (i / mushCount) * 6.28 + sr() * 0.15;
    const mr = ringR + sr() * 0.3 - 0.15;
    const sc = 0.15 + sr() * 0.2;
    const cx = Math.cos(a) * mr, cz = Math.sin(a) * mr;
    b.add(GEO.mushStem, { role: 'mush', pos: [cx, sc * 0.3 + liftY, cz], scale: sc, color: C.mushStem, emis: 0.25 });
    b.add(GEO.mushCap, { role: 'mush', pos: [cx, sc * 0.55 + liftY, cz], scale: [sc, sc * 0.4, sc], color: C.fairyMush, emis: 1.0, pivot: [cx, sc * 0.4 + liftY, cz], motion: { mode: MOTION.BREATHE, amp: 0.04, phase: i * 0.8 + phase, speed: 1.2 } });
    b.add(new SphereGeometry(sc * 0.08, 3, 3), { role: 'unlit', pos: [cx, sc * 0.6 + liftY, cz], color: C.white, opacity: 0.7 });
  }
  for (let ti = 0; ti < 5; ti++) {
    const ta = sr() * 6.28, tr = ringR + sr() * 0.6 - 0.3, tsc = 0.06 + sr() * 0.06;
    b.add(GEO.mushCap, { role: 'mush', pos: [Math.cos(ta) * tr, tsc * 0.35 + 0.04, Math.sin(ta) * tr], scale: [tsc, tsc * 0.5, tsc], color: 0x885588, emis: 0.5 });
  }
  for (let mi = 0; mi < 4; mi++) {
    const ma = sr() * 6.28, md = sr() * ringR * 0.8;
    b.add(new SphereGeometry(0.08 + sr() * 0.08, 5, 4), { role: 'ground', pos: [Math.cos(ma) * md, 0.01, Math.sin(ma) * md], scale: [1.5, 0.2, 1.5], color: 0x1a5525 });
  }
  b.add(new SphereGeometry(0.12, 6, 4), { role: 'ground', pos: [0, 0.03, 0], scale: [1.2, 0.3, 1.0], color: 0x445566 });
  for (let oci = 0; oci < 3; oci++) {
    const oa = sr() * 6.28, od = sr() * ringR * 0.7;
    b.add(new SphereGeometry(0.03, 4, 3), { role: 'ground', pos: [Math.cos(oa) * od, 0.008, Math.sin(oa) * od], scale: [1.3, 0.3, 1.3], color: 0x4a3a30 });
  }
  for (let lci = 0; lci < 2; lci++) {
    b.add(new CircleGeometry(0.02 + sr() * 0.02, 4), { role: 'ground', pos: [(sr() - 0.5) * 0.08, 0.06, (sr() - 0.5) * 0.06], rot: [-Math.PI / 2 + sr() * 0.4, 0, 0], color: 0x778866 });
  }
  // Spore motes: rise (BOB with large amplitude) while drifting (ORBIT) — split across two sets
  for (let si = 0; si < 10; si++) {
    const sx = (sr() - 0.5) * ringR * 0.8, sz = (sr() - 0.5) * ringR * 0.8, sy = 0.05 + sr() * 0.35;
    const mo = si % 2 === 0
      ? { mode: MOTION.BOB, amp: 0.2 + sr() * 0.15, phase: sr() * 6.28, speed: 0.4 + sr() * 0.3 }
      : { mode: MOTION.ORBIT, amp: 0.15, phase: sr() * 6.28, speed: 0.3 + sr() * 0.3 };
    b.add(new SphereGeometry(0.012, 4, 3), { role: 'spore', pos: [sx + (si % 2 ? 0.12 : 0), sy, sz], color: C.fairyGlow, pivot: [sx, sy, sz], motion: mo });
  }
  for (let gwi = 0; gwi < 5; gwi++) {
    const gwa = sr() * 6.28, gwd = sr() * ringR * 0.9;
    b.add(new SphereGeometry(0.005, 3, 3), { role: 'spore', pos: [Math.cos(gwa) * gwd, 0.01, Math.sin(gwa) * gwd], color: 0x88ffaa, emis: 1.5, motion: { mode: MOTION.FLICKER, phase: gwi * 1.3 + phase, speed: 1.5 } });
  }
  for (let wi = 0; wi < 6; wi++) {
    const wA1 = sr() * 6.28, wA2 = wA1 + 0.5 + sr() * 1.5, webLen = ringR * 0.6 + sr() * ringR * 0.4;
    b.add(new CylinderGeometry(0.002, 0.002, webLen, 3), { role: 'unlit', pos: [Math.cos((wA1 + wA2) / 2) * ringR * 0.4, 0.005, Math.sin((wA1 + wA2) / 2) * ringR * 0.4], rot: [Math.PI / 2, 0, wA1], color: C.fairyGlow, opacity: 0.08 });
  }
  b.add(new RingGeometry(ringR * 0.5, ringR * 0.85, 12), { role: 'unlit', pos: [0, 0.008, 0], rot: [-Math.PI / 2, 0, 0], color: 0x0a0a06, opacity: 0.15 });

  const m = b.build({ mush: mushMat, ground: _groundMat, unlit: _unlitMat, spore: sporeMat });
  g.add(m.mush, m.ground, m.unlit, m.spore);

  // Central glow disc (opacity driven by activation)
  const discMat = new MeshBasicMaterial({ color: C.fairyRing, transparent: true, opacity: 0.0, side: 2, depthWrite: false });
  const disc = new Mesh(new RingGeometry(0.3, ringR - 0.3, 18), discMat);
  disc.rotation.x = -Math.PI / 2; disc.position.y = 0.12; g.add(disc);

  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, mushMat, discMat, sporeMat, spores: [], glowWorms: [],
    x, z, ringR, phase, glowIntensity: 0, active: false, _gpu: true
  };
}

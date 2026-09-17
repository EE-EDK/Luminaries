// --- Pond Lily (organic water patch — baked, 9 meshes; was 71) ---
// Water and lily flower keep their own materials (updater drives glow);
// the mud bank, edge stones, water grass, lily pads, pebbles, silt, algae,
// tadpoles, fallen leaf and meniscus are merged by role. Pads bob and
// tadpoles swim on the GPU; the three ripple rings stay CPU-animated.
// Bank spheres dropped from 12×10 to 6×4 segments (6,600 → ~1,900 tris).
import { BufferAttribute, BufferGeometry, CircleGeometry, CylinderGeometry, Group, Mesh, MeshBasicMaterial, PlaneGeometry, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

function makeOrganicDiscGeo(baseR, segments, seed) {
  const verts = [], indices = [];
  verts.push(0, 0, 0);
  const lobeCount = 2 + Math.floor(seed * 3), lobePhase = seed * 6.28;
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    const lobe = 1.0 + 0.25 * Math.sin(a * lobeCount + lobePhase) + 0.12 * Math.sin(a * (lobeCount + 2) + lobePhase * 1.7) + 0.06 * Math.sin(a * 7 + seed * 3.14);
    const r = baseR * lobe;
    verts.push(Math.cos(a) * r, Math.sin(a) * r, 0);
    if (i > 0) indices.push(0, i, i + 1);
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(new Float32Array(verts), 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

const _bankMat = roleMaterial('solid', { emissive: C.pondGlow, emissiveIntensity: 0.03, roughness: 0.9, doubleSide: true });
const _unlitMat = roleMaterial('basic', { doubleSide: true });

export function makePond(x, z) {
  const g = new Group();
  const pondR = 2.5 + sr() * 1.5;
  const shapeSeed = sr();
  const elongX = 1.0 + sr() * 0.35, elongZ = 1.0 + sr() * 0.35, rotY = sr() * Math.PI;
  const phase = sr() * 6.28;
  const b = createBaker();

  // Depth disc + water surface + meniscus
  b.add(makeOrganicDiscGeo(pondR * 0.85, 24, shapeSeed), { role: 'bank', pos: [0, 0.04, 0], rot: [-Math.PI / 2, 0, rotY], scale: [elongX, elongZ, 1], color: 0x0a1220, emis: 1 });
  const waterMat = roleMaterial('glow', { emissive: C.pondGlow, emissiveIntensity: 0.2, roughness: 0.05, metalness: 0.4, opacity: 0.55 });
  waterMat.color.setHex(C.pondWater);
  b.add(makeOrganicDiscGeo(pondR, 24, shapeSeed), { role: 'water', pos: [0, 0.06, 0], rot: [-Math.PI / 2, 0, rotY], scale: [elongX, elongZ, 1] });
  b.add(makeOrganicDiscGeo(pondR - 0.05, 24, shapeSeed), { role: 'unlit', pos: [0, 0.065, 0], rot: [-Math.PI / 2, 0, rotY], scale: [elongX, elongZ, 1], color: C.white, opacity: 0.06 });

  // Edge stones + mud bank (low-poly)
  const stoneN = 5 + Math.floor(sr() * 4);
  for (let si = 0; si < stoneN; si++) {
    const sa = si / stoneN * 6.28 + sr() * 0.3, sd = pondR + sr() * 0.2 - 0.1, sSz = 0.06 + sr() * 0.08;
    b.add(new SphereGeometry(sSz, 6, 5), { role: 'bank', pos: [Math.cos(sa) * sd, sSz * 0.2, Math.sin(sa) * sd], rot: [sr(), sr(), sr()], scale: [1 + sr() * 0.5, 0.4 + sr() * 0.3, 1 + sr() * 0.5], color: 0x3a3a42, emis: 0.6 });
  }
  for (let bi = 0; bi < 16; bi++) {
    const ba = (bi / 16) * Math.PI * 2;
    const lobeR = 1.0 + 0.25 * Math.sin(ba * (2 + Math.floor(shapeSeed * 3)) + shapeSeed * 6.28) + 0.12 * Math.sin(ba * (4 + Math.floor(shapeSeed * 3)) + shapeSeed * 1.7 * 6.28);
    const br = pondR * lobeR, bankH = 0.04 + sr() * 0.03;
    b.add(new SphereGeometry(0.15 + sr() * 0.1, 6, 4), { role: 'bank', pos: [Math.cos(ba + rotY) * br * elongX, bankH * 0.5, Math.sin(ba + rotY) * br * elongZ], scale: [1.5 + sr() * 0.5, bankH / 0.1, 1.5 + sr() * 0.5], color: 0x2a2018, emis: 1 });
  }
  // Water grass tufts — sway
  for (let wi = 0; wi < 3; wi++) {
    const wa = sr() * 6.28, wd = pondR * 0.85 + sr() * 0.2;
    for (let wj = 0; wj < 3; wj++) {
      const bl = 0.15 + sr() * 0.1;
      b.add(new PlaneGeometry(0.015, bl), { role: 'bank', pos: [Math.cos(wa) * wd + (sr() - 0.5) * 0.05, 0.08 + bl * 0.5, Math.sin(wa) * wd + (sr() - 0.5) * 0.05], rot: [-0.2, sr() * 3, 0], color: 0x1a5520, emis: 2, sway: 0.6 });
    }
  }
  // Lily pads (bob) + vein lines + flower on the first, bud on the third
  const padCount = 4 + Math.floor(sr() * 2);
  const padPos = [];
  for (let i = 0; i < padCount; i++) {
    const pa = sr() * 6.28, pd = sr() * pondR * 0.6, padSize = 0.15 + sr() * 0.15;
    const px = Math.cos(pa) * pd, pz = Math.sin(pa) * pd;
    const bob = { mode: MOTION.BOB, amp: 0.015, phase: sr() * 6.28, speed: 0.8 };
    b.add(new CircleGeometry(padSize, 9), { role: 'bank', pos: [px, 0.05, pz], rot: [-Math.PI / 2, 0, 0], color: C.lilyPad, emis: 0.5, motion: bob });
    b.add(new CylinderGeometry(0.002, 0.002, padSize * 1.5, 4), { role: 'unlit', pos: [px, 0.052, pz], rot: [Math.PI / 2, 0, sr() * 3], color: 0x1a5020, opacity: 0.3, motion: bob });
    padPos.push({ px, pz, bob });
  }
  const flMat = roleMaterial('glow', { emissive: C.lilyGlow, emissiveIntensity: 0.4, roughness: 0.6, doubleSide: true, opacity: 0.85 });
  const fp0 = padPos[0];
  for (let i = 0; i < 6; i++) {
    const fa = (i / 6) * 6.28;
    b.add(new PlaneGeometry(0.06, 0.05), { role: 'flower', pos: [fp0.px + Math.cos(fa) * 0.05, 0.08, fp0.pz + Math.sin(fa) * 0.05], rot: [-1.0, -fa, 0], color: C.lilyFlower, emis: 1, motion: fp0.bob, pivot: [fp0.px, 0.08, fp0.pz] });
  }
  b.add(new SphereGeometry(0.025, 8, 6), { role: 'flower', pos: [fp0.px, 0.10, fp0.pz], color: 0xffffaa, emis: 2.0, opacity: 1, motion: fp0.bob });
  if (padPos.length > 2) {
    const fp2 = padPos[2];
    b.add(new SphereGeometry(0.03, 8, 6), { role: 'flower', pos: [fp2.px, 0.09, fp2.pz], scale: [0.8, 1.2, 0.8], color: C.lilyFlower, emis: 0.5, opacity: 0.7, motion: fp2.bob });
  }
  // Pebbles, silt, algae, fallen leaf
  for (let pbi = 0; pbi < 5; pbi++) {
    const pbA = sr() * 6.28, pbD = sr() * pondR * 0.7;
    b.add(new SphereGeometry(0.02 + sr() * 0.025, 5, 4), { role: 'bank', pos: [Math.cos(pbA) * pbD, 0.015, Math.sin(pbA) * pbD], scale: [1 + sr() * 0.5, 0.4, 1 + sr() * 0.5], color: 0x3a3835, emis: 1 });
  }
  for (let sli = 0; sli < 3; sli++) {
    const slA = sr() * 6.28, slD = sr() * pondR * 0.5;
    b.add(new CircleGeometry(0.08 + sr() * 0.06, 5), { role: 'unlit', pos: [Math.cos(slA) * slD, 0.012, Math.sin(slA) * slD], rot: [-Math.PI / 2, 0, 0], color: 0x2a2418, opacity: 0.12 });
  }
  for (let ali = 0; ali < 3; ali++) {
    const alA = sr() * 6.28, alD = pondR * 0.7 + sr() * pondR * 0.25;
    b.add(new CircleGeometry(0.06 + sr() * 0.04, 5), { role: 'unlit', pos: [Math.cos(alA) * alD, 0.032, Math.sin(alA) * alD], rot: [-Math.PI / 2, 0, 0], color: 0x225520, opacity: 0.1 });
  }
  b.add(new SphereGeometry(0.03, 6, 4), { role: 'bank', pos: [(sr() - 0.5) * pondR * 0.5, 0.07, (sr() - 0.5) * pondR * 0.5], scale: [1.3, 0.2, 1.0], color: 0x4a3018, emis: 0.5, motion: { mode: MOTION.ORBIT, amp: 0.01, phase, speed: 0.15 }, pivot: [0, 0.07, 0] });
  // Tadpoles — orbit their own centre, tail wiggles
  for (let tdi = 0; tdi < 2; tdi++) {
    const tdA = sr() * 6.28, tdD = sr() * pondR * 0.4, orbR = 0.15 + sr() * pondR * 0.35, speed = 0.3 + sr() * 0.4;
    const cx = Math.cos(tdA) * tdD, cz = Math.sin(tdA) * tdD;
    const orbit = { mode: MOTION.ORBIT, amp: 0.0, phase: sr() * 6.28, speed };
    b.add(new SphereGeometry(0.012, 5, 4), { role: 'bank', pos: [cx + orbR, 0.04, cz], scale: [0.8, 0.5, 1.3], color: 0x112215, emis: 0.5, pivot: [cx, 0.04, cz], motion: orbit });
    b.add(new CylinderGeometry(0.002, 0.001, 0.025, 4), { role: 'bank', pos: [cx + orbR, 0.04, cz - 0.02], rot: [0, 0, Math.PI / 2], color: 0x112215, emis: 0.5, pivot: [cx, 0.04, cz], motion: orbit });
  }

  const m = b.build({ bank: _bankMat, water: waterMat, unlit: _unlitMat, flower: flMat });
  g.add(m.bank, m.water, m.unlit, m.flower);

  // Ripple rings — CPU-animated (scale + fade cycle)
  const ripples = [];
  for (let rri = 0; rri < 3; rri++) {
    const rm = new MeshBasicMaterial({ color: 0xaaddee, transparent: true, opacity: 0.08, depthWrite: false });
    const ripple = new Mesh(new TorusGeometry(pondR * 0.4, 0.004, 4, 24), rm);
    ripple.rotation.x = Math.PI / 2; ripple.position.y = 0.07; g.add(ripple);
    ripples.push({ mesh: ripple, phase: rri / 3 });
  }

  g.position.set(x, 0, z); scene.add(g);
  return { group: g, waterMat, flMat, pads: [], ripples, tadpoles: [], x, z, phase, pondR, _gpu: true };
}

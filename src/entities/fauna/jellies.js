// --- Glow Jelly (floating jellyfish — baked, 7 meshes; was 44) ---
// Bell (dome, rim, lappets, inner glow, organs, spots, nerve net) rides in
// `bell`, which the updater squashes for the pulse; tentacles, oral arm,
// tip bulbs and mucus beads ride in `tentGroup` and undulate on the GPU
// (wave weighted by distance below the bell), so the per-tentacle rotation
// loop in updates/fauna/jellies.js is skipped for `_gpu` jellies.
import { CylinderGeometry, Group, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

export function makeJelly(x, y, z) {
  const g = new Group();
  const bell = new Group();
  const tentGroup = new Group();
  g.add(bell, tentGroup);
  const phase = sr() * 6.28;
  const b = createBaker();

  const bellMat = roleMaterial('glow', { emissive: C.jellyGlow, emissiveIntensity: 0.8, roughness: 0.2, metalness: 0.1, opacity: 0.68, doubleSide: true, depthWrite: true });
  bellMat.color.setHex(C.jellyBell);
  const rimMat = roleMaterial('glow', { emissive: C.jellyGlow, emissiveIntensity: 1.0, opacity: 0.72, depthWrite: true });
  rimMat.color.setHex(C.jellyBell);
  const tentMat = roleMaterial('glow', { emissive: C.jellyGlow, emissiveIntensity: 0.4, opacity: 0.58, depthWrite: true });
  tentMat.color.setHex(C.jellyTent);
  const innerMat = roleMaterial('basic', { opacity: 0.78, depthWrite: true });
  innerMat.color.setHex(C.jellyGlow);
  const spotMat = roleMaterial('basic', { opacity: 0.82, depthWrite: true });
  spotMat.color.setHex(C.jellySpot);
  const nerveMat = roleMaterial('basic', { opacity: 0.18, depthWrite: true });
  nerveMat.color.setHex(C.jellyGlow);
  const tipMat = roleMaterial('basic', { opacity: 0.95, depthWrite: true });
  tipMat.color.setHex(C.jellyTip);

  // --- Bell ---
  b.add(new SphereGeometry(0.5, 10, 7, 0, 6.28, 0, Math.PI / 2), { role: 'bell', scale: [1, 0.6, 1] });
  b.add(new TorusGeometry(0.48, 0.025, 5, 14), { role: 'rim', pos: [0, -0.02, 0], rot: [Math.PI / 2, 0, 0] });
  for (let lpi = 0; lpi < 10; lpi++) {
    const la = (lpi / 10) * 6.28;
    b.add(new SphereGeometry(0.02, 4, 3), { role: 'rim', pos: [Math.cos(la) * 0.46, -0.04, Math.sin(la) * 0.46], scale: [1, 0.5, 0.8], emis: 0.6, motion: { mode: MOTION.BOB, amp: 0.008, phase: lpi * 0.63, speed: 2.4 } });
  }
  b.add(new SphereGeometry(0.2, 7, 5), { role: 'inner', pos: [0, -0.05, 0], motion: { mode: MOTION.BREATHE, amp: 0.06, phase, speed: 1.6 }, pivot: [0, -0.05, 0] });
  for (let oi = -1; oi <= 1; oi += 2) {
    b.add(new SphereGeometry(0.06, 4, 3), { role: 'inner', pos: [oi * 0.08, -0.03, 0], scale: [0.6, 1.5, 0.6], color: 0xccbbff, opacity: 0.55 });
  }
  for (let si = 0; si < 5; si++) {
    const sa = sr() * 6.28, sel = sr() * 0.8;
    b.add(new SphereGeometry(0.02, 4, 3), { role: 'spot', pos: [Math.cos(sa) * sel * 0.35, 0.1 - sel * 0.15, Math.sin(sa) * sel * 0.35], motion: { mode: MOTION.FLICKER, phase: sr() * 6.28, speed: 1.5 + sr() } });
  }
  for (let ni = 0; ni < 8; ni++) {
    const na = (ni / 8) * 6.28;
    b.add(new CylinderGeometry(0.002, 0.002, 0.4, 3), { role: 'nerve', pos: [Math.cos(na) * 0.2, 0.05, Math.sin(na) * 0.2], rot: [0, -na, Math.PI / 2 - 0.3] });
  }

  // --- Tentacles: tapered, undulating; tips + mucus ride the same wave ---
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * 6.28;
    const len = 0.4 + sr() * 0.6;
    const tx = Math.cos(a) * 0.25, tz = Math.sin(a) * 0.25;
    const top = -0.05;
    const wave = { mode: MOTION.WAVE, amp: 0.06 + sr() * 0.04, phase: phase + i * 1.1, speed: 1.4 + sr() * 0.5 };
    const depth = (px, py) => Math.min(1, Math.max(0, (top - py) / len));
    b.add(new CylinderGeometry(0.008, 0.016, len, 4, 6), { role: 'tent', pos: [tx, top - len / 2, tz], sway: depth, motion: wave });
    b.add(new SphereGeometry(0.018, 5, 4), { role: 'tip', pos: [tx, top - len - 0.01, tz], sway: 1.0, motion: wave });
    if (i % 2 === 0) {
      b.add(new SphereGeometry(0.008, 3, 3), { role: 'tip', pos: [tx, top - len * (0.5 + sr() * 0.3), tz], color: 0xddeeff, opacity: 0.6, sway: 0.7, motion: wave });
    }
  }
  b.add(new CylinderGeometry(0.01, 0.02, 0.35, 5, 4), { role: 'tent', pos: [0, -0.2, 0], emis: 1.25, sway: (px, py) => Math.min(1, Math.max(0, (-0.03 - py) / 0.35)), motion: { mode: MOTION.WAVE, amp: 0.04, phase, speed: 1.1 } });

  const m = b.build({ bell: bellMat, rim: rimMat, inner: innerMat, spot: spotMat, nerve: nerveMat, tent: tentMat, tip: tipMat });
  bell.add(m.bell, m.rim, m.inner, m.spot, m.nerve);
  tentGroup.add(m.tent, m.tip);

  g.position.set(x, y, z); scene.add(g);
  // Keep jelly transparent layers rendering in a stable order near the camera.
  g.traverse((obj) => { obj.renderOrder = 5; });
  return {
    group: g, bell, tentGroup,
    bellMat, rimMat, lappetMat: null, tentMat, oralMat: null,
    tipMat, innerMat, spotMat, nerveMat, organMat: null, mucusMat: null,
    phase, driftAng: sr() * 6.28,
    homeX: x, homeZ: z, floatY: y, wobble: 0.5 + sr() * 0.5,
    _init: true, _state: 'drift', _stT: 20 + Math.random() * 30,
    _migrateAng: 0, _pulseSync: 0, _gpu: true,
    _detail: [m.spot, m.nerve, m.tip]   // hidden beyond 30 m (applyDetailLod)
  };
}

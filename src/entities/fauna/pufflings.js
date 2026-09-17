// --- Puffling (round hopping creature — baked, 10 meshes; was 18) ---
// Body + head + feet share one mesh under `shell` (squash/stretch on hops);
// ears keep their pivots for the flick, eyes stay separate for the blink,
// the mouth flaps for chat. The spore trail drifts on the GPU. Wizard variant
// adds hat, stars and staff.
import { ConeGeometry, CylinderGeometry, Group, Mesh, MeshBasicMaterial, PlaneGeometry, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

export function makePuff(x, z, opts = {}) {
  const wizardHat = !!opts.wizardHat;
  const skipSceneAdd = !!opts.skipSceneAdd;
  const eyeColor = opts.eyeColor || C.puffEye;
  const g = new Group();
  const shell = new Group();
  g.add(shell);
  const phase = sr() * 6.28;

  const bodyMat = roleMaterial('solid', { emissive: C.puffGlow, emissiveIntensity: 0.5, roughness: 0.8 });
  bodyMat.color.setHex(C.puffBody);
  const bellyMat = roleMaterial('solid', { emissive: C.puffGlow, emissiveIntensity: 0.15, roughness: 0.9 });
  bellyMat.color.setHex(C.puffBelly);
  const darkMat = roleMaterial('basic', { opacity: 1.0, depthWrite: true });
  const b = createBaker();

  // Body, head, feet — one mesh (breathes very slightly about the chest)
  const breathe = { mode: MOTION.BREATHE, amp: 0.012, phase, speed: 1.3 };
  b.add(new SphereGeometry(0.3, 16, 12), { role: 'body', pos: [0, 0.35, 0], pivot: [0, 0.3, 0], motion: breathe });
  b.add(new SphereGeometry(0.22, 14, 10), { role: 'body', pos: [0, 0.65, 0] });
  for (let i = -1; i <= 1; i += 2) {
    b.add(new SphereGeometry(0.07, 10, 8), { role: 'body', pos: [i * 0.12, 0.07, 0.05], scale: [1, 0.5, 1.3] });
  }
  b.add(new SphereGeometry(0.18, 10, 8), { role: 'belly', pos: [0, 0.32, 0.2], scale: [0.7, 0.9, 0.3], pivot: [0, 0.3, 0], motion: breathe });
  // Brows + nose (dark, unlit)
  for (let i = -1; i <= 1; i += 2) {
    b.add(new PlaneGeometry(0.06, 0.02), { role: 'dark', pos: [i * 0.09, 0.74, 0.19], rot: [0, 0, i * -0.18], color: C.puffBrow });
  }
  b.add(new SphereGeometry(0.016, 8, 6), { role: 'dark', pos: [0, 0.64, 0.225], scale: [1, 0.85, 1.2], color: 0x101010 });

  const m = b.build({ body: bodyMat, belly: bellyMat, dark: darkMat });
  shell.add(m.body, m.belly, m.dark);
  const body = m.body, head = m.body;

  // Internal core glow (plain material — wizardPufflingEvent recolours it)
  const coreMat = new MeshBasicMaterial({ color: C.puffGlow, transparent: true, opacity: 0.8, depthWrite: false });
  const core = new Mesh(new SphereGeometry(0.12, 10, 8), coreMat);
  core.position.y = 0.35; shell.add(core);

  // Ears — pivots keep the flick animation
  const ears = [];
  const earGeo = new ConeGeometry(0.06, 0.15, 8);
  for (let i = -1; i <= 1; i += 2) {
    const eb = createBaker();
    eb.add(earGeo, { role: 'ear' });          // baked so it carries the motion attributes bodyMat expects
    const ear = eb.build({ ear: bodyMat }).ear;
    ear.position.set(i * 0.13, 0.85, 0); ear.rotation.z = i * 0.3; shell.add(ear);
    ears.push({ mesh: ear, side: i, baseRotZ: i * 0.3 });
  }
  // Eyes — separate for the blink
  const eyeMat = new MeshBasicMaterial({ color: eyeColor });
  const eyes = [];
  const eyeGeo = new SphereGeometry(0.035, 10, 8);
  for (let i = -1; i <= 1; i += 2) {
    const eye = new Mesh(eyeGeo, eyeMat);
    eye.position.set(i * 0.09, 0.68, 0.18); shell.add(eye);
    eyes.push(eye);
  }
  // Mouth — flaps while speaking
  const mouthMat = new MeshBasicMaterial({ color: 0x191919, transparent: true, opacity: 0.92 });
  const mouth = new Mesh(new SphereGeometry(0.024, 8, 6), mouthMat);
  mouth.position.set(0, 0.595, 0.22);
  mouth.scale.set(1.0, 0.22, 0.55);
  shell.add(mouth);

  let crownMat = null;
  if (wizardHat) {
    crownMat = roleMaterial('solid', { emissive: C.puffHatEmissive, emissiveIntensity: 0.35, roughness: 0.45, metalness: 0.1 });
    crownMat.color.setHex(C.puffHatBody);
    const hb = createBaker();
    hb.add(new CylinderGeometry(0.16, 0.2, 0.02, 16), { role: 'crown', pos: [0, 0.86, 0] });
    hb.add(new ConeGeometry(0.11, 0.28, 16), { role: 'crown', pos: [0, 1.02, 0], rot: [0, 0, -0.18] });
    for (let si = 0; si < 3; si++) {
      hb.add(new SphereGeometry(0.012, 6, 5), { role: 'star', pos: [(sr() - 0.5) * 0.08, 0.94 + sr() * 0.12, 0.08 + sr() * 0.06], color: C.puffHatStar, motion: { mode: MOTION.FLICKER, phase: si * 2.1, speed: 3 } });
    }
    // Shepherd's-crook staff at the right side
    const staffPivot = [0.28, 0, 0.05];
    hb.add(new CylinderGeometry(0.018, 0.022, 0.92, 8), { role: 'staff', pos: [0.28, 0.46, 0.05], rot: [0, 0, 0.12], color: C.wizardStaff });
    hb.add(new TorusGeometry(0.06, 0.018, 8, 12, Math.PI), { role: 'staff', pos: [0.28 - 0.06, 0.92, 0.05], rot: [0, 0, Math.PI + 0.12], color: C.wizardStaff, pivot: staffPivot });
    const staffMat = roleMaterial('solid', { emissive: C.wizardStaffEmissive, emissiveIntensity: 0.12, roughness: 0.9 });
    const starMat = roleMaterial('basic', { opacity: 1.0, depthWrite: true });
    const hm = hb.build({ crown: crownMat, star: starMat, staff: staffMat });
    shell.add(hm.crown, hm.star, hm.staff);
  }

  // Spore trail motes — drift behind on the GPU
  const sb = createBaker();
  for (let si = 0; si < 4; si++) {
    sb.add(new SphereGeometry(0.01, 5, 4), { role: 'spore', pos: [0.03, 0.3, -0.3 - si * 0.1], color: C.puffGlow, pivot: [0, 0.3, -0.3 - si * 0.1], motion: { mode: MOTION.ORBIT, amp: 0.03, phase: si * 1.6, speed: 1.2 + si * 0.3 } });
  }
  const sporeMat = roleMaterial('basic', { opacity: 0.6 });
  const sm = sb.build({ spore: sporeMat });
  g.add(sm.spore);

  g.position.set(x, 0, z);
  if (!skipSceneAdd) scene.add(g);
  return {
    group: g, shell, body, head, ears, eyes, brows: [], nose: null, mouth, spores: [], core,
    bodyMat, bellyMat, crownMat,
    phase, wanderAng: sr() * 6.28, speed: 0.6 + sr() * 0.8,
    hopTimer: 0, hopPhase: sr() * 6.28, homeX: x, homeZ: z, state: 'idle', idleTimer: sr() * 3,
    _init: true, _baseY: 0, _lastTX: x, _lastTZ: z,
    _blinkTimer: 2 + Math.random() * 4, _blinkState: 0, _talkTimer: 0,
    _detail: [m.dark, mouth, sm.spore]   // hidden beyond 20 m (applyDetailLod)
  };
}

// --- Puffling (round hopping creature — enhanced detail) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makePuff(x, z) {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({
    color: C.puffBody, emissive: C.puffGlow, emissiveIntensity: 0.3, roughness: 0.8
  });
  // Body (big round)
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), bodyMat);
  body.position.y = 0.35; g.add(body);
  // Belly patch (lighter toned oval on front)
  const bellyMat = new THREE.MeshStandardMaterial({
    color: 0xfff0e0, emissive: C.puffGlow, emissiveIntensity: 0.15, roughness: 0.9
  });
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.18, 6, 4), bellyMat);
  belly.scale.set(0.7, 0.9, 0.3); belly.position.set(0, 0.32, 0.2); g.add(belly);
  // Head (slightly smaller, on top)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 7, 5), bodyMat);
  head.position.y = 0.65; g.add(head);
  // Ears (2 small cones)
  for (let i = -1; i <= 1; i += 2) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.15, 4), bodyMat);
    ear.position.set(i * 0.13, 0.85, 0);
    ear.rotation.z = i * 0.3;
    g.add(ear);
    // Inner ear (pink)
    const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4),
      new THREE.MeshStandardMaterial({ color: C.puffCheek, emissive: C.puffCheek, emissiveIntensity: 0.2 }));
    innerEar.position.set(i * 0.13, 0.84, 0.01); innerEar.rotation.z = i * 0.3; g.add(innerEar);
  }
  // Eyes (2 dark dots)
  const eyeMat = new THREE.MeshBasicMaterial({ color: C.puffEye });
  for (let i = -1; i <= 1; i += 2) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 4, 4), eyeMat);
    eye.position.set(i * 0.09, 0.68, 0.18); g.add(eye);
    // Eye highlight (white catch light)
    const hlMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.012, 3, 3), hlMat);
    hl.position.set(i * 0.09 + i * 0.015, 0.695, 0.2); g.add(hl);
  }
  // Nose (tiny dark dot)
  const noseMat = new THREE.MeshBasicMaterial({ color: 0x443333 });
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.015, 3, 3), noseMat);
  nose.position.set(0, 0.63, 0.22); g.add(nose);
  // Cheeks (2 pink spots)
  const chkMat = new THREE.MeshStandardMaterial({ color: C.puffCheek, emissive: C.puffCheek, emissiveIntensity: 0.3 });
  for (let i = -1; i <= 1; i += 2) {
    const chk = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 3), chkMat);
    chk.position.set(i * 0.15, 0.61, 0.15); g.add(chk);
  }
  // Whisker nubs (4 tiny cylinders)
  const whiskMat = new THREE.MeshBasicMaterial({ color: 0xeeddcc, transparent: true, opacity: 0.5 });
  for (let i = -1; i <= 1; i += 2) {
    for (let j = 0; j < 2; j++) {
      const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, 0.06, 3), whiskMat);
      wh.position.set(i * 0.12, 0.62 - j * 0.03, 0.2);
      wh.rotation.z = i * 0.7 + j * i * 0.2; wh.rotation.x = -0.1; g.add(wh);
    }
  }
  // Feet (2 little spheres) with toe beans
  for (let i = -1; i <= 1; i += 2) {
    const foot = new THREE.Mesh(new THREE.SphereGeometry(0.07, 4, 3), bodyMat);
    foot.position.set(i * 0.12, 0.07, 0.05); foot.scale.set(1, 0.5, 1.3); g.add(foot);
    // Toe bean pads (3 tiny pink dots on sole)
    const beanMat = new THREE.MeshStandardMaterial({ color: 0xffaaaa, emissive: 0xff8888, emissiveIntensity: 0.1 });
    for (let bi = 0; bi < 3; bi++) {
      const ba = bi / 3 * 6.28;
      const bean = new THREE.Mesh(new THREE.SphereGeometry(0.012, 3, 3), beanMat);
      bean.position.set(i * 0.12 + Math.cos(ba) * 0.03, 0.03, 0.05 + Math.sin(ba) * 0.03);
      g.add(bean);
    }
  }
  // Tail pom (fluffy ball on back)
  const tailMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, emissive: C.puffGlow, emissiveIntensity: 0.4, roughness: 0.9
  });
  const tail = new THREE.Mesh(new THREE.SphereGeometry(0.06, 5, 4), tailMat);
  tail.position.set(0, 0.38, -0.28); g.add(tail);

  // Fur tuft dots (tiny surface bumps on body)
  const furMat = new THREE.MeshStandardMaterial({
    color: C.puffBody, emissive: C.puffGlow, emissiveIntensity: 0.2, roughness: 1.0
  });
  for (let fi = 0; fi < 6; fi++) {
    const fa = sr() * 6.28, fEl = sr() * 1.2;
    const fur = new THREE.Mesh(new THREE.SphereGeometry(0.01, 3, 3), furMat);
    fur.position.set(Math.cos(fa) * 0.28, 0.25 + fEl * 0.2, Math.sin(fa) * 0.28);
    g.add(fur);
  }

  // Brow marks (tiny arched lines above eyes)
  const browMat = new THREE.MeshBasicMaterial({ color: C.puffBody });
  for (let i = -1; i <= 1; i += 2) {
    const brow = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.04, 3), browMat);
    brow.position.set(i * 0.09, 0.72, 0.17); brow.rotation.z = i * 0.3; g.add(brow);
  }

  // Tiny mouth line (faint smile)
  const mouthMat = new THREE.MeshBasicMaterial({ color: 0x553344, transparent: true, opacity: 0.5 });
  const mouth = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, 0.03, 3), mouthMat);
  mouth.position.set(0, 0.59, 0.22); mouth.rotation.z = Math.PI / 2; g.add(mouth);

  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, phase: sr() * 6.28, wanderAng: sr() * 6.28, speed: 0.6 + sr() * 0.8,
    hopTimer: 0, hopPhase: sr() * 6.28, homeX: x, homeZ: z, state: 'idle', idleTimer: sr() * 3,
    _init: true, _followT: 0, _scaredT: 0, _huddleTarget: -1,
    _baseY: 0, _lastTX: x, _lastTZ: z
  };
}

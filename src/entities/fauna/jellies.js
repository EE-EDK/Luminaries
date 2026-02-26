// --- Glow Jelly (floating jellyfish — enhanced detail) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makeJelly(x, y, z) {
  const g = new THREE.Group();
  // Bell dome (squashed sphere)
  const bellMat = new THREE.MeshStandardMaterial({
    color: C.jellyBell, emissive: C.jellyGlow, emissiveIntensity: 0.8,
    transparent: true, opacity: 0.5, roughness: 0.2, metalness: 0.1, side: THREE.DoubleSide
  });
  const bell = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6, 0, 6.28, 0, Math.PI / 2), bellMat);
  bell.scale.set(1, 0.6, 1); bell.position.y = 0; g.add(bell);

  // Bell rim torus (thickened edge)
  const rimMat = new THREE.MeshStandardMaterial({
    color: C.jellyBell, emissive: C.jellyGlow, emissiveIntensity: 1.0,
    transparent: true, opacity: 0.6
  });
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.025, 5, 12), rimMat);
  rim.rotation.x = Math.PI / 2; rim.position.y = -0.02; g.add(rim);

  // Inner glow orb
  const inner = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 4), new THREE.MeshBasicMaterial({
    color: C.jellyGlow, transparent: true, opacity: 0.7
  }));
  inner.position.y = -0.05; g.add(inner);

  // Internal organ shapes (2 small elongated forms)
  const organMat = new THREE.MeshBasicMaterial({
    color: 0xbbddff, transparent: true, opacity: 0.3
  });
  for (let oi = -1; oi <= 1; oi += 2) {
    const organ = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 3), organMat);
    organ.scale.set(0.6, 1.5, 0.6);
    organ.position.set(oi * 0.08, -0.03, 0); g.add(organ);
  }

  // Bioluminescent spots on bell surface (4-6)
  const spotMat = new THREE.MeshBasicMaterial({
    color: 0xeeffff, transparent: true, opacity: 0.7
  });
  for (let si = 0; si < 5; si++) {
    const sa = sr() * 6.28, sel = sr() * 0.8;
    const spot = new THREE.Mesh(new THREE.SphereGeometry(0.02, 3, 3), spotMat);
    spot.position.set(Math.cos(sa) * sel * 0.35, 0.1 - sel * 0.15, Math.sin(sa) * sel * 0.35);
    g.add(spot);
  }

  // Tentacles (6 dangling cylinders) with tip bulbs
  const tentMat = new THREE.MeshStandardMaterial({
    color: C.jellyTent, emissive: C.jellyGlow, emissiveIntensity: 0.4,
    transparent: true, opacity: 0.4
  });
  const tipMat = new THREE.MeshBasicMaterial({
    color: C.jellyGlow, transparent: true, opacity: 0.6
  });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * 6.28;
    const len = 0.4 + sr() * 0.6;
    const tent = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.008, len, 3), tentMat);
    tent.position.set(Math.cos(a) * 0.25, -len / 2 - 0.05, Math.sin(a) * 0.25);
    g.add(tent);
    // Tip bulb
    const tipB = new THREE.Mesh(new THREE.SphereGeometry(0.012, 3, 3), tipMat);
    tipB.position.set(Math.cos(a) * 0.25, -len - 0.06, Math.sin(a) * 0.25);
    g.add(tipB);
  }

  // Nerve net radial lines on bell surface (8 faint lines)
  const nerveMat = new THREE.MeshBasicMaterial({
    color: C.jellyGlow, transparent: true, opacity: 0.12
  });
  for (let ni = 0; ni < 8; ni++) {
    const na = (ni / 8) * 6.28;
    const nerve = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, 0.4, 3), nerveMat);
    nerve.position.set(Math.cos(na) * 0.2, 0.05, Math.sin(na) * 0.2);
    nerve.rotation.z = Math.PI / 2 - 0.3; nerve.rotation.y = -na; g.add(nerve);
  }

  // Bell margin lappets (tiny frilly bumps at rim edge)
  const lappetMat = new THREE.MeshStandardMaterial({
    color: C.jellyBell, emissive: C.jellyGlow, emissiveIntensity: 0.6,
    transparent: true, opacity: 0.4
  });
  for (let lpi = 0; lpi < 10; lpi++) {
    const la = (lpi / 10) * 6.28;
    const lappet = new THREE.Mesh(new THREE.SphereGeometry(0.02, 3, 3), lappetMat);
    lappet.scale.set(1, 0.5, 0.8);
    lappet.position.set(Math.cos(la) * 0.46, -0.04, Math.sin(la) * 0.46);
    g.add(lappet);
  }

  // Oral arm (central thicker feeding tentacle)
  const oralMat = new THREE.MeshStandardMaterial({
    color: C.jellyTent, emissive: C.jellyGlow, emissiveIntensity: 0.5,
    transparent: true, opacity: 0.35
  });
  const oral = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.01, 0.35, 4), oralMat);
  oral.position.y = -0.2; g.add(oral);

  // Mucus drip beads (3 tiny spheres on tentacle tips)
  const mucusMat = new THREE.MeshBasicMaterial({
    color: 0xddffff, transparent: true, opacity: 0.4
  });
  for (let mui = 0; mui < 3; mui++) {
    const mua = (mui / 3) * 6.28;
    const mucus = new THREE.Mesh(new THREE.SphereGeometry(0.008, 3, 3), mucusMat);
    mucus.position.set(Math.cos(mua) * 0.25, -0.55 - sr() * 0.3, Math.sin(mua) * 0.25);
    g.add(mucus);
  }

  g.position.set(x, y, z); scene.add(g);
  return {
    group: g, bellMat: bellMat, phase: sr() * 6.28, driftAng: sr() * 6.28,
    homeX: x, homeZ: z, floatY: y, wobble: 0.5 + sr() * 0.5,
    _init: true, _state: 'drift', _stT: 20 + Math.random() * 30,
    _migrateAng: 0, _pulseSync: 0
  };
}

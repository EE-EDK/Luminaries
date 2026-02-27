import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Thornbloom — Fantasy flower with translucent glowing orb center,
// spiky protrusions, thorns along stem, and dark crimson petals
// ================================================================

export function makeThornbloom(x, z) {
  const g = new THREE.Group();
  const h = 1.0 + sr() * 0.8; // stem height 1.0-1.8m
  const orbR = 0.25 + sr() * 0.15; // orb radius

  // --- Stem: thick, dark green ---
  const stemMat = new THREE.MeshStandardMaterial({
    color: C.thornStem, roughness: 0.8,
    emissive: 0x0a1a10, emissiveIntensity: 0.1
  });
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.07, h, 5), stemMat
  );
  stem.position.y = h / 2;
  g.add(stem);

  // --- Thorns along stem (4-6) ---
  const thornMat = new THREE.MeshStandardMaterial({
    color: C.thornSpike, roughness: 0.6
  });
  const thornN = 4 + Math.floor(sr() * 3);
  for (let i = 0; i < thornN; i++) {
    const ty = h * 0.15 + (i / thornN) * h * 0.6;
    const ta = (i / thornN) * 6.28 + sr() * 1.0;
    const thorn = new THREE.Mesh(
      new THREE.ConeGeometry(0.015, 0.08 + sr() * 0.04, 3), thornMat
    );
    thorn.position.set(
      Math.cos(ta) * 0.06, ty, Math.sin(ta) * 0.06
    );
    thorn.rotation.z = (ta < 3.14 ? 1.3 : -1.3) + sr() * 0.2;
    thorn.rotation.y = ta;
    g.add(thorn);
  }

  // --- Translucent orb center (the core feature) ---
  const orbMat = new THREE.MeshStandardMaterial({
    color: C.thornOrb, emissive: C.thornOrbGlow,
    emissiveIntensity: 0.8,
    transparent: true, opacity: 0.35,
    roughness: 0.1, metalness: 0.3
  });
  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(orbR, 12, 10), orbMat
  );
  orb.position.y = h + orbR * 0.5;
  g.add(orb);

  // --- Inner core (brighter, smaller sphere inside orb) ---
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xffffcc, emissive: C.thornOrbGlow,
    emissiveIntensity: 1.2,
    transparent: true, opacity: 0.6,
    roughness: 0.0, metalness: 0.1
  });
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(orbR * 0.35, 8, 6), coreMat
  );
  core.position.y = h + orbR * 0.5;
  g.add(core);

  // --- Haze glow around orb ---
  const hazeMat = new THREE.MeshBasicMaterial({
    color: C.thornOrbGlow, transparent: true, opacity: 0.06,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const haze = new THREE.Mesh(
    new THREE.SphereGeometry(orbR * 2.0, 8, 6), hazeMat
  );
  haze.position.y = h + orbR * 0.5;
  g.add(haze);

  // --- Spiky protrusions radiating from orb (6-8) ---
  const spikeMat = new THREE.MeshStandardMaterial({
    color: C.thornSpike, emissive: C.thornOrbGlow,
    emissiveIntensity: 0.3, roughness: 0.5
  });
  const spikeN = 6 + Math.floor(sr() * 3);
  for (let i = 0; i < spikeN; i++) {
    const sa = (i / spikeN) * 6.28 + sr() * 0.3;
    const sElev = (sr() - 0.5) * 1.2; // elevation angle variation
    const sLen = 0.3 + sr() * 0.3;
    const spike = new THREE.Mesh(
      new THREE.ConeGeometry(0.018, sLen, 4), spikeMat
    );
    spike.position.set(
      Math.cos(sa) * orbR * 0.8,
      h + orbR * 0.5 + Math.sin(sElev) * orbR * 0.5,
      Math.sin(sa) * orbR * 0.8
    );
    // Point outward from center
    spike.rotation.z = -sElev + (sa < 3.14 ? 1.4 : -1.4);
    spike.rotation.y = sa;
    g.add(spike);
  }

  // --- Petals: dark crimson curved plates around orb (4-5) ---
  const petalMat = new THREE.MeshStandardMaterial({
    color: C.thornPetal, emissive: 0x330a18,
    emissiveIntensity: 0.15,
    transparent: true, opacity: 0.7,
    roughness: 0.6, side: THREE.DoubleSide
  });
  const petalN = 4 + Math.floor(sr() * 2);
  for (let i = 0; i < petalN; i++) {
    const pa = (i / petalN) * 6.28 + sr() * 0.3;
    const pLen = 0.2 + sr() * 0.15;
    const petal = new THREE.Mesh(
      new THREE.PlaneGeometry(pLen, pLen * 1.5), petalMat
    );
    petal.position.set(
      Math.cos(pa) * (orbR + 0.05),
      h + orbR * 0.3 - sr() * 0.1,
      Math.sin(pa) * (orbR + 0.05)
    );
    petal.rotation.y = -pa;
    petal.rotation.x = -0.4 - sr() * 0.3; // droop outward
    g.add(petal);
  }

  // --- Small base leaves (2) ---
  const leafMat = new THREE.MeshStandardMaterial({
    color: 0x1a3818, emissive: 0x0a1a0a, emissiveIntensity: 0.05,
    side: THREE.DoubleSide
  });
  for (let i = 0; i < 2; i++) {
    const la = sr() * 6.28;
    const leaf = new THREE.Mesh(
      new THREE.PlaneGeometry(0.15, 0.25), leafMat
    );
    leaf.position.set(
      Math.cos(la) * 0.12, h * 0.3, Math.sin(la) * 0.12
    );
    leaf.rotation.y = -la;
    leaf.rotation.x = -0.8;
    g.add(leaf);
  }

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, orbMat: orbMat, hazeMat: hazeMat, phase: sr() * 6.28, x: x, z: z };
}

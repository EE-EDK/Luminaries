// --- Will-o'-Wisp (luminous companion — enhanced detail) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makeWisp(x, y, z) {
  const g = new THREE.Group();
  // Core bright sphere
  const coreMat = new THREE.MeshBasicMaterial({ color: C.wispCore });
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 4), coreMat);
  g.add(core);
  // Inner faceted crystal (icosahedron inside core for sparkle)
  const facetMat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 0.7, wireframe: true
  });
  const facet = new THREE.Mesh(new THREE.IcosahedronGeometry(0.06, 0), facetMat);
  g.add(facet);
  // Inner glow shell
  const glowMat = new THREE.MeshBasicMaterial({
    color: C.wispGlow, transparent: true, opacity: 0.5
  });
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.18, 6, 4), glowMat);
  g.add(glow);
  // Halo ring (thin torus around equator)
  const haloMat = new THREE.MeshBasicMaterial({
    color: C.wispGlow, transparent: true, opacity: 0.25
  });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.008, 4, 12), haloMat);
  halo.rotation.x = Math.PI / 2; g.add(halo);
  // Outer haze
  const hazeMat = new THREE.MeshBasicMaterial({
    color: C.wispTrail, transparent: true, opacity: 0.15
  });
  const haze = new THREE.Mesh(new THREE.SphereGeometry(0.35, 5, 4), hazeMat);
  g.add(haze);
  // Tiny sparkle orbiter
  const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
  const spark = new THREE.Mesh(new THREE.SphereGeometry(0.02, 3, 3), sparkMat);
  spark.position.set(0.15, 0, 0);
  g.add(spark);
  // Trailing ember motes (3 tiny dots behind — animated)
  const emberMat = new THREE.MeshBasicMaterial({ color: C.wispCore, transparent: true, opacity: 0.35 });
  const embers = [];
  for (let ei = 0; ei < 3; ei++) {
    const ember = new THREE.Mesh(new THREE.SphereGeometry(0.01, 3, 3), emberMat);
    ember.position.set((sr() - 0.5) * 0.1, -0.1 - ei * 0.08, (sr() - 0.5) * 0.1);
    g.add(ember);
    embers.push(ember);
  }

  // Plasma tendrils (3 curved filament arcs radiating from core — animated)
  const plasmaMat = new THREE.MeshBasicMaterial({
    color: C.wispGlow, transparent: true, opacity: 0.18
  });
  const tendrils = [];
  for (let pi = 0; pi < 3; pi++) {
    const pa = (pi / 3) * 6.28 + sr() * 0.5;
    const pLen = 0.15 + sr() * 0.1;
    const plasma = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.001, pLen, 3), plasmaMat);
    plasma.position.set(Math.cos(pa) * 0.1, sr() * 0.08, Math.sin(pa) * 0.1);
    plasma.rotation.z = Math.PI / 3 * ((pa < 3.14) ? 1 : -1); plasma.rotation.y = pa;
    g.add(plasma);
    tendrils.push({ mesh: plasma, baseAng: pa });
  }

  // Secondary halo (tilted at different angle)
  const halo2Mat = new THREE.MeshBasicMaterial({
    color: C.wispGlow, transparent: true, opacity: 0.12
  });
  const halo2 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.005, 4, 10), halo2Mat);
  halo2.rotation.x = 1.2; halo2.rotation.z = 0.8; g.add(halo2);

  // Core surface flicker spots (tiny bright patches)
  const flickMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
  for (let fi = 0; fi < 4; fi++) {
    const fa = sr() * 6.28, fel = sr() * 0.8;
    const flick = new THREE.Mesh(new THREE.SphereGeometry(0.006, 3, 3), flickMat);
    flick.position.set(Math.cos(fa) * 0.06, Math.sin(fel) * 0.06, Math.sin(fa) * 0.06);
    g.add(flick);
  }

  // Micro-spark chain (tiny connected dots trailing downward)
  const chainMat = new THREE.MeshBasicMaterial({ color: C.wispCore, transparent: true, opacity: 0.2 });
  for (let ci = 0; ci < 4; ci++) {
    const chain = new THREE.Mesh(new THREE.SphereGeometry(0.004, 3, 3), chainMat);
    chain.position.set(0.03 + sr() * 0.04, -0.05 - ci * 0.04, sr() * 0.04);
    g.add(chain);
  }

  g.scale.setScalar(0.5);
  g.position.set(x, y, z); scene.add(g);
  return {
    group: g, glowMat, hazeMat, embers, tendrils, plasmaMat, facet, halo, halo2,
    phase: sr() * 6.28,
    targetX: x, targetY: y, targetZ: z, velX: 0, velY: 0, velZ: 0, scatter: 0
  };
}

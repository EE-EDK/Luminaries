// --- Bubble Sprite (enhanced drifting iridescent) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { GEO } from '../../core/geometries.js';

export function makeBubble(x, y, z) {
  const g = new THREE.Group();
  // Main sphere
  const shellMat = new THREE.MeshStandardMaterial({
    color: C.bubbleIris, emissive: C.bubbleIris, emissiveIntensity: 0.15,
    transparent: true, opacity: 0.25, roughness: 0.0, metalness: 0.6
  });
  const shell = new THREE.Mesh(GEO.bubble, shellMat);
  g.add(shell);
  // Surface swirl bands (2 thin torus rings at different angles)
  const swirlMat = new THREE.MeshBasicMaterial({
    color: 0xeeccff, transparent: true, opacity: 0.1
  });
  const swirl1 = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.003, 4, 10), swirlMat);
  swirl1.rotation.x = 0.5; swirl1.rotation.y = sr() * 3; g.add(swirl1);
  const swirl2 = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.003, 4, 10), swirlMat);
  swirl2.rotation.x = -0.8; swirl2.rotation.z = 1.2; g.add(swirl2);
  // Highlight spot (fake specular — primary)
  const shineMat = new THREE.MeshBasicMaterial({
    color: C.bubbleShine, transparent: true, opacity: 0.5
  });
  const shine = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 3), shineMat);
  shine.position.set(0.05, 0.07, 0.08); g.add(shine);
  // Secondary highlight (opposite side, dimmer)
  const shine2Mat = new THREE.MeshBasicMaterial({
    color: 0xeeeeff, transparent: true, opacity: 0.2
  });
  const shine2 = new THREE.Mesh(new THREE.SphereGeometry(0.025, 3, 3), shine2Mat);
  shine2.position.set(-0.06, -0.04, -0.06); g.add(shine2);
  // Inner prismatic core (tiny colored sphere offset from center)
  const prismMat = new THREE.MeshBasicMaterial({
    color: 0xffaaee, transparent: true, opacity: 0.12
  });
  const prism = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 3), prismMat);
  prism.position.set(0.02, -0.02, 0.01); g.add(prism);
  // Inner rainbow tint
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0xffeeff, transparent: true, opacity: 0.08
  });
  const inner = new THREE.Mesh(new THREE.SphereGeometry(0.12, 5, 4), innerMat);
  g.add(inner);

  // Film thickness bands (horizontal color gradient rings)
  const filmColors = [0xffccdd, 0xccddff, 0xddffcc];
  for (let fbi = 0; fbi < 3; fbi++) {
    const filmMat = new THREE.MeshBasicMaterial({
      color: filmColors[fbi], transparent: true, opacity: 0.06
    });
    const film = new THREE.Mesh(new THREE.TorusGeometry(0.14 - fbi * 0.02, 0.002, 4, 8), filmMat);
    film.position.y = -0.04 + fbi * 0.04; film.rotation.x = Math.PI / 2; g.add(film);
  }

  // Micro-reflection dots (3 tiny bright specks scattered on shell)
  const refMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });
  for (let rfi = 0; rfi < 3; rfi++) {
    const rfa = sr() * 6.28, rfe = sr() * Math.PI - Math.PI / 2;
    const ref = new THREE.Mesh(new THREE.SphereGeometry(0.003, 3, 3), refMat);
    ref.position.set(Math.cos(rfa) * Math.cos(rfe) * 0.14, Math.sin(rfe) * 0.14, Math.sin(rfa) * Math.cos(rfe) * 0.14);
    g.add(ref);
  }

  // Trapped air speck (tiny darker sphere inside)
  const airMat = new THREE.MeshBasicMaterial({ color: 0xaabbcc, transparent: true, opacity: 0.1 });
  const air = new THREE.Mesh(new THREE.SphereGeometry(0.015, 3, 3), airMat);
  air.position.set((sr() - 0.5) * 0.04, (sr() - 0.5) * 0.04, (sr() - 0.5) * 0.04); g.add(air);

  // Bottom gravity drip bulge (slight thickening at base)
  const dripMat = new THREE.MeshBasicMaterial({
    color: C.bubbleIris, transparent: true, opacity: 0.15
  });
  const drip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 3), dripMat);
  drip.scale.set(1.3, 0.6, 1.3); drip.position.y = -0.12; g.add(drip);

  const sc = 0.6 + sr() * 0.8;
  g.scale.setScalar(sc);
  g.position.set(x, y, z); scene.add(g);
  return {
    group: g, shellMat: shellMat, phase: sr() * 6.28,
    driftAng: sr() * 6.28, driftSpeed: 0.3 + sr() * 0.5, floatY: y,
    homeX: x, homeZ: z, bobAmp: 0.3 + sr() * 0.4, popped: false, popTimer: 0, sc: sc
  };
}

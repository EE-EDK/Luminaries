import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// CorpseBloom — Large exotic flower resembling a corpse flower,
// with dark spathe petal, glowing spadix column, orbiting flies
// ================================================================

export function makeCorpseBloom(x, z) {
  const g = new THREE.Group();
  const h = 1.5 + sr() * 1.0; // 1.5-2.5m
  const spadixH = h * 0.7;
  const spatheW = 0.4 + sr() * 0.2;

  // --- Thick fleshy stem ---
  const stemMat = new THREE.MeshStandardMaterial({
    color: C.corpseLeaf, roughness: 0.75,
    emissive: 0x0a1a0a, emissiveIntensity: 0.05
  });
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.06, 0.1, h * 0.5, 6), stemMat
  );
  stem.position.y = h * 0.25;
  g.add(stem);

  // --- Spathe petal (large curved dark red cup) ---
  const spatheMat = new THREE.MeshStandardMaterial({
    color: C.corpseSpathe, emissive: 0x220a10,
    emissiveIntensity: 0.08,
    transparent: true, opacity: 0.85,
    roughness: 0.5, side: THREE.DoubleSide
  });
  // Use a cone-like shape for the spathe cup
  const spatheGeo = new THREE.ConeGeometry(spatheW, h * 0.5, 8, 1, true);
  const spathe = new THREE.Mesh(spatheGeo, spatheMat);
  spathe.position.y = h * 0.55;
  spathe.scale.set(1, 1, 1);
  g.add(spathe);

  // Spathe rim (torus for the lip)
  const rimMat = new THREE.MeshStandardMaterial({
    color: C.corpseSpathe, emissive: C.corpseGlow,
    emissiveIntensity: 0.1, roughness: 0.4
  });
  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(spatheW * 0.95, 0.02, 6, 12), rimMat
  );
  rim.position.y = h * 0.8;
  rim.rotation.x = Math.PI / 2;
  g.add(rim);

  // --- Central spadix column (the glowing tower) ---
  const columnMat = new THREE.MeshStandardMaterial({
    color: C.corpseColumn, emissive: C.corpseGlow,
    emissiveIntensity: 0.5,
    transparent: true, opacity: 0.8,
    roughness: 0.3
  });
  const spadix = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.06, spadixH, 6), columnMat
  );
  spadix.position.y = h * 0.4 + spadixH * 0.5;
  g.add(spadix);

  // Spadix glow haze
  const hazeMat = new THREE.MeshBasicMaterial({
    color: C.corpseGlow, transparent: true, opacity: 0.04,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const haze = new THREE.Mesh(
    new THREE.SphereGeometry(spatheW * 1.2, 6, 4), hazeMat
  );
  haze.position.y = h * 0.65;
  g.add(haze);

  // --- Spadix texture bumps (tiny nodules) ---
  for (let i = 0; i < 5; i++) {
    const na = sr() * 6.28;
    const ny = h * 0.45 + sr() * spadixH * 0.6;
    const nodule = new THREE.Mesh(
      new THREE.SphereGeometry(0.01, 3, 3),
      new THREE.MeshStandardMaterial({
        color: C.corpseGlow, emissive: C.corpseGlow,
        emissiveIntensity: 0.3
      })
    );
    nodule.position.set(Math.cos(na) * 0.05, ny, Math.sin(na) * 0.05);
    g.add(nodule);
  }

  // --- Orbiting flies (small dark dots) ---
  const flyMat = new THREE.MeshBasicMaterial({
    color: 0x111111, transparent: true, opacity: 0.7
  });
  const flies = [];
  const flyN = 3 + Math.floor(sr() * 3);
  const spadixY = h * 0.7; // reference height for fly orbit
  for (let i = 0; i < flyN; i++) {
    const fly = new THREE.Mesh(
      new THREE.SphereGeometry(0.008, 3, 3), flyMat
    );
    fly.position.set(0, spadixY, 0);
    g.add(fly);
    flies.push(fly);
  }

  // --- Base leaves (2-3 large) ---
  const leafMat = new THREE.MeshStandardMaterial({
    color: C.corpseLeaf, emissive: 0x0a1a08,
    emissiveIntensity: 0.04, side: THREE.DoubleSide
  });
  const leafN = 2 + Math.floor(sr() * 2);
  for (let i = 0; i < leafN; i++) {
    const la = (i / leafN) * 6.28 + sr() * 0.5;
    const leaf = new THREE.Mesh(
      new THREE.PlaneGeometry(0.25 + sr() * 0.1, 0.35 + sr() * 0.1), leafMat
    );
    leaf.position.set(Math.cos(la) * 0.18, h * 0.15, Math.sin(la) * 0.18);
    leaf.rotation.y = -la;
    leaf.rotation.x = -0.6 - sr() * 0.3;
    g.add(leaf);
  }

  // --- Veiny root mound at base ---
  const moundMat = new THREE.MeshStandardMaterial({
    color: 0x1a2818, roughness: 0.9,
    emissive: 0x050a05, emissiveIntensity: 0.03
  });
  const mound = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 6, 4), moundMat
  );
  mound.scale.set(1.5, 0.4, 1.5);
  mound.position.y = 0.03;
  g.add(mound);

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, columnMat, hazeMat, flies, spadixY, phase: sr() * 6.28, x, z };
}

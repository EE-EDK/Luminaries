import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// OrbBush — Dense bush with clusters of small pink glowing orbs
// connected by thin filament stems, floating above the foliage
// ================================================================

export function makeOrbBush(x, z) {
  const g = new THREE.Group();
  const bushR = 0.3 + sr() * 0.15;
  const bushH = 0.3 + sr() * 0.2;

  // --- Bush base (5-8 overlapping leaf clusters) ---
  const bushMat = new THREE.MeshStandardMaterial({
    color: C.orbBushLeaf, roughness: 0.8,
    emissive: 0x0a1a0a, emissiveIntensity: 0.06
  });
  const clusterN = 5 + Math.floor(sr() * 4);
  for (let i = 0; i < clusterN; i++) {
    const ca = sr() * 6.28;
    const cr = sr() * bushR * 0.6;
    const cSize = 0.1 + sr() * 0.08;
    const cluster = new THREE.Mesh(
      new THREE.SphereGeometry(cSize, 5, 4), bushMat
    );
    cluster.scale.set(1.2, 0.6, 1.2);
    cluster.position.set(
      Math.cos(ca) * cr,
      bushH * 0.4 + sr() * bushH * 0.3,
      Math.sin(ca) * cr
    );
    g.add(cluster);
  }

  // --- Small leaves on bush surface ---
  const leafMat = new THREE.MeshStandardMaterial({
    color: C.orbBushStem, emissive: 0x0a1a0a,
    emissiveIntensity: 0.04, side: THREE.DoubleSide
  });
  for (let i = 0; i < 6; i++) {
    const la = sr() * 6.28;
    const lr = bushR * 0.5 + sr() * bushR * 0.3;
    const leaf = new THREE.Mesh(
      new THREE.PlaneGeometry(0.06, 0.08), leafMat
    );
    leaf.position.set(
      Math.cos(la) * lr,
      bushH * 0.3 + sr() * 0.15,
      Math.sin(la) * lr
    );
    leaf.rotation.set(sr() * 0.5, -la, sr() * 0.3);
    g.add(leaf);
  }

  // --- Glowing orbs on thin filaments ---
  const orbMats = [];
  const orbN = 6 + Math.floor(sr() * 5); // 6-10 orbs
  const filMat = new THREE.MeshStandardMaterial({
    color: C.orbBushStem, roughness: 0.7,
    emissive: C.orbBushGlow, emissiveIntensity: 0.05
  });

  for (let i = 0; i < orbN; i++) {
    const oa = sr() * 6.28;
    const od = sr() * bushR * 0.7;
    const oh = bushH + 0.15 + sr() * 0.3; // above the bush
    const orbSize = 0.02 + sr() * 0.015;

    // Filament stem
    const fH = oh - bushH * 0.3;
    const fil = new THREE.Mesh(
      new THREE.CylinderGeometry(0.003, 0.005, fH, 3), filMat
    );
    fil.position.set(
      Math.cos(oa) * od,
      bushH * 0.3 + fH / 2,
      Math.sin(oa) * od
    );
    // Slight lean
    fil.rotation.z = (sr() - 0.5) * 0.3;
    fil.rotation.x = (sr() - 0.5) * 0.3;
    g.add(fil);

    // Glowing orb
    const orbMat = new THREE.MeshStandardMaterial({
      color: C.orbBushOrb, emissive: C.orbBushGlow,
      emissiveIntensity: 0.5 + sr() * 0.3,
      transparent: true, opacity: 0.7,
      roughness: 0.2
    });
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(orbSize, 5, 4), orbMat
    );
    orb.position.set(
      Math.cos(oa) * od + (sr() - 0.5) * 0.03,
      oh,
      Math.sin(oa) * od + (sr() - 0.5) * 0.03
    );
    g.add(orb);
    orbMats.push(orbMat);

    // Tiny haze around each orb
    const haze = new THREE.Mesh(
      new THREE.SphereGeometry(orbSize * 2.5, 4, 3),
      new THREE.MeshBasicMaterial({
        color: C.orbBushGlow, transparent: true, opacity: 0.03,
        blending: THREE.AdditiveBlending, depthWrite: false
      })
    );
    haze.position.copy(orb.position);
    g.add(haze);
  }

  // --- Ground debris ---
  const debrisMat = new THREE.MeshStandardMaterial({
    color: 0x1a2018, roughness: 0.9
  });
  for (let i = 0; i < 3; i++) {
    const da = sr() * 6.28, dd = bushR + sr() * 0.1;
    const debris = new THREE.Mesh(
      new THREE.SphereGeometry(0.015, 3, 3), debrisMat
    );
    debris.position.set(Math.cos(da) * dd, 0.01, Math.sin(da) * dd);
    debris.scale.set(1, 0.4, 1);
    g.add(debris);
  }

  g.position.set(x, 0, z);
  scene.add(g);
  return { group: g, orbMats, phase: sr() * 6.28, x, z };
}

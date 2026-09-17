import { ConeGeometry, CylinderGeometry, Group, PlaneGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { spawnDandSeed } from '../../particles/seeds.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';

// ================================================================
// Dandelion puff — DANDELION_N plants, 2 meshes each (was 55)
// ================================================================
// Rosette, fuzzy stem and leaf in one shared-material mesh; the seed head
// (sphere, dew, eight tufts, filaments, pappus fans) in one per-plant mesh
// that turns slowly in the wind and is hidden as a whole when the player
// walks through it. That replaces the old index-based hide, which removed
// the stem and two rosette leaves instead of the seeds.

const _plantMat = roleMaterial('solid', { roughness: 0.8, doubleSide: true });

export function makeDandelion(x, z) {
  const g = new Group();
  const h = 0.35 + sr() * 0.45;
  const phase = sr() * 6.28;
  const sway = swayByHeight(0, h + 0.1, 0.6);
  const b = createBaker();
  const headMat = roleMaterial('glow', { emissive: C.dandSeedGlow, emissiveIntensity: 0.2, roughness: 0.8, doubleSide: true });
  const headPivot = [0, h + 0.05, 0];
  const spin = { mode: MOTION.SPIN, speed: 0.12 + sr() * 0.1, phase };

  // Basal rosette (3-4 toothed leaves flat on the ground)
  const rosN = 3 + Math.floor(sr() * 2);
  for (let ri = 0; ri < rosN; ri++) {
    const ra = (ri / rosN) * 6.28 + sr() * 0.3;
    b.add(new PlaneGeometry(0.08, 0.035), { role: 'plant', pos: [Math.cos(ra) * 0.05, 0.02, Math.sin(ra) * 0.05], rot: [-1.4, -ra, 0], color: 0x2a6028 });
  }
  // Stem, fuzz, grooves, trichomes, leaf
  b.add(new CylinderGeometry(0.008, 0.012, h, 5), { role: 'plant', pos: [0, h / 2, 0], color: C.dandStem, sway });
  for (let fi = 0; fi < 4; fi++) {
    b.add(new CylinderGeometry(0.002, 0.001, 0.02, 3), { role: 'plant', pos: [0.01, h * 0.2 + fi * h * 0.18, 0], rot: [0, 0, -0.8], color: 0xddddcc, opacity: 0.3, sway });
  }
  for (let gi = 0; gi < 3; gi++) {
    const ga = (gi / 3) * 6.28;
    b.add(new CylinderGeometry(0.001, 0.001, h * 0.7, 3), { role: 'plant', pos: [Math.cos(ga) * 0.01, h * 0.35, Math.sin(ga) * 0.01], color: 0x1a3010, sway });
  }
  for (let tri = 0; tri < 5; tri++) {
    const tY = h * 0.1 + sr() * h * 0.7, tA = sr() * 6.28;
    b.add(new CylinderGeometry(0.0008, 0.0008, 0.012, 3), { role: 'plant', pos: [Math.cos(tA) * 0.012, tY, Math.sin(tA) * 0.012], rot: [0, tA, (tA < 3.14 ? -0.8 : 0.8)], color: 0xccddbb, sway });
  }
  b.add(new PlaneGeometry(0.07, 0.03), { role: 'plant', pos: [0.03, h * 0.15, 0], rot: [0, 0, -0.4], color: C.fern, sway });
  // Achenes at the head base
  for (let ai = 0; ai < 4; ai++) {
    const aa = (ai / 4) * 6.28 + sr() * 0.5;
    b.add(new SphereGeometry(0.005, 3, 3), { role: 'plant', pos: [Math.cos(aa) * 0.04, h + 0.04, Math.sin(aa) * 0.04], scale: [0.6, 1.5, 0.6], color: 0x3a2a10, sway });
  }

  // Seed head — one mesh, spins slowly, tufts shimmer
  b.add(new SphereGeometry(0.07, 7, 6), { role: 'head', pos: headPivot, color: C.dandHead, emis: 1.0, opacity: 0.85, sway, pivot: headPivot, motion: spin });
  b.add(new SphereGeometry(0.012, 4, 3), { role: 'head', pos: [0.04, h + 0.07, 0.03], color: 0xeeffff, emis: 0.7, opacity: 0.5, sway, pivot: headPivot, motion: spin });
  for (let i = 0; i < 8; i++) {
    const ta = (i / 8) * 6.28 + sr() * 0.2;
    b.add(new ConeGeometry(0.015, 0.05, 3), { role: 'head', pos: [Math.cos(ta) * 0.06, h + 0.05 + sr() * 0.04, Math.sin(ta) * 0.06], rot: [(sr() - 0.5) * 0.6, 0, (sr() - 0.5) * 0.6], color: C.dandSeed, emis: 1.2, opacity: 0.7, sway, pivot: headPivot, motion: spin });
    b.add(new CylinderGeometry(0.001, 0.001, 0.03, 3), { role: 'head', pos: [Math.cos(ta) * 0.08, h + 0.08, Math.sin(ta) * 0.08], rot: [(sr() - 0.5) * 0.5, 0, (sr() - 0.5) * 0.5], color: 0xffffff, emis: 0.8, opacity: 0.3, sway, pivot: headPivot, motion: spin });
    for (let pfi = 0; pfi < 2; pfi++) {
      const pfA = ta + (pfi - 0.5) * 0.5;
      b.add(new CylinderGeometry(0.0008, 0.0008, 0.025, 3), { role: 'head', pos: [Math.cos(pfA) * 0.075, h + 0.09, Math.sin(pfA) * 0.075], rot: [(sr() - 0.5) * 0.8, 0, (sr() - 0.5) * 0.8], color: 0xeeeedd, emis: 0.6, opacity: 0.15, sway, pivot: headPivot, motion: spin });
    }
  }

  const m = b.build({ plant: _plantMat, head: headMat });
  g.add(m.plant, m.head);
  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, headMat, headMesh: m.head, x, z, h, dispersed: false, phase,
    seedCount: 8, regrowTimer: 0
  };
}

/**
 * @brief Burst the seeds and hide the head (regrows after 15-25 s).
 * @param {object} d dandelion record
 */
export function disperseDandelion(d) {
  if (d.dispersed) return;
  d.dispersed = true;
  for (let s = 0; s < d.seedCount; s++) spawnDandSeed(d.x, d.h + 0.05, d.z);
  d.headMesh.visible = false;
  d.regrowTimer = 15 + Math.random() * 10;
}

// --- Dandelion dispersal: walk-through triggers seed burst ---
export function updateDandelions(dandelions, dt, t, playerPos) {
  for (let i = 0; i < dandelions.length; i++) {
    const d = dandelions[i];
    if (!d.dispersed) {
      const dx = d.x - playerPos.x, dz = d.z - playerPos.z;
      if (dx * dx + dz * dz < 1.2) {
        disperseDandelion(d);
      } else {
        d.headMat.emissiveIntensity = 0.15 + Math.sin(t * 1.2 + d.phase) * 0.1;
      }
    } else {
      d.regrowTimer -= dt;
      if (d.regrowTimer <= 0) {
        d.dispersed = false;
        d.headMesh.visible = true;
        d.headMesh.scale.setScalar(0.3);
      }
    }
    // Regrowth: head scales back up over ~3 s
    if (!d.dispersed && d.headMesh.scale.x < 1) {
      const s = Math.min(1, d.headMesh.scale.x + dt * 0.25);
      d.headMesh.scale.setScalar(s);
    }
  }
}

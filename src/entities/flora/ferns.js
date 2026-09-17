import { CylinderGeometry, PlaneGeometry, SphereGeometry } from 'three';
import { C, FERN_N } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';
import { createInstancedFloraType } from '../_instancedFlora.js';

// ================================================================
// Fern — instanced (FERN_N plants, 6 baked variants, 2 draw calls each)
// ================================================================
// Fronds, leaflets, fiddlehead, roots, droplets. Wind sway, leaflet flutter
// and the fiddlehead's slow breathing all run in the vertex shader; the CPU
// only writes a per-plant glow tint when its sector changes.
//
// Legacy record shape preserved: { group, phase, glowMat, glowBase }.
// `curlMat` is intentionally absent — the fiddlehead's brightness is baked
// relative to the frond glow (1.5×) so one tint drives both.

const TEMPLATES = 6;
const MAX_PER_TEMPLATE = Math.ceil(FERN_N / TEMPLATES) + 24;

/** Tapered frond blade: PlaneGeometry narrowed toward the tip, gently cupped. */
function frondBlade(w, len) {
  const g = new PlaneGeometry(w, len, 1, 4);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const t = (p.getY(i) + len / 2) / len;          // 0 base … 1 tip
    p.setX(i, p.getX(i) * (1.0 - t * 0.85));        // taper
    p.setZ(i, -Math.abs(p.getX(i)) * 0.35 - t * t * 0.04); // cup + droop
  }
  g.translate(0, len / 2, 0);
  g.computeVertexNormals();
  return g;
}

function buildFernTemplate() {
  const b = createBaker();
  const frondCount = 3 + Math.floor(sr() * 2);
  const sway = swayByHeight(0.05, 0.75, 0.55);

  // Root clump + tendrils + soil (rigid)
  b.add(new SphereGeometry(0.06, 5, 3), { role: 'solid', pos: [0, 0.02, 0], scale: [1.5, 0.5, 1.5], color: 0x1a1208, emis: 0 });
  for (let ri = 0; ri < 3; ri++) {
    const ra = sr() * 6.28;
    b.add(new CylinderGeometry(0.003, 0.002, 0.08, 3), {
      role: 'solid', pos: [Math.cos(ra) * 0.06, 0.01, Math.sin(ra) * 0.06],
      rot: [0, ra, (ra < 3.14 ? 1 : -1) * 1.2], color: 0x1a1208, emis: 0
    });
  }
  for (let sci = 0; sci < 3; sci++) {
    b.add(new SphereGeometry(0.006, 3, 3), { role: 'solid', pos: [(sr() - 0.5) * 0.1, 0.005, (sr() - 0.5) * 0.1], color: 0x1a1208, emis: 0 });
  }

  for (let i = 0; i < frondCount; i++) {
    const ang = (i / frondCount) * 6.28 + sr() * 0.3;
    const tilt = -0.6 - sr() * 0.4;
    const bx = Math.cos(ang) * 0.15, bz = Math.sin(ang) * 0.15;
    const fPhase = sr() * 6.28;
    // Midrib
    b.add(new CylinderGeometry(0.004, 0.006, 0.55, 3), {
      role: 'solid', pos: [bx, 0.25, bz], rot: [tilt, -ang, 0], color: 0x1a4520, emis: 0, sway
    });
    // Blade (from base, so the taper/sway read correctly)
    b.add(frondBlade(0.13, 0.62), {
      role: 'solid', pos: [bx, 0.0, bz], rot: [tilt + 0.02, -ang, 0], color: C.fern, emis: 1.0, sway
    });
    // Leaflets — 8 alternating, fluttering about their own base
    for (let j = 0; j < 8; j++) {
      const fy = 0.06 + j * 0.065;
      const side = (j % 2 === 0) ? 1 : -1;
      const lx = Math.cos(ang) * (0.15 + 0.05), lz = Math.sin(ang) * (0.15 + 0.05 * side);
      b.add(new PlaneGeometry(0.07, 0.05), {
        role: 'solid', pos: [lx, fy, lz], rot: [-0.8, -ang, side * 0.5], color: C.fern, emis: 0.9, sway,
        motion: { mode: MOTION.FLUTTER, amp: 0.10, phase: fPhase + j * 0.9, speed: 2.2 + sr() * 0.8 }
      });
    }
    // Spore dots on the underside
    for (let sp = 0; sp < 3; sp++) {
      b.add(new SphereGeometry(0.008, 3, 3), {
        role: 'solid', pos: [Math.cos(ang) * 0.17, 0.12 + sp * 0.12 - 0.01, Math.sin(ang) * 0.17],
        color: 0x886622, emis: 0, sway
      });
    }
  }

  // Fiddlehead — breathes slowly
  const curlPhase = sr() * 6.28;
  b.add(new SphereGeometry(0.04, 5, 4), {
    role: 'glow', pos: [0, 0.35, 0], color: C.fernGlow, emis: 1.5, sway: 0.25,
    motion: { mode: MOTION.BREATHE, amp: 0.08, phase: curlPhase, speed: 1.1 }
  });
  b.add(new CylinderGeometry(0.006, 0.003, 0.06, 3), {
    role: 'glow', pos: [0.02, 0.37, 0], rot: [0, 0, -0.8], color: C.fernGlow, emis: 1.5, sway: 0.25,
    pivot: [0, 0.35, 0], motion: { mode: MOTION.BREATHE, amp: 0.08, phase: curlPhase, speed: 1.1 }
  });

  // Water droplets — glassy beads
  for (let dri = 0; dri < 3; dri++) {
    const dra = sr() * 6.28, drd = sr() * 0.2;
    b.add(new SphereGeometry(0.006 + sr() * 0.005, 4, 3), {
      role: 'glow', pos: [Math.cos(dra) * drd, 0.12 + sr() * 0.2, Math.sin(dra) * drd],
      color: 0xeeffff, emis: 0.5, opacity: 0.55, sway
    });
  }

  // One withered frond at the base
  const deadAng = sr() * 6.28;
  b.add(frondBlade(0.1, 0.4), {
    role: 'glow', pos: [Math.cos(deadAng) * 0.12, 0.03, Math.sin(deadAng) * 0.12],
    rot: [-1.3, deadAng, 0], color: 0x3a2a10, emis: 0, opacity: 0.6, sway: 0.1
  });

  // Stipe hairs
  for (let hi = 0; hi < 4; hi++) {
    b.add(new CylinderGeometry(0.001, 0.001, 0.015, 3), {
      role: 'glow', pos: [(sr() - 0.5) * 0.08, 0.08 + sr() * 0.15, (sr() - 0.5) * 0.08],
      rot: [0, 0, (sr() - 0.5) * 1.5], color: 0x2a4020, emis: 0, opacity: 0.3
    });
  }

  return { geos: b.buildGeometries(), meta: { frondCount } };
}

let _type = null;
function getType() {
  if (_type) return _type;
  _type = createInstancedFloraType({
    name: 'fern',
    templateCount: TEMPLATES,
    maxInstances: MAX_PER_TEMPLATE,
    seed: 30011,
    buildTemplate: buildFernTemplate,
    materials: {
      solid: roleMaterial('solid', { emissive: 0xffffff, roughness: 0.7, doubleSide: true }),
      glow: roleMaterial('glow', { emissive: 0xffffff, roughness: 0.3, metalness: 0.2, doubleSide: true })
    },
    glowKey: 'glowMat',
    glowColor: C.fernGlow,
    glowIntensity: 0.2
  });
  return _type;
}

/**
 * @brief Spawn a fern at (x, z). Returns the legacy record; populate.js sets group.position.y and slopeQ.
 * @param {number} x
 * @param {number} z
 */
export function makeFern(x, z) {
  const type = getType();
  const scale = 0.5 + sr() * 0.7;
  const rec = type.spawn(x, z, { scale, phase: sr() * 6.28 });
  rec.glowBase = 0.2;
  rec._baseScale = rec.group.scale.x;   // reactions scale relative to this (the old code reset every plant to scale 1)
  return rec;
}

/** @brief The instanced type (for tests / debug). */
export function getFernType() { return getType(); }

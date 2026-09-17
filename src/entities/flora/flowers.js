import { ConeGeometry, CylinderGeometry, PlaneGeometry, SphereGeometry } from 'three';
import { C, FLOWER_N } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';
import { createInstancedFloraType } from '../_instancedFlora.js';

// ================================================================
// Glowing flower — instanced (FLOWER_N plants, 6 variants, 2 draw calls each)
// ================================================================
// Stem, leaves, sepals, six cupped petals, glowing centre, stamens, pistil,
// nectar, pollen. Stamens quiver and pollen motes drift on the GPU; the
// whole plant sways with height weight and bends away from the player.
//
// Legacy record: { group, petalMat, phase, baseH }. `stamens` is absent —
// the stamen quiver moved to the vertex shader (updates/vegetation.js checks
// for it before touching it).

const TEMPLATES = 6;
const MAX_PER_TEMPLATE = Math.ceil(FLOWER_N / TEMPLATES) + 24;

/** Cupped petal: plane bent along its length so the six read as a bowl. */
function petalGeo(w, len) {
  const g = new PlaneGeometry(w, len, 2, 4);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const t = (p.getY(i) + len / 2) / len;
    const xn = p.getX(i) / (w * 0.5);
    p.setX(i, p.getX(i) * (0.55 + 0.45 * Math.sin(t * Math.PI)));   // rounded outline
    p.setZ(i, xn * xn * 0.008 + t * t * 0.02);                        // cup + curl up at tip
  }
  g.translate(0, len / 2, 0);
  g.computeVertexNormals();
  return g;
}

function buildFlowerTemplate() {
  const b = createBaker();
  const h = 0.25 + sr() * 0.4;
  const sway = swayByHeight(0, h + 0.05, 0.5);
  const headPivot = [0, h + 0.02, 0];

  // Stem + thorn nubs
  b.add(new CylinderGeometry(0.01, 0.015, h, 5), { role: 'solid', pos: [0, h / 2, 0], color: C.flowerStem, emis: 0, sway });
  for (let ti = 0; ti < 2; ti++) {
    b.add(new ConeGeometry(0.004, 0.012, 3), { role: 'solid', pos: [0.012, h * 0.25 + ti * h * 0.25, 0], rot: [0, 0, -1.2], color: C.flowerStem, emis: 0, sway });
  }
  // Leaves (two, opposite)
  b.add(new PlaneGeometry(0.06, 0.04), { role: 'solid', pos: [0.03, h * 0.3, 0], rot: [0, 0, -0.5], color: C.fern, emis: 0, sway });
  b.add(new PlaneGeometry(0.05, 0.035), { role: 'solid', pos: [-0.025, h * 0.5, 0.01], rot: [0, 0, 0.6], color: C.fern, emis: 0, sway });
  // Sepals + calyx
  for (let si = 0; si < 5; si++) {
    const sa = (si / 5) * 6.28 + 0.3;
    b.add(new PlaneGeometry(0.025, 0.02), { role: 'solid', pos: [Math.cos(sa) * 0.025, h - 0.005, Math.sin(sa) * 0.025], rot: [-1.2, -sa, 0], color: 0x1a6030, emis: 0, sway });
  }
  b.add(new CylinderGeometry(0.015, 0.02, 0.02, 5), { role: 'solid', pos: [0, h - 0.01, 0], color: 0x1a5520, emis: 0, sway });

  // Petals — five to seven cupped blades; each breathes open/closed very slightly
  const petalPhase = sr() * 6.28;
  const pw = 0.05 + sr() * 0.01, plen = 0.045 + sr() * 0.01;
  const petalN = 5 + Math.floor(sr() * 3);
  for (let i = 0; i < petalN; i++) {
    const pa = (i / petalN) * 6.28;
    b.add(petalGeo(pw, plen), {
      role: 'petal', pos: [Math.cos(pa) * 0.018, h + 0.008, Math.sin(pa) * 0.018],
      rot: [-0.85, -pa, 0], color: C.flower, emis: 1.0, opacity: 0.85, sway,
      pivot: headPivot, motion: { mode: MOTION.BREATHE, amp: 0.05, phase: petalPhase, speed: 0.9 }
    });
    // Petal vein lines
    for (let vi = 0; vi < 2; vi++) {
      b.add(new CylinderGeometry(0.001, 0.001, 0.03, 3), {
        role: 'petal', pos: [Math.cos(pa) * (0.025 + vi * 0.008), h + 0.012, Math.sin(pa) * (0.025 + vi * 0.008)],
        rot: [-0.8, -pa, (vi - 0.5) * 0.3], color: C.flowerGlow, emis: 0.4, opacity: 0.3, sway
      });
    }
  }
  // Petal-edge dew beads
  for (let pdi = 0; pdi < 4; pdi++) {
    const pda = (pdi / 4) * 6.28 + 0.3;
    b.add(new SphereGeometry(0.004, 3, 3), { role: 'petal', pos: [Math.cos(pda) * 0.045, h + 0.005, Math.sin(pda) * 0.045], color: 0xffffff, emis: 0.6, opacity: 0.4, sway });
  }

  // Glowing centre + nectar bead
  b.add(new SphereGeometry(0.02, 6, 5), { role: 'petal', pos: [0, h + 0.02, 0], color: 0xffffff, emis: 1.6, opacity: 1.0, sway });
  b.add(new SphereGeometry(0.006, 4, 3), { role: 'petal', pos: [0.005, h + 0.005, 0.005], color: 0xffeeaa, emis: 0.8, opacity: 0.6, sway });

  // Stamens — filament + pollen tip, quivering about their base
  for (let fi = 0; fi < 3; fi++) {
    const fa = (fi / 3) * 6.28 + 0.5;
    const base = [Math.cos(fa) * 0.012, h + 0.03, Math.sin(fa) * 0.012];
    const mo = { mode: MOTION.FLUTTER, amp: 0.12, phase: petalPhase + fi * 2.1, speed: 1.6 };
    b.add(new CylinderGeometry(0.002, 0.002, 0.025, 3), { role: 'petal', pos: [base[0], base[1] + 0.0125, base[2]], color: 0xffffaa, emis: 0.7, opacity: 0.8, sway, pivot: base, motion: mo });
    b.add(new SphereGeometry(0.005, 4, 3), { role: 'petal', pos: [base[0], base[1] + 0.028, base[2]], color: 0xffee44, emis: 1.0, opacity: 1.0, sway, pivot: base, motion: mo });
  }
  // Pistil + stigma
  b.add(new CylinderGeometry(0.002, 0.002, 0.03, 3), { role: 'petal', pos: [0, h + 0.035, 0], color: 0xeeff88, emis: 0.8, opacity: 1.0, sway });
  b.add(new SphereGeometry(0.005, 4, 3), { role: 'petal', pos: [0, h + 0.055, 0], color: 0xeeff88, emis: 0.8, opacity: 1.0, sway });

  // Pollen motes — drift in a slow orbit above the bloom
  for (let pi = 0; pi < 3; pi++) {
    const a = sr() * 6.28, r = 0.02 + sr() * 0.02;
    b.add(new SphereGeometry(0.005, 3, 3), {
      role: 'petal', pos: [Math.cos(a) * r, h + 0.06 + sr() * 0.04, Math.sin(a) * r], color: 0xffffcc, emis: 0.5, opacity: 0.35, sway,
      pivot: [0, h + 0.07, 0], motion: { mode: MOTION.ORBIT, amp: 0.01, phase: sr() * 6.28, speed: 0.4 + sr() * 0.3 }
    });
  }

  return { geos: b.buildGeometries(), meta: { h } };
}

let _type = null;
function getType() {
  if (_type) return _type;
  _type = createInstancedFloraType({
    name: 'flower',
    templateCount: TEMPLATES,
    maxInstances: MAX_PER_TEMPLATE,
    seed: 30211,
    buildTemplate: buildFlowerTemplate,
    materials: {
      solid: roleMaterial('solid', { emissive: 0xffffff, roughness: 0.75, doubleSide: true }),
      petal: roleMaterial('glow', { emissive: 0xffffff, roughness: 0.5, doubleSide: true })
    },
    glowKey: 'petalMat',
    glowColor: C.flowerGlow,
    glowIntensity: 0.6
  });
  return _type;
}

/**
 * @brief Spawn a flower at (x, z). Legacy record; populate.js sets group.position.y and slopeQ.
 * @param {number} x
 * @param {number} z
 */
export function makeFlower(x, z) {
  const type = getType();
  const rec = type.spawn(x, z, { scale: 0.85 + sr() * 0.35, phase: sr() * 6.28 });
  rec.baseH = rec.meta.h;
  rec._baseScale = rec.group.scale.x;   // reactions scale relative to this (the old code reset every plant to scale 1)
  rec.petalMat.emissiveIntensity = 0.4 + sr() * 0.4;
  return rec;
}

/** @brief The instanced type (for tests / debug). */
export function getFlowerType() { return getType(); }

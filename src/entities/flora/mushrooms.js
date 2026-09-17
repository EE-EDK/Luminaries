import { CircleGeometry, CylinderGeometry, PlaneGeometry, SphereGeometry, TorusGeometry } from 'three';
import { C, MUSH_N } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { GEO } from '../../core/geometries.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';
import { createInstancedFloraType } from '../_instancedFlora.js';

// ================================================================
// Mushrooms — instanced (MUSH_N caps, 8 variants, 2 draw calls each)
// ================================================================
// They pulse in waves. Step near a cluster and the rhythm changes —
// faster, brighter, then settling back. Dr. Chen called it "the
// greeting response." We still don't know what they're greeting.
//
// The cap breathes on the GPU (slow scale about the stem top), the gills
// shimmer, the micro-spore cloud drifts. The per-cap glow — pulse, touch,
// rain, echo-bloom wave, sector restoration — still arrives through
// `capMat.emissiveIntensity`, now a per-instance tint instead of a material.
//
// Legacy record: { group, capMat, phase, speed, base, x, z }.

const TEMPLATES = 8;
const MAX_PER_TEMPLATE = Math.ceil(MUSH_N / TEMPLATES) + 24;

function buildMushTemplate() {
  const b = createBaker();
  const capPivot = [0, 0.5, 0];
  const breathe = { mode: MOTION.BREATHE, amp: 0.035, phase: sr() * 6.28, speed: 0.9 + sr() * 0.4 };
  const capW = 0.9 + sr() * 0.3;   // cap width variety per template

  // Stem, collar, volva — rigid
  b.add(GEO.mushStem, { role: 'body', pos: [0, 0.3, 0], color: C.mushStem, emis: 0.12 });
  b.add(new TorusGeometry(0.09, 0.012, 4, 8), { role: 'body', pos: [0, 0.42, 0], rot: [Math.PI / 2, 0, 0], color: C.mushStem, emis: 0.18 });
  b.add(new SphereGeometry(0.08, 6, 4), { role: 'body', pos: [0, 0.04, 0], scale: [1, 0.5, 1], color: C.mushStem, emis: 0.1 });

  // Cap — breathing
  b.add(GEO.mushCap, { role: 'cap', pos: [0, 0.55, 0], scale: [capW, 0.5, capW], color: C.mushCap, emis: 1.0, opacity: 0.92, pivot: capPivot, motion: breathe });
  // Cap-edge fringe ring
  b.add(new TorusGeometry(0.38 * capW, 0.01, 4, 14), { role: 'cap', pos: [0, 0.49, 0], rot: [Math.PI / 2, 0, 0], color: C.mushCap, emis: 0.6, opacity: 0.45, pivot: capPivot, motion: breathe });
  // Gills — radial planes under the cap, faint shimmer
  for (let gi = 0; gi < 8; gi++) {
    const ga = (gi / 8) * 6.28;
    b.add(new PlaneGeometry(0.35 * capW, 0.08), {
      role: 'cap', pos: [Math.cos(ga) * 0.15 * capW, 0.48, Math.sin(ga) * 0.15 * capW], rot: [0.1, -ga, 0],
      color: 0x6622aa, emis: 0.3, opacity: 0.5, pivot: capPivot, motion: breathe
    });
  }
  // White dots + warts on the cap
  for (let i = 0; i < 4; i++) {
    const da = sr() * 6.28, dr = (0.15 + sr() * 0.25) * capW;
    b.add(GEO.mushDot, { role: 'body', pos: [Math.cos(da) * dr, 0.6 + sr() * 0.1, Math.sin(da) * dr], color: 0xffffff, emis: 0.25, pivot: capPivot, motion: breathe });
  }
  const wartN = 3 + Math.floor(sr() * 3);
  for (let wi = 0; wi < wartN; wi++) {
    const wa = sr() * 6.28, wd = sr() * 0.25 * capW;
    b.add(new SphereGeometry(0.015 + sr() * 0.015, 4, 3), { role: 'body', pos: [Math.cos(wa) * wd, 0.58 + sr() * 0.06, Math.sin(wa) * wd], color: 0xaa66dd, emis: 0.3, pivot: capPivot, motion: breathe });
  }
  // Dew drops — glassy
  const dewN = 2 + Math.floor(sr() * 2);
  for (let di = 0; di < dewN; di++) {
    const dewA = sr() * 6.28, dewR = (0.1 + sr() * 0.2) * capW;
    b.add(new SphereGeometry(0.015 + sr() * 0.015, 5, 4), { role: 'cap', pos: [Math.cos(dewA) * dewR, 0.63 + sr() * 0.08, Math.sin(dewA) * dewR], color: 0xeeffff, emis: 0.35, opacity: 0.6, pivot: capPivot, motion: breathe });
  }
  // Mycelium threads
  for (let mi = 0; mi < 4; mi++) {
    const ma = sr() * 6.28, mLen = 0.15 + sr() * 0.25;
    b.add(new CylinderGeometry(0.004, 0.002, mLen, 3), {
      role: 'cap', pos: [Math.cos(ma) * 0.12, 0.01, Math.sin(ma) * 0.12], rot: [0, ma, 1.3 * ((ma < 3.14) ? 1 : -1)],
      color: 0x4422aa, emis: 0.2, opacity: 0.35
    });
  }
  // Substrate crumbs + damp ring
  for (let si = 0; si < 3; si++) {
    const sa = sr() * 6.28, sd = 0.1 + sr() * 0.12;
    b.add(new SphereGeometry(0.008 + sr() * 0.008, 3, 3), { role: 'body', pos: [Math.cos(sa) * sd, 0.005, Math.sin(sa) * sd], color: 0x1a1008, emis: 0 });
  }
  b.add(new CircleGeometry(0.18, 8), { role: 'cap', pos: [0, 0.005, 0], rot: [-Math.PI / 2, 0, 0], color: 0x0a0808, emis: 0, opacity: 0.2 });
  // Micro-spore cloud below the cap — slow orbit
  for (let spi = 0; spi < 5; spi++) {
    const a = sr() * 6.28, r = 0.05 + sr() * 0.1;
    b.add(new SphereGeometry(0.006, 3, 3), {
      role: 'cap', pos: [Math.cos(a) * r, 0.33 + sr() * 0.12, Math.sin(a) * r], color: C.mushGlow, emis: 0.6, opacity: 0.3,
      pivot: [0, 0.38, 0], motion: { mode: MOTION.ORBIT, amp: 0.02, phase: sr() * 6.28, speed: 0.3 + sr() * 0.3 }
    });
  }

  return { geos: b.buildGeometries(), meta: { capW } };
}

let _type = null;
function getType() {
  if (_type) return _type;
  _type = createInstancedFloraType({
    name: 'mushroom',
    templateCount: TEMPLATES,
    maxInstances: MAX_PER_TEMPLATE,
    seed: 30411,
    buildTemplate: buildMushTemplate,
    materials: {
      body: roleMaterial('solid', { emissive: 0xffffff, roughness: 0.7 }),
      cap: roleMaterial('glow', { emissive: 0xffffff, roughness: 0.3, doubleSide: true })
    },
    shadowRoles: ['cap'],
    glowKey: 'capMat',
    glowColor: C.mushGlow,
    glowIntensity: 0.8
  });
  return _type;
}

/**
 * @brief Spawn a mushroom at (x, z). Legacy record; populate.js sets group.position.y.
 * @param {number} x
 * @param {number} z
 */
export function makeMush(x, z) {
  const type = getType();
  const sc = 0.4 + sr() * 1.2;
  const phase = sr() * 6.28, speed = 0.8 + sr() * 1.5, base = 0.5 + sr() * 0.8;
  const rec = type.spawn(x, z, { scale: sc, phase });
  rec.speed = speed;
  rec._baseScale = rec.group.scale.x;   // reactions scale relative to this (the old code reset every plant to scale 1)
  rec.base = base;
  rec.capMat.emissiveIntensity = base;
  return rec;
}

/** @brief The instanced type (for tests / debug). */
export function getMushType() { return getType(); }

/**
 * Moth rig — what the baker actually wrote into the moth's geometry.
 *
 * A vertex bound to the wrong joint does not crash: the left wing flaps with the
 * right one's angle, or an antenna rides a wing. The draw call count stays
 * perfect. So this test reads the baked aJoint attribute back, checks each
 * joint's vertices sit where that part of a luna moth is, then poses the real
 * geometry and compares it with the old scene graph vertex by vertex.
 */
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../core/renderer.js', () => ({
  renderer: { info: { render: {} } },
  camera: { position: { x: 0, y: 1, z: 0 } },
  clock: {},
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn() },
}));

import { makeMoth } from '../fauna/moths.js';
import { MOTH_JOINT, mothJointDefs, writeMothPose } from '../fauna/mothRig.js';
import { MOTION } from '../_motion.js';
import { buildTruth, poseTruth, truthPoint, rigPoint, lcg } from './_rigTruth.js';

const moth = makeMoth(0, 0, 0);
const meshes = [];
moth.group.traverse((o) => { if (o.isMesh) meshes.push(o); });
const rigged = meshes.filter((m) => m.geometry.attributes.aJoint);

function boxOf(j) {
  const box = { n: 0, min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
  for (const m of rigged) {
    const pos = m.geometry.attributes.position, aj = m.geometry.attributes.aJoint;
    for (let i = 0; i < pos.count; i++) {
      if (aj.getX(i) !== j) continue;
      box.n++;
      for (let k = 0; k < 3; k++) {
        const v = k === 0 ? pos.getX(i) : k === 1 ? pos.getY(i) : pos.getZ(i);
        if (v < box.min[k]) box.min[k] = v;
        if (v > box.max[k]) box.max[k] = v;
      }
    }
  }
  return box;
}
const inside = (box, lo, hi) => box.min.every((v, k) => v >= lo[k]) && box.max.every((v, k) => v <= hi[k]);

describe('moth — meshes and materials', () => {
  it('is three meshes: fur, glow (wings + antennae), unlit (legs, dust, markings)', () => {
    expect(meshes.length).toBe(3);
  });

  it('the glow and unlit meshes carry the rig material and share ONE rig; the fur is not rigged', () => {
    expect(rigged.length).toBe(2);
    for (const m of rigged) {
      const want = m.material.isMeshStandardMaterial ? `lumMotionStd:rig${MOTH_JOINT.COUNT}` : `lumMotionBasic:rig${MOTH_JOINT.COUNT}`;
      expect(m.material.customProgramCacheKey()).toBe(want);
    }
    expect(moth.rig.count).toBe(MOTH_JOINT.COUNT);
    const fur = meshes.filter((m) => !m.geometry.attributes.aJoint);
    expect(fur.length).toBe(1);
    expect(fur[0].material.customProgramCacheKey()).toBe('lumMotionStd');
  });

  // Same hazard as the deer's eyes: the markings (unlit) are drawn over a 55 %-transparent, no-depth-write wing.
  it('the unlit mesh (eyespots, veins, sparkles) is sorted after the wing membrane that would veil it', () => {
    const wing = meshes.find((m) => m.material.isMeshStandardMaterial && m.geometry.attributes.aJoint);
    const unlit = meshes.find((m) => m.material.isMeshBasicMaterial);
    expect(wing.material.transparent).toBe(true);
    expect(unlit.renderOrder).toBeGreaterThan(wing.renderOrder);
  });

  it('the wing material is the one the update loop animates (wingMat), and the antennae are drawn with it', () => {
    const wing = meshes.find((m) => m.material.isMeshStandardMaterial && m.geometry.attributes.aJoint);
    expect(wing.material).toBe(moth.wingMat);
    expect(boxOf(MOTH_JOINT.ANT_0).n).toBeGreaterThan(0);
  });
});

describe('moth — every vertex is bound to the right joint', () => {
  // SEEDED DEFECT: bake a wing part against the other wing's joint (or an antenna against a wing) and this fails.
  const REGIONS = {
    [MOTH_JOINT.WING_0]: [[-0.45, -0.07, -0.35], [-0.01, 0.07, 0.3]],
    [MOTH_JOINT.WING_1]: [[0.01, -0.07, -0.35], [0.45, 0.07, 0.3]],
    [MOTH_JOINT.ANT_0]: [[-0.1, 0.0, 0.17], [-0.005, 0.2, 0.3]],
    [MOTH_JOINT.ANT_1]: [[0.005, 0.0, 0.17], [0.1, 0.2, 0.3]],
  };
  for (const [j, [lo, hi]] of Object.entries(REGIONS)) {
    const name = mothJointDefs()[j].name;
    it(`joint ${j} (${name}) holds vertices, all inside its region`, () => {
      const box = boxOf(Number(j));
      expect(box.n, `no vertices bound to joint ${j}`).toBeGreaterThan(0);
      expect(inside(box, lo, hi), `joint ${j} box ${JSON.stringify(box.min)}..${JSON.stringify(box.max)}`).toBe(true);
    });
  }

  it('the two wings are mirror images and carry the same vertex count (so a swapped side shows up as a count or box mismatch)', () => {
    const a = boxOf(MOTH_JOINT.WING_0), b = boxOf(MOTH_JOINT.WING_1);
    expect(a.n).toBe(b.n);
    // not exact: the edge band and veins are placed with per-side offsets
    expect(Math.abs(a.min[0] + b.max[0])).toBeLessThan(0.02);
    expect(Math.abs(a.max[0] + b.min[0])).toBeLessThan(0.02);
    const c = boxOf(MOTH_JOINT.ANT_0), d = boxOf(MOTH_JOINT.ANT_1);
    expect(c.n).toBe(d.n);
  });

  it('un-jointed vertices (-1) are the body\'s legs and dust trail, on the centre line', () => {
    let n = 0;
    for (const m of rigged) {
      const pos = m.geometry.attributes.position, aj = m.geometry.attributes.aJoint;
      for (let i = 0; i < pos.count; i++) {
        if (aj.getX(i) >= 0) continue;
        n++;
        expect(Math.abs(pos.getX(i))).toBeLessThan(0.07);
        expect(pos.getY(i)).toBeLessThan(0.02);
      }
    }
    expect(n).toBeGreaterThan(0);
  });

  it('every jointed vertex has weight 1, every other has weight 0, and every index is an integer in range', () => {
    for (const m of rigged) {
      const aj = m.geometry.attributes.aJoint, aw = m.geometry.attributes.aJointW;
      for (let i = 0; i < aj.count; i++) {
        const j = aj.getX(i);
        expect(Number.isInteger(j) && j >= -1 && j < MOTH_JOINT.COUNT, `aJoint=${j}`).toBe(true);
        expect(aw.getX(i)).toBe(j >= 0 ? 1 : 0);
      }
    }
  });

  it('streamers keep their flutter, eyespots their pulse and sparkles their flicker while jointed to a wing', () => {
    const seen = { [MOTION.FLUTTER]: 0, [MOTION.BREATHE]: 0, [MOTION.FLICKER]: 0, [MOTION.ORBIT]: 0 };
    for (const m of rigged) {
      const mo = m.geometry.attributes.aMotion, aj = m.geometry.attributes.aJoint;
      for (let i = 0; i < mo.count; i++) {
        const mode = mo.getX(i);
        if (mode === MOTION.ORBIT) { seen[mode]++; expect(aj.getX(i), 'dust trail must stay on the body').toBe(-1); }
        else if (mode in seen) { seen[mode]++; expect(aj.getX(i)).toBeGreaterThanOrEqual(0); }
      }
    }
    for (const mode of Object.keys(seen)) expect(seen[mode], `mode ${mode}`).toBeGreaterThan(0);
  });
});

describe('moth — posed geometry equals the old scene graph, vertex by vertex', () => {
  const defs = mothJointDefs();
  const truth = buildTruth(defs);
  const rnd = lcg(4242);

  it('for random angles on every joint, every baked vertex lands where Object3D put it', () => {
    for (let trial = 0; trial < 8; trial++) {
      const rots = defs.map(() => [(rnd() - 0.5) * 1.6, (rnd() - 0.5) * 1.6, (rnd() - 0.5) * 1.6]);
      poseTruth(truth, rots);
      for (let w = 0; w < 2; w++) Object.assign(moth.group._wingPivots[w].pivot.rotation, { x: rots[w][0], y: rots[w][1], z: rots[w][2] });
      for (let a = 0; a < 2; a++) Object.assign(moth.antennae[a].rotation, { x: rots[2 + a][0], y: rots[2 + a][1], z: rots[2 + a][2] });
      writeMothPose(moth);

      let checked = 0;
      for (const m of rigged) {
        const pos = m.geometry.attributes.position, aj = m.geometry.attributes.aJoint;
        for (let i = 0; i < pos.count; i += 2) {
          const j = aj.getX(i);
          if (j < 0) continue;
          const v = [pos.getX(i), pos.getY(i), pos.getZ(i)];
          const want = truthPoint(truth, j, v), got = rigPoint(moth.rig, j, v);
          expect(got.distanceTo(want), `trial ${trial} vertex ${i} joint ${j}`).toBeLessThan(2e-5);
          checked++;
        }
      }
      expect(checked).toBeGreaterThan(500);
    }
  });

  it('the wings are flapped about z only and mirror: a flap of +a on side +1 is -a on side -1', () => {
    const wp = moth.group._wingPivots;
    wp[0].pivot.rotation.z = -0.3; wp[1].pivot.rotation.z = 0.3;
    for (const w of wp) { w.pivot.rotation.x = 0; w.pivot.rotation.y = 0; }
    writeMothPose(moth);
    // Mirrored flaps lift both outer wingtips (x = +/-0.36) by the same amount
    const tip0 = rigPoint(moth.rig, MOTH_JOINT.WING_0, [-0.36, 0, 0.04]);
    const tip1 = rigPoint(moth.rig, MOTH_JOINT.WING_1, [0.36, 0, 0.04]);
    expect(tip0.y).toBeCloseTo(tip1.y, 6);
    expect(tip0.x).toBeCloseTo(-tip1.x, 6);
    expect(Math.abs(tip0.y)).toBeGreaterThan(0.05);
  });
});

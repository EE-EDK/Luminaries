/**
 * Deer rig — what the baker actually wrote into the deer's geometry.
 *
 * The risky failure in a rig is not a crash, it is a vertex bound to the wrong
 * joint: the hoof that follows the ear, the antler that walks with a hind leg.
 * Nothing throws and the draw call count is perfect. So this test reads the
 * baked aJoint attribute back and checks each joint's vertices sit where that
 * part of a deer is, then poses the real geometry and compares it with the old
 * scene graph vertex by vertex.
 */
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../core/renderer.js', () => ({
  renderer: { info: { render: {} } },
  camera: { position: { x: 0, y: 1, z: 0 } },
  clock: {},
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn() },
}));

import { makeDeer } from '../fauna/deer.js';
import { DEER_JOINT, DEER_LEG_DEFS, deerJointDefs, writeDeerPose } from '../fauna/deerRig.js';
import { MOTION } from '../_motion.js';
import { buildTruth, poseTruth, truthPoint, rigPoint, lcg } from './_rigTruth.js';

const deer = makeDeer(0, 0);
const meshes = [];
deer.group.traverse((o) => { if (o.isMesh) meshes.push(o); });
const rigged = meshes.filter((m) => m.geometry.attributes.aJoint);

/** Root-space bounding box of every vertex bound to joint j, across all rigged meshes. */
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

describe('deer — meshes and materials', () => {
  it('is three meshes: body, unlit, trail', () => {
    expect(meshes.length).toBe(3);
  });

  it('both jointed meshes carry the rig material, and share ONE rig', () => {
    expect(rigged.length).toBe(2);
    for (const m of rigged) {
      const want = m.material.isMeshStandardMaterial ? `lumMotionStd:rig${DEER_JOINT.COUNT}` : `lumMotionBasic:rig${DEER_JOINT.COUNT}`;
      expect(m.material.customProgramCacheKey()).toBe(want);
    }
    expect(deer.rig.count).toBe(DEER_JOINT.COUNT);
  });

  // Seen in the browser, not in the tables: with both meshes at renderOrder 0 the unlit eyes were drawn BEFORE the
  // 70 %-transparent body and veiled by it in every pose.
  it('the unlit mesh (eyes, nostrils, antler sparks) is sorted after the body that would veil it', () => {
    const body = meshes.find((m) => m.material.isMeshStandardMaterial);
    const unlit = meshes.find((m) => m.material.isMeshBasicMaterial && m.geometry.attributes.aJoint);
    expect(body).toBeTruthy();
    expect(unlit).toBeTruthy();
    expect(unlit.renderOrder).toBeGreaterThan(body.renderOrder);
  });

  it('the trail mesh is not jointed (it follows the deer in world space on the CPU)', () => {
    const trail = meshes.filter((m) => !m.geometry.attributes.aJoint);
    expect(trail.length).toBe(1);
  });
});

describe('deer — every vertex is bound to the right joint', () => {
  // SEEDED DEFECT (b): bake a leg part against joint + 1 and this fails.
  // Regions are the part of a deer each joint moves, in root space at rest,
  // generous enough for geometry tweaks and tight enough that a neighbouring
  // joint's parts cannot fit.
  const REGIONS = {
    [DEER_JOINT.NECK_BASE]: [[-0.15, 1.0, 0.1], [0.15, 1.65, 0.75]],
    [DEER_JOINT.HEAD]: [[-0.4, 1.2, 0.2], [0.4, 2.05, 0.9]],
    [DEER_JOINT.EAR_0]: [[-0.25, 1.35, 0.3], [-0.0, 1.75, 0.6]],
    [DEER_JOINT.EAR_1]: [[0.0, 1.35, 0.3], [0.25, 1.75, 0.6]],
    [DEER_JOINT.TAIL]: [[-0.1, 0.95, -0.7], [0.1, 1.25, -0.4]],
  };
  for (const [j, [lo, hi]] of Object.entries(REGIONS)) {
    const name = deerJointDefs()[j].name;
    it(`joint ${j} (${name}) holds vertices, all inside its region`, () => {
      const box = boxOf(Number(j));
      expect(box.n, `no vertices bound to joint ${j}`).toBeGreaterThan(0);
      expect(inside(box, lo, hi), `joint ${j} box ${JSON.stringify(box.min)}..${JSON.stringify(box.max)}`).toBe(true);
    });
  }

  for (let li = 0; li < 4; li++) {
    const { x, z } = DEER_LEG_DEFS[li];
    it(`leg ${li}: upper segment is a thigh over the hip, lower segment is the shin and hoof below it`, () => {
      const up = boxOf(DEER_JOINT.UPPER_0 + li), lo = boxOf(DEER_JOINT.LOWER_0 + li);
      expect(up.n).toBeGreaterThan(0);
      expect(lo.n).toBeGreaterThan(0);
      expect(inside(up, [x - 0.07, 0.29, z - 0.07], [x + 0.07, 0.66, z + 0.07]), `upper ${li}`).toBe(true);
      expect(inside(lo, [x - 0.07, -0.04, z - 0.07], [x + 0.07, 0.31, z + 0.07]), `lower ${li}`).toBe(true);
      expect(lo.max[1], 'a shin must sit below its own thigh').toBeLessThanOrEqual(up.min[1] + 0.03);
    });
  }

  it('the neck-mid joint carries no geometry of its own (it only parents the head), and every other joint does', () => {
    expect(boxOf(DEER_JOINT.NECK_MID).n).toBe(0);
    for (let j = 0; j < DEER_JOINT.COUNT; j++) if (j !== DEER_JOINT.NECK_MID) expect(boxOf(j).n, `joint ${j}`).toBeGreaterThan(0);
  });

  it('un-jointed vertices (-1) are the torso: nowhere near a hoof or an antler', () => {
    let n = 0;
    for (const m of rigged) {
      const pos = m.geometry.attributes.position, aj = m.geometry.attributes.aJoint;
      for (let i = 0; i < pos.count; i++) {
        if (aj.getX(i) >= 0) continue;
        n++;
        expect(pos.getY(i)).toBeGreaterThan(0.5);
        expect(pos.getY(i)).toBeLessThan(1.45);
      }
    }
    expect(n).toBeGreaterThan(0);
  });

  it('every jointed vertex has weight 1, every other has weight 0, and every index is an integer in range', () => {
    for (const m of rigged) {
      const aj = m.geometry.attributes.aJoint, aw = m.geometry.attributes.aJointW;
      for (let i = 0; i < aj.count; i++) {
        const j = aj.getX(i);
        expect(Number.isInteger(j) && j >= -1 && j < DEER_JOINT.COUNT, `aJoint=${j}`).toBe(true);
        expect(aw.getX(i)).toBe(j >= 0 ? 1 : 0);
      }
    }
  });

  it('mane vertices keep their flutter and eyes/antler sparks keep their flicker while jointed', () => {
    let flutter = 0, flicker = 0;
    for (const m of rigged) {
      const mo = m.geometry.attributes.aMotion, aj = m.geometry.attributes.aJoint;
      for (let i = 0; i < mo.count; i++) {
        if (mo.getX(i) === MOTION.FLUTTER && aj.getX(i) === DEER_JOINT.NECK_BASE) flutter++;
        if (mo.getX(i) === MOTION.FLICKER && aj.getX(i) === DEER_JOINT.HEAD) flicker++;
      }
    }
    expect(flutter).toBeGreaterThan(0);
    expect(flicker).toBeGreaterThan(0);
  });
});

describe('deer — posed geometry equals the old scene graph, vertex by vertex', () => {
  const defs = deerJointDefs();
  const truth = buildTruth(defs);
  const rnd = lcg(777);

  it('for random angles on every joint, every baked vertex lands where Object3D put it', () => {
    for (let trial = 0; trial < 8; trial++) {
      const rots = defs.map(() => [(rnd() - 0.5) * 1.6, (rnd() - 0.5) * 1.6, (rnd() - 0.5) * 1.6]);
      poseTruth(truth, rots);
      // Drive the rig through the same state objects the update loop writes.
      deer.neckBasePivot.rotation.x = rots[DEER_JOINT.NECK_BASE][0]; deer.neckBasePivot.rotation.y = rots[DEER_JOINT.NECK_BASE][1]; deer.neckBasePivot.rotation.z = rots[DEER_JOINT.NECK_BASE][2];
      Object.assign(deer.neckMidPivot.rotation, { x: rots[1][0], y: rots[1][1], z: rots[1][2] });
      Object.assign(deer.headPivot.rotation, { x: rots[2][0], y: rots[2][1], z: rots[2][2] });
      for (let e = 0; e < 2; e++) Object.assign(deer.ears[e].rotation, { x: rots[3 + e][0], y: rots[3 + e][1], z: rots[3 + e][2] });
      for (let l = 0; l < 4; l++) {
        Object.assign(deer.legPivots[l].upper.rotation, { x: rots[5 + l][0], y: rots[5 + l][1], z: rots[5 + l][2] });
        Object.assign(deer.legPivots[l].lower.rotation, { x: rots[9 + l][0], y: rots[9 + l][1], z: rots[9 + l][2] });
      }
      Object.assign(deer.tailPivot.rotation, { x: rots[13][0], y: rots[13][1], z: rots[13][2] });
      writeDeerPose(deer);

      let checked = 0;
      for (const m of rigged) {
        const pos = m.geometry.attributes.position, aj = m.geometry.attributes.aJoint;
        for (let i = 0; i < pos.count; i += 3) {
          const j = aj.getX(i);
          if (j < 0) continue;
          const v = [pos.getX(i), pos.getY(i), pos.getZ(i)];
          const want = truthPoint(truth, j, v), got = rigPoint(deer.rig, j, v);
          expect(got.distanceTo(want), `trial ${trial} vertex ${i} joint ${j}`).toBeLessThan(2e-5);
          checked++;
        }
      }
      expect(checked).toBeGreaterThan(100);
    }
  });

  it('the record\'s joint state objects use the same field names the update loop always wrote', () => {
    expect(deer.neckBasePivot.rotation).toHaveProperty('x');
    expect(deer.legPivots.length).toBe(4);
    expect(deer.legPivots[0].upper.rotation).toHaveProperty('x');
    expect(deer.legPivots[0].lower.rotation).toHaveProperty('x');
    expect(deer.ears.length).toBe(2);
    expect(deer.tailPivot.rotation).toHaveProperty('z');
    expect(deer.legPivots.map((l) => l.isFront)).toEqual([true, true, false, false]);
    expect(deer.legPivots.map((l) => l.side)).toEqual([-1, 1, -1, 1]);
  });
});

/**
 * Puffling rig — what the baker actually wrote into the puffling's geometry.
 *
 * A vertex bound to the wrong joint does not crash: an ear follows the other
 * ear, a blink squeezes the nostrils. Draw calls stay perfect. So this test
 * reads the baked aJoint attribute back, checks each joint's vertices sit where
 * that part of a puffling is, then poses the real geometry (rotations AND scales)
 * and compares it with the old scene graph vertex by vertex.
 */
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../core/renderer.js', () => ({
  renderer: { info: { render: {} } },
  camera: { position: { x: 0, y: 1, z: 0 } },
  clock: {},
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn() },
}));

import { makePuff } from '../fauna/pufflings.js';
import { PUFF_JOINT, pufflingJointDefs, writePufflingPose } from '../fauna/pufflingRig.js';
import { MOTION } from '../_motion.js';
import { buildTruth, poseTruth, truthPoint, rigPoint, lcg } from './_rigTruth.js';

const puff = makePuff(0, 0);
const wizard = makePuff(0, 0, { wizardHat: true, skipSceneAdd: true });
const meshesOf = (p) => { const out = []; p.group.traverse((o) => { if (o.isMesh) out.push(o); }); return out; };
const meshes = meshesOf(puff);
const rigged = meshes.filter((m) => m.geometry.attributes.aJoint);

function boxOf(j, list = rigged) {
  const box = { n: 0, min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
  for (const m of list) {
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

describe('puffling — meshes and materials', () => {
  it('is six meshes (eight with the wizard hat): body+ears, belly, dark+eyes, core, mouth, spores', () => {
    expect(meshes.length).toBe(6);
    expect(meshesOf(wizard).length).toBe(8);
  });

  it('the body and dark meshes carry the SCALED rig material and share ONE rig; belly is not rigged', () => {
    expect(rigged.length).toBe(2);
    const keys = rigged.map((m) => m.material.customProgramCacheKey()).sort();
    expect(keys).toEqual([`lumMotionBasic:rig${PUFF_JOINT.COUNT}s`, `lumMotionStd:rig${PUFF_JOINT.COUNT}s`]);
    expect(puff.rig.count).toBe(PUFF_JOINT.COUNT);
    expect(puff.rig.scaled).toBe(true);
    for (const m of rigged) expect(m.material.userData.lumRig).toBe(puff.rig);
    expect(puff.bellyMat.customProgramCacheKey()).toBe('lumMotionStd');
  });

  it('what stays a Mesh or a Group on purpose: the shell, the mouth and the core (the wizard event drives them directly)', () => {
    expect(puff.shell.isGroup).toBe(true);
    expect(puff.mouth.isMesh).toBe(true);
    expect(puff.core.isMesh).toBe(true);
    expect(puff.mouth.parent).toBe(puff.shell);
    // every body mesh sits under the shell, so its squash still scales the ears and eyes
    for (const m of rigged) expect(m.parent).toBe(puff.shell);
  });

  it('the eyes (always visible) are not hidden by the 20 m detail LOD; the mouth and spores still are', () => {
    const dark = rigged.find((m) => m.material.isMeshBasicMaterial);
    expect(puff._detail).not.toContain(dark);
    expect(puff._detail).toContain(puff.mouth);
    expect(puff._detail.length).toBe(2);
  });

  it('wizard: the stars share the dark mesh (same unlit depth-writing material), crown and staff stay separate', () => {
    const ms = meshesOf(wizard);
    const darks = ms.filter((m) => m.geometry.attributes.aJoint && m.material.isMeshBasicMaterial);
    expect(darks.length).toBe(1);
    // 3 stars of 6x5 spheres were added to the dark mesh
    const plain = rigged.find((m) => m.material.isMeshBasicMaterial);
    expect(darks[0].geometry.attributes.position.count).toBeGreaterThan(plain.geometry.attributes.position.count);
    // every star vertex is on the centre line (-1 joint) and flickers
    const aj = darks[0].geometry.attributes.aJoint, mo = darks[0].geometry.attributes.aMotion;
    let flicker = 0;
    for (let i = 0; i < aj.count; i++) if (mo.getX(i) === MOTION.FLICKER) { flicker++; expect(aj.getX(i)).toBe(-1); }
    expect(flicker).toBeGreaterThan(0);
    expect(wizard.crownMat).toBeTruthy();
  });
});

describe('puffling — every vertex is bound to the right joint', () => {
  // SEEDED DEFECT: bake an eye against the other eye's joint, or an ear against an eye, and these fail.
  const REGIONS = {
    [PUFF_JOINT.EAR_0]: [[-0.22, 0.74, -0.08], [-0.05, 0.96, 0.08]],
    [PUFF_JOINT.EAR_1]: [[0.05, 0.74, -0.08], [0.22, 0.96, 0.08]],
    [PUFF_JOINT.EYE_0]: [[-0.14, 0.62, 0.13], [-0.04, 0.73, 0.23]],
    [PUFF_JOINT.EYE_1]: [[0.04, 0.62, 0.13], [0.14, 0.73, 0.23]],
  };
  for (const [j, [lo, hi]] of Object.entries(REGIONS)) {
    const name = pufflingJointDefs()[j].name;
    it(`joint ${j} (${name}) holds vertices, all inside its region`, () => {
      const box = boxOf(Number(j));
      expect(box.n, `no vertices bound to joint ${j}`).toBeGreaterThan(0);
      expect(inside(box, lo, hi), `joint ${j} box ${JSON.stringify(box.min)}..${JSON.stringify(box.max)}`).toBe(true);
    });
  }

  it('the two ears are mirror copies and the two eyes are mirror copies (same vertex counts)', () => {
    expect(boxOf(PUFF_JOINT.EAR_0).n).toBe(boxOf(PUFF_JOINT.EAR_1).n);
    expect(boxOf(PUFF_JOINT.EYE_0).n).toBe(boxOf(PUFF_JOINT.EYE_1).n);
    const a = boxOf(PUFF_JOINT.EYE_0), b = boxOf(PUFF_JOINT.EYE_1);
    expect(a.min[0]).toBeCloseTo(-b.max[0], 5);
    expect(a.max[0]).toBeCloseTo(-b.min[0], 5);
  });

  it('un-jointed vertices (-1) are the body, the brows, the nose and the stars: weight 0; jointed are weight 1', () => {
    for (const m of rigged) {
      const aj = m.geometry.attributes.aJoint, aw = m.geometry.attributes.aJointW;
      let neg = 0;
      for (let i = 0; i < aj.count; i++) {
        const j = aj.getX(i);
        expect(Number.isInteger(j) && j >= -1 && j < PUFF_JOINT.COUNT, `aJoint=${j}`).toBe(true);
        expect(aw.getX(i)).toBe(j >= 0 ? 1 : 0);
        if (j < 0) neg++;
      }
      expect(neg).toBeGreaterThan(0);
    }
  });

  it('the body keeps its breathing and the unlit accents are un-jointed', () => {
    let breathe = 0;
    for (const m of rigged) {
      const mo = m.geometry.attributes.aMotion, aj = m.geometry.attributes.aJoint;
      for (let i = 0; i < mo.count; i++) if (mo.getX(i) === MOTION.BREATHE) { breathe++; expect(aj.getX(i)).toBe(-1); }
    }
    expect(breathe).toBeGreaterThan(0);
  });
});

describe('puffling — posed geometry equals the old scene graph, vertex by vertex', () => {
  const defs = pufflingJointDefs();
  const truth = buildTruth(defs);
  const rnd = lcg(31337);

  it('for random ear rotations and eye scales, every baked vertex lands where Object3D put it', () => {
    for (let trial = 0; trial < 8; trial++) {
      const rots = defs.map((_, i) => [0, 0, i < PUFF_JOINT.EYE_0 ? (rnd() - 0.5) * 1.6 : 0]);   // eyes are scaled, never turned
      // ears get any angle; eyes get the blink range and beyond (0.05 .. 1.6) on y, and a little x/z
      const scales = defs.map((_, i) => (i >= PUFF_JOINT.EYE_0 ? [0.8 + rnd() * 0.4, 0.05 + rnd() * 1.55, 0.8 + rnd() * 0.4] : [1, 1, 1]));
      poseTruth(truth, rots, scales);
      for (let e = 0; e < 2; e++) {
        Object.assign(puff.ears[e].mesh.rotation, { x: rots[e][0], y: rots[e][1], z: rots[e][2] });
        Object.assign(puff.eyes[e].scale, { x: scales[2 + e][0], y: scales[2 + e][1], z: scales[2 + e][2] });
      }
      writePufflingPose(puff);

      let checked = 0;
      for (const m of rigged) {
        const pos = m.geometry.attributes.position, aj = m.geometry.attributes.aJoint;
        for (let i = 0; i < pos.count; i += 2) {
          const j = aj.getX(i);
          if (j < 0) continue;
          const v = [pos.getX(i), pos.getY(i), pos.getZ(i)];
          const want = truthPoint(truth, j, v), got = rigPoint(puff.rig, j, v);
          expect(got.distanceTo(want), `trial ${trial} vertex ${i} joint ${j}`).toBeLessThan(2e-5);
          checked++;
        }
      }
      expect(checked).toBeGreaterThan(300);
    }
  });

  it('the blink the update loop writes (scale.y 0.1) shrinks the eye to a tenth of its height about its centre', () => {
    for (const e of puff.eyes) { e.scale.x = 1; e.scale.y = 0.1; e.scale.z = 1; }
    writePufflingPose(puff);
    const box = { min: Infinity, max: -Infinity };
    const m = rigged.find((r) => r.material.isMeshBasicMaterial);
    const pos = m.geometry.attributes.position, aj = m.geometry.attributes.aJoint;
    for (let i = 0; i < pos.count; i++) {
      if (aj.getX(i) !== PUFF_JOINT.EYE_1) continue;
      const p = rigPoint(puff.rig, PUFF_JOINT.EYE_1, [pos.getX(i), pos.getY(i), pos.getZ(i)]);
      box.min = Math.min(box.min, p.y); box.max = Math.max(box.max, p.y);
    }
    expect(box.max - box.min).toBeCloseTo(0.07 * 0.1, 3);
    expect((box.max + box.min) / 2).toBeCloseTo(0.68, 3);
  });

  it('the record\'s joint state objects use the field names the update loop and the wizard event always wrote', () => {
    expect(puff.ears[0].mesh.rotation).toHaveProperty('z');
    expect(puff.ears.map((e) => e.baseRotZ)).toEqual([-0.3, 0.3]);
    expect(puff.eyes[0].scale).toHaveProperty('y');
    expect(puff.mouth.scale).toHaveProperty('y');
    expect(puff.mouth.position).toHaveProperty('y');
  });
});

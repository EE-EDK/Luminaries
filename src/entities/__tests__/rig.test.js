/**
 * GPU rig — CPU side (createRig, the baker's joint attributes, material wiring).
 *
 * The shader itself cannot run here; scripts/measure/deer-rig.mjs reads its
 * output off the screen. What this file pins is everything the shader trusts:
 *   - the quaternion/translation arrays equal the scene graph the rig replaces,
 *   - pose() alone does not move anything (upload() does), and
 *   - every vertex of a rigged mesh carries a joint index, with -1 for the rest.
 */
import { describe, it, expect } from 'vitest';
import { BoxGeometry, Euler, Quaternion } from 'three';
import { createRig, createBaker, roleMaterial } from '../_bake.js';
import { MOTION, RIG_MAX_JOINTS } from '../_motion.js';
import { buildTruth, poseTruth, truthPoint, rigPoint, lcg } from './_rigTruth.js';

// A chain deep enough to catch composition mistakes: root -> a -> b -> c, plus a sibling root.
const CHAIN = [
  { name: 'a', parent: -1, pos: [0, 1.15, 0.3] },
  { name: 'b', parent: 0, pos: [0, 0.15, 0.08] },
  { name: 'c', parent: 1, pos: [0.1, 0.07, 0.12] },
  { name: 'd', parent: 2, pos: [-0.1, 0.15, -0.05] },
  { name: 'e', parent: -1, pos: [0.15, 0.65, -0.3] },
  { name: 'f', parent: 4, pos: [0, -0.35, 0] }
];

const _q = new Quaternion();
const _eu = new Euler();
function pose(rig, i, r) { rig.pose(i, _q.setFromEuler(_eu.set(r[0], r[1], r[2]))); }

describe('createRig — composition equals the scene graph it replaces', () => {
  it('matches Object3D for random poses over a four-deep chain', () => {
    const rig = createRig(CHAIN);
    const truth = buildTruth(CHAIN);
    const rnd = lcg(12345);
    const pts = [[0.2, 0.9, 0.1], [-0.3, 1.4, 0.6], [0, 0, 0], [0.5, 1.7, -0.4]];
    for (let trial = 0; trial < 60; trial++) {
      const rots = CHAIN.map(() => [(rnd() - 0.5) * 2, (rnd() - 0.5) * 2, (rnd() - 0.5) * 2]);
      poseTruth(truth, rots);
      rots.forEach((r, i) => pose(rig, i, r));
      rig.upload();
      for (let i = 0; i < CHAIN.length; i++) {
        for (const p of pts) {
          const want = truthPoint(truth, i, p), got = rigPoint(rig, i, p);
          expect(got.distanceTo(want), `trial ${trial} joint ${i}`).toBeLessThan(1e-5);
        }
      }
    }
  });

  it('a child inherits its parent: posing only the parent moves the child by the parent rotation', () => {
    const rig = createRig(CHAIN);
    pose(rig, 0, [0.5, 0, 0]);
    rig.upload();
    for (let k = 0; k < 4; k++) expect(rig.quats[1 * 4 + k]).toBeCloseTo(rig.quats[0 * 4 + k], 6);
    // ...and the child's pivot has moved with it, so the translation differs from a bare rotation about the rest pivot.
    const bare = rigPoint(rig, 0, [0, 1.3, 0.38]);   // child's rest pivot seen through the parent
    const viaChild = rigPoint(rig, 1, [0, 1.3, 0.38]);
    expect(viaChild.distanceTo(bare)).toBeLessThan(1e-6);
  });

  it('rest pose is the identity transform', () => {
    const rig = createRig(CHAIN);
    for (let i = 0; i < CHAIN.length; i++) {
      expect(Array.from(rig.quats.slice(i * 4, i * 4 + 4))).toEqual([0, 0, 0, 1]);
      expect(Array.from(rig.trans.slice(i * 3, i * 3 + 3)).map((v) => Math.abs(v) < 1e-6)).toEqual([true, true, true]);
    }
  });

  it('exposes the root-space rest pivots it summed from the local positions', () => {
    const rig = createRig(CHAIN);
    const truth = buildTruth(CHAIN);
    for (let i = 0; i < CHAIN.length; i++) {
      expect(rig.rest[i * 3]).toBeCloseTo(truth.rest[i].x, 6);
      expect(rig.rest[i * 3 + 1]).toBeCloseTo(truth.rest[i].y, 6);
      expect(rig.rest[i * 3 + 2]).toBeCloseTo(truth.rest[i].z, 6);
    }
  });
});

describe('createRig — pose() stages, upload() publishes', () => {
  // SEEDED DEFECT (c): an update loop that calls pose() and forgets upload()
  // leaves the deer frozen on screen. The uniform arrays are what the shader
  // reads, so the test reads them.
  it('pose() alone does not change the uniform arrays', () => {
    const rig = createRig(CHAIN);
    pose(rig, 0, [0.7, 0.2, 0]);
    expect(Array.from(rig.quats.slice(0, 4))).toEqual([0, 0, 0, 1]);
    expect(Math.abs(rig.trans[1])).toBeLessThan(1e-9);
  });

  it('upload() publishes what pose() staged, into the same arrays the uniforms hold', () => {
    const rig = createRig(CHAIN);
    const qRef = rig.uniforms.uJoints.value, tRef = rig.uniforms.uJointPos.value;
    pose(rig, 0, [0.7, 0.2, 0]);
    rig.upload();
    expect(rig.uniforms.uJoints.value, 'upload must write in place, not swap the array').toBe(qRef);
    expect(rig.uniforms.uJointPos.value).toBe(tRef);
    expect(Math.abs(qRef[0])).toBeGreaterThan(0.1);
    expect(Math.abs(tRef[1]) + Math.abs(tRef[2])).toBeGreaterThan(0.05);
  });

  it('uniform arrays are flat Float32Arrays of exactly 4 and 3 floats per joint', () => {
    const rig = createRig(CHAIN);
    expect(rig.uniforms.uJoints.value).toBeInstanceOf(Float32Array);
    expect(rig.uniforms.uJoints.value.length).toBe(CHAIN.length * 4);
    expect(rig.uniforms.uJointPos.value.length).toBe(CHAIN.length * 3);
  });

  it('rejects a joint index out of range instead of corrupting a neighbour', () => {
    const rig = createRig(CHAIN);
    expect(() => rig.pose(CHAIN.length, _q.identity())).toThrow();
    expect(() => rig.pose(-1, _q.identity())).toThrow();
  });

  it('rejects a child listed before its parent, and more joints than the shader budget', () => {
    expect(() => createRig([{ parent: 1, pos: [0, 0, 0] }, { parent: -1, pos: [0, 0, 0] }])).toThrow();
    const many = Array.from({ length: RIG_MAX_JOINTS + 1 }, () => ({ parent: -1, pos: [0, 0, 0] }));
    expect(() => createRig(many)).toThrow();
  });
});

describe('baker — joint attributes', () => {
  it('writes aJoint / aJointW per vertex and marks a rigid part MOTION.RIG', () => {
    const b = createBaker();
    b.add(new BoxGeometry(1, 1, 1), { role: 'glow', joint: 3 });
    const geo = b.buildGeometries().glow;
    const n = geo.attributes.position.count;
    expect(geo.attributes.aJoint.count).toBe(n);
    expect(geo.attributes.aJointW.count).toBe(n);
    for (let i = 0; i < n; i++) {
      expect(geo.attributes.aJoint.getX(i)).toBe(3);
      expect(geo.attributes.aJointW.getX(i)).toBe(1);
      expect(geo.attributes.aMotion.getX(i)).toBe(MOTION.RIG);
    }
  });

  it('keeps an explicit motion mode (mane flutter) on a jointed part', () => {
    const b = createBaker();
    b.add(new BoxGeometry(1, 1, 1), { role: 'glow', joint: 2, motion: { mode: MOTION.FLUTTER, amp: 0.1 } });
    const geo = b.buildGeometries().glow;
    expect(geo.attributes.aMotion.getX(0)).toBe(MOTION.FLUTTER);
    expect(geo.attributes.aJoint.getX(0)).toBe(2);
  });

  it('unjointed parts merged with jointed ones get -1 / weight 0, whatever order they were added in', () => {
    for (const order of [[true, false], [false, true]]) {
      const b = createBaker();
      for (const jointed of order) {
        b.add(new BoxGeometry(1, 1, 1), jointed ? { role: 'glow', joint: 5 } : { role: 'glow' });
      }
      const geo = b.buildGeometries().glow;
      const n = geo.attributes.position.count, half = n / 2;
      const jointedFirst = order[0];
      for (let i = 0; i < n; i++) {
        const inJointed = (i < half) === jointedFirst;
        expect(geo.attributes.aJoint.getX(i)).toBe(inJointed ? 5 : -1);
        expect(geo.attributes.aJointW.getX(i)).toBe(inJointed ? 1 : 0);
      }
    }
  });

  it('a baker that never sees a joint leaves every other entity untouched: no aJoint attribute at all', () => {
    const b = createBaker();
    b.add(new BoxGeometry(1, 1, 1), { role: 'glow' });
    const geo = b.buildGeometries().glow;
    expect(geo.attributes.aJoint).toBeUndefined();
    expect(geo.attributes.aJointW).toBeUndefined();
  });
});

describe('roleMaterial — rig wiring', () => {
  it('a plain motion material keeps its original program key', () => {
    expect(roleMaterial('glow').customProgramCacheKey()).toBe('lumMotionStd');
    expect(roleMaterial('basic').customProgramCacheKey()).toBe('lumMotionBasic');
  });

  it('a rigged material keys its program by joint count, so programs are shared per count, not per deer', () => {
    const r1 = createRig(CHAIN), r2 = createRig(CHAIN);
    const k1 = roleMaterial('glow', { rig: r1 }).customProgramCacheKey();
    const k2 = roleMaterial('glow', { rig: r2 }).customProgramCacheKey();
    expect(k1).toBe(k2);
    expect(k1).toContain(String(CHAIN.length));
    expect(k1).not.toBe('lumMotionStd');
    const other = createRig(CHAIN.slice(0, 3));
    expect(roleMaterial('glow', { rig: other }).customProgramCacheKey()).not.toBe(k1);
  });

  it('onBeforeCompile hands the shader THIS rig\'s uniform objects (by reference) and the sized declarations', () => {
    const rig = createRig(CHAIN);
    const mat = roleMaterial('glow', { rig });
    const shader = {
      uniforms: {},
      vertexShader: '#include <common>\n#include <beginnormal_vertex>\n#include <begin_vertex>',
      fragmentShader: '#include <common>\n#include <emissivemap_fragment>'
    };
    mat.onBeforeCompile(shader);
    expect(shader.uniforms.uJoints).toBe(rig.uniforms.uJoints);
    expect(shader.uniforms.uJointPos).toBe(rig.uniforms.uJointPos);
    expect(shader.vertexShader).toContain(`uniform vec4 uJoints[${CHAIN.length}]`);
    expect(shader.vertexShader).toContain(`uniform vec3 uJointPos[${CHAIN.length}]`);
    expect(shader.vertexShader).toContain('attribute float aJoint');
  });

  it('two deer share a program but not uniform state', () => {
    const r1 = createRig(CHAIN), r2 = createRig(CHAIN);
    const m1 = roleMaterial('glow', { rig: r1 }), m2 = roleMaterial('glow', { rig: r2 });
    const sh = () => ({ uniforms: {}, vertexShader: '#include <common>\n#include <begin_vertex>', fragmentShader: '#include <common>' });
    const s1 = sh(), s2 = sh();
    m1.onBeforeCompile(s1); m2.onBeforeCompile(s2);
    expect(s1.uniforms.uJoints).not.toBe(s2.uniforms.uJoints);
    expect(s1.vertexShader).toBe(s2.vertexShader);
  });
});


describe('createRig with scale — equals Object3D.scale, about the joint pivot, before the rotation', () => {
  // Leaf joints only: a, e are roots with children below, so scale goes on d (under c) and f (under e) and a plain root g.
  const DEFS = [...CHAIN, { name: 'g', parent: -1, pos: [-0.09, 0.68, 0.18] }];
  const LEAVES = [3, 5, 6];

  it('matches Object3D for random rotations on every joint and random scales on the leaves', () => {
    const rig = createRig(DEFS, { scale: true });
    const truth = buildTruth(DEFS);
    const rnd = lcg(999);
    const pts = [[0.2, 0.9, 0.1], [-0.3, 1.4, 0.6], [0, 0, 0], [-0.09, 0.7, 0.2], [0.5, 1.7, -0.4]];
    for (let trial = 0; trial < 60; trial++) {
      const rots = DEFS.map(() => [(rnd() - 0.5) * 2, (rnd() - 0.5) * 2, (rnd() - 0.5) * 2]);
      const scales = DEFS.map((_, i) => (LEAVES.includes(i) ? [0.1 + rnd() * 1.9, 0.1 + rnd() * 1.9, 0.1 + rnd() * 1.9] : [1, 1, 1]));
      poseTruth(truth, rots, scales);
      rots.forEach((r, i) => pose(rig, i, r));
      scales.forEach((s, i) => { if (LEAVES.includes(i)) rig.poseScale(i, s[0], s[1], s[2]); });
      rig.upload();
      for (let i = 0; i < DEFS.length; i++) {
        for (const p of pts) {
          const want = truthPoint(truth, i, p), got = rigPoint(rig, i, p);
          expect(got.distanceTo(want), `trial ${trial} joint ${i}`).toBeLessThan(2e-5);
        }
      }
    }
  });

  it('a blink: scale.y = 0.1 about the eye centre leaves the centre where it was and squeezes the rest toward it', () => {
    const rig = createRig([{ name: 'eye', parent: -1, pos: [0.09, 0.68, 0.18] }], { scale: true });
    rig.poseScale(0, 1, 0.1, 1);
    rig.upload();
    const c = rigPoint(rig, 0, [0.09, 0.68, 0.18]);
    expect(c.toArray()).toEqual([expect.closeTo(0.09, 6), expect.closeTo(0.68, 6), expect.closeTo(0.18, 6)]);
    const top = rigPoint(rig, 0, [0.09, 0.715, 0.18]);        // 0.035 above the centre
    expect(top.y).toBeCloseTo(0.68 + 0.0035, 6);
    const side = rigPoint(rig, 0, [0.125, 0.68, 0.18]);       // x untouched
    expect(side.x).toBeCloseTo(0.125, 6);
  });

  it('refuses to scale a joint that has children (a scaled parent would shear them)', () => {
    const rig = createRig(CHAIN, { scale: true });
    expect(() => rig.poseScale(0, 1, 2, 1)).toThrow(/leaf/);
    expect(() => rig.poseScale(3, 1, 2, 1)).not.toThrow();
  });

  it('a rig built without scale has no scale array, no scale uniform, and refuses poseScale', () => {
    const rig = createRig(CHAIN);
    expect(rig.scaled).toBe(false);
    expect(rig.scales).toBeNull();
    expect(rig.uniforms.uJointScale).toBeUndefined();
    expect(() => rig.poseScale(3, 1, 1, 1)).toThrow();
  });

  it('scale is the identity until posed, and the uniform array is the one the shader reads (shared by reference)', () => {
    const rig = createRig(DEFS, { scale: true });
    expect(Array.from(rig.scales)).toEqual(new Array(DEFS.length * 3).fill(1));
    expect(rig.uniforms.uJointScale.value).toBe(rig.scales);
    rig.poseScale(6, 1, 0.5, 1);
    expect(rig.scales[6 * 3 + 1]).toBe(0.5);
    // staged but not uploaded: the translation has not moved yet
    const t0 = rig.trans[6 * 3 + 1];
    rig.upload();
    expect(rig.trans[6 * 3 + 1]).not.toBe(t0);
  });

  it('the material key carries the scale flag, so scaled and unscaled rigs never share a program', () => {
    const plain = roleMaterial('basic', { rig: createRig(CHAIN) });
    const scaled = roleMaterial('basic', { rig: createRig(CHAIN, { scale: true }) });
    expect(plain.customProgramCacheKey()).toBe('lumMotionBasic:rig6');
    expect(scaled.customProgramCacheKey()).toBe('lumMotionBasic:rig6s');
  });
});

/**
 * Luminid leg IK regression test.
 *
 * The legs were posed with Object3D.lookAt(), which aligns local +Z to the
 * target — but the leg cylinders are built along local -Y, so the feet never
 * reached the ground (legs splayed ~90deg off). This test builds a real
 * luminid and asserts each foot tip lands on its ground target via a connected
 * 2-bone chain. It FAILS on the old lookAt code and passes with proper IK.
 *
 * Only the WebGL scene sink is mocked; Three.js geometry/materials/Object3D
 * math all run in the node test env.
 */
import { describe, it, expect, vi } from 'vitest';
import { Vector3 } from 'three';

vi.mock('../../../core/renderer.js', () => ({
  scene: { add: vi.fn(), remove: vi.fn() },
}));

import { makeLuminid, updateLuminid } from '../luminids.js';

const L_UPPER = 3.6; // shoulder -> knee
const L_LOWER = 4.0; // knee -> foot tip

function shoulderWorld(l, leg) {
  // g and the shoulder are unrotated; shoulder.position is local to g.
  return new Vector3(
    l.group.position.x + leg.shoulder.position.x,
    l.group.position.y + leg.shoulder.position.y,
    l.group.position.z + leg.shoulder.position.z
  );
}

describe('luminid leg IK', () => {
  it('plants each foot tip on its ground target via a connected 2-bone chain', () => {
    const l = makeLuminid(10, 20);
    l.speed = 0; // no wander velocity -> feet rest at radius 3, no stepping
    const ground = () => 0; // flat terrain at y = 0
    const farPlayer = new Vector3(999, 0, 999); // out of inspection range

    for (let k = 0; k < 4; k++) updateLuminid(l, 0.016, farPlayer, ground);
    l.group.updateMatrixWorld(true);

    expect(l.legs.length).toBe(6);
    for (const leg of l.legs) {
      // Foot tip world position (tip mesh sits at lowerPivot local y = -3.5).
      const tip = leg.lowerPivot.localToWorld(new Vector3(0, -L_LOWER, 0));

      // Foot reaches its ground target in all three axes...
      expect(Math.abs(tip.x - leg.currentPos.x)).toBeLessThan(0.05);
      expect(Math.abs(tip.z - leg.currentPos.z)).toBeLessThan(0.05);
      expect(Math.abs(tip.y - leg.currentPos.y)).toBeLessThan(0.05);
      // ...and that target is on the ground (y ~ 0), not floating.
      expect(Math.abs(tip.y)).toBeLessThan(0.05);

      // Two-bone chain stays rigid: shoulder->knee = upper, knee->foot = lower.
      const S = shoulderWorld(l, leg);
      const knee = leg.lowerPivot.getWorldPosition(new Vector3());
      expect(S.distanceTo(knee)).toBeCloseTo(L_UPPER, 1);
      expect(knee.distanceTo(tip)).toBeCloseTo(L_LOWER, 1);

      // Legs hang downward: knee sits above the planted foot.
      expect(knee.y).toBeGreaterThan(tip.y);
    }
  });

  it('keeps every foot reachable (no straight-down collapse) while walking over a slope', () => {
    const l = makeLuminid(0, 0);
    l.wanderAng = 0.3;
    l.speed = 0.4; // walking
    const slope = (x, z) => 0.12 * x - 0.08 * z; // non-flat terrain
    const farPlayer = new Vector3(9999, 0, 9999);
    for (let k = 0; k < 200; k++) updateLuminid(l, 0.05, farPlayer, slope);
    l.group.updateMatrixWorld(true);

    const MAX_REACH = (L_UPPER + L_LOWER) * 0.97;
    for (const leg of l.legs) {
      const S = shoulderWorld(l, leg);
      const tip = leg.lowerPivot.localToWorld(new Vector3(0, -L_LOWER, 0));
      // The IK target is the foot, clamped to MAX_REACH from the shoulder.
      const toFoot = new Vector3().subVectors(leg.currentPos, S);
      const d = toFoot.length();
      const target = d > MAX_REACH
        ? S.clone().add(toFoot.multiplyScalar(MAX_REACH / d))
        : leg.currentPos.clone();
      // The limb actually reaches that reachable target (never collapses straight down).
      expect(tip.distanceTo(target)).toBeLessThan(0.1);
      // The limb is never asked to span more than it physically can.
      expect(S.distanceTo(tip)).toBeLessThan(MAX_REACH + 0.05);
    }
  });

  it('keeps feet planted (x/z fixed) as the body glides over them', () => {
    const l = makeLuminid(0, 0);
    l.wanderAng = 0; // move along +? deterministic-ish; we only need the body to translate
    l.speed = 0.4;
    const ground = () => 0;
    const farPlayer = new Vector3(999, 0, 999);

    // Record a leg's planted foot, then step the body forward a little.
    updateLuminid(l, 0.016, farPlayer, ground);
    const leg = l.legs[0];
    const fx = leg.currentPos.x, fz = leg.currentPos.z;
    const stepping0 = leg.isStepping;

    // A couple small frames: too little body drift to trigger a step (>1.5m),
    // so the planted foot must stay put in x/z.
    updateLuminid(l, 0.05, farPlayer, ground);
    if (!leg.isStepping && !stepping0) {
      expect(Math.abs(leg.currentPos.x - fx)).toBeLessThan(1e-6);
      expect(Math.abs(leg.currentPos.z - fz)).toBeLessThan(1e-6);
    }
  });
});

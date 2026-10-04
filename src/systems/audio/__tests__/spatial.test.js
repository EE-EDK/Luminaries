/**
 * Spatial audio: direction, pooling, and the listener.
 *
 * The bug this replaces is worth naming, because the tests are shaped around
 * it: the old pan was `dx / max(dist, 1)` on the x axis only. dz was used for
 * the distance and then discarded, so a deer directly behind the player and
 * one directly in front produced identical audio. Anything here that looks
 * like paranoia about the z axis is paranoia about that.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  POOL_SIZE, PANNER_DEFAULTS, setSpatialPlatform, panningModel,
  configurePanner, setPannerPosition, acquirePanner, releasePanner,
  releasePannerAfter, poolStats, resetPool, updateListener, cameraForward,
} from '../spatial.js';

/** A PannerNode stand-in with modern AudioParams. */
function fakePanner() {
  return {
    panningModel: '', distanceModel: '', refDistance: 0, maxDistance: 0,
    rolloffFactor: 0, coneInnerAngle: 0,
    positionX: { value: 0 }, positionY: { value: 0 }, positionZ: { value: 0 },
    disconnected: 0,
    disconnect() { this.disconnected++; },
  };
}

/** One with only the deprecated API, like older Safari. */
function legacyPanner() {
  const p = {
    panningModel: '', distanceModel: '', refDistance: 0, maxDistance: 0,
    rolloffFactor: 0, coneInnerAngle: 0, placed: null,
    setPosition(x, y, z) { this.placed = { x, y, z }; },
    disconnect() {},
  };
  return p;
}

function fakeCtx(makePanner = fakePanner, listener = modernListener()) {
  return { currentTime: 1.5, listener, created: 0, createPanner() { this.created++; return makePanner(); } };
}

function modernListener() {
  const param = () => ({ calls: [], setTargetAtTime(v, t, c) { this.calls.push([v, t, c]); } });
  return {
    positionX: param(), positionY: param(), positionZ: param(),
    forwardX: param(), forwardY: param(), forwardZ: param(),
    upX: param(), upY: param(), upZ: param(),
  };
}

function legacyListener() {
  return {
    pos: null, orient: null,
    setPosition(x, y, z) { this.pos = { x, y, z }; },
    setOrientation(fx, fy, fz, ux, uy, uz) { this.orient = { fx, fy, fz, ux, uy, uz }; },
  };
}

beforeEach(() => { resetPool(); setSpatialPlatform(false); });

describe('panningModel', () => {
  it('uses HRTF on desktop and the cheap model on touch', () => {
    setSpatialPlatform(false);
    expect(panningModel()).toBe('HRTF');
    setSpatialPlatform(true);
    expect(panningModel()).toBe('equalpower');
  });
});

describe('configurePanner', () => {
  it('applies the distance model the game was tuned for', () => {
    const p = configurePanner(fakePanner(), 1, 2, 3);
    expect(p.distanceModel).toBe(PANNER_DEFAULTS.distanceModel);
    expect(p.refDistance).toBe(PANNER_DEFAULTS.refDistance);
    expect(p.maxDistance).toBe(PANNER_DEFAULTS.maxDistance);
    expect(p.rolloffFactor).toBe(PANNER_DEFAULTS.rolloffFactor);
  });

  it('leaves the cone wide open — these are not directional emitters', () => {
    expect(configurePanner(fakePanner(), 0, 0, 0).coneInnerAngle).toBe(360);
  });

  it('carries the platform model onto the node', () => {
    setSpatialPlatform(true);
    expect(configurePanner(fakePanner(), 0, 0, 0).panningModel).toBe('equalpower');
  });
});

describe('setPannerPosition', () => {
  it('keeps z, which the old stereo pan threw away', () => {
    const p = setPannerPosition(fakePanner(), 4, 1, -7);
    expect(p.positionX.value).toBe(4);
    expect(p.positionY.value).toBe(1);
    expect(p.positionZ.value).toBe(-7);
  });

  it('distinguishes in front from behind', () => {
    const ahead = setPannerPosition(fakePanner(), 0, 0, -10);
    const behind = setPannerPosition(fakePanner(), 0, 0, 10);
    expect(ahead.positionZ.value).not.toBe(behind.positionZ.value);
  });

  it('falls back to setPosition where the params do not exist', () => {
    const p = setPannerPosition(legacyPanner(), 4, 1, -7);
    expect(p.placed).toEqual({ x: 4, y: 1, z: -7 });
  });

  it('substitutes zero for a NaN coordinate rather than poisoning the node', () => {
    const p = setPannerPosition(fakePanner(), NaN, undefined, 'over there');
    expect(p.positionX.value).toBe(0);
    expect(p.positionY.value).toBe(0);
    expect(p.positionZ.value).toBe(0);
  });
});

describe('the pool', () => {
  it('builds a node when the pool is empty', () => {
    const ctx = fakeCtx();
    expect(acquirePanner(ctx, 0, 0, 0)).toBeTruthy();
    expect(ctx.created).toBe(1);
  });

  it('reuses a released node instead of building another', () => {
    const ctx = fakeCtx();
    const a = acquirePanner(ctx, 0, 0, 0);
    releasePanner(a);
    const b = acquirePanner(ctx, 0, 0, 0);
    expect(b).toBe(a);
    expect(ctx.created).toBe(1);
  });

  it('disconnects on release, so a reused node cannot leak into the old graph', () => {
    const ctx = fakeCtx();
    const a = acquirePanner(ctx, 0, 0, 0);
    releasePanner(a);
    expect(a.disconnected).toBe(1);
  });

  it('reconfigures a reused node rather than handing back stale settings', () => {
    const ctx = fakeCtx();
    const a = acquirePanner(ctx, 9, 9, 9);
    releasePanner(a);
    setSpatialPlatform(true);
    const b = acquirePanner(ctx, 1, 2, 3);
    expect(b.panningModel).toBe('equalpower');
    expect(b.positionX.value).toBe(1);
  });

  it('never drops a sound just because the pool is exhausted', () => {
    const ctx = fakeCtx();
    const held = [];
    for (let i = 0; i < POOL_SIZE * 3; i++) held.push(acquirePanner(ctx, 0, 0, 0));
    expect(held.every(Boolean)).toBe(true);
    expect(poolStats().live).toBe(POOL_SIZE * 3);
  });

  it('stops pooling above its ceiling instead of growing without bound', () => {
    const ctx = fakeCtx();
    const held = [];
    for (let i = 0; i < POOL_SIZE * 2; i++) held.push(acquirePanner(ctx, 0, 0, 0));
    for (const p of held) releasePanner(p);
    expect(poolStats().pooled).toBe(POOL_SIZE);
  });

  it('survives a release of nothing, and a double release', () => {
    const ctx = fakeCtx();
    expect(releasePanner(null)).toBe(false);
    const a = acquirePanner(ctx, 0, 0, 0);
    releasePanner(a);
    expect(() => releasePanner(a)).not.toThrow();
  });

  it('returns null rather than throwing when the context cannot make a panner', () => {
    expect(acquirePanner(null, 0, 0, 0)).toBe(null);
    expect(acquirePanner({}, 0, 0, 0)).toBe(null);
  });

  it('releases on a timer sized to the voice', () => {
    const ctx = fakeCtx();
    const p = acquirePanner(ctx, 0, 0, 0);
    let fn = null, ms = 0;
    releasePannerAfter(p, 1.5, { setTimeout: (f, m) => { fn = f; ms = m; return 1; } });
    expect(ms).toBeGreaterThanOrEqual(1500);
    expect(poolStats().pooled).toBe(0);
    fn();
    expect(poolStats().pooled).toBe(1);
  });

  it('releases immediately when there is no timer to schedule on', () => {
    const ctx = fakeCtx();
    const p = acquirePanner(ctx, 0, 0, 0);
    releasePannerAfter(p, 1.5, {});
    expect(poolStats().pooled).toBe(1);
  });
});

describe('updateListener', () => {
  it('smooths rather than jumps, to keep HRTF from zippering', () => {
    const ctx = fakeCtx(fakePanner, modernListener());
    expect(updateListener(ctx, 1, 2, 3, 0, 0, -1)).toBe(true);
    const [v, t, c] = ctx.listener.positionX.calls[0];
    expect(v).toBe(1);
    expect(t).toBe(ctx.currentTime);
    expect(c).toBeGreaterThan(0);
    expect(c).toBeLessThan(0.1);
  });

  it('sets position, forward and up', () => {
    const ctx = fakeCtx(fakePanner, modernListener());
    updateListener(ctx, 1, 2, 3, 0.5, 0, -0.5, 0, 1, 0);
    expect(ctx.listener.positionZ.calls[0][0]).toBe(3);
    expect(ctx.listener.forwardX.calls[0][0]).toBe(0.5);
    expect(ctx.listener.upY.calls[0][0]).toBe(1);
  });

  it('defaults up to straight up', () => {
    const ctx = fakeCtx(fakePanner, modernListener());
    updateListener(ctx, 0, 0, 0, 0, 0, -1);
    expect(ctx.listener.upY.calls[0][0]).toBe(1);
    expect(ctx.listener.upX.calls[0][0]).toBe(0);
  });

  it('falls back to the deprecated listener API', () => {
    const ctx = fakeCtx(fakePanner, legacyListener());
    expect(updateListener(ctx, 1, 2, 3, 0, 0, -1)).toBe(true);
    expect(ctx.listener.pos).toEqual({ x: 1, y: 2, z: 3 });
    expect(ctx.listener.orient.fz).toBe(-1);
  });

  it('reports failure rather than throwing when there is no listener', () => {
    expect(updateListener({ currentTime: 0 }, 0, 0, 0, 0, 0, -1)).toBe(false);
    expect(updateListener(null, 0, 0, 0, 0, 0, -1)).toBe(false);
  });

  it('substitutes zero for NaN rather than silencing the whole mix', () => {
    // A NaN reaching an AudioParam poisons it permanently: every subsequent
    // value is ignored and the node goes silent for the rest of the session.
    const ctx = fakeCtx(fakePanner, modernListener());
    updateListener(ctx, NaN, undefined, 3, NaN, 0, -1);
    expect(ctx.listener.positionX.calls[0][0]).toBe(0);
    expect(ctx.listener.forwardX.calls[0][0]).toBe(0);
  });
});

describe('cameraForward', () => {
  const f = (yaw, pitch) => cameraForward(yaw, pitch);

  it('looks down -Z at rest, which is where Three.js cameras look', () => {
    const v = f(0, 0);
    expect(v.x).toBeCloseTo(0, 6);
    expect(v.y).toBeCloseTo(0, 6);
    expect(v.z).toBeCloseTo(-1, 6);
  });

  it('turning left faces -X', () => {
    const v = f(Math.PI / 2, 0);
    expect(v.x).toBeCloseTo(-1, 6);
    expect(v.z).toBeCloseTo(0, 6);
  });

  it('turning right faces +X', () => {
    const v = f(-Math.PI / 2, 0);
    expect(v.x).toBeCloseTo(1, 6);
  });

  it('turning about faces +Z', () => {
    const v = f(Math.PI, 0);
    expect(v.z).toBeCloseTo(1, 6);
  });

  it('looking up raises y, looking down lowers it', () => {
    expect(f(0, 0.5).y).toBeGreaterThan(0);
    expect(f(0, -0.5).y).toBeLessThan(0);
  });

  it('stays a unit vector at every angle', () => {
    for (let yaw = -Math.PI; yaw <= Math.PI; yaw += 0.3) {
      for (let pitch = -1; pitch <= 1; pitch += 0.25) {
        const v = f(yaw, pitch);
        expect(Math.hypot(v.x, v.y, v.z), `yaw=${yaw.toFixed(2)} pitch=${pitch.toFixed(2)}`)
          .toBeCloseTo(1, 6);
      }
    }
  });

  it('writes into the object it was handed', () => {
    const out = { x: 9, y: 9, z: 9 };
    expect(cameraForward(0, 0, out)).toBe(out);
    expect(out.z).toBeCloseTo(-1, 6);
  });

  it('treats nonsense angles as zero rather than emitting NaN', () => {
    const v = cameraForward(NaN, undefined);
    expect(Number.isFinite(v.x) && Number.isFinite(v.y) && Number.isFinite(v.z)).toBe(true);
  });
});

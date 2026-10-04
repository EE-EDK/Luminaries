// ================================================================
// Spatial audio — sound comes from where the thing is
// ================================================================
// Replaces seven hand-rolled StereoPanners and one ramped one. The old
// formula was `dx / max(dist, 1)` on the x axis alone: dz was used for the
// distance and then thrown away, so a deer directly behind the player and a
// deer directly in front produced byte-identical audio. A PannerNode with the
// listener on the camera gets front and back for free.
//
// Two models. HRTF is the convincing one and costs real CPU per voice;
// equalpower is cheap and still gives direction. Touch devices get equalpower
// because a phone running this at all is already working hard.
//
// Nodes are pooled. A one-shot creature call builds four or five oscillators
// and a panner, and at thirty creatures in earshot the allocation churn shows
// up as audible stutter on a weak machine. Sixteen is above the measured
// simultaneous-voice ceiling (the cooldown in creatures.js gates calls at
// roughly one per creature per second).

export const POOL_SIZE = 16;

// Distance model. refDistance 2 m means a sound at the player's feet is not
// deafening; maxDistance 40 m matches the widest audible radius in use (the
// wizard's la-la at 80 m is the one exception and passes its own).
export const PANNER_DEFAULTS = Object.freeze({
  distanceModel: 'inverse',
  refDistance: 2,
  maxDistance: 40,
  rolloffFactor: 1.2,
  coneInnerAngle: 360,
  coneOuterAngle: 0,
  coneOuterGain: 0,
});

let _touch = false;
let _pool = [];
let _live = 0;

/** @brief Pick the panning model. Touch gets the cheap one. */
export function setSpatialPlatform(isTouch) { _touch = !!isTouch; }

/** @brief The model in effect. */
export function panningModel() { return _touch ? 'equalpower' : 'HRTF'; }

/**
 * @brief Configure a PannerNode in place.
 * @param {PannerNode} p
 * @param {number} x @param {number} y @param {number} z world position
 * @return {PannerNode} p
 */
export function configurePanner(p, x, y, z) {
  p.panningModel = panningModel();
  p.distanceModel = PANNER_DEFAULTS.distanceModel;
  p.refDistance = PANNER_DEFAULTS.refDistance;
  p.maxDistance = PANNER_DEFAULTS.maxDistance;
  p.rolloffFactor = PANNER_DEFAULTS.rolloffFactor;
  p.coneInnerAngle = PANNER_DEFAULTS.coneInnerAngle;
  return setPannerPosition(p, x, y, z);
}

/**
 * @brief Move a panner. Uses AudioParams where they exist.
 *
 * Safari shipped PannerNode long before positionX/Y/Z were AudioParams, and
 * the deprecated setPosition is still the only path there. Both are kept
 * because the fallback is three lines, and losing all directional audio on
 * one browser is not a trade worth making.
 * @return {PannerNode} p
 */
export function setPannerPosition(p, x, y, z) {
  const px = num(x), py = num(y), pz = num(z);
  if (p.positionX && typeof p.positionX.value === 'number') {
    p.positionX.value = px;
    p.positionY.value = py;
    p.positionZ.value = pz;
  } else if (typeof p.setPosition === 'function') {
    p.setPosition(px, py, pz);
  }
  return p;
}

/**
 * @brief Take a configured panner from the pool, or build one.
 *
 * Never returns null: running out of pool is not a reason to drop a sound.
 * @param {AudioContext} ctx
 * @param {number} x @param {number} y @param {number} z
 * @return {PannerNode|null} null only if the context cannot make one
 */
export function acquirePanner(ctx, x, y, z) {
  if (!ctx || typeof ctx.createPanner !== 'function') return null;
  const p = _pool.length ? _pool.pop() : ctx.createPanner();
  _live++;
  return configurePanner(p, x, y, z);
}

/**
 * @brief Give a panner back once its voice is finished.
 *
 * Disconnected first: a pooled node still wired into the graph would leak the
 * next voice into the old destination, which is audible as a ghost.
 * @param {PannerNode} p
 */
export function releasePanner(p) {
  if (!p) return false;
  try { p.disconnect(); } catch (_) { /* already gone */ }
  if (_live > 0) _live--;
  if (_pool.length < POOL_SIZE) { _pool.push(p); return true; }
  return false;                       // over ceiling: let it be collected
}

/**
 * @brief Release after a voice's own lifetime, in seconds.
 * @param {PannerNode} p
 * @param {number} seconds
 * @param {{setTimeout:Function}} [timers] injectable for tests
 */
export function releasePannerAfter(p, seconds, timers) {
  const T = timers || (typeof window !== 'undefined' ? window : globalThis);
  const ms = Math.max(0, (Number.isFinite(seconds) ? seconds : 0) * 1000) + 60;
  if (typeof T.setTimeout !== 'function') { releasePanner(p); return null; }
  return T.setTimeout(() => releasePanner(p), ms);
}

/** @brief Pool state, for tests and the dev panel. */
export function poolStats() { return { pooled: _pool.length, live: _live, size: POOL_SIZE }; }

/** @brief Empty the pool (context teardown, tests). */
export function resetPool() { _pool = []; _live = 0; }

/**
 * @brief Put the listener where the camera is, facing where it faces.
 *
 * Smoothed with setTargetAtTime rather than assigned: the listener moves every
 * frame, and a hard per-frame jump in listener position makes HRTF produce a
 * zipper noise on sustained voices. 0.02 s is below the threshold where the
 * lag is noticeable but above where the stepping is.
 *
 * @param {AudioContext} ctx
 * @param {number} x @param {number} y @param {number} z position
 * @param {number} fx @param {number} fy @param {number} fz forward vector
 * @param {number} [ux=0] @param {number} [uy=1] @param {number} [uz=0] up vector
 * @return {boolean} whether the listener was updated
 */
export function updateListener(ctx, x, y, z, fx, fy, fz, ux = 0, uy = 1, uz = 0) {
  const L = ctx && ctx.listener;
  if (!L) return false;
  const t = ctx.currentTime;
  if (L.positionX && typeof L.positionX.setTargetAtTime === 'function') {
    L.positionX.setTargetAtTime(num(x), t, SMOOTH);
    L.positionY.setTargetAtTime(num(y), t, SMOOTH);
    L.positionZ.setTargetAtTime(num(z), t, SMOOTH);
    L.forwardX.setTargetAtTime(num(fx), t, SMOOTH);
    L.forwardY.setTargetAtTime(num(fy), t, SMOOTH);
    L.forwardZ.setTargetAtTime(num(fz), t, SMOOTH);
    L.upX.setTargetAtTime(num(ux), t, SMOOTH);
    L.upY.setTargetAtTime(num(uy), t, SMOOTH);
    L.upZ.setTargetAtTime(num(uz), t, SMOOTH);
    return true;
  }
  if (typeof L.setPosition === 'function') {
    L.setPosition(num(x), num(y), num(z));
    if (typeof L.setOrientation === 'function') {
      L.setOrientation(num(fx), num(fy), num(fz), num(ux), num(uy), num(uz));
    }
    return true;
  }
  return false;
}

const SMOOTH = 0.02;

/**
 * @brief Camera forward vector for Three.js YXZ rotation order.
 *
 * Three.js cameras look down -Z. For rotation order YXZ with yaw about Y and
 * pitch about X, the forward vector is the one below — getting a sign wrong
 * here mirrors the whole soundscape, which is the kind of bug that reads as
 * "the audio feels off" and takes a day to find.
 *
 * @param {number} yaw @param {number} pitch radians
 * @param {{x:number,y:number,z:number}} [out] written in place
 * @return {{x:number,y:number,z:number}} out
 */
export function cameraForward(yaw, pitch, out) {
  const o = out || { x: 0, y: 0, z: 0 };
  const cy = Math.cos(num(yaw)), sy = Math.sin(num(yaw));
  const cp = Math.cos(num(pitch)), sp = Math.sin(num(pitch));
  o.x = -sy * cp;
  o.y = sp;
  o.z = -cy * cp;
  return o;
}

function num(v) { return Number.isFinite(v) ? v : 0; }

/**
 * @brief The whole panner dance for one voice, in one call.
 *
 * Call sites want "give me a node that makes this sound come from there, and
 * clean itself up". The fallback matters: if PannerNode is missing entirely we
 * return a StereoPanner carrying the OLD left/right formula rather than no
 * node at all, because mono audio is a worse regression than flat audio.
 *
 * @param {AudioContext} ctx
 * @param {{x:number, y?:number, z:number}} at where the sound is
 * @param {{x:number, y?:number, z:number}} listenerAt the player, for the y default and the fallback
 * @param {number} lifetimeS how long the voice lasts, for the pool return
 * @param {{width?:number, timers?:object}} [opts] width < 1 pulls the image toward the listener
 * @return {AudioNode|null} connect the voice into this
 */
export function voicePanner(ctx, at, listenerAt, lifetimeS, opts = {}) {
  if (!ctx) return null;
  const ly = listenerAt && Number.isFinite(listenerAt.y) ? listenerAt.y : 0;
  // No caller passes a y: creature positions are {x, z} literals. Defaulting
  // to the listener's own height means no vertical cue is invented, which is
  // better than inventing a wrong one.
  let x = num(at && at.x), z = num(at && at.z);
  let y = at && Number.isFinite(at.y) ? at.y : ly;

  // A narrower image, for a bed that should not swing hard across the head:
  // pull the source toward the listener instead, which is what narrowing a
  // stereo pan actually did.
  const w = Number.isFinite(opts.width) ? Math.max(0, Math.min(1, opts.width)) : 1;
  if (w < 1 && listenerAt) {
    x = num(listenerAt.x) + (x - num(listenerAt.x)) * w;
    z = num(listenerAt.z) + (z - num(listenerAt.z)) * w;
    y = ly + (y - ly) * w;
  }

  const p = acquirePanner(ctx, x, y, z);
  if (p) {
    if (lifetimeS > 0) releasePannerAfter(p, lifetimeS, opts.timers);
    return p;
  }

  // Last resort: the old behaviour rather than none.
  if (typeof ctx.createStereoPanner !== 'function') return null;
  const sp = ctx.createStereoPanner();
  const dx = x - num(listenerAt && listenerAt.x);
  const dz = z - num(listenerAt && listenerAt.z);
  const dist = Math.sqrt(dx * dx + dz * dz);
  sp.pan.value = Math.max(-1, Math.min(1, dx / Math.max(dist, 1))) * w;
  return sp;
}

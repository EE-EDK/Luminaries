// ================================================================
// Light shafts — dawn and dusk light coming down through the tallest trees
// ================================================================
// Eight shafts, ONE mesh, ONE draw call, no lights. Each shaft is a pair of
// crossed soft-edged quads lying along the sun's direction and passing through
// the crown of one of the tallest trees near the player; all sixteen quads are
// baked into a single additive mesh by the entity baker, and the shared motion
// shader's BOB mode gives them a slow shimmer on the GPU. Nothing here is
// random — the placement is the trees and the sun, so the same dawn over the
// same forest puts the same light in the same places.
//
// They exist only at DAWN and DUSK and fade out in rain, by the rain rate:
// light through cloud is not a beam. The geometry is rebuilt when the picture
// the shafts describe has changed — a new phase, the player having walked off,
// or the sun having swung far enough that the beams no longer lie along it —
// and never per frame. Fading and the opacity uniform are per frame; they
// allocate nothing.
//
// The pure parts (which trees, where each shaft lies, how visible) are
// exported and tested without a renderer.

import {
  AdditiveBlending, CanvasTexture, DoubleSide, Mesh, PlaneGeometry, Quaternion, Vector3,
} from 'three';
import { createBaker, roleMaterial, MOTION } from '../entities/_bake.js';

/** How many shafts: eight, as the plan has it. Two crossed quads each, so sixteen in the one mesh. */
export const SHAFT_COUNT = 8;
/** Trees farther than 70 m from the player are not considered (squared). */
export const SHAFT_RADIUS_D2 = 70 * 70;
/** A walk of 40 m since the shafts were placed re-places them (squared). */
export const SHAFT_WALK_D2 = 40 * 40;
/** Cosine of 6 degrees: the sun may swing this far before the beams are re-aimed. */
export const SHAFT_AIM_COS = 0.9945;
/** The brightest a shaft ever gets. Additive, so this is already a lot over a dark forest. */
export const SHAFT_PEAK = 0.2;
/** Opacity change per second, either way. */
export const SHAFT_FADE_RATE = 0.6;
/** Metres a shaft starts above the crown, toward the sun. */
export const SHAFT_ABOVE = 2;
/** Longest run down to the ground; a very low sun would otherwise draw a beam across the map. */
export const SHAFT_MAX_RUN = 40;
/** Width across, metres. */
export const SHAFT_WIDTH = 3.5;
/** A sun this close to the horizon casts no beam worth drawing. */
export const SHAFT_MIN_SUN_Y = 0.1;
/** Vertical shimmer amplitude, metres, and its speed. Zero amplitude under reduced motion. */
export const SHAFT_BOB_AMP = 0.35;

/** Phases the shafts are visible in. */
export const SHAFT_PHASES = Object.freeze(['DAWN', 'DUSK']);

// ----------------------------------------------------------------
// Pure
// ----------------------------------------------------------------

/**
 * @brief The tallest trees within range of the player.
 *
 * One pass, an insertion into a fixed-size list; `outIdx` and `outH` are the
 * caller's and are overwritten. Height is the crown height the player sees:
 * the template height times the instance scale.
 *
 * @param {ReadonlyArray<{x:number, z:number, treeH:number, scale:number}>} trees
 * @param {number} px player x
 * @param {number} pz player z
 * @param {number} r2 squared search radius
 * @param {number} n how many to keep
 * @param {Int32Array} outIdx indices into `trees`, tallest first
 * @param {Float64Array} outH their heights
 * @return {number} how many were found (<= n)
 */
export function pickTallest(trees, px, pz, r2, n, outIdx, outH) {
  let count = 0;
  for (let i = 0; i < trees.length; i++) {
    const t = trees[i];
    const dx = t.x - px, dz = t.z - pz;
    if (dx * dx + dz * dz > r2) continue;
    const h = t.treeH * t.scale;
    if (count === n && h <= outH[n - 1]) continue;
    let j = count < n ? count : n - 1;
    while (j > 0 && outH[j - 1] < h) {
      outH[j] = outH[j - 1];
      outIdx[j] = outIdx[j - 1];
      j--;
    }
    outH[j] = h;
    outIdx[j] = i;
    if (count < n) count++;
  }
  return count;
}

/**
 * @brief How visible the shafts want to be, 0..1.
 * @param {string} phase day phase label
 * @param {number} rainRate 0..1
 * @return {number} 0 outside DAWN/DUSK; otherwise one minus the rain rate
 */
export function shaftTarget(phase, rainRate) {
  if (phase !== 'DAWN' && phase !== 'DUSK') return 0;
  const r = rainRate > 0 ? (rainRate < 1 ? rainRate : 1) : 0;
  return 1 - r;
}

/**
 * @brief Move the fade toward its target at a fixed rate.
 * @param {number} current 0..1
 * @param {number} target 0..1
 * @param {number} dt seconds
 * @return {number}
 */
export function stepShaftFade(current, target, dt) {
  const step = SHAFT_FADE_RATE * (dt > 0 ? dt : 0);
  if (current < target) return Math.min(target, current + step);
  return Math.max(target, current - step);
}

/**
 * @brief Where one shaft lies: the segment of the sun's ray through a crown.
 *
 * The ray runs from just above the tree's crown, away from the sun's side,
 * down to the height of the ground at its foot. `(sx, sy, sz)` is the unit
 * vector TOWARD the sun.
 *
 * @param {{x:number, y:number, z:number, treeH:number, scale:number}} tree
 * @param {number} sx @param {number} sy @param {number} sz unit sun direction
 * @param {{cx:number, cy:number, cz:number, len:number}} out written in place
 * @return {boolean} false when the sun is too low for a beam
 */
export function shaftSegment(tree, sx, sy, sz, out) {
  if (!(sy > SHAFT_MIN_SUN_Y)) return false;
  const h = tree.treeH * tree.scale;
  const topY = tree.y + h;
  const sStart = -SHAFT_ABOVE;
  const sEnd = Math.min(h / sy, SHAFT_MAX_RUN);
  const mid = (sStart + sEnd) * 0.5;
  out.cx = tree.x - sx * mid;
  out.cy = topY - sy * mid;
  out.cz = tree.z - sz * mid;
  out.len = sEnd - sStart;
  return true;
}

/**
 * @brief Whether the placed shafts still describe the scene.
 * @param {{phase:string, x:number, z:number, sx:number, sy:number, sz:number, reduced:boolean}} built what they were built for
 * @param {string} phase now
 * @param {number} px @param {number} pz player now
 * @param {number} sx @param {number} sy @param {number} sz unit sun direction now
 * @param {boolean} reduced reduced motion now
 */
export function shaftsStale(built, phase, px, pz, sx, sy, sz, reduced) {
  if (built.phase !== phase || built.reduced !== reduced) return true;
  const dx = px - built.x, dz = pz - built.z;
  if (dx * dx + dz * dz > SHAFT_WALK_D2) return true;
  return built.sx * sx + built.sy * sy + built.sz * sz < SHAFT_AIM_COS;
}

// ----------------------------------------------------------------
// The mesh
// ----------------------------------------------------------------

const _unit = new PlaneGeometry(1, 1);
const _seg = { cx: 0, cy: 0, cz: 0, len: 0 };
const _qAlign = new Quaternion();
const _qSpin = new Quaternion();
const _qCross = new Quaternion();
const _up = new Vector3(0, 1, 0);
const _dir = new Vector3();
const _spinAxis = new Vector3(0, 1, 0);
const _idx = new Int32Array(SHAFT_COUNT);
const _hts = new Float64Array(SHAFT_COUNT);

/** Warm gold at dawn, a redder amber at dusk. */
const COLOR = { DAWN: 0xffe2a8, DUSK: 0xffb978 };

/**
 * A soft strip: bright along the middle, fading to nothing at both sides and
 * at both ends, so a shaft has no edge to see. Drawn once.
 */
function makeStripTexture() {
  if (typeof document === 'undefined') return null;
  const w = 32, h = 128;
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const g = cv.getContext('2d');
  if (!g) return null;
  const img = g.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    const v = y / (h - 1);
    const along = Math.sin(Math.PI * v);                 // 0 at both ends
    for (let x = 0; x < w; x++) {
      const u = (x / (w - 1)) * 2 - 1;                   // -1..1 across
      const across = Math.exp(-u * u * 3.2);
      const a = Math.round(255 * along * along * across);
      const i = (y * w + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255;
      img.data[i + 3] = a;
    }
  }
  g.putImageData(img, 0, 0);
  const tex = new CanvasTexture(cv);
  return tex;
}

let _mesh = null;
let _mat = null;
let _trees = null;
let _built = null;
let _fade = 0;
let _warm = 0;
let _count = 0;
let _lastTarget = 0;

function bake(px, pz, sx, sy, sz, phase, reduced) {
  const b = createBaker();
  const n = pickTallest(_trees, px, pz, SHAFT_RADIUS_D2, SHAFT_COUNT, _idx, _hts);
  _dir.set(sx, sy, sz);
  _qAlign.setFromUnitVectors(_up, _dir);
  _qSpin.setFromAxisAngle(_spinAxis, Math.PI / 2);
  _qCross.copy(_qAlign).multiply(_qSpin);
  let placed = 0;
  for (let k = 0; k < n; k++) {
    if (!shaftSegment(_trees[_idx[k]], sx, sy, sz, _seg)) break;
    const motion = { mode: MOTION.BOB, amp: reduced ? 0 : SHAFT_BOB_AMP, phase: k * 0.9, speed: 0.5 };
    const scale = [SHAFT_WIDTH, _seg.len, 1];
    const pos = [_seg.cx, _seg.cy, _seg.cz];
    // Two planes crossing along the beam, so it has body from any side.
    b.add(_unit, { role: 'shaft', pos, quat: _qAlign, scale, motion });
    b.add(_unit, { role: 'shaft', pos, quat: _qCross, scale, motion });
    placed++;
  }
  _count = placed;
  const geos = placed ? b.buildGeometries() : null;
  if (_mesh.geometry && _mesh.geometry !== _empty) _mesh.geometry.dispose();
  _mesh.geometry = geos ? geos.shaft : _empty;
  if (_mat) _mat.color.setHex(COLOR[phase] || COLOR.DAWN);
  _built = { phase, x: px, z: pz, sx, sy, sz, reduced };
}

const _empty = new PlaneGeometry(0, 0);

/**
 * @brief Build the shaft mesh and add it to the scene, hidden.
 *
 * Hidden and drawing nothing until the first DAWN or DUSK. A throwaway first
 * placement is baked anyway, and the mesh is drawn (at zero opacity) for two
 * frames, so the shader program is compiled in the loading hitch rather than
 * in the middle of the first sunrise.
 *
 * @param {import('three').Scene} scene
 * @param {ReadonlyArray<object>} trees trees_data
 * @return {import('three').Mesh}
 */
export function initLightShafts(scene, trees) {
  if (_mesh) return _mesh;
  _trees = trees;
  _mat = roleMaterial('haze', { opacity: 0, doubleSide: true });
  _mat.map = makeStripTexture();
  _mat.fog = false;                         // the beams are light, not objects in the air
  _mat.blending = AdditiveBlending;
  _mat.side = DoubleSide;
  // Three draws a transparent double-sided material twice (back faces, then
  // front) unless told otherwise, which turned "one draw call" into two when it
  // was measured. Additive with no depth write is order-independent, so one
  // pass is exactly as correct.
  _mat.forceSinglePass = true;
  _mesh = new Mesh(_empty, _mat);
  _mesh.name = 'lightShafts';
  _mesh.visible = false;
  _mesh.castShadow = false;
  _mesh.receiveShadow = false;
  // Never culled: sixteen quads cost nothing, and a culled shaft would make the
  // draw-call count depend on which way the player happens to be looking.
  _mesh.frustumCulled = false;
  _mesh.renderOrder = 3;
  scene.add(_mesh);
  _warm = 2;
  return _mesh;
}

/**
 * @brief Advance the shafts one frame.
 *
 * @param {number} dt seconds
 * @param {string} phase day phase label
 * @param {number} rainRate 0..1
 * @param {number} px @param {number} pz player position
 * @param {number} sx @param {number} sy @param {number} sz unit direction toward the sun
 * @param {boolean} reduced reduced motion
 */
export function updateLightShafts(dt, phase, rainRate, px, pz, sx, sy, sz, reduced) {
  if (!_mesh) return;
  _lastTarget = shaftTarget(phase, rainRate);
  _fade = stepShaftFade(_fade, _lastTarget, dt);

  if (_warm > 0) {
    // Compile pass: drawn invisibly so the program exists before it is needed.
    if (!_built) bake(px, pz, 0.5, 0.6, 0.6245, 'DAWN', reduced);
    _warm--;
    _mat.opacity = 0;
    _mesh.visible = _count > 0;
    if (_warm === 0) { _mesh.visible = false; _built = null; }
    return;
  }

  if (_fade <= 0.002) {
    // Out of sight: nothing drawn, and the placement is forgotten so the next
    // dawn is built fresh for wherever the player has got to.
    if (_mesh.visible) _mesh.visible = false;
    _built = null;
    _mat.opacity = 0;
    return;
  }

  if (!_built || shaftsStale(_built, phase, px, pz, sx, sy, sz, reduced)) {
    bake(px, pz, sx, sy, sz, phase, reduced);
  }
  _mat.opacity = SHAFT_PEAK * _fade;
  _mesh.visible = _count > 0;
}

/**
 * @brief What the shafts are doing, for the dev console and the browser gate.
 * @return {object|null}
 */
export function lightShaftsReport() {
  if (!_mesh) return null;
  return {
    built: !!_built,
    shafts: _count,
    quads: _count * 2,
    visible: _mesh.visible,
    opacity: Math.round(_mat.opacity * 1000) / 1000,
    fade: Math.round(_fade * 1000) / 1000,
    target: Math.round(_lastTarget * 1000) / 1000,
    builtPhase: _built ? _built.phase : null,
    inScene: !!_mesh.parent,
  };
}

/** @brief The mesh, for the debug console's draw-call A/B. */
export function getLightShaftsMesh() { return _mesh; }

/** @brief Tear down. For tests. */
export function disposeLightShafts() {
  if (!_mesh) return;
  if (_mesh.parent) _mesh.parent.remove(_mesh);
  if (_mesh.geometry && _mesh.geometry !== _empty) _mesh.geometry.dispose();
  _mat.dispose();
  _mesh = null; _mat = null; _trees = null; _built = null; _fade = 0; _warm = 0; _count = 0;
}

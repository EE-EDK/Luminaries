// ================================================================
// Shared GPU motion for baked entity geometry
// ================================================================
// One vertex-shader chunk drives every "lifelike" movement that used to be a
// per-frame CPU write on a tiny Mesh: wind sway, player brush-aside, storm
// droop, and nine per-part motion modes (bob, orbit, pendulum, wave, breathe,
// spin, flutter, flicker, reach) plus a rigid joint rig (RIG). The baker
// (`_bake.js`) writes the attributes the chunk reads; the CPU only updates the
// handful of shared uniforms below once per frame. Zero allocations, zero
// per-entity work.
//
// FIELD NOTE (Dr. Chen, instrumentation log):
//   We stopped trying to model each frond individually. The forest does not
//   move part by part; it moves as one field with local phase. Once the
//   equations were written that way, the recordings matched to 3 decimal
//   places. I would feel better about that if I knew where the field's clock
//   was kept.
//
// Attributes (per vertex, written by _bake.js):
//   aSway   float  wind / brush weight (0 = rigid, ~1 = tip of a 1 m plant)
//   aMotion vec4   (mode, amplitude, phase, speed)
//   aPivot  vec3   pivot point in mesh-local space for orbit / pendulum /
//                  breathe / spin / flutter
//   aEmis   float  emissive (or basic-colour) multiplier for the part
// Rigged meshes (material built with a rig, see createRig in _bake.js) also read:
//   aJoint  float  joint index per vertex, -1 = not on any joint
//   aJointW float  joint weight (1.0 for rigid parts, 0 where aJoint = -1)
//   uJoints   vec4[N] root-space joint rotation, composed down the chain on the CPU
//   uJointPos vec3[N] root-space translation: v' = rotate(uJoints[j], v) + uJointPos[j]
// A rig built with scale support (createRig(defs, {scale: true})) also has
//   uJointScale vec3[N] non-uniform scale about the joint's pivot, applied before the rotation:
//   v' = rotate(uJoints[j], v * uJointScale[j]) + uJointPos[j]   (uJointPos already folds the pivot in)
// Instanced meshes additionally carry:
//   aInstGlow  vec3   per-instance emissive tint × intensity
//   aInstPhase float  per-instance phase offset so neighbours desynchronise

/** Motion modes. Stored in aMotion.x. */
export const MOTION = Object.freeze({
  NONE: 0,
  BOB: 1,       // y += amp·sin(t)
  ORBIT: 2,     // revolve around pivot's Y axis, slight vertical wobble
  PENDULUM: 3,  // swing about pivot on X and Z
  WAVE: 4,      // tentacle / curtain: lateral wave weighted by aSway²
  BREATHE: 5,   // scale about pivot by 1 + amp·sin(t)
  SPIN: 6,      // continuous rotation about pivot's Y axis
  FLUTTER: 7,   // small fast rotation about pivot's Z axis
  FLICKER: 8,   // emissive-only twinkle, no displacement
  REACH: 9,     // WAVE + lean toward the player within 3.5 m (snapthorn tentacles)
  RIG: 10       // rigid part on a joint (aJoint); no per-mode displacement of its own
});

/**
 * Most joints a rig may have. The uniform arrays are sized to the rig's own joint
 * count, not to this; this is the ceiling that keeps two vec arrays comfortably
 * inside WebGL2's 256-vec4 vertex-uniform minimum next to the standard material.
 */
export const RIG_MAX_JOINTS = 24;

/** Shared uniforms — updated once per frame by updateMotionGlobals(). */
export const motionUniforms = {
  uTime: { value: 0 },
  uWindAmp: { value: 1.0 },
  // Gust front: a phase that advances with the wind, and the direction it
  // travels. The lean term below is multiplied by how much of the wave has
  // reached each plant, so the canopy moves as a wave rather than all at once.
  uGustPhase: { value: 0 },
  uGustDirX: { value: 1 },
  uGustDirZ: { value: 0 },
  uGustK: { value: (Math.PI * 2) / 26 },
  uGustAmt: { value: 0 },
  uWindLeanX: { value: 0 },
  uWindLeanZ: { value: 0 },
  uPlayerX: { value: 0 },
  uPlayerZ: { value: 0 },
  uDroop: { value: 0 },
  uBloom: { value: 1.0 }   // 0 = day-closed petals … 1 = night-open (driven by bioGlow)
};

/**
 * @brief Push the per-frame globals every motion material reads.
 * @param {number} t world time (s)
 * @param {number} wAmp wind amplitude multiplier (1 + windStrength·1.5 in vegetation.js)
 * @param {number} leanX wind lean X (windX·0.03)
 * @param {number} leanZ wind lean Z
 * @param {number} px player x
 * @param {number} pz player z
 * @param {number} droop storm droop 0..1
 * @param {number} bloom night-bloom factor 0..1 (petal opening)
 */
export function updateMotionGlobals(t, wAmp, leanX, leanZ, px, pz, droop, bloom, gust) {
  motionUniforms.uTime.value = t;
  motionUniforms.uWindAmp.value = wAmp;
  motionUniforms.uWindLeanX.value = leanX;
  motionUniforms.uWindLeanZ.value = leanZ;
  motionUniforms.uPlayerX.value = px;
  motionUniforms.uPlayerZ.value = pz;
  motionUniforms.uDroop.value = droop;
  if (bloom !== undefined) motionUniforms.uBloom.value = bloom;
  if (gust) {
    motionUniforms.uGustPhase.value = gust.phase;
    motionUniforms.uGustDirX.value = gust.dirX;
    motionUniforms.uGustDirZ.value = gust.dirZ;
    motionUniforms.uGustK.value = gust.k;
    motionUniforms.uGustAmt.value = gust.amount;
  }
}

const VERT_PARS_BASE = /* glsl */`
attribute float aSway;
attribute vec4 aMotion;
attribute vec3 aPivot;
attribute float aEmis;
#ifdef USE_INSTANCING
attribute vec3 aInstGlow;
attribute float aInstPhase;
#endif
uniform float uTime;
uniform float uWindAmp;
uniform float uGustPhase;
uniform float uGustDirX;
uniform float uGustDirZ;
uniform float uGustK;
uniform float uGustAmt;
uniform float uWindLeanX;
uniform float uWindLeanZ;
uniform float uPlayerX;
uniform float uPlayerZ;
uniform float uDroop;
uniform float uBloom;
varying vec3 vEmisMul;
`;

const VERT_BODY_TEMPLATE = /* glsl */`
{
  float _mode = aMotion.x;
  float _amp = aMotion.y;
  float _sp = aMotion.w;
  float _ph = aMotion.z;
  #ifdef USE_INSTANCING
  _ph += aInstPhase;
  #endif
  float _t = uTime * _sp + _ph;
  float _emis = aEmis;
  vec3 _p = transformed;
  vec3 _rel = _p - aPivot;

  if (_mode > 0.5 && _mode < 1.5) {
    _p.y += _amp * sin(_t);
  } else if (_mode < 2.5 && _mode > 1.5) {
    float _c = cos(_t), _s = sin(_t);
    _p = aPivot + vec3(_rel.x * _c - _rel.z * _s, _rel.y + _amp * sin(_t * 1.7 + 0.5), _rel.x * _s + _rel.z * _c);
  } else if (_mode < 3.5 && _mode > 2.5) {
    float _ax = _amp * sin(_t), _az = _amp * 0.6 * cos(_t * 0.8);
    float _cx = cos(_ax), _sx = sin(_ax);
    _rel = vec3(_rel.x, _rel.y * _cx - _rel.z * _sx, _rel.y * _sx + _rel.z * _cx);
    float _cz = cos(_az), _sz = sin(_az);
    _p = aPivot + vec3(_rel.x * _cz - _rel.y * _sz, _rel.x * _sz + _rel.y * _cz, _rel.z);
  } else if (_mode < 4.5 && _mode > 3.5) {
    float _w = aSway; float _ww = _w * _w;
    _p.x += _amp * _ww * sin(_t + _w * 2.5);
    _p.z += _amp * 0.6 * _ww * cos(_t * 0.7 + _w * 2.0);
  } else if (_mode < 5.5 && _mode > 4.5) {
    _p = aPivot + _rel * (1.0 + _amp * sin(_t));
  } else if (_mode < 6.5 && _mode > 5.5) {
    float _c = cos(_t), _s = sin(_t);
    _p = aPivot + vec3(_rel.x * _c - _rel.z * _s, _rel.y, _rel.x * _s + _rel.z * _c);
  } else if (_mode < 7.5 && _mode > 6.5) {
    float _az = _amp * sin(_t);
    float _cz = cos(_az), _sz = sin(_az);
    _p = aPivot + vec3(_rel.x * _cz - _rel.y * _sz, _rel.x * _sz + _rel.y * _cz, _rel.z);
  } else if (_mode < 8.5 && _mode > 7.5) {
    _emis *= 0.55 + 0.45 * sin(_t) * sin(_t * 2.3 + 1.0);
  } else if (_mode > 8.5 && _mode < 9.5) {
    // REACH: tentacle wave that also leans toward the player inside 3.5 m
    float _w = aSway; float _ww = _w * _w;
    _p.x += _amp * _ww * sin(_t + _w * 2.5);
    _p.z += _amp * 0.6 * _ww * cos(_t * 0.7 + _w * 2.0);
    vec3 _lw0 = aPivot;
    #ifdef USE_INSTANCING
    _lw0 = (instanceMatrix * vec4(_lw0, 1.0)).xyz;
    #endif
    vec3 _wp0 = (modelMatrix * vec4(_lw0, 1.0)).xyz;
    float _rdx = uPlayerX - _wp0.x, _rdz = uPlayerZ - _wp0.z;
    float _rd = sqrt(_rdx * _rdx + _rdz * _rdz);
    if (_rd < 3.5 && _rd > 0.01) {
      float _k = (1.0 - _rd / 3.5); _k = _k * _k * _ww * 0.22;
      _p.x += _rdx / _rd * _k; _p.z += _rdz / _rd * _k;
      _emis *= 1.0 + _k * 6.0;
    }
  }

//@RIG@
  if (aSway > 0.001) {
    vec3 _lw = _p;
    #ifdef USE_INSTANCING
    _lw = (instanceMatrix * vec4(_lw, 1.0)).xyz;
    #endif
    vec3 _wp = (modelMatrix * vec4(_lw, 1.0)).xyz;
    float _hf = aSway, _hf2 = aSway * aSway;
    float _swX = (sin(uTime * 0.7 + _wp.x * 0.05 + _ph) * 0.06 + sin(uTime * 1.3 + _wp.z * 0.08) * 0.03) * uWindAmp * _hf2;
    float _swZ = (sin(uTime * 0.9 + _wp.z * 0.06 + _ph) * 0.04 + sin(uTime * 1.7 + _wp.x * 0.04) * 0.02) * uWindAmp * _hf2;
    // How much of the travelling gust has reached this plant. Projecting the
    // world position onto the wind direction means everything on a line across
    // the wind leans together, which is what a gust front looks like from
    // inside it. 0..1, never negative — a negative scale would lean the plant
    // into the wind.
    float _gAlong = _wp.x * uGustDirX + _wp.z * uGustDirZ;
    float _gust = 1.0 + uGustAmt * (sin(uGustPhase - _gAlong * uGustK) + 1.0) * 0.5;
    _p.x += _swX + uWindLeanX * _hf * _gust;
    _p.z += _swZ + uWindLeanZ * _hf * _gust;
    float _pdx = _wp.x - uPlayerX, _pdz = _wp.z - uPlayerZ;
    float _pd2 = _pdx * _pdx + _pdz * _pdz;
    if (_pd2 < 1.44 && (_mode < 8.5 || _mode > 9.5)) {
      float _prox = 1.0 - sqrt(_pd2) / 1.2;
      float _f = _prox * _prox * 0.5 * _hf;
      float _il = inversesqrt(max(_pd2, 1e-4));
      _p.x += _pdx * _il * _f * 0.35;
      _p.z += _pdz * _il * _f * 0.35;
      _p.y -= _f * 0.25;
    }
    _p.y -= uDroop * _hf2 * 0.15;
  }
  transformed = _p;
  vEmisMul = vec3(_emis);
  #ifdef USE_INSTANCING
  vEmisMul *= aInstGlow;
  #endif
}
`;

const FRAG_PARS = /* glsl */`
varying vec3 vEmisMul;
`;

/** Declarations for a rig of `n` joints. The arrays are sized exactly, so the program is per joint count (and per scale flag). */
function _rigPars(n, scaled) {
  return /* glsl */`
attribute float aJoint;
attribute float aJointW;
uniform vec4 uJoints[${n}];
uniform vec3 uJointPos[${n}];${scaled ? `
uniform vec3 uJointScale[${n}];` : ''}
vec3 lumRigRotate(vec4 q, vec3 v) {
  vec3 t = 2.0 * cross(q.xyz, v);
  return v + q.w * t + cross(q.xyz, t);
}
`;
}

// Applied after the per-mode displacement (so a mane plane flutters about its own
// pivot in the rest frame, then the whole neck moves) and before wind.
const RIG_STAGE = /* glsl */`
  if (aJoint > -0.5) {
    int _rj = int(aJoint + 0.5);
    vec3 _rp = lumRigRotate(uJoints[_rj], _p) + uJointPos[_rj];
    _p = mix(_p, _rp, aJointW);
  }
`;
// Scaled rig: the scale is taken about the joint pivot, before the rotation. uJointPos on the CPU side already
// carries the pivot term (see createRig), so the shader only multiplies.
const RIG_STAGE_SCALED = /* glsl */`
  if (aJoint > -0.5) {
    int _rj = int(aJoint + 0.5);
    vec3 _rp = lumRigRotate(uJoints[_rj], _p * uJointScale[_rj]) + uJointPos[_rj];
    _p = mix(_p, _rp, aJointW);
  }
`;

// Lit materials only: the normal turns with the limb, as it did when the limb was a mesh.
const RIG_NORMAL = /* glsl */`
  if (aJoint > -0.5) {
    int _rjn = int(aJoint + 0.5);
    objectNormal = normalize(mix(objectNormal, lumRigRotate(uJoints[_rjn], objectNormal), aJointW));
  }
`;
// A non-uniform scale tilts the normal by the inverse of the scale (inverse-transpose of a diagonal matrix).
const RIG_NORMAL_SCALED = /* glsl */`
  if (aJoint > -0.5) {
    int _rjn = int(aJoint + 0.5);
    objectNormal = normalize(mix(objectNormal, lumRigRotate(uJoints[_rjn], objectNormal / uJointScale[_rjn]), aJointW));
  }
`;

function _checkRigCount(n) {
  if (!Number.isInteger(n) || n < 0 || n > RIG_MAX_JOINTS) {
    throw new Error(`motion: rig joint count ${n} is outside 0..${RIG_MAX_JOINTS}`);
  }
}

/**
 * @brief Vertex declarations for the motion chunk.
 * @param {number} [rigCount=0] joints in the material's rig; 0 = not rigged
 * @param {boolean} [scaled=false] the rig has per-joint scale (uJointScale)
 * @return {string} GLSL
 */
export function buildMotionVertexPars(rigCount = 0, scaled = false) {
  _checkRigCount(rigCount);
  return VERT_PARS_BASE + (rigCount > 0 ? _rigPars(rigCount, !!scaled) : '');
}

/**
 * @brief Vertex body of the motion chunk. Exported so tests can read the branch
 * conditions the GPU will run (the chunk is assembled here, in JS).
 * @param {number} [rigCount=0] joints in the material's rig; 0 = not rigged
 * @param {boolean} [scaled=false] the rig has per-joint scale (uJointScale)
 * @return {string} GLSL
 */
export function buildMotionVertexBody(rigCount = 0, scaled = false) {
  _checkRigCount(rigCount);
  return VERT_BODY_TEMPLATE.replace('//@RIG@', rigCount > 0 ? (scaled ? RIG_STAGE_SCALED : RIG_STAGE) : '');
}

function _compile(shader, lit, rig) {
  const n = rig ? rig.count : 0;
  const scaled = !!(rig && rig.scaled);
  Object.assign(shader.uniforms, motionUniforms);
  if (rig) Object.assign(shader.uniforms, rig.uniforms);
  let vs = shader.vertexShader.replace('#include <common>', '#include <common>\n' + buildMotionVertexPars(n, scaled));
  if (rig && lit) vs = vs.replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\n' + (scaled ? RIG_NORMAL_SCALED : RIG_NORMAL));
  shader.vertexShader = vs.replace('#include <begin_vertex>', '#include <begin_vertex>\n' + buildMotionVertexBody(n, scaled));
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', '#include <common>\n' + FRAG_PARS)
    .replace(
      lit ? '#include <emissivemap_fragment>' : '#include <color_fragment>',
      (lit ? '#include <emissivemap_fragment>\n  totalEmissiveRadiance *= vEmisMul;\n' : '#include <color_fragment>\n  diffuseColor.rgb *= vEmisMul;\n')
    );
}

/**
 * @brief Attach the shared motion chunk to a material (in place).
 * Standard materials scale emissive by aEmis; basic materials scale colour.
 * With `opts.rig` (from createRig in _bake.js) the material also moves vertices
 * by their aJoint. The rig's uniform objects are shared by reference, so every
 * material built from one rig sees the same pose; the program key carries the
 * joint count (and the scale flag) so every deer shares one program.
 * @param {import('three').Material} mat
 * @param {{rig?: {count:number, uniforms:object}}} [opts]
 * @return {import('three').Material} the same material
 */
export function applyMotion(mat, opts) {
  const rig = opts && opts.rig ? opts.rig : null;
  const lit = !!mat.isMeshStandardMaterial;
  if (rig) {
    if (!Number.isInteger(rig.count) || rig.count < 1 || rig.count > RIG_MAX_JOINTS) {
      throw new Error(`applyMotion: rig has ${rig.count} joints (1..${RIG_MAX_JOINTS})`);
    }
    mat.userData.lumRig = rig;
    mat.onBeforeCompile = (shader) => _compile(shader, lit, rig);
  } else {
    mat.onBeforeCompile = (shader) => _compile(shader, lit, null);
  }
  // The scale variant is a different program (an extra uniform array and multiply), so it gets its own key suffix.
  const key = (lit ? 'lumMotionStd' : 'lumMotionBasic') + (rig ? ':rig' + rig.count + (rig.scaled ? 's' : '') : '');
  mat.customProgramCacheKey = () => key;
  return mat;
}

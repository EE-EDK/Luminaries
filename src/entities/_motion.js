// ================================================================
// Shared GPU motion for baked entity geometry
// ================================================================
// One vertex-shader chunk drives every "lifelike" movement that used to be a
// per-frame CPU write on a tiny Mesh: wind sway, player brush-aside, storm
// droop, and nine per-part motion modes (bob, orbit, pendulum, wave, breathe,
// spin, flutter, flicker, reach). The baker (`_bake.js`) writes the four attributes
// the chunk reads; the CPU only updates the handful of shared uniforms below
// once per frame. Zero allocations, zero per-entity work.
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
  REACH: 9      // WAVE + lean toward the player within 3.5 m (snapthorn tentacles)
});

/** Shared uniforms — updated once per frame by updateMotionGlobals(). */
export const motionUniforms = {
  uTime: { value: 0 },
  uWindAmp: { value: 1.0 },
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
export function updateMotionGlobals(t, wAmp, leanX, leanZ, px, pz, droop, bloom) {
  motionUniforms.uTime.value = t;
  motionUniforms.uWindAmp.value = wAmp;
  motionUniforms.uWindLeanX.value = leanX;
  motionUniforms.uWindLeanZ.value = leanZ;
  motionUniforms.uPlayerX.value = px;
  motionUniforms.uPlayerZ.value = pz;
  motionUniforms.uDroop.value = droop;
  if (bloom !== undefined) motionUniforms.uBloom.value = bloom;
}

const VERT_PARS = /* glsl */`
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
uniform float uWindLeanX;
uniform float uWindLeanZ;
uniform float uPlayerX;
uniform float uPlayerZ;
uniform float uDroop;
uniform float uBloom;
varying vec3 vEmisMul;
`;

const VERT_BODY = /* glsl */`
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
  } else if (_mode > 8.5) {
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

  if (aSway > 0.001) {
    vec3 _lw = _p;
    #ifdef USE_INSTANCING
    _lw = (instanceMatrix * vec4(_lw, 1.0)).xyz;
    #endif
    vec3 _wp = (modelMatrix * vec4(_lw, 1.0)).xyz;
    float _hf = aSway, _hf2 = aSway * aSway;
    float _swX = (sin(uTime * 0.7 + _wp.x * 0.05 + _ph) * 0.06 + sin(uTime * 1.3 + _wp.z * 0.08) * 0.03) * uWindAmp * _hf2;
    float _swZ = (sin(uTime * 0.9 + _wp.z * 0.06 + _ph) * 0.04 + sin(uTime * 1.7 + _wp.x * 0.04) * 0.02) * uWindAmp * _hf2;
    _p.x += _swX + uWindLeanX * _hf;
    _p.z += _swZ + uWindLeanZ * _hf;
    float _pdx = _wp.x - uPlayerX, _pdz = _wp.z - uPlayerZ;
    float _pd2 = _pdx * _pdx + _pdz * _pdz;
    if (_pd2 < 1.44 && _mode < 8.5) {
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

function _onBeforeCompileStandard(shader) {
  Object.assign(shader.uniforms, motionUniforms);
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\n' + VERT_PARS)
    .replace('#include <begin_vertex>', '#include <begin_vertex>\n' + VERT_BODY);
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', '#include <common>\n' + FRAG_PARS)
    .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance *= vEmisMul;\n');
}

function _onBeforeCompileBasic(shader) {
  Object.assign(shader.uniforms, motionUniforms);
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\n' + VERT_PARS)
    .replace('#include <begin_vertex>', '#include <begin_vertex>\n' + VERT_BODY);
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', '#include <common>\n' + FRAG_PARS)
    .replace('#include <color_fragment>', '#include <color_fragment>\n  diffuseColor.rgb *= vEmisMul;\n');
}

/**
 * @brief Attach the shared motion chunk to a material (in place).
 * Standard materials scale emissive by aEmis; basic materials scale colour.
 * @param {import('three').Material} mat
 * @return {import('three').Material} the same material
 */
export function applyMotion(mat) {
  if (mat.isMeshStandardMaterial) {
    mat.onBeforeCompile = _onBeforeCompileStandard;
    mat.customProgramCacheKey = () => 'lumMotionStd';
  } else {
    mat.onBeforeCompile = _onBeforeCompileBasic;
    mat.customProgramCacheKey = () => 'lumMotionBasic';
  }
  return mat;
}

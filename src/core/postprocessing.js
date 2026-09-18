import { Vector2 } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { renderer, scene, camera } from './renderer.js';

// ================================================================
// Saturation shader — controls color ↔ greyscale blend
// ================================================================
const SaturationShader = {
  uniforms: {
    tDiffuse: { value: null },
    saturation: { value: 1.0 }, // 0 = greyscale, 1 = full color
    // Vignette and grain ride along in this pass rather than in two more of
    // their own: three full-screen passes to do what one can is three times
    // the fill rate on the machine least able to afford it.
    uVignette: { value: 0.0 },  // 0 = off, ~0.35 = a soft dark corner
    uGrain: { value: 0.0 },     // 0 = off, ~0.05 = film, above 0.1 = noise
    uTime: { value: 0.0 },      // grain moves; static grain reads as dirt
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float saturation;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uTime;
    varying vec2 vUv;

    // Cheap hash noise. Not good noise — good enough for a grain that is
    // gone again in 16 ms, and it costs no texture fetch.
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      vec3 rgb = mix(vec3(luma), color.rgb, saturation);

      // Vignette: darken toward the corners, measured from the centre in a
      // square aspect so it stays round rather than becoming an oval on a
      // wide window. smoothstep keeps the falloff off the visible edge.
      if (uVignette > 0.001) {
        vec2 d = vUv - 0.5;
        float r = length(d) * 1.4142;                 // 0 centre → 1 corner
        float v = 1.0 - uVignette * smoothstep(0.45, 1.0, r);
        rgb *= v;
      }

      // Grain, scaled by darkness: the forest is mostly dark, and grain laid
      // evenly over a bright glow reads as a broken bloom. Riding it on
      // (1 - luma) puts it where film actually shows it.
      if (uGrain > 0.001) {
        float n = hash(vUv * 1024.0 + fract(uTime) * 91.7) - 0.5;
        rgb += n * uGrain * (1.0 - luma * 0.75);
      }

      gl_FragColor = vec4(rgb, color.a);
    }
  `,
};

// ================================================================
// Bloom + Saturation Post-Processing
// ================================================================

export let composer = null;
export let bloomEnabled = true;
export let bloomPass = null;
let saturationPass = null;

try {
  const renderPass = new RenderPass(scene, camera);
  bloomPass = new UnrealBloomPass(
    new Vector2(Math.min(448, Math.floor(window.innerWidth / 2)), Math.min(448, Math.floor(window.innerHeight / 2))),
    0.6,   // strength — subtle dreamy glow
    0.4,   // radius — how far bloom spreads
    0.85   // threshold — only bright emissives bloom
  );
  saturationPass = new ShaderPass(SaturationShader);
  composer = new EffectComposer(renderer);
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(saturationPass);
} catch (e) {
  console.warn('Bloom unavailable, falling back to direct render:', e.message);
  bloomEnabled = false;
}

// Set saturation level: 0 = full greyscale, 1 = full color
export function setSaturation(value) {
  if (saturationPass) {
    saturationPass.uniforms.saturation.value = value;
  }
}

/**
 * @brief Vignette strength. 0 is off; about 0.35 is a soft dark corner.
 * @param {number} value clamped to [0, 1]
 */
export function setVignette(value, force) {
  if (!saturationPass) return 0;
  if (_override && !force && _override.vignette !== undefined) return saturationPass.uniforms.uVignette.value;
  const v = clamp01(value);
  saturationPass.uniforms.uVignette.value = v;
  return v;
}

/**
 * @brief Film grain amount. 0 is off; about 0.05 is film, above 0.1 is noise.
 * Reduced motion sets this to 0 — moving grain is motion the player did not ask for.
 * @param {number} value clamped to [0, 0.15]
 */
export function setGrain(value, force) {
  if (!saturationPass) return 0;
  if (_override && !force && _override.grain !== undefined) return saturationPass.uniforms.uGrain.value;
  const n = Number.isFinite(value) ? value : 0;
  const v = n < 0 ? 0 : (n > 0.15 ? 0.15 : n);
  saturationPass.uniforms.uGrain.value = v;
  return v;
}

/** @brief Advance the grain. Call once per frame with elapsed seconds. */
export function setPostTime(t) {
  if (saturationPass) saturationPass.uniforms.uTime.value = t;
}

// An override pins vignette and grain against the per-frame driver, so a
// measurement can hold one value still long enough to photograph it.
let _override = null;

/**
 * @brief Pin the post-pass look, or release it.
 * @param {{vignette?:number, grain?:number}|null} over null releases
 */
export function setPostOverride(over) {
  _override = over && typeof over === 'object' ? { ...over } : null;
  if (_override) {
    if (_override.vignette !== undefined) setVignette(_override.vignette, true);
    if (_override.grain !== undefined) setGrain(_override.grain, true);
  }
  return _override;
}

/** @brief Whether the per-frame driver is currently being overridden. */
export function isPostOverridden() { return _override !== null; }

/** @brief What the post pass is currently set to, for tests and the dev panel. */
export function getPostSettings() {
  if (!saturationPass) return null;
  const u = saturationPass.uniforms;
  return { saturation: u.saturation.value, vignette: u.uVignette.value, grain: u.uGrain.value };
}

function clamp01(v) {
  const n = Number.isFinite(v) ? v : 0;
  return n < 0 ? 0 : (n > 1 ? 1 : n);
}

// Handle resize — composer uses full resolution, bloom pass internally uses reduced
// (NOTE: renderer.js and input.js also listen for 'resize')
window.addEventListener('resize', () => {
  if (bloomEnabled && composer) {
    composer.setSize(window.innerWidth, window.innerHeight);
    // Re-cap bloom resolution after resize. composer.setSize() calls
    // UnrealBloomPass.setSize(fullW, fullH), which sizes render targets from its
    // ARGUMENTS (width/2 x height/2) and never reads .resolution — so writing
    // bloomPass.resolution here was a no-op and the targets reverted to uncapped
    // half-viewport. Re-calling setSize with 2x the capped size yields capped
    // internal targets (setSize halves its inputs).
    if (bloomPass) {
      const w = Math.min(448, Math.floor(window.innerWidth / 2));
      const h = Math.min(448, Math.floor(window.innerHeight / 2));
      bloomPass.setSize(w * 2, h * 2);
    }
  }
});

export function render() {
  if (bloomEnabled && composer) {
    composer.render();
  } else {
    renderer.render(scene, camera);
  }
}

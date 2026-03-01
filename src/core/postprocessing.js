import * as THREE from 'three';
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
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      vec3 grey = vec3(luma);
      gl_FragColor = vec4(mix(grey, color.rgb, saturation), color.a);
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
    new THREE.Vector2(Math.floor(window.innerWidth / 2), Math.floor(window.innerHeight / 2)),
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

// Handle resize — composer uses full resolution, bloom pass internally uses reduced
window.addEventListener('resize', () => {
  if (bloomEnabled && composer) {
    composer.setSize(window.innerWidth, window.innerHeight);
  }
});

export function render() {
  if (bloomEnabled && composer) {
    composer.render();
  } else {
    renderer.render(scene, camera);
  }
}

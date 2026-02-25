import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { renderer, scene, camera } from './renderer.js';

// ================================================================
// Bloom Post-Processing
// ================================================================

export let composer = null;
export let bloomEnabled = true;

try {
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.6,   // strength — subtle dreamy glow
    0.4,   // radius — how far bloom spreads
    0.85   // threshold — only bright emissives bloom
  );
  composer = new EffectComposer(renderer);
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
} catch (e) {
  console.warn('Bloom unavailable, falling back to direct render:', e.message);
  bloomEnabled = false;
}

// Handle resize
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

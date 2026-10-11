// ================================================================
// Luminaries — Main Entry Point
// ================================================================
// Welcome, Inspector.
// This is a procedurally generated bioluminescent forest. Everything
// you see, hear, and feel is built from mathematics — no textures,
// no audio files, no borrowed assets. Just numbers becoming light.
//
// If you're reading this, you've gone deeper than most. The forest
// has layers. So does its source. There are notes scattered through
// these files — field reports, lab entries, observations from people
// who studied this place before you arrived. Some made it out.
//
// Explore. The mushrooms pulse when you're near. The deer aren't
// running from you. The orbs are waiting.
//
// — L
// ================================================================
import { boot } from './core/boot.js';
import { animate } from './core/loop.js';
import { initDebugTools } from './debug/debugWiring.js';

// The sequence, in the order it has always run: build everything, attach the
// debug tooling once there is something to attach it to, then start the loop.
try {
  boot();
  initDebugTools();
  animate();
} catch (err) {
  console.error('INIT FAILED:', err);
  document.body.innerHTML = '<div style="color:red;padding:30px;font-family:monospace">' +
    '<h2>Init Failed</h2><pre>' + (err.stack || err.message) + '</pre></div>';
}

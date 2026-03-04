import { ACESFilmicToneMapping, Clock, Color, FogExp2, PCFSoftShadowMap, PerspectiveCamera, SRGBColorSpace, Scene, WebGLRenderer } from 'three';
import { C } from '../constants.js';

// ================================================================
// PHASE 0 — Scaffold
// ================================================================
// You opened the console. Good.
// Not everyone looks behind the curtain. The forest rewards curiosity.
// Keep looking. There are notes in here — left by people who studied
// this place before you. Some of them are... still here.
export const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'default' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 2.8;
renderer.outputColorSpace = SRGBColorSpace;
document.body.appendChild(renderer.domElement);

export const camera = new PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 300);
export const clock = new Clock();
export const scene = new Scene();

scene.background = new Color(C.skyDeep);
scene.fog = new FogExp2(C.fog, 0.010);

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Pause when tab hidden (prevents dt spike on return)
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) clock.getDelta();
});

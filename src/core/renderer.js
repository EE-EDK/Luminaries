import * as THREE from 'three';
import { C } from '../constants.js';

// ================================================================
// PHASE 0 — Scaffold
// ================================================================
export const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'default' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 2.5;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

export const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 300);
export const clock = new THREE.Clock();
export const scene = new THREE.Scene();

scene.background = new THREE.Color(C.skyDeep);
scene.fog = new THREE.FogExp2(C.fog, 0.010);

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

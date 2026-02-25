import * as THREE from 'three';

// ================================================================
// Shared Geometries (Asset Factory)
// ================================================================

export const GEO = {
  mushCap: new THREE.SphereGeometry(0.5, 8, 5),
  mushStem: new THREE.CylinderGeometry(0.06, 0.1, 0.6, 5),
  mushDot: new THREE.SphereGeometry(0.06, 4, 3),
  crystal: new THREE.CylinderGeometry(0, 0.35, 1.8, 6),
  crystalSm: new THREE.CylinderGeometry(0, 0.18, 0.9, 5),
  fly: new THREE.SphereGeometry(0.06, 4, 3),
  spore: new THREE.SphereGeometry(0.04, 3, 3),
  dandSeed: new THREE.SphereGeometry(0.025, 3, 3),
  bubble: new THREE.SphereGeometry(0.15, 8, 6),
  starMote: new THREE.SphereGeometry(0.03, 3, 3),
  dustMote: new THREE.SphereGeometry(0.035, 3, 3)
};

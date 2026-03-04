import { CylinderGeometry, SphereGeometry } from 'three';

// ================================================================
// Shared Geometries (Asset Factory)
// ================================================================

export const GEO = {
  mushCap: new SphereGeometry(0.5, 8, 5),
  mushStem: new CylinderGeometry(0.06, 0.1, 0.6, 5),
  mushDot: new SphereGeometry(0.06, 4, 3),
  crystal: new CylinderGeometry(0, 0.35, 1.8, 6),
  crystalSm: new CylinderGeometry(0, 0.18, 0.9, 5),
  fly: new SphereGeometry(0.06, 4, 3),
  spore: new SphereGeometry(0.04, 3, 3),
  dandSeed: new SphereGeometry(0.025, 3, 3),
  bubble: new SphereGeometry(0.15, 8, 6),
  starMote: new SphereGeometry(0.03, 3, 3),
  dustMote: new SphereGeometry(0.035, 3, 3)
};

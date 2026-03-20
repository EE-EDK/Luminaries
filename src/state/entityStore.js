// ================================================================
// Entity Store — centralized entity arrays for all 29 types
// ================================================================
// Previously scattered across main.js module scope. Now importable
// by any system that needs entity data, eliminating context bags.

export const trees_data = [];    // { x, z, y, treeH, yRot, scale }
export let treeMeshes = [];      // InstancedMesh groups per template
export const treeImpostors = []; // billboard sprites per tree
export const mush_data = [];
export const crys_data = [];
export const jellies = [];
export const puffs = [];
export const deers = [];
export const moths = [];
export const luminids = [];
export const grassPatches = [];
export const ferns = [];
export const flowers = [];
export const reeds = [];
export const rocks_data = [];
export const wisps = [];
export const dandelions = [];
export const fairyRings = [];
export const bubbles = [];
export const ponds = [];
export const orbs = [];
export const thornblooms = [];
export const helixvines = [];
export const snapthorns = [];
export const spiralfronds = [];
export const corpseblooms = [];
export const orbbushes = [];
export const lanternpods = [];
export const veilmosses = [];
export const groundGlows = [];

// Crystal proximity sort buffer (reused per frame, avoids allocation)
export const crystalSortBuf = [];
export let crystalSortPX = 0;
export let crystalSortPZ = 0;

// Setters for values that need reassignment
export function setTreeMeshes(meshes) { treeMeshes = meshes; }
export function setCrystalSortPos(px, pz) { crystalSortPX = px; crystalSortPZ = pz; }

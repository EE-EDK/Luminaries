// ================================================================
// System Registration — registers director subsystems with scheduler
// ================================================================
// This is the bridge between the existing director() sections and the
// new kernel scheduler. Each director section is wrapped as a named
// system with an explicit phase.

import { addSystem, Phase } from '../kernel/scheduler.js';
import { updateDynamicEntityHash } from '../state/entityStore.js';

// ================================================================
// Nearest-creature tracking
// ================================================================
export const nearest = {
  puffDist2: Infinity, puffPos: { x: 0, z: 0 },
  jellyDist2: Infinity, jellyPos: { x: 0, z: 0 },
  deerDist2: Infinity, deerPos: { x: 0, z: 0 }, deerWanderAng: 0,
  mothDist2: Infinity, mothPos: { x: 0, z: 0 },
  luminidDist2: Infinity, luminidPos: { x: 0, z: 0 },
};

// ================================================================
// Register all director subsystems
// ================================================================
export function registerAllSystems(deps) {
  // deps contains references that can't come from registry/context

  // --- Spatial Hash Update ---
  addSystem('spatialHashUpdate', Phase.SPATIAL_HASH_UPDATE, () => {
    updateDynamicEntityHash();
  });

  // --- Crystal Proximity ---
  addSystem('crystalProximity', Phase.CRYSTAL_PROXIMITY, (dt, t, ctx) => {
    if (deps.crystalProximity) deps.crystalProximity(dt, t, ctx);
  });

  // --- Particle Spawning ---
  addSystem('particleSpawn', Phase.PARTICLE_SPAWN, (dt, t, ctx) => {
    if (deps.particleSpawn) deps.particleSpawn(dt, t, ctx);
  });

  // --- Flora Glow (mushrooms, crystals) ---
  addSystem('floraGlow', Phase.FLORA_GLOW, (dt, t, ctx) => {
    if (deps.floraGlow) deps.floraGlow(dt, t, ctx);
  });

  // --- Spirit Hum (phase before fauna — lock state matches jelly ritual same frame) ---
  addSystem('spiritHum', Phase.SPIRIT_HUM, (dt, t, ctx) => {
    if (deps.spiritHumUpdate) deps.spiritHumUpdate(dt, t, ctx);
  });

  // --- Fauna Update ---
  addSystem('fauna', Phase.FAUNA_UPDATE, (dt, t, ctx) => {
    if (deps.faunaUpdate) deps.faunaUpdate(dt, t, ctx);
  });

  // --- Attunement ---
  addSystem('attunement', Phase.ATTUNEMENT, (dt, t, ctx) => {
    if (deps.attunementUpdate) deps.attunementUpdate(dt, t, ctx);
  });

  // --- Sky ---
  addSystem('sky', Phase.SKY, (dt, t, ctx) => {
    if (deps.skyUpdate) deps.skyUpdate(dt, t, ctx);
  });

  // --- Vegetation ---
  addSystem('vegetation', Phase.VEGETATION, (dt, t, ctx) => {
    if (deps.vegetationUpdate) deps.vegetationUpdate(dt, t, ctx);
  });

  // --- Rocks ---
  addSystem('rocks', Phase.ROCKS, (dt, t, ctx) => {
    if (deps.rocksUpdate) deps.rocksUpdate(dt, t, ctx);
  });

  // --- Magical Entities ---
  addSystem('magical', Phase.MAGICAL_UPDATE, (dt, t, ctx) => {
    if (deps.magicalUpdate) deps.magicalUpdate(dt, t, ctx);
  });

  // --- Particles ---
  addSystem('particles', Phase.PARTICLES, (dt, t, ctx) => {
    if (deps.particleUpdate) deps.particleUpdate(dt, t, ctx);
  });

  // --- Quest ---
  addSystem('quest', Phase.QUEST, (dt, t, ctx) => {
    if (deps.questUpdate) deps.questUpdate(dt, t, ctx);
  });

  // --- Footprints ---
  addSystem('footprints', Phase.FOOTPRINTS, (dt, t, ctx) => {
    if (deps.footprintUpdate) deps.footprintUpdate(dt, t, ctx);
  });

  // --- Audio ---
  addSystem('audio', Phase.AUDIO, (dt, t, ctx) => {
    if (deps.audioUpdate) deps.audioUpdate(dt, t, ctx);
  });

  // --- Discoveries ---
  addSystem('discoveries', Phase.DISCOVERIES, (dt, t, ctx) => {
    if (deps.discoveriesUpdate) deps.discoveriesUpdate(dt, t, ctx);
  });

  // --- HUD ---
  addSystem('hud', Phase.HUD, (dt, t, ctx) => {
    if (deps.hudUpdate) deps.hudUpdate(dt, t, ctx);
  });
}

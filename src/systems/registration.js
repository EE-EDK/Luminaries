// ================================================================
// System Registration — registers director subsystems with scheduler
// ================================================================
// This is the bridge between the existing director() sections and the
// new kernel scheduler. Each director section is wrapped as a named
// system with an explicit phase.
//
// Over time, individual systems can be extracted into their own files
// and self-register. For now, this provides the ordering guarantees
// and enable/disable control without requiring a full rewrite.

import { addSystem, Phase } from '../kernel/scheduler.js';
import { ctx } from '../kernel/context.js';
import { get, EntityType } from '../kernel/registry.js';

// Import existing update functions
import { spawnFireflies, spawnSpores, spawnWindParticles } from '../updates/spawning.js';
import { updateJellies as _updateJellies, updatePuffs as _updatePuffs, updateDeers as _updateDeers, updateMoths as _updateMoths } from '../updates/fauna.js';
import { updateVegetation as _updateVegetation, updateFloraReactions as _updateFloraReactions } from '../updates/vegetation.js';
import { updateWisps as _updateWisps, updateFairyRings as _updateFairyRings, updateBubbles as _updateBubbles, updatePonds as _updatePonds, updateEchoBloom as _updateEchoBloom } from '../updates/magicalEntities.js';

// ================================================================
// Nearest-creature tracking (previously in main.js module scope)
// ================================================================
// This is the formal owner of cross-system creature proximity data.
// Written by fauna update, read by spiritHum + attunement.
export const nearest = {
  puffDist2: Infinity, puffPos: { x: 0, z: 0 },
  jellyDist2: Infinity, jellyPos: { x: 0, z: 0 },
  deerDist2: Infinity, deerPos: { x: 0, z: 0 }, deerWanderAng: 0,
  mothDist2: Infinity, mothPos: { x: 0, z: 0 },
};

// ================================================================
// Register all director subsystems
// ================================================================
export function registerAllSystems(deps) {
  // deps contains references that can't come from registry/context
  // (scene, Three.js objects, audio fns, UI fns, particle spawn fns, etc.)

  // --- Crystal Proximity ---
  addSystem('crystalProximity', Phase.CRYSTAL_PROXIMITY, (dt, t) => {
    if (deps.crystalProximity) deps.crystalProximity(dt, t);
  });

  // --- Particle Spawning ---
  addSystem('particleSpawn', Phase.PARTICLE_SPAWN, (dt, t) => {
    if (deps.particleSpawn) deps.particleSpawn(dt, t);
  });

  // --- Flora Glow (mushrooms, crystals) ---
  addSystem('floraGlow', Phase.FLORA_GLOW, (dt, t) => {
    if (deps.floraGlow) deps.floraGlow(dt, t);
  });

  // --- Fauna Update ---
  addSystem('fauna', Phase.FAUNA_UPDATE, (dt, t) => {
    if (deps.faunaUpdate) deps.faunaUpdate(dt, t);
  });

  // --- Spirit Hum ---
  addSystem('spiritHum', Phase.SPIRIT_HUM, (dt, t) => {
    if (deps.spiritHumUpdate) deps.spiritHumUpdate(dt, t);
  });

  // --- Attunement ---
  addSystem('attunement', Phase.ATTUNEMENT, (dt, t) => {
    if (deps.attunementUpdate) deps.attunementUpdate(dt, t);
  });

  // --- Sky ---
  addSystem('sky', Phase.SKY, (dt, t) => {
    if (deps.skyUpdate) deps.skyUpdate(dt, t);
  });

  // --- Vegetation ---
  addSystem('vegetation', Phase.VEGETATION, (dt, t) => {
    if (deps.vegetationUpdate) deps.vegetationUpdate(dt, t);
  });

  // --- Rocks ---
  addSystem('rocks', Phase.ROCKS, (dt, t) => {
    if (deps.rocksUpdate) deps.rocksUpdate(dt, t);
  });

  // --- Magical Entities ---
  addSystem('magical', Phase.MAGICAL_UPDATE, (dt, t) => {
    if (deps.magicalUpdate) deps.magicalUpdate(dt, t);
  });

  // --- Particles ---
  addSystem('particles', Phase.PARTICLES, (dt, t) => {
    if (deps.particleUpdate) deps.particleUpdate(dt, t);
  });

  // --- Quest ---
  addSystem('quest', Phase.QUEST, (dt, t) => {
    if (deps.questUpdate) deps.questUpdate(dt, t);
  });

  // --- Footprints ---
  addSystem('footprints', Phase.FOOTPRINTS, (dt, t) => {
    if (deps.footprintUpdate) deps.footprintUpdate(dt, t);
  });

  // --- Audio ---
  addSystem('audio', Phase.AUDIO, (dt, t) => {
    if (deps.audioUpdate) deps.audioUpdate(dt, t);
  });

  // --- Discoveries ---
  addSystem('discoveries', Phase.DISCOVERIES, (dt, t) => {
    if (deps.discoveriesUpdate) deps.discoveriesUpdate(dt, t);
  });

  // --- HUD ---
  addSystem('hud', Phase.HUD, (dt, t) => {
    if (deps.hudUpdate) deps.hudUpdate(dt, t);
  });
}

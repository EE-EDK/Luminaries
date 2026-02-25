import * as THREE from 'three';
import { EYE_H } from './constants.js';

// ================================================================
// Shared mutable game state
// ================================================================

// Entity data arrays
export const trees_data = [];
export const mush_data = [];
export const crys_data = [];
export const jellies = [];
export const puffs = [];
export const deers = [];
export const moths = [];
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

// Particle pools
export const flies = [];
export const spores = [];
export const starMotes = [];
export const dustMotes = [];
export const dandSeeds = [];
export const bubblePops = [];

// Player
export const player = {
  pos: new THREE.Vector3(0, EYE_H, 0),
  vel: new THREE.Vector3(),
  onGround: true
};

// Head bob / Sprint FOV / Landing Cushion state
export let headBobPhase = 0;
export let headBobAmp = 0;
export let cameraBobY = 0;
export let currentFOV = 65;
export let targetFOV = 65;
export let landingDip = 0;
export let wasOnGround = true;
export let landingVelY = 0;
export let playerIdleTime = 0;

// Echo bloom state
export let echoBloomTimer = 0;
export let echoBloomCenter = null;
export let echoBloomRadius = 0;

// Quest state
export let orbsFound = 0;
export let questPhase = 'SEEK'; // SEEK → RISING → COMPLETE → FINALE
export let obeliskY = -30; // starts buried (= -OBELISK_H)
export let finaleTimer = 0;

// Obelisk references
export let obeliskGroup = null;
export let obeliskMat = null;
export let obeliskGlowMat = null;

// Moat references
export let moatMesh = null;
export let moatMat = null;

// Rainbow arcs
export const rainbowArcs = [];

// Director state
export let state = 'EXPLORE';
export let ffTimer = 0;
export let spTimer = 0;
export let starTimer = 0;

// Game started flag
export let started = false;
export let elapsed = 0;

// Setters for mutable state (needed since ES modules export bindings, not values for primitives)
export function setHeadBobPhase(v) { headBobPhase = v; }
export function setHeadBobAmp(v) { headBobAmp = v; }
export function setCameraBobY(v) { cameraBobY = v; }
export function setCurrentFOV(v) { currentFOV = v; }
export function setTargetFOV(v) { targetFOV = v; }
export function setLandingDip(v) { landingDip = v; }
export function setWasOnGround(v) { wasOnGround = v; }
export function setLandingVelY(v) { landingVelY = v; }
export function setPlayerIdleTime(v) { playerIdleTime = v; }
export function setEchoBloomTimer(v) { echoBloomTimer = v; }
export function setEchoBloomCenter(v) { echoBloomCenter = v; }
export function setEchoBloomRadius(v) { echoBloomRadius = v; }
export function setOrbsFound(v) { orbsFound = v; }
export function setQuestPhase(v) { questPhase = v; }
export function setObeliskY(v) { obeliskY = v; }
export function setFinaleTimer(v) { finaleTimer = v; }
export function setObeliskGroup(v) { obeliskGroup = v; }
export function setObeliskMat(v) { obeliskMat = v; }
export function setObeliskGlowMat(v) { obeliskGlowMat = v; }
export function setMoatMesh(v) { moatMesh = v; }
export function setMoatMat(v) { moatMat = v; }
export function setState(v) { state = v; }
export function setFfTimer(v) { ffTimer = v; }
export function setSpTimer(v) { spTimer = v; }
export function setStarTimer(v) { starTimer = v; }
export function setStarted(v) { started = v; }
export function setElapsed(v) { elapsed = v; }

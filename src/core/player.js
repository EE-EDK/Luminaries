import * as THREE from 'three';
import { GRAVITY, MOVE_SPEED, SPRINT_MULT, JUMP_IMPULSE, GROUND_DRAG, AIR_DRAG, EYE_H, WORLD_R } from '../constants.js';
import { camera } from './renderer.js';
import { playerLight } from './lighting.js';
import { getInput, keys, yaw, pitch, touchJump, setTouchJump, touchSprint } from './input.js';
import { getGroundY } from '../world/terrain.js';

// Player state
// You start at (0, 1.7, 0). Eye height of an average human adult.
// The forest built itself around this exact vantage point. 1.7 meters.
// Every canopy gap, every mushroom cluster, every distant shimmer —
// framed for eyes at this height. Yours.
export const player = { pos: new THREE.Vector3(0, EYE_H, 0), vel: new THREE.Vector3(), onGround: true };

// Head bob / Sprint FOV / Landing Cushion state
let headBobPhase = 0, headBobAmp = 0;
export let cameraBobY = 0;
let currentFOV = 65, targetFOV = 65;
let landingDip = 0, wasOnGround = true, landingVelY = 0;
export let playerIdleTime = 0;

// Audio callbacks (set from main)
let onStepFn = null, onJumpFn = null, onLandFn = null;
let prevBobSign = 1;

export function setAudioCallbacks(onStep, onJump, onLand) {
  onStepFn = onStep; onJumpFn = onJump; onLandFn = onLand;
}

// Collision data references (set from main)
let treesData = [];
let rocksData = [];
let spawnDustBurstFn = null;

export function setCollisionData(trees, rocks) {
  treesData = trees;
  rocksData = rocks;
}

export function setDustBurstFn(fn) {
  spawnDustBurstFn = fn;
}

export function updatePlayer(dt) {
  const inp = getInput();
  const sprinting = keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint;
  player.vel.x = inp.x;
  player.vel.z = inp.z;
  player.vel.y -= GRAVITY * dt;
  if ((keys['Space'] || touchJump) && player.onGround) {
    player.vel.y = JUMP_IMPULSE; player.onGround = false; setTouchJump(false);
    if (onJumpFn) onJumpFn();
  }
  // Track pre-landing velocity for cushion
  if (!player.onGround) landingVelY = player.vel.y;
  player.pos.x += player.vel.x * dt;
  player.pos.y += player.vel.y * dt;
  player.pos.z += player.vel.z * dt;
  const groundY = getGroundY(player.pos.x, player.pos.z) + EYE_H;
  if (player.pos.y <= groundY) {
    player.pos.y = groundY; player.vel.y = 0;
    // Landing detection
    if (!wasOnGround && landingVelY < -3) {
      const impactStrength = Math.min(Math.abs(landingVelY) / JUMP_IMPULSE, 1);
      landingDip = impactStrength * 0.15;
      if (spawnDustBurstFn) spawnDustBurstFn(player.pos.x, player.pos.z, Math.floor(3 + impactStrength * 5));
      if (onLandFn) onLandFn(impactStrength);
    }
    player.onGround = true;
  }
  wasOnGround = player.onGround;
  if (player.onGround) { player.vel.x *= GROUND_DRAG; player.vel.z *= GROUND_DRAG; }
  else { player.vel.x *= AIR_DRAG; player.vel.z *= AIR_DRAG; }

  // --- Collision: push player out of tree trunks and rocks ---
  const PLAYER_R = 0.4;
  for (let ci = 0; ci < treesData.length; ci++) {
    const td = treesData[ci];
    const cdx = player.pos.x - td.x, cdz = player.pos.z - td.z;
    const cd2 = cdx * cdx + cdz * cdz;
    const tr = 0.6 + PLAYER_R;
    if (cd2 < tr * tr && cd2 > 0.001) {
      const cdi = 1 / Math.sqrt(cd2);
      player.pos.x = td.x + cdx * cdi * tr;
      player.pos.z = td.z + cdz * cdi * tr;
    }
  }
  for (let ci = 0; ci < rocksData.length; ci++) {
    const rd = rocksData[ci];
    const cdx = player.pos.x - rd.x, cdz = player.pos.z - rd.z;
    const cd2 = cdx * cdx + cdz * cdz;
    const rr = rd.colR + PLAYER_R;
    if (cd2 < rr * rr && cd2 > 0.001) {
      const cdi = 1 / Math.sqrt(cd2);
      player.pos.x = rd.x + cdx * cdi * rr;
      player.pos.z = rd.z + cdz * cdi * rr;
    }
  }
  const d = Math.sqrt(player.pos.x * player.pos.x + player.pos.z * player.pos.z);
  if (d > WORLD_R) {
    const a = Math.atan2(player.pos.z, player.pos.x);
    player.pos.x = Math.cos(a) * WORLD_R; player.pos.z = Math.sin(a) * WORLD_R;
  }
  playerLight.position.copy(player.pos);

  // --- Head Bob ---
  const speed = Math.sqrt(inp.x * inp.x + inp.z * inp.z);
  const moving = speed > 0.5 && player.onGround;
  if (moving) playerIdleTime = 0; else playerIdleTime += dt;
  const bobTarget = moving ? (sprinting ? 0.06 : 0.035) : 0;
  headBobAmp += (bobTarget - headBobAmp) * dt * 6;
  if (moving) headBobPhase += dt * (sprinting ? 12 : 8);
  const bobOffset = Math.sin(headBobPhase) * headBobAmp;
  // Footstep detection: trigger on bob phase crossing downward through zero
  if (moving && onStepFn) {
    const curSign = Math.sin(headBobPhase) >= 0 ? 1 : -1;
    if (prevBobSign > 0 && curSign < 0) onStepFn(sprinting);
    prevBobSign = curSign;
  }

  // --- Sprint FOV ---
  targetFOV = (sprinting && moving) ? 78 : 65;
  currentFOV += (targetFOV - currentFOV) * dt * 4;
  camera.fov = currentFOV;
  camera.updateProjectionMatrix();

  // --- Landing Cushion ---
  landingDip *= Math.pow(0.04, dt);
  if (landingDip < 0.001) landingDip = 0;

  // Store camera-only Y offset
  cameraBobY = bobOffset - landingDip;
}

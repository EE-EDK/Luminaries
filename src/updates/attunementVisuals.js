// ================================================================
// Attunement Visual System — flash effects, echo rings, narrative text
// ================================================================
// Extracted from main.js _directorAttunement(). Manages the visual
// response to creature attunement events.

import { player } from '../core/player.js';
import { keys, touchSprint, yaw, pitch, mouseDown, touchJump } from '../core/input.js';
import { updateAttunement, getAttunementTarget, getFlashCreaturePos, checkFlash } from '../systems/attunement.js';
import { spawnResonanceRing } from '../particles/resonanceRings.js';
import { getGroundY } from '../world/terrain.js';
import { getPerspective } from '../state/narrativeState.js';
import { showNarrativeText } from '../systems/discoveries.js';
import { puffs } from '../state/entityStore.js';
import { attuneFlashTimer, attuneFlashType, setAttuneFlash, setEchoTimer } from '../state/gameState.js';
import { nearest } from '../systems/registration.js';

// Local ring timer for attunement flash burst (separate from spirit hum ring timer)
let _flashRingTimer = 0;

// Pre-allocated creatureData — mutated and passed to updateAttunement every frame
// (no per-frame object literal in the director hot path).
const _creatureData = {
  nearestPuffPos: null,
  nearestJellyDist2: Infinity, nearestJellyPos: null,
  nearestDeerDist2: Infinity, nearestDeerPos: null, nearestDeerWanderAng: 0,
  nearestMothDist2: Infinity, nearestMothPos: null,
  playerYaw: 0, playerPitch: 0, playerMoveAng: 0, playerSpeed: 0, pulsePressed: false,
  sprinting: false,
  playerX: 0, playerZ: 0, time: 0
};

// Attunement narrative text
const _attuneTexts = {
  puff: { child: 'They know you now!', adult: 'Full attunement — the boundary between observer and observed dissolves' },
  deer: { child: 'You walk as one.', adult: 'Stride-locked — biosignatures indistinguishable' },
  jelly: { child: 'Your hearts beat together!', adult: 'Pulse synchronization complete — resonance achieved' },
  moth: { child: 'You are part of the dance!', adult: 'Orbital lock confirmed — mutual observation state' }
};

// ================================================================
// Update — called once per frame from director
// ================================================================
export function updateAttunementVisuals(dt, t, ctx) {
  const _attuneJumping = ctx?.player?.body ? !ctx.player.body.onGround : !player.onGround;
  const _attuneSpeed = ctx?.player?.body ? Math.sqrt(ctx.player.body.vel.x * ctx.player.body.vel.x + ctx.player.body.vel.z * ctx.player.body.vel.z) : Math.sqrt(player.vel.x * player.vel.x + player.vel.z * player.vel.z);
  const _attuneSprinting = ctx?.player?.sprinting !== undefined ? ctx.player.sprinting : (keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint);
  const _pX = ctx?.player?.pos?.x !== undefined ? ctx.player.pos.x : player.pos.x;
  const _pZ = ctx?.player?.pos?.z !== undefined ? ctx.player.pos.z : player.pos.z;
  
  // True movement heading in the deer/world convention (movement = (sin(ang), cos(ang))).
  // Used by the deer stride-match so strafe/backpedal directions are compared correctly.
  const _vel = ctx?.player?.body ? ctx.player.body.vel : player.vel;
  _creatureData.nearestPuffPos = nearest.puffPos;
  _creatureData.nearestJellyDist2 = nearest.jellyDist2; _creatureData.nearestJellyPos = nearest.jellyPos;
  _creatureData.nearestDeerDist2 = nearest.deerDist2; _creatureData.nearestDeerPos = nearest.deerPos;
  _creatureData.nearestDeerWanderAng = nearest.deerWanderAng;
  _creatureData.nearestMothDist2 = nearest.mothDist2; _creatureData.nearestMothPos = nearest.mothPos;
  _creatureData.playerYaw = yaw; _creatureData.playerPitch = pitch;
  _creatureData.playerMoveAng = _attuneSpeed > 0.1 ? Math.atan2(_vel.x, _vel.z) : (yaw + Math.PI);
  _creatureData.playerSpeed = _attuneSpeed;
  _creatureData.pulsePressed = !!mouseDown || !!touchJump;
  _creatureData.sprinting = _attuneSprinting;
  _creatureData.playerX = _pX; _creatureData.playerZ = _pZ; _creatureData.time = t;
  updateAttunement(dt, _attuneJumping, nearest.puffDist2, _creatureData, ctx);

  if (checkFlash()) {
    setAttuneFlash(2.5, getAttunementTarget());
    setEchoTimer(1.5);
    const _flashType = getAttunementTarget();
    const flashPos = getFlashCreaturePos() || nearest.puffPos;
    // Audio fires once via audio.js on(Events.CREATURE_ATTUNED) — no direct call here
    if (_flashType && _attuneTexts[_flashType]) {
      const _atxt = _attuneTexts[_flashType][getPerspective()] || _attuneTexts[_flashType].child;
      showNarrativeText(_atxt, 5.0);
    }
    if (_flashType === 'puff') {
      for (let pi = 0; pi < puffs.length; pi++) {
        const pp = puffs[pi];
        if (pp.state === 'syncing') {
          pp._syncTimer = 0.27;
          if (pp.bodyMat) pp.bodyMat.emissiveIntensity = 4.0;
          if (pp.crownMat) pp.crownMat.emissiveIntensity = 3.0;
        }
      }
      for (let pi = 0; pi < puffs.length; pi++) {
        const pp = puffs[pi];
        if (pp.state !== 'syncing') continue;
        const ppx = pp.group.position.x, ppz = pp.group.position.z;
        spawnResonanceRing(ppx, getGroundY(ppx, ppz), ppz, 'puff', 1.0);
      }
    }
    const fgY = getGroundY(flashPos.x, flashPos.z);
    for (let hi = 0; hi < 3; hi++) {
      spawnResonanceRing(flashPos.x, fgY + hi * 1.0, flashPos.z, _flashType || 'puff', 1.0);
    }
  }

  // Burst rings during active attunement flash
  if (attuneFlashTimer > 1.0 && attuneFlashType) {
    _flashRingTimer += dt;
    if (_flashRingTimer > 0.1) {
      _flashRingTimer = 0;
      let rx = 0, rz = 0;
      switch (attuneFlashType) {
        case 'deer':  rx = nearest.deerPos.x; rz = nearest.deerPos.z; break;
        case 'moth':  rx = nearest.mothPos.x; rz = nearest.mothPos.z; break;
        case 'jelly': rx = nearest.jellyPos.x; rz = nearest.jellyPos.z; break;
        case 'puff':  rx = nearest.puffPos.x; rz = nearest.puffPos.z; break;
      }
      const ry = getGroundY(rx, rz);
      const heightOff = (Math.random() * 2.5);
      spawnResonanceRing(rx, ry + heightOff, rz, attuneFlashType, 0.7 + Math.random() * 0.3);
    }
  }
}

// ================================================================
// Attunement Visual System — flash effects, echo rings, narrative text
// ================================================================
// Extracted from main.js _directorAttunement(). Manages the visual
// response to creature attunement events.

import { player } from '../core/player.js';
import { keys, touchSprint, yaw, mouseDown, touchJump } from '../core/input.js';
import { updateAttunement, getAttunementTarget, getFlashCreaturePos, checkFlash } from '../systems/attunement.js';
import { playAttunementFlash } from '../systems/audio.js';
import { spawnResonanceRing } from '../particles/resonanceRings.js';
import { getGroundY } from '../world/terrain.js';
import { getPerspective } from '../state/narrativeState.js';
import { showNarrativeText } from '../systems/discoveries.js';
import { puffs } from '../state/entityStore.js';
import { attuneFlashTimer, attuneFlashType, setAttuneFlash, setEchoTimer } from '../state/gameState.js';
import { nearest } from '../systems/registration.js';

// Local ring timer for attunement flash burst (separate from spirit hum ring timer)
let _flashRingTimer = 0;

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
  
  updateAttunement(dt, _attuneJumping, nearest.puffDist2, {
    nearestPuffPos: nearest.puffPos,
    nearestJellyDist2: nearest.jellyDist2, nearestJellyPos: nearest.jellyPos,
    nearestDeerDist2: nearest.deerDist2, nearestDeerPos: nearest.deerPos, nearestDeerWanderAng: nearest.deerWanderAng,
    nearestMothDist2: nearest.mothDist2, nearestMothPos: nearest.mothPos,
    playerYaw: yaw, playerSpeed: _attuneSpeed, pulsePressed: !!mouseDown || !!touchJump,
    sprinting: _attuneSprinting,
    playerX: _pX, playerZ: _pZ, time: t
  }, ctx);

  if (checkFlash()) {
    setAttuneFlash(2.5, getAttunementTarget());
    setEchoTimer(1.5);
    const _flashType = getAttunementTarget();
    const flashPos = getFlashCreaturePos() || nearest.puffPos;
    playAttunementFlash(flashPos, ctx?.player?.pos || player.pos, _flashType);
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

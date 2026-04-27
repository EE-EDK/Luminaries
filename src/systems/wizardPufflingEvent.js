import { AdditiveBlending, CylinderGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, SphereGeometry } from 'three';
import { scene } from '../core/renderer.js';
import { C } from '../constants.js';
import { makePuff } from '../entities/fauna/pufflings.js';

/** Cumulative time moving (not wall-clock) before spawn — ~1 min of walking */
const TRIGGER_WANDER_SECONDS = 50;
const APPROACH_MIN_SEC = 5;
const APPROACH_MAX_SEC = 10;
const APPROACH_STOP_DIST = 2.0;
/** TAB line + mouth */
const PROCLAIM_SEC = 3.5;
/** Pause after TAB before sky beam */
const PREBEAM_SEC = 2.5;
/** ~2 ft diameter ≈ 0.61 m → cylinder radius (meters) */
const BEAM_RADIUS = 0.31;
const BEAM_GLOW_RADIUS = 0.42;
const SMITE_BEAM_FADE_IN = 1.25;
const SMITE_GLOW_BUILD_END = 4.2;
const SMITE_SMOKE_AT = 4.45;
const SMITE_BEAM_FADE_OUT = 2.1;
const SMITE_TOTAL = SMITE_SMOKE_AT + SMITE_BEAM_FADE_OUT;

let _showNarrativeText = null;
let _playPufflingVocal = null;
let _getGroundY = null;
let _onTruthUnlocked = null;

let _state = 'idle';
let _movingTimer = 0;
let _phaseTimer = 0;
let _wizard = null;
let _cameraForced = false;
let _camYaw = 0;
let _camPitch = 0;
let _laser = null;
let _smoke = null;
/** World focus for camera after wizard despawns (beam site) */
let _smiteFocus = { x: 0, y: 0, z: 0 };

function wrapPi(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

function smoothstep01(x) {
  const t = Math.max(0, Math.min(1, x));
  return t * t * (3 - 2 * t);
}

function lookAngles(fromPos, toPos) {
  const dx = toPos.x - fromPos.x;
  const dy = toPos.y - fromPos.y;
  const dz = toPos.z - fromPos.z;
  const yaw = Math.atan2(dx, dz);
  const horiz = Math.sqrt(dx * dx + dz * dz) || 0.001;
  const pitch = -Math.atan2(dy, horiz);
  return { yaw, pitch };
}

function forceLookAt(dt, cameraPos, targetPos, yaw, pitch) {
  if (!_cameraForced) {
    _cameraForced = true;
    _camYaw = yaw;
    _camPitch = pitch;
  }
  const tgt = lookAngles(cameraPos, targetPos);
  _camYaw += wrapPi(tgt.yaw - _camYaw) * Math.min(1, dt * 7.5);
  _camPitch += (tgt.pitch - _camPitch) * Math.min(1, dt * 7.5);
  return { active: true, yaw: _camYaw, pitch: _camPitch };
}

function clearCameraForce() {
  _cameraForced = false;
}

function spawnWizardNearPlayer(playerPos, yaw) {
  const spawnAng = yaw + (Math.random() < 0.5 ? 1 : -1) * (0.9 + Math.random() * 0.5);
  const spawnDist = 18 + Math.random() * 8;
  const sx = playerPos.x + Math.sin(spawnAng) * spawnDist;
  const sz = playerPos.z + Math.cos(spawnAng) * spawnDist;
  _wizard = makePuff(sx, sz, {
    wizardHat: true,
    eyeColor: 0x66bbff,
    disableAccessories: true
  });
  _wizard.group.position.y = _getGroundY(sx, sz);
  _wizard._baseY = _wizard.group.position.y;
  _wizard.phase = Math.random() * 6.28;
  /* Tuned so hop-run covers ~18–26 m in ~5–10 s */
  _wizard.speed = 3.1;
}

function removeWizard() {
  if (!_wizard) return;
  scene.remove(_wizard.group);
  _wizard = null;
}

function spawnSkyLaser(x, y, z) {
  const h = 42;
  const centerY = y + h * 0.5;
  const mat = new MeshBasicMaterial({
    color: C.laserPink, transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending
  });
  const glowMat = new MeshBasicMaterial({
    color: C.laserGlow, transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending
  });
  const beam = new Mesh(new CylinderGeometry(BEAM_RADIUS * 0.92, BEAM_RADIUS, h, 12), mat);
  beam.position.set(x, centerY, z);
  const glow = new Mesh(new CylinderGeometry(BEAM_GLOW_RADIUS * 0.95, BEAM_GLOW_RADIUS, h, 12), glowMat);
  glow.position.set(x, centerY, z);
  scene.add(beam);
  scene.add(glow);
  _laser = { beam, glow, mat, glowMat, timer: 0 };
}

function cleanupLaser() {
  if (!_laser) return;
  scene.remove(_laser.beam);
  scene.remove(_laser.glow);
  _laser.beam.geometry.dispose();
  _laser.glow.geometry.dispose();
  _laser.mat.dispose();
  _laser.glowMat.dispose();
  _laser = null;
}

function spawnSmokePuff(x, y, z) {
  const particles = [];
  const mat = new MeshStandardMaterial({
    color: 0xb8a3cf, emissive: 0xff88dd, emissiveIntensity: 0.25, transparent: true, opacity: 0.9, roughness: 1.0
  });
  for (let i = 0; i < 18; i++) {
    const m = new Mesh(new SphereGeometry(0.05 + Math.random() * 0.03, 8, 6), mat.clone());
    const ang = Math.random() * 6.28;
    const up = 0.9 + Math.random() * 1.8;
    const out = 0.7 + Math.random() * 1.6;
    m.position.set(x, y + 0.35, z);
    particles.push({
      mesh: m,
      vx: Math.cos(ang) * out,
      vy: up,
      vz: Math.sin(ang) * out
    });
    scene.add(m);
  }
  _smoke = { particles, timer: 0 };
}

function updateSmoke(dt) {
  if (!_smoke) return;
  _smoke.timer += dt;
  for (let i = 0; i < _smoke.particles.length; i++) {
    const p = _smoke.particles[i];
    p.mesh.position.x += p.vx * dt;
    p.mesh.position.y += p.vy * dt;
    p.mesh.position.z += p.vz * dt;
    p.vy -= dt * 0.9;
    p.mesh.material.opacity = Math.max(0, 0.9 - _smoke.timer * 1.2);
  }
  if (_smoke.timer > 1.25) {
    for (let i = 0; i < _smoke.particles.length; i++) {
      const p = _smoke.particles[i];
      scene.remove(p.mesh);
      p.mesh.geometry.dispose();
      p.mesh.material.dispose();
    }
    _smoke = null;
  }
}

export function initWizardPufflingEvent(config) {
  _showNarrativeText = config.showNarrativeText;
  _playPufflingVocal = config.playPufflingVocal;
  _getGroundY = config.getGroundY;
  _onTruthUnlocked = config.onTruthUnlocked || null;
}

export function updateWizardPufflingEvent(dt, t, ctx) {
  updateSmoke(dt);

  if (_state === 'done') return null;

  const speed2 = ctx.player.vel.x * ctx.player.vel.x + ctx.player.vel.z * ctx.player.vel.z;
  if (_state === 'idle') {
    if (speed2 > 0.06) _movingTimer += dt;
    if (_movingTimer >= TRIGGER_WANDER_SECONDS) {
      spawnWizardNearPlayer(ctx.player.pos, ctx.yaw);
      _state = 'approach';
      _phaseTimer = 0;
    }
    return null;
  }

  const focusVec = { x: 0, y: 0, z: 0 };

  if (_state === 'approach' && _wizard) {
    _phaseTimer += dt;
    const g = _wizard.group;
    const dx = ctx.player.pos.x - g.position.x;
    const dz = ctx.player.pos.z - g.position.z;
    let d = Math.sqrt(dx * dx + dz * dz) || 0.001;
    const dirX = dx / d;
    const dirZ = dz / d;
    _wizard.wanderAng = Math.atan2(dirX, dirZ);
    const hop = Math.abs(Math.sin(t * 14 + _wizard.phase));
    const move = hop > 0.12 ? 1 : 0.28;
    const runSpeed = _wizard.speed * (0.75 + hop * 0.5);

    if (d < APPROACH_STOP_DIST + 0.45 && _phaseTimer < APPROACH_MIN_SEC) {
      const ang = t * 2.1 + _wizard.phase;
      const orbitR = 3.1;
      const tx = ctx.player.pos.x + Math.sin(ang) * orbitR;
      const tz = ctx.player.pos.z + Math.cos(ang) * orbitR;
      g.position.x += (tx - g.position.x) * Math.min(1, dt * 3.2);
      g.position.z += (tz - g.position.z) * Math.min(1, dt * 3.2);
    } else {
      g.position.x += dirX * runSpeed * move * dt;
      g.position.z += dirZ * runSpeed * move * dt;
    }

    const baseY = _getGroundY(g.position.x, g.position.z);
    g.position.y = baseY + hop * 0.36;
    _wizard.shell.scale.set(1.08 - hop * 0.16, 0.95 + hop * 0.26, 1.08 - hop * 0.16);
    g.rotation.y = _wizard.wanderAng;

    const dxEnd = ctx.player.pos.x - g.position.x;
    const dzEnd = ctx.player.pos.z - g.position.z;
    const dEnd = Math.sqrt(dxEnd * dxEnd + dzEnd * dzEnd) || 0.001;
    const canEndApproach =
      _phaseTimer >= APPROACH_MIN_SEC &&
      (dEnd < APPROACH_STOP_DIST || _phaseTimer >= APPROACH_MAX_SEC);
    if (canEndApproach) {
      _state = 'proclaim';
      _phaseTimer = 0;
      if (_showNarrativeText) _showNarrativeText('PRESS TAB to know the TRUTH!', PROCLAIM_SEC + 0.8);
      _wizard._talkTimer = Math.max(_wizard._talkTimer || 0, PROCLAIM_SEC);
      if (_playPufflingVocal) _playPufflingVocal('PRESS TAB to know the TRUTH!', { x: g.position.x, z: g.position.z }, ctx.player.pos);
    }
    focusVec.x = g.position.x;
    focusVec.y = baseY + 0.38;
    focusVec.z = g.position.z;
    return forceLookAt(dt, ctx.cameraPos, focusVec, ctx.yaw, ctx.pitch);
  }

  if (_state === 'proclaim' && _wizard) {
    _phaseTimer += dt;
    const g = _wizard.group;
    const baseY = _getGroundY(g.position.x, g.position.z);
    g.position.y = baseY + Math.sin(t * 8.5) * 0.08;
    g.rotation.y += Math.sin(t * 16) * dt * 0.8;
    if (_wizard.mouth) {
      _wizard._talkTimer = Math.max(0, (_wizard._talkTimer || 0) - dt);
      if (_wizard._talkTimer > 0) {
        const flap = 0.25 + Math.abs(Math.sin(t * 26 + _wizard.phase)) * 0.9;
        _wizard.mouth.scale.y = flap;
        _wizard.mouth.position.y = 0.595 - flap * 0.004;
      } else {
        _wizard.mouth.scale.y += (0.22 - _wizard.mouth.scale.y) * Math.min(1, dt * 14);
        _wizard.mouth.position.y += (0.595 - _wizard.mouth.position.y) * Math.min(1, dt * 14);
      }
    }
    if (_phaseTimer >= PROCLAIM_SEC) {
      _state = 'prebeam';
      _phaseTimer = 0;
    }
    focusVec.x = g.position.x;
    focusVec.y = baseY + 0.38;
    focusVec.z = g.position.z;
    return forceLookAt(dt, ctx.cameraPos, focusVec, ctx.yaw, ctx.pitch);
  }

  if (_state === 'prebeam' && _wizard) {
    _phaseTimer += dt;
    const g = _wizard.group;
    const baseY = _getGroundY(g.position.x, g.position.z);
    g.position.y = baseY + Math.sin(t * 7) * 0.06;
    if (_phaseTimer >= PREBEAM_SEC) {
      _state = 'smite';
      _phaseTimer = 0;
      spawnSkyLaser(g.position.x, baseY, g.position.z);
      _smiteFocus.x = g.position.x;
      _smiteFocus.y = baseY + 0.38;
      _smiteFocus.z = g.position.z;
      if (_showNarrativeText) _showNarrativeText('AhhhhHHHH!', 2.2);
      _wizard._talkTimer = Math.max(_wizard._talkTimer || 0, 1.6);
      if (_playPufflingVocal) _playPufflingVocal('AhhhhHHHH!', { x: g.position.x, z: g.position.z }, ctx.player.pos);
    }
    focusVec.x = g.position.x;
    focusVec.y = baseY + 0.38;
    focusVec.z = g.position.z;
    return forceLookAt(dt, ctx.cameraPos, focusVec, ctx.yaw, ctx.pitch);
  }

  if (_state === 'smite') {
    _phaseTimer += dt;
    const pt = _phaseTimer;

    if (_laser) {
      const flick = Math.sin(t * 28) * 0.5 + 0.5;
      if (pt < SMITE_BEAM_FADE_IN) {
        const u = pt / SMITE_BEAM_FADE_IN;
        _laser.mat.opacity = u * 0.96 + flick * 0.06;
        _laser.glowMat.opacity = u * 0.38 + flick * 0.08;
      } else if (pt < SMITE_SMOKE_AT) {
        _laser.mat.opacity = 0.96 + flick * 0.08;
        _laser.glowMat.opacity = 0.38 + flick * 0.1;
      } else {
        const fo = Math.min(1, (pt - SMITE_SMOKE_AT) / SMITE_BEAM_FADE_OUT);
        _laser.mat.opacity = Math.max(0, 0.96 * (1 - fo));
        _laser.glowMat.opacity = Math.max(0, 0.38 * (1 - fo));
      }
    }

    if (_wizard) {
      const g = _wizard.group;
      const baseY = _getGroundY(g.position.x, g.position.z);
      g.position.y = baseY + Math.sin(t * 22) * 0.04;
      let glowT = 0;
      if (pt < SMITE_BEAM_FADE_IN) glowT = pt / SMITE_BEAM_FADE_IN;
      else if (pt < SMITE_GLOW_BUILD_END) glowT = 0.55 + (pt - SMITE_BEAM_FADE_IN) / (SMITE_GLOW_BUILD_END - SMITE_BEAM_FADE_IN) * 0.45;
      else glowT = 1;
      const glowMul = 0.5 + glowT * 3.8;
      if (_wizard.bodyMat) _wizard.bodyMat.emissiveIntensity = glowMul;
      if (_wizard.bellyMat) _wizard.bellyMat.emissiveIntensity = 0.15 + glowT * 2.2;
      if (_wizard.crownMat) _wizard.crownMat.emissiveIntensity = 0.35 + glowT * 2.8;
      if (_wizard.core && _wizard.core.material) _wizard.core.material.opacity = 0.55 + glowT * 0.45;
      if (pt >= SMITE_SMOKE_AT) {
        spawnSmokePuff(g.position.x, baseY, g.position.z);
        removeWizard();
      }
    }

    if (pt >= SMITE_TOTAL - 0.05) cleanupLaser();

    if (pt >= SMITE_TOTAL) {
      _state = 'done';
      clearCameraForce();
      if (_onTruthUnlocked) _onTruthUnlocked();
      return null;
    }

    focusVec.x = _wizard ? _wizard.group.position.x : _smiteFocus.x;
    focusVec.y = _wizard
      ? _getGroundY(_wizard.group.position.x, _wizard.group.position.z) + 0.38
      : _smiteFocus.y;
    focusVec.z = _wizard ? _wizard.group.position.z : _smiteFocus.z;
    return forceLookAt(dt, ctx.cameraPos, focusVec, ctx.yaw, ctx.pitch);
  }

  return null;
}

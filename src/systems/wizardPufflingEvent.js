import { AdditiveBlending, CylinderGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, SphereGeometry } from 'three';
import { scene } from '../core/renderer.js';
import { C } from '../constants.js';
import { makePuff } from '../entities/fauna/pufflings.js';

const TRIGGER_WANDER_SECONDS = 120;
const APPROACH_STOP_DIST = 1.8;

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
  const spawnDist = 10 + Math.random() * 4;
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
  _wizard.speed = 5.4;
}

function removeWizard() {
  if (!_wizard) return;
  scene.remove(_wizard.group);
  _wizard = null;
}

function spawnSkyLaser(x, y, z) {
  const h = 36;
  const centerY = y + h * 0.5;
  const mat = new MeshBasicMaterial({
    color: C.laserPink, transparent: true, opacity: 0.95, depthWrite: false, blending: AdditiveBlending
  });
  const glowMat = new MeshBasicMaterial({
    color: C.laserGlow, transparent: true, opacity: 0.28, depthWrite: false, blending: AdditiveBlending
  });
  const beam = new Mesh(new CylinderGeometry(0.085, 0.11, h, 8), mat);
  beam.position.set(x, centerY, z);
  const glow = new Mesh(new CylinderGeometry(0.22, 0.26, h, 8), glowMat);
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
    if (speed2 > 0.08) _movingTimer += dt;
    if (_movingTimer >= TRIGGER_WANDER_SECONDS) {
      spawnWizardNearPlayer(ctx.player.pos, ctx.yaw);
      _state = 'approach';
      _phaseTimer = 0;
    }
    return null;
  }

  if (_state === 'approach' && _wizard) {
    _phaseTimer += dt;
    const g = _wizard.group;
    const px = g.position.x;
    const pz = g.position.z;
    const dx = ctx.player.pos.x - px;
    const dz = ctx.player.pos.z - pz;
    const d = Math.sqrt(dx * dx + dz * dz) || 0.001;
    const dirX = dx / d;
    const dirZ = dz / d;
    _wizard.wanderAng = Math.atan2(dirX, dirZ);
    const hop = Math.abs(Math.sin(t * 15.5 + _wizard.phase));
    const move = hop > 0.15 ? 1 : 0.15;
    const runSpeed = _wizard.speed * (0.8 + hop * 0.45);
    g.position.x += dirX * runSpeed * move * dt;
    g.position.z += dirZ * runSpeed * move * dt;
    const baseY = _getGroundY(g.position.x, g.position.z);
    g.position.y = baseY + hop * 0.35;
    _wizard.shell.scale.set(1.08 - hop * 0.16, 0.95 + hop * 0.26, 1.08 - hop * 0.16);
    g.rotation.y = _wizard.wanderAng;

    if (d < APPROACH_STOP_DIST || _phaseTimer > 6.0) {
      _state = 'proclaim';
      _phaseTimer = 0;
      if (_showNarrativeText) _showNarrativeText('PRESS TAB to know the TRUTH!', 3.6);
      if (_playPufflingVocal) _playPufflingVocal('PRESS TAB to know the TRUTH!', { x: g.position.x, z: g.position.z }, ctx.player.pos);
    }
    return forceLookAt(dt, ctx.cameraPos, g.position, ctx.yaw, ctx.pitch);
  }

  if (_state === 'proclaim' && _wizard) {
    _phaseTimer += dt;
    const g = _wizard.group;
    const baseY = _getGroundY(g.position.x, g.position.z);
    g.position.y = baseY + Math.sin(t * 8.5) * 0.08;
    g.rotation.y += Math.sin(t * 16) * dt * 0.8;
    if (_phaseTimer > 2.25) {
      _state = 'smite';
      _phaseTimer = 0;
      spawnSkyLaser(g.position.x, baseY, g.position.z);
      if (_showNarrativeText) _showNarrativeText('AhhhhHHHH!', 1.4);
      if (_playPufflingVocal) _playPufflingVocal('AhhhhHHHH!', { x: g.position.x, z: g.position.z }, ctx.player.pos);
    }
    return forceLookAt(dt, ctx.cameraPos, g.position, ctx.yaw, ctx.pitch);
  }

  if (_state === 'smite') {
    _phaseTimer += dt;
    if (_laser) {
      _laser.timer += dt;
      const p = Math.sin(t * 36) * 0.5 + 0.5;
      _laser.mat.opacity = Math.max(0, 0.95 - _laser.timer * 1.4) + p * 0.12;
      _laser.glowMat.opacity = Math.max(0, 0.28 - _laser.timer * 0.5) + p * 0.08;
    }
    if (_wizard && _phaseTimer > 0.16) {
      const g = _wizard.group.position;
      spawnSmokePuff(g.x, _getGroundY(g.x, g.z), g.z);
      removeWizard();
    }
    if (_phaseTimer > 0.7) cleanupLaser();
    if (_phaseTimer > 1.4) {
      _state = 'done';
      clearCameraForce();
      if (_onTruthUnlocked) _onTruthUnlocked();
    }
    return null;
  }

  return null;
}

import { AdditiveBlending, CylinderGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, SphereGeometry } from 'three';
import { scene } from '../core/renderer.js';
import { C } from '../constants.js';
import { makePuff } from '../entities/fauna/pufflings.js';
import { playWizardApproachLaLa } from './audio/creatures.js';
import { humFreqArmed } from '../core/input.js';

/** Cumulative time moving (not wall-clock) before spawn — ~1 min of walking */
const TRIGGER_WANDER_SECONDS = 50;
const APPROACH_MIN_SEC = 4;
/** Must cover hop-throttled run from ~16–24 m spawn; 10s was often timing out mid-approach */
const APPROACH_MAX_SEC = 14;
/** Horizontal distance (m) wizard ↔ player — random 3–5 per encounter */
const WIZARD_STANDOFF_MIN = 3.0;
const WIZARD_STANDOFF_MAX = 5.0;
/** Acceptable error (m) from ideal standoff point before approach can end */
const STANDOFF_ARRIVE_TOL = 0.95;
/** If camera–focus horizontal distance is below this (m), nudge focus for stable yaw */
const CAM_FOCUS_MIN_HZ = 0.55;
/** TAB line + mouth */
const PROCLAIM_SEC = 3.5;
/** Pause after TAB before sky beam */
const PREBEAM_SEC = 2.5;
/** On-screen hint when camera first locks onto the approaching wizard */
const APPROACH_HINT_TEXT = 'A wizard approaches?';
const APPROACH_HINT_SEC = 3.6;
const DEAD_SOUL_LINE = 'Another dead soul';
const TAB_LINE = 'PRESS TAB to know the TRUTH!';
/** Confront: inspect + dead soul line, then wait for F (spirit hum). */
const CONFRONT_DEAD_SOUL_AT = 0.85;
const CONFRONT_TO_WAIT_HUM = 6.8;
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
let _approachHintShown = false;
let _laLaTimer = 0;
let _deadSoulShown = false;
let _confrontT = 0;
let _waitHumT = 0;
let _humWasArmed = false;

function wrapPi(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

function smoothstep01(x) {
  const t = Math.max(0, Math.min(1, x));
  return t * t * (3 - 2 * t);
}

function enforceWizardStandoff(g, playerPos, standoffR) {
  const dx = g.position.x - playerPos.x;
  const dz = g.position.z - playerPos.z;
  const d2 = dx * dx + dz * dz;
  const minR = standoffR;
  const min2 = minR * minR;
  if (d2 >= min2 || d2 < 1e-10) return;
  const d = Math.sqrt(d2);
  const s = minR / d;
  g.position.x = playerPos.x + dx * s;
  g.position.z = playerPos.z + dz * s;
}

/** Nudge look-at target so horizontal offset is not ~0 (prevents yaw thrash when wizard clips player). */
function stabilizeCameraFocus(cameraPos, focusWorld) {
  const dx = focusWorld.x - cameraPos.x;
  const dz = focusWorld.z - cameraPos.z;
  const hz = Math.sqrt(dx * dx + dz * dz);
  if (hz >= CAM_FOCUS_MIN_HZ || hz < 1e-6) return focusWorld;
  const scale = CAM_FOCUS_MIN_HZ / hz;
  return { x: cameraPos.x + dx * scale, y: focusWorld.y, z: cameraPos.z + dz * scale };
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
  const spawnDist = 16 + Math.random() * 8;
  const sx = playerPos.x + Math.sin(spawnAng) * spawnDist;
  const sz = playerPos.z + Math.cos(spawnAng) * spawnDist;
  _wizard = makePuff(sx, sz, {
    wizardHat: true,
    eyeColor: 0x66bbff,
    disableAccessories: true,
    skipSceneAdd: true
  });
  const gy = _getGroundY(sx, sz);
  _wizard.group.position.set(sx, gy, sz);
  _wizard._baseY = gy;
  _wizard.phase = Math.random() * 6.28;
  _wizard._standoffR = WIZARD_STANDOFF_MIN + Math.random() * (WIZARD_STANDOFF_MAX - WIZARD_STANDOFF_MIN);
  /* Tuned so hop-run covers ~18–26 m in ~5–10 s */
  _wizard.speed = 3.1;
  _wizard.group.visible = true;
  scene.add(_wizard.group);
  // Visibility: MeshStandard + Exp2 fog + directional moon can drive diffuse ~0 from some angles — mesh
  // reads invisible while the camera still tracks this group's position. Disable fog on wizard geometry,
  // skip frustum cull, and floor emissive so the puffling stays readable for the whole encounter.
  _wizard.group.traverse((ch) => {
    if (!ch.isMesh || !ch.material) return;
    ch.frustumCulled = false;
    ch.renderOrder = 14;
    const mat = ch.material;
    mat.fog = false;
    if (mat.emissiveIntensity !== undefined) {
      mat.emissiveIntensity = Math.max(mat.emissiveIntensity, 1.15);
    }
    if (mat.opacity !== undefined && mat.transparent) {
      mat.opacity = Math.max(mat.opacity, 0.92);
    }
  });
  /** First “la-la” phrase triggers on the next approach tick (timer starts above threshold). */
  _laLaTimer = 3;
  _deadSoulShown = false;
  _confrontT = 0;
  _waitHumT = 0;
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
      _approachHintShown = false;
    } else {
      return null;
    }
  }

  const focusVec = { x: 0, y: 0, z: 0 };

  if (_state === 'approach' && _wizard) {
    if (!_approachHintShown) {
      _approachHintShown = true;
      if (_showNarrativeText) _showNarrativeText(APPROACH_HINT_TEXT, APPROACH_HINT_SEC);
    }
    _phaseTimer += dt;
    const g = _wizard.group;
    const so = _wizard._standoffR;
    _laLaTimer += dt;
    if (_laLaTimer >= 2.35) {
      _laLaTimer = 0;
      playWizardApproachLaLa({ x: g.position.x, z: g.position.z }, ctx.player.pos);
    }
    const px = ctx.player.pos.x;
    const pz = ctx.player.pos.z;
    const vx = g.position.x - px;
    const vz = g.position.z - pz;
    let vw = Math.sqrt(vx * vx + vz * vz);
    let ux; let uz;
    if (vw < 1e-4) {
      ux = Math.sin(ctx.yaw ?? 0);
      uz = Math.cos(ctx.yaw ?? 0);
      vw = 1;
    } else {
      ux = vx / vw;
      uz = vz / vw;
    }
    _wizard.wanderAng = Math.atan2(ux, uz);
    const hop = Math.abs(Math.sin(t * 14 + _wizard.phase));
    // Keep meaningful ground speed between hops (0.28 stalled too many approaches before MAX timeout)
    const move = hop > 0.12 ? 1 : 0.58;
    const runSpeed = _wizard.speed * (0.78 + hop * 0.48);

    const slotX = px + ux * so;
    const slotZ = pz + uz * so;
    const sdx = slotX - g.position.x;
    const sdz = slotZ - g.position.z;
    const slotErr = Math.sqrt(sdx * sdx + sdz * sdz) || 0.001;

    if (slotErr > 0.15) {
      const sx = sdx / slotErr;
      const sz = sdz / slotErr;
      g.position.x += sx * runSpeed * move * dt;
      g.position.z += sz * runSpeed * move * dt;
    } else {
      const ang = t * 2.1 + _wizard.phase;
      const wobbleR = 0.22;
      g.position.x += Math.sin(ang) * wobbleR * Math.min(1, dt * 2.4);
      g.position.z += Math.cos(ang) * wobbleR * Math.min(1, dt * 2.4);
    }

    enforceWizardStandoff(g, ctx.player.pos, so);

    const baseY = _getGroundY(g.position.x, g.position.z);
    g.position.y = baseY + hop * 0.36;
    _wizard.shell.scale.set(1.08 - hop * 0.16, 0.95 + hop * 0.26, 1.08 - hop * 0.16);
    g.rotation.y = _wizard.wanderAng;

    const vx2 = g.position.x - px;
    const vz2 = g.position.z - pz;
    const vw2 = Math.sqrt(vx2 * vx2 + vz2 * vz2) || 0.001;
    const ux2 = vx2 / vw2;
    const uz2 = vz2 / vw2;
    const slotX2 = px + ux2 * so;
    const slotZ2 = pz + uz2 * so;
    const err =
      Math.sqrt((slotX2 - g.position.x) ** 2 + (slotZ2 - g.position.z) ** 2) || 0;
    const canEndApproach =
      _phaseTimer >= APPROACH_MIN_SEC &&
      (err < STANDOFF_ARRIVE_TOL || _phaseTimer >= APPROACH_MAX_SEC);
    if (canEndApproach) {
      _state = 'confront';
      _phaseTimer = 0;
      _confrontT = 0;
      _wizard.shell.rotation.x = 0;
      _wizard.shell.rotation.z = 0;
      _wizard.shell.scale.set(1, 1, 1);
    }
    focusVec.x = g.position.x;
    focusVec.y = baseY + 0.38;
    focusVec.z = g.position.z;
    return forceLookAt(dt, ctx.cameraPos, stabilizeCameraFocus(ctx.cameraPos, focusVec), ctx.yaw, ctx.pitch);
  }

  if (_state === 'confront' && _wizard) {
    _confrontT += dt;
    const g = _wizard.group;
    const so = _wizard._standoffR;
    const px = ctx.player.pos.x;
    const pz = ctx.player.pos.z;
    const hop = Math.abs(Math.sin(t * 11 + _wizard.phase));
    const baseY = _getGroundY(g.position.x, g.position.z);
    const inspect = Math.sin(_confrontT * 2.35);
    _wizard.shell.rotation.x = inspect * 0.26;
    _wizard.shell.rotation.z = Math.sin(_confrontT * 1.65) * 0.07;
    g.position.y = baseY + hop * 0.16;
    enforceWizardStandoff(g, ctx.player.pos, so);

    const facePlayer = Math.atan2(px - g.position.x, pz - g.position.z);
    g.rotation.y = facePlayer;

    if (!_deadSoulShown && _confrontT >= CONFRONT_DEAD_SOUL_AT) {
      _deadSoulShown = true;
      if (_showNarrativeText) _showNarrativeText(DEAD_SOUL_LINE, 9);
      if (_playPufflingVocal) {
        _playPufflingVocal(DEAD_SOUL_LINE, { x: g.position.x, z: g.position.z }, ctx.player.pos, { maxDist2: 900 });
      }
      _wizard._talkTimer = Math.max(_wizard._talkTimer || 0, 4);
    }

    if (_confrontT >= CONFRONT_TO_WAIT_HUM) {
      _state = 'waitHum';
      _waitHumT = 0;
      _humWasArmed = humFreqArmed;
    }

    focusVec.x = g.position.x;
    focusVec.y = baseY + 0.38;
    focusVec.z = g.position.z;
    return forceLookAt(dt, ctx.cameraPos, stabilizeCameraFocus(ctx.cameraPos, focusVec), ctx.yaw, ctx.pitch);
  }

  if (_state === 'waitHum' && _wizard) {
    _waitHumT += dt;
    const g = _wizard.group;
    const so = _wizard._standoffR;
    const px = ctx.player.pos.x;
    const pz = ctx.player.pos.z;
    const bob = Math.sin(t * 6 + _wizard.phase) * 0.05;
    const baseY = _getGroundY(g.position.x, g.position.z);
    _wizard.shell.rotation.x *= 0.92;
    _wizard.shell.rotation.z *= 0.92;
    g.position.y = baseY + bob;
    enforceWizardStandoff(g, ctx.player.pos, so);

    const facePlayer = Math.atan2(px - g.position.x, pz - g.position.z);
    g.rotation.y = facePlayer;

    let proceed = false;
    if (!_humWasArmed) {
      proceed = humFreqArmed && _waitHumT > 0.35;
    } else {
      proceed = humFreqArmed && _waitHumT > 2.25;
    }

    if (proceed) {
      _state = 'proclaim';
      _phaseTimer = 0;
      if (_showNarrativeText) _showNarrativeText(TAB_LINE, PROCLAIM_SEC + 0.8);
      _wizard._talkTimer = Math.max(_wizard._talkTimer || 0, PROCLAIM_SEC);
      if (_playPufflingVocal) {
        _playPufflingVocal(TAB_LINE, { x: g.position.x, z: g.position.z }, ctx.player.pos, { maxDist2: 900 });
      }
    }

    focusVec.x = g.position.x;
    focusVec.y = baseY + 0.38;
    focusVec.z = g.position.z;
    return forceLookAt(dt, ctx.cameraPos, stabilizeCameraFocus(ctx.cameraPos, focusVec), ctx.yaw, ctx.pitch);
  }

  if (_state === 'proclaim' && _wizard) {
    _phaseTimer += dt;
    const g = _wizard.group;
    const baseY = _getGroundY(g.position.x, g.position.z);
    g.position.y = baseY + Math.sin(t * 8.5) * 0.08;
    enforceWizardStandoff(g, ctx.player.pos, _wizard._standoffR);
    const px = ctx.player.pos.x;
    const pz = ctx.player.pos.z;
    const facePlayer = Math.atan2(px - g.position.x, pz - g.position.z);
    g.rotation.y = facePlayer + Math.sin(t * 12 + _wizard.phase) * 0.14;
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
    return forceLookAt(dt, ctx.cameraPos, stabilizeCameraFocus(ctx.cameraPos, focusVec), ctx.yaw, ctx.pitch);
  }

  if (_state === 'prebeam' && _wizard) {
    _phaseTimer += dt;
    const g = _wizard.group;
    const baseY = _getGroundY(g.position.x, g.position.z);
    g.position.y = baseY + Math.sin(t * 7) * 0.06;
    enforceWizardStandoff(g, ctx.player.pos, _wizard._standoffR);
    if (_phaseTimer >= PREBEAM_SEC) {
      _state = 'smite';
      _phaseTimer = 0;
      spawnSkyLaser(g.position.x, baseY, g.position.z);
      _smiteFocus.x = g.position.x;
      _smiteFocus.y = baseY + 0.38;
      _smiteFocus.z = g.position.z;
      if (_showNarrativeText) _showNarrativeText('AhhhhHHHH!', 2.2);
      _wizard._talkTimer = Math.max(_wizard._talkTimer || 0, 1.6);
      if (_playPufflingVocal) {
        _playPufflingVocal('AhhhhHHHH!', { x: g.position.x, z: g.position.z }, ctx.player.pos, { maxDist2: 900 });
      }
    }
    focusVec.x = g.position.x;
    focusVec.y = baseY + 0.38;
    focusVec.z = g.position.z;
    return forceLookAt(dt, ctx.cameraPos, stabilizeCameraFocus(ctx.cameraPos, focusVec), ctx.yaw, ctx.pitch);
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
      enforceWizardStandoff(g, ctx.player.pos, _wizard._standoffR);
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
    return forceLookAt(dt, ctx.cameraPos, stabilizeCameraFocus(ctx.cameraPos, focusVec), ctx.yaw, ctx.pitch);
  }

  return null;
}

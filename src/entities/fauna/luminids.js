// --- Luminid (Tall stilted gentle giant — enhanced detail) ---
import {
  Group, Mesh, MeshBasicMaterial, MeshStandardMaterial,
  SphereGeometry, CylinderGeometry, ConeGeometry, DoubleSide,
  CircleGeometry, AdditiveBlending, Vector3, Quaternion
} from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ----------------------------------------------------------------
// Leg IK scratch (module scope — no per-frame allocations).
// Segment lengths match the built geometry: upper 3.6, lower 4.0.
// The shoulders sit ~5.2m above the body's ground, so the legs need
// generous reach to plant feet out to the sides and on downslopes
// without the limb collapsing. FOOT_R is the resting foot radius.
// ----------------------------------------------------------------
const L_UPPER = 3.6;
const L_LOWER = 4.0;
const FOOT_R = 2.7;                            // resting foot radius from body center
const MAX_REACH = (L_UPPER + L_LOWER) * 0.97;  // never ask the IK for more than this
const _ikS = new Vector3();        // shoulder world position
const _ikF = new Vector3();        // foot world position
const _ikDir = new Vector3();      // shoulder -> foot (unit)
const _ikBend = new Vector3();     // knee bend direction (unit)
const _ikKnee = new Vector3();     // knee world position
const _ikSeg = new Vector3();      // segment direction scratch (unit)
const _ikLocalDir = new Vector3(); // lower-segment dir in upper-pivot space
const _ikQ = new Quaternion();     // upper-pivot inverse rotation
const _IK_UP = new Vector3(0, 1, 0);
const _IK_DOWN = new Vector3(0, -1, 0); // legs hang along local -Y

function _smoothstep(t) { return t * t * (3 - 2 * t); }

export function makeLuminid(x, z) {
  const g = new Group();
  
  // 1. MAIN BODY (Suspended Lantern / Teardrop)
  const bodyGroup = new Group();
  bodyGroup.position.y = 5.0; // Towering high
  g.add(bodyGroup);

  const crystalMat = new MeshStandardMaterial({
    color: C.luminidShell, emissive: C.luminidShellEmissive, emissiveIntensity: 0.5,
    transparent: true, opacity: 0.4, roughness: 0.1, metalness: 0.8
  });
  
  // Teardrop shell
  const shell = new Mesh(new SphereGeometry(0.8, 6, 8), crystalMat);
  shell.scale.set(1, 1.8, 1);
  bodyGroup.add(shell);

  // Inner Core (The "Star")
  const coreMat = new MeshBasicMaterial({ 
    color: C.luminidCore, transparent: true, opacity: 0.9, blending: AdditiveBlending
  });
  const core = new Mesh(new SphereGeometry(0.25, 8, 8), coreMat);
  bodyGroup.add(core);

  // Glow Halo
  const haloMat = new MeshBasicMaterial({ 
    color: C.luminidHalo, transparent: true, opacity: 0.2, side: DoubleSide, blending: AdditiveBlending
  });
  const halo = new Mesh(new CircleGeometry(1.2, 16), haloMat);
  halo.rotation.x = Math.PI / 2;
  bodyGroup.add(halo);

  // 2. TOP FRONDS (Sensory fern-like whiskers)
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const frond = new Mesh(new ConeGeometry(0.02, 0.8, 3), crystalMat);
    frond.position.set(Math.cos(angle) * 0.2, 1.4, Math.sin(angle) * 0.2);
    frond.rotation.z = Math.cos(angle) * 0.8;
    frond.rotation.x = Math.sin(angle) * 0.8;
    bodyGroup.add(frond);
  }

  // 3. SPINDLY LEGS (6 legs)
  const legs = [];
  const legMat = new MeshStandardMaterial({
    color: C.luminidLeg, emissive: C.luminidLegEmissive, roughness: 0.9
  });

  const legAngles = [0.2, 1.0, 2.1, 3.14 + 0.2, 3.14 + 1.0, 3.14 + 2.1];
  for (let i = 0; i < 6; i++) {
    const angle = legAngles[i];
    const shoulder = new Group();
    shoulder.position.set(Math.cos(angle) * 0.5, 5.2, Math.sin(angle) * 0.5);
    g.add(shoulder);

    // Upper Leg (length L_UPPER, hung from the shoulder pivot)
    const upper = new Mesh(new CylinderGeometry(0.04, 0.03, L_UPPER, 4), legMat);
    upper.position.y = -L_UPPER / 2;
    const upperPivot = new Group();
    upperPivot.add(upper);
    shoulder.add(upperPivot);

    // Lower Leg (length L_LOWER, hung from the knee pivot)
    const lower = new Mesh(new CylinderGeometry(0.03, 0.015, L_LOWER, 4), legMat);
    lower.position.y = -L_LOWER / 2;
    const lowerPivot = new Group();
    lowerPivot.position.y = -L_UPPER; // knee sits at the end of the upper segment
    lowerPivot.add(lower);
    upperPivot.add(lowerPivot);

    // Foot tip glow (at the end of the lower segment)
    const tip = new Mesh(new SphereGeometry(0.05, 4, 4), coreMat);
    tip.position.y = -L_LOWER;
    lowerPivot.add(tip);

    legs.push({
      shoulder, upperPivot, lowerPivot,
      targetPos: new Vector3(x + Math.cos(angle) * FOOT_R, 0, z + Math.sin(angle) * FOOT_R),
      currentPos: new Vector3(x + Math.cos(angle) * FOOT_R, 0, z + Math.sin(angle) * FOOT_R),
      stepStart: new Vector3(x + Math.cos(angle) * FOOT_R, 0, z + Math.sin(angle) * FOOT_R),
      isStepping: false, stepT: 0, angle
    });
  }

  // 4. UNDER-BODY INSPECTION STALK
  const stalkGroup = new Group();
  stalkGroup.position.y = -1.2;
  bodyGroup.add(stalkGroup);
  const stalk = new Mesh(new CylinderGeometry(0.02, 0.04, 0.8, 4), legMat);
  stalk.position.y = -0.4;
  stalkGroup.add(stalk);
  const sensor = new Mesh(new SphereGeometry(0.1, 5, 4), coreMat);
  sensor.position.y = -0.8;
  stalkGroup.add(sensor);

  g.position.set(x, 0, z);
  scene.add(g);

  return {
    group: g, bodyGroup, core, halo, legs, stalkGroup, sensor,
    phase: sr() * 6.28, wanderAng: sr() * 6.28, speed: 0.3 + sr() * 0.2,
    inspectT: 0, isInspecting: false,
    _lastTX: x, _lastTZ: z,
    _heightOffset: 5.0,
    _init: true
  };
}

export function updateLuminid(l, dt, playerPos, getGroundHeight) {
  const g = l.group;
  l.phase += dt;

  // 1. SLOW MAJESTIC MOVEMENT
  const targetVelX = Math.sin(l.wanderAng) * l.speed;
  const targetVelZ = Math.cos(l.wanderAng) * l.speed;
  
  g.position.x += targetVelX * dt;
  g.position.z += targetVelZ * dt;
  l.wanderAng += (Math.random() - 0.5) * 0.2 * dt;

  // Sample ground height at center
  const groundY = getGroundHeight ? getGroundHeight(g.position.x, g.position.z) : 0;
  g.position.y = groundY;

  // 2. PLAYER INTERACTION (The Inspection)
  const distToPlayerSq = g.position.distanceToSquared(playerPos);
  if (distToPlayerSq < 25) { // 5m range
    l.isInspecting = true;
    l.inspectT = Math.min(1.0, l.inspectT + dt * 0.5);
  } else {
    l.isInspecting = false;
    l.inspectT = Math.max(0.0, l.inspectT - dt * 0.5);
  }

  // Tilt and lower body during inspection
  l.bodyGroup.position.y = 5.0 - l.inspectT * 1.5;
  l.bodyGroup.rotation.x = Math.sin(l.phase) * 0.05 + l.inspectT * 0.2;
  l.stalkGroup.rotation.z = Math.sin(l.phase * 0.5) * 0.1;
  l.sensor.material.opacity = 0.5 + Math.sin(l.phase * 5) * 0.5;

  // 3. PROCEDURAL LEGS — planted feet + smooth stepping + 2-bone IK
  for (let i = 0; i < l.legs.length; i++) {
    const leg = l.legs[i];
    const idealX = g.position.x + Math.cos(leg.angle) * FOOT_R + targetVelX * 1.2;
    const idealZ = g.position.z + Math.sin(leg.angle) * FOOT_R + targetVelZ * 1.2;
    const dix = leg.currentPos.x - idealX, diz = leg.currentPos.z - idealZ;
    const distToIdealSq = dix * dix + diz * diz;

    // One leg steps at a time (stable, deliberate gait)
    let canStep = true;
    for (let j = 0; j < l.legs.length; j++) {
      if (j !== i && l.legs[j].isStepping) { canStep = false; break; }
    }

    // Step once the planted foot has drifted ~1m from its ideal rest spot —
    // small, frequent steps keep every foot within reach as the body glides.
    if (distToIdealSq > 1.0 && !leg.isStepping && canStep) {
      leg.isStepping = true;
      leg.stepT = 0;
      leg.stepStart.copy(leg.currentPos);
      leg.targetPos.set(idealX, getGroundHeight ? getGroundHeight(idealX, idealZ) : 0, idealZ);
    }

    if (leg.isStepping) {
      leg.stepT += dt * 1.8; // ~0.55s per step — slow and graceful
      if (leg.stepT >= 1.0) { leg.stepT = 1.0; leg.isStepping = false; }
      // Smooth eased swing from captured start to target, with a gentle lift arc.
      const te = _smoothstep(leg.stepT);
      leg.currentPos.lerpVectors(leg.stepStart, leg.targetPos, te);
      leg.currentPos.y += Math.sin(leg.stepT * Math.PI) * 0.8;
    } else if (getGroundHeight) {
      // Planted: foot stays put in x/z and tracks terrain height as the body glides over it.
      leg.currentPos.y = getGroundHeight(leg.currentPos.x, leg.currentPos.z);
    }

    // --- 2-bone IK: aim each segment's local -Y (the leg axis) along the limb ---
    // Shoulder world position (g and shoulder are unrotated; shoulder.position is local to g).
    _ikS.set(
      g.position.x + leg.shoulder.position.x,
      g.position.y + leg.shoulder.position.y,
      g.position.z + leg.shoulder.position.z
    );
    _ikF.copy(leg.currentPos);
    _ikDir.subVectors(_ikF, _ikS);
    let legD = _ikDir.length();
    if (legD < 1e-4) legD = 1e-4;
    _ikDir.multiplyScalar(1 / legD); // unit shoulder -> foot
    // Never ask for more than the leg can span: tuck an over-reaching foot inward
    // along the same line so the limb stays connected instead of collapsing.
    if (legD > MAX_REACH) {
      legD = MAX_REACH;
      _ikF.copy(_ikS).addScaledVector(_ikDir, MAX_REACH);
    }
    const reach = Math.max(Math.abs(L_UPPER - L_LOWER) + 0.05, legD);

    // Knee bends "up" — world up projected perpendicular to the limb (insect-like high knee).
    _ikBend.copy(_IK_UP).addScaledVector(_ikDir, -_IK_UP.dot(_ikDir));
    if (_ikBend.lengthSq() < 1e-6) {
      // Limb near-vertical: bend radially outward instead.
      _ikBend.set(Math.cos(leg.angle), 0, Math.sin(leg.angle));
      _ikBend.addScaledVector(_ikDir, -_ikBend.dot(_ikDir));
    }
    _ikBend.normalize();

    // Law of cosines: place the knee off the shoulder->foot line.
    const a = (L_UPPER * L_UPPER - L_LOWER * L_LOWER + reach * reach) / (2 * reach);
    const hk = Math.sqrt(Math.max(0, L_UPPER * L_UPPER - a * a));
    _ikKnee.copy(_ikS).addScaledVector(_ikDir, a).addScaledVector(_ikBend, hk);

    // Upper segment: shoulder -> knee. Shoulder is unrotated, so local == world rotation.
    _ikSeg.subVectors(_ikKnee, _ikS).normalize();
    leg.upperPivot.quaternion.setFromUnitVectors(_IK_DOWN, _ikSeg);

    // Lower segment: knee -> foot, expressed in the (now-rotated) upper pivot's local space.
    _ikSeg.subVectors(_ikF, _ikKnee).normalize();
    _ikQ.copy(leg.upperPivot.quaternion).invert();
    _ikLocalDir.copy(_ikSeg).applyQuaternion(_ikQ);
    leg.lowerPivot.quaternion.setFromUnitVectors(_IK_DOWN, _ikLocalDir);
  }

  // 4. CORE EFFECTS
  l.core.scale.setScalar(1.0 + Math.sin(l.phase * 2) * 0.1);
  l.halo.material.opacity = 0.1 + Math.sin(l.phase) * 0.1;
  l.bodyGroup.rotation.y += dt * 0.2;
}

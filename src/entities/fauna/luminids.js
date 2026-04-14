// --- Luminid (Tall stilted gentle giant — enhanced detail) ---
import { 
  Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, 
  SphereGeometry, CylinderGeometry, ConeGeometry, DoubleSide, 
  CircleGeometry, AdditiveBlending, Vector3 
} from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makeLuminid(x, z) {
  const g = new Group();
  
  // 1. MAIN BODY (Suspended Lantern / Teardrop)
  const bodyGroup = new Group();
  bodyGroup.position.y = 5.0; // Towering high
  g.add(bodyGroup);

  const crystalMat = new MeshStandardMaterial({
    color: 0x88ccff, emissive: 0x2244aa, emissiveIntensity: 0.5,
    transparent: true, opacity: 0.4, roughness: 0.1, metalness: 0.8
  });
  
  // Teardrop shell
  const shell = new Mesh(new SphereGeometry(0.8, 6, 8), crystalMat);
  shell.scale.set(1, 1.8, 1);
  bodyGroup.add(shell);

  // Inner Core (The "Star")
  const coreMat = new MeshBasicMaterial({ 
    color: 0xffffff, transparent: true, opacity: 0.9, blending: AdditiveBlending 
  });
  const core = new Mesh(new SphereGeometry(0.25, 8, 8), coreMat);
  bodyGroup.add(core);

  // Glow Halo
  const haloMat = new MeshBasicMaterial({ 
    color: 0x4488ff, transparent: true, opacity: 0.2, side: DoubleSide, blending: AdditiveBlending 
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
    color: 0x223344, emissive: 0x112233, roughness: 0.9
  });

  const legAngles = [0.2, 1.0, 2.1, 3.14 + 0.2, 3.14 + 1.0, 3.14 + 2.1];
  for (let i = 0; i < 6; i++) {
    const angle = legAngles[i];
    const shoulder = new Group();
    shoulder.position.set(Math.cos(angle) * 0.5, 5.2, Math.sin(angle) * 0.5);
    g.add(shoulder);

    // Upper Leg
    const upper = new Mesh(new CylinderGeometry(0.04, 0.03, 3.2, 4), legMat);
    upper.position.y = -1.6;
    const upperPivot = new Group();
    upperPivot.add(upper);
    shoulder.add(upperPivot);

    // Lower Leg
    const lower = new Mesh(new CylinderGeometry(0.03, 0.015, 3.5, 4), legMat);
    lower.position.y = -1.75;
    const lowerPivot = new Group();
    lowerPivot.position.y = -3.2;
    lowerPivot.add(lower);
    upperPivot.add(lowerPivot);

    // Foot tip glow
    const tip = new Mesh(new SphereGeometry(0.05, 4, 4), coreMat);
    tip.position.y = -3.5;
    lowerPivot.add(tip);

    legs.push({
      shoulder, upperPivot, lowerPivot,
      targetPos: new Vector3(x + Math.cos(angle) * 3, 0, z + Math.sin(angle) * 3),
      currentPos: new Vector3(x + Math.cos(angle) * 3, 0, z + Math.sin(angle) * 3),
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

  // 3. PROCEDURAL LEGS (Stepping logic)
  for (let i = 0; i < l.legs.length; i++) {
    const leg = l.legs[i];
    const idealX = g.position.x + Math.cos(leg.angle) * 3.0 + targetVelX * 2.0;
    const idealZ = g.position.z + Math.sin(leg.angle) * 3.0 + targetVelZ * 2.0;
    const dix = leg.currentPos.x - idealX, diz = leg.currentPos.z - idealZ;
    const distToIdealSq = dix * dix + diz * diz;

    // Check if other legs are stepping (stagger steps)
    let canStep = true;
    for (let j = 0; j < l.legs.length; j++) {
      if (j !== i && l.legs[j].isStepping) { canStep = false; break; }
    }

    if (distToIdealSq > 4.0 && !leg.isStepping && canStep) {
      leg.isStepping = true;
      leg.stepT = 0;
      leg.targetPos.set(idealX, 0, idealZ);
      if (getGroundHeight) leg.targetPos.y = getGroundHeight(idealX, idealZ);
    }

    if (leg.isStepping) {
      leg.stepT += dt * 2.5;
      if (leg.stepT >= 1.0) {
        leg.stepT = 1.0;
        leg.isStepping = false;
        // Leave a glowing "dew" ring (imaginary for now, could trigger an event)
      }
      // Arc the foot through the air
      const t = leg.stepT;
      const arc = Math.sin(t * Math.PI) * 1.5;
      leg.currentPos.lerp(leg.targetPos, t);
      leg.currentPos.y += arc;
    } else {
      // Clamp to ground when static
      if (getGroundHeight) leg.currentPos.y = getGroundHeight(leg.currentPos.x, leg.currentPos.z);
    }

    // Solve "Fake" IK (Simple lookAt for leg segments)
    // Rotate pivots toward foot
    leg.upperPivot.lookAt(leg.currentPos);
    // Add a "knee" bend by offsetting the lookAt or manual rotation
    leg.upperPivot.rotation.x += 0.4;
    leg.lowerPivot.lookAt(leg.currentPos);
  }

  // 4. CORE EFFECTS
  l.core.scale.setScalar(1.0 + Math.sin(l.phase * 2) * 0.1);
  l.halo.material.opacity = 0.1 + Math.sin(l.phase) * 0.1;
  l.bodyGroup.rotation.y += dt * 0.2;
}

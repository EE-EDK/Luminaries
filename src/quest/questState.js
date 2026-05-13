// ================================================================
// Quest State — Logic & Progression
// ================================================================
import { emit, Events } from '../kernel/eventBus.js';
import { QuestPhases, QUEST_CONFIG, ORB_CREATURE_SEQUENCE } from './config.js';
import { getPlayerFrequency, consumeFrequency } from '../systems/attunement.js';
import { freeGrabMode } from '../debug/debugFlags.js';

const RUNG_H = 25 / QUEST_CONFIG.ORBS_REQUIRED;

// State variables
let _orbsFound = 0;
let _questPhase = QuestPhases.SEEK;
let _obeliskY = -25; // Initial Y (OBELISK_H)
let _targetObeliskY = -25;
let _finaleTimer = 0;
let _finalePhaseTimer = 0;
let _transformTimer = 0;
let _freeRoamTimer = 0;
let _transformDone = false;
let _orbLasersCleaned = false;

// Internal state for orbs
let _orbs = []; 

/**
 * Initializes the quest state with orb data.
 * @param {Array} orbs 
 */
export function initQuestState(orbs) {
  _orbs = orbs.map(o => ({
    ...o,
    found: false,
    flashing: false,
    flashTimer: 0,
    flyUp: false,
    flyY: 0,
    laserActive: false
  }));
  _orbsFound = 0;
  _questPhase = QuestPhases.SEEK;
  _obeliskY = -25;
  _targetObeliskY = -25;
}

export function getQuestState() {
  return {
    orbsFound: _orbsFound,
    questPhase: _questPhase,
    obeliskY: _obeliskY,
    transformDone: _transformDone,
    orbs: _orbs
  };
}

export function getOrbsFound() {
  return _orbsFound;
}

export function getQuestPhase() {
  return _questPhase;
}

export function updateQuestState(dt) {
  if (_timersPaused) return;

  // Update timers based on phase
  if (_questPhase === QuestPhases.RISING) {
    if (_obeliskY < _targetObeliskY) {
      _obeliskY += QUEST_CONFIG.OBELISK_RISE_SPEED * dt;
      if (_obeliskY > _targetObeliskY) _obeliskY = _targetObeliskY;
    }

    if (_orbsFound >= QUEST_CONFIG.ORBS_REQUIRED && _obeliskY >= -0.01) {
      _questPhase = QuestPhases.COMPLETE;
      _finaleTimer = 0;
      emit(Events.QUEST_PHASE, { phase: QuestPhases.COMPLETE, orbsFound: _orbsFound });
    }
  }

  if (_questPhase === QuestPhases.COMPLETE) {
    _finaleTimer += dt;
    if (_finaleTimer > 12) {
      _questPhase = QuestPhases.FINALE;
      _finalePhaseTimer = 0;
      emit(Events.QUEST_PHASE, { phase: QuestPhases.FINALE, orbsFound: _orbsFound });
    }
  }

  if (_questPhase === QuestPhases.FINALE) {
    _finalePhaseTimer += dt;
    if (_finalePhaseTimer > 30) {
      _questPhase = QuestPhases.TRANSFORM;
      _transformTimer = 0;
      emit(Events.QUEST_PHASE, { phase: QuestPhases.TRANSFORM, orbsFound: _orbsFound });
    }
  }

  if (_questPhase === QuestPhases.TRANSFORM) {
    _transformTimer += dt;
    if (_transformTimer >= 6 && !_transformDone) {
      _transformDone = true;
      emit(Events.WORLD_TRANSFORMED);
    }
    if (_transformTimer >= 20) {
      _questPhase = QuestPhases.FREE_ROAM;
      _freeRoamTimer = 0;
      emit(Events.QUEST_PHASE, { phase: QuestPhases.FREE_ROAM, orbsFound: _orbsFound });
    }
  }

  if (_questPhase === QuestPhases.FREE_ROAM) {
    _freeRoamTimer += dt;
  }

  // Update orbs state
  for (let i = 0; i < _orbs.length; i++) {
    const o = _orbs[i];
    if (o.found) {
      if (o.flashing) {
        o.flashTimer += dt;
        if (o.flashTimer > 1.5) {
          o.flashing = false;
          o.flyUp = true;
          emit(Events.ORB_FLY_START, { index: i });
        }
      }
      if (o.flyUp) {
        const targetY = 30; // OBELISK_H + 5
        o.flyY += (targetY - o.flyY) * dt * 0.8;
        if (o.flyY > targetY - 1) {
          o.flyUp = false;
          o.laserActive = true;
          emit(Events.ORB_LASER_START, { index: i });
        }
      }
    }
  }
}

/**
 * DEV: set orb count and mark orbs found (no walk, no frequency check). Emits ORB_COLLECTED per new orb for HUD/world hooks.
 * @param {number} targetCount 0–ORBS_REQUIRED
 */
export function debugGrantOrbs(targetCount) {
  const cap = Math.min(QUEST_CONFIG.ORBS_REQUIRED, Math.max(0, Math.floor(targetCount)));
  while (_orbsFound < cap) {
    const idx = _orbsFound;
    const o = _orbs[idx];
    if (!o) break;
    o.found = true;
    o.flashing = false;
    o.flashTimer = 0;
    o.flyUp = false;
    o.flyY = 31;
    o.laserActive = true;
    _orbsFound++;
    _targetObeliskY = -25 + _orbsFound * RUNG_H;

    if (_questPhase === QuestPhases.SEEK && _orbsFound >= 1) {
      _questPhase = QuestPhases.RISING;
      emit(Events.QUEST_PHASE, { phase: QuestPhases.RISING, orbsFound: _orbsFound });
    }

    emit(Events.ORB_COLLECTED, {
      orbIndex: idx,
      orbsFound: _orbsFound,
      x: o.x,
      z: o.z,
      creatureType: ORB_CREATURE_SEQUENCE[idx] || 'any'
    });
  }
  _obeliskY = 0;
  _targetObeliskY = 0;
  for (let i = 0; i < cap; i++) {
    emit(Events.ORB_LASER_START, { index: i });
  }
}

export function attemptCollectOrb(index, playerPos) {
  const o = _orbs[index];
  if (o.found) return;

  const dx = o.x - playerPos.x;
  const dz = o.z - playerPos.z;
  const distSq = dx * dx + dz * dz;
  const touchR = 2.0; // ORB_TOUCH_R

  if (distSq < touchR * touchR) {
    const freq = freeGrabMode ? (ORB_CREATURE_SEQUENCE[Math.min(_orbsFound, ORB_CREATURE_SEQUENCE.length - 1)] || 'any') : getPlayerFrequency();
    const required = ORB_CREATURE_SEQUENCE[Math.min(_orbsFound, ORB_CREATURE_SEQUENCE.length - 1)] || 'any';
    if (freq) {
      if (!freeGrabMode && required !== 'any' && freq !== required) {
        emit(Events.ORB_REJECTED, { orbIndex: index, required, got: freq, orbsFound: _orbsFound });
        return false;
      }
      o.found = true;
      o.flashing = true;
      o.flashTimer = 0;
      o.flyY = 1.5; // Initial height
      _orbsFound++;

      // Increment obelisk target
      const rungHeight = 25 / QUEST_CONFIG.ORBS_REQUIRED;
      _targetObeliskY = -25 + _orbsFound * rungHeight;

      if (_questPhase === QuestPhases.SEEK) {
        _questPhase = QuestPhases.RISING;
        emit(Events.QUEST_PHASE, { phase: QuestPhases.RISING, orbsFound: _orbsFound });
      }

      emit(Events.ORB_COLLECTED, {
        orbIndex: index,
        orbsFound: _orbsFound,
        x: o.x,
        z: o.z,
        creatureType: freq
      });

      if (!freeGrabMode) consumeFrequency();
      return true;
    } else {
      emit(Events.ORB_REJECTED, { orbIndex: index, required, got: null, orbsFound: _orbsFound });
      return false;
    }
  }
  return null;
}

export function getTimers() {
  return {
    finale: _finaleTimer,
    finalePhase: _finalePhaseTimer,
    transform: _transformTimer,
    freeRoam: _freeRoamTimer
  };
}

let _timersPaused = false;

export function debugForcePhase(phase) {
  _questPhase = phase;
  _obeliskY = 0;
  _targetObeliskY = 0;
  // Reset all timers — jumping to any phase should start fresh
  _finaleTimer = 0;
  _finalePhaseTimer = 0;
  _transformTimer = 0;
  _transformDone = false;
  _freeRoamTimer = 0;
  emit(Events.QUEST_PHASE, { phase, orbsFound: _orbsFound });
}

export function debugPauseTimers(paused) {
  _timersPaused = paused;
}

export function isTimersPaused() {
  return _timersPaused;
}

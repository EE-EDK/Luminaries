// ================================================================
// Quest State — Logic & Progression
// ================================================================
import { emit, Events } from '../kernel/eventBus.js';
import { QuestPhases, QUEST_CONFIG } from './config.js';
import { getPlayerFrequency, consumeFrequency } from '../systems/attunement.js';

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

export function updateQuestState(dt) {
  // Update timers based on phase
  if (_questPhase === QuestPhases.RISING) {
    if (_obeliskY < _targetObeliskY) {
      _obeliskY += QUEST_CONFIG.OBELISK_RISE_SPEED * dt;
      if (_obeliskY > _targetObeliskY) _obeliskY = _targetObeliskY;
      emit('quest:obeliskMoved', { y: _obeliskY });
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
      _questPhase = 'FREE_ROAM';
      _freeRoamTimer = 0;
      emit(Events.QUEST_PHASE, { phase: 'FREE_ROAM', orbsFound: _orbsFound });
    }
  }

  if (_questPhase === 'FREE_ROAM') {
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

export function attemptCollectOrb(index, playerPos) {
  const o = _orbs[index];
  if (o.found) return;

  const dx = o.x - playerPos.x;
  const dz = o.z - playerPos.z;
  const distSq = dx * dx + dz * dz;
  const touchR = 2.0; // ORB_TOUCH_R

  if (distSq < touchR * touchR) {
    const freq = getPlayerFrequency();
    if (freq) {
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

      consumeFrequency();
      return true;
    } else {
      emit(Events.ORB_REJECTED, { orbIndex: index });
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

// ================================================================
// Spirit Hum Visual System — slider feedback, resonance rings, lock text
// ================================================================
// Extracted from main.js _directorSpiritHum(). Self-contained visual
// and input handling for the spirit hum mechanic.

import { rightMouseDown, touchHum, touchHumY, mouseY, screenH } from '../core/input.js';
import { startHum, stopHum, updateHum, isHumming, isLocked, getLockType, getHumPitch, getResonance, getResonanceType, getLockProgress, justLocked } from '../systems/spiritHum.js';
import { startSpiritHumAudio, updateSpiritHumAudio, stopSpiritHumAudio, playPitchLockSound } from '../systems/audio.js';
import { spawnResonanceRing } from '../particles/resonanceRings.js';
import { getGroundY } from '../world/terrain.js';
import { getPerspective, showNarrativeText } from '../systems/discoveries.js';
import { setAttuneFlash, setHumResonance } from '../state/gameState.js';
import { nearest } from '../systems/registration.js';

// ================================================================
// Local state (narrowest scope — only this module reads/writes)
// ================================================================
let _humWasActive = false;
let _humRingTimer = 0;

// Slider DOM refs
const _humThumbEl = document.getElementById('hum-thumb');
const _humBandColors = {
  deer:  'rgba(136,221,255,',
  moth:  'rgba(204,255,170,',
  jelly: 'rgba(170,204,255,',
  puff:  'rgba(255,170,136,',
};
let _humSliderDirty = false;

// Lock narrative text
const _lockTexts = {
  puff: { child: 'The pufflings hear you!', adult: 'Frequency matched — biosignature synchronized' },
  deer: { child: 'The deer turn to listen...', adult: 'Cervine frequency locked — maintain stride' },
  jelly: { child: 'The jellies glow brighter!', adult: 'Cnidarian resonance established — pulse in rhythm' },
  moth: { child: 'The moths circle closer!', adult: 'Lepidoptera wavelength acquired — orbit and observe' }
};

// ================================================================
// Update — called once per frame from director
// ================================================================
export function updateSpiritHumVisuals(dt) {
  const _humInput = rightMouseDown || touchHum;
  if (_humInput && !_humWasActive) {
    startHum();
    startSpiritHumAudio();
  } else if (!_humInput && _humWasActive) {
    stopHum();
    stopSpiritHumAudio();
  }
  _humWasActive = _humInput;

  const _humInputY = touchHum ? touchHumY : (screenH > 0 ? mouseY / screenH : 0.5);

  updateHum(dt, _humInputY, {
    deerDist2: nearest.deerDist2,
    jellyDist2: nearest.jellyDist2,
    mothDist2: nearest.mothDist2,
    puffDist2: nearest.puffDist2
  });

  if (isHumming()) {
    updateSpiritHumAudio(getHumPitch(), getResonance(), getResonanceType());
  }

  // Handle pitch lock event
  if (justLocked()) {
    playPitchLockSound(getLockType());
    setAttuneFlash(0.3, null);
    if (_humThumbEl) {
      _humThumbEl.style.background = 'rgba(255,255,255,0.95)';
      _humThumbEl.style.boxShadow = '0 0 20px 10px rgba(255,255,255,0.8)';
      _humThumbEl.style.transform = 'scale(1.5)';
      _humSliderDirty = true;
    }
    const _lockT = getLockType();
    if (_lockT && _lockTexts[_lockT]) {
      const _ltxt = _lockTexts[_lockT][getPerspective()] || _lockTexts[_lockT].child;
      showNarrativeText(_ltxt, 4.0);
    }
    if (_lockT === 'puff') {
      for (let ri = 0; ri < 5; ri++) {
        spawnResonanceRing(nearest.puffPos.x, getGroundY(nearest.puffPos.x, nearest.puffPos.z), nearest.puffPos.z, 'puff', 1.0);
      }
    }
  }

  // Resonance ring spawning
  const _humRes = getResonance();
  const _humResType = getResonanceType();
  if (_humRes > 0.1 && _humResType && isHumming()) {
    _humRingTimer += dt;
    if (_humRingTimer > 0.33) {
      _humRingTimer = 0;
      let rx = 0, rz = 0;
      switch (_humResType) {
        case 'deer':  rx = nearest.deerPos.x; rz = nearest.deerPos.z; break;
        case 'moth':  rx = nearest.mothPos.x; rz = nearest.mothPos.z; break;
        case 'jelly': rx = nearest.jellyPos.x; rz = nearest.jellyPos.z; break;
        case 'puff':  rx = nearest.puffPos.x; rz = nearest.puffPos.z; break;
      }
      const ry = getGroundY(rx, rz);
      spawnResonanceRing(rx, ry, rz, _humResType, _humRes);
    }
  } else {
    _humRingTimer = 0;
  }

  // Write resonance state for other systems (fauna, etc.)
  setHumResonance(_humResType, _humRes);

  // Slider visual feedback
  if (_humThumbEl) {
    if (isHumming() && _humRes > 0.1 && _humResType) {
      const cBase = _humBandColors[_humResType];
      const alpha = 0.4 + _humRes * 0.6;
      const lp = getLockProgress();
      const spread = lp * 8;
      const glowA = 0.3 + lp * 0.7;
      const scale = 1.0 + lp * 0.3;
      _humThumbEl.style.background = cBase + alpha + ')';
      _humThumbEl.style.borderColor = cBase + '1)';
      _humThumbEl.style.boxShadow = '0 0 ' + (spread + 4) + 'px ' + spread + 'px ' + cBase + glowA + ')';
      _humThumbEl.style.transform = 'scale(' + scale + ')';
      _humSliderDirty = true;
    } else if (_humSliderDirty) {
      _humThumbEl.style.background = 'rgba(100,255,180,.35)';
      _humThumbEl.style.borderColor = 'rgba(100,255,180,.5)';
      _humThumbEl.style.boxShadow = 'none';
      _humThumbEl.style.transform = 'scale(1)';
      _humSliderDirty = false;
    }
  }
}

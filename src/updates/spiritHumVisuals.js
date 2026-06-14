// ================================================================
// Spirit Hum Visual System — slider feedback, resonance rings, lock text
// ================================================================
// Extracted from main.js _directorSpiritHum(). Self-contained visual
// and input handling for the spirit hum mechanic.

import { touchHum, touchHumY, keys, humFreqArmed, mobile } from '../core/input.js';
import { HUM_FREQ_MIN, HUM_FREQ_MAX, HUM_KEY_RAMP_NORM_PER_S } from '../constants.js';
import { startHum, stopHum, updateHum, isHumming, isLocked, getLockType, getHumPitch, getResonance, getResonanceType, getLockProgress, justLocked, getFarFieldHint, getLockDecay } from '../systems/spiritHum.js';
import { startSpiritHumAudio, updateSpiritHumAudio, stopSpiritHumAudio, playPitchLockSound } from '../systems/audio.js';
import { spawnResonanceRing } from '../particles/resonanceRings.js';
import { getGroundY } from '../world/terrain.js';
import { getPerspective } from '../state/narrativeState.js';
import { showNarrativeText } from '../systems/discoveries.js';
import { setAttuneFlash, setHumResonance } from '../state/gameState.js';
import { nearest } from '../systems/registration.js';
import { getJellyPostTimer } from '../systems/attunement.js';

// ================================================================
// Local state (narrowest scope — only this module reads/writes)
// ================================================================
let _humWasActive = false;
let _humRingTimer = 0;
/** Desktop: normalized hum pitch 0=high Hz, 1=low Hz (Q/E nudge). */
let _desktopHumNorm = 0.5;

// Slider DOM refs
const _humSliderEl    = document.getElementById('hum-slider');
const _humThumbEl     = document.getElementById('hum-thumb');
const _humFarfieldEl  = document.getElementById('hum-farfield-hint');
const _humJellyBarEl  = document.getElementById('hum-jelly-bar');
const _humJellyFillEl = document.getElementById('hum-jelly-fill');

// A6: creature label elements (desktop band labels)
const _humLabelEls = {
  puff:  document.getElementById('hum-label-puff'),
  jelly: document.getElementById('hum-label-jelly'),
  moth:  document.getElementById('hum-label-moth'),
  deer:  document.getElementById('hum-label-deer'),
};

const _humBandColors = {
  deer:  'rgba(136,221,255,',
  moth:  'rgba(204,255,170,',
  jelly: 'rgba(170,204,255,',
  puff:  'rgba(255,170,136,',
};

// A6: display names for creature types
const _creatureNames = { deer: 'deer', moth: 'moth', jelly: 'jellyfish', puff: 'puffling' };

let _humSliderDirty = false;

// A6: dirty-check state for desktop slider visibility
let _sliderDesktopVisible = false;

// A6: dirty-check for thumb position (0–1 norm → bottom px within track height 280)
let _lastThumbNorm = -1;

// B2: dirty-check for far-field hint content
let _lastFarfieldType = null;

// C1: dirty-check for jelly bar
let _lastJellyBarPct = -1;

// lock-decay: dirty-check for fading class
let _lastLockFading = false;

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
  // ----------------------------------------------------------------
  // A6: Desktop slider visibility — show when humFreqArmed, hide when not.
  // Mobile already manages its own display:block externally; we only act
  // on desktop (mobile === false).
  // ----------------------------------------------------------------
  if (!mobile && _humSliderEl) {
    const _shouldShow = !!humFreqArmed;
    if (_shouldShow !== _sliderDesktopVisible) {
      _sliderDesktopVisible = _shouldShow;
      _humSliderEl.style.display = _shouldShow ? 'block' : 'none';
      // Show/hide creature labels together with the slider
      const _lblDisplay = _shouldShow ? 'flex' : 'none';
      if (_humLabelEls.puff)  _humLabelEls.puff.style.display  = _lblDisplay;
      if (_humLabelEls.jelly) _humLabelEls.jelly.style.display = _lblDisplay;
      if (_humLabelEls.moth)  _humLabelEls.moth.style.display  = _lblDisplay;
      if (_humLabelEls.deer)  _humLabelEls.deer.style.display  = _lblDisplay;
    }
  }

  const _humInput = touchHum || (!mobile && humFreqArmed);
  const _enterHum = _humInput && !_humWasActive;
  if (_humInput && !_humWasActive) {
    startHum();
    startSpiritHumAudio();
  } else if (!_humInput && _humWasActive) {
    stopHum();
    stopSpiritHumAudio();
  }
  if (_enterHum && !touchHum && !mobile && humFreqArmed) {
    const hz = getHumPitch();
    _desktopHumNorm = (HUM_FREQ_MAX - hz) / (HUM_FREQ_MAX - HUM_FREQ_MIN);
    _desktopHumNorm = Math.max(0, Math.min(1, _desktopHumNorm));
  }
  if (!mobile && humFreqArmed) {
    const ramp = HUM_KEY_RAMP_NORM_PER_S;
    if (keys['KeyQ']) _desktopHumNorm += ramp * dt;
    if (keys['KeyE'] || keys['KeyR']) _desktopHumNorm -= ramp * dt;
    _desktopHumNorm = Math.max(0, Math.min(1, _desktopHumNorm));
  }
  _humWasActive = _humInput;

  const _humInputY = touchHum ? touchHumY : _desktopHumNorm;

  // ----------------------------------------------------------------
  // A6: Live thumb position — dirty-checked, no per-frame DOM writes
  // when pitch isn't moving. Track height = 280px; thumb height = 20px.
  // norm 0 = top (high pitch) → bottom:260; norm 1 = bottom (low) → bottom:0
  // ----------------------------------------------------------------
  if (_humThumbEl && (_sliderDesktopVisible || touchHum)) {
    const _tNorm = _humInputY;
    if (Math.abs(_tNorm - _lastThumbNorm) > 0.003) {
      _lastThumbNorm = _tNorm;
      const _trackH = 280;
      const _thumbH = 20;
      const _bottomPx = Math.round((_trackH - _thumbH) * (1 - _tNorm));
      _humThumbEl.style.bottom = _bottomPx + 'px';
    }
  }

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

  // Write resonance state for other systems (fauna, etc.). While pitch-locked but not humming,
  // carry lock type + floor strength so jelly visuals/orbs stay in "carrier" mode (resonance decays to 0 in spiritHum).
  let _outType = _humResType;
  let _outStr = _humRes;
  if (!isHumming() && isLocked() && getLockType()) {
    _outType = getLockType();
    // Stronger floor for jelly so fauna/red-glow reads match carrier state after auto-stop hum.
    const _floor = getLockType() === 'jelly' ? 0.72 : 0.5;
    _outStr = Math.max(_outStr, _floor);
  }
  setHumResonance(_outType, _outStr);

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

  // ----------------------------------------------------------------
  // B2: Far-field "get closer" hint
  // Read type/dist from the shared singleton immediately — don't cache ref.
  // ----------------------------------------------------------------
  if (_humFarfieldEl) {
    const _ffh = getFarFieldHint();
    const _ffType = _ffh ? _ffh.type : null;
    if (_ffType !== _lastFarfieldType) {
      _lastFarfieldType = _ffType;
      if (_ffType) {
        const _ffDist = Math.round(_ffh.dist);
        const _ffName = _creatureNames[_ffType] || _ffType;
        const _ffColor = _humBandColors[_ffType] ? _humBandColors[_ffType] + '1)' : '#88ffcc';
        _humFarfieldEl.style.display = 'block';
        _humFarfieldEl.style.color = _ffColor;
        _humFarfieldEl.style.borderColor = _ffColor.replace(',1)', ',.35)');
        _humFarfieldEl.textContent = 'Pitch matches ' + _ffName + ' — move closer (~' + _ffDist + 'm)';
      } else {
        _humFarfieldEl.style.display = 'none';
      }
    }
  }

  // ----------------------------------------------------------------
  // C1: Jelly post-attune countdown bar
  // Full = green-blue; warning (< 3s) shifts toward orange-red.
  // ----------------------------------------------------------------
  if (_humJellyBarEl && _humJellyFillEl) {
    const _jpt = getJellyPostTimer();
    if (_jpt > 0) {
      // 0–9.5 → 0–100%; clamp to [0,1]
      const _jPct = Math.min(1, _jpt / 9.5);
      const _jPctRounded = Math.round(_jPct * 100);
      if (_jPctRounded !== _lastJellyBarPct) {
        _lastJellyBarPct = _jPctRounded;
        _humJellyBarEl.style.display = 'block';
        _humJellyFillEl.style.width = _jPctRounded + '%';
        // Color: healthy = jelly blue; warning (<3s, pct<0.32) → warm orange
        const _warn = _jPct < 0.32;
        _humJellyFillEl.style.background = _warn
          ? 'rgba(255,140,80,' + (0.7 + (1 - _jPct / 0.32) * 0.3) + ')'
          : 'rgba(170,204,255,' + (0.55 + _jPct * 0.35) + ')';
      }
    } else if (_lastJellyBarPct !== 0) {
      _lastJellyBarPct = 0;
      _humJellyBarEl.style.display = 'none';
    }
  }

  // ----------------------------------------------------------------
  // Lock-decay fade cue: pulse thumb when lock has < 1.5s remaining.
  // Uses CSS animation class + custom property for the creature color.
  // ----------------------------------------------------------------
  if (_humThumbEl) {
    const _locked = isLocked();
    const _isFading = _locked && getLockDecay() < 1.5;
    if (_isFading !== _lastLockFading) {
      _lastLockFading = _isFading;
      if (_isFading) {
        const _lt = getLockType();
        const _cBase = (_lt && _humBandColors[_lt]) ? _humBandColors[_lt] + '0.8)' : 'rgba(255,255,255,0.8)';
        _humThumbEl.style.setProperty('--hum-fade-color', _cBase);
        _humThumbEl.classList.add('lock-fading');
      } else {
        _humThumbEl.classList.remove('lock-fading');
        _humThumbEl.style.removeProperty('--hum-fade-color');
      }
    }
  }
}

import { questPhase } from '../quest/questManager.js';
import { phase as timePhase } from '../systems/dayNightCycle.js';
import { weatherState } from '../systems/weather.js';
import {
  formatDayPhaseLabel,
  formatQuestHudTitle,
  formatWeatherLabel,
} from './hudLabels.js';

let hudEl = null;
let fpsS = 60;
let _questSpan = null;
let _timeSpan = null;
let _weatherSpan = null;
let _fpsSpan = null;
let _posSpan = null;
let _prevQuest = '';
let _prevTime = '';
let _prevWeather = '';

export function initHUD() {
  hudEl = document.getElementById('hud');
  if (!hudEl) return;
  hudEl.innerHTML = '';
  _questSpan = document.createElement('b');
  _timeSpan = document.createElement('span');
  _weatherSpan = document.createElement('span');
  hudEl.appendChild(_questSpan);
  hudEl.appendChild(document.createTextNode(' \u00B7 '));
  hudEl.appendChild(_timeSpan);
  hudEl.appendChild(document.createTextNode(' \u00B7 '));
  hudEl.appendChild(_weatherSpan);
  if (import.meta.env.DEV) {
    _fpsSpan = document.createElement('span');
    _posSpan = document.createElement('span');
    hudEl.appendChild(document.createTextNode(' \u00B7 '));
    hudEl.appendChild(_fpsSpan);
    hudEl.appendChild(document.createElement('br'));
    hudEl.appendChild(_posSpan);
  }
}

export function updateHUD(dt, playerPos) {
  if (!hudEl) return;
  fpsS = fpsS * 0.95 + (1 / Math.max(dt, 0.001)) * 0.05;
  const qLabel = formatQuestHudTitle(questPhase);
  const tLabel = formatDayPhaseLabel(timePhase);
  const wLabel = formatWeatherLabel(weatherState);

  // Only update DOM when values change
  if (qLabel !== _prevQuest) { _questSpan.textContent = qLabel; _prevQuest = qLabel; }
  if (tLabel !== _prevTime) { _timeSpan.textContent = tLabel; _prevTime = tLabel; }
  if (wLabel !== _prevWeather) { _weatherSpan.textContent = wLabel; _prevWeather = wLabel; }
  if (_fpsSpan) _fpsSpan.textContent = 'FPS:' + Math.round(fpsS);
  if (_posSpan) _posSpan.textContent = 'Pos:' + playerPos.x.toFixed(0) + ',' + playerPos.z.toFixed(0);
}

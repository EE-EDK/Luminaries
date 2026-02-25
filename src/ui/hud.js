import { questPhase } from '../quest/questManager.js';
import { phase as timePhase } from '../systems/dayNightCycle.js';
import { weatherState } from '../systems/weather.js';

let hudEl = null;
let fpsS = 60;

const PHASE_LABELS = {
  DUSK: 'Dusk',
  NIGHT: 'Night',
  DEEP_NIGHT: 'Deep Night',
  DAWN: 'Dawn'
};

const WEATHER_LABELS = {
  CLEAR: 'Clear',
  MISTY: 'Misty',
  LIGHT_RAIN: 'Light Rain',
  HEAVY_RAIN: 'Heavy Rain',
  FOG_BANK: 'Fog',
  LUMINOUS_STORM: 'Storm'
};

export function initHUD() {
  hudEl = document.getElementById('hud');
}

export function updateHUD(dt, playerPos) {
  if (!hudEl) return;
  fpsS = fpsS * 0.95 + (1 / Math.max(dt, 0.001)) * 0.05;
  const qLabel = questPhase === 'SEEK' ? 'Seek the orbs...' :
    questPhase === 'RISING' ? 'The obelisk stirs...' :
    questPhase === 'COMPLETE' ? 'Convergence!' :
    'Luminaries';
  const tLabel = PHASE_LABELS[timePhase] || 'Night';
  const wLabel = WEATHER_LABELS[weatherState] || 'Clear';
  hudEl.innerHTML = '<b>' + qLabel + '</b> · ' + tLabel + ' · ' + wLabel + ' · FPS:' + Math.round(fpsS) +
    '<br>Pos:' + playerPos.x.toFixed(0) + ',' + playerPos.z.toFixed(0);
}

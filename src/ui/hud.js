import { questPhase } from '../quest/questManager.js';

let hudEl = null;
let fpsS = 60;

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
  hudEl.innerHTML = '<b>' + qLabel + '</b> · FPS:' + Math.round(fpsS) +
    '<br>Pos:' + playerPos.x.toFixed(0) + ',' + playerPos.z.toFixed(0);
}

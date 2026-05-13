// ================================================================
// Dev Skip Panel — fast-forward through major game milestones
// ================================================================
import { debugSkipIntro } from '../systems/intro/index.js';
import { debugGrantOrbs, debugForcePhase, debugPauseTimers, getQuestPhase, getOrbsFound } from '../quest/questState.js';
import { QuestPhases } from '../quest/config.js';
import { debugUnlockCreature } from './debugConsole.js';

const ORB_CREATURES = ['puff', 'jelly', 'deer', 'moth', null];

let panel = null;
let statusEl = null;

function updateStatus() {
  if (!statusEl) return;
  statusEl.textContent = `Phase: ${getQuestPhase()} | Orbs: ${getOrbsFound()}/5`;
}

function btn(label, onClick) {
  const b = document.createElement('button');
  b.textContent = label;
  b.style.cssText =
    'display:block;width:100%;padding:6px 8px;margin:0 0 4px;cursor:pointer;' +
    'font-family:monospace;font-size:11px;border:1px solid rgba(100,255,180,.4);' +
    'border-radius:4px;background:rgba(20,60,40,.85);color:#aaffcc;' +
    'text-align:left;transition:background .15s;';
  b.addEventListener('mouseenter', () => { b.style.background = 'rgba(40,100,70,.9)'; });
  b.addEventListener('mouseleave', () => { b.style.background = 'rgba(20,60,40,.85)'; });
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    onClick();
    updateStatus();
  });
  return b;
}

function grantOrbWithCreature(targetCount) {
  const current = getOrbsFound();
  if (current >= targetCount) return;
  const creatureIdx = targetCount - 1;
  const creature = ORB_CREATURES[creatureIdx];
  if (creature) debugUnlockCreature(creature);
  debugGrantOrbs(targetCount);
}

export function initDevSkipPanel() {
  if (typeof document === 'undefined') return;
  if (!import.meta.env?.DEV) return;
  if (panel) return;

  panel = document.createElement('div');
  panel.id = 'dev-skip-panel';
  panel.style.cssText =
    'position:fixed;top:10px;right:10px;z-index:400;padding:10px 12px;' +
    'background:rgba(8,20,14,.92);border:1px solid rgba(100,255,180,.3);' +
    'border-radius:8px;font-family:monospace;min-width:180px;' +
    'box-shadow:0 4px 20px rgba(0,0,0,.5);';

  const title = document.createElement('div');
  title.textContent = 'DEV SKIP';
  title.style.cssText =
    'color:#66ffaa;font-size:11px;font-weight:bold;letter-spacing:2px;' +
    'margin-bottom:8px;text-align:center;border-bottom:1px solid rgba(100,255,180,.2);' +
    'padding-bottom:6px;';
  panel.appendChild(title);

  statusEl = document.createElement('div');
  statusEl.style.cssText =
    'color:#88ccaa;font-size:10px;margin-bottom:8px;text-align:center;';
  panel.appendChild(statusEl);
  updateStatus();

  panel.appendChild(btn('Skip Intro', () => {
    debugSkipIntro();
  }));

  const sep1 = document.createElement('div');
  sep1.style.cssText = 'border-top:1px solid rgba(100,255,180,.15);margin:6px 0;';
  panel.appendChild(sep1);

  for (let i = 1; i <= 5; i++) {
    const creature = ORB_CREATURES[i - 1];
    const label = creature
      ? `Orb ${i} (${creature})`
      : `Orb ${i} (any)`;
    panel.appendChild(btn(label, () => {
      grantOrbWithCreature(i);
      if (i === 5) {
        setTimeout(() => {
          debugForcePhase(QuestPhases.COMPLETE);
          updateStatus();
          setTimeout(() => {
            debugForcePhase(QuestPhases.FINALE);
            updateStatus();
            setTimeout(() => {
              debugForcePhase(QuestPhases.TRANSFORM);
              updateStatus();
              setTimeout(() => {
                debugForcePhase('FREE_ROAM');
                debugPauseTimers(true);
                updateStatus();
              }, 22000);
            }, 32000);
          }, 14000);
        }, 2000);
      }
    }));
  }

  const sep2 = document.createElement('div');
  sep2.style.cssText = 'border-top:1px solid rgba(100,255,180,.15);margin:6px 0;';
  panel.appendChild(sep2);

  panel.appendChild(btn('Skip to Mage Scene', () => {
    debugSkipIntro();
    debugGrantOrbs(5);
    setTimeout(() => {
      debugForcePhase(QuestPhases.FINALE);
      updateStatus();
    }, 500);
  }));

  panel.appendChild(btn('Resume Timers', () => {
    debugPauseTimers(false);
  }));

  panel.appendChild(btn('Pause Timers', () => {
    debugPauseTimers(true);
  }));

  document.body.appendChild(panel);

  setInterval(updateStatus, 1000);
}

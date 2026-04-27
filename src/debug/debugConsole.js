// ================================================================
// Debug console — progression / attunement testing
// ================================================================
// API: window.LumiDebug (when enabled — see below)
//
// Where to use it:
// - Browser DevTools console: LumiDebug.help()
// - In-game terminal: Esc twice within 3 seconds (bottom panel). Same API;
//   enter expressions like help() or grantOrbs(3) (commands resolve via with(LumiDebug)).
//
// Enabled when: Vite DEV, or URL ?debug=1, or localStorage lumiDebug=1,
// or after opening the in-game terminal (sets lumiDebug).

import { emit, Events } from '../kernel/eventBus.js';
import { player } from '../core/player.js';
import { getGroundY } from '../world/terrain.js';
import { nearest } from '../systems/registration.js';
import { debugForcePitchLock, resetLock } from '../systems/spiritHum.js';
import { debugForceAttuned, consumeFrequency } from '../systems/attunement.js';
import { debugGrantOrbs } from '../quest/questState.js';
import { unlockTruthControlHint } from '../core/input.js';
import { debugSpawnWizardEncounter } from '../systems/wizardPufflingEvent.js';

/** @type {number | null} */
let _seqChainTimer = null;

function creatureWorldPos(type) {
  let x = player.pos.x;
  let z = player.pos.z;
  switch (type) {
    case 'jelly':
      if (nearest.jellyDist2 < Infinity) {
        x = nearest.jellyPos.x;
        z = nearest.jellyPos.z;
      }
      break;
    case 'deer':
      if (nearest.deerDist2 < Infinity) {
        x = nearest.deerPos.x;
        z = nearest.deerPos.z;
      }
      break;
    case 'moth':
      if (nearest.mothDist2 < Infinity) {
        x = nearest.mothPos.x;
        z = nearest.mothPos.z;
      }
      break;
    case 'puff':
      if (nearest.puffDist2 < Infinity) {
        x = nearest.puffPos.x;
        z = nearest.puffPos.z;
      }
      break;
    default:
      break;
  }
  return { x, y: getGroundY(x, z), z };
}

/**
 * Pitch-lock + full carrier + CREATURE_ATTUNED (crimson jelly circle, HUD, listeners).
 * @param {'puff'|'jelly'|'deer'|'moth'} type
 */
export function debugUnlockCreature(type) {
  if (!['puff', 'jelly', 'deer', 'moth'].includes(type)) {
    return false;
  }
  debugForcePitchLock(type);
  debugForceAttuned(type);
  const pos = creatureWorldPos(type);
  emit(Events.CREATURE_ATTUNED, {
    type,
    pos,
    playerPos: { x: player.pos.x, z: player.pos.z }
  });
  return true;
}

function isDebugConsoleEnabled() {
  if (import.meta.env?.DEV) return true;
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('lumiDebug') === '1') return true;
    if (typeof location !== 'undefined' && new URLSearchParams(location.search).get('debug') === '1') {
      return true;
    }
  } catch (_) {}
  return false;
}

function buildHelpText() {
  return `[LumiDebug] Creature order (quest orbs): puff → jelly → deer → moth → any
  unlockPitch('jelly'|'deer'|'moth'|'puff')     — spirit hum pitch-lock only
  unlockCreature(type)                           — lock + carrier + jelly crimson / events
  unlockSequence(delayMs?, ['jelly','deer',…])   — chained demo (default ${1800}ms)
  unlockAllCreatures()                           — fire all four (stagger 400ms); last = puff carrier
  grantOrbs(n)                                  — quest orbs 0–5 (no walking; fires ORB_COLLECTED)
  spawnWizard()                                  — start wizard encounter immediately (camera tracks him)
  unlockTruth()                                 — TAB discovery hint in control bar
  resetAttune()                                  — consumeFrequency + resetLock
  stopSequence()                                 — cancel pending unlockSequence`;
}

/** Idempotent — safe to call when opening the in-game terminal or on boot (dev). */
export function attachLumiDebugApi() {
  if (typeof window === 'undefined' || window.LumiDebug) return;

  window.LumiDebug = {
    help() {
      const text = buildHelpText();
      console.log(text);
      return text;
    },

    unlockPitch: debugForcePitchLock,

    unlockCreature: debugUnlockCreature,

    /**
     * @param {number} [delayMs=1800]
     * @param {Array<'puff'|'jelly'|'deer'|'moth'>} [order] default jelly → deer → moth → puff
     */
    unlockSequence(delayMs = 1800, order = ['jelly', 'deer', 'moth', 'puff']) {
      if (_seqChainTimer) {
        clearTimeout(_seqChainTimer);
        _seqChainTimer = null;
      }
      let i = 0;
      const step = () => {
        if (i >= order.length) {
          _seqChainTimer = null;
          return;
        }
        debugUnlockCreature(order[i]);
        i++;
        if (i < order.length) _seqChainTimer = window.setTimeout(step, delayMs);
      };
      step();
    },

    unlockAllCreatures() {
      this.unlockSequence(400, ['jelly', 'deer', 'moth', 'puff']);
    },

    grantOrbs(n) {
      debugGrantOrbs(n);
    },

    spawnWizard() {
      return debugSpawnWizardEncounter();
    },

    unlockTruth() {
      unlockTruthControlHint();
    },

    resetAttune() {
      consumeFrequency();
      resetLock();
    },

    stopSequence() {
      if (_seqChainTimer) {
        clearTimeout(_seqChainTimer);
        _seqChainTimer = null;
      }
    },

    /** Truth hint + all four creatures (staggered) + 5 orbs — smoke-test everything */
    unlockEverything() {
      unlockTruthControlHint();
      this.unlockSequence(350, ['jelly', 'deer', 'moth', 'puff']);
      window.setTimeout(() => debugGrantOrbs(5), 350 * 4 + 120);
    }
  };

  console.log('[LumiDebug] attached — type LumiDebug.help() or open in-game terminal (Esc×2)');
}

const ESC_DOUBLE_MS = 3000;

/**
 * In-game shell: Esc twice within 3s opens; Esc closes when open.
 * Expressions run with `with (LumiDebug)` so `help()` and `grantOrbs(3)` work.
 */
function initDebugTerminalShell() {
  if (typeof document === 'undefined' || document.getElementById('lumi-debug-terminal')) return;

  let terminalVisible = false;
  let escFirstTs = 0;

  const root = document.createElement('div');
  root.id = 'lumi-debug-terminal';
  root.setAttribute('aria-label', 'Debug terminal');
  root.style.cssText = [
    'display:none',
    'position:fixed',
    'bottom:0',
    'left:0',
    'right:0',
    'height:min(42vh,340px)',
    'z-index:260',
    'background:rgba(4,12,8,.94)',
    'border-top:1px solid rgba(100,255,180,.35)',
    "font-family:'Courier New',monospace",
    'font-size:12px',
    'flex-direction:column',
    'box-shadow:0 -8px 32px rgba(0,0,0,.5)'
  ].join(';');

  const hdr = document.createElement('div');
  hdr.textContent =
    'Debug terminal · Esc×2 within 3s opens · Esc closes · Enter runs (commands from LumiDebug)';
  hdr.style.cssText =
    'padding:6px 10px;color:#88ffcc;font-size:11px;border-bottom:1px solid rgba(100,255,180,.2);flex-shrink:0';

  const log = document.createElement('pre');
  log.id = 'lumi-debug-log';
  log.style.cssText =
    'flex:1;overflow:auto;padding:8px 10px;margin:0;color:#aaffcc;white-space:pre-wrap;word-break:break-word';

  const row = document.createElement('div');
  row.style.cssText =
    'display:flex;align-items:center;gap:6px;padding:6px 10px;border-top:1px solid rgba(100,255,180,.2)';
  const prompt = document.createElement('span');
  prompt.textContent = '>';
  prompt.style.color = '#66cc99';
  const input = document.createElement('input');
  input.id = 'lumi-debug-input';
  input.type = 'text';
  input.setAttribute('spellcheck', 'false');
  input.setAttribute('autocomplete', 'off');
  input.style.cssText =
    'flex:1;background:rgba(0,0,0,.4);border:1px solid rgba(100,255,180,.25);color:#ccffee;padding:6px 8px;font-family:inherit;font-size:12px';

  row.appendChild(prompt);
  row.appendChild(input);
  root.appendChild(hdr);
  root.appendChild(log);
  root.appendChild(row);
  root.style.display = 'flex';
  root.style.flexDirection = 'column';
  document.body.appendChild(root);
  root.style.display = 'none';

  function appendLog(line, isErr = false) {
    const span = document.createElement('span');
    span.style.color = isErr ? '#ff8888' : '#aaffcc';
    span.textContent = line + '\n';
    log.appendChild(span);
    log.scrollTop = log.scrollHeight;
  }

  function formatResult(r) {
    if (r === undefined) return '(undefined)';
    if (r === null) return 'null';
    if (typeof r === 'string') return r;
    try {
      return JSON.stringify(r, null, 2);
    } catch (_) {
      return String(r);
    }
  }

  function showTerminal() {
    attachLumiDebugApi();
    try {
      localStorage.setItem('lumiDebug', '1');
    } catch (_) {}
    root.style.display = 'flex';
    terminalVisible = true;
    appendLog('[terminal] Try: help()   grantOrbs(5)   unlockCreature(\'jelly\')');
    input.focus();
  }

  function hideTerminal() {
    root.style.display = 'none';
    terminalVisible = false;
    escFirstTs = 0;
  }

  function runLine(line) {
    if (!window.LumiDebug) {
      appendLog('[error] LumiDebug not attached', true);
      return;
    }
    try {
      // eslint-disable-next-line no-new-func -- dev-only REPL; input is trusted operator
      const fn = new Function(
        'LumiDebug',
        `with (LumiDebug) { return eval(${JSON.stringify(line)}); }`
      );
      const r = fn(window.LumiDebug);
      appendLog(formatResult(r));
    } catch (err) {
      appendLog((err && err.message) || String(err), true);
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const line = input.value.trim();
      if (!line) return;
      appendLog('> ' + line);
      input.value = '';
      runLine(line);
    }
  });

  window.addEventListener(
    'keydown',
    (e) => {
      if (e.code !== 'Escape' || e.repeat) return;

      if (terminalVisible) {
        e.preventDefault();
        hideTerminal();
        return;
      }

      const now = performance.now();
      if (escFirstTs > 0 && now - escFirstTs <= ESC_DOUBLE_MS) {
        escFirstTs = 0;
        e.preventDefault();
        showTerminal();
      } else {
        escFirstTs = now;
      }
    },
    true
  );
}

export function initDebugConsole() {
  initDebugTerminalShell();
  if (isDebugConsoleEnabled()) {
    attachLumiDebugApi();
  }
}

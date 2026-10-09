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

import { emit, on, off, Events } from '../kernel/eventBus.js';
import { getQuestSnapshot } from '../quest/questState.js';
import { getRestoredSectors, setSectorRestored, prepareLocalGlowFrame } from '../systems/dimming.js';
import { debugSkipIntro } from '../systems/intro.js';
import { getLookSensitivity, isInvertY, setYaw, setPitch } from '../core/input.js';
import { isReducedMotion } from '../core/player.js';
import { getQualityFloor } from './../systems/adaptiveQuality.js';
import { getSettings } from '../state/settingsState.js';
import { showNarrativeText } from '../systems/discoveries.js';
import { getPostSettings, setPostOverride } from '../core/postprocessing.js';
import { audioStageReport } from '../systems/audio.js';
import { deers, puffs, moths, jellies } from '../state/entityStore.js';
import { phase as dayPhase, setWorldTime } from '../systems/dayNightCycle.js';
import { isStorming, getRainRate } from '../systems/weather.js';
import { player } from '../core/player.js';
import { getGroundY } from '../world/terrain.js';
import { EYE_H } from '../constants.js';
import { nearest } from '../systems/registration.js';
import { debugForcePitchLock, resetLock } from '../systems/spiritHum.js';
import { debugForceAttuned, consumeFrequency } from '../systems/attunement.js';
import { debugGrantOrbs, debugForcePhase, debugPauseTimers } from '../quest/questState.js';
import { QuestPhases } from '../quest/config.js';
import { unlockTruthControlHint } from '../core/input.js';
import { revealTruth } from '../state/narrativeState.js';
import { debugSpawnWizardEncounter } from '../systems/wizardPufflingEvent.js';
import { getFpsStats, getTopTimings, getRendererInfo } from '../systems/perfMonitor.js';
import { list as listSystems } from '../kernel/scheduler.js';
import { getQualityReport, setAdaptiveQualityEnabled } from '../systems/adaptiveQuality.js';
import { groundKind } from '../world/terrain.js';
import { getGust, getGustFront } from '../systems/weather.js';
import { gustWaveAt, musicDensity } from '../systems/environment.js';
import { getOrbsFound } from '../quest/questState.js';
import { ORB_N } from '../constants.js';
import { getPufflingHouseCollision, getDetailedHouseRoots } from '../entities/world/pufflingHomes.js';

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
  forcePhase(phase)                             — jump to quest phase (use phases.FINALE etc)
  pauseTimers() / resumeTimers()                — freeze/unfreeze quest phase timers
  phases                                        — QuestPhases enum (SEEK, RISING, COMPLETE, FINALE, TRANSFORM)
  spawnWizard()                                  — start wizard encounter immediately (camera tracks him)
  perf(topN?)                                    — FPS (avg/1%-low/min) + draw calls + hottest subsystems
  quality()                                      — adaptive-quality notch + smoothed FPS + active knobs
  quality(false|true)                            — disable/enable the adaptive scaler (A/B FPS testing)
  unlockTruth()                                 — TAB discovery hint in control bar
  resetAttune()                                  — consumeFrequency + resetLock
  stopSequence()                                 — cancel pending unlockSequence`;
}

/**
 * Performance snapshot — rolling FPS (avg / 1%-low / min over the perfMonitor
 * window), renderer.info draw stats, and the top subsystems by EMA ms.
 * Logs a readable summary and returns the structured object.
 *
 * Target (owner, measured on real hardware): avg >= 20, 1%-low >= 15.
 * @param {number} [topN=6] how many hottest subsystems to include.
 */
export function debugPerfSnapshot(topN = 6) {
  const fps = getFpsStats();
  const info = getRendererInfo();
  const top = getTopTimings(topN);
  const snap = { fps, renderer: info, top };

  const fpsLine = fps.frames > 0
    ? `avg ${fps.fpsAvg.toFixed(1)}  1%-low ${fps.fps1pctLow.toFixed(1)}  ` +
      `min ${fps.fpsMin.toFixed(1)}  (over ${fps.frames} frames)`
    : 'no frames sampled yet (move around for a few seconds, then re-run)';
  console.log('[perf] FPS  ' + fpsLine + '   target: avg>=20, 1%-low>=15');

  if (info) {
    console.log(
      `[perf] draws ${info.drawCalls}  tris ${info.triangles}  ` +
      `programs ${info.programs}  geos ${info.geometries}  texs ${info.textures}`
    );
  } else {
    console.log('[perf] renderer.info unavailable (renderer not wired yet)');
  }

  if (top.length) {
    console.table(top.map((t) => ({
      System: t.system,
      'Avg ms': t.avgMs.toFixed(3),
      'Max ms': t.maxMs.toFixed(3)
    })));
  }

  // Throttled (reduced-cadence) systems — so the owner can confirm which
  // non-critical work is staggered off the hot path (Task 11.3). Full-rate
  // systems (everyN === 1: player physics, fauna, camera, particles) are omitted.
  const throttled = listSystems()
    .filter((s) => s.everyN > 1)
    .map((s) => ({ system: s.name, everyN: s.everyN, offset: s.offset }));
  snap.throttled = throttled;
  if (throttled.length) {
    console.log('[perf] throttled systems (everyN>1): ' +
      throttled.map((s) => `${s.system}×${s.everyN}@${s.offset}`).join('  '));
  }

  return snap;
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

    /** Perf snapshot: rolling FPS + renderer.info + hottest subsystems. */
    perf(topN = 6) {
      return debugPerfSnapshot(topN);
    },

    /**
     * Adaptive-quality state, or toggle the scaler for A/B FPS testing.
     *   quality()       → snapshot { notch, notchName, smoothedFps, knobs… }
     *   quality(false)  → disable the scaler (pin quality at the current notch)
     *   quality(true)   → re-enable the scaler
     */
    quality(enable) {
      if (enable !== undefined) {
        setAdaptiveQualityEnabled(!!enable);
      }
      const snap = getQualityReport();
      console.log(
        `[quality] notch ${snap.notch} (${snap.notchName})  ` +
        `smoothedFps ${snap.smoothedFps}  enabled ${snap.enabled}  ` +
        `particle×${snap.particleScale} bloom${snap.bloomStrength} ` +
        `lod×${snap.lodScale} density×${snap.densityScale}`
      );
      return snap;
    },

    unlockTruth() {
      revealTruth();
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

    forcePhase(phase) {
      debugForcePhase(phase);
    },

    pauseTimers() {
      debugPauseTimers(true);
    },

    resumeTimers() {
      debugPauseTimers(false);
    },

    phases: QuestPhases,

    /** Skip the cinematic and hand straight over to the player. */
    skipIntro() { debugSkipIntro(); },

    /**
     * Read-only view of what a save would carry, plus what the world is
     * actually showing. The two disagreeing is the whole failure mode a
     * restore has, so they are reported together rather than one at a time.
     */
    save() {
      const quest = getQuestSnapshot();
      return {
        orbsFound: quest.collected.length,
        questPhase: quest.phase,
        obeliskY: quest.obeliskY,
        collected: quest.collected,
        restoredSectors: getRestoredSectors(),
        stored: (() => {
          try { return localStorage.getItem('lumi.save.v1'); } catch (_) { return null; }
        })(),
      };
    },

    /**
     * What the settings SAY next to what the consumers are actually doing.
     * Stored-but-not-applied is invisible from the panel, so the two are
     * reported side by side rather than one at a time.
     */
    settings() {
      const stored = getSettings();
      return {
        stored,
        applied: {
          lookSensitivity: getLookSensitivity(),
          invertY: isInvertY(),
          reducedMotion: isReducedMotion(),
          qualityFloor: getQualityFloor(),
          textScale: typeof document !== 'undefined'
            ? getComputedStyle(document.documentElement).getPropertyValue('--lumi-text-scale').trim()
            : null,
        },
      };
    },

    /**
     * Read or force the post-pass look. post() reports; post({vignette, grain})
     * overrides until released with post(null), which is what makes an A/B
     * measurable — the per-frame driver would otherwise overwrite any value
     * set from the console before the next screenshot.
     */
    post(over) {
      if (over === null) { setPostOverride(null); return getPostSettings(); }
      if (over) setPostOverride(over);
      return getPostSettings();
    },

    /**
     * Point the camera. For checks that need a known heading: a real mouse
     * drag on the canvas takes pointer lock, and in headless Chromium the lock
     * request never resolves, so the drag hangs forever.
     */
    look(yaw, pitch = 0) { setYaw(yaw); setPitch(pitch); return { yaw, pitch }; },

    /**
     * Move the world clock. 0 is dusk, 0.25 night, 0.5 deep night, 0.75 dawn.
     * The daily rhythm is otherwise the slowest thing in the game to observe.
     */
    setTime(t) { setWorldTime(t); return { t, phase: dayPhase }; },

    /**
     * Stand somewhere else. Lands the player on the ground at x,z so a check
     * can get close enough to a creature for it to be simulated at all.
     */
    teleport(x, z) {
      player.pos.set(x, getGroundY(x, z) + EYE_H, z);
      player.vel.set(0, 0, 0);
      player.onGround = true;
      return { x, z };
    },

    /**
     * Stand near the nearest creature of a type, so it runs its update at all.
     *
     * The standoff matters more than it looks: a deer inside its alert radius
     * (12 m walking, 18 m if you are sprinting) flips to `alert` before its
     * state machine runs, so its walk timer never advances and it can never
     * reach a grazing, resting or bedding decision. Watching deer behaviour
     * from 8 m away shows you deer watching you, and nothing else. Default 30 m
     * is outside that and well inside the 60 m simulation radius.
     */
    goTo(type, standoff = 30) {
      const f = this.fauna();
      const n = f[type] && f[type].nearest;
      if (!n) return null;
      const k = standoff / Math.SQRT2;
      return this.teleport(n.x + k, n.z + k);
    },

    /**
     * What every creature is doing right now, as a state histogram per type.
     * The quickest way to see whether the daily rhythm is actually running:
     * at dawn the deer should be bedding down and the moths resting.
     */
    fauna() {
      // Each update loop culls beyond its own radius and `continue`s, so a
      // creature outside it is frozen in whatever state it last held. Counting
      // those alongside the live ones makes a rhythm that is not running look
      // identical to one that is, so only simulated creatures are tallied and
      // the frozen count is reported separately.
      const CULL_D2 = { deer: 3600, puff: 1600, moth: 2025, jelly: 3025 };
      const look = (arr, field, cull) => {
        const states = {};
        let live = 0, frozen = 0, nearest = null, nearestD2 = Infinity;
        for (let i = 0; i < arr.length; i++) {
          const e = arr[i];
          const g = e.group;
          const dx = (g ? g.position.x : 0) - player.pos.x;
          const dz = (g ? g.position.z : 0) - player.pos.z;
          const d2 = dx * dx + dz * dz;
          if (d2 < nearestD2) {
            nearestD2 = d2;
            nearest = { x: Math.round((g ? g.position.x : 0) * 10) / 10,
              z: Math.round((g ? g.position.z : 0) * 10) / 10 };
          }
          if (d2 > cull) { frozen++; continue; }
          live++;
          const k = e[field] || 'none';
          states[k] = (states[k] || 0) + 1;
        }
        return { states, live, frozen, nearest, nearestDist: Math.round(Math.sqrt(nearestD2) * 10) / 10 };
      };
      return {
        phase: dayPhase,
        storming: isStorming,
        rain: Math.round(getRainRate() * 100) / 100,
        deer: look(deers, 'state', CULL_D2.deer),
        puff: look(puffs, 'state', CULL_D2.puff),
        moth: look(moths, '_state', CULL_D2.moth),
        jelly: look(jellies, '_state', CULL_D2.jelly),
      };
    },

    /**
     * The environment couplings: what the ground under the player is, where the
     * gust front has got to, and how full the score should be. Reads the live
     * modules, so a value here that disagrees with the weather means a wire is
     * loose rather than a rule being wrong.
     */
    env() {
      const g = getGustFront();
      return {
        ground: groundKind(player.pos.x, player.pos.z),
        rain: Math.round(getRainRate() * 100) / 100,
        storming: isStorming,
        gust: Math.round(getGust() * 1000) / 1000,
        gustPhase: Math.round(g.phase * 100) / 100,
        gustDir: { x: Math.round(g.dirX * 100) / 100, z: Math.round(g.dirZ * 100) / 100 },
        gustAmount: Math.round(g.amount * 1000) / 1000,
        // How the wave reads at the player versus a quarter wavelength away:
        // if a gust is running these must differ.
        waveHere: Math.round(gustWaveAt(player.pos.x, player.pos.z, g.phase, g.dirX, g.dirZ) * 1000) / 1000,
        waveAcross: Math.round(gustWaveAt(
          player.pos.x + g.dirX * 13, player.pos.z + g.dirZ * 13, g.phase, g.dirX, g.dirZ) * 1000) / 1000,
        music: musicDensity(getOrbsFound() / ORB_N, dayPhase, 0),
      };
    },

/**
     * Where the puffling houses are. Exposed here rather than reached through
     * a dynamic import, which under the dev server can hand back a second copy
     * of the module whose house list is empty — indistinguishable from a world
     * with no villages in it.
     */
/**
     * Light every sector without touching the quest. grantOrbs(5) also fires
     * the finale, which transforms the world and takes the camera — useless
     * for measuring what restoration alone does to a view.
     */
    restoreAll() {
      for (let i = 0; i < ORB_N; i++) setSectorRestored(i, { instant: true });
      prepareLocalGlowFrame();
      return getRestoredSectors();
    },

        villages() {
      const h = getPufflingHouseCollision();
      // The live emissive intensities off the real materials, not a formula:
      // the scene drifts about ten luma between screenshots, which is a fifth
      // of a village's brightness, so a pixel A/B cannot resolve what the
      // windows are doing. This reads what the running game has actually set.
      const lit = [];
      for (const root of getDetailedHouseRoots()) {
        const m = root.userData && root.userData.pufflingMats;
        if (!m) continue;
        lit.push({
          brick: m.brickMat ? Math.round(m.brickMat.emissiveIntensity * 1000) / 1000 : null,
          glass: m.glassMat ? Math.round(m.glassMat.emissiveIntensity * 1000) / 1000 : null,
          knob: m.knobMat ? Math.round(m.knobMat.emissiveIntensity * 1000) / 1000 : null,
        });
      }
      const mean = (k) => {
        const vals = lit.map((e) => e[k]).filter((v) => typeof v === 'number');
        return vals.length ? Math.round((vals.reduce((a, v) => a + v, 0) / vals.length) * 1000) / 1000 : null;
      };
      return {
        count: h.length,
        first: h.length ? { x: Math.round(h[0].x * 10) / 10, z: Math.round(h[0].z * 10) / 10 } : null,
        litHouses: lit.length,
        emissive: { brick: mean('brick'), glass: mean('glass'), knob: mean('knob') },
      };
    },

        /** The spatial audio stage: listener, panning model, panner pool. */
    audio() { return audioStageReport(); },

    /** Push a line through the real narrative display path. */
    say(text, seconds = 4) { showNarrativeText(text, seconds); },

    /** Event bus, for watching what a restore does and does not fire. */
    bus: { on, off, Events },

    /** Truth hint + all four creatures (staggered) + 5 orbs — smoke-test everything */
    unlockEverything() {
      revealTruth();
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

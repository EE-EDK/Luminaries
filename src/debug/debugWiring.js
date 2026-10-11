// ================================================================
// Debug wiring — the console, the dev panel, the perf probe
// ================================================================
// Everything boot attaches for the benefit of whoever is poking at the game
// rather than playing it. Kept apart from boot so the sequence there reads as
// the game, and so the one place that sets window.LumiDebug is easy to find.

import { renderer } from '../core/renderer.js';
import { setRenderer } from '../systems/perfMonitor.js';
import { initDebugConsole } from './debugConsole.js';
import { initDevSkipPanel, setDevSaveHooks } from './devSkipPanel.js';

/**
 * @brief Give the dev panel the autosave handle, so its save line and buttons act on the live one.
 * @param {{flush:Function}} autosave
 */
export function attachDevSaveHooks(autosave) { setDevSaveHooks(autosave); }

/**
 * @brief Attach the perf probe, the LumiDebug console and the dev panel.
 *
 * Runs last in the init sequence, after the world exists, so every accessor
 * LumiDebug hands out has something real behind it.
 */
export function initDebugTools() {
  setRenderer(renderer); // dev-only: lets LumiDebug.perf() read renderer.info early
  initDebugConsole();
  initDevSkipPanel();
}

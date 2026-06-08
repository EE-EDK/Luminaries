# Luminaries Audit Remediation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve every issue from the 2026-06-07 deep audit — progression blockers, the wizard encounter, the one unfinished feature (crystal resonance chains), color/movement/audio defects, dead/duplicate code, doc drift — and add the glue work needed to wire each feature in correctly.

**Architecture:** Surgical fixes against the existing kernel-scheduler + state-store architecture. No framework changes. Each phase is independently shippable and ends green on `npm test` + `npm run build`. Behavior changes are test-first; deletions/doc edits are validated by build + existing suite.

**Tech Stack:** Three.js r172+, Vite, Web Audio API, Vitest. ES modules, functional style, `const`/`let`, colors from `C` (`src/constants.js`), seeded `sr()` for world-gen.

**Source of truth for findings:** the workflow audit (2026-06-07). Severities here reflect the *post-verification* corrected values.

---

## How to use this plan

- Tasks are **strictly sequenced**: dependencies always precede dependents. Within a phase, tasks may be reordered freely.
- Tags: **[WIRE]** = new glue/plumbing not in the original findings, needed to make a feature actually work. **[DECISION]** = needs a one-line owner decision; a recommended default is given so the plan is executable as-is.
- After **every** task: `npm test` then `npm run build` must stay green, then commit. Commit messages are suggested per task.
- Baseline to preserve: **164/164 tests, vite build OK.**

### Decisions to confirm before starting (defaults chosen if silent)
1. **[DECISION-A] Jelly attunement input** — Default: **keep LEFT-CLICK** (code reality) and fix all docs. (Alt: switch code to a SPACE-edge that suppresses the jump while in jelly range.)
2. **[DECISION-B] Wizard "truth" payoff** — Default: **keep Tab/perspective always-on (core feature)** and make the wizard grant a *new* persistent `truthRevealed` state with a real visible effect, and rewrite its line to match. (Alt: gate perspective entirely behind the wizard — rejected, removes an early-game feature.)
3. **[DECISION-C] Crystal resonance chains** — Default: **wire it in fully** (this plan does so in Phase 3). (Alt: delete `crystalVisuals.js` and mark the roadmap PARTIAL.)
4. **[DECISION-D] kernel/registry.js** — Default: **delete it** (entityStore is the real store). (Alt: adopt it everywhere — large, deferred.)
5. **[DECISION-E] Movement velocity model** — Default: **delete the dead drag/collision-velocity lines** (keep the arcade stop-on-release feel). (Alt: rebuild true inertia — larger, deferred.)

---

## Phase 0 — Setup & regression safety net

> Owner-flagged systems (attunement, quest phase machine, wizard FSM, orb accept/reject) currently have **zero** test coverage. Add characterization tests *first* so later behavior changes are caught.

### Task 0.1: Branch & confirm baseline
**Files:** none (git)
- [ ] **Step 1:** Create a working branch.
  Run: `git checkout -b audit-remediation`
- [ ] **Step 2:** Confirm baseline green.
  Run: `npm install` then `npm test` then `npm run build`
  Expected: `Tests 164 passed (164)`; vite build succeeds.
- [ ] **Step 3:** Commit nothing yet (clean tree).

### Task 0.2: Characterization tests for quest progression [WIRE]
**Files:**
- Create: `src/quest/__tests__/questState.progression.test.js`
- Read for reference: `src/quest/questState.js`, `src/quest/config.js`
- [ ] **Step 1: Write tests** capturing current `attemptCollectOrb` + phase-machine behavior (these document today's behavior; they must pass against current code).
```js
import { describe, it, expect, beforeEach } from 'vitest';
import { initQuestState, attemptCollectOrb, getQuestState, debugGrantOrbs, updateQuestState } from '../questState.js';

const ORBS = [
  { x: 0, z: 0 }, { x: 5, z: 0 }, { x: 10, z: 0 }, { x: 15, z: 0 }, { x: 20, z: 0 },
];

describe('quest progression', () => {
  beforeEach(() => initQuestState(ORBS.map(o => ({ ...o }))));

  it('starts in SEEK with 0 orbs', () => {
    const s = getQuestState();
    expect(s.questPhase).toBe('SEEK');
    expect(s.orbsFound).toBe(0);
  });

  it('debugGrantOrbs reaches RISING and counts orbs', () => {
    debugGrantOrbs(3);
    const s = getQuestState();
    expect(s.orbsFound).toBe(3);
    expect(s.questPhase).toBe('RISING');
  });

  it('reaches FREE_ROAM after granting all orbs and pumping timers', () => {
    debugGrantOrbs(5);
    // RISING needs obeliskY>=-0.01; debugGrantOrbs sets obeliskY=0
    for (let i = 0; i < 6000; i++) updateQuestState(0.05); // ~300s of dt
    expect(getQuestState().questPhase).toBe('FREE_ROAM');
  });
});
```
- [ ] **Step 2: Run** `npx vitest run src/quest/__tests__/questState.progression.test.js`
  Expected: PASS (characterization of current behavior). If FREE_ROAM isn't reached, reduce the assertion to the furthest phase actually reachable and note it — that itself is a finding.
- [ ] **Step 3: Commit** `git add -A && git commit -m "test: characterize quest progression state machine"`

### Task 0.3: Characterization tests for orb frequency gate [WIRE]
**Files:**
- Create: `src/quest/__tests__/orbGate.test.js`
- Read: `src/quest/questState.js` (`attemptCollectOrb`), `src/debug/debugFlags.js` (`freeGrabMode`)
- [ ] **Step 1: Write tests** for accept/reject around the frequency gate using `freeGrabMode` to bypass attunement.
```js
import { describe, it, expect, beforeEach } from 'vitest';
import { initQuestState, attemptCollectOrb, getQuestState } from '../questState.js';
import { setFreeGrabMode } from '../../debug/debugFlags.js';

const ORBS = [{ x: 0, z: 0 }, { x: 5, z: 0 }, { x: 10, z: 0 }, { x: 15, z: 0 }, { x: 20, z: 0 }];

describe('orb frequency gate', () => {
  beforeEach(() => { initQuestState(ORBS.map(o => ({ ...o }))); setFreeGrabMode(true); });

  it('collects orb 0 when standing on it in freeGrabMode', () => {
    const r = attemptCollectOrb(0, { x: 0, z: 0 });
    expect(r).toBe(true);
    expect(getQuestState().orbsFound).toBe(1);
  });

  it('returns null when too far from the orb', () => {
    const r = attemptCollectOrb(0, { x: 100, z: 100 });
    expect(r).toBe(null);
    expect(getQuestState().orbsFound).toBe(0);
  });
});
```
  > NOTE: if `debugFlags.js` exports `freeGrabMode` as a `let` without a setter, add `export function setFreeGrabMode(v){ freeGrabMode = v; }` in that file as part of this task (small [WIRE] addition; mirror any existing setter style).
- [ ] **Step 2: Run** `npx vitest run src/quest/__tests__/orbGate.test.js` — Expected: PASS.
- [ ] **Step 3: Commit** `git add -A && git commit -m "test: characterize orb frequency gate accept/reject"`

### Task 0.4: Headless wizard FSM test scaffold [WIRE]
**Files:**
- Create: `src/systems/__tests__/wizardFsm.test.js`
- Read: `src/systems/wizardPufflingEvent.js`
- [ ] **Step 1: Write a smoke test** that the FSM advances out of `idle` after enough cumulative movement and runs without throwing, using injected stubs.
```js
import { describe, it, expect } from 'vitest';
import { initWizardPufflingEvent, updateWizardPufflingEvent } from '../wizardPufflingEvent.js';

// makePuff/scene touch THREE + renderer; this test only drives the idle->approach trigger guard.
describe('wizard FSM trigger', () => {
  it('does not throw while idle and accumulates toward spawn', () => {
    initWizardPufflingEvent({
      showNarrativeText: () => {},
      playPufflingVocal: () => {},
      getGroundY: () => 0,
      onTruthUnlocked: () => {},
    });
    const ctx = {
      player: { vel: { x: 3, z: 0 }, pos: { x: 0, y: 0, z: 0 } },
      cameraPos: { x: 0, y: 1, z: 0 },
      yaw: 0, pitch: 0,
    };
    // Idle for a short while — must not spawn yet, must not throw.
    expect(() => { for (let i = 0; i < 10; i++) updateWizardPufflingEvent(0.05, i * 0.05, ctx); }).not.toThrow();
  });
});
```
  > If `makePuff`/`scene` import side-effects break this in jsdom, gate the test with the project's existing test env or mock `../core/renderer.js`. Keep the test minimal — full FSM coverage is added in Phase 2 after the encounter is made testable.
- [ ] **Step 2: Run** `npx vitest run src/systems/__tests__/wizardFsm.test.js` — Expected: PASS.
- [ ] **Step 3: Commit** `git add -A && git commit -m "test: add headless wizard FSM trigger smoke test"`

---

## Phase 1 — Unblock progression (highest leverage)

### Task 1.1: Make orb 1 a guaranteed first success [DECISION-C-adjacent]
**Files:**
- Modify: `src/quest/config.js:23`
- Test: `src/quest/__tests__/orbGate.test.js`
- [ ] **Step 1: Write failing test** that orb 0 accepts ANY carried non-null frequency (not only 'puff'). Add to `orbGate.test.js`:
```js
it('orb 0 accepts any frequency (onboarding)', () => {
  setFreeGrabMode(false);
  initQuestState(ORBS.map(o => ({ ...o })));
  // Simulate carrying a non-matching frequency by importing the attunement stub if available;
  // if getPlayerFrequency cannot be stubbed here, assert ORB_CREATURE_SEQUENCE[0] === 'any' instead.
  const { ORB_CREATURE_SEQUENCE } = require('../config.js');
  expect(ORB_CREATURE_SEQUENCE[0]).toBe('any');
});
```
- [ ] **Step 2: Run** — Expected: FAIL (`ORB_CREATURE_SEQUENCE[0]` is `'puff'`).
- [ ] **Step 3: Edit** `config.js:23`:
```js
// before: export const ORB_CREATURE_SEQUENCE = ['puff', 'jelly', 'deer', 'moth', 'any'];
export const ORB_CREATURE_SEQUENCE = ['any', 'jelly', 'deer', 'moth', 'any'];
```
  Also update the comment on line 21-22 to read: `// Orb 1 accepts any carried frequency (onboarding). Orb 5 also accepts any.`
- [ ] **Step 4: Run** `npx vitest run` — Expected: PASS.
- [ ] **Step 5: Commit** `git add -A && git commit -m "fix(quest): orb 1 accepts any frequency for guaranteed first success"`

### Task 1.2: Fix the wrong "right-click to hum" idle hint
**Files:**
- Modify: `src/systems/discoveries.js:184-185, 210-211` (the `IDLE_HINTS_*` lines that say "Hold right-click to hum")
- Read for correct wording: `src/core/input.js:124` (in-game hint string `Left-click: PULSE · F: HUM · Q/E: pitch`)
- [ ] **Step 1:** Open `discoveries.js`, locate every hint string containing `right-click` / `right click` in the hum context.
  Run: `npx rg -n "right.?click" src/systems/discoveries.js`
- [ ] **Step 2:** Replace each with the real control. Example transformation:
  `Hold right-click to hum, then sweep pitch` → `Press F to hum, then Q/E to sweep pitch`
  Keep child/adult tone parity (mirror the existing sentence style per perspective).
- [ ] **Step 3: Validate** there are no remaining wrong-key hum hints: `npx rg -n "right.?click" src/systems/discoveries.js` → no hum-context matches.
- [ ] **Step 4: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 5: Commit** `git add -A && git commit -m "fix(ux): idle hints say F/Q/E to hum, not right-click"`

### Task 1.3: Close the spirit-hum lock dead-band
**Files:**
- Modify: `src/systems/spiritHum.js:147,167`
- Test: `src/systems/__tests__/spiritHumLock.test.js` (create)
- [ ] **Step 1: Write failing test** that resonance in `(0.10, 0.15]` makes the lock timer move (build), not freeze. (If `updateHum`/lock internals aren't directly callable, test the smallest exported function that advances the lock; otherwise assert via `getLockProgress()` after feeding resonance.)
```js
import { describe, it, expect } from 'vitest';
// Pseudocode — adapt to spiritHum.js's actual exported API (startHum/updateHum/getLockProgress).
it('lock timer advances at resonance 0.12 (no dead band)', () => {
  // arrange resonance ~0.12 for a creature in range, then updateHum several frames
  // expect getLockProgress() to increase from its previous value
});
```
- [ ] **Step 2: Edit** the thresholds so build and decay share a boundary. At `spiritHum.js:147` and `:167`:
```js
// build:  if (resonance > 0.15 && !pitchLocked) { ... }   ->  if (resonance > 0.12 && !pitchLocked) { ... }
// decay:  } else if (resonance <= 0.1) { ... }            ->  } else if (resonance <= 0.12) { ... }
```
- [ ] **Step 3: Run** `npm test` — Expected: PASS.
- [ ] **Step 4: Commit** `git add -A && git commit -m "fix(spiritHum): remove (0.10,0.15] lock-timer dead band"`

### Task 1.4: Reconcile jelly attunement input [DECISION-A]
**Default: keep LEFT-CLICK in code, fix the docs (done in Phase 9). No code change here.**
- [ ] **Step 1 (default path):** No code edit; confirm `attunementVisuals.js:45` remains `pulsePressed: !!mouseDown || !!touchJump`. Documentation is corrected in Task 9.4. Mark this task done.
- [ ] **Step 1 (ALT path — only if switching to SPACE):** In `input.js`, add a `spacePulseEdge` that is true on the Space keydown rising edge **only when not jumping in jelly range**, and feed it into `attunementVisuals.js:45` instead of `mouseDown`. This requires coordinating with `player.js:76` (Space=jump) so the two don't conflict — out of scope for the default and deferred unless chosen.
- [ ] **Step 2: Commit** (only if ALT changes were made) `git add -A && git commit -m "fix(attunement): jelly rhythm uses <chosen input>"`

---

## Phase 2 — Wizard encounter, end to end

### Task 2.1: Lower the trigger & surface it to dev
**Files:**
- Modify: `src/systems/wizardPufflingEvent.js:17`
- [ ] **Step 1: Edit** the trigger threshold and (optionally) tie a subtle cue. Minimal change:
```js
// const TRIGGER_WANDER_SECONDS = 50;
const TRIGGER_WANDER_SECONDS = 18;
```
- [ ] **Step 2:** Confirm `debugSpawnWizardEncounter()` is reachable from `LumiDebug`. Run: `npx rg -n "debugSpawnWizardEncounter|spawnWizard" src/debug/debugConsole.js`. If only present in help text, ensure `LumiDebug.spawnWizard` is attached in `attachLumiDebugApi`.
- [ ] **Step 3: Run** `npm test && npm run build` — Expected: green (FSM smoke test from Task 0.4 still passes).
- [ ] **Step 4: Commit** `git add -A && git commit -m "tune(wizard): lower trigger to ~18s cumulative walking"`

### Task 2.2: Add a real, persistent "truth revealed" state [WIRE][DECISION-B]
> Default B: Tab/perspective stays always-on; the wizard grants a *new* `truthRevealed` flag with a visible effect, and its line is rewritten to match reality.
**Files:**
- Modify: `src/state/narrativeState.js`
- Test: `src/state/__tests__/narrativeState.test.js` (extend existing)
- [ ] **Step 1: Write failing test** in the existing narrativeState test file:
```js
import { isTruthRevealed, revealTruth } from '../narrativeState.js';
it('truth starts sealed and can be revealed once', () => {
  expect(isTruthRevealed()).toBe(false);
  revealTruth();
  expect(isTruthRevealed()).toBe(true);
});
```
- [ ] **Step 2: Run** — Expected: FAIL (exports missing).
- [ ] **Step 3: Add** to `narrativeState.js` (after the perspective block, ~line 29):
```js
// ================================================================
// Truth Reveal (wizard payoff) — persistent, one-way
// ================================================================
let _truthRevealed = false;
export const isTruthRevealed = () => _truthRevealed;
export const revealTruth = () => {
  if (_truthRevealed) return;
  _truthRevealed = true;
  emit(Events.PERSPECTIVE_CHANGED, { perspective: _perspective, truthRevealed: true });
};
```
- [ ] **Step 4: Run** — Expected: PASS.
- [ ] **Step 5: Commit** `git add -A && git commit -m "feat(narrative): persistent truthRevealed state for wizard payoff"`

### Task 2.3: Make the wizard payoff do something real
**Files:**
- Modify: `src/main.js:710-715` (wizard init `onTruthUnlocked`), `src/core/input.js:127-133` (`unlockTruthControlHint`), `src/systems/wizardPufflingEvent.js:38` (`TAB_LINE`)
- [ ] **Step 1:** In `main.js`, change the wizard init so `onTruthUnlocked` both calls `revealTruth()` and the existing hint:
```js
import { revealTruth } from './state/narrativeState.js'; // add to imports
// ...
initWizardPufflingEvent({
  showNarrativeText,
  playPufflingVocal,
  getGroundY,
  onTruthUnlocked: () => { revealTruth(); unlockTruthControlHint(); },
});
```
- [ ] **Step 2:** Pick the visible effect of `truthRevealed`. Default: discovery text shows **both** child + adult lines once revealed. In `src/systems/discoveries.js` where it chooses child/adult by `getPerspective()`, add: if `isTruthRevealed()`, render the adult line as a secondary subtitle under the child line (or vice-versa). Keep it small and additive.
- [ ] **Step 3:** Rewrite the wizard line to be honest given Tab is always on. In `wizardPufflingEvent.js:38`:
```js
// const TAB_LINE = 'PRESS TAB to know the TRUTH!';
const TAB_LINE = 'NOW you see BOTH worlds at once!';
```
  (Adjust `unlockTruthControlHint` text in `input.js:127` similarly, e.g. append `' · the veil is lifted'`.)
- [ ] **Step 4: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 5: Commit** `git add -A && git commit -m "fix(wizard): payoff reveals dual-narrative truth instead of no-op"`

### Task 2.4: Camera save/restore around the wizard cinematic
**Files:**
- Modify: `src/systems/wizardPufflingEvent.js` (capture on spawn, ease out on done), `src/main.js:602-609`
- [ ] **Step 1:** On wizard spawn (`spawnWizardNearPlayer`), capture the player's current look: store `_savedYaw`, `_savedPitch` from the incoming ctx at the `idle->approach` transition (`updateWizardPufflingEvent`, where `_state` becomes `'approach'`).
- [ ] **Step 2:** When `_state` becomes `'done'` (`smite` end, ~line 591-595), instead of leaving forced angles latched, return a short ease-back: keep returning `{active:true, yaw, pitch}` lerping from forced angles toward `_savedYaw/_savedPitch` for ~0.6s, then `clearCameraForce()` and return null. (Add a `_handBackTimer`.)
- [ ] **Step 3:** Confirm `main.js:602-609` still applies `wizardCam` only while `active` — no change needed there if the ease-back is returned as active.
- [ ] **Step 4: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 5: Commit** `git add -A && git commit -m "fix(wizard): ease camera back to player look on encounter end"`

### Task 2.5: Add per-session reset & remove dead opt
**Files:**
- Modify: `src/systems/wizardPufflingEvent.js` (export `resetWizardEncounter`, remove `disableAccessories`), `src/quest/questState.js` (`initQuestState` calls it) or `src/main.js` `go()`
- [ ] **Step 1:** Add an exported reset that re-arms the encounter:
```js
export function resetWizardEncounter() {
  cleanupLaser();
  if (_smoke) { for (const p of _smoke.particles) { scene.remove(p.mesh); p.mesh.geometry.dispose(); p.mesh.material.dispose(); } _smoke = null; }
  removeWizard();
  clearCameraForce();
  _state = 'idle'; _movingTimer = 0; _phaseTimer = 0;
  _approachHintShown = false; _deadSoulShown = false; _confrontT = 0; _waitHumT = 0;
}
```
- [ ] **Step 2:** Call `resetWizardEncounter()` from wherever a new run starts (e.g. in `go()` after `initQuestState`, `main.js`). Import it.
- [ ] **Step 3:** Remove the dead `disableAccessories: true` from the `makePuff(...)` call in `spawnWizardNearPlayer` (line ~141-146). (makePuff never reads it.)
- [ ] **Step 4: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 5: Commit** `git add -A && git commit -m "feat(wizard): per-session reset; drop dead disableAccessories opt"`

### Task 2.6: Add a waitHum prompt
**Files:**
- Modify: `src/systems/wizardPufflingEvent.js` (`waitHum` state, ~line 454-491)
- [ ] **Step 1:** On entering `waitHum`, show a hint via the injected `_showNarrativeText`: e.g. `if (_showNarrativeText) _showNarrativeText('Hum to answer it… (press F)', 4);` so the player knows to arm the hum.
- [ ] **Step 2: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 3: Commit** `git add -A && git commit -m "fix(wizard): prompt player to hum (F) during waitHum"`

---

## Phase 3 — Crystal resonance chains: wire it in [DECISION-C → wire]

> The audio half works; the visual half is fully dead (`initCrystalVisuals` never called, `_directorCrystalVisuals` never registered, two emitters with mismatched payloads, and a 3-way crystal-emissive ownership conflict). This phase makes `crystalVisuals` the **single owner** of crystal emissive/scale and feeds it one canonical event.

### Task 3.1: Verify `makeCrystal` exposes the fields crystalVisuals reads [WIRE]
**Files:**
- Read: `src/entities/flora/crystals.js` (`makeCrystal`), `src/state/entityStore.js` (`crys_data`)
- [ ] **Step 1:** Confirm each `crys_data[i]` has `.mat` (the emissive material), `.phase`, `.group`, and `.indices` (chain membership). Run: `npx rg -n "mat|phase|indices|return" src/entities/flora/crystals.js`
- [ ] **Step 2:** If `.phase` or `.indices` is missing, add them to the object `makeCrystal` returns (phase: `sr()*6.28`; `indices` is set by the cluster builder `initCrystalClusters`). Make the field names match `crystalVisuals.js` (`crys.mat`, `crys.phase`).
- [ ] **Step 3: Commit** (only if fields added) `git add -A && git commit -m "wire(crystals): expose mat/phase/indices on crys_data for chain visuals"`

### Task 3.2: Unify the CRYSTAL_CHAIN event payload [WIRE]
**Files:**
- Modify: `src/updates/vegetation.js:404`, `src/systems/audio/crystals.js:111`, `src/updates/crystalVisuals.js:13-16`
- [ ] **Step 1:** Decide canonical shape: `{ indices: number[], intensity: number }`. The audio emitter (`audio/crystals.js:111`) already emits `{indices, intensity, chainSize}` — keep it.
- [ ] **Step 2:** The `vegetation.js:404` emit sends `{count, x, z}` (a different concern — proximity/discovery). **Stop overloading the event:** rename the vegetation emit to a distinct event (add `Events.CRYSTAL_VISITED` in `eventBus.js`) OR remove it if its only consumer is elsewhere. Run: `npx rg -n "CRYSTAL_CHAIN" src` to find all consumers before changing.
- [ ] **Step 3:** Make the listener defensive in `crystalVisuals.js:13-16`:
```js
on(Events.CRYSTAL_CHAIN, (data) => {
  activeIndices = Array.isArray(data && data.indices) ? data.indices : [];
  targetIntensity = (data && typeof data.intensity === 'number') ? data.intensity : 0;
});
```
- [ ] **Step 4: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 5: Commit** `git add -A && git commit -m "wire(crystals): one canonical CRYSTAL_CHAIN payload + guarded listener"`

### Task 3.3: Make crystalVisuals the single crystal-emissive owner [WIRE]
**Files:**
- Modify: `src/main.js:315-327` (`_directorFloraGlow` crystal block), `src/updates/vegetation.js:411-415` (`updateFloraReactions` crystal write)
- [ ] **Step 1:** Remove the per-crystal `c.mat.emissiveIntensity = …` writes from **both** `_directorFloraGlow` (main.js:319) and `updateFloraReactions` (vegetation.js:414), leaving non-crystal flora untouched. (crystalVisuals will own crystal emissive + scale.)
- [ ] **Step 2:** Preserve any proximity/`getLocalGlow` term that mattered by folding it into `updateCrystalVisuals` idle branch (multiply idle emissive by the crystal's local glow if needed).
- [ ] **Step 3: Run** `npm test && npm run build`. Manually note: crystals should still glow (now solely via crystalVisuals once registered in 3.4).
- [ ] **Step 4: Commit** `git add -A && git commit -m "refactor(crystals): single owner for crystal emissive (crystalVisuals)"`

### Task 3.4: Register & initialize crystalVisuals [WIRE]
**Files:**
- Modify: `src/kernel/scheduler.js` (add `Phase.CRYSTAL_VISUALS`), `src/systems/registration.js` (add `addSystem`), `src/main.js` (define `_directorCrystalVisuals` dep + `initCrystalVisuals()` call)
- Read: `src/kernel/scheduler.js` for the `Phase` enum + ordering
- [ ] **Step 1:** Add a phase constant in `scheduler.js` `Phase` between `FLORA_GLOW` and `SPIRIT_HUM` (so crystal visuals run with other glow work):
```js
// in the Phase object, with a numeric order between FLORA_GLOW and SPIRIT_HUM
CRYSTAL_VISUALS: <order>,
```
- [ ] **Step 2:** In `registration.js`, register it:
```js
// --- Crystal Visuals (resonance-chain pulse; single owner of crystal emissive) ---
addSystem('crystalVisuals', Phase.CRYSTAL_VISUALS, (dt, t, ctx) => {
  if (deps.crystalVisualsUpdate) deps.crystalVisualsUpdate(dt, t, ctx);
});
```
- [ ] **Step 3:** In `main.js`, ensure `_directorCrystalVisuals(dt,t,ctx){ updateCrystalVisuals(dt,t); }` exists (it does, ~line 377) and add it to the `registerAllSystems({...})` deps object:
```js
crystalVisualsUpdate: (dt, t, ctx) => _directorCrystalVisuals(dt, t, ctx),
```
- [ ] **Step 4:** Call `initCrystalVisuals()` once during setup — next to `initCrystalClusters(crys_data)` (~main.js:705) and `initEchoVisions()` (~main.js:693).
- [ ] **Step 5: Run** `npm test && npm run build` — Expected: green. Manually verify in `npm run dev`: standing in a 3+ crystal cluster produces a sequenced pulse wave (the feature now runs).
- [ ] **Step 6: Commit** `git add -A && git commit -m "wire(crystals): register + init crystal resonance-chain visuals"`

---

## Phase 4 — Color & visual fixes

### Task 4.1: Make puffling houses readable at night
**Files:**
- Modify: `src/entities/world/pufflingHomeDetailed.js:72-77, 285-309`
- Reference: `public/assets/mushroom-house-puffling-home.html:81,191-211`
- [ ] **Step 1:** Add named brick colors to `src/constants.js` `C` (e.g. `C.puffBrick`, `C.puffBrickEmissive`) using a lighter teal base (~`0x3c4b4b`) and a stronger emissive than `0x0a4838`.
- [ ] **Step 2:** Raise `brickEmissiveInt` from `0.55` to ~`1.0`, and introduce per-brick HSL variation matching the reference (hue 0.50–0.55, sat 0.05–0.18, lum 0.18–0.32) via a few material variants or vertex colors.
- [ ] **Step 3:** Feed the house brick emissive through `getLocalGlow` so restored sectors brighten houses (they currently never modulate). Small per-frame updater OR a one-time emissive floor that survives the dimmed-sector saturation crush.
- [ ] **Step 4: Validate** in `npm run dev` at NIGHT in an unrestored sector (0 orbs): the brick shell reads as detailed, not a black silhouette.
- [ ] **Step 5: Commit** `git add -A && git commit -m "fix(color): puffling houses readable at night (HSL bricks + emissive floor)"`

### Task 4.2: Correct tree-bark texture color space
**Files:**
- Modify: `src/entities/flora/trees.js` (`getBarkTexture`, ~line 109-112)
- [ ] **Step 1:** Import `SRGBColorSpace` from three and set it on the bark color map:
```js
import { /* … */, SRGBColorSpace } from 'three';
// in getBarkTexture():
_barkTexture.colorSpace = SRGBColorSpace;
```
  Leave `getGlowTexture`/`getCanopyAlphaMap` as `NoColorSpace` (data/additive maps).
- [ ] **Step 2: Run** `npm run build`; visually confirm trunks are warmer/correct, matching ground/sky which already set sRGB.
- [ ] **Step 3: Commit** `git add -A && git commit -m "fix(color): bark CanvasTexture uses SRGBColorSpace"`

### Task 4.3: Fix renderer base exposure / frame-0 flash
**Files:**
- Modify: `src/core/renderer.js:17`
- [ ] **Step 1:** Set the base `toneMappingExposure` to the gameplay midpoint to avoid the frame-0 flash (the live value is owned by `playerVisuals.js:150`):
```js
// renderer.toneMappingExposure = 2.8;
renderer.toneMappingExposure = 1.2;
```
- [ ] **Step 2:** Add a one-line comment that exposure is owned per-frame by `playerVisuals.js`.
- [ ] **Step 3: Run** `npm run build` — Expected: green. Confirm no first-frame brightness pop.
- [ ] **Step 4: Commit** `git add -A && git commit -m "fix(color): sane base exposure to kill frame-0 flash"`

### Task 4.4: Lift inline hex colors into `C` (batch, by file)
**Files (in order, one commit each):** `src/systems/wizardPufflingEvent.js`, `src/updates/fauna/jellies.js`, `src/entities/flora/trees.js`, `src/updates/playerVisuals.js`, `src/entities/fauna/pufflings.js` (wizard-hat branch)
- [ ] **Step 1 (wizard):** Add `C.wizardEye/wizardBody/wizardBodyEmissive/wizardBelly/wizardCrown/wizardCore/smokeBody/smokeGlow` to `constants.js`; replace the literals at `wizardPufflingEvent.js:142,173-188,235`. Commit.
- [ ] **Step 2 (jellies):** Add `C.jellyAttuneRed/jellyEmitRed/jellyNearPink/...` for the 10 reds at `jellies.js:29-46,111`; replace. Commit.
- [ ] **Step 3 (trees):** Add `C.barkTrunk/barkRoot/barkMoss/barkFungi/barkVein/barkEmissive` and a `TREE_GLOW` palette; replace the ~17 literals. Commit.
- [ ] **Step 4 (playerVisuals):** Replace `0x668888` at lines 24 & 183 with `C.playerLight`. Commit.
- [ ] **Step 5 (pufflings hat):** Replace `0x2a1658/0x5533aa/0x88ccff` (hat) — leave true data masks alone. Commit.
- [ ] **Step 6:** Reconcile the 4th pink: define `C.orbActivatedPink = 0xff4fd2` and use it in `questVisuals.js:20` + `jellies.js`. Commit.
- [ ] **Validate each:** `npm test && npm run build` green; colors unchanged on screen (same hex, now named).

---

## Phase 5 — Movement & camera

### Task 5.1: Smooth terrain follow (kill camera popping)
**Files:**
- Modify: `src/core/player.js:95-97`
- [ ] **Step 1:** Replace the instant ground clamp with a lerp when grounded, keeping a hard clamp if sinking far:
```js
const groundY = getGroundY(player.pos.x, player.pos.z) + EYE_H;
if (player.pos.y <= groundY) {
  // hard-catch if we fell well below ground, else ease up to avoid ledge/terrace popping
  if (groundY - player.pos.y > 0.5) player.pos.y = groundY;
  else player.pos.y += (groundY - player.pos.y) * Math.min(12 * dt, 1);
  player.vel.y = 0;
  player.onGround = true;
}
```
- [ ] **Step 2: Validate** in `npm run dev`: sprinting across terraces/ridges no longer jitters the camera; small ledges don't launch the view.
- [ ] **Step 3: Commit** `git add -A && git commit -m "fix(movement): smooth grounded terrain follow to stop camera popping"`

### Task 5.2: Apply slow-mo dt to the player during the attunement beat
**Files:**
- Modify: `src/main.js:582` vs `:246-256`
- [ ] **Step 1:** Compute the dilated `dt` once before `updatePlayer` (so player + world share the time scale), OR explicitly decide the player is exempt and document it. Default: dilate both. Move the `timeScale` computation above `updatePlayer(dt)` and pass the dilated dt to it.
- [ ] **Step 2: Validate:** during the "world holds its breath" attunement flash, the player's motion slows with the world.
- [ ] **Step 3: Commit** `git add -A && git commit -m "fix(movement): slow-mo beat now dilates player physics too"`

### Task 5.3: Single-owner camera yaw/pitch arbitration [WIRE]
**Files:**
- Modify: `src/main.js:596-609`, `src/updates/playerVisuals.js` (`updateCameraPan`), `src/systems/wizardPufflingEvent.js` (camera return)
- [ ] **Step 1:** Establish one resolution point in `animate()`: priority **wizardCam > constellation pan > live look**. Only the winner writes `camera.rotation` and `setYaw/setPitch`.
- [ ] **Step 2:** Make `updateCameraPan` ease back to the **current live** yaw/pitch on completion (not a stale saved value), and ignore/clamp accumulated mouse delta while a pan is active (coordinate with `input.js`).
- [ ] **Step 3:** Wizard camera ease-back already added in Task 2.4 — ensure it routes through this single arbiter.
- [ ] **Step 4: Validate:** moving the mouse during a constellation pan or wizard event no longer snaps the view on hand-back.
- [ ] **Step 5: Commit** `git add -A && git commit -m "fix(camera): single yaw/pitch owner; smooth hand-back from pan/cinematic"`

### Task 5.4: Robust fairy-ring super-jump trigger
**Files:**
- Modify: `src/updates/magicalEntities.js:100-107`
- [ ] **Step 1:** Trigger on the jump rising-edge while in-ring and grounded, instead of sampling a post-clamp velocity window:
```js
// replace the (player.vel.y > 0 && player.vel.y <= JUMP_IMPULSE + 0.5) gate
if (inRing && jumpEdgeThisFrame /* from input: Space pressed AND was onGround */) {
  const ringRestored = isRestored(fr.x, fr.z);
  if (ringRestored) { player.vel.y = JUMP_IMPULSE * 3.5; featherFallTriggered = true; }
  else { player.vel.y = JUMP_IMPULSE + FAIRY_BOUNCE; }
}
```
  This needs a `jumpEdgeThisFrame` signal — expose a one-frame jump-pressed edge from `player.js`/`input.js` ([WIRE]).
- [ ] **Step 2: Validate:** jumping anywhere inside a restored ring reliably super-jumps; feather-fall follows.
- [ ] **Step 3: Commit** `git add -A && git commit -m "fix(movement): fairy-ring boost fires on in-ring jump edge"`

### Task 5.5: Remove dead drag/collision-velocity code [DECISION-E → arcade]
**Files:**
- Modify: `src/core/player.js:2 (imports), 109-110, 157-161, 174-178`
- [ ] **Step 1:** Delete the unused `GROUND_DRAG`/`AIR_DRAG` apply lines (109-110) and the velocity-reflection blocks (157-161, 174-178) that are overwritten every frame. Remove the now-unused imports.
- [ ] **Step 2:** Add a one-line comment that movement is intentionally stop-on-release (arcade) and collisions resolve via position push-out.
- [ ] **Step 3: Run** `npm test && npm run build` — Expected: green; collisions still resolve.
- [ ] **Step 4: Commit** `git add -A && git commit -m "chore(player): remove dead drag/collision-velocity code (arcade model)"`

---

## Phase 6 — Audio

### Task 6.1: De-duplicate the attunement flash sound
**Files:**
- Modify: `src/updates/attunementVisuals.js:55` OR `src/systems/audio.js:36` (pick one trigger)
- Test: `src/systems/__tests__/attunementFlash.test.js` (create, optional if hard to harness)
- [ ] **Step 1:** Default: keep the `CREATURE_ATTUNED` eventBus subscription (`audio.js:36`) as the single audio trigger; in `attunementVisuals.js:50-55` keep `checkFlash()` for visuals/text/rings only and **remove** the direct `playAttunementFlash(...)` call.
- [ ] **Step 2: Validate:** a natural attunement plays the 7s flash sound exactly once (no phasing/doubling). Debug path (`debugForceAttuned`) still fires once via the emit.
- [ ] **Step 3: Commit** `git add -A && git commit -m "fix(audio): attunement flash plays once (remove duplicate trigger)"`

### Task 6.2: Finale / world-transform audio sting
**Files:**
- Modify: `src/systems/audio.js` (subscribe to `WORLD_TRANSFORMED` and/or `QUEST_PHASE === FINALE`)
- [ ] **Step 1:** Add an `on(Events.WORLD_TRANSFORMED, …)` handler that plays a transformation chord/swell via `connectWithReverb`, guarded by `if (!initialized || muted) return`, volume 0.04–0.08/voice, with `.stop(time)`.
- [ ] **Step 2: Validate:** reaching TRANSFORM produces an audible sting (use `LumiDebug` to force the phase).
- [ ] **Step 3: Commit** `git add -A && git commit -m "feat(audio): transformation sting on WORLD_TRANSFORMED"`

### Task 6.3: Document sanctioned volume exceptions
**Files:**
- Modify: `reference/audio.md` (and/or `CLAUDE.md` audio rules)
- [ ] **Step 1:** Note that thunder (`ambient.js:78,94`, 0.15–0.20) and the music bus (`music.js` harp/bass 0.15, routed through `musicMasterGain 0.6 → masterGain 0.42`) are **intentional exceptions** to the 0.02–0.08 per-voice ceiling.
- [ ] **Step 2: Commit** `git add -A && git commit -m "docs(audio): record thunder/music-bus volume exceptions"`

---

## Phase 7 — Dead code & competing-state cleanup

### Task 7.1: Delete dead `systems/glyphs.js`
**Files:** Delete `src/systems/glyphs.js`; verify `discoveries.js:53-81` is the live glyph logic.
- [ ] **Step 1:** Confirm zero importers: `npx rg -n "systems/glyphs|updateGlyphs" src` → only the definition.
- [ ] **Step 2:** `git rm src/systems/glyphs.js`
- [ ] **Step 3: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 4: Commit** `git add -A && git commit -m "chore: delete dead duplicate systems/glyphs.js"`

### Task 7.2: Delete dead `updateDeer()` / `updatePuff()` builders' update fns
**Files:** Modify `src/entities/fauna/deer.js` (remove `updateDeer`), `src/entities/fauna/pufflings.js` (remove `updatePuff`). Keep `makeDeer`/`makePuff`.
- [ ] **Step 1:** Confirm no callers: `npx rg -n "\bupdateDeer\b|\bupdatePuff\b" src/main.js src/updates` → none.
- [ ] **Step 2:** Remove the two functions (and any now-unused imports). Live logic stays in `updates/fauna/`.
- [ ] **Step 3: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 4: Commit** `git add -A && git commit -m "chore: remove dead per-entity update duplicates (deer/puff)"`

### Task 7.3: Remove dead `orbStore.orbsFound` competing state
**Files:** Modify `src/state/orbStore.js` (drop `orbsFound`/`setOrbsFound`, keep `orbBoost`), update `src/state/__tests__/orbStore.test.js`.
- [ ] **Step 1:** Confirm `setOrbsFound` has no runtime callers: `npx rg -n "setOrbsFound|orbsFound" src/state src/main.js` (only orbStore + its test).
- [ ] **Step 2:** Remove `orbsFound`/`setOrbsFound`; update the test to only cover `orbBoost`. Canonical orb count remains `getQuestState().orbsFound`.
- [ ] **Step 3: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 4: Commit** `git add -A && git commit -m "fix(state): remove dead orbStore.orbsFound desync landmine"`

### Task 7.4: Make `pufflingChat` MESSAGES_GENERAL reachable
**Files:** Modify `src/systems/pufflingChat.js:238-244`.
- [ ] **Step 1:** Restructure the pool selection so all four contexts can fire. Replace the dead `else if (!sectorRestored) … else GENERAL` with an explicit branch order (e.g. near-orb → ATTUNE, else dimmed → DIMMED, else restored → RESTORED, else GENERAL with some probability before the sector check).
- [ ] **Step 2: Validate:** pufflings sometimes emit GENERAL idle lines away from orbs.
- [ ] **Step 3: Commit** `git add -A && git commit -m "fix(pufflingChat): make MESSAGES_GENERAL pool reachable"`

### Task 7.5: Remove dead events/APIs
**Files:** `src/systems/attunement.js:305` + `src/kernel/eventBus.js:19` (`ATTUNEMENT_FLASH`); `src/core/lighting.js:43-84` (`requestLight`/`updateLightPooler`).
- [ ] **Step 1:** `ATTUNEMENT_FLASH` — remove the emit + the `Events` entry (CREATURE_ATTUNED already covers it). Confirm no `on(Events.ATTUNEMENT_FLASH` exists.
- [ ] **Step 2:** Light-pooler — delete `requestLight`/`updateLightPooler`/`lightRequests` (never called; `initLightPooler` stays).
- [ ] **Step 3: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 4: Commit** `git add -A && git commit -m "chore: remove dead ATTUNEMENT_FLASH event and light-pooler API"`

### Task 7.6: Remove (or adopt) kernel/registry.js [DECISION-D → delete]
**Files:** Delete `src/kernel/registry.js` + `src/kernel/__tests__/registry.test.js`; update `reference/architecture.md`.
- [ ] **Step 1:** Confirm zero runtime usage: `npx rg -n "kernel/registry|EntityType\.|register\(" src --glob '!**/__tests__/**'` → none.
- [ ] **Step 2:** `git rm src/kernel/registry.js src/kernel/__tests__/registry.test.js`
- [ ] **Step 3:** Remove registry references from `reference/architecture.md` (done fully in Phase 9).
- [ ] **Step 4: Run** `npm test && npm run build` — Expected: green (test count drops by the registry tests).
- [ ] **Step 5: Commit** `git add -A && git commit -m "chore(kernel): delete unused registry (entityStore is the store)"`

### Task 7.7: Remove duplicate `reportTimings` call
**Files:** Modify `src/main.js:264` (drop the direct call; the `hud` scheduler system owns it) and rename the `hud` system to `perfReport` in `registration.js:109` + the `deps` key.
- [ ] **Step 1:** Delete `reportTimings(renderer);` at `main.js:264`.
- [ ] **Step 2:** Rename scheduler system `'hud' → 'perfReport'` and the dep `hudUpdate → perfReportUpdate` (or move real `updateHUD` into it). Keep behavior identical.
- [ ] **Step 3: Run** `npm test && npm run build` — Expected: green.
- [ ] **Step 4: Commit** `git add -A && git commit -m "chore(perf): call reportTimings once; rename misleading 'hud' system"`

---

## Phase 8 — Architecture coherence & per-frame allocations

### Task 8.1: Single source for attune/quest state (drop stale kernel ctx slices)
**Files:** Modify `src/main.js` `syncContext`/`_directorFloraGlow` and `src/kernel/context.js`.
- [ ] **Step 1:** Have `_directorFloraGlow` read `attuneFlashTimer`/`attuneFlashType`/`humResonance*` directly from the `state/*` stores (like the fauna files do), eliminating the one-frame-stale kernel copy.
- [ ] **Step 2:** Remove the now-unused `attune`/`quest`/`env` duplicate slices from `context.js` (or keep `env` if widely read — verify with `npx rg -n "ctx.attune|ctx.quest|envCtx" src`).
- [ ] **Step 3: Run** `npm test && npm run build` — Expected: green; flash glow no longer lags a frame.
- [ ] **Step 4: Commit** `git add -A && git commit -m "refactor(state): single-source attune state; drop stale kernel ctx slices"`

### Task 8.2: Eliminate per-frame allocations in fauna/camera loops
**Files (one commit per file):** `src/updates/fauna/deer.js:24,63-64,91-99`, `src/updates/fauna/pufflings.js:28,110-116`, `src/updates/fauna/jellies.js:159-208,415`, `src/updates/playerVisuals.js:76,83,105`.
- [ ] **Step 1 (deer):** Hoist module-scope `_deerNeighbors` (cleared with `.length = 0`) of pre-allocated `{x,z}` slots; module-scope `_deerPos/_playerTarget/_nearestPos` mutated in place (mirror `steering.js:12-20`). Commit.
- [ ] **Step 2 (pufflings):** Same pattern; PUFF_N=40 is the worst offender. Commit.
- [ ] **Step 3 (jellies):** Reuse a module-scope bucket `Map` cleared in place (mirror `spatialHash.js:48-51`), avoid template-literal keys (use `bx+','+bz`), and guard the linked-formation branch so no empty `[]` is allocated. Commit.
- [ ] **Step 4 (cameraPan):** Return a module-scope `_camPanResult = {yaw:0,pitch:0}` mutated in place. Commit.
- [ ] **Validate each:** `npm test && npm run build` green; behavior unchanged.

### Task 8.3: Bundle code-splitting
**Files:** Modify `vite.config.js`.
- [ ] **Step 1:** Enable `manualChunks` to split `three` into its own chunk (reduce the 946 kB single bundle / TTI on GH Pages). Verify the project's vite/rolldown version syntax (`build.rollupOptions.output.manualChunks` or `build.rolldownOptions.output`).
- [ ] **Step 2: Run** `npm run build`; confirm two chunks (three vendor + app) and no runtime regression in `npm run dev`/preview.
- [ ] **Step 3: Commit** `git add -A && git commit -m "perf(build): split three into its own chunk"`

---

## Phase 9 — Documentation sync

### Task 9.1: Fix architecture.md & CLAUDE.md file map
**Files:** `reference/architecture.md:47-48,76-80,168`, `CLAUDE.md` Key File Locations.
- [ ] **Step 1:** Rename `quest/questManager.js` → `quest/questState.js` + `quest/questVisuals.js` everywhere it appears.
- [ ] **Step 2:** Update the scheduler/system list to the real 16 phases in `registration.js` (+ the new `crystalVisuals`), and correct the `systems/` file count.
- [ ] **Step 3:** Remove the kernel/registry references (deleted in Task 7.6).
- [ ] **Step 4: Commit** `git add -A && git commit -m "docs: fix stale file map (questManager→questState, system list, registry)"`

### Task 9.2: Reclassify feature completion
**Files:** `CLAUDE.md` Current Phase, `reference/phase-2-roadmap.md`, `reference/GAME_GUIDE.md` "What's Coming Next".
- [ ] **Step 1:** Mark **ground glyphs (18)** and **echo-visions (21)** DONE.
- [ ] **Step 2:** Mark **crystal resonance chains (12)** DONE (wired in Phase 3) — or PARTIAL if Phase 3 was skipped.
- [ ] **Step 3:** Update the tally (17/21 → 20–21/21).
- [ ] **Step 4: Commit** `git add -A && git commit -m "docs: reclassify glyphs/echo-visions/crystal-chains completion"`

### Task 9.3: Document the wizard & puffling-chat systems
**Files:** `reference/narrative.md`, `reference/GAME_GUIDE.md`, `CLAUDE.md`.
- [ ] **Step 1:** Add the wizard-puffling encounter (trigger, beats, the dual-narrative "truth reveal" payoff) and the puffling cryptic-chat to narrative + guide.
- [ ] **Step 2: Commit** `git add -A && git commit -m "docs: document wizard encounter and puffling chat"`

### Task 9.4: Single-source the control scheme (incl. jelly input)
**Files:** `reference/GAME_GUIDE.md:34,40,47,116,130`, `reference/MANIFESTO.md §III,§V`, `CLAUDE.md`.
- [ ] **Step 1:** Make every controls reference match the in-game hint (`input.js:124`): **Left-click = PULSE (jelly rhythm)**, **F = HUM**, **Q/E (or mouse-Y) = pitch**, **WASD/Shift/Space = move/sprint/jump**, **Tab = perspective**.
- [ ] **Step 2:** Remove "tap SPACE to attune jellies" and "hold right-click to hum" everywhere.
- [ ] **Step 3: Commit** `git add -A && git commit -m "docs: single-source control scheme; jelly=left-click, hum=F/Q-E"`

### Task 9.5: Fix stale perf/config docs
**Files:** `reference/performance.md:11,23,26`, and reconcile `QUEST_CONFIG` dead constants.
- [ ] **Step 1:** Update light budget to **3 crystal / 8 total** (`MAX_CRYSTAL_LIGHTS=3`).
- [ ] **Step 2:** Either wire `QUEST_CONFIG.FINALE_DURATION`/`TRANSFORM_DURATION` into `questState.js` (replace the hardcoded 12/30/20) or delete the unused constants and document the real timings. Default: delete the dead constants + add a comment with the real values.
- [ ] **Step 3:** Correct CLAUDE.md's fairy-ring location note (`core/player.js` → `updates/magicalEntities.js`).
- [ ] **Step 4: Commit** `git add -A && git commit -m "docs: fix light budget, dead quest-duration config, fairy-ring location"`

---

## Phase 10 — Final validation of fixes

### Task 10.1: Full verification
- [ ] **Step 1:** `npm test` → all pass (baseline 164 + new Phase-0/behavior tests − removed registry tests).
- [ ] **Step 2:** `npm run build` → succeeds; confirm code-split chunks.
- [ ] **Step 3:** `npm run dev` smoke playthrough: collect orb 1 (now `any`), trigger the wizard via `LumiDebug.spawnWizard`, confirm camera hands back, confirm crystal chains pulse, confirm houses readable at night.
- [ ] **Step 4:** Update `CLAUDE.md` "END SESSION (Luminaries)" roll-up with date + outcomes for the five tracked TODO items now closed.

---

## Phase 11 — FPS hardening (final pass)

> **Performance target (owner):** sustained **≥ 20 FPS** is the goal; brief dips to **15 FPS** are acceptable; **anything below 15 reads as obviously jerky/disjointed and must be eliminated.** This phase MEASURES first (don't guess), applies high-confidence wins, then re-measures under stress. It runs LAST so it optimizes the final, fully-wired code. The hard budget remains: ≤ 8 real-time lights, < 200 draw calls, < 500 particles/system, no allocations in the loop, squared distances only.
>
> **Measurement options (use the best available):** (a) the dev-only `perfMonitor` (`src/systems/perfMonitor.js` — EMA per-`_director*` subsystem + `renderer.info`); (b) drive the running `npm run dev` server with the browser/preview MCP tools (`mcp__Claude_Preview__*` / `mcp__Claude_in_Chrome__*`) and read a live `requestAnimationFrame` FPS probe + `renderer.info.render` (calls/triangles) over ~10 s while moving; (c) a headless `renderer.info` draw-call/light/triangle count assertion in a test. Prefer (a)+(b) for real FPS, (c) as a regression guard.

### Task 11.1: Instrument & capture a ranked hotspot report [Opus]
**Files:** read `src/systems/perfMonitor.js`, `src/main.js` (`director`/`runScheduler`), `src/core/postprocessing.js`, `src/core/lighting.js`; optionally add a tiny dev FPS probe.
- [ ] **Step 1:** Confirm `perfMonitor` is active in dev and reports per-subsystem EMA + `renderer.info` (draw calls, triangles, programs, geometries, textures). If a live FPS number isn't surfaced, add a dev-only rAF FPS sampler (min/avg/1%-low over a rolling window) gated by `import.meta.env.DEV`.
- [ ] **Step 2:** Launch `npm run dev` and exercise the worst cases for ~15–20 s each: (i) dense fauna cluster, (ii) luminous storm + sprint (echo-visions active), (iii) quest finale/transform, (iv) standing in a 3+ crystal cluster (now-live chain visuals). Use the browser/preview MCP tools to read avg FPS, **1%-low FPS**, draw calls, and the top-3 `_director*` subsystems by EMA in each scenario.
- [ ] **Step 3:** Produce `reference/fps-hotspots-2026-06-07.md`: a ranked table (scenario → avg FPS, 1%-low, draw calls, top subsystems by ms, light count, particle counts) plus a prioritized optimization list. **No code changes** — this is the data that drives 11.2–11.5.
- [ ] **Step 4: Commit** the report (targeted add).

### Task 11.2: Spatial-hash the fauna neighbor scans [Opus]
**Files:** `src/updates/fauna/deer.js`, `src/updates/fauna/pufflings.js`, `src/updates/fauna/jellies.js`; reuse `src/utils/spatialHash.js` (`buildDynamicHash`/`queryNearDynamic`) and the existing `nearest` tracking in `registration.js`.
- [ ] **Step 1:** Replace the per-frame O(n²) neighbor loops (each creature scanning all others — deer ~12², puffling ~40², jelly ~35²) with `queryNearDynamic`/spatial-hash bucket lookups so each query is O(k) over nearby cells only. Builds on Task 8.2's allocation cleanup (reuse the module-scope buffers).
- [ ] **Step 2:** Verify identical flocking/scaring behavior (the neighbor radius is unchanged; only the candidate set is pre-filtered). Add/extend a unit test if the steering output is deterministic enough.
- [ ] **Step 3: Validate** `npm test && npm run build`; re-measure the dense-fauna scenario from 11.1 — expect the fauna subsystem EMA to drop and 1%-low FPS to rise.
- [ ] **Step 4: Commit** (targeted add).

### Task 11.3: Throttle / stagger non-critical per-frame work [Opus]
**Files:** `src/systems/registration.js`, `src/main.js` `_director*` subsystems, `src/systems/echoVisions.js`, `src/systems/discoveries.js`, distant-entity updaters.
- [ ] **Step 1:** From 11.1's data, pick the systems that don't need 60 Hz and run them on a round-robin / N-frame cadence or distance gate: e.g. update far creatures every 2nd–3rd frame, throttle discovery/idle-hint checks, ensure shadow `autoUpdate` stays off + manual ~1 Hz, confirm bloom internal res capped at 512². Keep player physics, camera, and nearby fauna at full rate (motion must stay smooth).
- [ ] **Step 2:** Guard against visible stutter: stagger so no single frame does all the throttled work at once (offset by entity index modulo N).
- [ ] **Step 3: Validate** `npm test && npm run build`; re-measure — confirm no new hitching and improved 1%-low.
- [ ] **Step 4: Commit** (targeted add).

### Task 11.4: Runtime draw-call / light / particle budget audit [Opus]
**Files:** read `renderer.info` at runtime; `src/core/lighting.js`, particle `init*` files, `src/entities/flora/trees.js` LOD.
- [ ] **Step 1:** With the live probe, assert at runtime: ≤ 8 real-time lights, < 200 draw calls, every system < 500 particles. Record actuals from 11.1's scenarios.
- [ ] **Step 2:** Fix any breach: add `InstancedMesh` where > 50 copies aren't instanced, tighten frustum/LOD culling distances, cap any particle pool over budget, share any stray per-instance materials. Apply only the breaches the data shows — don't speculatively rewrite.
- [ ] **Step 3: Add a headless regression guard** test that builds the scene (or a representative subset) and asserts draw-call/light ceilings via `renderer.info`, so future changes can't silently blow the budget.
- [ ] **Step 4: Validate** `npm test && npm run build`; **Commit** (targeted add).

### Task 11.5: Adaptive quality floor (keep ≥ 15 FPS) [Opus][DECISION-F]
> Default F: implement a lightweight, dev+prod adaptive scaler. (Alt: skip if 11.2–11.4 already hold ≥ 20 everywhere — decide from 11.1/re-measure data.)
**Files:** new `src/systems/adaptiveQuality.js`; wire in `src/main.js` + `src/systems/registration.js`.
- [ ] **Step 1:** Sample smoothed FPS (rAF EMA). When it stays **< 18 for ~1 s**, step quality down one notch; when it holds **> 24 for ~3 s**, step back up. Notches (cheapest first): reduce far particle counts → disable/cut bloom strength → pull in far LOD/cull distances → reduce fairy/firefly/spore densities. Never drop below the minimum that preserves gameplay readability.
- [ ] **Step 2:** Make it hysteretic (no oscillation) and silent (no popping) — fade transitions. Expose current notch via `LumiDebug`.
- [ ] **Step 3: Unit test** the notch state machine (FPS samples in → expected notch out; hysteresis honored) — pure logic, headless.
- [ ] **Step 4: Validate** `npm test && npm run build`; **Commit** (targeted add).

### Task 11.6: Re-measure & verify the FPS target [Opus]
**Files:** update `reference/fps-hotspots-2026-06-07.md` with after-numbers.
- [ ] **Step 1:** Re-run all 11.1 stress scenarios with the browser/preview probe. Confirm **avg ≥ 20 FPS** and **1%-low ≥ 15 FPS** in each; if any scenario dips below 15, capture the offending subsystem and loop back to 11.2–11.5 for that hotspot.
- [ ] **Step 2:** Record before/after FPS, draw calls, and top subsystems in the report. **Commit** the updated report.

### Task 11.7: Ship
- [ ] **Step 1:** Final `npm test` (all green) + clean `npm run build`; commit the regenerated `docs/` once (this is the only commit that intentionally includes `docs/`).
- [ ] **Step 2:** Push the current branch (use the git env override): `git push -u origin claude/adoring-matsumoto-c00b22`.
- [ ] **Step 3:** Open a PR (or, per standing auth, merge to `main`) summarizing all phases with before/after notes for the wizard, quest gate, crystal chains, color, and the FPS pass.

---

## Coverage check (plan vs audit findings)

Every audit finding maps to a task:
- Jelly SPACE/LEFT-CLICK → 1.4 + 9.4 · Controls 3-ways → 9.4 · echo/glyphs doc → 9.2 · wizard+chat undocumented → 9.3 · architecture.md questManager → 9.1 · inline hex → 4.4 · echoVisions sqrt/alloc → (accepted; note in 8.2 if tightened)
- Wizard payoff no-op → 2.2/2.3 · trigger undiscoverable → 2.1 · once-only/no reset → 2.5 · waitHum prompt → 2.6 · disableAccessories dead → 2.5 · wizard hex → 4.4 · spiritHum stale distances → (low; note only)
- Quest gate steep → 1.1 · right-click hint → 1.2 · lock dead-band → 1.3
- Velocity overwrite/dead drag → 5.5 · terrain snap → 5.1 · slow-mo dt → 5.2 · cam-pan snap → 5.3 · wizard cam → 2.4/5.3 · fairy-ring trigger → 5.4 · playerVisuals hex → 4.4
- Houses black → 4.1 · exposure/saturation → 4.1/4.3 · bark colorSpace → 4.2 · base exposure → 4.3 · 4th pink → 4.4
- Crystal chains dead (×4 facets) → Phase 3 · CRYSTAL_CHAIN payload → 3.2 · double emissive write → 3.3 · indexOf scan → 3.3/3.4 · deer/puff/jelly/cameraPan allocs → 8.2 · light-pooler dead → 7.5 · reportTimings ×2 → 7.7 · perf doc → 9.5 · bundle → 8.3
- glyphs.js dead → 7.1 · updateDeer/Puff → 7.2 · orbStore.orbsFound → 7.3 · pufflingChat general → 7.4 · ATTUNEMENT_FLASH → 7.5 · registry bypass → 7.6 · kernel ctx stale → 8.1
- Audio double-flash → 6.1 · finale sting → 6.2 · volumes → 6.3
- Test coverage gap → 0.2/0.3/0.4 (+ behavior tests in 1.1/1.3/2.2)

---

## Phase 12 — Playtest polish (owner feedback 2026-06-07, post-build)

> From real play of the fixed build. Several need in-browser diagnosis first (use `LumiDebug` dev panel: "Skip to Mage Scene", "spawnWizard", "Skip Intro", per-orb buttons; and `preview_eval` to read entity positions/materials). FPS HUD already shows ~31–59 on owner hardware, so FPS is acceptable; these are gameplay/visual.

### Task 12.1: Jelly ritual anchors to the obelisk, not the player
**Files:** `src/updates/fauna/jellies.js` (ritual/linked-formation + `ensureJellyRitualOrb`), `src/quest/questState.js`/`questVisuals.js` (phase hooks).
- [ ] After the jellies form their circle, the formation must **hover/orbit over the OBELISK (world center / obelisk tip)**, not follow the player. Currently the ritual target tracks the player — re-anchor the linked-formation centroid to the obelisk position. On quest end (FINALE/FREE_ROAM) the jellies should **disperse / return to free drift**, not stay locked. Preserve the crimson-ring visuals. Verify via "grantOrbs"/"forcePhase".

### Task 12.2: Wizard is invisible in-game (mesh never appears) [DIAGNOSE FIRST]
**Files:** `src/systems/wizardPufflingEvent.js`, possibly `src/entities/fauna/pufflings.js` (makePuff), interaction with Phase 5.3 camera arbiter.
- [ ] Owner triggered the encounter (could hum + push through the FSM) but **saw no wizard, no rise-into-laser/smite**. The FSM runs; the mesh doesn't render. DIAGNOSE in browser: `LumiDebug.spawnWizard()` then `preview_eval` to read `_wizard.group.position`, `.visible`, world matrix, material emissive/opacity, and whether the forced camera actually points at it (Phase 5.3 changed the yaw/pitch owner — confirm `wizardCam.active` still wins and `forceLookAt` aims at the wizard). Likely causes to check: spawn under terrain / behind camera, camera arbiter no longer applying the forced look, group `visible=false`, or material override making it fully transparent/dark. Fix so the wizard is clearly visible through approach → confront → smite (rises in the pink sky-beam).

### Task 12.3: Floating rocks & grass — clamp to terrain
**Files:** `src/entities/world/rocks.js`, `src/entities/flora/grass.js` (and any flora placed without ground sampling).
- [ ] Many rocks and grass blades hover above the ground. Ensure each is placed at `y = getGroundY(x, z)` (sampled AFTER flat-zones/terrain are registered) and sits/embeds slightly, not floating. Check that terrain changes (organic ponds, plateaus, house flat-zones) didn't leave stale Y. Spot-check several biomes.

### Task 12.4: Puffling-house bricks tighter/smoother + add the reference's glowing accents
**Files:** `src/entities/world/pufflingHomeDetailed.js`; reference `public/assets/mushroom-house-puffling-home.html`.
- [ ] Bricks read better than before but aren't as tight/smooth as the reference, and the **glowing accent items** visible around the reference overlay are absent in-game. Tighten brick layout/spacing/bevel and add the missing glow accents (windows/markings) to match the reference more closely.

### Task 12.5: Finale (everything-pink) houses become bright red/white mushroom cottages + gardens
**Files:** `src/entities/world/pufflingHomeDetailed.js` (cottage theme), `src/entities/world/pufflingHomes.js` (theme swap on WORLD_TRANSFORMED), garden spawn.
- [ ] At the end when the world goes pink (TRANSFORM/FREE_ROAM), houses should match the **final reference image: normal bright red/white-spotted mushroom caps with normal brick colors**, and **gardens appear around the homes**. Currently the finale houses stay dark mushroom shapes. Ensure the cottage theme swaps on `WORLD_TRANSFORMED`, that it is the bright red/white look, and spawn small gardens (flowers/plants) around each home in the restored finale.

### Task 12.6: Some plants don't glow when their sector is unlocked
**Files:** flora updaters (`src/updates/vegetation.js`, per-flora glow), `src/systems/dimming.js` `getLocalGlow`.
- [ ] Several plant types don't light up when their sector is restored. Audit each flora type's per-frame glow: ensure every restorable plant's emissive is fed through `getLocalGlow(x,z,bioGlow*orbBoost)` (the same path crystals/mushrooms use). List which were missing and wire them.

### Task 12.7: Finale luminance is far too bright (harsh/burning)
**Files:** `src/updates/playerVisuals.js` (exposure curve `0.7 + 2.1*dimF`), `src/core/postprocessing.js` (bloom), finale handling.
- [ ] At full restoration the exposure (up to ~2.8) + bloom washes out to a harsh white/pink that feels like it'll "burn" you. Cap the max exposure to a warm, comfortable bright (≈1.5–1.8) and/or ease bloom strength in the fully-restored/finale state so it's pretty and luminous but not blinding. Keep the dimmed→restored contrast meaningful.

### Task 12.8: Validate & ship Phase 12
- [ ] `npm test` + `npm run build` green; in-browser smoke each fix (jelly anchor, wizard visible, no floaters, houses, finale brightness). Commit rebuilt `docs/` once; update CLAUDE.md END-SESSION roll-up; push.

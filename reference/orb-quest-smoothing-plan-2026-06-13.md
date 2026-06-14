# Orb Quest Smoothing Plan — Orbs 2–4

**Date:** 2026-06-13
**Goal:** Make unlocking orbs ("sun seeds") 2, 3, and 4 an easier, smoother player experience. Orb 1 works; 2–4 are rough.
**Method:** Multi-agent investigation (opus master → 6 sonnet subsystem explorers → opus end-to-end trace), keystone claims re-verified by hand against source. graphify used as the entry map.

---

## TL;DR (the headline)

The difficulty spike in orbs 2–4 is **~70% a communication failure, ~20% two genuinely broken/contradictory mechanics, and ~10% silent timed failures** — *not* an intentional, well-built difficulty curve.

1. **Orb 1 works only because it asks for nothing specific.** `ORB_CREATURE_SEQUENCE = ['any','jelly','deer','moth','any']` (config.js:27). Orb 1 = `'any'`, so any carried frequency (even the trivially-acquired puffling jump) passes. Orbs 2–4 demand an exact creature, and **the game never names that creature — or even hints the spirit-hum system is involved — in any channel** (stage hints, reject hints, HUD, wisps, puffling chat, obelisk runes).
2. **Orb 3 (deer) is effectively impossible at default tuning.** The attunement band (8–12 m) is numerically identical to the deer's flee (8 m) / alert (12 m) radii. There is no distance at which a calm, heading-matchable deer and a legal attunement range coexist. **Verified by hand** (attunement.js:152 vs deer.js:73–75, constants.js:152).
3. The system *already computes the answer* — `required` is in the `ORB_REJECTED` event payload (questState.js:198) — but it is **thrown away at the UI boundary** (questVisuals.js:239 forwards only `got`). The single highest-leverage fix is nearly free.

---

## How orbs 2–4 actually unlock (the chain, condensed)

For each of orbs 2/3/4 the player must, **from a cold blank slate** (every collect calls `consumeFrequency()` + `resetLock()`, questState.js:226):

1. **Deduce** which creature is next (jelly→deer→moth). Nothing names it.
2. **Find** that creature in a 90 m-radius world and get within **20 m** of it (resonance is silently zero beyond `RESONANCE_RANGE2=400`, spiritHum.js).
3. **Pitch-lock**: press F, sweep pitch (Q/E) to the creature's Hz band, hold resonance >0.12 for `HUM_LOCK_TIME=1.2 s`. *On desktop the pitch slider is `display:none` — the player sweeps a 620 Hz blind range with 4 invisible, unlabeled bands.*
4. **Attune** by performing the creature-specific ritual while locked, filling 0→1.0 at `ATTUNE_RATE=0.15/s × bioGlow × weatherMod`:
   - **Jelly:** stand still <10 m, left-click every `2.0 s ±0.42 s`.
   - **Deer:** walk 8–12 m away, same heading ±45°, >1.0 m/s — *contradicts the deer's own flee/alert (see deadlock).*
   - **Moth:** stay <8 m of a fast airborne orbiter, move >0.5 m/s, look within 60° — *look-check ignores vertical, so a moth overhead "passes" while you stare at the ground.*
5. **Carry to the orb** within `touchR` (hardcoded **2.0 m**, not the documented `ORB_TOUCH_R=2.5`). For jelly, the carrier silently collapses if you don't re-click every **4 s** — at 6 m/s that's only 24 m of travel.

Any miss → `ORB_REJECTED` with a generic, species-anonymous, 3 s-cooldowned text overlay, and (for jelly) full progress wipe.

---

## Root causes (verified)

| # | Root cause | Evidence |
|---|-----------|----------|
| R1 | **Information starvation by design.** Required creature/mechanic/system never surfaced in any channel. The data exists (`required`, questState.js:198) but is discarded (questVisuals.js:239). | config.js:27,30–45; questState.js:194,198; questVisuals.js:239 |
| R2 | **Deer mechanic is a geometric deadlock.** Legal band 8–12 m == flee 8 m / alert 12 m; fleeing/alerted deer flips heading away and may be excluded from tracking. | attunement.js:152; deer.js:73–75,92–97; constants.js:152 |
| R3 | **Feedback gated behind co-location the player hasn't achieved.** Resonance/snap/rings need the creature within 20 m; "wrong pitch" looks identical to "right pitch, no creature near." | spiritHum.js (RESONANCE_RANGE2=400) |
| R4 | **Per-orb total state wipe, no carry-over.** `consumeFrequency()+resetLock()` erases carrier + attunement + lock each collect; `humPitch` is left parked at the *previous* creature's band (wrong for deer/moth). | questState.js:226; attunement.js:286–298; spiritHum.js:210–219 |
| R5 | **Silent timed failures, no visible timer.** Jelly 4 s post-attune window and 3 s lock decay both collapse all progress invisibly → "I did it, then it broke." | attunement.js:34,92–107; constants.js (HUM_LOCK_DECAY=3.0) |
| R6 | **Desktop has no pitch UI.** Slider, band ticks, color legend exist in DOM but `display:none` on desktop. | index.html (#hum-slider) |
| R7 | **Navigation actively misleads.** Wisp guide + (dead) HUD label point at the orb *location*, never the creature needed first → aids lead to repeated rejection. | magicalEntities.js:24–34; hudLabels.js:26–27; `getSeekHudLabel()` dead |

Lower-severity, verified: `touchR` 2.0 vs 2.5 (36% smaller collection area, questState.js:190); no orb-side reject feedback (questVisuals.js:238–240); deer↔moth pitch-snap overlap can wrong-lock for orb 4 (spiritHum.js); **zero test coverage** of the real gated path (orbGate tests use `freeGrabMode`).

---

## The plan — phased

Effort/risk are per-item. "Verified" = I personally confirmed the line(s).

### Phase A — Communication (make 2–4 *legible*). Low risk, highest impact.
Turns "feels broken / I quit" into "I know what to do." This alone likely resolves most of the perceived roughness for orbs 2 and 4.

| A# | Change | Files | Effort | Risk |
|----|--------|-------|--------|------|
| A1 | **Name the creature on reject.** Forward `d.required` (already in payload) through `showOrbRejectHintFn`; in `showOrbRejectHint`, say the species (child: "This orb waits for a jellyfish's heartbeat"; adult: "Mismatch — recalibrate to JELLY"). Keep poetic line as 2nd row. | questVisuals.js:239, discoveries.js:335–351 | trivial | low |
| A2 | **Wire the dead HUD label.** Call `getSeekHudLabel()` into the quest HUD span so a persistent per-stage target shows; add the species name to its tier-3 copy. | hud.js, hudLabels.js:26–33, discoveries.js:288–293 | small | low |
| A3 | **Pre-light the next obelisk rune** in the required creature's color (prospective breadcrumb instead of retrospective confirmation). | questVisuals.js, entities/world/obelisk.js | small | low |
| A4 | **Point the wisp at the creature, not the orb,** when the carrier is wrong/absent: target nearest creature of `ORB_CREATURE_SEQUENCE[orbsFound]`. | magicalEntities.js:24–34, config.js:27, registration.js | small | low |
| A5 | **Tighten hint cadence.** Drop `stageHintTimer` 300 s → ~60 s and also fire the stage hint ~10 s after `ORB_REJECTED` (separate line, not concatenated). | discoveries.js:308–351 | trivial | low |
| A6 | **Show the desktop pitch slider** while hum is armed (`humFreqArmed`): toggle `#hum-slider` to visible, map norm→thumb pixel, add creature color/name legend on the bands. | spiritHumVisuals.js, index.html | small | low |

### Phase B — Make it *possible* / fix contradictions. Medium risk; **B1 is mandatory** (orb 3).

| B# | Change | Files | Effort | Risk |
|----|--------|-------|--------|------|
| B1 | **Fix the deer deadlock.** Recommended: when pitch-locked to `deer`, shrink the deer's flee/alert radii ("it senses your harmony") to open a calm, heading-matchable band, and don't exclude the target deer from tracking. Cheaper fallback: move the attunement band outward (e.g. `DEER_R2_MAX→~400`/20 m) and/or `DEER_R2_MIN` above flee radius. | attunement.js, constants.js, deer.js:73–93, spiritHum.js | small–med | med |
| B2 | **Far-field resonance / "getting warmer."** Distinguish "pitch right, creature too far" from "wrong pitch"; widen `RESONANCE_RANGE2` to ~35 m at reduced strength or add a directional "pitch matches <creature> — get closer" cue. | spiritHum.js, spiritHumVisuals.js | small | low |
| B3 | **Moth look-check: include vertical** component (and add a moth waypoint/marker). | attunement.js:167–178 | trivial | low |
| B4 | **Deer↔moth snap overlap:** snap to the *nearest* creature type, not fixed array order, so orb 4 doesn't wrong-lock to deer. | spiritHum.js | small | med |

### Phase C — Momentum & forgiveness. Low risk polish.

| C# | Change | Files | Effort | Risk |
|----|--------|-------|--------|------|
| C1 | **Surface the silent timers.** Visible countdown (HUD pulse / player aura) for the jelly 4 s window and the lock decay; extend `JELLY_POST_ATTUNE_WINDOW` to ~8–10 s or auto-refresh while near a jelly/the target orb. | attunement.js:34,92–107, constants.js, attunementVisuals.js | small | low |
| C2 | **Stop mis-parking `humPitch`.** On `consumeFrequency()`, snap pitch toward the *next* creature's band (or to neutral with a "seek a new voice" prompt) instead of leaving it on the previous creature. | spiritHum.js, attunement.js | small | med |
| C3 | **Orb-side reject feedback:** 0.3–0.5 s color pulse/shake on `ORB_REJECTED` (today the orb is silent; text is easily missed). | questVisuals.js:238–240, questState.js | small | low |
| C4 | **Use `ORB_TOUCH_R`** (2.5) instead of hardcoded 2.0. | questState.js:190 | trivial | low |
| C5 | (Optional) Adverse-condition cue: tint the attunement bar / brief note when bioGlow or weather is suppressing the rate (dawn/dusk/storm). | attunement.js, spiritHumVisuals.js | small | low |

### Phase D — Safety net.

| D# | Change | Files | Effort | Risk |
|----|--------|-------|--------|------|
| D1 | **Integration tests for the real gated path** (mock `getPlayerFrequency()`: wrong→reject, right→collect, null→reject, orb 5→any per slot). | quest/__tests__/orbGate.test.js | small | low |
| D2 | **Verify orb placement** guarantees each orb sits within ~20 m of its required creature type (else R3 silently blocks even after all fixes). | populate.js / quest builder | small | low |

---

## Recommendation & sequencing

- **Minimum viable smoothing = Phase A + B1.** A makes orbs 2 and 4 understandable; B1 makes orb 3 *possible*. These two together convert "feels broken / I quit" into a fair, legible quest, at low-to-medium risk and ~1 focused session.
- **Recommended = A + B + C1/C3/C4.** Adds the rest of the mechanical fixes and the forgiveness layer (visible timers, orb reject feedback, correct touch radius). This is the "smooth" target.
- **Always include D1** (regression net — the gated path has *never* been tested, which is why it silently stayed broken).

This maps onto three design directions (pick the ceiling):
- **Guided-discovery** (Phase A): keep the cryptic tone, layer an always-available routing channel on top. Lowest risk.
- **Mechanical-coherence** (Phase A+B): also make each creature mechanic physically satisfiable and self-teaching. Skill, not luck, completes 2–4.
- **Momentum/onboarding** (Phase A+B+C): also kill the cold-restart-per-orb and stage each mechanic behind a one-time micro-mentor moment, turning four restarts into one escalating arc.

---

## Validation plan

- `npm test` (add D1 first so the gated path is covered), `npm run build`.
- Manual playtest checklist, **at night** (best bioGlow): orb 2 jelly, orb 3 deer, orb 4 moth — each unlockable within a reasonable, legible attempt; reject messages name the creature; HUD/rune/wisp point to the right creature; no silent progress loss.
- Re-run on `https://ee-edk.github.io/Luminaries/` after deploy (confirm desktop slider + hints aren't stripped by `import.meta.env`).

## Open questions to resolve during implementation
- Is puffling's absence from the sequence intentional (orb 1 is its de-facto slot)? Affects whether orb-1 onboarding should explicitly teach "puffling".
- Exact `bioGlow` value during `day` (0 → attunement impossible; small → just slow). Affects whether to soft-block or just cue adverse conditions.
- Does alert-state (not just flee-state) deer remain heading-matchable? Confirms whether B1 needs the lock-calms-deer path or just a band shift.

# Measurement scripts

Browser checks that measure the running game rather than the code that
describes it. Each one drives a real page, reads back what actually happened,
and exits non-zero on a failure, so they can be run as gates before a push.

They exist because arithmetic on a model of a thing is not verification of the
thing. A uniform set to `0.34` proves an assignment ran; it does not prove
anything on screen got darker. Every check here reads the outcome — pixels,
DOM text, live module state — not the intent.

## Running them

They need the dev server, because `LumiDebug` is dev-only:

```
npm run dev                       # leave running on :5173
node scripts/measure/save-roundtrip.mjs
```

`LUMI_URL` overrides the address. Requires `playwright` (and `pngjs` for
`atmosphere.mjs`); both are dev-only and deliberately not in `package.json`
dependencies — install them where you run these:

```
npm i -D playwright pngjs && npx playwright install chromium
```

## What each one measures

| Script | Measures |
|---|---|
| `save-roundtrip.mjs` | Grants two orbs, waits for the autosave, reloads, clicks Continue. Asserts the progress came back **and** that none of the collection theatre replayed — no `ORB_COLLECTED`, no cinematic, sectors already swept, HUD at 2/5. |
| `settings-reach.mjs` | Writes every setting, then reads the **consumers** — input sensitivity, reduced motion, the quality-floor cap, the text-scale CSS variable. A setting that persists but never reaches anything looks identical to a working one from the panel. |
| `control-names.mjs` | Runs a touch-emulated context and reads the resolved hint text back out of the DOM. No player-facing line may name a control the device lacks, and no `{token}` may reach the screen. |
| `atmosphere.mjs` | Pixel-measures the vignette by forcing it off and on over the same pixels, with an A/A control first. Confirms the grain moves without swamping the frame, and that reduced motion silences it. |
| `spatial-audio.mjs` | Reads the live audio graph: listener on the camera, panning model per platform, panner pool reuse. Code-verified only — whether it *sounds* right is the owner's ear. |
| `creature-rhythm.mjs` | Drives one creature past its own cull radius to its decision point, then permutes day phase and weather. Counts live creatures, never frozen ones: a rhythm that is not running looks identical to one that is if you count culled bodies. |
| `environment-coupling.mjs` | Ground classification under the player, the gust front crossing the forest, music density against restoration. Asserts the frame loop does not throw, which is the failure a build cannot see. |
| `village-night.mjs` | Reads the live house materials across every village — window, knob and brick emissive — then confirms with pixels. A dynamic import returned an empty house list and a pixel-only A/B drowned in scene drift before this settled. |
| `dual-voice.mjs` | Puts a line on screen, flips the register, and reads the **DOM**: both voices must reach the player, Tab must re-render the line already showing, and a single-voice line must not come out twice after the reveal. |
| `narrative-voices.mjs` | Drives every M3.3/M3.4 line to the **DOM**: the title says tap on a touch device, the wizard's five beats arrive in both registers (Tab is flipped while a beat is up), a house memory at dusk, a glyph echo, the five fragments and the joining line, and Tab at the obelisk turning the rune colours — read from the rune materials, not from the code that sets them. Port from `LUMI_URL`. |

## The traps these scripts are built around

**The live scene drifts.** Creatures move and the clock advances, so two
screenshots differ with nothing changed. `atmosphere.mjs` takes an A/A pair
first to measure that drift, or it would be credited to whatever was toggled
in between. An earlier version compared corners against the centre in a single
frame and failed correctly — the corners hold sky and the centre holds dark
forest, so the corners are legitimately brighter. That comparison could never
have shown anything.

**`import()` in the page can hand you a second module instance.** Under the dev
server a dynamic import may resolve to a separate copy with its own
module-scope variables, which reads exactly like a setting that never reached
its consumer. Read live state through `window.LumiDebug`, which lives in the
same instance as `main.js`. Four checks in `settings-reach.mjs` failed this way
before the cause was found; nothing was wrong with the game.

**Timers slip badly under SwiftShader.** The render loop starves `setTimeout`
enough that a 250 ms debounce can land seven seconds late. Wait on the
condition (`waitForFunction`), never on a fixed sleep, and never conclude from
a fixed sleep that something did not happen.

**A build cannot see a missing import.** It is a runtime `ReferenceError`, not a
syntax error, and `npm run build` passes clean. It has shipped from this repo
once. So the first assertion of every gate is that the frame loop is turning,
read off the game's own frame counter — under SwiftShader this scene renders in
single digits, so a threshold on a *rate* is a threshold on the software
rasteriser. What separates a running loop from a dead one is that the counter
moves at all.

**A gate that throws must still report.** `page.evaluate` propagates a page
error straight out of the script, which exits with a stack trace and no
report — indistinguishable from a gate that never ran. `dual-voice.mjs` wraps
every probe so a throw becomes a named failure; a seeded missing import there
turned into seven named failures instead of one traceback.

**A check can pass on an empty list.** The coverage checks assert a floor on
how many lines they read before they assert anything about them, because a
silently broken extractor makes "no problems found" and "nothing examined"
look the same. Every new check in these scripts and in the suite is run
against a seeded version of the defect it is for, and the kill is recorded in
the commit.

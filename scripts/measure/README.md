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

## Two traps these scripts are built around

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

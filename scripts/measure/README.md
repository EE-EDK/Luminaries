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
| `deer-rig.mjs` | The deer's GPU rig. Frame loop first, then draw calls for one isolated deer (shown vs hidden, main-scene render only), then four known poses written through the same state fields the update loop writes. Each pose is screenshotted with the deer in and out of the scene (two empty frames, so scene drift cannot be credited to the deer), and every joint's vertices are projected to the screen **twice** — where the rig put them, and where the un-posed mesh would be — and the silhouette is read at both. `LUMI_SAVE=dir` on the pre-rig build, `LUMI_BASELINE=dir` on the new one compares silhouettes across versions. Cannot judge how the deer *reads* on a real GPU; that is eyes. |
| `creature-rig.mjs` | The moth, puffling and jelly GPU rigs (M5.2), one script, `LUMI_CREATURE=moth\|puffling\|jelly`. Same method as `deer-rig.mjs`: frame loop, per-mesh draw calls for one isolated creature (spliced out of its entityStore array), known poses written through the state fields the update loop writes, shown-vs-two-empty-frames silhouettes, every jointed vertex projected posed and un-posed. Adds: a markings check (moth eyespots must show over the translucent wings, compared with the pre-rig render at the same pixels) and a blink check (puffling: eye-colour pixels inside boxes around the eyes, closed vs open, compared with the pre-rig ratio). `jelly` has no rig and only measures draw calls. `LUMI_SAVE=dir` on the pre-rig build, `LUMI_BASELINE=dir` on the new one. |
| `pose-band.mjs` | The pose band (M5.3): only the nearest N deer, moths and pufflings get their rig pose written. Finds the band module instance main is really using (a limit set through it must show in `LumiDebug.quality().poseBand`), then, per type, compares every live creature's rig arrays render by render at full width, squeezed to a quarter (what the quality scaler does at the floor) and widened again. Reads: no sample writes more creatures than limit x update ticks, the nearest creatures are the ones written, the far ones' arrays stop changing **while their own joint angles keep changing** (otherwise holding still proves nothing), every creature is still drawn, held ones resume when the band widens, and a resumed creature's rig equals the quaternion of its current angle. Slow under SwiftShader (several minutes). Cannot judge how a held far creature reads on screen; that is eyes. |
| `pose-cost.mjs` | Node only. Times the three pose writers (deer, moth, puffling) on the real rig code; the cost the pose band's saving is worked out from. |
| `fauna-live-counts.mjs` | How many deer, moths and pufflings sit inside their own cull radius across a grid of stand points on the map; the numbers the band's N is chosen from. Re-run it if the populations change. |
| `mobile.mjs` | The game on a phone (M5.4). Three contexts: a touch phone, a touch phone with a saved quality floor and no `matchMedia`, and a desktop in a tall window. Safe areas are **measured, not read**: Chromium's own `Emulation.setSafeAreaInsetsOverride` makes `env()` resolve to a notch, and every corner-pinned control (HUD, orb count, gear, dev hamburger, stick, jump, sprint, HUM slider, controls line) is measured with insets 0 then with insets on — it must move by exactly its edge's inset and land inside the safe area; discovery line, caption and notebook must sit between the cut-outs. The landscape card is shown upright, gone sideways, waved away by a tap until the next rotation, redrawn when the register flips, and never built on a desktop or without `matchMedia`. Touch look is a real CDP touch drag compared with the mouse at three sensitivities and both Y senses, read back through `LumiDebug.look()`. Quality start is the notch read the moment the debug surface appears, with the frame counter proving it was inside the scaler's 30-frame warm-up. `LUMI_ONLY=A|B|C` narrows a re-run to one context; `LUMI_WAIT` is the ceiling for a state change after boot. Cannot see a real notch, a real rotation or a thumb. |

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

**The browser can vanish mid-run on a shared machine.** Twice, while other jobs were using the same box, the run ended with "page.screenshot: ... browser has been closed" and no page error; the cause was not established. A gate that dies this way has told you nothing about the game: rerun it. `deer-rig.mjs` takes `LUMI_BROWSER=<path>` so a renamed copy of the browser binary can be used when something else is clearing browser processes by name.

**A check can pass on an empty list.** The coverage checks assert a floor on
how many lines they read before they assert anything about them, because a
silently broken extractor makes "no problems found" and "nothing examined"
look the same. Every new check in these scripts and in the suite is run
against a seeded version of the defect it is for, and the kill is recorded in
the commit.

**The scaler's first notch is gone in seconds.** The adaptive scaler ignores 30 frames, but under software rendering it can also step *down* within the first few seconds, so a gate that waits for the page to settle and then asks for the starting notch reads the scaler's opinion of the box, not the platform default. `mobile.mjs` reads `quality()` in the same evaluation that first sees `LumiDebug` and checks `perf().fps.frames <= 30` alongside it.

**Emulated insets take effect on the next style recalculation, not on the CDP reply.** Measure straight after the override and you read the baseline again, which looks like "the element did not move". Wait for a pinned element to have moved before taking the second reading.

**A real touch needs a hit target.** `Input.dispatchTouchEvent` goes through hit-testing, so with the title card up the drag lands on the card and the canvas never hears it. Skip the intro first (`LumiDebug.skipIntro()`).

**Look at the sky, not the grass, when you need a silhouette.** `creature-rig.mjs` pitches the camera up (`LUMI_PITCH`, default 0.5) and puts the creature on the view ray. With the camera level, the empty-versus-empty drift in the creature's region was 12,000 pixels against a silhouette of 2,600 (wind in the grass and bloom, measured on the same moth); pitched up at the sky it was 1,100. Every "differs from both empty frames" test in these scripts is only as good as that drift number, which the script prints next to every silhouette.

**A joint that turns about its own centre is a poor silhouette witness.** A puffling's ear is a fat cone: rotated a few tenths of a radian its tip is still inside its own un-posed footprint, and "posed" and "un-posed" both read 1.00 (twice, in this gate, before the pose angles were made large enough). If a moved-joint check reports equal numbers, ask whether the pose moved anything the picture can resolve before suspecting the shader.

**Editing a served source tree reloads every open page.** Seeding a defect into the directory a dev server watches, or syncing a copy over it, fires a page reload; a gate that is mid-boot then finds an empty entity store. Seed into a separate copy served on its own port, wait ~20 s for the watcher to settle, then start the gate.

# Luminaries

A first-person 3D exploration experience set in a procedurally generated bioluminescent forest. Built as a single HTML file using Three.js — no build step, no installation, just open and explore.

https://ee-edk.github.io/Luminaries/

## Play

Open `index.html` in any modern browser with WebGL support. That's it.

Or serve locally:

```sh
python3 -m http.server 8000
# visit http://localhost:8000/index.html
```

## Controls

| Input | Action |
|-------|--------|
| WASD | Move |
| SPACE | Jump |
| SHIFT | Sprint |
| Click + Drag | Look around |

Mobile devices get an on-screen joystick and jump button automatically.

## The World

Navigate a nighttime forest filled with glowing life:

- **Flora** — 60 procedural trees, 45 bioluminescent mushrooms, 10 crystals, ferns, flowers, reeds, grass, and dandelions
- **Fauna** — Floating jellyfish, puffs, glowing deer, and moths
- **Magical elements** — Wisps, fairy rings, bubbles, star motes, and ponds with lily pads
- **Sky** — 600 stars, spiral galaxies, nebulae, constellations, and cosmic anomalies
- **Particles** — Fireflies, spores, dust motes, dandelion seeds, and bubble pops

## Quest

Collect all 5 golden orbs scattered across the forest. Progress is tracked in the top-right HUD. Completing the quest triggers the obelisk to rise.

## Tech

- **Three.js r128** via CDN (legacy global `THREE` namespace)
- **Post-processing** — UnrealBloomPass for the bioluminescent glow
- **Seeded RNG** — Deterministic world generation (seed 42)
- **Single file** — ~4,530 lines of HTML + CSS + JS in `index.html`
- **No dependencies** to install — all libraries loaded from CDN

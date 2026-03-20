# GEMINI.md — Luminaries

## Project Identity
**Luminaries** is a first-person 3D bioluminescent forest exploration experience built with **Three.js (r172+)**, **Vite**, and **Web Audio API**. It is a "zero-asset" project: every tree, creature, sound, and texture is procedurally generated in real-time.

## Tech Stack & Architecture
- **Rendering**: Three.js (ES module named imports).
- **Build System**: Vite + Terser (2-pass minification).
- **Audio**: Web Audio API (real-time synthesis, zero .mp3/.wav files).
- **Style**: Functional JavaScript (no classes), named exports, shared materials.
- **Kernel**: Phase-based scheduler (`src/kernel/scheduler.js`), typed event bus (`src/kernel/eventBus.js`), and entity registry.

## Core Mandates (Senior Dev Guidelines)

### 1. Performance is a Feature
- **20 FPS Hard Limit**: If a change drops FPS below 20 on baseline hardware, it must be optimized or reverted.
- **Light Budget**: Max 8 real-time lights. Use proximity-based pooling for crystals/orbs.
- **Draw Calls**: < 200. Use `InstancedMesh` for foliage/flora (> 50 copies).
- **Allocations**: **Zero allocations in the animation loop.** Pre-allocate `Vector3`, `Matrix4`, and temporary objects at module scope.
- **Hot Path Math**: Use squared distances (`distSq`) for culling. Avoid `Math.sqrt()` and `Math.pow()` in per-frame loops.

### 2. Procedural Integrity
- **Deterministic Generation**: Use the seeded RNG `sr()` from `utils/rng.js` for all world placement. `Math.random()` is only for runtime/aesthetic variation (e.g., particle flicker).
- **Zero Assets**: Do not import textures, models, or audio files. Build them from primitives, noise, and synthesis.

### 3. Clean Modular Architecture
- **Functional Modules**: Export `make*` builder functions. Maintain state within module scope or the kernel context.
- **Kernel-First**: New systems should register via `addSystem()` with an explicit `Phase`.
- **Decoupled Audio**: Entities should not import `audio.js`. Use the `eventBus` or callback injection.

## Development Workflows

### Adding an Entity
1. Define constants in `src/constants.js` (Count, Colors, Scale).
2. Create `src/entities/<category>/<name>.js` using the **Builder Pattern**.
3. Register in `src/main.js` `populate()` and the kernel registry.
4. Add an update system via `src/systems/registration.js`.

### Modifying Audio
- Every audio function must have a guard: `if (!initialized || muted) return;`.
- Keep volumes low (0.02 - 0.08) to avoid clipping when multiple voices overlap.
- Use `connectWithReverb()` for spatial depth.

## Key File Locations
| Component | Path |
|-----------|------|
| Entry & Bootstrap | `src/main.js` |
| Global Constants | `src/constants.js` |
| Quest Logic | `src/quest/questManager.js` |
| Audio Synthesis | `src/systems/audio.js` |
| System Registry | `src/systems/registration.js` |
| Performance Mon | `src/systems/perfMonitor.js` |

## Gemini's Architectural Recommendations

### 1. Decouple `questManager.js`
The current `questManager.js` (~750 lines) is a "God Object" handling state, input, visuals, and audio callbacks. 
- **Recommendation**: Split it into `questState.js` (logic/state) and `questVisuals.js` (lasers, glitter, transitions). Use the `eventBus` to sync them.

### 2. Enhance System Registration
`src/systems/registration.js` currently uses a large `deps` object passed from `main.js`.
- **Recommendation**: Move toward self-registering modules. Each system should import its own logic and call `addSystem()` internally upon being imported, or use the `kernel/registry` to resolve dependencies at runtime.

### 3. Formalize State Management
As Phase 2 adds "Symbiotic Attunement" and "The Dimming", state transitions are becoming more complex.
- **Recommendation**: Implement a simple State Machine pattern for the player and world states to prevent "if-else hell" in the update loops.

### 4. Accessibility Debt
The project currently has zero accessibility support.
- **Recommendation**: Use the DOM-based HUD to provide "Aria-Live" regions for important world events (e.g., "An orb has been found", "A creature is near"). Add a "High Contrast" or "Colorblind" mode that swaps the bioluminescent palette.

### 5. Expand Unit Testing
Tests are currently limited to kernel modules.
- **Recommendation**: Add Vitest tests for `utils/rng.js` (ensuring determinism) and `systems/attunement.js` (frequency logic), which are critical for Phase 2 gameplay.

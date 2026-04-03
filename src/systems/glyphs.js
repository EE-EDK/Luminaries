// ================================================================
// Ground Glyphs System — Secret scattered pattern reveals
// ================================================================
// Glyphs are flat, circular patterns on the ground.
// They are invisible until the player stands still near one.
// Reveal condition: within 3m AND idle for 2+ seconds.

import { glyphs_data } from '../state/entityStore.js';
import { player, playerIdleTime } from '../core/player.js';
import { emit, Events } from '../kernel/eventBus.js';

export function updateGlyphs(dt, t) {
  const px = player.pos.x, pz = player.pos.z;
  for (let i = 0; i < glyphs_data.length; i++) {
    const g = glyphs_data[i];
    if (g.revealed) {
      // Gentle pulse while revealed
      g.mat.opacity = 0.4 + Math.sin(t * 2.0 + i) * 0.1;
      continue;
    }
    
    const dx = g.x - px, dz = g.z - pz;
    const d2 = dx * dx + dz * dz;
    
    // Reveal condition: within 3m AND idle for 2+ seconds
    if (d2 < 9 && playerIdleTime > 2.0) {
      g.timer += dt;
      if (g.timer > 1.5) { // 1.5s additional holding time to reveal
        g.revealed = true;
        emit(Events.DISCOVERY, { type: 'glyph', id: i });
      }
      // Faint preview glow while charging
      g.mat.opacity = Math.min(g.timer / 1.5, 0.4);
    } else {
      // Decay charge if player moves away or breaks idle
      g.timer = Math.max(g.timer - dt * 2, 0);
      g.mat.opacity = Math.min(g.timer / 1.5, 0.4);
    }
  }
}

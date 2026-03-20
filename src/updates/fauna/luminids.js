// ================================================================
// Fauna — Luminid update loop
// ================================================================

import { luminids } from '../../state/entityStore.js';
import { updateLuminid } from '../../entities/fauna/luminids.js';
import { player } from '../../core/player.js';
import { getGroundY } from '../../world/terrain.js';

export function updateLuminids(dt, t) {
  let nearestDist2 = Infinity;
  let nearestPos = { x: 0, z: 0 };

  for (let i = 0; i < luminids.length; i++) {
    const l = luminids[i];
    updateLuminid(l, dt, player.pos, getGroundY);

    const dx = l.group.position.x - player.pos.x;
    const dz = l.group.position.z - player.pos.z;
    const d2 = dx * dx + dz * dz;

    if (d2 < nearestDist2) {
      nearestDist2 = d2;
      nearestPos.x = l.group.position.x;
      nearestPos.z = l.group.position.z;
    }
  }

  return { nearestDist2, nearestPos };
}

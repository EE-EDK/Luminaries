// ================================================================
// Fauna — Luminid update loop
// ================================================================

import { luminids } from '../../state/entityStore.js';
import { updateLuminid } from '../../entities/fauna/luminids.js';
import { player } from '../../core/player.js';
import { getGroundY } from '../../world/terrain.js';

const CULL_DIST2 = 4900; // 70m
const _result = { nearestDist2: Infinity, nearestPos: { x: 0, y: 0, z: 0 } };

export function updateLuminids(dt, t) {
  _result.nearestDist2 = Infinity;
  _result.nearestPos.x = 0; _result.nearestPos.y = 0; _result.nearestPos.z = 0;

  for (let i = 0; i < luminids.length; i++) {
    const l = luminids[i];
    const dx = l.group.position.x - player.pos.x;
    const dz = l.group.position.z - player.pos.z;
    const d2 = dx * dx + dz * dz;

    if (d2 > CULL_DIST2) {
      l.group.visible = false;
      continue;
    }
    l.group.visible = true;
    updateLuminid(l, dt, player.pos, getGroundY);

    if (d2 < _result.nearestDist2) {
      _result.nearestDist2 = d2;
      _result.nearestPos.x = l.group.position.x;
      _result.nearestPos.y = l.group.position.y;
      _result.nearestPos.z = l.group.position.z;
    }
  }

  return _result;
}

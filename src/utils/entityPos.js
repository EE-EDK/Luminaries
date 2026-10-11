// ================================================================
// entityPos — where a record actually is
// ================================================================
// A creature record keeps its position on its THREE group
// (`d.group.position`), not on itself; ponds and fairy rings carry a plain
// {x, z}. The discovery check read `e.position || e`, and the fallthrough's
// undefined x coerced to 0 — so every creature measured as standing at the
// origin, and all four creature discoveries fired for anyone within 8 m of
// spawn with the nearest real animal 30 m away. This helper is the one
// answer to "where is this thing", and it lives outside discoveries.js
// because that module drags in the renderer at import, which is why the bug
// had no unit test to fail.

/**
 * @brief The world position of an entity record, whatever its shape.
 * @param {object} e a creature record, a mesh-like, or a plain {x, z}
 * @return {{x:number, z:number}|null} null when the record carries no position
 */
export function entityPosition(e) {
  if (!e) return null;
  if (e.position && typeof e.position.x === 'number') return e.position;
  if (e.group && e.group.position && typeof e.group.position.x === 'number') return e.group.position;
  if (typeof e.x === 'number' && typeof e.z === 'number') return e;
  return null;
}

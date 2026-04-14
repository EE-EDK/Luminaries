// ================================================================
// Spatial Hash — O(1) spatial queries for static entity arrays
// ================================================================
// Built once at init for trees (which never move). Eliminates
// full-array iteration (~500 trees) per creature per frame.

let _cellSize = 10;
let _invCell = 1 / _cellSize;
/** @type {Map<string, Array>} */
let _grid = null;

// Pre-allocated result array — reused every query to avoid GC
const _result = [];
let _resultLen = 0;

/**
 * Build a spatial hash grid from trees_data.
 * Call once after populate(). Entries must have .x and .z.
 * @param {Array<{x:number, z:number}>} data
 * @param {number} [cellSize=10]
 */
export function buildTreeHash(data, cellSize = 10) {
  _cellSize = cellSize;
  _invCell = 1 / _cellSize;
  _grid = new Map();

  for (let i = 0; i < data.length; i++) {
    const entry = data[i];
    const cx = Math.floor(entry.x * _invCell);
    const cz = Math.floor(entry.z * _invCell);
    const key = cx + ',' + cz;
    let bucket = _grid.get(key);
    if (!bucket) {
      bucket = [];
      _grid.set(key, bucket);
    }
    bucket.push(entry);
  }
}

/**
 * Query all tree entries whose cell overlaps the circle (x,z,radius).
 * Returns a lightweight view: read _result[0.._resultLen-1].
 * The returned array reference is reused — copy if you need to keep it.
 * @param {number} x
 * @param {number} z
 * @param {number} radius
 * @returns {{ items: Array, length: number }}
 */
export function queryNearTrees(x, z, radius) {
  _resultLen = 0;

  if (!_grid) return { items: _result, length: 0 };

  const minCX = Math.floor((x - radius) * _invCell);
  const maxCX = Math.floor((x + radius) * _invCell);
  const minCZ = Math.floor((z - radius) * _invCell);
  const maxCZ = Math.floor((z + radius) * _invCell);

  for (let cx = minCX; cx <= maxCX; cx++) {
    for (let cz = minCZ; cz <= maxCZ; cz++) {
      const bucket = _grid.get(cx + ',' + cz);
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          _result[_resultLen++] = bucket[i];
        }
      }
    }
  }

  return { items: _result, length: _resultLen };
}

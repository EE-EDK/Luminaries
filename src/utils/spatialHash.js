// ================================================================
// Spatial Hash — O(1) spatial queries for static and dynamic entities
// ================================================================
// Static hash built once for trees. Dynamic hash rebuilt per frame
// for fauna/moving entities. Eliminates O(N^2) neighbor loops.

let _cellSize = 10;
let _invCell = 1 / _cellSize;

/** @type {Map<string, Array>} */
let _treeGrid = null;
/** @type {Map<string, Array>} */
let _dynamicGrid = new Map();

// Pre-allocated result array — reused every query to avoid GC
const _result = [];
let _resultLen = 0;

/**
 * Build a static spatial hash grid (e.g. for trees).
 * @param {Array<{x:number, z:number}>} data
 * @param {number} [cellSize=10]
 */
export function buildTreeHash(data, cellSize = 10) {
  _cellSize = cellSize;
  _invCell = 1 / _cellSize;
  _treeGrid = new Map();

  for (let i = 0; i < data.length; i++) {
    const entry = data[i];
    const cx = Math.floor(entry.x * _invCell);
    const cz = Math.floor(entry.z * _invCell);
    const key = cx + ',' + cz;
    let bucket = _treeGrid.get(key);
    if (!bucket) {
      bucket = [];
      _treeGrid.set(key, bucket);
    }
    bucket.push(entry);
  }
}

/**
 * Rebuild the dynamic spatial hash grid. Call every frame.
 * @param {Array<Array<any>>} collections - Arrays of entities (jellies, puffs, etc)
 */
export function buildDynamicHash(collections) {
  // Clear existing buckets without deleting them to reuse arrays
  for (const bucket of _dynamicGrid.values()) {
    bucket.length = 0;
  }

  for (let c = 0; c < collections.length; c++) {
    const list = collections[c];
    for (let i = 0; i < list.length; i++) {
      const entry = list[i];
      // Support both {x, z} and {group.position.x, group.position.z}
      const x = entry.x !== undefined ? entry.x : entry.group.position.x;
      const z = entry.z !== undefined ? entry.z : entry.group.position.z;

      const cx = Math.floor(x * _invCell);
      const cz = Math.floor(z * _invCell);
      const key = cx + ',' + cz;

      let bucket = _dynamicGrid.get(key);
      if (!bucket) {
        bucket = [];
        _dynamicGrid.set(key, bucket);
      }
      bucket.push(entry);
    }
  }
}

/**
 * Internal query helper
 */
function _query(grid, x, z, radius) {
  if (!grid) return;

  const minCX = Math.floor((x - radius) * _invCell);
  const maxCX = Math.floor((x + radius) * _invCell);
  const minCZ = Math.floor((z - radius) * _invCell);
  const maxCZ = Math.floor((z + radius) * _invCell);

  for (let cx = minCX; cx <= maxCX; cx++) {
    for (let cz = minCZ; cz <= maxCZ; cz++) {
      const bucket = grid.get(cx + ',' + cz);
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          _result[_resultLen++] = bucket[i];
        }
      }
    }
  }
}

/**
 * Query trees near (x,z,radius)
 */
export function queryNearTrees(x, z, radius) {
  _resultLen = 0;
  _query(_treeGrid, x, z, radius);
  return { items: _result, length: _resultLen };
}

/**
 * Query dynamic entities near (x,z,radius)
 */
export function queryNearDynamic(x, z, radius) {
  _resultLen = 0;
  _query(_dynamicGrid, x, z, radius);
  return { items: _result, length: _resultLen };
}

/**
 * Query BOTH trees and dynamic entities
 */
export function queryNearAll(x, z, radius) {
  _resultLen = 0;
  _query(_treeGrid, x, z, radius);
  _query(_dynamicGrid, x, z, radius);
  return { items: _result, length: _resultLen };
}

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

// Named per-type dynamic grids (e.g. 'deer', 'puff', 'jelly') so same-type
// neighbor queries aren't conflated with other fauna in the combined grid.
// Each named grid has its own cell size + inverse, set at build time.
/** @type {Map<string, Map<string, Array>>} */
const _namedGrids = new Map();
/** @type {Map<string, number>} */
const _namedInvCell = new Map();

// Pre-allocated result array — reused every query to avoid GC. Callers MUST
// fully consume the returned items before issuing the next query (any query
// helper resets and reuses this same buffer).
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
 * Build (or rebuild in place) a named per-type dynamic grid for one
 * collection of same-type entities (e.g. all deer). Reuses existing bucket
 * arrays to avoid GC. Each named grid keeps its own cell size so callers can
 * tune it to the neighbor radius they query with.
 *
 * @param {string} name           grid identifier ('deer' | 'puff' | 'jelly' …)
 * @param {Array<{x?:number,z?:number,group?:{position:{x:number,z:number}}}>} list
 * @param {number} [cellSize=10]
 */
export function buildNamedDynamicHash(name, list, cellSize = 10) {
  let grid = _namedGrids.get(name);
  if (!grid) {
    grid = new Map();
    _namedGrids.set(name, grid);
  } else {
    // Clear existing buckets without deleting them to reuse arrays.
    for (const bucket of grid.values()) bucket.length = 0;
  }
  const inv = 1 / cellSize;
  _namedInvCell.set(name, inv);

  for (let i = 0; i < list.length; i++) {
    const entry = list[i];
    const x = entry.x !== undefined ? entry.x : entry.group.position.x;
    const z = entry.z !== undefined ? entry.z : entry.group.position.z;
    const cx = Math.floor(x * inv);
    const cz = Math.floor(z * inv);
    const key = cx + ',' + cz;
    let bucket = grid.get(key);
    if (!bucket) {
      bucket = [];
      grid.set(key, bucket);
    }
    bucket.push(entry);
  }
}

/**
 * Internal query helper. Uses the supplied inverse-cell so it works for both
 * the global grids (_invCell) and named grids (their own inv).
 */
function _query(grid, x, z, radius, inv) {
  if (!grid) return;

  const minCX = Math.floor((x - radius) * inv);
  const maxCX = Math.floor((x + radius) * inv);
  const minCZ = Math.floor((z - radius) * inv);
  const maxCZ = Math.floor((z + radius) * inv);

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
  _query(_treeGrid, x, z, radius, _invCell);
  return { items: _result, length: _resultLen };
}

/**
 * Query dynamic entities near (x,z,radius)
 */
export function queryNearDynamic(x, z, radius) {
  _resultLen = 0;
  _query(_dynamicGrid, x, z, radius, _invCell);
  return { items: _result, length: _resultLen };
}

/**
 * Query a named per-type dynamic grid near (x,z,radius). Returns the shared
 * result view — consume `items[0..length-1]` before the next query.
 * @param {string} name grid identifier passed to buildNamedDynamicHash
 */
export function queryNamedDynamic(name, x, z, radius) {
  _resultLen = 0;
  const grid = _namedGrids.get(name);
  const inv = _namedInvCell.get(name) || _invCell;
  _query(grid, x, z, radius, inv);
  return { items: _result, length: _resultLen };
}

/**
 * Query BOTH trees and dynamic entities
 */
export function queryNearAll(x, z, radius) {
  _resultLen = 0;
  _query(_treeGrid, x, z, radius, _invCell);
  _query(_dynamicGrid, x, z, radius, _invCell);
  return { items: _result, length: _resultLen };
}

// ================================================================
// Entity Registry — typed collections for all game entities
// ================================================================
// Replaces the 29 module-scoped arrays in main.js. Every entity
// array is registered here by type, accessible to any system.

const _collections = {};

// Entity type constants
export const EntityType = {
  TREES:        'trees',
  TREE_MESHES:  'treeMeshes',
  TREE_IMPOSTORS: 'treeImpostors',
  MUSHROOMS:    'mushrooms',
  CRYSTALS:     'crystals',
  JELLIES:      'jellies',
  PUFFLINGS:    'pufflings',
  DEER:         'deer',
  MOTHS:        'moths',
  GRASS:        'grass',
  FERNS:        'ferns',
  FLOWERS:      'flowers',
  REEDS:        'reeds',
  ROCKS:        'rocks',
  WISPS:        'wisps',
  DANDELIONS:   'dandelions',
  FAIRY_RINGS:  'fairyRings',
  BUBBLES:      'bubbles',
  PONDS:        'ponds',
  ORBS:         'orbs',
  THORNBLOOMS:  'thornblooms',
  HELIXVINES:   'helixvines',
  SNAPTHORNS:   'snapthorns',
  SPIRALFRONDS: 'spiralfronds',
  CORPSEBLOOMS: 'corpseblooms',
  ORBBUSHES:    'orbbushes',
  LANTERNPODS:  'lanternpods',
  VEILMOSSES:   'veilmosses',
  GROUND_GLOWS: 'groundGlows',
};

// Register an entity collection. The array itself is stored — not copied.
export const register = (type, array) => {
  _collections[type] = array;
};

// Get an entity collection by type. Returns the live array.
export const get = (type) => _collections[type] || [];

// Check if a type is registered
export const has = (type) => type in _collections;

// Get all registered type names
export const types = () => Object.keys(_collections);

// Clear all registrations (useful for tests)
export const reset = () => {
  for (const key in _collections) delete _collections[key];
};

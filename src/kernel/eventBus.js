// ================================================================
// Event Bus — typed publish/subscribe with zero-alloc dispatch
// ================================================================
// All cross-cutting concerns flow through here. Systems subscribe
// during init, then emit/listen without knowing about each other.

// Pre-defined event types (no string typos, easy grep)
export const Events = {
  // Quest / progression
  ORB_COLLECTED:      'orb:collected',
  ORB_REJECTED:       'orb:rejected',
  QUEST_PHASE:        'quest:phase',
  ORB_FLY_START:      'quest:orbFlyStart',
  ORB_LASER_START:    'quest:orbLaserStart',
  WORLD_TRANSFORMED:  'quest:worldTransformed',

  // Creature interaction
  CREATURE_ATTUNED:   'creature:attuned',
  ATTUNEMENT_FLASH:   'attunement:flash',
  PITCH_LOCKED:       'hum:locked',
  ENTITY_MOOD_CHANGE: 'entity:mood',
  SYMBIOSIS_COUPLED:  'symbiosis:coupled',

  // Player actions
  FOOTSTEP:           'player:footstep',
  JUMP:               'player:jump',
  LAND:               'player:land',

  // World interactions
  FAIRY_BOUNCE:       'fairy:bounce',
  BUBBLE_POP:         'bubble:pop',
  CRYSTAL_CHAIN:      'crystal:chain',
  CREATURE_SOUND:     'creature:sound',

  // Weather / day-night
  WEATHER_CHANGE:     'weather:change',
  DAY_PHASE_CHANGE:   'dayPhase:change',

  // Discovery / narrative
  DISCOVERY:          'discovery:trigger',
  NARRATIVE_TEXT:      'narrative:text',
  PERSPECTIVE_CHANGED: 'narrative:perspectiveChanged',
};

// Pre-allocated listener arrays per event type
const _listeners = {};
for (const key in Events) _listeners[Events[key]] = [];

// Subscribe to an event. Returns unsubscribe function.
export const on = (event, fn) => {
  const arr = _listeners[event];
  if (!arr) {
    if (import.meta.env?.DEV) console.warn('eventBus: unknown event "' + event + '"');
    return () => {};
  }
  arr.push(fn);
  return () => off(event, fn);
};

// Unsubscribe a specific listener
export const off = (event, fn) => {
  const arr = _listeners[event];
  if (!arr) return;
  const idx = arr.indexOf(fn);
  if (idx !== -1) arr.splice(idx, 1);
};

// Dispatch event to all subscribers (synchronous, zero-alloc)
// Reverse iteration: splice-safe if a listener calls off() during dispatch
export const emit = (event, data) => {
  const arr = _listeners[event];
  if (!arr) return;
  for (let i = arr.length - 1; i >= 0; i--) arr[i](data);
};

// Clear all listeners (useful for tests)
export const reset = () => {
  for (const key in _listeners) _listeners[key].length = 0;
};

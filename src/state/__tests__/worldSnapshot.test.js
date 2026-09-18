/**
 * The restore ORDER.
 *
 * applySnapshot is a sequence, not a set. Progression must land before
 * anything that reads it; sectors and constellations before the visuals that
 * assume them; the camera-pan counter before the first frame, or the player
 * gets a cutscene pan across constellations they revealed an hour ago. Every
 * system here is mocked to record only that it was called and when, so this
 * test fails on a reordering even when each individual step still works.
 *
 * And the whole point of the design: nothing in here may emit ORB_COLLECTED.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';

const order = [];
const rec = (name, ret) => vi.fn((...a) => { order.push(name); return typeof ret === 'function' ? ret(...a) : ret; });

const H = {
  restoreQuestState: rec('quest'),
  setSectorRestored: rec('sector'),
  prepareLocalGlowFrame: rec('glowFrame'),
  revealConstellation: rec('constellation'),
  setWishesTriggered: rec('wishes'),
  restoreQuestVisuals: rec('visuals'),
  syncCameraPanOrbs: rec('cameraPan'),
  restoreNarrative: rec('narrative'),
  restoreGlyphs: rec('glyphs'),
  unlockTruthControlHint: rec('truthHint'),
  setWizardEncounterDone: rec('wizard'),
  setWorldTime: rec('time'),
  restoreWeatherSnapshot: rec('weather'),
  setYaw: rec('yaw'),
  setPitch: rec('pitch'),
  restorePlayerFrequency: rec('frequency'),
  playLaserHum: rec('laserHum'),
  startResonanceDrone: rec('drone'),
};

vi.mock('../../quest/questState.js', () => ({
  restoreQuestState: (...a) => H.restoreQuestState(...a),
  getQuestSnapshot: () => ({ phase: 'RISING', collected: [], obeliskY: -25 }),
  getQuestPhase: () => 'RISING',
  getOrbsFound: () => 2,
  getQuestState: () => ({ orbs: [{ found: true, x: 1, z: 2 }, { found: true, x: 3, z: 4 }], orbsFound: 2 }),
}));
vi.mock('../../quest/questVisuals.js', () => ({ restoreQuestVisuals: (...a) => H.restoreQuestVisuals(...a) }));
vi.mock('../../systems/dimming.js', () => ({
  setSectorRestored: (...a) => H.setSectorRestored(...a),
  prepareLocalGlowFrame: (...a) => H.prepareLocalGlowFrame(...a),
}));
vi.mock('../../world/sky.js', () => ({
  revealConstellation: (...a) => H.revealConstellation(...a),
  getWishesTriggered: () => [false, false, false, false, false],
  setWishesTriggered: (...a) => H.setWishesTriggered(...a),
}));
vi.mock('../../updates/playerVisuals.js', () => ({ syncCameraPanOrbs: (...a) => H.syncCameraPanOrbs(...a) }));
vi.mock('../narrativeState.js', () => ({
  getPerspective: () => 'child', isTruthRevealed: () => false, getDiscoveredKeys: () => [],
  restoreNarrative: (...a) => H.restoreNarrative(...a),
}));
vi.mock('../../systems/discoveries.js', () => ({
  getRevealedGlyphs: () => [], restoreGlyphs: (...a) => H.restoreGlyphs(...a),
}));
vi.mock('../../systems/wizardPufflingEvent.js', () => ({
  isWizardEncounterDone: () => false, setWizardEncounterDone: (...a) => H.setWizardEncounterDone(...a),
}));
vi.mock('../../systems/dayNightCycle.js', () => ({
  getWorldTime: () => 0.25, setWorldTime: (...a) => H.setWorldTime(...a),
}));
vi.mock('../../systems/weather.js', () => ({
  WEATHER_STATE_NAMES: ['CLEAR'],
  getWeatherSnapshot: () => ({ cur: 'CLEAR' }),
  restoreWeatherSnapshot: (...a) => H.restoreWeatherSnapshot(...a),
}));
vi.mock('../../core/player.js', () => ({
  player: { pos: { x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; } }, vel: { set() {} }, onGround: false },
}));
vi.mock('../../core/input.js', () => ({
  yaw: 0, pitch: 0,
  setYaw: (...a) => H.setYaw(...a), setPitch: (...a) => H.setPitch(...a),
  unlockTruthControlHint: (...a) => H.unlockTruthControlHint(...a),
}));
vi.mock('../../world/terrain.js', () => ({ getGroundY: () => 3 }));
vi.mock('../../systems/attunement.js', () => ({
  getPlayerFrequency: () => null, getJellyPostTimerRaw: () => 0,
  restorePlayerFrequency: (...a) => H.restorePlayerFrequency(...a),
}));
vi.mock('../../systems/audio.js', () => ({
  isAudioInitialized: () => true,
  playLaserHum: (...a) => H.playLaserHum(...a),
  startResonanceDrone: (...a) => H.startResonanceDrone(...a),
}));

const { applySnapshot, buildSnapshot } = await import('../worldSnapshot.js');
const { player } = await import('../../core/player.js');
const { on, off, Events } = await import('../../kernel/eventBus.js');
const { SaveError } = await import('../saveState.js');
const { getBootSeed } = await import('../../utils/rng.js');

const snap = (over = {}) => ({
  quest: { phase: 'RISING', obeliskY: -15, collected: [{ orbIndex: 0, creature: 'puff' }, { orbIndex: 3, creature: 'deer' }] },
  world: { time: 0.7, weather: { cur: 'CLEAR' }, wishes: [true, false, false, false, false] },
  narrative: { perspective: 'adult', truthRevealed: true, wizardDone: true, discovered: ['deer'], glyphs: [1] },
  player: { x: 4, z: -6, yaw: 1.2, pitch: -0.3, frequency: 'deer', jellyTimer: 0 },
  ...over,
});

describe('applySnapshot order', () => {
  beforeEach(() => { order.length = 0; for (const f of Object.values(H)) f.mockClear(); });

  it('runs the systems in the order the design requires', () => {
    applySnapshot(snap());
    const first = (n) => order.indexOf(n);
    expect(first('quest')).toBe(0);                            // progression before all readers
    expect(first('quest')).toBeLessThan(first('sector'));
    expect(first('sector')).toBeLessThan(first('glowFrame'));
    expect(first('glowFrame')).toBeLessThan(first('constellation'));
    expect(first('constellation')).toBeLessThan(first('visuals'));
    expect(first('visuals')).toBeLessThan(first('cameraPan'));  // pan counter before the first frame
    expect(first('cameraPan')).toBeLessThan(first('narrative'));
    expect(first('narrative')).toBeLessThan(first('time'));
    expect(first('time')).toBeLessThan(first('yaw'));
    expect(order[order.length - 1]).toBe('drone');              // audio last
  });

  it('never emits ORB_COLLECTED — a load is not a collection', () => {
    const fired = [];
    const watch = [Events.ORB_COLLECTED, Events.QUEST_PHASE, Events.DISCOVERY, Events.PERSPECTIVE_CHANGED];
    for (const e of watch) on(e, () => fired.push(e));
    try {
      applySnapshot(snap());
      expect(fired).toEqual([]);
    } finally { for (const e of watch) off(e); }
  });

  it('restores one sector and one constellation per collected orb', () => {
    applySnapshot(snap());
    expect(H.setSectorRestored).toHaveBeenCalledTimes(2);
    expect(H.setSectorRestored).toHaveBeenCalledWith(0, { instant: true });
    expect(H.setSectorRestored).toHaveBeenCalledWith(3, { instant: true });
    expect(H.revealConstellation).toHaveBeenCalledTimes(2);
  });

  it('reveals constellations by collection ordinal, not by orb index', () => {
    // Sector 3's orb was the SECOND one collected, so it lights the second
    // constellation. Indexing by orbIndex here would skip two and light a
    // constellation the player never earned.
    applySnapshot(snap());
    const idx = H.revealConstellation.mock.calls.map((c) => c[0]);
    expect(idx).toEqual([0, 1]);
  });

  it('places the player on the ground, stopped, facing where they were', () => {
    applySnapshot(snap());
    expect(player.pos.x).toBe(4);
    expect(player.pos.z).toBe(-6);
    expect(player.pos.y).toBeGreaterThan(3);      // ground + eye height
    expect(player.onGround).toBe(true);
    expect(H.setYaw).toHaveBeenCalledWith(1.2);
    expect(H.setPitch).toHaveBeenCalledWith(-0.3);
  });

  it('applies the narrative flags it was given and skips the ones it was not', () => {
    applySnapshot(snap());
    expect(H.unlockTruthControlHint).toHaveBeenCalled();
    expect(H.setWizardEncounterDone).toHaveBeenCalled();
    order.length = 0;
    for (const f of Object.values(H)) f.mockClear();
    applySnapshot(snap({
      narrative: { perspective: 'child', truthRevealed: false, wizardDone: false, discovered: [], glyphs: [] },
    }));
    expect(H.unlockTruthControlHint).not.toHaveBeenCalled();
    expect(H.setWizardEncounterDone).not.toHaveBeenCalled();
  });

  it('refuses a save from a different forest', () => {
    expect(() => applySnapshot(snap({ seed: getBootSeed() + 1 }))).toThrow(SaveError);
  });

  it('suspends autosave across the restore and resumes it even if a step throws', () => {
    const autosave = { suspend: vi.fn(), resume: vi.fn() };
    applySnapshot(snap(), { autosave });
    expect(autosave.suspend).toHaveBeenCalledBefore(autosave.resume);

    H.restoreQuestState.mockImplementationOnce(() => { throw new Error('boom'); });
    const a2 = { suspend: vi.fn(), resume: vi.fn() };
    expect(() => applySnapshot(snap(), { autosave: a2 })).toThrow('boom');
    expect(a2.resume).toHaveBeenCalled();     // never left suspended
  });

  it('starts a laser hum per found orb and one drone', () => {
    applySnapshot(snap());
    expect(H.playLaserHum).toHaveBeenCalledTimes(2);
    expect(H.startResonanceDrone).toHaveBeenCalledTimes(1);
  });
});

describe('buildSnapshot', () => {
  it('reads every section the schema needs', () => {
    const s = buildSnapshot();
    expect(Object.keys(s).sort()).toEqual(['narrative', 'player', 'quest', 'world']);
    expect(s.world).toHaveProperty('time');
    expect(s.world).toHaveProperty('weather');
    expect(s.world).toHaveProperty('wishes');
    expect(s.narrative).toHaveProperty('glyphs');
    expect(s.player).toHaveProperty('frequency');
  });
});

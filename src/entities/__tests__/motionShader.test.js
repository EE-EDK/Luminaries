/**
 * Motion shader — mode selection, read out of the generated source.
 *
 * The vertex chunk is assembled in JS, so the branch conditions that pick a
 * motion mode are plain text we can evaluate. That matters because of the
 * defect this file exists for: the REACH branch was written `_mode > 8.5`, with
 * no upper bound, so any mode above 9 - the new RIG = 10 included - fell into
 * the tentacle-wave-and-lean-toward-the-player code. On a rigged mesh with a
 * wind weight that is a deer whose legs reach for you. With aSway = 0 the
 * bug is invisible (every REACH term is multiplied by aSway), which is exactly
 * how it survived.
 *
 * This does not run GLSL. It runs the *conditions* GLSL would run, in JS, for
 * every mode, and asserts exactly one branch claims each mode and none claims
 * a mode that has no branch.
 */
import { describe, it, expect } from 'vitest';
import { MOTION, RIG_MAX_JOINTS, buildMotionVertexBody, buildMotionVertexPars } from '../_motion.js';

const BODY = buildMotionVertexBody(0);

/** The if / else-if chain on `_mode`, in source order. */
function modeChain(src) {
  const out = [];
  const re = /^\s*(?:\}\s*else\s+)?if\s*\((_mode[^\n]*?)\)\s*\{\s*$/gm;
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}
const evalCond = (cond, mode) => new Function('_mode', `return (${cond});`)(mode);
/** Index of the first branch that claims `mode` (the chain is if / else-if), or -1. */
const claimedBy = (chain, mode) => chain.findIndex((c) => evalCond(c, mode));

describe('motion shader — mode dispatch', () => {
  const chain = modeChain(BODY);

  it('the chain has one branch per displacing / emissive mode, BOB through REACH', () => {
    expect(chain.length).toBe(9);
  });

  it('every mode 1..9 is claimed by its own branch, in order', () => {
    for (let mode = MOTION.BOB; mode <= MOTION.REACH; mode++) {
      expect(claimedBy(chain, mode), `mode ${mode}`).toBe(mode - 1);
    }
  });

  it('NONE and RIG are claimed by no branch', () => {
    expect(claimedBy(chain, MOTION.NONE)).toBe(-1);
    expect(claimedBy(chain, MOTION.RIG)).toBe(-1);
  });

  it('nothing above RIG is claimed either (no open-ended branch)', () => {
    for (const mode of [10, 11, 12, 50, 1000]) expect(claimedBy(chain, mode), `mode ${mode}`).toBe(-1);
  });

  it('REACH is bounded above: the condition names its upper limit', () => {
    const reach = chain[MOTION.REACH - 1];
    expect(reach).toMatch(/_mode\s*<\s*9\.5/);
    expect(reach).toMatch(/_mode\s*>\s*8\.5/);
  });

  it('the player brush-aside exclusion is a band around REACH, not "everything above FLICKER"', () => {
    const m = /_pd2\s*<\s*1\.44\s*&&\s*(\([^)]*\))/.exec(BODY);
    expect(m, 'brush-aside condition not found').toBeTruthy();
    const skips = (mode) => !evalCond(m[1], mode);
    expect(skips(MOTION.REACH), 'REACH has its own lean').toBe(true);
    for (let mode = 0; mode <= MOTION.FLICKER; mode++) expect(skips(mode), `mode ${mode}`).toBe(false);
    expect(skips(MOTION.RIG), 'a rigged vertex with a wind weight is still brushed aside').toBe(false);
  });
});

describe('motion shader — rig stage', () => {
  const RIGGED = buildMotionVertexBody(14);

  it('a non-rig material gets no rig code at all', () => {
    expect(BODY).not.toContain('aJoint');
    expect(BODY).not.toContain('uJoints');
    expect(buildMotionVertexPars(0)).not.toContain('uJoints');
  });

  it('a rigged body reads the joint uniform and weight', () => {
    expect(RIGGED).toContain('uJoints[');
    expect(RIGGED).toContain('uJointPos[');
    expect(RIGGED).toContain('aJointW');
  });

  it('the rig is applied after the per-mode displacement and before wind', () => {
    const iMode = RIGGED.indexOf('REACH');
    const iRig = RIGGED.indexOf('uJoints[');
    const iWind = RIGGED.indexOf('if (aSway > 0.001)');
    expect(iMode).toBeGreaterThan(-1);
    expect(iRig).toBeGreaterThan(iMode);
    expect(iWind).toBeGreaterThan(iRig);
  });

  it('declarations are sized to the joint count', () => {
    const pars = buildMotionVertexPars(14);
    expect(pars).toContain('uniform vec4 uJoints[14];');
    expect(pars).toContain('uniform vec3 uJointPos[14];');
    expect(pars).toContain('attribute float aJoint;');
    expect(pars).toContain('attribute float aJointW;');
  });

  it('refuses a joint count the uniform budget cannot hold', () => {
    expect(() => buildMotionVertexPars(RIG_MAX_JOINTS + 1)).toThrow();
    expect(() => buildMotionVertexPars(-1)).toThrow();
  });

  it('the rig stage does not reintroduce an open-ended mode test', () => {
    expect(claimedBy(modeChain(RIGGED), MOTION.RIG)).toBe(-1);
  });
});

describe('motion shader — scaled rig stage', () => {
  const PLAIN = buildMotionVertexBody(4);
  const SCALED = buildMotionVertexBody(4, true);

  it('an unscaled rig has no scale code at all (deer and moth programs are unchanged)', () => {
    expect(PLAIN).not.toContain('uJointScale');
    expect(buildMotionVertexPars(4)).not.toContain('uJointScale');
  });

  it('a scaled rig multiplies by the joint scale BEFORE it rotates (scale then rotate, as Object3D does)', () => {
    expect(SCALED).toContain('lumRigRotate(uJoints[_rj], _p * uJointScale[_rj])');
    expect(buildMotionVertexPars(4, true)).toContain('uniform vec3 uJointScale[4];');
  });

  it('a scaled rig is still applied after the per-mode displacement and before wind, and mode RIG stays reachable', () => {
    expect(SCALED.indexOf('uJointScale')).toBeGreaterThan(SCALED.indexOf('REACH'));
    expect(SCALED.indexOf('if (aSway > 0.001)')).toBeGreaterThan(SCALED.indexOf('uJointScale'));
    expect(claimedBy(modeChain(SCALED), MOTION.RIG)).toBe(-1);
  });
});

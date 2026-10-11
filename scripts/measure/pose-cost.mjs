/**
 * What one pose write costs, per creature type (node, no browser): the number the pose band's
 * saving is worked out from. Plain objects stand in for the creatures; the rig code is the real thing.
 *   node scripts/measure/pose-cost.mjs
 */
const R = new URL('../../src/entities/fauna/', import.meta.url).href;
const { makeDeerRig, writeDeerPose } = await import(R + 'deerRig.js');
const { makeMothRig, writeMothPose } = await import(R + 'mothRig.js');
const { makePufflingRig, writePufflingPose } = await import(R + 'pufflingRig.js');
const rot = () => ({ rotation: { x: 0.1, y: 0.2, z: 0.3 } });
const deer = { rig: makeDeerRig(), neckBasePivot: rot(), neckMidPivot: rot(), headPivot: rot(), ears: [rot(), rot()], tailPivot: rot(), legPivots: [0,1,2,3].map(() => ({ upper: rot(), lower: rot() })) };
const moth = { rig: makeMothRig(), group: { _wingPivots: [{ pivot: rot() }, { pivot: rot() }] }, antennae: [rot(), rot()] };
const puff = { rig: makePufflingRig(), ears: [{ mesh: rot() }, { mesh: rot() }], eyes: [{ scale: { x: 1, y: 1, z: 1 } }, { scale: { x: 1, y: 1, z: 1 } }] };
function bench(name, fn, o) {
  for (let i = 0; i < 2e5; i++) { o.neckBasePivot && (o.neckBasePivot.rotation.x = i * 1e-3); fn(o); }
  const N = 2e6; const t0 = process.hrtime.bigint();
  for (let i = 0; i < N; i++) { fn(o); }
  const ns = Number(process.hrtime.bigint() - t0) / N;
  console.log(name.padEnd(10), ns.toFixed(0), 'ns/call');
}
bench('deer', writeDeerPose, deer); bench('moth', writeMothPose, moth); bench('puffling', writePufflingPose, puff);

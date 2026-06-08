// ================================================================
// Performance Monitor — dev-only per-system timing + renderer.info
// ================================================================
// Tree-shaken in production: all exports become no-ops when !DEV.

const ENABLED = import.meta.env.DEV;
const ALPHA = 0.1;                 // Exponential moving average smoothing
const REPORT_INTERVAL = 5000;      // ms between summary logs

const timings = {};
let lastReport = 0;

// ================================================================
// Rolling-window FPS sampler (dev-only)
// ================================================================
// Records per-frame durations in a fixed ring buffer so LumiDebug.perf()
// can compute avg / 1%-low / min FPS over the most recent N frames.
// All buffers are pre-allocated at module scope — zero per-frame allocation.
const FPS_WINDOW = 240;            // ~4 s at 60 FPS, ~12 s at 20 FPS
const _frameMs = new Float32Array(FPS_WINDOW);
let _frameCount = 0;               // total frames recorded (caps fill level)
let _frameHead = 0;                // ring write index
// Scratch buffer for the 1%-low sort — pre-allocated, reused each query.
const _sortScratch = new Float32Array(FPS_WINDOW);
// Last renderer reference seen by reportTimings(); used by getRendererInfo().
let _lastRenderer = null;

/**
 * Record one rendered frame. Call exactly once per requestAnimationFrame tick.
 * @param {number} dtSeconds delta time for the frame, in seconds.
 */
export function sampleFrame(dtSeconds) {
  if (!ENABLED) return;
  // Guard against the post-tab-switch / first-frame dt spike (clamped to 0.1s
  // upstream, but treat 0 / NaN defensively so stats stay meaningful).
  const ms = dtSeconds > 0 ? dtSeconds * 1000 : 0;
  if (ms <= 0) return;
  _frameMs[_frameHead] = ms;
  _frameHead = (_frameHead + 1) % FPS_WINDOW;
  if (_frameCount < FPS_WINDOW) _frameCount++;
}

/**
 * Compute rolling FPS stats over the recorded window.
 * @returns {{fpsAvg:number, fps1pctLow:number, fpsMin:number, frames:number}}
 *          Zeros when no frames recorded (e.g. production / before first tick).
 */
export function getFpsStats() {
  if (!ENABLED || _frameCount === 0) {
    return { fpsAvg: 0, fps1pctLow: 0, fpsMin: 0, frames: 0 };
  }
  const n = _frameCount;
  let sumMs = 0;
  let maxMs = 0; // slowest frame → fpsMin
  for (let i = 0; i < n; i++) {
    const ms = _frameMs[i];
    sumMs += ms;
    _sortScratch[i] = ms;
    if (ms > maxMs) maxMs = ms;
  }
  const avgMs = sumMs / n;

  // 1%-low: mean FPS of the slowest 1% of frames (min 1 frame). Sort the
  // scratch slice ascending, then average the FPS of the worst tail.
  const slice = _sortScratch.subarray(0, n);
  slice.sort();
  const worstCount = Math.max(1, Math.floor(n * 0.01));
  let worstSumMs = 0;
  for (let i = n - worstCount; i < n; i++) worstSumMs += slice[i];
  const worstAvgMs = worstSumMs / worstCount;

  return {
    fpsAvg: avgMs > 0 ? 1000 / avgMs : 0,
    fps1pctLow: worstAvgMs > 0 ? 1000 / worstAvgMs : 0,
    fpsMin: maxMs > 0 ? 1000 / maxMs : 0,
    frames: n
  };
}

/**
 * Top-N subsystems by EMA avg ms (descending). Empty in production.
 * @param {number} [count=5]
 * @returns {Array<{system:string, avgMs:number, maxMs:number}>}
 */
export function getTopTimings(count = 5) {
  if (!ENABLED) return [];
  return Object.entries(timings)
    .map(([label, t]) => ({ system: label, avgMs: t.avg, maxMs: t.max }))
    .sort((a, b) => b.avgMs - a.avgMs)
    .slice(0, count);
}

/**
 * Wire the renderer once at init so getRendererInfo() works before the first
 * reportTimings() cadence and during the intro (where the scheduler is idle).
 */
export function setRenderer(renderer) {
  if (!ENABLED) return;
  if (renderer) _lastRenderer = renderer;
}

/**
 * Snapshot of the last renderer.info seen by reportTimings(). Returns null when
 * no renderer has been wired or in production.
 */
export function getRendererInfo() {
  if (!ENABLED || !_lastRenderer) return null;
  const r = _lastRenderer.info.render;
  const m = _lastRenderer.info.memory;
  const p = _lastRenderer.info.programs;
  return {
    drawCalls: r.calls,
    triangles: r.triangles,
    programs: p ? p.length : 0,
    geometries: m.geometries,
    textures: m.textures
  };
}

export function timeStart(label) {
  if (!ENABLED) return;
  if (!timings[label]) timings[label] = { avg: 0, max: 0, samples: 0, _start: 0 };
  timings[label]._start = performance.now();
}

export function timeEnd(label) {
  if (!ENABLED) return;
  const entry = timings[label];
  if (!entry || !entry._start) return;
  const elapsed = performance.now() - entry._start;
  entry.avg = entry.samples === 0
    ? elapsed
    : entry.avg * (1 - ALPHA) + elapsed * ALPHA;
  entry.max = Math.max(entry.max, elapsed);
  entry.samples++;
  entry._start = 0;
}

export function reportTimings(renderer) {
  if (!ENABLED) return;
  // Capture the renderer so LumiDebug.perf() can read renderer.info on demand,
  // independent of the 5 s report cadence.
  if (renderer) _lastRenderer = renderer;
  const now = performance.now();
  if (now - lastReport < REPORT_INTERVAL) return;
  lastReport = now;

  // Per-system timing table
  const rows = Object.entries(timings)
    .sort((a, b) => b[1].avg - a[1].avg)
    .map(([label, t]) => ({
      System: label,
      'Avg ms': t.avg.toFixed(3),
      'Max ms': t.max.toFixed(3)
    }));
  if (rows.length) console.table(rows);

  // Reset max after each report window
  for (const t of Object.values(timings)) t.max = 0;

  // Renderer memory + draw call info
  if (renderer) {
    const r = renderer.info.render;
    const m = renderer.info.memory;
    console.log(
      `[renderer] calls: ${r.calls}  tris: ${r.triangles}  ` +
      `geos: ${m.geometries}  texs: ${m.textures}`
    );
  }
}

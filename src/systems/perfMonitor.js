// ================================================================
// Performance Monitor — dev-only per-system timing + renderer.info
// ================================================================
// Tree-shaken in production: all exports become no-ops when !DEV.

const ENABLED = import.meta.env.DEV;
const ALPHA = 0.1;                 // Exponential moving average smoothing
const REPORT_INTERVAL = 5000;      // ms between summary logs

const timings = {};
let lastReport = 0;

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

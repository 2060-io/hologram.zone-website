"use client";

import { useEffect, useRef } from "react";

/* -------------------------------------------------------------------------- *
 *  Hologram hero — animated trust-graph background.
 *
 *  Zero dependencies, pure Canvas 2D, ~2 kB gzipped runtime.
 *  Honours prefers-reduced-motion (draws a single static frame).
 *
 *  Composition mirrors the hero brief:
 *    - 7 hex agent nodes arranged in an organic constellation.
 *    - ~22 threads converge from off-frame "sources" onto the nodes.
 *    - Colour-coded state per thread:
 *        accepted (emerald)  — full reach, bright particles flowing.
 *        scoped   (amber)    — full reach, fewer / dimmer particles.
 *        refused  (red)      — fades to a broken arc at the perimeter.
 *    - Node halos pulse gently; verified check-mark glows.
 *
 *  The canvas is fully decorative (`aria-hidden`, `pointer-events: none`)
 *  and sits beneath the hero copy and the existing SVG trust diagram.
 * -------------------------------------------------------------------------- */

type Rgb = readonly [number, number, number];

type NodeDef = {
  x: number; // normalized 0..1 across the canvas width
  y: number; // normalized 0..1 across the canvas height
  r: number; // hex radius at a 900-px reference viewport
};

type ThreadDef = {
  from: { x: number; y: number }; // normalized; negative / > 1 means off-frame
  to: number; // index into NODES
  state: "accepted" | "scoped" | "refused";
  phase: number; // 0..1, particle starting offset
  speed: number; // loops per second
  particles: number; // how many beads travel this thread
  curve: number; // bezier control offset (signed); higher = more bow
};

// Palette is locked to the CSS brand tokens (globals.css @theme) so the
// canvas blends with the rest of the hero chrome.
const NODE_STROKE: Rgb[] = [
  [167, 139, 250], // brand-400
  [59, 130, 246], // blue-500
  [6, 182, 212], // cyan-500
];

const STATE: Record<ThreadDef["state"], Rgb> = {
  accepted: [16, 185, 129], // emerald-500
  scoped: [245, 158, 11], // amber-500
  refused: [239, 68, 68], // red-500
};

const rgba = (c: Rgb, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

/* ---- hand-tuned layout (deterministic, no randomness on load) ----------- */

const NODES: NodeDef[] = [
  { x: 0.16, y: 0.38, r: 18 },
  { x: 0.30, y: 0.70, r: 16 },
  { x: 0.42, y: 0.26, r: 20 },
  { x: 0.56, y: 0.58, r: 24 }, // visual center
  { x: 0.70, y: 0.30, r: 18 },
  { x: 0.82, y: 0.66, r: 20 },
  { x: 0.92, y: 0.40, r: 16 },
];

const THREADS: ThreadDef[] = [
  // node 0 — left-edge agent
  { from: { x: -0.08, y: 0.20 }, to: 0, state: "accepted", phase: 0.00, speed: 0.28, particles: 2, curve:  0.45 },
  { from: { x: -0.06, y: 0.60 }, to: 0, state: "accepted", phase: 0.45, speed: 0.25, particles: 2, curve: -0.30 },
  { from: { x:  0.05, y: 1.10 }, to: 0, state: "scoped",   phase: 0.20, speed: 0.22, particles: 1, curve:  0.25 },

  // node 1 — lower-left agent
  { from: { x: -0.08, y: 0.95 }, to: 1, state: "accepted", phase: 0.10, speed: 0.30, particles: 2, curve: -0.35 },
  { from: { x:  0.20, y: 1.10 }, to: 1, state: "refused",  phase: 0.55, speed: 0.22, particles: 0, curve:  0.20 },

  // node 2 — upper-mid agent
  { from: { x:  0.30, y: -0.12 }, to: 2, state: "accepted", phase: 0.30, speed: 0.26, particles: 2, curve:  0.40 },
  { from: { x:  0.55, y: -0.10 }, to: 2, state: "scoped",   phase: 0.65, speed: 0.20, particles: 1, curve: -0.25 },
  { from: { x:  0.10, y: -0.10 }, to: 2, state: "accepted", phase: 0.80, speed: 0.24, particles: 2, curve: -0.50 },

  // node 3 — central hub, the busiest
  { from: { x:  0.25, y:  1.08 }, to: 3, state: "accepted", phase: 0.00, speed: 0.32, particles: 3, curve:  0.30 },
  { from: { x:  0.45, y: -0.08 }, to: 3, state: "accepted", phase: 0.22, speed: 0.28, particles: 2, curve:  0.40 },
  { from: { x:  0.85, y: -0.10 }, to: 3, state: "accepted", phase: 0.55, speed: 0.24, particles: 2, curve: -0.35 },
  { from: { x:  1.05, y:  0.95 }, to: 3, state: "scoped",   phase: 0.35, speed: 0.20, particles: 1, curve: -0.25 },
  { from: { x:  0.70, y:  1.10 }, to: 3, state: "refused",  phase: 0.70, speed: 0.22, particles: 0, curve:  0.40 },

  // node 4 — upper-right agent
  { from: { x:  0.60, y: -0.10 }, to: 4, state: "accepted", phase: 0.15, speed: 0.26, particles: 2, curve:  0.35 },
  { from: { x:  0.88, y: -0.08 }, to: 4, state: "accepted", phase: 0.60, speed: 0.28, particles: 2, curve: -0.30 },
  { from: { x:  1.10, y:  0.18 }, to: 4, state: "scoped",   phase: 0.90, speed: 0.22, particles: 1, curve:  0.25 },

  // node 5 — lower-right agent
  { from: { x:  0.90, y:  1.08 }, to: 5, state: "accepted", phase: 0.05, speed: 0.30, particles: 2, curve: -0.35 },
  { from: { x:  1.10, y:  0.85 }, to: 5, state: "accepted", phase: 0.40, speed: 0.26, particles: 2, curve:  0.30 },
  { from: { x:  0.60, y:  1.10 }, to: 5, state: "refused",  phase: 0.75, speed: 0.22, particles: 0, curve: -0.45 },

  // node 6 — right-edge agent
  { from: { x:  1.10, y:  0.18 }, to: 6, state: "accepted", phase: 0.10, speed: 0.28, particles: 2, curve: -0.35 },
  { from: { x:  1.10, y:  0.62 }, to: 6, state: "accepted", phase: 0.55, speed: 0.25, particles: 2, curve:  0.30 },
  { from: { x:  1.10, y:  0.95 }, to: 6, state: "scoped",   phase: 0.85, speed: 0.22, particles: 1, curve: -0.20 },
];

/* -------------------------------------------------------------------------- */

export default function HeroGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let rafId = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      // Clamp DPR at 2 — beyond that the bytes burned on a decorative layer
      // outweigh the sharpness gain.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const scale = () => Math.max(0.55, Math.min(width, height) / 900);

    const nodePx = (n: NodeDef) => ({ x: n.x * width, y: n.y * height });
    const anchorPx = (a: { x: number; y: number }) => ({
      x: a.x * width,
      y: a.y * height,
    });

    const bezier = (
      a: { x: number; y: number },
      c: { x: number; y: number },
      b: { x: number; y: number },
      t: number,
    ) => {
      const u = 1 - t;
      return {
        x: u * u * a.x + 2 * u * t * c.x + t * t * b.x,
        y: u * u * a.y + 2 * u * t * c.y + t * t * b.y,
      };
    };

    const drawThread = (th: ThreadDef, timeSec: number) => {
      const a = anchorPx(th.from);
      const b = nodePx(NODES[th.to]);

      // Perpendicular control point so curves bow organically.
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      const cp = {
        x: (a.x + b.x) / 2 + nx * th.curve * len * 0.18,
        y: (a.y + b.y) / 2 + ny * th.curve * len * 0.18,
      };

      // Refused threads never reach the node — they peter out at ~55%.
      const endT = th.state === "refused" ? 0.55 : 1;
      const end = bezier(a, cp, b, endT);

      // Stroke: soft gradient from dim at source to bright near endpoint.
      const colour = STATE[th.state];
      const grad = ctx.createLinearGradient(a.x, a.y, end.x, end.y);
      grad.addColorStop(0, rgba(colour, 0));
      grad.addColorStop(1, rgba(colour, th.state === "scoped" ? 0.45 : 0.6));

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1 * scale();
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      // For refused threads use a slightly shorter control point so the
      // curve visibly "breaks off" rather than pointing at the node.
      if (th.state === "refused") {
        const cp2 = bezier(a, cp, b, 0.35);
        ctx.quadraticCurveTo(cp2.x, cp2.y, end.x, end.y);
      } else {
        ctx.quadraticCurveTo(cp.x, cp.y, b.x, b.y);
      }
      ctx.stroke();

      if (th.particles === 0) return;

      // Particles traveling along the curve, brightening as they approach
      // their destination ("the packet was accepted").
      for (let i = 0; i < th.particles; i++) {
        const u = (timeSec * th.speed + th.phase + i / th.particles) % 1;
        const p = bezier(a, cp, b, u);
        const alpha = 0.35 + 0.65 * u; // fade-in over the journey
        const rad = (1.8 + 1.2 * u) * scale();

        // Soft outer glow.
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad * 5);
        glow.addColorStop(0, rgba(colour, alpha * 0.55));
        glow.addColorStop(1, rgba(colour, 0));
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad * 5, 0, Math.PI * 2);
        ctx.fill();

        // Crisp core.
        ctx.fillStyle = rgba(colour, Math.min(1, alpha + 0.25));
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawNode = (n: NodeDef, idx: number, timeSec: number) => {
      const p = nodePx(n);
      const r = n.r * scale();
      // Each node pulses on its own phase so the constellation breathes
      // instead of flashing in sync.
      const pulse = 0.82 + 0.18 * Math.sin(timeSec * 1.1 + idx * 0.9);

      // Halo.
      const halo = ctx.createRadialGradient(p.x, p.y, r * 0.3, p.x, p.y, r * 3.2);
      halo.addColorStop(0, rgba([139, 92, 246], 0.32 * pulse));
      halo.addColorStop(0.55, rgba([59, 130, 246], 0.08 * pulse));
      halo.addColorStop(1, rgba([59, 130, 246], 0));
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r * 3.2, 0, Math.PI * 2);
      ctx.fill();

      // Hex body.
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        // Flat-top hex: first vertex at angle = -30° so edges face up/down.
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();

      // Very faint fill so the hex reads against the grid but doesn't mask
      // the particles flowing behind larger nodes.
      ctx.fillStyle = rgba([139, 92, 246], 0.05);
      ctx.fill();

      // Gradient stroke (violet → blue → cyan) matching the brand ramp.
      const stroke = ctx.createLinearGradient(-r, -r, r, r);
      stroke.addColorStop(0, rgba(NODE_STROKE[0], 0.9));
      stroke.addColorStop(0.5, rgba(NODE_STROKE[1], 0.9));
      stroke.addColorStop(1, rgba(NODE_STROKE[2], 0.9));
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1.5 * scale();
      ctx.stroke();

      // Tiny verified check-mark at the centre.
      const cr = r * 0.38;
      ctx.beginPath();
      ctx.moveTo(-cr * 0.65, 0);
      ctx.lineTo(-cr * 0.15, cr * 0.5);
      ctx.lineTo(cr * 0.65, -cr * 0.55);
      ctx.strokeStyle = rgba([134, 239, 172], 0.95); // emerald-300
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 1.6 * scale();
      ctx.stroke();

      ctx.restore();
    };

    const render = (nowMs: number) => {
      const timeSec = (nowMs - start) / 1000;
      ctx.clearRect(0, 0, width, height);
      // additive-ish blending so overlapping glows read as light, not paint
      ctx.globalCompositeOperation = "lighter";
      for (const th of THREADS) drawThread(th, timeSec);
      ctx.globalCompositeOperation = "source-over";
      for (let i = 0; i < NODES.length; i++) drawNode(NODES[i], i, timeSec);
      if (!reduceMotion) rafId = requestAnimationFrame(render);
    };

    const onResize = () => {
      resize();
      if (reduceMotion) render(performance.now());
    };

    resize();
    render(performance.now());
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-70 dark:opacity-95"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

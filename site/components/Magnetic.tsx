"use client";

/* ───────────────────────────────────────────────────────────
   Magnetic — Framer Motion reimplementation of app.js's subtle
   magnetic-button effect: the element drifts toward the cursor
   (x * 0.18, y * 0.22) and springs back on leave. Disabled for
   reduced motion / "Motion: off" and on coarse pointers.
   Wrap a .btn (or any control) with it.
   ─────────────────────────────────────────────────────────── */

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useSite } from "./SiteProvider";

export function Magnetic({ children }: { children: ReactNode }) {
  const { motionScale } = useSite();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 20, mass: 0.4 });

  if (motionScale === 0) {
    return <span style={{ display: "inline-flex" }}>{children}</span>;
  }

  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.22);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, display: "inline-flex" }}
    >
      {children}
    </motion.span>
  );
}

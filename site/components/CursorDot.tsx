"use client";

/* ───────────────────────────────────────────────────────────
   CursorDot — Framer Motion reimplementation of app.js's
   smoothed cursor dot. Follows the pointer with a spring,
   grows over interactive targets, and uses mix-blend-mode:
   difference (styling in globals.css). Hidden on coarse/no-hover
   pointers via CSS; not rendered there at all to avoid listeners.
   ─────────────────────────────────────────────────────────── */

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const HOVER_SELECTOR = "a, button, .project-card, .skill-group, .tl-row, [data-cursor]";

export function CursorDot() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // ~0.18 lerp from the original, expressed as a spring.
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });
  const transform = useMotionTemplate`translate3d(${sx}px, ${sy}px, 0) translate(-50%, -50%)`;

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    // Enable only on the client, after confirming a fine pointer — reading
    // matchMedia in a lazy initializer would break SSR hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onOver = (e: MouseEvent) => {
      const t = (e.target as Element | null)?.closest(HOVER_SELECTOR);
      setHover(!!t);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className={`cursor-dot${visible ? " is-visible" : ""}${hover ? " is-hover" : ""}`}
      style={{ transform }}
      aria-hidden="true"
    />
  );
}

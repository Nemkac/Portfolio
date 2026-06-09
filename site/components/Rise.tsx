"use client";

/* ───────────────────────────────────────────────────────────
   Rise — Framer Motion reimplementation of the hero headline
   [data-rise] animation: each line's inner span rises from
   translateY(110%) to 0 on mount, staggered by delay. The outer
   .line clips the overflow (see globals.css). Gated behind
   reduced motion via motionScale.
   ─────────────────────────────────────────────────────────── */

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { EASE } from "./motion";
import { useSite } from "./SiteProvider";

export function Rise({
  delay = 0,
  className,
  style,
  children,
}: {
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const { motionScale } = useSite();

  if (motionScale === 0) {
    return (
      <span className="line">
        <span className={className} style={style}>
          {children}
        </span>
      </span>
    );
  }

  return (
    <span className="line">
      <motion.span
        className={className}
        style={style}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9 * motionScale, ease: EASE, delay: delay / 1000 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

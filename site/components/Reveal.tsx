"use client";

/* ───────────────────────────────────────────────────────────
   Reveal — Framer Motion reimplementation of the design's
   [data-reveal] scroll entrance (fade + 24px rise on enter).
   Polymorphic: render as any element so it can sit directly on
   an eyebrow span, an <h2>, an <a>, a <dl>, etc. — matching the
   original markup one-to-one. Gated behind reduced motion via
   the shared motionScale (0 = render statically visible).
   ─────────────────────────────────────────────────────────── */

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { EASE } from "./motion";
import { useSite } from "./SiteProvider";

type RevealProps = {
  as?: ElementType;
  /** Stagger delay in milliseconds, mirroring data-reveal-delay. */
  delay?: number;
  className?: string;
  children?: ReactNode;
} & Record<string, unknown>;

export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
  ...rest
}: RevealProps) {
  const { motionScale } = useSite();
  const MotionTag = motion[as as keyof typeof motion] as ElementType;

  // Reduced motion (or "Motion: off") → no animation, just visible.
  if (motionScale === 0) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.68 * motionScale, ease: EASE, delay: delay / 1000 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

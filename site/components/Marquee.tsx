"use client";

/* ───────────────────────────────────────────────────────────
   Marquee — Framer Motion reimplementation of the infinite
   tech-stack scroller. The track holds the items twice and
   animates x from 0% to -50% for a seamless loop (matches the
   design's 58s linear scroll-x, scaled by --motion). Static
   when reduced motion / "Motion: off".
   ─────────────────────────────────────────────────────────── */

import { motion } from "framer-motion";
import { useSite } from "./SiteProvider";

const ITEMS = [
  "React", "TypeScript", "Next.js", "Angular", "Node.js", "NestJS",
  "Tailwind", "Postgres", "MongoDB", "AWS", "Solidity", "React Native",
];

export function Marquee() {
  const { motionScale } = useSite();

  const Track = (
    <>
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </>
  );

  if (motionScale === 0) {
    return (
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">{Track}</div>
      </div>
    );
  }

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 58 / motionScale, ease: "linear", repeat: Infinity }}
      >
        {Track}
      </motion.div>
    </div>
  );
}

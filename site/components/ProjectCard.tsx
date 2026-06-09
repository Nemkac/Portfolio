"use client";

/* A project card. Renders as the revealing anchor itself (the
   original markup put .project-card on the <a>), linking to the
   case-study route. */

import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";
import { CASE_STUDIES, type ProjectCard as ProjectCardData } from "./projects-data";

export function ProjectCard({
  card,
  delay = 0,
  style,
}: {
  card: ProjectCardData;
  delay?: number;
  style?: CSSProperties;
}) {
  // Tech chips are sourced from the case study's stack so the card and the
  // project page always show the same technologies (single source of truth).
  const tags = CASE_STUDIES[card.slug]?.stack ?? card.tags ?? [];
  return (
    <Reveal
      as="a"
      href={`/case-study?p=${card.slug}`}
      className={`project-card ${card.span}`}
      delay={delay}
      style={style}
    >
      <div className="project-thumb" style={card.thumbStyle}>
        {card.image ? (
          <Image
            className="thumb-img"
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 900px) 100vw, 640px"
          />
        ) : (
          <div className={`thumb-art ${card.art}`} />
        )}
        <div className="thumb-label">
          <span className="idx">{card.idx}</span>
          <span>{card.when}</span>
        </div>
      </div>
      <div className="project-meta">
        <span>{card.metaLeft}</span>
        <span className="dot" />
        <span>{card.metaRight}</span>
      </div>
      <div className="project-title">
        {card.title} <span className="arr">↗</span>
      </div>
      <p className="project-blurb">{card.blurb}</p>
      <div className="project-tags">
        {tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </Reveal>
  );
}

import type { CSSProperties } from "react";
import { Reveal } from "../Reveal";

const ROWS = [
  {
    when: "Jul 2024 — Present",
    title: "Software Engineer",
    co: "Vega IT",
    body: "Large-scale apps across internal tools, travel-compliance, and medical-device platforms used by hundreds daily. Mentoring, technical interviews, onboarding new engineers. Owning code reviews and architecture decisions for the frontend.",
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "Mentorship"],
    location: "Novi Sad — Hybrid",
  },
  {
    when: "Feb 2024 — Dec 2025",
    title: "Lead Frontend Engineer",
    co: "Fabricus.tech",
    body: "Architected enterprise applications for hundreds of daily users. Led UI/UX direction and agile delivery across the frontend team. Hands-on with the code; pushed back on the spec when the spec was wrong.",
    tags: ["Angular", "TypeScript", "Firebase", "Architecture", "Leadership"],
    location: "Novi Sad — Remote",
  },
  {
    when: "Jan 2023 — Feb 2024",
    title: "Frontend Engineer",
    co: "Fabricus.tech · One of the first four",
    body: "Joined as one of the first four employees. Owned internal platforms end-to-end — full development lifecycle from kickoff to production. Grew into the lead role over the year.",
    tags: ["Angular", "React", "Node.js", "0-to-1"],
    location: "Novi Sad — Remote",
  },
];

const monoMeta: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "12px",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--ink-3)",
};

export function Experience() {
  return (
    <section className="section shell" id="experience">
      <div className="section-head">
        <Reveal as="span" className="eyebrow">
          Experience — 04
        </Reveal>
        <Reveal as="h2" delay={80}>
          Where I&apos;ve <span className="serif">been.</span>
        </Reveal>
        <Reveal as="span" className="meta" delay={160}>
          2023 → Now
        </Reveal>
      </div>

      <div className="timeline">
        {ROWS.map((r) => (
          <Reveal as="div" className="tl-row" key={r.title}>
            <div className="tl-when">{r.when}</div>
            <div className="tl-main">
              <h3>{r.title}</h3>
              <div className="role-co">{r.co}</div>
              <p>{r.body}</p>
              <div className="tl-tags">
                {r.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="tl-location">{r.location}</div>
          </Reveal>
        ))}
      </div>

      <Reveal as="div" className="about-grid" style={{ marginTop: "var(--space-8)" }}>
        <div>
          <span className="eyebrow">Education</span>
          <h3 style={{ marginTop: "var(--space-3)" }}>
            Faculty of Technical Sciences <span className="serif">,</span> Novi Sad.
          </h3>
        </div>
        <div className="about-aside" style={{ maxWidth: "none" }}>
          <div>
            <div style={monoMeta}>2024 — ongoing</div>
            <div style={{ fontSize: "18px", color: "var(--ink)", marginTop: "4px" }}>
              MSc, Information Engineering &amp; Data Science
            </div>
          </div>
          <div>
            <div style={monoMeta}>2020 — 2024</div>
            <div style={{ fontSize: "18px", color: "var(--ink)", marginTop: "4px" }}>
              BSc, Information Engineering
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

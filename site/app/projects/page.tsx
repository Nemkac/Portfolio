"use client";

import Link from "next/link";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECT_CARDS, FILTERS } from "@/components/projects-data";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects", active: true },
  { href: "/#contact", label: "Contact" },
];

const DELAYS = [0, 80, 0, 80, 0, 80, 0, 80];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Nav links={NAV_LINKS} />

      <main>
        <section className="shell page-head">
          <Reveal as="span" className="eyebrow">
            Index · Projects
          </Reveal>
          <Reveal as="h1" delay={80} style={{ marginTop: "var(--space-3)" }}>
            Everything I&apos;ve
            <br />
            <span className="serif" style={{ color: "var(--accent)" }}>
              shipped.
            </span>
          </Reveal>
          <Reveal as="p" className="lead" delay={180}>
            A working catalog. Some of it is production work for clients with real users, some of it
            was built in a weekend for a hackathon. All of it taught me something.
          </Reveal>

          <Reveal
            as="div"
            className="filters"
            delay={260}
            role="tablist"
            aria-label="Filter projects"
          >
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                className={`filter-btn${filter === f.value ? " is-active" : ""}`}
                onClick={() => setFilter(f.value)}
              >
                {f.label} <span style={{ opacity: 0.5, marginLeft: "6px" }}>{f.count}</span>
              </button>
            ))}
          </Reveal>
        </section>

        <section className="section shell" style={{ paddingTop: "var(--space-7)" }}>
          <div className="projects" id="project-list">
            {PROJECT_CARDS.map((card, i) => {
              const visible = filter === "all" || (card.cats ?? []).includes(filter);
              return (
                <ProjectCard
                  key={card.slug}
                  card={card}
                  delay={DELAYS[i]}
                  style={visible ? undefined : { display: "none" }}
                />
              );
            })}
          </div>
        </section>
      </main>

      <Footer
        colName={
          <>
            Let&apos;s
            <br />
            talk<span className="serif">.</span>
          </>
        }
        meta={[
          {
            label: "Email",
            value: (
              <a
                href="mailto:nemanjatodorovic132002002@gmail.com"
                style={{ color: "var(--ink)", borderBottom: "1px solid var(--border)" }}
              >
                nemanjatodorovic132002002@gmail.com
              </a>
            ),
          },
          { label: "Find me", value: "LinkedIn · GitHub · Medium" },
        ]}
        bottomLeft="© 2026 — Designed & built by NT"
        bottomRight={
          <Link href="/" style={{ color: "inherit" }}>
            ← Back to home
          </Link>
        }
      />
    </>
  );
}

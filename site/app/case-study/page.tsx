"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Btn } from "@/components/Btn";
import { CASE_STUDIES, CASE_STUDY_ORDER } from "@/components/projects-data";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

function CaseStudyContent() {
  const params = useSearchParams();
  const slug = params.get("p") || "courier";
  const p = CASE_STUDIES[slug] || CASE_STUDIES.courier;

  useEffect(() => {
    document.title = `${p.title} — Nemanja Todorović`;
  }, [p.title]);

  const i = CASE_STUDY_ORDER.indexOf(slug in CASE_STUDIES ? slug : "courier");
  const len = CASE_STUDY_ORDER.length;
  const prev = CASE_STUDY_ORDER[(i - 1 + len) % len];
  const next = CASE_STUDY_ORDER[(i + 1) % len];

  return (
    <>
      <Nav links={NAV_LINKS} />

      <main>
        <section className="shell cs-hero">
          <Reveal className="cs-eyebrow">
            <Link href="/projects" className="eyebrow" style={{ color: "var(--ink-2)" }}>
              ← Back to all projects
            </Link>
            <span className="chip">
              <span className="dot" /> <span>{p.type}</span>
            </span>
          </Reveal>

          <Reveal as="h1" className="cs-title" delay={80}>
            {p.title}
          </Reveal>
          <Reveal as="p" className="cs-lede" delay={160}>
            {p.lede}
          </Reveal>

          <Reveal as="dl" className="cs-meta" delay={240}>
            <div>
              <dt>Role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Client</dt>
              <dd>{p.client}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{p.when}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{p.status}</dd>
            </div>
          </Reveal>

          <Reveal className="cs-cover" delay={320}>
            {p.image ? (
              <Image
                className="thumb-img"
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 880px) 100vw, 1100px"
              />
            ) : (
              <div className={`thumb-art ${p.art}`} />
            )}
            <div className="thumb-label">
              <span className="idx">{p.label}</span>
              <span>{p.meta}</span>
            </div>
          </Reveal>
        </section>

        <section className="shell">
          <div className="cs-body-grid">
            <Reveal as="aside" className="cs-side">
              <div>
                <h4>Stack</h4>
                <ul>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Links</h4>
                <ul>
                  {p.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener"
                        style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}
                      >
                        <span>{l.label}</span>
                        <span style={{ color: "var(--ink-3)" }}>↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="cs-block">
                <span className="label">The problem</span>
                <h2>
                  <span className="serif">Where</span> we started.
                </h2>
                <p>{p.problem}</p>
              </div>

              <div className="cs-block">
                <span className="label">My role</span>
                <h2>
                  <span className="serif">What</span> I did.
                </h2>
                <p>{p.roleText}</p>
              </div>

              <div className="cs-block">
                <span className="label">Outcome</span>
                <h2>
                  <span className="serif">How</span> it landed.
                </h2>
                <p>{p.outcome}</p>
              </div>

              <div className="cs-cta">
                <p>
                  {p.cta?.text ??
                    "The full write-up lives on Medium — the longer story, the screenshots, the lessons."}
                </p>
                <Btn
                  href={p.cta?.url ?? "https://medium.com/@nemanjatodorovic132002002"}
                  variant="primary"
                  external
                >
                  {p.cta?.label ?? "Read the full case study"} <span className="arr">↗</span>
                </Btn>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="shell" style={{ paddingBottom: "var(--space-9)" }}>
          <nav className="cs-nav" aria-label="Other projects">
            <Link className="prev" href={`/case-study?p=${prev}`}>
              <span className="label">← Previous project</span>
              <span className="title">{CASE_STUDIES[prev].title}</span>
            </Link>
            <Link className="next" href={`/case-study?p=${next}`}>
              <span className="label">Next project →</span>
              <span className="title">{CASE_STUDIES[next].title}</span>
            </Link>
          </nav>
        </section>
      </main>

      <Footer
        colName={
          <>
            Want one
            <br />
            like it<span className="serif">?</span>
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
          { label: "Status", value: "Open to remote roles" },
        ]}
        bottomLeft="© 2026 — Designed & built by NT"
        bottomRight={
          <Link href="/projects" style={{ color: "inherit" }}>
            ← All projects
          </Link>
        }
      />
    </>
  );
}

export default function CaseStudyPage() {
  return (
    <Suspense fallback={null}>
      <CaseStudyContent />
    </Suspense>
  );
}

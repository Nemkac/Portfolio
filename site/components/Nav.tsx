"use client";

/* ───────────────────────────────────────────────────────────
   Nav — fixed header. Adds .is-scrolled past 10px of scroll
   (mirrors app.js) and, on the landing page, scroll-spies the
   in-page sections to highlight the active link via an
   IntersectionObserver. Links are passed in so each page can
   render the right set/active state.
   ─────────────────────────────────────────────────────────── */

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export type NavLink = { href: string; label: string; active?: boolean };

function NavAnchor({ href, label, active }: NavLink) {
  const className = active ? "is-active" : undefined;
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Nav({
  links,
  trackActive = false,
  showAllProjects = false,
}: {
  links: NavLink[];
  trackActive?: boolean;
  showAllProjects?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!trackActive) return;
    const hashLinks = links.filter((l) => l.href.startsWith("#"));
    const sections = hashLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [trackActive, links]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <Link href="/" className="brand" aria-label="Home">
        <span className="brand-mark">
          <span>NT</span>
        </span>
        <span className="brand-name">
          Nemanja Todorović <span className="role">/ Software Engineer</span>
        </span>
      </Link>
      <nav>
        <ul className="nav-links">
          {links.map((l) => {
            const active = l.active || (trackActive && l.href === `#${activeId}`);
            return (
              <li key={l.href}>
                <NavAnchor href={l.href} label={l.label} active={active} />
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="nav-right">
        {showAllProjects && (
          <Link
            href="/projects"
            className="nav-mobile-link"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ink-2)",
            }}
          >
            All projects →
          </Link>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}

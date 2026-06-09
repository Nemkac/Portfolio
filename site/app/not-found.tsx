import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Btn } from "@/components/Btn";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <>
      <Nav links={NAV_LINKS} />

      <main className="fourohfour">
        <div>
          <Reveal as="span" className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
            Error · Lost in the routing layer
          </Reveal>
          <Reveal as="div" className="big" delay={100}>
            4<span className="serif">0</span>4
          </Reveal>
          <Reveal as="p" className="lead" delay={200} style={{ marginLeft: "auto", marginRight: "auto" }}>
            This page didn&apos;t make it through the build. The link probably rotted, or the URL is
            off by a character. Either way — let&apos;s get you somewhere useful.
          </Reveal>
          <Reveal
            as="div"
            className="hero-actions"
            delay={280}
            style={{ justifyContent: "center", marginTop: "var(--space-6)" }}
          >
            <Btn href="/" variant="primary">
              Back to home <span className="arr">→</span>
            </Btn>
            <Btn href="/projects">
              All projects <span className="arr">↗</span>
            </Btn>
          </Reveal>
        </div>
      </main>

      <footer className="foot">
        <div className="shell">
          <div className="foot-bottom" style={{ borderTop: 0 }}>
            <span>© 2026 — NT</span>
            <span>
              If something on the site is broken,{" "}
              <a
                href="mailto:nemanjatodorovic132002002@gmail.com"
                style={{ color: "var(--ink)", borderBottom: "1px solid var(--border)" }}
              >
                let me know
              </a>
              .
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

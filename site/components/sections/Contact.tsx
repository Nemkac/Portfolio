import { Reveal } from "../Reveal";

const LINKS = [
  { label: "Email", value: "nemanjatodorovic132002002@gmail.com", href: "mailto:nemanjatodorovic132002002@gmail.com", external: false },
  { label: "LinkedIn", value: "/in/nemanja-todorovic13200", href: "https://www.linkedin.com/in/nemanja-todorovic13200/", external: true },
  { label: "GitHub", value: "@Nemkac", href: "https://github.com/Nemkac", external: true },
  {
    label: "Medium",
    value: "@nemanjatodorovic132002002",
    href: "https://medium.com/@nemanjatodorovic132002002",
    external: true,
  },
];

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <div className="contact-grid">
          <Reveal>
            <span className="eyebrow">Contact — 06</span>
            <h2 style={{ marginTop: "var(--space-4)" }}>
              Let&apos;s make
              <br />
              <span className="serif">something</span> good.
            </h2>
            <p className="lead" style={{ marginTop: "var(--space-5)", color: "var(--ink-2)" }}>
              Available for remote, B2B-contractor engagements — no visa, no work authorization
              required. I&apos;m based in Novi Sad (GMT+1) and overlap comfortably with most of EMEA
              and the US East Coast.
            </p>
          </Reveal>
          <Reveal className="contact-info" delay={120}>
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
              >
                <span className="label">{l.label}</span>
                <span>{l.value}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

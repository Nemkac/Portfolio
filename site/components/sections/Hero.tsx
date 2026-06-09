import { Reveal } from "../Reveal";
import { Rise } from "../Rise";
import { Btn } from "../Btn";

export function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-meta">
        <span className="chip">
          <span className="dot" /> Available for remote · B2B
        </span>
        <span className="eyebrow">Novi Sad, Serbia · GMT+1</span>
      </div>

      <h1 aria-label="Software engineer. Frontend-leaning. Full-stack capable.">
        <Rise delay={0}>Software</Rise>
        <Rise delay={80}>
          engineer
          <span className="serif" style={{ color: "var(--accent)" }}>
            .
          </span>
        </Rise>
        <Rise delay={160} className="serif" style={{ color: "var(--ink-2)" }}>
          Frontend-leaning.
        </Rise>
        <Rise delay={240}>Full-stack capable.</Rise>
      </h1>

      <div className="hero-sub">
        <Reveal delay={400}>
          <div className="hero-portrait" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/portrait.png" alt="Portrait of Nemanja Todorović" loading="eager" />
          </div>
        </Reveal>

        <Reveal delay={500}>
          <p className="lead">
            I build large-scale web apps that people actually want to use. Four years across
            HealthTech, logistics, and fintech — most of it leading the frontend, questioning the
            design, and owning the result.
          </p>
          <div className="hero-actions">
            <Btn href="#work" variant="primary">
              View work <span className="arr">↘</span>
            </Btn>
            <Btn href="#contact">
              Get in touch <span className="arr">→</span>
            </Btn>
            <Btn href="/NemanjaTodorovicResume.pdf" variant="ghost" download>
              Résumé (PDF)
            </Btn>
          </div>
        </Reveal>
      </div>

      <Reveal as="dl" className="hero-stats" delay={700}>
        <div>
          <dt>Experience</dt>
          <dd>
            4<span className="serif">+</span> years
          </dd>
        </div>
        <div>
          <dt>Projects shipped</dt>
          <dd>
            20<span className="serif">+</span>
          </dd>
        </div>
        <div>
          <dt>Currently</dt>
          <dd>Vega IT</dd>
        </div>
        <div>
          <dt>Open to</dt>
          <dd>Remote roles</dd>
        </div>
      </Reveal>
    </section>
  );
}

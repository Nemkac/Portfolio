import { Reveal } from "../Reveal";

export function About() {
  return (
    <section className="section shell" id="about">
      <Reveal as="span" className="eyebrow">
        About — 01
      </Reveal>
      <div className="about-grid" style={{ marginTop: "var(--space-5)" }}>
        <Reveal delay={100}>
          <h2>
            A short <span className="serif">story.</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <div className="about-body">
            <p>
              I started as a full-stack engineer and slowly leaned toward the{" "}
              <span className="serif">frontend</span> — pulled by an instinct for how software looks
              and feels.
            </p>
            <p>
              That instinct goes back to my teens, making YouTube graphics for creators in Serbia.
              Years later, it&apos;s still the same job: shape a thing until it works{" "}
              <span className="serif">and</span> feels right.
            </p>
            <p>
              I joined an early-stage startup as one of the first four employees, grew into Lead
              Frontend, then moved to Vega IT. I don&apos;t just implement designs — I question,
              shape, and own them.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        className="about-grid"
        style={{
          marginTop: "var(--space-7)",
          borderTop: "1px solid var(--border-2)",
          paddingTop: "var(--space-6)",
        }}
      >
        <div />
        <Reveal className="about-aside">
          <div>
            <span className="eyebrow" style={{ color: "var(--accent-ink)" }}>
              Principles
            </span>
            <p style={{ marginTop: "var(--space-3)", color: "var(--ink)" }}>
              Care about the <span className="serif">tiny </span> details - they compound. Push back
              on requirements that don&apos;t add up. Choose the boring tool when boring is the right
              answer. Read the design like the spec it is.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

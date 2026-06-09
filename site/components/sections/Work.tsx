import { Reveal } from "../Reveal";
import { ProjectCard } from "../ProjectCard";
import { WORK_CARDS } from "../projects-data";

const DELAYS = [0, 80, 0, 80];

export function Work() {
  return (
    <section className="section shell" id="work">
      <div className="section-head">
        <Reveal as="span" className="eyebrow">
          Selected work — 03
        </Reveal>
        <Reveal as="h2" delay={80}>
          Things I&apos;m <span className="serif">proud</span> of.
        </Reveal>
        <Reveal
          as="a"
          href="/projects"
          className="meta"
          delay={160}
          style={{ color: "var(--ink)", textDecoration: "none" }}
        >
          All projects →
        </Reveal>
      </div>

      <div className="projects">
        {WORK_CARDS.map((card, i) => (
          <ProjectCard key={card.slug} card={card} delay={DELAYS[i]} />
        ))}
      </div>
    </section>
  );
}

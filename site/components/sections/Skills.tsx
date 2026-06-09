import { Reveal } from "../Reveal";

const GROUPS: { title: string; items: string[]; delay: number }[] = [
  {
    title: "Frontend",
    items: ["React", "Angular", "Next.js", "React Native", "TypeScript", "TailwindCSS", "TanStack", "shadcn", "PrimeNG"],
    delay: 0,
  },
  { title: "Backend", items: ["Node.js", "NestJS", "Java / Spring Boot", ".NET", "Golang", "Express"], delay: 80 },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Neo4j", "Redis"], delay: 160 },
  {
    title: "Cloud & Tools",
    items: ["AWS", "Azure", "Git / GitHub", "Stripe", "RabbitMQ", "Figma", "Jira", "Postman"],
    delay: 240,
  },
  { title: "Web3", items: ["Solidity", "Web3.js", "Ethers.js", "IPFS", "Smart Contracts"], delay: 320 },
];

export function Skills() {
  return (
    <section className="section shell" id="skills">
      <div className="section-head">
        <Reveal as="span" className="eyebrow">
          Skills — 02
        </Reveal>
        <Reveal as="h2" delay={80}>
          A working <span className="serif">vocabulary.</span>
        </Reveal>
        <Reveal as="span" className="meta" delay={160}>
          What I reach for daily
        </Reveal>
      </div>

      <div className="skills-grid">
        {GROUPS.map((g) => (
          <Reveal as="div" className="skill-group" delay={g.delay} key={g.title}>
            <h4>{g.title}</h4>
            <ul>
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Reveal } from "../Reveal";

const MEDIUM = "https://medium.com/@nemanjatodorovic132002002";

const POSTS = [
  {
    when: "Case study · 8 min read",
    title: "Architecting a multi-tenant SaaS without losing your mind",
    body: "Lessons from rebuilding a logistics platform from a single-tenant prototype into a SaaS serving ten companies.",
    delay: 0,
  },
  {
    when: "Notes · 5 min read",
    title: "Why the frontend is the spec",
    body: "A short defense of frontend engineers who edit the design — and how it makes everyone's job easier.",
    delay: 80,
  },
  {
    when: "Hackathon · 6 min read",
    title: "Building PETNET in 48 hours",
    body: "What worked and what didn't when shipping a Solana-powered mobile app on a hackathon timeline.",
    delay: 160,
  },
];

export function Writing() {
  return (
    <section className="section shell" id="writing">
      <div className="section-head">
        <Reveal as="span" className="eyebrow">
          Writing — 05
        </Reveal>
        <Reveal as="h2" delay={80}>
          Notes &amp; <span className="serif">case studies.</span>
        </Reveal>
        <Reveal
          as="a"
          href={MEDIUM}
          target="_blank"
          rel="noopener"
          className="meta"
          delay={160}
          style={{ color: "var(--ink)", textDecoration: "none" }}
        >
          Read on Medium →
        </Reveal>
      </div>

      <div className="writing-grid">
        {POSTS.map((post) => (
          <Reveal
            as="a"
            key={post.title}
            href={MEDIUM}
            target="_blank"
            rel="noopener"
            className="writing-card"
            delay={post.delay}
          >
            <div className="when">{post.when}</div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <div className="read">
              Read on Medium <span className="arr">→</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <Nav links={NAV_LINKS} trackActive showAllProjects />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Writing />
      </main>

      <Contact />

      <Footer
        colName={
          <>
            Nemanja
            <br />
            Todorović<span className="serif">.</span>
          </>
        }
        meta={[
          { label: "Based", value: "Novi Sad, Serbia" },
          { label: "Status", value: "Open to remote roles" },
          { label: "Timezone", value: "GMT+1" },
        ]}
        bottomLeft="© 2026 — Designed & built by NT"
        bottomRight="v 1.0 — Last updated Jun 2026"
      />
    </>
  );
}

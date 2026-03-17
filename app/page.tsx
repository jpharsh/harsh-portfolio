import { Hero } from "@/components/sections/Hero";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Section divider */}
      <div
        className="max-w-5xl mx-auto px-6"
        aria-hidden="true"
      >
        <div style={{ height: "1px", background: "var(--border-subtle)" }} />
      </div>

      <Education />

      <div className="max-w-5xl mx-auto px-6" aria-hidden="true">
        <div style={{ height: "1px", background: "var(--border-subtle)" }} />
      </div>

      <Experience />

      <div className="max-w-5xl mx-auto px-6" aria-hidden="true">
        <div style={{ height: "1px", background: "var(--border-subtle)" }} />
      </div>

      <Skills />
    </>
  );
}

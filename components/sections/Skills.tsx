"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const skills = {
  Languages: ["TypeScript", "Python", "JavaScript", "Java", "SQL", "C", "HTML", "CSS"],
  Frameworks: ["Next.js", "React", "Tailwind CSS", "React Native"],
  Tools: ["Git", "Docker", "Linux", "Vim", "Figma", "Tableau", "Datadog", "Cursor", "Jupyter Notebook", "MySQL", "OAuth", "OpenAI API"],
  "Cloud / DevOps": ["GCP", "AWS", "GitHub Actions", "Firebase", "Postgres", "Vercel"],
  Concepts: ["REST APIs", "CI/CD", "System Design", "ML Pipelines", "Auth", "Fine-Tuning", "Prompt Engineering"],
};

const marqueeRow1 = [
  "TypeScript", "Next.js", "React", "Python", "FastAPI",
  "Docker", "PostgreSQL", "Rust", "AWS", "Tailwind CSS",
  "TypeScript", "Next.js", "React", "Python", "FastAPI",
  "Docker", "PostgreSQL", "Rust", "AWS", "Tailwind CSS",
];

const marqueeRow2 = [
  "System Design", "Git", "Linux", "Figma", "Go",
  "GitHub Actions", "Vercel", "CI/CD", "REST APIs", "Supabase",
  "System Design", "Git", "Linux", "Figma", "Go",
  "GitHub Actions", "Vercel", "CI/CD", "REST APIs", "Supabase",
];

export function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <FadeIn>
        <div className="flex items-center gap-4 mb-12">
          <span
            style={{
              fontFamily: "var(--font-code)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--accent)",
            }}
          >
            04
          </span>
          <span
            style={{
              fontFamily: "var(--font-code)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
            }}
          >
            — SKILLS
          </span>
        </div>
      </FadeIn>

      {/* Skills grid (exclude Concepts from this section) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {Object.entries(skills)
          .filter(([category]) => category !== "Concepts")
          .map(([category, items], i) => (
          <FadeIn key={category} delay={i * 0.07}>
            <div
              className="p-5 rounded-sm h-full"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-code)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  color: "var(--accent)",
                }}
              >
                {category.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2 py-1 rounded-sm text-xs transition-all duration-150 cursor-default"
                    style={{
                      fontFamily: "var(--font-code)",
                      fontSize: "11px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(0,212,255,0.3)";
                      el.style.color = "var(--accent)";
                      el.style.background = "rgba(0,212,255,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--border-subtle)";
                      el.style.color = "var(--text-secondary)";
                      el.style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Marquee divider */}
      <FadeIn>
        <div
          className="marquee-wrapper overflow-hidden py-5 -mx-6 px-6"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          {/* Row 1 - left */}
          <div className="overflow-hidden mb-3">
            <div className="flex gap-4 marquee-left whitespace-nowrap">
              {marqueeRow1.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 shrink-0"
                  style={{
                    fontFamily: "var(--font-code)",
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                  }}
                >
                  <span style={{ color: "var(--accent)", fontSize: "6px" }}>◆</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 - right */}
          <div className="overflow-hidden">
            <div className="flex gap-4 marquee-right whitespace-nowrap">
              {marqueeRow2.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 shrink-0"
                  style={{
                    fontFamily: "var(--font-code)",
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                  }}
                >
                  <span style={{ color: "var(--border-mid)", fontSize: "6px" }}>◆</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

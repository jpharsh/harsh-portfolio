"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";

const education = {
  school: "Georgia Institute of Technology",
  degree: "B.S. Computer Science",
  period: "2022 — 2026",
  gpa: "3.4 / 4.0",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "Systems Programming",
    "Machine Learning",
    "Artificial Intelligence",
    "Digital Design",
    "Prototyping",
    "Computer Networks"
  ],
  organizations: ["AI @ GT", "Klaus Startup", "Teaching Assistant"]
};

export function Education() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
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
            02
          </span>
          <span
            style={{
              fontFamily: "var(--font-code)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
            }}
          >
            — EDUCATION
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div
          className="relative p-8 rounded-sm"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {/* Corner bracket top-left */}
          <div
            className="absolute top-0 left-0 w-5 h-5"
            style={{
              borderTop: "1px solid var(--accent)",
              borderLeft: "1px solid var(--accent)",
              opacity: 0.5,
            }}
            aria-hidden="true"
          />
          {/* Corner bracket bottom-right */}
          <div
            className="absolute bottom-0 right-0 w-5 h-5"
            style={{
              borderBottom: "1px solid var(--accent)",
              borderRight: "1px solid var(--accent)",
              opacity: 0.5,
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                }}
              >
                {education.school}
              </h3>
              <p
                className="mt-1"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                }}
              >
                {education.degree}
              </p>
            </div>
            <div className="text-right flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "var(--font-code)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                }}
              >
                {education.period}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-code)",
                  fontSize: "12px",
                  color: "var(--accent)",
                }}
              >
                {/*GPA {education.gpa}*/}
              </span>
            </div>
          </div>

          <div
            className="pt-6 mt-6"
            style={{ borderTop: "1px solid var(--border-subtle)" }}
          >
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-code)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "var(--text-muted)",
              }}
            >
              RELEVANT COURSEWORK
            </p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <Tag key={c} label={c} />
              ))}
            </div>
          </div>

          {education.organizations.length > 0 && (
            <div
              className="pt-6 mt-6"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              <p
                className="mb-3"
                style={{
                  fontFamily: "var(--font-code)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  color: "var(--text-muted)",
                }}
              >
                ORGANIZATIONS
              </p>
              <div className="flex flex-wrap gap-2">
                {education.organizations.map((o) => (
                  <Tag key={o} label={o} accent />
                ))}
              </div>
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

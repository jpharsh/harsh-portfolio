"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";

const experiences = [
  {
    company: "Georgia Tech Administrative Services",
    role: "Data Visualization Developer",
    period: "Apr 2025 - Dec 2025",
    bullets: [
      "Designed and developed interactive Tableau dashboards to visualize service desk pipeline data, enabling stakeholders to monitor performance, trends, and SLA health in real time across 10,000+ records",
      "Built a Next.js homepage for the Administrative Services Data team, serving as a hub for data tools and documentation.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Tableau"],
  },
  {
    company: "Equifax",
    role: "AI/ML Intern",
    period: "May 2025 — Aug 2025",
    bullets: [
      "Analyzed infrastructure performance and utilization data to inform capacity planning and capital allocation decisions, identifying $200K+ in annual cost savings.",
      "Partnered with engineering and platform teams to evaluate performance tradeoffs and operational constraints, supporting roadmap decisions for system optimization",
      "Researched and evaluated time-series ML models and agentic AI approaches for proactive monitoring, contributing to discussions on automated system health and alerting solution",
    ],
    tech: ["Google Cloud", "Datadog", "Python", "scikit-learn", "NumPy"],
  },
  {
    company: "Cognizant",
    role: "Generative AI Extern",
    period: "Jun 2024 - Aug 2024",
    bullets: [
      "Evaluated and compared multiple CNN architectures for image recognition, improving classification performance by 15% through data-driven model selection",
      "Applied parameter-efficient fine-tuning techniques to HuggingFace NLP models, balancing performance gains with reduced training time and resource usage",
    ],
    tech: ["Python", "PyTorch", "scikit-learn", "Jupyter Notebook"],
  },
];

export function Experience() {
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
            03
          </span>
          <span
            style={{
              fontFamily: "var(--font-code)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
            }}
          >
            — EXPERIENCE
          </span>
        </div>
      </FadeIn>

      <div className="relative">
        {/* Timeline vertical line */}
        <div
          className="absolute left-0 top-3 bottom-3 w-px hidden sm:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--border-accent), transparent)",
            opacity: 0.5,
          }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-10 sm:pl-10">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative group">
                {/* Timeline dot */}
                <div
                  className="absolute -left-10 top-1.5 w-2 h-2 rounded-full hidden sm:block transition-all duration-200 group-hover:scale-150"
                  style={{
                    background: "var(--bg-primary)",
                    border: "1px solid var(--accent)",
                    boxShadow: "0 0 8px rgba(0,212,255,0.3)",
                  }}
                  aria-hidden="true"
                />

                <div
                  className="p-6 rounded-sm transition-all duration-200"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(0,212,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border-subtle)";
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          lineHeight: 1.3,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="mt-0.5"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          color: "var(--accent)",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-code)",
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3 items-start"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            marginTop: "6px",
                            flexShrink: 0,
                            fontSize: "8px",
                          }}
                        >
                          ◆
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Tag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

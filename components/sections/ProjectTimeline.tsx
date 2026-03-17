"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";

export const timelineProjects = [
  {
    year: "2025",
    name: "Musician Match - UGAHacksX Best Use of Auth0 Winner",
    category: "Hackathon",
    description: "A platform that provides a unique way for artists to find like-minded musicians and build connections based on their passion for music.",
    tech: ["Auth0", "Firebase", "Flask", "React"],
    github: "https://github.com/rithvikpang/UGAHacksX",
    demo: "https://devpost.com/software/musician-match",
  },
  {
    year: "2025",
    name: "Cinema E-Booking Website",
    category: "Academic Project",
    description: "Netflix meets AMC, an online movie booking website. Team lead for class project.",
    tech: ["React", "Node.js", "AWS RDS", "MySQL"],
    github: "https://github.com/jpharsh/cinema_ebooking_website",
    demo: null,
  },
  {
    year: "2024",
    name: "Lightweight PEFT",
    category: "Work Project",
    description: "Applied parameter efficient fine-tuning to the distilbert-base-uncased model to improve sentiment analysis.",
    tech: ["Jupyter Notebook", "Conda"],
    github: "https://github.com/jpharsh/lightweight_peft_project",
    demo: null,
  },
  {
    year: "2024",
    name: "Dog Recognition Model",
    category: "Work Project",
    description: "Image recognition model that identifies dog breeds.",
    tech: ["Jupyter Notebook", "Conda"],
    github: "https://github.com/jpharsh/dog_recognition",
    demo: null,
  },
  {
    year: "2023",
    name: "AdventurAI",
    category: "Hackathon",
    description: "A swipe-based travel discovery platform that lets users explore personally-curated daytrips within the U.S.",
    tech: ["Jupyter Notebook", "Conda"],
    github: null,
    demo: "https://devpost.com/software/adventurai",
  },
];

const comingSoon = [
  { codename: "PROJECT \"3000\"", hint: "You know who I am." },
  { codename: "PROJECT \"y!\"", hint: "Because why not?" },
  { codename: "PROJECT \"Carviz\"", hint: "Evaluating computer vision in autonomous driving." },
];

export function ProjectTimeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
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
            — ALL PROJECTS
          </span>
        </div>
      </FadeIn>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-0 top-3 bottom-3 w-px hidden sm:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--border-accent), transparent)",
            opacity: 0.4,
          }}
          aria-hidden="true"
        />

        <div className="flex flex-col sm:pl-10">
          {timelineProjects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="relative group py-5" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                {/* Timeline dot */}
                <div
                  className="absolute -left-10 top-7 w-1.5 h-1.5 rounded-full hidden sm:block transition-all duration-200 group-hover:scale-150"
                  style={{
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-mid)",
                  }}
                  aria-hidden="true"
                />

                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  {/* Year */}
                  <span
                    className="shrink-0 sm:w-12"
                    style={{
                      fontFamily: "var(--font-code)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {project.year}
                  </span>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h4
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        {project.name}
                      </h4>
                      <span
                        className="px-1.5 py-0.5 rounded-sm"
                        style={{
                          fontFamily: "var(--font-code)",
                          fontSize: "9px",
                          letterSpacing: "0.08em",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <Tag key={t} label={t} />
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: "var(--font-code)",
                              fontSize: "10px",
                              letterSpacing: "0.06em",
                              color: "var(--text-muted)",
                              transition: "color 0.15s",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "var(--accent)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "var(--text-muted)")
                            }
                          >
                            GitHub ↗
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: "var(--font-code)",
                              fontSize: "10px",
                              letterSpacing: "0.06em",
                              color: "var(--text-muted)",
                              transition: "color 0.15s",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "var(--accent)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "var(--text-muted)")
                            }
                          >
                            Demo ↗
                          </a>
                        )}
                      </div>
                    </div>
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

export function ComingSoon() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <FadeIn>
        <div className="flex items-center gap-4 mb-12">
          <span
            style={{
              fontFamily: "var(--font-code)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
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
            — IN THE PIPELINE
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "var(--border-subtle)",
            }}
          />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {comingSoon.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              className="relative p-6 rounded-sm overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {/* Blurred overlay */}
              <div
                className="absolute inset-0 backdrop-blur-sm z-10"
                style={{ background: "rgba(8,8,8,0.6)" }}
                aria-hidden="true"
              />

              {/* Background content (blurred underneath) */}
              <div className="opacity-20">
                <div
                  className="h-2 w-24 rounded-sm mb-3"
                  style={{ background: "var(--border-mid)" }}
                />
                <div
                  className="h-2 w-full rounded-sm mb-2"
                  style={{ background: "var(--border-subtle)" }}
                />
                <div
                  className="h-2 w-3/4 rounded-sm"
                  style={{ background: "var(--border-subtle)" }}
                />
              </div>

              {/* Foreground content */}
              <div className="relative z-20 flex flex-col items-center justify-center py-4">
                <div
                  className="mb-3 px-3 py-1 rounded-sm flex items-center gap-2"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid var(--border-mid)",
                  }}
                >
                  <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>🔒</span>
                  <span
                    style={{
                      fontFamily: "var(--font-code)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                    }}
                  >
                    CLASSIFIED
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    letterSpacing: "0.08em",
                    textAlign: "center",
                  }}
                >
                  {item.codename}
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  {item.hint}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

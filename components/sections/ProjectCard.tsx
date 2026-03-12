"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";

export const featuredProjects = [
  {
    name: "Stack",
    status: "IN PROGRESS",
    description:
      "A mobile platform that unifies your payment cards to optimize spending and rewards automatically.",
    tech: ["React Native", "TypeScript", "AWS"],
    github: null,
    link: "https://the-stack-wallet.vercel.app",
    large: true,
  },
  {
    name: "RevSync",
    status: "IN PROGRESS",
    description:
      "The all-in-one vehicle intelligence platform. Making professional-grade performance tools accessible.",
    tech: ["React Native", "C++", "AWS"],
    github: null,
    link: "https://revsync.app",
    large: false,
  },
  {
    name: "PhenomZone",
    status: "RECENT",
    description:
      "An AI companion + fitness app built to improve physical and mental well-being for seniors and those at-risk for Alzheimer's.",
    tech: ["React Native", "C++", "AWS"],
    github: null,
    link: null,
    large: false,
  },
];

interface ProjectCardProps {
  project: (typeof featuredProjects)[0];
  large?: boolean;
  index: number;
}

export function ProjectCard({ project, large = false, index }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <div
        className="group relative h-full p-6 rounded-sm flex flex-col justify-between transition-all duration-250"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-subtle)",
          minHeight: large ? "280px" : "210px",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(0,212,255,0.25)";
          el.style.boxShadow = "0 0 32px rgba(0,212,255,0.06)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "var(--border-subtle)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Corner accents */}
        <div
          className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity duration-200"
          style={{ borderTop: "1px solid var(--accent)", borderLeft: "1px solid var(--accent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity duration-200"
          style={{ borderBottom: "1px solid var(--accent)", borderRight: "1px solid var(--accent)" }}
          aria-hidden="true"
        />

        <div>
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="pulse-dot w-1.5 h-1.5 rounded-full"
              style={{
                background:
                  project.status === "IN PROGRESS" ? "var(--accent)" : "#888",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-code)",
                fontSize: "9px",
                letterSpacing: "0.12em",
                color:
                  project.status === "IN PROGRESS"
                    ? "var(--accent)"
                    : "var(--text-muted)",
              }}
            >
              {project.status}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: large ? "22px" : "16px",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.2,
              marginBottom: "10px",
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
            }}
          >
            {project.description}
          </p>
        </div>

        <div className="mt-5">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-code)",
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  color: "var(--text-secondary)",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                GitHub ↗
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-code)",
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  color: "var(--text-secondary)",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                Link ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard, featuredProjects } from "@/components/sections/ProjectCard";
import { ProjectTimeline, ComingSoon } from "@/components/sections/ProjectTimeline";

export default function ProjectsPage() {
  const [large, ...rest] = featuredProjects;

  return (
    <div style={{ paddingTop: "96px" }}>
      {/* Page header */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <FadeIn>
          <div className="flex items-center gap-4 mb-6">
            <span
              style={{
                fontFamily: "var(--font-code)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                color: "var(--accent)",
              }}
            >
              01
            </span>
            <span
              style={{
                fontFamily: "var(--font-code)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                color: "var(--text-muted)",
              }}
            >
              — FEATURED / RECENT
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Projects
          </h1>
          <p
            className="mt-4 max-w-md"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            What I&apos;ve built, shipped, and learned from. More to come.
          </p>
        </FadeIn>
      </div>

      {/* Featured — asymmetric grid */}
      <div className="max-w-5xl mx-auto px-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Large card */}
          <div className="lg:col-span-3">
            <ProjectCard project={large} large={true} index={0} />
          </div>

          {/* Two smaller cards stacked */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i + 1} />
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="max-w-5xl mx-auto px-6 my-8" aria-hidden="true">
        <div style={{ height: "1px", background: "var(--border-subtle)" }} />
      </div>

      <ProjectTimeline />

      <div className="max-w-5xl mx-auto px-6" aria-hidden="true">
        <div style={{ height: "1px", background: "var(--border-subtle)" }} />
      </div>

      <ComingSoon />
    </div>
  );
}

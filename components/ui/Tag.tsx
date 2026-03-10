"use client";

interface TagProps {
  label: string;
  accent?: boolean;
}

export function Tag({ label, accent = false }: TagProps) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-xs transition-colors duration-150"
      style={{
        fontFamily: "var(--font-code)",
        fontSize: "10px",
        letterSpacing: "0.06em",
        background: accent ? "rgba(0,212,255,0.08)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${accent ? "rgba(0,212,255,0.25)" : "var(--border-subtle)"}`,
        color: accent ? "var(--accent)" : "var(--text-secondary)",
      }}
    >
      {label}
    </span>
  );
}

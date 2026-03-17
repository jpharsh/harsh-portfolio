"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="w-full mt-32 px-6 py-8"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          style={{
            fontFamily: "var(--font-code)",
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
          }}
        >
          HARSHAVARDHAN JAYAKUMAR · {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/jpharsh" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/harshavardhan-jayakumar/" },
            { label: "Email", href: "jp.harsha@outlook.com" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150"
              style={{
                fontFamily: "var(--font-code)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

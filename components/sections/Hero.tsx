"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Student", "Software Engineer", "Builder", "Problem Solver"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center hud-grid overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Corner decorations */}
      <div
        className="absolute top-8 left-8 w-16 h-16 opacity-20"
        style={{
          borderTop: "1px solid var(--accent)",
          borderLeft: "1px solid var(--accent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 opacity-20"
        style={{
          borderBottom: "1px solid var(--accent)",
          borderRight: "1px solid var(--accent)",
        }}
        aria-hidden="true"
      />

      {/* Accent glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* System label */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex items-center gap-3"
        >
          <span
            className="pulse-dot w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          <span
            style={{
              fontFamily: "var(--font-code)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "var(--accent)",
            }}
          >
            SYSTEM ONLINE · v1.0
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(52px, 9vw, 96px)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          Harshavardhan Jayakumar
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-4 flex items-center gap-2"
          style={{ minHeight: "36px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-code)",
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "var(--text-secondary)",
              letterSpacing: "0.04em",
            }}
          >
            {displayed}
          </span>
          <span
            className="w-0.5 h-5 inline-block"
            style={{
              background: "var(--accent)",
              animation: "pulse-dot 1s step-end infinite",
            }}
          />
        </motion.div>

        {/* Bio line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 max-w-lg"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
          }}
        >
          I build things. Sometimes, they even work.
        </motion.p>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-4 items-center"
        >
          {[
            { label: "GitHub", href: "https://github.com/jpharsh", icon: "↗" },
            { label: "LinkedIn", href: "https://linkedin.com/in/harshavardhan-jayakumar/", icon: "↗" },
            { label: "Email", href: "jp.harsha@outlook.com", icon: "✉" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors duration-150"
              style={{
                fontFamily: "var(--font-code)",
                fontSize: "12px",
                letterSpacing: "0.06em",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              <span>{link.icon}</span>
              <span
                className="relative"
                style={{
                  paddingBottom: "1px",
                  borderBottom: "1px solid transparent",
                  transition: "border-color 0.15s",
                }}
              >
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded"
          style={{
            background: "rgba(0,212,255,0.06)",
            border: "1px solid rgba(0,212,255,0.15)",
          }}
        >
          <span
            className="pulse-dot w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          <span
            style={{
              fontFamily: "var(--font-code)",
              fontSize: "10px",
              letterSpacing: "0.1em",
              color: "var(--accent)",
            }}
          >
            OPEN TO FULL-TIME · [Atlanta, GA]
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-code)",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "var(--text-muted)",
          }}
        >
          SCROLL
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, var(--border-mid), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

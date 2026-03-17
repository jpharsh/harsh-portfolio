"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 80);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 transition-all duration-500"
      style={{
        transform: hidden ? "translateY(-110%)" : "translateY(0)",
      }}
    >
      <div
        className="flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10, 10, 10, 0.85)"
            : "rgba(10, 10, 10, 0.6)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${scrolled ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.06)"}`,
          boxShadow: scrolled
            ? "0 0 0 1px rgba(0,212,255,0.08), 0 8px 32px rgba(0,0,0,0.4)"
            : "none",
        }}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-5 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                fontFamily: "var(--font-code)",
                fontSize: "12px",
                letterSpacing: "0.06em",
                color: isActive ? "#000" : "var(--text-secondary)",
                background: isActive ? "var(--accent)" : "transparent",
                fontWeight: isActive ? "500" : "400",
              }}
            >
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "0 0 16px rgba(0,212,255,0.5)",
                    pointerEvents: "none",
                  }}
                />
              )}
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

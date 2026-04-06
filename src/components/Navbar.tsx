"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[rgba(244,239,230,0.92)] shadow-[0_18px_50px_rgba(20,26,37,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-[var(--color-bg)] transition-colors group-hover:bg-[var(--color-accent-strong)]">
            TK
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)] sm:block">
            Tugay Kapucu
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  active === link.href.replace("#", "")
                    ? "bg-[var(--color-surface)] text-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              href="/cv"
              className="ml-2 rounded-full border border-[var(--color-text)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition-all hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"
            >
              CV
            </Link>
          </li>
        </ul>

        <button
          className="rounded-lg p-2 text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-surface)] hover:text-[var(--color-text)] md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="flex flex-col gap-1 border-b border-[var(--color-border)] bg-[rgba(244,239,230,0.96)] px-6 py-4 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${
                active === link.href.replace("#", "")
                  ? "bg-[var(--color-surface)] text-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/cv"
            className="mt-1 rounded-full border border-[var(--color-text)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]"
          >
            View CV
          </Link>
        </div>
      )}
    </header>
  );
}

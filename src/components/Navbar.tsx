"use client";

import Link from "next/link";
import Image from "next/image";
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
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[rgba(8,14,26,0.90)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex cursor-pointer items-center gap-3"
          aria-label="Back to top"
        >
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/TK_Logo.png"
              alt="TK"
              width={36}
              height={36}
              className="h-9 w-9 object-cover transition-all duration-300 group-hover:scale-110"
              style={{ filter: "hue-rotate(190deg) saturate(120%) brightness(1.1)" }}
            />
          </div>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors group-hover:text-white sm:block">
            Tugay Kapucu
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  active === link.href.replace("#", "")
                    ? "bg-white/8 text-[#60A5FA]"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              href="/cv"
              className="ml-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              CV
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="cursor-pointer rounded-lg p-2 text-white/50 transition-all hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="flex flex-col gap-1 border-b border-white/8 bg-[rgba(8,14,26,0.96)] px-6 py-4 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${
                active === link.href.replace("#", "")
                  ? "bg-white/8 text-[#60A5FA]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/cv"
            className="mt-1 rounded-full border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white/80"
          >
            View CV
          </Link>
        </div>
      )}
    </header>
  );
}

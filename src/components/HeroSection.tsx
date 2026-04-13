"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080E1A]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow — top left */}
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[rgba(37,99,235,0.18)] blur-[100px]" />
        {/* Purple glow — bottom right */}
        <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[rgba(124,58,237,0.14)] blur-[90px]" />
        {/* Dot grid */}
        <div
          className="dot-grid absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 75%, transparent)",
          }}
        />
        {/* Subtle horizontal divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.4)] to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">

          {/* ── Left: Text ───────────────────────────────────── */}
          <div>
            {/* Availability badge */}
            <motion.div {...fadeUp(0.1)}>
              <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#60A5FA] backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#60A5FA]" />
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="mb-4 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Tugay
              <br />
              <span className="text-[#60A5FA]">Kapucu</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              {...fadeUp(0.3)}
              className="mb-5 text-lg font-medium text-white/60 sm:text-xl"
            >
              Software Engineer
            </motion.p>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.4)}
              className="mb-10 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="mb-10 flex flex-wrap gap-3">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1D4ED8] hover:scale-[1.02] active:scale-[0.98]"
              >
                See my work
              </a>
              <Link
                href="/cv"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
              >
                View CV
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.6)} className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-white/50 transition-all hover:border-white/30 hover:text-white"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-white/50 transition-all hover:border-white/30 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-full border border-white/10 p-2.5 text-white/50 transition-all hover:border-white/30 hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <span className="mx-2 h-4 w-px bg-white/15" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/35">
                Istanbul, Türkiye
              </span>
            </motion.div>
          </div>

          {/* ── Right: Photo ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 scale-[1.08] rounded-[2rem] bg-[radial-gradient(circle_at_40%_40%,rgba(37,99,235,0.3),transparent_65%)] blur-xl" />

              {/* Photo frame */}
              <div className="relative rounded-[2rem] bg-gradient-to-br from-[#2563EB]/60 via-white/10 to-[#7C3AED]/40 p-[1.5px]">
                <div className="overflow-hidden rounded-[2rem] bg-[#0F1829]">
                  <Image
                    src="/hero.jpeg"
                    alt="Tugay Kapucu"
                    width={380}
                    height={507}
                    className="h-72 w-72 object-cover object-[center_18%] sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]"
                    priority
                  />
                </div>
              </div>

              {/* Floating stat — bottom left */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#0F1829]/90 px-4 py-3 shadow-2xl backdrop-blur-md">
                <p className="text-sm font-bold text-[#60A5FA]">3+ Years</p>
                <p className="text-xs text-white/40">Shipping at Siemens</p>
              </div>

              {/* Floating stat — top right */}
              <div className="absolute -right-5 -top-5 rounded-2xl border border-white/10 bg-[#0F1829]/90 px-4 py-3 shadow-2xl backdrop-blur-md">
                <p className="text-sm font-bold text-[#A78BFA]">3.89 GPA</p>
                <p className="text-xs text-white/40">Ranked #1</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/30"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

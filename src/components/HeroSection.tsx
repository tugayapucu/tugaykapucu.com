"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { focusAreas, personalInfo } from "@/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-[rgba(15,118,110,0.10)] blur-3xl" />
        <div className="absolute bottom-12 right-[12%] h-80 w-80 rounded-full bg-[rgba(200,107,42,0.10)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(27,36,50,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(27,36,50,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                {personalInfo.availability}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="mb-5 text-5xl font-bold leading-[1.02] tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl"
            >
              Tugay
              <br />
              <span className="text-[var(--color-accent)]">Kapucu</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="mb-4 max-w-xl text-lg font-medium text-[var(--color-text)] sm:text-2xl"
            >
              {personalInfo.headline}
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="mb-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition-all hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
              >
                See selected work
              </a>
              <Link
                href="/cv"
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-text)]"
              >
                View CV
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.55)}
              className="mb-10 flex flex-wrap gap-2"
            >
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs text-[var(--color-text-muted)] sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-full p-2 text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <span className="h-5 w-px bg-[var(--color-border)]" />
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Istanbul, Türkiye
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-105 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.25),transparent_55%)]" />
              <div className="relative rounded-[2rem] bg-[linear-gradient(135deg,rgba(15,118,110,0.5),rgba(216,205,189,0.9),rgba(200,107,42,0.35))] p-[2px] shadow-[0_18px_60px_rgba(29,39,53,0.08)]">
                <div className="overflow-hidden rounded-[2rem] bg-[var(--color-surface)]">
                  <Image
                    src="/avatar.jpeg"
                    alt="Tugay Kapucu"
                    width={380}
                    height={380}
                    className="h-72 w-72 object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 shadow-[0_18px_60px_rgba(29,39,53,0.08)]">
                <p className="text-sm font-bold text-[var(--color-accent)]">
                  2+ Years
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Shipping at Siemens
                </p>
              </div>
              <div className="absolute -right-4 -top-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 shadow-[0_18px_60px_rgba(29,39,53,0.08)]">
                <p className="text-sm font-bold text-[var(--color-highlight)]">
                  3.89 GPA
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Ranked #1
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-text-muted)]"
        >
          <span className="text-xs uppercase tracking-[0.22em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

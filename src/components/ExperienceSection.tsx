"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experience } from "@/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-12 h-96 w-96 rounded-full bg-[rgba(124,58,237,0.09)] blur-[100px]" />
        <div className="absolute -left-16 bottom-24 h-64 w-64 rounded-full bg-[rgba(37,99,235,0.07)] blur-[80px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Experience
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            Where I&apos;ve delivered
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Enterprise engineering, internal platforms, and data workflows — in
            environments where software has to work reliably at scale.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent md:left-8" />

          <div className="space-y-10">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut" as const,
                }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-0 top-5 z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_4px_24px_rgba(0,0,0,0.35)] md:left-2">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={36}
                    height={36}
                    className="object-contain p-1"
                    unoptimized
                  />
                </div>

                <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all hover:border-[var(--color-accent)]">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold leading-snug text-[var(--color-text)]">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-[var(--color-accent)]">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                        {job.period}
                      </span>
                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-highlight)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

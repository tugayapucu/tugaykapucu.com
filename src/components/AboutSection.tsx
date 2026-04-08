"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { education } from "@/data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[rgba(37,99,235,0.10)] blur-[90px]" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[rgba(124,58,237,0.08)] blur-[80px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            About
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            Engineering that serves the business
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="space-y-5 lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
              I&apos;m a software engineer based in Istanbul. I work across the
              full stack — web products, APIs, internal tooling, and embedded
              systems — and I approach every project with the same question:{" "}
              <span className="font-medium text-[var(--color-text)]">
                what outcome does this need to deliver?
              </span>
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
              That mindset comes from my double degree in{" "}
              <span className="font-medium text-[var(--color-text)]">
                Management Engineering and Computer Engineering
              </span>{" "}
              at Istanbul Technical University — training that built both the
              technical skill and the business judgment to understand what
              software is actually for.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
              At{" "}
              <span className="font-medium text-[var(--color-text)]">Siemens</span>,
              I&apos;ve spent 3+ years building internal platforms that
              engineering teams depend on — tools that have to be fast, correct,
              and maintainable under real operational pressure.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "2+", label: "Years at Siemens" },
                { value: "3.89", label: "University GPA" },
                { value: "#1", label: "Class Rank" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-center shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-2xl font-bold text-[var(--color-accent)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="space-y-4 lg:col-span-2"
          >
            <h3 className="mb-6 text-lg font-semibold text-[var(--color-text)]">
              Education
            </h3>
            {education.map((edu) => (
              <div
                key={`${edu.institution}-${edu.degree}`}
                className="flex gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-colors hover:border-[var(--color-accent)]"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug text-[var(--color-text)]">
                    {edu.degree}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--color-accent)]">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {edu.period}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                    {edu.detail}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

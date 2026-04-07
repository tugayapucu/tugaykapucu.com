"use client";

import { motion } from "framer-motion";
import { featuredWork } from "@/data";

export default function ProjectsSection() {
  return (
    <section id="work" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[rgba(124,58,237,0.10)] blur-[90px]" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[rgba(37,99,235,0.08)] blur-[80px]" />
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
            Selected Work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            Shipped with measurable results
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Representative work across internal platforms, analytics tooling,
            and operational web systems — each with a concrete business outcome.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredWork.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut" as const,
              }}
              className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-[var(--color-bg)]">
                  0{index + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-highlight)]">
                  {item.context}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-semibold leading-tight text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="mb-5 text-sm leading-7 text-[var(--color-text-muted)]">
                {item.summary}
              </p>

              <div className="mb-5 rounded-2xl bg-[var(--color-surface-strong)] px-4 py-4">
                <p className="text-sm leading-7 text-[var(--color-text)]">
                  {item.outcome}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

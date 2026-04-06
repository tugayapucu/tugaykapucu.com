"use client";

import { motion } from "framer-motion";
import { featuredWork } from "@/data";

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
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
            Work that shows how I build
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
            A few representative pieces of work across internal platforms,
            analytics tooling, and delivery-focused web systems.
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
              className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[0_18px_60px_rgba(29,39,53,0.08)]"
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

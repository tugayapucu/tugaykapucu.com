"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[rgba(37,99,235,0.07)] blur-[100px]" />
        <div className="absolute -right-20 bottom-8 h-60 w-60 rounded-full bg-[rgba(124,58,237,0.08)] blur-[70px]" />
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
            Capabilities
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            Tools I use to ship
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Breadth across frontend, backend, data, and systems lets me work
            effectively in full-stack product environments.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: "easeOut" as const,
              }}
              className="group rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all hover:border-[var(--color-accent)]"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

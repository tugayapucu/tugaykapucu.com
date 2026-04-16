"use client";

import { motion } from "framer-motion";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/data";

export default function SideProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[rgba(124,58,237,0.08)] blur-[100px]" />
        <div className="absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-[rgba(37,99,235,0.08)] blur-[80px]" />
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
            Personal Projects
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            Built outside of work
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Side projects I ship to explore new technologies and practice building
            things end to end — from database to UI.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
              className="group relative flex flex-col rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all hover:border-[var(--color-highlight)]/40"
            >
              {/* Purple left accent */}
              <div className="absolute left-0 top-8 h-12 w-[3px] rounded-r-full bg-[var(--color-highlight)] opacity-60 transition-opacity group-hover:opacity-100" />

              {/* Header */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">
                    {project.title}
                  </h3>
                  <span className="mt-1 inline-block text-xs text-[var(--color-text-muted)]">
                    {project.period}
                  </span>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 rounded-xl border border-[var(--color-border)] p-2 text-[var(--color-text-muted)] transition-all hover:border-[var(--color-highlight)]/50 hover:text-[var(--color-highlight)]"
                    aria-label={`GitHub — ${project.title}`}
                  >
                    <GitHubIcon size={16} />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="mb-6 space-y-2">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-text-muted)]"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-highlight)]" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
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

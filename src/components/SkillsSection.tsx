"use client";

import { motion } from "framer-motion";
import { KeyRound, Database, GitMerge, BarChart2, Cloud } from "lucide-react";
import {
  SiC, SiCplusplus,
  SiPython, SiTypescript, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss, SiBootstrap,
  SiNodedotjs, SiFastapi, SiSwagger,
  SiPostgresql, SiSqlite,
  SiLinux, SiGnubash, SiDocker, SiGit,
  SiPostman, SiJira,
} from "react-icons/si";
import { skills } from "@/data";
import type { JSX } from "react";

// Map skill name → { icon, color }
const iconMap: Record<string, { icon: JSX.Element; color: string }> = {
  // Languages
  "Python":          { icon: <SiPython />,       color: "#3776AB" },
  "TypeScript":      { icon: <SiTypescript />,   color: "#3178C6" },
  "JavaScript":      { icon: <SiJavascript />,   color: "#F7DF1E" },
  "C":               { icon: <SiC />,             color: "#A8B9CC" },
  "C++":             { icon: <SiCplusplus />,     color: "#00599C" },
  "SQL":             { icon: <SiPostgresql />,    color: "#4169E1" },

  // Frontend
  "React":           { icon: <SiReact />,         color: "#61DAFB" },
  "Next.js":         { icon: <SiNextdotjs />,     color: "#FFFFFF" },
  "Tailwind CSS":    { icon: <SiTailwindcss />,   color: "#06B6D4" },
  "HTML5":           { icon: <SiHtml5 />,         color: "#E34F26" },
  "CSS3":            { icon: <SiCss />,            color: "#1572B6" },
  "Bootstrap":       { icon: <SiBootstrap />,     color: "#7952B3" },

  // Backend
  "Node.js":         { icon: <SiNodedotjs />,     color: "#339933" },
  "FastAPI":         { icon: <SiFastapi />,        color: "#009688" },
  "REST APIs":       { icon: <SiSwagger />,        color: "#85EA2D" },
  "JWT Auth":        { icon: <KeyRound size={13} />, color: "#F59E0B" },
  "SQLAlchemy":      { icon: <Database size={13} />, color: "#94A3B8" },

  // Databases
  "PostgreSQL":      { icon: <SiPostgresql />,    color: "#4169E1" },
  "SQLite":          { icon: <SiSqlite />,         color: "#84b8d4" },

  // Systems & DevOps
  "Linux (Debian/Ubuntu)": { icon: <SiLinux />,   color: "#FCC624" },
  "Bash":            { icon: <SiGnubash />,        color: "#4EAA25" },
  "Docker":          { icon: <SiDocker />,         color: "#2496ED" },
  "CI/CD":           { icon: <GitMerge size={13} />, color: "#A78BFA" },
  "Git":             { icon: <SiGit />,            color: "#F05032" },

  // Tools
  "Azure DevOps / TFS": { icon: <Cloud size={13} />, color: "#0078D7" },
  "Postman":         { icon: <SiPostman />,        color: "#FF6C37" },
  "Jira":            { icon: <SiJira />,           color: "#0052CC" },
  "Apache Superset": { icon: <BarChart2 size={13} />, color: "#20A6C9" },
};

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
              transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" as const }}
              className="group rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all hover:border-[var(--color-accent)]/50"
            >
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const mapped = iconMap[item];
                  return (
                    <span
                      key={item}
                      className="flex cursor-default items-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)]"
                    >
                      {mapped && (
                        <span
                          className="text-base leading-none"
                          style={{ color: mapped.color }}
                        >
                          {mapped.icon}
                        </span>
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

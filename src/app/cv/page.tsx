import type { Metadata } from "next";
import Link from "next/link";
import { personalInfo, skills, experience, education, languages, projects } from "@/data";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "CV | Tugay Kapucu",
  description: "Curriculum Vitae of Tugay Kapucu, Software Engineer.",
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Top bar */}
      <div className="no-print sticky top-0 z-10 flex items-center justify-between border-b border-[var(--color-border)] bg-[rgba(8,14,26,0.92)] px-6 py-3 backdrop-blur-md">
        <Link
          href="/"
          className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
        >
          ← Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 print:px-0 print:py-4">

        {/* Header */}
        <div className="mb-10 border-b border-[var(--color-border)] pb-8">
          <h1 className="mb-1 text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            {personalInfo.name}
          </h1>
          <p className="mb-5 text-xl font-medium text-[var(--color-accent)]">
            {personalInfo.title}
          </p>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
            {personalInfo.summary}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { icon: <Mail size={13} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <Phone size={13} />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: <MapPin size={13} />, label: personalInfo.location, href: null },
              { icon: <Globe size={13} />, label: "tugaykapucu.com", href: "https://tugaykapucu.com" },
              { icon: <LinkedInIcon size={13} />, label: "linkedin.com/in/tugaykapucu", href: personalInfo.linkedin },
              { icon: <GitHubIcon size={13} />, label: "github.com/tugayapucu", href: personalInfo.github },
            ].map((item) => {
              const cls = "flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]";
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
                  {item.icon}{item.label}
                </a>
              ) : (
                <span key={item.label} className={cls}>{item.icon}{item.label}</span>
              );
            })}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Main column */}
          <div className="space-y-10 lg:col-span-2">

            {/* Experience */}
            <section>
              <SectionTitle>Experience</SectionTitle>
              <div className="space-y-8">
                {experience.map((job) => (
                  <div key={`${job.company}-${job.role}`}>
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold text-[var(--color-text)]">{job.role}</h3>
                        <p className="text-sm text-[var(--color-accent)]">{job.company} · {job.location}</p>
                      </div>
                      <span className="whitespace-nowrap pt-0.5 text-xs text-[var(--color-text-muted)]">{job.period}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                          <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-highlight)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <SectionTitle>Projects</SectionTitle>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.title}>
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-[var(--color-text)]">{project.title}</h3>
                      <span className="whitespace-nowrap pt-0.5 text-xs text-[var(--color-text-muted)]">{project.period}</span>
                    </div>
                    <ul className="mb-3 space-y-1.5">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                          <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-2.5 py-0.5 text-xs text-[var(--color-text-muted)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={`${item.institution}-${item.degree}`} className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-text)]">{item.degree}</h3>
                      <p className="text-sm text-[var(--color-accent)]">{item.institution}</p>
                      <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">{item.detail}</p>
                    </div>
                    <span className="whitespace-nowrap pt-1 text-xs text-[var(--color-text-muted)]">{item.period}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            {/* Skills */}
            <section>
              <SectionTitle>Skills</SectionTitle>
              <div className="space-y-4">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <SectionTitle>Languages</SectionTitle>
              <div className="space-y-2">
                {languages.map((language) => (
                  <div key={language.lang} className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text)]">{language.lang}</span>
                    <span className="text-xs text-[var(--color-text-muted)]">{language.level}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          nav, .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .min-h-screen { background: white !important; }
          h1, h2, h3 { color: black !important; }
          p, li, span { color: #444 !important; }
        }
      `}</style>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 text-lg font-bold text-[var(--color-text)]">
      <span className="h-px w-5 bg-[var(--color-accent)]" />
      {children}
    </h2>
  );
}

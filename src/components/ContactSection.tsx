"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { personalInfo } from "@/data";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        `https://formspree.io/f/${personalInfo.formspreeId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-80 w-80 rounded-full bg-[rgba(37,99,235,0.10)] blur-[90px]" />
        <div className="absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-[rgba(124,58,237,0.09)] blur-[90px]" />
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
            Contact
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl">
            Let&apos;s talk about what you&apos;re building
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            Whether it&apos;s a product role, an engineering position, or a
            specific project — if there&apos;s a real problem to solve, I want
            to hear about it.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-2"
          >
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: <GitHubIcon size={20} />,
                label: "GitHub",
                value: "@tugayapucu",
                href: personalInfo.github,
              },
              {
                icon: <LinkedInIcon size={20} />,
                label: "LinkedIn",
                value: "tugaykapucu",
                href: personalInfo.linkedin,
              },
              {
                icon: <MapPin size={20} />,
                label: "Location",
                value: personalInfo.location,
                href: null,
              },
            ].map((item) => {
              const content = (
                <div className="group flex items-center gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all hover:border-[var(--color-accent)]">
                  <span className="rounded-2xl bg-[var(--color-surface-strong)] p-2 text-[var(--color-accent)]">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-text)]">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
                <CheckCircle className="text-[var(--color-accent)]" size={48} />
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  Message sent
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 rounded-full border border-[var(--color-border)] px-5 py-2 text-sm text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-all placeholder:text-[#7a8695] focus:border-[var(--color-accent)] focus:bg-[#1A2540]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-all placeholder:text-[#7a8695] focus:border-[var(--color-accent)] focus:bg-[#1A2540]"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full resize-none rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-all placeholder:text-[#7a8695] focus:border-[var(--color-accent)] focus:bg-[#1A2540]"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-text)] px-6 py-3 font-semibold text-[var(--color-bg)] transition-all hover:scale-[1.01] hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={16} />
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
    >
      <Printer size={14} />
      Print / Save PDF
    </button>
  );
}

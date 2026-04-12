"use client";

import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:bg-[var(--color-accent-strong)] hover:shadow-[0_0_28px_rgba(59,130,246,0.6)] hover:scale-[1.03] active:scale-[0.97]"
    >
      <Download size={14} />
      Save as PDF
    </button>
  );
}

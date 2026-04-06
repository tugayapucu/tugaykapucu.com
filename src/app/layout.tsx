import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tugay Kapucu | Full-Stack Software Engineer",
  description:
    "Portfolio of Tugay Kapucu, a software engineer working across React, Next.js, Node.js, Python, APIs, analytics tooling, and embedded systems.",
  keywords: [
    "software engineer",
    "full-stack engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "REST APIs",
  ],
  authors: [{ name: "Tugay Kapucu" }],
  openGraph: {
    title: "Tugay Kapucu | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building polished web products, APIs, internal tools, and reliable systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

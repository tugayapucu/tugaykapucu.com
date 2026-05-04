export const personalInfo = {
  name: "Tugay Kapucu",
  title: "Software Engineer",
  headline: "Software engineer who bridges technical depth with business outcomes.",
  tagline:
    "I build full stack products, internal platforms, and data systems that real teams rely on. Delivery, reliability, and real impact are what I care about.",
  summary:
    "Software engineer with a background spanning product focused web applications, REST APIs, analytics tooling, and embedded Linux platforms. I care about shipping software that actually solves problems: clean architecture, strong execution, and systems that hold up in production.",
  availability: "Open to new opportunities",
  email: "tugayapucu@gmail.com",
  phone: "+90 543 517 86 68",
  location: "Istanbul, Türkiye",
  linkedin: "https://linkedin.com/in/tugaykapucu",
  github: "https://github.com/tugayapucu",
  formspreeId: "xnjajzgj",
};

export const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs", "JWT Auth", "SQLAlchemy"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQLite"],
  },
  {
    category: "Systems & DevOps",
    items: ["Linux (Debian/Ubuntu)", "Bash", "Docker", "CI/CD", "Git"],
  },
  {
    category: "Tools",
    items: ["Azure DevOps / TFS", "Postman", "Jira", "Apache Superset"],
  },
];

export const experience = [
  {
    company: "Siemens",
    role: "Software Developer",
    period: "Jan 2023 – Present",
    location: "Istanbul, Türkiye",
    logo: "/siemens_logo.png",
    bullets: [
      "Owned integration acceptance for incoming IndOS/OS component deliveries; approved or rejected releases based on performance regressions, missing features, and functional/quality defects, providing evidence (repro steps, logs, traces) to drive fixes.",
      "Built an automation tool to streamline integration between Industrial OS and firmware, reducing manual effort and preventing integration mistakes during delivery and validation cycles.",
      "Enhanced the team's test framework with resource control and automated performance validation (CPU, memory, boot time, screen change latency), using systemctl orchestration and repeatable test runs.",
      "Implemented a results database and visualization workflow using SQLite and Apache Superset to store historical test runs and enable trend analysis, regression detection, and faster release decisions.",
      "Led and supported firmware teams through the migration from Debian 11 to Debian 12, coordinating with IndOS to surface compatibility risks early and prevent release-blocking issues.",
      "Delivered kernel configuration changes and firmware-side improvements that reduced boot time by ~25% and decreased CPU usage by ~10% on target systems.",
    ],
  },
  {
    company: "Procter & Gamble",
    role: "Marketing Technology & InfoSec Intern",
    period: "Jan 2022 – Oct 2022",
    location: "Istanbul, Türkiye",
    logo: "/pg_logo.png",
    bullets: [
      "Designed and operated the data collection and live transfer workflow for the Head & Shoulders Number One Music Awards campaign.",
      "Built a lightweight registration and data capture webpage, stored participant data in a Google Cloud database, and automated email reporting to share campaign results with stakeholders.",
      "Developed a personalized ad campaign targeting non-Fairy detergent users across the Banabak mobile app and social media channels.",
      "Collaborated with the IT security team to scan employee computers across Turkey for risky applications and followed up directly to get them removed.",
    ],
  },
  {
    company: "Arçelik Global A.Ş.",
    role: "Marketing Intern",
    period: "Aug 2021 – Sept 2021",
    location: "Istanbul, Türkiye",
    logo: "/arcelik_logo.jpg",
    bullets: [
      "Worked on marketing strategy for a consumer product line.",
    ],
  },
  {
    company: "Eti",
    role: "Production Planning Intern",
    period: "Aug 2020 – Sept 2020",
    location: "Remote",
    logo: "/eti_logo.jpg",
    bullets: [
      "Observed how production planning and operations are run at an industrial manufacturer, from scheduling to delivery coordination.",
    ],
  },
];

export const education = [
  {
    institution: "Istanbul Technical University",
    degree: "B.Sc. Management Engineering",
    period: "Sept 2018 – June 2022",
    detail: "GPA: 3.89 / 4.00 · Ranked 1st in class",
    logo: "/itu_logo.png",
  },
  {
    institution: "Istanbul Technical University",
    degree: "B.Sc. Computer Engineering (Double Major)",
    period: "Sept 2019 – June 2023",
    detail: "GPA: 3.65 / 4.00",
    logo: "/itu_logo.png",
  },
  {
    institution: "Robert College of Istanbul",
    degree: "High School Diploma",
    period: "Sept 2012 – June 2017",
    detail: "GPA: 89.58 / 100 · Captain of Football & Running Teams · VP of Permaculture Club",
    logo: "/robert_logo.png",
  },
];

export const languages = [
  { lang: "Turkish", level: "Native" },
  { lang: "English", level: "C1 — Proficient" },
  { lang: "German", level: "A2 — Elementary" },
];

export const projects = [
  {
    title: "Akçal Zeytinyağı Fabrikası",
    period: "2025",
    tag: "Freelance",
    description:
      "Company website for a family-run olive oil factory operating since 1962 in Silifke, Turkey. Handled both visual design and full implementation.",
    bullets: [
      "Designed and built a 10-section single page React app covering brand story, production process, product range, and quality standards.",
      "Added scroll reveal animations, parallax effects, animated counters, and a continuous marquee.",
      "Built a custom design system with a warm organic palette (olive, terra, cream) and Fraunces serif typography.",
      "Used Python and Pillow to remove backgrounds from product images so they sit cleanly on the page.",
      "Delivered a fully responsive site in Turkish.",
    ],
    stack: ["React", "Vite", "CSS", "Python", "Pillow"],
    github: "",
  },
  {
    title: "Ginny The Bartender",
    period: "June 2025",
    description:
      "A full stack cocktail discovery app with user authentication, personalized favorites, and a fully containerized deployment. Built end to end, from database schema to REST API to React UI.",
    bullets: [
      "Designed RESTful APIs with FastAPI covering cocktail search, authentication, and favorites management.",
      "Implemented JWT authentication with protected routes on both the API and the React frontend.",
      "Set up database architecture using SQLAlchemy ORM, PostgreSQL, and Alembic for schema migrations.",
      "Containerized the full stack with Docker Compose for consistent local development and deployment.",
      "Built a responsive React frontend with dynamic browsing and a polished UI using Tailwind CSS.",
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "Docker", "Tailwind CSS", "JWT", "SQLAlchemy", "Alembic"],
    github: "https://github.com/tugayapucu/ginny-the-bartender",
  },
  {
    title: "Personal Portfolio Website",
    period: "Jan 2026",
    description:
      "Designed and built from scratch, with a focus on clean typography, dark theme, and smooth animations.",
    bullets: [
      "Built with Next.js App Router, TypeScript, and Tailwind CSS v4.",
      "Scroll triggered animations using Framer Motion throughout every section.",
      "Includes a print ready CV page and a contact form.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/tugayapucu/tugaykapucu.com",
  },
];

export const featuredWork = [
  {
    title: "Developer Tooling for Embedded Linux",
    context: "Siemens",
    summary:
      "Built internal tools and automation around industrial Linux integration workflows, helping engineers move faster in a complex systems environment.",
    outcome:
      "Brought together systems knowledge and product thinking to make things more reliable and easier for other developers.",
    stack: ["Python", "Linux", "Automation", "Internal Tools"],
  },
  {
    title: "Performance Analytics Framework",
    context: "Siemens",
    summary:
      "Created a test-and-analytics workflow using SQLite and Apache Superset to turn low-level performance measurements into usable dashboards.",
    outcome:
      "Supported optimization work that contributed to a 25% boot time reduction and a 10% CPU usage improvement.",
    stack: ["SQLite", "Apache Superset", "Analytics", "Performance"],
  },
  {
    title: "Campaign Data & Registration Platform",
    context: "Procter & Gamble",
    summary:
      "Delivered a registration website and supporting data flows for marketing operations, connecting user inputs with live campaign systems.",
    outcome:
      "Improved campaign execution by making data collection and transfer more structured, reliable, and easier to operate.",
    stack: ["Web Development", "Cloud Database", "Data Pipelines", "Operations"],
  },
];

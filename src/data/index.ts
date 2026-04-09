export const personalInfo = {
  name: "Tugay Kapucu",
  title: "Software Engineer",
  headline: "Software engineer who bridges technical depth with business outcomes.",
  tagline:
    "I build full-stack products, internal platforms, and data systems that real teams rely on — with a focus on delivery, reliability, and measurable impact.",
  summary:
    "Software engineer with a background spanning product-facing web applications, REST APIs, analytics tooling, and embedded Linux platforms. I care about shipping software that actually solves problems — clean architecture, strong execution, and systems that hold up in production.",
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/200px-Siemens-logo.svg.png",
    bullets: [
      "Built internal tooling and automation for industrial Linux integration workflows used by engineering teams.",
      "Developed a performance testing framework with SQLite and Apache Superset dashboards for system-level analytics.",
      "Led a Debian 11→12 migration that reduced boot time by 25% and CPU usage by 10%.",
      "Designed and maintained REST APIs and developer-facing tools in a production engineering environment.",
    ],
  },
  {
    company: "Procter & Gamble",
    role: "Marketing Tech & Info-Sec Intern",
    period: "Jan 2022 – Oct 2022",
    location: "Istanbul, Türkiye",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/200px-Procter_%26_Gamble_logo.svg.png",
    bullets: [
      "Engineered campaign data collection and live transfer workflows across multiple marketing platforms.",
      "Built a registration web experience backed by cloud-hosted data storage for campaign operations.",
      "Developed personalized ad campaign pipelines that improved targeting efficiency.",
    ],
  },
  {
    company: "Arçelik",
    role: "Marketing Intern",
    period: "Aug 2021",
    location: "Istanbul, Türkiye",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ar%C3%A7elik_logo.svg/200px-Ar%C3%A7elik_logo.svg.png",
    bullets: [
      "Contributed to post-pandemic marketing strategy and market research initiatives.",
    ],
  },
  {
    company: "Eti",
    role: "Production Planning Intern",
    period: "Aug 2020",
    location: "Eskişehir, Türkiye",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eti_logo.png/200px-Eti_logo.png",
    bullets: [
      "Observed and documented production machinery workflows and operational planning processes.",
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
    detail: "GPA: 89.58 / 100 · Captain of Football & Running Teams",
    logo: "/robert_logo.png",
  },
];

export const languages = [
  { lang: "Turkish", level: "Native" },
  { lang: "English", level: "C1 — Proficient" },
  { lang: "German", level: "A2 — Elementary" },
];

export const featuredWork = [
  {
    title: "Developer Tooling for Embedded Linux",
    context: "Siemens",
    summary:
      "Built internal tools and automation around industrial Linux integration workflows, helping engineers move faster in a complex systems environment.",
    outcome:
      "Combined systems knowledge with product thinking to improve reliability and reduce friction for other developers.",
    stack: ["Python", "Linux", "Automation", "Internal Tools"],
  },
  {
    title: "Performance Analytics Framework",
    context: "Siemens",
    summary:
      "Created a test-and-analytics workflow using SQLite and Apache Superset to turn low-level performance measurements into usable dashboards.",
    outcome:
      "Supported optimization work that contributed to a 25% boot-time reduction and a 10% CPU-usage improvement.",
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

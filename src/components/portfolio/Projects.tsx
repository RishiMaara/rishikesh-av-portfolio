import { useMemo, useState } from "react";
import { Section } from "./Section";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type Domain = "AI/ML" | "Full-Stack" | "Systems" | "CV";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  domains: Domain[];
  featured?: boolean;
  link?: string;
};

const projects: Project[] = [
  {
    title: "AI Interview Preparation Platform",
    desc: "Full-stack AI platform that generates personalized interview questions, coding assessments, resume analysis, and learning recommendations using LLMs.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "LLM APIs"],
    domains: ["AI/ML", "Full-Stack"],
    featured: true,
  },
  {
    title: "Smart Hospital Management System",
    desc: "Healthcare platform for patients, appointments, prescriptions, billing, analytics, and secure role-based access control.",
    tech: ["Next.js", "Spring Boot", "MySQL"],
    domains: ["Full-Stack"],
    featured: true,
    link: "https://medisphere-rishi.netlify.app/",
  },
  {
    title: "Distributed URL Shortener",
    desc: "Scalable URL shortening service with Redis caching, analytics dashboards, click tracking, and rate limiting.",
    tech: ["GoLang", "PostgreSQL", "Redis", "Docker"],
    domains: ["Systems"],
    link: "https://linkforge-rishi.netlify.app/",
  },
  {
    title: "Coding Director",
    desc: "Interactive coding platform for guided technical practice, problem solving, and skill progression with a polished developer experience.",
    tech: ["React", "TypeScript", "Node.js"],
    domains: ["Full-Stack"],
    link: "https://codingdirector.netlify.app/",
  },
  {
    title: "Exoplanet Detection System",
    desc: "ML system that identifies exoplanets from NASA datasets using feature engineering and predictive modeling.",
    tech: ["Python", "PyTorch", "NumPy"],
    domains: ["AI/ML"],
    link: "https://nasa-exoplanet-predicter.vercel.app/",
  },
  {
    title: "LinguGen — English Hub",
    desc: "Modern English learning hub with structured courses, granular progress tracking, interactive quizzes, and personalized learning goals.",
    tech: ["React.js (Vite)", "TypeScript", "Flask (Python)", "SQLite"],
    domains: ["Full-Stack"],
    link: "https://lingugen.netlify.app/",
  },
  {
    title: "Pixel to Panel — Anime Creator",
    desc: "Image-processing pipeline that converts manga pages into structured anime-style panels using computer vision.",
    tech: ["Python", "OpenCV"],
    domains: ["CV", "AI/ML"],
  },
];

const FILTERS: Array<"All" | Domain> = ["All", "AI/ML", "Full-Stack", "Systems", "CV"];

export function Projects() {
  const [filter, setFilter] = useState<"All" | Domain>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.domains.includes(filter))),
    [filter]
  );

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Projects that <span className="text-gradient">ship</span>.</>}
      description="A selection of production-minded systems across AI, full-stack, distributed services, and computer vision."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f;
          const count = f === "All" ? projects.length : projects.filter((p) => p.domains.includes(f)).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`group relative inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                active
                  ? "border-primary/60 bg-gradient-primary text-primary-foreground shadow-glow"
                  : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:text-foreground"
              }`}
            >
              {f}
              <span className={`rounded-full px-1.5 py-px text-[10px] ${active ? "bg-white/20" : "bg-white/[0.06]"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => {
          const CardWrapper = p.link ? "a" : "article";
          return (
            <CardWrapper
              key={p.title}
              href={p.link}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noopener noreferrer" : undefined}
              className={`glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-fade-up ${
                p.link ? "cursor-pointer" : ""
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className="absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
                {p.link ? (
                  <ExternalLink size={18} className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                ) : (
                  <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                )}
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {p.domains.map((d) => (
                  <span key={d} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                    {d}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </Section>
  );
}

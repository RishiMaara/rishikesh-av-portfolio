import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Interview Preparation Platform",
    desc: "Full-stack AI platform that generates personalized interview questions, coding assessments, resume analysis, and learning recommendations using LLMs.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "LLM APIs"],
    featured: true,
  },
  {
    title: "Smart Hospital Management System",
    desc: "Healthcare platform for patients, appointments, prescriptions, billing, analytics, and secure role-based access control.",
    tech: ["Next.js", "Spring Boot", "MySQL"],
    featured: true,
  },
  {
    title: "Distributed URL Shortener",
    desc: "Scalable URL shortening service with Redis caching, analytics dashboards, click tracking, and rate limiting.",
    tech: ["GoLang", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Real-Time Collaboration Platform",
    desc: "Productivity platform with live chat, collaborative editing, shared workspaces and WebSocket-based sync.",
    tech: ["Next.js", "Node.js", "Socket.IO", "MongoDB"],
  },
  {
    title: "AI Inventory Demand Forecasting",
    desc: "End-to-end forecasting system using ML models for inventory optimization and demand prediction.",
    tech: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    title: "Exoplanet Detection System",
    desc: "ML system that identifies exoplanets from NASA datasets using feature engineering and predictive modeling.",
    tech: ["Python", "PyTorch", "NumPy"],
  },
  {
    title: "Pixel to Panel — Anime Creator",
    desc: "Image-processing pipeline that converts manga pages into structured anime-style panels using computer vision.",
    tech: ["Python", "OpenCV"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Projects that <span className="text-gradient">ship</span>.</>}
      description="A selection of production-minded systems across AI, full-stack, distributed services, and computer vision."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-fade-up ${
              p.featured ? "lg:col-span-1" : ""
            }`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div
              className="absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="flex items-start justify-between">
              <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
              <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
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
          </article>
        ))}
      </div>
    </Section>
  );
}

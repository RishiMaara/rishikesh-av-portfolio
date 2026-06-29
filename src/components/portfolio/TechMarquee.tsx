const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Spring Boot", "GoLang",
  "FastAPI", "PyTorch", "Transformers", "OpenCV", "PostgreSQL", "MongoDB",
  "Redis", "Docker", "Firebase", "Flutter", "Tailwind", "AWS", "GCP", "Oracle Cloud",
];

export function TechMarquee() {
  const row = [...stack, ...stack];
  return (
    <div
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-5"
      aria-label="Technology stack"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="mr-10 text-primary/70">◆</span>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

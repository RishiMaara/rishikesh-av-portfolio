import { Section } from "./Section";
import { Code, Server, Smartphone, Brain, Database, Cpu } from "lucide-react";

const groups = [
  { icon: Code, title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript"] },
  { icon: Server, title: "Backend", items: ["Node.js", "FastAPI", "Spring Boot", "GoLang"] },
  { icon: Smartphone, title: "Mobile", items: ["Flutter", "Firebase"] },
  { icon: Brain, title: "AI & ML", items: ["PyTorch", "Scikit-learn", "Transformers", "OpenCV", "Pandas", "NumPy"] },
  { icon: Database, title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Firestore"] },
  { icon: Cpu, title: "Core CS", items: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>A wide stack, <span className="text-gradient">deep fundamentals</span>.</>}
      description="Tools I reach for, grounded in solid CS fundamentals."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, items }, i) => (
          <div
            key={title}
            className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-fade-up"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                <Icon size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((it) => (
                <span
                  key={it}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

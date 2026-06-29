import { Section } from "./Section";
import { Award } from "lucide-react";
import { useCountUp, useReveal } from "@/hooks/useReveal";

const items = [
  "Oracle Cloud Infrastructure Data Science Professional",
  "Oracle Cloud Infrastructure AI Foundations Associate",
  "Databricks Generative AI Fundamentals",
  "AWS Academy Generative AI Foundations",
];

const stats = [
  { label: "Projects Shipped", value: 15, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "" },
  { label: "Tech Domains", value: 6, suffix: "" },
  { label: "Coffee → Code", value: 100, suffix: "%" },
];

function StatCard({ stat, delay }: { stat: typeof stats[number]; delay: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const n = useCountUp(stat.value, 1600, shown);
  return (
    <div
      ref={ref}
      className="glass rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {n}
        {stat.suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
    </div>
  );
}

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={<>Certified across <span className="text-gradient">AI & Cloud</span>.</>}
      description="Continuously leveling up across the modern AI and cloud stack."
    >
      <div className="mb-10 grid gap-3 grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} stat={s} delay={i * 0.05} />
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it, i) => (
          <div
            key={it}
            className="glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow animate-fade-up"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <Award size={20} />
            </div>
            <div className="min-w-0">
              <div className="font-display text-sm font-semibold sm:text-base">{it}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">Professional Certification</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

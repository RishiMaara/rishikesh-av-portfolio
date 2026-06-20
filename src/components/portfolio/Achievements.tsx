import { Section } from "./Section";
import { Award } from "lucide-react";

const items = [
  "Oracle Cloud Infrastructure Data Science Professional",
  "Oracle Cloud Infrastructure AI Foundations Associate",
  "Databricks Generative AI Fundamentals",
  "AWS Academy Generative AI Foundations",
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={<>Certified across <span className="text-gradient">AI & Cloud</span>.</>}
      description="Continuously leveling up across the modern AI and cloud stack."
    >
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

import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "D Trade Capital",
    role: "AI Engineer",
    period: "Present",
    bullets: [
      "Designed Transformer-based sequence-to-sequence systems for real-time trading anomaly detection.",
      "Built high-throughput data pipelines processing large-scale financial data.",
      "Developed adaptive ML systems for automated risk mitigation.",
      "Created real-time alerting powered by predictive AI models.",
    ],
  },
  {
    company: "PC World",
    role: "Machine Learning Intern",
    period: "Past",
    bullets: [
      "Built and evaluated end-to-end machine learning pipelines.",
      "Improved predictive model accuracy via feature engineering and hyperparameter optimization.",
      "Developed production-oriented ML workflows.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>From research to <span className="text-gradient">production</span>.</>}
      description="Shipping intelligent systems where reliability, latency, and user trust actually matter."
    >
      <ol className="relative border-l border-white/10 pl-6">
        {roles.map((r, i) => (
          <li key={r.company} className="mb-10 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="absolute -left-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
              <Briefcase size={12} className="text-primary-foreground" />
            </span>
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">{r.role}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{r.period}</span>
              </div>
              <div className="mt-1 text-sm text-primary">{r.company}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

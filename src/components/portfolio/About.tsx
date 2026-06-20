import { Section } from "./Section";
import { Brain, Code2, Rocket, Layers } from "lucide-react";

const pillars = [
  { icon: Brain, title: "Applied AI", desc: "Transformers, LLM systems, real-time inference, anomaly detection." },
  { icon: Code2, title: "Full-Stack", desc: "Next.js, TypeScript, Node, Spring Boot, FastAPI, GoLang." },
  { icon: Layers, title: "Systems", desc: "Distributed services, caching, queues, scalable architectures." },
  { icon: Rocket, title: "Product", desc: "Shipping polished, accessible UX on top of real engineering." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<><span className="text-gradient">Engineer</span> by craft, <span className="text-gradient">builder</span> by instinct.</>}
      description="I'm an Applied AI Engineer, Full-Stack Developer, and Product Builder passionate about creating intelligent systems that solve real-world problems — across machine learning, modern web, mobile, cloud, and scalable architecture."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <Icon size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, oklch(0.74 0.16 200 / 0.08), oklch(0.70 0.18 310 / 0.08))" }} />
          </div>
        ))}
      </div>
    </Section>
  );
}

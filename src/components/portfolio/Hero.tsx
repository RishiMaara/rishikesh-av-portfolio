import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center justify-center px-4 pt-32 pb-20">
      <div className="absolute inset-0 -z-10 hero-bg" />
      <div className="absolute inset-0 -z-10 grid-bg" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Available for Staff & Senior roles · AI · Full-Stack
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            <span className="block text-foreground/90">Rishikesh AV</span>
            <span className="block text-gradient animate-gradient-pan">
              Applied AI · Full-Stack
            </span>
            <span className="block text-foreground/80">Product Builder</span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            Building intelligent products that scale — from AI research to full-stack engineering.
            I turn complex problems into production systems with strong engineering and exceptional UX.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground hover:bg-white/10"
            >
              <Mail size={16} /> Get in touch
            </a>
            <a
              href="/resume.pdf"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground hover:bg-white/10"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> Madurai, Tamil Nadu, India
            </span>
            <a href="https://github.com/RishiMaara" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Github size={14} /> RishiMaara
            </a>
            <a href="https://www.linkedin.com/in/rishi-kesh-av" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Linkedin size={14} /> rishi-kesh-av
            </a>
            <a href="mailto:rishirudhm@gmail.com" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Mail size={14} /> rishirudhm@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { k: "AI Systems", v: "Production" },
            { k: "Full-Stack", v: "End-to-End" },
            { k: "Scale", v: "High-Throughput" },
            { k: "Craft", v: "Pixel-Perfect" },
          ].map((s, i) => (
            <div
              key={s.k}
              className="glass rounded-2xl p-4 text-center animate-fade-up"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="font-display text-xl font-semibold text-gradient">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Sparkles size={12} className="text-primary" />
          "Building Models, Not Theories — From Data to Decisions."
        </div>
      </div>
    </section>
  );
}

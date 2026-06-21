import { ArrowRight, ExternalLink, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profileAsset from "@/assets/rishikesh-profile.jpg.asset.json";
import resumeAsset from "@/assets/RISHIKESH_FS_RESUME.pdf.asset.json";

export function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 3D tilt on portrait
  const handlePortraitMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = portraitRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 12, y: px * 12 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  // Subtle parallax for orbs based on global cursor
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center justify-center px-4 pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 hero-bg" />
      <div className="absolute inset-0 -z-10 grid-bg" />

      {/* Floating gradient orbs with parallax */}
      <div
        className="pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-3xl opacity-40 animate-float-slow"
        style={{
          background: "radial-gradient(circle, oklch(0.74 0.16 200 / 0.7), transparent 70%)",
          top: "10%",
          left: "8%",
          transform: `translate3d(${mouse.x * 20}px, ${mouse.y * 20}px, 0)`,
        }}
      />
      <div
        className="pointer-events-none absolute -z-10 h-96 w-96 rounded-full blur-3xl opacity-40 animate-float-slow"
        style={{
          background: "radial-gradient(circle, oklch(0.70 0.18 310 / 0.6), transparent 70%)",
          bottom: "5%",
          right: "5%",
          animationDelay: "2s",
          transform: `translate3d(${mouse.x * -25}px, ${mouse.y * -25}px, 0)`,
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-up">
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for Staff &amp; Senior roles · AI · Full-Stack
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-foreground/90">Rishikesh AV</span>
              <span className="block text-gradient animate-gradient-pan">
                Applied AI · Full-Stack
              </span>
              <span className="block text-foreground/80">Product Builder</span>
            </h1>

            <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
              Building intelligent products that scale — from AI research to full-stack
              engineering. I turn complex problems into production systems with strong
              engineering and exceptional UX.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  View Projects
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
              >
                <Mail size={16} /> Get in touch
              </a>
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
              >
                <ExternalLink size={16} /> View Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} /> Madurai, Tamil Nadu
              </span>
              <a href="https://github.com/RishiMaara" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Github size={14} /> RishiMaara
              </a>
              <a href="https://www.linkedin.com/in/rishi-kesh-av" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Linkedin size={14} /> rishi-kesh-av
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end" style={{ perspective: "1200px" }}>
            <div
              ref={portraitRef}
              onMouseMove={handlePortraitMove}
              onMouseLeave={resetTilt}
              className="relative animate-fade-up"
              style={{
                animationDelay: "0.15s",
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.2s ease-out",
              }}
            >
              {/* Conic gradient ring */}
              <div
                className="absolute -inset-2 rounded-full opacity-80 blur-[2px] animate-gradient-pan"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.74 0.16 200), oklch(0.70 0.18 310), oklch(0.72 0.18 350), oklch(0.74 0.16 200))",
                  backgroundSize: "200% 200%",
                }}
              />
              <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl" />

              {/* Image */}
              <div
                className="relative h-[280px] w-[280px] overflow-hidden rounded-full border border-white/10 shadow-glow sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]"
                style={{ transform: "translateZ(40px)" }}
              >
                <img
                  src={profileAsset.url}
                  alt="Rishikesh AV — Applied AI Engineer & Full-Stack Developer"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <div
                className="glass absolute -left-2 top-8 rounded-2xl px-3 py-2 text-xs animate-float-slow sm:-left-6 sm:top-10"
                style={{ transform: "translateZ(80px)", animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-foreground/90">$ shipping AI</span>
                </div>
              </div>
              <div
                className="glass absolute -right-2 bottom-10 hidden rounded-2xl px-3 py-2 text-xs animate-float-slow sm:-right-6 sm:bottom-12 sm:block"
                style={{ transform: "translateZ(80px)", animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={12} className="text-primary" />
                  <span className="font-mono text-foreground/90">Models &gt; Theories</span>
                </div>
              </div>
              <div
                className="glass absolute -right-4 top-4 hidden rounded-full px-3 py-1.5 text-[10px] uppercase tracking-wider animate-float-slow sm:-right-6 sm:top-6 sm:block"
                style={{ transform: "translateZ(60px)", animationDelay: "0.8s" }}
              >
                <span className="text-gradient font-semibold">AI · ML · LLMs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { k: "AI Systems", v: "Production" },
            { k: "Full-Stack", v: "End-to-End" },
            { k: "Scale", v: "High-Throughput" },
            { k: "Craft", v: "Pixel-Perfect" },
          ].map((s, i) => (
            <div
              key={s.k}
              className="glass group rounded-2xl p-4 text-center animate-fade-up transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
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

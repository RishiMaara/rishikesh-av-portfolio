import { Section } from "./Section";
import { Mail, MapPin, Linkedin, Github, Download, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">remarkable</span>.</>}
      description="Open to Staff / Senior AI & Full-Stack roles, product collaborations, and ambitious problems."
    >
      <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-accent)" }} />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">Reach out directly</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              The fastest way is email. I read everything and reply quickly.
            </p>

            <div className="mt-6 space-y-3">
              <a href="mailto:rishirudhm@gmail.com" className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:bg-white/10">
                <Mail size={18} className="text-primary" />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="truncate font-medium">rishirudhm@gmail.com</div>
                </div>
                <ArrowRight size={16} className="ml-auto text-muted-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/rishi-kesh-av" target="_blank" rel="noreferrer" className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:bg-white/10">
                <Linkedin size={18} className="text-primary" />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</div>
                  <div className="truncate font-medium">linkedin.com/in/rishi-kesh-av</div>
                </div>
                <ArrowRight size={16} className="ml-auto text-muted-foreground" />
              </a>
              <a href="https://github.com/RishiMaara" target="_blank" rel="noreferrer" className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:bg-white/10">
                <Github size={18} className="text-primary" />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">GitHub</div>
                  <div className="truncate font-medium">github.com/RishiMaara</div>
                </div>
                <ArrowRight size={16} className="ml-auto text-muted-foreground" />
              </a>
              <div className="glass flex items-center gap-3 rounded-xl p-4">
                <MapPin size={18} className="text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                  <div className="font-medium">Madurai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Personal motto</div>
              <blockquote className="mt-3 font-display text-xl leading-snug">
                "Building Models, Not Theories — <span className="text-gradient">From Data to Decisions.</span>"
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:rishirudhm@gmail.com"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                <Mail size={16} /> Email me
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium hover:bg-white/10"
              >
                <Download size={16} /> Download résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

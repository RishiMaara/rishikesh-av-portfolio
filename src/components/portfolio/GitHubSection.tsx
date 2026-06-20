import { Section } from "./Section";
import { Github, GitCommit, GitBranch, Star, ExternalLink } from "lucide-react";

const stats = [
  { icon: GitCommit, label: "Active Commits", value: "Daily" },
  { icon: GitBranch, label: "Open Source", value: "Contributor" },
  { icon: Star, label: "Focus", value: "AI · Systems · DX" },
];

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title={<>Code that <span className="text-gradient">speaks</span>.</>}
      description="Open source activity, experiments, and production-ready repositories."
    >
      <div className="glass overflow-hidden rounded-3xl p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Github size={22} />
              </div>
              <div>
                <div className="font-display text-xl font-semibold">@RishiMaara</div>
                <div className="text-sm text-muted-foreground">github.com/RishiMaara</div>
              </div>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Repositories spanning Applied AI, distributed systems, full-stack platforms, and computer vision —
              with clean architecture, typed APIs, and production-minded tooling.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Icon size={16} className="text-primary" />
                  <div className="mt-2 font-display text-sm font-semibold">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/RishiMaara"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                <Github size={16} /> Visit GitHub
              </a>
              <a
                href="https://github.com/RishiMaara?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium hover:bg-white/10"
              >
                Repositories <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
            <img
              src="https://ghchart.rshah.org/4cc9f0/RishiMaara"
              alt="Rishikesh AV's GitHub contribution graph"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <img
                src="https://github-readme-stats.vercel.app/api?username=RishiMaara&show_icons=true&hide_border=true&bg_color=00000000&title_color=4cc9f0&icon_color=b388ff&text_color=cbd5e1"
                alt="GitHub stats"
                className="w-full rounded-xl"
                loading="lazy"
              />
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=RishiMaara&layout=compact&hide_border=true&bg_color=00000000&title_color=4cc9f0&text_color=cbd5e1"
                alt="Top languages"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

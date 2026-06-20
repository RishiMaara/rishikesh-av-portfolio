import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">R</span>
          <span>© {new Date().getFullYear()} Rishikesh AV. Crafted with care.</span>
        </div>
        <div className="flex items-center gap-4">
          <a aria-label="GitHub" href="https://github.com/RishiMaara" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github size={16} /></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/rishi-kesh-av" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin size={16} /></a>
          <a aria-label="Email" href="mailto:rishirudhm@gmail.com" className="hover:text-foreground"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

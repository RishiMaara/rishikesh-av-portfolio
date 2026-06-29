import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SpotlightCursor } from "@/components/portfolio/SpotlightCursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { AIChatbot } from "@/components/portfolio/AIChatbot";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishikesh AV — Applied AI Engineer & Full-Stack Developer" },
      { name: "description", content: "Portfolio of Rishikesh AV — Applied AI Engineer & Full-Stack Developer. Building intelligent products that scale, from AI research to production engineering." },
      { property: "og:title", content: "Rishikesh AV — Applied AI Engineer & Full-Stack Developer" },
      { property: "og:description", content: "Building intelligent products that scale — from AI research to full-stack engineering." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rishikesh AV",
          jobTitle: "Applied AI Engineer & Full-Stack Developer",
          email: "mailto:rishirudhm@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Madurai", addressRegion: "Tamil Nadu", addressCountry: "India" },
          sameAs: [
            "https://www.linkedin.com/in/rishi-kesh-av",
            "https://github.com/RishiMaara",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <SpotlightCursor />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}


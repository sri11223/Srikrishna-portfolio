import { Github, Linkedin, Mail, Download, Sparkles, Code2, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/portfolio-profile.png";
import { profileLinks } from "@/data/profile";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = () => {
    window.open(profileLinks.resume, "_blank", "noopener,noreferrer");
  };

  const socials = [
    { icon: Github, href: profileLinks.github, label: "GitHub" },
    { icon: Linkedin, href: profileLinks.linkedin, label: "LinkedIn" },
    { icon: BookOpen, href: profileLinks.medium, label: "Medium" },
    { icon: Mail, href: profileLinks.email, label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />

      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary/20 rotate-45" />
      <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-secondary/20 rounded-full" />
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-accent/10 backdrop-blur-sm" />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary animate-neon-pulse" />
              <span className="text-xs sm:text-sm font-bold text-primary">OPEN TO FULL-TIME SDE & AI SYSTEMS ROLES</span>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-normal">
                  <span className="block hover:animate-glitch">Srikrishna</span>
                  <span className="block text-4xl md:text-6xl lg:text-7xl hover:animate-glitch">Nutalapati</span>
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}>
                Full-Stack Engineer | AI Systems Builder
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-card border-l-4 border-primary rounded-r-lg">
                <Code2 className="w-4 h-4 inline mr-2 text-primary" />
                <span className="font-semibold">Techolution SWE Intern</span>
              </div>
              <div className="px-4 py-2 bg-card border-l-4 border-secondary rounded-r-lg">
                <Zap className="w-4 h-4 inline mr-2 text-secondary" />
                <span className="font-semibold">Agentic AI Builder</span>
              </div>
              <div className="px-4 py-2 bg-card border-l-4 border-accent rounded-r-lg">
                <Sparkles className="w-4 h-4 inline mr-2 text-accent" />
                <span className="font-semibold">4x National Hackathon Winner</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I build <span className="text-primary font-bold">production full-stack systems</span>, <span className="text-secondary font-bold">agentic AI workflows</span>, and <span className="text-accent font-bold">RAG-backed platforms</span>. Current Software Engineer Intern at <span className="text-primary font-bold">Techolution</span>, with production experience at <span className="text-secondary font-bold">Outbox Labs</span> and <span className="text-accent font-bold">MetLife</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 shadow-[4px_4px_0px_0px_hsl(var(--primary-foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--primary-foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold px-8 shadow-[4px_4px_0px_0px_hsl(var(--secondary))] hover:shadow-[2px_2px_0px_0px_hsl(var(--secondary))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                onClick={handleResumeClick}
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-primary rounded-full transition-all hover:scale-105"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right lg:justify-self-end">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-20 blur-2xl animate-neon-pulse" />

              <div className="relative bg-card p-2 rounded-3xl border-4 border-primary">
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-secondary rounded-full animate-float-slow" style={{ animationDelay: "0.5s" }} />
                <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-accent/30 rounded-full animate-float-slow" style={{ animationDelay: "1.5s" }} />

                <img
                  src={profilePhoto}
                  alt="Srikrishna Nutalapati"
                  className="relative w-full aspect-square rounded-2xl object-cover"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-black text-primary">97.7%</div>
                      <div className="text-xs text-muted-foreground">Threat Detection</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-secondary">94.7%</div>
                      <div className="text-xs text-muted-foreground">Damage Prevented</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-accent">100/100</div>
                      <div className="text-xs text-muted-foreground">Triage Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

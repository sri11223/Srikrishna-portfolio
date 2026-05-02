import { Briefcase, GraduationCap, MapPin, Rocket, Trophy, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profileContact, profileLinks } from "@/data/profile";

export const RecruiterSnapshot = () => {
  const quickFacts = [
    { label: "Current", value: "SWE Intern @ Techolution" },
    { label: "Target", value: "SDE | AI Engineer" },
    { label: "Education", value: "B.Tech CSE | 9.08 CGPA" },
    { label: "Hackathons", value: "4x National Winner" },
    { label: "Client Work", value: "Artgram live platform" },
    { label: "GitHub", value: "64 public repositories" },
  ];

  const focusAreas = [
    "Full-stack product engineering",
    "Agentic AI and oversight systems",
    "Hybrid RAG with grounded answers",
    "Micro-frontends and release automation",
    "Freelance full-stack delivery",
  ];

  const recruiterHooks = [
    "I build systems that are measurable, demoable, and production-minded.",
    "I can move from product UI to backend architecture to AI workflows without losing depth.",
    "I don't just ship features, I ship proof: live apps, metrics, docs, and working demos.",
  ];

  return (
    <section id="snapshot" className="py-20 px-4 bg-muted/10 border-y border-border/50">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
          <div className="bg-card p-8 rounded-lg border-2 border-primary/40 animate-fade-in">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className="bg-primary text-primary-foreground px-4 py-2">At a Glance</Badge>
              <Badge variant="outline" className="border-secondary text-secondary px-4 py-2">Open to July 2026 new-grad roles</Badge>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-5 tracking-normal">
              Full-stack engineer building <span className="text-primary">AI systems people can trust</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Current Techolution intern shipping Deploy Genie, with prior production experience at Outbox Labs and MetLife. Strongest signal: SENTINEL, Orchestrate, latency reduction work, RAG systems, and agentic deployment automation.
            </p>

            <div className="mb-8 p-5 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg border-2 border-primary/30">
              <div className="text-sm font-black uppercase tracking-wide text-primary mb-2">Why Hire Me</div>
              <p className="text-xl md:text-2xl font-black leading-snug">
                I turn complex ideas into <span className="text-primary">working systems</span> with <span className="text-secondary">real metrics</span>, <span className="text-accent">live demos</span>, and clean engineering underneath.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="p-4 bg-background/70 rounded-lg border border-border">
                  <div className="text-xs text-muted-foreground font-bold uppercase mb-1">{fact.label}</div>
                  <div className="font-black">{fact.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                onClick={() => window.open(profileLinks.resume, "_blank", "noopener,noreferrer")}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button
                variant="outline"
                className="border-primary hover:bg-primary hover:text-primary-foreground font-bold"
                onClick={() => window.open(profileLinks.github, "_blank", "noopener,noreferrer")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="border-secondary hover:bg-secondary hover:text-secondary-foreground font-bold"
                onClick={() => window.open(profileLinks.linkedin, "_blank", "noopener,noreferrer")}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>

            <div className="mt-8 grid gap-3">
              {recruiterHooks.map((hook) => (
                <div key={hook} className="flex items-start gap-3 p-3 bg-background/60 rounded-lg border border-border">
                  <Trophy className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-sm font-semibold text-foreground/90 leading-relaxed">{hook}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 animate-slide-in-right">
            <div className="bg-card p-6 rounded-lg border-2 border-border">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-black">Now - May 2026</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Shipping Deploy Genie micro-frontends at Techolution, extending SENTINEL's MCP/A2A support for tool-calling agents, and staying open to new-grad SDE and AI Engineer roles.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card p-5 rounded-lg border-2 border-border">
                <MapPin className="h-6 w-6 text-secondary mb-3" />
                <div className="text-sm text-muted-foreground font-bold mb-1">Location</div>
                <div className="font-black">{profileContact.location}</div>
              </div>
              <div className="bg-card p-5 rounded-lg border-2 border-border">
                <GraduationCap className="h-6 w-6 text-accent mb-3" />
                <div className="text-sm text-muted-foreground font-bold mb-1">Graduation</div>
                <div className="font-black">July 2026</div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-border">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-black">Best Fit</h3>
              </div>
              <div className="grid gap-3">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 text-sm font-semibold">
                    <Trophy className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

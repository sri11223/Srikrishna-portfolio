import { Briefcase, Trophy, GraduationCap, BookOpen, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Experience = () => {
  const experiences = [
    {
      company: "Techolution",
      role: "Software Engineer Intern",
      period: "Mar 2026 - Present",
      location: "Hyderabad, India",
      border: "border-primary",
      text: "text-primary",
      bg: "bg-primary/10",
      bullet: "text-secondary",
      bullets: [
        "Architected Deploy Genie micro-frontends with React.js and Webpack Module Federation, splitting a monolith into independently deployable micro-apps.",
        "Built the Node.js + Express orchestration backend powering release APIs consumed by the shell app and agentic deployment workflows.",
        "Implemented AI-driven auto-deploy logic for build readiness, target selection, rollback handling, and stakeholder notifications.",
      ],
    },
    {
      company: "Outbox Labs",
      role: "Software Engineer Intern",
      period: "Jan 2026 - Feb 2026",
      location: "Bengaluru, India",
      border: "border-secondary",
      text: "text-secondary",
      bg: "bg-secondary/10",
      bullet: "text-accent",
      bullets: [
        "Shipped full-stack user-facing features across Next.js, Node.js, and PostgreSQL with close PM collaboration and zero rollback releases.",
        "Built LLM-powered email automation and inbox sync from scratch, wiring live AI responses directly into production user flows.",
        "Fixed backend bottlenecks with caching and query-level optimizations, cutting response latency by 45% with production telemetry validation.",
      ],
    },
    {
      company: "MetLife",
      role: "Software Engineering Intern",
      period: "Feb 2025 - Aug 2025",
      location: "Noida, India",
      border: "border-accent",
      text: "text-accent",
      bg: "bg-accent/10",
      bullet: "text-primary",
      bullets: [
        "Built Node.js microservices handling 10K+ daily requests at 99.9% uptime, with 80%+ unit and functional test coverage.",
        "Engineered a RAG pipeline and async inference layer for a cloud AI platform serving 50K+ users, reducing query resolution time by 20%.",
        "Built Docker CI/CD pipelines and TypeScript Backstage plugins that cut release cycles by 40%, plus React Native onboarding flows for the Egypt market.",
      ],
    },
  ];

  const achievements = [
    {
      title: "Finalist - Meta OpenEnv Hackathon 2026",
      description: "Built SENTINEL, an RL-trained AI safety system selected among top finalists from thousands of nationwide submissions.",
      color: "border-primary",
    },
    {
      title: "1st Place - Techolution Hackathon V1",
      description: "Best AI solution among 500+ participants.",
      color: "border-secondary",
    },
    {
      title: "1st Place - 24-Hour NRI Hackathon",
      description: "Top 0.8% finish, winning out of 119 teams with a production-ready AI prototype.",
      color: "border-accent",
    },
    {
      title: "Runner-Up - TECHTREK 2k25",
      description: "National-level full-stack hackathon result; top 2% among 100+ competitors.",
      color: "border-primary",
    },
    {
      title: "Man of the Event - MetLife Code Challenge",
      description: "#1 individual performer in the internal business application development challenge.",
      color: "border-secondary",
    },
    {
      title: "Open Source",
      description: "Published 2 npm packages with 1,500+ combined downloads.",
      color: "border-accent",
    },
  ];

  const proofLinks = [
    {
      title: "SENTINEL Live Space",
      description: "Running oversight dashboard, live agent gate, MCP server, and A2A agent card.",
      url: "https://huggingface.co/spaces/srikrishna2005/openenv",
      icon: ExternalLink,
    },
    {
      title: "SENTINEL GitHub",
      description: "OpenEnv environment, FastAPI server, training scripts, proof pack, and docs.",
      url: "https://github.com/sri11223/openEnv",
      icon: Github,
    },
    {
      title: "Orchestrate GitHub",
      description: "7-stage support triage agent with hybrid RAG, verifier loop, and traceable outputs.",
      url: "https://github.com/sri11223/triage-orchestrate",
      icon: Github,
    },
  ];

  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-lg mb-6">
            <span className="text-sm font-bold text-primary">MY JOURNEY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Experience & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Wins</span>
          </h2>
        </div>

        <div className="mb-16 space-y-8 animate-slide-in-left">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className={`bg-gradient-to-br from-card to-card/50 p-10 rounded-2xl border-2 ${experience.border}`}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className={`p-4 ${experience.bg} rounded-xl`}>
                  <Briefcase className={`h-10 w-10 ${experience.text}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                    <div>
                      <h3 className={`text-3xl font-black ${experience.text} mb-2`}>{experience.company}</h3>
                      <p className="text-xl font-bold">{experience.role}</p>
                    </div>
                    <div className="text-muted-foreground md:text-right">
                      <p className="font-bold">{experience.period}</p>
                      <p>{experience.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {experience.bullets.map((achievement) => (
                      <div key={achievement} className="flex gap-3">
                        <span className={`${experience.bullet} text-2xl font-bold`}>|</span>
                        <p className="text-lg">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 animate-slide-in-right">
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="h-10 w-10 text-secondary" />
            <h3 className="text-3xl font-black">Awards & Proof Points</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className={`bg-card p-6 rounded-2xl border-2 ${achievement.color} hover:scale-105 transition-all group`}
              >
                <Trophy className="h-8 w-8 text-secondary mb-4 group-hover:animate-pop-in" />
                <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="h-10 w-10 text-primary" />
            <h3 className="text-3xl font-black">Public Proof</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {proofLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div
                  key={link.title}
                  className="bg-gradient-to-br from-card to-card/50 p-6 rounded-2xl border-2 border-border hover:border-primary transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Icon className="h-7 w-7 text-primary group-hover:animate-pop-in" />
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
                    >
                      Open
                    </Button>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{link.title}</h4>
                  <p className="text-muted-foreground">{link.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="animate-pop-in">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="h-10 w-10 text-accent" />
            <h3 className="text-3xl font-black">Education</h3>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-10 rounded-2xl border-2 border-accent">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1">
                <h4 className="text-2xl font-black mb-3">B.Tech in Computer Science & Engineering</h4>
                <p className="text-lg font-semibold mb-2">R.V.R & J.C College of Engineering, Guntur</p>
                <p className="text-muted-foreground">
                  Data Structures & Algorithms | Operating Systems | DBMS | Distributed Systems | System Design | OOP
                </p>
              </div>
              <div className="text-center lg:text-right flex-shrink-0">
                <div className="inline-block px-8 py-6 bg-accent/20 rounded-2xl border-2 border-accent">
                  <div className="text-5xl font-black text-accent mb-2">9.08</div>
                  <div className="text-sm font-bold text-muted-foreground">CGPA / 10.0</div>
                </div>
                <p className="text-muted-foreground mt-4 font-semibold">Aug 2022 - Jul 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

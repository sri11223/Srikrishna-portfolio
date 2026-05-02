import { Target, Rocket, Trophy, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const highlights = [
    { icon: Target, label: "Current Role", value: "Techolution", color: "text-primary" },
    { icon: Rocket, label: "AI Safety", value: "97.7% Detection", color: "text-secondary" },
    { icon: Trophy, label: "Hackathons", value: "4x National Winner", color: "text-accent" },
    { icon: TrendingUp, label: "Open Source", value: "1,500+ Downloads", color: "text-primary" },
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React Native",
    "Webpack Module Federation",
    "Vite",
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "Redis",
    "REST APIs",
    "WebSockets",
    "Microservices",
    "Micro-frontends",
    "Docker",
    "AWS",
    "CI/CD",
    "Jenkins",
    "Razorpay",
    "SEO",
    "PWA",
    "Backstage",
    "Apache Kafka",
    "Hybrid RAG",
    "NetworkX",
    "Groq",
    "BM25",
    "BGE Embeddings",
    "Cross-Encoder Rerank",
    "Pydantic",
    "Reinforcement Learning",
    "GRPO",
    "Agentic AI",
    "HuggingFace",
    "MCP",
    "A2A",
    "NPM Packages",
    "CLI Tools",
    "FinTech Dashboards",
    "Git",
    "Linux",
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-lg mb-6">
            <span className="text-sm font-bold text-primary">WHO I AM</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6 animate-slide-in-left">
            <div className="bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition-all">
              <p className="text-lg leading-relaxed mb-6">
                I am a <span className="text-primary font-bold">final-year Computer Science student</span> and <span className="text-secondary font-bold">full-stack engineer</span> who likes building systems with proof behind them: measurable latency cuts, traceable AI decisions, and production workflows that survive real users.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                At <span className="text-primary font-bold">Techolution</span>, I am building Deploy Genie with <span className="text-secondary font-bold">React micro-frontends</span>, <span className="text-accent font-bold">Node.js orchestration APIs</span>, and agentic release workflows. At <span className="text-secondary font-bold">Outbox Labs</span>, I shipped LLM-powered email automation and cut backend latency by <span className="text-primary font-bold">45%</span>.
              </p>
              <p className="text-lg leading-relaxed">
                Earlier at <span className="text-accent font-bold">MetLife</span>, I built Node.js microservices, a RAG pipeline for a cloud AI platform serving <span className="text-primary font-bold">50K+ users</span>, and Docker CI/CD plus Backstage plugins that reduced release cycles by <span className="text-secondary font-bold">40%</span>. My strongest public projects are SENTINEL and Orchestrate: AI systems built to be evaluated, audited, and trusted.
              </p>
            </div>

            <div className="bg-gradient-to-br from-muted to-muted/50 p-8 rounded-2xl border-2 border-border hover:border-primary/30 transition-all">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tech Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Badge
                    key={tech}
                    className="group relative px-4 py-3 text-sm font-semibold text-foreground bg-card/70 border-2 border-border hover:border-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-primary/30 animate-pop-in"
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-300 group-hover:font-bold">{tech}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 animate-slide-in-right">
            {highlights.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-card p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all group hover:scale-105"
                >
                  <Icon className={`h-10 w-10 ${stat.color} mb-4 group-hover:animate-pop-in`} />
                  <div className="text-3xl font-black mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 rounded-2xl border-2 border-primary/30 animate-pop-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-sm font-bold text-primary mb-2">EDUCATION</div>
              <h3 className="text-2xl font-black mb-2">B.Tech in Computer Science & Engineering</h3>
              <p className="text-muted-foreground">R.V.R & J.C College of Engineering, Guntur | Aug 2022 - Jul 2026</p>
            </div>
            <div className="text-center md:text-right">
              <div className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">9.08</div>
              <div className="text-sm text-muted-foreground font-medium">CGPA / 10.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

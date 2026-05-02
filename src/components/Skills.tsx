import { Code, Database, Cloud, Wrench, Zap, Star } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend & Micro-frontends",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5",
      skills: [
        { name: "React.js", level: 95, desc: "Component architecture, hooks, state, performance" },
        { name: "Next.js", level: 92, desc: "Full-stack routes, production UI, server rendering patterns" },
        { name: "TypeScript", level: 92, desc: "Typed app surfaces, API contracts, safer refactors" },
        { name: "React Native", level: 85, desc: "Mobile onboarding flows and cross-platform UI" },
        { name: "Webpack Module Federation", level: 88, desc: "Micro-frontends and independent deployment" },
        { name: "Tailwind CSS", level: 88, desc: "Responsive systems, design tokens, polished UI" },
      ],
    },
    {
      icon: Database,
      title: "Backend & APIs",
      color: "text-secondary",
      bgColor: "from-secondary/20 to-secondary/5",
      skills: [
        { name: "Node.js", level: 94, desc: "Microservices, orchestration APIs, async workflows" },
        { name: "Express.js", level: 90, desc: "REST APIs, middleware, service composition" },
        { name: "FastAPI", level: 90, desc: "AI service APIs, validation, async endpoints" },
        { name: "PostgreSQL", level: 87, desc: "Query tuning, schema design, production fixes" },
        { name: "SQLite", level: 86, desc: "Embedded analytics stores, WAL mode, indexed views" },
        { name: "MongoDB", level: 84, desc: "Document modeling and full-stack data flows" },
        { name: "WebSockets", level: 84, desc: "Streaming chat, progress updates, realtime UX" },
      ],
    },
    {
      icon: Wrench,
      title: "AI Systems",
      color: "text-accent",
      bgColor: "from-accent/20 to-accent/5",
      skills: [
        { name: "LLM Systems", level: 90, desc: "Prompt behavior, live automation, model routing" },
        { name: "Agentic AI", level: 88, desc: "Autonomous workflows, safety gates, tool protocols" },
        { name: "Hybrid RAG", level: 90, desc: "BM25, dense embeddings, RRF, source grounding" },
        { name: "Graph Analytics", level: 86, desc: "NetworkX knowledge graphs and O2C relationship tracing" },
        { name: "Cross-Encoder Rerank", level: 86, desc: "Evidence ranking and confidence gating" },
        { name: "Reinforcement Learning", level: 82, desc: "GRPO training, reward design, evaluation" },
        { name: "LLM Guardrails", level: 88, desc: "SQL validation, refusals, retries, traceable decisions" },
      ],
    },
    {
      icon: Cloud,
      title: "Infra & Delivery",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5",
      skills: [
        { name: "Docker", level: 90, desc: "Containerized services, deployable AI apps" },
        { name: "CI/CD", level: 87, desc: "Jenkins pipelines, release automation, test gates" },
        { name: "Backstage", level: 85, desc: "Developer experience plugins and internal workflows" },
        { name: "AWS", level: 82, desc: "Cloud deployment basics and managed infrastructure" },
        { name: "Redis & Kafka", level: 82, desc: "Caching, events, and scalable service patterns" },
        { name: "Git & Linux", level: 90, desc: "Daily engineering workflow and production debugging" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full mb-8">
            <Star className="w-5 h-5 text-primary animate-neon-pulse" />
            <span className="text-sm font-bold text-primary">TECHNICAL EXPERTISE</span>
            <Star className="w-5 h-5 text-accent animate-neon-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-normal">
            Skills & <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient-shift">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Production-grade engineering across frontend, backend, AI systems, and deployment automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`group relative bg-gradient-to-br ${category.bgColor} backdrop-blur-sm p-8 rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-pop-in overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${category.color} group-hover:animate-neon-pulse`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">Production Experience</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div
                        key={skill.name}
                        className="group/skill relative bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-background/80"
                      >
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="font-bold text-foreground group-hover/skill:text-primary transition-colors duration-300">
                              {skill.name}
                            </span>
                            <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-semibold flex-shrink-0">
                              {skill.level}%
                            </span>
                          </div>
                          <Zap className="w-4 h-4 text-accent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                        </div>

                        <div className="w-full bg-muted/50 rounded-full h-2 mb-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.2 + i * 0.1}s`,
                            }}
                          />
                        </div>

                        <p className="text-xs text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>Want to see these skills in action?</span>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary hover:text-accent transition-colors duration-300 font-semibold underline decoration-primary/30 hover:decoration-accent/50"
            >
              View My Projects -&gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

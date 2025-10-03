import { Code, Database, Cloud, Wrench, Zap, Star } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Architecture",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5",
      skills: [
        { name: "React.js", level: 95, desc: "Advanced hooks, context, performance optimization" },
        { name: "Next.js 14", level: 90, desc: "App Router, SSR, ISR, middleware" },
        { name: "TypeScript", level: 92, desc: "Advanced types, generics, utility types" },
        { name: "Tailwind CSS", level: 88, desc: "Custom components, responsive design" },
        { name: "React Native", level: 85, desc: "Cross-platform mobile development" },
        { name: "Micro-frontends", level: 80, desc: "Module federation, independent deployment" }
      ]
    },
    {
      icon: Database,
      title: "Backend & Data Engineering",
      color: "text-secondary", 
      bgColor: "from-secondary/20 to-secondary/5",
      skills: [
        { name: "Node.js", level: 93, desc: "Performance tuning, clustering, streams" },
        { name: "Python", level: 90, desc: "FastAPI, async programming, data processing" },
        { name: "Microservices", level: 88, desc: "Event-driven architecture, API gateway" },
        { name: "Apache Kafka", level: 85, desc: "Event streaming, distributed systems" },
        { name: "PostgreSQL", level: 87, desc: "Advanced queries, indexing, optimization" },
        { name: "Redis", level: 82, desc: "Caching strategies, pub/sub, clustering" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-accent",
      bgColor: "from-accent/20 to-accent/5",
      skills: [
        { name: "AWS", level: 88, desc: "EC2, Lambda, RDS, S3, CloudFormation" },
        { name: "Docker", level: 90, desc: "Multi-stage builds, optimization, orchestration" },
        { name: "Kubernetes", level: 82, desc: "Deployments, services, ingress, monitoring" },
        { name: "CI/CD", level: 85, desc: "Jenkins, GitHub Actions, automated testing" },
        { name: "Terraform", level: 78, desc: "Infrastructure as code, state management" },
        { name: "Monitoring", level: 80, desc: "Prometheus, Grafana, ELK stack" }
      ]
    },
    {
      icon: Wrench,
      title: "Advanced Tools & Practices",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5",
      skills: [
        { name: "System Design", level: 85, desc: "Scalable architecture, load balancing" },
        { name: "GraphQL", level: 82, desc: "Schema design, Apollo, federation" },
        { name: "AI Integration", level: 88, desc: "LLM APIs, embeddings, vector databases" },
        { name: "Performance", level: 90, desc: "Core Web Vitals, bundle optimization" },
        { name: "Testing", level: 87, desc: "Jest, Cypress, TDD, integration testing" },
        { name: "Agile/Scrum", level: 85, desc: "Sprint planning, code reviews, mentoring" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full mb-8">
            <Star className="w-5 h-5 text-primary animate-neon-pulse" />
            <span className="text-sm font-bold text-primary tracking-wider">TECHNICAL EXPERTISE</span>
            <Star className="w-5 h-5 text-accent animate-neon-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            Skills & <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient-shift">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Production-grade expertise in modern technologies, proven at scale with <span className="text-primary font-semibold">50K+ users</span> at MetLife
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${category.bgColor} backdrop-blur-sm p-8 rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-pop-in overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${category.color} group-hover:animate-neon-pulse`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">Production Experience</p>
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div 
                        key={i}
                        className="group/skill relative bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-background/80"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-foreground group-hover/skill:text-primary transition-colors duration-300">
                              {skill.name}
                            </span>
                            <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <Zap className="w-4 h-4 text-accent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-muted/50 rounded-full h-2 mb-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.2 + i * 0.1}s`
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

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>Want to see these skills in action?</span>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary hover:text-accent transition-colors duration-300 font-semibold underline decoration-primary/30 hover:decoration-accent/50"
            >
              View My Projects →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

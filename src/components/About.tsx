import { Target, Rocket, Trophy, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const highlights = [
    { icon: Target, label: "Production Experience", value: "MetLife GCC", color: "text-primary" },
    { icon: Rocket, label: "System Performance", value: "40% Faster", color: "text-secondary" },
    { icon: Trophy, label: "Hackathon Wins", value: "4x Champion", color: "text-accent" },
    { icon: TrendingUp, label: "Impact", value: "50K+ Users", color: "text-primary" },
  ];

  const techStack = [
    "React", "Node.js", "TypeScript", "Python", "Next.js",
    "Express.js", "MongoDB", "PostgreSQL", "Redis", "Docker",
    "Apache Kafka", "REST APIs", "Microservices", "AWS", "FastAPI"
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-lg mb-6">
            <span className="text-sm font-bold text-primary">WHO I AM</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Bio - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in-left">
            <div className="bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition-all">
              <p className="text-lg leading-relaxed mb-6">
                I'm a <span className="text-primary font-bold">final-year Computer Science student</span> who doesn't just write code—I architect solutions that scale. My journey at <span className="text-secondary font-bold">MetLife</span> taught me how to build systems that handle <span className="text-accent font-bold">50,000+ users</span> without breaking a sweat.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                From engineering AI-powered chatbots that slashed response times by <span className="text-primary font-bold">35%</span> to orchestrating CI/CD pipelines that cut deployment time by <span className="text-secondary font-bold">40%</span>, I thrive on turning complex problems into elegant, production-ready solutions.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not pushing code to production, I'm dominating hackathons—<span className="text-accent font-bold">4 first-place wins</span> and counting. I believe the best developers aren't just coders; they're problem-solvers, architects, and relentless optimizers.
              </p>
            </div>

            {/* Tech Stack with Unique Layout */}
            <div className="bg-gradient-to-br from-muted to-muted/50 p-8 rounded-2xl border-2 border-border">
              <h3 className="text-2xl font-bold mb-6">Tech Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Badge 
                    key={index} 
                    className="px-4 py-2 text-sm font-semibold bg-background border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all cursor-pointer hover:scale-105"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights - Bento Box Style */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 animate-slide-in-right">
            {highlights.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
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

        {/* Education Highlight */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 rounded-2xl border-2 border-primary/30 animate-pop-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-sm font-bold text-primary mb-2">EDUCATION</div>
              <h3 className="text-2xl font-black mb-2">B.Tech in Computer Science & Engineering (IoT)</h3>
              <p className="text-muted-foreground">R.V.R & J.C College of Engineering, Guntur • 2022–2026</p>
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

import { ExternalLink, Github, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();
  const featuredProjects = [
    {
      title: "AI Startup Success Platform",
      description: "Architected distributed, event-driven microservices with Apache Kafka and Redis. Achieved 99.9% availability serving 1000+ concurrent users.",
      tech: ["Next.js", "Node.js", "Kafka", "Redis", "MySQL"],
      impact: "40% faster response • 1000+ DAU",
      color: "from-primary to-accent",
      github: "https://github.com/sri11223"
    },
    {
      title: "Advanced UI Workflow",
      description: "Enterprise conversational design system transforming natural language into professional wireframes with 95% validation score.",
      tech: ["React.js", "FastAPI", "WebSockets", "RAG"],
      impact: "60% faster prototyping • Real-time collab",
      color: "from-secondary to-primary",
      github: "https://github.com/sri11223"
    },
    {
      title: "MetLife Customer Support Bot",
      description: "AI-powered chatbot serving 50K+ insurance customers with optimized REST APIs and intelligent query routing.",
      tech: ["TypeScript", "Node.js", "AI Integration"],
      impact: "20% better resolution • 35% faster",
      color: "from-accent to-secondary",
      github: "https://github.com/sri11223"
    },
    {
      title: "Backstage DevX Automation",
      description: "Custom plugins automating business workflows and internal processes, dramatically boosting developer productivity.",
      tech: ["TypeScript", "Backstage", "Microservices"],
      impact: "25% productivity boost",
      color: "from-primary to-secondary",
      github: "https://github.com/sri11223"
    }
  ];

  const moreProjects = [
    { title: "Weekend Manager", tech: ["React", "Node.js"], url: "https://github.com/sri11223/weekend-manager-app" },
    { title: "HackPrix Theme", tech: ["React", "Tailwind"], url: "https://github.com/sri11223/hackprix-theme" },
    { title: "Backstage Demo", tech: ["TypeScript"], url: "https://github.com/sri11223/backstage-demo" },
    { title: "Text Verification", tech: ["Python", "FastAPI"], url: "https://github.com/sri11223/textverfication" },
    { title: "FAQ Admin", tech: ["React", "Node.js"], url: "https://github.com/sri11223/faq_admin" },
    { title: "Health Tracker", tech: ["React Native"], url: "https://github.com/sri11223/health" },
    { title: "Backend Suite", tech: ["Express", "MongoDB"], url: "https://github.com/sri11223/backend" },
    { title: "Bus Reservation", tech: ["React", "MySQL"], url: "https://github.com/sri11223/busreservation_Metlife" },
    { title: "Money Manager", tech: ["React", "Redux"], url: "https://github.com/sri11223/moneymanger" },
    { title: "Appointments App", tech: ["React"], url: "https://github.com/sri11223/appointmeentsapp" },
    { title: "Twitter API Clone", tech: ["Node.js", "PostgreSQL"], url: "https://github.com/sri11223/twitter-api" },
    { title: "App Store Clone", tech: ["React", "TS"], url: "https://github.com/sri11223/appstore" },
    { title: "Capitals Quiz", tech: ["React"], url: "https://github.com/sri11223/capitals_app" },
    { title: "Spotify Clone", tech: ["React", "API"], url: "https://github.com/sri11223/spotify" },
    { title: "School Management", tech: ["React", "MongoDB"], url: "https://github.com/sri11223" },
    { title: "Evently Platform", tech: ["Next.js", "Prisma"], url: "https://github.com/sri11223" },
  ];

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-secondary/10 border-l-4 border-secondary rounded-r-lg mb-6">
            <span className="text-sm font-bold text-secondary">MY WORK</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Featured <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Production-grade applications and enterprise solutions built with bleeding-edge tech
          </p>
        </div>

        {/* Featured Projects - Asymmetric Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-card p-8 rounded-2xl border-2 border-border hover:border-primary transition-all animate-pop-in ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-black group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Zap className="w-6 h-6 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-primary/30 font-semibold">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-primary">
                    📊 {project.impact}
                  </p>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects - Call to Action */}
        <div className="animate-fade-in">
          <div className="text-center bg-gradient-to-br from-card to-card/50 p-12 rounded-3xl border-2 border-border hover:border-primary/30 transition-all">
            <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Explore More Projects
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover {moreProjects.length}+ additional projects including mobile apps, AI tools, DevOps automation, and full-stack applications
            </p>
            
            {/* Quick preview of project types */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Full Stack", "AI/ML", "Mobile Apps", "DevOps", "Web APIs", "React Native"].map((type, index) => (
                <Badge 
                  key={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                >
                  {type}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => navigate("/projects")}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary font-bold px-8 py-4 rounded-xl"
                onClick={() => window.open("https://github.com/sri11223", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

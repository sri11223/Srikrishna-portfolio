import { ExternalLink, Github, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { allProjects, featuredProjects } from "@/data/projects";

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-secondary/10 border-l-4 border-secondary rounded-r-lg mb-6">
            <span className="text-sm font-bold text-secondary">MY WORK</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Featured <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Public AI systems and production work with real metrics, traceable architecture, and recruiter-readable proof.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card p-8 rounded-2xl border-2 border-border hover:border-primary transition-all animate-pop-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color ?? "from-primary to-accent"} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <Badge className="mb-3 bg-primary/10 border border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl font-black group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Zap className="w-6 h-6 text-secondary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30 font-semibold">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-sm font-bold text-primary">
                    Proof: {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                        onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                        onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-fade-in">
          <div className="text-center bg-gradient-to-br from-card to-card/50 p-12 rounded-3xl border-2 border-border hover:border-primary/30 transition-all">
            <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Explore the Project Archive
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse {allProjects.length} selected builds from a larger GitHub portfolio of 64 public repositories across AI safety, agentic support automation, full-stack apps, backend APIs, and client work.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["AI Safety", "Agentic AI", "Freelance", "FinTech", "Backend Systems", "Open Source"].map((type) => (
                <Badge
                  key={type}
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
                title="Open my GitHub profile with 64 public repositories and more projects"
                onClick={() => window.open("https://github.com/sri11223", "_blank", "noopener,noreferrer")}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </Button>
            </div>

            <div className="mt-5 flex justify-center">
              <div className="px-4 py-2 bg-background/70 border border-primary/30 rounded-full text-sm font-bold text-primary">
                64 public repositories on GitHub - many more builds beyond this selected archive
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

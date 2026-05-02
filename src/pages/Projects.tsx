import { useState } from "react";
import { ExternalLink, Github, Search, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { allProjects, projectFilters } from "@/data/projects";

export const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects = allProjects.filter((project) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.longDescription.toLowerCase().includes(search) ||
      project.impact.toLowerCase().includes(search) ||
      project.tech.some((tech) => tech.toLowerCase().includes(search));

    const matchesTech =
      selectedTech === "All" ||
      project.category === selectedTech ||
      project.tech.some((tech) => tech.toLowerCase() === selectedTech.toLowerCase());

    return matchesSearch && matchesTech;
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-normal">
              All <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A curated archive of public AI systems, production internship work, backend services, and full-stack builds.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies, metrics, or keywords..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="pl-10 h-12 border-2 border-border focus:border-primary"
              />
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold mr-2">
                <Filter className="w-4 h-4" />
                Filter
              </div>
              {projectFilters.map((tech) => (
                <Button
                  key={tech}
                  variant={selectedTech === tech ? "default" : "outline"}
                  onClick={() => setSelectedTech(tech)}
                  className={selectedTech === tech ? "bg-primary text-primary-foreground" : "border-border hover:border-primary"}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground mb-8">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-gradient-to-br from-card to-card/50 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 overflow-hidden animate-pop-in ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                <div className={`aspect-video bg-gradient-to-br ${project.color ?? "from-primary/20 to-accent/20"} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-background/20" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge className="bg-accent/90 text-accent-foreground">Featured</Badge>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm font-bold text-primary mb-4">
                    Proof: {project.impact}
                  </p>

                  {(project.github || project.demo) && (
                    <div className="flex gap-2 flex-wrap">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary hover:bg-primary hover:text-primary-foreground flex-1 min-w-[120px]"
                          onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="sm"
                          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex-1 min-w-[120px]"
                          onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No projects found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTech("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

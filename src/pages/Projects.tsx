import { useState } from "react";
import { ExternalLink, Github, Filter, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  const allProjects = [
    {
      title: "AI Startup Success Platform",
      description: "Architected distributed, event-driven microservices with Apache Kafka and Redis. Achieved 99.9% availability serving 1000+ concurrent users with real-time data processing.",
      longDescription: "A comprehensive platform built for AI startups to manage their operations, featuring microservices architecture with Apache Kafka for event streaming, Redis for caching, and MySQL for data persistence. Implemented CI/CD pipelines and achieved 99.9% uptime.",
      tech: ["Next.js", "Node.js", "Kafka", "Redis", "MySQL", "Docker"],
      category: "Full Stack",
      impact: "40% faster response • 1000+ DAU",
      github: "https://github.com/sri11223",
      demo: "https://demo.example.com",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Advanced UI Workflow",
      description: "Enterprise conversational design system transforming natural language into professional wireframes with 95% validation score.",
      longDescription: "Revolutionary design tool that uses AI to convert natural language descriptions into professional wireframes and mockups. Features real-time collaboration, version control, and integration with popular design tools.",
      tech: ["React.js", "FastAPI", "WebSockets", "RAG", "AI"],
      category: "AI/ML",
      impact: "60% faster prototyping • Real-time collab",
      github: "https://github.com/sri11223",
      demo: "https://demo.example.com",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "MetLife Customer Support Bot",
      description: "AI-powered chatbot serving 50K+ insurance customers with optimized REST APIs and intelligent query routing.",
      longDescription: "Enterprise-grade chatbot deployed at MetLife to handle customer inquiries. Features natural language processing, intelligent routing, and integration with legacy insurance systems.",
      tech: ["TypeScript", "Node.js", "AI Integration", "REST APIs"],
      category: "AI/ML",
      impact: "20% better resolution • 35% faster",
      github: "https://github.com/sri11223",
      demo: "https://demo.example.com",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Backstage DevX Automation",
      description: "Custom plugins automating business workflows and internal processes, dramatically boosting developer productivity.",
      longDescription: "Custom Backstage.io plugins developed to automate internal developer workflows at MetLife. Includes service catalog management, automated documentation, and deployment pipelines.",
      tech: ["TypeScript", "Backstage", "Microservices", "YAML"],
      category: "DevOps",
      impact: "25% productivity boost",
      github: "https://github.com/sri11223",
      demo: "https://demo.example.com",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Weekend Manager",
      description: "Smart weekend planning application with weather integration and activity recommendations.",
      longDescription: "Personal project management app that helps users plan their weekends effectively. Integrates weather APIs, local events, and personal preferences to suggest optimal activities.",
      tech: ["React", "Node.js", "Weather API", "MongoDB"],
      category: "Web App",
      impact: "Personal productivity tool",
      github: "https://github.com/sri11223/weekend-manager-app",
      image: "/placeholder.svg"
    },
    {
      title: "HackPrix Theme",
      description: "Responsive theme for hackathon websites with modern design patterns.",
      longDescription: "A modern, responsive theme specifically designed for hackathon websites. Features registration forms, schedule management, sponsor showcases, and real-time updates.",
      tech: ["React", "Tailwind", "CSS", "JavaScript"],
      category: "Frontend",
      impact: "Used by 5+ hackathons",
      github: "https://github.com/sri11223/hackprix-theme",
      image: "/placeholder.svg"
    },
    {
      title: "Health Tracker",
      description: "Cross-platform mobile app for tracking health metrics and fitness goals.",
      longDescription: "React Native application for tracking daily health metrics including steps, calories, water intake, and sleep patterns. Features charts, goal setting, and progress tracking.",
      tech: ["React Native", "SQLite", "Charts.js"],
      category: "Mobile",
      impact: "Personal health management",
      github: "https://github.com/sri11223/health",
      image: "/placeholder.svg"
    },
    {
      title: "Text Verification API",
      description: "FastAPI service for text validation and verification with ML models.",
      longDescription: "High-performance API service built with FastAPI for text validation, spam detection, and content moderation using machine learning models. Handles thousands of requests per minute.",
      tech: ["Python", "FastAPI", "ML", "Docker"],
      category: "Backend",
      impact: "99.9% accuracy rate",
      github: "https://github.com/sri11223/textverfication",
      image: "/placeholder.svg"
    },
    {
      title: "Bus Reservation System",
      description: "Full-stack bus booking platform with real-time seat availability.",
      longDescription: "Complete bus reservation system with user authentication, seat selection, payment integration, and real-time updates. Built during MetLife internship as a learning project.",
      tech: ["React", "MySQL", "Node.js", "Express"],
      category: "Full Stack",
      impact: "Learning project at MetLife",
      github: "https://github.com/sri11223/busreservation_Metlife",
      image: "/placeholder.svg"
    },
    {
      title: "Money Manager",
      description: "Personal finance tracking app with expense categorization and budgeting.",
      longDescription: "Redux-powered financial management application with expense tracking, budget planning, income management, and detailed analytics with charts and reports.",
      tech: ["React", "Redux", "Charts.js", "LocalStorage"],
      category: "Web App",
      impact: "Personal finance tool",
      github: "https://github.com/sri11223/moneymanger",
      image: "/placeholder.svg"
    }
  ];

  const technologies = ["All", "React", "Node.js", "TypeScript", "Python", "AI/ML", "Mobile", "Backend"];
  const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML", "Mobile", "DevOps", "Web App"];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTech = selectedTech === "All" || 
                       project.tech.includes(selectedTech) || 
                       project.category === selectedTech;
    
    return matchesSearch && matchesTech;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
            <h1 className="text-6xl md:text-7xl font-black mb-6">
              All <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive collection of my work spanning full-stack development, AI/ML, mobile apps, and DevOps automation.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-2 border-border focus:border-primary"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {technologies.map((tech) => (
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

          {/* Results count */}
          <p className="text-muted-foreground mb-8">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-card to-card/50 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge className="bg-accent/90 text-accent-foreground">Featured</Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-primary/30 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.impact && (
                    <p className="text-sm font-bold text-primary mb-4">
                      📊 {project.impact}
                    </p>
                  )}

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary hover:bg-primary hover:text-primary-foreground flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {project.demo && (
                      <Button 
                        size="sm"
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex-1"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No projects found matching your criteria</p>
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
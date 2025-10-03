import { Code, Database, Cloud, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "text-primary",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Native"]
    },
    {
      icon: Database,
      title: "Backend & Data",
      color: "text-secondary",
      skills: ["Node.js", "Express.js", "Python", "REST APIs", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-accent",
      skills: ["AWS", "Docker", "Jenkins", "CI/CD", "Apache Kafka", "Microservices"]
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "text-primary",
      skills: ["Git", "Backstage", "Postman", "System Design", "Agile"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 border-l-4 border-accent rounded-r-lg mb-6">
            <span className="text-sm font-bold text-accent">TECH STACK</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Skills & <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-8 rounded-2xl border-2 border-border hover:border-primary transition-all animate-pop-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-black">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="px-4 py-3 bg-muted rounded-lg font-semibold text-center hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

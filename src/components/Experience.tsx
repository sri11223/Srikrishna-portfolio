import { Briefcase, Trophy, GraduationCap } from "lucide-react";

export const Experience = () => {
  const achievements = [
    {
      title: "1st Place – Techolution Hackathon.V1 2025",
      description: "Won first place with 95% validation score using AI-powered enterprise solution",
      color: "border-primary"
    },
    {
      title: "1st Place – 24-Hour NRI Hackathon (Top 0.8%)",
      description: "Led team to victory among 119 teams; delivered functional prototype within 24 hours",
      color: "border-secondary"
    },
    {
      title: "Man of the Event – MetLife Code Challenge",
      description: "Top individual performer among 60+ participants in business application development",
      color: "border-accent"
    },
    {
      title: "Runner-Up – TECHTREK 2k25",
      description: "Achieved top 2% ranking among 100+ competitors in full-stack development",
      color: "border-primary"
    }
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

        {/* MetLife Experience */}
        <div className="mb-16 animate-slide-in-left">
          <div className="bg-gradient-to-br from-card to-card/50 p-10 rounded-2xl border-2 border-primary">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-black text-primary mb-2">MetLife GCC</h3>
                    <p className="text-xl font-bold">Software Engineering Intern</p>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0">
                    <p className="font-bold">Feb 2025 – August 2025</p>
                    <p>Noida, India</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Engineered AI chatbot serving 50K+ customers → 20% better resolution, 35% faster response",
                    "Designed Backstage DevX plugins in TypeScript → 25% productivity boost",
                    "Orchestrated CI/CD pipelines with Docker & Jenkins → 40% faster deployments, 99.9% uptime",
                    "Built and maintained 15+ REST APIs handling 10K+ daily requests with JWT authentication"
                  ].map((achievement, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-secondary text-2xl font-bold">▸</span>
                      <p className="text-lg">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16 animate-slide-in-right">
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="h-10 w-10 text-secondary" />
            <h3 className="text-3xl font-black">Hackathon Dominance</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`bg-card p-6 rounded-2xl border-2 ${achievement.color} hover:scale-105 transition-all group`}
              >
                <Trophy className="h-8 w-8 text-secondary mb-4 group-hover:animate-pop-in" />
                <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="animate-pop-in">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="h-10 w-10 text-accent" />
            <h3 className="text-3xl font-black">Education</h3>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-10 rounded-2xl border-2 border-accent">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1">
                <h4 className="text-2xl font-black mb-3">
                  B.Tech in Computer Science & Engineering (IoT)
                </h4>
                <p className="text-lg font-semibold mb-2">R.V.R & J.C College of Engineering, Guntur</p>
                <p className="text-muted-foreground">
                  Data Structures • Operating Systems • Distributed Systems • Database Systems • 
                  Computer Networks • Software Engineering • System Design
                </p>
              </div>
              <div className="text-center lg:text-right flex-shrink-0">
                <div className="inline-block px-8 py-6 bg-accent/20 rounded-2xl border-2 border-accent">
                  <div className="text-5xl font-black text-accent mb-2">9.08</div>
                  <div className="text-sm font-bold text-muted-foreground">CGPA / 10.0</div>
                </div>
                <p className="text-muted-foreground mt-4 font-semibold">2022 – 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

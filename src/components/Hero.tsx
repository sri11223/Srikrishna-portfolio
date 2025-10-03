import { Github, Linkedin, Mail, Download, Sparkles, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary/20 rotate-45 animate-float-slow" />
      <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-secondary/20 rounded-full animate-rotate-slow" />
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-accent/10 backdrop-blur-sm animate-float-slow" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Left */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary animate-neon-pulse" />
              <span className="text-sm font-bold text-primary">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
            
            {/* Name with Unique Typography */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                  <span className="inline-block hover:animate-glitch">S</span>
                  <span className="inline-block hover:animate-glitch" style={{ animationDelay: '0.1s' }}>R</span>
                  <span className="inline-block hover:animate-glitch" style={{ animationDelay: '0.2s' }}>I</span>
                  <span className="inline-block hover:animate-glitch ml-4" style={{ animationDelay: '0.3s' }}>K</span>
                  <span className="inline-block hover:animate-glitch" style={{ animationDelay: '0.4s' }}>R</span>
                  <span className="inline-block hover:animate-glitch" style={{ animationDelay: '0.5s' }}>I</span>
                  <span className="inline-block hover:animate-glitch" style={{ animationDelay: '0.6s' }}>S</span>
                  <span className="inline-block hover:animate-glitch" style={{ animationDelay: '0.7s' }}>H</span>
                  <span className="inline-block hover:animate-glitch" style={{ animationDelay: '0.8s' }}>N</span>
                  <span className="inline-block hover:animate-glitch" style={{ animationDelay: '0.9s' }}>A</span>
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                Full Stack Alchemist
              </h2>
            </div>
            
            {/* Role Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-card border-l-4 border-primary rounded-r-lg">
                <Code2 className="w-4 h-4 inline mr-2 text-primary" />
                <span className="font-semibold">Software Engineer</span>
              </div>
              <div className="px-4 py-2 bg-card border-l-4 border-secondary rounded-r-lg">
                <Zap className="w-4 h-4 inline mr-2 text-secondary" />
                <span className="font-semibold">AI Enthusiast</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Crafting <span className="text-primary font-bold">scalable microservices</span> and <span className="text-secondary font-bold">AI-powered solutions</span> that serve <span className="text-accent font-bold">50K+ users</span> in production at MetLife.
            </p>

            {/* CTA Buttons with Unique Style */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 shadow-[4px_4px_0px_0px_hsl(var(--primary-foreground))] hover:shadow-[2px_2px_0px_0px_hsl(var(--primary-foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold px-8 shadow-[4px_4px_0px_0px_hsl(var(--secondary))] hover:shadow-[2px_2px_0px_0px_hsl(var(--secondary))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>

            {/* Social Links - Horizontal Pills */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/sri11223", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/srikrishna-nutalapati", label: "LinkedIn" },
                { icon: Mail, href: "mailto:srikrishnanutalapati@gmail.com", label: "Email" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-primary rounded-full transition-all hover:scale-105"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-xs transition-all overflow-hidden whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image - Right with Unique Frame */}
          <div className="relative animate-slide-in-right lg:justify-self-end">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-20 blur-2xl animate-neon-pulse" />
              
              {/* Image Container with Brutal Border */}
              <div className="relative bg-card p-2 rounded-3xl border-4 border-primary">
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-secondary rounded-full animate-float-slow" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-accent/30 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }} />
                
                <img 
                  src={profilePhoto} 
                  alt="Srikrishna Nutalapati" 
                  className="relative w-full aspect-square rounded-2xl object-cover"
                />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-black text-primary">50K+</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-secondary">15+</div>
                      <div className="text-xs text-muted-foreground">APIs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-accent">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

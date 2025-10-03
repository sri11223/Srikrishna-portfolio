import { useState, useEffect } from "react";
import { Menu, X, Zap, Download } from "lucide-react";
import resumePDF from "@/assets/Srikrishna_Nutalapati.pdf";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "experience", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    // Only open resume in new tab for viewing - no automatic download
    window.open(resumePDF, "_blank");
    setIsMobileMenuOpen(false);
  };  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b-2 border-primary/20" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Unique Design */}
            <button 
              onClick={() => scrollToSection("home")}
              className="relative group"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-black text-xl rounded-lg shadow-[4px_4px_0px_0px_hsl(var(--accent))] group-hover:shadow-[2px_2px_0px_0px_hsl(var(--accent))] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                <Zap className="w-5 h-5" />
                <span>SN</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10 text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Resume Button */}
              <button
                onClick={handleResumeClick}
                className="px-4 py-2 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-all shadow-[2px_2px_0px_0px_hsl(var(--accent))] hover:shadow-[1px_1px_0px_0px_hsl(var(--accent))] hover:translate-x-[1px] hover:translate-y-[1px] flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-primary/10 text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Resume Button */}
                <button
                  onClick={handleResumeClick}
                  className="text-left px-4 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  View Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

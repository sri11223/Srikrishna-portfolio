import { useEffect, useState } from 'react';
import { Home, User, Briefcase, Code, Trophy, Mail, ChevronUp } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export const ScrollingSidebar = ({ className = '' }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Show/hide sidebar based on scroll position
      setIsVisible(window.scrollY > 200);

      // Detect active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const { id, element } of sectionElements) {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
    } ${className}`}>
      {/* Main Sidebar Container */}
      <div className="relative">
        {/* Progress Bar Background */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border rounded-full">
          {/* Progress Indicator */}
          <div 
            className="w-full bg-gradient-to-b from-primary to-accent rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Navigation Items */}
        <div className="relative space-y-4 py-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group relative flex items-center transition-all duration-300 ${
                  isActive ? 'scale-110' : 'hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Navigation Dot */}
                <div className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                    : 'bg-background border-border hover:border-primary group-hover:bg-primary/20'
                }`}>
                  {/* Icon */}
                  <Icon className={`absolute inset-0 w-3 h-3 m-auto transition-all duration-300 ${
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'
                  }`} />
                </div>

                {/* Label Tooltip */}
                <div className={`absolute right-full mr-4 px-3 py-2 bg-card border border-border rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap ${
                  isActive || 'opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}>
                  <span className="text-sm font-medium">{section.label}</span>
                  {/* Arrow */}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-border" />
                </div>

                {/* Active Section Indicator */}
                {isActive && (
                  <div className="absolute -inset-2 rounded-full bg-primary/10 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Scroll to Top Button */}
        <div className="relative mt-6 pt-4 border-t border-border">
          <button
            onClick={scrollToTop}
            className={`group relative flex items-center justify-center w-4 h-4 transition-all duration-300 hover:scale-110 ${
              scrollProgress > 10 ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-secondary border-2 border-secondary shadow-lg shadow-secondary/50 flex items-center justify-center">
              <ChevronUp className="w-3 h-3 text-secondary-foreground" />
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-3 py-2 bg-card border border-border rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
              <span className="text-sm font-medium">Back to Top</span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-border" />
            </div>
          </button>
        </div>

        {/* Scroll Progress Text */}
        <div className="relative mt-4 text-center">
          <div className="text-xs text-muted-foreground font-mono">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl blur-xl -z-10" />
    </div>
  );
};
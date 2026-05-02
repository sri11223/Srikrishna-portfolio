import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { RecruiterSnapshot } from "@/components/RecruiterSnapshot";
import { About } from "@/components/About";
import { ProofMetrics } from "@/components/ProofMetrics";
import { CaseStudies } from "@/components/CaseStudies";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <RecruiterSnapshot />
      <About />
      <ProofMetrics />
      <CaseStudies />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;

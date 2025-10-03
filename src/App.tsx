import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollingSidebar } from "@/components/ScrollingSidebar";
import { VSCodeLoading } from "@/components/VSCodeLoading";
import Index from "./pages/Index";
import { ProjectsPage } from "./pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading on first visit
    const hasVisited = localStorage.getItem('portfolio-visited');
    return !hasVisited;
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Mark that user has visited the portfolio
    localStorage.setItem('portfolio-visited', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <VSCodeLoading onLoadingComplete={handleLoadingComplete} />}
        {!isLoading && (
          <>
            <CustomCursor />
            <ScrollingSidebar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<ProjectsPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

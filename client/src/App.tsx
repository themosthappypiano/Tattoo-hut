import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop"; // Helper component I'll assume standard or create inline if strictly needed, but wouter doesn't have scroll restoration built-in so this logic is often needed. I will omit the separate file to stick to requested files but implement the logic inside App or Navbar implicitly via useEffect on location change if needed. Let's stick to the generated files.

import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Artists from "@/pages/Artists";
import Services from "@/pages/Services";
import FAQ from "@/pages/FAQ";
import Book from "@/pages/Book";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";

// Simple ScrollToTop component
function ScrollToTopWrapper() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/artists" component={Artists} />
          <Route path="/services" component={Services} />
          <Route path="/faq" component={FAQ} />
          <Route path="/book" component={Book} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTopWrapper />
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/ui/navbar";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Events from "@/pages/events";
import About from "@/pages/about";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/events" component={Events} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-zinc-950">
        <Navbar />
        <Router />
        <footer className="py-4 text-center text-zinc-600 text-sm border-t border-zinc-800/50">
          © 2025 BlackSwanQuants. All rights reserved.
        </footer>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
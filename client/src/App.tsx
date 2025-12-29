import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/ui/navbar";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Events from "@/pages/events";
import About from "@/pages/about";
import OptionPricer from "@/pages/option-pricer";
import News from "@/pages/news";

function Router() {
  const [location] = useLocation();
  // Scroll to top on route change to avoid preserved scroll glitches
  if (typeof window !== 'undefined') {
    // microtask to ensure DOM updated
    Promise.resolve().then(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }));
  }
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/events" component={Events} />
      <Route path="/news" component={News} />
      <Route path="/option-pricer" component={OptionPricer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Router />
      <footer className="py-4 text-center text-zinc-600 text-sm border-t border-zinc-800/50">
        © 2025 BlackSwanQuants. All rights reserved.
      </footer>
      <Toaster />
    </div>
  );
}

export default App;
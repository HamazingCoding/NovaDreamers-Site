import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Games from "@/pages/Games";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/games" component={Games} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Set the document title
    document.title = "NovaDreamers Studio - Dream. Develop. Dominate Game Worlds.";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'NovaDreamers Studio is a game development studio creating immersive gaming experiences that transport players to new worlds and realities.');
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "NovaDreamers Studio is a game development studio creating immersive gaming experiences that transport players to new worlds and realities.";
      document.head.appendChild(meta);
    }
    
    // Add Open Graph tags for better social media sharing
    const ogTags = [
      { property: "og:title", content: "NovaDreamers Studio - Dream. Develop. Dominate Game Worlds." },
      { property: "og:description", content: "Discover futuristic games from NovaDreamers Studio. Explore our game catalog, meet our team, and contact us for collaborations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.origin },
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (ogTag) {
        ogTag.setAttribute("content", tag.content);
      } else {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", tag.property);
        ogTag.setAttribute("content", tag.content);
        document.head.appendChild(ogTag);
      }
    });
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;

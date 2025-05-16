import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedGames from "@/components/FeaturedGames";
import { useLocation } from "wouter";

export default function Home() {
  const [location, setLocation] = useLocation();
  
  // Handle hash navigation for smooth scrolling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Slight delay to ensure components are mounted
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedGames />
    </div>
  );
}

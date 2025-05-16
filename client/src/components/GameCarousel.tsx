import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Game } from "@/lib/games";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GameCarouselProps {
  games: Game[];
}

export default function GameCarousel({ games }: GameCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    
    // Auto-rotate every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? games.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === games.length - 1 ? 0 : prevIndex + 1));
  };

  // Define the color classes based on the game category
  const getColorClasses = (category: string) => {
    switch (category) {
      case 'strategy':
        return {
          text: "text-[hsl(var(--neon-teal))]",
          badge: "bg-[hsl(var(--neon-teal))] bg-opacity-30 text-white"
        };
      case 'arcade':
        return {
          text: "text-[hsl(var(--neon-purple))]",
          badge: "bg-[hsl(var(--neon-purple))] bg-opacity-30 text-white"
        };
      case 'adventure':
        return {
          text: "text-[hsl(var(--neon-pink))]",
          badge: "bg-[hsl(var(--neon-pink))] bg-opacity-30 text-white"
        };
      default:
        return {
          text: "text-[hsl(var(--neon-teal))]",
          badge: "bg-[hsl(var(--neon-teal))] bg-opacity-30 text-white"
        };
    }
  };

  return (
    <div className="relative" ref={carouselRef}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex transition-transform duration-500 ease-in-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map((game, index) => {
              // Only show the current index and the ones to its left and right (on larger screens)
              const isCurrent = index === currentIndex;
              const isPrev = index === (currentIndex === 0 ? games.length - 1 : currentIndex - 1);
              const isNext = index === (currentIndex === games.length - 1 ? 0 : currentIndex + 1);
              
              if (!isCurrent && !isPrev && !isNext) return null;
              
              const colors = getColorClasses(game.category);
              
              return (
                <div 
                  key={game.id} 
                  className={`w-full md:w-auto flex-shrink-0 px-4 transition-all duration-300 ${isCurrent ? 'opacity-100 scale-105 z-10' : 'opacity-80 scale-95'}`}
                  style={{ display: isCurrent ? 'block' : isPrev || isNext ? 'block' : 'none' }}
                >
                  <div className="bg-[hsl(var(--space-gray))] rounded-xl overflow-hidden shadow-lg hover:shadow-neon-purple transition-all duration-300 h-full">
                    <img 
                      src={game.image} 
                      alt={`${game.title} Game`} 
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className={`font-['Orbitron'] text-xl ${colors.text}`}>{game.title}</h3>
                        <span className={`text-sm rounded-full px-3 py-1 ${colors.badge}`}>{game.status}</span>
                      </div>
                      <p className="text-[hsl(var(--muted-foreground))] mb-4">{game.description}</p>
                      <a href="#games" className={`inline-block font-['Rajdhani'] ${colors.text} hover:text-[hsl(var(--neon-teal))] transition-colors duration-300`}>
                        Learn More &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Slider Controls */}
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-[hsl(var(--space-black))] rounded-full p-2 focus:outline-none z-20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-[hsl(var(--space-black))] rounded-full p-2 focus:outline-none z-20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      
      {/* Pagination Indicators */}
      <div className="flex justify-center mt-6">
        {games.map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[hsl(var(--neon-purple))]'
                : 'bg-[hsl(var(--muted))]'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

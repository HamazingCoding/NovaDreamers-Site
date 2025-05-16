import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GameCard from "@/components/GameCard";
import { games } from "@/lib/games";

type GameCategory = "all" | "strategy" | "arcade" | "adventure";

export default function Games() {
  const [activeFilter, setActiveFilter] = useState<GameCategory>("all");
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredGames(games);
    } else {
      setFilteredGames(games.filter(game => game.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 bg-[hsl(var(--space-black))] relative min-h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[hsl(var(--space-black))] opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl mb-4">Our Games</h1>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Dive into our world of immersive games spanning multiple genres and realities.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--neon-pink))] to-[hsl(var(--neon-purple))] mx-auto mt-4"></div>
        </motion.div>
        
        {/* Game Filters */}
        <motion.div 
          className="flex justify-center mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
            className={`py-2 px-6 m-2 rounded-full font-['Rajdhani'] transition-all duration-300 ${activeFilter === 'all' ? 'bg-[hsl(var(--neon-purple))] text-white' : 'bg-[hsl(var(--space-gray))] text-white hover:bg-[hsl(var(--neon-teal))]'}`}
            onClick={() => setActiveFilter('all')}
          >
            All Games
          </button>
          <button 
            className={`py-2 px-6 m-2 rounded-full font-['Rajdhani'] transition-all duration-300 ${activeFilter === 'strategy' ? 'bg-[hsl(var(--neon-purple))] text-white' : 'bg-[hsl(var(--space-gray))] text-white hover:bg-[hsl(var(--neon-teal))]'}`}
            onClick={() => setActiveFilter('strategy')}
          >
            Strategy
          </button>
          <button 
            className={`py-2 px-6 m-2 rounded-full font-['Rajdhani'] transition-all duration-300 ${activeFilter === 'arcade' ? 'bg-[hsl(var(--neon-purple))] text-white' : 'bg-[hsl(var(--space-gray))] text-white hover:bg-[hsl(var(--neon-pink))]'}`}
            onClick={() => setActiveFilter('arcade')}
          >
            Arcade
          </button>
          <button 
            className={`py-2 px-6 m-2 rounded-full font-['Rajdhani'] transition-all duration-300 ${activeFilter === 'adventure' ? 'bg-[hsl(var(--neon-purple))] text-white' : 'bg-[hsl(var(--space-gray))] text-white hover:bg-[hsl(var(--neon-purple))]'}`}
            onClick={() => setActiveFilter('adventure')}
          >
            Adventure
          </button>
        </motion.div>
        
        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

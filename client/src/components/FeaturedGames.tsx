import { motion } from "framer-motion";
import { Link } from "wouter";
import GameCarousel from "@/components/GameCarousel";
import { games } from "@/lib/games";

export default function FeaturedGames() {
  // Featured games to display in the carousel
  const featuredGames = games.slice(0, 3);

  return (
    <section id="featured-games" className="py-20 relative">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.2\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-['Orbitron'] text-3xl md:text-4xl mb-4">Featured Games</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--neon-teal))] to-[hsl(var(--neon-purple))] mx-auto"></div>
        </motion.div>
        
        {/* Games Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GameCarousel games={featuredGames} />
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/games">
            <div className="inline-block px-8 py-3 border-2 border-[hsl(var(--neon-purple))] text-[hsl(var(--neon-purple))] font-['Rajdhani'] rounded-lg hover:bg-[hsl(var(--neon-purple))] hover:text-white transition-all duration-300 cursor-pointer">
              View All Games
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

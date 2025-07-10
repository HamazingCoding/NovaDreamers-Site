import { motion } from "framer-motion";
import { Link } from "wouter";
import StarsBackground from "@/components/StarsBackground";
import novaLogo from "@/assets/clearnova.png";

export default function HeroSection() {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Stars background */}
      <StarsBackground />
      
      {/* Futuristic sci-fi background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[hsl(var(--space-black))] to-[hsl(var(--space-gray))]">
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="flex items-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={novaLogo} 
              alt="NovaDreamers Logo" 
              className="w-20 h-20 md:w-24 md:h-24 mr-4 object-contain"
            />
          </motion.div>
          
          <motion.h1 
            className="font-['Orbitron'] font-bold text-4xl md:text-6xl mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Nova<span className="gradient-text">Dreamers</span> Studio
          </motion.h1>
          <motion.p 
            className="font-['Rajdhani'] text-xl md:text-2xl mb-8 text-glow text-[hsl(var(--neon-teal))]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Dream. Develop. Dominate the Game Worlds.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link href="/games">
              <div className="bg-[hsl(var(--neon-purple))] hover:bg-opacity-80 text-white font-['Rajdhani'] py-3 px-8 rounded-lg transition-all duration-300 text-center shadow-neon-purple cursor-pointer">
                Discover Our Games
              </div>
            </Link>
            <Link href="/contact">
              <div className="border border-[hsl(var(--neon-teal))] text-[hsl(var(--neon-teal))] hover:bg-[hsl(var(--neon-teal))] hover:text-[hsl(var(--space-black))] font-['Rajdhani'] py-3 px-8 rounded-lg transition-all duration-300 text-center cursor-pointer">
                Get In Touch
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
      >
        <button 
          className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
          onClick={() => scrollToElement("featured-games")}
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </motion.div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const logoIcon = (
    <div className="w-10 h-10 mr-2 relative overflow-hidden">
      <div className="w-full h-full rounded-full bg-gradient-to-r from-[hsl(var(--neon-teal))] via-[hsl(var(--neon-purple))] to-[hsl(var(--neon-pink))] flex items-center justify-center">
        <div className="w-9 h-9 rounded-full bg-[hsl(var(--space-black))] flex items-center justify-center">
          <span className="text-[hsl(var(--neon-teal))] text-xl">★</span>
        </div>
      </div>
    </div>
  );

  const menuItems = [
    { path: "/", label: "Home", hoverColor: "hover:text-[hsl(var(--neon-teal))]" },
    { path: "/games", label: "Games", hoverColor: "hover:text-[hsl(var(--neon-purple))]" },
    { path: "/team", label: "Team", hoverColor: "hover:text-[hsl(var(--neon-pink))]" },
    { path: "/contact", label: "Contact", hoverColor: "hover:text-[hsl(var(--neon-teal))]" },
  ];

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled && "bg-[hsl(var(--space-black))] shadow-lg"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              {logoIcon}
              <span className="font-['Orbitron'] font-bold text-xl md:text-2xl text-glow text-white">
                NovaDreamers
              </span>
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={cn(
                  "font-['Rajdhani'] text-lg font-medium transition-colors duration-300",
                  item.hoverColor,
                  location === item.path && "text-[hsl(var(--neon-teal))]"
                )}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4 px-2 bg-[hsl(var(--space-black))] rounded-lg neon-border">
                {menuItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a className={cn(
                      "font-['Rajdhani'] text-lg font-medium transition-colors duration-300 px-4 py-2",
                      item.hoverColor,
                      location === item.path && "text-[hsl(var(--neon-teal))]"
                    )}>
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

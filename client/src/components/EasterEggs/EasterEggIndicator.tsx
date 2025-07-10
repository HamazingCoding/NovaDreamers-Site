import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEasterEggStats } from "./EasterEggManager";

export default function EasterEggIndicator() {
  const { completedCount, totalGames, isEasterEggMaster } = useEasterEggStats();
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    // Show indicator when user has found at least one easter egg
    setShowIndicator(completedCount > 0);
  }, [completedCount]);

  if (!showIndicator) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        className="fixed bottom-4 right-4 z-40"
      >
        <div className={`
          p-3 rounded-full border-2 transition-all duration-300
          ${isEasterEggMaster 
            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 border-yellow-400 shadow-lg shadow-yellow-500/50' 
            : 'bg-gradient-to-r from-purple-600 to-teal-600 border-purple-400 shadow-lg shadow-purple-500/50'
          }
        `}>
          <div className="flex items-center space-x-2 text-white text-sm font-medium">
            <span className="text-lg">
              {isEasterEggMaster ? '🏆' : '🎮'}
            </span>
            <span>
              {isEasterEggMaster ? 'Easter Egg Master!' : `${completedCount}/${totalGames} Easter Eggs`}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
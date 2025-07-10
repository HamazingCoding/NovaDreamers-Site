import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ClickCounter from "./ClickCounter";
import SequenceGame from "./SequenceGame";
import TypingChallenge from "./TypingChallenge";

type EasterEggType = 'click' | 'sequence' | 'typing' | null;

interface EasterEggManagerProps {
  trigger: EasterEggType;
  onClose: () => void;
}

export default function EasterEggManager({ trigger, onClose }: EasterEggManagerProps) {
  const [completedGames, setCompletedGames] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load completed games from localStorage
    const saved = localStorage.getItem('novadreamers-easter-eggs');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedGames(new Set(parsed));
      } catch (e) {
        console.error('Failed to parse saved easter eggs:', e);
      }
    }
  }, []);

  const handleGameComplete = (gameType: string) => {
    const newCompleted = new Set(completedGames);
    newCompleted.add(gameType);
    setCompletedGames(newCompleted);
    
    // Save to localStorage
    localStorage.setItem('novadreamers-easter-eggs', JSON.stringify(Array.from(newCompleted)));
    
    // Show completion notification
    const completedCount = newCompleted.size;
    const totalGames = 3;
    
    if (completedCount === totalGames) {
      // All games completed
      setTimeout(() => {
        alert('🎉 Easter Egg Master! You\'ve found and completed all hidden mini-games on NovaDreamers!');
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {trigger === 'click' && (
        <ClickCounter
          target={10}
          onComplete={() => handleGameComplete('click')}
          onClose={onClose}
        />
      )}
      {trigger === 'sequence' && (
        <SequenceGame
          onComplete={() => handleGameComplete('sequence')}
          onClose={onClose}
        />
      )}
      {trigger === 'typing' && (
        <TypingChallenge
          onComplete={() => handleGameComplete('typing')}
          onClose={onClose}
        />
      )}
    </AnimatePresence>
  );
}

// Hook to get easter egg stats
export function useEasterEggStats() {
  const [completedGames, setCompletedGames] = useState<Set<string>>(new Set());
  const [totalGames] = useState(3);

  useEffect(() => {
    const saved = localStorage.getItem('novadreamers-easter-eggs');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedGames(new Set(parsed));
      } catch (e) {
        console.error('Failed to parse saved easter eggs:', e);
      }
    }
  }, []);

  return {
    completedCount: completedGames.size,
    totalGames,
    completedGames,
    isEasterEggMaster: completedGames.size === totalGames
  };
}
import { useState, useCallback } from "react";

type EasterEggType = 'click' | 'sequence' | 'typing' | null;

export function useEasterEggs() {
  const [activeEasterEgg, setActiveEasterEgg] = useState<EasterEggType>(null);

  const triggerEasterEgg = useCallback((type: EasterEggType) => {
    setActiveEasterEgg(type);
  }, []);

  const closeEasterEgg = useCallback(() => {
    setActiveEasterEgg(null);
  }, []);

  return {
    activeEasterEgg,
    triggerEasterEgg,
    closeEasterEgg
  };
}
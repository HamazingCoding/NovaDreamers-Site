import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SequenceGameProps {
  onComplete: () => void;
  onClose: () => void;
}

const colors = [
  { name: 'red', bg: 'bg-red-500', active: 'bg-red-300' },
  { name: 'blue', bg: 'bg-blue-500', active: 'bg-blue-300' },
  { name: 'green', bg: 'bg-green-500', active: 'bg-green-300' },
  { name: 'yellow', bg: 'bg-yellow-500', active: 'bg-yellow-300' },
];

export default function SequenceGame({ onComplete, onClose }: SequenceGameProps) {
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'won' | 'lost'>('waiting');

  const generateSequence = () => {
    const newSequence = [];
    for (let i = 0; i < level; i++) {
      newSequence.push(Math.floor(Math.random() * 4));
    }
    setSequence(newSequence);
    setPlayerSequence([]);
    playSequence(newSequence);
  };

  const playSequence = async (seq: number[]) => {
    setIsPlaying(true);
    setIsPlayerTurn(false);
    
    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setActiveButton(seq[i]);
      await new Promise(resolve => setTimeout(resolve, 400));
      setActiveButton(null);
    }
    
    setIsPlaying(false);
    setIsPlayerTurn(true);
  };

  const handleButtonClick = (index: number) => {
    if (!isPlayerTurn || isPlaying) return;

    const newPlayerSequence = [...playerSequence, index];
    setPlayerSequence(newPlayerSequence);

    // Check if the player made a mistake
    if (newPlayerSequence[newPlayerSequence.length - 1] !== sequence[newPlayerSequence.length - 1]) {
      setGameState('lost');
      return;
    }

    // Check if the player completed the sequence
    if (newPlayerSequence.length === sequence.length) {
      if (level >= 5) {
        setGameState('won');
        onComplete();
      } else {
        setTimeout(() => {
          setLevel(level + 1);
        }, 1000);
      }
    }
  };

  const startGame = () => {
    setGameState('playing');
    setLevel(1);
    generateSequence();
  };

  const resetGame = () => {
    setGameState('waiting');
    setSequence([]);
    setPlayerSequence([]);
    setLevel(1);
    setIsPlayerTurn(false);
    setIsPlaying(false);
    setActiveButton(null);
  };

  useEffect(() => {
    if (gameState === 'playing' && level > 1) {
      setTimeout(() => {
        generateSequence();
      }, 1000);
    }
  }, [level]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-purple-900 to-teal-900 p-8 rounded-2xl border border-purple-500/30 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🧠 Memory Sequence
          </h3>
          
          {gameState === 'waiting' && (
            <div>
              <p className="text-gray-300 mb-6">
                Watch the sequence and repeat it! Reach level 5 to win.
              </p>
              <button
                onClick={startGame}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all"
              >
                Start Game
              </button>
            </div>
          )}

          {gameState === 'playing' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-gray-400">Level {level}</span>
                <span className="text-sm text-gray-400">
                  {isPlayerTurn ? 'Your turn!' : 'Watch...'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {colors.map((color, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: isPlayerTurn ? 1.05 : 1 }}
                    whileTap={{ scale: isPlayerTurn ? 0.95 : 1 }}
                    onClick={() => handleButtonClick(index)}
                    disabled={!isPlayerTurn}
                    className={`w-20 h-20 rounded-lg border-2 border-gray-600 transition-all duration-200 ${
                      activeButton === index ? color.active : color.bg
                    } ${!isPlayerTurn ? 'opacity-70' : 'hover:opacity-80'}`}
                  />
                ))}
              </div>

              <div className="text-sm text-gray-400">
                Progress: {playerSequence.length}/{sequence.length}
              </div>
            </div>
          )}

          {gameState === 'won' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-900/30 rounded-lg border border-green-500/30"
            >
              <p className="text-green-300 font-medium text-lg mb-2">
                🎉 Memory Master!
              </p>
              <p className="text-sm text-green-400 mb-4">
                "Great minds remember great games." - NovaDreamers
              </p>
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
              >
                Play Again
              </button>
            </motion.div>
          )}

          {gameState === 'lost' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-900/30 rounded-lg border border-red-500/30"
            >
              <p className="text-red-300 font-medium text-lg mb-2">
                💥 Game Over!
              </p>
              <p className="text-sm text-red-400 mb-4">
                You reached level {level}. Try again!
              </p>
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          )}

          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingChallengeProps {
  onComplete: () => void;
  onClose: () => void;
}

const phrases = [
  "NovaDreamers creates amazing games",
  "Saving Private Teddy from Lord Snuggledoom",
  "Chrono Resonance beats through time",
  "Welcome to the future of gaming",
  "Code dream build repeat",
];

export default function TypingChallenge({ onComplete, onClose }: TypingChallengeProps) {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [gameStarted, setGameStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gameStarted) {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setCurrentPhrase(randomPhrase);
      setStartTime(Date.now());
      inputRef.current?.focus();
    }
  }, [gameStarted]);

  useEffect(() => {
    if (userInput && startTime) {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60; // minutes
      const wordsTyped = userInput.trim().split(' ').length;
      const calculatedWpm = Math.round(wordsTyped / timeElapsed) || 0;
      setWpm(calculatedWpm);

      // Calculate accuracy
      let correctChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === currentPhrase[i]) {
          correctChars++;
        }
      }
      const calculatedAccuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100;
      setAccuracy(calculatedAccuracy);

      // Check if complete
      if (userInput === currentPhrase) {
        setIsComplete(true);
        onComplete();
      }
    }
  }, [userInput, currentPhrase, startTime, onComplete]);

  const startGame = () => {
    setGameStarted(true);
    setUserInput("");
    setIsComplete(false);
    setWpm(0);
    setAccuracy(100);
  };

  const resetGame = () => {
    setGameStarted(false);
    setUserInput("");
    setIsComplete(false);
    setCurrentPhrase("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
  };

  const renderText = () => {
    return currentPhrase.split('').map((char, index) => {
      let className = "text-gray-400";
      
      if (index < userInput.length) {
        className = userInput[index] === char ? "text-green-400" : "text-red-400";
      } else if (index === userInput.length) {
        className = "text-white bg-white/20 animate-pulse";
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-purple-900 to-teal-900 p-8 rounded-2xl border border-purple-500/30 max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⚡ Typing Challenge
          </h3>
          
          {!gameStarted && !isComplete && (
            <div>
              <p className="text-gray-300 mb-6">
                Type the phrase as fast and accurately as you can!
              </p>
              <button
                onClick={startGame}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all"
              >
                Start Challenge
              </button>
            </div>
          )}

          {gameStarted && !isComplete && (
            <div>
              <div className="flex justify-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{wpm}</div>
                  <div className="text-sm text-gray-400">WPM</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">{accuracy}%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg mb-6 text-left">
                <div className="text-lg font-mono leading-relaxed">
                  {renderText()}
                </div>
              </div>

              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white text-lg font-mono focus:outline-none focus:border-purple-500"
                placeholder="Start typing..."
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          )}

          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-green-900/30 rounded-lg border border-green-500/30"
            >
              <p className="text-green-300 font-medium text-xl mb-4">
                🎊 Typing Master!
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{wpm}</div>
                  <div className="text-sm text-gray-400">Words Per Minute</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">{accuracy}%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
              </div>
              <p className="text-sm text-green-400 mb-4">
                "Speed and precision - the hallmarks of a true gamer." - NovaDreamers
              </p>
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
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
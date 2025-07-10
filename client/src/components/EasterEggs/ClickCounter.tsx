import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClickCounterProps {
  target: number;
  onComplete: () => void;
  onClose: () => void;
}

export default function ClickCounter({ target, onComplete, onClose }: ClickCounterProps) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (count >= target && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [count, target, isComplete, onComplete]);

  const handleClick = () => {
    if (!isComplete) {
      setCount(prev => prev + 1);
    }
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
        className="bg-gradient-to-br from-purple-900 to-teal-900 p-8 rounded-2xl border border-purple-500/30 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🎮 Click Challenge!
          </h3>
          <p className="text-gray-300 mb-6">
            Click the button {target} times to unlock a secret!
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            disabled={isComplete}
            className={`w-32 h-32 rounded-full text-4xl font-bold border-4 transition-all duration-300 ${
              isComplete 
                ? 'bg-green-500 border-green-400 text-white' 
                : 'bg-gradient-to-br from-pink-500 to-purple-600 border-pink-400 text-white hover:from-pink-400 hover:to-purple-500'
            }`}
          >
            {isComplete ? '🎉' : count}
          </motion.button>
          
          <div className="mt-4">
            <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(count / target) * 100}%` }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {count}/{target} clicks
            </p>
          </div>

          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-900/30 rounded-lg border border-green-500/30"
            >
              <p className="text-green-300 font-medium">
                🎊 Congratulations! You've unlocked the secret of persistence!
              </p>
              <p className="text-sm text-green-400 mt-2">
                "Every great game starts with a single click." - NovaDreamers
              </p>
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
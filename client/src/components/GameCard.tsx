import { motion } from "framer-motion";
import { Game } from "@/lib/games";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  // Define the color classes based on the game category
  const colorClasses = {
    strategy: {
      text: "text-[hsl(var(--neon-teal))]",
      badge: "bg-[hsl(var(--neon-teal))] bg-opacity-20 text-[hsl(var(--neon-teal))]",
      hover: "hover:shadow-neon-teal",
      button: "text-[hsl(var(--neon-teal))] hover:text-white"
    },
    arcade: {
      text: "text-[hsl(var(--neon-purple))]",
      badge: "bg-[hsl(var(--neon-purple))] bg-opacity-20 text-[hsl(var(--neon-purple))]",
      hover: "hover:shadow-neon-purple",
      button: "text-[hsl(var(--neon-purple))] hover:text-white"
    },
    adventure: {
      text: "text-[hsl(var(--neon-pink))]",
      badge: "bg-[hsl(var(--neon-pink))] bg-opacity-20 text-[hsl(var(--neon-pink))]",
      hover: "hover:shadow-neon-pink",
      button: "text-[hsl(var(--neon-pink))] hover:text-white"
    }
  };

  const colors = colorClasses[game.category];

  return (
    <div className={`bg-[hsl(var(--space-gray))] rounded-xl overflow-hidden shadow-lg group transition-all duration-500 ${colors.hover}`}>
      <div className="relative overflow-hidden">
        <img 
          src={game.image} 
          alt={`${game.title} Game`} 
          className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--space-black))] to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className={`font-['Orbitron'] text-xl ${colors.text} mb-1`}>{game.title}</h3>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">{game.shortDesc}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[hsl(var(--muted-foreground))] mb-4">{game.description}</p>
        <div className="flex justify-between items-center">
          <span className={`text-sm rounded px-2 py-1 ${colors.badge}`}>{game.releaseInfo}</span>
          <motion.button 
            className={`font-['Rajdhani'] transition-colors duration-300 ${colors.button}`}
            whileHover={{ x: 5 }}
          >
            Details &rarr;
          </motion.button>
        </div>
      </div>
    </div>
  );
}

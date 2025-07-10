export interface Game {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  releaseInfo: string;
  status: string;
  category: 'strategy' | 'arcade' | 'adventure';
}

export const games: Game[] = [
  {
    id: "saving-private-teddy",
    title: "Saving Private Teddy",
    shortDesc: "Tower Defense Shooter",
    description: "A strategic tower defense game where players build and upgrade defense systems to protect against waves of evil toys lead by the anarchist Teddybear, Lord Snuggledoom. What compels his Rebellion against the child of the playground?",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    releaseInfo: "Coming 2025",
    status: "In Development",
    category: "strategy"
  },
  {
    id: "chrono-resonance",
    title: "Chrono Resonance",
    shortDesc: "Rhythm Arcade",
    description: "A retro-styled rhythm game where players navigate through time periods, matching beats to overcome challenges and restore musical harmony to the timeline.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    releaseInfo: "Released 2024",
    status: "Featured",
    category: "arcade"
  },
  {
    id: "chrono-veil",
    title: "Chrono Veil",
    shortDesc: "Adventure Maze",
    description: "An Indiana Jones inspired adventure where players navigate through ancient temples, solving puzzles and avoiding traps to uncover time-bending artifacts.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    releaseInfo: "Released 2023",
    status: "New Release",
    category: "adventure"
  }
];

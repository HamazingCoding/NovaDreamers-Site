export interface Game {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  releaseInfo: string;
  category: 'strategy' | 'arcade' | 'adventure';
}

export const games: Game[] = [
  {
    id: "saving-private-teddy",
    title: "Saving Private Teddy",
    shortDesc: "Tower Defense Shooter",
    description: "A strategic tower defense game where players build and upgrade defense systems to protect against waves of evil toys lead by the anarchist Teddybear, Lord Snuggledoom. What compels his Rebellion against the child of the playground?",
    image: "/src/assets/saving-private-teddy.png",
    releaseInfo: "Coming 2025",
    category: "strategy"
  },
  {
    id: "chrono-resonance",
    title: "Chrono Resonance",
    shortDesc: "Rhythm Arcade",
    description: "A retro-styled rhythm game where players navigate through time periods, matching beats to overcome challenges and restore musical harmony to the timeline.",
    image: "/src/assets/chrono-resonance.jpeg",
    releaseInfo: "Released 2024",
    category: "arcade"
  },
  {
    id: "within-the-walls",
    title: "Within the Walls",
    shortDesc: "Psychological Horror",
    description: "Trapped in a forgotten house that shifts around you, your only goal is to escape—if escape is even possible. Every door leads deeper, every sound might be real... or not. As you explore its shifting hallways, you'll encounter cryptic puzzles, unsettling sounds, and disturbing secrets embedded in the walls themselves. In Within the Walls, you'll uncover fragments of a story left behind, using your wits to survive the dread creeping through the walls. Are the whispers guiding you—or luring you?",
    image: "/src/assets/within-the-walls.png",
    releaseInfo: "Released 2023",
    category: "adventure"
  }
];

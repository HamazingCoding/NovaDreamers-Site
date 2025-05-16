export interface SocialLinks {
  linkedin?: string;
  github?: string;
  portfolio?: string;
  artstation?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  color: 'purple' | 'teal';
  socialLinks: SocialLinks;
}

export const teamMembers: TeamMember[] = [
  {
    id: "hamza",
    name: "Hamza",
    role: "Lead Developer, Gameplay Programmer, Unity Specialist",
    description: "Bringing 8+ years of game development experience, specializing in creating immersive gameplay systems and optimizing performance.",
    color: "purple",
    socialLinks: {
      linkedin: "#",
      github: "#",
      portfolio: "#"
    }
  },
  {
    id: "eve",
    name: "Eve",
    role: "Creative Director, Concept Artist, Level Designer",
    description: "Visionary artist with background in film and gaming, creating stunning environments and characters that define our games' unique aesthetics.",
    color: "teal",
    socialLinks: {
      linkedin: "#",
      artstation: "#",
      portfolio: "#"
    }
  }
];

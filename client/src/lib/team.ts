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
  color: 'purple' | 'teal' | 'pink';
  socialLinks: SocialLinks;
}

export const teamMembers: TeamMember[] = [
  {
    id: "hamza",
    name: "Hamza",
    role: "Lead Developer, Gameplay Programmer, Unity Specialist",
    description: "Bringing 3 years of game development experience, specializing in creating immersive gameplay systems and optimizing performance.",
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
    description: "Visionary artist with extensive gaming experience, creating stunning environments and characters that define our games' unique aesthetics.",
    color: "teal",
    socialLinks: {
      linkedin: "#",
      artstation: "#",
      portfolio: "#"
    }
  },
  {
    id: "sachin",
    name: "Sachin",
    role: "Creative Generalist, Game Asset Designer, Narrative & Concept Designer",
    description: "Multidisciplinary creative who crafts meaningful experiences through storytelling and visual design. Specializes in world-building, character development, and bridging the gap between narrative and gameplay through asset creation and concept art.",
    color: "pink",
    socialLinks: {
      linkedin: "#",
      portfolio: "#"
    }
  },
  {
    id: "krishnashree",
    name: "Krishnashree",
    role: "Creative & Operations Lead, Marketing Manager",
    description: "Versatile creative professional managing both artistic production and studio operations. Leads 2D/3D asset creation, coordinates marketing strategy, and ensures seamless workflow between creative and business development initiatives.",
    color: "purple",
    socialLinks: {
      linkedin: "#",
      portfolio: "#"
    }
  }
];

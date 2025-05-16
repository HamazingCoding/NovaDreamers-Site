import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { TeamMember } from "@/lib/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { name, role, description, color, socialLinks } = member;
  
  // Define the color classes based on the member's color preference
  const colorClasses = {
    purple: {
      border: "border-[hsl(var(--neon-purple))]",
      gradient: "bg-gradient-to-br from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-teal))]",
      text: "text-[hsl(var(--neon-purple))]",
      hover: "hover:text-[hsl(var(--neon-purple))]"
    },
    teal: {
      border: "border-[hsl(var(--neon-teal))]",
      gradient: "bg-gradient-to-br from-[hsl(var(--neon-teal))] to-[hsl(var(--neon-pink))]",
      text: "text-[hsl(var(--neon-teal))]",
      hover: "hover:text-[hsl(var(--neon-teal))]"
    }
  };

  const colors = colorClasses[color];

  return (
    <div className="bg-[hsl(var(--space-gray))] bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
      <div className="p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className={`w-32 h-32 rounded-full overflow-hidden border-4 ${colors.border} mb-6 md:mb-0 md:mr-6 flex-shrink-0`}>
            <div className={`w-full h-full ${colors.gradient} flex items-center justify-center`}>
              <span className="text-4xl font-bold text-white">{name.charAt(0)}</span>
            </div>
          </div>
          <div>
            <h3 className={`font-['Orbitron'] text-2xl mb-2 ${colors.text}`}>{name}</h3>
            <p className="text-[hsl(var(--muted-foreground))] font-['Rajdhani'] mb-4">{role}</p>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">{description}</p>
            <div className="flex space-x-4">
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  className={`text-white ${colors.hover} transition-colors duration-300`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${name}'s LinkedIn`}
                >
                  <FaLinkedin className="text-xl" />
                </a>
              )}
              {socialLinks.github && (
                <a 
                  href={socialLinks.github} 
                  className={`text-white ${colors.hover} transition-colors duration-300`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${name}'s GitHub`}
                >
                  <FaGithub className="text-xl" />
                </a>
              )}
              {socialLinks.portfolio && (
                <a 
                  href={socialLinks.portfolio} 
                  className={`text-white ${colors.hover} transition-colors duration-300`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${name}'s Portfolio`}
                >
                  <FaGlobe className="text-xl" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

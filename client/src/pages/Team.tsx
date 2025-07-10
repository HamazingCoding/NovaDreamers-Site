import { motion } from "framer-motion";
import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/lib/team";
import { useEffect } from "react";
import { Link } from "wouter";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Abstract technological background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[hsl(var(--space-black))] opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Tech background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl mb-4">Meet the Team</h1>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            The creative minds behind NovaDreamers Studio bringing digital worlds to life.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--neon-teal))] to-[hsl(var(--neon-pink))] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/contact">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-pink))] text-white font-['Rajdhani'] rounded-lg hover:shadow-neon-purple transition-all duration-300 cursor-pointer">
              Work With Us
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

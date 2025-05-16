import { motion } from "framer-motion";
import { FaEnvelope, FaGamepad, FaGlobe, FaTwitter, FaYoutube, FaDiscord, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="font-['Orbitron'] text-2xl mb-6 text-[hsl(var(--neon-pink))]">Get in touch</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--neon-pink))] bg-opacity-20 flex items-center justify-center flex-shrink-0 mr-4">
              <FaEnvelope className="text-[hsl(var(--neon-pink))]" />
            </div>
            <div>
              <h4 className="font-['Rajdhani'] text-lg mb-1">Email</h4>
              <p className="text-[hsl(var(--muted-foreground))]">contact@novadreamers.dev</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--neon-teal))] bg-opacity-20 flex items-center justify-center flex-shrink-0 mr-4">
              <FaGamepad className="text-[hsl(var(--neon-teal))]" />
            </div>
            <div>
              <h4 className="font-['Rajdhani'] text-lg mb-1">Discord</h4>
              <p className="text-[hsl(var(--muted-foreground))]">discord.gg/novadreamers</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--neon-purple))] bg-opacity-20 flex items-center justify-center flex-shrink-0 mr-4">
              <FaGlobe className="text-[hsl(var(--neon-purple))]" />
            </div>
            <div>
              <h4 className="font-['Rajdhani'] text-lg mb-1">Social Media</h4>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-teal))] transition-colors duration-300">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-purple))] transition-colors duration-300">
                  <FaYoutube className="text-xl" />
                </a>
                <a href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-pink))] transition-colors duration-300">
                  <FaDiscord className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map or Graphic */}
      <motion.div 
        className="mt-10 h-60 rounded-xl overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-teal))] opacity-30"></div>
        <img 
          src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
          alt="Studio location" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div 
              className="w-12 h-12 rounded-full bg-[hsl(var(--neon-pink))] bg-opacity-70 flex items-center justify-center mx-auto"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaMapMarkerAlt className="text-white text-xl" />
            </motion.div>
            <p className="font-['Rajdhani'] text-white mt-2 text-shadow">NovaDreamers HQ</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

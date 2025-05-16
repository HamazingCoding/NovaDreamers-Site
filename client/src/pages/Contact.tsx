import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 bg-[hsl(var(--space-black))] relative min-h-screen">
      {/* Futuristic contact background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--space-black))] via-[hsl(var(--space-black))] to-[hsl(var(--neon-purple))] opacity-20"></div>
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Digital network" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl mb-4">Contact Us</h1>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--neon-teal))] to-[hsl(var(--neon-purple))] mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

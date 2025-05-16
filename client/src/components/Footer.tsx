import { Link } from "wouter";
import Newsletter from "@/components/Newsletter";
import { FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--space-black))] py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--neon-purple))] to-[hsl(var(--space-black))] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div>
            <Link href="/">
              <a className="flex items-center mb-6">
                <div className="w-10 h-10 mr-2 relative overflow-hidden">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-[hsl(var(--neon-teal))] via-[hsl(var(--neon-purple))] to-[hsl(var(--neon-pink))] flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[hsl(var(--space-black))] flex items-center justify-center">
                      <span className="text-[hsl(var(--neon-teal))] text-xl">★</span>
                    </div>
                  </div>
                </div>
                <span className="font-['Orbitron'] font-bold text-xl text-white">NovaDreamers</span>
              </a>
            </Link>
            <p className="text-[hsl(var(--muted-foreground))] mb-6">
              Creating immersive gaming experiences that transport players to new worlds and realities.
            </p>
            <div className="flex space-x-4">
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
          
          {/* Quick Links */}
          <div>
            <h4 className="font-['Orbitron'] text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-teal))] transition-colors duration-300">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/games">
                  <a className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-purple))] transition-colors duration-300">
                    Games
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-pink))] transition-colors duration-300">
                    Our Team
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-teal))] transition-colors duration-300">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-['Orbitron'] text-lg text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-teal))] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-purple))] transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--neon-pink))] transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-['Orbitron'] text-lg text-white mb-6">Stay Updated</h4>
            <p className="text-[hsl(var(--muted-foreground))] mb-4">
              Subscribe to our newsletter for game updates and announcements.
            </p>
            <Newsletter />
          </div>
        </div>
        
        <div className="border-t border-[hsl(var(--border))] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4 md:mb-0">
            © 2025 NovaDreamers Studio. All rights reserved.
          </p>
          <p className="text-[hsl(var(--muted-foreground))] text-sm">
            Designed with <span className="text-[hsl(var(--neon-pink))]">♥</span> for gamers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}

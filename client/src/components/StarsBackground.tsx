import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;
    
    const starsContainer = starsRef.current;
    const starCount = 100;
    
    // Clear any existing stars
    starsContainer.innerHTML = '';
    
    // Create the stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random positions
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Random sizes between 1-3px
      const size = Math.random() * 2 + 1;
      
      // Random animation delay
      const delay = Math.random() * 5;
      
      star.style.left = `${left}%`;
      star.style.top = `${top}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDelay = `${delay}s`;
      
      starsContainer.appendChild(star);
    }
  }, []);

  return <div className="stars" ref={starsRef}></div>;
}

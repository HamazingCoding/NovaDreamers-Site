# NovaDreamers Studio Website

## Project Overview
A modern, responsive website for the fictional game development studio "NovaDreamers Studio" featuring a futuristic aesthetic with dark themes and neon highlights. The site includes pages for games, team, and contact information.

## Tech Stack
- **Frontend**: React + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Express.js + TypeScript  
- **UI Components**: Shadcn UI library
- **Forms**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query
- **Routing**: Wouter for client-side routing

## Project Architecture
- Client-server architecture with Vite dev server
- In-memory storage for form submissions
- Responsive design with mobile-first approach
- Component-based architecture with reusable UI elements

## Recent Changes

### Easter Egg Implementation (January 2025)
- ✓ Created three mini-games: Click Counter, Memory Sequence, and Typing Challenge
- ✓ Added hidden triggers throughout the website:
  - Logo (5 clicks) → Memory Sequence Game
  - Hero tagline (click) → Click Counter Game  
  - Footer copyright (click) → Typing Challenge
- ✓ Implemented progress tracking with localStorage persistence
- ✓ Added Easter egg discovery indicator showing completion status
- ✓ Created comprehensive Easter egg management system

### Game Content Updates (January 2025)
- ✓ Renamed "Project Aegis" to "Saving Private Teddy"
- ✓ Updated game description with new storyline about evil toys and Lord Snuggledoom
- ✓ Changed game ID from "project-aegis" to "saving-private-teddy"
- ✓ Replaced "Chrono Veil" with "Within the Walls" psychological horror game
- ✓ Added custom game image and atmospheric description for Within the Walls
- ✓ Updated Chrono Resonance with custom game image
- ✓ Fixed nested link warning in Team page navigation
- ✓ Removed status tags from all games ("In Development", "New Release", "Featured")

### Team and Social Media Updates (January 2025)
- ✓ Updated social media links: replaced Twitter/YouTube with Instagram/LinkedIn
- ✓ Updated Hamza's experience from 8+ years to 3 years
- ✓ Removed film background from Eve's description
- ✓ Added Sachin as Creative Generalist, Game Asset Designer, and Narrative Designer
- ✓ Added Krishnashree as Creative & Operations Lead and Marketing Manager
- ✓ Added Shreesh as Bug Fixer and Game Programmer
- ✓ Added Elmer as Sound Engineer and Developer
- ✓ Updated TeamMemberCard component to support pink color theme

### Logo Updates (January 2025)
- ✓ Replaced old logo (nova-logo.jpg) with new black logo (nova-logo-black.jpeg)
- ✓ Updated to final clearnova.png logo with rocket, moon, and stars design
- ✓ Updated all components: Navbar, Footer, HeroSection
- ✓ Removed old logo files and updated README references
- ✓ Fixed all nested link warnings in navigation components

### Initial Implementation
- ✓ Built complete website with all requested pages
- ✓ Implemented futuristic design with neon color scheme
- ✓ Added functional contact form and newsletter signup
- ✓ Created game gallery with filtering
- ✓ Team page with member profiles
- ✓ Responsive navigation with mobile menu

## User Preferences
- Uses modern web design with smooth animations
- Prefers clean, professional communication
- Wants comprehensive documentation for local development

## Key Features
- **Pages**: Home (hero + featured games), Games (filterable gallery), Team (member profiles), Contact (form + info)
- **Forms**: Contact submission and newsletter signup with validation
- **Design**: Dark theme with teal/purple/pink neon accents
- **Interactions**: Hover effects, smooth scrolling, animated elements
- **Mobile**: Fully responsive design with mobile-optimized navigation

## Development Notes
- All navigation components use div elements instead of anchor tags to prevent nesting warnings
- Logo is consistently used across navbar, footer, and hero section
- Color scheme matches the studio's branding with CSS custom properties
- Forms use proper validation and error handling
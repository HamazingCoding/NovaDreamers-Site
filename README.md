# NovaDreamers Studio Website

A sleek, modern, and responsive website for the fictional game development studio "NovaDreamers Studio" with a futuristic aesthetic.

![NovaDreamers Logo](/client/src/assets/nova-logo-black.jpeg)

## Features

- **Responsive Design**: Fully responsive website that works on mobile, tablet, and desktop
- **Modern UI**: Dark futuristic theme with neon highlights
- **Interactive Elements**: Animations and transitions for a better user experience
- **Multiple Pages**: Home, Games, Team, and Contact pages
- **Contact Form**: Functional contact form with validation
- **Newsletter Signup**: Email newsletter subscription

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js
- **Form Handling**: React Hook Form with Zod for validation
- **Data Fetching**: TanStack Query
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn UI component library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/novadreamers-studio.git
   cd novadreamers-studio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The website will be available at [http://localhost:5000](http://localhost:5000).

### Build for Production

Create a production build:

```bash
npm run build
# or
yarn build
```

Then serve the built files:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
├── client                # Frontend React application
│   ├── src
│   │   ├── assets        # Static assets like images
│   │   ├── components    # React components
│   │   ├── hooks         # Custom React hooks
│   │   ├── lib           # Utilities and configurations
│   │   ├── pages         # Page components
│   │   ├── App.tsx       # Main App component
│   │   └── main.tsx      # Entry point
│   └── index.html        # HTML template
├── server                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage (in-memory)
├── shared                # Shared code between client and server
│   └── schema.ts         # Database schema and types
└── README.md             # Project documentation
```

## Pages

### Home
- **Hero section** with studio name and tagline
- **Featured games** carousel showcasing recent titles

### Games
- Gallery of games with:
  - Title and description
  - Game thumbnail
  - Release year and status
  - Category filtering

### Team
- Team members with:
  - Name and role
  - Professional description
  - Social media links

### Contact
- Contact form with validation
- Studio contact information
- Interactive map/graphic

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is for demonstration purposes.

## Acknowledgments

- Design inspired by modern game studio websites
- All game images are from Unsplash (placeholders)
- Logo created for NovaDreamers Studio
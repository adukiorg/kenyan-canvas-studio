# DARKCHESA — Digital Painter Studio

A modern, responsive website for DARKCHESA, a Nairobi-based digital painting studio offering custom portraits, archival prints, and hand-finished framing services. Built with React, TypeScript, and Tailwind CSS.

## About

DARKCHESA specializes in hand-crafted digital portraiture rooted in Kenyan storytelling. We offer:

- Custom digital paintings and portraits
- Professional archival prints
- Hand-finished framing services
- Full in-studio production

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Routing**: React Router v6
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Theming**: Next Themes
- **Testing**: Vitest with React Testing Library
- **Package Manager**: Bun

## Prerequisites

- Node.js 16+ or Bun 1.0+
- npm, yarn, pnpm, or bun package manager

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kenyan-canvas-studio
```

1. Install dependencies:

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

## How to Run

### Development Server

Start the development server with hot module replacement (HMR):

```bash
bun dev
# or
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

Create an optimized production build:

```bash
bun run build
# or
npm run build
```

Output files will be in the `dist` directory.

### Development Build

Create a development build without optimizations:

```bash
bun run build:dev
# or
npm run build:dev
```

### Preview Production Build

Preview the production build locally:

```bash
bun run preview
# or
npm run preview
```

### Testing

Run tests:

```bash
# Run tests once
bun run test
# or
npm run test

# Run tests in watch mode
bun run test:watch
# or
npm run test:watch
```

### Linting

Check code quality:

```bash
bun run lint
# or
npm run lint
```

## Project Structure

```
src/
├── components/           # React components
│   ├── darkchesa/       # Page-specific components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── Nav.tsx
│   │   ├── Pricing.tsx
│   │   ├── Process.tsx
│   │   ├── Services.tsx
│   │   └── WhatsAppFab.tsx
│   └── ui/              # Reusable UI components (shadcn/ui)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
├── test/                # Test configuration and examples
├── App.tsx              # Root application component
├── main.tsx             # Entry point
└── index.css            # Global styles
public/                  # Static assets
```

## Key Features

- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🧪 Comprehensive test setup
- 🌙 Dark mode support with Next Themes
- ♿ Accessible components from shadcn/ui
- 📋 Form validation with Zod
- 🔍 SEO optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - DARKCHESA Studio

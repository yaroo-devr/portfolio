# Overview

This is a cinematic developer portfolio built with React, Vite, TypeScript, and Tailwind CSS. The application features a dark, animated design with smooth scrolling, particle backgrounds, and modal interactions. It showcases a software engineer's experience, skills, projects, education, and contact information through an immersive single-page application.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **React 18** with **TypeScript** for type safety and modern component development
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Framer Motion** for cinematic animations and smooth page transitions
- **shadcn/ui** component library providing consistent, accessible UI components

## Styling and Design System
- **Custom CSS variables** for consistent theming (electric blue, neon purple, space/charcoal backgrounds)
- **Responsive design** with mobile-first approach using Tailwind breakpoints
- **Dark theme** implementation with custom color palette for cinematic feel
- **Devicon integration** for technology stack icons
- **Lucide React** for consistent iconography throughout the application

## Animation and Interactions
- **Lenis smooth scrolling** for enhanced user experience
- **Framer Motion** for scroll-triggered animations, page transitions, and interactive elements
- **Custom particle background** system for visual depth
- **Modal dialogs** for project detail views with overlay interactions

## Data Management
- **Static JSON content** for portfolio data (experience, projects, skills, education)
- **TanStack Query** for potential future API integrations and state management
- **React Hook Form** with **Zod validation** for contact form handling

## Backend Infrastructure
- **Express.js** server with TypeScript for API endpoints
- **Drizzle ORM** configured for PostgreSQL database operations
- **Neon Database** integration for serverless PostgreSQL hosting
- **In-memory storage** fallback for development and testing

## Development Tools
- **ESBuild** for server-side bundling and fast compilation
- **TypeScript** configuration with path mapping for clean imports
- **PostCSS** with Autoprefixer for CSS processing
- **Replit-specific optimizations** for zero-setup deployment

## Key Architectural Decisions

### Component Structure
- Modular component architecture with clear separation of concerns
- Custom hooks for scroll progress tracking and smooth scrolling integration
- Reusable UI components following shadcn/ui patterns

### Content Management
- JSON-based content system allowing easy updates without code changes
- TypeScript interfaces ensuring type safety for content structure
- Centralized content loading with consistent data flow

### Performance Optimization
- Lazy loading and code splitting through Vite's built-in features
- Optimized animations using Framer Motion's performance-focused APIs
- Smooth scrolling implementation that doesn't block main thread

### Responsive Design
- Mobile-first approach with progressive enhancement
- Adaptive layouts that maintain visual hierarchy across devices
- Touch-friendly interactions for mobile users

# External Dependencies

## UI and Styling
- **@radix-ui/react-*** components for accessible, unstyled UI primitives
- **Tailwind CSS** for utility-first styling approach
- **class-variance-authority** and **clsx** for dynamic className generation
- **Framer Motion** for animations and page transitions

## Development and Build Tools
- **Vite** with React plugin for fast development and building
- **TypeScript** for type safety and enhanced developer experience
- **ESBuild** for server bundling and fast compilation

## Backend and Database
- **Express.js** for server-side routing and middleware
- **Drizzle ORM** with PostgreSQL dialect for database operations
- **@neondatabase/serverless** for PostgreSQL database hosting
- **Zod** for runtime type validation and schema definitions

## External Integrations
- **Lenis** for smooth scrolling functionality (loaded via CDN)
- **Devicon** for technology stack icons (loaded via CDN)
- **Google Fonts** (Inter and JetBrains Mono) for typography

## Form and State Management
- **React Hook Form** with **@hookform/resolvers** for form handling
- **TanStack React Query** for server state management
- **Zod** for form validation schemas

## Utility Libraries
- **date-fns** for date formatting and manipulation
- **nanoid** for generating unique identifiers
- **Lucide React** for consistent icon system
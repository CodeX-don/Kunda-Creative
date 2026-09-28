# Kunda Creative Agency Website

A Namibian digital creative agency website built with React 18, Vite, Tailwind CSS, and Framer Motion.

## Design System

- **Colors**: Cream (#EBE5D9), Burgundy (#7A3B3B), Olive (#4A5240), Charcoal (#2C2C2C)
- **Typography**: Playfair Display (headings), Space Mono (body)
- **Vibe**: Retro-Editorial, Analog-Digital Hybrid, Zine-style
- **Effects**: Grain texture overlay, paper shadows, editorial layouts

## Tech Stack

- React 18 + Vite
- Tailwind CSS 3
- Framer Motion (animations)
- React Router DOM v6 (routing)
- React Hook Form + Yup (forms)
- Oxlint (linting)

## Project Structure

```
src/
├── components/
│   ├── common/          # Button, Container, Section, GrainOverlay, LoadingScreen
│   ├── layout/          # Header, Footer, Layout
│   ├── sections/        # Page sections (Hero, About, Services, Contact, etc.)
│   └── ui/              # Card, FormInput, ScrollIndicator, OptimizedImage
├── pages/               # Home, About, Services, Contact, NotFound
├── hooks/               # useScrollAnimation, useMediaQuery, useLocalStorage
├── data/                # Navigation, services, brand symbols
├── App.jsx              # Router with code splitting
└── index.css            # Global styles + Tailwind
```

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # Code quality check
npm run preview  # Preview production build
```

## Pages

1. **Home** - Hero, Introduction, Services Preview, Brand Philosophy, CTA
2. **About** - Origin Story, Village Concept, Brand Symbols, Values, CTA
3. **Services** - Tabbed interface (Digital, Social, Production), Process, FAQ, CTA
4. **Contact** - Vintage telephone header, Contact Info, Contact Form with validation

## Images

All images use the `OptimizedImage` component with:
- WebP format with JPEG fallback
- Lazy loading (except priority images)
- Responsive sizing
- Grain texture overlay
- Loading/error states

Images sourced from Unsplash with warm, film, vintage aesthetic.
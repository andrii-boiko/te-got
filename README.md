# Tiny Epic Game of Thrones - Plot Cards Browser

A responsive Next.js static site for browsing and searching Tiny Epic Game of Thrones plot cards with English/Ukrainian language support.

## Features

- **📱 Mobile-First Design**: Optimized for mobile devices with responsive 4-column grid
- **🌐 Bilingual Support**: English/Ukrainian with flag toggles (Ukrainian default)
- **🔍 Real-time Search**: Filter cards by name or event text
- **📄 Individual Card Pages**: Shareable URLs for each card (`/card/[id]`)
- **⚡ Static Generation**: Fast loading with pre-rendered pages
- **🎨 Dark Theme**: Game-themed dark UI with golden accents

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static files
npm run export
```

## Project Structure

```
├── components/           # React components
│   ├── CardComponent.tsx # Individual card display
│   ├── Header.tsx        # Search bar and language toggle
│   └── LanguageContext.tsx # Language state management
├── data/
│   └── cards.ts          # Card data and translations
├── pages/
│   ├── index.tsx         # Homepage with card grid
│   ├── card/[id].tsx     # Individual card pages
│   └── _app.tsx          # App wrapper
├── public/images/plot/   # Card images
├── styles/
│   └── globals.css       # Global styles
└── images/               # Original card images
```

## Adding New Cards

To add more cards with complete OCR data, update `/data/cards.ts`:

```typescript
{
  id: "plot_XX",
  cost: X,
  name: {
    en: "English Card Name",
    uk: "Українська назва карти"
  },
  event: {
    en: "English card effect description",
    uk: "Український опис ефекту карти"
  },
  image: "/images/plot/plot_XX.png",
  house: "house_name"
}
```

## Technical Details

- **Framework**: Next.js 15 with TypeScript
- **Styling**: CSS Modules with mobile-first responsive design
- **Images**: Optimized with Next.js Image component
- **Static Generation**: `getStaticProps` and `getStaticPaths` for all card pages
- **Search**: Client-side filtering with React hooks

## Card Data Status

- ✅ **Complete**: All 52 cards with full OCR data and Ukrainian translations from official rules
- 🎯 **Fully Functional**: Complete card database ready for use

All cards have been processed with accurate English text extraction and official Ukrainian translations from the game rules.

## Development Notes

- Images are copied to `public/images/plot/` for Next.js static serving
- Language context provides global state management
- Search filters by both card name and event text
- Individual card pages are SEO-optimized with meta tags
- Static export ready for hosting on any static site platform
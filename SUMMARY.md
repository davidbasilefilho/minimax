# minimax-demo

A TanStack React Router application with a custom brutalist design system.

## Tech Stack

- **Runtime**: Bun
- **Framework**: React + TanStack Router (file-based routing)
- **Styling**: Tailwind CSS v4
- **State Management**: TanStack Store
- **Testing**: Bun Test
- **Linting/Formatting**: Biome

## Design System

Brutalist aesthetic with acid green (#ccff00) accents, sharp corners, thick borders, and monospace typography.

### Components (`src/components/`)

| Component | Description |
|-----------|-------------|
| `Button` | 4 variants (primary, secondary, outline, ghost), 3 sizes, loading state, icons |
| `Card` | 4 variants (default, elevated, outlined, glitch), hover effects, accent borders |
| `Input` | Accessible form input with validation, labels, helper text, icon support |
| `Typography` | Heading, Text, Caption, Kbd, Code components |
| `Preloader` | Animated loading spinner |
| `Marquee` | Infinite scrolling text banner |
| `CustomCursor` | Custom cursor with trail effect |
| `ScrollProgress` | Reading progress bar |
| `Section` | Layout section with grid pattern, scanlines, vignette |

### Theme (`src/styles.css`)

Tailwind CSS v4 with `@theme` directive defining:
- Colors: void, concrete, acid (#ccff00), electric, neon, semantic
- Typography: Space Mono + Work Sans
- Effects: sharp borders, scanlines, glitch animations, hover effects

### Utilities (`src/lib/`)

- `cn()` - Tailwind class merger (wraps tailwind-merge)

## Commands

```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run format       # Format with Biome
bun run lint         # Lint with Biome
bun run check        # Run all checks
```

## Project Structure

```
src/
├── components/       # Design system components
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   ├── Typography/
│   ├── Preloader/
│   ├── Marquee/
│   ├── CustomCursor/
│   ├── ScrollProgress/
│   ├── Section/
│   └── index.ts
├── lib/              # Utilities
│   └── cn.ts
├── routes/           # File-based routing (TanStack Router)
│   ├── __root.tsx
│   ├── _index.tsx
│   └── design-system.tsx
├── styles.css        # Tailwind CSS v4 theme
└── integrations/     # TanStack Query setup
```

## Current Status

- ✅ Build passes successfully
- ✅ All components use `cn()` for Tailwind class merging
- ⚠️ Pre-existing Header.tsx route type errors (not yet fixed)

## Contributing

See `AGENTS.md` for development guidelines and coding standards.

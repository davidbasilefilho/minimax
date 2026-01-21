# minimax-demo

A TanStack React Router application with a custom brutalist design system.

## Stack

- **Runtime**: Bun
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4
- **State**: TanStack Store
- **Linting/Formatting**: Biome

## Design System

This project implements a custom brutalist design system with:

- **Colors**: Void, concrete, acid green (#ccff00), electric, neon
- **Typography**: Space Mono (headings), Work Sans (body)
- **Principles**: Sharp corners, thick borders, high contrast, monospace headings, acid green accents

### Components

| Component | Description |
|-----------|-------------|
| Button | 4 variants (primary, secondary, outline, ghost), 3 sizes, loading state, icons |
| Card | 4 variants (default, elevated, outlined, glitch), hover effects, accent borders |
| Input | Accessible form input with validation, labels, helper text, icon support |
| Typography | Heading, Text, Caption, Kbd, Code components |
| Preloader | Animated loading spinner |
| Marquee | Infinite scrolling text banner |
| CustomCursor | Custom cursor with trail effect |
| ScrollProgress | Reading progress bar |
| Section | Layout section with grid pattern, scanlines, vignette |

## Summary of Work Completed

### Project Context

This is a TanStack React Router application (`minimax-demo`) with file-based routing, Tailwind CSS v4, and a custom brutalist design system. The project uses `bun` as the runtime and package manager.

### What We Did

1. **Created Design System Components**
   - `src/components/Button/Button.tsx` - Brutalist button with 4 variants (primary, secondary, outline, ghost), 3 sizes, loading state, and icon support
   - `src/components/Card/Card.tsx` - Versatile card with variants (default, elevated, outlined, glitch), hover effects, accent borders
   - `src/components/Input/Input.tsx` - Accessible form input with validation, labels, helper text, icon support
   - `src/components/Typography/Typography.tsx` - Heading, Text, Caption, Kbd, Code components
   - `src/components/Preloader/Preloader.tsx` - Animated loading spinner
   - `src/components/Marquee/Marquee.tsx` - Infinite scrolling text banner
   - `src/components/CustomCursor/CustomCursor.tsx` - Custom cursor with trail effect
   - `src/components/ScrollProgress/ScrollProgress.tsx` - Reading progress bar
   - `src/components/Section/Section.tsx` - Layout section with grid pattern, scanlines, vignette

2. **Created Tailwind CSS v4 Theme** (`src/styles.css`)
   - Color palette: void, concrete, acid (#ccff00), electric, neon, semantic colors
   - Typography: Space Mono + Work Sans
   - Sharp borders, scanlines, glitch animations, hover effects

3. **Created Utility Function** (`src/lib/cn.ts`)
   - `cn()` wrapper around `tailwind-merge` for class conflict resolution

4. **Created Design System Showcase** (`src/routes/design-system.tsx`)
   - Interactive demo page showcasing all components

5. **Created AGENTS.md** with project-specific guidelines
   - Documented `cn()` usage for class merging
   - Removed vitest, effect-ts, backend references
   - Added Tailwind CSS v4 and brutalist design principles

### Key Files Modified/Created

```
src/
├── components/
│   ├── index.ts (exports all components)
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── index.ts
│   ├── Card/
│   ├── Input/
│   ├── Typography/
│   ├── Preloader/
│   ├── Marquee/
│   ├── CustomCursor/
│   ├── ScrollProgress/
│   └── Section/
├── lib/
│   └── cn.ts (tailwind-merge wrapper)
├── styles.css (Tailwind CSS v4 theme)
├── routes/
│   └── design-system.tsx (showcase page)
├── components/index.ts
└── AGENTS.md
```

## Current Status

- Build passes successfully (`bun run build` completes)
- All components use `cn()` from `@/lib/cn` instead of `clsx`
- Remaining issues are pre-existing (Header.tsx route type errors)

## Next Steps (Frontend Aesthetics Guidelines)

Per the frontend design skill, the project should be elevated with:

- **Typography**: Replace generic fonts with distinctive choices (currently using Space Mono + Work Sans)
- **Motion**: Add orchestrated page load animations, scroll-triggered effects
- **Visual Details**: Add noise textures, gradient meshes, geometric patterns
- **Spatial Composition**: Consider grid-breaking layouts, asymmetric designs
- **Atmosphere**: Add CRT effects, custom cursors, grain overlays more prominently

The guidelines suggest committing to a **bold aesthetic direction** - currently industrial brutalist, but could be enhanced with more distinctive typography choices, orchestrated animations, and atmospheric visual effects.

## Common Commands

```bash
# Run development server
bun run dev

# Build for production
bun run build

# Format code
bun run format

# Lint code
bun run lint

# Check all
bun run check
```

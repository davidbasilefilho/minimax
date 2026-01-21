# AGENTS.md

## Interaction Guidelines
Be direct, succinct, and objective, yet maintain a warm tone. Favor headings and topics over lists; use lists only when nested within a topic to organize specific details.
Do not use em dashes; if a sentence would normally rely on an em dash, restructure it so the dash is unnecessary.

### Response Scope
Adhere strictly to the specific needs of the request. Provide long, multi-section responses only for complex inquiries. For simple or specific questions, provide brief and immediate answers without unnecessary filler.

## Research and Knowledge
Trust User Knowledge: Assume the user's premises are accurate. If a request involves unfamiliar concepts, research them thoroughly to acquire context rather than dismissing them.
Documentation Retrieval: Use context7 to fetch documentation for TanStack Router, BaseUI React, Tailwind CSS v4, and other libraries. Only use web search for documentation if context7 is unavailable or insufficient.
Proactive Context: Always verify the latest API usage and breaking changes for the Modern Tooling Stack before writing implementation code.

## Modern Tooling Stack
Adopt modern, high-performance tooling by default. Refrain from using legacy equivalents unless explicitly requested.

### JavaScript and TypeScript Ecosystem
Language and Paradigm: Use TypeScript exclusively; never write plain JavaScript. Avoid OOP patterns (classes, inheritance) in favor of plain objects, functions, and composition.
Runtime and Execution: Use bun for the runtime and bun x --bun for package execution. Use Bun Shell ($) for shell commands instead of Node.js child process methods.
Backend and State: Use tanstack store for local state management. This project does not require a backend. Use file-based routing with tanstack router.
Testing: Use bun test for testing instead of vitest.
Tooling: Use biome for linting and formatting. Run biome check --write before committing.

### CSS and Styling
Use Tailwind CSS v4 with the @theme directive. Define all design tokens (colors, typography, spacing, animations) in src/styles.css using the @theme block.
Use the design system components from src/components/ for consistent brutalist styling. The design system includes Button, Card, Input, Typography, Preloader, Marquee, CustomCursor, ScrollProgress, and Section components.
Brutalist design principles: sharp corners (no border-radius), thick borders, high contrast colors, acid green (#ccff00) accents, monospace typography for headings.

### TanStack Router
Routes are file-based and located in src/routes/. Each file automatically becomes a route based on its filename. The __root.tsx file defines the root layout with outlet for child routes.
Route files use createFileRoute with the path pattern, for example: createFileRoute('/design-system')({ component: DesignSystem }).
Use the Link component from @tanstack/react-router for SPA navigation.

### Component Structure
Follow the component structure established in src/components/. Each component has:
A component file (ComponentName.tsx) with the main implementation
An index.ts for exports
TypeScript interfaces for all props
Variants as a discriminated union or separate props (variant?: 'default' | 'elevated' | 'outlined' | 'glitch')
Size props for consistent sizing (size?: 'sm' | 'md' | 'lg')

### File Structure
src/components/ - Reusable design system components
src/routes/ - File-based routes (automatic route generation)
src/styles.css - Tailwind CSS v4 theme with @theme block
src/integrations/ - TanStack Query and devtools setup
src/lib/ - Utility functions and store setup
src/hooks/ - Custom React hooks

## Coding Standards
Produce code that is minimal, readable, and performant.

### Documentation and Readability
Self-Documenting Logic: Do not use comments unless the logic is inherently cryptographic or mathematically obscure. Rely on descriptive variable and function naming.
No Magic Numbers: Define constants for all numeric or string literals. Logic must reference these identifiers rather than raw values.

### Tailwind CSS Class Merging
Use the cn() utility from @/lib/cn for all className props. This wraps tailwind-merge and handles Tailwind class conflict resolution properly. Never use clsx directly.

Example:
```tsx
import { cn } from "@/lib/cn";

className={cn(
  "base-class",
  variant === "primary" && "primary-class",
  className,
)}
```

### API Design Patterns
Dual Getter-Setter Functions: Implement state management using overloaded functions. A call with no arguments returns the value; a call with an argument updates it (e.g., property() to get, property(newValue) to set).

### User Experience
Focus: Ensure code provides a superior interface, focusing on high-fidelity UI/UX for end-users and a seamless Developer Experience for maintainers. Use the design system components for consistent brutalist aesthetics.

## Common Commands
Run development server: bun run dev
Build for production: bun run build
Format code: bun run format
Lint code: bun run lint
Check all: bun run check

## Project Context
This is a TanStack React Router application with file-based routing. It uses Tailwind CSS v4 for styling and includes a custom brutalist design system with acid green (#ccff00) accents, sharp borders, and monospace typography. The project uses tanstack store for state management and tanstack query for data fetching.

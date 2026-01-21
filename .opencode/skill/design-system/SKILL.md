# Design System Extraction and Component Creation Skill

## Overview

This skill enables automated extraction of design tokens from existing websites and generation of reusable, accessible React components using BaseUI and Tailwind CSS v4. The skill preserves brutalist aesthetic principles while modernizing the implementation stack.

## When to Use

Use this skill when you need to:
- Extract and document design tokens from existing websites
- Create a component library from scratch based on visual analysis
- Convert vanilla HTML/CSS/JS projects to React with BaseUI
- Build consistent design systems with Tailwind CSS v4
- Create accessible, production-ready React components
- Generate documentation and demo pages for design systems

## Prerequisites

### Required Dependencies

```json
{
  "dependencies": {
    "@base-ui/react": "^1.1.0",
    "@tailwindcss/vite": "^4.1.0",
    "tailwindcss": "^4.1.0",
    "tailwind-merge": "^2.0.0",
    "lucide-react": "^0.544.0"
  },
  "devDependencies": {
    "@biomejs/biome": "^1.0.0"
  }
}
```

### Project Requirements

The target project must have:
- React 18+ with TypeScript
- TanStack Router (file-based routing recommended)
- Biome for linting/formatting
- Vite as the build tool

## Input Schema

```typescript
interface DesignSystemSkillInput {
  // Source analysis configuration
  sourceDirectory?: string;        // Path to source brutalist website
  extractStyles?: boolean;         // Extract CSS variables and styles
  
  // Design token configuration
  designTokens?: {
    colors?: boolean;              // Extract color palette
    typography?: boolean;          // Extract typography system
    spacing?: boolean;             // Extract spacing scale
    effects?: boolean;             // Extract visual effects
    components?: boolean;          // Extract component patterns
  };
  
  // Output configuration
  outputDirectory?: string;        // Default: "src/components"
  themeFile?: string;             // Default: "src/styles/theme.css"
  demoRoute?: string;             // Default: "src/routes/design-system.tsx"
  
  // Component generation options
  components?: {
    button?: boolean;             // Generate Button component
    card?: boolean;               // Generate Card component
    input?: boolean;              // Generate Input component
    typography?: boolean;         // Generate Typography components
    grid?: boolean;               // Generate Grid components
    preloader?: boolean;          // Generate Preloader component
    marquee?: boolean;            // Generate Marquee component
    customCursor?: boolean;       // Generate CustomCursor component
    scrollProgress?: boolean;     // Generate ScrollProgress component
    section?: boolean;            // Generate Section component
    all?: boolean;                // Generate all components
  };
  
  // Styling options
  styleOptions?: {
    brutalistMode?: boolean;      // Preserve sharp edges, thick borders
    baseuiIntegration?: boolean;  // Use BaseUI primitives
    tailwindV4?: boolean;         // Use Tailwind CSS v4 @theme
    responsive?: boolean;         // Include responsive variants
  };
  
  // Quality options
  quality?: {
    accessibility?: boolean;      // Ensure WCAG compliance
    typeSafety?: boolean;         // Full TypeScript typing
    documentation?: boolean;      // Generate component docs
    biomeCheck?: boolean;         // Run Biome linting
  };
}
```

## Execution Flow

### Phase 1: Source Analysis

The skill performs comprehensive analysis of the source website:

1. **Color Palette Extraction**
   - Scans all CSS files for color declarations
   - Identifies background colors, text colors, accent colors
   - Captures border and grid line colors
   - Documents color variations (hover, focus, active states)

2. **Typography System Analysis**
   - Extracts font families (fallback chains included)
   - Documents complete type scale (10px to 200px+)
   - Records font weights and letter-spacing values
   - Identifies text transform requirements (uppercase)

3. **Spacing and Layout Audit**
   - Maps grid gap values across all breakpoints
   - Documents padding and margin scales
   - Records section spacing patterns
   - Captures border widths and styles

4. **Visual Effects Documentation**
   - Identifies CRT overlay scanline patterns
   - Documents noise overlay implementations
   - Records glitch animation parameters
   - Captures hover state transitions
   - Analyzes custom cursor behavior

5. **Component Pattern Analysis**
   - Extracts card styles (borders, backgrounds, hover effects)
   - Documents button styles (typography, hover states)
   - Analyzes form input patterns
   - Maps navigation styling
   - Studies grid layouts (asymmetrical models)

### Phase 2: Design Token Configuration

The skill generates Tailwind CSS v4 theme configuration:

```css
/* src/styles/theme.css */
@import "tailwindcss";

@theme {
  /* Color Palette */
  --color-void: #0a0a0a;
  --color-concrete: #1a1a1a;
  --color-white: #f0f0f0;
  --color-acid: #ccff00;
  --color-warning: #ff3333;
  --color-grid: #2a2a2a;
  --color-muted: #666666;
  
  /* Typography */
  --font-mono: "Space Mono", "Courier New", monospace;
  --font-sans: "Work Sans", sans-serif;
  
  /* Spacing Scale */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
  
  /* Border Widths */
  --border-width-1: 1px;
  --border-width-2: 2px;
  --border-width-3: 3px;
  
  /* Animation Durations */
  --duration-300: 300ms;
  --duration-400: 400ms;
  --duration-500: 500ms;
  --duration-800: 800ms;
}
```

### Phase 3: Component Generation

The skill generates components following BaseUI patterns:

#### Component Structure

```
src/components/
├── Button/
│   ├── Button.tsx
│   ├── Button.types.ts
│   └── index.ts
├── Card/
│   ├── Card.tsx
│   ├── Card.types.ts
│   └── index.ts
└── ...
```

#### BaseUI Integration Pattern

```tsx
import { type ParentComponent } from 'solid-js';
import { Button as BaseButton } from '@base-ui/react/button';
import { type JSX } from 'solid-js';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: JSX.Element;
  class?: string;
}

export const Button: ParentComponent<ButtonProps> = (props) => {
  const variantClass = () => 
    props.variant === 'primary' 
      ? 'bg-acid text-void border-acid hover:bg-white hover:border-white' 
      : 'bg-transparent text-white border-white hover:bg-white hover:text-void';
  
  const sizeClass = () => {
    const sizes = {
      sm: 'px-3 py-1 text-xs',
      md: 'px-5 py-2 text-sm',
      lg: 'px-8 py-3 text-base',
    };
    return sizes[props.size || 'md'];
  };

  return (
    <BaseButton
      class={[
        'font-mono font-bold uppercase tracking-wider border-2 transition-all duration-300 cursor-pointer',
        variantClass(),
        sizeClass(),
        props.class,
      ].join(' ')}
    >
      {props.children}
    </BaseButton>
  );
};
```

### Phase 4: Quality Assurance

The skill performs comprehensive quality checks:

1. **Accessibility Verification**
   - WCAG 2.1 AA compliance checks
   - ARIA attribute validation
   - Keyboard navigation testing
   - Screen reader compatibility

2. **Type Safety**
   - Full TypeScript interface definitions
   - Generic type support where appropriate
   - Strict null checks enabled

3. **Code Quality**
   - Biome linting and formatting
   - Consistent naming conventions
   - Proper component composition

## Output Artifacts

### Core Deliverables

1. **Design Token File**
   - Path: `src/styles/theme.css`
   - Purpose: Tailwind CSS v4 @theme configuration
   - Includes: Colors, typography, spacing, borders, animations

2. **Component Library**
   - Path: `src/components/`
   - Components: 10+ reusable BaseUI components
   - Each component includes: Implementation, types, exports

3. **Demo Showcase Page**
   - Path: `src/routes/design-system.tsx`
   - Purpose: Interactive component showcase
   - Includes: All components with variants, usage examples

4. **Documentation**
   - Inline component documentation
   - Usage examples
   - API reference

### Optional Deliverables

- Updated `biome.json` with project-specific rules
- Storybook configuration for component stories
- Vitest test suite for components
- Component prop tables and documentation

## Usage Examples

### Basic Component Generation

```typescript
{
  styleOptions: {
    brutalistMode: true,
    baseuiIntegration: true,
    tailwindV4: true,
  },
  components: {
    all: true,
  }
}
```

### Custom Color Extraction

```typescript
{
  sourceDirectory: './brutalist-site',
  designTokens: {
    colors: true,
    typography: true,
    spacing: true,
  },
  outputDirectory: './src/design-system',
}
```

### Minimal Component Set

```typescript
{
  components: {
    button: true,
    card: true,
    input: true,
    typography: true,
  },
  quality: {
    accessibility: true,
    documentation: true,
  }
}
```

## Best Practices

### Brutalist Design Principles

1. **Sharp Corners**
   - No border-radius on components
   - 90-degree angles only
   - Angular geometry throughout

2. **Thick Borders**
   - Minimum 2px border width
   - High contrast borders
   - Visible grid lines

3. **High Contrast**
   - Acid green (#ccff00) on dark backgrounds
   - Clear text hierarchy
   - Accessible color ratios

4. **Raw Aesthetics**
   - Visible design elements
   - Industrial styling
   - Functional minimalism

### BaseUI Integration

1. **Slot Pattern**
   - Use `render` prop for composition
   - Maintain accessibility
   - Support custom elements

2. **Component Structure**
   - Wrappers around BaseUI primitives
   - Brutalist styling applied via Tailwind
   - Type-safe prop interfaces

3. **State Management**
   - Controlled and uncontrolled props
   - Proper event handling
   - Performance optimizations

### Tailwind CSS v4

1. **Theme Variables**
   - Define all tokens in `@theme` block
   - Use semantic naming
   - Consistent scaling

2. **Utility Classes**
   - Compose with existing utilities
   - Create variant-specific classes
   - Responsive design built-in

## Error Handling

The skill handles common issues:

1. **Missing Source Directory**
   - Falls back to default brutalist theme
   - Uses hardcoded design tokens
   - Generates baseline components

2. **Invalid CSS Variables**
   - Parses fallback values
   - Validates color formats
   - Reports extraction issues

3. **Accessibility Violations**
   - Auto-fixes common issues
   - Reports unfixable problems
   - Suggests alternatives

4. **Type Errors**
   - Auto-generates interfaces
   - Validates prop types
   - Reports missing definitions

## Performance Considerations

- Lazy-loaded components for code splitting
- Minimal runtime overhead
- Optimized bundle size
- Tree-shaking support

## Dependencies

### External Libraries

- `@base-ui/react`: Headless UI components
- `@tailwindcss/vite`: Tailwind CSS integration
- `tailwindcss`: CSS framework
- `tailwind-merge`: Utility class merging
- `lucide-react`: Icon library

### Tooling

- `@biomejs/biome`: Linting and formatting
- `typescript`: Type safety
- `vite`: Build tool

## Limitations

- Requires React 18+ project structure
- Assumes TanStack Router file-based routing
- Biome must be configured for linting
- BaseUI 1.x compatibility only

## Version History

### 1.0.0
- Initial skill release
- Complete design token extraction
- 10+ BaseUI components
- Tailwind CSS v4 integration
- Full TypeScript support
- Accessibility compliance
- Biome integration

## See Also

- [BaseUI React Documentation](https://base-ui.com/react)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [TanStack Router Documentation](https://tanstack.com/router)
- [Biome Documentation](https://biomejs.dev)

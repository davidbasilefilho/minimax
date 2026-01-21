import * as React from "react";
import { cn } from "@/lib/cn";

// ============================================================================
// Heading
// ============================================================================

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	/** Heading level (1-6) */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	/** Visual size preset */
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
	/** Font variant */
	variant?: "default" | "mono" | "uppercase";
	/** Whether to apply the brutalist accent style */
	accent?: boolean;
}

const headingStyles = {
	base: "font-bold text-white leading-tight",
	variants: {
		default: "font-sans",
		mono: "font-mono",
		uppercase: "font-sans uppercase tracking-wider",
	},
	sizes: {
		xs: "text-xs",
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg",
		xl: "text-xl",
		"2xl": "text-2xl",
		"3xl": "text-3xl",
		"4xl": "text-4xl",
		"5xl": "text-5xl",
	},
	accent:
		"relative before:content-[''] before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-acid",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	(
		{
			level = 2,
			size = "2xl",
			variant = "default",
			accent = false,
			className,
			children,
			...props
		},
		forwardedRef,
	) => {
		const Component = `h${level}` as React.ElementType;

		return (
			<Component
				ref={forwardedRef}
				className={cn(
					headingStyles.base,
					headingStyles.variants[variant],
					headingStyles.sizes[size],
					accent && headingStyles.accent,
					className,
				)}
				{...props}
			>
				{children}
			</Component>
		);
	},
);

Heading.displayName = "Heading";

// ============================================================================
// Text
// ============================================================================

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	/** Text size preset */
	size?: "xs" | "sm" | "base" | "lg";
	/** Text color variant */
	variant?:
		| "default"
		| "muted"
		| "dim"
		| "accent"
		| "success"
		| "warning"
		| "error"
		| "info";
	/** Font variant */
	variantFont?: "default" | "mono";
	/** Whether to apply uppercase transform */
	uppercase?: boolean;
	/** Whether to apply bold weight */
	bold?: boolean;
}

const textStyles = {
	base: "text-white leading-relaxed",
	variants: {
		default: "text-white",
		muted: "text-muted",
		dim: "text-dim",
		accent: "text-acid",
		success: "text-success",
		warning: "text-warning",
		error: "text-error",
		info: "text-info",
	},
	variantFonts: {
		default: "font-sans",
		mono: "font-mono",
	},
	uppercase: "uppercase tracking-wider",
	bold: "font-bold",
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
	(
		{
			size = "base",
			variant = "default",
			variantFont = "default",
			uppercase = false,
			bold = false,
			className,
			children,
			...props
		},
		forwardedRef,
	) => {
		const sizeClass = size === "base" ? "" : `text-${size}`;

		return (
			<p
				ref={forwardedRef}
				className={cn(
					textStyles.base,
					textStyles.variants[variant],
					textStyles.variantFonts[variantFont],
					sizeClass,
					uppercase && textStyles.uppercase,
					bold && textStyles.bold,
					className,
				)}
				{...props}
			>
				{children}
			</p>
		);
	},
);

Text.displayName = "Text";

// ============================================================================
// Caption
// ============================================================================

export interface CaptionProps extends React.HTMLAttributes<HTMLSpanElement> {
	/** Caption size */
	size?: "sm" | "xs";
	/** Text color variant */
	variant?: "default" | "muted" | "dim" | "accent";
}

const captionStyles = {
	base: "font-mono text-muted uppercase tracking-wider",
	sizes: {
		xs: "text-[10px]",
		sm: "text-xs",
	},
	variants: {
		default: "text-muted",
		muted: "text-muted",
		dim: "text-dim",
		accent: "text-acid",
	},
};

export const Caption = React.forwardRef<HTMLSpanElement, CaptionProps>(
	(
		{ size = "sm", variant = "default", className, children, ...props },
		forwardedRef,
	) => {
		return (
			<span
				ref={forwardedRef}
				className={cn(
					captionStyles.base,
					captionStyles.sizes[size],
					captionStyles.variants[variant],
					className,
				)}
				{...props}
			>
				{children}
			</span>
		);
	},
);

Caption.displayName = "Caption";

// ============================================================================
// Kbd (Keyboard key styling)
// ============================================================================

export interface KbdProps extends React.HTMLAttributes<HTMLSpanElement> {
	/** Key size */
	size?: "sm" | "md";
}

const kbdStyles = {
	base: `
     inline-flex items-center justify-center
     font-mono text-xs font-bold
     bg-concrete text-white
     border border-light
     px-2 py-0.5
     transition-all duration-200
   `,
	sizes: {
		sm: "min-w-[1.5rem] h-6 text-[10px]",
		md: "min-w-[2rem] h-7",
	},
};

export const Kbd = React.forwardRef<HTMLSpanElement, KbdProps>(
	({ size = "md", className, children, ...props }, forwardedRef) => {
		return (
			<kbd
				ref={forwardedRef}
				className={cn(kbdStyles.base, kbdStyles.sizes[size], className)}
				{...props}
			>
				{children}
			</kbd>
		);
	},
);

Kbd.displayName = "Kbd";

// ============================================================================
// Code
// ============================================================================

export interface CodeProps extends React.HTMLAttributes<HTMLSpanElement> {
	/** Whether to show inline block styling */
	block?: boolean;
}

const codeStyles = {
	base: `
     font-mono
     bg-concrete text-acid
     border border-light
     px-1.5 py-0.5
     text-sm
   `,
	block: `
     block w-full p-4
     overflow-x-auto
   `,
};

export const Code = React.forwardRef<HTMLSpanElement, CodeProps>(
	({ block = false, className, children, ...props }, forwardedRef) => {
		return (
			<code
				ref={forwardedRef}
				className={cn(codeStyles.base, block && codeStyles.block, className)}
				{...props}
			>
				{children}
			</code>
		);
	},
);

Code.displayName = "Code";

// ============================================================================
// Export all typography components
// ============================================================================

export default {
	Heading,
	Text,
	Caption,
	Kbd,
	Code,
};

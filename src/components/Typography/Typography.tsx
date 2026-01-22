import type * as React from "react";
import { cn } from "@/lib/cn";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
	variant?: "default" | "mono" | "uppercase";
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
		"relative before:content-[''] before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-minimax-pink",
};

export function Heading({
	level = 2,
	size = "2xl",
	variant = "default",
	accent = false,
	className,
	children,
	...props
}: HeadingProps) {
	const Component = `h${level}` as React.ElementType;

	return (
		<Component
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
}

Heading.displayName = "Heading";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	size?: "xs" | "sm" | "base" | "lg";
	variant?:
		| "default"
		| "muted"
		| "dim"
		| "accent"
		| "success"
		| "warning"
		| "error"
		| "info";
	variantFont?: "default" | "mono";
	uppercase?: boolean;
	bold?: boolean;
}

const textStyles = {
	base: "text-white leading-relaxed",
	variants: {
		default: "text-white",
		muted: "text-muted",
		dim: "text-dim",
		accent: "text-minimax-pink",
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

export function Text({
	size = "base",
	variant = "default",
	variantFont = "default",
	uppercase = false,
	bold = false,
	className,
	children,
	...props
}: TextProps) {
	const sizeClass = size === "base" ? "" : `text-${size}`;

	return (
		<p
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
}

Text.displayName = "Text";

export interface CaptionProps extends React.HTMLAttributes<HTMLSpanElement> {
	size?: "sm" | "xs";
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
		accent: "text-minimax-pink",
	},
};

export function Caption({
	size = "sm",
	variant = "default",
	className,
	children,
	...props
}: CaptionProps) {
	return (
		<span
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
}

Caption.displayName = "Caption";

export interface KbdProps extends React.HTMLAttributes<HTMLSpanElement> {
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

export function Kbd({ size = "md", className, children, ...props }: KbdProps) {
	return (
		<kbd
			className={cn(kbdStyles.base, kbdStyles.sizes[size], className)}
			{...props}
		>
			{children}
		</kbd>
	);
}

Kbd.displayName = "Kbd";

export interface CodeProps extends React.HTMLAttributes<HTMLSpanElement> {
	block?: boolean;
}

const codeStyles = {
	base: `
      font-mono
      bg-concrete text-minimax-pink
      border border-light
      px-1.5 py-0.5
      text-sm
    `,
	block: `
      block w-full p-4
      overflow-x-auto
    `,
};

export function Code({
	block = false,
	className,
	children,
	...props
}: CodeProps) {
	return (
		<code
			className={cn(codeStyles.base, block && codeStyles.block, className)}
			{...props}
		>
			{children}
		</code>
	);
}

Code.displayName = "Code";

export default {
	Heading,
	Text,
	Caption,
	Kbd,
	Code,
};

import type * as React from "react";
import { cn } from "@/lib/cn";

export interface PreloaderProps
	extends React.HTMLAttributes<HTMLOutputElement> {
	size?: "sm" | "md" | "lg";
	variant?: "minimax-pink" | "electric" | "white";
	label?: string;
}

const preloaderStyles = {
	base: "inline-flex flex-col items-center gap-3",
	variants: {
		"minimax-pink": "text-minimax-pink",
		electric: "text-electric",
		white: "text-white",
	},
	sizes: {
		sm: "scale-75",
		md: "scale-100",
		lg: "scale-125",
	},
};

export function Preloader({
	size = "md",
	variant = "minimax-pink",
	label = "Loading...",
	className,
	...props
}: PreloaderProps) {
	return (
		<output
			className={cn(
				preloaderStyles.base,
				preloaderStyles.variants[variant],
				preloaderStyles.sizes[size],
				className,
			)}
			aria-live="polite"
			{...props}
		>
			<div className="relative w-12 h-12">
				<div
					className={cn(
						"absolute inset-0 border-2 border-current opacity-20 rounded-full",
					)}
				/>
				<div
					className={cn(
						"absolute inset-1 border-2 border-current border-t-transparent rounded-full animate-spin",
					)}
					style={{ animationDuration: "0.8s" }}
				/>
				<div
					className={cn(
						"absolute inset-[18px] bg-current rounded-full animate-pulse",
					)}
				/>
			</div>
			{label && (
				<span className="font-mono text-xs uppercase tracking-widest animate-pulse">
					{label}
				</span>
			)}
		</output>
	);
}

Preloader.displayName = "Preloader";

export default Preloader;

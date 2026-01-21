import * as React from "react";
import { cn } from "@/lib/cn";

export interface PreloaderProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Preloader size preset */
	size?: "sm" | "md" | "lg";
	/** Preloader style variant */
	variant?: "acid" | "electric" | "white";
	/** Whether to show text label */
	label?: string;
}

const preloaderStyles = {
	base: "inline-flex flex-col items-center gap-3",
	variants: {
		acid: "text-acid",
		electric: "text-electric",
		white: "text-white",
	},
	sizes: {
		sm: "scale-75",
		md: "scale-100",
		lg: "scale-125",
	},
};

export const Preloader = React.forwardRef<HTMLDivElement, PreloaderProps>(
	(
		{
			size = "md",
			variant = "acid",
			label = "Loading...",
			className,
			...props
		},
		forwardedRef,
	) => {
		return (
			<div
				ref={forwardedRef}
				className={cn(
					preloaderStyles.base,
					preloaderStyles.variants[variant],
					preloaderStyles.sizes[size],
					className,
				)}
				role="status"
				aria-live="polite"
				{...props}
			>
				<div className="relative w-12 h-12">
					{/* Outer ring */}
					<div
						className={cn(
							"absolute inset-0 border-2 border-current opacity-20 rounded-full",
						)}
					/>
					{/* Spinning arc */}
					<div
						className={cn(
							"absolute inset-1 border-2 border-current border-t-transparent rounded-full animate-spin",
						)}
						style={{ animationDuration: "0.8s" }}
					/>
					{/* Inner dot */}
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
			</div>
		);
	},
);

Preloader.displayName = "Preloader";

export default Preloader;

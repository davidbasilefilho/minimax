import * as React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "elevated" | "outlined" | "glitch";
	size?: "sm" | "md" | "lg";
	hoverable?: boolean;
	clickable?: boolean;
	accent?: "top" | "left" | "corner" | "none";
}

const cardStyles = {
	base: `
      bg-concrete border-2 border-light
      transition-all duration-300
    `,
	variants: {
		default: "",
		elevated: "brutal-shadow",
		outlined: "border-white bg-transparent",
		glitch: "glitch-card",
	},
	sizes: {
		sm: "p-4",
		md: "p-6",
		lg: "p-8",
	},
	hoverable: `
      hover:border-acid hover:translate-x-[-2px] hover:translate-y-[-2px]
      hover:shadow-[4px_4px_0_var(--color-acid)]
    `,
	clickable: "cursor-pointer",
	accents: {
		top: "before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-acid",
		left: "before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-acid",
		corner:
			"before:content-[''] before:absolute before:top-0 before:right-0 before:w-8 before:h-8 before:bg-acid before:clip-triangle",
		none: "",
	},
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	(
		{
			variant = "default",
			size = "md",
			hoverable = false,
			clickable = false,
			accent = "none",
			className,
			children,
			...props
		},
		forwardedRef,
	) => {
		const [isHovered, setIsHovered] = React.useState(false);
		const mountAnimationRef = React.useRef<HTMLDivElement>(null);

		React.useEffect(() => {
			if (variant === "glitch" && mountAnimationRef.current) {
				const el = mountAnimationRef.current;
				el.style.animation = "none";
				requestAnimationFrame(() => {
					el.style.animation = "glitch-mount 500ms ease-out forwards";
				});
			}
		}, [variant]);

		return (
			<div
				ref={forwardedRef}
				className={cn(
					"relative",
					cardStyles.base,
					variant === "glitch"
						? cardStyles.variants.glitch
						: cardStyles.variants[variant],
					cardStyles.sizes[size],
					hoverable && cardStyles.hoverable,
					clickable && cardStyles.clickable,
					cardStyles.accents[accent],
					className,
				)}
				onMouseEnter={() => variant === "glitch" && setIsHovered(true)}
				onMouseLeave={() => variant === "glitch" && setIsHovered(false)}
				{...props}
			>
				{variant === "glitch" && (
					<div
						ref={mountAnimationRef}
						className={cn(
							"absolute inset-0 pointer-events-none overflow-hidden",
							isHovered && "animate-glitch-1",
						)}
					>
						<div className="glitch-layer-1" />
					</div>
				)}
				{variant === "glitch" && (
					<div
						className={cn(
							"absolute inset-0 pointer-events-none overflow-hidden",
							isHovered && "animate-glitch-2",
						)}
					>
						<div className="glitch-layer-2" />
					</div>
				)}
				{children}
			</div>
		);
	},
);

Card.displayName = "Card";

export const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardedRef) => (
	<div
		ref={forwardedRef}
		className={cn("mb-4 border-b border-light pb-4", className)}
		{...props}
	/>
));

CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, forwardedRef) => (
	<h3
		ref={forwardedRef}
		className={cn(
			"font-mono font-bold uppercase tracking-wider text-white",
			className,
		)}
		{...props}
	/>
));

CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, forwardedRef) => (
	<p
		ref={forwardedRef}
		className={cn("text-muted text-sm mt-1", className)}
		{...props}
	/>
));

CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardedRef) => (
	<div ref={forwardedRef} className={cn("", className)} {...props} />
));

CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardedRef) => (
	<div
		ref={forwardedRef}
		className={cn("mt-4 pt-4 border-t border-light flex gap-2", className)}
		{...props}
	/>
));

CardFooter.displayName = "CardFooter";

export default Object.assign(Card, {
	Header: CardHeader,
	Title: CardTitle,
	Description: CardDescription,
	Content: CardContent,
	Footer: CardFooter,
});

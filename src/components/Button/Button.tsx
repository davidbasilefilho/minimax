import * as React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button visual variant */
	variant?: "primary" | "secondary" | "outline" | "ghost";
	/** Button size preset */
	size?: "sm" | "md" | "lg";
	/** Full-width button */
	fullWidth?: boolean;
	/** Optional icon to display before text */
	startIcon?: React.ReactNode;
	/** Optional icon to display after text */
	endIcon?: React.ReactNode;
	/** loading state */
	loading?: boolean;
}

const buttonStyles = {
	base: `
    inline-flex items-center justify-center gap-2
    font-mono font-bold uppercase tracking-wider
    border-2 transition-all duration-300
    cursor-pointer select-none
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 focus-visible:ring-offset-void
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    brutal-hover
  `,
	variants: {
		primary: `
      bg-acid text-void border-acid
      hover:bg-white hover:text-void hover:border-white
    `,
		secondary: `
      bg-electric text-void border-electric
      hover:bg-white hover:text-void hover:border-white
    `,
		outline: `
      bg-transparent text-white border-white
      hover:bg-white hover:text-void hover:border-white
    `,
		ghost: `
      bg-transparent text-white border-transparent
      hover:bg-white/10 hover:text-white hover:border-transparent
    `,
	},
	sizes: {
		sm: "px-3 py-1.5 text-xs",
		md: "px-5 py-2 text-sm",
		lg: "px-8 py-3 text-base",
	},
	fullWidth: "w-full",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "primary",
			size = "md",
			fullWidth = false,
			startIcon,
			endIcon,
			loading = false,
			disabled,
			className,
			children,
			...props
		},
		forwardedRef,
	) => {
		const isDisabled = disabled || loading;

		return (
			<button
				ref={forwardedRef}
				disabled={isDisabled}
				className={cn(
					buttonStyles.base,
					buttonStyles.variants[variant],
					buttonStyles.sizes[size],
					fullWidth && buttonStyles.fullWidth,
					className,
				)}
				{...props}
			>
				{loading && (
					<svg
						className="animate-spin h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<title>Loading</title>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				)}
				{!loading && startIcon && (
					<span className="inline-flex items-center justify-center shrink-0">
						{startIcon}
					</span>
				)}
				<span className={cn(loading && "opacity-70")}>{children}</span>
				{!loading && endIcon && (
					<span className="inline-flex items-center justify-center shrink-0">
						{endIcon}
					</span>
				)}
			</button>
		);
	},
);

Button.displayName = "Button";

export default Button;

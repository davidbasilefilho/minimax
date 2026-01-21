import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	/** Input visual variant */
	variant?: "default" | "filled" | "underline";
	/** Input size preset */
	size?: "sm" | "md" | "lg";
	/** Label for the input */
	label?: string;
	/** Helper text displayed below input */
	helperText?: string;
	/** Error message (displays when error is true) */
	errorText?: string;
	/** Whether the input has an error state */
	error?: boolean;
	/** Whether the input takes full width */
	fullWidth?: boolean;
	/** Optional icon to display before input */
	startIcon?: React.ReactNode;
	/** Optional icon to display after input */
	endIcon?: React.ReactNode;
}

const inputStyles: {
	base: string;
	variants: Record<string, string>;
	sizes: Record<string, string>;
	error: string;
	withIcon: Record<string, string>;
} = {
	base: `
      w-full font-mono
      bg-concrete text-white border-2 border-light
      transition-all duration-300
      placeholder:text-muted
      focus:outline-none focus:border-acid focus:ring-0
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
	variants: {
		default: "",
		filled: "bg-dark border-transparent hover:border-light focus:border-acid",
		underline:
			"border-t-0 border-l-0 border-r-0 border-b-2 bg-transparent rounded-none",
	},
	sizes: {
		sm: "px-3 py-1.5 text-xs",
		md: "px-4 py-2 text-sm",
		lg: "px-5 py-3 text-base",
	},
	error: "border-error focus:border-error",
	withIcon: {
		sm: "pl-9 pr-3",
		md: "pl-10 pr-4",
		lg: "pl-12 pr-5",
	},
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			variant = "default",
			size = "md",
			label,
			helperText,
			errorText,
			error = false,
			fullWidth = true,
			startIcon,
			endIcon,
			className,
			id,
			...props
		},
		forwardedRef,
	) => {
		const generatedId = React.useId();
		const inputId = id || generatedId;
		const hasError = error || Boolean(errorText);

		return (
			<div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
				{label && (
					<label
						htmlFor={inputId}
						className="font-mono text-sm font-bold uppercase tracking-wider text-muted"
					>
						{label}
					</label>
				)}
				<div className="relative">
					{startIcon && (
						<span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
							{startIcon}
						</span>
					)}
					<input
						ref={forwardedRef}
						id={inputId}
						className={cn(
							inputStyles.base,
							inputStyles.variants[variant],
							inputStyles.sizes[size],
							hasError && inputStyles.error,
							startIcon ? inputStyles.withIcon[size] : null,
							className,
						)}
						aria-invalid={hasError}
						aria-describedby={
							hasError
								? `${inputId}-error`
								: helperText
									? `${inputId}-helper`
									: undefined
						}
						{...props}
					/>
					{endIcon && (
						<span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
							{endIcon}
						</span>
					)}
				</div>
				{hasError && errorText && (
					<span
						id={`${inputId}-error`}
						className="text-error text-xs font-mono"
						role="alert"
					>
						{errorText}
					</span>
				)}
				{!hasError && helperText && (
					<span
						id={`${inputId}-helper`}
						className="text-muted text-xs font-mono"
					>
						{helperText}
					</span>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";

export default Input;

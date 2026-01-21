import * as React from "react";
import { cn } from "@/lib/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Section size preset */
	size?: "sm" | "md" | "lg" | "xl" | "full";
	/** Whether to apply the brutalist grid pattern background */
	gridPattern?: boolean;
	/** Whether to apply scanlines effect */
	scanlines?: boolean;
	/** Whether to apply vignette effect */
	vignette?: boolean;
	/** Section ID for navigation */
	id?: string;
}

const sectionSizes = {
	sm: "py-8 px-4",
	md: "py-16 px-6",
	lg: "py-24 px-8",
	xl: "py-32 px-12",
	full: "min-h-screen py-0 px-0",
};

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
	(
		{
			size = "md",
			gridPattern = false,
			scanlines = false,
			vignette = false,
			id,
			className,
			children,
			...props
		},
		forwardedRef,
	) => {
		return (
			<section
				ref={forwardedRef}
				id={id}
				className={cn(
					"relative w-full",
					sectionSizes[size],
					gridPattern && "bg-grid bg-[length:40px_40px]",
					scanlines && "scanlines",
					vignette && "vignette",
					className,
				)}
				{...props}
			>
				{children}
			</section>
		);
	},
);

Section.displayName = "Section";

export default Section;

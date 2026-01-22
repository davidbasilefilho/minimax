import type * as React from "react";
import { cn } from "@/lib/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: "sm" | "md" | "lg" | "xl" | "full";
	gridPattern?: boolean;
	scanlines?: boolean;
	vignette?: boolean;
	id?: string;
}

const sectionSizes = {
	sm: "py-8 px-4",
	md: "py-16 px-6",
	lg: "py-24 px-8",
	xl: "py-32 px-12",
	full: "min-h-screen py-0 px-0",
};

export function Section({
	size = "md",
	gridPattern = false,
	scanlines = false,
	vignette = false,
	id,
	className,
	children,
	...props
}: SectionProps) {
	return (
		<section
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
}

Section.displayName = "Section";

export default Section;

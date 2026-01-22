import * as React from "react";
import { cn } from "@/lib/cn";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	direction?: "left" | "right";
	speed?: number;
	repeat?: number;
}

export function Marquee({
	children,
	direction = "left",
	speed = 40,
	repeat = 3,
	className,
	...props
}: MarqueeProps) {
	const duration = `${speed}s`;

	return (
		<div
			className={cn(
				"overflow-hidden flex py-4 bg-concrete border-y-2 border-light",
				className,
			)}
			aria-hidden="true"
			{...props}
		>
			<div
				className={cn(
					"flex flex-nowrap gap-8",
					direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
					"hover:animation-paused",
				)}
				style={{ animationDuration: duration }}
			>
				{Array.from({ length: repeat }).map((_, i) => (
					<React.Fragment key={i}>{children}</React.Fragment>
				))}
			</div>
		</div>
	);
}

Marquee.displayName = "Marquee";

export default Marquee;

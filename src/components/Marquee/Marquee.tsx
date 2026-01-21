import * as React from "react";
import { cn } from "@/lib/cn";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Content to display in the marquee */
	children: React.ReactNode;
	/** Direction of the marquee animation */
	direction?: "left" | "right";
	/** Speed of the animation (lower is faster) */
	speed?: number;
	/** Number of times to repeat the content */
	repeat?: number;
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
	(
		{
			children,
			direction = "left",
			speed = 40,
			repeat = 3,
			className,
			...props
		},
		forwardedRef,
	) => {
		const duration = `${speed}s`;

		return (
			<div
				ref={forwardedRef}
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
						direction === "left"
							? "animate-marquee"
							: "animate-marquee-reverse",
						"hover:animation-paused",
					)}
					style={{ animationDuration: duration }}
				>
					{Array.from({ length: repeat }).map((_, i) => (
						<React.Fragment key={`marquee-${i}`}>{children}</React.Fragment>
					))}
				</div>
			</div>
		);
	},
);

Marquee.displayName = "Marquee";

export default Marquee;

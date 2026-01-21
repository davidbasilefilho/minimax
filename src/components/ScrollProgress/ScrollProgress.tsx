import * as React from "react";

export interface ScrollProgressProps {
	/** Position of the scroll progress bar */
	position?: "top" | "bottom";
	/** Color of the progress bar */
	color?: string;
	/** Height of the progress bar in pixels */
	height?: number;
	/** Whether to show a glowing effect */
	glow?: boolean;
	/** Z-index for the component */
	zIndex?: number;
	/** ClassName for the container */
	className?: string;
}

export const ScrollProgress = React.forwardRef<
	HTMLDivElement,
	ScrollProgressProps
>(
	(
		{
			position = "top",
			color = "#ccff00",
			height = 3,
			glow = true,
			zIndex = 1000,
			className,
		},
		forwardedRef,
	) => {
		const [progress, setProgress] = React.useState(0);

		React.useEffect(() => {
			const updateProgress = () => {
				const scrollTop = window.scrollY;
				const docHeight =
					document.documentElement.scrollHeight - window.innerHeight;
				const scrollPercent = scrollTop / docHeight;
				setProgress(scrollPercent);
			};

			window.addEventListener("scroll", updateProgress, { passive: true });
			updateProgress();

			return () => window.removeEventListener("scroll", updateProgress);
		}, []);

		const barStyle: React.CSSProperties = {
			position: "fixed",
			[position]: 0,
			left: 0,
			width: `${progress * 100}%`,
			height,
			backgroundColor: color,
			zIndex,
			transition: "width 0.1s ease-out",
			boxShadow: glow ? `0 0 10px ${color}, 0 0 20px ${color}` : "none",
		};

		return (
			<div
				ref={forwardedRef}
				className={className}
				style={barStyle}
				role="progressbar"
				aria-valuenow={Math.round(progress * 100)}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-label="Scroll progress"
			/>
		);
	},
);

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;

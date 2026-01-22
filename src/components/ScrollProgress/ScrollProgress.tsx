import * as React from "react";

export interface ScrollProgressProps {
	position?: "top" | "bottom";
	color?: string;
	height?: number;
	glow?: boolean;
	zIndex?: number;
	className?: string;
}

export function ScrollProgress({
	position = "top",
	color = "#d23f6c",
	height = 3,
	glow = true,
	zIndex = 1000,
	className,
}: ScrollProgressProps) {
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
			className={className}
			style={barStyle}
			role="progressbar"
			aria-valuenow={Math.round(progress * 100)}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label="Scroll progress"
		/>
	);
}

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;

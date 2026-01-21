import * as React from "react";

export interface CustomCursorProps {
	/** Cursor color */
	color?: string;
	/** Cursor size in pixels */
	size?: number;
	/** Whether to show a trailing effect */
	trail?: boolean;
	/** CSS blend mode for the cursor */
	blendMode?: "normal" | "difference" | "exclusion" | "multiply" | "screen";
	/** ClassName for the container */
	className?: string;
}

export const CustomCursor = React.forwardRef<HTMLDivElement, CustomCursorProps>(
	(
		{
			color = "#ccff00",
			size = 32,
			trail = true,
			blendMode = "difference",
			className,
		},
		forwardedRef,
	) => {
		const [position, setPosition] = React.useState({ x: 0, y: 0 });
		const [isVisible, setIsVisible] = React.useState(true);

		React.useEffect(() => {
			const updatePosition = (e: MouseEvent) => {
				setPosition({ x: e.clientX, y: e.clientY });
			};

			const handleMouseEnter = () => setIsVisible(true);
			const handleMouseLeave = () => setIsVisible(false);

			document.addEventListener("mousemove", updatePosition);
			document.addEventListener("mouseenter", handleMouseEnter);
			document.addEventListener("mouseleave", handleMouseLeave);

			// Hide default cursor
			document.body.style.cursor = "none";

			return () => {
				document.removeEventListener("mousemove", updatePosition);
				document.removeEventListener("mouseenter", handleMouseEnter);
				document.removeEventListener("mouseleave", handleMouseLeave);
				document.body.style.cursor = "";
			};
		}, []);

		const cursorStyle: React.CSSProperties = {
			position: "fixed",
			left: position.x - size / 2,
			top: position.y - size / 2,
			width: size,
			height: size,
			backgroundColor: color,
			borderRadius: "50%",
			pointerEvents: "none",
			zIndex: 9999,
			mixBlendMode: blendMode,
			opacity: isVisible ? 1 : 0,
			transition: "opacity 0.2s ease",
		};

		return (
			<>
				{/* Main cursor */}
				<div ref={forwardedRef} className={className} style={cursorStyle} />
				{/* Trail effect */}
				{trail && (
					<div
						className="fixed pointer-events-none z-[9998] rounded-full"
						style={{
							...cursorStyle,
							width: size * 0.6,
							height: size * 0.6,
							left: position.x - (size * 0.6) / 2,
							top: position.y - (size * 0.6) / 2,
							opacity: 0.5,
							transition:
								"left 0.1s ease-out, top 0.1s ease-out, opacity 0.2s ease",
						}}
					/>
				)}
			</>
		);
	},
);

CustomCursor.displayName = "CustomCursor";

export default CustomCursor;

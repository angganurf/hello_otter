import React, { useMemo } from "react";
import { Snowflake } from "./Snowflake";

interface SnowProps {
	count?: number;
}

export const Snow: React.FC<SnowProps> = ({ count = 50 }) => {
	const snowflakes = useMemo(() => {
		const width = window?.innerWidth || 1920;
		const height = window?.innerHeight || 1080;

		return Array.from({ length: count }, (_, i) => ({
			id: i,
			size: Math.random() * 4 + 2, // 2-6px
			opacity: Math.random() * 0.7 + 0.3, // 0.3-1.0
			speed: Math.random() * 0.5 + 0.3, // 0.3-0.8
			wind: Math.random() * 0.5 - 0.25, // -0.25-0.25
			initialX: Math.random() * width,
			initialY: Math.random() * height,
			color: Math.random() > 0.5 ? "#67e8f9" : "green", // Cyan or Pink
			glow: Math.random() * 2 + 1, // 1-3x glow multiplier
		}));
	}, [count]);

	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden">
			{snowflakes.map((flake) => (
				<Snowflake key={flake.id} {...flake} />
			))}
		</div>
	);
};

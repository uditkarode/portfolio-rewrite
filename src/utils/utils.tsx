import { MotionProps, Transition, clamp } from "framer-motion";
import { birthday } from "./constants";

export function fade(
	transition: Transition = {},
	disable = false,
): MotionProps {
	if (disable) return {};

	return {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition,
	};
}

export function objectIf<T>(condition: any, object: T, def = {}) {
	return condition ? object : def;
}

export function yearsFromBirthday() {
	const msDiff = new Date().getTime() - birthday.getTime();
	return Math.floor(
		msDiff / // milliseconds
			(1000 * // seconds
				60 * // minutes
				60 * // hours
				24 * // days
				365), // years
	);
}

// color logic from https://css-tricks.com/snippets/javascript/lighten-darken-color/
// positive amount = lighten, negative amount = darken, range 0-100
export function lumenColor(color: string, amount: number) {
	const usePound = color[0] == "#";
	if (usePound) color = color.slice(1);

	const hexColor = parseInt(color, 16);
	const r = clamp(0, 255, (hexColor >> 16) + amount);
	const g = clamp(0, 255, (hexColor & 0x0000ff) + amount);
	const b = clamp(0, 255, ((hexColor >> 8) & 0x00ff) + amount);

	return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

// https://css-tricks.com/snippets/javascript/random-hex-color
export function randomColor() {
	return lumenColor(
		`#${Math.floor(Math.random() * 16777215).toString(16)}`,
		0.2,
	) as `#${string}`;
}

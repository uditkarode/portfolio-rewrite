import { MotionProps, Transition } from "framer-motion";
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

// https://css-tricks.com/snippets/javascript/lighten-darken-color/
// positive amount = lighten, negative amount = darken
export function lumenColor(color: string, amount: number) {
	let usePound = false;

	if (color[0] == "#") {
		color = color.slice(1);
		usePound = true;
	}

	const num = parseInt(color, 16);
	let r = (num >> 16) + amount;
	if (r > 255) r = 255;
	else if (r < 0) r = 0;

	let b = ((num >> 8) & 0x00ff) + amount;
	if (b > 255) b = 255;
	else if (b < 0) b = 0;

	let g = (num & 0x0000ff) + amount;
	if (g > 255) g = 255;
	else if (g < 0) g = 0;

	return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

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

const msToYears = (ms: number) =>
	Math.floor(
		ms / // milliseconds
			(1000 * // seconds
				60 * // minutes
				60 * // hours
				24 * // days
				365), // years
	);

export function yearsFromBirthday() {
	const msDiff = new Date().getTime() - birthday.getTime();
	return msToYears(msDiff);
}

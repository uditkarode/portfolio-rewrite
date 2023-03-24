import { MotionProps, Transition } from "framer-motion";

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

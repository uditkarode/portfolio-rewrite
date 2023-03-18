import { MotionProps, Transition } from "framer-motion";

export function id<T extends Record<string, Transition>>(v: T) {
	return v;
}

export function fade(transition: Transition): MotionProps {
	return {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition,
	};
}

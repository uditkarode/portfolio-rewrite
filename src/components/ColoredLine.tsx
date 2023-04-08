import { MotionProps, motion } from "framer-motion";
import { useThemeStore } from "@/stores/theme-store";
import { LayoutIds } from "@/utils/constants";

export default function ColoredLine(props: MotionProps) {
	const { theme } = useThemeStore();

	return (
		<motion.figure style={{ width: "100%" }} layoutId={LayoutIds.Line}>
			<motion.div
				style={{
					backgroundColor: theme.accent,
					width: "100%",
					height: 2,
					opacity: 0.4,
				}}
				{...props}
			/>
		</motion.figure>
	);
}

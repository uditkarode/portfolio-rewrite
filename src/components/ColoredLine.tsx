import { MotionProps, motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { LayoutIds } from "@/utils/constants";

export default function ColoredLine(props: MotionProps) {
	const theme = useTheme();

	return (
		<motion.figure layoutId={LayoutIds.Line}>
			<motion.div
				style={{ backgroundColor: theme.accent, height: 2, opacity: 0.4 }}
				{...props}
			/>
		</motion.figure>
	);
}

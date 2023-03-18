import { css } from "@linaria/core";
import { motion } from "framer-motion";
import { useTheme } from "@/stores/theme-store";
import { ReactComponent as Shapes } from "assets/shapes.svg";

export default function Home() {
	const theme = useTheme();

	const containerStyle = css`
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	return (
		<div className={containerStyle}>
			<div>
				{/* Colored Line */}
				<motion.div
					layoutId="line"
					initial={{ width: "0%" }}
					animate={{ width: "100%" }}
					// TODO
					transition={{ delay: false ? 0 : 0.5 }}
					style={{ backgroundColor: theme.accent, height: 2 }}
				/>

				<Shapes />
			</div>
		</div>
	);
}

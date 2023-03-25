import { css } from "@linaria/core";
import { motion } from "framer-motion";
import useTheme from "@/hooks/use-theme";
import { LayoutIds } from "@/utils/constants";
import Spacer from "./generic/Spacer";
import { ReactComponent as Shapes } from "assets/shapes.svg";

export default function Header() {
	const theme = useTheme();

	return (
		<div className={styles.container}>
			{/* Shapes */}
			<motion.div layoutId={LayoutIds.Shapes} layout="preserve-aspect">
				<Shapes className={styles.shapes} />
			</motion.div>

			<Spacer horizontal={14} />

			{/* Title 1 */}
			<motion.p
				layoutId={LayoutIds.Title1}
				className={styles.about}
				layout="preserve-aspect"
			>
				about
			</motion.p>

			<Spacer horizontal={8} />

			{/* Title 2 */}
			<motion.p
				layoutId={LayoutIds.Title2}
				className={styles.me}
				style={{ color: theme.accent }}
				layout="preserve-aspect"
			>
				me
			</motion.p>
		</div>
	);
}

const styles = {
	container: css`
		width: 100%;
		display: flex;
		align-items: center;
	`,
	shapes: css`
		width: 82px;
	`,
	about: css`
		font-size: 34px;
		font-family: Manrope;
	`,
	me: css`
		font-size: 34px;
		font-family: Manrope;
		font-weight: bold;
	`,
};

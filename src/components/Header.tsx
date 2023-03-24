import { css } from "@linaria/core";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { LayoutIds } from "@/utils/constants";
import Spacer from "./generic/Spacer";
import { ReactComponent as Shapes } from "assets/shapes.svg";

export default function Header() {
	const theme = useTheme();

	return (
		<div className={styles.container}>
			<motion.div
				layoutId={LayoutIds.Shapes}
				transition={{ type: "spring" }}
				layout="position"
			>
				<Shapes className={styles.shapes} />
			</motion.div>
			<Spacer horizontal={14} />
			<motion.p
				layoutId={LayoutIds.Title1}
				className={styles.about}
				layout="position"
				transition={{ type: "spring" }}
			>
				about
			</motion.p>
			<Spacer horizontal={8} />
			<motion.p
				layoutId={LayoutIds.Title2}
				className={styles.me}
				style={{ color: theme.accent }}
				layout="position"
				transition={{ type: "spring" }}
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

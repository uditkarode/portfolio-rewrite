import { css } from "@linaria/core";
import { motion } from "framer-motion";
import useTheme from "@/hooks/use-theme";
import { LayoutIds } from "@/utils/constants";
import ColoredLine from "./ColoredLine";
import Spacer from "./generic/Spacer";
import { ReactComponent as Shapes } from "assets/shapes.svg";

export default function Header(props: { text: [string, string] }) {
	const theme = useTheme();

	return (
		<div className={styles.container}>
			<div
				className={css`
					width: 100%;
					display: flex;
					align-items: center;
				`}
			>
				{/* Shapes */}
				<motion.div layoutId={LayoutIds.Shapes} layout="position">
					<Shapes className={styles.shapes} />
				</motion.div>

				<Spacer horizontal={14} />

				{/* Title 1 */}
				<motion.p
					layoutId={LayoutIds.Title1}
					className={styles.about}
					layout="position"
				>
					{props.text[0]}
				</motion.p>

				<Spacer horizontal={8} />

				{/* Title 2 */}
				<motion.p
					layoutId={LayoutIds.Title2}
					className={styles.me}
					style={{ color: theme.accent }}
					layout="position"
				>
					{props.text[1]}
				</motion.p>
			</div>

			<Spacer vertical={12} />
			<ColoredLine />
		</div>
	);
}

const styles = {
	container: css`
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	`,
	shapes: css`
		width: min(18vw, 82px);
		margin-top: 2px;
	`,
	about: css`
		font-size: min(8vw, 34px);
		font-family: Manrope;
	`,
	me: css`
		font-size: min(8vw, 34px);
		font-family: Manrope;
		font-weight: bold;
	`,
};

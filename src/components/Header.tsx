import { css, cx } from "@linaria/core";
import { motion } from "framer-motion";
import { useThemeStore } from "@/stores/theme-store";
import { LayoutIds } from "@/utils/constants";
import ColoredLine from "./ColoredLine";
import Spacer from "./generic/Spacer";
import { ReactComponent as Shapes } from "assets/shapes.svg";

export default function Header(props: { text: [string, string] }) {
	const { theme, toggleTheme, setRandomAccent } = useThemeStore();
	const titleLayoutIds =
		props.text[0].length > props.text[1].length
			? [LayoutIds.Title1, LayoutIds.Title2]
			: [LayoutIds.Title2, LayoutIds.Title1];

	return (
		<div className={styles.container}>
			<div className={cx("flex", "full-width", "align-items-center")}>
				{/* Shapes */}
				<motion.div layoutId={LayoutIds.Shapes} layout="position">
					<Shapes
						fill={theme.accent}
						className={styles.shapes}
						onClick={toggleTheme}
					/>
				</motion.div>

				<Spacer horizontal={14} />

				{/* Title 1 */}
				<motion.p
					layoutId={titleLayoutIds[0]}
					className={styles.about}
					style={{ color: theme.text }}
					layout="position"
				>
					{props.text[0]}
				</motion.p>

				<Spacer horizontal={8} />

				{/* Title 2 */}
				<motion.p
					layoutId={titleLayoutIds[1]}
					className={styles.me}
					style={{ color: theme.accent }}
					onClick={setRandomAccent}
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
		cursor: pointer;
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
		cursor: pointer;
	`,
};

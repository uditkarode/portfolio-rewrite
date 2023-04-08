import { css, cx } from "@linaria/core";
import { Transition, motion } from "framer-motion";
import { useContext } from "react";
import ColoredLine from "@/components/ColoredLine";
import NextButton from "@/components/NextButton";
import Spacer from "@/components/generic/Spacer";
import { animationContext } from "@/contexts/animation-context";
import { useThemeStore } from "@/stores/theme-store";
import { LayoutIds } from "@/utils/constants";
import { fade, objectIf } from "@/utils/utils";
import { ReactComponent as Shapes } from "assets/shapes.svg";

export default function Home() {
	const { theme, toggleTheme, setRandomAccent } = useThemeStore();
	const [disableAnimations, setDisableAnimations] =
		useContext(animationContext);

	const initialDelay = 0.7;

	const timings = {
		line: { duration: 0.3, delay: initialDelay, type: "spring" },
		shapes: { duration: 1, delay: initialDelay + 0.678, type: "spring" },
		text: { duration: 1, delay: initialDelay + 0.7, type: "spring" },
		button: { delay: initialDelay + 1.7, type: "spring" },
	} as const satisfies Record<string, Transition>;

	return (
		<div className={cx("fill", "flex", "flex-center-children")}>
			<div className="flex-col">
				{/* Colored Line */}
				<ColoredLine
					{...objectIf(!disableAnimations, {
						initial: { width: "0%" },
						animate: { width: "100%" },
					})}
					transition={timings["line"]}
				/>

				<Spacer vertical={26} />

				{/* Home Content */}
				<div style={{ marginLeft: 4, marginRight: 40 }}>
					{/* Shapes */}
					<motion.div
						layout="position"
						layoutId="shapes"
						style={{ cursor: "pointer" }}
						{...fade(timings["shapes"], disableAnimations)}
						onClick={toggleTheme}
					>
						<Shapes fill={theme.accent} className={styles.shapes} />
					</motion.div>

					<Spacer vertical={6} />

					{/* Helper Text */}
					<motion.p
						{...fade(timings["text"], disableAnimations)}
						style={{ color: theme.text }}
						className={styles.helperText}
						layoutId={LayoutIds.Title1}
						layout="position"
					>
						Hi! I&lsquo;m
						<br />
					</motion.p>

					<Spacer vertical={6} />

					{/* Name Text */}
					<motion.p
						{...fade(timings["text"], disableAnimations)}
						style={{ color: theme.accent }}
						className={styles.nameText}
						layoutId={LayoutIds.Title2}
						layout="position"
						onClick={setRandomAccent}
						onAnimationComplete={() => {
							setDisableAnimations(true);
						}}
					>
						Udit Karode
					</motion.p>

					<Spacer vertical={24} />

					{/* Next Button */}
					<NextButton
						buttonLink="/about"
						motion={fade(timings["button"], disableAnimations)}
					/>
				</div>
			</div>
		</div>
	);
}

const styles = {
	shapes: css`
		width: min(18vw, 84px);
		height: auto;
	`,
	helperText: css`
		color: #fbfbfb;
		font-size: min(10.4vw, 54px);
		line-height: 1.125;
		font-family: Manrope;
	`,
	nameText: css`
		font-size: min(11.2vw, 58px);
		font-weight: 600;
		margin-top: -4px;
		font-family: Manrope;
		cursor: pointer;
		user-select: none;
	`,
};

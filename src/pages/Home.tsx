import { css } from "@linaria/core";
import { Transition, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ColoredLine from "@/components/ColoredLine";
import Spacer from "@/components/generic/Spacer";
import { LayoutIds } from "@/utils/constants";
import { fade, objectIf } from "@/utils/utils";
import { ReactComponent as NextButton } from "assets/next-button.svg";
import { ReactComponent as Shapes } from "assets/shapes.svg";

export default function Home() {
	const disableAnimations = false;
	useEffect(() => {
		console.log("effect");
	}, []);

	const timings = {
		line: {
			duration: disableAnimations ? 0 : 0.3,
			delay: 0.32,
			type: "spring",
		},
		shapes: {
			duration: 1,
			delay: disableAnimations ? 0 : 1.2,
			type: "spring",
		},
		text: {
			duration: 1,
			delay: disableAnimations ? 0 : 1.22,
			type: "spring",
		},
		button: {
			delay: disableAnimations ? 0 : 2.06,
			type: "spring",
		},
	} as const satisfies Record<string, Transition>;

	return (
		<div className={styles.container}>
			<div
				className={css`
					display: flex;
					flex-direction: column;
				`}
			>
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
						{...fade(timings["shapes"], disableAnimations)}
					>
						<Shapes className={styles.shapes} />
					</motion.div>

					{/* Helper Text */}
					<motion.p
						{...fade(timings["text"], disableAnimations)}
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
						className={styles.nameText}
						layoutId={LayoutIds.Title2}
						layout="position"
					>
						Udit Karode
					</motion.p>

					<Spacer vertical={24} />

					{/* Next Button */}
					<motion.div
						layoutId={LayoutIds.Button}
						{...fade(timings["button"], disableAnimations)}
						onAnimationEnd={() => {
							// animationsPlayed.current = true;
						}}
					>
						<Link to="/about">
							<NextButton className={styles.nextButton} />
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

const styles = {
	container: css`
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	shapes: css`
		width: 84px;
		height: auto;
	`,
	helperText: css`
		color: #fbfbfb;
		font-size: 54px;
		line-height: 1.125;
		font-family: Manrope;
	`,
	nameText: css`
		color: #f38235;
		font-size: 58px;
		font-weight: 600;
		margin-top: -4px;
		font-family: Manrope;
	`,
	nextButton: css`
		width: 50px;
		height: auto;
		cursor: pointer;
	`,
};

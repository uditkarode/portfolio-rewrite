import { css } from "@linaria/core";
import { Transition, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Spacer from "@/components/generic/Spacer";
import useIsFirstRender from "@/hooks/use-is-first-render";
import { useTheme } from "@/hooks/use-theme";
import { fade } from "@/utils/utils";
import { ReactComponent as NextButton } from "assets/next-button.svg";
import { ReactComponent as Shapes } from "assets/shapes.svg";

export default function Home() {
	const theme = useTheme();
	const isFirstRender = useIsFirstRender();

	const timings = {
		line: {
			duration: isFirstRender ? 0.3 : 0,
			delay: 0.32,
			type: "spring",
		},
		shapes: {
			duration: 1,
			delay: isFirstRender ? 1.2 : 0,
			type: "spring",
		},
		text: {
			duration: 1,
			delay: isFirstRender ? 1.22 : 0,
			type: "spring",
		},
		button: {
			delay: isFirstRender ? 2.06 : 0,
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
				<motion.div
					layoutId="line"
					initial={{ width: "0%" }}
					animate={{ width: "100%" }}
					transition={timings["line"]}
					style={{ backgroundColor: theme.accent, height: 2, opacity: 0.4 }}
				/>

				<Spacer vertical={24} />

				{/* Home Content */}
				<div style={{ marginLeft: 4, marginRight: 40 }}>
					<motion.div {...fade(timings["shapes"])}>
						<Shapes className={styles.shapes} />
					</motion.div>

					{/* Helper Text */}
					<motion.p
						{...fade(timings["text"])}
						className={styles.helperText}
						layoutId="helperText"
					>
						Hi! I&lsquo;m
						<br />
					</motion.p>

					<Spacer vertical={6} />

					{/* Name Text */}
					<motion.p
						{...fade(timings["text"])}
						className={styles.nameText}
						layoutId="name"
					>
						Udit Karode
					</motion.p>

					<Spacer vertical={24} />

					{/* Next Button */}
					<motion.div {...fade(timings["button"])}>
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
		width: 78px;
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

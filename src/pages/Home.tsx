import { css } from "@linaria/core";
import { motion } from "framer-motion";
import Spacer from "@/components/generic/Spacer";
import { useTheme } from "@/stores/theme-store";
import { fade, id } from "@/utils/utils";
import { ReactComponent as NextButton } from "assets/next-button.svg";
import { ReactComponent as Shapes } from "assets/shapes.svg";

const containerStyle = css`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const shapesStyle = css`
	width: 78px;
	height: auto;
`;

const helperTextStyle = css`
	color: #fbfbfb;
	font-size: 48px;
	line-height: 1.125;
	font-family: Manrope;
`;

const nameTextStyle = css`
	color: #f38235;
	font-size: 50px;
	font-weight: 600;
	margin-top: -4px;
	font-family: Manrope;
`;

const nextButtonStyle = css`
	width: 50px;
	height: auto;
`;

export default function Home() {
	const theme = useTheme();
	const isFirstLoad = true;

	const timings = id({
		line: { duration: isFirstLoad ? 0.3 : 0, delay: 0.32, type: "spring" },
		shapes: { duration: 1, delay: isFirstLoad ? 1.2 : 0, type: "spring" },
		text: { duration: 1, delay: isFirstLoad ? 1.22 : 0, type: "spring" },
		button: { delay: isFirstLoad ? 2.12 : 0, type: "spring" },
	} as const);

	return (
		<div className={containerStyle}>
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

				{/* Home Content */}
				<div style={{ marginLeft: 4, marginRight: 40 }}>
					<Spacer vertical={28} />

					<motion.div {...fade(timings["shapes"])}>
						<Shapes className={shapesStyle} />
					</motion.div>

					{/* Helper Text */}
					<motion.p
						{...fade(timings["text"])}
						className={helperTextStyle}
						layoutId="helperText"
					>
						Hi! I&lsquo;m
						<br />
					</motion.p>

					<Spacer vertical={6} />

					{/* Name Text */}
					<motion.p
						{...fade(timings["text"])}
						className={nameTextStyle}
						layoutId="name"
					>
						Udit Karode
					</motion.p>

					<Spacer vertical={18} />

					{/* Next Button */}
					<motion.div {...fade(timings["button"])}>
						<NextButton className={nextButtonStyle} />
					</motion.div>
				</div>
			</div>
		</div>
	);
}

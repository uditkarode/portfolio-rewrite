import { css } from "@linaria/core";
import { motion } from "framer-motion";
import { PropsWithChildren, useCallback } from "react";
import { Link } from "react-router-dom";
import ColoredLine from "@/components/ColoredLine";
import Header from "@/components/Header";
import Spacer from "@/components/generic/Spacer";
import useTheme from "@/hooks/use-theme";
import { LayoutIds } from "@/utils/constants";
import { fade, yearsFromBirthday } from "@/utils/utils";
import { ReactComponent as NextButton } from "assets/next-button.svg";

export default function About() {
	const theme = useTheme();

	// ACCented Text, written shortly so it's easier to use
	const Act = useCallback(
		({ children }: PropsWithChildren<{}>) => {
			return (
				// TODO: lighten accent
				<span style={{ color: theme.accent, fontWeight: "500" }}>
					{" "}
					{children}
				</span>
			);
		},
		[theme],
	);

	return (
		<div className={styles.container}>
			<Header />
			<Spacer vertical={12} />
			<ColoredLine />

			<motion.p
				{...fade({ duration: 2, type: "spring" })}
				className={styles.text}
			>
				I'm a {yearsFromBirthday()} year old developer. I like making useful
				things!
				<br /> It all started when I was 16, and the first language I used was
				<Act>Java</Act>.
				<br />
				<br /> Over the years I‘ve picked up many new skills and worked with
				many different languages and frameworks.
				<br /> I love learning about new things, and my curiosity has led me to
				playing around with esoteric languages like <Act>Haskell</Act> and
				editors like Vim and Emacs.
				<br />
				<br /> Some things I currently do are:
				<br /> • <Act>Mobile App Development</Act> - mainly using{" "}
				<Act>React Native</Act>, and sometimes <Act>Native</Act> or{" "}
				<Act>Flutter</Act>
				<br /> • <Act>Web Development</Act> - back-end using{" "}
				<Act>TypeScript</Act>, <Act>Rust</Act>, <Act>Haskell</Act>, and
				front-end using <Act>React</Act>.<br />
				<br /> I‘m also a Linux enthusiast and have spent a considerable amount
				of time messing with kernels.
				<br />
				<br /> In my free time, I learn <Act>Japanese</Act> and play the
				keyboard and the guitar, although I‘m incredibly rusty at it now.
				<br />
				<br /> And oh, I like cats!
			</motion.p>

			<motion.div layoutId={LayoutIds.Button} layout="position">
				<Link to="/about">
					<NextButton className={styles.nextButton} />
				</Link>
			</motion.div>
		</div>
	);
}

const styles = {
	container: css`
		height: 84%;
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	`,
	text: css`
		flex-grow: 1;
		font-size: 22px;
		font-family: Inter;
		margin-top: 24px;
		line-height: 1.5;
		color: #e9e9e9;
	`,
	nextButton: css`
		width: 50px;
		height: auto;
		cursor: pointer;
	`,
};

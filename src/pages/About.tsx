import { css } from "@linaria/core";
import { PropsWithChildren, useCallback } from "react";
import Scaffold from "@/components/Scaffold";
import { useThemeStore } from "@/stores/theme-store";
import { lumenColor, yearsFromBirthday } from "@/utils/utils";

export default function About() {
	const { theme } = useThemeStore();

	// ACCented Text, written shortly so it's easier to use
	const Act = useCallback(
		({ children }: PropsWithChildren<{}>) => {
			return (
				<span
					style={{
						color: lumenColor(theme.accent, 25),
						fontWeight: "500",
					}}
				>
					{" "}
					{children}
				</span>
			);
		},
		[theme],
	);

	return (
		<Scaffold headerText={["about", "me"]} buttonLink="/projects">
			<p className={styles.text} style={{ color: theme.text }}>
				I'm a {yearsFromBirthday()} year old developer. I like making useful
				things!
				<br /> It all started when I was 16, and the first language I used was
				<Act>Java</Act>.
				<br />
				<br /> Over the years I've picked up many new skills and worked with
				many different languages and frameworks.
				<br /> I love learning about new things, and my curiosity has led me to
				playing around with esoteric languages like <Act>Haskell</Act> and
				editors like Vim and Emacs.
				<br />
				<br /> Some things I currently do are:
				<br /> • <Act>Web Development</Act> - back-end using{" "}
				<Act>TypeScript</Act> / <Act>Go</Act> / <Act>Rust</Act> / <Act>Haskell</Act>, and
				front-end using <Act>React</Act> / <Act>Vue</Act>.
				<br /> • <Act>Mobile App Development</Act> - mainly using{" "}
				<Act>React Native</Act>, and sometimes <Act>Native</Act> or{" "}
				<Act>Flutter</Act>.<br />
				<br /> I'm also a Linux enthusiast and have spent a considerable amount
				of time messing with kernels.
				<br />
				<br /> In my free time, I learn <Act>Japanese</Act> and play the
				keyboard and the guitar, although I'm incredibly rusty at it now.
				<br />
				<br /> And oh, I like cats!
			</p>
		</Scaffold>
	);
}

const styles = {
	text: css`
		font-size: min(5vw, 22px);
		font-family: Inter;
		line-height: 1.5;
		color: #e9e9e9;
	`,
};

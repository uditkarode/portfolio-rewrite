import { css } from "@linaria/core";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import Header from "@/components/Header";
import Spacer from "@/components/generic/Spacer";
import useTheme from "@/hooks/use-theme";
import { fade } from "@/utils/utils";
import NextButton from "./NextButton";

interface Props {
	headerText: [string, string];
	buttonLink: string;
	rotatedButton?: boolean;
	largeButton?: boolean;
}

export default function Scaffold(props: PropsWithChildren<Props>) {
	const theme = useTheme();

	return (
		<div className={styles.container}>
			<div className={styles.topSpacing} />
			<Header text={props.headerText} />

			<motion.div
				{...fade({ duration: 2, type: "spring" })}
				className={styles.contentHolder}
			>
				<Spacer vertical={24} />
				{props.children}

				<div
					className={styles.gradient}
					style={{
						background: `linear-gradient(transparent, ${theme.background})`,
					}}
				/>
			</motion.div>

			<Spacer vertical={20} />

			<NextButton
				buttonLink={props.buttonLink}
				style={{
					rotate: props.rotatedButton ? 180 : 0,
					width: props.largeButton ? 80 : 50,
				}}
			/>

			<Spacer vertical={8} />
		</div>
	);
}

const styles = {
	container: css`
		height: 99%;
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	`,
	topSpacing: css`
		min-height: min(10vw, 50px);
	`,
	contentHolder: css`
		display: flex;
		flex-direction: column;
		height: min-content;
		width: 100%;
		overflow: auto;
		position: relative;
		padding-right: 10px;
	`,
	nextButton: css`
		height: 100%;
		width: 100%;
		cursor: pointer;
	`,
	gradient: css`
		position: sticky;
		bottom: -1px;
		min-height: 40px;
		width: 100%;
	`,
};

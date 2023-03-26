import { css } from "@linaria/core";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Spacer from "@/components/generic/Spacer";
import { LayoutIds } from "@/utils/constants";
import { fade } from "@/utils/utils";
import { ReactComponent as NextButton } from "assets/next-button.svg";

interface Props {
	headerText: [string, string];
	buttonLink: string;

	rotatedButton?: boolean;
	largeButton?: boolean;
}

export default function Scaffold(props: PropsWithChildren<Props>) {
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

				<div className={styles.gradient} />
			</motion.div>

			<Spacer vertical={20} />

			<motion.figure
				style={{
					rotate: props.rotatedButton ? 180 : 0,
					width: props.largeButton ? 80 : 50,
				}}
				layoutId={LayoutIds.Button}
			>
				<Link to={props.buttonLink}>
					<NextButton className={styles.nextButton} />
				</Link>
			</motion.figure>

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
		height: min-content;
		width: 100%;
		overflow: auto;
		position: relative;
	`,
	nextButton: css`
		height: 100%;
		width: 100%;
		cursor: pointer;
	`,
	gradient: css`
		position: sticky;
		bottom: 0;
		height: 32px;
		width: 100%;
		background: linear-gradient(transparent, rgba(0, 0, 0, 1));
	`,
};
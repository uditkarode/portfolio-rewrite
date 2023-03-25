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
			<Header text={props.headerText} />

			<motion.div
				{...fade({ duration: 2, type: "spring" })}
				className={styles.contentHolder}
			>
				<Spacer vertical={24} />
				{props.children}

				<div className={styles.gradient} />
			</motion.div>

			<Spacer vertical={24} />

			<motion.figure
				style={{
					rotate: props.rotatedButton ? 180 : 0,
					width: props.largeButton ? 80 : 50,
				}}
				layoutId={LayoutIds.Button}
				layout="position"
			>
				<Link to={props.buttonLink}>
					<NextButton
						style={{ height: "100%", width: "100%" }}
						className={styles.nextButton}
					/>
				</Link>
			</motion.figure>
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
	contentHolder: css`
		width: 100%;
		overflow: auto;
		position: relative;
	`,
	nextButton: css`
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

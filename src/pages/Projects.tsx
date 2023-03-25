import { css } from "@linaria/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Spacer from "@/components/generic/Spacer";
import { LayoutIds } from "@/utils/constants";
import { fade } from "@/utils/utils";
import { ReactComponent as NextButton } from "assets/next-button.svg";

export default function Projects() {
	return (
		<div className={styles.container}>
			<Header text={["my", "projects"]} />

			<motion.div
				{...fade({ duration: 2, type: "spring" })}
				className={styles.contentHolder}
			>
				<Spacer vertical={24} />
				<div
					className={css`
						display: flex;
						width: 100%;
						overflow: auto;
					`}
				>
					<Project
						name="previewer"
						description="a blazing fast preview image generator for Batbin"
						language="Rust"
						languageColor="rgb(222, 165, 132)"
						link="Rust"
					/>
				</div>
			</motion.div>

			<Spacer vertical={12} />

			<motion.div layoutId={LayoutIds.Button} layout="position">
				<Link to="/projects">
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
	contentHolder: css`
		flex-grow: 1;
		width: 100%;
		overflow: auto;
		position: relative;
	`,
	nextButton: css`
		width: 50px;
		height: auto;
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

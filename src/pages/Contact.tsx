import { css } from "@linaria/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Spacer from "@/components/generic/Spacer";
import { LayoutIds, contact } from "@/utils/constants";
import { fade } from "@/utils/utils";
import { ReactComponent as NextButton } from "assets/next-button.svg";

export default function Contact() {
	return (
		<div className={styles.container}>
			<Header text={["contact", "me"]} />

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
					<p className={styles.text}>
						The fastest way to reach me is through{" "}
						<Link className={styles.link} to={contact.telegram}>
							Telegram
						</Link>
						.
						<br />
						<br />
						An{" "}
						<Link className={styles.link} to={`mailto:${contact.email}`}>
							email
						</Link>{" "}
						works as well.
					</p>
				</div>
			</motion.div>

			<Spacer vertical={24} />

			<motion.figure
				style={{ rotate: 180 }}
				layoutId={LayoutIds.Button}
				layout="position"
			>
				<Link to="/">
					<NextButton className={styles.nextButton} />
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
		width: 50px;
		height: auto;
		cursor: pointer;
	`,
	text: css`
		font-size: 22px;
		line-height: 1.5;
	`,
	gradient: css`
		position: sticky;
		bottom: 0;
		height: 32px;
		width: 100%;
		background: linear-gradient(transparent, rgba(0, 0, 0, 1));
	`,
	link: css`
		color: rgb(234, 154, 100);
		text-decoration: underline;
		font-weight: 500;
	`,
};

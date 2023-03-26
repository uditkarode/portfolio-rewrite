import { css } from "@linaria/core";
import { Link } from "react-router-dom";
import Scaffold from "@/components/Scaffold";
import { contact } from "@/utils/constants";

export default function Contact() {
	return (
		<Scaffold
			headerText={["contact", "me"]}
			buttonLink="/"
			rotatedButton
			largeButton
		>
			<p className={styles.text}>
				The fastest way to reach me is through{" "}
				<Link target="_blank" className={styles.link} to={contact.telegram}>
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
				<br /> <br />
				Thanks for stopping by!
			</p>
		</Scaffold>
	);
}

const styles = {
	text: css`
		font-size: min(5vw, 22px);
		text-align: center;
		line-height: 1.5;
		font-family: Inter;
		font-weight: 500;
		letter-spacing: -0.6px;
		color: #e9e9e9;
	`,
	link: css`
		color: rgb(234, 154, 100);
		text-decoration: underline;
		font-weight: 500;
	`,
};

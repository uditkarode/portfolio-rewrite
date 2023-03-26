import { css } from "@linaria/core";
import { Link } from "react-router-dom";
import Scaffold from "@/components/Scaffold";
import { contact } from "@/utils/constants";

export default function Contact() {
	return (
		<Scaffold headerText={["contact", "me"]} buttonLink="/" rotatedButton>
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
		</Scaffold>
	);
}

const styles = {
	text: css`
		font-size: 22px;
		line-height: 1.5;
		font-family: Inter;
	`,
	link: css`
		color: rgb(234, 154, 100);
		text-decoration: underline;
		font-weight: 500;
	`,
};

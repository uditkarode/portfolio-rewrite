import { CSSProperties, css } from "@linaria/core";
import { Link } from "react-router-dom";
import Scaffold from "@/components/Scaffold";
import useTheme from "@/hooks/use-theme";
import { contact, portfolioSource } from "@/utils/constants";
import { lumenColor } from "@/utils/utils";

export default function Contact() {
	const theme = useTheme();
	const linkStyle = {
		color: lumenColor(theme.accent, 32),
		opacity: 0.8,
	} satisfies CSSProperties;

	return (
		<Scaffold
			headerText={["contact", "me"]}
			buttonLink="/"
			rotatedButton
			largeButton
		>
			<p style={{ color: theme.text }} className={styles.text}>
				The fastest way to reach me is through{" "}
				<Link
					target="_blank"
					className={styles.link}
					to={contact.telegram}
					style={linkStyle}
				>
					Telegram
				</Link>
				.
				<br />
				An{" "}
				<Link
					className={styles.link}
					to={`mailto:${contact.email}`}
					style={linkStyle}
				>
					email
				</Link>{" "}
				works as well.
				<br />
				<br />
				In case you missed it, try clicking on the shapes or my name
				<br />
				on the home page!
				<br /> <br />
				Source for this portfolio is{" "}
				<Link className={styles.link} style={linkStyle} to={portfolioSource}>
					here
				</Link>
				. <br />
				Thanks for stopping by!
			</p>
		</Scaffold>
	);
}

const styles = {
	text: css`
		font-size: min(5vw, 22px);
		text-align: center;
		line-height: 1.8;
		font-family: Inter;
		font-weight: 500;
		letter-spacing: -0.6px;
		opacity: 0.8;
	`,
	link: css`
		text-decoration: underline;
		font-weight: 500;
	`,
};

import { CSSProperties, css } from "@linaria/core";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import Scaffold from "@/components/Scaffold";
import { useThemeStore } from "@/stores/theme-store";
import { contact, portfolioSource } from "@/utils/constants";
import { lumenColor } from "@/utils/utils";

export default function Contact() {
	const { theme } = useThemeStore();
	const linkStyle = {
		color: lumenColor(theme.accent, 32),
		opacity: 0.8,
	} satisfies CSSProperties;

	const ContactPageLink = useCallback(
		(props: { text: string; to: string }) => {
			return (
				<Link
					target="_blank"
					className={styles.link}
					style={linkStyle}
					to={props.to}
				>
					{props.text}
				</Link>
			);
		},
		[linkStyle],
	);

	return (
		<Scaffold
			headerText={["contact", "me"]}
			buttonLink="/"
			rotatedButton
			largeButton
		>
			<p style={{ color: theme.text }} className={styles.text}>
				The fastest way to reach me is through{" "}
				<ContactPageLink to={contact.telegram} text="Telegram" />
				.
				<br />
				An <ContactPageLink to={`mailto:${contact.email}`} text="email" /> works
				as well.
				<br />
				<br />
				In case you missed it, try clicking on the shapes or the accented text
				on the header!
				<br /> <br />
				Source for this portfolio is{" "}
				<ContactPageLink to={portfolioSource} text="here" />
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

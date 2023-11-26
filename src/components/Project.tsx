import { css, cx } from "@linaria/core";
import { Link } from "react-router-dom";
import { useThemeStore } from "@/stores/theme-store";
import Spacer from "./generic/Spacer";
import BookIcon from "assets/book.svg?react";
import { useState } from "react";
import { Variant, Variants } from "framer-motion";
import { motion } from "framer-motion";
import { darkTheme, lightTheme } from "@/utils/constants";
import { lumenColor } from "@/utils/utils";

export default function Project(props: {
	name: string;
	description: string;
	language: string;
	languageColor: string;
	link: string;
}) {
	const { theme } = useThemeStore();
	const [hovered, setHovered] = useState(false);

	const divVariants: Variants = {
		hovered: {
			background: lumenColor(theme.background, 20),
			border: "8px solid #3c3e3d",
		},
		notHovered: {
			background: theme.background,
			border: "2px solid #303030",
		},
	};

	const textVariants: Variants = {
		hovered: {
			color: theme.text,
		},
		notHovered: {
			color: theme.text,
		},
	};

	const variant = hovered ? "hovered" : "notHovered";

	return (
		<Link
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			to={props.link}
			target="_blank"
		>
			<motion.div
				transition={{ duration: 0.2, type: "tween" }}
				className={styles.container}
				variants={divVariants}
				animate={variant}
			>
				<div className={styles.content}>
					{/* Repository name */}
					<div className={cx("flex", "align-items-center")}>
						<BookIcon color1={theme.text} className={styles.bookIcon} />
						<Spacer horizontal={15} />
						<motion.p
							style={{ color: theme.text }}
							className={styles.repoName}
							variants={textVariants}
							animate={variant}
						>
							{props.name}
						</motion.p>
					</div>

					<Spacer vertical={12} />

					{/* Repository description */}
					<motion.p
						style={{ color: theme.text }}
						className={styles.description}
						variants={textVariants}
						animate={variant}
					>
						{props.description}
					</motion.p>

					<Spacer grow />

					{/* Language name */}
					<div className={cx("flex", "align-items-center")}>
						<div
							className={styles.circle}
							style={{ backgroundColor: props.languageColor }}
						/>
						<Spacer horizontal={10} />
						<motion.p
							style={{ color: theme.text }}
							className={styles.languageName}
							variants={textVariants}
							animate={variant}
						>
							{props.language}
						</motion.p>
					</div>
				</div>
			</motion.div>
		</Link>
	);
}

const styles = {
	container: css`
		display: flex;
		align-items: center;
		justify-content: center;
		height: 154px;
		max-height: 154px;
		width: 300px;
		max-width: 300px;
		border-radius: 10px;
	`,
	content: css`
		display: flex;
		flex-direction: column;
		height: 74%;
		width: 86%;
		margin-top: 2px;
	`,
	bookIcon: css`
		width: 14px;
		height: 18px;
	`,
	repoName: css`
		font-family: Inter;
		font-weight: 500;
		font-size: 19px;
		color: rgb(233, 233, 233);
	`,
	description: css`
		font-family: Inter;
		font-size: 15px;
		color: rgb(233, 233, 233);
		line-height: 1.5;
		opacity: 0.85;
	`,
	circle: css`
		height: 13px;
		width: 13px;
		border-radius: 6.5px;
	`,
	languageName: css`
		font-family: Inter;
		font-weight: 500;
		font-size: 16px;
		color: #e9e9e9;
		opacity: 0.85;
	`,
};

import { css } from "@linaria/core";
import { Link } from "react-router-dom";
import Spacer from "./generic/Spacer";
import { ReactComponent as BookIcon } from "assets/book.svg";

export default function Project(props: {
	name: string;
	description: string;
	language: string;
	languageColor: string;
	link: string;
}) {
	return (
		<Link to={props.link}>
			<div className={styles.container}>
				<div className={styles.content}>
					{/* Project name */}
					<div className="flex align-items-center">
						<BookIcon className={styles.bookIcon} />
						<Spacer horizontal={15} />
						<p className={styles.repoName}>{props.name}</p>
					</div>

					<Spacer vertical={12} />

					<p className={styles.description}>{props.description}</p>

					<Spacer grow />

					{/* Language name */}
					<div className="flex align-items-center">
						<div
							className={styles.circle}
							style={{ backgroundColor: props.languageColor }}
						/>
						<Spacer horizontal={10} />
						<p className={styles.languageName}>{props.language}</p>
					</div>
				</div>
			</div>
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
		border: 2px solid #303030;
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

import { css } from "@linaria/core";
import Project from "@/components/Project";
import Scaffold from "@/components/Scaffold";

export default function Projects() {
	return (
		<Scaffold headerText={["my", "projects"]} buttonLink="/contact">
			<div className={styles.projectHolder}>
				{Array(12)
					.fill(null)
					.map((_, i) => (
						<Project
							key={i}
							name="previewer"
							description="a blazing fast preview image generator for Batbin"
							language="Rust"
							languageColor="rgb(222, 165, 132)"
							link="https://github.com/batbin-org/previewer"
						/>
					))}
			</div>
		</Scaffold>
	);
}

const styles = {
	projectHolder: css`
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
	`,
};

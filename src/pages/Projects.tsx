import Project from "@/components/Project";
import Scaffold from "@/components/Scaffold";

export default function Projects() {
	return (
		<Scaffold headerText={["my", "projects"]} buttonLink="/contact">
			<div className="flex">
				<Project
					name="previewer"
					description="a blazing fast preview image generator for Batbin"
					language="Rust"
					languageColor="rgb(222, 165, 132)"
					link="https://github.com/batbin-org/previewer"
				/>
			</div>
		</Scaffold>
	);
}

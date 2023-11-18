import { css } from "@linaria/core";
import Project from "@/components/Project";
import Scaffold from "@/components/Scaffold";

export default function Projects() {
	return (
		<Scaffold headerText={["my", "projects"]} buttonLink="/contact">
			<div className={styles.projectHolder}>
				<Project
					name="axolotl"
					description="a lisp-like statically typed programming language"
					link="https://github.com/axolotl-lang/axolotl"
					language="Haskell"
					languageColor="#5e5086"
				/>

				<Project
					name="previewer"
					description="a blazing fast preview image generator for Batbin"
					language="Rust"
					languageColor="rgb(222, 165, 132)"
					link="https://github.com/batbin-org/previewer"
				/>

				<Project
					name="wikari"
					link="https://github.com/uditkarode/wikari"
					description="a library to interact with Philips WiZ smart bulbs"
					language="TypeScript"
					languageColor="#2b7489"
				/>

				<Project
					name="diamond"
					link="https://github.com/uditkarode/diamond"
					description="a lightweight (but less sandboxed) alternative to containers"
					language="Haskell"
					languageColor="#5e5086"
				/>

				<Project
					name="minegram"
					link="https://github.com/uditkarode/minegram"
					description="connect your minecraft and telegram chats"
					language="Go"
					languageColor="#00add8"
				/>

				<Project
					name="ucc"
					link="https://github.com/uditkarode/ucc"
					description="intuitive bash-based wrapper for the borland tcc compiler"
					language="Shell"
					languageColor="#89e051"
				/>

				<Project
					name="zumen"
					link="https://github.com/zumen-org/zumen"
					description="declarative layout declaration for i3 with its own config language"
					language="TypeScript"
					languageColor="#2b7489"
				/>

				<Project
					name="able"
					link="https://github.com/uditkarode/AbleMusicPlayer"
					description="a music player for local music or streaming from YouTube"
					language="Kotlin"
					languageColor="#a97bff"
				/>

				<Project
					name="kumi"
					link="https://github.com/uditkarode/kumi"
					description="parser combinator library that tries to mimic Haskell's Parsec"
					language="TypeScript"
					languageColor="#2b7489"
				/>

				<Project
					name="cafmerge"
					description="a tool to help merge tags from CAF into AOSP source"
					language="Rust"
					languageColor="rgb(222, 165, 132)"
					link="https://github.com/uditkarode/cafmerge"
				/>

				<Project
					name="montype"
					link="https://github.com/uditkarode/montype"
					description="mongoose schema to typescript interface convertor"
					language="Haskell"
					languageColor="#5e5086"
				/>

				<Project
					name="unocab"
					link="https://github.com/uditkarode/unocab"
					description="a library to help implement the uno game effortlessly"
					language="TypeScript"
					languageColor="#2b7489"
				/>
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

import { css } from "@linaria/core";
import ColoredLine from "@/components/ColoredLine";
import Header from "@/components/Header";
import Spacer from "@/components/generic/Spacer";

export default function About() {
	return (
		<div className={styles.container}>
			<Header />
			<Spacer vertical={12} />
			<ColoredLine />
		</div>
	);
}

const styles = {
	container: css`
		height: 84%;
		width: 90%;
		display: flex;
		flex-direction: column;
	`,
};

import { css } from "@linaria/core";
import { PropsWithChildren, useCallback } from "react";
import ColoredLine from "@/components/ColoredLine";
import Header from "@/components/Header";
import Spacer from "@/components/generic/Spacer";
import useTheme from "@/hooks/use-theme";
import { yearsFromBirthday } from "@/utils/utils";

export default function About() {
	const theme = useTheme();

	// ACCented Text, written shortly so it's easier to use
	const Act = useCallback(
		({ children }: PropsWithChildren<{}>) => {
			return (
				<span style={{ color: theme.accent, fontWeight: "500" }}>
					{children}
				</span>
			);
		},
		[theme],
	);

	return (
		<div className={styles.container}>
			<Header />
			<Spacer vertical={12} />
			<ColoredLine />

			<p className={styles.text}>
				I'm a {yearsFromBirthday()} year old developer.
			</p>
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
	text: css`
		flex-grow: 1;
		font-size: 22px;
		font-family: Inter;
		margin-top: 45px;
	`,
};

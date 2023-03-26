import { css } from "@linaria/core";
import { MotionProps, MotionStyle, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import useTheme from "@/hooks/use-theme";
import { LayoutIds } from "@/utils/constants";
import { lumenColor } from "@/utils/utils";
import { ReactComponent as NextButtonAsset } from "assets/next-button.svg";

export default function NextButton(props: {
	motion?: MotionProps;
	style?: MotionStyle;
	buttonLink: string;
}) {
	const theme = useTheme();

	return (
		<m.div
			layoutId={LayoutIds.Button}
			className={styles.buttonHolder}
			style={props.style}
			{...(props.motion ?? {})}
		>
			<Link to={props.buttonLink}>
				<NextButtonAsset
					color1={theme.accent}
					color2={lumenColor(theme.accent, 60)}
					className={styles.nextButton}
				/>
			</Link>
		</m.div>
	);
}

const styles = {
	nextButton: css`
		height: 100%;
		width: 100%;
		cursor: pointer;
	`,
	buttonHolder: css`
		width: min(11.2vw, 50px);
		rotate: 0deg;
	`,
};

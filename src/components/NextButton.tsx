import { css } from "@linaria/core";
import { MotionProps, MotionStyle, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { LayoutIds } from "@/utils/constants";
import { ReactComponent as NextButtonAsset } from "assets/next-button.svg";

export default function NextButton(props: {
	motion?: MotionProps;
	style?: MotionStyle;
	buttonLink: string;
}) {
	return (
		<m.div
			layoutId={LayoutIds.Button}
			className={styles.buttonHolder}
			style={props.style}
			{...(props.motion ?? {})}
		>
			<Link to={props.buttonLink}>
				<NextButtonAsset className={styles.nextButton} />
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

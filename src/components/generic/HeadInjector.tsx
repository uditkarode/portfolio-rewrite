import { css } from "@linaria/core";
import { Outlet } from "react-router-dom";

const gitHead = import.meta.env.VITE_GIT_HEAD ?? "development";

const gitHeadStyle = css`
	font-family: "Roboto Mono", monospace;
	color: rgba(254, 254, 254, 0.3);
	font-weight: 500;
	position: fixed;
	left: 6px;
	bottom: 6px;
	font-size: 16px;
	opacity: 0.8;
	z-index: 2;
`;

export default function HeadInjector() {
	return (
		<>
			{gitHead && <p className={gitHeadStyle}>{gitHead}</p>}
			<Outlet />
		</>
	);
}

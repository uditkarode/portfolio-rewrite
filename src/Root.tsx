import "./styles/fonts.css";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/utils.css";
import { css, cx } from "@linaria/core";
import React, { CSSProperties, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import { AnimationContextProvider } from "./contexts/animation-context";
import useTheme from "./hooks/use-theme";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route element={<Root />}>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>,
);

const globalStyle = css`
	:global() {
		div::-webkit-scrollbar-thumb {
			border-radius: 8px;
			background-color: var(--accent-color);
		}

		div {
			scrollbar-color: var(--accent-color) #000000;
		}
	}
`;

function Root() {
	const theme = useTheme();
	const location = useLocation();

	// disable starting animation by default only if the
	// initially opened page is not the root page
	const animationState = useState(location.pathname != "/");

	return (
		<AnimationContextProvider value={animationState}>
			<div
				className={cx("fill", "flex-col", "align-items-center", globalStyle)}
				style={
					{
						"backgroundColor": theme.background,
						"--accent-color": theme.accent,
					} as CSSProperties
				}
			>
				<Outlet />
			</div>
		</AnimationContextProvider>
	);
}

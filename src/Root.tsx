import "./styles/fonts.css";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/utils.css";
import { css, cx } from "@linaria/core";
import { motion } from "framer-motion";
import React, { CSSProperties, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import {
	AnimationContextProvider,
	animationContext,
} from "./contexts/animation-context";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { useThemeStore } from "./stores/theme-store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route element={<Wrapper />}>
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

function Wrapper() {
	const location = useLocation();

	// disable starting animation by default only if the
	// initially opened page is not the root page
	const animationState = useState(location.pathname != "/");

	return (
		<AnimationContextProvider value={animationState}>
			<Root />
		</AnimationContextProvider>
	);
}

function Root() {
	const { theme } = useThemeStore();
	const [disableAnimations] = useContext(animationContext);

	return (
		<motion.div
			className={cx("fill", "flex-col", "align-items-center", globalStyle)}
			style={{ "--accent-color": theme.accent } as CSSProperties}
			animate={{
				backgroundColor: theme.background,
			}}
			transition={{ duration: disableAnimations ? 0.4 : 0 }}
		>
			<Outlet />
		</motion.div>
	);
}

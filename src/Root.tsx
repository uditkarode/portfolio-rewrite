import "./styles/fonts.css";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/utils.css";
import { css } from "@linaria/core";
import React, { Suspense, useState } from "react";
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

function Root() {
	const theme = useTheme();
	const location = useLocation();
	const animationState = useState(location.pathname == "/about");

	return (
		<AnimationContextProvider value={animationState}>
			<div
				className="fill flex-col flex-center-children"
				style={{
					backgroundColor: theme.background,
				}}
			>
				<Outlet />
			</div>
		</AnimationContextProvider>
	);
}

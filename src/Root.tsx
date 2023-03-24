import "./styles/fonts.css";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/utils.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>,
);

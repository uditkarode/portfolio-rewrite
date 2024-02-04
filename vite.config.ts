import wyw from '@wyw-in-js/vite';
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		react(),
		svgr({
			svgrOptions: {
				replaceAttrValues: {
					color1: "{props.color1}",
					color2: "{props.color2}",
				},
			},
		}),
		wyw({
			include: ["**/*.{ts,tsx}"],
			babelOptions: {
				presets: ["@babel/preset-typescript", "@babel/preset-react"],
			},
		}),
	],
});

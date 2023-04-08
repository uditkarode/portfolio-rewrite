import { create } from "zustand";
import { persist } from "zustand/middleware";
import { darkTheme, defaultTheme, lightTheme } from "@/utils/constants";
import { randomColor } from "@/utils/utils";

// context needlessly updates all it's children
// zustand store will update only the components
// that actually use colors from the theme
export const useThemeStore = create(
	persist<ThemeStore>(
		(set, get) => ({
			theme: defaultTheme,
			setTheme: (newt: Partial<Theme>) =>
				set({ theme: { ...get().theme, ...newt } }),
			toggleTheme: () =>
				set({
					theme: {
						...get().theme,
						...(get().theme.type == "dark" ? lightTheme : darkTheme),
					},
				}),
			setRandomAccent: () =>
				set({
					theme: { ...get().theme, accent: randomColor() },
				}),
		}),
		{ name: "theme" },
	),
);

type Color = `#${string}`;

export interface Theme {
	type: "dark" | "light";
	background: Color;
	accent: Color;
	text: Color;
}

interface ThemeStore {
	theme: Theme;
	setTheme: (theme: Partial<Theme>) => void;
	toggleTheme: () => void;
	setRandomAccent: () => void;
}

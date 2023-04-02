import { create } from "zustand";
import { persist } from "zustand/middleware";
import { darkTheme } from "@/utils/constants";

// context needlessly updates all it's children
// zustand store will update only the components
// that actually use colors from the theme
export const useThemeStore = create(
	persist<ThemeStore>(
		(set, get) => ({
			theme: darkTheme,
			setTheme: (newt: Partial<Theme>) =>
				set({ theme: { ...get().theme, ...newt } }),
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
}

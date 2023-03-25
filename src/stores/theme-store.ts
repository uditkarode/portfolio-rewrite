import { create } from "zustand";

const defaultTheme: Theme = {
	accent: "#f38235",
	background: "#000000",
};

// context needlessly updates all it's children
// zustand store will update only the components
// that actually use the value of this store
export const useThemeStore = create<ThemeStore>(set => ({
	theme: defaultTheme,
	setTheme: (newt: Theme) => set(oldt => ({ ...oldt, ...newt })),
}));

type Color = `#${string}`;

interface Theme {
	background: Color;
	accent: Color;
}

interface ThemeStore {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

import { create } from "zustand";

type Color = `#${string}`;

interface Theme {
	accent: Color;
}

interface ThemeStore {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>(set => ({
	theme: { accent: "#f38235" },
	setTheme: (newt: Theme) => set(oldt => ({ ...oldt, ...newt })),
}));

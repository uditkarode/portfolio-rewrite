import { useThemeStore } from "@/stores/theme-store";

export const useTheme = () => {
	// a bit of a handful to write everywhere
	const { theme } = useThemeStore();
	return theme;
};

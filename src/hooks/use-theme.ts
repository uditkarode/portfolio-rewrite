import { useThemeStore } from "@/stores/theme-store";

export default function useTheme() {
	// a bit of a handful to write everywhere
	const { theme } = useThemeStore();
	return theme;
}

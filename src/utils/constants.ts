import { Theme } from "@/stores/theme-store";

export const birthday = new Date("February 17, 2001");

export const portfolioSource =
	"https://github.com/uditkarode/portfolio-rewrite";

export const contact = {
	telegram: "https://t.me/uditkarode",
	email: "me@uditkaro.de",
};

export const enum LayoutIds {
	Title1 = "title1",
	Title2 = "title2",
	Shapes = "shapes",
	Line = "line",
	Button = "button",
}

export const darkTheme = {
	type: "dark",
	background: "#000000",
	text: "#fbfbfb",
} as const;

export const lightTheme = {
	type: "light",
	background: "#fbfbfb",
	text: "#121212",
} as const;

export const defaultTheme: Theme = { ...darkTheme, accent: "#6b86f9" };

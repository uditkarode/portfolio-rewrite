import { Theme } from "@/stores/theme-store";

export const birthday = new Date("February 17, 2001");

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

export const darkTheme: Theme = {
	type: "dark",
	accent: "#f38235",
	background: "#000000",
	text: "#fbfbfb",
};

export const lightTheme: Theme = {
	type: "light",
	accent: "#f38235",
	background: "#fbfbfb",
	text: "#121212",
};

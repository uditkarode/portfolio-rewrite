import { createContext } from "react";

// to make sure the animation on the home page plays only on first load.
// context helps prevent state even if the Home component gets unmounted,
// so that using the browser's back/forward navigation retains the state.
export const animationContext = createContext<[boolean, (b: boolean) => void]>(
	// provider at root, default value not required
	undefined as any,
);

export const AnimationContextProvider = animationContext.Provider;

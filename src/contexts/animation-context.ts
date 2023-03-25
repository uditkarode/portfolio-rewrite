import { createContext } from "react";

export const animationContext = createContext<[boolean, (b: boolean) => void]>(
	// provider at root, default value not required
	undefined as any,
);

export const AnimationContextProvider = animationContext.Provider;

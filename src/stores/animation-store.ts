import { create } from "zustand";

interface AnimationStore {
	rootAnimationPlayed: boolean;
	setRootAnimationPlayed: () => void;
}

export const useAnimationStore = create<AnimationStore>(set => ({
	rootAnimationPlayed: false,
	setRootAnimationPlayed: () => set({ rootAnimationPlayed: true }),
}));

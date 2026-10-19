import { type StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISliceType = {
  recipe: string;
  isGenerating: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISliceType> = (set) => ({
  recipe: "",
  isGenerating: false,
  generateRecipe: async (prompt) => {
    // console.log("Prompt desde el slice: ", prompt);

    // Limpiar consulta anterior y establecer isGenerating en true
    set({ recipe: "", isGenerating: true });

    const data = await AIService.generateRecipe(prompt);

    for await (const textPart of data) {
      set((state) => ({
        recipe: state.recipe + textPart,
      }));
    }

    // Una vez que se complete la generación, establecer isGenerating en false
    set({ isGenerating: false });
  },
});

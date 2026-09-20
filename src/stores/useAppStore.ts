import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { type RecipesSliceType, createRecipesSlice } from "./recipeSlice";

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
})));

import { type StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import type { Categories, SearchFilter, Drinks } from "../types";

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    // console.log("categories", categories);
    set({
      categories,
    });
  },
  searchRecipes: async (filters) => {
    // console.log("filters", filters);
    const drinks = await getRecipes(filters);
    // console.log("drinks", drinks);
    set({
      drinks,
    });
  },
});

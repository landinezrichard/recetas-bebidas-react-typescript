import { type StateCreator } from "zustand";
import {
  getCategories,
  getRecipes,
  getRecipeById,
} from "../services/RecipeService";
import type { Categories, SearchFilter, Drinks, Drink, Recipe } from "../types";

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as Recipe,
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
  selectRecipe: async (id: Drink["idDrink"]) => {
    // console.log("Desde recipeSlice selectRecipe", id);
    const selectedRecipe = await getRecipeById(id);
    // console.log("selectedRecipe", selectedRecipe);
    set({
      selectedRecipe,
    });
  },
});

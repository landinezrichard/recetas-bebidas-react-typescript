import clienteAxios from "../config/axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema,
  RecipeAPIResponseSchema
} from "../utils/recipes-schema";
import type { SearchFilter, Drink } from "../types";

export async function getCategories() {
  const url = "/list.php?c=list";
  const { data } = await clienteAxios(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);
  // console.log("result", result);
  if (result.success) {
    // console.log("result.data", result.data);
    return result.data;
  }
}

export async function getRecipes(filters: SearchFilter) {
  const url = `/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data } = await clienteAxios(url);
  // console.log("data", data);
  const result = DrinksAPIResponseSchema.safeParse(data);
  if (result.success) {
    console.log("result.data", result.data);
    return result.data;
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const url = `/lookup.php?i=${id}`;
  const { data } = await clienteAxios(url);
  // console.log("data", data);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (result.success) {
    // console.log("result.data", result.data);
    return result.data;
  }
}

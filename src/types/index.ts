import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  SearchFilterSchema,
  DrinksAPIResponseSchema,
} from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;

export type SearchFilter = z.infer<typeof SearchFilterSchema>;

export type Drinks = z.infer<typeof DrinksAPIResponseSchema>;

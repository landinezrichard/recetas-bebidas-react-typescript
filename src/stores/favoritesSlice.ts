import { type StateCreator } from "zustand";
import type { Recipe } from "../types";
import { type NotificationSliceType } from "./notificationSlice";
import { createNotificationSlice } from "./notificationSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe["idDrink"]) => boolean;
  loadFavoritesFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & NotificationSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    // console.log("Recipe clicked:", recipe);
    if (get().favoriteExists(recipe.idDrink)) {
      // La receta ya existe en favoritos, eliminarlo
      // console.log("Recipe already in favorites:", recipe);
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink,
        ),
      }));
      // Mostrar notificación de eliminación
      createNotificationSlice(set, get, api).showNotification({
        text: "Receta eliminada de favoritos",
        error: false,
      });
    } else {
      // No existe en favoritos, agregarlo
      // console.log("Adding recipe to favorites:", recipe);
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
      // Mostrar notificación de agregado
      createNotificationSlice(set, get, api).showNotification({
        text: "Receta agregada a favoritos",
        error: false,
      });
    }
    // Actualizar y Settear los favoritos en localStorage
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
  loadFavoritesFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      set({ favorites: JSON.parse(storedFavorites) });
    }
  },
});

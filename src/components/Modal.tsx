import type { JSX } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useAppStore } from "../stores/useAppStore";
import type { Recipe } from "../types";

export default function MyModal() {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);

  const selectedRecipe = useAppStore((state) => state.selectedRecipe);

  const renderingIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe];
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe];
      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-lg font-normal">
            {ingredient} - {measure}
          </li>,
        );
      }
    }
    return ingredients;
  };

  return (
    <>
      <Dialog
        open={modal}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/75 duration-300 ease-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-xl bg-white px-4 pt-5 pb-4 text-left shadow-xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-gray-900 text-4xl font-extrabold my-5 text-center"
            >
              {selectedRecipe.strDrink}
            </DialogTitle>

            <img
              src={selectedRecipe.strDrinkThumb}
              alt={`Imagen de ${selectedRecipe.strDrink}`}
              className="mx-auto w-96"
            />

            <DialogTitle
              as="h3"
              className="text-gray-900 text-2xl font-extrabold my-5"
            >
              Ingredientes y Cantidades
            </DialogTitle>

            <ul className="list-disc list-inside">{renderingIngredients()}</ul>

            <DialogTitle
              as="h3"
              className="text-gray-900 text-2xl font-extrabold my-5"
            >
              Instrucciones
            </DialogTitle>

            <p className="text-lg">{selectedRecipe.strInstructions}</p>

            <div className="mt-5 flex justify-between gap-4">
              <button
                type="button"
                className="w-full rounded bg-gray-600 cursor-pointer p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                onClick={closeModal}
              >
                Cerrar
              </button>

              <button
                type="button"
                className="w-full rounded bg-orange-600 cursor-pointer p-3 font-bold uppercase text-white shadow hover:bg-orange-500"
                
              >
                Agregar a Favoritos
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

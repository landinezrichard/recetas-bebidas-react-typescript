import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useAppStore } from "../stores/useAppStore";

export default function MyModal() {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);

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
            className="w-full max-w-md rounded-xl bg-white px-4 pt-5 pb-4 text-left shadow-xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-gray-900 text-4xl font-extrabold my-5 text-center"
            >
              Titulo Aquí
            </DialogTitle>
            <DialogTitle
              as="h3"
              className="text-gray-900 text-2xl font-extrabold my-5"
            >
              Ingredientes y Cantidades
            </DialogTitle>
            <DialogTitle
              as="h3"
              className="text-gray-900 text-2xl font-extrabold my-5"
            >
              Instrucciones
            </DialogTitle>
            {/* <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div> */}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

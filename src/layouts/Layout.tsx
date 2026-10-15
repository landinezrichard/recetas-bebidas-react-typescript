import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
import { useAppStore } from "../stores/useAppStore";

export default function Layout() {
  const loadFromStorage = useAppStore(
    (state) => state.loadFavoritesFromStorage,
  );

  useEffect(() => {
    // Cargar favoritos desde localStorage al iniciar la aplicación
    loadFromStorage();
  }, []);

  return (
    <>
      <Header />

      <main className="container mx-auto py-16">
        <Outlet />
      </main>

      <Modal />

      <Notification />
    </>
  );
}

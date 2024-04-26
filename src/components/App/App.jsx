import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "components/Loader/Loader";
import Header from "components/Header/Header";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("../../pages/FavoritesPage/FavoritesPage"));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster position="bottom-left" />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

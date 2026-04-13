import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Movie = lazy(() =>
  import('../pages/movie/page/Movie').then((module) => ({ default: module.Movie }))
);
const Home = lazy(() =>
  import('../pages/home/Home').then((module) => ({ default: module.default }))
);
const AddMovie = lazy(() =>
  import('../pages/movie/page/AddMovie').then((module) => ({ default: module.default }))
);

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen text-xl text-[#C8C6C5]">
          Cargando...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/movies" element={<Movie />} />
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] gap-4 text-[#C8C6C5]">
              <h1 className="text-6xl font-black text-[#E9C349]">404</h1>
              <p className="text-xl">Página no encontrada</p>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

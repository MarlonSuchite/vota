import { useGetMoviesQuery } from "../api/movie";
import { MovieList } from "../components/MovieList";

export const Movie = () => {
    // Obtenemos las películas de Supabase usando RTK Query
    const { data: movies, isLoading } = useGetMoviesQuery();

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-[#E9C349] mb-4 tracking-tight">
                    Ranking de Películas
                </h1>
                <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto">
                    Explora las películas nominadas por la comunidad. Descubre nuevos favoritos y maravíllate con el cine.
                </p>
            </div> */}
            
            {/* Componente MovieList maneja los estados de carga y datos vacíos internamente */}
            <MovieList movies={movies || []} isLoading={isLoading} />
        </div>
    );
};
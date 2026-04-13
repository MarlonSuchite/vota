import { MoviesApi } from "../models";
import { MovieCard } from "./MovieCard";
import { motion } from "framer-motion";

interface MovieListProps {
  movies: MoviesApi[];
  isLoading: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 12 } },
};

export const MovieList = ({ movies, isLoading }: MovieListProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-full h-[450px] animate-pulse bg-zinc-800 rounded-2xl" />
        ))}
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full text-center py-20 text-[#A1A1A1]"
      >
        <h3 className="text-xl font-semibold mb-2">No hay películas todavía</h3>
        <p>Sé el primero en nominar una película para el ranking.</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {movies.map((movie) => (
        <motion.div key={movie.id} variants={itemVariants}>
          <MovieCard movie={movie} />
        </motion.div>
      ))}
    </motion.div>
  );
};

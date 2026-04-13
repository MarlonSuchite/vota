import { useState } from 'react';
import { MoviesApi } from "../models";
import { getImageUrl } from "../services/supabaseStorage";
import { motion } from "framer-motion";

interface Props {
  movie: MoviesApi;
}

export const MovieCard = ({ movie }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const url = getImageUrl(movie.image);

  return (
    <motion.div 
      className="flex flex-col group bg-[#141414] border border-[#2A2A2A] p-5 rounded-2xl hover:border-[#E9C349]/40 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(233,195,73,0.05)]"
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[2/3] mb-6 overflow-hidden rounded-xl bg-[#1C1C1C] shadow-lg object-fill">
        
        {!isImageLoaded && (
          <div className="absolute inset-0 w-full h-full animate-pulse bg-[#2A2A2A] z-10" />
        )}
        
        {url && (
          <img
            src={url}
            alt={movie.name}
            onLoad={() => setIsImageLoaded(true)}
            className={`w-full h-full object-cover transform transition duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} relative z-20`}
            loading="lazy"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60 z-30 pointer-events-none"></div>
      </div>
      
      {/* Información */}
      <div className="flex flex-col">
        <span className="font-sans text-[10px] tracking-widest text-[#A1A1A1] uppercase mb-1">
          {new Date(movie.created_datetime).getFullYear() || '2024'} • {movie.created_by || 'Anónimo'}
        </span>
        
        <h3 className="font-sans text-2xl font-bold mb-3 text-[#EAEAEA] transition-colors line-clamp-1 group-hover:text-[#E9C349]">
          {movie.name}
        </h3>
        
        {/* Estrellas y rating */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? 'text-[#E9C349]' : 'text-[#2A2A2A]'}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-[#E9C349] text-sm">0.0</span>
          </div>
          <span className="font-sans text-[10px] text-[#A1A1A1] uppercase">0 Votos</span>
        </div>
        
        {/* Botón de votar listo */}
        <motion.button 
          className="w-full py-4 bg-gradient-to-br from-[#E9C349] via-[#D5B03C] to-[#B08D28] text-[#0F0F0F] font-black uppercase tracking-widest text-xs rounded-lg shadow-md"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #e9c349" }}
          whileTap={{ scale: 0.95 }}
        >
          Votar
        </motion.button>
      </div>
    </motion.div>
  );
};

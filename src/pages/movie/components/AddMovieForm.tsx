import React, { useEffect, useState } from 'react';
import { useAddMovieForm } from '../hooks/useAddMovieForm';

export const AddMovieForm = () => {
  const { register, onSubmit, errors, isSubmitting, uploadError, watch } = useAddMovieForm();
  const [preview, setPreview] = useState<string | null>(null);

  const imageFiles = watch('image');

  useEffect(() => {
    if (imageFiles && imageFiles.length > 0) {
      const file = imageFiles[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      // Limpieza del object URL cuando el componente se desmonte o el archivo cambie
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [imageFiles]);

  return (
    <form 
      onSubmit={onSubmit} 
      className="w-full max-w-xl mx-auto rounded-2xl relative"
    >
      {/* Halo de luz decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#E9C349]/10 rounded-[50%] blur-3xl pointer-events-none -z-10"></div>
      
      {/* Contenedor tipo Glassmorphism pero dark */}
      <div className="bg-[#141414]/80 backdrop-blur-xl p-8 rounded-2xl border border-[#2A2A2A] shadow-2xl">
        
        <h2 className="text-3xl md:text-4xl font-black text-[#E9C349] mb-8 text-center tracking-tight">
          Nominar Película
        </h2>
        
        {uploadError && (
          <div className="mb-4 p-3 rounded bg-red-500/20 text-red-400 text-sm border border-red-500/50">
            {uploadError}
          </div>
        )}

        {/* Nombre */}
        <div className="mb-5">
          <label className="block text-[#C8C6C5] text-sm font-semibold mb-2" htmlFor="name">
            Título de la película
          </label>
          <input
            {...register('name')}
            id="name"
            className="w-full px-4 py-4 bg-[#1C1B1B] text-[#EAEAEA] border border-[#2A2A2A] rounded-xl focus:outline-none focus:border-[#E9C349] focus:ring-1 focus:ring-[#E9C349] transition-all"
            placeholder="Ej: Inception"
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message as string}</p>}
        </div>

        {/* Descripción */}
        <div className="mb-5">
          <label className="block text-[#C8C6C5] text-sm font-semibold mb-2" htmlFor="description">
            Reseña / Descripción
          </label>
          <textarea
            {...register('description')}
            id="description"
            rows={4}
            className="w-full px-4 py-4 bg-[#1C1B1B] text-[#EAEAEA] border border-[#2A2A2A] rounded-xl focus:outline-none focus:border-[#E9C349] focus:ring-1 focus:ring-[#E9C349] transition-all resize-none"
            placeholder="¿De qué trata? ¿Por qué la nominas para el ranking?"
          />
          {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description.message as string}</p>}
        </div>

        {/* Autor */}
        <div className="mb-5">
          <label className="block text-[#C8C6C5] text-sm font-semibold mb-2" htmlFor="create_by">
            Sugerida por
          </label>
          <input
            {...register('create_by')}
            id="create_by"
            className="w-full px-4 py-4 bg-[#1C1B1B] text-[#EAEAEA] border border-[#2A2A2A] rounded-xl focus:outline-none focus:border-[#E9C349] focus:ring-1 focus:ring-[#E9C349] transition-all"
            placeholder="Tu nombre o alias"
          />
          {errors.create_by && <p className="text-red-500 text-sm mt-2">{errors.create_by.message as string}</p>}
        </div>

        {/* Póster / Imagen */}
        <div className="mb-8">
          <label className="block text-[#C8C6C5] text-sm font-semibold mb-2" htmlFor="image">
            Póster de la película
          </label>
          
          <input
            {...register('image')}
            type="file"
            id="image"
            accept="image/*"
            className="w-full text-[#A1A1A1] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#E9C349] file:text-[#0F0F0F] hover:file:bg-[#D5B03C] transition-all cursor-pointer bg-[#1C1B1B] border border-[#2A2A2A] rounded-xl p-2"
          />
          {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image.message as string}</p>}
          
          {preview && (
            <div className="mt-4 flex justify-center">
              <img 
                src={preview} 
                alt="Vista previa del póster" 
                className="h-48 rounded-lg object-cover shadow-md border border-[#2A2A2A]"
              />
            </div>
          )}
        </div>

        {/* Botón Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#E9C349] text-[#0F0F0F] text-lg font-bold rounded-xl hover:bg-[#D5B03C] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(233,195,73,0.2)]"
        >
          {isSubmitting ? 'Guardando la película...' : 'Agregar Película'}
        </button>
        
      </div>
    </form>
  );
};

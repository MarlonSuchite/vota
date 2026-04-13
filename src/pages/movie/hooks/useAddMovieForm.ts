import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAddMovieMutation } from '../api/movie';
import { useNavigate } from 'react-router-dom';
import { useUploadImage } from './useUploadImage';

// Ajustado al modelo real de la base de datos (name, description, create_by, image)
export const addMovieSchema = z.object({
  name: z.string().min(1, 'El nombre de la película es obligatorio'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  create_by: z.string().min(1, 'Debe especificar quién agrega la película'),
  image: z
    .any()
    .refine((files) => files?.length > 0, 'Debe seleccionar un póster / imagen'),
});

export type AddMovieFormValues = z.infer<typeof addMovieSchema>;

export const useAddMovieForm = () => {
  const form = useForm<AddMovieFormValues>({
    resolver: zodResolver(addMovieSchema),
    defaultValues: {
      name: '',
      description: '',
      create_by: '',
    },
  });

  const [addMovie, { isLoading: isAddingMovie }] = useAddMovieMutation();
  const { uploadImage, isUploading, error: uploadError } = useUploadImage();
  const navigate = useNavigate();

  const handleFormSubmit = async (data: AddMovieFormValues) => {
    try {
      // 1. Extraemos el File del FileList
      const file = data.image[0] as File;

      // 2. Subimos la imagen a Supabase Storage
      const fileName = await uploadImage(file);

      if (!fileName) {
        throw new Error('No se pudo subir la imagen.');
      }

      // 3. Preparamos el payload con los nombres reales de las columnas en BD
      const payload = {
        name: data.name,
        description: data.description,
        created_by: data.create_by, // En el form se llama create_by, en BD created_by (ajusta si es distinto, en un form previo usaste created_by o similar)
        image: fileName,
        created_datetime: new Date().toISOString(), 
      };

      // 4. Guardamos en la base de datos usando RTK Query
      await addMovie(payload as any).unwrap();
      navigate('/movies');
    } catch (error) {
      console.error('Hubo un error al procesar el formulario:', error);
    }
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(handleFormSubmit),
    errors: form.formState.errors,
    isSubmitting: isAddingMovie || isUploading,
    uploadError,
  };
};

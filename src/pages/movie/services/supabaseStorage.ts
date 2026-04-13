import { supabase } from '../../../config/supabase';

const BUCKET_NAME = 'movies';

/**
 * Uploads an image file to Supabase Storage inside the "posters" folder.
 * Generates a unique filename using Date.now().
 * @param file The file to upload
 * @returns The generated file name 
 */
export const uploadImage = async (file: File): Promise<string> => {
  // Generate a unique file name
  const fileExtension = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExtension}`;
  const filePath = `posters/${fileName}`;

  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file);

  if (error) {
    console.error('Error uploading image to Supabase:', error.message);
    throw new Error('No se pudo subir la imagen. Inténtalo de nuevo.');
  }

  // data.path will be 'posters/123456789.png'
  // Return just the generated fileName as requested ('123456789.png')
  return fileName;
};

/**
 * Gets the public URL of an image stored in the Supabase bucket.
 * @param fileName The name of the file (e.g. '123456789.png')
 * @returns The public URL string
 */
export const getImageUrl = (fileName: string): string => {
  if (!fileName) return '';
  
  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(`posters/${fileName}`);
    
  return data.publicUrl;
};

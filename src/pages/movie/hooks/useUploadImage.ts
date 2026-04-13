import { useState } from 'react';
import { uploadImage } from '../services/supabaseStorage';

export const useUploadImage = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Wrapper for uploading a file that manages robust UI states
   * @param file The literal File object coming from input
   * @returns unique filename on success, null on error
   */
  const handleUpload = async (file: File): Promise<string | null> => {
    setIsUploading(true);
    setError(null);
    try {
      const fileName = await uploadImage(file);
      return fileName;
    } catch (err: any) {
      setError(err.message || 'Error occurred while uploading the image');
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadImage: handleUpload,
    isUploading,
    error,
  };
};

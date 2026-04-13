import React from 'react';
import { AddMovieForm } from '../components/AddMovieForm';

export const AddMovie = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center p-6 py-20 relative overflow-hidden">
      <AddMovieForm />
    </div>
  );
};

export default AddMovie;

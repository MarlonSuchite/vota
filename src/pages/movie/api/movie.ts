import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../../../config/supabase';
import { MoviesApi } from '../models';

export const moviesApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesApi[], void>({
      async queryFn() {
        const { data, error } = await supabase.from('movies').select('*');

        if (error) return { error };
        return { data };
      },
      providesTags: ['Movies'],
    }),
    addMovie: builder.mutation<MoviesApi, MoviesApi>({
      async queryFn(movie) {
        const { data, error } = await supabase.from('movies').insert([movie]).select();

        if (error) return { error };
        return { data: data[0] };
      },
      invalidatesTags: ['Movies'],
    }),
  }),
});

export const { useGetMoviesQuery, useAddMovieMutation } = moviesApi;

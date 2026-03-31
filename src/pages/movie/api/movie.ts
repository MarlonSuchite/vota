import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { createClient } from "@supabase/supabase-js";

export const moviesApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getMovies: builder.query<any, void>({
            async queryFn() {
                const supabase = createClient('https://jqwhpkoskdfeyntzfeiy.supabase.co', 'sb_publishable_SH-KaMlP1QtZNRg-lI_OGQ_bMU3y59P')
                const { data, error } = await supabase.from('movies').select('*')
                if (error) return { error }
                return { data }
            }
        })
    })
})

export const { useGetMoviesQuery } = moviesApi
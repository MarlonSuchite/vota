import { useCallback, useEffect } from "react"
import { useGetMoviesQuery } from "../api/movie"

export const useMovies = () => {

    const { data: movies = [] } = useGetMoviesQuery()

    useEffect(() => {
        console.log('movies', movies)
    }, [movies])
    return { movies }
}   
import { moviesApi } from "../pages/movie/api/movie";

export const appMiddlewares = [
    moviesApi.middleware,
];

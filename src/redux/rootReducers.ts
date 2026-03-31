import { combineReducers } from "@reduxjs/toolkit";
import { base } from "./slices";
import { moviesApi } from "../pages/movie/api/movie";

export const rotReducer = combineReducers({
    base: base.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer
})
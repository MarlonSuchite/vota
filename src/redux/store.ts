import { configureStore } from "@reduxjs/toolkit";
import { rotReducer } from "./rootReducers";

export const store = configureStore(
    { reducer: rotReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware() }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

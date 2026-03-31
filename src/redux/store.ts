import { configureStore } from "@reduxjs/toolkit";
import { rotReducer } from "./rootReducers";
import { appMiddlewares } from "./middleware";

export const store = configureStore({
    reducer: rotReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...appMiddlewares)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

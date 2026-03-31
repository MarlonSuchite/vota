import { combineReducers } from "@reduxjs/toolkit";
import { base } from "./slices";

export const rotReducer = combineReducers({
    base: base.reducer
})
import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/sliceReducer";

export const store = configureStore({
    reducer: todoReducer
});
import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "./web";

export const store = configureStore({
    reducer: {
        webHome: homeSlice.reducer
    }
});
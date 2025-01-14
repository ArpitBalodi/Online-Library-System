import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice"

const appStore = configureStore({
    reducer: {
        books: bookReducer,
    }
});

export default appStore;
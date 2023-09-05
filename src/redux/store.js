import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        rockets: rocketsReducer,
    }
})

export default store;
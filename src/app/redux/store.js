import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
// import cartReducer

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default store;
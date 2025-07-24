import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import darkmodeReducer from "./darkmodeSlice";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        darkmode: darkmodeReducer
    }
});

export default store;
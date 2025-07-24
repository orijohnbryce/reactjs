import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [], // list of objects (products)
        // lastUpdate: "", // more data if require
    },
    reducers: {
        setCart(state, action){
            state.cart = action.payload;
        },
        clearCart(state){
            state.cart = [];
        },
        // addProductToCart(state, action){
        //     
        //     state.cart = [...state.cart, action.payload]
        //      // todo: look at addProductToCart (for update amount if product exists)
        // }
    }
});

// setCart(newCart)
// addProductToCart({data: __, amount: __})

export const {setCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
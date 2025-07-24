import { createSlice } from "@reduxjs/toolkit";


const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState: {
        isDark: false,         
    },
    reducers: {
        toggleDarkmode(state, action){
            state.isDark = action.payload;
        },        
    }
});

export const {toggleDarkmode} = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
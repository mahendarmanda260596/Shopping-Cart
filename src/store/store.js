import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    //this property have reducer
    reducer: {
        cart: cartSlice
    }

})

export default store
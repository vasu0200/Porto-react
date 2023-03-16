import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import cartSlice from "./slice/cartSlice";
import newSlice from "./slice/newSlice";


const store = configureStore({
    reducer:{
       Featured:productSlice.reducer,
       Cart: cartSlice.reducer,
       Newarrivals:newSlice.reducer

        
    }
})

export default store
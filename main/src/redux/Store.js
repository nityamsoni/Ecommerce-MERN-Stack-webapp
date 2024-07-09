import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import Alldata from "./Slices/Alldata";

  export const Store = configureStore({
    reducer : {
        cartslice : CartSlice ,
       
    }
})

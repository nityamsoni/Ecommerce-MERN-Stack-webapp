import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


  
 const Alldata = createSlice({
    name : 'Alldata',
    initialState  : [],
    reducers :{
        
       fetchdata : async(state)=>{
       
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json() ;
        // setpost(data)
        data.map((single)=>state.push(single))
        console.log('data is printing');
        
        return state
     }
    }
})

export const { fetchdata }   = Alldata.actions
export  default Alldata.reducer;
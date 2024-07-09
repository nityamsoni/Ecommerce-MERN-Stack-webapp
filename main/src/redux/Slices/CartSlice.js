import { createSlice } from "@reduxjs/toolkit";




  
 const CartSlice = createSlice({
    name : 'cartslice',
    initialState  : [],
    reducers :{
        add : (state ,actions)=>{
            state.push(actions.payload)
            // localStorage.setItem(  "cartItem" ,actions.payload)
            
        },
        remove: (state , actions)=> {
          return   state.filter((p)=> p.id !== actions.payload)
        }
    }
})

export const {add ,remove }   = CartSlice.actions
export  default CartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name : 'cart',
  initialState : {
    items:[]
  },
  reducers : {
    additem : (state , action) =>{
       state.items.push(action.payload);
    },
    removeitem :(state,action)=>{
      state.items.pop();
    },
    clearCart : (state , action)=>{
      state.items.length = 0;
    }
  }
})


export const {additem,removeitem,clearCart} = CartSlice.actions;

export default CartSlice.reducer;
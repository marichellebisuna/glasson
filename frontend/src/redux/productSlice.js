import { createSlice} from '@reduxjs/toolkit'
import {products} from '../data'


export const productSlice = createSlice({
name:'products',
initialState:{
  products:products,
  pending:false,
  error:false
},
reducers:{
  listStart: (state)=>{
    state.pending = true;
  },
  listSuccess: (state)=>{
    state.pending = false;
    state.products= products;
  },
  listFailure: (state)=>{
    state.pending = false;
    state.error = true;
  }
}
})

export const productReducer = productSlice.reducer;

export const {listStart, listSuccess, listFailure} = productSlice.actions;


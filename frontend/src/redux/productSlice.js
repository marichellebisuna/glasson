import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProductItems = createAsyncThunk("products/fetchProductItems",
  async () => {
    try {         
        const response = await fetch('https://dummyjson.com/products');
        const data = response.json();
        console.log(data)
        return data;        
    } catch (error) {
      console.error(error);
    }
  });

  export const fetchSingleProductItem = createAsyncThunk("products/fetchSingleProductItem",
  async ({id}) => {
    try {         
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = response.json();
        console.log(data)
        return data;        
    } catch (error) {
      console.error(error);
    }
  });
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: [],
    loading: false,
    success: false,
    hasError: false,
    message:"",
  },
  reducers: {},
  extraReducers:  (builder) => {
    builder
    .addCase(fetchProductItems.pending, (state, action) => {      
    state.loading = true;      
    })
     .addCase(fetchProductItems.fulfilled, (state, action)=> {           
      state.loading = false; 
      state.products = action.payload.products;
      state.success = true;     
      console.log(action.payload);
    })
    .addCase(fetchProductItems.rejected, (state, action) => {
      state.message = action.error.message;
      state.hasError = true;
      state.loading = false;
      state.success = false; 
    })
    .addCase(fetchSingleProductItem.pending, (state, action) => {      
      state.loading = true;      
    })
      .addCase(fetchSingleProductItem.fulfilled, (state, action)=> {           
      state.loading = false; 
      state.product = action.payload;
      state.success = true;     
      console.log(action.payload);
    })
    .addCase(fetchSingleProductItem.rejected, (state, action) => {
      state.message = action.error.message;
      state.hasError = true;
      state.loading = false;
      state.success = false; 
    })
  }})


export default productSlice.reducer;
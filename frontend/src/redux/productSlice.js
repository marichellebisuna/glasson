import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";



export const fetchProductItems = createAsyncThunk("products/fetchProductItems",
  async () => {
    let headers = new Headers();
    // headers.append("Authorization", `Bearer ${token}`);
    headers.append("Content-Type", "application/json");
    try {         
        const response = await fetch('https://dummyjson.com/products', {
          method: "get",
          headers,
          redirect: "follow"
        });
        const data = await response.json();      
        return data;        
    } catch (error) {
      console.error(error);
    }
  });

  export const fetchSingleProduct = createAsyncThunk("products/fetchSingleProduct",
async ({id}) => {
  let headers = new Headers();
  // headers.append("Authorization", `Bearer ${token}`);
  headers.append("Content-Type", "application/json");
  try {         
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "get",
    headers,
    redirect: "follow"
    
  });
  console.log(response)

      const data = await response.json();
      console.log(data)
      return data;        
  } catch (error) {
    console.error(error);
  }

  // return await fetch(`https://dummyjson.com/products/${id}`, {
  //   method: "get",
  //   headers,
  //   redirect: "follow",
  // }).then((res)=>res.json());
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
    
      
    })
    .addCase(fetchProductItems.rejected, (state, action) => {
      state.message = action.error.message;
      state.hasError = true;
      state.loading = false;
      state.success = false; 
    })
    .addCase(fetchSingleProduct.pending, (state, action) => {      
      state.loading = true;      
    })
    .addCase(fetchSingleProduct.fulfilled, (state, action)=> {           
    state.loading = false; 
    state.product = action.payload;
    state.success = true;     
    console.log( state.product);
    })
    .addCase(fetchSingleProduct.rejected, (state, action) => {
      state.message = action.error.message;
      state.hasError = true;
      state.loading = false;
      state.success = false; 
    })
  }})

  

export default productSlice.reducer;
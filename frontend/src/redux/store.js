import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";
import ProductsReducer from "./productSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore,   FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER } from "redux-persist";
import { combineReducers } from "redux";


const persistConfig = {
  key: "root", 
  storage,
};

const reducer = combineReducers({
  items: ProductsReducer,
  cart: CartReducer,  
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
});

export const persistor = persistStore(store)


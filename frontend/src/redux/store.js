// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// // import { cartReducer } from "./cartSlice";
// import  cartReducer  from "./cartSlice";

// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const rootReducer = combineReducers({
//   cart: cartReducer,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default store = configureStore({
//   reducer: persistedReducer,
//   // middleware: (getDefaultMiddleware) =>
//   //   getDefaultMiddleware({
//   //     serializableCheck: {
//   //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   //     },
//   //   }),
// })
// // export const persistor = persistStore(store)

import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: CartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
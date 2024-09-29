import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
// console.log(appStore)
export default appStore;
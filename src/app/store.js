import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import mealReducer from "../features/meal/mealSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    meals: mealReducer,
  },
});

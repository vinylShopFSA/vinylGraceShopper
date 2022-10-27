import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import vinylReducer from "../features/vinyl/vinylSlice";
import singleVinylReducer from "../features/vinyl/singleVinylSlice";
import { cartReducer } from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    vinyl: vinylReducer,
    singleVinyl: singleVinylReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
export * from "../features/vinyl/vinylSlice";

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import vinylReducer from "../features/vinyl/vinylSlice";
import singleVinylReducer from "../features/vinyl/singleVinylSlice";
<<<<<<< HEAD
import { cartReducer } from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice"
import singleUserReducer from "../features/user/singleUserSlice";
=======
import orderReducer from "../features/order/orderSlice";
import vinylOrderReducer from "../features/order/vinylOrderSlice";
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29

const store = configureStore({
  reducer: {
    auth: authReducer,
    vinyl: vinylReducer,
    singleVinyl: singleVinylReducer,
<<<<<<< HEAD
    cart: cartReducer,
    users: userReducer,
    user: singleUserReducer,
=======
    order: orderReducer,
    vinylOrder: vinylOrderReducer,
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
export * from "../features/vinyl/vinylSlice";

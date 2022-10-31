import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import vinylReducer from "../features/vinyl/vinylSlice";
import singleVinylReducer from "../features/vinyl/singleVinylSlice";

import userReducer from "../features/user/userSlice"
import singleUserReducer from "../features/user/singleUserSlice";
import orderReducer from "../features/order/orderSlice";
import vinylOrderReducer from "../features/order/vinylOrderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    vinyl: vinylReducer,
    singleVinyl: singleVinylReducer,
    users: userReducer,
    user: singleUserReducer,
    order: orderReducer,
    vinylOrder: vinylOrderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
export * from "../features/vinyl/vinylSlice";

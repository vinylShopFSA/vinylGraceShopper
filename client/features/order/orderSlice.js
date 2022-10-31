import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleOrder = createAsyncThunk(
  "/orders/:userId/cart",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/orders/${userId}/cart`);

      return data;
    } catch (error) {
      console.log("order does not exists");
    }
  }
);

<<<<<<< HEAD
export const fetchUserOrderHistory = createAsyncThunk(
  "/orders/users/:userId",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/orders/users/${userId}/`);
      console.log(data);
      return data;
    } catch (e) {
      console.log("oops");
    }
=======
// export const fetchUserOrderHistory = createAsyncThunk(
//   "/orders/user/:userId",
//   async (userId) => {
//     try {
//       const { data } = await axios.get(`/api/orders/user/${userId}/`);
//       return data;
//     } catch (error) {
//       console.log("user has no orders");
//     }
//   }
// );

export const addOrder = createAsyncThunk(
  "orders/add",
  async ({ userId, status, total }) => {
    const { data } = await axios.post("/api/orders", {
      userId,
      status,
      total,
    });
    return data;
  }
);

export const checkout = createAsyncThunk(
  "orders/:userId/checkout",
  async ({ userId }) => {
    const { data } = await axios.put(`/api/orders/${userId}/checkout`);
    return data;
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    allOrders: [],
    singleOrder: {},
    // userOrderHistory: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleOrder.fulfilled, (state, action) => {
        state.singleOrder = action.payload;
      })
      // .addCase(fetchUserOrderHistory.fulfilled, (state, action) => {
      //   state.userOrderHistory = action.payload;
      // })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.allOrders.push(action.payload);
      })
      .addCase(checkout.fulfilled, (state, action) => {
        state.singleOrder = action.payload;
      });
  },
});

export const selectSingleOrder = (state) => state.singleOrder;
export const selectAllOrders = (state) => state.allOrders;
// export const selectUserOrderHistory = (state) => state.userOrderHistory;

export default orderSlice.reducer;

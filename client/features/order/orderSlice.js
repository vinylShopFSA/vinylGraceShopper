import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllOrders = createAsyncThunk("/orders", async () => {
  try {
    const { data } = await axios.get(`/api/orders`);
    console.log(data);
    return data;
  } catch (e) {
    console.log("oops");
  }
});

export const fetchSingleOrder = createAsyncThunk(
  "/orders/:orderId",
  async (orderId) => {
    try {
      const { data } = await axios.get(`/api/orders/${orderId}`);
      console.log(data);
      return data;
    } catch (e) {
      console.log("order does not exists");
    }
  }
);

export const fetchUserOrderHistory = createAsyncThunk(
  "/orders/user/:userId",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/orders/user/${userId}/`);
      console.log(data);
      return data;
    } catch (e) {
      console.log("oops");
    }
  }
);

export const addOrder = createAsyncThunk(
  "allCampuses/addCampus",
  async ({ userId, status, total }) => {
    const { data } = await axios.post("/api/campuses", {
      userId,
      status,
      total,
    });
    return data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    allOrders: [],
    singleOrder: {},
    userOrderHistory: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        return (state.allOrders = action.payload);
      })
      .addCase(fetchSingleOrder.fulfilled, (state, action) => {
        state.singleOrder = action.payload;
      })
      .addCase(fetchUserOrderHistory.fulfilled, (state, action) => {
        state.userOrderHistory = action.payload;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.order.allOrders.push(action.payload);
      });
  },
});

export const selectSingleOrder = (state) => state.singleOrder;
export const selectAllOrders = (state) => state.allOrders;
export const selectUserOrderHistory = (state) => state.userOrderHistory;

export default orderSlice.reducer;

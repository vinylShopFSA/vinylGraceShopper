import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleOrder = createAsyncThunk(
  "/orders/:userId/cart",
  async (userId) => {
    const { data } = await axios.get(`/api/orders/${userId}/cart`);
    return data;
  }
);

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
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    allOrders: [],
    singleOrder: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleOrder.fulfilled, (state, action) => {
        state.singleOrder = action.payload;
      })
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

export default orderSlice.reducer;

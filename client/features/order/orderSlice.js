import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

export const fetchSingleOrder = createAsyncThunk("/orders/cart", async () => {
  const token = window.localStorage.getItem(TOKEN);
  const { data } = await axios.get(`/api/orders/cart`, {
    headers: {
      authorization: token,
    },
  });
  return data;
});

export const addOrder = createAsyncThunk(
  "orders/add",
  async ({ status, total }) => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.post(
      "/api/orders/cart",
      {
        status,
        total,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  }
);

export const checkout = createAsyncThunk(
  "orders/checkout/:orderId",
  async (orderId) => {
    // const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.put(`/api/orders/checkout/${orderId}`);
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
        console.log(action.payload);
      });
  },
});

export const selectSingleOrder = (state) => state.singleOrder;
export const selectAllOrders = (state) => state.allOrders;

export default orderSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVinylOrders = createAsyncThunk(
  "/vinylOrder/:orderId",
  async (orderId) => {
    try {
      const { data } = await axios.get(`/api/vinylOrder/${orderId}`);
      return data;
    } catch (err) {
      console.log("no such vinyl order");
    }
  }
);

export const addVinylOrder = createAsyncThunk(
  "/vinylOrder/add",
  async ({ VinylId, orderId, quantity }) => {
    const { data } = await axios.post("/api/students", {
      VinylId,
      orderId,
      quantity,
    });
    return data;
  }
);
export const vinylOrderSlice = createSlice({
  name: "vinylOrder",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVinylOrders.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addVinylOrder.fulfilled, (state, action) => {
        const itemInCart = state.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          state.push({ ...action.payload, quantity: 1 });
        }
      });
  },
});

export const selectVinylOrder = (state) => state.vinylOrder;
export default vinylOrderSlice.reducer;

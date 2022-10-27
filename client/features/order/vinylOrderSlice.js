import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVinylOrder = createAsyncThunk(
  "/vinylOrder/:id",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/vinylOrder/${id}`);
      return data;
    } catch (err) {
      console.log("no such vinyl order");
    }
  }
);

export const vinylOrderSlice = createSlice({
  name: "vinylOrder",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVinylOrder.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectVinylOrder = (state) => state.vinylOrder;
export default vinylOrderSlice.reducer;

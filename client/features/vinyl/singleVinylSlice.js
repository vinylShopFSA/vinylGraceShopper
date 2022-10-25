import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleVinyl = createAsyncThunk("singleVinyl", async (id) => {
  try {
    const { data } = await axios.get(`/api/vinyls/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const singleVinylSlice = createSlice({
  name: "singleVinyl",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleVinyl.fulfilled, (state, action) => {
    return action.payload;
    });
  },
});

export const selectVinyls = (state) => {
  return state.singleVinyl
};

export default singleVinylSlice.reducer;

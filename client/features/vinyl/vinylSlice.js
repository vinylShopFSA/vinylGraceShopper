import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVinyls = createAsyncThunk("allVinyls", async () => {
  try {
    const { data } = await axios.get(`/api/vinyls`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const vinylsSlice = createSlice({
  name: "allVinyls",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVinyls.fulfilled, (state, action) => {
     return action.payload;
    });
  },
});

export const selectVinyls = (state) => {
  return state.allVinyls
};

export default vinylsSlice.reducer;

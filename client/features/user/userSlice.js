import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("allUsers", async () => {
  try {
    const { data } = await axios.get(`/api/users`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const usersSlice = createSlice({
  name: "allUsers",
  initialState:[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectUsers = (state) => {
  return state.allUsers;
};

export default usersSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TOKEN = 'token';

export const fetchUsers = createAsyncThunk("allUsers", async () => {
  const token = window.localStorage.getItem('token');
    try {
    if(token) {
      const { data } = await axios.get(`/api/admin/users` ,{
        headers: {
          authorization: token
        }
      });
      return data;
    }
  } catch (err) {
    console.log(`${err} from get all users`);
  }
});


const usersSlice = createSlice({
  name: "users",
  initialState:[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectUsers = (state) => {
  return state.users;
};

export default usersSlice.reducer;

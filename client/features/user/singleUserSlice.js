import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const TOKEN = 'token';

export const fetchSingleUser = createAsyncThunk("singleUser", async (id) => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if(token) {
      const { data } = await axios.get(`/api/admin/users/${id}`, {
        headers: {
          Authorization:token
        },
      });
      return data;
    }
  } catch (err) {
    console.log(`${err} from get single users`);
  }
});

export const editSingleUser = createAsyncThunk("editUser", async (id,user) => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if(token) {
      const { data } = await axios.put(`/api/admin/users/${id}`, user,{
        headers: {
          Authorization:token
        },
      });
      return data;
    }
  } catch (err) {
    console.log(`${err} from  edit user`);
  }
});

export const deleteSingleUser = createAsyncThunk("deleteUser", async (user) => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if(token) {
      const { data } = await axios.delete(`/api/admin/users/${user}`,{
        headers: {
          Authorization:token
        },
      });
      return data;
    }
  } catch (err) {
    console.log(`${err} from  delete user`);
  }
});

const singleUserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
    return action.payload;
    });
  },
});

export const selectUsers = (state) => {
  return state.singleUser
};

export default singleUserSlice.reducer;

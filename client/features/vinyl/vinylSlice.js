import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVinyls = createAsyncThunk("allVinyls", async () => {
  try {
    const { data } = await axios.get(`/api/vinyls`);
    return data;
  } catch (err) {
    console.log(`${err} from get all vinyls`);
  }
});

export const addNewVinyl = createAsyncThunk("addVinyl", async (vinyl) => {
  const token = window.localStorage.getItem("token");
  console.log(token)
  try {
    if(token) {
      const { data } = await axios.post(`/api/admin/vinyls/add`, vinyl, {
        headers: {
          authorization:token,
        }
      });
      return data;
    }
  } catch (err) {
    console.log(`${err} from adding new vinyl`);
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
  return state.allVinyls;
};

export default vinylsSlice.reducer;

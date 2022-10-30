import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleVinyl = createAsyncThunk("singleVinyl", async (id) => {
  try {
    const { data } = await axios.get(`/api/vinyls/${id}`);
    return data;
  } catch (err) {
    console.log(`${err} from get all Vinyls`);
  }
});

export const editSingleVinyl = createAsyncThunk("editVinyl", async (id,vinyl) => {
  const token = window.localStorage.getItem("token");
  try {
    if(token) {
      const { data } = await axios.put(`/api/admin/vinyls/${id}`, vinyl,{
        headers: {
          Authorization:token
        },
      });
      return data;
    }
  } catch (err) {
    console.log(`${err} from  edit Vinyl`);
  }
});

export const deleteSingleVinyl = createAsyncThunk("deleteVinyl", async (vinyl) => {
  const token = window.localStorage.getItem("token");
  try {
    if(token) {
      const { data } = await axios.delete(`/api/admin/vinyls/${vinyl}`,{
        headers: {
          Authorization:token
        },
      });
      return data;
    }
  } catch (err) {
    console.log(`${err} from  delete Vinyl`);
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

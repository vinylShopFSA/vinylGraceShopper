import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

export const fetchVinylOrders = createAsyncThunk(
  "/vinylOrder/cart",
  async () => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.get(`/api/vinylOrder/cart`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);

export const addVinylOrder = createAsyncThunk(
  "/vinylOrder/add",
  async ({ quantity, VinylId }) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data } = await axios.post(
        `/api/vinylOrder/cart`,
        {
          VinylId,
          quantity,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    }
  }
);

export const incrementVinylOrder = createAsyncThunk(
  "incrementVinylOrder",
  async ({ VinylId, quantity }) => {
    const token = window.localStorage.getItem(TOKEN);
    quantity++;
    const { data } = await axios.put(
      `/api/vinylOrder/cart/${VinylId}`,
      {
        quantity,
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

export const decrementVinylOrder = createAsyncThunk(
  "decrementVinylOrder",
  async ({ userId, VinylId, quantity }) => {
    const token = window.localStorage.getItem(TOKEN);
    if (quantity > 0) {
      quantity--;
      const { data } = await axios.put(
        `/api/vinylOrder/cart/${VinylId}`,
        {
          quantity,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } else {
      removeVinylOrder({ userId, VinylId, quantity });
    }
  }
);

export const removeVinylOrder = createAsyncThunk(
  "vinylOrder/cart/:VinylId/delete",
  async ({ VinylId }) => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.delete(`/api/vinylOrder/cart/${VinylId}`, {
      headers: {
        authorization: token,
      },
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
        // const itemInCart = state.find((item) => item.id === action.payload);
        // if (itemInCart) {
        //   itemInCart.quantity++;
        // } else {
        state.push(action.payload);
        // }
      })
      .addCase(incrementVinylOrder.fulfilled, (state, action) => {
        state = state.map((vinyl) => {
          if (vinyl.VinylId === action.payload.VinylId) {
            vinyl = action.payload;
          }
          return vinyl;
        });
      })
      .addCase(decrementVinylOrder.fulfilled, (state, action) => {
        state = state.map((vinyl) => {
          if (vinyl.VinylId === action.payload.VinylId) {
            vinyl = action.payload;
          }
          return vinyl;
        });
      })
      .addCase(removeVinylOrder.fulfilled, (state, action) => {
        return state.filter((vinyl) => {
          return vinyl.id !== action.payload;
        });
      });
  },
});

export const selectVinylOrder = (state) => state.vinylOrder;
export default vinylOrderSlice.reducer;

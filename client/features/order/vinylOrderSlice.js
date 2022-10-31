import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVinylOrders = createAsyncThunk(
  "/vinylOrder/:orderId",
  async (userId) => {
    const { data } = await axios.get(`/api/vinylOrder/${userId}/cart`);
    return data;
  }
);

export const addVinylOrder = createAsyncThunk(
  "/vinylOrder/:userId/add",
  async ({ userId, quantity, VinylId }) => {
    const { data } = await axios.post(`/api/vinylOrder/${userId}/cart`, {
      VinylId,
      quantity,
    });
    return data;
  }
);

export const incrementVinylOrder = createAsyncThunk(
  "incrementVinylOrder",
  async ({ userId, VinylId, quantity }) => {
    quantity++;
    const { data } = await axios.put(
      `/api/vinylOrder/${userId}/cart/${VinylId}`,
      {
        quantity,
      }
    );
    return data;
  }
);

export const decrementVinylOrder = createAsyncThunk(
  "decrementVinylOrder",
  async ({ userId, VinylId, quantity }) => {
    if (quantity > 0) {
      quantity--;
      const { data } = await axios.put(
        `/api/vinylOrder/${userId}/cart/${VinylId}`,
        {
          quantity,
        }
      );
      return data;
    } else {
      removeVinylOrder({ userId, VinylId, quantity });
    }
  }
);

export const removeVinylOrder = createAsyncThunk(
  "vinylOrder/:userId/cart/:VinylId/delete",
  async ({ userId, VinylId }) => {
    const { data } = await axios.delete(
      `/api/vinylOrder/${userId}/cart/${VinylId}`
    );
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

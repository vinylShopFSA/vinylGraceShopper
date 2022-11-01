import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const TOKEN = "token";

// const initialState = {
//   const token = window.localStorage.getItem(TOKEN);
//   if (token){
//     JSON.parse(window.localStorage.getItem("cart"))
//   } else {
//     []
//   }
// }

export const fetchVinylOrders = createAsyncThunk(
  "/vinylOrder/cart",
  async () => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data } = await axios.get(`/api/vinylOrder/cart`, {
        headers: {
          Authorization: token,
        },
      });
      return data;
    } else {
      return window.localStorage.setItem("cart", JSON.stringify(state.items));
    }
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
            Authorization: token,
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
          Authorization: token,
        },
      }
    );
    return data;
  }
);

export const decrementVinylOrder = createAsyncThunk(
  "decrementVinylOrder",
  async ({ VinylId, quantity }) => {
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
            Authorization: token,
          },
        }
      );
      return data;
    } else {
      removeVinylOrder({ VinylId, quantity });
    }
  }
);

export const removeVinylOrder = createAsyncThunk(
  "vinylOrder/cart/:VinylId/delete",
  async ({ VinylId }) => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.delete(`/api/vinylOrder/cart/${VinylId}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  }
);

export const vinylOrderSlice = createSlice({
  name: "vinylOrder",
  initialState: JSON.parse(window.localStorage.getItem("cart")) || [],
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

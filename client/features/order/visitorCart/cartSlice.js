import { StarRateOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [],
  reducers: {
    addVinylToCart: (state, action) => {
      const vinyl = state.find((item) => item.id === action.payload.id);
      if (vinyl) {
        vinyl.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const vinyl = state.find((vinyl) => vinyl.id === action.payload);
      vinyl.quantity++;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const vinyl = state.find((vinyl) => vinyl.id === action.payload);
      if (vinyl.quantity === 1) {
        vinyl.quantity = 1;
      } else {
        vinyl.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const removeVinyl = state.filter((item) => item.id !== action.payload);
      state = removeVinyl;
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
    clearStorage: (state, action) => {
      state = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    sum: (state, action) => {
      let subtotal = 0;
      state.map((item) => {
        item.quantity *= item.price;
        subtotal += item.quantity;
      });
      return subtotal;
    },
  },
});

export default cartSlice.reducer;
export const {
  addVinylToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearStorage,
  sum,
} = cartSlice.actions;

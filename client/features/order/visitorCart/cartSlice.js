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
    clearStorage: (state) => {
      state = [];
      localStorage.setItem("cart", JSON.stringify(state));
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
} = cartSlice.actions;

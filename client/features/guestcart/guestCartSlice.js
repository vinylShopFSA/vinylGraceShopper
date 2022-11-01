import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getGuestCart = createAsyncThunk(
     async () => {
        const products = await JSON.parse(localStorage.getItem('shoppingCart'))
        return products
    }
)
      
  export const addToGuestCart = createAsyncThunk(
   async (product) => {

        let cart = await JSON.parse(localStorage.getItem('shoppingCart'))
        if (cart) {
          const idArr = [...cart].map(item => item.id)
          if (!idArr.includes(product.id)) cart.push({...product, quantity: 1})
        } else {
          cart = []
          cart.push({...product, quantity: 1})
        }
        localStorage.setItem('shoppingCart', JSON.stringify(cart))
       return cart
  }
  )
  
  export const increaseQuantity =  createAsyncThunk(
    async (VinylId) => {
        const cart = await JSON.parse(localStorage.getItem('shoppingCart'))
        cart.filter(item => {
          if (item.id === VinylId) return (item.quantity = item.quantity + 1)
        })
        localStorage.setItem('shoppingCart', JSON.stringify(cart))
       return cart
  }
  )
  
  

  export const decreaseQuantity =createAsyncThunk(
    async (VinylId)  => {
        const cart = JSON.parse(localStorage.getItem('shoppingCart'))
        cart.filter(item => {
          if (item.id === VinylId) {
            if (item.quantity !== 1) {
              return (item.quantity = item.quantity - 1)
            }
          }
        })
        localStorage.setItem('shoppingCart', JSON.stringify(cart))
     return cart
  }
  )

  
  export const removeFromGuestCart =  createAsyncThunk(
    async (vinylId) => {

        const cart = await JSON.parse(localStorage.getItem('shoppingCart'))
        const newCart = cart.filter(item => {
          if (item.id !== vinylId) return item
        })
        if (newCart.length === 0) localStorage.setItem('shoppingCart', 0)
        else localStorage.setItem('shoppingCart', JSON.stringify(newCart))
     return cart
  }
  )

  
  export const guestCheckout= createAsyncThunk(
     async () => {
        await localStorage.setItem('shoppingCart', 0)
  }
  )

  export const guestCartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getGuestCart.fulfilled, (state, action) => {
          return action.payload;
        })
        .addCase(addToGuestCart.fulfilled, (state, action) => {
          state.push(action.payload);
        })
        .addCase(increaseQuantity.fulfilled, (state, action) => {
          state = state.map((vinyl) => {
            if (vinyl.VinylId === action.payload.VinylId) {
              vinyl = action.payload;
            }
            return vinyl;
          });
        })
        .addCase(decreaseQuantity.fulfilled, (state, action) => {
          state = state.map((vinyl) => {
            if (vinyl.VinylId === action.payload.VinylId) {
              vinyl = action.payload;
            }
            return vinyl;
          });
        })
        .addCase(removeFromGuestCart.fulfilled, (state, action) => {
          return state.filter((vinyl) => {
            return vinyl.id !== action.payload;
          });
        });
    },
  });
  
  export const selectCart = (state) => state.cart;

  
  export default guestCartSlice.reducer
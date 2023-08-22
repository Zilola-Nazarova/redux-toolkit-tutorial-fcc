import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 3,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
    },
  }
});

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
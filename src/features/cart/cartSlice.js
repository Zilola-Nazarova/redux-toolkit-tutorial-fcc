import { createSlice } from "@reduxjs/toolkit";
import cartItmes from '../../cartItems';

const initialState = {
  cartItems: cartItmes,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

export default cartSlice.reducer;
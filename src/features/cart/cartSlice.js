import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, { payload }) => {
      // Qo'shish logikasi
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      );
      if (existingItem) {
        existingItem.quantity += payload.quantity;
      } else {
        state.cartItems.push({ ...payload, quantity: payload.quantity });
      }
      state.numItemsInCart += payload.quantity;
      state.cartTotal += payload.price * payload.quantity;
    },

    increaseQuantity: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item) {
        item.quantity += 1;
        state.numItemsInCart += 1;
        state.cartTotal += item.price;
      }
    },
    decreaseQuantity: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.numItemsInCart -= 1;
        state.cartTotal -= item.price;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.numItemsInCart = 0;
      state.cartTotal = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

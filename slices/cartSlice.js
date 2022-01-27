import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id == action.payload.id
      );

      let newCart = [...state.items];
      if (index >= 0) {
        // item exists and we have to remove it
        newCart.splice(index, 1);
      } else {
        console.warn("Error, cant remove the item");
      }
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;

export const selectTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + Math.round(item.price * 100) / 100,
    0
  );

export default cartSlice.reducer;

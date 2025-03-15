import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isItemPresent = !!state.items.find((cartItem) => {
        return cartItem.id === action.payload.id;
      });

      if (isItemPresent) {
        console.error("Item already in cart");
        return;
      } else {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }
    },
    incrementQuantity: (state, action) => {
      const newState = state.items.map((item) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      state.items = newState;
    },

    decrementQuantity: (state, action) => {
      state.items = state.items.filter((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      });
      return state;
    }, 

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

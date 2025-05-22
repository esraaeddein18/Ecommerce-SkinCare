import { createSlice } from "@reduxjs/toolkit";

// Helper to save cart data in localStorage
const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

// Helper to calculate totalItems and totalAmount
const updateCartTotals = (state) => {
  state.totalAmount = state.data.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  state.totalItems = state.data.reduce((total, item) => total + item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalAmount: 0,
    totalItems: 0,
  },

  reducers: {
    addToCart(state, action) {
      const existingProduct = state.data.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      } else {
        state.data.push({
          ...action.payload,
          totalPrice: action.payload.price * action.payload.quantity,
        });
      }

      updateCartTotals(state);
      storeInLocalStorage(state.data);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const product = state.data.find((product) => product.id === id);

      if (product) {
        product.quantity = Math.max(quantity, 1);
        product.totalPrice = product.quantity * product.price;
      }

      updateCartTotals(state);
      storeInLocalStorage(state.data);
    },

    removeItem(state, action) {
      state.data = state.data.filter((product) => product.id !== action.payload.id);
      updateCartTotals(state);
      storeInLocalStorage(state.data);
    },

    getCartTotal(state) {
      updateCartTotals(state);
    },
  },
});

export const { addToCart, updateQuantity, removeItem, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;

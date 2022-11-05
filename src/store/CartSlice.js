import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== item(action.payload));
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

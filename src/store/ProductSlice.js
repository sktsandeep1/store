import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./StatusSlice";

const ProductSlice = createSlice({
  name: "product", //cart if not working in future
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },

  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

export function fetchProducts() {
  return async function fetchProduct(dispatch) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products#");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}

// const ActionTypes = {
//   SELECTED_PRODUCTS: "SELECTED_PRODUCT",
// };

// export const SelectedProducts = (state = {}, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     default:
//       return state;
//   }
// };

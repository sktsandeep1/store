import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import { Provider } from "react-redux";
import store from "./store/store";
import SingleProduct from "./components/single-product/SingleProduct";
import Products from "./components/products/Products";
import BuyNow from "./pages/buyNow/BuyNow";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:productId"
            element={<SingleProduct />}
          ></Route>

          <Route path="/buyNow" element={<BuyNow />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

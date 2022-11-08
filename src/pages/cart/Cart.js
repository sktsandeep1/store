import React from "react";
import style from "./Cart.module.css";
import { AiFillDelete, AiFillThunderbolt } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/CartSlice";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const [total, setTotal] = useState();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    return dispatch(remove(productId));
  };

  useEffect(() => {
    setTotal(products.reduce((acc, curr) => acc + Number(curr.price), 0));
  });

  return (
    <div className={style.container}>
      <h1>Cart</h1>

      {products.map((product) => {
        return (
          <div className={style.product_cart}>
            <img
              src={product.image}
              alt="product_image"
              className={style.product_image}
            />
            <p className={style.product_title}>
              {product.title.substring(0, 18)}...
            </p>
            <p className={style.product_price}>{product.price}</p>
            <p className={style.product_quantity}>quantity</p>
            <button
              onClick={() => {
                handleRemove(product.id);
              }}
            >
              <AiFillDelete className={style.product_delete_icon} />
            </button>
          </div>
        );
      })}

      {/* <div className={style.}> */}
      <p className={style.product_total}>
        <span>Total :</span>
        &nbsp;
        <span> ₹ {total}</span>
      </p>
      <div className={style.cart_buyNow}>
        <Link to="/buyNow">
          <button className={style.buyNow}>
            <AiFillThunderbolt /> <span>Buy Now</span> {/* buy now page */}
          </button>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Cart;

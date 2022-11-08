import React from "react";
import style from "./SingleProduct.module.css";
import { FaCartPlus } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { add } from "../../store/CartSlice";
import BuyNow from "../../pages/buyNow/BuyNow";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);
  const { productId } = useParams();
  const product = products.find((product) => String(product.id) === productId);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  console.log(product);
  if (!product) {
    return "sorry, no matching product found";
  }

  return (
    <section className={style.SingleProductSection}>
      <button className={style.backBtn}>Back</button>
      <div className={style.container_SingleProduct} key={productId}>
        <img
          src={product.image}
          alt="product_image"
          className={style.product_image}
        />
        <div className={style.details}>
          <h3 className={style.product_category}>{product.category}</h3>
          <h1>{product.title}</h1>
          <p className={style.product_rating}>
            <span>{product.rating.rate}</span>
            <span>
              <FaStar className={style.product_star} />
            </span>
            <span> Rating</span>
          </p>
          <strong className={style.product_price}>
            <span>Price</span> ₹ {product.price}
          </strong>

          <p className={style.description}>
            {product.description.substring(0, 200)}...
          </p>

          <div className={style.btns}>
            <button
              className={style.addToCart}
              onClick={() => {
                handleAdd(product);
              }}
            >
              <FaCartPlus />
              <span>Add to cart</span> {/* add to cart now page */}
            </button>
            <Link to="/buyNow">
              <button className={style.buyNow}>
                <AiFillThunderbolt /> <span>Buy Now</span> {/* buy now page */}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

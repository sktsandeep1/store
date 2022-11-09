import style from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/ProductSlice";
import { STATUS } from "../../store/StatusSlice";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUS.LOADING) {
    return <h1>Loading......!!</h1>;
  }
  if (status === STATUS.ERROR) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <div className={style.products_wrapper}>
        {products.map((product) => {
          return (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className={style.card}>
                <img
                  src={product.image}
                  alt="productImage"
                  className={style.product_image}
                />

                <div className={style.product_details}>
                  <strong className={style.product_title}>
                    {product.title.substring(0, 18)}...
                  </strong>
                  <div className={style.product_detail_item}>
                    <p className={style.product_rating}>
                      <FaStar className={style.FaStar} />
                      <span>{product.rating.rate}</span>
                    </p>
                    <p className={style.product_price}>
                      <span>Price: </span>
                      <span>₹{product.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;

import style from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/ProductSlice";
import { STATUS } from "../../store/StatusSlice";
import { MdOutlineStarRate } from "react-icons/md";
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

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "" : str;
  };

  return (
    <>
      <div className={style.wrapper}>
        {products.map((product) => {
          return (
            <div className={style.card} key={product.id}>
              <img
                src={product.image}
                alt="productImage"
                className={style.product_image}
              />
              <div className={style.product_description}>
                <strong className={style.product_title}>
                  {truncate(product?.title, 20)}
                </strong>
                <p>
                  <MdOutlineStarRate />
                  <span>{product.rating.rate}</span>
                </p>
                <p className={style.product_price}>
                  <span>Price </span>
                  <span>₹{product.price}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;

// men's clothing, jewelery, electronics, women's clothing

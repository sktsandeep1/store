import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/ProductSlice";
import styles from "./Electronics.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Men_Clothing = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "" : str;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className={styles.container}>
        <Slider {...settings} className={styles.slider}>
          {products
            .filter((product) => product.category.includes("electronics"))
            .map((filteredProduct) => {
              return (
                <div className={styles.card} key={filteredProduct.id}>
                  <img
                    src={filteredProduct.image}
                    alt=""
                    className={styles.product_image}
                  />

                  <div className={styles.description}>
                    <strong className={styles.product_title}>
                      {truncate(filteredProduct.title, 20)}
                    </strong>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default Men_Clothing;

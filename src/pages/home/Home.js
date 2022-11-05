import React from "react";
import Men_Clothing from "../../components/content-component/men_clothing/Men_Clothing";
import Women_Clothing from "../../components/content-component/women_clothing/Women_Clothing";
import Jewellery from "../../components/content-component/jewellery/Jewellery";
import Electronics from "../../components/content-component/electroincs/Electronics";

import Products from "../../components/products/Products";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.home}>
      <h1>HOME</h1>
      <section>
        <h1>Hero Section</h1>
      </section>

      <section className={style.menSection}>
        <h1>Men's Clothing</h1>
        <Men_Clothing />
      </section>
      <section>
        <h1>Women's Clothing</h1>
        <Women_Clothing />
      </section>
      <section>
        <h1>Jewellery</h1>
        <Jewellery />
      </section>
      <section>
        <h1>Electronics</h1>
        <Electronics />
      </section>

      <section>
        <h1>Products</h1>
        <Products />
      </section>
    </div>
  );
};

export default Home;

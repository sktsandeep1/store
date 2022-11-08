import React from "react";

import Products from "../../components/products/Products";

import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.home}>
      <section>
        <h1>Hero Section</h1>
      </section>

      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;

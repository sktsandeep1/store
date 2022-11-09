import React from "react";

import Products from "../../components/products/Products";
import Sidebar from "../../components/sidebar/Sidebar";

import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.home}>
      <Sidebar />
      <Products />
    </div>
  );
};

export default Home;

import React from "react";
import style from "./Sidebar.module.css";
import { FaStar } from "react-icons/fa";
const Sidebar = () => {
  return (
    <aside>
      <div className={style.filterCategory}>
        <p className={style.sidebarItem}>All</p>
        <p className={style.sidebarItem}>Men's Clothing</p>
        <p className={style.sidebarItem}>Women's Clothing</p>
        <p className={style.sidebarItem}>Jewellery</p>
        <p className={style.sidebarItem}>Electroincs</p>
      </div>
      <div>
        <div className={style.filter}>
          <div className={style.filterPrice}>
            <input type="checkbox" />
            <span>Low to High</span>
            <br />
            <input type="checkbox" />
            <span>High to Low</span>
          </div>

          <div className={style.filterRating}>
            <span>Rating</span>
            <div className={style.filterFaStar}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        <button className={style.filterbtn}>Clear Filter</button>
      </div>
    </aside>
  );
};

export default Sidebar;

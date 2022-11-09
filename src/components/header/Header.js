import style from "./Header.module.css";
import { Link } from "react-router-dom";
import store from "../../assets/store.png";
import { FaLocationArrow } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const item = useSelector((state) => {
    return state.cart;
  });

  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <div className={style.logo}>
              <img src={store} alt="" />
              <span>STORE</span>
            </div>
          </Link>

          <div className={style.address}>
            <FaLocationArrow />
            <span>address</span>
          </div>
          <div className={style.search}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search any thing....."
            />
            <button className={style.searchButton}>
              <FaSearch />
            </button>
          </div>
          <div className={style.user}>
            <FaUserAlt />
            <span>Jigness</span>
          </div>

          <Link to="/orders">
            <div className={style.orders}>
              <span>Returns & Orders</span>
            </div>
          </Link>

          <Link to="/Cart">
            <div className={style.cart}>
              <div className={style.icon}>
                <FaShoppingCart className={style.cartIcon} />
                <span>{item.length}</span>
              </div>
              {/* <span>Cart</span> */}
            </div>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

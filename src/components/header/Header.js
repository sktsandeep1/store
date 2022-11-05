import "./Header.css";
import { Link } from "react-router-dom";
import store from "../../assets/store.png";
import { FaLocationArrow } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <div className="logo">
              <img src={store} alt="" />
              <span>STORE</span>
            </div>
          </Link>

          <div className="address">
            <FaLocationArrow />
            <span>address</span>
          </div>
          <div className="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search any thing....."
            />
            <button className="searchButton">
              <FaSearch />
            </button>
          </div>
          <div className="user">
            <FaUserAlt />
            <span>Jigness</span>
          </div>

          <Link to="/orders">
            <div className="orders">
              <span>Returns & Orders</span>
            </div>
          </Link>

          <Link to="/Cart">
            <div className="cart">
              <div className="icon">
                <FaLuggageCart className="cartIcon" />
                <span>0</span>
              </div>
              <span>Cart</span>
            </div>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

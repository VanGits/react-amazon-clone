import React from "react";
import "../styles/Header.css";
import { IoLocationOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useStateValue } from "../data/StateProvider";
import { auth } from "../utilities/firebase";

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header" id="header">
      <Link to="/">
        <div className="header__img click">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </div>
      </Link>

      <div className="header__location click">
        <IoLocationOutline className="header__locationIcon" />
        <div className="header__address">
          <span className="header__optionLineOne">
            Deliver to{" "}
            {user
              ? user.email.charAt(0).toUpperCase() +
                user.email.substring(1, user.email.indexOf("@"))
              : "Guest"}
          </span>
          <span className="header__optionLineTwo noclick">
            Select Your Address
          </span>
        </div>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <GoSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuthentication} className="header__option click">
            <span className="header__optionLineOne">
              Hello,{" "}
              {user
                ? user.email.charAt(0).toUpperCase() +
                  user.email.substring(1, user.email.indexOf("@"))
                : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option click">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCart click">
            <BiCart className="header__cartIcon" />
            <span className="header__cartCount">{cart?.length}</span>
            <span className="header__optionLineTwo">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

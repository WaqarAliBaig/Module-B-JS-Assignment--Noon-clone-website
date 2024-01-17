import React from "react";
import "../Componenets/Navbar.css";
import logo from "../assets/noon-logo-en.svg";
import flag_icon from "../assets/ae.svg";
import login from "../assets/user_thin.svg"
import wishlist from "../assets/wishlist.svg";
import cart from "../assets/cart.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} width={100} />
        </div>

        <div className="row img-content">
          <div className="col">
            <img src={flag_icon} width={40} />
          </div>
          <div className="col">
            <div>Deliver to</div>
            <span>Dubai</span>
          </div>
        </div>

        <div className="search-box">
          <input type="text" placeholder="What are you looking for?" />
        </div>

        <div className="login-menu">
          <div className="content">
            <span>Log in</span>
            <img src={login} width={20} />
          </div>

          <div className="content">
            <span>Wishlist</span>
            <img src={wishlist} width={20} />
          </div>

          <div className="content">
            <span>Cart</span>
            <img src={cart} width={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

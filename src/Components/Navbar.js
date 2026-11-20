
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaShoppingCart,
  FaStore,
  FaSearch
} from "react-icons/fa";
import "../CSS/Navbar.css";

const Navbar = () => {
  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FaStore /> <span>ShopEasy</span>
      </Link>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search for products..."
          onChange={(e) => {
            window.dispatchEvent(
              new CustomEvent("productSearch", {
                detail: e.target.value
              })
            );
          }}
        />
        <button><FaSearch /></button>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          <span>Cart</span>
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

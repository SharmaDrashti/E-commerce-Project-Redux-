
import React from "react";
import {
  FaShoppingBag,
  FaHeart,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-about">
          <h2><FaShoppingBag /> ShopEasy</h2>
          <p>
            Discover amazing products and enjoy
            a simple and comfortable shopping experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/cart">Shopping Cart</a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div>
            <FaFacebook />
            <FaInstagram />
            <FaHeart />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ShopEasy. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;

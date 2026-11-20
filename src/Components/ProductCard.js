
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import "../CSS/Product.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="product-badge">Popular</span>
      </div>

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span> (4.8)</span>
        </div>

        <div className="product-bottom">
          <h2>₹{product.price.toLocaleString("en-IN")}</h2>

          <button
            onClick={() => dispatch(addToCart(product))}
            title="Add to cart"
          >
            <FaShoppingCart />
          </button>
        </div>

        <button
          className="add-cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;

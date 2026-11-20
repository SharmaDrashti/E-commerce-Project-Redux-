
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} from "../Redux/CartSlice";

import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../CSS/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (

        <div className="empty-cart">
          <h2>Your Cart Is Empty!</h2>
          <p>Add some products to your shopping cart.</p>
          <Link to="/" className="shop-btn">
            Continue Shopping
          </Link>
        </div>

      ) : (

        <div className="cart-container">

          <div className="cart-items">

            {cartItems.map(item => (

              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <h4>₹{item.price.toLocaleString("en-IN")}</h4>

                  <div className="quantity">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    <FaTrash /> Remove
                  </button>
                </div>

                <h3 className="item-total">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </h3>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Cart Summary</h2>

            <div className="summary-row">
              <span>Total Products</span>
              <span>{cartItems.reduce(
                (total, item) => total + item.quantity, 0
              )}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <hr />

            <div className="summary-row grand-total">
              <span>Total Amount</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <button
              className="clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

            <Link to="/" className="continue-btn">
              Continue Shopping
            </Link>

          </div>

        </div>

      )}

    </div>
  );
};

export default Cart;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";
import "./CartItem.css";

function CartItem({ onHome, onShop }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <header className="cart-header">
        <h1>Paradise Nursery</h1>
        <button onClick={onShop}>Continue Shopping</button>
      </header>

      <section className="cart-content">
        <h2>Your Shopping Cart</h2>
        <p>{totalItems} item(s) in your cart</p>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Discover plants to make your space greener.</p>
            <button onClick={onShop}>Explore Plants</button>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map((item) => (
                <article className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-product-info">
                    <h3>{item.name}</h3>
                    <p>₹{item.price} each</p>
                  </div>

                  <div className="quantity-controls">
                    <button
                      aria-label={`Decrease ${item.name} quantity`}
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <strong>₹{item.price * item.quantity}</strong>

                  <button
                    className="remove-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>

            <div className="cart-total">
              <h3>Total: ₹{total}</h3>
              <button onClick={() => window.alert("Thank you for visiting Paradise Nursery!")}>
                Checkout
              </button>
            </div>
          </>
        )}

        <button className="back-home-button" onClick={onHome}>
          Back to Home
        </button>
      </section>
    </main>
  );
}

export default CartItem;

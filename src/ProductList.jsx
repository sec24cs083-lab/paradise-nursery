
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b7c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Monstera",
    category: "Indoor Plants",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Succulents",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Air Purifying",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList({ onHome, onCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="shop-page">
      <header className="shop-header">
        <button onClick={onHome}>Home</button>
        <h1>Paradise Nursery</h1>
        <button onClick={onCart}>Cart ({cartCount})</button>
      </header>

      <section className="shop-intro">
        <p className="eyebrow">GROW SOMETHING BEAUTIFUL</p>
        <h2>Find Your Perfect Plant</h2>
        <p>Bring home greenery for every corner of your life.</p>
      </section>

      {["Air Purifying", "Flowering Plants", "Indoor Plants", "Succulents"].map(
        (category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          return (
            <section className="product-section" key={category}>
              <h2>{category}</h2>

              <div className="product-grid">
                {categoryProducts.map((product) => {
                  const added = cartItems.some(
                    (item) => item.id === product.id
                  );

                  return (
                    <article className="product-card" key={product.id}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />

                      <div className="product-details">
                        <h3>{product.name}</h3>
                        <p className="product-category">
                          {product.category}
                        </p>
                        <p className="product-price">
                          ₹{product.price}
                        </p>

                        <button
                          disabled={added}
                          onClick={() => dispatch(addItem(product))}
                        >
                          {added ? "Added to Cart" : "Add to Cart"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        }
      )}
    </main>
  );
}

export default ProductList;

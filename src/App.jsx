
import React, { useState } from "react";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  if (page === "products") {
    return (
      <ProductList
        onHome={() => setPage("home")}
        onCart={() => setPage("cart")}
      />
    );
  }

  if (page === "cart") {
    return (
      <CartItem
        onHome={() => setPage("home")}
        onShop={() => setPage("products")}
      />
    );
  }

  return (
    <main className="landing-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <button onClick={() => setPage("products")}>
          Explore Plants
        </button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">BRING NATURE HOME</p>
          <h1>Grow Your Own Paradise</h1>
          <p>
            Discover beautiful plants that bring freshness,
            calmness, and natural beauty into your everyday life.
          </p>
          <button
            className="primary-button"
            onClick={() => setPage("products")}
          >
            Get Started
          </button>
        </div>
      </section>

      <AboutUs />
    </main>
  );
}

export default App;

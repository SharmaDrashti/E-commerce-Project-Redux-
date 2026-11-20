
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import "../CSS/Home.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    description: "Premium sound quality headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    category: "Electronics",
    description: "Modern smartwatch for everyone",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2999,
    category: "Fashion",
    description: "Comfortable everyday running shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    id: 4,
    name: "Digital Camera",
    price: 15999,
    category: "Electronics",
    description: "Capture your beautiful memories",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
  },
  {
    id: 5,
    name: "Travel Backpack",
    price: 1499,
    category: "Fashion",
    description: "Stylish backpack for everyday use",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 999,
    category: "Fashion",
    description: "Trendy sunglasses collection",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
  },
  {
    id: 7,
    name: "Premium Laptop",
    price: 55999,
    category: "Electronics",
    description: "Powerful laptop for work and gaming",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    description: "Portable speaker with clear sound",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
  },
  {
    id: 9,
    name: "Gaming Headset",
    price: 3499,
    category: "Electronics",
    description: "Comfortable headset for gaming",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500"
  },
  {
    id: 10,
    name: "Mens Casual Jacket",
    price: 2299,
    category: "Fashion",
    description: "Stylish jacket for everyday wear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
  },
  {
    id: 11,
    name: "Womens Handbag",
    price: 1899,
    category: "Fashion",
    description: "Elegant handbag for every occasion",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
  },
  {
    id: 12,
    name: "Running Sneakers",
    price: 2799,
    category: "Fashion",
    description: "Lightweight and comfortable sneakers",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500"
  },
  {
    id: 13,
    name: "Modern Table Lamp",
    price: 1299,
    category: "Home & Living",
    description: "Beautiful lamp for your bedroom",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
  },
  {
    id: 14,
    name: "Decorative Plant",
    price: 599,
    category: "Home & Living",
    description: "Fresh style for your living space",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"
  },
  {
    id: 15,
    name: "Modern Chair",
    price: 4999,
    category: "Home & Living",
    description: "Comfortable chair for your home",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500"
  },
  {
    id: 16,
    name: "Coffee Maker",
    price: 3299,
    category: "Home & Living",
    description: "Enjoy fresh coffee every morning",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"
  },
  {
    id: 17,
    name: "Camera Lens",
    price: 8999,
    category: "Electronics",
    description: "Capture beautiful professional photos",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
  },
  {
    id: 18,
    name: "Classic Wrist Watch",
    price: 2199,
    category: "Fashion",
    description: "Elegant watch with a premium design",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500"
  }
];

const Home = () => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {

    const handleSearch = (event) => {
      setSearch(event.detail);
    };

    window.addEventListener("productSearch", handleSearch);

    return () => {
      window.removeEventListener("productSearch", handleSearch);
    };

  }, []);

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;

  });

  return (

    <div className="home">

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            WELCOME TO SHOPEASY
          </span>

          <h1>
            Discover Your
            <br />
            <span>Perfect Style</span>
          </h1>

          <p>
            Explore amazing products, great prices
            and a shopping experience you will love.
          </p>

          <a href="#products" className="hero-btn">
            Explore Collection →
          </a>

        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="features">

        <div className="feature-box">
          <span>🚚</span>
          <div>
            <h3>Free Delivery</h3>
            <p>On selected orders</p>
          </div>
        </div>

        <div className="feature-box">
          <span>💎</span>
          <div>
            <h3>Best Quality</h3>
            <p>Premium products</p>
          </div>
        </div>

        <div className="feature-box">
          <span>🔒</span>
          <div>
            <h3>Secure Shopping</h3>
            <p>Safe experience</p>
          </div>
        </div>

      </section>

      {/* PRODUCTS SECTION */}

      <section className="products-section" id="products">

        <div className="section-heading">

          <span>OUR COLLECTION</span>

          <h2>Explore Our Products</h2>

          <p>
            Find something special for yourself.
          </p>

        </div>

        {/* CATEGORY FILTER */}

        <div className="category-buttons">

          {[
            "All",
            "Electronics",
            "Fashion",
            "Home & Living"
          ].map((item) => (

            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>

        {/* PRODUCT COUNT */}

        <p className="product-count">
          Showing {filteredProducts.length} Products
        </p>

        {/* PRODUCT CARDS */}

        <div className="product-grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))

          ) : (

            <h3 className="no-products">
              No products found!
            </h3>

          )}

        </div>

      </section>

    </div>

  );

};

export default Home;

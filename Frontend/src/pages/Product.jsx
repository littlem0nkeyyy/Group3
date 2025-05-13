import React from "react";
import "../assets/Styles/SearchBar.css";
import "./CSS/Product.css";
const Product = () => {
  return (
    <body>
      <div class="container">
        <aside class="sidebar">
          <h1>Category</h1>
          <p class="results">Showing 1 - 3 of all products</p>

          <label>
            <input type="checkbox" /> Kind of Product
          </label>
          <label>
            <input type="checkbox" /> Date of Product
          </label>

          <input type="text" placeholder="Type and narrow result: " />
        </aside>

        <main class="main-content">
          <div class="filters filter-right">
            <div class="search">
              <input
                class="search-bar"
                type="text"
                placeholder="Search products..."
                oninput="filterProducts(event)"
              />
              <button claas="search-button">Search</button>
            </div>
            <button class="cart-button">🛒</button>
          </div>
          <div class="tags">
            <div class="tag">Filter X</div>
            <select>
              <option>Sort by</option>
            </select>
          </div>

          <div class="product-grid">
            <div class="product-card">
              <button class="wishlist">♡</button>
              <img src="../assets/1.jpg" alt="Rau Ngót" />
              <h3>Rau Ngót</h3>
              <p class="price">
                Price: <strong>10.00</strong>
              </p>
              <p class="shipping">✔️ Free Shipping in Orders Over 250.000VND</p>
              <button class="choose-btn">Choose Options</button>
            </div>

            <div class="product-card">
              <button class="wishlist">♡</button>
              <img src="../assets/2.jpg" alt="Rau Muống" />
              <h3>Rau Muống</h3>
              <p class="price">
                Price: <strong>9.00</strong>
              </p>
              <p class="shipping">✔️ Free Shipping in Orders Over 250.000VND</p>
              <button class="choose-btn">Choose Options</button>
            </div>

            <div class="product-card">
              <button class="wishlist">♡</button>
              <img src="../assets/3.jpg" alt="Rau Cải" />
              <h3>Rau Cải</h3>
              <p class="price">
                Price: <strong>8.00</strong>
              </p>
              <p class="shipping">✔️ Free Shipping in Orders Over 250.000</p>
              <button class="choose-btn">Choose Options</button>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Product;

/* Đây là bản react 
File: ProductCard
import React from 'react';
import './CSS/Product.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h4 className="product-name">{name}</h4>
      <p className="gia">Price:</p>
      <p className="price">${(price ?? 0).toFixed(2)}</p>
      <p className="free-shipping">✔️ Free Shipping in Orders Over 299.000 VND</p>
      <button className="choose-btn">Choose Options</button>
    </div>
  );
};

export default ProductCard;

File: ProductPage
import React from 'react';
import '../assets/Styles/SearchBar.css';
import ProductCard from '../components/ProductCard';
import product1 from '../assets/1.jpg';
import product2 from '../assets/2.jpg';
import product3 from '../assets/3.jpg';

const products = [
  {
    image: product1,
    name: 'Rau Ngót',
    price: 150,
  },
  {
    image: product2,
    name: 'Rau Muống',
    price: 150,
  },
  {
    image: product3,
    name: 'Rau Cải',
    price: 150,
  },
];

const ProductPage = () => {
  return (
    <div className="category-page">
      <aside className="sidebar">
        <h2>Category</h2>
        <p>Showing 1 - {products.length} of 4,889 products</p>
        <label><input type="checkbox" /> Kind Of Products</label>
        <label><input type="checkbox" /> Date of Products</label>
        <input className="search-box" type="text" placeholder="Type and narrow result..." />
      </aside>

      <main className="main-content">
        <div className="filters">
          <select className="sort-dropdown">
            <option>Sort by</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
*/

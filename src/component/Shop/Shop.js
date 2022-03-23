import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [addTocart, setAddTocart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const cart = (product) => {
    const newCart = [...addTocart, product];
    setAddTocart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product product={product} handleAddToCart={cart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3>order summary</h3>
        <p>Total added {addTocart.length}</p>
      </div>
    </div>
  );
};

export default Shop;

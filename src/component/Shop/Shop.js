import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
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
          <Product
            key={product.id}
            product={product}
            handleAddToCart={cart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={addTocart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

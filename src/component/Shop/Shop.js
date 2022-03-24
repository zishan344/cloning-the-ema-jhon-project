import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
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
  useEffect(() => {
    const storedCart = getStoredCart(products.id);
    for (const id in storedCart) {
      const addedProduct = products.find((p) => p.id === id);
      console.log(addedProduct);
    }
  }, [products]);
  const cart = (product) => {
    const newCart = [...addTocart, product];
    setAddTocart(newCart);
    addToDb(product.id);
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

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product, handleAddToCart }) => {
  const { name, price, sellar, ratings, img, id } = product;
  return (
    <div className="singal-product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>Sellar: {sellar}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button onClick={() => handleAddToCart(id)} className="btn-cart">
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;

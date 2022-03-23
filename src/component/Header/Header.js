import React from "react";
import images from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="full-nav">
      <div className="container">
        <img src={images} alt="" />
        <div className="navChild">
          <a href="/Order">Order</a>
          <a href="/OrderReview">Order Review</a>
          <a href="/ManageInventory">Manage Inventory</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

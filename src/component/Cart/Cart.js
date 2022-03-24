import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity + 1;
    total = total + product.price;
    shipping = shipping + product.shipping;
  }

  const tax = ((total + shipping) / 100) * 10;
  // console.log(cart);
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h3>order summary</h3>
      <p>Selected Items : {quantity}</p>
      <p>Total price :${total}</p>
      <p>Total shipping:${shipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h4>Grand Total : ${grandTotal}</h4>
    </div>
  );
};

export default Cart;

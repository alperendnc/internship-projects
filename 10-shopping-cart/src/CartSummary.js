import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./shopping.css"; 

function CartSummary() {
  const { cartItems, removeFromCart, totalItems, totalPrice } =
    useContext(CartContext);

  return (
    <div className="cart-summary">
        <div className="totals">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems} </p>
      <p>Total Price: ${totalPrice.toFixed(2)} </p>
      {cartItems.length === 0 && <p className="empty-cart">No items in cart</p>}
      </div>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>
            {item.name} - ${item.price}
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CartSummary;
